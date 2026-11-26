# PacketPulse Historical Gaps & Reconciliation Queue

This file records missing or conflicting source details. It is intentionally candid; do not fill a gap with a guess.

## 1. Decision ID collisions: DEC-035 to DEC-037

The 24 Oct Product Guide v4.2 assigned:
- DEC-035: dark theme colour-system refinement (Color System 1.2).
- DEC-036: contextual module/section identity; deep teal scoped to Community.
- DEC-037: light-theme section identity and neutral global canvas.

Later November Product Guide versions reused DEC-035/036/037 for Editorial/Analytical workspaces, Matte Black, and whitespace. Both source tables are preserved in `governance/DECISION_REGISTER.md` and the exact documents are in `history/releases/`.

**Resolution required:** owner-reviewed ID crosswalk/migration. Do not silently alter archived source files or cite a bare DEC-035 without its date/version.

## 2. Missing DEC-050 to DEC-053 descriptions

The 25 Nov changelog states that DEC-048 through DEC-053 were added. The available latest Product Guide includes DEC-048 and DEC-049, then resumes at DEC-054. It explicitly notes that DEC-050 to DEC-053 descriptions were not preserved.

**Resolution required:** recover the original conversation/export/source file. Until then, keep all four IDs reserved and do not assign meanings.

## 3. Tailwind CSS CDN owner instruction versus production recommendation

The owner explicitly requested Tailwind CSS with CDN for styles. A later assistant technical recommendation described Tailwind Play CDN as prototype-only and build-time compilation for production Next.js. The 26 Nov handoff includes the narrower recommendation, but it should not be rewritten as an owner-approved decision without review.

**Resolution required:** owner/engineering decision on whether CDN is strictly for prototypes or whether another CDN delivery method is intended for production. Preserve the original owner wording and the assistant recommendation separately.

## 4. Palette authority and Matte Black scope

24 Oct Color System 1.2 and its token CSS are the historical approved baseline. Matte Black palette values and broader accent combinations were introduced as prototype references. The 26 Nov owner clarified that pattern overlays must not change existing backgrounds.

**Resolution:** treat Matte Black and expanded pattern colourways as Approved Prototype exploration; do not replace original global tokens or backgrounds without a distinct decision.

## 5. Pantone references

The owner invited Pantone colour exploration, but specific official Pantone identifiers/conversions have not been established in the source package.

**Resolution required:** use official Pantone references and document edition/surface/coated/uncoated and digital conversion where needed. Do not invent Pantone names or codes.

## 6. Cross-chat coverage

The user requested all discussions from the latest three days. The workspace provided these ZIPs and current conversation context, but not separate transcripts for every independent chat in the date window.

**Resolution:** mark the missing chats as not available; add them if exported or uploaded. Do not infer their contents from a title or a one-line memory.

## 7. Implementation status

Documentation and prototype approval do not prove package installation or production implementation. Repository access checks showed `packetpulse-community/packetpulse-site` was readable but the connected account had `push:false` and `admin:false`. The GitHub toolset did not expose repository creation.

**Resolution:** create a separate docs repository under an owner-controlled organisation and grant write permission, or maintain this standalone documentation directory until then. No writes were made to the product repository.

## 8. Technical source recency

Media player releases, provider adapters, licences and package compatibility can change. The 26 Nov technical source register is a dated research snapshot, not a permanent guarantee.

**Resolution:** re-check exact package versions, licences, provider adapters, browser compatibility, codec/DRM needs, security advisories and backend support at implementation time.
