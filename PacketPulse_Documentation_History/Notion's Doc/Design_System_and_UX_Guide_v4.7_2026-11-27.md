# PacketPulse 2.0 — Design System & UX Guide

**Version 4.7 · 27 November 2026 · Status: consolidated current guide for Git**  
**Base:** v4.6 (27 November 2026); cross-checked against current Notion pages and recent edits  
**Update:** Palette 1 — Violet-led + Signal Grove complementary colours approved as the primary colour foundation.  
**Implementation status:** Design decision finalized; application implementation and contrast validation remain pending.

> This guide is a living design language—not a rigid aesthetic rulebook. It establishes coherence while leaving room for discovery. Explore, adapt, combine or invent visual solutions when they improve the experience. Preserve source assets and decision history.

## Contents
1. Philosophy and UX rules
2. Colour psychology applied
3. Brand and visual identity
4. Approved colour foundation
5. Themes, semantic colours and module identities
6. Typography
7. Spacing, shape, elevation and states
8. Components and interaction patterns
9. Motion and micro-interactions
10. Layout and responsive behaviour
11. Content, language and product vocabulary
12. Edge cases every screen handles
13. Accessibility standards
14. Governance and developer implementation
15. Resources experience design rules
16. Signup, onboarding, profile and account rules
17. Creative visual exploration and brand patterns
18. Parent-child and nested-screen experience
19. Media and embedded-resource experience
20. Revision history and source lineage

---

## 1. Philosophy and UX rules

The design system creates coherence while leaving room for discovery. Principles are shared quality checks, not hard aesthetic walls. Depart from a pattern when a better experience emerges; capture intent, test the result and share what was learned.

**Owner direction:** Design to improve the experience of the person using PacketPulse—not to impress an observer. Start with the user, context, task, psychological friction, required information/action, privacy boundaries, visual meaning, interaction states, accessibility/performance and validation.

### Experience rules

| ID | Rule | Expected consequence |
|---|---|---|
| DES-001 | A polished screen is not a usable flow. Define entry, next step, recovery, empty, error, loading and success states. | No incomplete flow shipped. |
| DES-002 | Principles are adaptable. Explain and evaluate meaningful departures. | Less arbitrary debate and rework. |
| DES-003 | Automation is explainable and governed. AI outputs are labelled; verification decisions need policy, evidence, audit, appeal/re-review, feature flags and fallback. Hiring, payments and sensitive account decisions remain human-confirmed by default. | No opaque consequential decisions. |
| DES-004 | Accessibility is a speed and quality feature. | WCAG 2.2 AA release target. |
| DES-005 | Shared tokens/components create coherence; bespoke compositions are welcome when they solve a real problem. | Reuse without sameness. |
| DES-006 | Light and dark themes are both designed and tested; dark is not a simple inversion. | Reliable cross-theme experience. |
| DES-007 | Semantic status colours carry meaning and include text/glyphs. Expressive brand colours remain welcome when legible. | No colour-only status. |
| DES-008 | Make action hierarchy understandable without artificially restricting valid choices. | Clear user decisions. |
| DES-009 | Show where the member is, what changed and what to do next. | No dead ends. |
| DES-010 | Use plain language; avoid jargon for its own sake. | Lower comprehension friction. |
| DES-011 | Ask for information only when needed and explain sensitive fields. | Better trust and completion. |
| DES-012 | Work is recoverable; warn before loss and name destructive effects. | Fewer avoidable errors. |
| DES-013 | Whitespace and density are intentional and task-dependent. | Calm, readable hierarchy. |
| DES-014 | Aim for calm, capable, welcoming and credible; avoid manipulative urgency. | Confidence without pressure. |
| DES-015 | Editorial and Analytical are starting workspace archetypes, not fixed layouts. | Task-fit information architecture. |
| DES-016 | Matte Black is a reference for analytical workspaces, not a forced global theme. | Suitable depth without palette lock-in. |
| DES-017 | Motion communicates feedback/orientation/state; reduced-motion behavior is required. | Responsive, non-distracting UI. |
| DES-018 | Use curated libraries and PacketPulse-owned wrappers. | Brand API remains ours. |
| DES-019 | Media follows accessibility, performance, visual and licensing rules. | Trustworthy content. |
| DES-020 | Comfortable, Compact and Reading density may be offered where task warrants; Comfortable is default. | User-appropriate density. |
| DES-021 | Analytical dashboards can use meaningful metrics, analysis area and contextual rail; composition varies by task. | Useful data workspaces. |
| DES-022–031 | Creative exploration, flexible colour, independent transparent pattern layers, open motif families, nested-context continuity, first-class media, library independence, reviewable experiments, asset provenance and open-ended design are part of the system. | Coherent design that can evolve. |

