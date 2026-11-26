# PacketPulse 2.0 — 4. Delivery Plan and Developer Handoff

Version 4.6 · 26 November 2026 · Owner: tech lead (to be named) · Supersedes the 17 October 2026 Delivery Plan and Developer Handoff v3.0, consolidating the relevant architecture, roadmap and checklist material from the earlier D/E documents. There is one checklist, and it is in this document. Requirements are cited as PRD, decisions as DEC and OPEN (Document 1); design rules as DES (Document 2); screens and workflows as SCR and WF (Document 3). **[APPROVED PROTOTYPE]** marks owner-approved scope for the next review build; production gates remain separate.

## 1. Purpose and scope

This document tells the developer and the AI coding agent what to build, in what order, and how to know it is done. The owner's team decides product direction, design, features and flows (Documents 1 to 3). The five-document set defines approved prototype scope and preferred source libraries. Exact package versions, compatibility, licences and file structure must be confirmed against the repository audit before installation. This document gives requirements, rules, tasks and tests, and avoids unsupported assumptions about production code.

| Fact | Detail |
| --- | --- |
| Existing stack (fixed) | Next.js for frontend and backend, an existing backend service, PostgreSQL (Supabase), Redis, hosting on Vercel and Render (DEC-021 to DEC-023, DEC-032). No technology is replaced without a concrete requirement and owner approval |
| Scale | About 2,000 members, 8 admins and 1 SuperAdmin today; design target 10,000 members without a rewrite |
| Repository access | None when this was written. Nothing here says a feature exists in production; every production status is Unverified until TASK-001 |
| Status words | Prototype scope: Approved Prototype, In Prototype, Ready for Review, Reviewed, Retain/Refine/Restrict/Remove. Engineering task status: Open, In progress, Blocked (name blocker), Done (with evidence). Prototype approval does not equal production approval. |
| PV | Built and tested in the reference prototype only; a specification and a test scenario, not production code |

## 2. Product-level architecture rules

These rules apply to any implementation of the planned features, whatever the code looks like.

| Rule | Why | Tasks |
| --- | --- | --- |
| Every rule, permission and state change is enforced on the server; screens are never the security boundary (DEC-010) | Hidden screens can be called directly | TASK-008 |
| Business rules live in one place and are used by every entry point | The same rule must give the same answer everywhere | TASK-008, TASK-010 |
| Slow work runs in the background, not inside the request: resume parsing, notifications, invoices, expiry checks, AI drafts | Pages stay fast; failures can retry | TASK-016 |
| Files are private; a resume of up to 5 MB is uploaded directly to storage, not through the web server; links are short-lived; every open is logged | Large uploads and private data | TASK-014 |
| The audit log is append-only and written with the change it describes | Trust and investigation | TASK-015 |
| Payment and provider events are confirmed from the provider, verified, and handled once | Duplicates and spoofing | TASK-039 |
| Environments are separate (local, preview, staging, production) and secrets never live in the repository | Safety | TASK-003 |
| New work is organised in modules with clear ownership inside the existing backend (DEC-024) | Avoids tangling | TASK-001 |
| Existing members are moved additively, behind switches, in stages, with a tested way back (RISK-05) | No big-bang change | TASK-049 |

The diagram shows the intended shape. Which parts run on Vercel and which on Render is confirmed in the audit (DEV-02).

&#91;embedded content: target shape · 1 app, 5 services\]

The backend is the only part that decides what is allowed; the frontend only shows it.

## 3. Developer confirmation list (Phase 0)

The developer confirms each item in TASK-001 and records the answer here. Do not paste secrets or data into documents.

| ID | Question | Why it matters | Evidence to collect |
| --- | --- | --- | --- |
| DEV-01 | Which framework versions run in production, are they supported, and are security updates applied; what kind of Next.js routing is used | Old versions carry known security problems; affects how the rules above are built | Package list, deployment settings |
| DEV-02 | What runs on Vercel and what on Render (web app, backend, background work, scheduled jobs) | Decides where slow work and files can live | Project and service settings |
| DEV-03 | Does the browser talk to the database directly, or only through the backend | If directly, database-level access rules are the main protection | Client configuration, network trace |
| DEV-04 | Where are permissions enforced today: screens, backend, database | Findings feed RISK-04 | Route and policy review |
| DEV-05 | How do sign-in and sessions work today | Decides TASK-006 | Auth configuration |
| DEV-06 | What does Redis hold (cache, sessions, limits, queues) | Avoids a second queue | Usage review |
| DEV-07 | Where do resumes and certificates live and who can open them | RISK-09 | Storage settings, upload code |
| DEV-08 | Which providers are already connected (email, WhatsApp, payments, analytics, ClickUp, n8n, error tracking) | Scope of OPEN-12, OPEN-16, OPEN-18 | Variable names only, never values |
| DEV-09 | What tests, build checks and monitoring exist | Baseline for TASK-017 | CI history |
| DEV-10 | What backups exist, how long a restore takes, and which plan limits apply | RISK-06 | Backup settings, a trial restore |
| DEV-11 | Which component, primitive, styling, chart, editor, icon and motion libraries already exist; confirm React/Next/Tailwind versions and licences | DEC-040 to DEC-043 | package manifest, lockfile, imports, licence metadata; never copy secrets |

## 4. Data the product needs (Proposed)

Derived from the prototype's behavior, not from the production database. Compare with the real schema in TASK-001 and record differences. Field-level detail is the developer's decision; this table states what must be true.

