# PacketPulse Decision Register & ID Lineage

**Purpose:** Preserve exact decision wording by source and expose identifier collisions instead of silently overwriting them.

## Decision-ID policy

- `DEC-###` is the identifier printed in a source document; it is not sufficient by itself where historical reuse occurred.
- The unique history identity for this register is `HDEC-YYYY-MM-DD-<SOURCE-DEC-ID>`.
- Cite a decision with both its history key and source version, for example `HDEC-2026-10-24-DEC-035 (source DEC-035, Product Guide v4.2)`.
- Never edit the archived wording or reuse an ID.
- The current Product Guide's DEC-035/036/037 reused the IDs of three original 24 Oct decisions. Both versions are reproduced below. This is a known collision to resolve through an owner-reviewed crosswalk; no historical record is overwritten.
- DEC-050 through DEC-053 remain unrecovered because their full descriptions are not present in the available source material. The IDs are reserved.

## A. Original 24 October 2026 baseline — exact decision register

**Source:** `history/releases/2026-10-24-original-baseline/01 — Product Guide Vision, Requirements and Decisions v4.2.md`, section 9.

| DEC-001 | Tagline Connect, Learn & Grow Together; the loop Learn, Practice, Prove, Verify, Connect, Get Hired, Grow is the test for every feature | Confirmed |
| DEC-002 | One platform: one account, one skill model, one permission model, shared components | Confirmed |
| DEC-003 | Visual direction Signal Grove: light-first, dark as a designed alternative (replaces Network Console, Moodboard v2 and Card System v1) | Confirmed |
| DEC-004 | Inter for UI, JetBrains Mono for technical text, Noto Sans Devanagari as the Hindi fallback | Confirmed |
| DEC-005 | Module accents: Community forest, Learning indigo, Recruitment blue, Payments plum | Confirmed (blue by owner; plum by delegation) |
| DEC-006 | Information state is slate; Experience verified label uses recruitment blue | Confirmed by delegation |
| DEC-007 | Status is shown with text and a glyph, never color alone | Confirmed |
| DEC-008 | Breakpoints 640, 768, 1024, 1280, 1536 px | Confirmed |
| DEC-009 | Roles are additive on one account: Member, Mentor, Instructor, Recruiter, Admin, SuperAdmin | Confirmed |
| DEC-010 | Permissions are enforced on the server for every route, field and action; hidden screens are not security | Confirmed |
| DEC-011 | Candidate profile, job and application are separate records; job-specific status lives on the application | Confirmed |
| DEC-012 | Verification approvers: Admin or SuperAdmin | Confirmed |
| DEC-013 | Evidence model with five labels plus Pending; each decision records who, when, policy version, expiry; one appeal; revocation and expiry | Confirmed (labels), PV (appeal, revoke, expiry) |
| DEC-014 | Skill taxonomy Major, Minor, Micro owned by Admins; new skills arrive as suggestions; clear matches merge automatically | Confirmed |
| DEC-015 | Visibility: PacketPulse screening team sees the full profile before forwarding; company recruiters see the allowed fields after forwarding; date of birth stays hidden; SuperAdmin can adjust after-forwarding fields | Confirmed (principle), PV (table) |
| DEC-016 | Placement fee: candidate-paid, default 1% of annual offer, declaration and permission when applying and again when accepting, shown publicly | Confirmed (principle); safeguards in 10.5 **\[REVIEW\]** |
| DEC-017 | Free versus paid: advanced courses, live lab sessions and some placements are paid; some roles are experienced-only | Confirmed (principle); prices Open |
| DEC-018 | Required onboarding fields as in PRD-003 | Confirmed |
| DEC-019 | AI drafts and suggests; people decide. AI has no path to shortlist, reject, forward, verify, change roles or passwords, refund, change fees or prices, suspend or delete | Confirmed by delegation |
| DEC-020 | Admin security baseline: required MFA, passkeys preferred, no SMS, no temporary passwords for admins, session limits, step-up, lockout, second approval for Admin refunds, break-glass, access reviews | Confirmed by delegation |
| DEC-021 | Existing stack: Next.js for frontend and backend, an existing backend service, PostgreSQL (Supabase), Redis, hosted on Vercel and Render | Confirmed |
| DEC-022 | The system of record is PostgreSQL through Supabase | Confirmed |
| DEC-023 | No technology is replaced without a concrete requirement and owner approval | Confirmed |
| DEC-024 | New work is organised as modules with clear ownership inside the existing backend | Proposed |
| DEC-025 | The earlier proposals for a new authentication library, a new data-access library, a new job queue and a cloud move are withdrawn as defaults | Deprecated |
| DEC-026 | DPDP Act and Rules 2025 duties are product requirements; main duties apply from about 14 May 2027 | Planned |
| DEC-027 | The earlier six-document suite and ID scheme are kept as IDs | Confirmed |
| DEC-028 | English and Hindi language switch | Proposed (PV for navigation, titles, home) |
| DEC-029 | Sandbox checkout first; provider chosen later | Proposed |
| DEC-030 | ClickUp and n8n are an operations aid; the application database stays the source of truth | Planned; live status unknown |
| DEC-031 | Color guidance: neutral backgrounds, limited accents, amber warnings, red errors, both themes, adequate contrast, icons and labels with color | Confirmed |
| DEC-032 | Frontend and backend are both Next.js; the database is PostgreSQL; the stack stays as it is | Confirmed (owner, 17 Oct) |
| DEC-033 | The documentation set is four documents; this set covers design, features, UX and flows, while code and versions are handled by a developer and an AI coding agent in another workspace | Confirmed (owner, 17 Oct) |
| DEC-034 | Open questions get a best-practice recommendation marked \[REVIEW\] and stay Open until the owner approves | Confirmed (owner, 17 Oct) |
| DEC-035 | Dark theme color-system refinement: preserve the core PacketPulse identity and module accents; use a cool-charcoal canvas with restrained low-contrast patterns, layered teal-tinted surfaces, forest-green actions, selective signal-lime emphasis, paired semantic states for both themes, and token-pair contrast guidance in the authoritative PDF | Confirmed (owner approved 19 Oct 2026; Color System revision 1.2) |
| DEC-036 | Section identity is contextual: one charcoal application shell; deep-teal core canvas only within Community routes/sections; Learning indigo, Practice uses the Learning family in code/lab treatment, Assessments a localized green verification zone, Jobs recruitment blue, Payments plum; no new palette values | Confirmed (owner, 19 Oct 2026; module-identity addendum to Color System 1.2) |
| DEC-037 | Light-theme section identity follows DEC-036: neutral off-white shared canvas and white content surfaces; each section uses its existing approved light accent/tint in a localized hero, header, active navigation, selected state or focal panel; Community deep teal is scoped to Community routes/sections; no new palette values | Confirmed (owner, 19 Oct 2026) |

