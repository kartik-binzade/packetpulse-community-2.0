# PacketPulse Documentation & Project Memory

**Workspace:** PacketPulse 2.0  
**Created:** 26 November 2026  
**Purpose:** A documentation-only companion workspace. It keeps the current canonical documents separate from immutable historical snapshots, discussions, design/token history and project governance.

## Why this exists

PacketPulse decisions evolve. A newer strategy must not erase the context, original wording, token values, design explorations or rationale behind earlier versions. This directory preserves the source files and creates cross-links between conversations, decisions, documentation, design tokens, components and review outcomes.

## Current canonical documents

The `current/` directory contains the five current canonical documents from the 26 November 2026 Approved Prototype Review Build:

1. Product Guide — v5.5
2. Design System and UX Guide — v4.5
3. Users, Screens and Page Flows — v3.6
4. Delivery Plan and Developer Handoff — v4.6
5. Component Ecosystem, UI Patterns and Library Registry — v1.7

The exact source versions are preserved unmodified under `history/releases/2026-11-26-approved-prototype-review-build/`. The `current/` copies may receive documentation-governance appendices; historical snapshots never change.

## Project memory layers

- **Current:** what PacketPulse is meant to be now.
- **History:** exact source versions and discussion records, retained as snapshots.
- **Governance:** master change log, decision register, token history, source index and review records.

Read `governance/PROJECT_EVOLUTION_AND_MEMORY.md` before editing project documentation.

## Important historical rules

- Never overwrite a historical release snapshot.
- Never recycle a decision ID.
- Preserve the actual previous wording and source files, not only a summary.
- Distinguish owner-confirmed decisions from assistant recommendations, technical research and prototype observations.
- `Approved Prototype` means include it for review; it does not mean production approved or implemented.
- Mark gaps as unrecovered instead of guessing.
- A conversation is not part of the permanent project record until its decisions and rationale are entered in the master changelog and a discussion record.

## Suggested reading order

1. `README.md`
2. `governance/PROJECT_EVOLUTION_AND_MEMORY.md`
3. `governance/MASTER_CHANGELOG.md`
4. `governance/DECISION_REGISTER.md`
5. `governance/TOKEN_HISTORY.md`
6. `governance/SOURCE_INDEX.md` and `governance/HISTORICAL_GAPS.md`
7. The five documents in `current/`
8. The relevant discussion record(s)

## Repository status

This is a standalone documentation workspace prepared locally because the connected GitHub account could read `packetpulse-community/packetpulse-site` but did not have `push` or `admin` permission, and the available GitHub actions did not expose repository creation. No write was made to the product repository. The directory is Git-initialised and ready to push to a separate repository such as `packetpulse-community/packetpulse-docs` after an owner creates that repository and grants write access.

## Suggested GitHub setup

Create a separate repository named `packetpulse-docs` under the PacketPulse organisation. Then:

```bash
git remote add origin https://github.com/packetpulse-community/packetpulse-docs.git
git push -u origin main
```

Do not add this documentation history to the product application repo unless the team deliberately chooses a monorepo documentation model.