| ID | Entity | Purpose | Key rules | Sensitivity |
| --- | --- | --- | --- | --- |
| DB-001 | User | Account | One per person; email unique and verified | Personal |
| DB-002 | Role and permission | Additive roles with permissions | One user, many roles; company-scoped roles for recruiters; changes audited | Internal |
| DB-003 | Candidate profile | Reusable identity | One per user; date of birth shows 18 or older; DOB, CTC and contact details protected at field level | High |
| DB-004 | Consent | Consent history | Append-only; purpose, granted or withdrawn, time, notice version | Personal |
| DB-005 | Resume file | Private files | Owner and permitted viewers only; scan result; size and type limits | High |
| DB-006 | Skill and alias | Taxonomy | Name unique ignoring case; retire blocked when in use | Low |
| DB-007 | Skill suggestion | Automatic suggestions | Sightings count; merge creates an alias | Low |
| DB-008 | Profile skill | A claimed skill | One per profile and skill | Personal |
| DB-009 | Evidence and evidence event | Verification requests and history | Many per skill; events append-only; records who, when, reason, policy version | High |
| DB-010 | Course, lesson, enrollment, progress | Learning | One enrollment per user and course; price in whole paise | Low |
| DB-011 | Lab, submission, review | Practice | Max 3 attempts per user and lab; four scores 0 to 4 | Medium |
| DB-012 | Assessment, attempt, result | Proof | Version recorded; attempts and retake gap enforced; answers autosaved | Medium |
| DB-013 | Thread, post, vote, follow, report | Community | One accepted answer per thread; soft delete with audit | Medium |
| DB-014 | Mentoring request | Mentoring | Decline needs a reason | Personal |
| DB-015 | Company | Employer | Status Pending, Approved, Changes requested, Suspended; reviewer recorded | Business |
| DB-016 | Position and position event | Hiring need | Belongs to a company; event history append-only; vacancies filled tracked | Business |
| DB-017 | Application and status history | Candidate to job | Unique per profile and position; history append-only | High |
| DB-018 | Feedback and scorecard | Recruiter reviews | Reason required for On hold and Rejected | Internal |
| DB-019 | Interview | Scheduling | Future time stored in UTC, shown in IST | Personal |
| DB-020 | Offer | Offer | One active offer per application | High |
| DB-021 | Order, payment, invoice, refund | Billing | Money in whole paise; provider events handled once; GST recorded | Financial |
| DB-022 | Fee policy and fee consent | Placement fee | Percentage 0.1 to 5; consent immutable | Personal |
| DB-023 | Visibility policy, AI policy, security settings | Policies | Only a SuperAdmin writes; versioned | Internal |
| DB-024 | Notification, preference, delivery | Messaging | Opt-in for WhatsApp; delivery logged | Personal |
| DB-025 | Audit event | Audit | Append-only; no update or delete | Internal |
| DB-026 | Outbox event and job | Background work | Written with the change that caused it | Internal |
| DB-027 | Content | Authored content | Required metadata; archived, not deleted | Low |
| DB-028 | Data request | Export and erasure | Tracked to completion | Personal |
| DB-029 | Blocked company | Hide from companies (PRD-050) | Up to 20 per member; matched by name and domain | Personal |
| DB-030 | Guideline acceptance | Community rules (PRD-054) | Time and version of the guidelines accepted | Personal |
| DB-031 | Community content metadata and revision | Structured posts (PRD-055 to PRD-057) | Content type, author, topic, status, visibility, timestamps; revisions are traceable | Medium |
| DB-032 | Topic follow, feed preference and bookmark | Personal discovery controls (PRD-056, PRD-058) | Member-owned; hide/mute/follow/saved state is reversible | Personal |
| DB-033 | Group, membership and moderator event | Groups (PRD-059) | Membership scoped to group visibility; moderator actions audited | Personal |
| DB-034 | Event, RSVP and attendance | Events (PRD-059) | Time stored in UTC, shown in member timezone; capacity and waitlist state recorded | Personal |
| DB-035 | Contribution and reputation ledger | Community identity (PRD-060, PRD-061) | Append-only source events; reputation is explainable; never replaces verification evidence | Personal |
| DB-036 | Knowledge relationship | Knowledge graph (PRD-063) | Typed links between taxonomy, content, learning, practice, assessment, evidence and opportunity | Low |
| DB-037 | Verification policy and experiment | Automated verification (PRD-062, PRD-065) | Mode, thresholds, model/policy version, cohort, flag, review window, owner and kill switch; versioned | Internal |
| DB-038 | Verification evaluation and decision event | Automated verification (PRD-062) | Evidence references, result, confidence band, reason, policy/model version, actor, appeal and reversal; append-only | High |
| DB-039 | Experiment review record | Feature experiment governance (PRD-065) | Hypothesis, baseline, cohort, metrics, safety findings, team feedback, review date and next-build decision | Internal |
| DB-040 | Component and asset register | Design governance (DES-018, DES-019) | Component source, package/version, licence, asset source, terms checked date, owner and upgrade status | Internal |

| DB-041 | Resource | Shared technical resource, article, guide, video, tool, template, lab or external reference | Owner, type, category, tags, visibility, moderation/publish status and source attribution are explicit | Medium |
| DB-042 | Resource version and revision | Version history for authored or updated resource content | Immutable revision snapshots; current version pointer; author and timestamp | Medium |
| DB-043 | Resource source and attachment | Uploaded file, external URL, provider source or embedded content | MIME/signature, source, licence, attribution, scan status and permission inherit from parent resource | High |
| DB-044 | Resource collection | Member-owned or public curated collection of resources | Collection visibility is explicit; membership and ordering are controlled by owner/moderator | Personal |
| DB-045 | Saved resource and reading progress | Member bookmark, saved state, recently viewed and progress | Member-private by default; saving does not transfer ownership or change source visibility | Personal |
| DB-046 | Resource review event | Moderation, licence review, report and publication decisions | Append-only; actor, reason, evidence, status transition and timestamp | Internal |
| DB-047 | Onboarding preference | Member role context, interests, goals and feed preferences | Optional values are editable; skipped fields remain unset rather than inferred | Personal |
| DB-048 | Profile visibility rule | Field/audience-level visibility and consent state | Audience rules match server-side response shaping; public visibility is opt-in where permitted | High |
| DB-049 | Connected identity | External provider identity linked to a PacketPulse account | Provider, external subject ID, scope/consent and link/unlink history; no token secrets in ordinary profile data | High |
| DB-050 | Account preference and session metadata | Notification/privacy/security preferences and active-session metadata | Sensitive session secrets are not stored in readable profile fields; account actions and step-up events are audited | High |

| DB-051 | Media asset | Parent resource/course, source type, storage key/provider, MIME/codec, duration, dimensions, scan state, processing state, visibility, licence and metadata | Private object storage; metadata in PostgreSQL; signed access; audit state transitions |
| DB-052 | Playback progress | Member, media asset, last position, completion state, last played, playback preferences | Member-private; inherit parent resource/course permissions; configurable retention |
| DB-053 | Captions, chapters and transcript | Media asset, language, VTT/SRT track, transcript text, time-coded chapters and generated/manual provenance | Versioned; accessible; distinguish human-reviewed from generated captions |
| DB-054 | External media source | Provider key, canonical provider ID, normalised URL, embed parameters, CSP requirements and provider status | Strict allow-list; store normalised source, not arbitrary HTML/iframe markup |
| DB-055 | Upload session and processing job | Uploader, resumable upload ID, storage key, bytes, status, scan result, transcode/thumbnail job and expiry | Ownership checked server-side; idempotent processing and audit trail |
| DB-056 | Audio waveform data | Media asset, waveform peaks, duration, channel layout, generation method/version, optional regions/markers | Derived data, not original audio; use pre-decoded peaks for large/streamed assets where needed; permission follows media asset |



Integrity rules: status columns allow only defined states and the allowed moves in Document 3 section 7; money is stored in whole paise; times are stored in UTC and shown in IST; indexes support the queues and filters on each list screen; soft delete only where erasure rules allow.

## 5. Service capabilities (Proposed)

The product needs these capabilities. Names and routes are for the developer to choose; the rules in the last column are not optional. Every capability checks who is asking, validates input, returns one consistent error shape with a stable code and a plain message, paginates lists, and writes an audit event when staff act. Retryable requests (payments, applications, offers) must be safe to repeat.

