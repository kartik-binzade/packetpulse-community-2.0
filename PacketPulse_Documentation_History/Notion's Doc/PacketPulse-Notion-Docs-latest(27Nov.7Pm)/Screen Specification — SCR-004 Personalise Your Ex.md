# Screen Specification — SCR-004 Personalise Your Experience

Created by: Kartik B | 1000110
Created time: November 27, 2026 1:51 PM
Category: Planning
Last edited by: Kartik B | 1000110
Last updated time: November 27, 2026 4:40 PM

**Screen ID:** SCR-004
**Route:** `/onboarding/personalise`
**Journey:** Verified account → initial personalisation → community home
**Status:** Product specification — ready for review; engineering must validate route/data model against repository.

## 1. Purpose and outcome

Help a newly verified member make PacketPulse relevant without turning onboarding into a long questionnaire. Capture three useful signals:

1. **Role** — the member's current identity or intended professional direction.
2. **Interests** — topics they want to explore.
3. **Goals** — outcomes they hope PacketPulse will help them achieve.

Use these signals to improve the first home feed, recommendations, learning discovery and future prompts. They are personalisation data—not permission, employment verification, or a permanent identity label.

## 2. Entry, prerequisites and completion

- Entry follows successful email verification and experience-track selection in SCR-003.
- The experience track (Fresher / Experienced) is already collected; do not ask it again here.
- If the member arrives without a valid authenticated, verified session, route them through the existing auth guard.
- Load saved personalisation if this flow is resumed or revisited.
- The flow can be completed, saved for later, or skipped. Do not block access to the community because a member declines to personalise.
- After completion or skip, route to the existing authenticated community/home destination. Confirm the canonical route in the live app before implementation.
- Re-entry from profile/settings must open an edit mode with current selections prefilled, not restart onboarding.

## 3. Interaction model and visual structure

A calm, compact, single-column onboarding card with:

- step/progress label (e.g. “Make it yours · 1 of 3” or equivalent clear progress),
- one short heading and helper sentence,
- three consecutive sections: Role → Interests → Goals,
- selection controls with clear selected/unselected states,
- Back, Skip for now, and one primary Continue/Finish action,
- no persistent sidebar and no dense explanatory paragraphs.

Desktop may use the approved brand panel treatment from SCR-003 only if it does not distract from the choices. Tablet/mobile use a single column. On mobile, preserve comfortable touch targets and avoid horizontally scrolling chip collections.

## 4. Step A — Role

### Intent

Collect a non-sensitive professional/learning context to tune content and recommended journeys.

### Proposed selectable roles

Use the product taxonomy, subject to confirmation against the canonical role taxonomy:

- Student
- Fresher / Early-career
- Software / Engineering professional
- Specialist / Technical lead
- Mentor / Educator
- Career switcher
- Exploring / Not sure yet

**Important:** Recruiter, Admin, Moderator, Instructor publishing authority, or SuperAdmin privileges must never be granted by this self-selection. Those are access-controlled account roles. A user who chooses “Mentor / Educator” expresses interest/identity; they do not automatically gain publishing or moderation permissions.

### Behavior

- Single-select.
- “Not sure yet” is a valid choice and does not reduce access or ranking.
- The selection can be changed later in profile preferences.
- If the user selects a role with a distinct profile path, do not redirect abruptly. Show any extra profile requirements later in the appropriate flow, with clear explanation.

## 5. Step B — Interests

### Intent

Choose topics for initial recommendations and discovery.

### Proposed interest taxonomy

Use maintainable, admin-managed topic IDs rather than hard-coded display strings. Initial candidate topics:

- Backend & APIs
- Frontend & UI
- DevOps & Cloud
- Networking & Security
- Data & AI
- Embedded & IoT
- System design
- Career & interviews
- Learning resources
- Community & mentoring

Final taxonomy should be reconciled with existing categories/tags in the product so we do not create duplicate topic systems.

### Behavior

- Multi-select; suggested minimum 1, maximum 5 for a useful but low-friction initial profile. If product research or existing taxonomy indicates otherwise, Claude may recommend a better limit for product approval.
- Display selected count and a clear way to remove a selection.
- Selected state must be visible beyond color alone.
- No forced free-text interest on the first pass. If “Other” is offered, it should be optional, length-limited, moderated/normalized, and must not create a new global taxonomy term automatically.
- Empty selection is allowed only via Skip/Save for later; Continue from this step requires at least one selection if the user has not skipped.

