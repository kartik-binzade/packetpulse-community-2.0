# PacketPulse 2.0 — 1. Product Guide: Vision, Requirements and Decisions

Version 5.5 · 26 November 2026 · Owner: product lead (to be named) · Supersedes the 17 October 2026 Product Guide v4.0 and consolidates the relevant product, decision and risk registers from the earlier document suite · Part of the current five-document set: 1 Product Guide, 2 Design System and UX Guide, 3 Users, Screens and Page Flows, 4 Delivery Plan and Developer Handoff, 5 Component Ecosystem, UI Patterns and Library Registry.

## 0. How to read this document

| Mark | Meaning |
| --- | --- |
| Confirmed | The owner agreed this, whether built or not |
| Planned | Approved and scheduled |
| Proposed | A suggestion not yet accepted into a build |
| Approved Prototype | Owner-approved for inclusion in the next prototype/review build; not production approval |
| Production Approved | Explicitly approved for real users, live data and production operations after release gates pass |
| Open / Discovery | A factual, repository, vendor, legal or operational item that still needs evidence; it does not block a safe prototype unless marked as a release gate |
| PV | Built and tested in the reference prototype only (a single-file demo), not in production |
| **[APPROVED PROTOTYPE]** | Owner approved for the next review build; feedback can lead to retain, refine, restrict or remove in a subsequent build |
| **Experiment candidate** | Included for controlled evaluation behind a feature flag; continuation is decided after a defined team review window |

IDs used across the set: PRD (requirement), DES (design rule), WF (workflow), SCR (screen), DB (data), API (service capability), TASK, TEST, DEC (decision), CON (contradiction), OPEN (open question), RISK. All five documents use the same IDs, so a requirement can be traced from here to its screen (Document 3), its design rules (Document 2) and its tasks and tests (Document 4).

The production codebase was not available when this set was written. Nothing here says a feature exists in production; the repository audit in Document 4 settles that.

## 1. What changed in this revision

| Change | Detail |
| --- | --- |
| Existing stack is fixed | Next.js for frontend and backend, a backend service that already exists, PostgreSQL (Supabase), Redis, hosted on Vercel and Render. No technology is replaced now (DEC-021 to DEC-023, DEC-032). A developer and an AI coding agent will handle code and versions in another workspace, so this set no longer carries code-level detail |
| Five canonical documents, with a dedicated component ecosystem guide | Product Guide (old A and F), Design System and UX Guide (old B), Users, Screens and Page Flows (old C), Delivery Plan and Developer Handoff (old D and E). Nothing valid was dropped; technical detail was reduced to what a developer needs to build the planned features |
| Questions now have answers | All previously open-for-approval product/design recommendations are approved for the next review build under DEC-048; true discovery and production gates remain explicit (section 10) |
| Focus on design, features and flows | More space for who the users are, what each screen does, how pages connect, and what the user sees when things go wrong |
| New proposals | Five earlier proposals remain; this revision adds community knowledge-network capabilities, dashboard layout families, design-system governance and controlled automated-verification experiments |
| Design evolution | Signal Grove now defines two layout families: Editorial Workspace and Analytical Workspace; Matte Black Edition is the preferred reference for analytics-heavy dashboards |
| Community strategy | Community expands from Q&A into structured technical knowledge, discovery, groups, events, mentoring and contribution identity, linked to learning and verification |
| Experiment policy | Automated skill verification remains eligible for controlled experiments; hiring and financial decisions remain separately governed |
| Media and recording experience | A reusable playback and file-preview layer is added for hosted recordings, HLS/DASH streams, provider embeds, PDFs and supported documents; Video.js 10.7.0 is the preferred React player candidate for the review build |
| Nested experience model | Parent/child pages, route-backed detail views, contextual drawers and nested settings/resources workflows receive a common navigation and state-preservation model |
| Brand pattern language | Original packet, route, node, wave, pulse, radar, security-layer and data-flow motifs are added as transparent reusable overlays; current backgrounds remain untouched |
| Creative latitude | Design principles are flexible starting points. Teams may explore colour combinations, pattern treatments, Pantone references, type, layout and motion; accessibility and meaning remain quality checks, not a narrow aesthetic ceiling |

## 2. Product identity

### 2.1 Mission, vision and tagline

PacketPulse is an engineering community and career platform. It connects learning, hands-on practice, verified skills, professional identity and opportunity in one product (DEC-001, DEC-002).

- **Mission:** help network, security and cloud engineers learn, prove what they can do, and be trusted for it.
- **Vision:** the place where an engineer's capability is visible, believable and connected to work, with a community that keeps people growing after they are hired.
- **Tagline, Connect, Learn & Grow Together:** Connect is the community and the bridge to employers; Learn and Practice are courses and labs; Grow is continued contribution, mentoring and new skills. Prove and Verify sit between them and make the connection credible.

### 2.2 Value proposition

| For | Value |
| --- | --- |
| Engineers | A credible, evidence-backed profile built through real practice, instead of a resume nobody can check |
| Recruiters | Pre-screened candidates with visible evidence through a trusted bridge, instead of a pile of resumes |
| The community | A technical Q&A culture that rewards usefulness over volume |
| Operations team | One place to review, moderate and audit, with every decision recorded |

What is different: skills carry visible evidence, practice is troubleshooting and not only multiple choice, and recruitment runs through PacketPulse's human review.

### 2.3 Users

About 2,000 members, 8 admins and 1 SuperAdmin today (reported by the owner, not checked against production data).

| User | Who | Main goals | Main frustrations (hypotheses to test) |
| --- | --- | --- | --- |
| Fresher member | Student or recent graduate in networking or security | Learn, practice, get a first role | Cannot show proof; unsure what to learn next |
| Experienced engineer | Working engineer, 2 or more years | Grow, change roles, be found | Resumes do not show depth; interviews repeat basics |
| Mentor or expert | Senior engineer | Share knowledge, build reputation | No structured way to help |
| Instructor | Trainer or content owner | Publish and review courses and labs | Manual review, scattered content |
| Recruiter or HR | Company hiring manager or agency | Find qualified candidates fast | Too many unfiltered resumes |
| Admin | Operations team member | Moderate, review, support | Manual queues, no audit trail |
| SuperAdmin | Platform owner | Control services, access and policy | No single control plane |

### 2.4 Product principles

1. **Every feature serves the loop:** Learn, Practice, Prove, Verify, Connect, Get hired, Grow (DEC-001). If it does not, it waits.
2. **Evidence over claims.** No verified label without an evidence record (PRD-012).
3. **Automation is a governed capability, not a blanket ban.** Manual, AI-assisted and automated skill-verification modes may be evaluated under PRD-062 and DEC-044. Decisions must be traceable, explainable, policy-versioned, appealable and reversible through controlled operations. Recruitment selection, forwarding, financial actions and sensitive account actions remain human-confirmed unless a separate decision explicitly authorises an experiment.
4. **Trust by design.** Say what is shared, with whom and why, before asking for consent. Technical content must help members avoid exposing secrets or customer data.
5. **One platform.** One account, one skill model, one permission model, shared tokens and reusable components (DEC-002).
6. **Accessible, spacious and emotionally considerate.** Plain language, intentional whitespace, visible next steps, calm feedback and no manipulative engagement patterns.
7. **Knowledge creates professional value.** Reward helpful contribution and reuse, not raw activity volume.

### 2.5 Role of the community

Community is the engineering knowledge network and the reason people return when they are not job hunting. It supports structured technical questions, production incidents, expert discussions, case studies, knowledge articles, events, groups and mentoring. Contributions become reusable knowledge; shared taxonomy connects that knowledge to courses, practice scenarios, assessments and evidence-backed skills. The intended loop is **Knowledge → Contribution → Reputation → Opportunity**. Community reputation remains distinct from verified skills, certifications and employment evidence.

