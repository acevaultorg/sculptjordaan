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

> ClassPass Open Gym may ONLY be offered in an hour that has **never** had a whole-room booking in the entire Acuity history — cancellations included.

**Whole-room** (conflicts): `Hele/Full Studio 60` · `Rent Full Studio 90` · `Rent Full Studio (try for free)` · `Free try out: Full Studio 60` · `2 people (try for free)` · `Partner Full Studio` · `<Trainer> - Full Studio (SculptClub Partner)` · `Studio rent` · `Rent studio: PT + Client (2p)` · small-group classes · `70/30% photoshoot` · `Studio help *`.

**Not a conflict:** every `Half Studio` variant (the other half can run Open Gym at the same time) and Open Gym itself.

Opening hours are **06:00–22:00, every day** (corrected 2026-08-05 — "06:30" was wrong in 78 files), so valid start times are 06:00 → 21:00.

## Ground truth — complete Acuity export

`2020-01-01 → 2027-12-31`, **including cancelled** — refreshed **2026-08-30**: **2,186 rows · 30 appointment types · 944 whole-room bookings · 96 distinct weekday-hour slots.**
(Prior 2026-08-05 export: 1,951 rows · 822 whole-room · 93 slots. File: `acuity-full-export-2026-08-30.csv`.)

Whole-room bookings per weekday-hour (count in brackets):

```
Mon  6(3)  7(9)  8(14) 9(9)  10(2) 11(4)  12(3) 13(5)  14(1)  15(7) 16(7)  17(18) 18(34) 19(36) 20(11)
Tue  6(1)  7(27) 8(7)  9(2)  10(8) 11(8)  12(9) 13(7)  14(6)  15(5) 16(9)  17(24) 18(57) 19(22) 20(3)
Wed        7(13) 8(14) 9(11) 10(7) 11(5)  12(2) 13(4)  14(5)  15(4) 16(9)  17(15) 18(24) 19(8)  20(20) 21(2)
Thu  6(1)  7(9)  8(13) 9(15) 10(13) 11(4) 12(8) 13(7)  14(5)  15(9) 16(4)  17(5)  18(37) 19(21) 20(8)  22(1)
Fri  6(26) 7(3)  8(16) 9(10) 10(7) 11(11) 12(6) 13(12) 14(14) 15(8) 16(9)  17(7)  18(24) 19(14) 20(1)
Sat        7(1)  8(3)  9(10) 10(10) 11(12) 12(8) 13(10) 14(1) 15(3) 16(11) 17(1)
Sun        7(1)  8(5)  9(4)  10(8) 11(12) 12(4) 13(4)  14(4)  15(3)
```

## ✅ The ONLY hours ClassPass may be offered

| Day | ClassPass-safe hours |
|---|---|
| **Mon** | 21:00 |
| **Tue** | 21:00 |
| **Wed** | 06:00 |
| **Thu** | 21:00 |
| **Fri** | 21:00 |
| **Sat** | 06:00 · 18:00 · 19:00 · 20:00 · 21:00 |
| **Sun** | 06:00 · 16:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |

**17 safe slots/week** (2026-08-30; was 20 on 2026-08-05) — a *cap*, not a target. Offering fewer is always safe.

⚠️ **The cap shrinks over time.** Three weekend hours were lost in 25 days — Sat 07:00, Sat 17:00, Sun 07:00 each took their first-ever Full Studio booking. The weekend dead zone that makes ClassPass viable is being eaten by real rentals, which is exactly the outcome the priority rule wants. Re-check this table before adding any slot; never add from memory.

Weekdays are almost fully rented 06:00–20:00; only 21:00 survives (plus Wed 06:00). The real headroom is the **weekend afternoon/evening dead zone** — which matches the utilisation data exactly (Sat 26% / Sun 13% utilisation; Sat+Sun 16:00–22:00 had zero bookings in 13 weeks). ClassPass fills precisely the hours the rental business never wanted. That's the whole point.

## Where the schedule actually lives

The Acuity class **"Open Gym ClassPass" (id 89359957) is dormant** — no offered times. ClassPass runs its **own manual schedule** (AutoSync Off, no Acuity integration), so nothing structurally prevented conflicts.
→ Fix location: studios.classpass.com → **Manage → Schedule settings**.

## ✅ Executed 2026-08-05 — the conflict is gone

Before: **14 recurring ClassPass slots/week, 11 sitting on hours Full Studio actually rents.**

