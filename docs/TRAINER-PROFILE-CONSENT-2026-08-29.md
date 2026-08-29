# Trainer profile consent — ready-to-send · 29 aug 2026

**What this is:** the five people who pay you rent every week and appear nowhere on the site
(`TRAINER-ROSTER-RECONCILIATION-2026-08-25.md`). That doc's next action was *"ask them whether
they want a profile"*. This file is that ask, written out, so it is a copy-paste rather than a
drafting job.

**Why it is worth your 15 minutes:** the site already owns the demand machine — 26 live intake
pages, a filterable directory, a match quiz, 5.0★ from 21 reviews, and a blog cluster ranking
for "personal trainer amsterdam". Every client the site sends a renter becomes €12–17/hour of
rental income to you. These five are simply not plugged into any of it. And `/nl/studio-huren`
answers *"Krijg ik klanten via SculptClub?"* with **"Ja."** — a promise that is not currently
kept for them.

**What I did NOT do:** send anything. Publishing someone as a trainer on a public site is their
call and the message goes from you, not from an agent.

---

## The five (most-established first)

| Trainer | Bookings | Period | Note for your opener |
|---|---:|---|---|
| **Mees** | 38 | Feb → Aug 2026 | Longest-standing of the five, by a wide margin. Lead with this one. |
| **Nahuel** | 10 | Apr → Jul 2026 | Nothing since 10 Jul — worth a "still training here?" first. |
| **Jimmi** | 7 | Jun → Aug 2026 | Came in via the free probeersessie and converted. |
| **Aldo** | 6 | Mar → Aug 2026 | Steady, low volume. |
| **Nadine** | 2 | Aug 2026 | New — both bookings this month. Softer ask. |

---

## The message (NL — send as-is, swap the name)

> Hey [naam], je traint nu een tijdje bij SculptClub — leuk dat je er bent.
>
> Ik wil je op de website zetten met een eigen pagina, zodat mensen die een personal trainer
> in de Jordaan zoeken bij jou uitkomen. De site trekt maandelijks bezoekers via Google en ik
> stuur die leads door naar de trainers die er staan. Kost jou niets, en je houdt 100% van je
> eigen tarief — je huurt alleen de ruimte, zoals nu.
>
> Als je dat wil, heb ik dit van je nodig:
>
> 1. Je naam zoals je 'm op de site wil
> 2. 2–4 specialisaties (bijv. kracht, houding, afvallen, revalidatie)
> 3. Talen waarin je traint
> 4. Je uurtarief — of "op aanvraag" als je dat liever niet publiceert
> 5. Een korte bio, 2–3 zinnen (of stuur wat steekwoorden, dan schrijf ik 'm)
> 6. Je Instagram (optioneel)
> 7. Het WhatsApp-nummer waarop klanten je mogen benaderen
> 8. Een foto van jezelf — mag ook zonder, dan gebruiken we een studiofoto
>
> Je mag op elk punt nee zeggen; wil je bijvoorbeeld wél op de site maar géén foto, dan doen we
> dat gewoon. En je kunt er later altijd weer af.

**EN version** (Sergei/Roberta-style, if a renter prefers English): same list, opening —
*"You've been training at SculptClub for a while now — good to have you here. I'd like to put
you on the website with your own page, so people searching for a personal trainer in the
Jordaan find you."*

---

## Why the message says what it says

- **"je houdt 100% van je eigen tarief"** — never *"0% commissie"*. There was never a commission
  to waive; you rent the room. Operator directive, and it is in CLAUDE.md.
- **Per-item consent, explicitly reversible.** Point 8 offers a no-photo path and the closing
  line offers removal. That is the difference between an ask and a presumption.
- **No urgency, no scarcity.** These are tenants, not leads.
- **It states the benefit honestly** — the site does get search traffic and does route leads —
  without promising a client volume nobody can guarantee.

---

## What happens when a reply lands

Fully brain-doable, no design work, roughly 10 minutes per trainer:

1. `src/config/trainers.ts` — one entry. Required shape (copied from the live `Eva` entry):
   `id · name · slug{nl,en} · specialization{nl,en} · languages · rate · instagram ·
   instagramHandle · credentials{nl,en} · bio{nl,en} · image · whatsapp`
   `rate: null` renders "op aanvraag"; `instagram` and `whatsapp` are optional and fall back
   to the studio number.
2. Photo → `public/images/trainers/<id>.jpg`. If they declined a photo, reuse a studio shot.
3. The intake pages, directory card, match-quiz option, sitemap entry, `llms.txt` §Trainers and
   the `sculptclub.nl/<naam>` short link all generate from that one entry — 2 new pages per
   trainer, NL + EN.
4. `scripts/check-trainer-consistency.mjs` runs in prebuild and fails the build if the roster
   drifts out of sync across surfaces, so a half-added trainer cannot ship.

**Zero invention.** No bio, rate, specialism or availability gets written from a guess — if a
field does not come back, it stays empty and the block simply does not render.

---

## Still open, and still yours (not mine)

**Bryan and Tom.** Both are listed with live intake pages; Bryan last rented in March, Tom never
appears in the rental export at all. A client who picks Bryan today lands on a trainer who no
longer rents here. Options are unpublish / keep warm / re-invite — a relationship call, not a
code one. Related detail found 29 aug: 11 of the 13 trainers have a working
`sculptclub.nl/<naam>` short link; Bryan and Tom are the two without one. I deliberately did not
add them, because doing so would deepen the presence of exactly the two people whose status you
are still deciding.
