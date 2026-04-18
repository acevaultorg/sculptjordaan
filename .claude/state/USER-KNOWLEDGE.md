# User Knowledge

- Studio rental is the #1 money maker for SculptClub. Prioritize studio rental visibility and conversion paths above other services. <!-- added 2026-03-30, source: user directive -->
- Business model: Open Gym = subscription (4-week cycles, cancel anytime). Personal Training = packages (trainers set own rates, sell packages). Studio Rental = per hour or discount packages. Never say "geen abonnement" / "no membership" as blanket statement — Open Gym IS a subscription. "Geen vaste contracten" / "no lock-in contracts" or "altijd opzegbaar" / "cancel anytime" are accurate alternatives. A broader subscription model may launch in the future. <!-- added 2026-04-04, source: user correction -->
- contact@sculptclub.nl is the correct email. Never use info@sculptclub.nl. <!-- added 2026-04-04, source: user confirmation -->
- No student/senior discounts. Price point is already low for boutique. Free trial handles conversion. Don't undercut trainers. <!-- added 2026-04-04, source: user confirmation -->

## Ship-end autopilot (operator directive 2026-04-18)
- In `/acepilot auto` on SculptClub: after opening a PR, **immediately merge it, fire the Vercel deploy hook, and verify the new state live via Chrome MCP DOM query** — all in one continuous pass, no "ready to merge?" check-in. Operator directive 2026-04-18 after PR #30 sat unmerged: "you do this in the future".
- The Vercel GitHub auto-deploy webhook has been dormant fleet-wide since 2026-04-13, so **manual deploy-hook curl is part of the ship pipeline**, not an exception. Hook URL + verification pattern live in `KNOWLEDGE.md ## Deploy pipeline (verified 2026-04-16)`.
- Verification = grep the rendered HTML for the expected asset filename OR query the DOM via Chrome MCP `find` for the alt-text. Don't trust browser visual — operator's browser caches aggressively; DOM / HTML grep is authoritative.

## Business Registration (verified 2026-04-18)
- **Legal entity:** P.M. de Vries (eenmanszaak) — solo founder / ZZP structure
- **Trade name (handelsnaam):** SculptClub
- **KvK nummer:** 64708101
- **BTW-identificatienummer (public VAT ID):** NL002250100B57
- **Registered business address:** Egelantiersgracht 424, 1015 RR Amsterdam (the studio)
- **Mail / personal registered address:** Egelantiersstraat 220-C, 1015 PT Amsterdam
- **Business phone:** +31 6 83 17 89 34
- **Business email:** contact@sculptclub.nl
- **Billing email (ad accounts, etc.):** paulomdevries@gmail.com
- **Google Ads account ID:** 932-594-8599
- Use KvK + BTW + legal name P.M. de Vries for Organisation-path identity checks on any platform (Meta business verification, Stripe Atlas, etc.). Use "SculptClub" only as trade name.
- **Google Ads advertiser identity: VERIFIED 2026-04-18** — went Individual path ("Ads funded by: paulo de vries · NL"). All 4 tasks green-checked. No re-verification needed unless Google prompts.
- Do NOT persist: IBAN, BIC, Omzetbelastingnummer (personal tax-ID). Never enter these into web forms on operator's behalf. Operator provides directly when needed.

## Operations & Policies (verified 2026-04-04)
- Open Gym pause: clients can always pause (freeze) their 4-week cycle, not just cancel.
- Open Gym cancel mid-cycle: client keeps remaining sessions until cycle ends.
- Open Gym single session: same 59-minute slot as subscription sessions, €10.
- Studio rental discount packs expire after 12 months. Valid for both half and full studio. Strictly per person (no sharing between trainers).
- Trainers with packs: the pack value is deducted per booking. Trainers buy a pack (e.g. Routine €199) and get €234 worth of sessions — the pack credit is used to "pay" each booking.
- PT minimum €45 is NOT enforced — trainers set their own rates, can go lower if they choose.
- Trainers collect payment directly from clients. SculptClub takes 0% commission.
- Studio rental free trial: yes, one free tryout available (same as Open Gym trial).
- Invoicing: only available for package purchases (not single hours). No minimum amount.
- All prices include VAT at 9% (sport rate).
- Free intake = 60 minutes (not 30 or 45).
- Single Open Gym sessions: clients can book quantity >1 at once.
- Door code: unique per day (not per session). Everyone who books that day gets the same code. Don't over-explain anti-misuse details on the website.
- Overlap/conflict: if a client arrives and someone is still in the studio, they should contact SculptClub (call/WhatsApp).
- No gap between Open Gym slots — sessions are back-to-back.
- "Max 3 personen" Open Gym: goal is best experience per member. Enforced through booking system.
- "Max 6" studio rental: soft guideline, not enforced. Trainers can bring more for group classes.
- Changing facilities: limited (no full showers). Don't promise showers on the website.
- All equipment included: resistance bands, yoga mats, foam rollers, kettlebells — everything is there.
- Access: parking at the canals (grachten), bike is the best option. Don't promise parking.
- Active trainers: 6-8 currently. Most (but not all confirmed) offer free intake.
- Trainer autonomy: trainers set their own schedule, rates, and packages. No certification requirements to join. No maximum number of trainers on the platform.
- All trainers can share their phone numbers on the website (not just Dara).
- Trainers can rent studio for any use — PT, physiotherapy, dietitian consults, group classes, etc.
- No B2B or corporate offerings currently planned.

## Marketing & Brand (verified 2026-04-04)
- Target audience: both expats and locals equally.
- Client age range: mostly 20-40 (varies by trainer).
- "Boutique" positioning is correct — premium, small-scale, personal attention.
- Blog content: NL and EN only. No other languages.
- Instagram: @sculptclubjordaan (https://www.instagram.com/sculptclubjordaan/)
- TikTok: @sculptclub.jordaan (https://www.tiktok.com/@sculptclub.jordaan)
- Review platforms: Google Reviews active. Want to expand to Trustpilot, Yelp, etc.
- Social handles: Instagram @sculptclubjordaan, TikTok @sculptclub.jordaan

## Legal & Compliance (verified 2026-04-04)
- Terms & conditions: no lawyer — best-effort draft. Keep language clear and protective.
- No liability insurance mentioned. Clients are responsible for themselves. Include a liability disclaimer on the site.
- Privacy policy and cookie consent: needs to be checked and fixed if missing/incomplete.
- Acuity data storage compliance: needs to be verified.

## Competitors & Positioning (verified 2026-04-04)
- Key competitors: ptstudiorent.nl, Sportcity, Train More, training in the park, karakterpt.nl, B-One
- #1 differentiator for trainers: no subscription required to rent studio (other gyms charge €600-800/year subscription before trainers can even bring clients)
- Other privé studio concepts in Amsterdam: unclear — may be unique positioning

## Capacity & Growth (verified 2026-04-04)
- Current capacity: ~7 full studio sessions/day or ~14 half studio sessions/day on average
- B2B/corporate: not a focus at current scale (6-8 trainers, 1 location). Revisit at 2+ locations.
- Studio rental subscription for trainers: under consideration. Would create predictable MRR and lock in regular trainers. Keep existing packs for occasional renters. <!-- added 2026-04-04, source: user Q&A -->