## 6. Step C — Goals

### Intent

Understand what the member wants to accomplish in the near term.

### Proposed goals

- Build practical skills
- Prepare for interviews
- Find a job or internship
- Grow in my current role
- Learn from the community
- Share knowledge / mentor others
- Build projects or portfolio
- Explore a new technical area

### Behavior

- Multi-select, recommended 1–3 selections.
- Goals are preference signals, not promises of employment, certification, mentoring access, or guaranteed outcomes.
- Avoid collecting sensitive career or financial information here.
- The member may update goals later.

## 7. Navigation and persistence

- Save each step's selection locally for immediate back/forward navigation; persist to the server at step transition or on explicit save/finish using the existing profile/preferences service.
- Do not lose selections when the user presses Back, refreshes, or encounters a recoverable network error.
- If persistence fails, show a clear retry state; do not falsely mark onboarding complete.
- Prevent duplicate writes/submissions while a save is pending.
- Skip must be an intentional action; record that personalisation was skipped, without inventing default role/interests/goals on the user's behalf.
- Completion should persist an onboarding completion marker and selected preference IDs, then navigate.
- Reopening settings must not alter onboarding completion history; it updates preferences only.

## 8. Recommendation behavior and privacy

- Treat selections as explicit user preferences, not inferred sensitive traits.
- Use only for relevant content/feed/recommendation ranking and onboarding prompts, according to existing consent and personalization policy.
- Do not expose selections to recruiters as verified skills or qualifications.
- Do not use these preferences to determine authorization, eligibility for assessments, verified badges, or job application permissions.
- Provide a future “Edit preferences” entry point in profile/settings.
- Avoid cold-start empty states: if interests/goals are skipped, show a useful general feed and let the member refine it later.

## 9. States and edge cases

| State / case | Required behavior |
| --- | --- |
| Initial | Show step 1, no preselected answers unless saved values exist |
| Saved/resumed | Restore the member's exact saved selections |
| Selected role | Clear selected marker and accessible selected state |
| No interest selected | Explain the minimum; preserve ability to Skip |
| Interest limit reached | Disable additional options or explain limit; never silently replace a selection |
| No goal selected | Explain requirement for Continue; allow Skip |
| Back | Previous step, selections retained |
| Skip | Confirm only if product decides the action is consequential; otherwise skip directly with clear wording |
| Save pending | Show loading feedback; prevent duplicate action |
| Save failure/offline | Retain local choices and provide retry |
| Session expired | Save no sensitive data to URL; return to auth and recover progress where safe |
| Taxonomy item retired | Preserve stored ID; display fallback label and allow user to replace it |
| Revisit/edit | Prefill saved values; no onboarding completion reset |
| Reduced motion | No essential animation; selection changes remain clear |
| Small viewport | Wrap options naturally; no clipped chips or horizontal overflow |

## 10. Accessibility and responsive requirements

- WCAG 2.2 AA target.
- Use semantic fieldsets/legends or equivalent accessible groups.
- Role uses radio semantics; interests/goals use checkbox semantics.
- Keyboard users can select, deselect and navigate without pointer input.
- Focus is visible and does not shift layout.
- Announce selected counts and validation/save feedback to assistive technology.
- Target 44 × 44 px controls, high-contrast selected borders, text labels and icons/markers.
- Support 320 px width, 200% zoom, text expansion and reduced motion.
- On successful step change, focus the new step heading; on validation, focus the first invalid group.

## 11. Required functional components for SCR-004

- Onboarding step/progress indicator
- Role single-select group (radio-card or accessible list)
- Interest multi-select group with selection counter and max-limit behavior
- Goal multi-select group with selection counter
- Back / Skip / Continue or Finish controls
- Save/loading/error feedback
- Authenticated verified-session guard
- Personalisation preference read/write capability
- Taxonomy source and stable IDs
- Completion/resume state
- Route transition to authenticated home
- Analytics events that contain no selected free-text or personal data; event names and consent follow the project analytics policy

These are required product capabilities; implementation may reuse existing shared components and services.

## 12. Acceptance criteria

