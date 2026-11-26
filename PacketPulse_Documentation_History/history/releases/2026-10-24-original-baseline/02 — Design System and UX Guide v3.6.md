# PacketPulse 2.0 — 2. Design System and UX Guide

Version 3.6 · 24 October 2026 · Owner: design lead (to be named) · Replaces Document B (Design System, v2.0). Decisions are cited as DEC, CON, OPEN in Document 1; screens and flows are in Document 3; build tasks are in Document 4. **\[REVIEW\]** marks a recommendation based on common practice that the owner can approve, change or reject. PV means built and tested in the reference prototype only.

## 1. Philosophy and UX rules

The design system is a set of constraints. Teams that treat principles as rules argue less and rework less. Each rule has an ID so it can be cited in reviews and tests.

| ID | Rule | Consequence |
| --- | --- | --- |
| DES-001 | A polished screen is not a usable flow. Every flow defines its entry, next step, recovery path, and its empty and error states before visual polish | No screen ships without loading, empty, error and success states |
| DES-002 | Principles are constraints. If a design breaks one, the review records why | Fewer late debates |
| DES-003 | Automation is explainable and overridable. AI output is labelled as a draft, shows what it was unsure of, and a person can change or reject it | No unexplained scores; no automatic decisions about people |
| DES-004 | Accessibility is a speed feature. Contrast, keyboard flow and clear labels reduce errors for everyone | WCAG 2.2 AA is the release bar |
| DES-005 | Predictability scales. Shared tokens and components, never per-screen styles | A new screen is built from existing parts first |
| DES-006 | Light and dark themes are both designed and tested (DEC-003) | Dark is not an inversion of light |
| DES-007 | Color carries meaning, never decoration; status always has text and a glyph (DEC-007) | No color-only states |
| DES-008 | One primary action per view. Everything else is secondary or tertiary | The next step is obvious |
| DES-009 | Always show where the user is, what changed, and what to do next | No dead ends; every empty state offers an action |
| DES-010 | Plain language, short sentences, no jargon for its own sake | Fewer support questions |
| DES-011 | Ask for information only when it is needed, and say why for sensitive fields | Higher completion, more trust |
| DES-012 | Work is recoverable: save and resume, warn before losing changes, confirm destructive actions by naming their effect | Fewer abandoned flows |

## 2. Color psychology applied

| UX principle | Implementation | Why it helps | Status |
| --- | --- | --- | --- |
| Reduce cognitive load | Neutral backgrounds, limited accents | Less visual competition | Confirmed |
| Establish hierarchy | One strong primary action per view; muted secondary actions | The next step is obvious | Confirmed |
| Build trust | Consistent branding, explicit transaction states | Predictable behavior | Confirmed |
| Encourage progress | Use visible milestones and progress with the active module's accent, as specified in the color-system PDF | Progress is easy to read | Confirmed by the PDF |
| Prevent mistakes | Use explicit state wording, a semantic foreground/background pair, a meaningful glyph, and accessible contrast; use only colors defined in the color-system PDF | Important states stand out without relying on color alone | Semantic pairs defined in Color System PDF revision 1.2 |
| Improve accessibility | Contrast, icons, labels and text with every status | Works for different visual abilities | Confirmed |

**Color decision — authoritative source.** The attached [PacketPulse 2.0 Design Color System](PacketPulse_2.0_Design_Color_System.pdf), revision 1.2 (approved by the product owner on 19 October 2026), is the sole palette authority. It preserves deep teal, forest green, signal lime, and module accents while defining the cool-charcoal dark theme, neutral-light theme, layered surfaces, accessible action pairs, and paired semantic states. DEC-036/DEC-037 specify how existing module colors are applied contextually in dark and light themes. Primary actions use brand forest; lime is reserved for rewards or one standout action. Do not add or infer colors elsewhere.

Revision 1.2 defines success, warning/pending, danger/error, and slate information pairs for both themes, plus a separate destructive-action pair. Status color is never decorative or the only signal.

## 3. Brand