| ID | Capability | Who | Key rules |
| --- | --- | --- | --- |
| API-001 | Register | Public | Email format; rate limit; 18 or older |
| API-002 | Verify email code | Public | Expiry and attempt limit |
| API-003 | Sign in | Public | Lockout; MFA for staff and recruiters |
| API-004 | Step-up for sensitive actions | Admin, SuperAdmin | Reason and fresh code; lockout after repeated failures |
| API-005 | Read and edit own profile | Member | Per-field rules; sensitive fields private |
| API-006 | Save required details | Member | PRD-003, PRD-005, PRD-006 |
| API-007 | Upload and parse resume | Member | PDF, DOC, DOCX up to 5 MB; scan; parse in the background |
| API-008 | Consent history and changes | Member | Append-only |
| API-009 | Export or erase my data | Member | One open request per kind |
| API-010 | List skills | Authenticated | Includes aliases |
| API-011 | Add, merge, reject skills and suggestions | Admin | Unique name; retire blocked when in use |
| API-012 | Course catalog with price and state | Member | Price shown before purchase |
| API-013 | Enroll and record progress | Member | State model |
| API-014 | Submit a lab | Member | Four parts; max 3 attempts |
| API-015 | Submit evidence | Member | PRD-013 |
| API-016 | Reviewer queue for evidence | Admin | Filter by status |
| API-017 | Decide on evidence (approve, ask, reject, revoke) | Admin | Two checks to approve; reason otherwise; records policy version |
| API-018 | Appeal a rejection | Member | Once, only from Rejected |
| API-019 | Review queue for labs | Mentor, Instructor, Admin |  |
| API-020 | Score and decide a lab | Mentor, Instructor, Admin | Four scores 0 to 4; pass rule; feedback 10 or more characters |
| API-021 | List and ask questions | Member | Title 8, detail 20, sensitive-data confirmation |
| API-022 | Answer and vote | Member | One vote per user |
| API-023 | Report a post | Member | Reason required |
| API-024 | Apply to a position | Member | Required details complete; experienced-only rule; fee declaration and permission; hidden companies respected |
| API-025 | List published positions | Member | Fee and eligibility fields shown |
| API-026 | Create, submit, publish, pause, close, reopen position | Recruiter, Admin | State model; reasons and dates; company must be Approved |
| API-027 | Screening and recruiter decisions | Admin, Recruiter | Reasons; forwarded only for recruiters |
| API-028 | Schedule an interview | Recruiter | Future time; named interviewer |
| API-029 | Extend an offer | Recruiter | Future joining date; validity before joining |
| API-030 | Accept or decline an offer | Member (own) | Fee confirmation on accept; reason on decline |
| API-031 | Forward to a company | Admin | A person confirms; consent present |
| API-032 | Withdraw an application | Member (own) | Reason; not after Joined |
| API-033 | Start checkout | Member | Safe to repeat; price from the server |
| API-034 | Receive payment events | Provider | Verified; handled once |
| API-035 | Request a refund | Admin | Reason |
| API-036 | Approve a refund | SuperAdmin | Not the requester |
| API-037 | Invoices and receipts | Member |  |
| API-038 | Notification inbox | Member |  |
| API-039 | Notification preferences | Member | Opt-in for WhatsApp |
| API-040 | User actions (reset link, MFA reset, sign out, suspend, role change) | SuperAdmin | Step-up; no temporary password for admins; audit |
| API-041 | Role matrix | SuperAdmin | SuperAdmin column fixed |
| API-042 | Visibility and AI policy | SuperAdmin | Locked rows stay locked |
| API-043 | Security settings | SuperAdmin | Range checks |
| API-044 | Audit viewer | Admin | Read only |
| API-045 | Funnel analytics | Admin | Segment filter; no personal data in events |
| API-046 | Author and review content | Instructor, Admin | Required metadata |
| API-047 | Draft a position from pasted text | Recruiter | Draft only; labelled; review gate |
| API-048 | Public fees data | Public | Cached |
| API-049 | Mentoring requests | Member, Mentor | Reason on decline |
| API-050 | Feature switches | SuperAdmin | Audited |
| API-051 | Company onboarding and review | Recruiter, Admin | Free email domains held; first position reviewed |
| API-052 | Assessment attempts (start, autosave, submit, result) | Member | One active attempt; limits and gap enforced; resume with remaining time |
| API-053 | Manage hidden companies | Member | Up to 20; matching by name and domain |
| API-054 | Community feed and member topic preferences | Member | Feed view, follows, mute/hide, saved items; transparent user controls |
| API-055 | Structured community content | Member, Moderator | Content-type validation, attachments, sanitisation, revision history, sensitive-data warning |
| API-056 | Unified community search and related knowledge | Member | Permission-aware search across content, people, groups, events and learning links |
| API-057 | Group membership and moderation | Member, Moderator | Group-scoped permissions; every removal/restriction audited |
| API-058 | Events, RSVP and attendance | Member, Host | Time zone, capacity, waitlist, cancellation and reminders |
| API-059 | Community contribution identity | Member | Privacy-scoped contribution record; reputation distinct from verified skills |
| API-060 | Verification mode, evaluation and decision | Admin, SuperAdmin, verification service | Manual/AI-assisted/Automated; feature flag; versioned policy; threshold; reason; confidence band; audit; appeal; human fallback |



| API-061 | List and search resources | Member | Permission-aware visibility, filters, typed results and safe query analytics |
| API-062 | Read resource detail, preview metadata and versions | Member | Parent permission, file/source access and version visibility enforced server-side |
| API-063 | Create, edit, submit and publish a resource | Member, Contributor, Moderator | Required metadata, source rights, sanitisation, draft recovery and moderation status |
| API-064 | Manage saved resources, collections and reading progress | Member (own) | Member-scoped state; saving never makes a private source public |
| API-065 | Review resource, version, licence and report | Moderator, Admin | Audited approve, request changes, reject, unpublish and restore actions |
| API-066 | Read/update onboarding preferences | Member (own) | Role, interests and goals are optional/editable; skip is a valid state |
| API-067 | Read/update profile field visibility and audience preview | Member (own) | Server applies identical visibility rules to preview and real responses |
| API-068 | Resolve external identity provider sign-in/link/unlink | Public, Member | Provider subject is validated; consent and link/unlink history recorded; step-up when needed |
| API-069 | Create/read media asset and playback manifest | Member, Learner | Parent permission; source/adapters; signed media access; provider status |
| API-070 | Update playback progress and preferences | Member (own) | Rate-limited, privacy-scoped, resume state; never bypass parent visibility |
| API-071 | Resolve approved external embed | Member | Provider allow-list, URL normalisation, CSP/iframe policy, provider errors |
| API-072 | Create, pause, resume, retry and cancel upload | Member, Contributor | Tus or existing resumable transport; ownership, quotas, type/size validation |
| API-073 | Scan and process media/document | Service, Moderator | Idempotent scan, transcoding, thumbnail, captions/metadata jobs; quarantine errors |
| API-074 | Read supported document preview | Member, Reviewer | PDF/image/text/table/office preview path; source permissions preserved; fallback |
| API-075 | Manage captions, transcripts and chapters | Member, Instructor, Admin | Language, source, version and reviewed/generated provenance |
| API-076 | Read nested resource child state | Member | Route-level permissions; parent context; no private values in query string |
| API-077 | Read audio waveform peaks and time markers | Member, Learner | Parent resource permission; bounded payload; optional feature with audio-control fallback |


## 6. Security, privacy and operations requirements

| ID | Requirement | Tasks | Tests |
| --- | --- | --- | --- |
| SEC-01 | Every page, request and action checks who is asking and what they may do on the server; hidden screens are not protection | TASK-008 | TEST-005, TEST-006 |
| SEC-02 | Date of birth, compensation, contact details and recruiter notes are protected at field level and shown only as DEC-015 allows | TASK-012 | TEST-034 |
| SEC-03 | Resumes, certificates and evidence are private; uploads are scanned; links are short-lived; every open is logged | TASK-014 | TEST-012 |
| SEC-04 | Admin security baseline (DEC-020): required MFA, passkeys preferred, no SMS, no temporary passwords, step-up, lockout, break-glass, access reviews | TASK-044 | TEST-038, TEST-039 |
| SEC-05 | Session limits: members 30 days idle; staff 30 minutes idle and 8 hours absolute | TASK-009 | TEST-007 |
| SEC-06 | Rate limits and bot protection on sign-in, codes, uploads and search | TASK-013 | TEST-013 |
| SEC-07 | Input is validated and output encoded; errors use one safe shape; standard security headers are set | TASK-010, TASK-011 | TEST-011 |
| SEC-08 | The audit log is append-only and complete for staff actions | TASK-015 | TEST-008 |
| SEC-09 | Consent, export, erasure and retention follow DPDP and Document 1 section 10.7; breach response is written and rehearsed | TASK-025, TASK-046 | TEST-014, TEST-041 |
| SEC-10 | Payments use hosted checkout; provider events are verified and handled once; refunds follow PRD-039 | TASK-039 | TEST-030, TEST-031 |
| SEC-11 | AI follows DEC-019 and DEC-044: no path to recruitment selection/forwarding, financial or sensitive account actions by default; automated skill verification is allowed only under PRD-062 controls and evaluation tests | TASK-055, TASK-064 | TEST-035, TEST-059 to TEST-061 |
| SEC-12 | Secrets stay out of the repository; environments are separate; dependencies are updated and scanned; supported framework versions are confirmed (DEV-01) | TASK-003, TASK-017 | TEST-009 |
| SEC-13 | A one-page threat model and a data map (what personal data, where, why, who can see it) exist before Release 1 | TASK-002 | Review |
| OPS-01 | Backups exist and a restore has been tried and timed | TASK-004 | TEST-010 |
| OPS-02 | Errors, slow requests and failed background work raise alerts to a named owner | TASK-005 | TEST-009 |
| OPS-03 | A written incident process: who decides, who is told, how members are informed | TASK-005 | Review |

