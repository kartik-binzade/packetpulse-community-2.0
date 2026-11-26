# GitHub Setup — Documentation Repository

**Suggested repository:** `packetpulse-community/packetpulse-docs`  
**Visibility:** Choose private or public with the organisation owner. The package may include internal product decisions; private is the safer initial choice.

## Current limitation
The connected account could read `packetpulse-community/packetpulse-site` but could not push (`push:false`) or administer (`admin:false`). Repository creation is not exposed by the connected GitHub action set.

## When owner access is available
1. Create `packetpulse-docs` under the PacketPulse organisation.
2. Grant the connected GitHub user/app write permission to the new repository.
3. From this directory run:

```bash
git remote add origin https://github.com/packetpulse-community/packetpulse-docs.git
git push -u origin main
```

4. Add a README link from the product repository only if the team wants it. Do not make docs commits to the product application repository by default.
