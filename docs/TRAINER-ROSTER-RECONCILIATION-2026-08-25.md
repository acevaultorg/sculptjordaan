# Trainer roster reconciliation — 25 aug 2026

**One sentence:** five trainers pay you rent every week and do not appear anywhere on
your website, while two trainers who no longer rent are still listed — so the client-delivery
machine you already built is pointed at partly the wrong people.

Source: `acuity-exports/acuity-full-export-2026-08-05.csv` (1,951 rows) joined to
`src/config/trainers.ts`. Every figure below was recomputed from the raw export, not
carried over from an earlier document.

---

## The gap

### Paying rent · NOT on the site

| Trainer | All-time bookings | Period | Mix | Status |
|---|---:|---|---|---|
| **Mees** | **38** | Feb → Aug 2026 | 25 half · 12 full | Established tenant. Biggest omission by a wide margin. |
| **Nahuel** | 10 | Apr → Jul 2026 | 10 half, all paid | Established, but nothing since 10 Jul — may be lapsing. |
| **Jimmi** | 7 | Jun → Aug 2026 | 2 free trials → 5 paid | Converted from the free probeersessie. Working funnel. |
| **Aldo** | 6 | Mar → Aug 2026 | half + one 90-min full | Steady low-volume tenant. |
| **Nadine** | 2 | Aug 2026 | 2 full studio, paid | New. Both bookings this month. |

Too early to classify — one paid booking each, worth watching not listing:
**Nina** (1 half, Jul) · **Ana** (1 half, Aug).

NOT tenants — free try-out only, do not treat as renters:
**Dicle** (1 free try-out, Jun) · **Tiziana** (1 free try-out, Jul).

### On the site · no rental in the last 8 weeks

| Trainer | Last rental | Note |
|---|---|---|
| **Bryan** | March 2026 | Listed with a live intake page. Any client who picks him lands on a trainer who no longer rents here. |
| **Tom** | never appears as a renter | Listed, but does not show up in the rental export at all. |

---

## Why this matters more than a content series

The trainers are self-employed: they set their own rates, keep their own clients, and the
client pays them directly. You rent them the room. So **every client your site sends to a
renter converts into €12–17/hour of rental income to you** — that is the whole loop.

You already own the demand machine:

- 13 per-trainer landing pages (`/nl/plan-gratis-intake-met-[naam]`), all live, all in the
  sitemap, each with a real bio, specialisms, structured intake form and WhatsApp fallback
- a filterable trainer directory + a 3-question match quiz
- 5.0 stars from 21 Google reviews, plus a bilingual blog cluster ranking for
  "personal trainer amsterdam" queries
- analytics that already tag every lead with a `trainer_name` property

Five people paying weekly rent are simply not plugged into any of it.

## The arithmetic

From the export: 97.6% of rentals are 59–60 minutes, so **one client session = one booked
studio hour**. Booking mix is 59% half studio (€12) / 41% full studio (€17) → a blended
booked hour is **€14.16**.

- One extra weekly client for one renter ≈ **+€61/month**
- One extra weekly client for every active renter ≈ **+€1,000/month**, roughly a 65% lift
- That takes room utilisation from ~18% to ~28%, against a ceiling of 112 hours/week

**Capacity is not the constraint. Price is not the constraint.**

### Fill vs. recruit — filling wins, and it isn't close

Measured from the export, not estimated:

- The median new renter is worth **€24** in their first 90 days. 61% are worth under €100.
- Only **37%** of all-time renters ever reach 5 bookings.
- New-renter inflow already fell from 10/month (Oct 2025) to ~2.3/month (Feb–Jul 2026).
- To add €1,000/month by recruiting would take roughly **130 new renters** at the median —
  a multi-year programme.

And the historical record settles it: revenue **grew** Feb → May (€2,183 → €2,501) during the
period when new-renter acquisition was at its **lowest ever**. The peak was built by existing
renters going deeper, not by recruits.

---

## Corrections to earlier documents

Three figures in `REVENUE-SPRINT-2026-08-14.md` and in my own earlier reporting are wrong:

1. **"−40% since May" → actually −35.5%** (May €2,501 → July €1,612).
2. **"5 churned renters" undercounts.** Seven renters who booked in May had zero bookings
   in July, worth −€708.
3. **"Rental = 93% of revenue" cannot be verified** from Acuity — Open Gym subscriptions and
   PT packages are not appointments and never appear in the export. What *is* verifiable:
   rental is 932 of 1,023 non-cancelled Feb–Jul appointments.

And the most important one:

4. **July was the trough, not the current state.** Median booking lead time is 7 days. At the
   5 Aug export, August already held €1,229; on the historical fill pace that projects to
   roughly **€2,162** — back at April/June levels. The same estimator predicted June within
   +7% and July within +2%. Any plan built on "revenue is in freefall" is reading a stale
   snapshot.

---

## What the data does NOT support

**Churn was probably not caused by trainers running out of clients.** Five of the six churned
renters stopped at or near their own peak booking volume — Friso stopped at his all-time high,
Alex at 11/month after a peak of 20. A trainer whose book is emptying books progressively
less; that pattern appears in only one case (Alina: 18 → 10 → 2 → 0). The departures also
cluster in May–June, which points at one common cause rather than six independent ones.

Nobody has asked them. That outreach is still an open task.

**The +€1,000/month figure is arithmetic on a hypothesis.** Nothing in this repo demonstrates
that any intervention has ever moved a renter's weekly hours. Client session frequency
(1–2×/week) is an assumption — Acuity records only the renting trainer, never their clients.

---

## Next actions

**Operator-gated — these need a person, not code:**