## 7. Delivery plan

Order follows the release scope in Document 1 section 8. Effort is shown in relative sizes (S, M, L) because durations depend on team size and the audit. **Re-estimate after TASK-001 and TASK-002.**

| Milestone | Focus | Exit criteria | Owner decisions needed first |
| --- | --- | --- | --- |
| M0 Audit and baseline | Repository, data, hosting, gap analysis, threat model, backups, monitoring, authentication decision | Verified architecture and data map; every PRD and SCR classified; restore tried; DEV-01 to DEV-10 answered | Team size and release plan |
| M1 Foundation | Migrations, permissions, sessions, validation, hardening, field protection, rate limits, private files, audit log, background work, CI | Every route denies unauthorized callers; audit log written; files private; CI green | OPEN-13, OPEN-12 scope |
| M2 Design system and shell | Tokens, components, app shell, states, accessibility baseline, notification service | Components with all states; navigation by role; notifications by preference | Approved Prototype dispositions for OPEN-01, OPEN-02, OPEN-04, OPEN-18 |
| M3 Identity, profile and community | Signup, onboarding, profile/account, resume review, consent, taxonomy, community, Resources and guidelines | A member can register, personalise, manage profile/account, discover/share/save resources, ask and answer | Approved Prototype items PRD-066 to PRD-076; production gates remain separate |
| M4 Learn and practice | Content, enrollment, progress, labs, mentoring and resource cross-links | Members can enroll, submit labs, use knowledge resources and get reviews | Pricing uses prototype placeholders until production approval |
| M5 Prove and verify | Assessments, evidence review, badges | Verified labels only follow evidence | Approved Prototype dispositions for OPEN-03, OPEN-05 |
| M6 Careers | Company onboarding, positions, applications, screening and forwarding, offers, interviews, payments and placement fee | A hire can complete end to end in staging | Approved Prototype dispositions for OPEN-07, OPEN-08, OPEN-10, OPEN-21; legal/provider gates before production |
| M7 Operations | Queues, moderation, admin security, analytics, data rights, feature switches, integrations | Staff can run the platform with audit and policy | Approved Prototype dispositions for OPEN-12, OPEN-16; repository/provider audit before integration |
| M8 Release | Staged rollout of existing members, accessibility and device pass, localization, candidate protections, trust pages | Rehearsed rollout and rollback; release checklist signed | Release date and go decision |
| M9 Improve | AI drafting behind review gates, post-launch monitoring | Alerts and dashboards active; backlog by evidence | AI scope approval |

Blockers that stop the affected work until answered: repository and hosting access (M0); payment provider and legal review for the fee (M6); assessment rules (M5); retention schedule (M3 and M7).

## 8. Task register

Every task starts Open. A task is Done only when its acceptance criteria are met with evidence and its tests pass. Task IDs in this set replace those in the earlier Document E.

