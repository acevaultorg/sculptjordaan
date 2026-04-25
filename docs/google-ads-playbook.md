# Google Ads Playbook — SculptClub

**Account:** SculptClub `511-161-9582` · `paulomdevries@gmail.com`
**Conversion stack:** AW-18011741633 / `NwwsCNGZlp8cEMG71YxD` (Submit-lead-form)
**Updated:** 2026-04-25 — built during deep-dive optimization session

---

## State (as of 2026-04-25)

- ✅ PR #40 merged: WhatsApp / phone / email / contact-form clicks now fire Google Ads conversions (€45/€45/€30/€45 values respectively). Hero photos on `/nl/gratis-intake` + `/en/free-intro` got `priority` + `fetchPriority="high"`. CLAUDE.md ID synced.
- ✅ 4 geo-targeted LPs shipped: `/nl/personal-trainer-jordaan`, `/nl/sportschool-jordaan`, `/en/boutique-gym-amsterdam`, `/en/personal-trainer-amsterdam-jordaan`.
- ✅ Search campaign **draft built** in Google Ads (`SculptClub-Search-Brand-Jordaan-2026`):
  - Networks: Search-only (Display + Search Partners DISABLED — protects budget)
  - Locations: Amsterdam, North Holland, Netherlands (12.8M reach)
  - Languages: Dutch + English
  - AI Max: ON (text customization + final URL expansion)
  - Bidding: Maximize conversions (no target CPA — let it learn first 30 conversions)
  - Final URL: `https://sculptclub.nl/nl/gratis-intake`
  - 20 keywords (mixed exact + phrase) — see § Keywords below
  - 8 headlines + 4 descriptions — see § Ad Copy below
  - Ad Strength: Average ✓
  - Business name: SculptClub
- ⏳ **Operator finish required (~3 min):**
  1. Confirm 2FA "Confirm it's you" prompt (account security — only operator can)
  2. Set daily budget to **€15** (override default €8.59 recommendation)
  3. Click Publish on Review step
  4. Discard the old PMax draft (`Campaign #1`, €5/day, never launched)

---

## Why this campaign structure

