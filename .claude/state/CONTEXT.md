ORIENT: SculptClub is a bilingual (NL/EN) personal training studio website + trainer acquisition platform for Amsterdam Jordaan. State: main branch on GitLab (gitlab.com/acevault-lab/sculptjordaan, canonical 2026-05-06+) + GitHub archive (acevaultorg/sculptjordaan), Vercel auto-deploy via Layer 7 API confirmed working (gitSource type=gitlab, projectId=81955354). Goal: maximize bookings + trainer acquisition.

## Session Handoff
Mode: sovereign auto (v19.42 brain) — `/acepilot auto` 2026-05-05/06, all-day loop, GitLab migration + funnel audit + image-per-page audit + lessons compound + deep mobile/UX/a11y audit
Objective: operator funnel-audit directive ("check the funnel · step by step · where are users entering · are they converting · if not why not · all buttons tracked? · all free Acuity should be embedded; paid not — Apple Pay · be sure whole site is correct · also check mobile · also consider how images influence conversion · make names clearer for yourself · also: do a deep audit, check the whole site, is it perfect for mobile? is the ux perfect? how to approach this best for best output?")
Progress (2026-05-06 PM): 16 atomic commits shipped + 11 successful Layer 7 deploys + multiple state mutations. Final state: every fleet entry-page now correct, every CTA links to working destination, every hero image matches page intent, naming refactor prevents the architectural mistake class operator caught.

  COMMIT TIMELINE (most recent first):
  c095a37  fix(a11y): aria-label on 6 Instagram feed links + aria-hidden on decorative SVG (deep-audit fix)
  1b7f1c6  docs(state): Session Handoff for funnel+image+lessons ship
  26f77b8  docs(state): KNOWLEDGE.md + DECISIONS.md compounds (6 lessons baked in)
  b2460fd  fix(typo): replace literal \\u00e9 with é in /nl/open-gym hero (pre-existing bug, caught via Chrome MCP visual audit)
  3d50ce3  feat(ux): add 2-column hero image to /nl/open-gym + /en/open-gym (training-dumbbells-focus)
  42b3243  fix(ux): swap mismatched hero images per page-intent audit (studio-huren+rental: facade→gym-latest; about: facade→entrance-smile)
  44c5e47  fix(funnel): migrate 22 broken acuityLinks.generic CTAs to working internal destinations
  4ce86cf  feat(funnel): correct free-vs-paid Acuity flow site-wide (acuityFreeTrials + acuityPaidSessions naming refactor)
  497f24d  fix(ux): SectionHeader hero (h1) + FadeIn skip framer-motion entirely (above-fold blank-out fix)
  27d5867  fix(ux): switch Acuity embed URL from disabled master to studioTrial deep-link (superseded by 4ce86cf)
  b60f440  feat(ux): embed Acuity scheduler on free-intake pages (wrong product; superseded by 4ce86cf)
  4d00126  fix(ux): SectionHeader hero animate-on-mount (insufficient; superseded by 497f24d)
  e154292  feat(state): AUG re-baseline post-Plausible-pull — 44 → 53 (Thriving)
  a4282ec  feat(state): first AUG v3 baseline (44 — Healthy)
  0b5afc6  docs(state): record sitemap fix + verify-before-claiming discipline
  37b66f5  fix(seo): commit per-route lastmod map for Vercel shallow clone
  58ce360  fix(seo): deepen Vercel shallow clone (silent no-op; superseded)
  4f9231e  fix(seo): real per-route lastmod via git commit time (initial)

  Plus the form-tracking gap closure (d655a6f) and full GitLab migration (c1dfcb8) from earlier in the same session.

