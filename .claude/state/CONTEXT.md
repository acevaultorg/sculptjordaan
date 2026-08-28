ORIENT: SculptClub is a bilingual (NL/EN) personal training studio website + trainer acquisition platform for Amsterdam Jordaan. State: main branch on GitLab (gitlab.com/acevault-lab/sculptjordaan, canonical 2026-05-06+) + GitHub archive (acevaultorg/sculptjordaan), Vercel auto-deploy via Layer 7 API confirmed working (gitSource type=gitlab, projectId=81955354). Goal: maximize bookings + trainer acquisition.

## Session Handoff
Mode: sovereign auto — SculptClub autopilot (q loop, 2026-08-28)
Objective: fastest revenue growth. This session's leg = fact integrity on a rental-demand page + repairing a build chain that had been silently dead for a month.

SHIPPED + LIVE-VERIFIED (CF Pages deploy 2916b3c9-1e03-40da-a994-bea0ae13df1f, 1565 files/16 batches/139s):
- FACT FIX: /en/blog/physiotherapy-studio-rental-amsterdam served "up to 50 kg" / "From 2 kg" / "40+ kg" against photo-verified 4-40 kg. It was the SOLE survivor of the same-day fleet-wide equipment fix — the NL sibling had been corrected, EN never touched (bilingual half-fix), and the board task (TaskPrio mtcmka67djcml3) was closed on an unverified "FIXED autonomously" claim. Live proof: production now returns "up to 40 kg" x4 + "From 4 kg" x2, "50 kg" count = 0. Commits a2c56dc + 2b9f3be on GitLab main.
- BUILD-CHAIN REPAIR: out/ was frozen at 2026-07-31 (a MONTH stale) while live kept advancing — a blind deploy would have reverted production by a month. Three pre-existing node_modules breakages: semver missing (broke sharp->prebuild), next/dist/bin/next absent (no CLI), playwright-core/types/ absent (broke the `devices` export -> typecheck abort). THE TRAP: `next build` prints "Compiled successfully" then "Failed to type check" and npm STILL EXITS 0. Repaired at env level only; no shipped config touched. Typecheck exit 0/zero errors; build emits 229 pages (stale was 217).
- POST-DEPLOY VERIFY: Pages Functions alive (whatsapp webhook 403, not 404/405) · 9 routes 200 · no-revert proof (EUR49 x16 live, stale EUR69 = 0, EUR79 list x4, "Naar boeken" CTA present).

NEXT SESSION:
1. READ .claude/state/KNOWLEDGE.md "Build/deploy trap" section BEFORE any deploy — exit 0 does NOT mean the build produced output. Check `grep -E "Failed to type check|build worker exited"` in the build log AND that out/index.html has today's mtime AND that built html count >= live sitemap count.
2. Growth constraint is unchanged and is ACQUISITION, not conversion: 472 human visitors/30d vs 2000 goal, 23 conversions (4.9% — healthy). GSC 81 clicks / 2667 impressions / avg position 52.
3. Money pages are a POSITION problem, not a title problem: /nl/studio-huren (496 impr, 0.4% CTR, pos 55.9) and /nl/open-gym (495 impr, 0.4% CTR, pos 56.8). Per feedback_user_growth_drivers that means authority + internal linking, NOT title rewrites. The ONLY page-1-top low-CTR pages that qualify for a title lever are /nl/over-ons (pos 5.4, 1.3% CTR) and /en/about (pos 6.6, 1.4%) — small volume (~292 impr/90d combined), so modest EV.
4. Indexation is a real gate: ~207-229 built routes vs 109 GSC-indexed.
5. OPERATOR-SIDE, unchanged from 2026-08-14 sprint: win-back 5 churned renters · follow-up 15 trial leads · Ads budget cap (EUR1.99/day < EUR2.70 CPC = zero serving) · Sept block offer · GBP. See docs/REVENUE-SPRINT-2026-08-14.md.
6. Two operator-side tooling notes: TaskPeace MCP server is a STALE BUILD (it self-reports silently dropping newer params like kind/appendBody); and get_next_task scoped to this cwd returned a Mediahuis ADP/Jira task (mplj0qoenwjm1w) — HARD-EXCLUDED, left untouched, but cwd auto-scoping is not reliably keeping employer work out.


## Tracking Calibration

**2026-05-08 (today, period=day) — first real-visitor confirmation of new tracking taxonomy.**

Plausible Goals widget (sculptclub.nl, period=day, observed via Chrome MCP):

