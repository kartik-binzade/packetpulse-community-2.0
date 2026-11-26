# Claude Handoff — PacketPulse 2.0 Approved Prototype Review Build (25 November 2026)

You may have received the previous October 2026 documents and the 24 November update. **Replace those as your active specification with the five canonical documents in this package.** Read them in order. This update authorises the approved prototype scope below for the next review build.

## 1. Owner decisions you must follow

- All previously open-for-approval product/design items are now **Approved Prototype**. Include them in the next review build.
- This is not production approval. Use mock/sandbox/disabled states for unconfigured integrations or legally/security sensitive actions.
- Be open, creative and experimental with UI patterns, components, colours, layouts, imagery, typography and motion. Do not prematurely reject an idea. Keep Signal Grove as the coherent brand foundation, but explore variants and record the hypothesis.
- Preserve whitespace, visual rhythm and emotional quality. Comfortable density is default; Compact is contextual; Reading is for long-form content.
- Matte Black is the preferred analytical/dark dashboard direction, not a forced global theme. Keep a fully designed light counterpart.
- Profile and Account are separate product destinations. Profile is professional/community identity; Account is the member's control centre.
- Automated skill verification remains in scope for controlled experiments with flags, versioned policies, evidence, audit, appeals, fallback and review windows.

## 2. What to prototype in this review build

- Community Resources: discovery library, detail/reader, share wizard with upload lifecycle, saved resources/collections, resource review queue.
- Signup: split desktop / focused mobile layout, email/password/passkey and prototype Google/GitHub options; do not fake a real provider authentication.
- Personalised onboarding: Role → Interests → Goals; skip optional steps and allow edits later.
- Professional profile: identity hero, skills with distinct verification labels, experience, education/certifications, contributions, learning, mentoring and activity.
- Visibility preview: self, community and recruiter-after-forwarding; must reflect real server visibility rules, even in demo data.
- Account Control Centre: personal information, notifications, security/sessions, connected accounts, privacy/data rights and billing where applicable.
- Optional profile completeness assistant and identity activity timeline; make them dismissible and member-controlled.

## 3. Critical implementation rules

1. First inspect the repository, package manifest, lockfile, routes, API, auth, storage and current component implementations (TASK-001 / DEV-01 to DEV-11).
2. Do not replace or duplicate the existing component/primitive stack just because a library is listed. Use the source-library registry; verify version, licence, maintenance, compatibility, accessibility and bundle impact.
3. Tailwind CSS v4 is the styling standard. CDN is for disposable prototypes only; production Next.js uses compiled Tailwind.
4. Use PacketPulse-owned wrappers/tokens. shadcn/ui is the preferred foundation; BoardUI, Bencho, Beautiful UI, Ingot UI and Transitions are approved prototype sources, not mandates to install entire libraries.
5. Motion should acknowledge actions, communicate state or clarify spatial relationships. Respect reduced motion. No fake upload progress, pulsing urgency, or decorative movement that slows tasks.
6. Profile visibility preview must use the same server-side field-level rules as actual access. Client-side hiding is not security.
7. Resource uploads remain private until validation/scanning and review rules allow publication. Store source, attribution and licence. Do not show raw storage keys.
8. Do not process real payments or send production notification/WhatsApp traffic in the prototype without the proper sandbox/configuration and approvals.
9. All member data, connected accounts, security settings and deletion operations must follow permissions, consent, audit and step-up requirements.
10. A document saying Approved Prototype does not mean production implementation. Mark implementation Done only with repository evidence and passing tests.

## 4. Review process

Create a reviewable flow with realistic example data. When a provider/backend integration is not ready, show a clear demo state and record the gap. Capture design/UX, accessibility, responsive, performance, privacy and operational feedback. At the next build boundary, each experiment receives Retain, Refine, Restrict or Remove, with evidence in CHANGELOG.md.

## 5. Deliverables

- Updated five canonical documents and traceability IDs.
- Review-build screen set mapped to SCR-054–SCR-063 and WF-017–WF-019.
- Component registry additions PP-RES, PP-ID and PP-ACC.
- Reusable component catalogue/playground using the repository's existing tool or Storybook if appropriate.
- Updated visual regression/accessibility checks for high-priority states.
- Implementation report showing what is prototype-only, integrated, blocked or production-ready.

Start with repository audit and a screen/component inventory. Then implement the shared foundation and the Resource/Identity review flows in a reversible manner.
