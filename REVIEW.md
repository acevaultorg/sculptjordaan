# Review: `cloud/sculptclub-book-2026-09-30` (2026-09-30)

I reviewed the three feature commits on this branch (`2eeada3`, `d660ae3`, `25effd0`) plus its SUMMARY and screenshots (`ec66307`). The review was done the way a strict human reviewer would do it. Nothing was merged or deployed.

## What I checked

| Check | Result |
|---|---|
| Build `CI=1 npm run build` on `main` (baseline) | exit 0, **246** `.html` pages |
| Build on this branch, before my fixes | exit 0, **246** pages, the identical file list |
| Build on this branch, after my fixes | exit 0, **246** pages, the identical file list. No new pages. |
| TypeScript / ESLint on the 6 changed source files | clean |
| Build warnings | 1 Turbopack NFT warning about `next.config.ts`. It is the same warning on `main`, so this branch did not add it. |
| `check-copy` post-build scores | totals are identical on `main` and on the branch. None of the 4 changed pages is in the flagged list. |
| Horizontal overflow at 375 and 390px | none on any of the 4 pages (`scrollWidth == viewport`) |
| Tap targets added by this branch | Book rows, trial link (`py-3`), trust-row links and bottom WhatsApp link (`min-h-11`), and photo thumbnails (about 110×82px) are all 44px or larger. The only small links found are the older "free 15-min tour" WhatsApp links, which this branch did not touch. |
| Prices | €12 / €17 match CLAUDE.md and are the same strings the studio page already used. There is no config value for hourly studio rates, so this follows the site's existing pattern. Nothing was re-priced. |
| Booking links | the new Book rows on `/nl/prijzen` and `/en/pricing` resolve to the same Acuity types as the studio pages (`82553655`, `84032351`), checked in the built HTML. |
| Affiliate tags, `/go/` routes, analytics, robots, sitemap, canonicals, metadata, JSON-LD | none touched by the diff. The site has no affiliate links. |
| WhatsApp tracking | the bottom-CTA WhatsApp button became a plain `<a href=wa.me…>`. It is still caught by the global `wa.me` click listener in `analytics.tsx`. |
| Business facts | door code at 00:00 via WhatsApp ✔ (and the branch fixed an older "de avond van tevoren" line) · cancellation always free ✔ · no iDEAL listed ✔ · rating 5.0 / 19 comes from `siteConfig` ✔ · full studio "1 tot 8 personen" ✔ · "probeersessie/proefles" rule not broken ✔ |
| Visitor-facing wording | plain and calm, with no hype, internal labels or card ids. Internal notes live only in code comments. |
| Icons | lucide SVG plus one inline SVG star, all in `currentColor`. No emoji used as icons. |
| Light / dark | the new block uses theme tokens only (`bg-card`, `border-border`, `text-muted-foreground`, `bg-secondary`). |

## What I fixed (small commits on this branch)

1. **Stale code comments** on `/nl/studio-huren` and `/en/studio-rental`. The branch removed the trial button and the weekend box from the top of the page, but left their long explanatory comments in place. One of those comments still said the trial entry sits "ABOVE the fold", which is no longer true. That comment is now removed; the new trial link keeps its own note. The weekend-note history now says where the note renders (inside `StudioBookingFacts`), and the "booking table first" note mentions the photo strip. Comments only, no change a visitor can see.
2. **Indentation** of the `StudioRateTable` props on `/nl/prijzen` and `/en/pricing` (cosmetic).
3. **Screenshots refreshed** from the final build: `review/*-375-*.png` and `review/*-390-*.png`, first screen and full page, for all 4 changed pages. The `BEFORE-*` shots from the original session were kept.

I found nothing that shows broken HTML or broken layout, and no wrong prices or links.

## Not fixed, for a human to decide

- **Bottom CTA on the studio pages.** The line above the button says "Probeer de studio gratis uit met een proefsessie" / "Try the studio for free with a trial session", but the only button goes to the rates (`#book`). The mismatch existed before this branch too (the old button said "Naar boekingsformulier"). The trial link sits directly under the rates, so the visitor still reaches it in one scroll. Consider pointing the button at the trial page or rewording the line.
- **Dark mode in my screenshots.** In local headless Chromium the `dark` class is set, but the body still paints the light background. This happens on `main` as well, and the branch does not touch CSS. The screenshots are light mode only. Check dark mode once on a real phone.
- **Items 1–5 under "Check before this goes live" in SUMMARY.md** still stand. The most important ones: the cookie banner may cover the second Book row on a first visit, and whether Acuity really shows free times before payment for both studio types.

## Ready to go live?

**Yes, once a human has done the phone check.** The build is clean, the page count is unchanged (246 → 246), there is no overflow at 375 or 390px, prices and Acuity links are unchanged and correct, and all visitor-facing copy is factual and matches the business facts. The only open points are an older CTA wording mismatch and on-device checks that a local static server cannot cover: the cookie banner, the live weekend line and the Acuity flow. None of them blocks the change.