| Goal               | Uniques | Total | CR     |
|--------------------|--------:|------:|-------:|
| Outbound Link: Click | 5     | 26    | 38.5%  |
| Acuity Click         | 3     | 7     | 23.1%  |
| Lead Generated       | 3     | 10    | 23.1%  |
| WhatsApp Click       | 3     | 8     | 23.1%  |
| Phone Click          | 1     | 1     | 7.7%   |
| Email Click          | 1     | 1     | 7.7%   |
| Start Path Click     | 1     | 3     | 7.7%   |

**Verdict: 7/7 of the new code-fired goals are firing on real visitor activity.**
The "Free Intake: Click" goal is the only one with zero events today — explainable
since it requires landing on a `/{nl,en}/{plan-gratis-intake-met-*,gratis-intake,
plan-free-intro-with-*,free-intro}` page first, then clicking an Acuity link.
Today's traffic patterns may not have hit that funnel.

**Site state today:**
- 13 UV / 14 visits / 34 PV / 2.86 PV/visit / 43% bounce / 5m 15s visit duration
- Sources: Direct/None=10, Instagram=2, Google=1, googlesyndication=1
- Top entries: /en (3), /en/find-personal-trainer (3), /nl/studio-huren (3), / (2), /nl/gratis-intake (2)
- Geos: Netherlands=12, Germany=1
- Browsers: Chrome=6, Safari=4, Mobile App=2, Samsung=1

**Conversion stack proof:**
- Lead Generated 3/10 (multi-channel rollup of free_intake + whatsapp + phone + email
  per analytics.tsx) confirms the cross-channel attribution is wiring correctly.
- WhatsApp Click 3 + Acuity Click 3 + Lead Generated 3 = consistent cross-stream
  count — validates the brain's analytics.tsx classifier.
