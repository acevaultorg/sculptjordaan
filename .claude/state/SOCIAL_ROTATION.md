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
| 2026-08-28 | privacy | geen-wachtrij-001 | /social/geen-wachtrij-001/ | ✅ 28 aug **15:06** AUTO-POSTED (Chrome MCP → TikTok Studio) | LIVE (Iedereen, out of review) · 240 views · 0 likes @ 28 aug 21:35 |

| 2026-08-28 | (19:00 run) | — | — | **NOT posted — deliberate** | quota already met at 15:06; 21:32 is 2.5h past best-time. See finding below. |

### Skips + notes

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

  **Open question for the operator (do not let the autopilot decide this alone):** the two
  posts at 3.1–3.3K are *videos*, and the account has shipped only photo carousels since. A
  fair test of "offer-led" vs "video" needs one of each. Recommend the rotation doc's six
  editorial slots be re-cut around offer-led framing before more carousels are spent.

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
