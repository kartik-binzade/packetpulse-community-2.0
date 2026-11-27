# SCR-003 — Implementation & Engg Handoff

<aside>
🛠️

**Purpose:** Engineering implementation guide for SCR-003. This is a plan and handoff—not a claim that the repository has been audited or that production work is complete.

</aside>

## Source and scope

Source screen spec: [Screen Specification — SCR-003 Create Account & Email Verification](Screen%20Specification%20%E2%80%94%20SCR-003%20Create%20Account%20&%20Em%20425520a4e1138154b32ec44ef10a1465.md)

Implement the approved flow in the existing PacketPulse architecture. Preserve the current Next.js application, backend service, Supabase/PostgreSQL, Redis, Vercel and Render setup unless a repository audit demonstrates a specific need. Do not introduce a second authentication system or replace existing services.

**UX refinement confirmed:** Keep copy concise and action-oriented. Reserve a calm, intentional illustration area where it improves the experience; use the approved original SVG or CSS/vector artwork, never AI-generated product imagery. Illustration must not compete with the form, increase mobile scrolling unnecessarily, or reduce accessibility.

## Recommended implementation approach

### 0. Repository and auth audit — prerequisite

Before coding, inspect the current repository and record the actual paths and conventions:

- Locate the current join/sign-up route, auth service/provider, session handling and shared form components.
- Check whether email OTP/verification already exists and how expiry, retries and resend limits are enforced.
- Inspect database models/migrations for pending users, DOB privacy, consent records and experience track.
- Confirm existing validation, design tokens, logging, analytics and test frameworks.
- Run the project and baseline tests; document any existing defects separately.

**Output:** a short path map and reuse decision. No speculative file paths or new schema should be committed before this audit.

### 1. Build the screen shell and reusable UI

Create or reuse a screen composition with:

- Desktop split layout; compact brand header and single-column form on tablet/mobile.
- Form card with controlled max-width and clear vertical rhythm.
- A dedicated illustration slot in the brand panel (desktop/tablet); omit or reduce it on small mobile.
- Existing PacketPulse logo and Signal Grove design tokens.
- Shared input, checkbox, button, inline-error, loading and step-heading components.

Keep the first viewport focused: title, short supporting sentence, essential fields and primary action. Avoid long benefit paragraphs, decorative feature lists and unnecessary marketing copy.

### 2. Implement account form

Fields: email, date of birth, password and required legal acknowledgement.

- Use the project's existing form/validation conventions.
- Client validation provides immediate feedback; server validation remains authoritative.
- Calculate age using a date-only value and calendar-date logic; avoid timezone shifts.
- Do not create a member profile for an ineligible registration.
- Prevent duplicate submissions; show a clear pending state and recoverable error.
- Use a non-enumerating response for potentially registered email addresses.
- Store Terms acceptance and Privacy Notice acknowledgement with policy version and timestamp; keep optional marketing consent separate.
- Do not expose DOB in recruiter-facing payloads or analytics.

### 3. Integrate email verification

Reuse the existing verification service if present; otherwise propose the smallest compatible extension and review it before schema/API changes.

- Send a six-digit code and store only a securely handled verifier/hash where appropriate.
- Enforce 10-minute expiry, attempt cap and resend throttling on the server.
- Provide paste/autofill, masked destination, wrong/expired/locked states and change-email flow.
- Changing email invalidates the prior challenge.
- Never put codes in URLs, analytics or logs.
- Verify success server-side before advancing; prototype-only behavior must not be mistaken for production auth.

### 4. Experience-track selection and handoff

After verification, display two concise selectable cards:

- **Fresher** — “Starting out or preparing for your first role.”
- **Experienced** — “Already working or bringing professional experience.”

Persist this as an experience-track attribute, not an RBAC role. Continue to the existing `/onboarding/personalise` flow (Role → Interests → Goals). Preserve the profile-completeness rule: incomplete profiles may explore the community; required details are enforced when applying.

### 5. Polish and validate

Implement the defined states from the screen spec:

- initial, focus, invalid, submitting, server/network failure;
- DOB eligibility rejection;
- verification default, wrong, expired, resend cooldown, lockout and email changed;
- verified, track unselected/selected and next-step transition.

Use semantic HTML and visible labels, focus/error announcement, keyboard navigation, reduced-motion support and WCAG 2.2 AA checks. Keep 44 px minimum touch targets and test 320 px mobile plus 200% zoom.

## Suggested component boundaries

Use existing component conventions; names below are conceptual, not prescribed repository paths:

- `JoinPage` — route shell and step orchestration.
- `CreateAccountForm` — email, DOB, password, legal acknowledgement.
- `PasswordVisibilityControl` — accessible toggle.
- `EmailVerificationStep` — code entry, resend and change-email.
- `ExperienceTrackStep` — Fresher / Experienced cards.
- `IllustrationSlot` — optional decorative SVG/CSS artwork with responsive visibility.
- Shared `FormField`, `InlineError`, `PrimaryButton`, `StepHeader`.

Keep business/security logic in the existing auth/service layer, not inside presentational components.

## Data and API contract checklist

Confirm existing equivalents before adding endpoints or tables.

| Operation | Expected behavior |
| --- | --- |
| Register | Validate input and eligibility; create pending verification state; send code |
| Verify code | Check code, expiry, attempts and pending state; mark email verified |
| Resend code | Apply server cooldown and rate limits; invalidate/rotate old challenge as policy requires |
| Change email | Validate new address; invalidate previous challenge; send new code |
| Save experience track | Validate authenticated/verified user; persist enum/value; do not grant permissions |