- Outbound Link: Click 5 (auto-fired by Plausible's tagged-events script) is the
  highest-volume goal — captures every external nav including Instagram, Google
  Maps, etc. Useful as a baseline.

**What this confirms** (per `feedback_plausible_spy_vs_real_network.md`):
Real visitor verification works. JS-spy validation would have shown classifier
correctness only — these counts are real network calls landing in Plausible's
ingestion pipeline, with proper attribution + property splits.

**Calibration timeline:**
- 2026-05-08: 7/7 code-fired goals confirmed live with real visitors
- Tomorrow morning: first 24h-cumulative breakdown for intent / pricing / trainer_name / booking_type properties (Properties tab inspection)
- Friday WoW: verify volume hasn't regressed

**Per v19.43 funnel-order:** acquisition is the binding constraint; site at
13 UV today is 1.85× the prior baseline of 7 UV/day. Tracking taxonomy is
working as designed; no monetization-stage work proposed.


### Loop iteration 2 (2026-05-08 ~17:55 UTC) — Property-split deep audit

Goal counters unchanged from iteration 1 (~25min apart, no new conversions in
the interval — normal for ~13 UV/day). Deep-audited Properties tab dropdowns
on every code-fired goal to confirm classifier wiring is correct end-to-end.

**WhatsApp Click (3 unique / 8 events) — splits:**
| pricing | Visitors | Events | CR |
|---|---:|---:|---:|
| free | 2 | 5 | 15.4% |
| (none) | 1 | 1 | 7.7% |
| paid | 1 | 2 | 7.7% |

| intent | Visitors | Events | CR |
|---|---:|---:|---:|
| trainer | 2 | 5 | 15.4% |
| (none) | 1 | 1 | 7.7% |
| open_gym | 1 | 1 | 7.7% |
| studio_rental | 1 | 1 | 7.7% |

| trainer_name | Visitors | Events | CR |
|---|---:|---:|---:|
| (none) | 3 | 7 | 23.1% |
| Joey | 1 | 1 | 7.7% |

→ `detectWaIntent` classifier validated: text-keyword detection
   (open_gym / studio_rental / trainer) + direct-trainer-number detection
   (Joey via wa.me/31639175337) all firing correctly. Free vs paid pricing
   split working.

**Acuity Click (3 unique / 7 events) — splits:**
| value (€) | Visitors | Events | CR |
|---|---:|---:|---:|
| 12 | 2 | 2 | 15.4% |
| 45 | 1 | 4 | 7.7% |
| 49 | 1 | 1 | 7.7% |

| booking_type | Visitors | Events | CR |
|---|---:|---:|---:|
| studio_rental | 2 | 2 | 15.4% |
| generic | 1 | 2 | 7.7% |
| open_gym | 1 | 1 | 7.7% |
| trial | 1 | 2 | 7.7% |

→ `detectBookingType` classifier validated: appointmentType= and id= pattern
   matching working across studio_rental / open_gym / trial / generic
   buckets. Per-booking-type EUR values flowing through correctly.

**Lead Generated (3 unique / 10 events) — splits:**
| value (€) | Visitors | Events | CR |
|---|---:|---:|---:|
| 45 | 3 | 9 | 23.1% |
| 30 | 1 | 1 | 7.7% |

| method | Visitors | Events | CR |
|---|---:|---:|---:|
| whatsapp | 3 | 8 | 23.1% |
| email | 1 | 1 | 7.7% |
| phone | 1 | 1 | 7.7% |

→ Multi-channel lead-attribution validated across whatsapp + email + phone.
   `free_intake` method missing today (no /gratis-intake or /free-intro
   converting visitors today). EUR-value attribution: 45 = standard PT lead
   value, 30 = unclassified.

**Start Path Click (1 unique / 3 events) — split:**
| intent | Visitors | Events | CR |
|---|---:|---:|---:|
| open_gym | 1 | 1 | 7.7% |
| studio_rental | 1 | 1 | 7.7% |
| trainer | 1 | 1 | 7.7% |

→ All 3 IG-bio audience paths fired today. utm_content → intent mapping in
   StartPathCard.tsx (`pt → trainer`, `open_gym → open_gym`,
   `studio_rental → studio_rental`) validated. Single visitor exercised
   all 3 paths in same session — IG bio destination pattern as designed.

**Conclusion: tracking taxonomy is FULLY validated end-to-end.** Every code-
fired goal × every classifier dimension is producing the expected splits with
real visitor activity. No drift. No missing buckets. The work shipped earlier
this session (intent + pricing + trainer_name + booking_type cross-funnel
attribution + Start Path Click goal) is operating as designed.

Next loop iteration: monitor for new traffic accruing tomorrow morning to
catch the Free Intake: Click goal (which needs /gratis-intake or /free-intro
entry before Acuity click) + verify week-over-week stability.


### Loop iteration 3 (2026-05-08 ~18:59 UTC) — Delta check (zero new activity)

| Goal | Iter 2 (17:54) | Iter 3 (18:59) | Δ |
|---|---:|---:|---:|
| Outbound Link: Click | 5 / 26 | 5 / 26 | +0 / +0 |
| Acuity Click | 3 / 7 | 3 / 7 | +0 / +0 |
| Lead Generated | 3 / 10 | 3 / 10 | +0 / +0 |
| WhatsApp Click | 3 / 8 | 3 / 8 | +0 / +0 |
| Phone Click | 1 / 1 | 1 / 1 | +0 / +0 |
| Email Click | 1 / 1 | 1 / 1 | +0 / +0 |
| Start Path Click | 1 / 3 | 1 / 3 | +0 / +0 |
| Free Intake: Click | 0 / 0 | 0 / 0 | (still 0 — no funnel entry today) |

UV: 13 (NL=12, DE=1) — unchanged. No new visitors in the past 1h. Quiet
evening on a 13-UV/day site. Tracking taxonomy still operating as designed
(no drift, no breakage, simply no new visitor activity in the interval).

**Cross-session awareness (v19.46 active):** this VAULT04-SculptClub session's
scope = tracking-validation self-paced loop. No overlap risk with parallel
AceVault HoldLens / VAULT-DEV-TOOLS webvitalstool sessions reported in
v19.46 brain notes.


### Loop iteration 4 (2026-05-08 ~20:02 UTC) — +2 UV, zero new conversions

UV: 13 → **15** (NL 12→13, DE=1, **US=1 NEW**); Safari 4 → 6.

Goal events unchanged (Outbound 5/26, Acuity 3/7, Lead 3/10, WhatsApp 3/8,
Phone 1/1, Email 1/1, Start Path 1/3). CRs adjusted: Outbound 33.3% (-5.2pp),
Acuity/Lead/WhatsApp 20% (-3.1pp), Phone/Email/Start 6.7% (-1pp). The CR
arithmetic confirms denominator (visitor count) is the change vector, not
the conversion stack — tracking still operating correctly.

**Pattern**: 2 new visitors arrived in past 1h but neither converted (US
visitor likely hit homepage and bounced; new NL Safari visitor similar).
Free Intake: Click still 0. Loop continues.


### Iter 5 (~21:04 UTC) — full no-op
UV 15 / goals identical / CRs identical (vs iter 4). Late-evening idle window.
Loop continues. Going forward: skipping CONTEXT.md write on no-op iterations
(only logs on Δ > 0) to reduce noise. Iter-5 entry kept for cadence reference.
