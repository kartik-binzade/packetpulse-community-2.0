# PacketPulse 2.0 — Technical Source Register (26 November 2026)

This register records official references consulted for the media, upload and file-preview recommendations. It is not a package lockfile or proof of installation. All visual direction remains exploratory; media candidates are subject to repository, compatibility, security and licence review.

| Topic | Source | Finding used in this update |
|---|---|---|
| Video.js 10 release | https://videojs.org/blog/videojs-10 | Video.js 10 GA on 1 Oct 2026; first-class React/TypeScript/Tailwind patterns; modular player; source types/services include HLS, DASH, YouTube, Vimeo, Mux and Cloudflare Stream |
| Video.js current changelog | https://videojs.org/changelog | v10.7.0 listed 24 Nov 2026; use this as researched version at document date, then re-check at implementation |
| Video.js React install | https://videojs.org/docs/guides/installation/react | Current React install guide shows `@videojs/react@10.7.0`; built-in presets for video/audio/live and selectable player skins |
| Video.js media sources | https://videojs.org/docs/framework/react/guides/media-sources | Media source adapters/engines selected by source; official guide documents HLS, DASH and supported provider components |
| Video.js HTML install / source selection | https://videojs.org/docs/guides/installation/html | Shows direct HTML5 media, HLS, DASH and provider integration selections/adapters |
| Video.js HLS/DASH streaming | https://github.com/videojs/http-streaming | HTTP Streaming project supports HLS and MPEG-DASH within Video.js; verify adapter packages per version |
| Shaka Player | https://github.com/shaka-project/shaka-player | Open-source JavaScript adaptive streaming library for DASH/HLS; supports MSE/EME and offline storage capabilities |
| Uppy docs | https://uppy.io/docs/ | Modular browser uploader; MIT-licensed per current docs |
| Uppy React | https://uppy.io/docs/react/ | React components, headless components and hooks; headless route suits custom PacketPulse UI |
| Uppy Tus | https://uppy.io/docs/tus/ | Tus integration provides resumable upload |
| Tus server | https://tus.github.io/tusd/ | Reference server supports storage integrations and is MIT licensed |
| React-PDF | https://github.com/wojtekmaj/react-pdf | MIT React wrapper for displaying existing PDFs; based on PDF.js |
| WaveSurfer.js | https://wavesurfer.pages.dev/docs/ · https://www.npmjs.com/package/wavesurfer.js | Audio waveform visualisation/player; package 8.1.0, BSD-3-Clause; supports Regions, Timeline, Hover, Record and Spectrogram plugins. Streaming/large files can use pre-decoded peak data |
| ONLYOFFICE Community licence | https://helpcenter.onlyoffice.com/docs/installation/community/faq | AGPLv3 has network/SaaS source obligations; commercial licence is the alternative for proprietary SaaS |
| FFmpeg legal | https://ffmpeg.org/legal.html | Default LGPL v2.1+ with optional GPL components; build flags/codecs and patent exposure need review |

## Selection note

For new React work, Video.js 10 is the default player candidate; external embedded content should still use provider-specific adapters/SDKs or a safe wrapper rather than forcing every external source into one universal iframe. WaveSurfer.js is an optional audio waveform/timeline layer for audio-only content, not a replacement player. Uppy/Tus handles the upload interaction/transport, while PDF.js/React-PDF handles PDF documents. There is no single viewer for every file type; use a type-aware resolver and secure fallbacks.

## Implementation cautions

- Verify each package's exact current version, React/Next compatibility, dependency graph, CVEs, licence and maintenance at install time.
- Video.js 10 uses new package names and architecture; it is not a drop-in upgrade from legacy v8. Official React guide currently installs `@videojs/react@10.7.0`; the package `video.js` is not the React v10 package.
- WaveSurfer is an optional audio visualisation layer, not the primary player for all media. For streamed or very large audio, use pre-decoded peaks and preserve a conventional audio-control fallback.
- HLS/DASH engines are modular adapters. Install only the adapters used.
- Use provider allow-lists and CSP; do not accept raw user iframe/HTML.
- Office document embedding is a licensing and security decision; do not assume AGPL Community components can be embedded into a proprietary hosted product without obligations.
- FFmpeg build options can change licensing; distribution/commercial use may also raise codec patent questions.