## 3. Goals, non-goals and measures

### 3.1 Goals (targets are starting points to calibrate after a baseline) **[APPROVED PROTOTYPE]**

| Goal | Leading indicator | Lagging indicator | Starting target |
| --- | --- | --- | --- |
| Members reach a useful profile quickly | Email verified to required details complete | Profile-ready within 7 days | 60% |
| Skills become believable | Evidence submitted per active member | Members with at least one verified skill, 90 days after Release 2 | 30% |
| Recruitment is fast and fair | Time to first status update after forwarding | Application to first recruiter decision | 10 working days or less |
| Community answers questions | Questions answered within 48 hours | Accepted-answer rate | 60% answered, 40% accepted |
| Trust holds | Consent records complete | Data shared outside consent | Zero |
| Members come back | 7-day return after first action | 30-day return rate | Baseline first, then set |

Additional community and experience measures to baseline before setting targets:

| Area | Measure | Guardrail |
| --- | --- | --- |
| Helpfulness | Median time to first helpful answer; accepted-answer rate; helpful votes per answered question | Do not reward low-quality volume |
| Discovery | Search success, zero-result searches, related-content opens, saves | Track hides/mutes and recommendation feedback |
| Participation | Unique helpful contributors, returning contributors, contributor concentration | Detect over-reliance on a small expert group |
| Retention | First meaningful action, 7-day and 30-day return, return after solved question | No dark patterns or forced notifications |
| Trust | Report resolution time, repeat abuse, appeals, redaction warnings | Measure false positives and false negatives |
| Automated verification experiment | False approval/rejection, reviewer disagreement, appeal overturn rate, processing time, cost, cohort and confidence-band outcomes | Do not scale solely on speed or pass rate; check bias and subgroup effects |

### 3.2 Non-goals for the first releases

| Not now | Why |
| --- | --- |
| Real lab environments with a runtime | High cost and security risk (RISK-11); labs use written scenarios first |
| Unrestricted AI decisions in hiring, money or sensitive account workflows | Not allowed by default; any exception requires a separate decision, evidence, controls and review. Controlled automated skill-verification experiments are explicitly in scope under PRD-062 |
| Native mobile apps | The web product must work well on phones first |
| Video interviewing and calendar integrations | Start with scheduling details and reminders |
| Third-party course marketplace | Quality and rights are unresolved |
| Candidate-paid fees before joining | Fees only follow a successful joining (DEC-016) |
| Public member profiles on the open web | Privacy first (PRD-052) |

## 4. Strategy and growth

No research, analytics or support data were in the project materials, so each row is a hypothesis to test.

| Stage | Approach | Hypothesis to validate | Measure |
| --- | --- | --- | --- |
| Acquisition | Public site, community content, fees page, referrals through members | Technical content attracts engineers more than job listings | Visitors to registrations by source |
| Registration and onboarding | Email code, progressive profile, resume-assisted entry | Resume parsing cuts profile time | Code completion, time to profile-ready |
| Profile completion | Separate completeness and recruiter readiness | A visible checklist raises completion | Completion at day 7 |
| First meaningful action | Ask or answer a question, start a lab, or enroll | One quick win in 10 minutes predicts retention | Share of new members with a first action |
| Participation | Q&A modes, mentoring, reputation | Accepted answers matter more than volume | Answers per question, acceptance rate |
| Learning | Courses, labs, career paths | Paths beat a flat catalog | Course start and completion |
| Proof | Assessments, evidence review, badges | Verified skills raise recruiter response | Verified-skill rate, recruiter response |
| Careers | Jobs, applications, human review, offers | A reviewed shortlist beats open applications | Apply to interview to offer |
| Retention and reactivation | Notifications by preference; expiring badges as a reason to return | Renewal prompts bring members back | 30-day return rate |
| Referrals | Not yet designed | Satisfied members refer peers | Referral sign-ups (OPEN-17) |
| Trust and moderation | Moderation queue, audit, visible rules | Visible rules reduce abuse | Reports resolved, time to resolve |
| Monetization | Paid advanced courses and live labs; placement fee | Members accept fees shown up front | Conversion, refunds, complaints |

Measurement events: USER\_REGISTERED, EMAIL\_VERIFIED, PROFILE\_COMPLETED, RESUME\_UPLOADED, COURSE\_COMPLETED, LAB\_SUBMITTED, ASSESSMENT\_PASSED, BADGE\_EARNED, JOB\_APPLIED, APPLICATION\_SHORTLISTED, INTERVIEW\_SCHEDULED, OFFER\_RECEIVED, PAYMENT\_COMPLETED. Events carry no personal data such as names, emails or resume text.

## 5. Module inventory

| ID | Module | Purpose | Main users | Depends on | Prototype | Release |
| --- | --- | --- | --- | --- | --- | --- |
| M-01 | Brand site and fees page | Explain the product; publish fees plainly | Visitors | none | PV | 1 |
| M-02 | Identity and onboarding | Register, verify, collect required details, consent | Members | none | PV | 1 |
| M-03 | Profiles | Reusable identity, resumes, completeness, visibility preview | Members, recruiters | M-02, M-04 | PV | 1 |
| M-04 | Skill taxonomy | Standard Major, Minor, Micro skills with automatic suggestions | All | none | PV | 1 |
| M-05 | Community | Q&A, mentoring, reputation, moderation | Members, mentors, admins | M-02 | PV | 1 |
| M-06 | Notifications | In-app, email, WhatsApp opt-in, preferences, delivery log | All | M-02 | PV (in-app only) | 1 |
| M-07 | Learn | Courses, live sessions, career paths, progress, badges | Members, instructors | M-02, M-04 | PV | 2 |
| M-08 | Practice | Labs, submissions, rubric review | Members, instructors, mentors | M-07 | PV (no runtime) | 2 |
| M-09 | Assessments | Attempts, results | Members | M-04 | PV (limited) | 2 |
| M-10 | Verification | Evidence submission, review, appeals, expiry | Members, admins | M-04, M-09 | PV | 2 |
| M-11 | Jobs and recruitment | Positions, applications, screening, forwarding, interviews, offers | Members, recruiters, admins | M-03, M-10 | PV | 3 |
| M-12 | Payments and billing | Paid services, placement fee invoices, refunds | Members, admins | M-07, M-11 | PV (sandbox) | 3 |
| M-13 | Operations | Queues, moderation, feature controls, audit, analytics | Admins, SuperAdmin | all | PV | 1 to 3 |
| M-14 | Security and policies | Roles, permissions, visibility, AI policy, admin security | SuperAdmin | M-13 | PV | 1 |
| M-15 | Integrations and automation | ClickUp, n8n, calendar, AI-assisted drafting | Operations | M-11 | Not built | 4 |

## 6. Requirements and business rules

Each requirement can be tested. Numbers and policies approved as prototypes are defaults for the review build, not final production policy. Production values remain subject to legal, security, operational and owner sign-off.

