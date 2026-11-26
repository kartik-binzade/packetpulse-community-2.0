# PacketPulse 2.0 — Update Handoff for Claude and the Development Team

**Issued:** 24 November 2026  
**Update set:** 5.0

## What to load

Read these files in order and treat them as the current canonical project brief:

1. `UPDATE_SUMMARY.md` (quick delta orientation)
2. `PacketPulse 2.0 — 1. Product Guide Vision, Requirements, Decisions.md`
3. `PacketPulse 2.0 — 2. Design System and UX Guide.md`
4. `PacketPulse 2.0 — 3. Users, Screens and Page Flows.md`
5. `PacketPulse 2.0 — 4. Delivery Plan and Developer Handoff.md`
6. `PacketPulse_2.0_Design_Color_System_v2.pdf`
7. `CHANGELOG.md`
8. `references/dashboard-reference.jpg`

The four documents replace the earlier October 2026 versions. Re-read them in full; do not merge old assumptions from earlier Claude context where the current documents differ.

## Most important updates

- Signal Grove remains the core identity, now with **Editorial Workspace** and **Analytical Workspace** layout families.
- The **Matte Black Edition** is the preferred reference for operations, recruiter analytics and other data-heavy dashboards. It is not a global forced-dark theme. Light and dark remain supported.
- Use the supplied dashboard image as inspiration for grouped navigation, clear header hierarchy, 4–5 meaningful KPIs, large primary analytical area, collapsible contextual rail and detailed data tables.
- Whitespace, emotional quality and a calm professional vibe are first-class UX requirements. Comfortable density is default; Compact is contextual; Reading is for long content.
- Automated skill verification is not rejected. It remains an experiment candidate with manual, AI-assisted and automated modes. Add feature flags, policies, thresholds, explainability, evidence references, audit, appeal/re-review, human fallback and a kill switch. Measure false approvals/rejections and reviewer disagreement. The team will decide retain/refine/restrict/disable after a defined review window.
- This verification experiment does not grant automated recruitment selection/forwarding, payments or sensitive account actions.
- Community is proposed to evolve from basic Q&A into an engineering knowledge network with structured content, discovery feeds, search, groups, events, mentoring, contribution identity and knowledge links into learning/practice/verification.
- shadcn/ui is the preferred shared component foundation; Ingot UI is a curated optional source. Chakra UI is not the primary system because Tailwind CSS is the chosen styling standard.
- Current shadcn documentation defaults new projects to Base UI while continuing to support Radix. Inspect the actual app and lockfile before choosing; do not migrate a working existing primitive layer without a concrete reason.
- Tailwind CSS v4 is the styling standard. Use the Play CDN for prototypes only; production Next.js must compile Tailwind in the build pipeline.
- Motion for React is the preferred motion library; microanimations must be useful and respect reduced motion.
- Lucide, Simple Icons, Unsplash/Pexels, unDraw, LottieFiles and Rive are curated asset sources, subject to per-asset licence and performance review.

## Work sequence for the receiving agent

1. Confirm package versions, Next.js/React versions, styling integration, existing component primitives, chart/table/editor packages and installed icon/motion packages. Do not install or upgrade anything until this audit is recorded (DEV-11).
2. Compare the current repository against PRD/SCR/TASK identifiers. Mark Present, Partial, Missing or Different with file/route evidence.
3. Implement the design tokens and layout families before page-specific polishing. Start with the Analytical Workspace shell and one representative Operations dashboard; validate Matte Black contrast and whitespace.
4. Establish the shared component registry and live catalogue. Use external components as source, then adapt them into PacketPulse-owned wrappers and tokens.
5. Build the community expansion in phases. Preserve the existing Q&A core and avoid shipping a broad empty group/event system before there are moderators and seed contributors.
6. Prototype automated verification in shadow or limited cohort mode first where appropriate. No experiment goes live without owner, policy, evidence criteria, metrics, flag, appeal path, fallback, rollback and review window.
7. Update docs and change log whenever a decision, token, component, workflow or route changes.

## Non-negotiable accuracy rules

- Documentation is not evidence of production implementation.
- Feature flags do not replace server-side authorization.
- External component libraries do not define PacketPulse branding.
- Do not use Tailwind Play CDN in the production app.
- No raw one-off colors in components; use semantic tokens.
- No color-only status; include text and icon/glyph.
- No media asset without an asset source/licence record.
- No animation without purpose and reduced-motion behavior.
- No automated verification decision without a stored evidence trail, policy/model version, reason, audit and review/appeal mechanism.
- Community reputation must never be presented as equivalent to assessment, certification or experience verification.

## External references checked 24 November 2026

- Tailwind Play CDN: https://tailwindcss.com/docs/installation/play-cdn
- shadcn/ui Tailwind v4: https://ui.shadcn.com/docs/tailwind-v4
- shadcn/ui Base UI default: https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default
- shadcn/ui theming: https://ui.shadcn.com/docs/theming
- Ingot UI docs: https://ingotui.com/docs
- Motion for React: https://motion.dev/docs
- Lucide: https://lucide.dev/
- Simple Icons: https://simpleicons.org/
- Unsplash licence: https://unsplash.com/license
- Pexels licence: https://www.pexels.com/license/
- unDraw: https://undraw.co/license
- LottieFiles: https://lottiefiles.com/license
- Rive: https://rive.app/legal/terms/