| ID | Task | Depends | Priority, size | Acceptance criteria | Tests |
| --- | --- | --- | --- | --- | --- |
| TASK-001 | Audit the repository, data and hosting; answer DEV-01 to DEV-10; map routes, data flows, integrations and files | none | P0, M | A verified map and route inventory are stored in the project; no secrets or personal data in them; a second engineer reviews | Review |
| TASK-002 | Gap analysis and documentation update: classify every PRD and SCR as Present, Partial, Missing or Different; produce the threat model and data map | TASK-001 | P0, M | Each requirement has a classification with evidence; Documents 1 to 4 updated; threat model and data map approved | Review |
| TASK-003 | Environments and secrets: local, preview, staging and production configured separately | TASK-001 | P0, S | A new developer starts from the instructions; no secret in the repository; staging never reads production data | TEST-009 |
| TASK-004 | Backups and recovery drill | TASK-001 | P0, S | A restore on staging succeeds and its time is recorded; plan limits are listed | TEST-010 |
| TASK-005 | Logging, error tracking, uptime checks, alerts and an incident process | TASK-001 | P0, M | An injected error reaches the named owner; the incident process is written | TEST-009 |
| TASK-006 | Authentication review and decision (OPEN-13): keep the current method if it meets the baseline, else a plan to close gaps | TASK-001 | P0, S | A decision record states the findings and the plan | Review |
| TASK-007 | Reviewable versioned migrations and the background-work approach | TASK-001 | P0, M | Migrations run in order on a copy; background work runs outside web requests | TEST-009 |
| TASK-008 | Permission engine: role matrix, resource and state rules | TASK-001 | P0, L | Every route and action in the inventory denies an unauthorized role; one shared check is used everywhere | TEST-005, TEST-006 |
| TASK-009 | Sessions and step-up | TASK-006, TASK-008 | P0, M | Session limits hold; step-up asks for reason and a fresh code | TEST-007, TEST-038 |
| TASK-010 | Validation and error format | TASK-008 | P0, M | Invalid input returns field errors in one shape; no stack traces leak | TEST-011 |
| TASK-011 | Web security hardening: headers, request forgery protection, dependency and secret scanning | TASK-001 | P0, M | Scans report no critical issues; headers present | TEST-011 |
| TASK-012 | Field-level protection for date of birth, compensation, contact details and notes | TASK-008 | P0, M | Each sensitive field is returned only to allowed roles and stages | TEST-034 |
| TASK-013 | Rate limits and bot protection | TASK-008 | P0, S | Limits on sign-in, codes, uploads and search hold under test | TEST-013 |
| TASK-014 | Private file pipeline: direct uploads, scanning, short-lived links, open logging | TASK-008 | P0, M | A 5 MB resume uploads without passing through the web server; another user cannot open it; every open is logged | TEST-012 |
| TASK-015 | Append-only audit log | TASK-008 | P0, M | Every staff action writes who, what, subject, reason, time; entries cannot be edited | TEST-008 |
| TASK-016 | Background work with reliable hand-off (messages, parsing, invoices, expiry checks) | TASK-007 | P0, M | A failed job retries and is never run twice; a stalled job raises an alert | TEST-009 |
| TASK-017 | Build, test and release pipeline | TASK-003 | P0, M | Every change runs lint, tests, build and security checks; a failed check blocks release | TEST-009 |
| TASK-018 | Design tokens and component library with every state shown | TASK-001 | P0, L | Components match Document 2; every state visible; no raw color values in components | TEST-036 |
| TASK-019 | App shell and navigation by role | TASK-018, TASK-008 | P0, M | Navigation matches Document 3 section 2.2; deep links survive sign-in; denied pages explain | TEST-006 |
| TASK-020 | Loading, empty, error and success patterns; accessibility baseline | TASK-018 | P0, M | Every list and form uses the shared patterns | TEST-036, TEST-037 |
| TASK-021 | Notification service: in-app, email, WhatsApp opt-in, preferences, quiet hours, delivery log | TASK-016 | P0, L | Preferences and quiet hours respected; critical events exempt; delivery logged | TEST-032 |
| TASK-022 | Registration and email code | TASK-010, TASK-013 | P0, M | PRD-001, PRD-004 to PRD-006 hold | TEST-001, TEST-002 |
| TASK-023 | Onboarding and required details | TASK-022 | P0, M | Applying is blocked until PRD-003 is complete and the missing items are listed | TEST-003 |
| TASK-024 | Resume upload and parsing with review | TASK-014, TASK-016 | P1, M | Parsed values are shown for review; a parse failure never blocks manual entry | TEST-004 |
| TASK-025 | Profile, consent and privacy settings | TASK-023 | P0, M | Consents carry times; withdrawal takes effect; the recruiter preview matches what is shared | TEST-014 |
| TASK-026 | Community Q&A, guidelines and reputation | TASK-025 | P1, L | PRD-024 to PRD-028 and PRD-054 hold | TEST-050 |
| TASK-027 | Skill taxonomy and suggestions | TASK-008 | P1, M | Suggestions merge at the threshold; retire is blocked when in use | TEST-015 |
| TASK-028 | Content catalog and publishing flow | TASK-008, TASK-027 | P1, M | Publishing needs required details and review; unpublish hides from learners | TEST-020 |
| TASK-029 | Enrollment and progress | TASK-028 | P1, M | Learning states and moves match Document 1 | TEST-019 |
| TASK-030 | Labs and review | TASK-029 | P1, L | PRD-020 holds; fourth attempt refused | TEST-018 |
| TASK-031 | Mentoring requests | TASK-026 | P2, S | Decline needs a reason shown to the member | TEST-006 |
| TASK-032 | Assessment engine: attempts, autosave, results | TASK-027 | P1, L | PRD-017 and PRD-018 hold; limits and retake gap enforced | TEST-049 |
| TASK-033 | Evidence submission and verification review | TASK-027, TASK-015 | P0, L | PRD-012 to PRD-015 hold; no verified label without a record | TEST-016, TEST-017 |
| TASK-034 | Badge lifecycle and public verification page | TASK-033 | P1, M | Expiry, revoke and renewal work; the public page matches Document 1, 10.1 | TEST-017 |
| TASK-035 | Company onboarding and verification | TASK-008, TASK-021 | P0, M | Pending companies cannot publish; the first position is reviewed | TEST-048 |
| TASK-036 | Positions lifecycle | TASK-035 | P0, L | PRD-031 holds; reopen rules enforced | TEST-022 |
| TASK-037 | Applications and the apply flow with consent and fee declaration | TASK-025, TASK-036 | P0, L | Both fee ticks when a fee applies; experienced-only roles block freshers | TEST-021, TEST-027 |
| TASK-038 | Screening, forwarding and recruiter visibility | TASK-037, TASK-012 | P0, L | A person confirms forwarding; recruiters see only forwarded candidates and allowed fields | TEST-025 |
| TASK-039 | Payments: hosted checkout, GST, provider events, sandbox first | TASK-008 | P1, L | Price comes from the server; a repeated request does not charge twice; a provider event is handled once | TEST-030 |
| TASK-040 | Offers, joining and placement fee invoices | TASK-038, TASK-039 | P1, L | Fee shown and confirmed on acceptance; invoice only after Joined; none after decline or withdrawal | TEST-026, TEST-028, TEST-029 |
| TASK-041 | Recruiter dashboard, candidate search and compare | TASK-038 | P1, M | Search, filters and compare respect visibility | TEST-025 |
| TASK-042 | Interviews and reminders | TASK-038, TASK-021 | P1, M | Future time, named interviewer, notification and reminder | TEST-024 |
| TASK-043 | Operations queues and moderation | TASK-015, TASK-026 | P1, L | Every moderation action has a reason and an audit entry; appeals go to a different admin | TEST-050 |
| TASK-044 | Admin security: MFA, step-up, lockout, break-glass, access reviews | TASK-006, TASK-009 | P0, L | DEC-020 holds in test | TEST-038, TEST-039, TEST-040 |
| TASK-045 | Analytics events and funnel | TASK-021 | P2, M | Events fire once; no personal data; funnel matches Document 1 section 4 | TEST-042 |
| TASK-046 | Data rights and retention: export, erase, schedule | TASK-025 | P0, L | Requests complete within the policy period and are logged | TEST-041 |
| TASK-047 | Feature switches and policy screens (visibility, AI policy) | TASK-008, TASK-015 | P1, M | Only SuperAdmin changes; locked rows stay locked; changes audited | TEST-033 |
| TASK-048 | Integrations: ClickUp and n8n, only after scope is agreed (OPEN-12) | TASK-001, TASK-016 | P2, M | The application database stays authoritative; no resumes or contact details leave; errors are recoverable | Review |
| TASK-049 | Staged rollout of existing members, with a tested way back | TASK-004, TASK-017 | P0, L | A rehearsal on a production-like copy passes; counts and relationships match; rollback tested | TEST-043 |
| TASK-050 | Accessibility and device pass with a real screen reader | TASK-020 | P0, M | Key flows pass; notes kept | TEST-036, TEST-037 |
| TASK-051 | Localization: English and Hindi | TASK-019 | P2, M | The switch persists and layouts survive longer text | TEST-045 |
| TASK-052 | Hide from companies (PRD-050) **\[REVIEW\]** | TASK-025, TASK-038 | P1, S | A hidden company never sees the profile in search or lists | TEST-046 |
| TASK-053 | Recruiter response reminders and candidate status messages (PRD-051, PRD-053) **\[REVIEW\]** | TASK-038, TASK-021 | P1, S | Reminder after 10 working days; the candidate sees the last update date | TEST-047 |
| TASK-054 | Public trust pages: Fees, How verification works, Community guidelines **\[REVIEW\]** | TASK-034, TASK-026 | P1, S | Pages match Document 1 wording and are reachable from every badge and post form | TEST-044 |
| TASK-055 | AI drafting for positions and resume extraction behind review gates | TASK-016, TASK-047 | P2, M | Drafts are labelled; nothing forbidden by DEC-019 can run | TEST-035 |
| TASK-056 | Post-launch monitoring and improvement backlog | TASK-005, TASK-045 | P1, S | Dashboards and alerts are active; the backlog is ordered by evidence | Review |

