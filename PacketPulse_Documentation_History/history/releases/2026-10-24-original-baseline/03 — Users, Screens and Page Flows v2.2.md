# PacketPulse 2.0 — 3. Users, Screens and Page Flows

Version 2.2 · 24 October 2026 · Owner: product lead with design lead (to be named) · Replaces Document C (Workflows, Screens and Information Architecture, v1.0). Requirements are cited as PRD, decisions as DEC and OPEN (Document 1); design rules as DES (Document 2); build capabilities, tasks and tests in Document 4. **\[REVIEW\]** marks a recommendation for the owner to approve. PV means built and tested in the reference prototype only. Which routes exist in production is not known until the repository audit (OPEN-15).

## 1. Users and their main journeys

Each user has one home page, a few frequent screens and one success signal. Screens are listed by ID and described in section 4.

| User | Goal | Entry | Home screen | Frequent screens | Success signal |
| --- | --- | --- | --- | --- | --- |
| Visitor | Understand PacketPulse and decide to join | Search, referral, community link | Home (SCR-001) | Fees (SCR-002), Join (SCR-003) | Registers and verifies email |
| Fresher member | Learn, practice, get a first role | Join, invitation | Dashboard (SCR-004) | Learn, Practice, Assessments, Community, Jobs | First verified skill, first application |
| Experienced member | Grow, prove depth, change roles | Join, referral | Dashboard | Assessments, Practice, Jobs, Applications, Community | Verified skills, an interview |
| Mentor | Help others, build reputation | Invitation by admin | Dashboard | Community, Reviews (SCR-014), Mentoring (SCR-016) | Accepted answers, completed reviews |
| Instructor | Publish and review learning content | Invitation by admin | Dashboard | Content (SCR-017), Reviews | Published content, reviewed labs |
| Recruiter | Fill positions with good candidates | Company onboarding (SCR-033) | Recruiter dashboard (SCR-018) | Positions, Candidates, Candidate review | A hire marked Joined |
| Admin | Keep the platform safe and moving | Staff invitation | Operations (SCR-024) | Verification, Taxonomy, Payments, Analytics | Queues cleared within target times |
| SuperAdmin | Control access, policy and security | Staff invitation | Operations | Users, Roles, Policies, Security | No policy or access change without audit |

### 1.1 Journey maps

| Journey | Steps | Ends when |
| --- | --- | --- |
| Member: discovery to first value (WF-001) | Home, Fees, Join, verify email, choose Fresher or Experienced, required details, resume review, consent, Dashboard, first action (ask, enroll or start a lab) | The member completes a first action |
| Member: prove a skill (WF-002, WF-003, WF-004) | Assessments or Practice, attempt or submit, result or review, add evidence if needed, verification decision, badge | A skill shows a verified label |
| Member: get hired (WF-006, WF-007) | Jobs, Apply (consent and fee declaration), Applications timeline, interview, offer, accept, Joined, invoice | The application reaches Joined or ends with a status the member understands |
| Recruiter: fill a position (WF-006, WF-012) | Company onboarding, create position, review, publish, forwarded candidates, review with scorecard, interview, offer, Joined | The position is Closed as Fulfilled |
| Admin: handle a queue (WF-008) | Sign in with MFA, Operations queue, open item, decide with reason, notify, audit entry | The queue item is closed with a recorded decision |
| Anyone: data rights (WF-011) | Settings or Profile, Privacy, export or erase, confirmation, result | The request is completed and logged |

## 2. Information architecture

### 2.1 Structure

```
Public        Home, Fees, Sign in, Join
Onboarding    Verify email, choose Fresher or Experienced, required details, resume review, consent
Member        Dashboard, Learn, Practice, Assessments, Jobs, Applications, Community (list, thread), Profile, Notifications, Settings
Reviewers     Reviews (queue, detail), Mentoring, Content (instructors and admins)
Recruiter     Dashboard, Candidates (list, review), Positions (list, detail, form), Interviews
Admin         Operations, Verification, Taxonomy, Content, Payments, Analytics, Moderation
SuperAdmin    Users, Roles, Policies, Security (plus all Admin areas)
```

