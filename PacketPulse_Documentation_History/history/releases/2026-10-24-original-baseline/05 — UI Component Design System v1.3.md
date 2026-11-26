# PacketPulse 2.0 — UI Component Design System

**Version 1.3 · 24 October 2026**  
**Status:** Upgrade specification; proposed additions remain proposals until approved.  
**Purpose:** Detailed component and pattern reference for Documents 1–4.

## 1. Authority and design principles

This document extends the existing PacketPulse component system. It does not replace the Product Guide, approved color-system PDF, color token CSS, contrast report, or confirmed DEC records. External design-system guides are used only for organization and documentation practices.

- Audit existing components before adding or replacing them.
- Preserve approved brand colors and six section identities: Community, Learning, Practice, Assessments, Jobs, Payments.
- Build with the hierarchy **Foundation → Primitive → Core component → Product component → Pattern → Screen**.
- Use semantic tokens rather than one-off values.
- Document states, accessibility, responsiveness, and implementation limits.
- Distinguish static visuals, prototypes, and production-implemented behavior.

## 2. Status vocabulary

| Status | Meaning |
|---|---|
| Confirmed / Approved | Explicitly approved in PacketPulse source-of-truth documentation |
| Proposed | Recommended but awaiting approval |
| Experimental | Exploratory work not ready for production |
| Deprecated | Retained only for migration or historical reference |
| Implemented | Verified in the actual product codebase |
| PV | Built and tested in the reference prototype only |

Do not invent component owners, approval history, or implementation status.

## 3. Foundation contract

### 3.1 Color
Use the approved PacketPulse color-system PDF, token CSS, contrast report, and theme previews as implementation references, subject to confirmed decision records. Do not add palette values merely to differentiate sections.

Semantic roles should include, where mapped to approved values: `color.background.canvas`, `color.background.surface`, `color.background.surface-subtle`, `color.text.primary`, `color.text.secondary`, `color.text.disabled`, `color.border.default`, `color.border.strong`, `color.action.primary`, `color.action.primary-hover`, `color.status.success`, `color.status.warning`, `color.status.danger`, `color.status.info`, `color.focus.ring`.

Theme rules:
- Dark theme uses the shared charcoal shell; Community's deep-teal core canvas stays scoped to Community.
- Light theme uses a neutral light shell with localized existing section tints/accents.
- Other section identities use scoped zones and approved existing accents.
- Status meaning must not rely on color alone.

### 3.2 Token layers
1. **Primitive:** raw approved palette, dimensions, type sizes, radius, and elevation values.
2. **Semantic:** purpose-based roles, including theme mappings.
3. **Component/pattern:** aliases added only when they provide meaningful component-level control.

Naming pattern: `category.role.variant.state`. Every token needs purpose, value/reference, source relationship, theme compatibility, and usage note. Component tokens should alias semantic tokens wherever practical.

### 3.3 Typography
Use seven semantic roles:
- **Display:** marketing and feature-level headings.
- **Heading:** page and section hierarchy.
- **Title:** card and panel titles.
- **Body:** primary reading content.
- **Label:** controls, fields, navigation.
- **Caption:** metadata, helper text, timestamps.
- **Mono/Data:** technical identifiers, code, metrics, financial values.

For each role, document approved family/fallback, size, weight, line height, letter spacing when relevant, readable line length, theme specimens, responsive behavior, multilingual fallback, and contrast. Use named variants rather than unnecessary new roles.

### 3.4 Other foundations
Document spacing on a consistent 4 px rhythm; radius roles for controls/cards/panels/dialogs/pills; elevation and surface/border relationships; grid/container/breakpoint rules; iconography; focus rings; motion; and accessibility. Values not already approved must be labeled **Proposed**.

## 4. Component inventory

### 4.1 Foundations and primitives
Color variables/theme modes; typography; spacing/dimensions; radius/elevation; grid/layout; iconography/focus; motion/accessibility; icon, text, divider, avatar, spinner, progress indicator, tooltip, surface/container.

### 4.2 Core UI components
Buttons/icon buttons; inputs, textareas, selects, search; checkbox, radio, toggle, switch; badge, chip, tag; card/surface; tabs/navigation; alert, toast, dialog; menu, popover, dropdown; table, pagination, filters; skeleton/loading indicator; empty state; inline validation.

### 4.3 Product components
Member profile summary; skill verification badge/evidence summary; assessment result card; course/lab progress panel; community question/answer card; job listing card; recruiter candidate summary; application status timeline; invoice/payment-status panel; administrative review row.

