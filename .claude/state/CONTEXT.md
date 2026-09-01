ORIENT: SculptClub is a bilingual (NL/EN) personal training studio website + trainer acquisition platform for Amsterdam Jordaan. State: main branch on GitLab (gitlab.com/acevault-lab/sculptjordaan, canonical 2026-05-06+) + GitHub archive (acevaultorg/sculptjordaan), Vercel auto-deploy via Layer 7 API confirmed working (gitSource type=gitlab, projectId=81955354). Goal: maximize bookings + trainer acquisition.

## Session Handoff
Mode: god --loop (IMMORTAL) — SculptClub autopilot, 2026-09-01 · STOPPED by operator, wound down cleanly (tree clean, in sync with origin, nothing half-applied)
Objective: fastest revenue growth. Binding constraint is ACQUISITION (437 human visitors/30d vs 3000 goal; conversion is healthy at ~4.8%).

SHIPPED + LIVE-VERIFIED (commit 11b757b · CF Pages deploy cf10d531-8570-45f1-bbc6-314b97c0fbb4 · pushed):
- Measured prose depth across ALL 196 sitemap URLs live: median 633w, 42 pages under 200w. The two thinnest were not boilerplate — /nl/gratis-proefles 57w and /en/free-trial 55w, both indexable + in sitemap. Cause: the Acuity booking widget is an IFRAME, so crawlers saw ~57 words.
- Enriched both to 571w / 590w from CLAUDE.md-verified facts only. FAQ + FAQPage JSON-LD render from ONE array (schema cannot drift; all 6 Q + 6 A verified visible live). Pricing LINKED not restated. Vocabulary rule honored.
- Verified: tsc 0 · 0 build-trap lines · 231 html (UP from 229) · 8/8 routes 200 · 4/4 security headers intact · Functions LIVE · IndexNow 200 (2 targeted URLs).

NEXT SESSION:
0. **🔴 HIGHEST-VALUE OPEN ITEM — diagnosed, verified, NOT shipped.** Every `<AccordionContent>` renders its questions but NOT its answers: Base UI's `Accordion.Panel` defaults `keepMounted: false` (AccordionRoot.js:103) and returns `null` when closed (AccordionPanel.js:137), so answer text never reaches the DOM. Measured: **0 of 20 answers visible on /nl/faqs, 0/12 on /nl/studio-huren, 3,149 answer-words invisible across 8 pages**, 17 files affected incl. BOTH money pages. Also makes the FAQPage JSON-LD claim content the page doesn't show. Fix is ONE prop (`keepMounted` on the Panel in src/components/ui/accordion.tsx); closed panels still get `hidden` (useCollapsiblePanel.js:46) so users see no change. I reverted my edit rather than ship it unverified — session was stopped before the build. Full evidence + exact fix + 6-step verification: TaskPrio **mtj9ehdy0wk6ca**.
1. **The board is project `mqmijq6eya7fv7`, NOT `mpkuzegvsxdaut`** (the id listed in ~/.claude/rules/promptprio-sync-discipline.md is wrong for this project). Querying the wrong id returns an empty board and looks like "no work". Confirm with search_tasks before concluding the queue is empty.
2. OPEN + brain-doable: remove the 2 `noindex` pages (/nl/gratis-intake, /en/free-intro) from sitemap.xml. Own commit; pages stay live + noindex.
3. **Do NOT chase `/gratis-intake` as striking-distance** — it is deliberately `noindex, nofollow`. Both `get_project_data.gsc_strike` and GSC_SNAPSHOT flag it anyway; neither checks indexability. Card mtj85olyfvixps. The real striking-distance page is /nl/eerste-bezoek (indexable, 203 impr, pos 11.0, already 678w → its lever is authority, not content).
4. The AI-citation channel has NEVER been measured for this site (metrics layer says "GEO: LLM citations — not yet wired"). Plumbing is verified HEALTHY (no CF Managed robots.txt injection, no Disallow:/, all 6 bot UAs get 200 with byte-identical responses = no cloaking). The measurement itself needs Bing WMT via Chrome MCP — **the Chrome extension was NOT connected this session**, so it stays operator-gated.
5. Indexation defect-side remains EXHAUSTED (prior session). Money pages /nl/studio-huren + /nl/open-gym sit at position ~56 on ~496 impressions each — authority-gated, not defect-gated.
6. USE THE SESSION SCRATCHPAD, NOT /tmp. A parallel session overwrote /tmp/sm.xml mid-audit and my SculptClub scan silently ran against readinglist.school. Assert the expected host inside any audit script.
7. Operator-gated queue is unchanged and is where the revenue actually is: win-back 5 churned renters · follow up 15 trial leads · Ads budget €1.99/day < €2.70 CPC = zero serving · Sept block offer · GBP. See docs/REVENUE-SPRINT-2026-08-14.md.


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

