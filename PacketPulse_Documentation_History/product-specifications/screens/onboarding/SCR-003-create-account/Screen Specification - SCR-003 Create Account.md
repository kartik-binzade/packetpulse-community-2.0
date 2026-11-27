# Screen Specification — SCR-003 Create Account & Email Verification

<aside>
🧭

**Status:** Finalized for screen-level design and prototype handoff. This is not proof of production implementation or production/legal approval. The 18+ gate remains subject to the OPEN-20 counsel sign-off before release.

</aside>

## 1. Screen metadata

| Field | Specification |
| --- | --- |
| Screen ID | SCR-003 |
| Screen name | Join and verify — Create account |
| Route | `/join` |
| Audience | Visitors / unauthenticated users |
| Main intent | Create an eligible account, verify email and choose the right experience track |
| Primary action | Create account |
| Status | Finalized design specification; implementation not audited |
| Design direction | Signal Grove · split-screen · light form surface · matte-black brand card |
| Related screens | SCR-001 Home; sign-in and recovery; /onboarding/personalise; SCR-012 Profile |
| Requirement links | PRD-001 to PRD-004, PRD-010; DEC-015, DEC-018; OPEN-20 |
| Test links | TEST-001, TEST-002, TEST-003, TEST-034, TEST-036, TEST-037, TEST-042 |

## 2. Product intent and design principles

Signup is the start of an engineering journey, not a shortened CV form. The user should understand why PacketPulse is useful, complete only the essential account and eligibility details, verify their email, and then continue into progressive onboarding.

## Design refinement — concise copy and illustration space

- Keep interface copy to the minimum needed to explain the step, field, privacy implication or next action.
- Reserve a flexible illustration area on desktop/tablet when it supports brand context; use approved original SVG/CSS artwork only.
- Keep the form visually dominant. Reduce or omit the illustration on mobile so it does not push the primary action below unnecessary content.
- Avoid long promotional paragraphs, repeated benefit statements and decorative text blocks.

The design must:

- Keep the initial form short and emotionally welcoming.
- Explain the 18+ eligibility requirement before account creation.
- Treat date of birth as private profile data; never expose it to company recruiters.
- Keep email verification mandatory and visibly distinct from account creation.
- Ask the Fresher / Experienced question after verification; this is an experience track, not a permission role.
- Defer wider professional profile details to progressive onboarding.
- Avoid dark patterns, unnecessary marketing consent, false urgency and fabricated social proof.

## 3. Approved decisions and scope

### Confirmed for this screen

1. Register using email and password, with passkey as an alternative only when the existing authentication stack supports it.
2. Verify the email using a six-digit code.
3. The code expires after 10 minutes. The approved prototype uses a maximum of five verification attempts and limited resends; server-side throttling remains authoritative.
4. The user chooses Fresher or Experienced. This choice determines which profile fields are required later.
5. The prototype age rule is 18 or older, checked using date of birth. Under-18 profiles are not created.
6. Date of birth remains private and is never shown to company recruiters.
7. Terms acceptance and privacy acknowledgement are recorded. Optional marketing communication is separate and is not preselected.

### Explicitly out of scope for the initial signup form

- Full name, headline, experience history, company, compensation, notice period, skills, LinkedIn, WhatsApp, resume and recruiter-sharing preferences.
- Role, interest and goal personalisation.
- Public profile creation.
- Skill verification or recruiter-readiness claims.

These are collected later through the onboarding and profile workflows. PRD-003 remains the source for mandatory profile fields and the rule that applying is blocked until required details are complete.

## 4. End-to-end user flow

### Step 1 — Create account

The visitor enters:

- Email address.
- Date of birth.
- Password.
- Required agreement to the Terms of Service and acknowledgement of the Privacy Notice.

The interface explains that PacketPulse is currently for adults aged 18 and above. Date of birth is checked before an account/member profile is created. A valid eligible submission creates a pending verification flow and triggers a code email.