Relationships that drive navigation: Profile and Taxonomy feed Jobs and Candidates; Assessments, Practice and Verification feed the evidence recruiters see; Jobs feed Applications; Positions feed Candidates; Payments depend on Learn (priced content) and Applications (placement fee); every area writes to the audit log in Operations.

&#91;embedded content: member sign-up path · 6 steps then 5 paths\]

Applying for jobs stays blocked until the required details are complete (PRD-003); every other path opens as soon as the member reaches the dashboard.

### 2.2 Navigation by role

| Role | Primary navigation |
| --- | --- |
| Member | Home, Learn, Practice, Assessments, Jobs, Applications, Community, Profile |
| Mentor | Member pages plus Reviews and Mentoring |
| Instructor | Member pages plus Reviews and Content |
| Recruiter | Dashboard, Candidates, Positions |
| Admin | Operations, Verification, Reviews, Taxonomy, Content, Payments, Analytics |
| SuperAdmin | Admin pages plus Users, Roles, Policies, Security |

Navigation is built from the person's permissions, and the server checks every page and action again (DEC-010). Deep links survive sign-in. A denied page shows a plain explanation and a valid destination (SCR-043). Members have eight items; the mobile bottom bar shows the five most used: Home, Learn, Practice, Community, Jobs, with the rest behind a More item **\[REVIEW\]**.

## 3. Page rules that apply to every screen

| Rule | Detail |
| --- | --- |
| States | Every data screen has loading, empty, error, success and, where relevant, disabled states (DES-001) |
| One primary action | At most one primary button per screen or dialog (DES-008) |
| Titles | One H1 per page; the browser tab title follows it |
| Back and deep links | Detail pages show a breadcrumb; filters and scroll position are kept when returning to a list |
| Responsive | One column below 768 px; tables become stacked cards; dialogs become full screens for long tasks |
| Keyboard | Everything reachable; focus moves to the page heading after navigation |
| Unsaved work | A warning before leaving a changed form; long forms save and resume |
| Permissions | A person never sees a control they cannot use; the server rejects it anyway |

## 4. Screen register

Columns: ID, screen, proposed route, audience, purpose and main actions, permission, status.

### 4.1 Screens built in the prototype (PV)