| TASK-057 | Signal Grove v4 tokens and workspace layouts: Editorial, Analytical and Matte Black Edition; preserve light/dark and density modes | TASK-001, TASK-018 | P0, M | Both workspace families implemented; matte-black pairs pass contrast review; responsive right rail works; no screen is forced into generic cards | TEST-051, TEST-062 |
| TASK-058 | PacketPulse shared component registry and component catalogue | TASK-018, TASK-057, DEV-11 | P0, M | Base/shared/module components documented; Storybook or existing equivalent; visual regression snapshots; component source/licence register | TEST-062, TEST-063 |
| TASK-059 | Community discovery feed and member preferences | TASK-026, TASK-058 | P1, M | For you/Latest/Unanswered/Solved; follow, mute, hide, save; feed controls and empty/loading/error states | TEST-052 |
| TASK-060 | Structured community composer and content types | TASK-026, TASK-059 | P1, L | Question, discussion, case study, article, event/AMA and announcement; drafts, preview, revisions, code blocks, uploads and sensitive-data warning | TEST-053, TEST-054 |
| TASK-061 | Unified search, filters and related knowledge | TASK-027, TASK-060 | P1, L | Permission-aware search across content, members, groups, events and learning; query/result analytics without personal data leakage | TEST-055 |
| TASK-062 | Curated groups, events and mentor experience | TASK-031, TASK-059 | P2, L | Group roles, membership, RSVP, waitlist, time zones, reminders, attendance and post-event resources | TEST-056, TEST-057 |
| TASK-063 | Community contribution identity, reputation and knowledge graph | TASK-027, TASK-060, TASK-061 | P2, L | Explainable contribution ledger; no equivalence with skill verification; typed relationships use canonical taxonomy | TEST-058 |
| TASK-064 | Automated skill-verification experiment | TASK-033, TASK-047, DEV-11 | P1/P2, L | Manual, AI-assisted and automated modes; feature flag; versioned policy; thresholds; shadow/limited cohort; audit, appeal, fallback, rollback and review record | TEST-059, TEST-060, TEST-061 |
| TASK-065 | Community/operations/recruitment analytics workspace and experiment review | TASK-045, TASK-057 | P1, M | KPIs are defined; trend comparisons; contextual rail; data tables; team feedback and next-build decision captured | TEST-062, TEST-064 |
| TASK-066 | Motion and media asset system | TASK-057, TASK-058 | P1, S | Motion tokens and reduced-motion behavior; media provenance/licence register; performance and responsive asset checks | TEST-063 |
| TASK-067 | Resources Library discovery and search | TASK-058, TASK-061 | P1, M | SCR-054 supports discovery tabs, taxonomy filters, resource cards, featured collections and useful empty/error states; permissions filter results | TEST-065 |
| TASK-068 | Resource detail reader and related knowledge | TASK-067 | P1, M | SCR-055 displays preview, source/author/licence/version/review metadata, actions, related resources and discussion; broken links are reported clearly | TEST-066 |
| TASK-069 | Resource submission wizard and secure upload lifecycle | TASK-014, TASK-067 | P1, L | SCR-056 has Details/Content/Review & publish; drafts resume; upload status is real; scan/rights/attribution checks precede publication | TEST-067, TEST-068 |
| TASK-070 | Saved resources and collections | TASK-067 | P1, M | SCR-057 supports bookmarks, collections, visibility, recently viewed and continue reading; unsave does not delete source | TEST-069 |
| TASK-071 | Resource review, versioning and link health | TASK-068, TASK-069, TASK-043 | P1, M | SCR-058 has queue, preview, scan/rights details, version history and audited decisions with reasons | TEST-070 |
| TASK-072 | Signup and personalised onboarding experience | TASK-022, TASK-023 | P0, M | SCR-003 and SCR-059 include email/passkey baseline, prototype provider options, verification/recovery and skippable Role/Interests/Goals flow | TEST-071, TEST-072 |
| TASK-073 | Professional profile, identity and visibility preview | TASK-025, TASK-058 | P1, M | SCR-012 and SCR-060 show audience-aware profile, distinct skill states and field-level preview identical to server visibility rules | TEST-073 |
| TASK-074 | Account Control Centre and security/preferences screens | TASK-006, TASK-021, TASK-046 | P1, M | SCR-061 to SCR-063 plus SCR-037/SCR-038 group settings; step-up, session, provider-link, notification and data-rights flows are recoverable and audited | TEST-074, TEST-075, TEST-076 |


| TASK-075 | Parent-child navigation and route-state restoration | TASK-018, TASK-058, DEV-11 | P0, M | Parent/child route, breadcrumbs, browser history, drawer/sheet, mobile full-screen child route, query/scroll/focus restoration and permission checks are implemented | TEST-081 |
| TASK-076 | Video.js 10 recording/media player | TASK-057, TASK-058, TASK-068 | P1, M | `@videojs/react` v10.7.0 candidate; required adapters only; branded player composition; captions/transcripts/chapters, progress/resume, keyboard, PiP/fullscreen where supported and provider fallbacks | TEST-077, TEST-078, TEST-083 |
| TASK-077 | Type-aware embedded file preview | TASK-068, TASK-071 | P1, M | React-PDF/PDF.js candidate for PDF; safe image/text/code/table previews; office files use an isolated conversion or separately licensed viewer; unsupported types get an honest fallback | TEST-080 |
| TASK-078 | Resumable upload and media-processing queue | TASK-069, TASK-014, DEV-11 | P1, L | Uppy React headless/hooks + Tus candidate; pause/resume/retry/cancel; storage signed URLs; scan/quarantine; transcode/thumbnail; accurate progress and safe error states | TEST-079 |
| TASK-079 | Approved embed provider wrapper and security policy | TASK-068, TASK-076, DEV-11 | P1, M | Provider allow-list; URL parser; no arbitrary iframe/HTML; CSP and sandbox permissions; source attribution, consent and provider fallback | TEST-078, TEST-080 |
| TASK-080 | PacketPulse brand-pattern overlay library | TASK-057, TASK-058 | P1, M | Transparent SVG/inline components; packet routes, nodes, waves, pulse trails, radar, secure layers, data flow and matrix motifs; token-driven variants; backgrounds remain unchanged | TEST-082 |

| TASK-081 | Audio waveform and transcript navigation enhancement | TASK-076, TASK-058 | P2, M | Optional WaveSurfer.js 8.1.0 candidate for audio-only waveform, markers/regions and timestamp navigation; pre-decoded peaks for streamed/large audio; conventional controls remain available | TEST-084 |

## 9. Test register

Each test states what it proves. Test IDs in this set replace those in the earlier Document E. Critical rules need an automated test; interface and content checks use a manual checklist with kept notes.

| ID | What it proves | Requirement |
| --- | --- | --- |
| TEST-001 | Registration validation: email format, 18 or older, LinkedIn and WhatsApp formats | PRD-001, 004 to 006 |
| TEST-002 | Email code expiry, attempt limit and resend limits | PRD-001 |
| TEST-003 | Applying is blocked until required details are complete, and the missing items are listed | PRD-003 |
| TEST-004 | Resume upload types and size; parsed values reviewed; a parse failure still allows manual entry | PRD-007 |
| TEST-005 | Every route and action denies an unauthenticated caller | DEC-010 |
| TEST-006 | Each role can do only what the role matrix allows, checked on the server | DEC-009, DEC-010 |
| TEST-007 | Session limits for members and staff | SEC-05 |
| TEST-008 | Audit entries exist for every staff action and cannot be edited | PRD-043 |
| TEST-009 | Background jobs retry without duplicating; environments are separate; alerts fire; pipeline blocks on failure | SEC-12 |
| TEST-010 | A backup restore on staging succeeds within the recorded time | OPS-01 |
| TEST-011 | Invalid input gives field errors in one shape; security headers present; no stack traces shown | SEC-07 |
| TEST-012 | Private files: direct upload, scan, link expiry, opens logged, other users refused | PRD-046 |
| TEST-013 | Rate limits hold on sign-in, codes, uploads and search | SEC-06 |
| TEST-014 | Consent is stored with a time; withdrawal takes effect | PRD-010 |
| TEST-015 | Taxonomy: suggestions merge at the threshold; retire is blocked when in use | PRD-011 |
| TEST-016 | Evidence approval needs two checks, otherwise refused | PRD-014 |
| TEST-017 | Rejection needs a reason; one appeal; revoke; expiry removes the label | PRD-015, 016 |
| TEST-018 | A lab pass needs every area at 2 or more and an average of 2.5; at most 3 attempts | PRD-020 |
| TEST-019 | Learning states and allowed moves | PRD-019 |
| TEST-020 | Content publishing needs required details and review; unpublish hides it | PRD-021, 022 |
| TEST-021 | Apply needs both fee ticks when a fee applies; consent stored; experienced-only blocks freshers | PRD-036, 037 |
| TEST-022 | A position cannot reopen without a future deadline and more openings than filled | PRD-031 |
| TEST-023 | On hold and Rejected need a reason; On hold needs a revisit date | PRD-033 |
| TEST-024 | Interview needs a future time and a named interviewer; the candidate is notified and reminded | PRD-034 |
| TEST-025 | Recruiters see only forwarded candidates and allowed fields; date of birth never shown | PRD-032 |
| TEST-026 | Offer needs a future joining date and a validity date; accept and decline update the filled count | PRD-035 |
| TEST-027 | Invalid application state moves are rejected and history is kept | PRD-029 |
| TEST-028 | A fee invoice appears only after Joined and never after a decline or withdrawal | PRD-038 |
| TEST-029 | Accepting an offer shows the exact fee and needs a second confirmation | PRD-037 |
| TEST-030 | Checkout price comes from the server; a repeated request does not charge twice; provider events handled once | PRD-040 |
| TEST-031 | A refund needs a reason; an Admin's refund needs SuperAdmin approval; nobody approves their own | PRD-039 |
| TEST-032 | Notifications respect preferences, quiet hours and opt-in; critical events pass | PRD-041 |
| TEST-033 | Visibility and AI policy changes are SuperAdmin only, audited, and locked rows stay locked | PRD-044 |
| TEST-034 | Date of birth, compensation, contact details and notes are returned only to allowed roles and stages; profiles are private by default | PRD-009, 052 |
| TEST-035 | AI has no path to unapproved hiring, financial or sensitive account actions; drafts are labelled; skill-verification experiments are governed separately | PRD-047 |
| TEST-036 | Keyboard-only journeys, contrast, focus and a real screen-reader pass on onboarding, apply, assessment, verification and recruiter review | PRD-049 |
| TEST-037 | Key flows work at 320, 768 and 1024 px and at 200% zoom with no sideways scrolling | PRD-049 |
| TEST-038 | Step-up locks out after repeated wrong codes | PRD-042 |
| TEST-039 | Staff MFA is required; no SMS; no temporary passwords | PRD-042 |
| TEST-040 | Security settings reject out-of-range values | PRD-042 |
| TEST-041 | Export and erasure complete within the policy period and are logged | PRD-045 |
| TEST-042 | Analytics events fire once and carry no personal data | Section 4 of Document 1 |
| TEST-043 | Rollout rehearsal: counts and relationships match; rollback works | RISK-05 |
| TEST-044 | Public trust pages exist, match the agreed wording, and are linked from badges and post forms; private pages are not indexed | PRD-052 |
| TEST-045 | The language switch persists and layouts survive longer text | PRD-048 |
| TEST-046 | A hidden company never sees the profile in search or in forwarded lists | PRD-050 |
| TEST-047 | A recruiter is reminded after 10 working days without an update; the candidate sees the last update date | PRD-051, 053 |
| TEST-048 | A company that is not approved cannot publish; the first position is reviewed | OPEN-10 |
| TEST-049 | Assessment autosave, resume with remaining time, attempt limits and retake gap | PRD-017 |
| TEST-050 | Guidelines accepted before the first post; moderation actions need a reason; appeals go to a different admin | PRD-054, 028 |

