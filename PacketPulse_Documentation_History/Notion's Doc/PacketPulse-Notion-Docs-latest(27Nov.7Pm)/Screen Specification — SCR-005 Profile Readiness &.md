# Screen Specification — SCR-005 Profile Readiness & Visibility Preview

Created by: Kartik B | 1000110
Created time: November 27, 2026 2:19 PM
Category: Planning
Last edited by: Kartik B | 1000110
Last updated time: November 27, 2026 4:40 PM

**Screen ID:** SCR-005
**Journey:** SCR-004 personalisation → profile readiness → community home
**Status:** Product workflow specification; repository and policy audit required before implementation.

## 1. Purpose

Give a new member a clear, non-pressuring view of:

- what information would make their profile useful,
- which profile details are visible to others,
- what their profile currently looks like to another member,
- what remains optional versus required for specific actions.

This screen is a trust and orientation checkpoint—not a demand to publish a complete CV immediately.

## 2. Entry and exit

- Entry follows SCR-004 Finish or Skip.
- Load the member's existing profile fields and privacy settings; never assume an empty profile if data already exists.
- If profile setup is incomplete, show the readiness summary and safe next actions.
- Primary exit: Continue to PacketPulse community home.
- Secondary exit: Review profile / edit visibility.
- The member can return later from Profile or Settings.
- Do not block ordinary community browsing because profile completeness is low. Gate only specific high-trust actions (such as applying to a job or requesting a mentor) when the product's approved policy requires particular fields.

## 3. Information architecture

A compact page with three clear regions:

1. **Profile readiness** — a small progress summary and actionable missing items.
2. **Visibility preview** — a profile preview plus audience selector / explanation.
3. **Next step** — Continue to community, or edit profile.

Keep the page scannable. Do not display a long form or a large checklist of every possible profile field here.

## 4. Readiness model

Readiness must be calculated from explicit product requirements, not from a vague percentage that rewards unnecessary data collection.

### Suggested readiness groups

- Basic profile: display name, profile photo/avatar (optional), short introduction (optional unless product policy says otherwise).
- Professional/learning context: current experience track and role preference; education/work details only when voluntarily supplied.
- Skills: self-reported skills clearly distinguished from assessment-verified skills.
- Profile visibility: member has reviewed the audience/visibility controls.

### Behavior

- Show a simple status such as “Profile started” or “Ready for more opportunities,” not a misleading score if requirements are not defined.
- Each missing item has one concise action that opens the relevant profile section.
- Label fields as **Required for a specific action**, **Recommended**, or **Optional**. Do not imply optional data is required.
- Do not make photo, employer, education institution, phone number, exact DOB or CV upload mandatory for general community participation.
- Do not mark a skill as verified merely because it is entered in the profile.

## 5. Visibility and preview

### Audience choices

Use the product's existing visibility model, after validating its available scopes. The screen must explain the actual scope in plain language, for example:

- Community members
- Recruiters / verified hiring accounts
- Private / only me

Do not add a new visibility enum if the current profile model already supports audience scopes. If visibility is field-level, show a compact summary and link to detailed settings rather than pretending one global switch controls every field.

### Preview behavior

- Render a preview using the same profile presentation components as the real member profile.
- Clearly label it “Preview” and identify the selected audience.
- Provide a way to switch preview audience without changing the saved visibility setting; a separate explicit Save/Apply action is required for settings changes.
- Show only data the selected audience is authorized to see.
- Never reveal email, private DOB, internal account IDs, security data, or hidden contact details in the preview.
- Preview must reflect current saved profile data and disclose when a field is incomplete or hidden.

## 6. Primary and secondary actions

- **Continue to community** — always available unless a real account/security error prevents entry.
- **Complete profile** — opens the existing profile edit flow at the relevant section.
- **Review visibility** — opens existing privacy/visibility settings.
- **Preview profile** — optional route or contextual panel using the canonical profile component.

Avoid making the member choose a visibility policy under pressure. If no explicit choice has been made, use the existing safe default and explain it; do not silently widen visibility.

## 7. Persistence and state

