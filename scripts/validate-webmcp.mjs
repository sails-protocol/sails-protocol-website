import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const html = await readFile(new URL('../dist/en/index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script(?: [^>]*)?>([\s\S]*?)<\/script>/g)].map(match => match[1]);
const source = scripts.find(script => script.includes('sails.get_site_map'));
if (!source) throw new Error('WebMCP registration script was not emitted.');

const registered = [];
const document = {
  documentElement: { dataset: {} },
  modelContext: {
    async registerTool(tool) {
      registered.push(tool);
      return { name: tool.name };
    }
  }
};
vm.runInNewContext(source, { document, Promise, Object, String });
await new Promise(resolve => setTimeout(resolve, 0));

const expected = [
  'sails.get_site_map',
  'sails.get_protocol_overview',
  'sails.get_capability_maturity',
  'sails.find_resource'
];
if (registered.length !== expected.length) throw new Error(`Expected ${expected.length} tools, received ${registered.length}.`);
for (const name of expected) {
  const tool = registered.find(candidate => candidate.name === name);
  if (!tool) throw new Error(`Missing tool: ${name}`);
  if (!tool.annotations?.readOnlyHint || tool.annotations?.consequentialHint) throw new Error(`Unsafe annotations: ${name}`);
}

const siteMap = await registered.find(tool => tool.name === expected[0]).execute({});
const overview = await registered.find(tool => tool.name === expected[1]).execute({});
const maturity = await registered.find(tool => tool.name === expected[2]).execute({ capability:'webmcp' });
const search = await registered.find(tool => tool.name === expected[3]).execute({ query:'P2P SDK' });

if (!siteMap.routes.some(route => route.id === 'webmcp')) throw new Error('WebMCP route missing from site map.');
if (overview.firstProduct !== '@satsails/p2p-trading-sdk') throw new Error('Current SDK missing from overview.');
if (maturity.status !== 'experimental-prototype') throw new Error('WebMCP maturity is inaccurate.');
if (!search.matches.some(route => route.id === 'p2p-trading-sdk')) throw new Error('Resource search did not find the P2P SDK.');

console.log('WebMCP tool registration and read-only executions: PASS');
