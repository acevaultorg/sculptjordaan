# GROWTH_ANALYTICS.md — SculptClub (sculptjordaan / sculptclub.nl)
# Model: hybrid (one-time packages + recurring retainers + ad-driven lead gen)
# Primary KPI: monthly_bookings_revenue
# Currency: EUR
# Created: 2026-04-15
# Model detected from: REVENUE_MODEL.md + Google Ads PMax campaign + Acuity booking system

<!-- v17 append-only. Corrections go in ## Corrections section at bottom with `corrects: <timestamp>` field. -->

## Monetization Events

Each row is one monetized interaction or attribution event. Columns:

```
timestamp | event | value | currency | attribution | metadata
```

Event types used at SculptClub:

- `signup` — new first-time site visitor identified (GA4 `first_visit`)
- `free_intake_click` — clicks booking CTA from /nl/gratis-intake or /en/free-intro (GA4 event already firing)
- `intake_booked` — Acuity booking completed for free intro session
- `intake_attended` — session attended (show-up tracked in Acuity)
- `first_paid_session` — first paid PT session after intake (value = session rate)
- `package_purchase` — Starter €89 / Routine €199 / Volume €549
- `retainer_start` — monthly coaching retainer signup
- `retainer_renew` — monthly retainer auto-renewal
- `cancel` — retainer cancellation (value = 0)
- `refund` — negative value

<!-- Backfill starts once operator runs first /acepilot stats --import or webhooks are wired. -->

## Funnel Metrics

Weekly/monthly snapshots of the booking funnel. Written by `/acepilot stats` or
manual sync from GA4 + Acuity + Google Ads. Columns:

```
period_start | period_end | stage | count | conv_rate | notes
```

Funnel stages for SculptClub:

1. `site_visit` — unique visitors (GA4)
2. `intake_page_view` — /gratis-intake or /free-intro view
3. `free_intake_click` — CTA click to Acuity (existing GA4 event)
4. `intake_booked` — Acuity booking confirmed
5. `intake_attended` — session attended
6. `first_paid_session` — first revenue from this lead
7. `package_or_retainer` — converted to recurring / package

<!-- Example row once first snapshot lands:
2026-04-15 | 2026-04-22 | site_visit          | 1240 | 100%   | post-maternity-funnel week 1
2026-04-15 | 2026-04-22 | free_intake_click   |   42 |   3.4% | baseline pre-Ads
2026-04-15 | 2026-04-22 | intake_booked       |   12 |  28.6% | of clickers
-->

## Experiments

AB/split test results. Columns:

```
experiment_id | variant | traffic_pct | event | count | p_value | winner
```

<!-- First AB candidate: /prijzen pricing page trust-signal block position (top vs below tiers). Launch when baseline funnel data is ≥2 weeks established. -->

## Ship Impact

Links ORACLE.md projections to observed outcomes. Columns:

```
ship_task_id | shipped_at | observed_window | metric | delta | significance
```

