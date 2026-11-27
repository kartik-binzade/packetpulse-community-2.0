# Networking Fundamentals — PacketPulse Learning Notes

Created by: Kartik B | 1000110
Created time: November 11, 2025 11:45 AM
Category: Notes
Last edited by: Kartik B | 1000110
Last updated time: November 26, 2026 12:51 PM

# Networking Fundamentals — PacketPulse Learning Notes

A corrected and structured starter reference for networking learners. Use it as a concise concept guide; add platform-specific commands and lab examples in separate topic documents.

## 1. Routing

Routing is the process of forwarding packets between different IP networks.

- **Static routing:** A route manually configured by an administrator. It is predictable and useful for small or specific routing requirements, but does not automatically adapt to topology changes.
- **Dynamic routing:** Routers learn and update routes using routing protocols such as OSPF and BGP.
- **Default routing:** A route used when no more specific route matches the destination. In IPv4, it is commonly written as 0.0.0.0/0.

## 2. Switches

A switch connects devices in a LAN and forwards Ethernet frames using MAC address information.

### Common categories by management

- **Unmanaged switch:** Minimal configuration; generally works as plug-and-play.
- **Smart switch:** Offers a limited set of management features.
- **Managed switch:** Supports configuration and monitoring features such as VLANs, STP, and port controls.

### Common categories by network function

- **Layer 2 switch:** Forwards frames using MAC addresses.
- **Layer 3 switch:** Can also route IP traffic between networks or VLANs.

These are different ways of classifying switches: management capability and forwarding function should not be mixed into one list.

## 3. VLAN

A Virtual LAN (VLAN) logically separates a switched network into distinct Layer 2 broadcast domains.

Common VLAN purposes include:

- **Default VLAN:** The vendor-defined initial VLAN; on many Cisco switches this is VLAN 1.
- **Data VLAN:** Carries normal user-device data.
- **Voice VLAN:** Provides a separate VLAN for supported IP phones.
- **Native VLAN:** On an IEEE 802.1Q trunk, frames belonging to the native VLAN are sent untagged by default. Configure both ends consistently and follow the platform's security guidance.

## 4. Trunking

A trunk link carries traffic for multiple VLANs over one physical link between network devices.

Common tagging methods:

- **IEEE 802.1Q (Dot1Q):** The industry-standard VLAN tagging method used by modern Ethernet networks.
- **ISL (Inter-Switch Link):** A legacy Cisco-proprietary VLAN encapsulation method; it is largely obsolete.

Correction: the common standard is written **802.1Q**, not “80210”.

## 5. EtherChannel / Link Aggregation

EtherChannel combines multiple physical Ethernet links into one logical link. It can provide additional aggregate bandwidth and link redundancy, subject to the platform and traffic distribution method.

Negotiation protocols:

- **LACP:** Link Aggregation Control Protocol, an open standard (IEEE 802.1AX; historically associated with IEEE 802.3ad).
- **PAgP:** Port Aggregation Protocol, a Cisco-proprietary protocol.

The member links must have compatible settings, including speed/duplex, trunk or access mode, allowed VLANs, and other platform-specific requirements.

## 6. Access Control Lists (ACLs)

An ACL is an ordered set of rules used to permit or deny traffic based on matching criteria.

Common ACL types:

- **Standard ACL:** In traditional Cisco ACLs, primarily matches the source IPv4 address.
- **Extended ACL:** Can match source and destination addresses, protocol, and Layer 4 ports.

ACLs may also be described as **numbered** or **named**. This describes how the ACL is identified/configured, not a separate packet-matching category. Rule order and the implicit deny behaviour at the end of many ACLs are important.

## 7. Spanning Tree Protocol (STP)

STP prevents Layer 2 switching loops by placing redundant paths into a blocking state and allowing a loop-free topology.

- **STP (802.1D):** Original spanning-tree operation.
- **RSTP (802.1w):** Rapid Spanning Tree; provides faster convergence than classic STP.
- **MSTP (802.1s):** Multiple Spanning Tree; maps VLANs to spanning-tree instances to manage larger VLAN environments.

## 8. Quick learning checks

- [ ]  Explain the difference between a route and a VLAN.
- [ ]  Explain why a trunk is used between switches.
- [ ]  Identify the difference between an access port and a trunk port.
- [ ]  Explain how 802.1Q identifies VLAN traffic.
- [ ]  Explain what problem STP prevents.
- [ ]  Compare LACP and PAgP.
- [ ]  Explain standard versus extended ACL matching.
- [ ]  Describe when a Layer 3 switch is useful.

## Editorial note

This is a fundamentals reference, not a configuration standard. Before publishing platform-specific procedures, validate syntax against the relevant vendor release and test in a lab. Never add customer IP addresses, credentials, internal hostnames, or production screenshots to public learning material.