### 6.1 Identity, onboarding and profiles

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-001 | A new member registers with email and a password or passkey and verifies the email with a 6-digit code. The code expires (10 minutes), allows limited attempts (5) and limited resends; the member can change the email | Confirmed (code), Approved Prototype (limits) |
| PRD-002 | The member chooses Fresher or Experienced; this decides which fields are required | Confirmed |
| PRD-003 | Required for everyone: name, date of birth, years of experience, domain or industry, current or target role, at least one skill, LinkedIn profile, verified email, WhatsApp number. Experienced members also give current company, current CTC and notice period. Applying is blocked until these are complete, and the screen lists what is missing | Confirmed (DEC-018) |
| PRD-004 | Members must be 18 or older; profiles for under-18s are not created | Approved Prototype (OPEN-20) |
| PRD-005 | LinkedIn must match linkedin.com/in/name; a link is not proof of skill or experience | Confirmed |
| PRD-006 | WhatsApp number is a valid 10-digit Indian mobile number (international formats later) | Proposed |
| PRD-007 | Resume upload accepts PDF, DOC and DOCX up to 5 MB; extracted values are shown for review; nothing is saved until confirmed; a parsing failure never blocks manual entry | Confirmed, PV |
| PRD-008 | Profile completeness and recruiter readiness are shown separately; readiness is never a hiring guarantee | Confirmed, PV |
| PRD-009 | Compensation fields are private by default and shared only under DEC-015 | Confirmed |
| PRD-010 | Consent is recorded with a timestamp for terms, resume sharing, recruitment sharing, alerts and visibility; withdrawing is as easy as giving | Confirmed |

### 6.2 Skills, verification and assessments

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-011 | Skills come from the taxonomy; unknown skills enter a suggestion queue; Admins add, merge or reject; clear matches with enough sightings (default 10) merge automatically | Confirmed (DEC-014), PV |
| PRD-012 | Labels: Self declared, Assessment verified, Experience verified, Certification verified, PP verified. A verified label exists only when an evidence record exists. Self declared is never styled as verified | Confirmed |
| PRD-013 | Certification evidence needs name, issuer and credential ID (optional link and expiry); experience evidence needs company, role, start month and a description of at least 20 characters (optional referee shown to reviewers only); an optional file is a PDF or image up to 5 MB; the member confirms accuracy | Confirmed, PV |
| PRD-014 | Only an Admin or SuperAdmin decides. Approval needs two checks ticked; asking for more evidence or rejecting needs a reason of at least 10 characters; the decision records who, when and which policy version | Confirmed (DEC-012), PV |
| PRD-015 | After a rejection the member can appeal once with a reason; an approved item can be revoked with a reason; an approval past its expiry becomes Expired and the label reverts | PV, Proposed |
| PRD-016 | Badge lifecycle: Earned, Displayed, Expiring (within 60 days), then Expired or Revoked, then Renewable | Proposed |
| PRD-017 | Each assessment defines category, level, version, attempts, pass criteria, retake gap, expiry and visibility (values in section 10, OPEN-05) | Confirmed (fields), Approved Prototype (values; production policy review required) |
| PRD-018 | A result records score, level, attempt, date, version and verification outcome; a pass does not create a verified label without an evidence record | Confirmed |

### 6.3 Learning, practice and content

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-019 | Shared learning states: Available, Enrolled, In progress, Completed, with Upcoming, Locked, Paused, Expired | Confirmed |
| PRD-020 | A lab submission has root cause, evidence, fix and optional prevention. A reviewer scores four areas from 0 to 4 and writes feedback of at least 10 characters. A pass needs every area at 2 or more and an average of 2.5 or more. A member has 3 attempts; a third Needs revision is final | PV, Approved Prototype (numbers) |
| PRD-021 | Content records owner, source, created, updated and review dates, status, visibility, topic, skill, difficulty and attribution; resources also need source and usage rights | Confirmed, PV |
| PRD-022 | Content moves Draft, In review, Published, Archived; a reviewer who requests changes gives a reason; unpublishing hides it from learners and keeps the record | PV |
| PRD-023 | Services are Free or Paid as in DEC-017; the price and GST are shown before purchase; some roles are for experienced members only | Confirmed (principle), Approved Prototype (price display; actual prices remain unset) |

### 6.4 Community

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-024 | Questions have a mode: Learning, Production issue or Expert design. A question needs a title of at least 8 characters, detail of at least 20 characters, and a confirmation that credentials and customer data were removed | Confirmed, PV |
| PRD-025 | Members can answer, vote answers useful, follow a question and report it; the asker accepts one answer; reports go to the moderation queue with a reason | Confirmed, PV |
| PRD-026 | Reputation rewards helpful and accepted answers, not raw activity | Confirmed |
| PRD-027 | A member can request a mentor with a topic and a goal of at least 20 characters; a mentor accepts or declines, and a decline needs a reason shown to the member | PV, Proposed |
| PRD-028 | Moderators dismiss or remove reported posts; every action is audited; the written policy and appeals path are in section 10 (OPEN-14) | PV, Approved Prototype |
| PRD-054 | A member accepts the community guidelines before the first post; the guidelines are one click away from every post form | Approved Prototype |

| PRD-055 | Community supports structured content types: Technical question, Discussion, Case study, Knowledge article, Event/AMA and Announcement; each type has fit-for-purpose fields, permissions and presentation | Proposed |
| PRD-056 | The discovery feed supports For you, Latest, Unanswered and Solved views; relevance uses followed topics, skills, freshness and usefulness, with member controls to mute, hide, save and follow topics | Proposed |
| PRD-057 | The technical composer supports Markdown, code/configuration blocks, attachments, previews, drafts, edit history and a pre-publish sensitive-data warning/redaction aid | Approved Prototype; safety validation required before production |
| PRD-058 | Community search covers questions, answers, articles, members, mentors, groups, events, technologies and related learning resources; results support type, tag, author, status and date filters | Proposed |
| PRD-059 | Curated groups and interest spaces support membership, posts, resources, moderators and optional events; event workflows support RSVP, time-zone-aware times, reminders and post-event resources | Approved Prototype; phased |
| PRD-060 | Community identity records contributions, saved resources, mentoring and topic expertise; public/member visibility is controlled separately from recruiter-facing profile visibility | Approved Prototype; privacy validation required before production |
| PRD-061 | Community reputation rewards accepted/useful answers, maintained knowledge, helpful edits, mentoring and stewardship; it is never a substitute for skill verification or certification | Proposed |
| PRD-062 | Skill verification may run in Manual, AI-assisted or Automated mode per verification program. Automated mode is an experiment candidate behind feature flags, with configurable rules/thresholds, evidence requirements, policy/model version, reason codes, audit, member notice, appeal/re-review and human fallback for configured cases | Experiment candidate; approved for controlled evaluation |
| PRD-063 | A knowledge graph links taxonomy skills and topics to discussions, accepted solutions, case studies, courses, lessons, labs, assessments, evidence and relevant opportunities; the same canonical skill taxonomy remains the source of truth | Approved Prototype; phased |
| PRD-064 | Community analytics measures meaningful outcomes including time to first helpful answer, answered-question rate, search success, useful contribution, returning contributors, knowledge reuse and contributor concentration | Proposed |
| PRD-065 | Feature experiments have an owner, hypothesis, target cohort, feature flag, success/safety measures, review window, feedback record and next-build decision: retain, refine, restrict or disable | Confirmed process direction |

