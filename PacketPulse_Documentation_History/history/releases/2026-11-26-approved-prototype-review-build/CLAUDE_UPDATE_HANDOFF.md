# Claude Handoff — PacketPulse 2.0 Review Build 5.7 (26 November 2026)

## Read order

1. `README.md` and `UPDATE_SUMMARY.md`.
2. `APPROVED_PROTOTYPE_REVIEW_REGISTER.md`.
3. Documents 1–5, in order.
4. Discussion Record — Visual Inspiration, Component Ecosystem and Design Exploration (25 Nov).
5. Discussion Record — Resources and Identity Experiences (25 Nov).
6. Discussion Record — Media, Nested UX and Brand Patterns (26 Nov).
7. Discussion Record — Open Creative Direction and Pattern Overlays (26 Nov).
8. `TECHNICAL_SOURCE_REGISTER.md` and `references/`.
9. `PacketPulse_2.0_Design_Color_System_v3.pdf`.
10. `PacketPulse_2.0_Media_Nested_UX_and_Brand_Pattern_Reference_v2.pdf`.

## Owner directions

- Be open, creative and experimental. The design system is a living language, not a rigid set of aesthetics.
- Explore the full colour token system and additional colour combinations/Pantone references when useful. Do not force all patterns to green.
- Keep existing backgrounds unchanged when adding brand patterns. Patterns are transparent overlays.
- All prior open-for-approval concepts are Approved Prototype for the review build. Do not reject a feature merely because it is ambitious; implement safely in mock/sandbox/feature-flagged form and collect feedback.
- The next-build decision is Retain, Refine, Restrict or Remove. Production approval is separate.

## New review-build scope

- Resources library/detail/share/saved/review flows.
- Signup, onboarding, profile, visibility preview and Account Control Centre.
- Recording/media player and transcript/caption/chapter experience.
- Type-aware previews and robust upload/processing manager.
- Parent-child navigation and state restoration across nested screens.
- Transparent pattern families: packet routes, nodes, waves, pulse trails, radar, secure layers, data flow and matrices, plus new ideas.

## Preferred media candidates

- Video.js 10 React (`@videojs/react`); current research 10.7.0 as of 26 Nov 2026. Use only required adapters.
- Shaka Player only if advanced adaptive/offline/EME capabilities are required.
- Uppy React headless/hooks with Tus where the backend supports resumable upload.
- React-PDF/PDF.js for PDF; optional WaveSurfer.js 8.1.0 for audio-only waveform/timeline. Office preview requires secure conversion or separately licensed editor; assess ONLYOFFICE AGPLv3 before SaaS use.
- FFmpeg may support server-side processing but its build/codec licence and patent obligations must be reviewed.

## Implementation instructions

1. Audit the repository, existing packages, route structure, storage, auth/permissions, upload services, tests, CSP and deployment constraints before package installation.
2. Inspect and adapt existing shared components; do not create duplicate button/dialog/player/alert systems.
3. Implement the nested route model with URL-based durable state and focus/scroll restoration. Avoid modal-on-modal.
4. Build a `MediaResource` resolver using server-validated source metadata, not untrusted file extensions/HTML.
5. Use provider allow-lists, CSP, signed URLs, file signature validation, scanning, isolated processing, SSRF protections and server-side access checks.
6. Build player skin and upload UI as PacketPulse-owned components. Treat library styles as source material, not brand identity.
7. Include pattern overlays as transparent inline SVG/React assets. Never repaint the current background solely to apply a motif. Use `references/brand-patterns/pattern-colourways.css` as optional experimental colourway starting points; create more combinations as useful.
8. Test light, dark and Matte Black; varied colours; responsive layouts; keyboard/screen reader; reduced motion; captions/transcripts; media fallbacks and failed uploads.
9. Do not mark a package as installed or a screen as implemented until repository changes and tests prove it.
10. Update all five documents, changelog and source registry as implementation evolves.

## Recent chat coverage

The request is to include other PacketPulse chats from 24–26 Nov 2026. This package includes the current project discussion and the available 24–25 Nov project handoff files. Independent chat transcripts not present in the workspace were not available. Do not claim other separate chats were read. Ask the owner to supply any missing transcript exports before asserting full cross-chat coverage.


## Updated owner direction (26 Nov 2026)

- Do not treat the design system as a rigid aesthetic constraint. Explore new colourways, patterns, typography, layouts and motion when they improve the experience.
- Do not change existing backgrounds merely to apply a pattern. Use optional transparent overlays.
- Use Video.js 10 as the general React media player candidate; consider WaveSurfer.js only for optional audio waveform visuals. Use Uppy/Tus for uploads and React-PDF for PDFs.
- Verify all package versions, source/provider adapters, browser support and licences against the actual repository before installation.

- Preserve API-061 to API-068 for Resources/Identity; use API-069 to API-077 only for media and nested media workflows. Keep DB-041 to DB-050 and DB-051 to DB-056 in sequence.


## Owner clarification — 26 November 2026

Creative freedom is intentional. Do not treat sample palettes, pattern families, layout families, component libraries or animation recipes as exhaustive or immutable. Explore fresh colourways, combinations, gradients, Pantone-referenced studies, typography, waves/pulses, network/security geometry, new components and expressive compositions. The current pattern request is for transparent reusable overlays; do not change existing page/card backgrounds just to apply them. Keep usability, readability, accessibility, performance, security and licence checks intact. Prototype variants and review them rather than rejecting ambitious ideas in advance.

Use optional WaveSurfer.js for audio-only waveform/timeline enhancement when useful; it complements Video.js and must not remove the conventional audio fallback. Preserve Resources/Identity API-061..068; media API-069..077.


## Open creative direction (owner-confirmed)

Treat visual rules, colours, pattern names, component libraries and motion recipes as guidance and starting points—not a closed system. Explore broadly and improve the experience. For the current brand-pattern task, only design reusable transparent overlays; do not alter existing backgrounds. Use the full palette and new colourways, including waves and pulses. Keep experience, accessibility, security, performance and licensing checks intact.


## Explicit latest clarification

The user asked for open creative exploration, not fixed design laws. Existing background surfaces must remain unchanged for this pattern task; add reusable transparent overlays only. Use broad brand/module/semantic/experimental colour options, including waves and pulses. These design choices are approved for the prototype review build, not locked for production.