Name: PacketPulse. Tagline: Connect, Learn & Grow Together. Voice: plain, direct, encouraging, technical without jargon for its own sake, never urgent or manipulative. The logotype typeface is undecided (OPEN-02); until then write the name in Inter semibold. The reference prototype mark uses a signal-lime dot with a brand-green ring (PV). Color values and usage remain governed by the attached color-system PDF.

## 4. Color system

**Authoritative source:** [PacketPulse 2.0 Design Color System](PacketPulse_2.0_Design_Color_System.pdf). This PDF is the sole source of truth for the palette, including exact color values, light/dark values, module accents, soft backgrounds, and the stated visual applications. Its usage addenda record DEC-036 and DEC-037; the color values themselves remain those in revision 1.2. If a value in this guide or another project reference conflicts with the PDF, follow the PDF and correct the conflicting reference.

Do not copy an alternate palette into this guide, introduce new hex values, or derive new named colors from older drafts. The charcoal + deep teal + signal-lime direction is approved; implementation should use revision 1.2 only. To add, replace, or remove a color, update the PDF first, record the approved decision in Document 1, and then update implementation tokens. This section records usage rules only to prevent palette drift.

### 4.1 Core tokens and themes

Use the exact light/dark tokens from the PDF. This guide intentionally does not maintain a second palette table. Light core tokens and module accents are unchanged in revision 1.2; the dark theme uses a charcoal canvas (`#0B1114`) with progressively raised charcoal/teal surfaces, a forest-green primary action (`#156152`) with white foreground, a selective signal-lime highlight (`#C7FE53`), clearer control boundaries, and complete semantic status pairs. Exact values and contrast checks remain in the PDF only; do not maintain a parallel token table here.

Dark theme usage: charcoal canvas → card surface → selected/subtle surface → raised surface → overlay. Move up a surface level only when there is a real elevation, selection, or interaction. Cards use quiet borders; controls use the stronger control-border token. Hover uses approved tokens, pressed state uses a restrained press treatment, selected states combine a surface tint with a marker, and focus uses the PDF-defined visible ring. Canvas patterns may use a low-contrast grid, dots, or topographic linework on broad empty areas and hero backdrops; keep patterns behind content and never place them directly behind dense text. Restrained teal ambient gradients belong mainly in hero or intentional empty-state regions. Neon/signal lime is for a meaningful milestone or one standout action, not routine navigation or every card. Avoid global glow, excessive glass, and card-by-card decoration.

Light and dark themes are both designed and tested. Dark mode is not a simple inversion of light mode. Preserve the distinct roles for cards, forms, dialogs, selected surfaces, controls, focus rings, and deep panels described in the PDF.

### 4.2 Module identities

Use the four approved parent color families exactly as documented in the PDF: Community/brand (forest and deep teal), Learning (indigo), Recruitment (blue), and Payments (plum). The six first-class section identities are Community, Learning, Practice, Assessments, Jobs, and Payments. Practice reuses the Learning family for code/lab treatment; Assessments uses a localized green verification zone; Jobs uses recruitment blue. These contextual treatments are recorded in DEC-036/DEC-037 and do not add palette values. The PDF addenda record the section mapping for both themes; do not redefine values here.

**Shared shell, distinct sections (DEC-036/DEC-037).** The shared shell follows the active theme: an off-white canvas with white content surfaces in light mode, and a cool-charcoal canvas with layered charcoal/teal surfaces in dark mode. Section identity must remain visible in both themes, but it belongs in a controlled zone such as the hero/banner, section header, active-navigation marker, selected state, accent rail, or key domain panel. The Community deep-teal core canvas (`--deep-teal`) is reserved for Community routes/sections; in light mode it can be used as a Community-only hero or focal canvas with a light foreground, while the rest of the page stays neutral. Do not reuse the Community deep-teal canvas as the default canvas for Learning, Practice, Assessments, Jobs, or Payments. Dense reading cards, forms, and tables remain neutral in both themes.