Ships queued for 7d/30d calibration (see ORACLE.md ## Calibration for context):

| ship_task_id | shipped_at | observed_window | metric | delta | significance |
|---|---|---|---|---|---|
| c78e554 (female-PT blog NL+EN) | 2026-04-15 12:38 | 7d pending (→ 2026-04-22) | free_intake_click attributed /vrouwelijke-* | TBD | TBD |
| c78e554 (female-PT blog NL+EN) | 2026-04-15 12:38 | 30d pending (→ 2026-05-15) | free_intake_click attributed /vrouwelijke-* | TBD | TBD |
| 09834eb (english-speaking-PT blog NL+EN) | 2026-04-15 14:30 | 7d pending (→ 2026-04-22) | free_intake_click attributed /english-* | TBD | TBD |
| 09834eb (english-speaking-PT blog NL+EN) | 2026-04-15 14:30 | 30d pending (→ 2026-05-15) | free_intake_click attributed /english-* | TBD | TBD |
| a19ee5c (postpartum-PT blog NL+EN) | 2026-04-15 16:00 | 7d pending (→ 2026-04-22) | Gezina intake bookings from /postpartum-* | TBD | TBD |
| a19ee5c (postpartum-PT blog NL+EN) | 2026-04-15 16:00 | 30d pending (→ 2026-05-15) | Gezina intake bookings from /postpartum-* | TBD | TBD |
| b730632 (prenatal-PT blog NL+EN) | 2026-04-15 16:30 | 7d pending (→ 2026-04-22) | Gezina intake bookings from /prenatal-* | TBD | TBD |
| b730632 (prenatal-PT blog NL+EN) | 2026-04-15 16:30 | 30d pending (→ 2026-05-15) | Gezina intake bookings from /prenatal-* | TBD | TBD |
| a76adeb (small-group blog NL+EN) | 2026-04-15 17:00 | 7d pending (→ 2026-04-22) | Dara/small-group bookings from /small-group-* | TBD | TBD |
| a76adeb (small-group blog NL+EN) | 2026-04-15 17:00 | 30d pending (→ 2026-05-15) | Dara/small-group bookings from /small-group-* | TBD | TBD |
| cda9c9c (specific-need routing on directory) | 2026-04-15 17:30 | 7d pending (→ 2026-04-22) | click-through rate on the 6 decision cards | TBD | TBD |
| cda9c9c (specific-need routing on directory) | 2026-04-15 17:30 | 30d pending (→ 2026-05-15) | click-through rate on the 6 decision cards | TBD | TBD |

## Attribution sources

How each projection will be measured at 7d and 30d:

- **Google Search Console** — organic impressions/clicks per blog URL (primary source for all SEO ships)
- **GA4** — `free_intake_click` event with `page_path` filter (the exact landing page that produced the click)
- **Acuity** — booking notes carry UTM values when available; intake bookings matched to blog referrer
- **Plausible** (if enabled on sculptclub.nl) — lightweight page-level outbound-click tracking as cross-check
- **Gezina's own calendar** — counts postpartum/prenatal/female-intent intakes referenced by blog path during intro conversation (requires operator to add a simple tag field in Acuity intake form — see ORACLE-SIDE-TASKS below)

## ORACLE-SIDE-TASKS (operator actions that unblock calibration)

These are the minimum steps to make Ship Impact rows measurable. Without them, the ORACLE.md projections stay "TBD" forever and Oracle never self-calibrates.

1. **GSC verify blog post indexing** — weekly check at https://search.google.com/search-console that each of the 5 new blog posts is indexed. Expected: indexed within 7-14 days post-publish.
2. **GA4 custom dimension: landing_page_blog** — add a custom dimension or use the built-in `page_path` to segment `free_intake_click` by originating blog post.
3. **Acuity intake form: "How did you find us?" field** — optional free-text + dropdown (`Google search` / `Instagram` / `referral` / `other`) so Gezina can capture which blog routed a specific person.
4. **Plausible or GA4 outbound-click goal** — track clicks on the Acuity booking URLs from each blog post.

Until these are set up, calibration runs on GSC impressions + the /free_intake_click route-level data only — good enough to detect order-of-magnitude directional signal, not clean enough for fine-grained multiplier calibration.

## Privacy rules

- **Never** log PII (email, phone, full name) to this file.
- Hash or truncate user IDs if needed (e.g., first 4 chars of hash).
- Aggregate cohorts of <5 to avoid re-identification.
- Consent — the cookie banner on sculptclub.nl already handles tracking consent; this file only stores data from consented sessions.

## Corrections

<!-- Append here if any row needs correction. Never edit existing rows. -->
<!-- Format: corrects: <original_timestamp> | <corrected_row> | reason: <one line> -->

## Notes

- **Baseline (pre-this-chain):** ~€300/wk from organic + direct + word-of-mouth (estimate). Google Ads campaign is pending payment-method verification (blocks €400 NL promo — see HANDOFF.md).
- **Projected chain delta:** +€275/wk at 30d per ORACLE.md sum. If actuals hit ≥50% of projection, Oracle auto-adjusts multipliers up. If ≤50%, multipliers adjust down.
- **First real calibration possible:** 2026-04-22 (7d mark for ship c78e554). CSIL audit threshold reached at session-chain cycle 10.