### 4.4 Complex patterns
Member dashboard; learning and assessment workflow; skill verification workflow; community Q&A; job application workflow; recruiter candidate review; payment/invoice workflow; administrative moderation and verification.

Shared components remain page-agnostic. Product components compose shared components instead of creating unrelated visual duplicates.

## 5. Component documentation template

Every component entry includes:

**Identity:** name/category, purpose, relevant modules, status, last-updated date when known.  
**Anatomy:** internal parts, token/style references, spacing/alignment, dimensions/constraints.  
**Configuration:** variants, sizes, properties/defaults, optional icons/badges/supporting text/avatars/trailing actions, content slots, text constraints.  
**Behavior:** triggers/actions, state transitions, loading/disabled logic, validation/error recovery, empty/success behavior, keyboard/focus behavior.  
**Accessibility/responsiveness:** accessible name/role, focus, status announcements, contrast/target size, desktop/tablet/mobile adaptation, long content/wrapping/overflow, zoom/reflow, theme behavior, reduced motion.  
**Implementation/maintenance:** token dependencies, component dependencies, reuse guidance, known limitations, tests/evidence, migration/changelog notes, owner only if formally assigned.

## 6. Variants, properties, and states

Expose only meaningful customization. Variant properties may include primary/secondary/tertiary/destructive type, small/medium/large size, emphasis/surface treatment, and icon placement/alignment.

Relevant states may include default, hover, focus-visible, pressed, selected, disabled, loading, error, success, and expanded/collapsed. Not every component needs every state.

Boolean properties may show/hide icons, supporting text, badges, avatars, helper messages, or trailing actions. Text properties may configure labels, supporting text, badge text, headings, status messages, and links. Use Auto Layout, Hug/Fill/fixed sizing, constraints, nested components, and clear layer names where supported. Demonstrate overflow, long labels, theme compatibility, and responsive resizing. A static state matrix is not a functioning prototype.

## 7. Core interaction requirements

- **Buttons:** clear label, focus, pressed, disabled, loading; prevent duplicate submission when needed.
- **Fields:** visible label, helper/error association, focus/invalid state; placeholder is not the only label.
- **Search/filter:** applied filters, no-result state, clear/reset, loading/error feedback.
- **Badges/status:** text and/or icon plus color; distinguish verification/workflow states semantically.
- **Cards:** whole-card click only when appropriate; preserve distinct nested actions and keyboard access.
- **Tabs/navigation:** visible current location and correct keyboard semantics.
- **Alerts/toasts:** clear severity/message/action; do not use a transient toast as the only record of a critical result.
- **Dialogs/drawers:** focus management, labelled title, suitable keyboard dismissal, clear actions.
- **Tables/filters:** labels, sorting/filter state, empty state, responsive strategy, pagination.
- **Progress:** communicate current/total where meaningful; progress alone does not imply success.
- **Application timeline:** recorded status, timestamp when available, next action/explanation; never invent recruitment events.
- **Verification:** distinguish declared, pending, verified, and expiry/revocation/unsuccessful states only where supported.
- **Payment:** distinguish initiated, processing, success, failure, refunded, action-required where supported; success requires confirmed service response.

## 8. Product pattern contracts

### 8.1 Member dashboard
Relevant personal progress, verified-skill overview, learning/assessment recommendations, job/application updates, notifications, and actionable next steps according to product scope. Include loading, empty, error, and permission states.

### 8.2 Learning and assessments
Instructions, active attempt, save/submit processing, results, feedback, retakes, completion. Reflect actual attempt limits and eligibility rules from the Product Guide.

### 8.3 Skill verification
Declared skill, evidence submission, pending review, assessment/reviewer decision, approval, and expiry/revocation/unsuccessful outcomes where applicable. Expose evidence only to authorized viewers.

### 8.4 Community
Question creation/editing, answers, accepted-answer state, tags, helpful feedback, reporting, and moderation actions.

### 8.5 Recruitment and application tracking
Position creation/publishing, candidate filtering/review, authorized candidate evidence, interview workflow, review notes, application timeline, and terminal outcomes as defined by product rules. Candidate and recruiter views follow role/organization permissions.

### 8.6 Payments and invoices
Initiation, processing, success/failure, transaction history, invoice, refund processing/status, and clear confirmation. Avoid exposing sensitive payment data.

### 8.7 Administration
Verification queues, content moderation, taxonomy management, payment review, permission-aware actions, and audit/activity history.

Each pattern documents user problem, entry/exit conditions, dependencies, primary/secondary actions, state transitions, loading/empty/error/success/permission states, responsive composition, accessibility, privacy, and audit/analytics requirements where defined.