- **Community:** deep-teal hero/canvas is allowed only inside Community routes/sections in either theme. In light mode, preserve a light neutral page and use deep teal only in a controlled Community identity zone; subtle network/grid texture may sit behind open areas, not dense content.
- **Learning:** use approved light-indigo tinted hero/path treatment in light mode and the darker indigo identity surface in dark mode; keep course cards and reading areas neutral.
- **Practice:** retain a neutral page canvas in both themes. Use the approved Learning-family accent in coding/lab chrome, challenge selection and progress; the workbench/editor layout distinguishes Practice from Learning without adding a new hue.
- **Assessments:** use a localized forest/Community-green verification identity zone (light tint in light mode, dark tint in dark mode); assessment outcome states still use semantic status tokens.
- **Jobs:** use the approved recruitment-blue identity zone (light blue tint in light mode, dark blue tint in dark mode) for opportunity headers, job selection and company context.
- **Payments:** use the approved plum identity zone (light plum tint in light mode, dark plum tint in dark mode) for balance/transaction summaries and payment context; keep tables and forms on neutral surfaces.

Module colors identify product context; they never replace semantic success/warning/error/information colors. Keep navigation, typography, surface ladder, primary action token, and interaction states consistent across both themes. The light theme uses neutral off-white/white surfaces and localized light tints; the dark theme uses charcoal and layered dark surfaces with its paired module tints. Do not wash an entire dashboard or all cards in a module accent by default. The identity zone is enough to establish context while preserving hierarchy and readability.

**Light-theme identity rule (DEC-037).** Do not apply Community's deep-teal canvas as the default light-mode page background. The global light canvas stays off-white and dense content stays on white/neutral surfaces. Use each section's already-approved light accent and soft background for its hero, identity panel, active navigation, selected states, progress visuals, or one focal element. Community may use a deep-teal hero/canvas only within Community routes/sections, with an accessible light foreground. The module identity should be recognisable without tinting every card; do not create any new hex values.

### 4.3 Semantic states and verification

The PDF defines success, warning/pending, danger/error, and slate information pairs for both themes, plus a destructive-action pair. Use states by meaning, not by module, and never use a module accent as a status color.

Verification labels remain distinct (DEC-013, Document 1 section 10.1). Apply semantic mapping only where it fits; a self-declared skill must not appear verified. Every state includes a label and glyph; color alone never signals status.

### 4.4 Quality and accessibility checks

The revision 1.2 PDF records calculated contrast for key pairs. Validate rendered screens too, especially text over imagery, module tints, charts, disabled controls, and mixed states. If an approved PDF color cannot satisfy a required contrast or distinguishability case, document the gap, propose a PDF palette change, and record the decision before implementation.

- Normal text must meet at least 4.5:1 contrast; large text and relevant UI graphics/controls must meet at least 3:1, following the accessibility requirements in Section 13.
- Control borders must remain distinguishable. The PDF specifies a 3 px focus outline with a 2 px offset; keep it visible in both themes. The PDF’s contrast table is a token-pair baseline, not a substitute for testing composed screens.
- Test module accents and status treatments under color-vision simulations. Where colors may be confused, retain explicit text, a glyph, and the module name/icon as appropriate.
- The PDF restricts ambient radial gradients to hero areas, calls for restrained use of translucent/glass surfaces, and reserves signal lime for limited emphasis. Follow those use cases rather than adding decorative effects across the interface.
- If a required use case cannot meet contrast or distinguishability requirements with PDF-approved colors, do not silently add a new color. Document the gap, propose a palette change, update the PDF, and record the decision before implementation.

## 5. Typography

| Role | Value |
| --- | --- |
| UI and body | Inter, with Noto Sans Devanagari for Hindi, then system fonts |
| Technical text and numbers | JetBrains Mono, sparingly (counts, IDs, code, ledger values) |
| Body | 16 px / 24 px, weight 400 |
| Small | 14 px / 20 px |
| Section heading | 24 px / 32 px, weight 600 |
| Card heading | 17 px / 24 px, weight 600 |
| Page heading | 30 to 48 px, weight 700, fluid |
| Metric value | JetBrains Mono, 30 px / 36 px, weight 600 |

Use sentence case, tabular numerals for money and counts, and balanced wrapping for headings. Avoid all caps and light weights for small text. Keep reading lines between 60 and 75 characters **\[REVIEW\]**. Hindi text needs a line height of at least 1.6.

