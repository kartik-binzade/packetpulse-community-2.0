# Claude handoff — 25 November 2026 discussion update

You previously received PacketPulse's four core product/design documents. Use the complete documentation in this bundle as the updated context.

## Read in this order
1. `README.md`
2. `PacketPulse 2.0 — Discussion Record — 25 November 2026.md`
3. `PacketPulse 2.0 — 5. Component Ecosystem, UI Patterns and Library Registry.md`
4. Documents 1–4 and `CHANGELOG.md`

## Non-negotiable owner direction
- Be open, creative and experimental. Do not prematurely reject patterns or features. Prototype uncertain ideas and evaluate them with the team during a defined review window.
- Preserve whitespace, visual rhythm and the emotional feel of the product.
- Continue Signal Grove with Editorial Workspace and Analytical Workspace layout families. Matte Black Edition is the preferred analytical dashboard treatment; retain Soft Signal Light.
- Use the six supplied new references as reusable patterns: spacious people dashboard, upload lifecycle (three states), perspective featured carousel and numbered editorial feature cards. REF-00 is the earlier Matte Black analytical dashboard.
- Use microanimations where they explain/acknowledge state or improve orientation; respect reduced motion.
- Tailwind CSS v4 is standard. Play CDN is prototype-only; production Next.js compiles Tailwind.

## Implementation expectations
- Audit the actual repository and dependencies before installing anything.
- Use Document 5's stable `PP-*` component IDs and adoption rules.
- Treat shadcn/ui as the preferred foundation and BoardUI, Beautiful UI, Bencho, Ingot UI and Transitions as selective sources/workflows, not libraries to install wholesale.
- Keep component APIs and visual tokens owned by PacketPulse. Record source, licence, attribution, version and maintainer.
- Build the shared component playground/catalogue, then P0 components, then reference compositions.
- Keep experiments reversible and document the hypothesis, owner, review window, safeguards, feedback and outcome.
- Do not claim implementation until verified in the repository.
