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

`2020-01-01 → 2027-12-31`, **including cancelled** — refreshed **2026-08-31**: **2,188 rows · 30 appointment types · 944 whole-room bookings · 96 distinct weekday-hour slots.**
(Prior 2026-08-30 export: 2,186 rows · 944 whole-room · 96 slots — the grid below is byte-identical between the two.
Prior 2026-08-05: 1,951 rows · 822 whole-room · 93 slots. File: `acuity-full-export-2026-08-31.csv`.)

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

**17 safe slots/week** (unchanged 2026-08-31; was 20 on 2026-08-05) — a *cap*, not a target. Offering fewer is always safe.

⚠️ **The cap shrinks over time.** Three weekend hours were lost in 25 days — Sat 07:00, Sat 17:00, Sun 07:00 each took their first-ever Full Studio booking. The weekend dead zone that makes ClassPass viable is being eaten by real rentals, which is exactly the outcome the priority rule wants. Re-check this table before adding any slot; never add from memory.

Weekdays are almost fully rented 06:00–20:00; only 21:00 survives (plus Wed 06:00). The real headroom is the **weekend afternoon/evening dead zone** — which matches the utilisation data exactly (Sat 26% / Sun 13% utilisation; Sat+Sun 16:00–22:00 had zero bookings in 13 weeks). ClassPass fills precisely the hours the rental business never wanted. That's the whole point.

## Where the schedule actually lives

The Acuity class **"Open Gym ClassPass" (id 89359957) is dormant** — no offered times. ClassPass runs its **own manual schedule** (AutoSync Off, re-confirmed 2026-08-30), so nothing structurally prevents conflicts.

→ Fix location: studios.classpass.com → sidebar **Manage → Schedule settings**.
⚠️ `studios.classpass.com/schedule-settings` **404s** — that path is wrong. The real page is
`studios.classpass.com/manage/schedule/generate/260955/<YYYY-MM-DD>?focus=list` (260955 = the studio id).
Navigate via the sidebar; don't deep-link the old path.

**Reading it correctly:** the list is filtered. Open both filter dropdowns and confirm
**3 statuses** = Published + Drafts + Disabled and **2 types** = Recurring + One-time are all ticked,
or the view silently hides slots. The `Repeat on` column is what matters — one row reading
"Mon, Fri" is a single series covering *two* weekday-hours.

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

### The two URLs (don't guess — these are verified)

| What | URL |
|---|---|
| Acuity export form | `https://secure.acuityscheduling.com/reports.php?action=importexport` |
| ClassPass schedule | `https://studios.classpass.com/manage/schedule/generate/260955/<YYYY-MM-DD>?focus=list` |

Reached in the UI via **Reports → Import/Export** (the left-nav "Reports" link is behind the
`acuity:scheduling ⌄` dropdown at top-left). `admin.php`, `export.php` and `importexport.php` all
**404 to the marketing site** — and that 404 renders a "Log in" link, which looks exactly like a
logged-out session but is not. **Positive control before concluding logged-out:**
`secure.acuityscheduling.com/appointments.php` — it returns the calendar when the session is live.

Form fields are `minDay` / `maxDay` (hidden, `YYYY-MM-DD`) mirrored by `minDay-input` / `maxDay-input`
(visible). Setting only the visible pair leaves the hidden pair empty and the range is ignored — set
both, then verify all three (`minDay`, `maxDay`, `includeCanceled`) before submitting.

### ⚠️ Export trap
Pulling the CSV with an in-page `fetch()` returns **only non-cancelled rows** (1,642). The real form download with *"Include canceled appointments"* ticked returns **1,951** — and 5 appointment types appear only in the fuller set. Two safe-looking hours (Tue 09:00, Thu 06:00) turned out to have cancelled Full-Studio bookings. **Always use the form download.**

**Control to run every time:** count cancelled rows in the result. The 2026-08-05 export has **309**, 2026-08-30 has **331**, 2026-08-31 has **332**. If you ever see **0**, the checkbox didn't take and the data is wrong — re-export before trusting anything.

### Residual risk (accepted)
"Never booked before" ≠ "will never be booked". A ClassPass booking on a safe hour still blocks a rental *if one is wanted there for the first time*. At 21:00 that risk is minimal (zero demand in 15 months). The structural cure would be releasing ClassPass slots only ~24h ahead so any advance rental always wins — worth exploring if ClassPass exposes a booking-window setting.

---

## Guard run log

| Date | Result | Notes |
|---|---|---|
| 2026-08-05 | ✅ Executed | 11 conflicts removed, 4 safe slots kept (initial cleanup) |
| 2026-08-30 | ✅ **Clean — zero conflicts** | Both halves verified. 4 live slots, all on never-booked hours. Nothing deleted. Safe-hours cap fell 20→17. |
| 2026-08-31 | ✅ **Clean — zero conflicts** | Both halves verified. Fresh export (2,188 rows, 332 cancelled) → grid identical to 08-30. Live ClassPass: **35** forward instances enumerated, all 21:00 Mon/Tue/Thu/Fri. Nothing deleted. |

### 2026-08-30 — full run, zero conflicts

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

**✅ ClassPass half — complete.** Live schedule read directly (studio 260955), filters confirmed
unfiltered (all 3 statuses + both types ticked), 8.5 weeks forward through 2026-10-27:

| Live series | Repeat on | Whole-room bookings in that hour |
|---|---|---|
| 21:00 Open gym (max 4), 60m — staff Sam | Mon, Fri | 0 ✅ |
| 21:00 Open gym (max 4), 60m | Tue | 0 ✅ |
| 21:00 Open gym (max 4), 60m | Thu | 0 ✅ |

**Every single instance is 21:00. No Wednesday, no daytime, no weekend.** That is exactly the 4
weekday-hours this document records — no slot was added since the 2026-08-05 cleanup.

**Verdict: ZERO CONFLICTS. Nothing changed.**

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
