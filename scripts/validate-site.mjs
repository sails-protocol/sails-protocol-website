import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(dist).filter(path => path.endsWith('.html'));
const errors = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(dist, file).replaceAll('\\', '/');
  if (name === 'index.html') continue;

  if (!html.includes('<link rel="canonical" href="https://sails.org/')) {
    errors.push(`${name}: canonical URL missing`);
  }
  for (const locale of ['en', 'pt-BR', 'es', 'x-default']) {
    if (!html.includes(`hreflang="${locale}"`)) errors.push(`${name}: hreflang ${locale} missing`);
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.startsWith('/_astro/') || href === '/favicon.svg') continue;
    const destination = href.endsWith('/') ? join(dist, href, 'index.html') : join(dist, href);
    if (!existsSync(destination)) errors.push(`${name}: broken internal link ${href}`);
  }
}

const localizedChecks = [
  ['pt-BR/index.html', 'Semânticas estáveis. Componentes substituíveis.'],
  ['es/index.html', 'Semánticas estables. Componentes reemplazables.'],
  ['pt-BR/explore-ai/index.html', 'Roteiro guiado de leitura do protocolo'],
  ['es/explore-ai/index.html', 'Ruta guiada de lectura del protocolo'],
];
for (const [file, expected] of localizedChecks) {
  if (!readFileSync(join(dist, file), 'utf8').includes(expected)) errors.push(`${file}: expected localized copy missing`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Site metadata, localization and internal links: PASS (${htmlFiles.length} pages)`);