| ID | Screen | Route | Audience | Purpose and main actions | Permission | Status |
| --- | --- | --- | --- | --- | --- | --- |
| SCR-001 | Home | / | Visitors | Explain the product loop; Join, Sign in, How fees work | Public | PV |
| SCR-002 | Fees | /fees | Visitors | Free, paid and fee table; worked example | Public | PV |
| SCR-003 | Join and verify | /join | Visitors | Email, 6-digit code, Fresher or Experienced | Public | PV |
| SCR-004 | Dashboard | /dashboard | Member | Loop tracker, next step, completeness, getting-started list | Member | PV |
| SCR-005 | Learn | /learn | Member | Filter by state; enroll, start, continue; buy priced items | Member | PV |
| SCR-006 | Practice | /practice | Member | Open a lab; submit root cause, evidence, fix, prevention; resubmit | Member | PV |
| SCR-007 | Assessments and verified skills | /assessments | Member | Skills with labels; add evidence; take assessment | Member | PV (attempt is a 2-question demo) |
| SCR-008 | Jobs | /jobs | Member | Filter by work mode; apply with consent | Member | PV |
| SCR-009 | Applications | /applications | Member | Timeline; accept or decline offer; pay invoice; withdraw | Member (own) | PV |
| SCR-010 | Community | /community | Member | Search, filter by mode, ask, request a mentor | Member | PV |
| SCR-011 | Thread | /community/id | Member | Answer, vote, follow, report, accept | Member | PV |
| SCR-012 | Profile | /profile | Member | Required details, resume review, career, compensation, consent, privacy, recruiter preview, data requests | Member (own) | PV |
| SCR-013 | Notifications | /notifications | All | List, mark all read | Own | PV |
| SCR-014 | Reviews queue | /reviews | Mentor, Instructor, Admin | Awaiting and reviewed lab submissions | Reviewer | PV |
| SCR-015 | Review detail | /reviews/id | Same | Score four areas, feedback, decide | Reviewer | PV |
| SCR-016 | Mentoring | /mentoring | Mentor | Accept or decline requests | Mentor | PV |
| SCR-017 | Content | /content | Instructor, Admin | Create, submit, review, publish, unpublish | Instructor or Admin | PV |
| SCR-018 | Recruiter dashboard | /recruiter | Recruiter | Attention items, positions at a glance, agenda, activity | Recruiter | PV |
| SCR-019 | Candidates | /recruiter/candidates | Recruiter | Search, filter, sort, compare up to 3 | Recruiter (own company) | PV |
| SCR-020 | Candidate review | /recruiter/candidates/id | Recruiter, Admin | Profile, evidence, assessments, learning, resume, decide, interview, offer | Recruiter (forwarded only), Admin | PV |
| SCR-021 | Positions | /recruiter/positions | Recruiter | Filter by status; pause, close, reopen | Recruiter | PV |
| SCR-022 | Position detail | /recruiter/positions/id | Recruiter | Vacancies, dates, candidates, hiring history | Recruiter | PV |
| SCR-023 | Position form | /recruiter/positions/new | Recruiter | Create or edit; draft from pasted text; fee and experienced-only switches | Recruiter | PV |
| SCR-024 | Operations | /admin | Admin | Screening, jobs awaiting review, moderation, feature controls, audit filter | Admin | PV |
| SCR-025 | Verification | /admin/verification | Admin | Queue, review, revoke | Admin | PV |
| SCR-026 | Taxonomy | /admin/taxonomy | Admin | Tree, suggestions, automation | Admin | PV |
| SCR-027 | Payments | /admin/payments | Admin | Transactions, refunds, approve refund | Admin | PV |
| SCR-028 | Analytics | /admin/analytics | Admin | Funnel by segment | Admin | PV |
| SCR-029 | Users | /admin/users | SuperAdmin | Search, manage with step-up | SuperAdmin | PV |
| SCR-030 | Roles | /admin/roles | SuperAdmin | Permission matrix | SuperAdmin | PV |
| SCR-031 | Policies | /admin/policies | SuperAdmin | Recruiter visibility, AI policy | SuperAdmin | PV |
| SCR-032 | Security | /admin/security | SuperAdmin | Settings, sessions, access review | SuperAdmin | PV |

### 4.2 Screens approved or proposed but not built

| ID | Screen | Why it is needed | Status |
| --- | --- | --- | --- |
| SCR-033 | Company onboarding and verification | Recruiters register a company before posting (OPEN-10) | Planned |
| SCR-034 | Assessment attempt | Timed, autosaving attempts with instructions and results (PRD-017) | Planned |
| SCR-035 | Course and lesson player | Real content delivery | Planned |
| SCR-036 | Lab workspace | Topology, logs and terminal for real labs | Proposed (later) |
| SCR-037 | Notification preferences | Channels, quiet hours (PRD-041) | Planned |
| SCR-038 | Data export and erasure | DPDP rights (PRD-045) | Planned |
| SCR-039 | Billing history | Members see invoices and receipts | Planned |
| SCR-040 | Interview calendar | Scheduling with invitations | Proposed (later) |
| SCR-041 | Integrations settings | ClickUp and n8n (OPEN-12) | Planned |
| SCR-042 | Public member profile | Not at launch; profiles stay private (PRD-052, OPEN-19) | Deferred **\[REVIEW\]** |
| SCR-043 | Error pages (no access, not found, server error, maintenance) | Recovery paths | Planned |
| SCR-044 | Hide from companies | List of companies the member blocks (PRD-050) | Proposed **\[REVIEW\]** |
| SCR-045 | How verification works | Public page with the criteria for each label (Document 1, 10.1) | Proposed **\[REVIEW\]** |
| SCR-046 | Community guidelines | The moderation rules and appeals route (Document 1, 10.4) | Planned |

