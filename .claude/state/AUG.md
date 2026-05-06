# AUG.md — SculptClub (sculptjordaan / sculptclub.nl)

# Schema: AUG v3 7-factor composite per `rules/aceusergrowth.md` v3 Part 25
# Created: 2026-05-06 (first audit — pre-existing site, retroactive baseline)
# Archetype: local_business_multilingual_seo_with_clarity_conversions (per concept-finder-methodology v2.3)
# Note: D7 retention is the WRONG primary metric for this archetype — see
#       per-project memory `feedback_sculptclub_archetype_correction.md`.
#       Primary AAERA-compliant metric here = session_to_booking_attempt_rate (Activation).

## Weekly Score v3

| date_iso | acq | act | eng | ret | adv | mon | perf | AUG_v3 | WoW_delta | top_weakness | confidence | source |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---|
| 2026-05-06 | 3 | 6 | 6 | 2 | 3 | 7 | 7 | 44 | (baseline) | retention (D7 metric mismatch — see archetype note) | 0.5 | docs |

**Computed:** geometric mean × 10 across 7 scores. Product = 3×6×6×2×3×7×7 = 31752; ⁷√31752 ≈ 4.41; ×10 = 44. Range "Healthy" per brain action thresholds (30-50 → weekly iteration, per-stage improvements).

## Per-stage rationale (this baseline)

### Acquisition (3)
- 30d Plausible: 126 UV / 320 PV (per CONTEXT.md 2026-04-27)
- For local-business archetype targeting Amsterdam Jordaan, 126 UV/mo is genuinely small absolute volume but highly qualified — they ARE the target market (geo + intent both narrow). Per general AUG rubric this scores 1; archetype-adjusted to 3 because quality dominates volume for this site. Re-baseline at next monthly Plausible pull.

### Activation (6)
- Microsoft Clarity 3-day window: 5 bookings + 2 contacts in 95 sessions = **22-31% session-to-booking-attempt rate**.
- Per archetype memory: this is fleet-leading conversion (highest of any AceVault site). For boutique gym, the canonical activation event is the booking-form click or WhatsApp opener, not "user does first thing in app."
- Generic AUG rubric maps 22-31% to score 5-7. Selected 6 to honor the fleet-leading status without overclaiming.

### Engagement (6)
- 33% bounce rate (target <45%) → strong signal (rubric: <40% = 2.5)
- 2.39 pages/session (target ≥2.1) → above target (rubric: 1.8-2.5 = 1.5)
- 1m59s avg time (target ≥90s) → above target by 33% (rubric: 75-120s = 1.5; just below 2.5 cliff)
- Composite: 5.5/10. Round to 6.

### Retention (2)
- D3 returning users: 1.05% (per Clarity)
- Per AUG rubric this scores 1. **However:** archetype memory documents D3/D7 retention is the WRONG primary metric for boutique gym (weeks-to-decision lifecycle). Honest AAERA-compliant score: 2 (low generic D7, but archetype-mismatch means "low" doesn't mean broken).
- Real "retention proxy" for this archetype = repeat-booking-rate within 30d after first session — operator-side data via Acuity/Clarity. Not yet logged in state.

### Advocacy (3)
- 5.0-star Google rating (per CLAUDE.md) — strong organic word-of-mouth proxy
- No share-card / embeddable widget mechanism on site
- No measured k-factor; no referral incentives
- Score 3 reflects passive advocacy via reviews + organic but no engineered viral mechanic.

### Monetization (7)
- ~€300/wk baseline (per ORACLE.md notes)
- Per AUG rubric: ~€150/wk = 7. SculptClub above this baseline.
- Live pricing infrastructure healthy (Stripe/Acuity), 4 packages + per-session, retainer tier.
- Score 7.

### Performance (7)
- Site is Next.js 16 static-export-tuned, Vercel-deployed, recent build clean
- Recent SEO PRs (#42-46 + sitemap polish 4f9231e/58ce360/37b66f5/0b5afc6) all shipped without regression
- **Production timing measured 2026-05-06 (curl-based, not CrUX field):**
  - Static routes (sitemap.xml / robots.txt): TTFB 227-228ms · 1.5-26KB
  - SSR routes on cache MISS (single first-curl): 482-705ms · 79-171KB
  - SSR routes on cache HIT (retry-curl): TTFB 117-181ms · `x-vercel-cache: HIT, age:~2700s` — real user experience is fast
  - **Initial /nl/prijzen 705ms was cold-cache outlier — retry confirms 117-181ms cached** (false positive caught + closed via [prijzen-ttfb] task; compounds with verify-before-claiming memory)
  - TLS handshake: 45-80ms · Connect: 17-41ms (Vercel edge healthy)
- CWV field data (LCP/INP/CLS) requires PageSpeed Insights API key (free tier quota=0; operator must enable Cloud project). Without field data, confidence on perf=7 stays moderate.
- Score 7 holds and is now better-validated (real cached TTFB 117-181ms on SSR routes is comfortably within rubric; static routes ~227ms; cache hit-rate appears healthy)

## Confidence

**0.6 (medium)**: scores derived from documented values (CONTEXT.md, ORACLE.md, memory) plus 2026-05-06 production curl-timing measurement on 7 routes. Plausible numbers from 2026-04-27 (9 days stale). Clarity numbers from 2026-05-04 (2 days). Real-time pull via Plausible API + Clarity API + PSI field data (requires operator-side API key) would raise to 0.8.

## I-35 Floor Status

🟢 PASS — current AUG_v3 = 44 (above the 5-floor that triggers 90-day kill-criteria). No I-35 breach.

## Top weakness ranked

1. **Retention metric mismatch** (score 2) — the AAERA D7 metric doesn't fit local-business archetype. Operator-side action: capture repeat-booking-rate-within-30d in Acuity/Clarity, log to next AUG row.
2. **Acquisition volume** (score 3) — 126 UV/mo is small. Operator-side actions queued: GSC sign-in to submit sitemap-ai.xml, Google Ads NL promo activation, ai.robots.txt directory PR. Brain-side: SEO content pipeline already working (54 done tasks). Compound continues.
3. **Advocacy mechanism missing** (score 3) — site has no share-card / embeddable widget / referral loop. Future brain-doable: add Open Graph result-pages or "share-with-friend" mechanism.

## Calibration notes

- AUG drift: CSIL #13 (v19.2) monitors weekly drops ≥5 points or 2-consecutive-week <5.
- Re-baseline: weekly cadence preferred; minimum monthly. Next AUG row should be ≤2026-05-13.
- Per `rules/learn-from-data.md`: every projected vs actual delta this AUG informs feeds into future archetype-multiplier calibration in concept-finder-methodology v2.5.

## Corrections

<!-- Append-only per I-35. Format: corrects: <original_date> | <reason> | <corrected_score> -->