## 2. Colour psychology applied

Colour supports hierarchy, mood, orientation and recognition; it does not determine user behaviour universally. Validate combinations in context.

- Reduce competition through surface hierarchy and purposeful accent use.
- Establish clear action hierarchy while retaining valid peer actions.
- Build trust through consistent identity and truthful transaction/status feedback.
- Use progress only when it represents real milestones or state.
- Warnings and errors remain conventional and distinguishable.
- Accessibility requires contrast, labels, icons and text.

## 3. Brand and visual identity

**Name:** PacketPulse  
**Tagline:** Connect, Learn & Grow Together.  
**Brand character:** Confident, technical, distinctive and human.  
**Voice:** Plain, direct, encouraging and technical without unnecessary jargon; never urgent or manipulative.

### Reusable logo direction — owner-requested exploration (27 Nov 2026)

The current visual exploration direction is a **connected fiber-and-node mark**: flowing fiber-like paths joined by distinct nodes or router/switch-inspired junctions. It should suggest a living network—people, knowledge, skills and opportunities connected through PacketPulse—rather than a literal hardware diagram or generic circuit icon.

The direction is accepted for continued logo design; the final vector geometry and lockups are not yet production-approved.

- Keep the symbol simple enough to recognize at favicon and app-icon sizes.
- Use a small number of deliberate paths and nodes; avoid tangled wires, excess junctions or tiny details.
- Make the connections feel continuous and intentional; node shapes should be consistent and optically balanced.
- The symbol must work as a flat, single-colour mark before any gradient, glow or dimensional treatment is considered.
- Primary lockup: horizontal symbol + PacketPulse wordmark; also develop compact/stacked, symbol-only, monochrome and reversed variants.
- Test clearspace, minimum size, 16/24/32 px recognition, browser-tab appearance, dark/light backgrounds and one-colour reproduction.
- Preserve existing logo masters and earlier concepts. Store this iteration as a new editable vector source; do not overwrite originals.
- Palette use follows the approved Violet-led + Signal Grove foundation in Section 4. Any logo gradient is an optional treatment, not a required part of the mark.


The logo concept uses connected fibers, nodes and router-like junctions to express people, knowledge, evidence and opportunity moving through a network. The mark must be recognizable at small sizes, work in monochrome and avoid dependence on glow or gradient.

Use the horizontal logo as the primary lockup; explore stacked and symbol-only versions for constrained spaces. Maintain clearspace, minimum size, contrast and background-safe variants. Preserve existing logo masters; new explorations are versioned additions, not replacements.

## 4. Approved colour foundation

### Owner decision — 27 November 2026

**Palette 1 — Violet-led is finalized as the primary foundation.** Forest Green and Signal Lime complement it; they do not displace violet as the dominant identity.

| Token | HEX | Role |
|---|---|---|
| Brand Violet | `#615AB9` | Primary brand identity |
| Brand Deep | `#16133E` | Deep brand ink and hierarchy |
| Secondary Violet | `#8B7FF7` | Secondary emphasis, selected states and expressive detail |
| Light Canvas | `#F1F5F9` | Light-theme page canvas |
| Forest | `#156152` | Complementary growth/community accent |
| Signal Lime | `#C7FE53` | Selective high-attention accent |
| Soft Forest | `#8BBBA5` | Softer supporting green |
| Near Black | `#0B0D0B` | Dark surfaces and contrast |
| White | `#FFFFFF` | Light surfaces and reversed identity |
| Payments Blue | Blue family | Scoped payment identity; shade calibration pending |

