# PacketPulse 2.0 — Component Ecosystem & Library Registry (26 Nov 2026)

Created by: Kartik B | 1000110
Created time: November 26, 2026 1:21 PM
Category: Notes
Last edited by: Kartik B | 1000110
Last updated time: November 27, 2026 5:07 PM

> **Notion capture type:** structured companion summary and navigation; not the complete verbatim source.
> 

# Component Ecosystem, UI Patterns and Library Registry

## Governance

PacketPulse owns a curated component registry. For every adopted component record source, version, license, accessibility, responsive behaviour, motion, token conformance, variants, documentation and tests. Avoid importing entire libraries; adopt selectively and keep one canonical component per primitive family.

## UI foundations

- shadcn/ui: primary source-owned base.
- Ingot UI, BoardUI, Beautiful UI and other reference libraries: selective patterns, not blanket dependency adoption.
- Choose Radix OR Base UI consistently within a primitive family; avoid duplicated primitives.
- Tailwind v4 is the recorded direction; Tailwind CDN/Play CDN remains prototype-only rather than production delivery.
- Lucide, Simple Icons, Recharts, TanStack Table and Tiptap are in the ecosystem shortlist; verify exact versions and compatibility during implementation.

## Media and files

- Video.js React integration (source research cited 10.7.0 on 26 Nov) is the general player candidate.
- Shaka is a specialist option for adaptive/offline/DRM scenarios.
- Uppy React + Tus for resumable uploads; React-PDF for PDF viewing.
- Office documents require secure conversion/provider review; ONLYOFFICE AGPL implications need legal review.
- WaveSurfer is optional for waveform UI; retain standard accessible audio controls.
- FFmpeg server-side processing is an optional evaluated capability, subject to codec, patent and license review.
- Embeds are provider-specific and allowlisted; never accept arbitrary iframe or HTML.

## Security/accessibility controls

CSP, sandbox, permissions/origin validation, SSRF controls, signed URLs, MIME/signature checks, malware scanning, consent and privacy safeguards. Provide captions/transcripts, keyboard access, reduced-motion and error/fallback states.

## Registry workflow

Evaluate → verify provenance/license → test accessibility/responsiveness → wrap with PacketPulse tokens → document → add tests → approve for a defined use. Research version notes are not installation claims; revalidate versions, licenses and browser support before adoption.

## External UI reference review — shadcn/ui component shortlist (27 Nov 2026)

**Status: Recommended for evaluation and future implementation; not installed or repository-validated.** This is a product-facing selection map for Claude to use after auditing the current application. It is not a mandate to import every component or to replace existing working components.

### Sources reviewed

