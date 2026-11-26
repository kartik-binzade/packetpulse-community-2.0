# PacketPulse Project Evolution & Memory System

**Status:** Owner-confirmed operating model, 26 November 2026  
**Scope:** All PacketPulse project documentation, discussions, design systems, tokens, components and implementation handoffs from 24 October 2026 onward.

## 1. Governing principle

**Evolve without losing memory.** Product strategy, UI, UX, colours, components and technology choices may improve or change. A new direction must not erase the actual earlier plan, the reasons behind it or the evidence available at the time.

Older designs can be revisited. Rejected experiments can become useful again. A superseded workflow may explain a future decision. No meaningful historical content should disappear merely because a newer document exists.

## 2. Three connected layers

### Layer A — Current canonical documentation

The five documents in `current/` describe the present product direction and review-build scope. They are the practical source of truth for current work, but they do not replace the historical record.

### Layer B — Historical releases and discussions

`history/releases/` retains exact extracted snapshots from the source packages. `history/source-packages/` retains the original ZIP files. `discussions/` retains the actual discussion records supplied or created from available conversation context.

Historical snapshots are immutable. If a correction is needed, create a new snapshot or a clearly labelled transcription/correction note; do not silently edit the old file.

### Layer C — Project memory and traceability

`governance/` connects discussions, decisions, requirements, design tokens, UI components, source libraries, implementation tasks, tests and review outcomes.

The Master Change Log records events. The Decision Register records decision state and lineage. Token History records design values and experiments. The Source Index records what evidence is available. The Historical Gaps file makes missing evidence visible.

## 3. Preserve actual prior content

For every canonical document revision:

1. Preserve the exact original file (MD/DOCX/PDF where available) in the dated release snapshot.
2. Record its original filename, version, source package, date and checksum.
3. Add a section-by-section change map to the new version.
4. For materially changed requirements, preserve the previous wording or provide an exact source path and section reference.
5. Record why the change happened and which discussion/decision authorised it.
6. Record what was removed, superseded, deferred or retained for possible reuse.

A summary alone is not sufficient when the original wording is available. Do not compress old content into a paraphrase and discard the original.

## 4. Conversation capture

Conversation context is a project source, not disposable chat. After each substantial discussion, capture:

- Date and discussion title.
- Owner statements and corrections, as close to exact wording as practicable.
- Assistant suggestions, explicitly labelled as suggestions.
- Alternatives considered.
- Final owner direction and unresolved points.
- Affected product requirements, screens, tokens, components and developer tasks.
- Related decision IDs and change-log event ID.
- Review status and next action.

Do not claim that other project chats were reviewed unless their transcripts or exported records were actually available. Use the coverage boundary in `HISTORICAL_GAPS.md`.

## 5. Decision identity and collision policy

Decision IDs are permanent and must never be recycled. The 24 October baseline uses DEC-001 through DEC-037. Later source documents reuse DEC-035, DEC-036 and DEC-037 for different meanings. The latest Product Guide also records DEC-048/049 and DEC-054–061, while descriptions for DEC-050–053 are missing from the available source package.

To preserve source fidelity without hiding collisions:

- Keep each original `DEC-###` exactly as it appeared in its source snapshot.
- Use a unique history key in the central register: `HDEC-YYYY-MM-DD-SOURCEID`.
- Always include the source version/date when citing a legacy DEC number.
- Do not silently renumber legacy documents. A future migration must include an explicit crosswalk and be reviewed by the owner.
- Keep DEC-050–053 reserved as unrecovered until original evidence is found.
- New decisions should use the next unused global ID only after the collision map is reviewed and the owner confirms the numbering scheme.

## 6. Design token history

Track design tokens independently from the current palette document. For each meaningful token change, record:

- Token key and semantic role.
- Original value, experimental value and current value (if approved).
- Theme, module and component scope.
- Source file and version.
- Owner/decision origin.
- Contrast/accessibility evidence where relevant.
- Date introduced, superseded or restored.

The 24 October Color System 1.2 PDF and CSS are preserved as the historical approved baseline. Later Matte Black values, new accent combinations, gradients, Pantone studies and pattern colourways remain experimental/review-build directions unless separately production-approved. Never present a prototype palette as the original approved palette.

## 7. Change classification

Every significant update must identify its authority:

- **Owner-confirmed:** Explicit direction from the product owner.
- **Team-confirmed:** Recorded approval from the project team.
- **Assistant recommendation:** Suggested approach; not owner approval.
- **Technical research:** Verified source findings with research date.
- **Prototype observation:** Learned from a visual/interactive prototype.
- **Implementation result:** Verified in repository, build or test evidence.

Statuses are separate from authority. `Approved Prototype` means include in a review build and evaluate; it does not mean production-approved, legally cleared, installed or implemented.

## 8. Prototype review lifecycle

Use the sequence:

`Proposed → Approved Prototype → In Prototype → Ready for Review → Retain / Refine / Restrict / Remove → Production Approved (where applicable) → Implemented (verified)`

A team review window should capture feedback, usability evidence, security and accessibility findings, technical compatibility, and a next-build disposition. Keep prior prototype versions and their feedback.

## 9. Before-and-after documentation workflow

**Before creating a new deliverable:** present an updated project-context summary for the owner to read. Include recent discussions, current decisions, conflicts, token status, source coverage and what will change. Do not generate the new package until the owner has had a chance to review the summary.

**After the owner approves:** update the five canonical documents, master changelog, discussion record, decision register, token history, approval register, source index, screen/API/data traceability and historical snapshot together.

**At release:** create a dated snapshot, checksum manifest, Git commit and (where useful) ZIP handoff. Keep a separate docs-only repository or directory rather than making the product source repository the only home of project history.

## 10. Git and release discipline

- Use Git for all canonical docs and governance changes.
- Commit each coherent documentation update with a descriptive message.
- Tag historical snapshots (for example `docs-baseline-2026-10-24`, `prototype-review-2026-11-26`).
- Never rewrite published history; use follow-up commits.
- Keep source ZIPs and checksum manifests for imported artifacts.
- Generate handoff ZIPs from a known commit.

## 11. Repository and access status on 26 November 2026

The connected GitHub account could read `packetpulse-community/packetpulse-site`, but the repository metadata reported `push: false` and `admin: false`. The available GitHub integration actions did not provide a repository-creation operation. Therefore no GitHub repository or product-repository directory was written. A separate Git-initialised documentation directory was prepared as the fallback, ready to push after a repository owner creates `packetpulse-docs` and grants write access.

## 12. Quality gates

Before publishing a new docs package, check:

- Current documents match each other on IDs, screen names, APIs, data entities and statuses.
- Historical files are byte-for-byte unchanged from the source package.
- All source files have a path, checksum and date in the source index.
- Duplicate decision IDs are explicitly cross-referenced.
- Missing source content remains marked unrecovered.
- No assistant recommendation is presented as an owner decision.
- Token authority and prototype status are unambiguous.
- The discussion context behind significant changes is linked.
- The package can be opened and read independently by a new team member or coding agent.
