'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Menu, Moon, Sun, X } from 'lucide-react';

const rails = [
  { label: 'Identity', items: ['Pubky', 'PKARR', 'Ed25519'] },
  { label: 'Transport', items: ['Pear', 'Nostr', 'Iroh', 'HTTP'] },
  { label: 'Settlement', items: ['Bitcoin', 'Lightning', 'Liquid', 'Stablecoins'] },
];
const semantics = ['Intent', 'Authority', 'Conditions', 'Evidence', 'Outcome'];
const modules = [
  ['OpenP2P', 'First module', 'Current'], ['OpenSettlement', 'Execution boundaries', 'Demonstrated'],
  ['OpenIdentity', 'Participant authority', 'Demonstrated'], ['OpenReputation', 'Outcome-based trust', 'In development'],
  ['OpenProof', 'Verifiable evidence', 'In development'], ['OpenLiquidity', 'Opportunity discovery', 'In development'],
  ['OpenAgents', 'Bounded automation', 'Research / direction'], ['OpenFinance', 'Future economic primitives', 'Research / direction'],
];
const agentTools = [
  ['Cursor', '/logos/cursor.svg'], ['Claude Code', '/logos/claudecode.svg'], ['Codex', null],
  ['OpenCode', '/logos/opencode.svg'], ['Grok', null], ['OpenRouter', '/logos/openrouter.svg'],
];