| TEST-051 | Analytical Workspace uses approved shell/KPI/chart/context/table hierarchy; sidebar and contextual rail collapse responsively | DES-015, DES-016, SCR-018, SCR-024 |
| TEST-052 | Community feed views and preference controls work; mute/hide/save are reversible and do not leak private content | PRD-056, SCR-047 |
| TEST-053 | Each structured content type validates required fields, permissions and status transitions | PRD-055, SCR-048 |
| TEST-054 | Draft recovery, sanitisation, attachment checks and sensitive-data warning/redaction confirmation work | PRD-057 |
| TEST-055 | Search respects permissions and visibility, returns useful typed results, and records privacy-safe success/no-result events | PRD-058, SCR-049 |
| TEST-056 | Group membership and moderator actions enforce group permissions and append audit events | PRD-059, SCR-050 |
| TEST-057 | Events handle time zones, capacity, waitlists, cancellation, reminders and attendance states | PRD-059, SCR-051 |
| TEST-058 | Contribution identity visibility follows member controls; reputation is explainable and never displayed as skill verification | PRD-060, PRD-061, SCR-052 |
| TEST-059 | Automated verification cannot run while flag is off; every decision stores evidence reference, reason, confidence band, policy/model version and audit event | PRD-062, SCR-053 |
| TEST-060 | Automated verification evaluation covers false approval, false rejection, low-confidence, conflicting evidence, subgroup outcomes, policy change, appeal, reversal and human fallback | PRD-062 |
| TEST-061 | Team review window captures member/reviewer feedback, safety measures and next-build decision; kill switch and rollback are proven | PRD-065 |
| TEST-062 | Light, dark and Matte Black token pairs pass contrast; density modes and dashboard whitespace hierarchy are reviewed at phone/tablet/desktop | DES-013 to DES-030 |
| TEST-063 | Shared components, media assets and motion are documented/licensed; reduced-motion, keyboard, focus, loading and error states work | DES-017 to DES-030 |
| TEST-064 | Analytics dashboards distinguish activity volume from meaningful outcomes and contributor concentration; event data contains no personal data | PRD-064 |

## 10. Quality gates and definition of done

| Gate | Required before |
| --- | --- |
| Acceptance criteria met with evidence and the listed tests passing | A task is Done |
| Review by a second person | Any change that touches permissions, money, consent, files or audit |
| All states built (loading, empty, error, success, disabled) with the approved copy | A screen is Done |
| Keyboard, contrast and focus checked in light and dark themes | A screen is Done |
| Layout checked at small phone, tablet and desktop widths | A screen is Done |
| Server-side permission test written for every new route or action | A feature is Done |
| Audit events present for every staff action | A staff feature is Done |
| Restore drill and rollback rehearsal passed | The first production release |
| No open critical or high security finding | Any release |
| Open decisions for the release's milestone approved (section 7) | A milestone starts |
| Visual review confirms intentional whitespace, task-appropriate density, emotional tone and responsive layout | A screen is Done |
| External component/media dependency has a recorded licence, version, accessibility and maintenance review | A dependency is Added |
| Motion has a clear purpose and respects reduced motion | An interaction is Done |
| Automated verification experiment has owner, feature flag, policy/model version, thresholds, appeal, fallback, kill switch and review window | An experiment is Enabled |
| Team review outcome is recorded as retain, refine, restrict or disable before the next build | An experiment moves to the next build |


**Release checklist.** Scope and legal decisions approved; tests pass; the production-like rehearsal passed; backups confirmed; monitoring and alert owners named; support path and rollback owner active; analytics measure the funnels in Document 1 section 4.

## 11. Requirement coverage

| Requirements | Tasks |
| --- | --- |
| PRD-001 to PRD-006 | TASK-022, TASK-023 |
| PRD-007 | TASK-024 |
| PRD-008 to PRD-010, PRD-052 | TASK-025, TASK-038 |
| PRD-011 | TASK-027 |
| PRD-012 to PRD-016 | TASK-033, TASK-034 |
| PRD-017, PRD-018 | TASK-032 |
| PRD-019 | TASK-029 |
| PRD-020 | TASK-030 |
| PRD-021 to PRD-023 | TASK-028 |
| PRD-024 to PRD-028, PRD-054 | TASK-026, TASK-031, TASK-043 |
| PRD-029, PRD-030, PRD-036 | TASK-037, TASK-038 |
| PRD-031 | TASK-036 |
| PRD-032 | TASK-038, TASK-012 |
| PRD-033 to PRD-035 | TASK-038, TASK-040, TASK-042 |
| PRD-037, PRD-038 | TASK-037, TASK-040 |
| PRD-039, PRD-040 | TASK-039 |
| PRD-041 | TASK-021 |
| PRD-042 | TASK-044 |
| PRD-043 | TASK-015 |
| PRD-044 | TASK-047 |
| PRD-045 | TASK-046 |
| PRD-046 | TASK-014 |
| PRD-047 | TASK-055 |
| PRD-048 | TASK-051 |
| PRD-049 | TASK-018, TASK-020, TASK-050 |
| PRD-050 | TASK-052 |
| PRD-051, PRD-053 | TASK-053 |
| PRD-055 | TASK-060 |
| PRD-056 | TASK-059 |
| PRD-057 | TASK-060 |
| PRD-058 | TASK-061 |
| PRD-059 | TASK-062 |
| PRD-060, PRD-061 | TASK-063 |
| PRD-062 | TASK-064 |
| PRD-063 | TASK-063 |
| PRD-064 | TASK-065 |
| PRD-065 | TASK-064, TASK-065 |