**Finalized:** foundation and hierarchy.  
**Pending refinement:** full shade ramps, forest/lime glow treatments, payment-blue scale, exact semantic/component state mappings and rendered contrast results.

### Strategic hierarchy

1. Violet is the most recognizable brand colour and remains the primary identity.
2. Forest grounds the system and adds a complementary growth/community character.
3. Signal Lime is scarce and meaningful: highlight, milestone or selected emphasis—not a default large-area fill.
4. Black, white and neutral grays establish balance, readability and depth.
5. Payments blue is scoped to payment experiences.
6. Success, warning, danger and information are semantic—not interchangeable with brand accents.

## 5. Themes, semantic colours and module identities

Use the same semantic token names in light and dark themes. Do not invert colours mechanically.

### Theme direction

**Light**
- Canvas: `#F1F5F9`
- Raised surface: `#FFFFFF`
- Primary text: deep ink/near-black
- Violet for brand/action hierarchy
- Forest and lime as restrained complementary accents

**Dark**
- Deep ink and near-black canvas
- Layered charcoal surfaces
- Off-white primary text and carefully tuned muted text
- Violet/secondary violet for identity and action
- Forest/soft forest for controlled depth
- Lime for sparse high-salience emphasis

### Token layers

1. **Primitive:** raw brand, neutral and semantic ramps.
2. **Semantic:** text, canvas, surface, border, focus, action and status.
3. **Component:** button, badge, card, input, navigation and chart aliases.
4. **Theme:** light/dark semantic mappings.
5. **Module:** scoped Community, Learning, Recruitment and Payments aliases.

Components must consume semantic/component tokens, not arbitrary HEX values. Maintain one canonical token source and generate CSS/JSON/platform outputs where feasible.

### Module identity (starting associations, not fences)

| Area | Established identity | Usage |
|---|---|---|
| Community / Brand | Forest | Belonging, contribution and community |
| Learning / Assessments | Indigo/Violet family | Focus, practice and learning |
| Recruitment / Jobs | Blue family | Professional opportunity and reliability |
| Payments | Blue family / prior Plum lineage | Transaction clarity; owner-approved shade refinement required |

A screen may use a different accent or gradient when it improves the task. Keep semantic states distinct.

### Semantic states

Success, warning/pending, danger and information each need a tested foreground, background, border, icon and text label in both themes. Verification states must use explicit wording and detail; colour alone never means verified.

### Accessibility and contrast

- WCAG 2.2 AA: normal text 4.5:1; large text 3:1; meaningful controls/boundaries/focus indicators 3:1 where applicable.
- Measure rendered foreground/background pairs, including hover, pressed, selected, disabled and validation states.
- Bright violet, lime and gradients are not automatically suitable for small text.
- Do not place essential text on unstable or low-contrast gradient regions.
- Use labels/glyphs in addition to colour.
- Refine forest/lime shades or restrained glow only after legibility, hierarchy, performance and reduced-motion review.

### Matte Black Edition

Matte Black remains a workspace treatment for analytics/operations—not a global replacement. Existing prototype references include canvas `#0B0D0C`, surface `#171A18`, raised `#222724`, border `#303631`, text `#F2F5F2`, muted `#A8B2AC`, forest `#156152`, lime `#C7FE53` and optional chart violet `#A78BFA`. These values require pair-by-pair production contrast and chart distinction testing.

## 6. Typography

| Role | Direction |
|---|---|
| UI/body | Inter; Noto Sans Devanagari for Hindi; system fallback |
| Technical | JetBrains Mono sparingly for IDs, code, counts and technical values |
| Body | 16/24 px, regular |
| Small | 14/20 px |
| Section heading | 24/32 px, semibold |
| Card heading | 17/24 px, semibold |
| Page heading | 30–48 px, bold/fluid |
| Metric | Tabular numerals; mono selectively |