### 4.3 Dialogs and interaction surfaces (PV)

| ID | Surface | Purpose | Key rules |
| --- | --- | --- | --- |
| SCR-D01 | Apply | Consent to share resume; fee declaration and permission | Both fee ticks required when a fee applies; blocked if required details are missing or the role is experienced-only |
| SCR-D02 | Add evidence | Certification or experience submission | Validation per PRD-013 |
| SCR-D03 | Evidence review | Two checks, decision, reason | PRD-014 |
| SCR-D04 | Step-up confirmation | Reason and fresh code for sensitive actions | Lockout after repeated failures |
| SCR-D05 | Manage user | Reset link, MFA reset, sign out, role change, suspend | Every action audited; the user is notified |
| SCR-D06 | Checkout | Price, GST, payment, refund policy | Sandbox only; double payment prevented |
| SCR-D07 | Accept offer | Shows the exact fee; second confirmation | PRD-037 |
| SCR-D08 | Pause, close, reopen position | Reasons and dates | PRD-031 |
| SCR-D09 | Schedule interview, record outcome | Round, interviewer, IST time | PRD-034 |
| SCR-D10 | Compare candidates | Side by side, up to 3 | Respects visibility |
| SCR-D11 | Request a mentor, report, withdraw, decline | Reasons where required | Per PRD |
| SCR-D12 | Command palette | Search pages and actions by role | Keyboard first |

## 5. Detailed specs for screens not yet built

Each spec follows the handoff pattern: content, actions, rules and states, and sample copy. Sample copy uses the patterns in Document 2 section 11.

| Screen | Content and fields | Actions | Rules and states | Sample copy |
| --- | --- | --- | --- | --- |
| SCR-033 Company onboarding | Company name, website, size band, contact person (name, work email, phone), registration or GST number (optional), LinkedIn company page (optional), agency toggle with end-client name | Save draft, Submit for review | Free email domains are held for review. Status timeline: Submitted, In review, Approved or Changes requested. Positions can be drafted but not published until approved. Rejected or suspended shows the reason. See Document 1, 10.6 **\[REVIEW\]** | Your company is in review. You can draft positions while you wait. |
| SCR-034 Assessment attempt | Instructions page (time, attempts left, pass mark, validity, honesty statement tick), question view (Question 4 of 20, visible timer, flag for review, previous, next, navigator), review page listing unanswered and flagged items, result page (score, pass or not, level, weak topics, next step) | Start, Next, Flag, Submit, Leave | Autosave every answer; a reload resumes the same attempt with the remaining time; one active attempt only; attempts and retake gap enforced; the timer is announced to assistive technology at 10 minutes and 1 minute, not every second; locked state shows the next available date. Values in Document 1, 10.2 | Submit with 3 questions unanswered? You cannot change answers after submitting. Buttons: Submit now, Keep working |
| SCR-037 Notification preferences | Grid of event types by channel, quiet hours, WhatsApp opt-in with number confirmation, separate marketing opt-in, digest frequency | Save | In-app is always on; critical events are listed and cannot be switched off; every change is recorded with a time. Defaults in Document 1, 10.3 | Interview and offer messages always reach you, even in quiet hours. |
| SCR-038 Data rights | Sections: Download my data, Correct my data (link to Profile), Withdraw consent (list), Delete my account and data, Grievance contact | Request download, Withdraw, Delete account | Re-enter the password or a code before deletion; a 30-day grace period to cancel; the page lists what is kept for legal reasons and for how long; requests show Open, In progress, Done | We will email a link when your data is ready. The link works for 7 days. |
| SCR-039 Billing history | Invoices and receipts with status chips (Paid, Due, Refunded), download as PDF, placement-fee invoices show the offer they belong to | Pay now, Download | Empty state explains when invoices appear; a due invoice shows the due date and days left | No invoices yet. Paid courses and placement fees appear here. |
| SCR-043 Error pages | No access, Not found, Something went wrong, Maintenance | One next action each; a reference code to quote to support | Never show technical details | We could not find that page. Go to your dashboard, or search for what you need. |
| SCR-044 Hide from companies | List of blocked companies with remove buttons; add by company name | Add, Remove | Up to 20; matched by name and web domain; staff can still see the profile; an agency cannot be guaranteed to honor it **\[REVIEW\]** | Hidden companies will not see your profile in search or in forwarded lists. |
| SCR-045 How verification works | The five labels, what is checked, who decides, validity, appeals | Link from every badge | Public page; same wording as Document 1, 10.1 **\[REVIEW\]** | PP verified means two kinds of evidence, one of them reviewed by a person. |
| SCR-046 Community guidelines | Rules, action steps, response times, appeals route | Accept (first post), Report | Linked from every post form; acceptance recorded | Never post passwords, keys or customer data. |

