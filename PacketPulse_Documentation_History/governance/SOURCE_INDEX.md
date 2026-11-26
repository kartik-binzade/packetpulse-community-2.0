# PacketPulse Source Index & Coverage Register

**Index date:** 26 November 2026  
**Purpose:** Record which project files were actually available and preserved. This prevents summaries or filenames from being mistaken for inspected evidence.

## 1. Original source packages preserved

The exact ZIPs are under `history/source-packages/`.

| Source package | Date | Use |
|---|---|---|
| `PacketPulse_2.0_Team_Documentation_v1.3_2026-10-24.zip` | 24 Oct | Original baseline: five docs, Color System 1.2, source CSS, contrast report, previews and overview board |
| `PacketPulse_2.0_Update_2026-11-24.zip` | 24 Nov | Update set 5.0, workspace and design-system evolution |
| `PacketPulse_2.0_Discussion_2026-11-25.zip` | 25 Nov | Discussion record, five docs and initial reference set |
| `PacketPulse_2.0_Approved_Prototype_Review_Build_2026-11-25.zip` | 25 Nov | Approved Prototype scope, Resources/Identity designs and component ecosystem |
| `PacketPulse_2.0_Approved_Prototype_Review_Build_2026-11-26.zip` | 26 Nov | Latest five canonical documents, review register, media/nested UX, patterns and technical source register |
| `PacketPulse_2.0_Recovery_Pages_Design_System_Package.zip` | Source supplied in project | Recovery-page/design-system reference package |

## 2. Exact extracted snapshots

Each source ZIP above has been extracted without editing under `history/releases/`. The extracted copy is for search/navigation; the raw ZIP remains the byte-level source.

## 3. Current canonical files

The `current/` directory is sourced from the 26 Nov Approved Prototype Review Build. It contains five current documents and its handoff/change-log helper files. It is not a proof that code has been implemented.

## 4. Discussion records

Available discussion records are in `discussions/` and in the dated release snapshots. They cover the 25 Nov design discussions (visual inspiration, Community, Resources, Identity) and 26 Nov discussions (media, nested UX, brand patterns, creative direction, project history governance).

## 5. Design and reference assets

- `design/tokens/history/2026-10-24/` — original CSS tokens.
- `design/tokens/experiments/2026-11-26/` — latest experimental colour-system PDF.
- `design/brand-patterns/` — SVG starter patterns, manifest, colourway CSS and previews.
- `design/references/ui-inspiration/` — reference images from the 25 Nov source package.
- `design/references/generated-concepts/` — generated visual concepts used as design references, not production assets.
- `design/references/user-supplied/` — original uploaded visual references.

## 6. Source checksums

`SOURCE_CHECKSUMS.sha256` at the repository root lists SHA-256 hashes for the raw source ZIPs. `HISTORICAL_FILES.sha256` lists extracted historical files. Regenerate the appropriate manifest when adding a new source package; do not rewrite historical package files.

## 7. Coverage boundaries

The project context available for this consolidation includes the 24 Oct, 24–26 Nov ZIPs/files and the current project conversation. The user asked to include discussions from the recent three days; separate independent chat transcripts that were not supplied in the workspace are not claimed as reviewed. When new transcripts are provided, add them as source files, extract their decisions and append a new dated discussion record.