## B. Latest available 26 November 2026 source — exact decision register

**Source:** `history/releases/2026-11-26-approved-prototype-review-build/PacketPulse_2.0_Approved_Prototype_Review_Build_2026-11-26/PacketPulse 2.0 — 1. Product Guide Vision, Requirements, Decisions.md`, section 9.

| DEC-001 | Tagline Connect, Learn & Grow Together; the loop Learn, Practice, Prove, Verify, Connect, Get Hired, Grow is the test for every feature | Confirmed |
| DEC-002 | One platform: one account, one skill model, one permission model, shared components | Confirmed |
| DEC-003 | Signal Grove remains the core visual identity. Editorial Workspace stays light-first with a designed dark option; Analytical Workspace uses Matte Black Edition as its preferred dashboard reference, with light mode still supported (replaces Network Console, Moodboard v2 and Card System v1) | Confirmed; refined 24 Nov 2026 |
| DEC-004 | Inter for UI, JetBrains Mono for technical text, Noto Sans Devanagari as the Hindi fallback | Confirmed |
| DEC-005 | Module accents: Community forest, Learning indigo, Recruitment blue, Payments plum | Confirmed (blue by owner; plum by delegation) |
| DEC-006 | Information state is slate; Experience verified label uses recruitment blue | Confirmed by delegation |
| DEC-007 | Status is shown with text and a glyph, never color alone | Confirmed |
| DEC-008 | Breakpoints 640, 768, 1024, 1280, 1536 px | Confirmed |
| DEC-009 | Roles are additive on one account: Member, Mentor, Instructor, Recruiter, Admin, SuperAdmin | Confirmed |
| DEC-010 | Permissions are enforced on the server for every route, field and action; hidden screens are not security | Confirmed |
| DEC-011 | Candidate profile, job and application are separate records; job-specific status lives on the application | Confirmed |
| DEC-012 | Verification approvers: Admin or SuperAdmin | Confirmed |
| DEC-013 | Evidence model with five labels plus Pending; each decision records who, when, policy version, expiry; one appeal; revocation and expiry | Confirmed (labels), PV (appeal, revoke, expiry) |
| DEC-014 | Skill taxonomy Major, Minor, Micro owned by Admins; new skills arrive as suggestions; clear matches merge automatically | Confirmed |
| DEC-015 | Visibility: PacketPulse screening team sees the full profile before forwarding; company recruiters see the allowed fields after forwarding; date of birth stays hidden; SuperAdmin can adjust after-forwarding fields | Confirmed (principle), PV (table) |
| DEC-016 | Placement fee: candidate-paid, default 1% of annual offer, declaration and permission when applying and again when accepting, shown publicly | Confirmed (principle); safeguards in 10.5 **[APPROVED PROTOTYPE]** |
| DEC-017 | Free versus paid: advanced courses, live lab sessions and some placements are paid; some roles are experienced-only | Confirmed (principle); prices Open |
| DEC-018 | Required onboarding fields as in PRD-003 | Confirmed |
| DEC-019 | AI drafts and suggests; it cannot make recruitment selection/forwarding, financial, role/password, suspension/deletion or other sensitive account decisions by default. Skill verification is separately eligible for controlled experiments under DEC-044 and PRD-062 | Confirmed; clarified 24 Nov 2026 |
| DEC-020 | Admin security baseline: required MFA, passkeys preferred, no SMS, no temporary passwords for admins, session limits, step-up, lockout, second approval for Admin refunds, break-glass, access reviews | Confirmed by delegation |
| DEC-021 | Existing stack: Next.js for frontend and backend, an existing backend service, PostgreSQL (Supabase), Redis, hosted on Vercel and Render | Confirmed |
| DEC-022 | The system of record is PostgreSQL through Supabase | Confirmed |
| DEC-023 | No technology is replaced without a concrete requirement and owner approval | Confirmed |
| DEC-024 | New work is organised as modules with clear ownership inside the existing backend | Proposed |
| DEC-025 | The earlier proposals for a new authentication library, a new data-access library, a new job queue and a cloud move are withdrawn as defaults | Deprecated |
| DEC-026 | DPDP Act and Rules 2025 duties are product requirements; main duties apply from about 14 May 2027 | Planned |
| DEC-027 | The earlier six-document suite and ID scheme are kept as IDs | Confirmed |
| DEC-028 | English and Hindi language switch | Proposed (PV for navigation, titles, home) |
| DEC-029 | Sandbox checkout first; provider chosen later | Proposed |
| DEC-030 | ClickUp and n8n are an operations aid; the application database stays the source of truth | Planned; live status unknown |
| DEC-031 | Color guidance: thoughtful surface hierarchy, broad brand/module palette, expressive accents and gradients, amber warnings, red errors, both themes, adequate contrast, icons and labels with color | Confirmed |
| DEC-032 | Frontend and backend are both Next.js; the database is PostgreSQL; the stack stays as it is | Confirmed (owner, 17 Oct) |
| DEC-033 | The canonical documentation set is five documents; this set covers design, features, UX and flows, while code and versions are handled by a developer and an AI coding agent in another workspace | Confirmed (owner, 17 Oct) |
| DEC-034 | Open questions get a best-practice recommendation marked [APPROVED PROTOTYPE] and stay Open until the owner approves | Superseded by DEC-048 on 25 Nov 2026 |

