# PacketPulse 2.0 — Discussion Record: Resources and Member Identity Experiences

**Date:** 25 November 2026  
**Status:** Owner-approved prototype scope for the next review build  
**Related canonical documents:** Documents 1–5, versions 5.1 / 4.1 / 3.1 / 4.1 / 1.2  
**Purpose:** Capture the two most recent design discussions: Community Resources and Signup/Profile/Account. This document records the visual intent, full workflows, interaction states and review-build decisions. It is not production implementation evidence.

---

## 0. Owner direction and review-build decision

The owner explicitly directs the team to **be open, creative and experimental** with patterns, components, colours, layouts, imagery, typography and microinteractions. This is an affirmative design decision, not a request for a fixed narrow palette.

All items in these two discussions, including previously open-for-approval recommendations, are **Approved Prototype**. They must be represented in the next prototype/review build. This means the team should create working front-end flows with realistic sample data and safe sandbox/mock states where integrations are not ready.

Prototype approval is not production approval. Do not process live payments, enable real OAuth providers without configuration, publish unsafe files, expose private profile data or bypass legal/security checks. During the team review window, capture feedback and decide for the next build: **Retain, Refine, Restrict or Remove**.

## 1. Discussion A — Community Resources

### 1.1 Product purpose

Resources should feel like a curated engineering knowledge library—not a generic downloads page or an unstructured folder. It is a first-class Community capability that helps members discover, understand, save, reuse and contribute technical knowledge.

Resource types include:

- Guides and technical documentation
- Tools and utilities
- Configuration templates and scripts
- Courses and learning paths
- Videos and recorded sessions
- Cheat sheets and reference sheets
- Labs and practical exercises
- Repositories and code examples
- Technical articles and case studies
- Diagrams and architecture references

### 1.2 Screen 1 — Resources Library / discovery hub

**Route:** `/community/resources`  
**Audience:** Members and approved contributors  
**Primary action:** Share a resource

**Layout:** Signal Grove Editorial Workspace with Matte Black as the approved prototype visual variant and a fully designed light counterpart. Persistent PacketPulse shell and Community navigation; page title and search; featured collection banner; discovery tabs; filter row; resource-card grid/list; optional contextual rail.

**Discovery tabs:** For you, Featured, Recent, Popular, Staff Picks.

**Filters:** Category, Format, Technology, Difficulty, Intended audience, Language and Sort.

**Resource card:** Type icon or thumbnail; title; short value statement; technology/category chips; author/source; difficulty and estimated time (when known); updated/reviewed date; save action; reviewed/official/source status when real evidence exists.

**Optional rail:** Popular topics, newly added resources, curated collections and Continue reading. The rail collapses on tablet and becomes a sheet/stack on mobile.

**States:** Loading, first-use empty, no results, error/retry, resource removed/archived, permission-restricted, saved and unsaved.

### 1.3 Screen 2 — Resource detail / reader

**Route:** `/community/resources/[id]`

A reading-first work surface. The resource preview is primary; a table of contents/page navigation may sit beside it; a contextual details rail displays:

- Resource type and format
- Title and description
- Author/contributor and source
- Technology/category tags
- Difficulty and estimated time
- Version and last-reviewed date
- Licence and attribution
- Open/download/share/save/report actions
- Related resources and linked Community discussions

Document, article, video and external-link resources use appropriate preview patterns. Long-form content uses Reading density and a comfortable line length. If preview is unsupported, explain why and offer a safe open/download action where permitted. A broken external link must be reportable. Do not fabricate ratings, verification or review claims.

### 1.4 Screen 3 — Share a Resource wizard

**Route:** `/community/resources/share`

Three steps, always recoverable:

1. **Details:** Title, short description, resource type, category, taxonomy-backed technologies, difficulty, audience, language and estimated time.
2. **Content:** Upload a file, paste a URL or write an article. Preview the result. Save draft at any point.
3. **Review & publish:** Confirm source/author, attribution, licence/usage rights, version, review date, audience visibility and community guidelines. Submit for review or publish if policy permits.

File lifecycle: Queued → Uploading → Paused (only when supported) → Processing → Scanning → Complete, or Failed/Canceled/Rejected. Progress reflects actual bytes transferred. Completed upload is not the same as a safe or published resource. Preserve the draft after failure. Require configured file validation and malware scanning. Rights/attribution and moderation rules apply.

### 1.5 Screen 4 — Saved Resources and Collections

**Route:** `/community/resources/saved`

Tabs: All saved, Reading list, My collections, Recently viewed. Include collection cards with name, description, count, visibility, representative cover and last-updated information. Include Continue reading for resources that support meaningful progress. Saved state is separate from reading progress. Removing a bookmark never deletes the underlying source resource. Collections can be private or shared explicitly by the owner.