## 6. Spacing, shape, elevation and states

| Aspect | Rule |
| --- | --- |
| Spacing | 4 px rhythm: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 |
| Radius | 6 tags, 10 buttons and inputs, 14 cards and dialogs, 20 feature panels, pill for chips |
| Elevation | Borders first. Shadows only for real layers: overlay shadow 0 14px 40px using the PDF's deep-teal token at 18%; scrim uses deep teal at 55% |
| Surface levels | Page, surface (card), raised (menu, popover), overlay (dialog, toast) |
| Hover | Use a documented state treatment built from PDF-approved tokens; never introduce a new hue or cause a layout shift |
| Focus | 3 px outline, 2 px offset, always visible; never removed |
| Active or pressed | A visible state change using PDF-approved tokens plus a 1 px downward nudge; do not define an unlisted shade |
| Selected | Subtle tint plus a marker (inset bar, check or filled chip), never color alone |
| Disabled | 50% opacity, not focusable, with a reason shown nearby when it blocks a task |

Button interaction states must use the PDF-approved tokens and documented token-based treatments. Do not introduce separate hover, pressed, or destructive hex values in this guide. Validate contrast and visible state changes for each component in both themes; any new palette color must be added to the PDF first.

## 7. Layout, navigation and placement

| Element | Rule | Reason |
| --- | --- | --- |
| Page container | Content up to 1160 px (1320 px at 1536 px and up); padding 16, 24, then 32 to 40 px at 1280 px and up | Readable lines; dashboards can use width, reading pages cannot |
| Grid | 12 columns, spans of 3, 4, 6, 8, 12; one column below 768 px; quarter cards two across below 768 px and one below 640 px | Hierarchy by span, not decoration |
| Breakpoints | 640, 768, 1024, 1280, 1536 | DEC-008 |
| Sidebar | Persistent left navigation 232 px from 1024 px; filtered by role; active item has a marker | Frequent destinations always visible |
| Mobile navigation | Bottom bar below 1024 px, horizontally scrollable, icon above label | Thumb reach |
| Header | Sticky; workspace label, search (Ctrl or Command K), language, theme, notifications, account | Utilities do not compete with content |
| Page header | Icon tile, one H1, short description, at most one primary action on the right | One obvious task per page |
| Breadcrumbs | On pages deeper than two levels (position detail, candidate, thread, review) | Orientation and a quick way back |
| Primary and secondary actions | Primary bottom-right in forms and dialogs, secondary to its left, destructive named by outcome | Matches reading order |
| Footer | Fees, privacy, terms, contact; not repeated inside the app | Trust links without clutter |
| Safe areas | Respect device insets for the sticky header and bottom bar | Notched phones |
| Tables on small screens | Below 768 px a table becomes stacked cards, with the key fact first | Tables do not fit phones |

## 8. Cards and surfaces

Common anatomy: surface background, 1 px border, 14 px radius, 20 px padding (16 on mobile), 10 to 12 px gap, title first, supporting text, then actions. Informational cards are not clickable and have no hover state. Interactive cards have a hover tint, a visible focus ring, one main link, and nested controls that do not conflict.

| Card | Content order | Actions | Notes |
| --- | --- | --- | --- |
| Profile card | Avatar, name, role and location, verified skills, completeness | View, message | Never shows compensation or contact details |
| Member and community card | Avatar, name, reputation, expertise | Follow, mentor request |  |
| Post (question) card | Title, mode chip, author and time, replies and useful count, status | Open | Status chip carries text and glyph |
| Job card | Title, company, location and mode, experience, required and preferred skills, fee and experienced-only chips | Apply | Fee shown before the action |
| Candidate card or row | Name, role, experience, decision and stage chips, score, waiting time | Review, compare | Date of birth never shown to companies |
| Assessment and learning card | Title, level, state chip, progress, price chip | Start, continue, buy | Locked states say how to unlock |
| Verification and achievement badge | Label, glyph, skill; evidence detail on click | Open detail | Detail shows who decided, date, expiry |
| Notification item | Title, message, time, unread marker | Open record | No sensitive data in previews |
| Stats or metric card | Label, mono value, context or period | Drill in | Every number has a definition |
| Form section | Heading, why-we-ask text, fields, errors, save | Save, cancel | Sensitive fields explain visibility |
| Dialog | Title, short body, fields, actions | Confirm, cancel | Full page for long tasks; destructive dialogs name the effect |
| Empty and error panels | Reason, one next action, retry with filters kept | Retry, clear filter, create | Never a blank screen |

