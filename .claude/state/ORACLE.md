# ORACLE.md — Revenue Oracle v1 projections & calibration

<!-- v17 append-only. Each ship logs projected (at orient) and actual (7d, 30d) -->

## Calibration

| ship_id | shipped_at | archetype | task | projected_weekly_eur | actual_7d | actual_30d | notes |
|---|---|---|---|---|---|---|---|
| c78e554 | 2026-04-15 | new_landing_page | NL+EN female-PT blog | 45 | TBD | TBD | targets vrouwelijke/female PT intent, routes to Gezina |
| TBD | 2026-04-15 | new_landing_page | NL+EN english-speaking PT blog | 60 | TBD | TBD | targets expat/international segment, higher ARPU |

## Archetype multipliers (Oracle v1 cold start)

| archetype | multiplier | sample_n | note |
|---|---|---|---|
| pricing_page_change | 1.00 | 0 | cold |
| signup_flow_change | 0.80 | 0 | cold |
| new_landing_page | 0.60 | 0 | cold (this session: 2 entries queued) |
| SEO_page_addition | 0.15 | 0 | cold |
| bug_fix_blocking_revenue | 0.50 | 0 | cold |

## Notes

- Project baseline (estimated): €300/wk from organic + direct, pre-Ads
- Health floor: Acuity booking funnel 200 on every core route (tracked in HEALTH.md)
- Recalibrate after 10 same-archetype entries per v17 I-18
