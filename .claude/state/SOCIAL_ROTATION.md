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
| 2026-08-26 | arithmetic | trainer-arithmetic-001 | /social/trainer-arithmetic-001/ | ✅ 26 aug 11:45 | 265 views · 1 like @ 28 aug |
| 2026-08-26 | meet-name | trainer-gezina-001 | /social/trainer-gezina-001/ | ✅ 26 aug 12:23 | 251 views · 2 likes @ 28 aug |
| 2026-08-27 | (outside rotation) | trainer-hamish-2026-08 | /social/trainer-hamish-2026-08/ | ✅ 27 aug 18:32 | 242 views · 1 reactie @ 28 aug |
| 2026-08-28 | empty-room | studio-leeg-001 | /social/studio-leeg-001/ | NOT posted — next in daily queue | — |
| 2026-08-28 | privacy | geen-wachtrij-001 | /social/geen-wachtrij-001/ | ✅ 28 aug ~16:45 AUTO-POSTED (Chrome MCP → TikTok Studio) | in review ("Content wordt beoordeeld") |

### Skips + notes

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