## 9. Icons, imagery and placeholders

- **Icons:** one outline style (Lucide-compatible), 24 px grid, 1.8 px stroke, round caps, drawn in the current text color; 20 px in navigation, 18 px in the header, 22 px in page tiles. Functional icons have an accessible name or visible text; decorative icons are hidden from assistive technology. Do not use an icon where a clear label would do.
- **Semantic glyphs:** check, exclamation, cross and info on chips and alerts.
- **Illustration:** subtle network lines, nodes and routing paths using low-opacity PDF-approved brand/module accents or surfaces; never behind dense text or forms.
- **Avatars:** initials on a soft module tint when there is no photo; 1:1 crop; the accessible name is the person's name.
- **Skeletons:** match the final layout; static under reduced motion; announced to assistive technology with a hidden label.
- **Empty-state graphics:** at most one small line illustration plus text and one action.

## 10. Interaction patterns

| Component | Behavior |
| --- | --- |
| Buttons | Variants: primary, secondary, signal-lime where the PDF permits it, and destructive. States: default, hover, focus, pressed, disabled, loading (label stays, repeat clicks blocked). Use the PDF primary-action pair for primary CTAs and the distinct destructive-action pair for destructive buttons; use the semantic danger pair for state chips/alerts. Build all states from approved tokens. Minimum height 40 px on desktop, 44 px on touch screens **\[REVIEW\]** |
| Forms | Label above the field, always visible; hint text; validate when the user leaves the field or submits; errors under the field, linked to it and announced; entered data is never cleared on error; long forms show an error summary at the top |
| Multi-step flows | Step indicator with step names; save and continue later; a Back button that keeps entries; the final step shows a review before submit |
| Menus, tabs, tooltips | Keyboard operable; tooltips never hold essential information |
| Dialogs | Labelled by their title; focus moves in and returns to the trigger; Escape and outside click close non-destructive dialogs; background scroll locked; one dialog open at a time |
| Toasts | About 2.6 seconds; never the only place for required information |
| Banners and inline alerts | For persistent states; errors use an alert role |
| Tables and lists | Sortable columns with the sort stated in text; filters shown as removable chips with a Clear all; pagination states the total count; the filter state is kept when returning from a detail page |
| Charts | Title, unit, a text summary, direct labels or a legend, and a data table alternative; never color alone; series colors come from module accents, not status colors |
| States | Loading skeleton, empty with one action, error with retry, success shown on the page for high-impact changes, disabled with a reason |
| Motion | 150 to 250 ms for open, close and state change; one celebration moment (a verification); reduced motion removes shimmer, pop, pulse and entry animation without losing information |
| Keyboard | Command palette (Ctrl or Command K); roving focus in menus; skip link; focus moves to the page heading on route change |

## 11. UX writing and content rules

### 11.1 Voice and patterns

| Pattern | Rule | Example |
| --- | --- | --- |
| Buttons | Start with a verb; say the outcome | Submit application, Save changes, Start assessment |
| Errors | What happened, why, how to fix it; no blame | Code expired. Codes last 10 minutes. Request a new code. |
| Empty states | What this is, why it is empty, how to start | No applications yet. Apply to a job and its progress will appear here. |
| Confirmations | Name the action and the effect; buttons repeat the action | Withdraw this application? The recruiter will be told. Buttons: Withdraw application, Keep application |
| Loading | Say what is happening if it takes more than 2 seconds | Reading your resume... |
| Success | Short and calm; no exclamation marks except real milestones | Skill verified |
| Sensitive fields | Say why and who sees it | Current CTC. Only recruiters you are forwarded to can see this. |
| Tooltips | Short, never obvious |  |