| PRD-066 | Community Resources is a searchable, curated library for guides, documentation, tools, templates, cheat sheets, labs, repositories, videos, courses and articles. Discovery supports For you, Featured, Recent, Popular and Staff Picks plus category, format, technology, difficulty, audience and sort filters | Approved Prototype |
| PRD-067 | A resource detail view shows source, author/contributor, summary, type, topic/skill tags, difficulty, estimated time, version, last reviewed date, licence/usage rights, preview/open/download actions, related resources and community discussion | Approved Prototype |
| PRD-068 | Members can submit a resource by uploading a supported file, adding an external URL or writing an article. A guided Details → Content → Review & publish flow captures title, description, type, categories, technologies, intended audience, difficulty, source attribution and licence; drafts are recoverable | Approved Prototype; file/security and rights checks required before publication |
| PRD-069 | Members can save resources, organise them into named collections, track reading/learning state and resume from recently viewed or in-progress resources. Collections have explicit private/shared visibility | Approved Prototype |
| PRD-070 | Resource lifecycle supports Draft, Submitted, In review, Changes requested, Published, Hidden, Archived and Rejected. Review actions, version history, link health, malware scan results and takedown decisions are auditable | Approved Prototype; moderation and security gates apply |
| PRD-071 | Signup supports the existing email/password or passkey path, email verification and optional provider sign-in buttons (initial prototype may show Google/GitHub). Provider sign-in or account linking is enabled only when the repository, provider configuration and security review support it | Approved Prototype; provider integration may be simulated until configured |
| PRD-072 | Onboarding personalises discovery using role, interests and goals. Role options include Student, Engineer, Specialist, Mentor and Recruiter; interests use the canonical taxonomy; goals include Learn, Practice, Contribute, Mentor and Find opportunities. Optional steps can be skipped and changed later | Approved Prototype |
| PRD-073 | Member profile separates professional identity from account controls and includes overview, skills, verification labels, experience, education/certifications, contributions, learning, mentoring and achievements; visibility is scoped by audience and consent | Approved Prototype |
| PRD-074 | Members can preview their profile as themselves, as a community member and as a recruiter after forwarding. Preview must enforce the exact PRD-015 visibility rules and must never expose private fields through the preview | Approved Prototype; public web profile remains opt-in/later unless separately approved |
| PRD-075 | Account Control Centre groups personal information, profile visibility, notifications, security, sessions, connected accounts, privacy/data rights and billing where applicable. Sensitive changes require step-up authentication and an audit record | Approved Prototype |
| PRD-076 | An optional profile-completeness assistant may suggest missing high-value profile details without blocking access, forcing 100% completion or using shame/urgency. An optional identity timeline records meaningful milestones with member-controlled visibility | Approved Prototype |
| PRD-077 | Resource, course and community recordings support a consistent embedded video/audio experience with adaptive streaming where available, captions/subtitles, searchable transcripts, chapters, playback speed, fullscreen, picture-in-picture where supported, progress/resume, time markers, optional audio waveform and clear source/provider attribution | Approved Prototype |
| PRD-078 | Supported files open in an appropriate embedded preview: PDF, images, audio/video, text/Markdown/code and safe tabular previews. Office formats may use an isolated conversion/preview path or a separately licensed provider; unsupported types receive a clear download/fallback state | Approved Prototype; format/security matrix required |
| PRD-079 | Media and document uploads show a complete lifecycle: selection, validation, upload, pause/resume/retry/cancel, scanning, processing/transcoding, preview generation, moderation and publication. Interrupted uploads can resume where the transport supports it | Approved Prototype; storage and scanning implementation gated by repository/security audit |
| PRD-080 | External media embeds are resolved through an approved provider allow-list and secure embed wrapper. The platform validates URLs and provider IDs, applies CSP/frame policies, sandbox/permission attributes where applicable, consent rules and safe fallbacks; arbitrary iframe or HTML injection is not permitted | Approved Prototype; security gate |
| PRD-081 | Parent/child screens preserve parent context, URL/deep-link state, breadcrumbs, browser history, query filters, scroll position and keyboard focus. Child details may use a full route, contextual drawer or inline expansion according to task, content complexity and viewport | Approved Prototype |
| PRD-082 | PacketPulse maintains an adaptable brand-pattern library using packet routes, node constellations, signal waves, pulses, radar, secure layers, data flows, matrices and future motifs. Patterns are transparent/independent overlays and do not alter page/card backgrounds by themselves | Approved Prototype |
| PRD-083 | The visual system may explore the broader Signal Grove token palette, module accents, semantic colours and additional experimental colourways, gradients and Pantone references. Colour is not restricted to green; variants are reviewed for meaning, legibility, accessibility and brand fit | Approved Prototype |
| PRD-084 | Media playback, document viewing, resource detail and nested child workflows share consistent loading, empty, error, permission, offline, unavailable-provider, unsupported-format and recovery states | Approved Prototype |

### 6.5 Jobs and recruitment

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-029 | Application states: Received, Processing, Under review, Shortlisted, Ready to forward, Forwarded, Interview, Selected, Joined, plus Rejected, Withdrawn, Job closed. History is never erased | Confirmed |
| PRD-030 | Automation can recommend; an authorized person confirms shortlisting and forwarding; reviewer, time and notes are logged | Confirmed |
| PRD-031 | A position moves Draft, In review, Published, Paused, Closed (Fulfilled or Unfulfilled) and can be reopened. Reopening needs a future deadline and more openings than were filled. Each position keeps vacancies filled, dates and a hiring history | PV, Proposed |
| PRD-032 | Company recruiters see only candidates forwarded to their jobs, and only the fields allowed by DEC-015; date of birth is never shown to companies; every resume open is logged | Confirmed |
| PRD-033 | A recruiter review records a decision (Under review, Shortlisted, On hold, Rejected), a scorecard of four areas from 1 to 5, an interview recommendation and a next step. On hold and Rejected need a reason of at least 10 characters; On hold needs a future revisit date | PV, Proposed |
| PRD-034 | An interview records round, format, a named interviewer and a future time in IST; the candidate is notified and gets a reminder | PV |
| PRD-035 | An offer records CTC, a future joining date and a validity date before joining. The candidate accepts, or declines with a reason; a declined offer lowers the filled count | PV |
| PRD-036 | Roles marked experienced-only block freshers with an explanation | Confirmed (DEC-017), PV |
| PRD-050 | A member can hide their profile from named companies (for example a current employer). A hidden company never sees the profile in search or in forwarded lists | Approved Prototype |
| PRD-051 | After forwarding, a recruiter is reminded when a candidate has had no status update for 10 working days; the candidate sees the last update date and a plain note that no update has been made yet | Approved Prototype |
| PRD-052 | Profiles are visible only to PacketPulse staff and, after forwarding, to the recruiter. No public web profile and no search-engine indexing at launch; a public profile is a later opt-in decision | Approved Prototype |
| PRD-053 | Every candidate always sees a status for each application. A rejection shows a reason only when the recruiter chose to share one; the candidate can ask PacketPulse for general feedback | Approved Prototype |

### 6.6 Fees, payments and billing

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-037 | The placement fee applies only to roles that carry it and is shown on the role and on the public fees page. When applying, the candidate ticks a declaration and gives explicit permission; accepting an offer shows the exact amount and needs a second confirmation | Confirmed (DEC-016), PV |
| PRD-038 | The fee is a percentage of the annual offer (default 1%, configurable from 0.1% to 5%). The invoice is created only after the candidate joins and is due in 15 days; a declined offer or a withdrawn application owes nothing | Confirmed (default), Proposed (timing) |
| PRD-039 | Refunds need a reason; a refund requested by an Admin needs a SuperAdmin's approval | PV, Confirmed by delegation |
| PRD-040 | Payments use a provider-hosted checkout; no card data is stored; provider confirmations are verified and processed once | Proposed |

### 6.7 Notifications, privacy, security and AI

| ID | Requirement | Status |
| --- | --- | --- |
| PRD-041 | A central notification service sends in-app messages, email and (opt-in) WhatsApp, respects preferences and quiet hours, logs delivery, and lets critical events (interviews, offers, security) through | Confirmed (service), values in section 10 (OPEN-04) |
| PRD-042 | Admin accounts meet DEC-020: required MFA, passkeys preferred, no SMS codes, no temporary passwords, session limits, step-up with reason and fresh code, lockout after repeated failures, break-glass with a second SuperAdmin, periodic access review | Confirmed by delegation |
| PRD-043 | The audit log is append-only and records actor, subject, reason and time for screening, moderation, settings, access, verification, practice, content and recruitment actions | Confirmed |
| PRD-044 | Only a SuperAdmin changes roles, permissions, visibility and AI policy; every change is audited | PV |
| PRD-045 | DPDP: plain notice, specific consent, easy withdrawal, export and erasure, a grievance contact, breach reporting within the required time, and processing agreements with every provider | Planned (DEC-026) |
| PRD-046 | Resumes and certificates are private, reached through short-lived links, and every open is logged | Confirmed |
| PRD-047 | AI assistance follows DEC-019 and DEC-044: drafts and recommendations are labelled; recruitment, financial and sensitive account actions remain human-confirmed by default; automated skill verification is permitted only under PRD-062 experiment controls | Updated 24 Nov 2026 |
| PRD-048 | English is the default; a Hindi switch is offered; dates and numbers follow the language | Approved Prototype, PV (partial) |
| PRD-049 | The product targets WCAG 2.2 AA in light and dark themes, with keyboard access, visible focus and status never shown by color alone | Confirmed |

