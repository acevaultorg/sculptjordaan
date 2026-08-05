# ClassPass ⟂ Full Studio — the no-overlap rule

**Operator directive 2026-08-05:** *"we prioritise full studio. for all hours full studio is ever booked"* + *"for the hours that never had full studio booking, we can offer classpass"*.

## Why this matters (the conflict)

Full Studio = **fully private**, the whole room. Open Gym (incl. ClassPass) puts strangers in that room.
So a ClassPass Open Gym slot and a Full Studio rental **cannot coexist in the same hour**.

Revenue asymmetry makes the priority obvious:

| | per hour | share of revenue |
|---|---|---|
| Studio rental (Full €17/h, Half €12/h) | €12–24 | **~93%** |
| ClassPass Open Gym | ~€3–4 effective (€38.50/4wk at 3% fill) | ~1% |

A ClassPass booking that blocks a Full Studio rental **destroys ~4–6× its own value**. Hence: Full Studio always wins.

## The rule

> ClassPass Open Gym may ONLY be offered in an hour that has **never** had a Full-Studio-class booking in the entire Acuity history.

"Full-Studio-class" = anything that occupies the whole room:
`Hele Studio / Full Studio 60` · `Rent Full Studio 90` · `Rent Full Studio (try for free)` · `Free try out: Full Studio 60` · `Partner Full Studio` · `<Trainer> - Full Studio (SculptClub Partner)` · `2 people (try for free)` · small-group classes · `70/30% photoshoot` · `Studio help *`.
(Half Studio does **not** conflict — the other half can run Open Gym simultaneously.)

## Ground truth — full Acuity export 2025-01-01 → 2026-12-31

1,642 appointments exported (Reports → Import/Export → CSV). **695 whole-room bookings** across **90 distinct (day, hour) slots**.

Full-studio bookings per weekday-hour (count in brackets):

```
Mon  6(3) 7(5) 8(6) 9(2) 10(2) 11(3) 12(3) 13(4) 14(1) 15(7) 16(7) 17(16) 18(23) 19(17) 20(9)
Tue  7(19) 8(2) 10(1) 11(2) 12(8) 13(7) 14(6) 15(4) 16(7) 17(16) 18(46) 19(21) 20(3)
Wed  7(7) 8(7) 9(5) 10(5) 11(3) 12(2) 13(2) 14(3) 15(3) 16(7) 17(11) 18(18) 19(5) 20(19) 21(2)
Thu  7(5) 8(7) 9(10) 10(7) 11(2) 12(6) 13(7) 14(5) 15(8) 16(2) 17(1) 18(34) 19(20) 20(7) 22(1)
Fri  6(20) 7(2) 8(13) 9(9) 10(7) 11(7) 12(6) 13(9) 14(11) 15(8) 16(9) 17(6) 18(21) 19(9) 20(1)
Sat  8(1) 9(8) 10(7) 11(10) 12(8) 13(8) 14(1) 15(2) 16(8)
Sun  8(4) 9(2) 10(5) 11(11) 12(3) 13(3) 14(3) 15(2)
```

## ✅ The ONLY hours ClassPass may be offered

Opening hours are **06:00–22:00 every day** (corrected 2026-08-05 — the old "06:30" in code+docs was wrong), so start times run 06:00 → 21:00 (a 21:00 class ends at close).

| Day | ClassPass-safe hours |
|---|---|
| **Mon** | 21:00 |
| **Tue** | 06:00 · 09:00 · 21:00 |
| **Wed** | 06:00 |
| **Thu** | 06:00 · 21:00 |
| **Fri** | 21:00 |
| **Sat** | 06:00 · 07:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |
| **Sun** | 06:00 · 07:00 · 16:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |

**23 safe slots/week.** This is a *cap*, not a target — offering fewer is always safe.
(Mon 06:00 and Fri 06:00 are NOT safe — 3 and 20 Full Studio bookings respectively. Early Friday is a real rental hour.)

