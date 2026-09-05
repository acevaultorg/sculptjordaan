# geen-wachtrij-001 — slot 4 "privacy" (client-facing)

**Built:** 2026-08-28 · **Hand-off:** https://sculptclub.nl/social/geen-wachtrij-001/ (deep link — `/social/` redirects to the Posting Studio, which does not list this)

## The frame

The account's best post ever is the consumer rental offer ("Private gym in de Jordaan.
Huur vanaf €12/uur." — 11,000 views, 96.1% NL, search traffic on "prive gym amsterdam").
The biggest competitor winner (13K) was that same offer framed as **privacy**: "rent your
own personal gym — perfect for privacy". This post is that variant — of a frame that is
proven on THIS account, not a new bet.

The angle never posted anywhere by us: **privacy has a price, and it is €17, not €12.**
Only the full studio carries the alone-guarantee; the half studio (€12/uur) is honest —
the other half can be occupied. That distinction came out of the studio-leeg-001 work.

## Facts used (verified against CLAUDE.md 2026-08-28)

- Hele studio €17/60min — full private, the alone-claim lives ONLY here
- Halve studio €12/60min — "dan kan de andere helft bezet zijn" (max 2 in your half;
  never phrased as sharing YOUR half with a stranger)
- Eerste sessie gratis · annuleren altijd gratis · Egelantiersgracht 424 · 06:00–22:00
- No dumbbell weights quoted (site has 4 contradictory claims — separate task)
- No "0% commissie" · no "proefles" (probeersessie-rule respected; neither word needed)

## Photos (chosen by eye — the pairs problem)

shoot-14 (woman alone AT the rack — hook is literal), shoot-04 (man alone, sled),
shoot-06 (proven price-frame bg from arithmetic post), shoot-18 (solo on air bike,
grinning — carries "net iets te veel sportschool"), canal-view-doors (house closer).
**Rejected:** shoot-01 (a phone screenshot, not a photo); shoot-08/09/12/13 (all show
TWO people — wrong photo under an alone-claim).

## Generator fix shipped with this post

`build-social-frames.mjs` rendered `<h1>undefined</h1>` on any frame with `big` but no
`head` — the h1 was the only unguarded field. Caught on the rendered frame (the price
frame shipped a literal white "undefined"), fixed for all future sets.

## Measure

Views + avg watch + completion in TikTok Studio → Berichten after ~1 week. Bar: the
organic 836–1,553 band (like-for-like season), NOT the 11K January peak. As a client-
facing post, compare female-viewer share against post A's 47% benchmark.