## 7. Roles and permissions summary

| Capability | Member | Mentor | Instructor | Recruiter | Admin | SuperAdmin |
| --- | --- | --- | --- | --- | --- | --- |
| Own profile, learning, applications | Yes | Yes | Yes | No | Yes | Yes |
| Review lab submissions | No | Yes | Yes | No | Yes | Yes |
| Author content | No | No | Yes | No | Review and publish | Yes |
| See forwarded candidates | No | No | No | Own company only | Screening view | Screening view |
| Manage positions | No | No | No | Own company | Review and publish | Yes |
| Decide verification | No | No | No | No | Yes | Yes |
| Moderate community | No | No | No | No | Yes | Yes |
| Finance and refunds | No | No | No | No | Request refunds | Approve refunds |
| Users, roles, policies, security | No | No | No | No | Limited | Yes |

Every request is checked on the server for permission (DEC-010). Roles are additive on one account (DEC-009). A review-only Hiring manager role is recommended for company pilots but not built first (OPEN-11).

## 8. Release scope (Proposed)

| Release | Scope | Why this order |
| --- | --- | --- |
| 1 Foundation | Identity, onboarding, profiles, taxonomy, community, notifications, operations, security, privacy | Everything else depends on trusted identity and consent; the 2,000 existing members need a safe move |
| 2 Prove | Learn, practice, assessments, verification | Evidence must exist before recruiters can rely on it |
| 3 Careers | Jobs, recruitment, offers, billing, placement fee | Depends on profiles, evidence and payments |
| 4 Intelligence and ecosystem | AI drafting, integrations, deeper analytics, public API | Valuable only on stable data |

MVP release blockers: consent and erasure basics, server-side permissions on every route, private file handling, the audit log, backups with a tested restore, and a staged rollout with rollback.

## 9. Decision register

The single record of what was decided and what replaced what. When a decision changes, change it here first, then the other documents.

| ID | Decision | Status |
| --- | --- | --- |
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

| DEC-035 | Signal Grove uses two complementary layout families: Editorial Workspace for reading, community and member journeys; Analytical Workspace for operations, recruitment and data-heavy work | Confirmed direction |
| DEC-036 | Matte Black Edition is the preferred visual reference for analytical dashboards; near-black tokens are scoped to this workspace and do not replace the full light/dark theme system | Confirmed direction; exact tokens require contrast validation |
| DEC-037 | Intentional whitespace is a product-wide UX requirement. Density modes are Comfortable (default), Compact (data-heavy work) and Reading (long-form content) | Confirmed direction |
| DEC-038 | Emotional experience is a design requirement: screens should feel calm, welcoming, capable, clear and rewarding; avoid clutter, urgency tricks and engagement farming | Confirmed direction |
| DEC-039 | Dashboard pattern: role-aware grouped sidebar, clear page header, 4–5 meaningful KPIs, primary analytics area, collapsible contextual rail and detailed data/activity region | Confirmed direction; adapt per role |
| DEC-040 | Adopt a curated open-source UI strategy: shadcn/ui as the preferred source-owned component base; Ingot UI as an optional curated component source; inspect the existing app before choosing or migrating primitives | Recommended; repository audit required |
| DEC-041 | Tailwind CSS v4 is the styling standard. Tailwind Play CDN is for prototypes only; production Next.js must compile Tailwind during the build | Confirmed direction with production constraint |
| DEC-042 | Use a restrained motion system with Motion for React as the preferred animation library; microanimations must support feedback, orientation or comprehension and respect reduced motion | Recommended; dependency audit required |
| DEC-043 | Use curated media sources: Lucide for UI icons, Simple Icons for technology logos, Unsplash/Pexels for photography, unDraw for illustrations, and LottieFiles/Rive for selected motion assets; check asset terms individually | Recommended |
| DEC-044 | Automated skill-verification decisions remain in scope as controlled experiments, including approval, rejection or request-more-evidence outcomes under configured thresholds, audit, appeal, fallback and feature flags | Confirmed scope direction |
| DEC-045 | Every experimental feature has a defined review window and evidence-based decision for the next build: retain, refine, restrict or disable | Confirmed process direction |
| DEC-046 | Community evolves into an engineering knowledge network with structured content, discovery, search, contribution identity, curated groups/events and links to learning/practice/verification | Proposed product direction |
| DEC-047 | Organisation/private-community and white-label capabilities should be considered in the architecture, but full multi-tenancy, custom domains, SSO and billing are deferred until validated demand | Proposed; architecture-ready only |
| DEC-048 | All previously open-for-approval product/design recommendations are Approved Prototype for inclusion in the next review build; team review may Retain, Refine, Restrict or Remove them for the following build | Owner-confirmed, 25 Nov 2026 |
| DEC-049 | Explore logotype and display-type directions in the review build while retaining Inter as the interim product UI/wordmark treatment; do not let typography experiments block the build | Approved Prototype; final brand asset remains open |
| DEC-054 | Creative direction is intentionally open: Signal Grove is a shared foundation, not a fixed aesthetic ceiling or a rigid rulebook. Explore the existing token palette, new colour families, gradients, Pantone-referenced studies, expressive typography, spatial compositions, waves, pulses, packet/node/security motifs and other visual ideas when they improve usability, emotional quality or brand character. Keep contrast, status meaning and accessibility understandable; treat design principles as guidance to test rather than constraints to obey blindly | Owner-confirmed, 26 Nov 2026 |
| DEC-055 | Brand motifs are reusable transparent overlays (not replacement backgrounds). For the current pattern exercise, preserve existing page/card backgrounds and design overlays that can be layered, recoloured, cropped or omitted. A separate future surface redesign can be explored on its own merits | Owner-confirmed, 26 Nov 2026 |
| DEC-056 | Preferred review-build player foundation: Video.js 10 React package (`@videojs/react`), current researched release 10.7.0 as of 26 Nov 2026. Choose only the required source adapters; Shaka Player remains a specialist alternative for advanced adaptive/offline/DRM requirements. Explore WaveSurfer.js as an optional audio-only waveform and timestamp-navigation layer, with standard audio controls always available | Approved Prototype; repository, provider, codec and licence validation required |
| DEC-057 | Preferred review-build upload layer: Uppy React headless/hooks with Tus resumable upload where supported. A pre-composed Uppy dashboard may be used for prototypes, but PacketPulse styling should use headless/custom UI. Backend/storage integration remains subject to audit | Approved Prototype; repository/storage/security validation required |
| DEC-058 | PDF preview preference: React-PDF over PDF.js. Other office-document preview may use secure isolated conversion or a separately licensed provider; ONLYOFFICE Community Edition AGPL implications must be reviewed before use in a proprietary SaaS | Approved Prototype; licence/security review required |
| DEC-059 | Nested navigation is route-aware and context-preserving. Use page routes for substantial child workflows, drawers/sheets for contextual inspection, and inline expansion for lightweight details; avoid modal stacks and context loss | Approved Prototype |
| DEC-060 | Media embeds use known providers and safe, explicit rendering modes. Never render arbitrary member-supplied iframe/HTML as trusted content; enforce server-side validation, provider allow-list, CSP and source-specific handling | Approved Prototype; security gate |
| DEC-061 | Brand-pattern families are an open, expandable vocabulary, not an exhaustive mandatory list. The team may invent or evolve motifs and combine token colours when the visual result is useful, distinct and accessible | Owner-confirmed, 26 Nov 2026 |