## 6. Workflows

Each workflow lists actors, steps, failure and recovery, and notifications and audit. State names are in section 7.

| ID | Workflow | Actors and steps | Failure and recovery | Notifications and audit |
| --- | --- | --- | --- | --- |
| WF-001 | Member: discovery to first value | Visitor reads Home and Fees, joins, verifies email, picks Fresher or Experienced, completes required details, reviews the parsed resume, sets consent, reaches the Dashboard, takes a first action | Wrong or expired code gives a clear message and a resend after a cooldown; a parse failure falls back to manual entry | Welcome email; consents recorded with times |
| WF-002 | Evidence verification | Member adds evidence and confirms accuracy; skill shows Pending; reviewer ticks two checks and decides: Approve, Need more evidence, or Reject (reason of 10 or more characters); rejected evidence can be appealed once; approved evidence can be revoked and expires on its date | A decision without both checks or a reason is refused | Member told of every decision; audit records who, when, reason, policy version |
| WF-003 | Assessment to verification (Planned) | Discover, check eligibility, read instructions, attempt, submit, see the result; a pass creates an evidence record for review; the reviewer decision issues the badge or sends the member to practice | Autosave protects answers; attempts and retake gaps enforced | Result notification; audit of the decision |
| WF-004 | Lab practice | Open lab, work through observe, hypothesize, test, collect evidence, root cause, fix, explain, prevent; submit four parts; a reviewer scores four areas 0 to 4; the member can resubmit up to three attempts | A fourth attempt is refused | Member told of the result; review recorded |
| WF-005 | Community question and moderation | Ask (mode, title, detail, sensitive-data confirmation); others answer and vote; the asker accepts one answer; anyone can report with a reason; a moderator dismisses or removes | Removal needs a reason shown to the author | Moderator action audited |
| WF-006 | Recruitment, end to end | Recruiter drafts a position and submits it; reviewer publishes or requests changes; members apply; Admin screens and shortlists; a person forwards; the recruiter reviews with a scorecard, decides, schedules interviews, records an outcome, extends an offer; the member accepts or declines; the recruiter marks Joined | A declined offer lowers the filled count and can pause a position that had closed as fulfilled | Member told at every stage; recruiter reminded after 10 working days without an update (PRD-051); every step audited |
| WF-007 | Fee consent and invoicing | Role shows the fee; apply with declaration and permission; accept the offer with the exact amount and a second confirmation; recruiter marks Joined; invoice created, due in 15 days; member pays through the checkout | No offer, a declined offer or a withdrawal owes nothing | Invoice email; payment audit |
| WF-008 | Admin action with audit | Sign in with MFA; open the queue; choose an action; sensitive actions ask for a reason and a fresh code; the action runs | A refund requested by an Admin waits for a SuperAdmin | User notified; audit entry written |
| WF-009 | Content publishing | Instructor drafts with required details; submits; reviewer publishes or requests changes with a reason; learners see it as Available; an Admin can unpublish | Publishing without required metadata is refused | Author notified |
| WF-010 | Paid service and refund | See the price and GST; pay; receive receipt and access; a refund needs a reason | Failed payment keeps the cart and says why | Receipt; refund audited |
| WF-011 | Data rights and consent (Planned) | Member views consents, withdraws one, exports data or requests erasure; the system confirms, completes within the policy period and logs it | A pending request can be canceled during the grace period | Confirmation emails; audit |
| WF-012 | Company onboarding (Planned) | Recruiter signs up with a work email; enters company details; Admin reviews; approved companies can publish; the first position is always reviewed | Changes requested shows the reason and lets the recruiter edit and resubmit | Recruiter notified of each status; audit |
| WF-013 | Hide from companies (Proposed) | Member adds company names; those companies stop seeing the profile in search and forwarded lists | A name that matches several companies asks the member to choose | Audit of changes |