## 9. Motion and microinteractions

Motion communicates state or reinforces an action; it must not delay access, hide information, destabilize layout, or cause accidental clicks. Respect reduced-motion settings and provide nonanimated feedback.

Proposed starting durations, pending validation: `motion.duration.fast` 120 ms; `motion.duration.standard` 200 ms; `motion.duration.slow` 280 ms; `motion.duration.entrance` 320 ms.

Document trigger, visual response, duration, easing, final state, and reduced-motion alternative for buttons, toggles, tabs, menus, dialogs, toasts, accordions, skeletons, progress, verification, application submission, payment confirmation, and completion. Avoid flashing, excessive bounce, continuous decorative motion, and celebration effects for serious failures.

## 10. Responsive and accessibility checklist

- [ ] Keyboard operation and visible focus defined.
- [ ] Accessible name/role and status announcements defined.
- [ ] Contrast checked against approved color-system evidence.
- [ ] Status not communicated by color alone.
- [ ] Zoom/reflow and long-content behavior documented.
- [ ] Desktop, tablet, and mobile behavior shown.
- [ ] Reduced-motion behavior defined.
- [ ] Loading, empty, error, success, disabled, and permission states covered where relevant.
- [ ] Important information is not available only on hover.
- [ ] Interactive states remain understandable in both themes.

## 11. Suggested design-library organization

Adapt to the existing Figma file rather than restructuring without benefit:
`00 — Start Here`; `01 — Foundations`; `02 — Design Tokens`; `03 — Core Components`; `04 — Component States & Variants`; `05 — Complex UI Patterns`; `06 — Product Examples`; `07 — Responsive Behavior`; `08 — Accessibility & Motion`; `09 — Documentation & Changelog`.

## 12. Release acceptance criteria

1. Existing components audited before replacement.
2. Approved foundations/token mappings documented.
3. Components use reusable master definitions and semantic tokens.
4. Variants, properties, states, and slots documented.
5. Product patterns compose approved shared components.
6. Light/dark themes and six section identities remain consistent.
7. Responsive behavior demonstrated on desktop/tablet/mobile.
8. Seven typography roles and responsive rules documented.
9. Motion is purposeful, consistent, accessible.
10. Documentation supports designer/developer handoff.
11. New/inferred decisions marked Proposed.
12. Implemented status supported by actual codebase evidence.

## 13. Related documents
Document 1 — Product Guide; Document 2 — Design System and UX Guide; Document 3 — Users, Screens and Page Flows; Document 4 — Delivery Plan and Developer Handoff; approved color-system PDF, token CSS, contrast report, and theme previews.

## 14. Reference-board integration and additional examples

The team handoff includes a visual overview board and user-supplied inspiration images. Use these references to discuss hierarchy, composition, surface balance, card density, and component relationships. They are not authoritative for exact colors, typography values, or production behavior; these remain defined by the approved Color System PDF, Document 2, and the documented product workflow.

### 14.1 Analytics and metric cards

Use KPI/analytics cards when a metric helps users make a decision. Each should define a title, value, unit/period where needed, comparison or trend context, optional chart, and accessible text summary. Avoid decorative charts with no interpretation. If a metric is consequential, preserve its data source/period and make the underlying detail available.

### 14.2 Profile, candidate, and job cards

Image-led profile/candidate cards may include a portrait or avatar, name, role, location, relevant experience, verified evidence where permitted, match context, and a clear action. Job cards may include role, organization, location/work mode, salary range where available, experience level, posted date, and save/apply actions. Do not expose candidate or member data beyond authorized permissions, and do not style self-declared skills as verified.

### 14.3 Timeline and handoff cards

Application-tracking timelines show recorded events, timestamps where available, current stage, responsible next actor, and next action. Handoff events must state who did what and when. Never invent recruiter activity or imply a workflow transition that the backend has not recorded.

### 14.4 Payment and transaction cards

Balances, expenses, invoices, and transactions require legible number formatting, currency/unit labels, a period or timestamp, semantic transaction status, and non-color cues. Payment success appears only after service confirmation. Sensitive payment information must remain masked or omitted according to product rules.

### 14.5 Exact-value rule for visual boards

The included visual overview board is a visual guide only. Exact hex values, semantic foreground/background pairs, light/dark mappings, and allowed usage are controlled by `PacketPulse_2.0_Design_Color_System.pdf` revision 1.2 and the aligned CSS token file. If an illustrative board seems to differ, use the approved artifacts, not sampled pixels from the image.
