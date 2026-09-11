# Personal training: sell transformations, not hours — strategy (2026-09-11)

Operator directive 2026-09-11: *"we should not just sell personal training by the hour, we should sell
transformations … total transform this to the best page, concept so trainers grow their clients and
revenue fastest … the best possible funnel … can also link to their websites."*

## Where we started (measured, GA4 prop sculptclub.nl, 2026-08-12 → 09-11)

| page | views | sessions | engagement / view | leads (generate_lead) |
|---|--:|--:|--:|--:|
| /nl/vind-jouw-personal-trainer | 93 | 84 | ~10 s | **1** |
| /en/find-personal-trainer | 30 | 25 | ~22 s | 8 |
| /nl/gratis-intake | 40 | 37 | ~5 s | 0 |
| /nl/match-trainer | 9 | 6 | ~26 s | 2 (quiz) |

- NL hub views were up ~50% on the prior 30 days (62 → 93). Sources: google 31, direct 19, the vanity
  domains (jordaanpt / pt45 / ptjordaan) 32, chatgpt 6. 56% mobile.
- Google: the hub sits at position 14.3 on 26 impressions. Every non-brand PT query is at position 45–90.
  SEO is not the near-term lever; conversion of the traffic we already have is.
- Clarity (5 recorded sessions, small n): average scroll depth 17% on the NL hub.
- trainer_name only became a registered GA4 dimension on 2026-09-06, so per-trainer attribution is
  mostly "(not set)" for this window. Re-read after 2026-10-06.

**Diagnosis.** The hub opened on a directory: 13 bios, 7 of them "rate on request", everything framed as
"a session from €45". A visitor arrives with a goal, not a trainer name, and was asked to pick a person
first. Result: ~10 seconds, ~1% of views to a lead.

## The concept

1. **Goal first.** Six transformations a visitor recognises: fat loss, get stronger (beginners welcome),
   pain-free movement & recovery, strong as a woman, calisthenics skills, more energy & less stress.
   Each goal lists only trainers whose OWN specialization names it (`src/config/pt-goals.ts`).
2. **A traject, not an hour.** Every free intake ends in a plan: goal, duration, frequency, what we
   measure, and a fixed total price upfront. Single sessions stay available.