**Decision-ID continuity note (25 November 2026):** The prior change log records that DEC-048 to DEC-053 were added. The available handoff text preserves DEC-048 (the review-build approval disposition) and a DEC-049 reference to typography exploration, but does not preserve descriptions for DEC-050 to DEC-053. Those four IDs are reserved for recovery from the original source discussion; no decisions have been invented and the IDs must not be reused.

### 9.1 Contradictions resolved

| ID | Conflict | Resolution |
| --- | --- | --- |
| CON-01, CON-13 | Dark-first Network Console versus light-first Signal Grove | Signal Grove (DEC-003) |
| CON-02 | Moodboard v2 and Card System v1 versus Signal Grove tokens | Signal Grove; old files are reference only |
| CON-03 | Instrument Sans, Neue Montreal, Therilo, Goodly versus Inter | Inter in the product; logotype open (OPEN-02) |
| CON-04 | Jobs orange and Payments teal versus recruitment blue and Payments plum | Latest decisions apply (DEC-005) |
| CON-05 | Information indigo equals Learning indigo | Slate for Information (DEC-006) |
| CON-06 | Forest versus blue primary actions; teal progress | Open (OPEN-01), recommendation in section 10 |
| CON-07 | Placement fee not to be hard-coded versus approved at about 1% | Owner decision applies; keep it configurable and under legal review |
| CON-08 | PP Verified and Assessment Verified overlap | Open (OPEN-03), definitions in 10.1 |
| CON-09 | Mandatory onboarding fields differ between documents | Owner's list (DEC-018) |
| CON-10 | MongoDB versus Supabase PostgreSQL | PostgreSQL (DEC-022) |
| CON-11 | New stack components proposed versus the stack that exists | Keep the stack (DEC-023, DEC-025) |
| CON-12 | Names: Education, Learning, Learn; HRMS, Operations, Recruitment | Community, Learn, Practice, Assessments, Verification, Jobs (member), Recruitment (recruiter), Operations (admin), Payments |
| CON-14 | Earlier checklist treats Terminal Green, Packet Cyan and Infrastructure Amber as status colors | The semantic table in Document 2 applies |

## 10. Approved prototype decisions and remaining discovery

Owner disposition, 25 November 2026: every product/design item previously marked open for approval is now **Approved Prototype** and must be represented in the next review build. This approval authorises a prototype or review-build experience, not production release, live payment processing, legally binding policy, or installation of an external dependency. The team will review it during the agreed review window and record **Retain, Refine, Restrict or Remove** for the following build. Sections 10.1 to 10.9 contain the approved prototype defaults. Legal, security, provider, repository and operational confirmations remain production gates where stated.

| ID | Question | Recommended answer **[APPROVED PROTOTYPE]** | Basis | Decider |
| --- | --- | --- | --- | --- |
| OPEN-01 | Primary action color; progress color | Use Forest as a familiar default, not a universal lock. Prototype context-aware primary actions using brand or module accents (including indigo, blue, plum, cyan, violet and suitable new colourways); let progress use the most meaningful contextual token. Keep semantic status states distinguishable | Test hierarchy, contrast, emotional feel and consistency in real screens. A colour may be right for one workflow and wrong for another; don't force every module or primary action to be green | Owner, design lead |
| OPEN-02 | Logotype typeface | Use the name in Inter semibold now; commission one logotype later and keep it separate from the UI font | Logotypes are brand assets; supply vector lockups, minimum size, clear space and a favicon | Design lead |
| OPEN-03 | PP Verified versus Assessment Verified | See 10.1 | Digital credential practice shows issuer, criteria, evidence and validity | Product lead |
| OPEN-04 | Notification channels, frequency, quiet hours | See 10.3 | Opt-in channels, separate transactional and marketing messages, critical events exempt | Product lead |
| OPEN-05 | Assessment rules | See 10.2 | Certification programs use limited attempts with waiting periods and expiry | Product lead |
| OPEN-06 | Data retention | See 10.7 | Keep personal data only as long as the purpose needs; legal minimums for tax records | Owner, counsel |
| OPEN-07 | Placement fee legal review and safeguards | See 10.5 | International fair-recruitment guidance says workers should not bear recruitment fees; if kept, charge only after joining with clear terms and a refund window | Owner, counsel |
| OPEN-08 | Payment provider and GST invoicing | Evaluate Razorpay first, with Cashfree as the comparison; hosted checkout; GST-inclusive prices shown | Common providers in India support UPI, cards and netbanking; hosted checkout keeps card data away from PacketPulse | Owner |
| OPEN-09 | Prices | The owner sets them; recommended method in 10.8 | Show the final price including GST before purchase | Owner |
| OPEN-10 | Company onboarding and verification | See 10.6 | Marketplaces verify the employer before the first listing | Product lead |
| OPEN-11 | Hiring-manager role | Add a review-only Hiring manager role after the first company pilots; not in Release 1 | Least privilege | Product lead |
| OPEN-12 | ClickUp and n8n scope | Decide after the audit; mirror IDs and statuses only; no resumes, contact details or compensation in ClickUp; application database stays the source of truth | Keep personal data in one controlled place | Operations lead |
| OPEN-13 | Authentication policy | See 10.9 | Follow current password guidance (length over complexity, no forced rotation, breach checks) and phishing-resistant MFA for staff | Tech lead |
| OPEN-14 | Moderation policy and appeals | See 10.4 | Clear rules, graded actions, a fast response and an appeal by a different person | Community lead |
| OPEN-15 | Which routes and screens exist today | A developer task, not a product decision (Document 4, TASK-001) | Documentation is not proof of a feature | Tech lead |
| OPEN-16 | Analytics provider and events | Keep the current tool; adopt the events in section 4; no personal data in events; ask consent for non-essential tracking | Privacy by design | Product lead |
| OPEN-17 | Referral and reactivation programs | Do not build before launch; test later with rewards after a referred member completes a real action, with caps | Avoids rewarding fake sign-ups | Product lead |
| OPEN-18 | Sender identity and WhatsApp provider | Use a dedicated sending domain with email authentication; keep transactional and marketing streams apart; set up a WhatsApp Business account with approved templates now because approvals take time | Deliverability and consent | Operations lead |
| OPEN-19 | Profile visibility default and public profiles | Private by default; visible to staff and, after forwarding, to the recruiter; no public profile or search-engine indexing at launch (PRD-052) | Privacy first; members can opt in later | Owner |
| OPEN-20 | Minimum age | 18 or older at registration, checked from date of birth (PRD-004) | Processing a child's data needs verifiable parental consent under DPDP; an adult-only rule is the simplest safe default; counsel to confirm | Owner, counsel |
| OPEN-21 | Candidate protections | Adopt PRD-050 (hide from named companies), PRD-051 (response reminders) and PRD-053 (status and feedback) | Job platforms commonly let members block current employers and expect timely updates | Product lead |

### 10.0.1 Owner disposition for the existing OPEN register (25 November 2026)

| ID range | Current disposition | Review-build treatment | Production gate |
|---|---|---|---|
| OPEN-01 to OPEN-14 | Approved Prototype, except where an item is a legal/security/provider condition | Prototype the recommended UI, states, configuration and realistic demo data | Counsels, payment provider, auth provider and security confirmations remain mandatory where relevant |
| OPEN-16 to OPEN-21 | Approved Prototype | Include the proposed analytics, referrals, visibility controls, age gate, candidate protections and notification/sender settings in reviewable prototype flows | Consent, legal age policy, provider approvals and privacy controls require production sign-off |
| OPEN-15 | Discovery required | Repository audit only; do not guess which routes or screens exist | Must be answered by TASK-001 before implementation claims |