## 7. State models

Each model lists states, allowed moves and moves the server must reject.

&#91;embedded content: application lifecycle · 9 steps, 3 early endings\]

| Model | States | Allowed moves | Moves to reject |
| --- | --- | --- | --- |
| Application | Received, Processing, Under review, Shortlisted, Ready to forward, Forwarded, Interview, Selected, Joined; Rejected, Withdrawn, Job closed | Forward only after screening; Interview after Forwarded; Selected after Interview; Joined after an accepted offer | Joined without an accepted offer; any change after Withdrawn |
| Recruiter decision | Under review, Shortlisted, On hold, Rejected | Any to any until a final outcome; Rejected sets the application to Not selected | A decision change after Selected or Joined |
| Position | Draft, In review, Changes requested, Published, Paused, Closed (Fulfilled or Unfulfilled) | Submit, publish, request changes; pause and resume; close; reopen | Publish without review; reopen without a future deadline or with openings not above the filled count |
| Company | Pending, Approved, Changes requested, Suspended | Admin approves or asks for changes; suspend with a reason | A position published by a Pending company |
| Evidence | Pending, Needs more evidence, Approved, Rejected, Appealed, Revoked, Expired | Decide from Pending or Appealed; resubmit from Needs more evidence; appeal once from Rejected; revoke from Approved; expire by date | Approve without both checks; a second appeal; a decision by a non-reviewer |
| Lab submission | Under review, Needs revision, Passed, Failed | Decide from Under review; resubmit from Needs revision up to attempt 3 | A fourth attempt; a pass with any area below 2 |
| Assessment attempt | In progress, Submitted, Passed, Not passed, Expired | Submit before the time ends; retake after the gap | A second active attempt; a retake inside the gap |
| Offer | Extended, Accepted, Declined, Joined | Accept or decline from Extended; Joined from Accepted | Accept after the validity date; Joined from Declined |
| Fee invoice | Due, Paid, Refunded | Created after Joined; paid; refunded | An invoice before Joined or after a declined offer |
| Badge | Earned, Displayed, Expiring, Expired or Revoked, Renewed | Expiring 60 days before expiry; renewal by new evidence | Display after Expired |
| Notification | Queued, Sent, Delivered, Read, Failed | Retry from Failed within a limit | Sending after an opt-out |
| Moderation report | Open, Dismissed, Removed | Decide from Open | Removing without a reason |
| Content | Draft, In review, Changes requested, Published, Archived | As in PRD-022 | Publish without required details |

## 8. Screen-to-system traceability

Chain: screen, component, user action, workflow, capability (API in Document 4), data, permission, acceptance test (TEST in Document 4). A screen without a capability row is a demonstration, not a feature. A task is complete only when its screen, capability, data and test rows all exist and pass.

