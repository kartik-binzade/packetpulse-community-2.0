# PacketPulse 2.0 — Design System & UX Guide (27 Nov 2026)

Created by: Kartik B | 1000110
Created time: November 26, 2026 1:21 PM
Category: Strategy doc
Last edited by: Kartik B | 1000110
Last updated time: November 27, 2026 7:41 PM

> **Notion capture type:** structured companion summary and navigation, not a verbatim copy of the complete source guide.
> 

# Design System and UX Guide

## Design direction

**Signal Grove** is a coherence framework, not an aesthetic ceiling. The visual direction is premium, technical, editorial, welcoming and human. Preserve deliberate whitespace, strong hierarchy, emotional comfort and frictionless task completion; avoid a generic template appearance.

## Workspace families

- **Editorial Workspace:** community, resources, discussions, learning, profile and reading.
- **Analytical Workspace:** operations, recruitment, admin, analytics and monitoring.
These are complementary patterns, not rigid product silos.

## Theme and colour baseline

- Global dark canvas baseline: `#0B1114`; Community deep teal is scoped to Community, not a global background.
- Light theme uses off-white global canvas and neutral/white surfaces.
- Brand family: deep teal, forest green, signal lime, cool charcoal; semantic colours remain distinct and accessible.
- Module accents: Community—Forest; Learning—Indigo; Recruitment—Blue; Payments—Plum; information—Slate.
- Matte Black Edition is a scoped experimental/reference theme for analytics-heavy dashboards, not a global palette replacement. Its prototype token family includes canvas `#0B0D0C`, surface `#171A18`, elevated `#222724`, border `#303631`, Forest `#156152`, Lime `#C7FE53`, and experimental Violet `#A78BFA`.
- Fonts: Inter UI, JetBrains Mono for technical text, Noto Sans Devanagari fallback.
- Accessibility baseline: WCAG 2.2 AA; breakpoints 640 / 768 / 1024 / 1280 / 1536.

## Owner-confirmed creative latitude (26 Nov)

Explore colours, gradients, Pantone-referenced studies, typography, layout, patterns, motion and component ideas. Examples are inspiration, not prescriptions. The current brand-pattern exercise calls for reusable **transparent overlays**; existing page/card backgrounds must remain unchanged unless separately requested.

## Pattern vocabulary

Packet Routes, Node Constellation, Signal Waves, Pulse Trails, Radar Echo, Secure Layers, Data Flow and Packet Matrix are starter concepts, not a closed set. Use multi-colour exploration; do not restrict motifs to green.

## UX and motion

Use clear hierarchy, responsive density, meaningful feedback, microinteractions and reduced-motion support. Dense operational views may be compact; long-form reading remains comfortable. Preserve focus, URL/history, filters, selected state, scroll and parent context in nested flows.

## Prototype boundary

Owner-approved prototype patterns are for review and disposition (retain/refine/restrict/remove). They are not production approvals or evidence of implementation.

## User-centred design and psychological responsibility — owner direction (27 Nov 2026)

**This is a product-wide design constraint and creative brief.** It refines the existing open creative direction; it does not lock PacketPulse into one visual style.

### Design from the user's lived context

Start each design with: who is using it, in what situation, what they are trying to accomplish, what uncertainty or emotional friction they may have, what information/action they need next, and what the interface must not make them feel or disclose.

Consider the distinct contexts of a fresher building confidence, a learner trying to understand progress, a professional exploring opportunities, a recruiter evaluating evidence, and a community member seeking belonging. Do not assume all users need a command centre, dashboard density, gamification or futuristic effects.

### Psychology to apply in observable UX

- **Cognitive load:** reduce competing visual signals, unnecessary choices, repeated labels and decorative complexity. Group information by the user's task and reveal detail when it becomes relevant.
- **Hierarchy and attention:** establish one clear primary purpose/action per context. Use contrast, scale, spacing and placement to guide—not hijack—attention.
- **Autonomy:** support skip, back, edit, explore, dismiss and privacy control where appropriate. Avoid coercive funnels, false urgency, dark patterns or shame-based completion.
- **Competence and progress:** show meaningful evidence of learning or completion, explain what changed and what the next step means. Do not invent scores, progress percentages, match certainty or achievement states.
- **Trust and transparency:** make verification, recommendations, recruiter access, payments and system status explainable. Visual polish must never imply a security guarantee, live data, verified status or AI certainty that the product cannot substantiate.
- **Belonging and dignity:** make first participation approachable; avoid status displays that humiliate newcomers or turn community contribution into a raw activity contest.
- **Attention ethics:** notifications, badges, motion and highlights must correspond to useful events. Do not use variable reward, endless stimulation or decorative urgency merely to increase retention.