## C. Collision and recovery map

| Source ID | 24 Oct original meaning | Latest source meaning/status | Unique history key(s) | Action |
|---|---|---|---|---|
| DEC-035 | Dark theme colour-system refinement; authoritative Color System 1.2 | Editorial/Analytical workspace family direction | HDEC-2026-10-24-DEC-035; HDEC-2026-11-26-DEC-035 | Preserve both source wordings; owner-reviewed crosswalk needed |
| DEC-036 | Contextual section/module identities; Community deep-teal scope | Matte Black analytical workspace reference | HDEC-2026-10-24-DEC-036; HDEC-2026-11-26-DEC-036 | Preserve both source wordings; owner-reviewed crosswalk needed |
| DEC-037 | Light-theme section identity and neutral surfaces | Intentional whitespace and density modes | HDEC-2026-10-24-DEC-037; HDEC-2026-11-26-DEC-037 | Preserve both source wordings; owner-reviewed crosswalk needed |
| DEC-050–DEC-053 | Not available in the current source bundle | Changelog says they were added 25 Nov; full descriptions missing | HDEC-UNRECOVERED-DEC-050 … HDEC-UNRECOVERED-DEC-053 | Reserved; recover original source before assigning meaning |

## D. Interpretation rules

1. The original 24 Oct table is the record of what was available and approved in that baseline.
2. The latest 26 Nov table is the record of what the current source document says. It does not retroactively alter the earlier source.
3. When a current document references a colliding identifier, cite its date/version until the owner approves a migration crosswalk.
4. New decisions should not be assigned by guessing the next number while a collision is open. Use a unique history key provisionally, then owner-approve a permanent DEC number/crosswalk.
5. A decision status (Approved Prototype, Production Approved, Proposed, etc.) does not prove that code has been implemented.
