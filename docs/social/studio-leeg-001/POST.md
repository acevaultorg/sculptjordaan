# studio-leeg-001 — "Achter deze deur is niemand"

**Slot:** 3 · `empty-room` (both audiences) · built 2026-08-28
**Hand-off page:** https://sculptclub.nl/social/studio-leeg-001/
**Format:** 5-slide photo carousel · TikTok/Story 1080×1920 + IG feed 1080×1350

## Why this slot, not slot 2

The rotation's next slot was 2 (`meet-name`). Skipped: a `meet-name` post already
exists and was built two days ago — `trainer-gezina-001` plus an English variant —
and it was never logged, so the rotation pointer was stale rather than the slot
being due. Building a second one would have duplicated it.

Slot 3 is also the better pick on the merits right now: it is trainer-facing-eligible,
and studio rental is ~93% of revenue at ~50% utilisation, so trainer acquisition is
the money lever. Going 2 → 3 also keeps the 2-of-3 trainer-facing rule intact
(arithmetic → empty-room = 2/2 trainer-eligible).

## Why this frame

It is a **variant of this account's single best post ever**: "Private gym in de
Jordaan. Huur vanaf €12/uur" — 11,000 views, 96.1% Netherlands, and its search
traffic came from literal commercial intent (`personal trainer amsterdam`,
`prive gym amsterdam`). KNOWLEDGE.md's conclusion was to iterate on that frame,
not replace it. This is the iteration: same offer, new hook — the room is empty,
and that is the product rather than a problem.

**The honest thing nobody publishes:** privacy has a price, and it is not €12.
Per CLAUDE.md the *half* studio (€12/uur) shares the room — the other half can be
another trainer or Open Gym at the same time. Only the *full* studio (€17/uur) is
genuinely nobody-else. Frame 3 attaches the privacy claim to €17 and states the
€12 caveat in the same breath. That distinction is real, useful, and currently
absent from every marketing surface we have.

## Slides

| # | photo | says |
|---|---|---|
| 1 | `facade-sculptclub.jpg` | Egelantiersgracht 424 — "Achter deze deur is niemand." |
| 2 | `studio-overview.jpeg` | "Leeg is precies het punt." + what's in the room |
| 3 | `back-room-full.jpg` | **€17 per uur** — "Zo veel kost een lege zaal." + the €12 caveat |
| 4 | `canal-view-doors.jpg` | "De garagedeur gaat open." (the 902-view subject) |
| 5 | `entrance.jpeg` | "Eerste sessie gratis." |

No people in any frame — the subject *is* the empty room. That is a deliberate
exception to the "every winner had humans in it" finding: here emptiness is the
message, and the five studio photos carry it better than a posed shot would.

## Facts, and where each was checked

- €12/uur halve · €17/uur hele — CLAUDE.md § Pricing (Half €12/60min, Full €17/60min)
- Half studio shares the room, full studio is private — CLAUDE.md § Studio rental capacity
- Eerste sessie gratis, 60 minuten — `src/app/nl/studio-huren/gratis-test/page.tsx`
- Egelantiersgracht 424 · dagelijks 06:00–22:00 — CLAUDE.md § Business Facts
- Equipment named — only terms the site already uses (`rack, kabelmachine, dumbbells,
  kettlebells, sled, Echo Bike`)

**No dumbbell weight is quoted anywhere.** `src/` currently carries four
contradictory claims — *tot 50 kg* (×5), *tot 32 kg* (×2), *2-40 kg* (×2),
*4-40 kg* (×1). Any number would have been a coin flip. Worth fixing separately;
it is live on the rental page today.

Not used: "0% commissie" (the frame is rent + freedom), "proefles" in visible copy,
any competitor name, any market figure.

## Caption

See the hand-off page — one tap to copy. Written by Claude; **needs a native pass
before posting.**

## What to measure

Judge against our own organic baseline, not competitors' (their engagement may be
paid). For a rental-frame post the honest comparison is post A's 11,000 views —
but only like-for-like on season, and late August is near the fitness trough while
that post is dated 1 January. So the realistic bar is the 836–1,553 band, and the
number that matters more is **avg watch time + completion**, where trainer-framed
posts beat consumer-framed ones 2.3× despite far fewer views.