- [ ]  Verified member reaches SCR-004 after SCR-003.
- [ ]  Experience track is not requested a second time.
- [ ]  Role is single-select and explicitly non-authorizing.
- [ ]  Interests and goals support multiple selections with understandable limits.
- [ ]  Continue validation is clear and accessible.
- [ ]  Back, refresh, resume and network retry preserve selections.
- [ ]  Skip leads to the community without fake/default answers.
- [ ]  Saved preferences affect only approved personalisation surfaces.
- [ ]  Recruiter-facing data does not treat preferences as verified skills.
- [ ]  Edit mode preloads current values and does not restart onboarding.
- [ ]  No horizontal overflow at 320 px or 200% zoom.
- [ ]  All selection, error, loading and focus states are keyboard/screen-reader testable.

## 13. Product decisions to validate before final sign-off

1. Confirm the canonical role taxonomy and distinguish role preference from platform permission roles.
2. Confirm the existing topic/category taxonomy and use stable IDs.
3. Approve the proposed interest cap of 5 and goal cap of 3, or replace them with tested values.
4. Confirm whether all three steps are one page with progressive sections or separate step screens. Recommended: three compact steps to reduce cognitive load and preserve clear progress.
5. Confirm the canonical post-onboarding home route.
6. Confirm how preference updates influence feed/recommendation ranking and whether a privacy/settings explanation is required.

## 14. Engineering handoff boundary

Claude should inspect the repository, existing onboarding state, auth guard, preference/profile schema, taxonomy/category model, route conventions and design-system components before implementation. Reuse the current product architecture. Report missing capabilities and propose the smallest safe extension. Do not create duplicate taxonomies, profile stores, auth guards or UI primitives. Changes to role meaning, permissions, privacy, selection policy, destination or acceptance criteria require product approval.

This is a product behavior specification, not a code prescription.

## 15. Product decisions — agreed direction for the design pass

The following decisions resolve the proposed choices for this screen. They are product-level directions; repository and canonical taxonomy validation remains an engineering audit item.

- **Presentation:** Use three separate, compact steps in one onboarding flow—not a long page with all questions visible at once. Progress is explicit: Role → Interests → Goals. This reduces visual load while keeping the journey predictable.
- **Role selection:** Single-select. Keep “Exploring / Not sure yet” available. The displayed role labels must map to existing canonical role IDs after repository audit; this screen must not create account permission roles.
- **Interests:** Multi-select, minimum 1 to continue, maximum 5. The count is visible (e.g. “2 of 5”). Reaching the limit disables remaining choices with accessible explanation; it never silently deselects an existing choice.
- **Goals:** Multi-select, minimum 1 to continue, maximum 3. Show the count and allow easy deselection.
- **Skip:** Available on every step. Skip means “finish onboarding without these preference answers,” not “choose defaults.” A lightweight confirmation is not needed because the action is reversible through settings and does not delete saved preferences. If saved selections exist from a previous visit, Skip must not erase them.
- **Back:** Available from steps 2 and 3. Preserve the member's in-session choices and focus context.
- **Completion:** On Finish, save all selected preference IDs and the onboarding completion marker; then route to the canonical community home. If the destination is not yet confirmed from the repository, keep it as an explicit integration check rather than hard-coding a guessed URL.
- **Visual direction:** Use a clean, friendly composition with generous breathing room and concise copy. A small original vector/SVG illustration or abstract PacketPulse node motif may occupy the side/upper area if it supports the step; it must not compete with the selection controls. No AI-generated imagery. On narrow screens, the illustration may disappear or become a small decorative header element.
- **Choice UI:** Use accessible selectable cards/list rows with a label and optional one-line clarification; avoid dense, horizontally scrolling chips. Icons are supportive only and must not replace text labels.
- **Product component linkage:** SCR-004 uses the shared onboarding shell, progress indicator, accessible single-/multi-select controls, validation/feedback, preference persistence, auth guard and taxonomy source listed in the Required Product Components & Capability Inventory. Claude should map these to existing components before proposing new ones.

## 16. Final screen review checklist

- [ ]  Role and topic labels reconciled to canonical IDs.
- [ ]  Exact post-onboarding route verified from current application.
- [ ]  Saved-preference and skipped-onboarding behavior tested.
- [ ]  Recommendation use and privacy disclosure aligned with existing settings/consent.
- [ ]  Visual review confirms short copy, no AI imagery, responsive illustration treatment and no distracting side panel.
- [ ]  Product and engineering acceptance criteria reviewed together.

The design direction is now sufficiently defined for a prototype/review pass. The screen should be marked production-ready only after the repository audit resolves the integration checks above.