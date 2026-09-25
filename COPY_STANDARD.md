# SculptClub copy standard

Paulo, 2026-09-25 (card muglj66sx8vkaa): "be aware of AI slop written text … what text length is best, how many characters in every situation?"

Every visible sentence on sculptclub.nl follows this. Checked at 390px (an iPhone-width screen).
`scripts/check-copy.mjs` scores the built pages against it: `node scripts/check-copy.mjs` after `npm run build`.

## Lengths (characters, spaces included)

| element | max | why |
|---|---|---|
| H1 | 45 | two lines at 390px with the heading font |
| sub-line under the H1 | 110 | three lines at most on a phone |
| paragraph | ~250 (2–3 sentences) | one thumb-scroll per idea |
| card / feature text | 140 | a card is read at a glance |
| button | 22 (2–4 words) | fits one line on a 56px button |
| FAQ answer | 300 | answer first, then one supporting fact |
| meta title | 60 | Google cuts the rest |
| meta description | 155 | Google cuts the rest |
| image alt | 125 | screen readers stop listening |

Over the limit is a signal, not a crime: legal text and blog body copy may run longer when every sentence carries a fact.

## Remove on sight (AI-slop tells)

- Words: elevate, unlock, seamless, journey, discover, unleash, empower, transform your, next level, game-changer, tailored, curated, holistic, vibrant, nestled. Dutch too: ontdek, naadloos, reis (as a metaphor), transformeer, tilt naar een hoger niveau.
- Em dashes used for rhythm ("Geen gedoe — gewoon trainen"). Use a full stop or a comma. En dashes in number ranges (06:00–22:00) are fine.
- Triads: three parallel items stacked for rhythm ("rust, focus en resultaat").
- Mirrors: "not X, but Y", "geen X, maar Y" as a slogan.
- Empty superlatives: "de beste", "ultiem", "uniek", "world-class" without a fact behind them.
- Every sentence the same length. Mix short and long.
- Generic warmth: "we're passionate about", "wij geloven in", "jouw welzijn staat centraal".

## Voice

Plain Dutch or English, the way a studio owner says it at the door. Specific beats general, every time:
the Jordaan, the canal, Egelantiersgracht 424, €12 half studio / €17 whole studio per hour, €9 Open Gym,
max 4 people, your own door code via WhatsApp at 00:00 the night before, cancel for free.

## What never changes in a copy pass

Prices, legal terms (algemene voorwaarden, privacy, cookies), conversion elements (booking links, data-intent,
data-cta, tracking), and trainer bios in their own words. A trainer bio that reads as slop is flagged to Paulo,
never rewritten silently.
