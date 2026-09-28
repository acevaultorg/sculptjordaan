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

`2020-01-01 → 2027-12-31`, **including cancelled** — refreshed **2026-09-28**: **2,398 rows · 357 cancelled · 0 unclassified · 1,016 whole-room bookings · 97 distinct weekday-hour slots.** File: `acuity-full-export-2026-09-28.csv`.
(Prior 2026-09-14: 2,319 rows · 342 cancelled · 980 whole-room · 97 slots — safe-hours grid byte-identical.)
(Prior 2026-09-07: 2,231 rows · 336 cancelled · 958 whole-room · 97 slots — safe-hours grid byte-identical.)
(Prior 2026-08-31: 2,188 rows · 332 cancelled · 944 whole-room · 96 slots.
Prior 2026-08-30: 2,186 rows · 331 cancelled · 944 whole-room · 96 slots.
Prior 2026-08-05: 1,951 rows · 309 cancelled · 822 whole-room · 93 slots. File: `acuity-full-export-2026-09-07.csv`.)

Whole-room bookings per weekday-hour (count in brackets):

```
Mon  6(3)  7(8)  8(13) 9(6)  10(2)  11(4)  12(3)  13(5)  14(1)  15(7)  16(9)  17(18) 18(38) 19(40) 20(11)
Tue  6(1)  7(29) 8(8)  9(5)  10(8)  11(7)  12(11) 13(9)  14(7)  15(5)  16(9)  17(25) 18(58) 19(28) 20(3)
Wed        7(15) 8(14) 9(11) 10(9)  11(6)  12(2)  13(4)  14(6)  15(6)  16(10) 17(15) 18(24) 19(8)  20(20) 21(2)
Thu  6(1)  7(8)  8(13) 9(14) 10(11) 11(4)  12(12) 13(7)  14(6)  15(10) 16(5)  17(9)  18(39) 19(21) 20(8)  22(1)
Fri  6(27) 7(6)  8(17) 9(10) 10(7)  11(11) 12(6)  13(13) 14(15) 15(8)  16(9)  17(7)  18(24) 19(14) 20(1)
Sat        7(1)  8(4)  9(17) 10(13) 11(17) 12(10) 13(10) 14(1)  15(3)  16(11) 17(2)
Sun        7(1)  8(5)  9(4)  10(8)  11(14) 12(5)  13(5)  14(4)  15(3)  16(1)
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
| **Sun** | 06:00 · 17:00 · 18:00 · 19:00 · 20:00 · 21:00 |

**16 safe slots/week** (was 17 on 2026-08-31, 20 on 2026-08-05) — a *cap*, not a target. Offering fewer is always safe.

⚠️ **The cap shrinks over time, and it only ever shrinks.** Four weekend hours have now been lost — Sat 07:00, Sat 17:00, Sun 07:00 (all by 2026-08-30), and **Sun 16:00** (found 2026-09-07: a `Hele Studio 60 min / Full Studio 60 min` booked for Sep 13 2026 16:00). Each took its first-ever Full Studio booking. The weekend dead zone that makes ClassPass viable is being eaten by real rentals, which is exactly the outcome the priority rule wants. Re-check this table before adding any slot; never add from memory.

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

**Guard (REPORT-ONLY, live since 2026-09-23):** launchd job `com.acepilot.classpass-conflict-guard` on device 1, **Mondays 07:02 local**, runs `~/.claude/bin/classpass-conflict-guard`. It reads Acuity's PUBLIC availability API (no login, books nothing) for the next 14 days, and reports any Mon/Tue/Thu/Fri whose 21:00–22:00 hour is wholly occupied, as ONE line appended to board card `mud9vyalgki8rv`. **It never edits ClassPass, Acuity or the site** — removing a conflicting class is Paulo's click. Log: `~/.claude/fleet/logs/classpass-conflict-guard.log`. Controls: a synthetic conflict (`ACUITY_SYNTHETIC_CONFLICT=YYYY-MM-DD`) fires the CONFLICT line; a closed day or a half-absent/full-present anomaly reports UNKNOWN, never CONFLICT. Verified 2026-09-23: real run clean (8 days), synthetic control fires.
~~scheduled task `classpass-fullstudio-conflict-guard` … removes new conflicts … `~/.claude/scheduled-tasks/…/SKILL.md`~~ (superseded 2026-09-23: that task never existed; the removal step was dropped because the ClassPass schedule is Paulo's account).
Historical data + grid script (still valid for the safe-hours CAP, a different check): `../acuity-exports/` (CSV · `analyze-classpass-safety.py` · README).

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

Form fields are `minDay` / `maxDay` (**hidden**, `YYYY-MM-DD`) plus a visible date-picker pair and the
`includeCanceled` checkbox. **Corrected 2026-09-07:** the visible pickers have **no `name` attribute** on
the current render (they are not `minDay-input` / `maxDay-input`, as this file previously claimed) — so
they submit *nothing* and only the hidden pair reaches the server. Enumerate the form before filling it
(`[...form.elements].map(e=>({name:e.name,type:e.type,value:e.value}))` — it is 6 elements) and verify
all three of `minDay`, `maxDay`, `includeCanceled` read back correctly before submitting.

⚠️ **The download will not fire from a backgrounded tab.** On 2026-09-07 the submit click returned
cleanly, the page stayed put, and **no file appeared** — `document.visibilityState` was `hidden`.
Foreground the tab first (`osascript` → set `active tab index`, then `activate`), confirm
`document.hidden === false`, re-verify the three fields survived, then submit. Second attempt
downloaded in <5s.

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
| 2026-09-07 | ⚠️ **Acuity half clean · ClassPass half UNVERIFIED** | Fresh export (2,231 rows, 336 cancelled). **Sun 16:00 lost virgin status** → cap 17→16. All 4 known live slots still 0-conflict. **ClassPass session expired** — live schedule could not be read. Nothing deleted. 👤 needs operator sign-in. |
| 2026-09-14 | ⚠️ **Acuity half clean · ClassPass half UNVERIFIED (2nd week)** | Fresh export (2,319 rows, 342 cancelled). Conservative grid identical to 09-07 → cap stays **16**. Mon/Tue/Thu/Fri 21:00 still 0 whole-room bookings ever. **ClassPass partner session still expired** (`/manage` → `/login`) — any slot added since 08-31 is unseen. Nothing deleted. 👤 needs operator sign-in. |
| 2026-09-28 | ⚠️ **Acuity half clean · ClassPass half UNVERIFIED (3rd run)** | Fresh export (2,398 rows, 357 cancelled — control ↑ from 342 ✓). Conservative grid identical to 09-14 → cap stays **16**. Mon/Tue/Thu/Fri 21:00 still 0 whole-room bookings ever. **ClassPass partner session still expired** (`/manage` → `/login`) — any slot added since 08-31 is unseen (4 weeks). No 09-21 run happened. Nothing deleted. 👤 needs operator sign-in. |

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

### 2026-09-07 — Acuity half clean, ClassPass half could not be read

**✅ Acuity half — complete.** Export pulled through the real form (`2020-01-01 → 2027-12-31`,
*Include canceled* ticked): **2,231 rows · 336 cancelled · 30 types · 0 unclassified · 958 whole-room
bookings · 97 distinct slots**. Cancelled count is the control — 336, up from 332 on 08-31 (monotonic,
so the checkbox took). Saved as `../acuity-exports/acuity-full-export-2026-09-07.csv`.

- All 4 documented live slots (**Mon/Tue/Thu/Fri 21:00**) → still **0 whole-room bookings ever**,
  cancellations included. **No conflict on any known slot.**
- **1 hour lost its virgin status** in 7 days: **Sun 16:00**, from a single active
  `Hele Studio 60 min / Full Studio 60 min` booked for **Sep 13 2026 16:00**. It is not a live
  ClassPass slot, so no deletion was required — but the safe-hours table above is corrected and the
  cap falls **17 → 16**. Diff computed against the 08-31 CSV directly, not against this document.

**❌ ClassPass half — NOT verified. The session is expired.**
`studios.classpass.com/manage/schedule/generate/260955/2026-09-07?focus=list` redirected to
`/login` (a real Dutch sign-in form), and the root redirected to the `classpass.com/partners`
marketing page. Control run: no other authenticated ClassPass tab exists in the browser (8 tabs
scanned). Re-authenticating requires the operator's credentials — a hard gate a session must never
type — so the live schedule was **not read this run**.

**What that does and does not leave open:**
- The 4 slots recorded here (Mon/Tue/Thu/Fri 21:00) are still safe on fresh Acuity data. ✅
- Sunday has never carried a live ClassPass slot in this document's history, so the newly-booked
  **Sun 16:00 does not collide with any recorded slot.** ✅
- **The residual risk is a slot added to ClassPass in the last 7 days**, on an hour Full Studio
  rents. That is invisible without the session. It is the one thing this run cannot rule out.

⚠️ **Do not read "no conflicts found" as "no conflicts exist" for this run.** Half the comparison
did not execute. The next run with a live session re-verifies both halves.
