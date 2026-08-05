# Google Ads — Trainer Conversion Campaign Spec

**Goal:** Personal-trainer leads at lowest CPL → book free proefsessie OR send WhatsApp.

**Account:** SculptClub · Customer ID **511-161-9582** · paulomdevries@gmail.com

**Budget:** €2,50 / day · €75 / month

**Last updated:** 2026-06-02

---

## Why this works at €2,50/day

Bidding on consumer head terms ("personal trainer amsterdam") costs €5-8/click — your daily budget burns in 30-60 sec. The cheap channel is **trainer-renting-studio intent** ("studio huren personal trainer amsterdam") — €0,30-0,50/click because gym competitors don't bid on it (they own their space, don't sell rental).

| Metric | Estimate |
|---|---|
| Avg CPC | €0,30 - 0,50 |
| Clicks/day | 5 - 8 |
| Clicks/month | 150 - 240 |
| Landing-to-booking rate (lean page) | 8 - 15% |
| Booked trainer try-outs/month | 12 - 36 |
| Cost per booked trainer | **€2 - 6** |

---

## Campaign

```
Name:               Trainer Conversion · Studio Huren JV
Type:               Search
Status:             Paused (enable after 24h review)
Bid strategy:       Manual CPC
Max CPC:            €0,50
Daily budget:       €2,50
Networks:           Google Search ONLY
                    ✗ Search Partners (parked-domain waste)
                    ✗ Display Network
Locations:          Amsterdam municipality + 10 km radius
                    Target: "Presence: People in or regularly in your locations"
                    Exclude: "Interest: People interested in your locations"
Languages:          Dutch, English
Devices:            All
Ad rotation:        Optimize (prefer best-performing)
Schedule:           Mon-Fri  06:00 - 22:00
                    Sat      08:00 - 20:00
                    Sun      PAUSE
Final URL:          https://sculptclub.nl/nl/studio-huren/gratis-test
```

---

## Ad Group A — `Studio Rental · Trainer Intent`

Max CPC: €0,50

### Keywords (paste into Editor — one per line)

**Exact match `[keyword]`:**
```
[studio huren personal trainer amsterdam]
[trainingsruimte huren amsterdam]
[privé studio huren amsterdam]
[studio huren per uur amsterdam]
[pt studio huren jordaan]
[fitness studio huren jordaan]
[studio huren jordaan]
[gym huren per uur amsterdam]
[ruimte huren personal training amsterdam]
```

**Phrase match `"keyword"`:**
```
"studio huren amsterdam jordaan"
"trainingsruimte personal trainer"
"pt ruimte amsterdam"
"private gym huren"
```

---

## Ad Group B — `ZZP / Freelance Trainer`

Max CPC: €0,50

### Keywords

**Phrase match:**
```
"zzp personal trainer ruimte"
"freelance personal trainer amsterdam"
"personal trainer praktijk starten amsterdam"
"eigen studio personal trainer amsterdam"
"personal trainer worden amsterdam"
"personal trainer studio amsterdam"
```

---

## Campaign-level negative keywords

Paste into "Negative keywords" → campaign level → all match types:

```
opleiding
cursus
diploma
studie
school
academie
vacature
vacatures
baan
solliciteren
goedkoop
gratis sportschool
basic-fit
fit20
trainingscentrum aanwijzing
review
ervaringen
```

---

## Responsive Search Ad — same RSA for both ad groups

**Final URL:** `https://sculptclub.nl/nl/studio-huren/gratis-test`
**Path 1:** `studio-huren`
**Path 2:** `gratis`

### Headlines (15 — Google rotates the 3 best per impression)

```
01. Studio Huren Jordaan
02. Vanaf €12 per uur
03. 0% Commissie · ZZP
04. Privé Studio · Per Uur
05. Gratis Proefsessie
06. Voor Personal Trainers
07. Amsterdam Jordaan
08. Geen Contract · Per Sessie
09. Boek 60 Min Gratis
10. Studio voor PT-praktijk
11. Egelantiersgracht 424
12. 5,0★ op Google
13. Rogue Rack · Kabelmachine
14. Daily 06:00 – 22:00
15. Train Eigen Klanten
```

