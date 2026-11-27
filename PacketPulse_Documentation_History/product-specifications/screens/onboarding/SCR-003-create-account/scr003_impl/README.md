# SCR-003 frontend implementation starter

This is a **component-level implementation starter**, not a production-ready auth feature. The shared project attachments contain the approved design/spec packages but not the live PacketPulse application source. The authenticated GitHub connector also returned no accessible repositories in this session, so the component has not been integrated into the actual route or backend.

## Included
- `Scr003Join.tsx`: three-stage responsive client UI (account → verify → experience)
- `scr003-join.css`: Signal Grove styles, dark mode, responsive layout and optional SVG illustration area
- `scr003-contract.ts`: typed adapter boundary for the existing auth service

## Integration
1. Inspect the real repository route, auth provider/service, DB schema, validation conventions and test setup.
2. Map the adapter to existing register/verify/resend/change-email/save-track methods. Do not create parallel auth endpoints or duplicate models.
3. Install this component at the existing `/join` route; configure the project's `@/` alias or adjust imports.
4. Replace the inline placeholder constellation with the approved `PP-PAT-002-node-constellation.svg` asset from the design package. Use the real logo asset if available.
5. Add the planned change-email interaction and backend-driven resend cooldown/attempt state using actual auth service responses.
6. Verify DOB on the server using date-only calendar logic. Client check is only UX feedback. Apply OPEN-20 counsel approval before production.
7. Ensure terms/privacy links and policy version point to the approved live documents.
8. Add tests using the repository's test framework; the package intentionally does not invent a framework or app dependencies.

## Important security boundary
The adapter must perform real server-side verification, expiry, attempt/resend limits, anti-enumeration, session handling, DOB privacy, consent recording and authorization. Never treat client state or this component's UI as security enforcement. The component does not store codes or credentials beyond controlled form state and does not claim account creation itself.

## Acceptance test checklist
- [ ] 18th birthday today accepted; day before rejected; leap-day logic reviewed for the policy jurisdiction
- [ ] Terms unchecked blocks submission
- [ ] Server rejects under-18 registration and does not create a member profile
- [ ] Register failure retains safe fields and does not reveal account existence
- [ ] OTP accepts paste/autofill; server enforces expiry, retries and resend throttle
- [ ] Email change invalidates old challenge
- [ ] DOB absent from recruiter API responses and analytics
- [ ] Track persists without granting RBAC permissions
- [ ] Keyboard/focus/error announcement, mobile 320px, zoom and reduced motion verified
