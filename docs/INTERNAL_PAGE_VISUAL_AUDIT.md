# Internal Page Visual Audit

## Finding

The internal page copy is differentiated, but most routes render the same visual structure from `InnerPage.astro`: a central Sails circle, four corner cards and four connecting paths. The `flow`, `kernel`, `sdk` and `network` values currently add class names without changing the visual composition.

This creates three problems:

1. The diagram often repeats the cards instead of explaining the page.
2. Different architectural concepts look equivalent.
3. A visitor cannot understand the specific role of a page by reading its visual alone.

The homepage, roadmap and P2P Trading SDK already use more specific visual systems and should establish the quality level for the remaining routes.

## Page matrix

| Route | Current visual fit | Required visual model | Priority |
| --- | --- | --- | --- |
| `/protocol/` | Low | Economic islands connect through shared intent, authority, conditions, evidence and outcome semantics. External execution remains outside Sails. | P1 |
| `/anatomy/` | Low | A vertical layered stack: applications, SDK and interfaces, open modules, semantic kernel and external providers or rails. Show request and evidence return directions. | P1 |
| `/sdks/` | Low | Composition map from stable protocol semantics through open modules into separate SDK products. Visually distinguish the current P2P SDK from future directions. | P1 |
| `/sdks/p2p-trading/` | High | Keep the existing dedicated market problem, six-stage coordination flow, execution rails and liquidity network. | Keep |
| `/integrations/` | Low | Adapter and provider boundary map. Group wallet stacks, transport, intelligence and settlement rails. Attach an evidence or maturity label to every path. | P1 |
| `/roadmap/` | High | Keep the dedicated compact timeline and status language. | Keep |
| `/developers/` | Medium-low | Four development surfaces aligned under the same semantics: implementations, application platforms, native targets and agent interfaces. | P2 |
| `/developers/open-extension/` | Medium-low | Stable kernel surrounded by capability contracts. Each extension declares inputs, authority, evidence and provider limits. | P1 |
| `/developers/documentation/` | Low | Progressive reading path from anatomy to P2P SDK, Open Extension, WebMCP and canonical source. Use a directional documentation journey. | P2 |
| `/developers/webmcp/` | Low | Browser page registers four read-only tools, which an agent may inspect. A visible boundary must show that tools grant no financial or protocol authority. | P1 |
| `/products/ui-kit/` | Low | Compact interface-state storyboard for intent, negotiation, evidence and platform adaptation. Mark the complete visual as research and direction. | P2 |
| `/products/sails-market/` | Medium-low | Reference market surface connected to participants and external execution through Sails semantics. It must read as a product exercising the protocol. | P2 |
| `/products/sails-node/` | Low | Runtime pipeline for accepted input, contract validation, capability execution and evidence return. Separate independent operation from managed and white-label directions. | P1 |
| `/explore-ai/` | Low | A compact two-by-two assistant grid connected to structured Sails context and canonical source. Preserve proportional brand marks and explicit maturity. | P2 |
| `/case-studies/` | Low | Two independent reference implementations, Satsails Wallet and Sails Market, exercising the same protocol without owning its semantics. | P2 |
| `/safety-center/` | Low | Concentric or gated authority model separating custody, authorization, providers, evidence and protocol truth. | P1 |

## Reusable visual system

The redesign should use a small set of truthful diagram primitives instead of one universal diagram:

- **Layer stack:** anatomy and node runtime.
- **Coordination network:** protocol, integrations and Sails Market.
- **Composition tree:** SDK family and developer surfaces.
- **Directional flow:** documentation, WebMCP and P2P lifecycle.
- **Boundary model:** Open Extension and Safety Center.
- **Product storyboard:** UI Kit, Explore with AI and case studies.

Each route may reuse primitives, but it must have its own labels, hierarchy, connection logic and visual conclusion.

## Acceptance criteria

Every internal visual must satisfy these checks:

1. A visitor can identify the page subject without reading the heading.
2. The visual explains a relationship or flow rather than repeating the cards below it.
3. Current, demonstrated, implementation-dependent and direction states remain visually distinct.
4. External systems never appear controlled by Sails.
5. The diagram remains readable at 360 pixels without horizontal scrolling.
6. Motion explains data or coordination direction and respects reduced-motion preferences.
7. The same information remains available in text and accessible labels.

## Implementation order

1. Anatomy
2. Protocol
3. SDK family
4. Integrations
5. Open Extension
6. WebMCP
7. Sails Node
8. Safety Center
9. Developers and documentation
10. UI Kit, Sails Market, Explore with AI and case studies

The first eight items remove the most misleading repetition. The final group adds product-specific polish after the architectural pages establish the visual language.

## Implementation result

Completed after the audit:

- Every internal route now has a subject-specific visual composition.
- The roadmap retains its compact timeline.
- The P2P Trading SDK retains its dedicated multi-section visual narrative.
- The shared generic orbit diagram is no longer rendered by any internal route.
- Desktop and mobile layouts use route-specific responsive rules.
- The diagrams preserve explicit maturity, authority and external execution boundaries.