These are design hypotheses and professional principles, not claims that a particular effect works for every person. Validate important decisions with usability evidence.

### Visual creativity with purpose

Creative work may explore composition, typography, texture, illustration, colour, pattern, depth, editorial layouts and interaction. The deciding test is not “does it look futuristic?” but “what does this help the user perceive, understand, remember or do?”

The Isometric Network Modules / Network Landscape and any dark glass / organic data-stream references are **inspiration, not templates to copy**. Avoid generic AI/fintech aesthetics: gratuitous glowing neural spheres, meaningless HUD labels, glass panels without a task, random node networks and constant neon. Use a network metaphor only when it explains a real relationship—people, knowledge, evidence, opportunity, routes or system connectivity.

### Artifact and screen design brief

For each screen, illustration, pattern or interactive artifact, document:

1. User and context; primary task and desired outcome.
2. Psychological need or friction (uncertainty, trust, orientation, confidence, belonging, decision effort).
3. Functional meaning of each prominent visual element.
4. Information hierarchy and why each item receives attention.
5. Interaction and state behavior, including failure and recovery.
6. Motion rationale and static/reduced-motion alternative.
7. Accessibility, responsive behavior, performance and privacy.
8. Validation plan: what we need to observe or test, and what would cause us to retain, refine, restrict or remove the design.

### Micro-animation principles for Claude

Motion is feedback or orientation—not decoration by default. Use short, purposeful transitions for cause-and-effect (selection, save, expand, route change, verification result, progress update); preserve spatial continuity where it helps users understand where content went. Prefer subtle, non-looping state transitions over perpetual ambient animation. Avoid animating every node, card or badge.

- Never animate to imply a real-time signal when the underlying data is static or delayed.
- Do not make status depend on animation or colour alone; provide text/state semantics.
- Respect `prefers-reduced-motion`; offer stable alternatives and avoid parallax, flashing, large zooms or motion that can cause discomfort.
- Pause nonessential effects off-screen or when the page is inactive; avoid continuous GPU-heavy 3D on ordinary product screens.
- Prefer CSS/SVG for simple effects; use WebGL/3D only when it provides a meaningful, tested user benefit.
- Measure performance on mobile and low-powered devices; keep motion interruptible and never delay a user's action.
- Animation timing/easing should be consistent with the component's purpose and current design tokens, not selected solely for spectacle.

**Review rule:** If removing a visual or animation makes the task clearer without losing meaningful information, remove it. The user experience—not the portfolio image—is the success criterion.

## Visual identity & colour-system reset — exploration brief (27 Nov 2026)

**Status: exploratory proposal — not a final palette, logo, font, or production-token approval.** This update preserves the existing Signal Grove and theme history as references. The supplied current branch references are `#615AB9`, `#16133E`, `#F4F4F4`, and `#F0F0F3`. The uploaded palette image adds a violet scale: `#F1F5F9`, `#8B7FF7`, `#745AF9`, `#5C30FC`, `#1A1A2E`. The uploaded SVG is a starter UI style guide (blue/purple/pink, Roboto, controls/forms/alerts/icons/spacing); use it as a systems reference, not as a brand lock or copy.

### Brand idea

**Confident, technical, distinctive, human.** A connected pulse/network mark can communicate people, learning, evidence and opportunity—but only if its geometry remains recognizable at small sizes and its paths do not become generic decorative circuitry. Keep the wordmark warm and legible; use violet as a clear identity signal, not a blanket glow. “Connect, Learn & Grow Together.”

### Three palette directions (compare; none approved)

| Direction | Primary | Secondary | Background |
| --- | --- | --- | --- |
| 1 — Violet-led / closest to current branch | Violet `#615AB9`; midnight `#16133E` | Lavender `#8B7FF7`; neutral `#F4F4F4` | Cool mist `#F1F5F9`; deep `#1A1A2E` |
| 2 — Expressive / brighter signal | Electric violet `#745AF9`; deep ink `#1A1A2E` | Soft violet `#8B7FF7`; pale neutral `#F0F0F3` | `#F1F5F9` |
| 3 — Technical / high-depth | Vivid purple `#5C30FC`; midnight `#1A1A2E` | Blue-teal `#2C9CB5`; cool gray `#F0F0F3` | `#F1F5F9` |

**Decision criteria:** contrast in real UI states, identity distinctiveness, cross-module compatibility, dark/light theme behavior, emotional tone, accessible semantic mapping, and ability to scale beyond landing-page artwork. Do not select by swatch preference alone.

### Token architecture (implementation-ready structure; values remain proposal)