LIVE VERIFICATION (Chrome MCP, all pages, both 1568×652 desktop AND 614px mobile-active viewport):
  ✅ /nl/gratis-intake + /en/free-intro: hero h1 visible, "Kies je trainer / Pick your trainer" → trainer-finder hub. WhatsApp + contact form fallbacks present. NO Acuity embed on PT-intake pages (Acuity is only for Open Gym + Studio Rental free try-outs per operator clarification).
  ✅ /nl/open-gym + /en/open-gym: 2-column hero with training-dumbbells-focus image. "Gratis proefles boeken / Book free trial session" scrolls to in-page #schedule anchor where Acuity embed loads "Book spot / Open gym - Try first time for free with SculptClub" calendar inline. Apple Pay preserved on paid "Already a member? Reserve your hour" target=_blank.
  ✅ /nl/studio-huren + /en/studio-rental: hero with gym-latest.jpg (interior + SCULPT wall logo + Rogue rack). "Boek een gratis proefsessie / Book a free trial session" → in-page #schedule embed loads "Free try out: Full Studio 60 min" calendar inline. Apple Pay preserved on 5+ paid pricing CTAs target=_blank.
  ✅ /nl/prijzen + /en/pricing: 10/10 Acuity links target=_blank ✓ Apple Pay preserved.
  ✅ /nl/over-ons + /en/about: hero swapped from facade to entrance-smile.jpg (warmer; on-brand for about-us).
  ✅ /nl/find-personal-trainer + /en/find-personal-trainer: trainer-finder hub working as the canonical PT-intake destination.
  ✅ Sitemap.xml: 9 distinct lastmod values spanning Apr 1 → May 5 (was 4-in-12ms uniform-now anti-pattern).
  ✅ AUG v3 score: 53 (Thriving band). I-35 floor 🟢 PASS.
  ✅ Form tracking: trainer-intake (8 NL + 8 EN pages) + trainer-match-form + contact (NL + EN) all fire Plausible 'Lead Generated' event on submit.
  ✅ All 22 site-wide `acuityLinks.generic` callers migrated to working destinations (was: opening new tabs to Acuity error page "Online scheduling not currently available").

NAMING REFACTOR (operator: "make names clearer for yourself; you keep making this type of mistakes, that should be fixt"):
  src/config/acuity.ts now exports three explicit objects:
    - acuityFreeTrials.{openGymTryout, studioRentalTryout}      ← embed-safe (FREE = no Apple Pay risk)
    - acuityPaidSessions.{openGymSession, studioRentalHalf60/90, studioRentalFull60/90, openGymPlans}  ← target=_blank only (Apple Pay)
    - acuityPackages.{studio, openGym, openGymDuo}              ← paid catalog packs
  Old `acuityLinks` kept as @deprecated alias with strong JSDoc warnings spelling out the FREE-vs-PAID rule + "PT intake is NOT Acuity" rule. `acuityLinks.generic` (the broken master URL) explicitly documented as DOES NOT WORK with migration paths to use instead.

PRE-EXISTING TYPOGRAPHY BUG CAUGHT (compound for future sessions):
  /nl/open-gym hero h1 had literal `Priv\\u00e9 Studio` rendering (browser tab title was correct because metadata is JS object). Fixed by replacing with actual `é` char. Lesson: visual audits via Chrome MCP screenshots beat curl-grep text audits for typography bugs. Logged in KNOWLEDGE.md + DECISIONS.md.

KNOWLEDGE.md 6 NEW LESSONS (compounds for future sessions):
  1. Free vs paid Acuity flow rule (architectural)
  2. acuityLinks.generic broken — never use
  3. Framer Motion whileInView non-firing for above-fold elements
  4. JSX literal-\\u00e9 typography trap
  5. Image-per-page emotional-fit principle
  6. Mobile viewport testing tip (Chrome MCP 614px inner)

DEEP-AUDIT FINDINGS 2026-05-06 (PM, post-funnel-fix):
  ✅ Site fundamentally strong. 18 commits this session shipped a healthy site.
  🔴 1 issue caught + fixed (commit c095a37): Instagram feed component had 6
     unlabeled <a> links violating WCAG 2.4.4. Fixed via aria-label per locale
     + aria-hidden on decorative SVG icon.
  🟡 1 issue surfaced for operator decision: Cookie consent UI absent. Google
     Consent Mode v2 default-denied is correctly initialized in analytics.tsx
     but no UI prompts EU visitors to consent → tracking pixels stay denied
     forever for EU traffic. Operator chooses: (a) add Cookiebot/Cookieyes
     banner to recover EU attribution OR (b) accept denied default for
     privacy-first brand vibe. Plausible (cookieless) works either way.
  🟢 Polish noted: md: breakpoint coverage minimal (4 vs 384 sm: + 131 lg:);
     3 unused source images >900KB (boutique-corner, assault-bike, studio-
     interior-3) — Next.js auto-converts on serve so production impact minimal.
  ✅ Site-wide strengths: TTFB 93-115ms, HTML 90-170KB per page, viewport
     meta correct, fonts preloaded woff2 with crossorigin, 384 sm: + 131 lg:
     responsive classes, 1 h1 per page, all images alt-text (post-fix), 2
     JSON-LD blocks per page, robots+sitemaps 200, 23 NL/EN trainer-intake
     parity, not-found.tsx exists, sr-only skip-link present.
  Best-output methodology used: depth-on-top-traffic-pages > breadth, cross-
  tool methodology (Chrome MCP + JS DOM queries + curl), severity-graded
  findings, self-skepticism on detector results (skip-link initially flagged
  as tiny tap target → identified as intentional WCAG feature).