| PRD-077 | TASK-076 |
| PRD-078 | TASK-077 |
| PRD-079 | TASK-078 |
| PRD-080 | TASK-079 |
| PRD-081 | TASK-075 |
| PRD-082, PRD-083 | TASK-080 |
| PRD-084 | TASK-076, TASK-077, TASK-078 |

| DB-041 to DB-050 | PRD-066 to PRD-076 |
| API-061 to API-068 | PRD-066 to PRD-076 |
| DB-051 to DB-056 | PRD-077 to PRD-084 |
| API-069 to API-077 | PRD-077 to PRD-084 |
| WF-024 | TASK-081 |
| PRD-077 (audio waveform optional) | TASK-081 |

### Creative implementation latitude

Treat the design system as a living language. Do not translate example palettes, pattern families, motion timings or component lists into immovable restrictions. The owner expects exploration across broader Signal Grove tokens, new colour combinations, gradients, Pantone-referenced studies, waves, pulses, network/security geometry, microinteractions and alternative compositions. The current motif work is an overlay system and should not modify existing backgrounds. Prototype variants, review them in context and record the evidence and next-build decision. Accessibility, security, privacy, licensing and data integrity remain genuine release safeguards.

## 11.1 Media and embedded-file architecture (review-build direction)

### Playback recommendation

- **Default React player candidate:** Video.js 10 using `@videojs/react`; current researched install guide exposes 10.7.0 (checked 26 Nov 2026). Video.js 10 became stable on 1 Oct 2026, has first-class React/TypeScript/Tailwind patterns and provides a source/skin architecture that can be adapted to Signal Grove. Use only necessary adapters for HLS, DASH and selected providers. Direct MP4/WebM/audio can use the supported browser/media path. For provider-hosted content, use the appropriate provider adapter/SDK or safe embed wrapper rather than proxying every third-party player through Video.js.
- **Specialist alternative:** Shaka Player for requirements that specifically need its adaptive-streaming/offline/EME capabilities. Do not add it beside Video.js by default; evaluate as a separate player engine only when a real requirement demands it.
- **Player UI:** own the visual skin and controls. Explore the Video.js shadcn skin workflow, then adapt into PacketPulse components and tokens. A player is part of the resource experience, not an external-looking embedded widget.

### Upload and storage recommendation

- **Client upload:** Uppy with React headless components/hooks for custom Signal Grove UI. Uppy Dashboard may be used in a fast prototype, but the production experience should be styled as PacketPulse.
- **Resumable transport:** Tus (`@uppy/tus`) with a compatible server (for example tusd) where appropriate. Confirm the existing backend/storage architecture before adding a new upload service.
- **Storage:** media binaries live in object storage, not in PostgreSQL. Store metadata and processing status in PostgreSQL. Use signed, short-lived access; do not expose private object keys.
- **Processing:** isolated workers scan, create thumbnails, extract metadata and optionally transcode to adaptive formats. FFmpeg may be evaluated, but build flags/codecs change its licence obligations; legal and patent review is required.

### File-preview matrix

| Type | Review-build viewer | Notes |
|---|---|---|
| MP4/WebM and approved HLS/DASH | Video.js 10 | Match browser support and adapter to source; no unsupported codec promise |
| YouTube/Vimeo/Mux/Cloudflare Stream | Approved provider adapter/embed | Provider allow-list, CSP, consent and source label |
| Audio recordings | Video.js audio-capable composition or native audio fallback | Include playback speed, captions/transcript where available |
| Audio waveform enhancement | WaveSurfer.js 8.1.0 (optional) | Use pre-decoded peaks for streaming/large recordings; keep a standard audio-control fallback |
| PDF | React-PDF (React wrapper over PDF.js) | Page rendering, zoom, text/annotation layers as needed |
| Images | Optimised native image viewer | Size, zoom, download permission and alt text |
| Markdown/text/code | PacketPulse reading/code viewer | Sanitise rendered markdown; never render raw HTML as trusted content |
| CSV/tabular | Safe preview with row/column limits and virtualisation | Do not execute formulas or macros |
| DOCX/XLSX/PPTX | Isolated PDF conversion or approved document service | ONLYOFFICE Community is AGPLv3; SaaS/proprietary use needs legal review or a suitable commercial licence |
| Archives, executables, unknown types | No inline execution; safe metadata/download fallback | Malware scanning and restricted download policy |

### Embed and file security

Validate MIME type and file signature server-side; never trust filename extensions. Do not accept arbitrary iframe markup. Parse and canonicalise URLs server-side, require HTTPS, block private-network/loopback targets and redirects to unsafe addresses, and use provider allow-lists. Define CSP `frame-src` by chosen providers, check `postMessage` origins, sandbox frames when compatible, limit permissions, lazy-load embeds, and show a consent/privacy explanation where a provider tracks viewers. The exact allow-list and CSP must be tested against the selected provider.

For untrusted files, scan before preview, process in isolated workers with CPU/time/size limits, quarantine suspicious items and make processing idempotent. Keep source and derived objects separate. Access control follows the parent resource/course and is verified on the server.

## 12. Approved prototype scope and remaining production gates

All product/design items previously awaiting owner approval are now approved for inclusion in the next review build under DEC-048. The team should prototype the full screen/interaction experience for Resources, signup/onboarding, profile visibility and Account Control Centre. Where backend integration is not ready, use an explicit mock, sandbox or disabled provider state rather than implying a live service.

Remaining discovery/gates are not owner-approval blockers for the prototype: DEV-01 to DEV-11 repository/provider/library audit; legal counsel review for age, retention, placement fee and tax/payment policy; real payment-provider selection and sandbox integration; sender/WhatsApp provider configuration; production security and privacy assessment; and production release approval. Do not process real payments or publish private uploads before the applicable gates pass.

## 13. Revision history

| Date | Version | Change |
| --- | --- | --- |
| 26 Nov 2026 | 4.6 | Added creative-exploration review guidance, media architecture details, nested-screen state restoration and source-reference corrections; maintained separate production gates |
| 26 Nov 2026 | 4.5 | Added expanded media/player and nested UI guidance; added optional WaveSurfer audio visualization; clarified creative colour/pattern/motion flexibility and review scope |
| 26 Nov 2026 | 4.4 | Restored DB-041 to DB-050 and API-061 to API-068 for Resources/Identity; assigned media APIs 069–077; added WaveSurfer, TASK-081 and TEST-084 |
| 26 Nov 2026 | 4.3 | Restored Resources/Identity and media data/API traceability; aligned design references through DES-030 |
| 26 Nov 2026 | 4.2 | Added media, uploads, provider safety, nested routes, tasks TASK-075 to TASK-080 and tests TEST-077 to TEST-083 |
| 25 Nov 2026 | 4.1 | Added Resource data/API/tasks/tests; signup/onboarding/profile/account workflows; Approved Prototype disposition and production gates |
| 24 Nov 2026 | 4.0 | Added community/knowledge tasks, design-library governance, Tailwind production rule and experiment-review gates |
| 17 Oct 2026 | 3.0 | Four-document developer handoff, fixed stack, task/test registers and release plan |

## 14. Related documents
Document 1: Product Guide. Document 2: Design System and UX Guide. Document 3: Users, Screens and Page Flows.
