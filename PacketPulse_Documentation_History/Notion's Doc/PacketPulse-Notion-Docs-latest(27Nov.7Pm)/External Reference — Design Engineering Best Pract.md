# External Reference — Design Engineering Best Practices (DENG)

Created by: Kartik B | 1000110
Created time: November 26, 2026 7:01 PM
Category: Notes
Last edited by: Kartik B | 1000110
Last updated time: November 26, 2026 7:01 PM

**Source collection:** [deng — Design Engineering](https://deng.theedgar.dev/)
**Reviewed:** 26 November 2026
**Use:** Learning reference for PacketPulse 2.0 design, UX and implementation quality. This is a curated synthesis of linked resources, not an endorsement of every opinion, code snippet or third-party package.

## 1. What the source collection is

DENG curates design engineers and resources across articles, advice, inspiration and videos. Its selected references include Web Interface Guidelines, Developing Taste, 7 Practical Animation Tips, reusable React UI components and Linear's design-project workflow.

## 2. Transferable practices

### A. Treat interface craft as a skill that can be trained

**Source:** [Developing Taste — Emil Kowalski](https://emilkowal.ski/ui/developing-taste)

- Build a curated library of excellent products, interfaces and interactions.
- Study examples deliberately; ask why a design feels effective rather than copying its surface appearance.
- Explain the interaction, hierarchy, feedback, spacing, motion and content decisions that create the effect.
- Practice by producing variants and seek specific critique from peers.
- Build judgement from repeated exposure, analysis, iteration and feedback—not intuition alone.

**PacketPulse application:** Maintain a reviewed inspiration/reference library. For high-impact screens, capture two or three materially different concepts, explain the trade-offs and test them before choosing. Keep source attribution and distinguish inspiration from adopted design.

### B. Validate the problem before designing the requested feature

**Source:** [Manage Design Projects — Linear Method](https://linear.app/method/manage-design-projects)

- First verify that the problem exists and identify the root cause behind a feature request.
- Write a useful project/feature specification before building.
- Create an explicit design-exploration task and explore options without prematurely constraining the work.
- Seek teammate feedback while solutions are still flexible; ask why a reaction occurs.
- Alternate high-level direction feedback with focused feedback on specific details.
- Bring engineers into direction selection to understand feasibility and alternatives.
- Split collaborative work into linked design and engineering tasks, maintaining shared context.

**PacketPulse application:** Use a lightweight sequence: Problem & evidence → brief/spec → explore variants → targeted critique → engineering feasibility → selected direction → implementation handoff → usability/accessibility validation. Do not treat a visual request as proof of the underlying user problem.

### C. Make interaction details reliable and immediate

**Source:** [Web Interface Guidelines — Rauno Freiberg](https://interfaces.rauno.me/)

Useful checks include:

- Labels focus their associated inputs; forms submit by Enter and use appropriate input types and native validation.
- Prevent duplicate form submissions; toggles should respond immediately when that is the expected behaviour.
- Decorative gradients and glows must not intercept pointer events.
- Avoid dead zones between adjacent interactive controls; make the target padding clickable.
- Avoid layout shifts from changing font weight on hover/selection; use tabular numerals for changing numeric values and fluid type sizing where appropriate.
- Show feedback near the action: inline success for copy, field-level feedback for errors, useful empty states with a next action.
- Use server-side authentication redirects to avoid client-side redirect flicker.
- On touch devices, do not rely on hover; use input sizes that avoid iOS zooming and avoid auto-opening the keyboard unexpectedly.
- Icon-only controls need accessible names; focus, keyboard and sequential-list behaviour need explicit design.
- Optimistic updates need rollback and clear feedback on server failure.

**PacketPulse application:** Add these as component and flow QA checks for onboarding, search, resource upload, saved collections, question composer, recruiter workflows, dashboards and account controls.

### D. Use motion to communicate state, not decorate every action

**Sources:** [7 Practical Animation Tips — Emil Kowalski](https://emilkowal.ski/ui/7-practical-animation-tips) and [Web Interface Guidelines](https://interfaces.rauno.me/)

Source-derived heuristics:

- Give immediate feedback to presses and submissions.
- Prefer restrained scale changes; avoid elements appearing from scale zero.
- Delay the first tooltip in a group, then make subsequent tooltips immediate to reduce friction.
- Use easing appropriate to entry/exit and make popovers originate from their trigger.
- Keep common UI transitions quick; the sources give under 200–300 ms as general guidance, not a universal requirement.
- Remove or greatly reduce motion for very frequent actions.
- Pause looping animation and off-screen media when not visible.
- Blur can help bridge a specific state transition, but it is not a default effect and can carry performance cost.

**PacketPulse application:** Adopt frequency-aware motion. Subtle motion can add clarity to occasional drawers, dialogs, onboarding and progress feedback. High-frequency navigation, hover, table, filter and operational controls should remain near-instant. Test reduced-motion, touch, keyboard, low-power and low-bandwidth behaviour.

### E. Use reference components as learning material, not automatic dependencies

**Sources:** [Pasito Stepper](https://joshpuckett.me/pasito) and [Vaul Drawer](https://vaul.emilkowal.ski/)

- Pasito demonstrates a small, themeable, CSS-variable-driven stepper with horizontal/vertical layouts and keyboard/accessibility considerations, including reduced-motion support.
- Vaul is a React drawer reference.
- These examples can inform onboarding, multi-step upload/share flows, assessment progress and contextual child screens.

**PacketPulse application:** Prototype the interaction pattern first. Adopt a package only after checking active maintenance, API compatibility, licensing, accessibility, responsive behaviour, bundle impact and overlap with PacketPulse's existing canonical primitive family. Do not introduce a second drawer/stepper primitive merely because an attractive reference exists.

## 3. Suggested PacketPulse design-engineering workflow

| Stage | Expected output | Review question |
| --- | --- | --- |
| Problem validation | Problem brief, evidence, target user | Are we solving the real problem? |
| Product specification | User outcome, constraints, success measure, edge cases | Is the outcome testable? |
| Exploration | 2–3 differentiated directions for uncertain/high-impact work | Did we explore before narrowing? |
| Critique | Specific feedback on direction and detail | Why does this work or fail? |
| Engineering review | Feasibility, architecture, performance and reuse notes | Can we implement and maintain it well? |
| Design handoff | Selected direction, states, assets, responsive rules, acceptance checks | Is there enough context to build consistently? |
| Validation | Usability, accessibility, responsive, motion and performance evidence | Does it work for real users and devices? |
| Learning loop | Disposition and rationale: retain, refine, restrict or remove | What did we learn and preserve? |

## 4. Proposed additions to PacketPulse QA checklist

These are proposed review checks—not yet owner-approved product requirements:

- [ ]  Every form has correct labels, semantics, keyboard submission, validation and duplicate-submit protection.
- [ ]  Success/error feedback appears beside the triggering action or affected field.
- [ ]  Interactive hit targets have no accidental dead areas; decorative layers never block input.
- [ ]  Hover behaviour has a touch-appropriate alternative.
- [ ]  Icon-only controls have accessible names and keyboard/focus behaviour.
- [ ]  Numeric dashboards use stable/tabular numerals where useful.
- [ ]  Motion is proportionate, interruptible where relevant, frequency-aware and reduced-motion compatible.
- [ ]  Off-screen loops/media are paused; expensive effects are profiled on real devices.
- [ ]  Optimistic UI has explicit rollback/error behaviour.
- [ ]  A design exploration includes rationale and feedback, not only a screenshot or subjective preference.

## 5. Boundaries and cautions

- The linked guidelines are explicitly non-exhaustive and include subjective design heuristics. They supplement, not replace, WCAG, WAI-ARIA, browser behaviour, security review or PacketPulse's existing design system.
- Individual timing values are starting points. Validate by context, device, task frequency, user feedback and performance measurement.
- Some detailed interaction prescriptions (for example particular focus-ring styling or event timing) should not be copied universally; validate semantics and assistive-technology behaviour in the chosen component stack.
- Pasito and Vaul are references for possible prototypes, not approved production dependencies.
- Do not convert this research note into owner-approved decisions without an explicit project decision.

## 6. Source links

- [DENG — Design Engineering collection](https://deng.theedgar.dev/)
- [Web Interface Guidelines — Rauno Freiberg](https://interfaces.rauno.me/)
- [Developing Taste — Emil Kowalski](https://emilkowal.ski/ui/developing-taste)
- [7 Practical Animation Tips — Emil Kowalski](https://emilkowal.ski/ui/7-practical-animation-tips)
- [Manage Design Projects — Linear Method](https://linear.app/method/manage-design-projects)
- [Pasito — stepper component](https://joshpuckett.me/pasito)
- [Vaul — React drawer](https://vaul.emilkowal.ski/)

## 7. Relationship to current PacketPulse documentation

This reference supplements, and does not supersede:

- Product Guide v5.5
- Design System and UX Guide v4.5
- Users, Screens and Page Flows v3.6
- Delivery Plan and Developer Handoff v4.6
- Component Ecosystem, UI Patterns and Library Registry v1.7

The existing product governance, accessibility baseline, component registry and production approval gates remain authoritative.