Do not add a separate “I am 18+” checkbox when the date-of-birth field is already present; the date check is the actual eligibility gate.

### Step 2 — Verify email

Show the destination email in masked form and a single six-digit code control. Explain the 10-minute expiry. Provide:

- Verify email.
- Resend code, governed by server-side cooldown and resend limits.
- Change email address.

A successful server verification advances the user to the experience-track selection. A code entered in the visual prototype is never treated as real authentication.

### Step 3 — Choose experience track

Show two equally weighted selectable cards:

- **Fresher** — starting out, studying, or preparing for a first role.
- **Experienced** — already working or bringing professional experience.

The selection is required to continue. Explain that it tailors later profile requirements and can be updated through the relevant profile workflow. Store this as the user's experience track; do not map it to an RBAC role or grant permissions.

Continue to `/onboarding/personalise`, where the next flow is Role → Interests → Goals. That later role choice (for example Student, Engineer, Specialist, Mentor or Recruiter) is a separate personalisation concept and does not grant privileged permissions.

### Post-verification profile progression

Collect the remaining PRD-003 fields progressively. At minimum, the wider profile workflow includes name, years of experience, domain/industry, current or target role, at least one skill, LinkedIn and WhatsApp. Experienced members also provide current company, current CTC and notice period. Do not block general community discovery merely because the full professional profile is incomplete; enforce the existing completeness gate when the member tries to apply.

## 5. Information architecture and layout

### Desktop — 1024 px and above

Use an unauthenticated split-screen layout with no persistent application sidebar:

- **Brand panel:** approximately 42–45% of the available width, near-black canvas, PacketPulse wordmark, brand promise, concise benefits and one restrained network/engineering motif.
- **Form panel:** approximately 55–58%, warm off-white canvas, vertically centred white form card with a maximum content width around 480–500 px.
- Keep the main form reading width controlled. Do not stretch fields across the full right panel.
- The brand panel can contain a matte-black raised feature card for three concise benefits: community connections, evidence-backed learning and opportunity discovery.
- The approved PacketPulse logo asset must replace the text wordmark when the official SVG is available. Do not invent a substitute logo.

Suggested brand copy:

- Eyebrow: “Connect · Learn · Grow together”
- Heading: “Build your engineering journey.”
- Supporting line: “Learn with people who understand the work. Practice what matters. Show what you can do. Grow through a community built around engineering.”

### Tablet — 640–1023 px

Collapse the split layout to a single form column. Retain a compact PacketPulse wordmark and one-line brand promise above the form. Do not squeeze the form into a narrow two-column layout. Keep the same card and progress hierarchy.

### Mobile — 320–639 px

- Single-column layout; form is the first and dominant content.
- Use a compact brand row; omit the decorative network motif and long brand narrative.
- Keep a readable progress indicator and a maximum of one primary action.
- Use full-width controls and buttons with at least 44 px touch targets.
- Respect safe-area insets and support 200% zoom without horizontal scrolling.
- No horizontal carousels or multi-column cards on the initial account form.

### Form card anatomy

1. Step label and progress.
2. Clear H2 and one-sentence reassurance.
3. Email field.
4. Date-of-birth field and privacy/eligibility helper.
5. Password field with show/hide.
6. Short privacy reassurance.
7. Terms and Privacy Notice checkbox.
8. Primary Create account action.
9. Sign-in and password-recovery links.
10. Optional provider entry points only when genuinely configured.

## 6. Field and component specification

| Component | Behavior and validation |
| --- | --- |
| Email | Visible label; email input; trim surrounding whitespace; validate format; preserve entered value on errors; support email autocomplete |
| Date of birth | Date-only input; required; validate 18+ on the server using calendar-date logic; show “Your date of birth is private and is never shown to recruiters” |
| Password | Password input with accessible show/hide button; use the existing authentication policy; do not invent a new composition rule in the UI |
| Terms / Privacy | Required, unchecked by default; Terms acceptance and Privacy Notice acknowledgement recorded with the applicable policy versions and timestamp |
| Primary button | “Create account”; disabled only while submitting or while the form is invalid under the client validation model; visible loading label/spinner while pending |
| Sign-in | Link to the existing sign-in route |
| Recovery | Link to the existing password recovery workflow |
| Passkey | Show only when browser/device and backend support are confirmed |
| Google / GitHub | Show only after real OAuth configuration and security review. In review builds, any mock must be explicitly labelled as a preview and must never report a real sign-in |