Use sentence case, readable line lengths, balanced wrapping and avoid light weights for small text. Display typography can be explored in brand/editorial moments without forcing a wholesale UI font change. Confirm font license, loaded weights and language coverage.

## 7. Spacing, shape, elevation and states

- A 4 px spacing rhythm is a useful base (4, 8, 12, 16, 20, 24, 32, 40, 48, 64); justified compositions may diverge.
- Radius starting points: tags 6, controls 10, cards/dialogs 14, feature panels 20, chips pill.
- Prefer borders before shadows. Shadows indicate real elevation/layering, not decoration.
- Surface levels: page → surface/card → raised/overlay; keep layering consistent within a task.
- Define hover, pressed, focus-visible, selected, disabled, loading, validation and success/error states.
- Focus must be unmistakable in both themes and not rely on colour alone.

## 8. Components and interaction patterns

Use the existing app's component/primitive family after repository audit. shadcn/ui, Base UI or Radix are building blocks—not the brand authority. Do not migrate libraries wholesale without a concrete benefit and approved scope.

Build PacketPulse-owned layers:
- `ui`: base primitives
- `shared`: cross-product components
- module compositions: `community`, `learning`, `recruitment`, `payments`, `operations`

Document variants, responsive behavior, accessibility, all states and theme appearances. Maintain a live catalogue (Storybook or existing equivalent) and visual regression coverage for critical shared components where practical.

## 9. Motion and micro-interactions

Motion is feedback and orientation, not decoration by default.

- Short, purposeful transitions for selection, save, expand, navigation, verification and progress.
- Prefer subtle non-looping state transitions over perpetual ambient motion.
- Never imply real-time data if it is static/delayed.
- Respect `prefers-reduced-motion`; provide stable alternatives.
- Avoid flashing, excessive parallax/zoom or delayed actions.
- Pause nonessential effects off-screen; test mobile and low-power performance.
- CSS/SVG for lightweight motion; WebGL/3D only when it materially improves understanding.
- Remove motion if the task is clearer without it.

## 10. Layout and responsive behaviour

Editorial and Analytical are starting archetypes, not templates. Choose composition based on the task and user journey. Dashboards may use meaningful metrics, a strong analysis area and contextual rail when useful.

Preserve orientation, action hierarchy and content continuity across breakpoints. Avoid horizontal overflow; use responsive navigation and task-appropriate density. Comfortable is default; Compact and Reading modes may be used where they benefit the task.

## 11. Content, language and product vocabulary

Use plain language, sentence case and calm feedback. Success is warm but not loud; errors are specific and actionable; warnings explain what needs attention; no false urgency or scarcity.

| Use | Not |
|---|---|
| Member | User (except technical context); candidate only in recruiter context |
| Jobs (member) / Positions (recruiter) | Openings, requisitions |
| Application | Submission (unless lab submission) |
| Forwarded | Sent/shared |
| Verified skill | Certified skill (certification is separate) |
| Evidence | Proof/documents |
| Placement fee | Commission/charge |

Use Indian date/time and money formats where appropriate (IST clearly shown; Indian digit grouping; LPA for annual pay). Truncate with accessible “Show more”; mask sensitive data by default according to approved privacy rules.

## 12. Edge cases every screen handles

- Long names/titles/lists wrap or truncate without pushing layout sideways.
- Hindi/long content receives flexible length and suitable Devanagari line height.
- Slow connection: timely skeleton, honest retry state, real upload progress.
- Missing data: show “Not provided” or dash with reason, never fake zero.
- Zero results: explain query and offer clear filters.
- No permission: explain and provide a valid destination.
- Failed/offline save: retain entered content and show retry; never claim saved.
- Session expiry: return to prior destination and preserve unsent input where safe.
- Large lists: paginate/load more and show counts.
- Duplicate actions: disable while processing; repeated click is safe.

## 13. Accessibility standards

Target WCAG 2.2 AA in both themes.