- Read profile readiness and visibility from the canonical profile service/model.
- Save visibility only after explicit confirmation.
- Preserve draft edits when navigating to profile editing and returning, using existing route/state conventions.
- Continue action must not overwrite profile values or reset preferences.
- If profile data fails to load, show a recoverable error and still allow safe community entry where auth permits.
- If visibility save fails, keep the prior saved setting and clearly indicate that the new setting was not applied.
- Handle session expiry through the existing auth guard.
- Prevent duplicate save actions and stale preview data.

## 8. Privacy, trust and safety

- Default to the existing least-exposure policy.
- Make audience and consequences understandable before applying visibility changes.
- Profile preferences and self-reported skills are not verified credentials.
- Recruiter visibility must respect the member's consent, recruiter verification and existing access controls.
- Do not expose private fields through preview APIs, page source, analytics or client-side hidden markup.
- Avoid manipulative completion nudges, shame-based percentages or false urgency.
- Provide a route to update visibility later in Settings.

## 9. States and edge cases

| State / case | Required behavior |
| --- | --- |
| Profile complete enough | Show positive, factual readiness summary; allow Continue |
| Profile incomplete | Show only high-value next steps; Continue remains available |
| No profile photo | Use approved default avatar; never block |
| No skills entered | Explain self-reported vs verified; do not fabricate skills |
| Preferences skipped | Do not create default profile answers |
| Visibility not reviewed | Explain current safe default and provide review action |
| Preview audience changed | Preview changes only; saved setting remains unchanged until Apply |
| Visibility save pending | Loading feedback; prevent duplicate save |
| Visibility save fails | Restore prior saved state and offer retry |
| Profile fetch fails | Error/retry; safe community continuation where possible |
| Existing member re-entry | Load current profile and settings, not onboarding defaults |
| Session expired | Existing authentication recovery; preserve safe drafts |
| Small viewport | Preview stacks below readiness; no overflow or hidden controls |

## 10. Accessibility and responsive behavior

- WCAG 2.2 AA target.
- Use semantic headings, status announcements and accessible progress representation.
- Audience controls must use radio or equivalent semantics with plain-language labels.
- Preview changes must be announced to assistive technology.
- Do not rely on color alone for readiness or visibility state.
- Keyboard access, visible focus, 44 × 44 px target guidance, 200% zoom, 320 px width and reduced motion.
- On mobile, stack readiness and preview; keep Continue action easy to reach without covering content.

## 11. Required functional components

- Profile readiness/status summary
- Actionable profile completion checklist
- Canonical profile preview component
- Preview audience selector
- Field-level visibility summary or settings entry
- Continue-to-community action
- Profile edit deep link
- Privacy/visibility settings link
- Profile read service and visibility update capability
- Auth guard and safe error handling
- Loading, empty, failure and save-feedback states
- Shared accessibility and responsive primitives

Cross-reference these capabilities in the Required Product Components & Capability Inventory; do not create parallel profile or visibility systems.

## 12. Acceptance criteria

- [ ]  SCR-005 follows SCR-004 completion or skip.
- [ ]  Member can continue to community without completing optional profile fields.
- [ ]  Readiness labels are tied to approved action requirements, not arbitrary data collection.
- [ ]  Preview uses the canonical profile component and current saved data.
- [ ]  Audience switch in preview does not save visibility by itself.
- [ ]  Explicit visibility save uses the existing authorization and privacy model.
- [ ]  Private DOB, email and hidden contact data never appear to unauthorized audiences.
- [ ]  Self-reported skills remain distinct from verified skills.
- [ ]  Profile edits and visibility settings can be revisited later.
- [ ]  Loading, failure, save and responsive states are testable.

## 13. Decisions / repository checks before final sign-off

1. Verify the existing profile visibility scopes and whether they are global or field-level.
2. Confirm which fields are required for each gated action (job application, assessment, mentor request, etc.).
3. Confirm the canonical profile preview component and profile-edit routes.
4. Confirm whether readiness should be status labels or a percentage; recommendation is status labels until a transparent formula is approved.
5. Confirm current least-exposure defaults for community and recruiter audiences.
6. Verify the canonical home route after onboarding.

## 14. Engineering handoff boundary

Claude should inspect existing profile models, field-level privacy, visibility APIs, route patterns, readiness rules and profile UI components. Reuse them. Identify missing behavior and propose the smallest safe change. Do not create a duplicate profile model, global visibility switch that contradicts field-level controls, or a new completeness score without product approval.

This specification defines the user/system behavior and acceptance criteria, not implementation code.