**Interpretation:** “Approved Prototype” means build it for review. It does not mean the value, policy, vendor, package or legal position is final. Where an external dependency is unavailable, use an explicit simulated state or sandbox and label it as such. Do not process real payments, send real communications or expose private data merely to make a prototype appear functional.

### 10.1 Verification labels (OPEN-03) **[APPROVED PROTOTYPE]**

Every badge shows what was checked, who checked it, when, and when it expires. A public page called How verification works lists the criteria.

| Label | Meaning | Evidence needed |
| --- | --- | --- |
| Self declared | The member says they have the skill | None; shown as neutral, never as verified |
| Assessment verified | The member passed a PacketPulse assessment for that skill, within its validity | A passed result |
| Certification verified | PacketPulse checked the credential with its issuer name and credential ID | Certificate details and a reviewer decision |
| Experience verified | PacketPulse reviewed employment or project evidence | Evidence record and a reviewer decision |
| PP verified | A higher standard: at least two different evidence types for the skill, one of them reviewed by a person (for example a passed assessment plus a passed lab review, or an assessment plus verified experience) | Two evidence records and a reviewer decision |

### 10.2 Assessment rules (OPEN-05) **[APPROVED PROTOTYPE]**

| Rule | Recommended default |
| --- | --- |
| Attempts | 3 per assessment in any 90 days |
| Retake gap | 7 days after a failed attempt |
| Pass mark | 70%, adjustable per assessment between 60% and 80% |
| Time limit | Set per assessment and shown before starting |
| Question order | Randomized from a pool at least twice the size of one attempt |
| Result screen | Score, level and weak topics; correct answers are not revealed |
| Validity | 24 months; renewal by retake or newer evidence; a reminder 60 days before expiry |
| Honesty | The member accepts an honesty statement before starting; no outside help |
| Proctoring | None at launch; review the need if recruiters report cheating |
| Accessibility | Extra time on request, approved by an Admin |

### 10.3 Notification policy (OPEN-04) **[APPROVED PROTOTYPE]**

| Topic | Recommended rule |
| --- | --- |
| In-app | Every event |
| Email | Application status, interviews, offers, assessment results, security, billing; community replies as an optional daily or weekly digest |
| WhatsApp | Opt-in only, for interviews and offers, using approved templates |
| Marketing | A separate opt-in with an unsubscribe link in every message |
| Quiet hours | 21:00 to 08:00 IST for non-critical messages |
| Critical events (sent during quiet hours) | Security alerts, an interview within 24 hours, an offer expiring within 48 hours |
| Frequency cap | No more than 3 non-critical messages per member per day |
| Reminders | Interview reminders 24 hours and 1 hour before; badge expiry 60 and 14 days before |
| Privacy | No resume, compensation or private notes in previews or subject lines |

### 10.4 Moderation policy (OPEN-14) **[APPROVED PROTOTYPE]**

**Rules.** Be respectful. Never post passwords, keys, customer data or confidential network configurations. No job spam, solicitation or advertising in questions. Do not copy assessment answers. Credit sources. No harassment, doxxing or discrimination.

| Step | Action |
| --- | --- |
| 1 | Remove the post and tell the author the reason |
| 2 | Warning |
| 3 | Posting limit for 7 days |
| 4 | Posting limit for 30 days |
| 5 | Account suspension (needs two admins to agree) |

| Service level | Target |
| --- | --- |
| Reports acknowledged | Within 24 hours |
| Urgent reports (exposed credentials, harassment) | Within 4 hours |
| Appeals | Reviewed by a different Admin within 5 working days |

Reputation rises with accepted and useful answers and falls with removed posts. Reputation does not unlock sensitive tools at launch.

### 10.5 Placement fee safeguards (OPEN-07) **[APPROVED PROTOTYPE]**

The owner's decision (DEC-016) stands. Fair-recruitment guidance from the International Labour Organization says workers should not carry recruitment fees, so the following safeguards reduce risk if the fee is kept. Counsel confirms them for each region before the fee is switched on.

- Charge only after the candidate joins; never before an offer and never for screening or forwarding.
- Show the exact amount on the role, in the apply step and again when accepting the offer (already in PRD-037).
- Refund window: recommended full refund if employment ends within 30 days of joining and 50% within 90 days.
- The fee never changes screening, ranking or forwarding; staff must not see whether a candidate has agreed to a fee while screening.
- Offer employer-paid roles as the default listing type, and mark candidate-paid roles clearly.
- Cap the percentage (0.1% to 5%, already in PRD-038) and show a worked example on the fees page.
- Provide a dispute route with a reply in 5 working days and issue a GST invoice with every payment.

### 10.6 Company onboarding and verification (OPEN-10) **[APPROVED PROTOTYPE]**

1. The recruiter signs up with a work email; free email domains are held for review.
2. They enter the company name, website, size, contact person, and optionally the company registration or GST number and a LinkedIn company page.
3. An Admin reviews the company profile; the company stays in Pending until approved.
4. The first position is always reviewed before it is published; later positions need review only if flagged.
5. Companies that are rejected or later reported can be suspended; the reason and the reviewer are recorded.
6. Staffing agencies are labelled as agencies and must name the end client on each position.

### 10.7 Data retention (OPEN-06) **[APPROVED PROTOTYPE — COUNSEL GATE BEFORE PRODUCTION]**

| Data | Suggested keep period |
| --- | --- |
| Account and profile | While the account is active; erased within 30 days of an erasure request unless the law requires a longer record |
| Inactive accounts | Notice after 2 years of inactivity; personal data erased after 3 years (similar to a rule the DPDP Rules apply to some large platforms) |
| Resume copies shared with companies | Company access ends 90 days after the application closes |
| Verification evidence files | Delete files 12 months after the decision unless an appeal or expiry needs them; keep the decision record |
| Consent records | For the life of the account plus 3 years, as proof |
| Audit log | At least 3 years |
| Invoices and payment records | As required by Indian tax and company law (commonly 6 to 8 years); the accountant confirms |
| Community posts | Kept; the author's name is removed on erasure when others depend on the content |
| Notification and delivery logs | 12 months |
| Backups | Erased data leaves backups on the normal rotation and is never restored |

### 10.8 Payments and prices (OPEN-08, OPEN-09) **[APPROVED PROTOTYPE]**

- Use the provider's hosted checkout; confirm a payment from the provider's own notification, not from the browser returning to the site.
- Show prices including GST, then the breakdown on the receipt and invoice.
- Refund policy to publish: full refund within 7 days if less than 10% of a course was used; live sessions refundable up to 48 hours before the start.
- Method to set prices: list every paid item, check what comparable training sells for, start with a small number of paid items, test the price with early members, and change it only with notice. No prices are invented here.

### 10.9 Authentication and admin policy (OPEN-13) **[APPROVED PROTOTYPE]**

| Rule | Recommended default |
| --- | --- |
| Passwords | At least 12 characters, checked against known breached passwords, no complexity rules and no forced rotation; passkeys offered |
| Multi-factor | Required for Admin, SuperAdmin and Recruiter accounts; optional for members; authenticator app or passkey, never SMS |
| Sessions | Members: sign out after 30 days idle; staff: 30 minutes idle and 8 hours absolute |
| Sensitive actions | Ask for a reason and a fresh code (step-up) |
| Lockout | After 5 wrong codes, 15 minutes |
| Recovery | Members by email; staff only through a SuperAdmin with a second approver |
| LinkedIn | Optional sign-in with LinkedIn to prove the profile belongs to the member, using only the fields needed; otherwise syntax check only (PRD-005) |