Note how cleanly this matches the utilisation data: weekend afternoons/evenings were the dead zone (Sat 26% / Sun 13% utilisation, Sat+Sun 16–22h had **zero** bookings in 13 weeks). ClassPass fills exactly the hours the rental business never wanted — which is the whole point.

## Where the schedule actually lives

The Acuity class **"Open Gym ClassPass" (id 89359957) is dormant** — it has no offered times ("This is not yet available for scheduling"). ClassPass slots are therefore **managed inside the ClassPass partner dashboard**, not synced from Acuity.
→ Fix location: studios.classpass.com → Schedule.

## ✅ Executed 2026-08-05 — the conflict is gone

Before: **14 recurring ClassPass slots/week, 11 of them sitting on hours Full Studio actually rents.**
Worst offender: Wed 20:00 — an hour with **19 historical Full Studio bookings** — was open to ClassPass.

Deleted (ClassPass → Manage → Schedule settings → row → Edit class schedule → Delete; sets the series end-date to today, **does not cancel anyone's existing booking**):

| Slot | Full Studio bookings in that hour |
|---|---|
| Mon 10:00 | 2 |
| Mon 12:00 | 3 |
| Mon 14:00 | 1 |
| Mon 16:00 | 7 |
| Mon 20:00 | 9 |
| Wed 12:00 | 2 |
| Wed 13:00 | 2 |
| Wed 20:00 | **19** |
| Wed 21:00 | 2 |
| Fri 19:00 | 9 |
| Fri 20:00 | 1 |

Kept (all zero-conflict): **Mon 21:00 · Tue 21:00 · Thu 21:00 · Fri 21:00** (3 schedule entries — Mon+Fri share one).

Verified across 8 weeks forward: only 21:00 classes remain, no Wednesday, no daytime.

## Maintenance

Re-run whenever rental patterns shift (quarterly is enough):

1. Acuity → Reports → Import/Export → Export to Spreadsheet, range `2025-01-01`→ today.
2. Bucket every whole-room type by `getDay()|hour`.
3. Any hour with ≥1 booking = **ClassPass forbidden, forever** (an hour that rented once will rent again).
4. Diff against the live ClassPass schedule; remove conflicts.

⚠️ Never widen ClassPass into a "quiet" hour just because it looks empty this month — the rule is *ever booked*, across the whole history.

---

## 🔒 Why a one-time cleanup is NOT enough (and what guards it)

The set of "hours Full Studio has ever been booked" **grows**. A slot that is safe today becomes a
conflict the first time someone rents that hour — silently, with nothing to detect it.

**Guard:** scheduled task `classpass-fullstudio-conflict-guard`, **Mondays 07:02**. It re-exports
Acuity, recomputes the grid, diffs it against the live ClassPass schedule, removes any new conflict,
and reports. Definition + prompt: `~/.claude/scheduled-tasks/classpass-fullstudio-conflict-guard/SKILL.md`.

**Data + script live in** `../acuity-exports/` (CSV + `analyze-classpass-safety.py` + README).

### ⚠️ Export trap (cost me a wrong dataset once)
Pulling the CSV with an in-page `fetch()` returns **only non-cancelled rows** (1,642). The real form
download with *"Include canceled appointments"* ticked returns **1,951** — and 5 appointment types
appear only in the fuller set. Always use the form download.

### Verified against the complete history (2026-08-05)
1,951 rows · 30 appointment types · 822 whole-room bookings (incl. cancellations) · 93 distinct slots.

| Live slot | Whole-room bookings in that hour, ever |
|---|---|
| Mon 21:00 | 0 ✅ |
| Tue 21:00 | 0 ✅ |
| Thu 21:00 | 0 ✅ |
| Fri 21:00 | 0 ✅ |

### Residual risk (accepted, worth knowing)
"Never booked before" ≠ "will never be booked". A ClassPass booking on a safe hour still blocks a
rental *if one is wanted for the first time*. With 21:00 that risk is minimal (zero demand in 15
months). The structural cure would be releasing ClassPass slots only ~24h ahead so any advance
rental wins — worth exploring if ClassPass exposes a booking-window setting.