### 1.6 Moderator workflow

A dedicated review queue shows Pending review, Changes requested, Scan/link issues and Recently published. Reviewer opens a submission with content preview, metadata, source/rights/attribution, scan status, link health and revision history. Actions: Approve, Request changes, Reject, Hide or Archive. Non-approval actions require a reason; all actions are audited and the author receives a clear status update.

### 1.7 Resource design components

- Resource discovery hero / featured collection
- Resource cards by type and format
- Search and multi-dimensional filter bar
- Resource reader/document viewer
- Table of contents / page thumbnail rail
- Resource metadata and attribution block
- Licence and usage-rights selector
- Share Resource stepper
- Upload/dropzone and complete upload lifecycle card
- Upload validation, scanning and warning states
- Saved collection card and reading-state indicator
- Related resources and discussion panel
- Resource moderation queue and review panel

**Visual direction:** generous whitespace; high-quality technical diagrams and occasional editorial imagery; compact metadata; matte-black surfaces for the dark prototype; forest/teal brand surfaces and restrained lime emphasis; resource-type accents may be explored but always include text labels. Avoid turning every card into a colourful tile.

## 2. Discussion B — Signup, Profile and Account

### 2.1 Product principle

Signup is the beginning of an engineering journey, not a long CV form. Profile is how a member presents their professional/community identity. Account is how the member controls their relationship with PacketPulse. Keep Profile and Account separate in navigation and information architecture.

### 2.2 Screen 1 — Create Account / Signup

**Existing screen expanded:** SCR-003, `/join`  
**Audience:** Visitors  
**Primary action:** Create account

**Layout:** Split-screen on wide displays. One panel carries PacketPulse brand promise (“Build your engineering journey”, “Learn. Share. Grow Together.”) and a restrained network/engineering illustration. The other panel contains a focused registration form. On mobile, collapse to one column and remove decorative clutter.

**Methods:** Email/password or passkey as the baseline; Google and GitHub sign-in buttons are approved prototype elements. Real OAuth is enabled only after provider configuration and security checks. Until then, mock clearly or show disabled/unavailable state—never imply a real authentication succeeded.

**Fields and controls:** Email, password with show/hide, password guidance, Terms of Service and Privacy Policy consent, create account, existing-account sign-in and account recovery. Verification is a six-digit code with expiry, attempt/resend limits, change-email control and accessible error feedback.

Minimise friction. Do not ask for all career, resume and skill information before a member experiences value unless a protected product workflow requires it.

### 2.3 Screen 2 — Personalised onboarding

**Proposed route:** `/onboarding/personalise`  
**Primary flow:** Role → Interests → Goals

**Role choices:** Student, Engineer, Specialist, Mentor, Recruiter. A user can have additive roles later; role selection here personalises the first experience and must not grant privileged permissions.

**Interest choices:** Networking, Cybersecurity, Cloud, Automation, Infrastructure and taxonomy-backed topics. Support search and multi-select. Unknown terms enter a taxonomy suggestion route; they do not silently become canonical skills.

**Goal choices:** Learn, Practice, Contribute, Mentor, Find opportunities.

Show a clear stepper, selected states, Back/Continue, Skip optional step and “You can change this later”. Finish with a useful landing page and editable preferences. Onboarding data does not affect recruiter visibility or verification status.

### 2.4 Screen 3 — Professional Member Profile

**Existing screen expanded:** SCR-012, `/profile`

The profile becomes a living professional identity and record of community contribution.

**Identity hero:** Avatar, member name, professional headline, optional location/timezone, short introduction, edit profile action and explicit verification indicator(s). A subtle network-inspired cover or member-selected image may be explored; identity stays the focal point.

**Sections/tabs:** Overview, Skills, Experience, Education & Certifications, Contributions, Learning, Mentoring, Activity and Achievements where data exists.

**Skills:** Show separate labels for Self-declared, Assessment verified, Experience verified, Certification verified and PP verified. A badge detail view shows issuer/reviewer, evidence, criteria, date and expiry where the viewer is permitted. Self-declared skills never appear as verified. Community reputation is separate from skill verification and certification.

**Contributions:** Solved questions, helpful answers, knowledge articles, case studies, mentoring and curated resources, each with its own visibility controls. Emphasise meaningful contributions, not follower/vanity metrics.

### 2.5 Screen 4 — Profile Visibility Preview

**Route:** `/profile/preview`

Three preview modes:

- My view
- Community member view
- Recruiter after forwarding