- Contrast tested per actual token pair and state.
- Keyboard operability, logical order and visible focus.
- Landmarks, one H1 and sensible heading structure.
- Named controls; linked and announced validation errors.
- Target sizes: aim for 40 px controls; respect minimum applicable WCAG target.
- Status includes text and glyph.
- Reflow/zoom: usable at 200% and 320 px viewport without page-level horizontal scroll.
- Reduced motion honored.
- Screen-reader journeys for onboarding, apply, assessment, verification and recruiter review each release.
- Automated scans are not a substitute for contrast, layout or assistive-technology testing.

## 14. Governance and developer implementation

- One canonical source for token values; components use semantic names.
- New token requires rationale, light/dark mappings, contrast evidence and change-log entry.
- New component requires variants, states, accessibility notes and examples.
- Version design-system changes; record owner decisions and scope.
- Production styling uses compiled project build tooling; prototype-only CDN patterns are not production architecture.
- Audit repository, package manager, versions, licenses, CSP, security and compatibility before installing dependencies.
- External dependencies require version, license, maintenance, accessibility, bundle/runtime, compatibility and migration review.
- Prototype/review approval does not imply production implementation.

## 15. Resources experience design rules

Resources is a curated Community knowledge library, not a generic file dump. Provide search, meaningful filters, collections and cards that explain usefulness before opening. Cards may communicate type, topic, author, difficulty, estimated time, review date and save state.

Detail is a reading/work surface: preview primary; TOC/metadata secondary; source, author, attribution, licence, version and review date visible. Preserve reading position and keyboard navigation.

Submission flow: **Details → Content → Review & publish**. Accept upload, URL or authored article. Show real file lifecycle states (queued, uploading, paused, processing/scanning, complete, failed, canceled, rejected); never fake progress. Capture source/rights and provide review status.

Saved resources include saved list, reading list, custom collections, recently viewed and continue reading. Collections have explicit private/shared visibility.

## 16. Signup, onboarding, profile and account

Signup should feel like a welcome, not an application form. Wide-screen split layout may pair brand/story with a focused form; mobile becomes a single-column flow. Authentication options must be configured and security-reviewed before real use. Explain verification and keep recovery visible.

Onboarding is progressive and skippable for optional steps: Role → Interests → Goals. Recommendations remain editable. Do not request a resume or full employment history before the value is clear unless a protected workflow requires it.

Profile and Account are separate:
- **Profile:** professional/community identity, audience-aware preview and field-level visibility.
- **Account:** personal data, privacy, notifications, security, sessions, connected accounts, data rights and billing.

Distinguish self-declared, assessment-verified, experience-verified, certification-verified and PP-verified. No colour-only verification. Completeness prompts are supportive/dismissible and never shame or block. Public web visibility is opt-in and off by default unless owner decision changes.

## 17. Creative visual exploration and brand patterns

The owner explicitly supports broad creative exploration: colour combinations, gradients, tonal ramps, typography, editorial treatments, wave/pulse motifs, packet paths, node meshes, security geometry, media, motion and new compositions.

The current palette is a foundation, not an aesthetic ceiling. Use patterns as optional transparent layers over existing page/card backgrounds. They may be cropped, recoloured, scaled, combined, animated or omitted. Prefer scalable, theme-aware, recolourable and performant SVG/CSS sources.

Explore pattern placement on hero areas, card corners, section dividers, profile covers, featured resources, empty states and analytics headers. Remove a motif if it competes with content or controls.

For uncertain choices, show variants and a concise hypothesis; compare using real content and responsive layouts; gather review feedback; decide Retain, Refine, Restrict or Remove. Visual impact alone is not evidence of usability.

## 18. Parent-child and nested-screen experience

Treat complex sections as navigable workspaces, not piles of modals. Use durable URL routes for substantial/shareable detail, contextual drawers for quick inspection and inline expansion for supplementary detail. Avoid stacked dialogs.

Maintain breadcrumbs/local navigation, visible parent return path, clear titles and—where feasible—filters, search, selected row, scroll and focus when returning. Browser Back/Forward should match visible hierarchy. On mobile, substantial child workflows generally become full-screen routes with clear back behavior.

## 19. Media and embedded-resource experience

