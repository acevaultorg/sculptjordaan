# ORACLE.md — Revenue Oracle v1 projections & calibration

<!-- v17 append-only. Each ship logs projected (at orient) and actual (7d, 30d) -->

## Calibration

| ship_id | shipped_at | archetype | task | projected_weekly_eur | actual_7d | actual_30d | notes |
|---|---|---|---|---|---|---|---|
| c78e554 | 2026-04-15 12:38 | new_landing_page | NL+EN female-PT blog | 45 | TBD | TBD | targets vrouwelijke/female PT intent, routes to Gezina |
| (prior session) | 2026-04-15 | new_landing_page | NL+EN english-speaking PT blog | 60 | TBD | TBD | targets expat/international segment, higher ARPU |
| 5b93ad9 | 2026-04-15 14:07 | SEO_page_addition | EN blog cross-links: corporate + north (0→7 and 1→9) | 3 | TBD | TBD | closed thinnest link-graph posts |
| ea136b9 | 2026-04-15 14:15 | SEO_page_addition | NL blog cross-links: zakelijk + noord mirror | 3 | TBD | TBD | mirror of EN fix |
| 4a9351c | 2026-04-15 15:04 | infrastructure | Vercel vanity migration (10 domains → sculptclub aliases) | 80 | TBD | TBD | Vercel side done; full unlock gated on Hostinger DNS (operator action). Once DNS flips, each vanity domain routes through middleware with correct UTM attribution — Dutch intent no longer bounces to English homepage |
| 1917528 | 2026-04-15 15:50 | infrastructure | Next.js 16 priority→preload (70 files) | 0 | 0 | 0 | compat migration, no revenue delta; silences deprecation warnings + unblocks future minor version bumps |

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