- Current component catalogue: [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)
- v3 documentation landing page: [https://v3.shadcn.com/](https://v3.shadcn.com/)
- v3 Forms example: [https://v3.shadcn.com/examples/forms](https://v3.shadcn.com/examples/forms)
- Current form documentation: [https://ui.shadcn.com/docs/forms](https://ui.shadcn.com/docs/forms)
- Current Data Table documentation: [https://ui.shadcn.com/docs/components/data-table](https://ui.shadcn.com/docs/components/data-table)
- Current Sidebar documentation: [https://ui.shadcn.com/docs/components/sidebar](https://ui.shadcn.com/docs/components/sidebar)

**Version note:** The supplied `v3.shadcn.com` pages explicitly identify themselves as v3 docs and offer a “Switch to latest” link. Use them as historical/reference examples, not as the default current API or install instructions. Prefer current official documentation when implementation begins. The v3 form page is useful for studying form composition and profile/settings form layout; adapt its patterns to PacketPulse flows and design tokens rather than copying its demo UI.

### Recommended base set — evaluate for shared PacketPulse UI

| Component | PacketPulse use / product behavior |
| --- | --- |
| Button + Button Group | Primary, secondary, quiet, destructive and grouped actions; consistent loading/disabled states |
| Card + Item + Separator | Profile summaries, content previews, course/job cards, settings sections and structured rows |
| Badge | Status, taxonomy labels and verification state; never use a verified-skill badge for unverified claims |
| Avatar | Member, recruiter, author and organization identity with fallback initials |
| Field + Label + Input + Input Group + Textarea | Consistent form structure, helper text, errors, optional/required cues and input adornments |
| Checkbox + Radio Group + Select / Native Select + Combobox | Consent, single/multi selection, role/topic taxonomy and searchable large option lists; choose native controls where simpler and accessible |
| Input OTP | SCR-003 six-digit email verification interface; expiry, resend and verification logic remain backend/product behavior, not UI component behavior |
| Date Picker / Calendar | Date selection only where needed; DOB needs privacy-aware entry and age policy logic outside the component |
| Switch + Toggle + Toggle Group | Preference/settings controls and compact option selection; ensure state is labelled and saved explicitly |
| Form composition | Use a consistent field wrapper, schema/client validation, server validation, accessible errors and submit lifecycle; library choice remains subject to existing stack audit |
| Dialog + Alert Dialog | Focused tasks and destructive/irreversible confirmation; avoid placing long workflows in small modals |
| Sheet + Drawer | Desktop side panel / mobile bottom-sheet pattern for contextual details, filters or secondary workflows |
| Dropdown Menu + Context Menu | Item actions and compact contextual commands; preserve keyboard access and touch alternatives |
| Popover + Tooltip + Hover Card | Supplemental explanations and previews; essential instructions must not exist only on hover |
| Tabs + Accordion + Collapsible | Organize dense profile/admin sections and optional details without hiding critical primary actions |
| Sidebar + Breadcrumb + Navigation Menu | App shell and orientation; audit current route/navigation architecture before replacing it |
| Command | Keyboard-friendly quick navigation or searchable action palette, only if product needs it |
| Table + Data Table + Pagination | Admin queues, applicants, assessments and reports; compose per use case rather than forcing one universal grid |
| Progress + Skeleton + Spinner + Alert + Empty + Toast/notification pattern | Clear loading, progress, empty, success and failure states; prefer inline feedback for field errors and consequential states |
| Scroll Area + Resizable | Use only for constrained panels or split-workspace experiences; avoid nested-scroll traps |

### Feature-specific candidates — adopt when the screen requires them

- Chart: analytics/admin reporting and learning progress dashboards; ensure charts have text summaries or accessible data alternatives.
- Carousel: selected discovery/marketing moments only; do not use as the default way to navigate essential content.
- Calendar: event scheduling and interview coordination after workflow requirements are specified.
- Attachment / file display: learning resources, profile evidence and application documents; pair with secure upload/preview/download capabilities and permission checks.
- Questionnaire: structured assessment/onboarding interaction only if its behavior fits the canonical workflow; do not confuse presentation with assessment engine logic.
- Message / Bubble / Message Scroller: support or community conversation surfaces only if messaging is in the approved product scope.
- Marker: location/map or contextual annotation if a genuine location feature exists.
- Kbd: keyboard shortcut discoverability in command/search experiences.
- Aspect Ratio: media previews and consistent image/video containers.

### Do not adopt by default / keep conditional

- Do not add charts, carousel, messaging, map markers, resizable workspaces or advanced controls simply because they exist in the catalogue.
- Do not use decorative animation or color alone to convey status; maintain text labels, contrast and reduced-motion behavior.
- Avoid duplicating existing date, select, dialog, toast, table or navigation primitives already in the application.
- Do not treat shadcn components as product features: backend state, authorization, persistence, notifications, verification, search, assessment scoring and payment workflows remain separate capabilities.

### PacketPulse integration rules for Claude

1. Inspect the actual app repository, package versions, existing component folders, current shadcn configuration and UI primitive foundation before adding anything.
2. Reuse existing project components where they already satisfy the spec; propose replacements only with a clear benefit and migration impact.
3. Select one underlying primitive family (e.g. Radix or Base UI) consistently for related components; do not mix duplicate implementations casually.
4. Wrap/adapt chosen components to PacketPulse tokens and patterns: Signal Grove core palette, approved typography, semantic status tokens, radius, spacing, focus rings, dark mode, and experimental illustration colors only in suitable visual contexts.
5. Preserve product behavior from canonical screen specs: validations, privacy, permission checks, save/resume, loading/error states, and acceptance criteria.
6. Record each adopted component's source, package/version, license, rationale, owner, variants, accessibility/responsive checks, tests and status in this registry.
7. Build a small reusable set first; expand only when multiple screens demonstrate the need.

### Suggested implementation order (subject to repo audit)

**Foundation:** Button, Card, Badge, Avatar, Field/Label/Input/Textarea, Checkbox/Radio/Select/Combobox, Dialog/Alert Dialog, Dropdown Menu, Tooltip/Popover, Tabs, Alert, Skeleton, Spinner, Empty, Progress, Toast/inline feedback.

**Onboarding and member profile:** Input OTP, Date Picker/Calendar, Switch/Toggle Group, Sheet/Drawer, Accordion/Collapsible, Breadcrumb.

**Community and learning:** content Cards/Items, Badge taxonomy, Tabs, Progress, Attachment, pagination/search controls, optional Carousel only for non-essential highlights.

**Recruitment and admin:** Data Table/Table, filters (Combobox/Select/Date Picker), Pagination, status Badge, Dialog/Sheet for detail/action flows, Chart only for analytics.

**Later / scope-dependent:** Command palette, Calendar scheduling, messaging primitives, Resizable panels, advanced chart types.

### Change log

- 27 Nov 2026 — Reviewed supplied official shadcn/ui current components page and v3 examples/forms. Added a curated shortlist, feature mapping, version caveat and Claude implementation/audit guidance. No components installed; implementation status remains pending repository audit.

## Component selection — psychological and behavioral fit (27 Nov 2026)

Select components by user task and interaction cost, not by catalogue novelty or visual trend. A Dialog is appropriate for a focused decision, not a long workflow; Tooltip cannot hold essential instructions; a progress component must represent real progress; badges must communicate meaningful states; charts need understandable takeaways and accessible alternatives; animation must explain state change rather than create stimulation.

For every chosen component/pattern, document: user need, content/interaction purpose, default and exceptional states, cognitive burden, keyboard/touch behavior, accessibility, responsive behavior, motion/reduced-motion, and why a simpler pattern would not suffice. Reuse existing project components after repository audit; avoid adding primitives just to create a fashionable appearance.