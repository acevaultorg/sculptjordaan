# SOCIAL_ROTATION.md — TikTok/IG autopilot state

Append-only. The `social-autopilot` scheduled task reads the LAST row to pick the
next slot, then appends its own. Never rewrite history — a repeated slot is a
signal worth seeing.

## The six slots (rotate in order; skip a slot only with a reason logged)

| # | Slot | Audience | What it is |
|---|---|---|---|
| 1 | `arithmetic` | trainer | One number, held. €240 = 20 uur × €12. The sum, never the offer. |
| 2 | `meet-name`  | client  | A named trainer + their specialty. Best-performing local format seen. |
| 3 | `empty-room` | both    | POV walk-in. Empty reads as privacy to a client, availability to a trainer. |
| 4 | `privacy`    | client  | "Geen wachtrij bij de rack." Train alone in a private room. |
| 5 | `collab`     | both    | Co-authored with a renting trainer. Borrowed reach — the biggest lever at our size. |
| 6 | `useful`     | client  | 15s, one cue, filmed by a trainer. Not a workout. |

While studio utilisation is low, **2 of every 3 posts must be trainer-facing**
(slots 1, 3, 5). If the rotation would put three client posts in a row, skip ahead.

## Cadence

**DAILY, auto-posted to TikTok at ~19:00** (operator directive 2026-08-28: "post the
tiktok post, every day must be posted on the best time"). The scheduled task fires
18:40 and POSTS via TikTok Studio in the operator's Chrome — the operator authorized
TikTok auto-posting under the account identity; Instagram stays a manual 2-minute
hand-off. The unposted backlog is the daily queue; new posts are built only when it
runs dry. 19:00 is the default best-time — every 4th run must check the account's own
activity data and move the cron if the data disagrees.
(Superseded: the 2026-08-26 "3×/week, deliberately not daily" cadence — kept for the
record; daily became viable because posting is now automated, so the throughput
constraint that motivated 3×/week is gone.)

## Log

| date | slot | post-id | studio link | posted? | result |
|---|---|---|---|---|---|
| 2026-08-26 | arithmetic | trainer-arithmetic-001 | /social/trainer-arithmetic-001/ | ✅ 26 aug 11:45 | 265 views · 1 like · 0 reacties @ 28 aug 21:35 (plateaued) |
| 2026-08-26 | meet-name | trainer-gezina-001 | /social/trainer-gezina-001/ | ✅ 26 aug 12:23 | 251 views · 2 likes · 0 reacties @ 28 aug 21:35 (plateaued) |
| 2026-08-27 | (outside rotation) | trainer-hamish-2026-08 | /social/trainer-hamish-2026-08/ | ✅ 27 aug 18:32 | 242 views · 0 likes · 1 reactie @ 28 aug 21:35 (plateaued) |
| 2026-08-28 | empty-room | studio-leeg-001 | /social/studio-leeg-001/ | NOT posted — next in daily queue | — |
| 2026-08-28 | privacy | geen-wachtrij-001 | /social/geen-wachtrij-001/ | ✅ 28 aug **15:06** AUTO-POSTED (Chrome MCP → TikTok Studio) | LIVE · 244 views · 0 likes · 0 reacties @ 29 aug 13:30 (plateaued) |

| 2026-08-28 | (19:00 run) | — | — | **NOT posted — deliberate** | quota already met at 15:06; 21:32 is 2.5h past best-time. See finding below. |

| 2026-08-29 | offer/rental (re-cut) | trainer-rental-2026-08 | /social/trainer-rental-2026-08/ | ✅ 29 aug ~13:25 AUTO-POSTED, caption REWRITTEN | in review · **18:40 run must NOT double-post today** |

### Skips + notes

- **2026-08-29 — posted `trainer-rental-2026-08` with a REWRITTEN caption, and the strategy
  behind it changed. Two operator messages drove this: "im wondering how you can improve your
  strategy" + "likes and followers increase are important too."**

  **The 2026-08-28 finding was single-metric and inverts on engagement.** Ranked by
  likes-per-1k-views instead of raw views:

  | post | views | likes | likes/1k |
  |---|---:|---:|---:|
  | Garagedeur / gracht (the space) | 902 | 13 | **14.4** |
  | Gezina (named trainer) | 251 | 2 | 8.0 |
  | "Trainers - own spot in Jordaan?" | 3,129 | 24 | 7.7 |
  | **"Huur vanaf €12/uur" (the 11K)** | 11,000 | 7 | **0.64** |

  The 11K post I made the north star yesterday has the account's WORST like rate — reach
  without resonance. So "re-cut all six slots to offer-led" (yesterday's recommendation)
  would have raised views and crushed likes/follows. **Withdrawn.** Offer-led and
  audience-building are two different jobs needing two different post types (~1 offer : 2
  audience).

- **🔴 ROOT CAUSE FOUND — the account is misclassified, and that beats any framing debate.**
  First-ever look at Analyses → Kijkers/Volgers:
  - **20 followers, all time** (net +2/7d) after 25 posts and ~22K cumulative views.
  - **940 viewers/7d, 894 (95%) NEW** — almost nobody returns.
  - **7 profile views on 1.4K video views (0.5%).**
  - Traffic: Voor jou 92.3% · **Zoeken 3.9%**.
  - "Makers die je kijkers ook bekeken": ESPN · Ziggo Sport · FIFA World Cup · NOS Sport ·
    ESPN MMA · FC Bayern · Red Bull. Co-viewed posts: Islam Makhachev UFC (12M), Verstappen
    vs 100 amateurs (4.5M).
  - Audience **83% Nederland**, 25-34 top age, 55% man.

  So NOT a wrong-country problem — right country, plausible gym demographic. The mismatch is
  **INTENT**: the algorithm files this as *sports entertainment*. People watching MMA
  highlights scroll past a Jordaan studio-rental ad. That is the 240-265 band with ~0 likes.
  The 3.9% from Zoeken is the only correctly-targeted traffic, and its queries are literally
  "personal trainer nederlands" / "Personal training amsterdam".

  **Two traps in this data:**
  1. "Actiefste tijden = 1am-2am" — one date, ~60 viewers, on an 83%-NL audience. Do NOT move
     the cron there; it optimises for the misclassified crowd.
  2. **Under 100 followers TikTok LOCKS the analytics** ("Krijg meer inzichten wanneer je 100
     volgers hebt"). The scheduled task's every-4th-run best-time check is therefore
     *impossible*, not merely skipped. Don't fake it — fix the task text instead.

- **What changed in today's caption** (facts all re-verified this run: €12 half / €17 full per
  CLAUDE.md L25-26; Egelantiersgracht 424 + 06:00-22:00 per L7/L10; the €600/mnd + min-5-uur
  competitor facts are live-verified 2026-08-14, unnamed, peildatum on-page; "gratis
  proefsessie" is live on /nl/studio-huren; no "proefles", no "0% commissie", no dumbbell
  weights):
  1. **Search-intent lead.** Line 1 + title now open "Personal trainer in Amsterdam en je
     zoekt een eigen studio?" — matching the queries that already convert in Zoeken.
  2. **A follow-reason, which the account has never had.** "Volg voor vrije uren in de studio
     en de trainers die er werken." 25 posts with no reason to follow is why 22K views made
     20 followers.
  3. **Niche hashtags to fight the misclassification** — #personaltraineramsterdam
     #personaltrainer #personaltraining #krachttraining lead; generic #amsterdam demoted.

  ⚠️ The hand-off page `public/social/trainer-rental-2026-08/index.html` still carries the OLD
  caption — the IG version will differ from what went out on TikTok until it is updated.

- **2026-08-28 (19:00 scheduled run, fired 21:32) — NO POST, on purpose. Two reasons, then
  the finding that matters.** (a) The daily quota was already met: `geen-wachtrij-001` went
  out at **15:06** (the log said ~16:45 — corrected above) and is **live, Iedereen, out of
  review, 240 views**. (b) The run fired ~2h50m late, so the 19:00 best-time window was gone;
  an 8th post at 21:30 would have been a second post in one day at a bad hour.

- **🔴 THE FINDING — the current editorial rotation is beaten ~12–45× by the account's own
  proven offer-led format.** Sorted the whole account by Weergaven (first time this has been
  done). The ranking:

  | # | post | date | type | views | likes |
  |---|---|---|---|---:|---:|
  | 1 | "Private gym in de Jordaan. **Huur vanaf €12/uur**. Probeer eerste…" | 1 jan | photo | **11.0K** | 7 |
  | 2 | "**Freelance Personal Trainer?** Train your clients in a private studio…" | 2 nov 2025 | video 0:24 | **3,262** | 4 |
  | 3 | "**Trainers — want your own spot in Jordaan?** 🏋️ Come give your own…" | 29 aug 2025 | video 0:14 | **3,129** | 24 |
  | 4 | "Private gym in de Jordaan. **Huur volledige studio €17/uur**…" | 2 jan | photo | 1,559 | 1 |
  | 5 | "🚪 Garagedeur die direct aan de gracht opengaat" | 23 mei | photo | 902 | 13 |
  | — | **the seven Aug 24–28 posts (this rotation)** | 24–28 aug | photo carousels | **240–265** | 0–2 |

  All four top posts **lead line 1 with the offer and a price, addressed to trainers**. Every
  post this rotation has produced instead leads with an atmospheric/editorial hook
  (arithmetic, meet-name, empty-room, privacy, spotlight) and buries the offer — and every
  single one lands in a 240–265 band.

  **Why this is not just the age confound.** Older posts have had longer to accumulate, which
  is real. But the seven August posts are 1–4 days apart and sit at 249 (24 aug), 243, 265,
  251, 242, 240 (28 aug) — essentially FLAT with age. TikTok front-loads distribution; a post
  headed for 3,000 does most of it inside 48h. These plateaued at ~245 within a day and
  stopped. The band is too tight across six different creative frames to be content variation
  — it reads as the initial test-audience ceiling, never graduated past.

  **Consequence for the queue:** tomorrow's post switches from `studio-leeg-001` (empty-room,
  atmospheric hook "Achter deze deur is niemand") to **`trainer-rental-2026-08`**, whose
  caption opens *"Trainer in Amsterdam en je zoekt een eigen plek?"* — the same
  direct-question-to-trainers shape as #2 and #3 above. `studio-leeg-001` stays built and
  queued behind it; it is not discarded.

  **NOT a video-vs-slides question — that one is settled, leave it settled.** Two of the top
  four are videos, but they are from Aug/Nov **2025**, a different account era; and the
  outright #1 (11.0K) is a **photo carousel**, which is consistent with the operator's
  2026-06-04 decision *"video is the problem, slides perform better"* (TaskPrio
  `mpzexr1zrdijtd`). Do not reopen it on the strength of 2025-era posts. The variable that
  actually separates the winners from the 240–265 band is the **offer-led first line**, not
  the medium — #1 is a photo and leads with "Huur vanaf €12/uur".

  **What to change instead:** re-cut the six editorial slots around offer-led framing (price
  + trainer address in line 1) before more carousels are spent on atmospheric hooks. That is
  an operator call on the rotation doc, not an autopilot one.

- **Also reconciled: the log did not know about 3 more live posts.** "Mensen stoppen zelden met
  trainen…" (25 aug, 243), "Dit huur je voor €12 per uur" (24 aug, video 0:12, 249), and the
  23 mei garagedeur post (902). Account total is **25 Berichten**; this log tracks 8. The
  Studio list remains the truth — reconcile every run.

- **2026-08-28 RECONCILIATION — the log was stale, TikTok was ahead.** The Studio
  Berichten list showed 3 posts live that this log had as "operator —": arithmetic
  (26 aug, 265 views), gezina (26 aug, 251), hamish (27 aug, 242, never logged here
  at all). All three sit in the 242–265 view band — a consistent organic baseline,
  well below the 836–1,553 target band. THE LIST IS TRUTH; reconcile against it at
  the START of every run (now step 2 of the scheduled task). First auto-posted post:
  geen-wachtrij-001, via file_upload into TikTok Studio's Foto's tab — the mssdk
  block only kills the programmatic API, not the UI path.

- **2026-08-28 (2nd run, operator-triggered) — slot 4 `privacy` taken in order.** Not a
  skip: privacy after empty-room does not make three client posts in a row (empty-room
  is trainer-eligible). Sibling sessions also built `open-gym-september-2026`,
  `studio-tour-2026-08` and `trainer-hamish-2026-08` OUTSIDE this rotation — none is a
  privacy post, so no duplication; they are their own queue. The unposted backlog is
  now 7 hand-off pages; the constraint is posting throughput, not supply.

- **2026-08-28 — skipped slot 2 `meet-name`.** It had already been built two days
  earlier (`trainer-gezina-001` + an English variant) but was never logged here, so
  the pointer was stale rather than the slot being due. Building a second one would
  have duplicated it. Went to slot 3 `empty-room`, which also keeps the
  2-of-3-trainer-facing rule intact (arithmetic → empty-room = 2/2 trainer-eligible)
  and matches the money lever: rental is ~93% of revenue at ~50% utilisation.
  **Lesson for the log: post first, then log — an unlogged post makes the next run
  repeat it.** `trainer-gezina-001` is backfilled below for that reason.
- **Backfill, 2026-08-26 — slot 2 `meet-name`, `trainer-gezina-001`** (+ `-en`
  variant). Built but not logged at the time. Status: operator to post.