Media is first-class content. Choose suitable players/viewers for direct files, adaptive streams and approved providers. Design play/pause, seek, volume, speed, captions, chapters, transcript, fullscreen, keyboard, resume and recovery as available capabilities—not fake controls.

No autoplay with sound. Respect reduced motion, data-saving and privacy. Recording details may combine player, transcript, chapters, metadata, notes, related resources and discussion while preserving parent context.

Use type-aware previews for PDF, image, audio/video, text/Markdown/code and CSV. Office files need an isolated conversion/preview or separately licensed editor. Never render arbitrary HTML, macros or user-provided iframe code unsafely.

### External references retained from v4.5
- Video.js documentation/changelog
- Uppy React and Tus documentation
- React-PDF repository
- Shaka Player repository
- ONLYOFFICE licensing FAQ
- shadcn/ui component documentation and Base UI/Radix references

These are review-build candidates, not proof of installation. Recheck versions, licences, compatibility and security before adoption.

## 20. Revision history and source lineage

| Date | Version | Change |
|---|---:|---|
| 27 Nov 2026 | 4.7 | Consolidated Git export cross-checked against latest Notion Design System & UX Guide (last edited 27 Nov 13:57 UTC); added reusable fiber/node/router logo direction from owner’s latest review; clarified source status and supersession. |\n| 27 Nov 2026 | 4.6 | Owner finalized Palette 1 Violet-led as primary foundation; added Forest, Signal Lime, Soft Forest, black/white balance, light/dark mappings and refinement boundaries. |
| 26 Nov 2026 | 4.5 | Open creative direction; DES-031; transparent pattern overlays preserve existing backgrounds. |
| 26 Nov 2026 | 4.4 | DES-022–030; expanded colour, pattern, layout, media, nested UX and component-library guidance. |
| 25 Nov 2026 | 4.1 | Resources, Signup, Profile and Account design rules; audience-aware profile preview. |
| 24 Nov 2026 | 4.0 | Workspace archetypes, density, Matte Black analytical reference, component/media ecosystem and microanimation guidance. |
| 17 Oct 2026 | 3.0 | Signal Grove baseline: palette, module accents, typography, spacing, interaction, accessibility and governance. |

### Historical lineage

This guide updates the 26 November v4.5 current document. Preserve prior releases and historical token sources unchanged, including the 24 October baseline, November prototype colour PDFs, prior CSS token files, pattern colourways and logo masters. The new violet foundation is current approved direction; it does not erase historical palettes or automatically approve every shade, glow or component mapping.


### Notion cross-check and source precedence — 27 November 2026

This Git export was checked against the connected Notion **Design System & UX Guide**, whose latest edit was reported as **27 November 2026, 13:57:30 UTC**. The recent Notion edit records the owner-approved Violet-led + Signal Grove colour foundation, coordinated light/dark theme rules, contrast validation, and the refinement boundary for green/glow, payment-blue and component-state ramps.

The connected **Brand & Visual Design System** page was last edited earlier on 27 November and still labels its older teal/blue palette as a proposal. That older proposal is retained as historical context; it is superseded for the active primary colour foundation by the later owner-approved decision in Section 4. Its connected-node concept remains useful, while this guide adds the latest fiber + node/router logo exploration direction.

The Notion Design System page is a structured companion summary, not a verbatim copy of this complete Git guide. This file is the consolidated, detailed Git handoff. Preserve historical sources and avoid treating the logo artwork, shade ramps or application implementation as finalized merely because the foundation and direction are approved.

**Current decision status**
- Primary colour foundation: **FINALIZED by owner**.
- Fiber/node/router reusable logo direction: **accepted for exploration; final artwork and lockups pending**.
- Green shade/glow, payment-blue scale, component-state mappings and rendered WCAG verification: **refinement/implementation pending**.
- App-repository implementation: **not verified by this documentation update**.

**Owner approval:** Palette 1 — Violet-led + Signal Grove complementary colours, 27 November 2026.  
**Implementation:** Claude/app repository audit and token mapping pending.