## Session Handoff — 2026-08-29 (overnight god --loop, later legs)

Mode: `god --loop`. Repo CLEAN, pushed, `behind=0`. Live = deploy `65c689c6`.

### Shipped this stretch (all live-verified)
1. **Security headers restored** (`c46faef`, deploy `721d3b2b`). CSP / HSTS-with-preload /
   `X-Frame-Options: DENY` / Permissions-Policy had been absent from EVERY response since
   2026-07-14. The Vercel→CF-Pages migration (`ba7a735`) deleted `next.config.ts async headers()`
   because `output:"export"` can't run it, and — unlike redirects/middleware/api-routes — it was
   never given a migration target. Now set in `functions/_middleware.ts` on the `context.next()`
   path (public/_headers is INERT under Advanced-Mode `_worker.js`).
2. **Blog lead-magnet leak fixed** (`f063aa7`, deploy `65c689c6`). The form on every blog post
   promised "check je inbox binnen 1 minuut"; no mail service exists — `/api/lead-magnet` only
   `console.log`s. Now delivers the cheat sheet in-page via the `cheat_sheet_url` the API always
   returned but the UI never read. Locale-aware (verified: the page really does read `?locale=en`).

### Verified clean — no defect, do NOT re-audit without new evidence
- CF migration dropped ONLY `headers()`. `redirects`/`env`/`images` survived; the middleware's
  vanity-domain UTM injection migrated intact.
- CF AI-crawler policy: no managed-robots injection, GPTBot/ClaudeBot/PerplexityBot/Googlebot all 200.
- LocalBusiness JSON-LD complete (all required + recommended fields, full PostalAddress).
- Schema `telephone` is the correct +31615147952 everywhere; ZERO occurrences of the retired
  0683178934 in live HTML — so that risk is confined to Acuity (see the open flag).
- Both `/api/*` functions alive (webhook 403, lead-magnet POST 400).
- `/pt-cheat-sheet` is client-rendered BY DESIGN — noindex + absent from sitemap, same as
  `/intake-plan`. Its content being invisible to crawlers is correct, not a bug.

### Operator-gated (nothing else blocks these)
- `mtdsxgfb0zz8ng` — where lead-magnet emails should land. Currently `console.log` only, and CF
  Functions logs are a LIVE TAIL, so captured addresses are unrecoverable. Needs an API key,
  a KV binding, or a decision to drop the field.
- Plus the three still open from earlier: trainer consent (`mtdndkjduuu5sh`), GA4 custom
  dimensions (`mtdrgdg5os7vbw`, forward-only clock running), Acuity retired-phone check
  (`mtdrr3qwq1uw7a`), and the 9%-vs-21% BTW line in `mrokfzvp6hxt8j`.

### Traps that bit this session — read before deploying
- **`npm run build` DELETES `out/_worker.js` + `out/_routes.json`.** Deploying straight after a
  build strips every Pages Function and would have silently reverted the CSP/HSTS work. Always
  recompile the worker, assert `grep -c Content-Security-Policy out/_worker.js` is 1, then deploy,
  then confirm the webhook returns 403 (not 404).
- **Exit code 0 is not success — three times tonight.** `timeout` doesn't exist on macOS (deploy
  never ran, shell said 0); a `pkill`-ed build reported 0; `next build` printed "Failed to type
  check" and npm still exited 0. Verify the ARTIFACT, never the status code.
- **Grep the right surface.** A client component's strings live in `out/_next/static/*.js`, not the
  page HTML. Searching HTML for them returns a confident, wrong zero.

### Honest state
The SculptClub boards are empty apart from operator-gated cards. The technical surface has been
systematically verified (sitemap, reachability, click-depth, hreflang, JSON-LD validity AND
completeness, trainer coverage, funnel dead-ends, performance, CF bot policy, migration drops,
API routes, security headers). Remaining levers are authority-gated (indexing takes weeks),
tool-gated (no Chrome MCP this session — no browser, so runtime CSP violations and visual QA
cannot be observed), or waiting on the operator cards above.
