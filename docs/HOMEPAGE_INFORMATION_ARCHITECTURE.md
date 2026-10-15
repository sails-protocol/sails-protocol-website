# Sails Protocol Homepage Information Architecture

Status: approved implementation map pending copy and UI execution  
Reviewed: 2026-10-13  
Depends on: `PRODUCT_TRUTH_MATRIX.md`

## Homepage responsibility

The homepage explains the Sails Protocol as a whole and leads visitors to the first concrete developer product, the Sails P2P Trading SDK.

It must help a new visitor understand, in one continuous reading path:

1. What Sails is.
2. What market problem it addresses.
3. What economic coordination means.
4. Where Sails sits in a technical stack.
5. What exists today.
6. How a developer can start.
7. What is still being developed or researched.

The homepage is not the complete documentation. It provides enough truth for comprehension and links to deeper pages without hiding important boundaries.

## Primary audiences

The homepage serves five audiences through one shared narrative:

| Audience | First question | Primary destination |
| --- | --- | --- |
| Wallet and fintech product teams | What can Sails add without replacing our stack? | P2P Trading SDK |
| Developers and infrastructure teams | What are the contracts, packages and boundaries? | Documentation and GitHub |
| Bitcoin and stablecoin ecosystems | How does Sails coordinate across different rails? | Anatomy and integrations |
| Strategic partners and investors | What problem is large enough to matter, and what exists now? | Protocol, evidence and roadmap |
| Agent and tool developers | How can tools consume Sails without gaining protocol authority? | Developer interfaces and Explore with AI |

## Narrative spine

Every homepage section must advance this argument:

> Applications remain economic islands. Sails gives independently replaceable systems a shared economic language. The P2P Trading SDK is the first concrete developer product built on that protocol.

No section may interrupt this argument with a secondary product before the first product has been introduced.

## Final homepage sequence

### 0. Global navigation

Purpose: provide access to the protocol, products, developer resources, evidence and languages without reproducing the entire sitemap.

Recommended desktop structure:

- Home
- Protocol
  - What is Sails
  - Anatomy
  - Modules
  - Integrations
  - Roadmap
- Products
  - P2P Trading SDK: Current
  - Sails Market: Reference
  - UI Kit: maturity label required
  - Sails Node: Direction
- Developers
  - Documentation
  - API Reference
  - Open Extension
  - GitHub
- Case Studies
- Blog
- Safety Center
- Language selector
- Primary CTA: Get started

Navigation rules:

- P2P Trading SDK must be visually identifiable as the current product.
- Coming-soon products require a visible maturity label.
- GitHub must point to the canonical Sails Protocol monorepo for protocol development, not only the website repository.
- The active page must be indicated.
- Mobile navigation uses collapsed groups instead of displaying every submenu at once.

### 1. Hero: identity and current entry point

Question answered: What is Sails?

Required hierarchy:

1. Sails Protocol
2. Economic Coordination Protocol
3. One plain-language explanation
4. Current developer entry point
5. Protocol exploration entry point
6. No token, no DAO, no new blockchain

Canonical message:

> Open infrastructure for building interoperable P2P financial marketplaces across wallets, applications and independently replaceable execution stacks.

Support message:

> Keep your wallet stack. Plug into Sails.

Primary CTA:

- Explore P2P Trading SDK

Secondary CTA:

- Understand the protocol

Hero visual responsibility:

- Show multiple independent participants coordinating through shared Sails semantics.
- Show movement or exchange of meaning and evidence.
- Avoid implying that Sails owns the participants, liquidity or settlement rails.
- Keep visual labels limited to Application, Market, Agent and Rail.

What leaves the hero:

- Explore with AI.
- Detailed module lists.
- Node commercial offer.
- Future SDKs.

### 2. Problem: open custody is not an open market

Question answered: Why does Sails need to exist?

Core statement:

> Your keys may be portable. Your market and economic history usually are not.

The section explains four isolated surfaces:

- Discovery and liquidity.
- Reputation and trade history.
- Negotiation and dispute context.
- Settlement coordination.

Visual responsibility:

- Show two or three independent applications as separate economic islands.
- Each island has its own users, offers, history and reputation.
- No connection should be shown yet.

Copy discipline:

- Open-source and non-custodial do not automatically mean interoperable.
- Portable reputation is a direction, not a current cross-deployment claim.
- Do not imply that Sails supplies liquidity.

### 3. Solution: coordination is the product

Question answered: What changes with Sails?

Core statement:

