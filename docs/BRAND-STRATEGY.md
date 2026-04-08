# SculptClub — Brand Strategy

This doc is the source of truth for voice, positioning, and design decisions. Every copy choice on the site should trace back to it. Design tokens (colors, fonts, spacing) live in `tailwind.config.ts` and `src/config/site.ts` — this doc is strategy, not implementation.

---

## What SculptClub actually is

A small, independent private training studio on the Egelantiersgracht in the Jordaan. Three things happen in the same room:

1. **Independent personal trainers** bring their own clients and set their own prices. SculptClub takes **0% commission**.
2. **Open Gym members** train on their own in 4-week cycles with no membership lock-in.
3. **Freelance trainers, physios and coaches** rent the studio by the hour or by the pack.

No reception. No front desk. No membership cards. Door codes by WhatsApp the night before. Cancellation is always free. Max 3 people in the space at once.

This is a **boutique private gym**, not a premium lifestyle brand. Prices are honest: PT from €45, Open Gym from €5.75/session, studio rental from €12/hour. The room is beautiful but the economics are accessible.

## Positioning (one sentence)

> **SculptClub is the independent private studio in the Jordaan — no membership, no commission markup, no crowd. Just the room, the equipment, and the trainer of your choice.**

## Core beliefs

These are the four things the business actually believes, written the way a human would say them. They are the "why" behind every operational choice.

1. **Trainers do their best work when they own their prices and their clients.** That's why we take 0% commission. The rate you see is the rate they charge — we don't mark it up.
2. **People train harder in privacy.** That's why we cap at 3 people simultaneously and send door codes instead of having a reception desk.
3. **Commitment doesn't equal results.** That's why Open Gym runs in 4-week cycles you can cancel anytime, and why the first intake is free with no pressure to book again.
4. **Neighbourhood matters.** That's why we're on the canal in the Jordaan and not in a strip-mall fitness park.

These beliefs are the north star. If a copy or product decision contradicts one of them, the decision is wrong.

## Audiences

Two very different audiences use the site, and the copy needs to speak to each without confusing the other.

### A. End clients (people who want to train)
- Amsterdam residents, 25-50, live or work in walking distance of the Jordaan
- Tried chain gyms, got crowded out, frustrated with membership traps
- Want a small space with real equipment and no social pressure
- Value privacy over group energy, quality over flash
- **They care about:** free intro, no contracts, pick-your-own-trainer, location, clean equipment, quiet hours
- **They don't care about:** brand lifestyle, trainer certifications (they trust the curation), membership tiers

### B. Independent trainers, physios, coaches
- Freelance professionals in Amsterdam who already have clients
- Currently either (a) renting studio time at marked-up hourly rates, (b) paying commission to a gym, or (c) training clients in overcrowded chain gyms
- Want a clean, equipped room they can call their own without fixed overhead
- **They care about:** cost per session, scheduling freedom, 0% commission, free marketing support, clean equipment
- **They don't care about:** branded merchandise, management meetings, team-building nonsense

## Voice

Direct. Honest. Operational. Never aspirational, never corporate.

| Context | Tone |
|---|---|
| Headings | Short, concrete, benefit-first. Max 10 words. |
| Body | Matter-of-fact. Names prices. Says what it is. No filler adjectives. |
| CTAs | Specific actions. "Book free intro", "Rent the studio", "Train today". |
| FAQ | Answers the real question. No legalese. |
| Error messages | Honest, helpful. |

**Words we use:** private, independent, honest, quiet, canal, intro, cancel, free, trainer, studio, room, walk in.

**Words we avoid:** transformation, journey, craft, refined, elevated, curated, holistic, wellness, alignment, synergy, precision engineering, lifestyle.

## What SculptClub is NOT

- Not Equinox (no membership lifestyle brand)
- Not Barry's (no group classes, no high-energy bootcamp vibe)
- Not F45 (no programmed circuits)
- Not CrossFit (no box culture, no community pressure)
- Not a budget chain (no rows of treadmills, no 24/7 self-service)

It's closer to a private music studio or a shared photography darkroom than to any of the above. A room with good equipment that professionals rent to do their real work, with a small public membership on the side.

## Brand tension

**Private but welcoming.** The space is small and quiet, but the policies are generous — free intro, no contracts, trainers keep 100%. The hardest thing to communicate is that "private" doesn't mean "exclusive" or "expensive". It means "not a chain".

## Design principles

### The color-clickability contract
**If it's blue, it MUST be clickable. If it's not clickable, it MUST NOT be blue.**
- Buttons, links, CTAs, focus rings → brand color
- Headings, body text, labels → foreground/neutral only
- Navigation text (default state) → foreground, not brand color

### Dark theme only
SculptClub is dark-only by design. Never add a light-mode toggle. The dark palette is the brand — matching the private, quiet, after-hours feeling of the space.

### Visual hierarchy
| Level | Role |
|---|---|
| L1 | Hero headline, page title |
| L2 | Section headings, primary CTAs |
| L3 | Body, card titles |
| L4 | Captions, metadata, timestamps |
| L5 | Dividers, backgrounds, borders |

### Button hierarchy
- **Primary** (filled brand): max ONE per viewport — "Book free intro" is the usual one
- **Secondary** (glass/outline): supports the primary
- **Ghost** (text-only): low emphasis, navigation
- Never two filled primaries side by side.

### Section rhythm
Alternate backgrounds to create visual breathing room: default → muted → default → dark. Never two consecutive sections with identical background.

### Quality checklist before shipping copy
- [ ] Does it answer a real user question or pain?
- [ ] Would a friend recognise this as "how SculptClub talks"?
- [ ] Does it contradict any of the four core beliefs?
- [ ] Is it shorter than the first draft?
- [ ] Does it name concrete numbers / places / names where possible?
- [ ] Is it free of the banned words above?

---

**Last rewritten:** 2026-04-08 — reset to match operational reality after a drift audit showed the doc and the site were pointing at different businesses.
