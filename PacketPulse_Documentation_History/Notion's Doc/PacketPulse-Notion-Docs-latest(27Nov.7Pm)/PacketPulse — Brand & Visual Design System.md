# PacketPulse — Brand & Visual Design System

Created by: Kartik B | 1000110
Created time: November 26, 2026 12:50 PM
Category: Planning, Proposal
Last edited by: Kartik B | 1000110
Last updated time: November 27, 2026 5:07 PM

Status: Working design direction for review. This document describes a coherent starting system; it does not claim that final logo artwork, colours, or UI components have already been approved.

## 1. Brand idea

PacketPulse is where networking knowledge becomes practical and people connect through shared skills.

The visual identity should communicate:

- Network knowledge and technical clarity.
- People, learning, and professional connections.
- Practical confidence rather than hype.
- A modern engineering community, not a generic training institute.

## 2. Visual direction

**Recommended direction: premium editorial + technical minimal.**

Use a calm, structured interface with strong typography, clean spacing, precise diagrams, and a restrained network-node motif. The design should feel useful and credible before it feels decorative.

Avoid:

- Generic neon cybersecurity visuals.
- Random circuit-board backgrounds and stock photos of server racks.
- Excessive gradients, glowing effects, and ornamental icons.
- Dense cards that make every section compete for attention.
- Unverified “certified” or “verified” claims.

## 3. Core visual motif — connected nodes

Use a small set of dots, lines, and paths to represent:

- People connected through the community.
- Topics connected in a learning path.
- Branches and links in a network diagram.
- Skills linked to roles and opportunities.

The motif should be subtle and purposeful. It can appear in section dividers, diagrams, empty states, badges, and selected hero artwork. It should not become a repeated decorative wallpaper.

## 4. Colour system — proposed starting palette

These values are suggestions for exploration, not an approved final brand palette.

| Token | Proposed value | Use |
| --- | --- | --- |
| Ink | #17212B | Main text and dark surfaces |
| Paper | #F6F7F5 | Main light canvas |
| White | #FFFFFF | Cards and content surfaces |
| Network Blue | #356AE6 | Primary actions, links, active states |
| Signal Teal | #18A6A6 | Secondary highlights and connected-node details |
| Muted Slate | #697586 | Secondary text and metadata |
| Border | #DCE1E6 | Dividers and card outlines |
| Success | #21865B | Completed states |
| Warning | #B7791F | Caution and pending states |

Use one strong accent per screen or visual. Maintain readable contrast; never rely on colour alone to communicate status.

## 5. Typography — proposed system

- **Primary UI typeface:** Inter or a similar highly readable sans-serif.
- **Display / editorial headings:** Manrope or the same family in a heavier weight.
- **Technical labels and code:** a legible monospace family.

Use a clear hierarchy: one page title, concise section headings, readable body text, and smaller metadata. Avoid using too many font families or weights.

## 6. Layout and component rules

- Use a consistent spacing scale based on 4 or 8 px increments.
- Align content to a clear grid and keep text line lengths comfortable.
- Use generous whitespace around headings and diagrams.
- Cards should have a clear purpose, a concise title, a short description, and one obvious action.
- Use borders and subtle surface changes before heavy shadows.
- Keep navigation predictable and mobile layouts simple.

### Core components to design

1. **Resource card:** topic, level, format, estimated effort, and open action.
2. **Lab/session card:** topic, schedule, prerequisites, capacity or availability, and joining instructions.
3. **Opportunity card:** role, location, experience, work mode, source, and application action.
4. **Learning-path module:** ordered topics with progress states.
5. **Skill badge:** skill name, assessment status, issue date, and verification method. Only show a verified state when an actual assessment process supports it.
6. **Member profile summary:** skills, learning interests, and optional public links with explicit member consent.
7. **Diagram frame:** consistent labels, node shapes, line weights, legends, and directional arrows.

## 7. Website / product structure

A possible information architecture:

- **Home:** clear value proposition, latest learning resources, upcoming labs, and relevant opportunities.
- **Learn:** topic-based notes, explainers, and learning paths.
- **Labs:** practical sessions, prerequisites, environment details, and session resources.
- **Careers:** verified or clearly sourced openings and guidance.
- **Community:** participation, member contributions, and community guidelines.
- **About:** purpose, principles, and contact.

This is a proposed structure for review, not a statement that these pages currently exist.

## 8. Social and learning templates

Create reusable templates for:

- Networking concept explainers and multi-slide carousels.
- Lab announcements and session recaps.
- New resource announcements.
- Career opportunity cards.
- Community updates and member milestones.

Keep the same type hierarchy, margins, logo placement, and information order across templates. Technical diagrams should prioritise correctness and legibility over decoration.

## 9. Responsive and accessibility requirements

- Design mobile first for learning resources and opportunity cards.
- Maintain readable text sizes and sufficient contrast.
- Provide visible focus states and clear interaction labels.
- Use icons with text labels where meaning could be ambiguous.
- Ensure diagrams remain understandable when scaled down; provide a text explanation for complex diagrams.

## 10. Asset and source-file organisation

Keep editable source files separate from exported files:

- brand/identity/ — logo concepts, wordmark, icon, and usage guidance.
- brand/tokens/ — colour, type, spacing, and component tokens.
- design-system/ — component library and page patterns.
- social/templates/ — editable post and carousel templates.
- diagrams/ — editable network diagrams and their exports.
- exports/ — SVG, PNG, and PDF outputs for publishing.