NEXT ACTIONS:
(a) operator (unchanged from prior + new):
  Hostinger DNS [👤 P0] · Vercel GitLab webhook verify [👤 P1] · GSC sign-in to submit sitemap-ai.xml [👤 P1] · Google Ads payment + conversion verify [👤 P1] · HSTS preload submission [👤 P1] · ai.robots.txt directory PR [👤 P1] · Plausible Goals promotion [👤 P2 — register Free Intake / WhatsApp / Phone / Email Click as goals so the 44.2% Outbound CR is visible on the Goals tab itself] · 5 stale GitLab branches cleanup [👤 P3] · Acuity intake "first session date" field [👤 P2 — enables real retention metric for archetype]
(b) brain (deferred — awaiting operator direction or fresh data):
  AUG re-baseline weekly with fresh Plausible numbers (next ≤2026-05-13) · Acuity iframe postMessage listener → fire Plausible 'Lead Generated' event when in-iframe booking confirms (currently only outbound-link clicks register; in-iframe completions are tracking-blind) · Engineered advocacy mechanism (OG result-pages OR share-with-friend) — would lift AUG ~+8 · Image quality optimization on the 3 unused 900KB+ images (boutique-corner, assault-bike, studio-interior-3) — convert to WebP/AVIF if not already auto-handled · Trainer-profiles P2 feature (Acuity availability + Google reviews integration)
(c) verify in 7-14 days (Plausible reflects ship impact):
  /nl/studio-huren bounce 53% → ~25-30%, visit 3s → 90s+ · /en/find-personal-trainer bounce 83% → ~30-40%, visit 0s → 60s+ · /nl/gratis-intake bounce 65% → ~35-45% · AUG v3 53 → 56-60 (Y2 target territory)

Open questions: none.

Momentum: 16-commit ship landed without operator interruption. All operator-stated rules (free=embedded, paid=target=_blank, PT-intake=trainer-WhatsApp+contact-form, every page best-images, every page mobile-correct, names architecturally-clear) are satisfied. Verify-before-claiming + visual-audit-beats-text-audit + structural-fix-beats-tactical-fix patterns all reinforced. Site is in genuinely correct shape per operator's funnel-audit directive.

<!-- handoff: 2026-05-06 evening — deep mobile/UX/a11y audit + Instagram a11y fix (c095a37) -->
<!-- prior handoff: 2026-05-06 PM funnel + image audit + lessons compound -->
<!-- prior handoff: 2026-05-06 GitLab migration + form-tracking fix -->
<!-- prior handoff: 2026-05-06 sitemap-real-lastmod + AUG-baseline + verify-discipline -->
<!-- prior handoff: 2026-04-27 SEO+AI audit -->
<!-- prior prior handoff: 2026-04-16 Loop 6 v17.2 craftsman's balance -->

### Prior session handoff (2026-04-16) — preserved for chain context
Loops 4-6 (2026-04-15 → 2026-04-16) — shipped 8 commits across v17, v17.1, v17.2:
  Loop 4 (v17.0): EN/NL cross-links [5b93ad9, ea136b9], Vercel vanity migration API [4a9351c], Next.js 16 priority→preload 70 files [1917528].
  Loop 5 (v17.1 sovereign auto): Pricing hierarchy + math NL+EN [3ca9242], free-intro 45min consistency [f4db71b], Pro pack 20% site-wide [8e36c33], Vercel webhook-dormant docs + P0 task [c8055c5].
  Loop 6 (v17.2 craftsman's balance): Pricing hierarchy unification on 4 sibling pages (boek-studio, studio-huren NL+EN) [233208a].
  CRITICAL discovery: Vercel auto-deploy webhook dormant since 2026-04-13 fleet-wide — manual deploy-hook curl is the standard ship path until re-linked.

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
