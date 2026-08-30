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

`2020-01-01 → 2027-12-31`, **including cancelled**: **1,951 rows · 30 appointment types · 822 whole-room bookings · 93 distinct weekday-hour slots.**

Whole-room bookings per weekday-hour (count in brackets):

```
Mon  6(3)  7(7)  8(11) 9(3)  10(2) 11(3) 12(3) 13(5) 14(1) 15(7) 16(7) 17(17) 18(30) 19(31) 20(11)
Tue  6(1)  7(19) 8(4)  9(1)  10(2) 11(3) 12(8) 13(7) 14(6) 15(5) 16(9) 17(24) 18(48) 19(21) 20(3)
Wed        7(9)  8(10) 9(11) 10(7) 11(5) 12(2) 13(4) 14(4) 15(3) 16(8) 17(15) 18(24) 19(8)  20(20) 21(2)
Thu  6(1)  7(5)  8(9)  9(12) 10(8) 11(2) 12(6) 13(7) 14(5) 15(8) 16(3) 17(1)  18(35) 19(21) 20(8)  22(1)
Fri  6(21) 7(2)  8(13) 9(10) 10(7) 11(11) 12(6) 13(11) 14(13) 15(8) 16(9) 17(7) 18(24) 19(14) 20(1)
Sat        8(2)  9(9)  10(9) 11(10) 12(8) 13(10) 14(1) 15(2) 16(10)
Sun        8(4)  9(2)  10(6) 11(11) 12(4) 13(4)  14(4) 15(3)
```

## ✅ The ONLY hours ClassPass may be offered

| Day | ClassPass-safe hours |
|---|---|
| **Mon** | 21:00 |
| **Tue** | 21:00 |
| **Wed** | 06:00 |
| **Thu** | 21:00 |
| **Fri** | 21:00 |
| **Sat** | 06:00 · 07:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |
| **Sun** | 06:00 · 07:00 · 16:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |

**20 safe slots/week** — a *cap*, not a target. Offering fewer is always safe.

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

### Residual risk (accepted)
"Never booked before" ≠ "will never be booked". A ClassPass booking on a safe hour still blocks a rental *if one is wanted there for the first time*. At 21:00 that risk is minimal (zero demand in 15 months). The structural cure would be releasing ClassPass slots only ~24h ahead so any advance rental always wins — worth exploring if ClassPass exposes a booking-window setting.

---

## Guard run log

| Date | Result | Notes |
|---|---|---|
| 2026-08-05 | ✅ Executed | 11 conflicts removed, 4 safe slots kept (initial cleanup) |
| 2026-08-30 | ⚠️ **BLOCKED — could not verify** | Both dashboard sessions logged out. No fresh export, no live-schedule read. See below. |

### 2026-08-30 — blocked run (honest record)

The guard **did not perform its core function**. It could not re-export Acuity and could not read the
live ClassPass schedule, because **both browser sessions have expired**:

- `secure.acuityscheduling.com` → login page; `GET /api/v1/me` returns **401** (instrument verified
  working — real status codes came back, so this is a genuine logout, not a tool failure).
- `studios.classpass.com/schedule-settings` → *"Mogelijk moet je inloggen om deze pagina te bekijken."*

Logging in is operator-only (never type credentials). Chrome MCP was also down; the AppleScript
Chrome fallback worked and is what produced the two reads above.

**What WAS verified**, re-running `analyze-classpass-safety.py` against the 2026-08-05 export:

- Grid reproduces exactly — 822 whole-room bookings · 93 distinct slots · 0 unclassified types ·
  20 safe slots/week. The documented table above is intact.
- All 4 live slots (Mon/Tue/Thu/Fri 21:00) = **0 whole-room bookings ever**, cancellations included.
- **0** forward-booked whole-room appointments land on any live slot — the export ran to 2027-12-31
  and held 43 whole-room bookings dated on/after 2026-08-05 (latest 2026-10-05). None at 21:00.
- Only **3** whole-room bookings in all history start at 21:00 or later: Wed 21:00 ×2 (Mar 2026 —
  precisely why Wed 21:00 was deleted) and Thu 22:00 ×1 (outside opening hours). **Mon/Tue/Thu/Fri
  21:00 has never had a whole-room booking at any point.**

**Residual exposure:** bookings *made* in the 25 days since the export (~58 whole-room bookings per
25-day window at recent velocity). All observed 21:00 demand has ever been Wednesday, so the odds a
live slot became a conflict are low — but this is **unverified, not confirmed safe**. Do not read
this run as a green light.

### 🔧 Structural fix — make half this guard session-proof

The export half of the guard does not need a browser at all. Acuity exposes **API credentials**
(Settings → Integrations → API) — a user ID + API key that never expire on their own. With them in
`~/.zshenv`, the Acuity pull becomes a `curl` and the guard stops depending on a session that
silently lapses. Only the ClassPass read would still need a login.

Endpoint: `GET https://acuityscheduling.com/api/v1/appointments?minDate=…&maxDate=…&canceled=true`
(basic auth, paginate with `max`/`page`). ⚠️ Verify the API returns cancelled rows before trusting
it — the in-page `fetch()` trap that silently drops 309 cancelled rows is exactly this failure mode.