No confirm-password field is needed. Avoid a decorative password-strength meter that claims accuracy without using the actual authentication policy. The backend remains the validation authority.

## 7. Interaction details

### Create account

- Validate on blur and on submit; do not show red errors before the user has interacted with the field.
- On submit, keep the button label and show an inline loading state such as “Creating account…”.
- Prevent repeated submission while the request is pending.
- Preserve typed values when an error occurs, except where security policy requires clearing a sensitive value.
- Use one field-level message per field and a top-level error summary when the submission fails.
- If the email may already be registered, use a non-enumerating response that offers sign-in or account recovery without confirming account existence to an unauthenticated caller.
- If the date indicates the user is under 18, stop the flow before creating a member profile. Display a respectful explanation; do not invite the user to change the date to bypass the rule.

### Password visibility

- The show/hide control is a real button with an accessible name that changes between “Show password” and “Hide password”.
- Toggling visibility does not clear the password or move focus away from the field.
- Support password-manager autofill and paste.

### Email verification

- Use one semantic six-digit input styled as a grouped code, rather than six unrelated controls. This improves paste, autofill and screen-reader interaction.
- Accept numeric input and paste of the full six-digit code.
- Do not auto-submit without a deliberate user action.
- Show the masked email, 10-minute validity and resend availability.
- On wrong code, retain the entry when useful, show an inline error and allow correction.
- On expiry, clearly state that the code has expired and provide the resend path.
- On attempt limit, stop repeated checks and show the configured recovery/cooldown path.
- When the email changes, invalidate the previous code and issue a new verification challenge to the replacement address.
- Do not place a code in the URL, analytics event, browser log or application log.

### Experience track

- Cards are keyboard selectable and expose selected state with both a check/marker and a visible label.
- Only one choice can be selected.
- The Continue action is unavailable until one track is selected.
- Persist the selected track server-side when onboarding is committed; do not use it as an authorisation role.

## 8. UI states and feedback

| State | Expected presentation and behavior |
| --- | --- |
| Initial | Empty fields, visible labels, neutral borders, no error messages |
| Focus | Clear 3 px focus ring and no layout shift |
| Filled | Input values remain readable; labels remain visible |
| Invalid email | Inline email error; retain the typed value |
| Missing DOB | Inline required-field message |
| Under 18 | Blocking eligibility message; no account/member profile created |
| Missing password | Inline password message; focus moves to the password field |
| Terms not accepted | Inline agreement message; checkbox remains unchecked |
| Submitting | Primary button loading state; duplicate submissions blocked |
| Server/network error | Persistent inline error with retry; preserve safe field values |
| Email may exist | Generic message with sign-in/recovery path; avoid account enumeration |
| Verification default | Masked email, six-digit field, expiry information and resend control |
| Wrong/expired code | Clear inline error; maintain change-email and resend paths |
| Resend cooldown | Disabled resend control with explanatory helper; exact timing comes from server policy |
| Verification locked | Stop further attempts and display configured wait/recovery path |
| Email changed | New masked destination; old code invalidated |
| Verified | Positive confirmation and transition to experience-track step |
| No track selected | Inline instruction; focus/announce the choice group |
| Track selected | Visible selected marker and enabled Continue |
| Provider unavailable | Provider option is hidden in production; do not show a dead or misleading CTA |
| Reduced motion | State changes remain understandable without animation |

## 9. Signal Grove visual tokens for this screen

The selected palette is applied as the screen's visual direction; it does not force every module or future screen to use the same proportions.