Tone by context: success is warm but not loud; errors are kind and specific; warnings are clear and actionable; neutral text is informative and short. Never use urgency or scarcity tricks.

### 11.2 Product vocabulary (use these words everywhere)

| Use | Not |
| --- | --- |
| Member | User, candidate (candidate is used only in recruiter screens) |
| Jobs (member) and Positions (recruiter) | Openings, requisitions |
| Application | Submission (a lab submission is a Submission) |
| Forwarded | Sent, shared |
| Verified skill | Certified skill (certification is its own label) |
| Evidence | Proof, documents |
| Placement fee | Commission, charge |

### 11.3 Formats and limits **\[REVIEW\]**

| Item | Rule |
| --- | --- |
| Dates and times | 17 Oct 2026, 3:30 pm IST; the zone is always shown on interview times |
| Money | Rupee sign with Indian digit grouping, for example 12,50,000; annual pay also as lakhs per annum (12.5 LPA) |
| Numbers | Tabular figures; large counts shortened (1.2k) with the full value on hover or focus |
| Names and titles | Names up to 60 characters; question titles 8 to 120; position titles up to 80; skill chips up to 40 |
| Truncation | Card titles stop at 2 lines; long text ends with an ellipsis and a Show more control; truncated text is available in full to assistive technology |
| Sensitive data | Masked by default in lists (for example the last 4 digits of a phone number); shown in full only where DEC-015 allows |

## 12. Edge cases every screen handles

| Case | Behavior |
| --- | --- |
| Very long names, titles and skill lists | Wrap or truncate as above; never push layout sideways |
| Hindi and longer text | Allow about 30% more length; no fixed-width buttons; Devanagari line height 1.6 |
| Slow connection | Skeletons within 100 ms; a retry message after 10 seconds; uploads show progress and can be retried |
| Missing data | Show a dash with a reason where helpful (for example Not provided), never a fake zero |
| Zero results | Say what was searched and offer Clear filters |
| No permission | Explain in plain words and give a valid destination; never a blank screen |
| Offline or failed save | Keep entries on screen; say that it was not saved; retry button |
| Session ended | Return to the same page after sign-in; keep unsent form entries where possible |
| Large lists | Paginate or load more with a count; never load everything at once |
| Duplicate actions | Disable the button while working; a second click does nothing |

## 13. Accessibility standards

Target WCAG 2.2 AA in both themes (DEC-007, PRD-049).

| Area | Standard | Test |
| --- | --- | --- |
| Contrast | Text 4.5:1; large text and controls 3:1 | Computed per token pair; automated scans |
| Keyboard | Everything operable; logical order; visible focus | Keyboard-only journeys |
| Structure | Landmarks, one H1, no skipped levels | Automated scan and manual review |
| Names and forms | Every control named; errors announced and linked | Scan plus screen reader pass |
| Targets | At least 40 px for buttons and inputs; 24 px minimum anywhere | Visual review |
| Status | Text and glyph with every color | Review checklist |
| Zoom and reflow | Usable at 200% and 320 px wide with no sideways page scroll | Manual and automated |
| Motion | Respect reduced motion | Emulated setting test |
| Real assistive technology | A screen reader pass on onboarding, apply, assessment, verification and recruiter review each release | Manual, notes kept |

The prototype's automated scans found no violations, but they cannot measure contrast or layout, and no real screen reader testing has been done (RISK-10).

## 14. Governance and use by developers

- **Palette source of truth.** `PacketPulse_2.0_Design_Color_System.pdf` is the sole authority for color names, values, themes, module identities, and usage. This guide must not define a competing palette. Components use the corresponding approved token names; palette values must not be copied from old drafts or invented elsewhere.
- **Other design tokens.** Typography, spacing, radius, elevation and motion follow the rules in this guide and the implementation source identified during the repository audit. Keep those tokens centralized in code rather than styling components independently.
- **New tokens and components.** A new token needs a reason, a light and dark value, a contrast result and a change-log entry. A new component is proposed with its states, accessibility notes and a visual example of every state; an existing component changes only through a reviewed change that lists what else it affects.
- **Versioning.** The design system has version numbers (major for a visual or behavior break). Every release is listed in Document 1's change log.
- **Decisions.** A color, type or component decision is recorded as a DEC before it is built. DEC-036 defines dark-theme section identity and DEC-037 extends the same localized identity principle to light theme without adding palette values.
- **How to build from it.** Developers map these tokens to the existing styling setup; exact files are found in the repository audit (Document 4). Design specifications describe what should exist; only items marked PV were built, and only in the prototype.


