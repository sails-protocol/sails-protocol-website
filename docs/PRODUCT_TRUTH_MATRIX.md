# Sails Protocol Website Product Truth Matrix

Status: working editorial authority for the official website  
Reviewed: 2026-10-13  
Primary source: canonical Sails Protocol public monorepo and its institutional documentation map

## Purpose

This matrix controls what the website may present as current, demonstrated, in development or research/direction. It prevents implementation existence, test evidence, beta eligibility and production readiness from being collapsed into one marketing claim.

The website must use the following maturity vocabulary consistently:

- **Current**: present in the canonical repository as an implemented public surface or package. Current does not automatically mean production-ready.
- **Demonstrated**: supported by a recorded integration path, rehearsal, testnet path or other named evidence. Demonstrated does not automatically mean generally available.
- **In development**: active engineering direction with implementation work underway, but without a complete stable product claim.
- **Research / Direction**: intended architecture or strategic direction that must not be presented as implemented.

## Product identity

| Subject | Website truth | Status | Allowed website language | Do not claim |
| --- | --- | --- | --- | --- |
| Sails Protocol | Economic Coordination Protocol for interoperable P2P financial marketplaces | Current | Sails defines shared economic coordination semantics across independently replaceable applications, modules, providers and rails | A blockchain, exchange, wallet, bank or settlement network |
| Ecosystem model | Coordinates existing systems without forcing stack convergence | Current principle | No token. No DAO. No new blockchain. Keep your wallet stack. Plug into Sails. | That participants must migrate custody, identity, transport or settlement into a Sails-owned stack |
| Coordination semantics | The protocol product is the shared economic meaning and its valid transitions, authority, conditions, evidence and outcomes | Current principle | Different stacks. Shared economic meaning. Coordination is the product. | That a transport, provider, AI agent or reference application defines protocol truth |
| Satsails Wallet | Major reference implementation, integrator and validation environment | Current reference implementation | Satsails helps validate and expose Sails behavior | Satsails owns or defines Sails Protocol semantics |
| Sails Market | Protocol-native reference web market surface | Current reference surface | A reference market surface built to exercise Sails behavior | The only market, mandatory interface or complete proof of global interoperability |

## Implemented repository surfaces

| Surface | Repository reality | Status | Website treatment |
| --- | --- | --- | --- |
| Protocol implementation | Protocol/runtime implementation and modules exist in the canonical monorepo | Current | May be presented as implemented and actively developed |
| Sails Core | `@sails/core` exists as the internal Pure Semantic Core package | Current | Explain that Runtime, Modules, Providers and Adapters remain outside the Pure Core boundary |
| P2P Trading SDK | `@satsails/p2p-trading-sdk` is the first concrete developer product | Current | Main active product. Link installation, getting started, SDK guide, API reference and golden-path examples when public URLs are final |
| Shared schemas | `@satsails/p2p-schemas` contains protocol-facing domain contracts | Current | May support technical explanations about contracts and shared semantics |
| Developer packages | React/UI surfaces and developer/reference packages exist | Current | Describe exact packages. Do not convert package existence into broad platform support |
| Examples | Simple wallet, wallet integration, integration starter and demo paths exist | Current | Use as implementation evidence and developer onboarding paths |
| API | Real routes and developer-facing contracts exist, with a documented stable boundary | Current | API today. Point developers to the canonical API documentation |
| TypeScript | Primary implementation and integration language today | Current | TypeScript first, not authoritative |

## Architecture boundaries

| Layer | Responsibility | Website rule |
| --- | --- | --- |
| Applications and integrators | Wallets, fintechs, marketplaces, web services and agents present user or product experiences | They consume Sails capabilities but do not own protocol semantics |
| SDK and integration surfaces | Expose focused developer products and stable integration contracts | An SDK may combine several modules. SDK and module are not synonyms |
| Open Extension | Declares capabilities, policies, boundaries and evidence contracts | Present as an extension model. Its exact available surface must follow repository evidence |
| Semantic Kernel | Preserves protocol meaning, valid transitions, authority boundaries and settlement independence | The kernel is the semantic center, not an infrastructure orchestrator that owns external execution |
| Pure Core | Contains pure primitives, state, events, validation and contracts | Keep Pure Core distinct from Runtime and external I/O |
| Runtime and Modules | Coordinate operational behavior around the Core | Modules expose bounded capabilities without becoming products automatically |
| Providers and Adapters | Connect wallets, transport, evidence, settlement and external systems | Provider existence, asset support, network support and production maturity are separate claims |
| External rails | Execute signing, custody, transport or settlement outside protocol authority | Infrastructure returns evidence without becoming protocol truth |