## 11. Risk register

| ID | Risk | Impact | Likelihood | Mitigation |
| --- | --- | --- | --- | --- |
| RISK-01 | The production system differs from every assumption here | High | High | Repository audit before any build task |
| RISK-02 | DPDP duties (main phase about 14 May 2027) are missed | High | Medium | Consent, export, erasure and breach process in the first releases; counsel review |
| RISK-03 | The candidate-paid fee is restricted in some regions or draws complaints | High | Medium | Safeguards in 10.5; per-region switch; counsel review |
| RISK-04 | Permissions that exist only on screen expose data | High | Unknown | Audit; server checks on every route before new modules |
| RISK-05 | The move disrupts the 2,000 existing members | High | Medium | Additive changes, feature flags, staged rollout, tested rollback |
| RISK-06 | Hosting and database plan limits constrain growth | Medium | Medium | Review plans early; restore drill |
| RISK-07 | AI features add bias or errors to hiring | High | Medium | Draft-only policy; evaluation sets; audit trail |
| RISK-08 | Scope grows faster than the team | High | High | Fixed release order; exit criteria; feature flags |
| RISK-09 | Private documents (resumes, certificates) are exposed | High | Medium | Private storage, short-lived links, access logging, role tests |
| RISK-10 | Accessibility is untested with real assistive technology | Medium | High | Screen-reader and device checks each release |
| RISK-11 | Lab environments are costly or insecure | High | High | Written scenarios first; pilot small; cost caps |
| RISK-12 | Documents drift from the product | Medium | High | Update this decision register first; review documents with every release |
| RISK-13 | Automated verification produces false approvals, false rejections or inconsistent outcomes | High | Medium | Shadow/limited rollout, representative evaluation, confidence bands, appeal, reviewer fallback, audit and kill switch |
| RISK-14 | Community grows without enough helpful contributors or moderation capacity | High | Medium | Seed contributors, unanswered-question workflow, topic ownership, moderator capacity and contributor-concentration metrics |
| RISK-15 | External component or media libraries introduce incompatible dependencies, weak dark-mode support or licence obligations | Medium | Medium | Repository and licence audit, curated adoption, dependency ownership and token conformance |
| RISK-16 | Matte Black dashboards have insufficient contrast or excessive visual density | Medium | Medium | Validate all token pairs, data series, focus states, density and screen-reader summaries before release |
| RISK-17 | Embedded third-party media or uploaded files introduce malicious content, unsafe iframe behaviour, SSRF, privacy leakage or tracking | High | Medium | Provider allow-list, server-side URL validation, CSP, sandboxed preview/processing, malware scanning, MIME/signature checks, signed URLs and consent controls |
| RISK-18 | Player/provider/browser/codec differences cause unreliable playback or inaccessible recordings | Medium | Medium | Playback matrix, native fallback, captions/transcripts, provider fallback and error recovery tests |
| RISK-19 | Office-viewer licence terms conflict with PacketPulse SaaS/commercial model | High | Medium | Do not adopt AGPL service without legal review; compare conversion and commercial licensing options |
| RISK-20 | Nested screens lose parent context, query state, focus or browser history | Medium | Medium | Route-driven navigation, state restoration and keyboard/focus tests |
| RISK-21 | Decorative pattern/motion layers reduce legibility, performance or accessibility | Medium | Medium | Independent overlays, opacity/theme variants, reduced-motion, contrast and mobile-performance review |


## 12. Change log

| Date | Version | Change |
| --- | --- | --- |
| 26 Nov 2026 | Set 5.5 | Owner reaffirmed open-ended design exploration; clarified that current brand motifs are transparent overlays only and existing backgrounds remain unchanged; restored original REF-00..REF-06 source naming |
| 9 Oct 2026 | Handover 1.0 | Design and development handover issued |
| 13 to 15 Oct 2026 | Prototype 1.0 to 1.8 | Reference build, palette review, recruitment blue, evidence and lab review, decisions on fees, onboarding, visibility and security |
| 16 Oct 2026 | Suite 1.0 and 1.1 | Six documents A to F created; stack recorded; contradictions logged; developer-level questions added |
| 17 Oct 2026 | Set 4.0 | Five canonical documents replace six legacy documents; stack fixed (DEC-032); code-level detail removed; every open question has a recommended answer; PRD-050 to PRD-054 and OPEN-19 to OPEN-21 added; the two developer questions about framework version and where authorization runs moved to Document 4 (DEV-01, DEV-02) |
| 26 Nov 2026 | Set 5.4 | Reaffirmed open creative direction; added multi-colour/pantone exploration and transparent overlay clarification; expanded waveform and media pattern notes |
| 26 Nov 2026 | Set 5.3 | Expanded creative colour/pattern freedom; added media, recordings, nested UX and provider/file safety requirements; added DEC-054 to DEC-061; clarified Approved Prototype treatment and media security gates |
| 26 Nov 2026 | Set 5.2 | Added PRD-077 to PRD-084 for recording playback, document/file preview, resumable uploads, safe embeds, nested UX, reusable pattern overlays and open colour exploration; added DEC-054 to DEC-061 and media/security risks; broadened creative direction beyond green-only motifs |
| 25 Nov 2026 | Set 5.1 | Approved Prototype disposition for all previously open-for-approval product/design items; added Resources requirements PRD-066 to PRD-070; added signup/onboarding/profile/account requirements PRD-071 to PRD-076; added DEC-048 to DEC-053; confirmed creative experimentation authority |
| 24 Nov 2026 | Set 5.0 | Signal Grove refined into Editorial and Analytical workspace families; Matte Black dashboard direction; whitespace/emotional UX; open-source component and media ecosystem; Tailwind v4 delivery rule; microanimation language; Community knowledge-network expansion; automated skill-verification experiments retained under feature flags and review windows; new requirements PRD-055 to PRD-065 |

## 13. Related documents

Document 2: Design System and UX Guide. Document 3: Users, Screens and Page Flows. Document 4: Delivery Plan and Developer Handoff.


### Owner clarification: design freedom is intentional (26 Nov 2026)

Do not turn the design system into a rigid visual rulebook. Keep the system coherent through shared principles, tokens, components and accessibility checks, while allowing the team to explore new compositions, colours, Pantone-referenced studies, gradient combinations, display typography, waves, pulses, networking/security motifs, microinteractions and new component patterns. The current brand-pattern request is specifically for reusable transparent overlays; it does not ask to repaint existing page/card backgrounds. Pattern families are examples and can expand or be replaced as the product evolves.

### Design exploration policy (owner-confirmed, 26 Nov 2026)

Signal Grove creates continuity, not aesthetic boundaries. Designers and developers are encouraged to explore and improve the complete experience: new colourways, gradients, Pantone-referenced studies, typography, layout compositions, component patterns, waves, pulses, network/security motifs and microinteractions. Use examples as inspiration rather than fixed prescriptions. For the current pattern exercise, create transparent reusable overlays without changing existing backgrounds. Keep accessibility, semantic clarity, privacy, security, performance and licensing safeguards intact. Approved Prototype means include the experiment for review; team feedback determines the next-build disposition.

## 14. Recent discussion coverage (24–26 November 2026)

This revision consolidates the current PacketPulse project discussion and the review-build/document files available in the active workspace, including the 25 November Resources and Identity discussion and the current 26 November media, nested-navigation and brand-pattern discussion. No independent transcript/export for other separate chats in the 24–26 November window was available in this workspace. Do not infer or fabricate decisions from inaccessible conversations; append them later if their transcripts are supplied. Older project decisions remain in this guide as the existing product baseline, not as new discussions from this three-day window.