| Token | Value | Use |
| --- | --- | --- |
| Forest | `#155E50` | Primary action and key brand interaction |
| Teal | `#287A86` | Secondary brand accents and subtle network geometry |
| Indigo | `#6555B8` | Small tertiary illustration accents, not error/success status |
| Signal Lime | `#C7F36B` | Selective highlight; dark text must be used on lime |
| Light canvas | `#F4F7F4` | Form-side background |
| Light card | `#FFFFFF` | Main form surface |
| Light raised | `#EAF0EB` | Soft helper surfaces |
| Main text | `#17231F` | Headings and body |
| Muted text | `#59675F` | Helper text on light surfaces |
| General border | `#D9E2DC` | Card separation and non-critical dividers |
| Light control border | `#748278` | Input/checkbox boundaries that need stronger visibility |
| Dark canvas | `#0E1513` | Brand panel and dark theme canvas |
| Dark card | `#18211D` | Matte-black feature card and dark form surface |
| Dark raised | `#222C26` | Dark inputs and raised controls |
| Dark text | `#F3F7F3` | Main text on dark surfaces |
| Dark muted | `#BBC8C0` | Supporting text on dark surfaces |
| Dark control border | `#6A796F` | Input boundaries in dark mode |

### Contrast checks for the named colour pairs

Calculated contrast ratios for the selected combinations:

- Forest on white: 7.64:1.
- Muted text on light canvas: 5.51:1.
- Dark text on Signal Lime: 12.70:1.
- Main text on dark card: 15.23:1.
- Muted text on dark card: 9.52:1.
- Light control border against light canvas: 3.74:1.
- Dark control border against dark card: 3.59:1.

Do not use lime text on white, pale text on lime, or a low-contrast general divider as the only visible form-control boundary. Recheck all rendered states with the real font, opacity, hover and focus effects before production.

### Theme behavior

- Light is the default signup treatment: warm-light form area and dark brand panel.
- Provide a dark counterpart using the dark surface tokens; retain the split composition on desktop.
- Respect the user's saved/system theme where available. Do not force a dark form because the brand panel is dark.
- On black/charcoal cards, keep information concise and legible; avoid glowing borders and decorative effects behind text.

## 10. Responsive, accessibility and content requirements

- Target WCAG 2.2 AA for text, controls and state indicators.
- Every field has a persistent visible label; helper text is connected programmatically.
- Error text is associated with the failing field and announced to assistive technology.
- Use semantic headings, form, labels, buttons, checkbox and progress navigation.
- Keyboard order follows the visual order. Visible focus is never removed.
- After a successful step change, move focus to the new step heading; on validation failure, focus the first invalid field.
- Keep touch targets at least 44 × 44 px.
- Do not use colour alone for selected, error, pending or success states.
- Code entry supports `autocomplete="one-time-code"`, paste and numeric input.
- Support screen readers, high zoom, browser text resizing, reduced motion and English/Hindi text expansion.
- Brand illustration is decorative and hidden from assistive technology; it must not sit behind form labels or inputs.

## 11. Engineering, privacy and security notes

- Validate eligibility and all security-sensitive rules on the server. Client validation is for prompt feedback only.
- Use a date-only value for DOB (for example ISO `YYYY-MM-DD`) and calculate age by calendar date. Avoid UTC timestamp conversion that can shift the selected birthday.
- The 18+ rule is approved for the prototype under OPEN-20; counsel must confirm production policy and applicable jurisdiction requirements.
- Do not create an under-18 member profile. Define pending-registration retention and deletion behavior before production.
- DOB is private profile data. Enforce field-level authorization in server responses; the recruiter must never receive DOB. UI hiding alone is not sufficient.
- Record Terms acceptance and Privacy Notice acknowledgement with user, timestamp and policy version. Keep optional marketing consent separate and revocable.
- Apply server-side rate limits and abuse protection to account creation, verification attempts and resend requests.
- Store verification secrets safely; do not log passwords, raw codes, DOB or email addresses in analytics. Do not leak secrets in errors or URLs.
- Use secure session handling, CSRF protections and the existing backend permission/authentication model. Do not add a second auth system.
- Follow the existing Next.js + backend service + Supabase/PostgreSQL architecture. Audit repository and auth provider before implementation; this design spec is not a dependency or stack migration approval.
- Emit the approved funnel events only once and without personal data: `USER_REGISTERED` and `EMAIL_VERIFIED`. Non-essential analytics remains subject to the existing consent policy.