Prefer editable vector/source formats for the master artwork. Export PNG or PDF copies only for publishing and sharing. Record the source file and version for every approved asset.

## 11. Design review checklist

- [ ]  Does the design look like a credible networking community rather than a generic tech template?
- [ ]  Is the main message clear within a few seconds?
- [ ]  Is the network-node motif meaningful rather than decorative?
- [ ]  Is the visual hierarchy consistent across web and social templates?
- [ ]  Are text, diagrams, and labels readable on mobile?
- [ ]  Are skill and verification claims accurate?
- [ ]  Are source files editable and exports clearly separated?
- [ ]  Has the design been reviewed before being labelled final?

## 12. Immediate design tasks

- [ ]  Review the current PacketPulse website and record what should be retained or removed.
- [ ]  Explore two or three wordmark / node-symbol directions before selecting a logo.
- [ ]  Test the proposed palette and typography on one website section and one social post.
- [ ]  Create the resource, lab, and opportunity card components.
- [ ]  Define the visual rules for educational diagrams.
- [ ]  Approve the design system before producing a large batch of assets.

## Creative illustration direction — Isometric Network Modules (exploration)

**Status: Creative concept documented; not a locked design-system rule or approved final asset.** Claude / implementation team may refine, redraw, simplify, animate, or adapt this direction during design and implementation review.

### Concept

Explore a playful, isometric visual language built from modular technical objects. The attached reference's clean, outlined, raised modules and routed connections inspired the composition; PacketPulse's version maps the modules to our product and to the broader world of networking.

The illustration should feel like a small connected system or “network landscape,” not a generic SaaS diagram.

### Visual vocabulary

- Isometric raised tiles / modular platforms, thin technical outlines and soft dimensional shadows.
- Fiber-like routes, branching circuit paths, patch leads, topology lines and data packets.
- Router / switch / gateway / server-inspired module silhouettes.
- Location pins and peering links.
- Human/product metaphors integrated into modules: community, learning, verified skill evidence, career routes, life/progress and trusted transactions.
- Small playful details—terminal prompts, protocol tags, signal markers, packet “hops,” milestone steps—used sparingly.

### Colour and atmosphere

Do not constrain this concept to the original forest/teal palette. Explore a balanced technical-human palette while preserving token coherence and accessible contrast. The current SVG experiment uses:

- Forest `#155E50` and Teal `#287A86` as recognizable PacketPulse anchors.
- Indigo `#6555B8` and Electric Cyan `#21A0A8` for knowledge, signal and alternate paths.
- Signal Lime `#C7F36B` for active packets / meaningful highlights.
- Soft Violet `#B8A9FF`, Coral `#F26D8B`, Amber `#FFB86B` for human warmth, discovery and milestones.
- Warm Paper `#FBF7EF` as an exploratory canvas.

These are **exploration colours**, not a new approved semantic-token map. Validate combinations for contrast, dark/light contexts and module meaning before production use.

### Where this visual language may be useful

- Product/feature hero illustrations and onboarding.
- Learning pathways, labs and skill progression.
- Verified-skill / assessment explanations.
- Career and opportunity journeys.
- Community connection and location-based experiences.
- Empty states, milestone moments, campaign artwork and editorial diagrams.

Use the motif when it adds meaning. Avoid turning every screen into an illustration or using the same composition as repetitive wallpaper.

### Implementation and refinement guidance

- Treat the SVG exploration as a visual reference, not production-ready final artwork.
- Preserve editable vector masters; create responsive crops and simplified variants where needed.
- Claude should improve geometry, isometric consistency, line joins, node spacing, label legibility, component reuse and responsive scaling.
- Consider a reusable symbol set / illustration grammar, but do not force every product concept into a literal network device.
- Keep technical metaphors accurate, and keep product labels understandable to non-networking users.
- Check performance, accessibility, reduced-motion behavior if animation is introduced, and contrast at actual rendered sizes.
- Review against the existing product/design system and repository before implementation; do not assume any asset or component is already integrated.

### Current exploration artifact

`PacketPulse_Isometric_Network_Modules.svg` — generated in this discussion as an editable concept. Suggested source location when committed: `design/illustrations/network-modules/` (or the repository's existing illustration/asset convention after Claude audits it). Exported previews should be kept separate from editable masters.

**Design principle:** PacketPulse can express technology, life and career as one interconnected world. The network is the underlying metaphor; colour, shape and small moments of play make it human.

## Design philosophy update — user psychology before visual spectacle (27 Nov 2026)

Owner direction: every PacketPulse design must be thought through from the user's psychological context, not generated from fashionable visual tropes. Design to improve the person's experience, not to impress an observer.

Start with user, context, task, uncertainty/friction, trust needs and the next useful action. Apply cognitive-load reduction, clear hierarchy, autonomy, meaningful progress, transparency, belonging and ethical attention. Do not use pressure, false urgency, shame, misleading match/verification scores or decorative engagement mechanics.

Creative latitude remains broad—composition, type, colour, texture, illustration, patterns and motion may be explored. But every prominent element needs a product/user meaning. Network metaphors should explain actual connections, evidence, learning or opportunity; avoid generic glowing AI brains, meaningless HUDs, random nodes and glassmorphism without functional purpose.

The isometric/network landscape and dark organic-data references are inspiration only, not templates or locked styles. Any artifact must document user purpose, visual rationale, state behavior, accessibility, performance, reduced-motion alternative and a way to validate it.