> Sails defines shared economic meaning while identity, transport, custody and settlement remain replaceable.

The solution is explained through five semantic elements:

1. Intent.
2. Authority.
3. Conditions.
4. Evidence.
5. Outcome.

Visual responsibility:

- Transform the economic islands into participants connected by shared semantics.
- Show Sails in the coordination layer, not as the owner of assets or infrastructure.
- Show evidence returning from external execution.

Boundary statement:

> Sails should connect economic islands without becoming another island itself.

This section replaces the current generic “open market participation” block with a clearer before-and-after argument.

### 4. Anatomy: stable semantics, replaceable components

Question answered: Where does Sails sit technically?

Homepage anatomy uses progressive disclosure with six visible layers:

1. Applications and Integrators.
2. SDKs and Integration Surfaces.
3. Open Extension.
4. Semantic Kernel.
5. Pure Core, Runtime and Open Modules.
6. Providers, Adapters and Rails.

Required distinction:

- Meaning moves through explicit contracts.
- Execution happens outside the Pure Core.
- Evidence returns without granting infrastructure protocol authority.

Primary link:

- Explore the complete anatomy

The homepage diagram remains concise. Detailed invariants, ownership rules and implementation topology live on the Anatomy page.

### 5. Current product: P2P Trading SDK

Question answered: What can a developer use today?

This is the strongest product section after the hero.

Required content:

- Current maturity label.
- Package name: `@satsails/p2p-trading-sdk`.
- First concrete Sails developer product.
- Works with an existing wallet, fintech or web platform.
- Keeps custody, signing, settlement choices and user experience under the integrator's control.

Capability summary:

- Express intent.
- Discover compatible opportunities.
- Negotiate terms.
- Match capabilities.
- Coordinate external settlement.
- Record attributable evidence and outcomes.

Primary CTA:

- Explore the SDK

Secondary CTAs:

- Install package
- Read documentation
- View source

Visual responsibility:

- Show Wallet, Fintech and Web Platform entering one SDK coordination flow.
- Show Bitcoin, Lightning, Spark, Liquid and stablecoins as replaceable capability targets with individual maturity, not universal current support.

Detailed lifecycle, implementation steps and provider matrices remain on the dedicated SDK page.

### 6. Protocol composition: modules and SDK family

Question answered: How does Sails expand without fragmenting semantics?

This section combines the current separate SDK-family and module-family presentations into one coherent model.

Required relationship:

```text
Protocol semantics
        ↓
Open modules organize capabilities
        ↓
SDKs compose focused developer products
        ↓
Applications implement product experiences
```

Module family:

- OpenP2P
- OpenSettlement
- OpenIdentity
- OpenReputation
- OpenProof
- OpenLiquidity
- OpenAgents
- OpenFinance

SDK family presentation:

- P2P Trading SDK: Current.
- Future SDKs: Direction or Coming soon only when the product name and scope are governed.

Required rule:

> Primitive is not Module. Module is not Provider. Provider is not Product.

Required principle:

> TypeScript is first, not authoritative. Interfaces can multiply. Semantics should not.

The homepage may show all modules, but each module requires an explicit maturity label derived from repository evidence.

### 7. Integrations and evidence

Question answered: What real paths exist, and what remains replaceable?

This section uses evidence cards rather than a wall of technology logos.

Recommended categories:

- Wallet and signing stacks.
- Transport.
- Settlement rails.
- Identity and history.
- Advisory intelligence.

Each item must display one of:

- Current.
- Demonstrated.
- In development.
- Research / Direction.

Evidence examples that may be referenced when linked to canonical records:

- Bitcoin MULTISIG small-value mainnet rehearsal.
- WDK_USDT_EVM testnet path.
- Arkade / VTXO testnet path.

Technology names such as Lightning, Liquid, Spark, Pears, QVAC, Pubky, Nostr and BDK require individual wording. Appearance in the diagram does not mean production support.

Primary link:

- Explore integrations and evidence

### 8. Implementations and case studies

Question answered: Where is Sails exercised today?

Current reference surfaces:

- Satsails Wallet: major reference implementation, integrator and validation environment.
- Sails Market: protocol-native reference web market surface.

Rules:

- Clearly label both as reference implementations.
- Do not imply that either owns protocol semantics.
- Do not display third-party wallets as adopters until adoption is confirmed.

Primary link:

- View case studies

### 9. Developer and agent interfaces

Question answered: How can humans and tools explore or interact with Sails?

Current surfaces:

- Package and SDK.
- API.
- GitHub source and documentation.