## 12. Acceptance criteria and test coverage

The screen is ready for prototype review when all of the following are observable:

- [ ]  Desktop split layout, tablet single-column layout and mobile layout match the specification.
- [ ]  The form contains only email, DOB, password and required legal acknowledgement.
- [ ]  User can show/hide password without losing the entered value.
- [ ]  18+ is calculated from DOB; under-18 submission does not create a member profile.
- [ ]  All required-field and format errors are field-specific and preserve safe input.
- [ ]  Submission has loading, duplicate-submit prevention, network failure and retry states.
- [ ]  Email verification accepts six digits, expires in 10 minutes and applies the configured attempt/resend limits server-side.
- [ ]  Expired, wrong, locked and resent code states are represented.
- [ ]  Changing email invalidates the old challenge.
- [ ]  DOB is absent from recruiter responses and analytics events.
- [ ]  Fresher / Experienced selection is mandatory and is not treated as an RBAC role.
- [ ]  Successful verification continues to `/onboarding/personalise`.
- [ ]  Incomplete professional profile does not block general community use; application gating follows PRD-003.
- [ ]  All key steps work at 320, 768 and 1024 px and at 200% zoom without horizontal scrolling.
- [ ]  Keyboard-only and screen-reader paths are tested; focus, error announcements and reduced-motion behavior are verified.
- [ ]  Provider sign-in options are absent unless the real provider configuration is enabled.

Traceability: TEST-001 (registration and age validation), TEST-002 (code expiry/attempt/resend), TEST-003 (profile completeness before application), TEST-034 (sensitive field visibility), TEST-036 (keyboard/contrast/focus/screen reader), TEST-037 (responsive/zoom), and TEST-042 (analytics events contain no personal data).

## 13. Design references and assets

- Visual direction: Signal Grove, selected in the 27 November 2026 screen-design discussion.
- Brand illustration: use the original transparent SVG starter asset `PP-PAT-002-node-constellation.svg` from the approved prototype package as a restrained overlay. It is a design-system asset, not AI-generated imagery.
- No AI-generated product imagery is used.
- Official PacketPulse logo art was not present in the supplied prototype asset manifest. The prototype therefore uses a plain text wordmark until the official logo SVG is supplied.
- Main source guides: [‣](https://app.notion.com/p/424520a4e11381298e1bc37f1430bb11?pvs=21), [‣](https://app.notion.com/p/424520a4e11381d1a6ffd3757d2fb3a2?pvs=21), and [‣](https://app.notion.com/p/424520a4e11381828deae2b0206e838c?pvs=21).

## 14. Open production gates (not design blockers)

1. OPEN-20: obtain legal/counsel sign-off on the 18+ rule and applicable jurisdiction policy before production.
2. Confirm pending-registration data retention and deletion behavior.
3. Confirm resend cooldown/count and lockout recovery values in the security policy; do not hard-code an unapproved frontend timer.
4. Confirm the live password policy and whether passkey registration is enabled.
5. Confirm OAuth provider configuration and supported return URLs before exposing Google/GitHub sign-in.
6. Verify the actual `/join`, sign-in and recovery routes against the repository before engineering implementation.

## 15. Change history

| Date | Change |
| --- | --- |
| 27 Nov 2026 | Finalized the SCR-003 design specification using Signal Grove; added the DOB-based 18+ checkpoint, six-digit email verification, experience track, responsive behavior, interaction states, accessibility, security and acceptance criteria. |