Deleted (row → Edit class schedule → Delete → Submit; sets the series end-date to today and **does not cancel anyone's existing booking**):

| Slot | Whole-room bookings in that hour |
|---|---|
| Mon 10:00 · 12:00 · 14:00 · 16:00 · 20:00 | 2 · 3 · 1 · 7 · 11 |
| Wed 12:00 · 13:00 · 20:00 · 21:00 | 2 · 4 · **20** · 2 |
| Fri 19:00 · 20:00 | 14 · 1 |

**Kept — verified 0 whole-room bookings ever, cancellations included:**

| Live slot | Conflicts |
|---|---|
| Mon 21:00 | 0 ✅ |
| Tue 21:00 | 0 ✅ |
| Thu 21:00 | 0 ✅ |
| Fri 21:00 | 0 ✅ |

Verified 8 weeks forward: only 21:00 classes remain — no Wednesday, no daytime. Wed 2026-08-12 shows zero classes, confirming future instances were removed too.

## 🔒 Why a one-time cleanup is NOT enough

The set of "hours Full Studio has ever been booked" **grows**. A slot that is safe today becomes a conflict the first time someone rents that hour — silently, with nothing to detect it.

**Guard:** scheduled task `classpass-fullstudio-conflict-guard`, **Mondays 07:02**. Re-exports Acuity, recomputes the grid, diffs against the live ClassPass schedule, removes new conflicts, reports.
Definition: `~/.claude/scheduled-tasks/classpass-fullstudio-conflict-guard/SKILL.md`
Data + script: `../acuity-exports/` (CSV · `analyze-classpass-safety.py` · README).

### ⚠️ Export trap
Pulling the CSV with an in-page `fetch()` returns **only non-cancelled rows** (1,642). The real form download with *"Include canceled appointments"* ticked returns **1,951** — and 5 appointment types appear only in the fuller set. Two safe-looking hours (Tue 09:00, Thu 06:00) turned out to have cancelled Full-Studio bookings. **Always use the form download.**

**Control to run every time:** count cancelled rows in the result. The 2026-08-05 export has **309**, the 2026-08-30 export has **331**. If you ever see **0**, the checkbox didn't take and the data is wrong — re-export before trusting anything.

### Residual risk (accepted)
"Never booked before" ≠ "will never be booked". A ClassPass booking on a safe hour still blocks a rental *if one is wanted there for the first time*. At 21:00 that risk is minimal (zero demand in 15 months). The structural cure would be releasing ClassPass slots only ~24h ahead so any advance rental always wins — worth exploring if ClassPass exposes a booking-window setting.

---

## Guard run log

| Date | Result | Notes |
|---|---|---|
| 2026-08-05 | ✅ Executed | 11 conflicts removed, 4 safe slots kept (initial cleanup) |
| 2026-08-30 | 🟡 **Acuity half DONE · ClassPass half BLOCKED** | Fresh export pulled + grid rebuilt. No conflict on any known live slot. Live ClassPass schedule unread (logged out). |

### 2026-08-30 — what ran, what didn't

**✅ Acuity half — complete.** Fresh export pulled through the real form (`2020-01-01 → 2027-12-31`,
*Include canceled* ticked): **2,186 rows · 331 cancelled · 30 types · 0 unclassified · 944 whole-room
bookings · 96 distinct slots**. The cancelled count is the control — 0 would have meant the checkbox
silently failed. Saved as `../acuity-exports/acuity-full-export-2026-08-30.csv`.

- All 4 documented live slots (**Mon/Tue/Thu/Fri 21:00**) → still **0 whole-room bookings ever**,
  cancellations included. **No conflict, nothing deleted.**
- **3 hours lost their virgin status** in 25 days — each took its first-ever Full Studio booking:
  Sat 2026-08-15 17:00 · Sat 2026-08-29 07:00 · Sun 2026-08-30 07:30. None sits on a live ClassPass
  slot, so no action was needed — but the safe-hours cap fell **20 → 17** and the table above was
  corrected. This is precisely the drift the guard exists to catch.

**🟡 ClassPass half — not verified.** `studios.classpass.com/schedule-settings` is logged out
(*"Mogelijk moet je inloggen om deze pagina te bekijken"*), so the live recurring schedule was never
read. The clean verdict above is against the **4 slots this document records as live**. If a slot was
added since 2026-08-05 — on a daytime hour — it would be a conflict and this run would not have seen
it. Treat the all-clear as covering known slots only.

### ❌ The Acuity API route does NOT work — don't retry it

An earlier note here recommended Acuity API credentials to make the export session-proof. **That is
wrong on this account** and is retracted. Credentials exist (Integrations → API → View Credentials)
and are *valid*, but the API is plan-gated:

```
GET /api/v1/me  with real credentials  -> 403 {"message":"API access is only available on Powerhouse plans"}
GET /api/v1/me  with garbage credentials -> 401 {"message":"Unauthorized"}
```

The 401-vs-403 control proves the key authenticates and the **plan** is the blocker, not the key.
Unlocking it costs money → operator decision, not a brain fix. Until then the export **must** come
from the browser form, and the guard **depends on a live Acuity session**. Do not spend time
re-testing the API.
