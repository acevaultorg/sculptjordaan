# REVENUE_MODEL.md — SculptClub (sculptjordaan / sculptclub.nl)
# Model: one-time (packages) + recurring (coaching retainers)
# Primary KPI: monthly_bookings_revenue
# Currency: EUR
# Created: 2026-04-11
# Model detected from: FLEET_METRICS.md + FLEET_BLOCKERS.md § Trending green + live sweep 2026-04-10 (sculptclub.nl 8 Plausible visitors, Acuity booking flow)

## Tier / Pricing

Local personal training business — **€45-549** price range per
`FLEET_BLOCKERS.md § Trending green`. Multiple product types:

- **Single PT session** — lowest tier
- **Package of sessions** — mid tier (one-time purchase)
- **Monthly coaching retainer** — highest tier (recurring)

Real prices live on `sculptclub.nl` and in the Acuity booking system.
Do NOT duplicate headline prices here — read them from the live site.

## Primary KPI — monthly_bookings_revenue

Sum of all session/package bookings + monthly retainer revenue,
denominated in EUR.

## Secondary KPIs

- **monthly_new_clients** — first-time session bookings in the month.
  Leading indicator — new clients convert to retainers over 1-3 months.
- **client_retention_rate** — % of clients who book a follow-up within
  30 days of their last session. Core metric for a PT business.
- **package_conversion_rate** — % of single-session clients who upgrade
  to a package.
- **retainer_conversion_rate** — % of package clients who move to a
  monthly retainer.
- **ARPC (avg revenue per client, 90d trailing)** — total rev / unique
  clients over trailing 90 days.
- **show_up_rate** — bookings that are actually attended. Cancel/no-show
  is a health floor metric.

## Health Floors

- Physical capacity ceiling — one PT can only deliver N sessions/week.
  Revenue lifts that exceed capacity create client disappointment.
  Operator-owned constraint.
- Cert validity on sculptclub.nl (currently valid until 2026-06-21)
- Booking flow (Acuity) must stay operational — single point of failure
- NL locale must remain primary (operator is in Amsterdam, clients are
  Dutch-speaking)
- No dark patterns on cancel / reschedule
- Never show a fake "only 2 slots left" urgency — operator rule

## Revenue-touching surfaces

- `/` — NL hero "Jouw gym. Jouw manier. Jouw resultaat."
- `/boek` or `/contact` — booking CTA → Acuity
- Acuity booking flow (external service) — owns the actual transaction
- `/over` — trust signals that feed booking intent
- `/diensten` (or similar) — service tier comparison

## Model detected from

- `FLEET_METRICS.md § Fleet health snapshot row 14`: sculptclub.nl 302
  tier LOCAL, Vercel project exists
- `FLEET_METRICS.md § Visual sweep row 14`: "Acuity booking... Local PT,
  11 imgs" + "GTM + Meta Pixel + Clarity (most tracked site in fleet)"
- `FLEET_BLOCKERS.md § Trending green`: "SculptClub — €45-549 products
  → HARVEST tier"
- Live Plausible: sculptclub.nl 8 visitors 24h (one of the few fleet
  sites with active traffic)
- Cert: valid until 2026-06-21
- Physical location: Amsterdam (per manifest `jordaangym.nl` alias)

## Operator notes

- This is a LOCAL business — revenue ceiling is bounded by physical
  capacity (PT time × session count). Optimizing for more leads beyond
  capacity is waste.
- Best revenue lever is likely **retainer upgrade** (moving single-session
  clients to recurring retainers) — higher LTV without needing more
  acquisition.
- Tracking stack is the BEST in the fleet (GTM + Meta Pixel + Clarity).
  Chief should lean on this data heavily for revenue decisions on this
  project — it's the only one with near-complete funnel instrumentation.
- Jordaangym.nl (sibling folder) is a vanity domain that redirects to
  sculptclub.nl per manifest — not a separate revenue center.

## Next actions (revenue-first)

1. Instrument `GROWTH_ANALYTICS.md ## Monetization Events` — populate
   from Acuity bookings + retainer charges
2. Define the monthly retainer upgrade funnel explicitly in
   `FUNNEL_METRICS.md` section
3. Use Meta Pixel + Clarity data to identify the biggest drop-off step
   in the booking flow — single highest ROI fix
4. Decide if a waitlist / referral mechanism is needed when physical
   capacity is saturated (instead of more acquisition spend)