Evolving surfaces:

- Canonical CLI.
- MCP.
- WebMCP.
- Canonical Tool Surface.

Required statement:

> Agent access should not mean agent authority.

Explore with AI belongs inside this developer section, after the protocol and current product are understood.

AI cards must:

- Link to a real structured context or prompt path.
- Use Available, Experimental or Coming soon instead of marking every assistant Active.
- State that AI explanations are not canonical protocol authority.
- Avoid partnership or endorsement implications.

### 10. Roadmap: reality before direction

Question answered: What exists now, and what comes next?

Homepage roadmap remains compact and links to the complete roadmap page.

Recommended tracks:

1. Protocol foundation: Current.
2. P2P Trading SDK: Current / In development.
3. Open market coordination: In development.
4. Portable identity and reputation: Research / Direction unless evidence changes.
5. Agent and tool interfaces: In development / Direction by surface.
6. Expanded SDK family and independent implementations: Research / Direction.

Required closing statement:

> The roadmap expands capabilities without changing the meaning of the protocol.

Do not use speculative dates on the homepage.

### 11. Final developer call to action

Question answered: What should I do next?

The final section offers three clear routes:

| Route | Purpose | Destination |
| --- | --- | --- |
| Build | Install and integrate the current SDK | Getting Started / SDK documentation |
| Verify | Inspect source, tests, RFCs and evidence | Canonical GitHub monorepo |
| Understand | Learn protocol concepts and anatomy | Protocol documentation |

Primary CTA:

- Start with the P2P Trading SDK

Supporting principle:

> Build against contracts, evidence and shared semantics.

## Content moved away from the homepage

The following content remains accessible but should not occupy a full homepage section:

| Content | New location | Homepage treatment |
| --- | --- | --- |
| Managed Sails Node | Sails Node product page and roadmap | Small Direction card or navigation label |
| White-label Node | Sails Node product page | Direction only |
| Operator portal | Preview route | Do not use as the primary homepage CTA |
| Full node benefits and plans | Product page | Omitted until offer is governed |
| Complete provider and rail matrix | Integrations and SDK pages | Evidence summary only |
| Portable reputation mechanics | Identity/Reputation or roadmap page | Problem statement plus Direction label |
| Detailed SDK lifecycle | P2P Trading SDK page | Six-step summary only |
| Full module descriptions | Anatomy or modules page | Compact capability map |
| Full roadmap backlog | Roadmap page and GitHub | Six-track summary |

## Current homepage migration map

| Current block | Decision | Reason |
| --- | --- | --- |
| Hero | Keep and rewrite | Correct identity, but CTA hierarchy and copy need sharper current-product focus |
| Explore with AI directly after hero | Move | It interrupts the problem and solution narrative |
| Economic-islands problem | Keep and expand | Core reason for the protocol to exist |
| Open market participation | Merge into solution | Needs a clearer before-and-after explanation |
| Anatomy | Keep | Essential for technical credibility |
| SDK family | Reframe | Lead with the current P2P Trading SDK, then show future products with maturity |
| Module family | Merge with SDK composition | Prevents modules and products from appearing equivalent |
| Sails Node commercial block | Move to internal page | Managed and white-label offers are directions, not current products |
| Roadmap | Keep and correct statuses | Must follow repository evidence |
| Footer only | Add final CTA before footer | The page currently ends without a strong developer next step |

## Homepage density and progressive disclosure

Desktop target:

- One primary message per viewport.
- Body text blocks between 55 and 75 characters per line where practical.
- No more than two competing calls to action in one section.
- Technical diagrams paired with a short conclusion, not a second essay.

Mobile target:

- Narrative order remains identical.
- Diagram labels remain readable without zoom.
- Complex diagrams transform into vertical flows or staged cards.
- Status is always written as text and never communicated only through color.
- Secondary details move behind explicit links, not hidden hover states.

## Homepage success test

After three minutes, a technically informed visitor should be able to answer:

1. Sails is an Economic Coordination Protocol.
2. It addresses isolated markets and duplicated coordination.
3. It does not replace custody, transport or settlement stacks.
4. The P2P Trading SDK is the first current developer product.
5. TypeScript is the first implementation, not the protocol authority.
6. Modules, providers and products are different layers.
7. Satsails Wallet and Sails Market are reference implementations.
8. Several capabilities remain in development or research.
9. GitHub and canonical documentation govern technical truth.

If the visitor instead concludes that Sails is a wallet, exchange, blockchain, universal liquidity network or mega-stack, the homepage has failed.