- Primitive layer: raw brand hues, neutral ramp, semantic ramps; names describe hue/step, not UI use.
- Semantic layer: `color.brand.primary`, `color.brand.secondary`, `color.text.primary`, `color.text.muted`, `color.surface.canvas`, `color.surface.raised`, `color.border.default`, `color.focus.ring`, `color.action.primary`.
- Feedback layer: success, warning, danger, info—each with foreground, background, border, icon; never rely on hue alone.
- Component layer: button, badge, card, input, navigation, chart aliases reference semantic tokens, not raw hex.
- Theme layer: light/dark maps semantic tokens to primitives. Module accents (Community/Learning/Recruitment/Payments) are scoped aliases; do not recolour global surfaces per module.
- Keep source tokens in one canonical file; generate CSS/JSON/platform outputs from it where the app pipeline supports generation. Avoid duplicated hand-maintained hex values.

### Logo exploration and usage

Explore: (1) primary horizontal symbol + wordmark, (2) compact stacked lockup, (3) symbol-only favicon/app icon, (4) monochrome light/dark, (5) one-colour print/low-colour fallback. Test clearspace, minimum size, silhouette recognition at 16/24/32 px, single-colour reproduction, contrast on neutral/brand surfaces, and safe-area padding. No gradients inside the mark until a flat silhouette is approved. Preserve existing logo/source files; create variants as new versioned assets, never overwrite originals.

### Typography proposal

Inter as the UI/brand working candidate: strong legibility and broad UI coverage. Use a clear role scale (display, page title, section, body, label, caption); prefer readable line lengths and restrained weights. JetBrains Mono only for genuinely technical values/IDs/code—not decorative labels. Confirm font licensing, loaded weights, language coverage and fallback (including Noto Sans Devanagari) before production lock.

### Colour and accessibility rules

- Target WCAG 2.2 AA: 4.5:1 normal text, 3:1 large text and meaningful UI boundaries/focus indicators. Measure every foreground/background pair; don't infer contrast from the palette board.
- Brand violet is not automatically a text colour on every light surface; use a tested darker accessible step for text and controls.
- Lime/bright violet/teal are accents for emphasis, not large text or full-page fills without contrast testing.
- Separate brand colour from semantic status. Success ≠ brand green by default; danger/warning must remain conventional and unmistakable.
- Include hover, pressed, focus-visible, disabled, selected, loading, validation and high-contrast states; preserve non-colour cues and keyboard focus.
- Gradients are decorative/illustrative unless they encode a meaningful state; never place small text over unstable gradient contrast.

### Brand applications and asset governance

Create social templates for community, learning/assessment, verified skills and jobs with a shared grid, logo-safe zone, typography and adaptable imagery—not one repetitive template. Favicon/app icon: simplified symbol, tested at 16–48 px and in browser tabs, mobile launcher, dark/light backgrounds. Keep SVG master + exported PNG sizes; document asset origin, version, approved use, and source. Store exploration separately from approved assets.

### User-first visual review

For each proposal record audience/context, task, intended psychological support (orientation, trust, confidence, belonging or reduced decision effort), functional meaning, interaction/state, accessibility/performance, and test. Keep/remove an effect based on whether it helps the user understand or act—not whether it looks impressive.

## Finalized colour-token foundation — Violet-led + Signal Grove (27 Nov 2026)

**Owner decision: approved as the primary colour foundation.** This supersedes the exploratory status of Palette 1 only. It does not finalize every shade, green treatment, gradient, or component-state value; those remain implementation/design refinements with Claude and contrast validation.

### Core brand tokens

| Token | Value | Role |
| --- | --- | --- |
| Brand Violet | `#615AB9` | Primary brand identity and key actions |
| Brand Deep | `#16133E` | Deep brand ink, strong hierarchy, dark-theme anchor |
| Brand Secondary Violet | `#8B7FF7` | Secondary emphasis, selected states, illustration |
| Light Canvas | `#F1F5F9` | Light-theme page background |
| Forest | `#156152` | Complementary growth/community accent; use strategically |
| Signal Lime | `#C7FE53` | High-attention accent; limited highlights and select interactive emphasis |
| Soft Forest Accent | `#8BBBA5` | Softer green tint for supportive surfaces/illustration; confirm contrast per use |
| Payments Blue | blue family | Payments-specific accent family; shade tokens to be calibrated with Claude |
| Black | `#0B0D0B` and suitable neutral shades | Dark text, depth, dark surfaces and contrast |
| White | `#FFFFFF` | Clean surfaces, reversed text/mark and visual balance |

### Theme approach