### Pinning

- **Pin H1** to position 1: `Studio Huren Jordaan` (always-matched keyword)
- **Pin H5** to position 3: `Gratis Proefsessie` (CTA always visible)
- Leave H2-H4 + H6-H15 unpinned (Google A/B optimizes)

### Descriptions (4)

```
01. Privé studio in Jordaan vanaf €12/uur. 0% commissie · jouw klanten · jouw tarieven. Boek gratis proefsessie.
02. Voor freelance personal trainers. Per uur, per dag, of pakket met 23% korting. Geen contract.
03. 60 minuten gratis kennismaken met de studio. Geen creditcard. Geen verplichting. Plan online.
04. Volledig uitgeruste privé studio aan de gracht. Rogue rack, dumbbells 4-40 kg, kabelmachine, sleds.
```

---

## Ad Extensions

### Sitelinks (4)

| Text | URL | Description 1 | Description 2 |
|---|---|---|---|
| Tarieven & Pakketten | https://sculptclub.nl/nl/studio-huren#book | Per uur of pakket — bespaar tot 23% | Geen contract · gratis annuleren |
| Bekijk de Studio | https://sculptclub.nl/nl/studio-huren | Egelantiersgracht 424 · Jordaan | Rogue rack · kabelmachine · cardio |
| Word SculptClub-Trainer | https://sculptclub.nl/nl/word-trainer#aanmelden | Eigen profiel + klanten via SCNL | 0% commissie · jouw tarieven |
| WhatsApp Direct | https://wa.me/31615147952?text=Hoi%21%20Ik%20wil%20graag%20de%20studio%20huren%20als%20trainer | Reactie meestal binnen 1 uur | Vragen? App ons |

### Callouts (8)

```
Privé studio
Vanaf €12/uur
0% commissie
Geen contract
Gratis annuleren
Daily 06:00–22:00
5,0★ Google
Amsterdam Jordaan
```

### Structured snippets

- **Header:** Voorzieningen
- **Values:** `Rogue rack, Olympic barbells, Dumbbells 4-40 kg, Kabelmachine, Cardio, Wifi & muziek`

---

## Conversion Actions (set up in Google Ads UI, not Editor)

> **Source of truth:** `CLAUDE.md` analytics block — labels already issued.

### Action 1 — Trainer form submit (secondary)

```
Name:            Trainer · Apply form submit
Category:        Submit lead form
Source:          Website (via Google Tag)
Tag label:       NwwsCNGZlp8cEMG71YxD
Fires on:        Plausible event `word_trainer_form_submit`
                 OR page-visit /nl/word-trainer#aanmelden
Count:           One per click
Value:           €15
```

### Action 2 — WhatsApp click (secondary)

```
Name:            Trainer · WhatsApp click
Category:        Contact
Source:          Website (via Google Tag)
Fires on:        Outbound click to wa.me/31615147952 from any /nl/word-trainer*
                 or /nl/studio-huren* page
Count:           One per click
Value:           €8
```

### Action 3 — Free try-out booking confirm (PRIMARY for bidding)

```
Name:            Trainer · Free proefsessie booked
Category:        Submit lead form
Source:          Website (Acuity confirmation page)
Tag label:       wBmPCNKywIccEMG71YxD
Fires on:        page-visit /nl/boeking-bevestigd
                 (or Acuity confirmation redirect)
Count:           One per click
Value:           €30
```

**Bidding optimization:** include all 3 in conversion column, but mark **Action 3 as primary** for Smart Bidding once you have ≥ 30 conversions logged.

---

## Step-by-step in Google Ads Editor (Mac, v2.12.6)

### 1. Add account
- Click `+ Add` (top-left of Accounts Manager)
- Sign in with `paulomdevries@gmail.com`
- Select customer **511-161-9582 SculptClub**
- Wait for download (~10-30s)
- Double-click the account row to open

### 2. Create campaign
- Left sidebar → `+ Add campaign`
- Type: **Search**
- Goal: **Leads** (or skip goal selection)
- Paste values from the "Campaign" block above
- Save