## 15. Design-system architecture and production workflow

**Purpose:** Refine the existing PacketPulse 2.0 design system into a maintainable source of truth. Audit and improve approved work before replacing it. The external guide `design system guidelines_pp.md` and https://aidesign.guide/design-systems are practice references, not product authorities.

### 15.1 Audit before adding or rebuilding
Before creating a new foundation, component, variant, or pattern:
1. Locate the current token/component and identify where it is used.
2. Classify it as retain, refine, consolidate, deprecate, or propose.
3. Check product requirements and DEC references.
4. Record missing states, inconsistent token use, duplicates, accessibility gaps, and responsive failures.
5. Prefer migration-compatible improvements over wholesale replacement.
6. Record behavior- or brand-changing decisions before implementation.

### 15.2 Foundation inventory
Document purpose, approved values, semantic names, examples, correct/incorrect use, theme behavior, responsive behavior, and accessibility guidance for color/theme mappings, typography/script fallbacks, spacing/dimensions, radius, borders/surfaces/elevation, grid/breakpoints, iconography, focus rings, motion/reduced motion, and accessibility. Use the approved color-system PDF, token CSS, contrast report, and theme previews as color references. Resolve conflicts with confirmed decisions explicitly.

### 15.3 Token architecture
Organize tokens into three layers:
1. **Primitive:** raw approved values such as palette shades, spacing, radius, font sizes, and shadows.
2. **Semantic:** purpose-based roles such as `color.background.canvas`, `color.text.primary`, `color.border.default`, `color.action.primary`, `color.status.success`, and `color.focus.ring`.
3. **Component/pattern:** component-level aliases only when they provide meaningful control, such as `button.primary.background`, `input.border.focus`, and `card.radius`.

Naming pattern: `category.role.variant.state`. Each token needs a unique name, value/reference, purpose, source relationship, theme compatibility, and usage guidance. Component tokens should alias semantic tokens where practical. Figma variables and implementation tokens should share names or have an explicit mapping. Use light/dark modes for semantic theme tokens; keep geometry theme-independent unless justified. Mark new values **Proposed**.

### 15.4 Seven typography roles
- **Display:** marketing/feature-level prominence.
- **Heading:** page and section hierarchy.
- **Title:** cards, panels, and compact content titles.
- **Body:** reading content and explanations.
- **Label:** buttons, fields, navigation, compact controls.
- **Caption:** metadata, helper text, timestamps.
- **Mono/Data:** technical identifiers, code, metrics, financial values.

For each role document approved family/fallback, size, weight, line-height, letter-spacing where relevant, readable line length, desktop/tablet/mobile behavior, light/dark examples, multilingual fallback, and contrast. Preserve approved PacketPulse font choices and reference values.

### 15.5 Component hierarchy
Use **Foundation → Primitive → Core component → Composite/product component → Pattern → Responsive screen**.

**Foundations:** color variables, typography, spacing/dimensions, radius/elevation, grid/layout, iconography, focus, motion, accessibility.  
**Primitives:** icon, text, divider, avatar, spinner, progress indicator, tooltip, surface/container.  
**Core components:** buttons/icon buttons; inputs, textareas, selects, search; checkbox/radio/toggle/switch; badge/chip/tag; card; tabs/navigation; alert/toast/dialog; menu/popover/dropdown; table/pagination/filter.  
**Product components:** member profile summary; skill verification badge/evidence summary; assessment result; course/lab progress; community Q&A; job listing; recruiter candidate summary; application timeline; invoice/payment status; administrative review row.  
**Patterns:** member dashboard; learning/assessment; skill verification; community Q&A; job application; recruiter review; payment/invoice; administrative moderation and verification.

