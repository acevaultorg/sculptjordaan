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
| 3ca9242 | 2026-04-16 00:03 | pricing_page_change | Fix Pro pack 19→20% math + unify card hierarchy (NL+EN) | 12 | TBD | TBD | pricing_page × /nl/prijzen+/en/pricing, low route weight but pricing changes compound; archetype 1.00, confidence 0.4 |
| f4db71b | 2026-04-16 00:05 | conversion_copy_fix | Free-intro duration 60→45min consistency (EN blog) | 1 | TBD | TBD | single outlier, trust-erosion avoided on a blog page with modest traffic |
| 8e36c33 | 2026-04-16 00:07 | pricing_page_change | Pro pack 19→20% on 5 more pages (FAQ + boek/huur) | 6 | TBD | TBD | completes 3ca9242 — pricing consistency across entire funnel surface |
| c8055c5 | 2026-04-16 00:17 | infrastructure | Flag dormant Vercel webhook + document manual deploy fallback | 0 | 0 | 0 | meta: unblocks every future ship — root cause is fleet-wide, docs + P0 task flagged for operator |

## Process discovery — 2026-04-16

Vercel GitHub App webhook stopped firing for sculptclub between 2026-04-13 and 2026-04-16. 9 commits pushed to main during the window never auto-deployed. Same pattern on sculptcoach (4d stale), txtfeed (6d), ace-pilot (7d) — fleet-wide. This session manually triggered sculptclub production deploys via the per-project deploy-hook URL. Root-cause flagged as [👤] P0 vercel-git-relink in TASKS.md. Manual hook pattern documented in KNOWLEDGE.md ## Deploy pipeline.

**Implication for Oracle calibration:** actual_7d / actual_30d numbers for any commit in the 2026-04-13 to 2026-04-16 window (c78e554 through 8e36c33) reflect ZERO live exposure because those commits were never live until this session's manual triggers. Properly calibrate by treating the "shipped_at" timestamp as the manual-trigger time, not the git commit time.

## v17.2 Loop — retention + Love Score

| ship_id | shipped_at | archetype | task | revenue_€/wk | retention_Δ% | love_score | hypothesis |
|---|---|---|---|---|---|---|---|
| 233208a | 2026-04-16 10:05 | pricing_page_change | Unify card hierarchy on 4 sibling pricing pages (boek-studio + studio-huren NL+EN) | 5 | +0.5% | 0.70 | De-zigzag: single visual anchor (Routine) reduces decision fatigue. Love Score 0.70: Clear 0.8, Reliable 0.9, Useful 0.7, Delightful 0.6, Unique 0.5 |

| TBD | 2026-04-15 | new_landing_page | NL+EN postpartum PT blog → Gezina funnel | 55 | TBD | TBD | very narrow high-intent segment (postpartum mothers seeking safe return), direct CTA to Gezina intake; higher conversion expected than generic posts despite lower volume |
| TBD | 2026-04-15 | new_landing_page | NL+EN prenatal PT blog → Gezina funnel | 45 | TBD | TBD | mirrors postpartum for the pregnancy segment; trimester-specific guidance + birth prep; completes the maternity funnel (prenatal → postpartum → female) all routing to Gezina |
| TBD | 2026-04-15 | new_landing_page | NL+EN small-group training blog | 40 | TBD | TBD | distinct buyer segment (pairs/teams/colleagues vs solo); diversifies Oracle portfolio away from the women-funnel (prior 3 ships); routes to Dara (small-group specialist) + Gezina + corporate funnel; strong upsell from zakelijk-PT and couples organic search |
| TBD | 2026-04-15 | conversion_copy_fix | Specific-need routing section on /vind-jouw-personal-trainer + /find-personal-trainer | 30 | TBD | TBD | Above-the-fold decision support for high-intent visitors arriving at the primary trainer directory; 6 cards routing to female / english / prenatal / postpartum / small-group / seniors blogs; internal-link density boost (SEO compound) + self-segmentation (conversion lift before the quiz form); archetype pivot away from new_landing_page (saturation) to conversion_copy_fix on highest-traffic conversion hub |

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