## Protocol modules

The repository identifies the following module family:

- OpenP2P
- OpenSettlement
- OpenIdentity
- OpenReputation
- OpenProof
- OpenLiquidity
- OpenAgents
- OpenFinance

Website rule:

> Primitive is not Module. Module is not Provider. Provider is not Product.

The site may show all modules as architectural capability domains. It must assign maturity individually and must not imply that every named module is an independently released SDK or production-ready service.

## P2P Trading SDK

| Claim area | Website truth | Status |
| --- | --- | --- |
| Product role | First concrete Sails developer product and first protocol module exposed to integrators | Current |
| Installation | Public npm package `@satsails/p2p-trading-sdk` is documented by the canonical repository | Current |
| Integration model | Wallets and applications keep keys, signing stack, settlement choices and product experience | Current architectural boundary |
| Coordination flow | Intent, discovery, negotiation, capability matching, external settlement and attributable evidence | Current product model; each operational path still follows its own evidence and maturity |
| Open market thesis | Compatible applications should be able to coordinate across market surfaces | In development |
| Shared/global liquidity | Sails does not provide liquidity; it is designed to make participant-supplied opportunities discoverable and negotiable | Direction with active implementation work. Never claim guaranteed global liquidity today |
| Portable reputation | Participant-centered, re-verifiable economic history is an intended direction | Research / Direction unless a specific demonstrated path is cited |
| Multi-wallet interoperability | Architectural goal with reference integrations and individual demonstrated paths | Do not show third-party wallets as adopters until adoption is confirmed |

## Integrations and rails

| Capability or technology | Verified claim level | Website treatment |
| --- | --- | --- |
| Bitcoin MULTISIG | Small-value mainnet rehearsal is disclosed by the canonical repository | Demonstrated. Cite the evidence and its limits |
| WDK_USDT_EVM | Real-path testnet evidence is disclosed | Demonstrated. Do not make its custody model normative for all Sails integrations |
| Arkade / VTXO | Testnet evidence is disclosed | Demonstrated |
| Lightning | A separate capability that cannot be inferred from Arkade naming or interoperability | Show only at its independently verified maturity |
| Liquid | Designed rather than implemented where the provider documentation says so | In development / Direction, depending on the provider record |
| Spark | Integration target tracked through capability-specific evidence | Do not infer readiness from its appearance in architecture diagrams |
| Stablecoins | Capability and asset family, not a universal support claim | Name specific assets, networks and providers only with evidence |
| Pears / HyperDHT | P2P transport direction or demonstrated path where recorded | Transport carries opaque messages and never becomes economic authority |
| QVAC | Advisory intelligence direction or demonstrated path where recorded | AI recommendation is not protocol authority |
| Pubky and Nostr | Identity and interoperability directions based on proofs of control | Research / Direction unless a concrete evidence record is cited |
| BDK and other wallet stacks | Replaceable wallet integration targets through explicit adapters | Do not label them integrated or supported without a verified implementation path |

## Developer and agent interfaces

| Surface | Status | Website copy rule |
| --- | --- | --- |
| API | Current | May be presented as available today |
| Package and SDK surface | Current | May link directly to package, guide and stable contract |
| Specific operational CLIs | Current where documented | Do not call them a complete canonical Sails CLI |
| Canonical Sails CLI | In development / Direction | Present as evolving |
| MCP | Research / Direction | Do not describe as an active official integration |
| WebMCP | Experimental website prototype / Direction | The official website registers four read-only tools when the browser supports the draft API. Do not imply browser-wide support, write access or protocol authority |
| Canonical Tool Surface | Research / Direction | Use as an architectural goal: interfaces can multiply, semantics should not |
| Claude, Codex, Gemini, Grok and other assistants | External exploration entry points, not protocol partners or authorities | Use “Explore with AI” only when each link actually provides structured Sails context. Do not imply endorsement or integration |

## Languages and platforms

| Category | Surface | Status |
| --- | --- | --- |
| Protocol implementation | TypeScript | Current primary implementation |
| Independent implementations | Rust, Go | Research / Direction |
| Application platforms | Web, React Native | Current only where a specific package or example exists; otherwise direction |
| Native SDK targets | Swift, Kotlin | Research / Direction |
| Native platforms | iOS, Android | Integration targets, not independent protocol implementations |

Required statement:

> TypeScript is first, not authoritative. Different languages. Different interfaces. Same economic semantics.

## Sails Node and operator portal

| Surface | Status | Website rule |
| --- | --- | --- |
| Node/runtime concept | Part of the protocol execution architecture where supported by repository implementation | Explain exact runtime responsibilities |
| Self-hosting | Current only for the repository's documented local/server path | Do not generalize local deployment into a finalized commercial node product |
| Managed Sails Node | Direction | Label as planned or in development |
| White-label Node | Direction / commercial concept | Do not show pricing, availability or signup as active until the offer exists |
| Operator portal | Prototype | Clearly label preview. A visual dashboard must not imply real authentication, analytics or node provisioning |

## Economic model

No production economic model should be claimed from concept material alone.

Until governed by public canonical documentation, the website must not promise:

- protocol fees;
- wallet rebates;
- recurring wallet revenue;
- liquidity provider incentives;
- treasury distributions;
- guaranteed monetization;
- guaranteed global liquidity.

The safe claim is that Sails can reduce duplicated coordination work and create new product surfaces. Any concrete fee or incentive mechanism requires its own current source and maturity label.

## Mandatory wording discipline

### Safe statements

- Sails Protocol is an Economic Coordination Protocol.
- Sails provides open infrastructure for interoperable P2P financial marketplaces.
- The P2P Trading SDK is the first concrete developer product.
- Keep your wallet stack. Plug into Sails.
- Sails coordinates shared economic semantics while external systems remain replaceable.
- No token. No DAO. No new blockchain.
- Your keys may be portable. Your economic history usually is not.
- Sails should connect economic islands without becoming another island itself.
- TypeScript is first, not authoritative.
- Interfaces can multiply. Semantics should not.
- Adopt capabilities, not dependencies as architecture.

### Statements requiring evidence or a maturity qualifier

- “Integrated with” any external wallet, network, AI tool or provider.
- “Supports” an asset, rail, network or language.
- “Production-ready”, “secure”, “audited” or “battle-tested”.
- “Portable reputation” as a present cross-deployment capability.
- “Global liquidity” as an available network property.
- “Any wallet can connect instantly”.
- “AI-native” when used to imply active MCP or agent execution.
- “Sails Node available” as a finished managed or white-label product.

### Prohibited framing

- Sails as a mega-stack that owns identity, transport, settlement, liquidity and applications.
- External technology logos shown as confirmed partners or adopters without authorization and evidence.
- Roadmap capabilities displayed with the same visual status as implemented capabilities.
- Reference implementations presented as owners of protocol truth.
- Architecture diagrams that imply every rail or provider is implemented and production-ready.

## Website hierarchy derived from truth

The homepage should explain, in order:

1. Sails is an Economic Coordination Protocol.
2. Applications remain economic islands even when custody is open.
3. Sails coordinates shared meaning without creating another ecosystem.
4. The Semantic Kernel, Core, Runtime, Modules, Providers and rails have distinct responsibilities.
5. The P2P Trading SDK is the first concrete developer product.
6. Modules organize capabilities; SDKs package developer products.
7. Integrations and external technologies remain replaceable and maturity-specific.
8. Reality is separated from roadmap.

The P2P Trading SDK page should explain:

1. The isolated-market problem.
2. The integration boundary.
3. The end-to-end coordination flow.
4. What the integrator implements.
5. What remains outside Sails authority.
6. Current package, documentation and evidence.
7. Capability, rail, asset and provider maturity separately.

## Source authority

Use the canonical repository according to the responsibility map it publishes:

- `docs/SEMANTIC_KERNEL.md`: semantic identity.
- `docs/PROTOCOL_INVARIANTS.md`: invariants.
- `docs/PROTOCOL_SPECIFICATION.md`: normative protocol contract.
- `docs/SYSTEM_DESIGN.md`: current system-level technical map.
- `docs/CORE_ARCHITECTURE.md`: modern Core, Runtime, Modules and Providers architecture.
- `docs/CORE_IMPLEMENTATION_ARCHITECTURE.md`: implementation derivation.
- Accepted RFCs and ADRs: decisions within their scope.
- `docs/API_STABLE.md`: stable developer contract.
- Evidence and validation records: implementation and maturity claims.
- GitHub Issues and Project: current operational state.
- `docs/BACKLOG.md`: unresolved institutional inventory and dependency context.
- `ROADMAP.md`: direction and sequencing.

When sources disagree, do not silently select the more marketable claim. Resolve the governing source first, then update the website.