| Screen | Action | Workflow | Capability | Data | Permission | Acceptance |
| --- | --- | --- | --- | --- | --- | --- |
| SCR-D01 Apply | Submit application | WF-006, WF-007 | API-024 | Application, consent | Member | TEST-021: both fee ticks required; consent stored with a time |
| SCR-D03 Evidence review | Save decision | WF-002 | API-017 | Evidence, approval, audit | Admin, SuperAdmin | TEST-016: approval without two checks is refused |
| SCR-015 Review detail | Save review | WF-004 | API-020 | Submission, review | Reviewer | TEST-018: a pass needs every area at 2 or more |
| SCR-020 Candidate review | Save decision, schedule | WF-006 | API-027, API-028 | Application, scorecard, interview | Recruiter (forwarded) | TEST-025: an unforwarded candidate returns not available |
| SCR-009 Applications | Accept offer | WF-007 | API-030 | Offer, invoice | Member (own) | TEST-029: fee shown and confirmed before acceptance |
| SCR-029 Users | Reset link | WF-008 | API-040 | User, audit | SuperAdmin | TEST-038: step-up lockout after repeated bad codes |
| SCR-032 Security | Save limits | WF-008 | API-043 | Security settings, audit | SuperAdmin | TEST-040: out-of-range values are refused |
| SCR-033 Company onboarding | Submit for review | WF-012 | API-051 | Company, audit | Recruiter, Admin | TEST-048: an unreviewed company cannot publish |
| SCR-034 Assessment attempt | Submit attempt | WF-003 | API-052 | Attempt, result | Member | TEST-049: autosave, resume and attempt limits hold |
| SCR-044 Hide from companies | Add company | WF-013 | API-053 | Blocked company | Member (own) | TEST-046: a hidden company never sees the profile |


## 9. Design-system application to screens and flows

This update applies the upgraded component architecture to screen/workflow specifications. It does not add routes or claim that proposed screens exist in production. Existing requirements and screen IDs remain authoritative.

### 9.1 Composition rule
Build screens using **approved foundations → primitives → core components → product components → patterns**. Before adding a screen-specific component, check whether an existing shared component/pattern can be reused. Document justified exceptions.

### 9.2 Minimum state coverage
For each interactive screen/pattern, specify applicable initial/loading, empty/no-results, content, validation/error and recovery, success/confirmation, disabled/unavailable, permission-restricted, and long-content/overflow/responsive states. Do not add meaningless states to static content. A click animation is not proof of backend success.

### 9.3 Shared component contracts
Identify shared components by design-system names and document only context-specific configuration. Reuse navigation, buttons, fields, search/filter controls, badges/status labels, cards, dialogs, toasts, progress indicators, tables, timelines, and empty/loading states. Product components include member profile summaries, verification evidence, assessment results, learning progress, community Q&A, job listings, candidate summaries, application timelines, payment/invoice status, and admin review rows.

### 9.4 Application tracking and recruitment
Use an explicit timeline/status model rather than relying on color or a single badge. Each timeline entry shows the status, timestamp when available, and next action or explanation. Statuses must reflect the actual workflow/backend state; never infer that a recruiter viewed, shortlisted, interviewed, or rejected a candidate without a recorded event.

Candidate-facing and recruiter-facing views respect permissions. Candidates see their own applications and permitted status details; recruiters see only candidates/evidence authorized for their organization and role. Include loading, empty, error, withdrawal/cancellation where supported, and terminal outcomes only when product rules define them.

### 9.5 Verification and learning
Separate self-declared skills from verified skills. Verification states may include declared, pending, verified, expired/revoked where supported; evidence/provenance is visible only to authorized viewers. Learning/assessment screens identify instructions, attempt state, save/submission processing, results, feedback, and retake eligibility according to approved rules.

### 9.6 Payments and high-consequence feedback
Distinguish initiated, processing, successful, failed, refunded, and action-required states where supported. Show success only after confirmed service success. Provide transaction context and recovery instructions without exposing sensitive payment details.

### 9.7 Responsive and accessibility requirements
Specify desktop/tablet/mobile composition, content reflow, navigation adaptation, focus order, keyboard behavior, status announcements, contrast, reduced motion, and long-label/overflow handling where relevant. A reference image is not evidence that behavior is implemented or tested.

### 9.8 Cross-reference convention
Use DES rule IDs from Document 2 and task/test IDs from Document 4. If a component requirement conflicts with a product rule, resolve the requirement rather than silently changing the component or workflow. The visual overview board is for orientation only, not a route inventory or proof of production implementation; use the approved Color System PDF for exact values.