3. **Warm hand-off.** The WhatsApp message to the trainer now carries the goal ("…voor een traject:
   Afvallen & strakker worden"), so the trainer opens the conversation from the client's goal.
4. **Trainers' own brands are an asset.** Cards and intake pages link to the trainer's own site
   (Gezina → Marseille Movement, Dara → Strength & Balance). Their client stories do the convincing we
   cannot honestly do ourselves yet.
5. **Retention loop for SculptClub.** Step 4 of every traject offers Open Gym as the "continue on your
   own" path.

## Why this grows trainer revenue fastest

- A client who agrees a 12-week, 2×/week traject is 24 sessions sold in one conversation. Selling
  single sessions means re-winning the client every week.
- Goal-matched leads arrive pre-qualified, so fewer intakes are wasted.
- Every traject session is a studio hour, which is SculptClub's own revenue line.

## What only the operator can do (not done)

- **Tell the trainers.** The hub now promises a traject-plan with a fixed price upfront at every free
  intake. Trainers need to know, and ideally agree a package price. Draft message below.
- **Collect 3 real client stories per goal** (first name, consent). The page has no results section on
  purpose until real ones exist; fake or borrowed results are off the table.
- ~~**Confirm more trainer websites.** Only Gezina and Dara are linked because only those were confirmed.~~
  **(superseded 2026-09-11: 9 own websites are linked after identity verification — see Trainer research.)**

Draft message to trainers (NL, for the operator to send):

> Hoi! Onze trainerspagina op sculptclub.nl is vernieuwd: klanten kiezen nu eerst hun doel (bijv.
> afvallen, sterker worden, pijnvrij bewegen) en zien daarna de trainers die daarin gespecialiseerd zijn.
> Hun WhatsApp aan jou noemt dat doel. We beloven klanten dat ze na de gratis intake een traject-plan
> krijgen: doel, duur, frequentie en een vaste prijs vooraf. Heb je al een pakket (bijv. 12 weken)?
> Stuur het me, dan kunnen we het op je profiel zetten. Heb je een eigen website? Dan linken we die ook.

## How we measure it

- New GA4 event `goal_select {goal_id}` → trainer_impression → whatsapp_click / generate_lead.
- Read at 2026-10-11 (30 days): leads per 100 hub views, NL and EN, against the baseline above
  (NL ~1 per 93 views). Small numbers: judge on counts, not percentages, until n > 30 leads.

## Pricing decision (operator 2026-09-11: "you decide best strategy")

- **Traject prices are never shown by SculptClub.** They vary per trainer and are the trainer's business.
- **Asking for the price is the primary price action.** Every "rate on request" became a "Vraag prijs aan →"
  WhatsApp button to that trainer, with the visitor's goal in the message. It fires the same lead events as the
  intake button, so price requests count as leads.
- **One site-level anchor stays: "sessies vanaf €45".** It qualifies visitors and prevents the "is this €150/hour?"
  bounce. Trainers who publish their own session rate keep it; that is their choice.

## Operator decision (2026-09-11)

"sculptclub just sells hours, we will be the ultimate platform for our renters to grow revenue."
SculptClub does not sell programmes itself. Trainers sell trajecten; SculptClub matches, qualifies and routes the
client, showcases the trainer's own brand, and earns on studio hours. The voor-trainers / for-trainers page now
explains this platform value to renters.

## Trainer research (2026-09-11, 13 trainers, identity-verified)

Raw verdicts with source URLs: workflow wf_77a83936-e96 (session transcript dir). Each finding was re-fetched by
an independent checker and only kept with concrete identity evidence (two-way handle link, KvK, studio address).

**The trainers already sell transformations.** 10 of 13 run their own coaching business; several sell exactly the
traject model this page now promotes:

| trainer | own brand (verified) | what they sell |
|---|---|---|
| Eva | Sportieef | True Balance 1:1 coaching, 12/24/36 weeks (€297/€247/€227 per month, EN page) |
| Jearmey | Proformance Institute | 12-week Body Transformation, Pain Free Performance and 4 more (from €300 per 4 weeks) |
| Hamish | leerkrachttraining.com | PT packs of 10/20/30 sessions (€800/€1,560/€2,280), online coaching |
| Sergei | TransformBST | BST method, posture correction (8–12 weeks), €90 first session |
| Dara | Strength & Balance | 1:1 from €75, Strength Club from €19.90, online from €149 per 4 weeks |
| Gezina | Marseille Movement | 1:1 €80 per hour, online coaching |
| Bryan | Calisthenics Skill Lab | group classes (€63/month unlimited), PT on request |
| Ibrahim | Beter Dan Gister | PT, nutrition/weight-loss traject, private football training |
| Roberta | Roberta Virzi PT | PT, duo, online coaching; EREPS Level 4 (independent register #149967) |
| Tom | probable: TomHammondPT (old London site) | not linked — identity only probable |
| Alex, Andrea, Joey | nothing found outside SculptClub | — |

Prices above are the trainers' own published prices, recorded here for strategy only. SculptClub does not show
traject prices (pricing decision above); the website link lets clients read them on the trainer's own site.

**Data to confirm with the trainers (operator):**
- Rates differ from what SculptClub shows: Hamish €72 on SculptClub vs €76–80 per session on his site; Sergei €80 vs
  €70/€65/€60 on a 2024 page of his site.
- Location: Ibrahim's site names both Egelantiersgracht 424 and a gym at Reinaert de Vosstraat; Dara's site says
  "private studio in Amsterdam-West" (her pinned Instagram post names SculptClub).
- Andrea's Instagram bio says "Master of Kinesiology · Yoga and Pilates instructor" (unverified; not shown).
- ~~Joey's Instagram @joaonomad137 appears to be gone; the card still links it.~~ **(fixed 2026-09-11: confirmed
  gone in a real browser — "Deze pagina is niet beschikbaar", no search result — and removed from his card, both
  burnout blog posts' schema and the social drafts. Ask Joey for a current handle.)**
- Alex: a 2024 TrainMore profile of "Alexandre Almeida" (EREPS 4 claim) may be him — ask before showing.
- Tom: @tomhammondpt does not exist. The probable account is **@tomhammondfitness** (display name Tom Hammond,
  "Amsterdam Based, British Personal Trainer", BJJ blue belt at Roger Gracie Amsterdam, a comment from
  @sculptclubjordaan on a recent post). Not added until Tom confirms. Its link-in-bio tomhammondfitness.nl serves
  "Page not found".

## Deep pass: every trainer's Instagram + website (2026-09-11, workflow wf_1624b6e9-cf0)

Browser read of all 13 Instagram profiles (bio, every link-in-bio, highlights, last 6 posts) and a full crawl of
every own website. Full per-trainer plans: session scratchpad `deep.json`.

**Shipped from it:**
- Trainer profiles now list the trainer's OWN named trajecten (`programmes` in trainers.ts; 9 trainers, 17
  programmes, every page HTTP 200 on 2026-09-11). Primary action "Vraag naar dit traject" opens the trainer's
  WhatsApp with the programme named; the secondary link reads more on their site. Online-only coaching and
  group classes at other venues are left out: they use no SculptClub hours. No prices.
- The goal panel on the hub shows "Trajecten die onze trainers al aanbieden" for the chosen goal, linking to the
  trainer's profile with the goal carried (`?doel=`), so the visitor stays in the SculptClub intake path.
- Goal matching now uses the trainers' own published material, ordered by strength of evidence (pt-goals.ts):
  Hamish added to afvallen + pijnvrij; Roberta to sterker, vrouwen, energie; Jearmey and Eva to sterker; Sergei,
  Dara and Eva to energie.
- New GA4 event `programme_click {trainer_name, programme, action: ask|details|profile}`.

**What the trainers' own channels show (for the operator's trainer conversations):**
- SculptClub is nearly invisible on trainers' own channels. Named on a website only by Hamish ("Sculptclub
  Jordaan", and all his recent posts tag @sculptclubjordaan). On Instagram only: Dara (pinned post), Andrea
  (reposted a SculptClub post), Ibrahim (address sticker in a video). Gezina and Jearmey write "private studio in
  the Jordaan", Sergei "Private Studio — Egelantiersgracht 424", Dara's site "Amsterdam-West". A one-line ask to name
  SculptClub Jordaan and link their SculptClub profile is the cheapest local-SEO and trust win.
- Most trainers also sell hours elsewhere: Sergei (TrainMore Singel), Hamish (Sportcity Waterlooplein from 14 Sep),
  Eva (Sportcity Willem de Zwijger), Roberta (a post tagged Train More), Gezina (I Am Woman, Reformher Studios),
  Bryan (outdoor Amsterdam West / Zaandam), Alex (The Studio Oost). A profile that converts is the retention lever.
- Group formats bring several clients into one hour: Dara's Strength Club (max 4, at SculptClub per her pinned
  post) and Hamish's small-group trial. A class timetable surface would raise revenue per studio hour.
- Broken links that cost trainers leads: Eva's Linktree "Kennismaking" booking widget returns 404; Gezina's site
  promotes Duo and Online Coaching whose booking pages are unavailable; Tom's probable site is down.
- Trainers with no booking path of their own: Alex (3.4K followers, empty bio, no link) and Andrea (1.1K, no link).
  Their SculptClub profile link in their bio would be their only booking path.
- Only independent credential register hit: Roberta, EREPS Personal Trainer #149967, valid to 2027-05-07.
