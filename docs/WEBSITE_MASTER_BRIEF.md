# Sails Protocol Website — Master Brief

Status: approved direction for implementation  
Source of truth: GitHub  
Framework: Astro  
Languages: English, Portuguese and Spanish

## Purpose

The website must explain Sails Protocol as a whole, then lead visitors to its first concrete developer product: the Sails P2P Trading SDK.

The narrative must answer, in this order:

1. What problem exists today?
2. What is Sails Protocol?
3. What does economic coordination mean?
4. How is Sails organized?
5. What is available now?
6. How can a wallet or application adopt it?
7. What comes next?

The primary positioning is:

> **Sails Protocol — Economic Coordination Protocol.**

Supporting statement:

> Open infrastructure for building interoperable P2P financial marketplaces across wallets, applications, settlement networks and financial technologies.

Adoption statement:

> **Keep your wallet stack. Plug into Sails.**

Sails does not introduce a token, DAO or new blockchain. It coordinates existing capabilities without becoming another economic island.

## Information architecture

Primary navigation:

- Protocol
- Anatomy
- P2P Trading SDK
- SDKs
- Integrations
- Roadmap
- Developers
- Documentation
- GitHub
- Explore with AI

Primary pages:

```text
Homepage
├─ Protocol
├─ Anatomy
├─ SDKs
│  ├─ P2P Trading SDK
│  └─ Future SDKs — Coming soon
├─ Integrations
├─ Roadmap
├─ Developers
└─ Explore with AI
```

The homepage introduces the whole protocol. The P2P Trading SDK has a dedicated internal page with its own architecture, trade lifecycle, integration model, providers, adapters, maturity and documentation.

## Homepage sequence

1. Hero: Sails Protocol — Economic Coordination Protocol
2. The problem: open custody does not automatically create an open market
3. The thesis: coordination is the product
4. Protocol anatomy overview
5. Semantic Kernel
6. Open modules and primitives
7. First developer product: P2P Trading SDK
8. Open market simulation across wallets and applications
9. Portable identity, attributable history and reputation
10. Wallet, transport, settlement and agent integrations
11. SDK family
12. Roadmap
13. Current reality and evidence
14. Documentation, GitHub and final call to action

## Roadmap

Roadmap items are organized by capability and evidence rather than speculative dates.

Every item must use one of these states:

- **Current** — implemented and available in the current source of truth
- **Demonstrated** — working in a reference implementation or validated path
- **In Development** — actively being built but not yet generally available
- **Research / Direction** — architectural direction or active research

Roadmap tracks:

### Foundation — Current

- Semantic Kernel and protocol principles
- Sails Core
- Protocol anatomy and fundamental contracts
- TypeScript-first interfaces
- Adapter and provider boundaries

### First Developer Product — Current / In Development

- Sails P2P Trading SDK
- P2P trade lifecycle
- Integration with existing wallets
- Wallet and settlement adapters
- Satsails Wallet as a reference implementation
- Documentation, examples and test environments

### Open Market Coordination — In Development

- Interoperable offer discovery
- Negotiation across independent applications
- Shared protocol-level market coordination
- Attributable economic history
- Additional rails, assets and providers

### Portable Identity and Reputation — In Development / Direction

- Participant identity based on proofs of control
- Re-verifiable economic events
- Portable history between compatible applications
- Pubky and Nostr interoperability paths
- Local policies for reputation interpretation

### Open Agents — Demonstrated / In Development

- QVAC as a local intelligence provider
- Risk analysis and offer screening
- Social-engineering detection
- Dispute-evidence recommendations
- Explicit AgentGrant and authority boundaries
- API, CLI, MCP and WebMCP interfaces

### SDK Family — Direction

- Additional focused SDK products
- Future Rust and Go implementations
- Swift and Kotlin clients or bindings
- Web, React Native, iOS and Android surfaces
- The same economic semantics across implementations

### Expanded Economic Coordination — Research / Direction

- OpenSettlement
- OpenLiquidity
- OpenIdentity
- OpenReputation
- OpenProof
- OpenAgents
- OpenFinance
- Expanded compatibility with Bitcoin, Lightning, Liquid, Spark, stablecoins and external infrastructure

Roadmap closing statement:

> **The roadmap expands capabilities without changing the meaning of the protocol.**

## Visual direction

The official Sails Protocol Blog is the visual foundation. The site must feel like the same brand and product family, with a more modern infrastructure-oriented expression.

Reference: <https://sails-protocol-blog.netlify.app/pt-BR/>

Observed core palette:

| Role | Token | Value |
|---|---|---|
| Main canvas | `--sails-canvas` | `#10161d` |
| Raised navigation | `--sails-nav` | `#1c2835` |
| Primary text | `--sails-text` | `#e7edf3` |
| Structural line | `--sails-line` | `#303d4b` |
| Primary accent | `--sails-orange` | `#ff8a16` target family |
| Coordination accent | `--sails-blue` | blue used for diagrams, routes and active states |

