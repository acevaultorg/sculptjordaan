# Analytics — event taxonomy + Plausible setup

Last verified end-to-end via real click testing 2026-05-08.

## What fires where

Every CTA click is intercepted by the global handler in [src/components/layout/analytics.tsx](../src/components/layout/analytics.tsx). The handler classifies the click + fans out to 5 trackers (Plausible · GA4 · Google Ads · Meta Pixel · TikTok Pixel · Clarity captures via session). Plausible is the canonical source of truth for goal counts; the rest are for ad-platform conversion attribution.

## Plausible goals + where they fire

| Goal | Fires when | Code path |
|---|---|---|
| `WhatsApp Click` | Click on any `wa.me/*` or `whatsapp.com/*` link | analytics.tsx:182 |
| `Acuity Click` | Click on `app.acuityscheduling.com/*` link from a non-intake page | analytics.tsx:142 |
| `Free Intake: Click` | Click on `app.acuityscheduling.com/*` link from `/{nl,en}/{plan-gratis-intake-met-*,gratis-intake,plan-free-intro-with-*,free-intro}` | analytics.tsx:140 (note the colon — must match Plausible goal name exactly) |
| `Phone Click` | Click on `tel:` link | analytics.tsx:215 |
| `Email Click` | Click on `mailto:` link | analytics.tsx:246 |
| `Lead Generated` | Multi-channel lead — fires for `method` ∈ {`free_intake`, `whatsapp`, `phone`, `email`} | analytics.tsx:140/186/219/250 |
| `Outbound Link: Click` | Auto-fired by Plausible's `outbound-links.tagged-events` script — every external-domain click | (script bundled — no manual code) |

## Custom properties

Every event carries these props (where applicable):

| Property | Values | Purpose |
|---|---|---|
| `intent` | `trainer` · `studio_rental` · `open_gym` · `generic` | Cross-funnel rollup. Splits any goal by what the click was about. |
| `pricing` | `free` · `paid` · `unknown` | Funnel stage. `free` = free intake / first-touch consultation, `paid` = real money product, `unknown` = ambiguous. |
| `trainer_name` | `Joey` · `Dara` · empty | Set when click goes to a direct trainer WhatsApp number (Joey: wa.me/31639175337, Dara: wa.me/31645658213). Empty for main-number clicks (text classification kicks in instead). |
| `booking_type` | `open_gym` · `open_gym_session` · `studio_rental` · `studio_pack_starter` · `studio_pack_routine` · `studio_pack_volume` · `trial` · `generic` | Acuity-specific. Derived from appointmentType= or id= in href. See `detectBookingType` in analytics.tsx. |
| `method` | `free_intake` · `whatsapp` · `phone` · `email` | On `Lead Generated` only. Identifies which channel the lead came through. |
| `value` | numeric (€) | Per-click EUR value for ad-platform conversion bidding. Currently 45 for high-intent leads. |
| `source_page` | `window.location.pathname` | Page the click happened from. |

## Classification rules

### `intent` — WhatsApp clicks

Decided in `detectWaIntent` (analytics.tsx). Order matters (most specific first):

1. Direct trainer numbers — `wa.me/31639175337` → `trainer/Joey`, `wa.me/31645658213` → `trainer/Dara`.
2. `text=` param decoded + lowercased, then keyword-matched:
   - contains `open gym` → `open_gym/paid`
   - contains `studio huren` / `renting the studio` / `huren van de studio` / `trainingsruimte` / `fysiotherapeut` → `studio_rental/paid`
   - contains `volume pakket` / `volume pack` → `trainer/paid`
   - contains `intake` / `intro` / `tarief` / `'s rate` / `afvallen` / `begeleiding` / `krachttraining` / `rugklachten` → `trainer/free`
   - else → `generic/unknown`

### `intent` + `pricing` — Acuity clicks

Decided in `classifyAcuityIntent` + `classifyAcuityPricing` from the `booking_type`:

| booking_type | intent | pricing |
|---|---|---|
| `trial` | trainer | free |
| `studio_pack_starter/routine/volume` | trainer | paid |
| `studio_rental` | studio_rental | paid |
| `open_gym`, `open_gym_session` | open_gym | paid |
| `generic` | generic | unknown |

## Plausible — how to read the data

Open https://plausible.io/sculptclub.nl?period=day → scroll to **Goals** widget.

To split a goal by intent or pricing:

1. Click a goal name (e.g., `WhatsApp Click`) — Plausible filters to that goal only.
2. Click the **Properties** tab.
3. Click the dropdown next to PROPERTIES, select `intent` (or `pricing`, `trainer_name`, `booking_type`).
4. The table now shows visitor + event counts split by that property's values.

Cross-funnel question — "how many trainer-related leads today across all channels?":

1. Filter goal to `Lead Generated`.
2. Properties tab → select `intent`.
3. Sum the `trainer` row across the visible breakdown. Cross-tab by `method` to see channel mix (whatsapp vs free_intake vs phone vs email).

## Plausible setup state (verified 2026-05-08)

**Custom properties registered** (Settings → Custom properties):
- `intent`, `pricing`, `trainer_name` — manually added
- Auto-detected by Plausible: `locale`, `source`, `value`, `source_page`, `booking_type`, `position`, `label`, `destination`, `link_text`, `method`, `trainer`, `timestamp`

The auto-detected list includes some props older legacy code (FunnelPilot fp.js, scroll-depth tracker, page-category tracker) sends. Don't delete unless you know which script writes them.

**Goals registered** (Settings → Goals): all 7 code-fired goals above + several auto-detected by Plausible from historical traffic. Two duplicates from a 2026-05-08 bulk-add (`WhatsApp: Click` with colon, `Free Intake Click` without colon) were removed since they would never aggregate any future events from current code.

## Naming-mismatch trap

Plausible matches goal names **exactly, case-sensitive**. If code fires `Free Intake Click` and the configured goal is `Free Intake: Click` (with colon), events land but don't aggregate into the goal. Fix: match the configured-goal name in code. We hit this once on 2026-05-08 (commit 63e6ad3 renamed `Free Intake Click` → `Free Intake: Click` in code to match the existing Plausible goal).

When in doubt, search the goal-settings list for an existing goal before adding a new one — and use that name verbatim in code.

## Verifying analytics changes

Per [feedback memory](../../.claude/projects/.../memory/feedback_plausible_spy_vs_real_network.md):
JS-spy on `window.plausible` validates classifier logic only. Real verification requires:

1. Open Plausible dashboard in one tab (period=day, NOT realtime — Realtime doesn't show goal counts).
2. Drive a real click via Chrome MCP `left_click` on the actual element (event.isTrusted=true).
3. Wait 4-5 seconds for the page's plausible.io API call to complete.
4. Refresh the dashboard. Verify the goal counter incremented + Properties tab dropdown lists your custom properties + splitting by them shows expected values.

If counter doesn't increment within 60s, debug — don't assume "ingestion delay."

## Source-of-truth files

- `src/components/layout/analytics.tsx` — global click handler + classifier + tracker fan-out
- `src/config/site.ts` — analytics IDs (GA4, Google Ads, Meta, TikTok, Clarity)
- `src/config/acuity.ts` — Acuity appointmentType IDs + WhatsApp link templates
- `src/config/trainers.ts` — trainer roster + per-trainer WhatsApp numbers
- `CLAUDE.md` — tech-stack section has the IDs + event-taxonomy line
