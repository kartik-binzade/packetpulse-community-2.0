# PacketPulse 2.0 — Component Ecosystem & Library Registry (26 Nov 2026)

> **Notion capture type:** structured companion summary and navigation; not the complete verbatim source.
> 

# Component Ecosystem, UI Patterns and Library Registry

## Governance

PacketPulse owns a curated component registry. For every adopted component record source, version, license, accessibility, responsive behaviour, motion, token conformance, variants, documentation and tests. Avoid importing entire libraries; adopt selectively and keep one canonical component per primitive family.

## UI foundations

- shadcn/ui: primary source-owned base.
- Ingot UI, BoardUI, Beautiful UI and other reference libraries: selective patterns, not blanket dependency adoption.
- Choose Radix OR Base UI consistently within a primitive family; avoid duplicated primitives.
- Tailwind v4 is the recorded direction; Tailwind CDN/Play CDN remains prototype-only rather than production delivery.
- Lucide, Simple Icons, Recharts, TanStack Table and Tiptap are in the ecosystem shortlist; verify exact versions and compatibility during implementation.

## Media and files

- Video.js React integration (source research cited 10.7.0 on 26 Nov) is the general player candidate.
- Shaka is a specialist option for adaptive/offline/DRM scenarios.
- Uppy React + Tus for resumable uploads; React-PDF for PDF viewing.
- Office documents require secure conversion/provider review; ONLYOFFICE AGPL implications need legal review.
- WaveSurfer is optional for waveform UI; retain standard accessible audio controls.
- FFmpeg server-side processing is an optional evaluated capability, subject to codec, patent and license review.
- Embeds are provider-specific and allowlisted; never accept arbitrary iframe or HTML.

## Security/accessibility controls

CSP, sandbox, permissions/origin validation, SSRF controls, signed URLs, MIME/signature checks, malware scanning, consent and privacy safeguards. Provide captions/transcripts, keyboard access, reduced-motion and error/fallback states.

## Registry workflow

Evaluate → verify provenance/license → test accessibility/responsiveness → wrap with PacketPulse tokens → document → add tests → approve for a defined use. Research version notes are not installation claims; revalidate versions, licenses and browser support before adoption.