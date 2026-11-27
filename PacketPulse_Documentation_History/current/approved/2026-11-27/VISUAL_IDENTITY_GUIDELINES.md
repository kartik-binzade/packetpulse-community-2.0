# PacketPulse 2.0 — Visual Identity & Colour System
**Foundation v1.0 | 27 November 2026 | Palette 1 approved by owner; shade/state refinements pending**

## Brand intent
Confident, technical, distinctive and human. PacketPulse connects people with learning, demonstrated skills, community and opportunity. The identity should communicate useful connection and forward movement without defaulting to cold enterprise SaaS, generic AI motifs or decorative neon.

Tagline: **Connect, Learn & Grow Together.**

## Source references
- Existing branch references: `#615AB9`, `#16133E`, `#F4F4F4`, `#F0F0F3`.
- Supplied palette image: `#F1F5F9`, `#8B7FF7`, `#745AF9`, `#5C30FC`, `#1A1A2E`.
- Supplied `colr-sys.svg`: starter UI style guide with blue/purple/pink, Roboto, type scale, buttons, forms, alerts, icons and spacing. Treat as a system-structure reference, not a final brand prescription.
- Existing Signal Grove and prior logo assets remain preserved and are reference material, not silently replaced.

## Approved foundation — Palette 1 Violet-led + Signal Grove accents

Palette 1 is the approved primary foundation: Violet `#615AB9`, Deep `#16133E`, Secondary Violet `#8B7FF7`, Background `#F1F5F9`. Complement with Forest `#156152`, Signal Lime `#C7FE53`, Soft Forest `#8BBBA5`, Payments blue family (shade refinement pending), black `#0B0D0B` and white `#FFFFFF`. Violet remains dominant; forest and lime are strategic accents. Light and dark themes share semantic token names and require independently tested mappings. Claude may refine green shades/glow and component-state ramps without changing the approved foundation.

## Earlier palette directions — preserved for history, not active
| Direction | Primary | Secondary | Background |
|---|---|---|---|
| 1 — Violet-led, branch-adjacent | `#615AB9`, `#16133E` | `#8B7FF7`, `#F4F4F4` | `#F1F5F9`, `#1A1A2E` |
| 2 — Expressive violet | `#745AF9`, `#1A1A2E` | `#8B7FF7`, `#F0F0F3` | `#F1F5F9` |
| 3 — Technical depth | `#5C30FC`, `#1A1A2E` | `#2C9CB5`, `#F0F0F3` | `#F1F5F9` |

Select only after contrast and product-context evaluation. Palette boards do not prove accessible UI combinations.

## Token model
1. **Primitives:** raw hue/neutral ramps, kept separate from interface meaning.
2. **Semantic tokens:** brand, text, canvas, surface, border, focus, action and feedback roles.
3. **Component aliases:** buttons, cards, badges, inputs and navigation reference semantic tokens only.
4. **Theme maps:** light/dark assign semantic tokens to primitives.
5. **Module aliases:** Community, Learning, Recruitment and Payments accents are scoped—not global surface replacements.

Use a canonical token source and generate CSS/JSON/platform outputs where possible. Do not duplicate raw hex values across components.

## Logo
Explore horizontal, stacked, symbol-only, monochrome and reversed variants. The connected-node/pulse idea should represent a meaningful relationship and remain legible at 16–32 px. Test clearspace, minimum size, silhouette, single-colour reproduction, contrast and safe-area. Prefer a flat master mark; gradients may be used in applications, not required for recognition. The included SVG is an idea sketch only.

## Typography
Inter is the working UI/brand candidate, pending license, coverage and implementation review. Define display, page-title, section, body, label and caption roles with readable line lengths and restrained weights. JetBrains Mono is reserved for technical values/code. Include a suitable multilingual fallback such as Noto Sans Devanagari.

## Colour/accessibility
- WCAG 2.2 AA: 4.5:1 normal text; 3:1 large text and meaningful UI boundaries/focus indicators.
- Test each actual foreground/background pairing. Use a darker violet step for small text where bright violet fails.
- Bright accents are for emphasis; avoid large untested fills or small text on gradients.
- Semantic success/warning/error/info are distinct from brand hues and always include non-colour cues.
- Define hover, pressed, focus-visible, selected, disabled, loading and validation states.
- Never imply verified/live/secure status through visual styling without corresponding product truth.

## Brand applications
Social templates: community, learning, verified skills and job opportunities. Shared grid, logo-safe zone and type hierarchy; imagery should show real human context where appropriate and avoid stocky generic AI visuals.
Favicon/app icon: simplify to the mark; test 16, 24, 32, 48 px, browser tab, launcher, light/dark and maskable safe area. Maintain SVG master and export PNGs.
Keep source, exports, license/source, version and status together. Exploration assets must not be mixed with approved production assets.

## Review checklist
- User/context and task are clear.
- Visual motif has a real meaning.
- Information hierarchy supports the next action.
- No deceptive status, false urgency or attention manipulation.
- Contrast, keyboard focus, reduced motion and responsive states are tested.
- Performance is acceptable on mobile/low-power devices.
- Decision recorded as Retain / Refine / Restrict / Remove.