function SailsMark() {
  return <span className="brand-mark" aria-hidden="true"><span className="brand-sail brand-sail-a" /><span className="brand-sail brand-sail-b" /></span>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sails Protocol home"><SailsMark /><span><strong>SAILS</strong><small>PROTOCOL</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#protocol">Protocol</a><a href="#openp2p">OpenP2P</a><a href="#architecture">Architecture</a><a href="#status">Status</a></nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Use ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="github-link" href="https://github.com/alan-schramm/Sails-Protocol" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{['Protocol', 'OpenP2P', 'Architecture', 'Status'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Open economic coordination infrastructure</div>
          <h1>Different stacks.<br /><em>Shared economic meaning.</em></h1>
          <p className="hero-intro">Sails Protocol helps wallets, agents and applications coordinate shared economic interactions without forcing them onto the same underlying stack.</p>
          <div className="hero-actions"><a className="button button-primary" href="#architecture">Explore architecture <ArrowDown size={16} /></a><a className="button button-quiet" href="https://satsails.mintlify.app/concepts/protocol-primitives" target="_blank" rel="noreferrer">Read the docs <ArrowUpRight size={15} /></a></div>
        </div>

        <div className="coordination-map" aria-label="Sails coordination architecture">
          <div className="map-rings" aria-hidden="true"><i /><i /><i /></div>
          {rails.map((rail, index) => <div className={`edge-cluster edge-${index + 1}`} key={rail.label}><span className="cluster-label">{rail.label}</span><div>{rail.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
          <div className="core-node"><SailsMark /><strong>SAILS</strong><span>Shared semantics</span></div>
          <span className="map-caption">Simple at the center. Open at the edges.</span>
        </div>

        <div className="hero-principle"><span>01</span><p><strong>No token. No DAO. No new blockchain.</strong> Sails coordinates existing capabilities instead of creating another ecosystem to migrate into.</p></div>
      </section>

      <section className="islands-section" id="protocol">
        <div className="section-heading"><span className="section-index">01 / The problem</span><h2>Open custody does not automatically create an open market.</h2><p>Wallets may be open and non-custodial while liquidity, trust and coordination remain trapped inside individual applications.</p></div>
        <div className="islands-visual">
          {['Wallet A', 'Wallet B', 'Wallet C'].map((wallet, index) => <article className="island" key={wallet}><div className="island-top"><span>0{index + 1}</span><i /></div><h3>{wallet}</h3><ul><li>Liquidity</li><li>Reputation</li><li>Trade history</li></ul><small>Application-bound market</small></article>)}
          <div className="island-divider"><span>Economic islands</span></div>
        </div>
        <div className="statement-pair"><blockquote>“Your keys may be portable.<br /><strong>Your market usually isn’t.</strong>”</blockquote><blockquote>“Your keys may be portable.<br /><strong>Your economic history usually isn’t.</strong>”</blockquote></div>
      </section>

      <section className="semantics-section" id="architecture">
        <div className="section-heading compact"><span className="section-index">02 / The protocol</span><h2>Coordination is the product.</h2><p>Sails defines the shared economic semantics. Identity, communication and settlement remain replaceable capabilities at the edges.</p></div>
        <div className="semantic-flow">{semantics.map((item, index) => <div className="semantic-step" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < semantics.length - 1 && <i aria-hidden="true" />}</div>)}</div>
        <div className="protocol-note"><p>The protocol should connect economic islands without becoming another island itself.</p><span>Stable semantics. Replaceable edges.</span></div>
      </section>

      <section className="p2p-section" id="openp2p">
        <div className="p2p-intro"><span className="section-index">03 / First implementation</span><div><p className="kicker">Sails OpenP2P</p><h2>Wallets shouldn’t have to become exchanges to participate in markets.</h2></div></div>
        <div className="p2p-layout">
          <div className="p2p-orbit" aria-label="OpenP2P coordination capabilities"><div className="orbit-core"><strong>OPEN<br/>P2P</strong><small>Current focus</small></div>{['Discovery','Offers','Negotiation','Escrow','Evidence','Disputes'].map((x,i)=><span key={x} style={{'--i':i} as React.CSSProperties}>{x}</span>)}</div>
          <div className="p2p-copy"><p>OpenP2P is the first concrete expression of the Sails thesis: a shared coordination surface for peer-to-peer markets across Bitcoin and stablecoin systems.</p><ul><li><span>01</span>Declare economic intent</li><li><span>02</span>Coordinate conditions and authority</li><li><span>03</span>Connect replaceable settlement capabilities</li><li><span>04</span>Produce an explicit economic outcome</li></ul><a className="text-link" href="https://satsails.mintlify.app/concepts/protocol-primitives" target="_blank" rel="noreferrer">Explore OpenP2P <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="modules-section">
        <div className="section-heading"><span className="section-index">04 / Modular by design</span><h2>One protocol.<br/>Focused modules.</h2><p>Each module owns a clear economic responsibility. Their presence here describes the architecture; their labels describe current maturity.</p></div>
        <div className="module-list">{modules.map(([name,desc,status],i)=><article key={name} className={i===0?'featured':''}><span className="module-number">0{i+1}</span><div><h3>{name}</h3><p>{desc}</p></div><span className={`status status-${status.toLowerCase().replaceAll(' ','-').replace('/','')}`}>{status}</span></article>)}</div>
      </section>

      <section className="interop-section">
        <div className="interop-head"><span className="section-index">05 / Development interoperability</span><h2>Same Sails semantics.<br/><em>Different implementations and interfaces.</em></h2></div>
        <div className="interop-grid">
          <article><span>Protocol implementations</span><h3>TypeScript</h3><p className="current-label">Current implementation</p><div className="future-items"><span>Rust <small>Direction</small></span><span>Go <small>Direction</small></span></div></article>
          <article><span>Application platforms</span><h3>Web · React Native</h3><p>Wallets, fintechs and market interfaces.</p><div className="future-items"><span>iOS</span><span>Android</span></div></article>
          <article><span>Native SDK targets</span><h3>Swift · Kotlin</h3><p>The minimum native surface required for each platform.</p></article>
          <article><span>Developer & agent interfaces</span><h3>API · CLI</h3><p>Canonical access without semantic drift.</p><div className="future-items"><span>MCP <small>Direction</small></span><span>WebMCP <small>Direction</small></span></div></article>
        </div>
        <div className="principles-row"><span>TypeScript is first, not authoritative.</span><span>Interfaces can multiply. Semantics should not.</span><span>Adopt capabilities, not dependencies as architecture.</span></div>
      </section>

      <section className="agents-section">
        <div className="agent-copy"><span className="section-index">06 / AI-native development</span><h2>Designed for human and agent workflows.</h2><p>Software is increasingly built and operated by people, applications and autonomous agents. Sails is evolving toward controlled, canonical interfaces for all three.</p><blockquote>Agent access should not mean agent authority.</blockquote></div>
        <div className="tool-ecosystem"><span className="tool-caption">Emerging AI developer ecosystem</span><div className="tool-grid">{agentTools.map(([name,src])=><div className="tool-logo" key={name}>{src?<img src={src} alt=""/>:<span>{name==='Codex'?'◎':'𝕏'}</span>}<strong>{name}</strong></div>)}</div><div className="tool-funnel"><span>API</span><span>CLI</span><span>MCP</span><span>WebMCP</span></div><div className="tool-core">Canonical tool surface <small>Same protocol semantics</small></div></div>
      </section>

      <section className="truth-section" id="status">
        <div className="truth-copy"><span className="section-index">07 / Protocol truth</span><h2>Reality before roadmap.</h2><p>Ambition matters. Evidence determines what we claim.</p></div>
        <div className="truth-statuses"><div><i className="dot-current"/><strong>Current</strong><span>Part of the official scope today.</span></div><div><i className="dot-demo"/><strong>Demonstrated</strong><span>Backed by concrete implementation evidence.</span></div><div><i className="dot-build"/><strong>In development</strong><span>Active technical work with known boundaries.</span></div><div><i className="dot-research"/><strong>Research / Direction</strong><span>A protocol direction, not a shipped capability.</span></div></div>
      </section>

      <section className="explore-section"><span className="section-index">08 / Explore Sails</span><h2>Understand it.<br/>Build with it.<br/>Verify it.</h2><div className="explore-links"><a href="https://satsails.gitbook.io/satsails-docs" target="_blank" rel="noreferrer"><span>Understand / Learn</span><strong>GitBook</strong><ArrowUpRight/></a><a href="https://satsails.mintlify.app/concepts/protocol-primitives" target="_blank" rel="noreferrer"><span>Build / Integrate</span><strong>Developer docs</strong><ArrowUpRight/></a><a href="https://github.com/alan-schramm/Sails-Protocol" target="_blank" rel="noreferrer"><span>Source / Truth / Verify</span><strong>GitHub</strong><ArrowUpRight/></a></div></section>

      <footer><a className="wordmark" href="#top"><SailsMark/><span><strong>SAILS</strong><small>PROTOCOL</small></span></a><p>Open economic coordination infrastructure.<br/><span>A reference ecosystem by the Satsails team.</span></p><span>© 2026 Sails Protocol</span></footer>
    </main>
  );
}