1. Ask Mees, Nahuel, Jimmi, Aldo and Nadine whether they want a profile on the site.
   Being publicly listed as a trainer is their decision, and consent should be captured per
   item: name, photo, Instagram handle, bio wording. A trainer may say yes to being listed
   and no to being photographed.
2. Decide what happens to Bryan and Tom — unpublish, keep warm, or re-invite.
3. Resolve the client-supply promise. `/nl/studio-huren` answers "Krijg ik klanten via
   SculptClub?" with **"Ja."** With five paying renters absent from the directory, that
   promise is not currently being kept for them.

**Brain-doable once consent comes back:** the `trainers.ts` entry, the intake page, directory
and quiz wiring, and the sitemap entry are all template work — a returned consent form
becomes a live page with no design effort.

**Also worth fixing:** `CLAUDE.md` lists four trainers (Alex, Eva, Andrea, Dara). The config
has thirteen. Anything working from CLAUDE.md under-counts the roster by nine people.

---

# Revision 2026-08-30 — refreshed against a newer export

Recomputed from `acuity-exports/acuity-full-export-2026-08-30.csv` (2,186 rows, pulled 30 Aug),
five days after the original. Two findings the 25-Aug pass could not see.

## 1. The rental slide bottomed out in July and is recovering

Paid rentals per month (cancellations and future bookings excluded):

| Month | Bookings | Δ | Room-utilisation* |
|---|---:|---:|---:|
| Mar 2026 | 164 | +9% | 25.9% |
| Apr 2026 | 168 | +2% | 26.3% |
| May 2026 | **183** ← peak | +9% | 27.2% |
| Jun 2026 | 151 | −17% | 23.2% |
| Jul 2026 | **116** ← trough | −23% | **17.8%** |
| Aug 2026 | **140** | **+21%** | 22.2% |

\* room-hours booked ÷ 112 open hours/week; a half-studio booking counts as half a room.

Peak-to-trough was **−37%** (183 → 116) — that is the "−40% slide" in the record. **August reversed
it: +21% off the bottom**, and that is with 30 Aug still running. Still 24% below the May peak.

⚠️ **Do not read the dip as decay, and do not read the recovery as a fix.** July–August is Amsterdam
holiday season and the obvious hypothesis is seasonality — but **it cannot be tested**: the studio's
own August 2025 was 5 bookings (the business was starting), so there is no clean year-over-year
comparison. Treat both the fall and the rebound as unexplained until September lands.

## 2. Six of the thirteen listed trainers no longer rent — not two

The table above lists Bryan and Tom. Against the fresh export, **four more have gone quiet**, and one
of them is a high-volume renter that the 25-Aug pass should have caught (Alex was already 95 days
silent when that document was written; he appears in it only as a passing volume figure).

Every trainer in `src/config/trainers.ts`, by last paid rental as of 30 Aug 2026:

| Trainer | All-time rentals | Last rental | Days | Status |
|---|---:|---|---:|---|
| Joey | 279 | 2026-08-29 | 0 | 🟢 active |
| Dara | 200 | 2026-08-28 | 1 | 🟢 active |
| Jearmey | 164 | 2026-08-26 | 3 | 🟢 active |
| Eva | 71 | 2026-08-28 | 1 | 🟢 active |
| Andrea | 61 | 2026-08-19 | 10 | 🟢 active |
| Hamish | 22 | 2026-08-27 | 2 | 🟢 active |
| Roberta | 2 | 2026-08-22 | 7 | 🟢 active |
| **Sergei** | 21 | 2026-07-11 | 49 | 🔴 **newly flagged** |
| **Ibrahim** | 16 | 2026-06-30 | 60 | 🔴 **newly flagged** |
| **Gezina** | 2 | 2026-06-27 | 63 | 🔴 **newly flagged** |
| **Alex** | **74** | 2026-05-22 | **99** | 🔴 **newly flagged — missed on 25 Aug** |
| Bryan | 23 | 2026-03-25 | 157 | 🔴 already flagged |
| Tom | 0 | never | — | 🔴 already flagged |

**The leak:** each of these six has a live `/nl/plan-gratis-intake-met-<naam>` page in the sitemap. A
client who picks one books a free intake with someone who no longer rents the room — so the booking
produces no rental hour, and the client meets a trainer who may no longer be available. Alex is the
expensive one: 74 lifetime rentals, the largest book among the lapsed.

## 3. What to do — and why I did not do it

**This is a judgement call, not a config change, so it is left to the operator.** Delisting a trainer
touches a real working relationship, and the timing is the worst possible moment to automate it: four
of the six went quiet in exactly the weeks the whole studio dipped. Sergei at 49 days may simply be on
holiday. Removing him in the last week of August would be a self-inflicted wound if he returns in
September.

Suggested, in order:

1. **Message the four newly-flagged (Alex, Sergei, Ibrahim, Gezina) before touching the site.** One
   question — "still planning to rent in September?" Alex first; his book is the biggest.
2. **Bryan and Tom are not ambiguous** — 157 days and never, respectively. Their intake pages can come
   down or be de-indexed now.
3. **Re-run this table in late September.** If a trainer is still silent after the holiday window
   closes, the seasonality defence is gone and delisting is clean.
4. The five renters with no profile (Mees, Nahuel, Jimmi, Aldo, Nadine — original table above) are
   still the mirror-image opportunity: they pay rent and get no client flow.

**Reproduce:** the per-trainer figures come from matching `First Name`+`Last Name` against the paid
rental types. Watch for duplicate spellings in the raw data — `Joey Van Veen`/`Joey van Veen`,
`Mees Loman`/`mees loman`, `H.M. Leijer`/`Hamish Leijer` and four spellings of Alex are all the same
people, so a naive per-name count understates the top renters and inflates the renter total (76 raw
names ≫ real tenants).