The exact orange and blue values may be normalized from the blog source during implementation, but their visual relationship must remain recognizable.

### Navigation

The menu should preserve the blog's dark blue structure while adding a restrained glass treatment:

- translucent dark navy surface
- `backdrop-filter: blur(...)`
- thin blue-gray border
- subtle shadow and highlight
- high legibility in dark and light modes
- compact language selector for EN / PT / ES
- clear active-page state
- no excessive glow or generic AI visual treatment

Glass is an interface treatment, not the identity of the entire page. Content areas remain crisp, readable and fast.

### Illustration system

Use original vector illustrations and diagrams as the primary visual language:

- layered protocol anatomy
- wallet-to-wallet market coordination
- portable identity and history
- adapter/provider boundaries
- settlement and transport rails
- agent authority flow
- roadmap progression

Illustrations use the brand's navy, blue and orange palette. They should explain real architecture and economic flows rather than decorate empty space.

Motion should clarify direction, state and causality: flowing routes, progressive layer disclosure, capability matching and evidence returning through the stack. Reduced-motion preferences must be supported.

## Localization

The website ships in:

- English: `/en/`
- Portuguese: `/pt-BR/`
- Spanish: `/es/`

English is the canonical technical source. Portuguese and Spanish are maintained translations of the same semantic content.

Localization rules:

- Keep protocol names, package names and code identifiers unchanged.
- Translate explanations, navigation, metadata and calls to action.
- Do not translate terms when translation changes protocol meaning.
- Every content item has a stable content ID shared by all locales.
- Missing translations must fail validation or fall back visibly during development; production must not silently mix languages.
- `hreflang`, localized canonical URLs, sitemap entries and Open Graph metadata are required.

Suggested Astro structure:

```text
src/
├─ components/
│  ├─ diagrams/
│  ├─ navigation/
│  ├─ protocol/
│  ├─ roadmap/
│  ├─ sdk/
│  └─ ui/
├─ content/
│  ├─ en/
│  ├─ pt-BR/
│  └─ es/
├─ i18n/
├─ layouts/
├─ pages/
│  └─ [locale]/
├─ styles/
└─ assets/
   └─ illustrations/
```

## Integration language and maturity

The website must distinguish implementation from architectural fit.

- WDK may be presented as integrated or demonstrated only where current repository evidence supports it.
- Pears/HyperDHT is a transport capability; transport does not own economic state or authority.
- QVAC provides advisory intelligence; authorization remains explicit and deterministic.
- Pubky and Nostr are identity/interoperability directions unless implementation evidence changes their status.
- BDK and other wallet stacks are integration targets until an adapter is implemented and evidenced.
- Logos must never imply adoption, endorsement or partnership without evidence.

Use this distinction throughout:

> **Current · Demonstrated · In Development · Research / Direction**

## Explore with AI

The site may expose reading paths for Claude, Codex, Gemini and Grok.

This section is an interface for exploring Sails documentation, not a claim of partnership or protocol integration. Each option must disclose whether it is available, experimental or coming soon.

Suggested prompts:

- What problem does Sails solve?
- Explain the Sails Protocol Anatomy.
- How does the P2P Trading SDK work?
- What remains under the wallet's control?
- Explain the Semantic Kernel.
- How does portable reputation work?
- How can my wallet integrate Sails?

## Technical direction

- Astro is the website framework.
- GitHub is the source of truth for code, copy, diagrams and maturity status.
- Prefer static output and Astro components.
- Use islands only for interactions that require client-side JavaScript.
- Vector diagrams should be built as accessible SVG or semantic HTML/CSS components.
- Preserve fast loading, SEO, accessibility and reduced-motion support.
- Netlify will be the deployment target when the service is available again.
- Deployment configuration must remain replaceable and must not shape protocol content.

## Implementation order

1. Convert the current prototype to Astro.
2. Establish design tokens from the Sails blog.
3. Add EN / PT-BR / ES routing and content schema.
4. Build global navigation and glass treatment.
5. Implement homepage narrative.
6. Implement Anatomy page and core diagrams.
7. Implement P2P Trading SDK page.
8. Implement SDK family, integrations and roadmap pages.
9. Add Explore with AI.
10. Validate copy against the current GitHub documentation.
11. Run accessibility, performance, SEO and localization checks.
12. Connect GitHub deployment to Netlify.

## Governance

The website is explanatory, while canonical protocol documents remain authoritative. Any claim about current functionality, maturity, compatibility or integration must be traceable to repository evidence.

The site must preserve these principles:

> **Different languages. Different interfaces. Same economic semantics.**

> **TypeScript is first, not authoritative.**

> **Interfaces can multiply. Semantics should not.**

> **Adopt capabilities, not dependencies as architecture.**