- Maintain coordinated light and dark themes using the same semantic token names.
- Light: cool mist canvas `#F1F5F9`, white/raised surfaces, deep ink text, violet actions; forest and lime are accents rather than competing primary colours.
- Dark: deep ink/near-black canvases and layered charcoal surfaces; use accessible violet/soft-violet for actions and emphasis, readable off-white text, forest/teal as controlled depth, and lime sparingly for high-salience highlights.
- Do not simply invert the light palette. Define and test surface, text, border, focus, hover, pressed, selected, disabled and status pairs independently in each theme.

### Strategic colour hierarchy

1. Violet remains the dominant and immediately recognisable PacketPulse identity.
2. Forest Green adds grounded growth, trust and community character; refine its shades and optional restrained glow with Claude, but avoid making green a second dominant brand.
3. Signal Lime is a scarce visual signal—not a large-area default. Use for selected highlights, progress cues or a clearly meaningful primary emphasis when contrast and context support it.
4. Black, deep ink, white and neutral grays establish readability, hierarchy, calm and balance.
5. Payments blues are scoped to payment-related information and must not alter global brand identity.
6. Semantic success/warning/error/info remain separate, conventional and accessible; never use lime or violet as a substitute for status meaning.

### Token implementation contract

Use a single canonical primitive → semantic → component → theme token structure. Components consume semantic/component aliases, never raw palette hex values. Keep module accents scoped. Preserve previous Signal Grove and Palette 1 exploration files/history; mark this owner-approved foundation as the active direction without deleting prior proposals.

### Acceptance and refinement

- Verify WCAG 2.2 AA contrast for text (4.5:1 normal; 3:1 large) and meaningful UI boundaries/focus indicators; test actual rendered pairs in both themes.
- Include visible non-colour status cues, keyboard-visible focus and complete interaction states.
- Review green/forest/lime shades, gradients and any glow with Claude against legibility, restrained hierarchy, performance and reduced-motion requirements.
- Record final calibrated ramps and generated outputs in the canonical token source before implementation is treated as complete.

**Status:** Primary colour foundation — FINALIZED by owner. Shade ramps, green/glow treatment, payment blue scale and component-state mappings — refinement pending.

## Owner Decision — Claude Authority for Token Refinement and Logo Completion

**Decision date:** 27 November 2026
**Status:** APPROVED BY PRODUCT OWNER
**Scope:** Operational colour-token system, component-state mappings, and reusable logo completion/variations.

The product owner explicitly delegates the following design refinement and completion decisions to Claude, which should apply professional design-system and brand-design best practices:

- Complete the operational colour-token system, including primitive and neutral ramps, semantic colours, theme mappings, module aliases and component tokens.
- Refine exact colour shades and hierarchy within the approved Violet-led + Signal Grove foundation.
- Decide practical component-state combinations for light and dark themes (default, hover, pressed, focus, selected, disabled, loading, validation, success/error and related states).
- Refine Forest Green and Signal Lime treatments, including whether restrained glow or tonal effects add value.
- Define the scoped Payments blue shades and their semantic/component use.
- Complete reusable logo artwork and suitable variations/lockups, including horizontal, compact/stacked, symbol-only, monochrome and reversed treatments, as appropriate.
- Establish logo geometry, clearspace, minimum sizes, favicon/app-icon adaptations and usage guidance.

### Fixed owner-approved foundation — do not change without further owner approval

- Primary Violet: `#615AB9`
- Deep: `#16133E`
- Secondary Violet: `#8B7FF7`
- Light Background: `#F1F5F9`
- Forest: `#156152`
- Signal Lime: `#C7FE53`
- Soft Forest: `#8BBBA5`
- Black/near-black and white as balancing neutrals
- Violet remains the dominant brand identity; Forest and Lime complement it.
- Coordinated light and dark themes are required.

### Claude's decision authority

Claude is authorized to make the detailed design decisions listed above independently, using best practices and the existing project context. It should not pause for owner approval on each shade, token, component state or logo variation. It should document its rationale, keep decisions coherent and accessible, preserve source assets/history, and present the completed result for review.

This delegation does **not** authorize changing the approved primary brand foundation, product scope, user workflows, privacy, permissions or consequential user-facing policy. Those remain owner-governed unless explicitly delegated later.

### Required quality checks

- Test actual foreground/background combinations and interaction states for WCAG 2.2 AA.
- Ensure status is not communicated by colour alone.
- Verify readability and visual hierarchy in both themes.
- Ensure logo works as a flat one-colour mark and at small sizes before optional effects.
- Prefer purposeful, restrained effects; no glow/gradient is required merely for decoration.
- Keep tokens maintainable and reusable, with one canonical source and clear semantic names.
- Record the resulting token/brand decisions and implementation files in the Git change log.

**Source:** Product owner decision stated in the PacketPulse 2.0 project conversation on 27 November 2026.