**Search > PMax for early-stage local boutique:**
- Search gives you keyword visibility — you know exactly what's spending budget
- PMax with €5–15/day cannot learn (Google needs 30+ conversions/month at that budget; with broad PMax targeting it's spread too thin)
- Search at €15/day on tight Jordaan-focused keywords = ~30 clicks/day at €0.50 avg CPC = enough volume to see signal in 2 weeks

**Display + Search Partners disabled:**
- Display from a Search campaign cannibalizes the Search budget at lower-quality clicks
- Search Partners (parked domains, low-quality publishers) burn money for service businesses
- Result: every euro fights for high-intent Google.com SERPs

**Maximize Conversions (not Target CPA yet):**
- New campaign, zero conversion history → Target CPA would set unrealistic floors and starve the campaign
- Run Maximize Conversions for 30+ conversions, THEN switch to Target CPA at observed CPA × 1.1

**Final URL = `/nl/gratis-intake`:**
- This is the proven CRO LP (5★ + intake-led + above-fold CTA)
- AI Max's "Final URL expansion" can also send relevant queries to the new geo LPs — that's intentional

---

## Keywords (20)

Pasted into the campaign during build. Shown here for reference and easy re-paste:

### Brand + neighborhood (highest intent)
```
[personal trainer jordaan]
[personal trainer amsterdam jordaan]
"personal trainer jordaan amsterdam"
"personal trainer in de jordaan"
[personal trainer egelantiersgracht]
"personal training jordaan"
"persoonlijke trainer jordaan"
"sculptclub"
```

### Free intake (highest CVR)
```
[gratis intake personal trainer amsterdam]
"gratis personal training intake amsterdam"
"free intro personal trainer amsterdam"
```

### Open Gym / no-membership angle
```
[sportschool jordaan]
"sportschool zonder abonnement amsterdam"
[open gym amsterdam]
"open gym jordaan"
```

### Boutique / private gym (expat angle)
```
[boutique gym amsterdam]
"private gym amsterdam"
[private personal trainer amsterdam]
```

### Studio rental + general PT
```
[studio huren personal training amsterdam]
[personal training amsterdam]
```

**Match types:**
- `[exact]` — only fires on exact match. Used for highest-intent keywords where we want tight cost control.
- `"phrase"` — fires when the keyword phrase appears anywhere in query. Used for variant intents where we want broader matching.
- Bare (no brackets/quotes) = broad match — NOT used here intentionally; broad match burns budget on irrelevant queries early.

**After 2 weeks of data**, expand the winners and pause the losers. Use Search Terms report → add high-converting variants as exact match, add weak performers as negative keywords.

---

## Ad copy (Responsive Search Ad #1)

### 8 headlines (each ≤30 chars) — already in campaign

```
1. Personal Trainer Jordaan
2. Gratis Intake — 45 Min
3. 5.0★ op Google Reviews
4. Privé Studio Amsterdam
5. Vanaf €45 per Sessie
6. Boutique Gym in Jordaan
7. Geen Abonnement Nodig
8. 5 Trainers — één studio
```

### 4 descriptions (each ≤90 chars) — already in campaign

```
1. Privé studio in Jordaan. 5 trainers, geen abonnement. Vanaf €45 per sessie.
2. Egelantiersgracht 424. Open 06:30–22:00. Boek je gratis intake. 5.0★ Google.
3. Boek online in 2 min. Geen abonnement. Cancel altijd gratis. Tot 22:00 open.
4. 5.0★ op Google. Verkoopabonnement loos — privé club, je betaalt per sessie.
```

### Suggested 7 more headlines for operator to add (optional polish — Ad Strength → Excellent)

```
9.  Eerste Intake 100% Gratis
10. Egelantiersgracht 424
11. Boek Online — 2 Minuten
12. Open 06:30–22:00 Daags
13. Direct Beschikbaar
14. Privé. Persoonlijk. Echt.
15. Boutique Personal Training
```

### Suggested EN-locale variants (for a future EN-targeted campaign)

```
HEADLINES:
- Boutique PT in Amsterdam
- Free 45-Min Intro Session
- 5.0★ on Google Reviews
- Private Gym in Jordaan
- From €45 per Session
- No Membership Required
- 5 Coaches in Jordaan
- Egelantiersgracht 424
- Book Online — 2 Minutes
- Open Daily 06:30–22:00

DESCRIPTIONS:
- Private boutique gym in Jordaan. 5 trainers. No contract. From €45.
- Egelantiersgracht 424. Open 06:30–22:00. Free intro online in 2 min.
- 5.0★ on Google. No-membership boutique club — pay per session.
- Book free intro online. Cancel anytime free. 5 trainers, one studio.
```

---

## Sitelinks (Operator add post-launch — +5–10% CTR)

Recommended 4–6 sitelinks for the campaign assets:

| Title | URL | Description (≤35 chars each) |
|---|---|---|
| Gratis Intake | /nl/gratis-intake | Eerste 45 min · No-abonnement |
| Open Gym | /nl/open-gym | €29/4w · Geen abonnement |
| Studio Huren | /nl/studio-huren | Privé studio · €12/uur |
| Personal Trainer | /nl/vind-jouw-personal-trainer | 5 trainers · Vanaf €45 |
| Pricing | /nl/prijzen | Transparant · Geen abonnement |
| Contact | /nl/contact | WhatsApp · Telefoon · E-mail |

---

## Callouts (4–8 short USPs — +2–5% CTR)

```
- 5.0★ op Google
- Geen Abonnement
- Privé Studio
- 5 Trainers
- Eerste Intake Gratis
- Open 06:30–22:00
- Egelantiersgracht 424
- Direct Boeken
```

---

## Structured snippets

**Type:** Services
**Values:**
```
Personal Training, Open Gym, Studio Verhuur, Voedingsadvies, Fysiotherapie, Calisthenics, Krachttraining
```

---

## Negative keywords to add Day 1

To prevent budget waste on irrelevant searches:

```
-gratis (alone — only allowed in "gratis intake" variants)
-personeel
-trainer vacature
-trainer baan
-trainer worden
-fitness instructeur worden
-jobs
-vacature
-leerling
-cursus
-opleiding
-sportschool eigenaar
-amsterdam noord
-amsterdam zuid
-amsterdam oost
-amsterdam west
-haarlem
-utrecht
-rotterdam
-thuis
-online training
-onlinetrainer
-app
-youtube
-gratis training
-free workout
```

These narrow the campaign to **Jordaan-area people looking for paid PT**, not job-seekers, students, online options, or other Amsterdam neighborhoods.

---

## Post-launch monitoring (Week 1–4)

### Daily (first 7 days)
- **Cost vs daily budget** — Google Ads → Campaigns. If pacing is below budget, raise bid; if at cap, lower until learning stabilizes.
- **Conversions** — Goals → Conversions. After 24h with deployed PR #40, Submit-lead-form action should activate (status changes from `Misconfigured` → `Recording`).
- **Search Terms report** — Insights & reports → Search terms. Add irrelevant queries as negative keywords; promote high-converting variants to exact match.

### Weekly (Week 1–4)
- **Quality Score per keyword** — Keywords → Quality Score column. Anything <5/10 needs landing page / ad copy alignment fix.
- **CPC vs target** — Aim for €0.40–€0.80 avg CPC. Higher = competing for too-broad terms; tighten match types.
- **Conversion rate by ad** — Ads & assets → Ads. Pause underperforming ads, A/B test variants.
- **Plausible** → Campaigns tab to confirm UTM attribution working (UTM tags should auto-populate from Final URL expansion).

### Month 2+ — when ≥30 conversions accumulated
- Switch bidding strategy from `Maximize Conversions` → `Target CPA` set at observed CPA × 1.1 (gives algorithm headroom)
- Add Enhanced Conversions hashed user_data (operator: turn on in Goals → Conversions → Submit-lead-form → Enhanced conversions; brain ships hashed-payload code in follow-up commit when operator confirms ready)
- Consider duplicating the campaign with English-only ad copy + English-only LPs (`/en/free-intro`, `/en/find-personal-trainer`) for expat-search coverage

---

## Revenue model — what to expect

**Conservative (Week 4):**
- ~30 clicks/day × €0.50 CPC = €15/day spend
- 5–8% CVR (this is a free-intro offer, high CVR expected) = 1.5–2.4 leads/day
- 30–40% intake-to-paid conversion = 0.5–1.0 paying clients/day from ads
- At €45 per first session + ~€350 LTV (4 sessions average) = €175–€350/day revenue from new ad-acquired clients
- ROI: 12–23× ad spend (€15 → €175–€350) — typical for boutique PT with high LTV

**Realistic (Month 3+):**
- Same volume, but Quality Score improvements (from new geo LPs + ad copy iteration) drop CPC to €0.30–€0.40
- Same budget = ~38 clicks/day → ~3 leads/day → ~€225–€500/day revenue
- ROI: 15–33×

These estimates assume the operator's Acuity calendar can actually onboard 1–3 new clients per day. If onboarding capacity is tighter, lower the daily budget or raise CPA target.

---

## What NOT to do (anti-patterns)

- ❌ **Don't enable Display + Search Partners** — already disabled. They sound like "more reach" but they're a budget tax for service businesses.
- ❌ **Don't set Target CPA in Week 1** — algorithm needs ≥30 conversions to learn what CPA is realistic. Setting it too low starves the campaign of clicks.
- ❌ **Don't use broad-match keywords** — every euro on broad match in Week 1 is bid against irrelevant queries. Start exact + phrase.
- ❌ **Don't pause the campaign at first sign of high CPC** — give it 14 days. Quality Score takes a week to stabilize as Google sees CTR.
- ❌ **Don't enable "Recommendations Auto-Apply"** — Google's auto-apply often broadens match types or expands networks behind your back. Review each rec individually.
- ❌ **Don't skip negative keyword maintenance** — weekly Search Terms review is the highest-ROI 5 minutes you can spend.

---

## Sources of truth

- **Source code analytics IDs:** `src/config/site.ts` (single canonical place — CLAUDE.md mirrors but is documentation only)
- **Conversion firing JS:** `src/components/layout/analytics.tsx`
- **Contact form conversions:** `src/app/{nl,en}/contact/page.tsx`
- **Hero LCP optimization:** `src/app/{nl/gratis-intake,en/free-intro}/page.tsx`
- **Geo LPs:** `src/app/{nl/personal-trainer-jordaan,nl/sportschool-jordaan,en/boutique-gym-amsterdam,en/personal-trainer-amsterdam-jordaan}/page.tsx`
- **This playbook:** `docs/google-ads-playbook.md` (you are here)