Security requirements: rate limiting, secure session creation, CSRF protections where applicable, safe error messages, audit events without secrets, and server-side authorization on every protected action.

## Delivery sequence and exit criteria

| Workstream | Done when |
| --- | --- |
| Audit | Actual routes/services/models documented; reuse and gaps identified |
| UI shell | Responsive layout and illustration slot implemented with existing tokens |
| Registration | Validation, eligibility, legal records and error/loading states work |
| Verification | Real server verification, expiry, resend and lockout behavior pass tests |
| Experience track | Choice persists and routes to existing personalisation flow |
| QA / handoff | Acceptance checklist passes; screenshots or preview URL and test evidence attached |

### Required test coverage

- Eligible and under-18 boundary dates, including birthday today and leap-day cases.
- Invalid email/password and unchecked legal acknowledgement.
- Duplicate submit, network failure and retry.
- Verification valid, wrong, expired, max attempts, resend throttling and changed email.
- DOB privacy: recruiter API response and analytics payload contain no DOB.
- Track is stored correctly and cannot change authorization.
- Keyboard, screen reader, focus, contrast, reduced motion, responsive breakpoints and zoom.

## Production blockers / decisions to confirm

- Legal approval of the 18+ policy (OPEN-20).
- Pending registration retention/deletion policy.
- Exact resend cooldown and attempt thresholds from security policy.
- Existing password policy and available OAuth/passkey providers.
- Repository-specific route, schema and API names.
- Official logo asset availability.

## Engineering note

Start with an audit and reuse the existing auth implementation. Prefer a small, well-tested flow over a broad redesign of authentication. Keep the illustration optional, lightweight and non-interactive; use it only when it strengthens brand context without adding form friction.

## Implementation progress — 27 Nov 2026

**Completed in this session:** created a React/Next.js component-level starter for the three SCR-003 stages (account → email verification → experience track), a typed adapter contract for the existing authentication service, responsive Signal Grove CSS, dark-mode behavior, concise copy and a decorative illustration slot. The component source was syntax-transpiled successfully with TypeScript; this is not a full application build or integration test.

**Not yet integrated:** the uploaded approved prototype/design packages contain documentation and assets, not the live PacketPulse application source. The connected GitHub repository listing returned no accessible repositories. Therefore actual route/service/schema reuse, production API wiring, repository tests and deployment cannot be verified from this session.

**Next engineering gate:** provide/access the live application repository. Then audit the existing `/join` route and auth service, map the adapter to current APIs, add the missing change-email/resend-cooldown states from real backend responses, replace the placeholder SVG with the approved asset, and run project tests. OPEN-20 legal approval remains a production gate.

## Working agreement — product behavior, not code ownership

**Our responsibility in this workflow:** define the intended user experience and product behavior precisely enough that Claude (or the implementation agent) can build it without guessing. We are not responsible for producing or maintaining the production code in this design/documentation thread.

For each finalized screen, document:

1. **Purpose and success condition** — why the screen exists and what successful completion means.
2. **Entry points and prerequisites** — where the user comes from, authentication state and required conditions.
3. **Every user action** — click, tap, keyboard action, input, selection, back, cancel, retry and exit.
4. **System response** — what the product does immediately and what happens after server confirmation.
5. **State and transition map** — default, loading, success, empty, invalid, failure, expired, disabled, locked, offline and recovery states where relevant.
6. **Validation rules** — field-level rules, boundary cases, timing, limits and authoritative server checks.
7. **Data behavior** — what is created, updated, retained, deleted or displayed; privacy boundaries and permissions.
8. **Notifications and feedback** — inline messages, email/push/in-app notifications, timing, copy intent and duplicate suppression.
9. **Navigation and continuity** — next/previous destination, refresh behavior, deep links, session expiry and preserving entered progress.
10. **Accessibility and responsive behavior** — keyboard, screen reader, focus, touch target, reduced motion, breakpoints and illustration behavior.
11. **Edge cases and abuse prevention** — repeated requests, race conditions, enumeration, rate limits, stale state and recovery.
12. **Acceptance criteria and test scenarios** — observable pass/fail conditions, not implementation-specific code instructions.
13. **Open decisions and improvement opportunities** — separate confirmed decisions from proposals; leave room for Claude to recommend a better architecture or UX while preserving product intent.

### Claude implementation handoff

- Claude should inspect the actual repository and existing patterns before deciding how to implement.
- Treat this page as the source of product behavior and acceptance criteria, not as a mandate to use the suggested component names or a particular code structure.
- Reuse existing routes, services, models, design tokens and shared components where suitable.
- If the current system cannot support a required behavior, Claude should report the gap and propose the smallest safe change rather than silently omitting the behavior.
- Claude may suggest improvements. Any change to user-visible flow, policy, data collection, permissions or success criteria should be surfaced for product/design approval.
- Implementation notes, code-level choices and test evidence belong in the engineering handoff or repository; this screen specification should stay focused on **what must happen, how the user/system workflow behaves, and how we verify it**.

**Going forward:** finalize the screen and its functional specification first; only then create/update its Notion page and mark it ready for Claude. Do not document a screen as finalized while critical flow decisions remain unresolved.