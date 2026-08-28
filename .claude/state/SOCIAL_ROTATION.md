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

**3×/week — Mon / Wed / Fri.** Not daily, deliberately: the constraint here has
never been ideas (50+ posts sit written and unposted) — it is throughput. A
cadence that gets kept beats a better one that doesn't. Ramp to 5×/week only
after four consecutive weeks land 3/3.

## Log

| date | slot | post-id | studio link | posted? | result |
|---|---|---|---|---|---|
| 2026-08-26 | arithmetic | trainer-arithmetic-001 | /social/trainer-arithmetic-001/ | operator | — |
| 2026-08-28 | empty-room | studio-leeg-001 | /social/studio-leeg-001/ | operator | — |
| 2026-08-28 | privacy | geen-wachtrij-001 | /social/geen-wachtrij-001/ | operator | — |

### Skips + notes

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
