# Review: `cloud/sculptclub-local-2026-09-30`

Reviewed 2026-09-30. The branch I was asked to review existed on the remote, so no branch had to be picked instead. It started from `main` at `28af32b` and is still up to date with `main`.

## What I checked

**Build**
- `main`: `CI=1 npm run build` exit 0, 246 `.html` pages.
- This branch, after my fixes: exit 0, 246 `.html` pages. The two page lists are identical; no pages added or removed.
- No type errors in either log. `npm run check:sitemap` passes (all 206 sitemap URLs have a built page). `npm run check:copy` totals are identical to `main`.
- Prebuild guards pass: trainer consistency (includes `llms.txt`), logo, deal honesty, hreflang pairs, orphan routes.

**Facts in the diff, checked against CLAUDE.md and the repo config**
- Door code "om 00:00 in de nacht voor je sessie": matches policy (the old "de avond van tevoren" was wrong). OK.
- Full studio 1 to 8 people, €17 / 60 min and €24 / 90 min; half studio max 2 and the other half may be in use: matches. OK.
- Open Gym single session €9 comes from `openGymSinglePrice` in `acuity.ts`, not typed in. OK.
- Dumbbells 4 to 40 kg, max 4 people in Open Gym, small group 2 to 4, address and hours from `siteConfig`: OK.
- `llms.txt`: equipment (platform, sled, kettlebells, showers, changing area) matches `/nl/studio`. Student rate €39, €79 list with €49 price-locked for new members, packs and their 1-year validity: all match. Trainer hourly rates removed, in line with the "never quote an hourly PT rate" rule. OK.
- No hourly PT rate, no "proefles" in visible copy, no "0% commissie", no old phone number, no email for the door code, no iDEAL listed on its own.

**Things that must stay the same**
- No change to analytics, consent gating, robots, sitemap logic, canonicals, hreflang or Acuity links. There are no affiliate or `/go/` links in this repo.
- JSON-LD: the new shared `BUSINESS_REF` only adds `@id` and the phone number to references that already existed. No price, rating or hours value changed.

**Copy and layout**
- The new copy is plain and calm, with no hype and no internal labels or card ids visible to visitors. Code comments mention CLAUDE.md, but those are not rendered.
- Icons are lucide inline SVGs in `currentColor`; no emoji are used as icons.
- At 375 and 390 px: no horizontal scroll on any of the 13 changed pages. The smallest link card is 111 px tall, above the 44 px tap-target minimum.

## What I fixed (small commits on this branch)

1. **`llms.txt` transit line removed.** It said metro 52, station Vijzelgracht, is a 10-minute walk. Vijzelgracht is about 2 km from Egelantiersgracht. The line was copied from `/nl/locatie-uren`, where it is still shown (not changed here, see below).
2. **Link block placed before the closing call to action** on `/nl/studio`, `/en/studio`, `/nl/locatie-uren` and `/en/location-hours`. It had been added after the final booking/WhatsApp section, so those pages no longer ended on their call to action (project pattern: CTA at the bottom of every page).
3. **"Bottom CTA" comment put back above the CTA** on both studio rental pages. The new block had been inserted between the comment and the section it describes.
4. **The arrow no longer wraps onto a line of its own.** At 390 px "Rent a training space by the hour" put the arrow alone on the second line. The last word and the arrow are now kept together.
5. **The link cards use `next/link`**, like the other marketing components, instead of plain `<a>` tags.

## Screenshots

`review/`: 46 PNGs, retaken after the fixes. There is a full-page shot of each of the 13 changed pages at 375 and 390 px, plus close-ups of the new link block (`*-links.png`).

They were taken with the pre-installed Chromium against the built `out/`, with external requests blocked and cookies set to essential only.
- The embedded map shows as an empty grey box because external requests were blocked.
- Some section headings look faded because the page's fade-in animation was caught mid-way.

## Not fixed, needs a person

- **`/nl/locatie-uren` and `/en/location-hours` transit text** (existing text on `main`, not from this branch): "Tram 13, 17, halte Elandsgracht (3 min lopen). Metro 52, station Vijzelgracht (10 min lopen)." The metro part cannot be right. Please confirm the nearest tram stop and fix the text on both pages.
- **€24 per 90 minutes** for the full studio is in the new FAQ answer. CLAUDE.md lists it and `acuityLinks.fullStudio90` exists, but the rate table only shows 60 minutes. Please confirm a renter can book 90 minutes.
- **Invoice wording in `llms.txt`**: "Studio rental can also be paid by invoice, on request" matches the pages, but the old file said invoices were only for packs. Please confirm which is true.
- `package-lock.json` on `main` is out of sync (`npm ci` fails). I built with `npm install` and did not commit the lockfile; fix it in its own commit.
- Check the link block in dark mode on a real phone. All screenshots are light mode.

## Ready to go live?

**Yes, once the points above are confirmed.** The branch builds cleanly with the same 246 pages as `main`. It fixes two factual errors that are on the live site today: the door-code timing and "fully private" for the half studio. It adds no wrong prices and leaves tracking, SEO plumbing and booking links untouched.
- The 90-minute price and the invoice line are low-risk wording checks.
- The wrong metro directions are already live and not made worse by this branch.

Follow the deploy steps in CLAUDE.md and ping IndexNow only with the changed URLs. I did not deploy or merge.
