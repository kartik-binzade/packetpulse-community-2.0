# PacketPulse Design Token & Visual System History

**Tracking begins:** 24 October 2026  
**Purpose:** Maintain an auditable history of design tokens, themes, palettes, typography, spacing, components, motion and brand patterns. A current palette never erases a previous approved or experimental set.

## 1. Authority model

| State | Meaning |
|---|---|
| Historical approved baseline | Exact source authority at that date; preserve unchanged |
| Current approved | Explicitly owner-approved for current production design |
| Approved Prototype | Included in review build; can be retained/refined/restricted/removed |
| Experimental | Exploratory direction, not final production palette |
| Superseded | No longer current, but preserved for reference |
| Unresolved | Source conflict or owner decision still needed |

## 2. 24 October 2026 — Color System revision 1.2 (historical approved baseline)

**Source files retained:**
- `history/releases/2026-10-24-original-baseline/06 — Design Assets and References/Approved Color System — Revision 1.2.pdf`
- `design/tokens/history/2026-10-24/PacketPulse-2.0-Color-Tokens.css`
- The source package also includes a colour contrast report, light/dark previews and a design-system overview board.

This is the exact approved token source for the baseline. Preserve all original HEX values and semantic mappings. The historical foundation includes deep teal, forest, signal lime, neutral cool-charcoal surfaces, eucalyptus/soft surfaces, slate information, module accents and paired semantic states for both themes.

The original module mapping is Community/Brand = Forest; Learning = Indigo; Recruitment = Blue; Payments = Plum. Practice uses Learning identity for code/lab treatment; Assessments has localized verification treatment; Jobs uses Recruitment blue; Payments uses Plum. Community's deep-teal core canvas is scoped to Community routes/sections, not the global canvas.

For exact values, consult the unchanged CSS and PDF above rather than copying values from moodboards or later design mockups.

## 3. 24 November — Signal Grove workspace exploration

The 24 Nov design direction introduced Editorial and Analytical workspace archetypes, intentional whitespace, density modes and Matte Black as a preferred analytical reference. The original 24 Oct tokens were not erased.

## 4. Matte Black Edition — prototype palette

The 25–26 Nov discussion explored a Matte Black treatment for analytics-heavy screens. The latest reference values include:

| Token concept | Prototype reference | Status |
|---|---|---|
| Matte canvas | `#0B0D0C` | Approved Prototype reference |
| Raised surface | `#171A18` | Approved Prototype reference |
| Elevated surface | `#222724` | Approved Prototype reference |
| Border | `#303631` | Prototype reference; validate contrast |
| Forest | `#156152` | Existing brand token |
| Signal Lime | `#C7FE53` | Existing brand token |
| Violet data accent | `#A78BFA` | Experimental chart/visual accent |

These are not a global replacement for the original `#0B1114` cool-charcoal baseline or any other original token. Use Matte Black as a workspace treatment in the review build and keep its scope traceable.

## 5. Broader colour exploration — owner-confirmed, 26 November

The owner explicitly clarified: green must not dominate every component or pattern. Explore the full existing Signal Grove/module/semantic token system and new colour combinations, gradients, tonal ramps, accent families and Pantone-referenced explorations where they improve the product.

Exploratory references mentioned in discussions include cyan, azure, violet, lavender, amber, coral and additional combinations. These are exploration directions, not all approved production token additions. Official Pantone IDs and digital conversions must be verified from an authoritative swatch source; never invent Pantone matches.

## 6. Pattern system — independent overlays, 26 November

The current owner instruction is specific: do not change the background for the pattern exercise. Brand patterns are optional transparent layers that can be used across cards, hero content, headers, empty states and other suitable components. They can be recoloured, scaled, cropped, combined, animated or omitted.

The available starter family includes:
- Packet Routes
- Node Constellation
- Signal Waves
- Pulse Trails
- Radar Echo
- Secure Layers
- Data Flow
- Packet Matrix

This is an expandable vocabulary, not a closed catalogue. Future motifs can include packet fragmentation, topology meshes, route maps, frequency patterns, wave interference, trust boundaries, gradients, data particles or other visual ideas.

Original SVG assets and previews are stored in `design/brand-patterns/`. Existing backgrounds remain unchanged unless a separate owner-reviewed surface redesign is undertaken.

## 7. Typography and variable-font history

Inter remains the current product UI type direction; JetBrains Mono remains the technical/code type direction; Noto Sans Devanagari remains the Hindi fallback in the 24 Oct baseline. Polymode Sans was introduced as an exploratory display/editorial typeface reference, not as a replacement for product UI typography. Keep type experiments in `design/references/` and record licence, weights/axes and rendered performance before adoption.

## 8. Spacing, density and whitespace

The base spacing/token system from 24 Oct is preserved. Later discussions established intentional whitespace and three task-oriented density directions: Comfortable (default), Compact (data-heavy workflows) and Reading (long-form content). These are experience patterns, not a mandate to shrink every screen or make every page airy regardless of task.

## 9. Motion tokens and interaction feel

Motion should communicate feedback, state change, orientation or comprehension. Microanimations are encouraged where they improve perceived quality. The preferred review-build implementation candidate is Motion for React, with Transitions.dev as a recipe/reference source. Reduced-motion alternatives, keyboard interaction and performance remain essential checks.

Record for each motion: trigger, duration, easing, distance/scale, enter/exit behavior, stagger, reduced-motion fallback and affected component.

## 10. Token change record template

| Field | Description |
|---|---|
| Token key | Stable semantic token path, e.g. `color.surface.canvas` |
| Source ID | Original token name or CSS variable |
| Theme/scope | Light, Dark, Matte Black, module, component |
| Previous value | Exact prior value |
| Proposed/new value | New value or range |
| Status | Historical approved / Approved Prototype / Experimental / Production approved |
| Source | File, version and date |
| Decision | Owner/team decision or discussion reference |
| Rationale | Why it changed |
| Evidence | Contrast, user feedback, screenshots, tests |
| Rollback | How to restore previous value |

## 11. Known reconciliation item

The exact original 24 Oct CSS/PDF remain authoritative for the historical baseline. Matte Black and expanded colour/pattern work are review-build references. The owner has not asked to repaint existing backgrounds during pattern exploration. A future global dark-canvas or semantic-token change must be an explicit new decision with before/after token values and a documented impact map.