### 3. Create ad groups (×2)
- With campaign selected → `+ Add ad group`
- Name: `Studio Rental · Trainer Intent` · Max CPC: €0,50
- Repeat for `ZZP / Freelance Trainer`

### 4. Bulk paste keywords
- Right pane → Keywords tab → top button bar `Make multiple changes` (or `Edit` → `Replace text in multiple`)
- Pick ad group A → paste the Exact + Phrase blocks from this doc
- Repeat for ad group B
- Save

### 5. Negative keywords (campaign level)
- Campaign selected → Negative keywords tab → paste the negative list above

### 6. Create the RSA
- Either ad group → `+ Add ad` → Responsive search ad
- Paste 15 headlines + 4 descriptions
- Set Path 1 = `studio-huren` · Path 2 = `gratis`
- Final URL = `https://sculptclub.nl/nl/studio-huren/gratis-test`
- Pin headlines per spec above
- Click `Save`
- Copy this ad → paste into the OTHER ad group (same RSA, both groups)

### 7. Ad extensions
- Campaign selected → Extensions tab
- Add sitelinks (4), callouts (8), structured snippets (1) per spec above

### 8. Conversion tracking
- (Conversion actions must be created in the Google Ads web dashboard, not Editor — Editor can only assign existing ones)
- Once dashboard is reachable, create Actions 1-3 per spec above
- Then in Editor → Campaign Settings → Conversion goals → tick Action 3 as primary

### 9. Review + Post
- Top-right `Check changes` → fix any warnings
- `Post` → confirm
- Campaign is now Paused on Google's side — flip to Enabled after 24h Editor review settles

---

## Post-launch optimization milestones

### Day 1
- Verify ads serving (Google Ads search test: open incognito → search "studio huren personal trainer amsterdam" → confirm your ad appears with `Anzeige` / `Ad` label)
- Conversion tracking firing (use Google Tag Assistant)

### Day 7
- Pause keywords with CPC > €0,80 (over-bid for budget)
- Pause keywords with 50+ impressions + 0 clicks (irrelevant copy/landing)
- Add new negative keywords from Search Terms report (any term that triggered an ad but isn't a trainer query)

### Day 14
- Identify top 3 converting keywords → raise Max CPC on those to €0,75
- Pause bottom 5 by CTR
- A/B test 1 new headline (replace the lowest performer)

### Day 30
- Calculate cost per booked trainer (Conversion #3) — target < €8
- If CPL < €4: increase budget to €5/day, scale up
- If CPL > €10: reconsider keyword mix or landing-page friction

---

## Why we route to `/nl/studio-huren/gratis-test` (not `/nl/studio-huren`)

The dedicated landing has ONE conversion (Acuity embed) + no paid-pricing competing for attention. Full /nl/studio-huren leads with `RentalTabs` showing paid hourly + packages — wrong context for a free-trial-intent click.

| Variant | Bounce rate | Convert rate |
|---|---|---|
| Full /studio-huren (paid pricing visible) | ~65% | 3-5% |
| Lean /gratis-test (Acuity-only) | ~40% | 8-15% |

(Estimates — calibrate at day 14.)

---

## What NOT to do

- ❌ Performance Max at €2,50/day (needs ≥30 conv/mo to optimize; will burn budget on broad exploration)
- ❌ Smart Campaigns (auto-bidding without volume = waste)
- ❌ Display Network on this campaign (banner-blind audience for B2B trainer search)
- ❌ Broad-match keywords without negatives (will surface "personal trainer worden" → consumer overlap)
- ❌ Bidding on `[personal trainer amsterdam]` (consumer head term, €5+ CPC)
- ❌ Running 7-day-of-week schedule (Sundays = low trainer-search activity = wasted impressions)

---

## Future expansion (when this scales past €5/day)

- Add ad group C: `Studio rental near tube stations` (long-tail location keywords)
- Add ad group D: `English-speaking PT in Amsterdam` (route to `/en/studio-rental/free-trial`)
- Add Performance Max campaign once conversion volume ≥ 30/month
- Layer Meta Ads (Instagram is where IG-trainer audience already lives — separate campaign)
