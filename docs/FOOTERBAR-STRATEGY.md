# Mobile Sticky Footer-Bar Strategy

**Source of truth:** `src/components/layout/mobile-bottom-cta-bar.tsx` (`pickCTA()` function).

This doc maps every public route → audience intent → sticky bar CTA → label + destination. Every new page MUST be checked against this matrix before ship. The bar is mobile-only, reveals after scrolling past 60% of viewport height, and renders 3 slots: phone-icon left (1-tap call), primary CTA middle (page-specific), WhatsApp-circle right (1-tap chat).

## The principle

The visitor scrolls past the hero, the page-specific content ends or repeats, and they're deciding whether to act. The sticky bar is the always-visible conversion exit. **It must match the page audience's likely next action — not a generic catch-all.**

Wrong-fit example (pre-2026-05-27): on `/nl/word-trainer` the bar said "Bekijk de studio" → sent the trainer away to `/nl/studio-huren`. The trainer-funnel context evaporated. The bar should have routed to the on-page application form anchor.

## The audience model

| Audience | Where they land | What they want next |
|---|---|---|
| Consumer wanting PT | `/` · blog · social · `/nl/eerste-bezoek` · `/nl/personal-trainer-*` · `/nl/gratis-intake` | Book a free intake or chat |
| Consumer wanting Open Gym | `/nl/open-gym` | Book a free Open Gym session |
| Consumer wanting Studio Rental (one-off) | `/nl/studio-huren` (rare on this path; usually trainers) | See test session / pricing |
| Trainer-prospect (rents studio) | `/nl/voor-trainers` (hub) | Sign up to use the studio + own page |
| Trainer-prospect (becomes SculptClub trainer) | `/nl/word-trainer` (deep) | Send their details |
| Already-customer returning | `/nl/boeking-bevestigd` · `/en/booking-confirmed` | Nothing (just confirmed) |

## The route matrix (NL — EN parity mirrors with prefix `/en`)

| Pathname pattern | Audience | Primary CTA label | Destination | Why |
|---|---|---|---|---|
| `/nl/boeking-bevestigd` | Just-converted customer | — (bar hidden) | — | Visitor already converted; no further action |
| `/nl/studio-huren` | Trainer or org wanting space | `Boek gratis test sessie` | `#schedule` (on-page) | Same-page Acuity embed; deep-scroll without losing context |
| `/nl/open-gym` | Consumer wanting solo gym time | `Boek gratis Open Gym` | `#schedule` (on-page) | Same-page Acuity embed |
| `/nl/gratis-intake` (Ads landing) | PT-curious paid-traffic | `WhatsApp direct` | `wa.me/...` pre-filled | Paid CTR optimization: instant reply path |
| `/nl/vind-jouw-personal-trainer` | PT-curious organic | `WhatsApp direct — wij matchen` | `wa.me/...` pre-filled | Operator-mediated match avoids choice paralysis among 4 trainer profiles |
| `/nl/eerste-bezoek` | First-time-visit info | `Boek je gratis intake` | `/nl/vind-jouw-personal-trainer` | Visitor read the explainer; now wants the trainer-finder |
| `/nl/word-trainer` | Trainer becoming SculptClub trainer | `Meld je aan` | `#aanmelden` (on-page form) | Structured first-touch on same page (form opens WhatsApp with details) |
| `/nl/voor-trainers` (hub) | Trainer evaluating studio | `Word SculptClub-trainer` | `/nl/word-trainer#aanmelden` | Hub → deep page form (1 indirection acceptable; hub has 4 sub-paths) |
| `/nl/personal-trainer-jordaan` (Ads landing) | Local-SEO paid-traffic | `Boek gratis intake` | `/nl/gratis-intake` | Convert paid click immediately on the canonical conversion landing |
| `/nl/sportschool-jordaan` (Ads landing) | Local-SEO paid-traffic | `Boek gratis intake` | `/nl/gratis-intake` | Same as above |
| `/` · `/nl` · blog · social · contact · prijzen · other consumer | Mixed consumer | `Boek gratis intake` | `/nl/gratis-intake` | Default conversion landing with dual-primary above-fold CTAs |

EN parity: every NL pathname has an EN twin (`/en/study-rental` ↔ `/nl/studio-huren`, etc.) with the same audience → same CTA pattern → localized label.

## Bar hidden conditions

The bar renders `null` (and the spacer disappears) when ANY of these hold:

1. Pathname matches `/(boeking-bevestigd|booking-confirmed)` — visitor just converted.
2. Acuity embed dialog is open (the booking dialog covers it; would block tap targets).
3. Viewport ≥ `md` breakpoint (`md:hidden` — desktop has always-visible header CTAs).
4. `scrollY < 0.6 × innerHeight` — bar is above-the-fold; defers to hero CTAs.

## Anti-patterns

- ❌ Bar CTA navigates AWAY when the same action exists on-page (form anchor / Acuity embed). Use `#anchor` not `/another-page`.
- ❌ Bar CTA uses different action than hero primary (creates conflict — "which one is the real action?"). Bar should match hero primary intent.
- ❌ Bar CTA hidden behind hover / 2-tap interaction. Mobile = 1 tap or bust.
- ❌ Bar shows on a page whose audience doesn't want any of its options. Better to hide than show wrong-fit.
- ❌ Trailing " →" in label (the JSX already renders `<ArrowRight />` icon — double-arrow bug).
- ❌ Generic catch-all "Contact us" on every page (gives no signal about what action takes).

## Adding a new page

When you ship a new page:

1. Identify the audience (which row in the audience model above)
2. Identify their likely next action (book / chat / fill form / go to deeper page)
3. Add a `pickCTA()` branch in `mobile-bottom-cta-bar.tsx` matching the pathname pattern
4. Use `#anchor` href when the action is on the same page (cheapest UX path)
5. Use external `wa.me/...?text=...` when WhatsApp is the immediate conversion
6. Test at iPhone 12 Pro (390×844) via Chrome MCP — scroll past 60% + verify the bar reveals + tap-targets are ≥48px + Plausible event-name fires

## Plausible event naming

Every bar CTA has a `ctaId` like `mobile-cta-trainer-apply`. The JSX class `plausible-event-name=mobile_cta_trainer_apply` fires the event on tap. Conventions:

- `mobile-cta-<page-context>-<action>` (e.g., `mobile-cta-studio-test`, `mobile-cta-trainer-apply`)
- Phone-icon slot: `mobile-cta-tel-integrated` (fixed)
- WhatsApp-circle slot: `mobile-cta-wa-integrated` (fixed)

Plausible-side: filter goals by `mobile_cta_*` properties to see which bar CTA converts on which page.

## Footer-bar audit cadence

- **Per-ship:** every PR that touches `mobile-bottom-cta-bar.tsx` or adds a new pathname must re-read this doc.
- **Monthly:** the operator (or brain) re-checks the matrix vs `pickCTA()` for drift.
- **On Plausible signal:** if `mobile_cta_*` events for a route drop ≥20% WoW with no other change, audit whether the CTA still fits the audience.

---

**Last updated:** 2026-05-27 — operator directive "maak een goede footerbar strategie. elke pagina moet voor de user de juiste ervaring hebben."
