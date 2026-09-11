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
- **Confirm more trainer websites.** Only Gezina and Dara are linked because only those were confirmed.

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