Each preview must use the same backend field-level policy as actual data access. Show why private fields are hidden and provide a settings shortcut. Date of birth, compensation, private notes, contact details and resumes stay protected under the existing visibility/consent model. Public web profile remains opt-in/later and off by default.

### 2.6 Screen 5 — Account Settings Control Centre

**Route:** `/settings`

Spacious card-based settings hub. Sections:

- Personal Information
- Profile Visibility
- Notifications
- Login & Security
- Sessions and Devices
- Connected Accounts
- Privacy & Data Rights
- Billing & Payments (when relevant)

Each card includes a concise explanation and a Manage/Edit action. Use dedicated subpages for complex settings rather than long accordion walls.

### 2.7 Child account windows

**Notifications:** event categories by channel, in-app/email/opt-in WhatsApp, quiet hours, digest frequency, transactional vs marketing separation, save confirmation.

**Login & Security:** password/passkey, MFA state, recovery options, active sessions, sign out other sessions, recent security events. Stronger staff rules remain enforced.

**Connected Accounts:** Google, GitHub and LinkedIn where configured; display provider, linked identity, scopes and unlink action. Prevent unlinking the last recovery route. Require re-authentication where appropriate.

**Privacy & Data Rights:** consent history, change/withdraw optional consent, data export request, erasure request, request status and retained-data explanation. Deletion lives in a distinct danger zone with consequences and re-authentication.

**Profile completeness assistant:** optional, dismissible suggestions for useful missing fields. Never demand 100%, shame the member, block navigation or imply that completeness guarantees hiring.

**Identity activity timeline:** optional milestones such as skill verified, assessment completed, resource shared, answer accepted or mentoring completed. Member controls visibility.

### 2.8 Identity and account design components

- Split-screen Signup layout
- Email/password/passkey field group
- Google/GitHub provider buttons
- Six-digit verification input and recovery states
- Role selection cards
- Interest/taxonomy multi-select chips
- Goals selector and onboarding stepper
- Professional identity hero and profile cover
- Verification-aware skill groups
- Contribution summary cards
- Profile audience-preview switcher
- Profile completeness assistant
- Identity activity timeline
- Account settings category cards
- Notification preference matrix
- Security and active-session list
- Connected-account row with recovery guard
- Privacy/data export/erasure panel and danger zone

**Visual direction:** Matte Black variant for the dark prototype; Soft Signal Light counterpart; high-contrast form controls; generous field spacing; forest/teal trust surfaces; lime for one primary action or selected emphasis; module accents only where context helps. Keep login forms focused and profile screens expressive but readable.

## 3. Cross-cutting interaction and accessibility rules

- Keep the shared PacketPulse shell where it helps; unauthenticated signup remains a focused standalone layout.
- Use generous whitespace and Comfortable density by default. Compact is reserved for moderation/review tables. Reading density applies to resource content.
- Buttons, cards, tabs, menus, upload controls and stepper are keyboard accessible and expose visible focus.
- Use microanimations only for action acknowledgement, transition/orientation, upload progress and meaningful milestones. Respect reduced motion.
- Status always uses text plus a glyph, not colour alone.
- Resource file upload and provider sign-in must show real or explicitly mocked state; no fake progress or false success.
- Preserve drafts and progress on recoverable errors.
- Profile preview must enforce real visibility rules; client hiding alone is not security.
- Provide light and dark themes; Matte Black is the preferred analytical/dark product treatment, not a mandate for every page.
- Verify WCAG 2.2 AA, screen reader labels, focus order, responsive reflow and contrast in every major state.

## 4. Approved prototype review process

All features and patterns above are approved for the next review build. During review, collect:

- First-time signup completion and time to first value
- Onboarding skip/complete and preference-edit rates
- Resource search success, zero-result searches, saves, opens and reading continuation
- Resource submission completion, scan failure, moderation turnaround and broken-link reports
- Profile edit success, visibility-preview comprehension and privacy-setting errors
- Account-settings task success, security recovery failures and notification opt-out behaviour
- Qualitative feedback on visual vibe, clarity, whitespace, trust and perceived complexity
- Accessibility, keyboard and mobile testing findings

At the next build boundary, each experimental item receives one disposition: **Retain, Refine, Restrict or Remove**. Record the reason and evidence in CHANGELOG.md and Documents 1–5. Keep the first review build reversible through feature flags/configuration where appropriate.

## 5. Reference assets

The bundle's `references/design-inspiration/` contains the supplied and generated reference images:

- REF-00: Matte Black Analytical Dashboard
- REF-01 to REF-06: original dashboard, upload and card-pattern references
- REF-07: Community Technical Questions concept
- REF-08: Community Resources concept
- REF-09: Signup/Profile/Account concept
- REF-10: contact sheet of the six user-supplied visual inspirations