Shared components remain page-agnostic. Product components compose shared components instead of creating near-duplicates.

### 15.6 Component anatomy, properties, and states
Each component entry documents identity, purpose/modules, anatomy, token references, spacing/alignment, dimensions/constraints, variants, sizes, defaults, content slots, interaction behavior, keyboard behavior, loading/disabled/validation/error/success/empty/overflow behavior where relevant, responsive resizing, light/dark appearance, accessible name/role, status announcements, contrast, target size, dependencies, limitations, status, and migration notes.

Meaningful states may include default, hover, focus-visible, pressed, selected, disabled, loading, error, success, and expanded/collapsed. Not every component needs every state. Use Auto Layout, Hug/Fill/fixed sizing, constraints, nested components, and clear layer names where supported. Avoid exposing every internal layer as a property.

### 15.7 Complex patterns
Every pattern specifies target user/problem, entry/exit conditions, dependencies, required/optional content, actions, state transitions, loading/empty/error/success/permission states, responsive composition, keyboard/assistive-technology behavior, privacy/visibility, and analytics/audit requirements where defined.

Required patterns:
- Member dashboard: progress, verified skills, learning/assessment recommendations, job/application updates, notifications, next actions.
- Learning and assessments: instructions, active attempt, submission/processing, results, feedback, retakes, completion.
- Skill verification: declared skill, evidence, pending review, assessment/reviewer decision, approval, expiry/revocation/unsuccessful outcomes where applicable.
- Community: question creation/editing, answers, accepted answer, tags, feedback, moderation/reporting.
- Recruitment: position publishing, candidate filtering/review, authorized evidence, application timeline, interviews/review notes, terminal outcomes.
- Payments: initiation/processing, success/failure, invoices/history, refunds/status.
- Administration: verification queue, moderation, taxonomy, payment review, permission-aware actions, audit history.

### 15.8 Motion and microinteractions
Motion communicates state or reinforces an action; it must not delay access, hide meaning, or destabilize layout. Respect reduced-motion preferences and provide equivalent nonanimated feedback.

Proposed starting durations, pending validation:
- `motion.duration.fast`: 120 ms
- `motion.duration.standard`: 200 ms
- `motion.duration.slow`: 280 ms
- `motion.duration.entrance`: 320 ms

Document trigger, visual response, duration, easing, final state, and reduced-motion alternative for buttons, toggles, tabs/navigation, menus, dialogs/drawers, toasts, accordions, skeletons, progress, verification, application submission, payment confirmation, and completion. Avoid continuous decorative motion, excessive bounce, flashing, and celebration effects for serious failures.

### 15.9 Accessibility and responsive acceptance
Verify keyboard operation and visible focus; accessible names/roles and status announcements; approved contrast and non-color status cues; zoom/reflow and long content; suitable target sizes; reduced motion; desktop/tablet/mobile behavior; and loading, empty, error, success, disabled, and permission-denied states as applicable.

### 15.10 Documentation and file organization
Adapt to the existing library rather than restructuring without benefit. Suggested pages: `00 — Start Here`; `01 — Foundations`; `02 — Design Tokens`; `03 — Core Components`; `04 — Component States & Variants`; `05 — Complex UI Patterns`; `06 — Product Examples`; `07 — Responsive Behavior`; `08 — Accessibility & Motion`; `09 — Documentation & Changelog`.

Label components/patterns **Confirmed/Approved**, **Proposed**, **Experimental**, or **Deprecated**. Do not invent owners or approval history. Distinguish static visuals from interactive prototypes.

### 15.11 Release acceptance criteria
Foundations and tokens are documented; core components are reusable; variants/states/properties/slots are defined; patterns compose existing components; both themes and all six section identities remain consistent; desktop/tablet/mobile behavior is shown; seven typography roles are documented; motion is purposeful and accessible; and handoff is actionable. New/inferred decisions remain proposals until approved.

Detailed revision history for this version is recorded in `00 — Team Change Log.md` in the team pack.
