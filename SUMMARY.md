# Mobile booking path: studio rental (2026-09-30)

Goal: more paid studio bookings from the visitors the site already gets. I walked the path on a phone at 375 and 390px: home → studio rental → prices → availability → book. Nothing was deployed and nothing was merged.

## The 3 biggest drop-off points and the fixes

### 1. On the studio rental page, the Book buttons and any photo of the room were below the first screen
Before (see `review/BEFORE-nl_studio-huren-375-fold.png`), the first screen of `/nl/studio-huren` and `/en/studio-rental` held:
- the heading,
- an outline "Probeer de studio gratis" button,
- a large weekend-info text box.

The €12/€17 rows with **Boek** started below the fold. The first photo of the room was about five screens down.

**Fix:** after the heading come a row of 3 real studio photos from the repo (tap to enlarge) and then the rate table straight away. Both Book rows now fit on the first screen at 375 and 390px (`review/nl_studio-huren-375-fold.png`).
- The free-trial entry is still on the first screens, now as a text link directly under the rows, so the Book rows are the only buttons in view.
- The old "slideshow + rating" section further down was removed. Its photos moved to the top strip and its rating/address moved into the facts block described in fix 2.

### 2. No answer to "is it free when I want it?" or "what happens after I tap Book?"
**Fix:** a new block, `StudioBookingFacts`, sits right under the rates. Every line is a fact already in the repo.
- **Before paying:** you see the free times straight away, before you pay anything. This is how the Acuity booking page works.
- **Payment:** credit card, Apple Pay, Google Pay or invoice. Cancelling is always free.
- **Door code:** sent via WhatsApp at 00:00 the night before the session.
- **Quiet times:** quietest on Sunday and on Saturday afternoon and evening (the same wording the page already used), plus the existing live "still free this weekend" line.
- **Trust row:** 5.0 on Google · 19 reviews (from `siteConfig.rating`, linked to Google Maps), Egelantiersgracht 424, Jordaan (linked to maps), and Daily 06:00–22:00.

A fact fix went in at the same time: the NL studio page said "Deurcode per WhatsApp de avond van tevoren", which contradicts the policy. It now says "om 00:00 in de nacht voor je sessie".

### 3. The prices page had studio prices you could not book
On `/nl/prijzen` and `/en/pricing` the €12/€17 rows were plain table cells. The only way on was an outline "Huur de studio" button to another page, where the visitor had to find the same rows again.

**Fix:** the rows now use the existing `StudioRateTable`: the whole row is a Book link, using the **same** `acuityLinks.halfStudio60` / `fullStudio60` as the studio page. The facts block sits under them. The outline button at the end became a text link.

### Also
The dark bottom CTA on both studio rental pages had two stacked buttons. It is now one button plus a quiet "WhatsApp us" text link.

## Files touched
- `src/components/marketing/studio-booking-facts.tsx`: new
- `src/components/marketing/photo-gallery-lightbox.tsx`: optional `variant="strip"` (3-up compact row); the default grid is unchanged
- `src/app/nl/studio-huren/page.tsx`, `src/app/en/studio-rental/page.tsx`
- `src/app/nl/prijzen/page.tsx`, `src/app/en/pricing/page.tsx`
- `review/`: screenshots
- `SUMMARY.md`

## Not changed
Prices, Acuity links and IDs, payment settings, the door-code system, metadata/canonicals, sitemap, robots, analytics snippets and JSON-LD are all unchanged. No new pages were added.

## Build and page count
- Build command: `CI=1 npm run build`. `CI=1` stops the prebuild from rewriting `sitemap-lastmod.json`.
- **Exit code: 0**, before and after. "Compiled successfully", 0 type errors.
- **.html pages: 246 before, 246 after**, the identical set (checked with a file-list diff).
- `npm ci` failed because `package-lock.json` is out of sync with `package.json` (missing `@swc/helpers@0.5.23`). I used `npm install` and restored the lockfile, so the lockfile is not in this diff.
- The prebuild rewrites `src/lib/image-color-manifest.ts` in this container (it emptied most of it). I reverted that file after each build, so it is not in this diff either.

## Screenshots (`review/`)
- Every changed page at 375 and 390px: first screen (`*-fold.png`) and full page (`*-full.png`).
- Covers `/nl/studio-huren`, `/en/studio-rental`, `/nl/prijzen`, `/en/pricing`.
- `BEFORE-*` shows the old first screen of `/nl/studio-huren`.
- No horizontal overflow on any of them.
- How they were taken: the built `out/` was served locally with the pre-installed Chromium, and every external request (Acuity, analytics) was blocked. No booking page, confirmation page or form was opened.

## Skipped, and why
- **Home page:** the hero already shows a real photo, the rating and a "Huur de studio" door. I left it as the operator set it.
- **`/nl/boek-studio` / `/en/book-studio`:** each package card has two stacked buttons (Koop + Betaal per factuur), and the bottom CTA has two buttons. I left these alone because the invoice buttons are a payment path. A human should decide whether to turn them into text links.
- **The two quotes on `/nl/boek-studio`** ("— Personal trainer", "— Fysiotherapeut") have no name and no source. I could not verify they are real, so I did not touch them. **Please confirm they come from real people, or remove them.**
- **Live weekend line:** it comes from a Cloudflare Function, so it does not show on a local static server and is not in the screenshots.

## Check before this goes live
1. Look at the first screen of `/nl/studio-huren` on a real phone, with the cookie banner showing. The banner may cover the second Book row on a first visit.
2. Confirm that "you see the free times before you pay" matches the current Acuity flow for both studio types.
3. Confirm the quiet-times line (Sunday, Saturday afternoon and evening) still holds.
4. Confirm the invoice mention in the facts block is fine for hourly bookings. The old hourly line also said "of factuur".
5. Analytics: the trial entry on the studio pages is now a link with Plausible class `studio_huren_trial_link`, not a ButtonLink. Update the goals if the old button was tracked by another name.

## Review pass (same day, second session)
A separate review of this branch is in `REVIEW.md`.
- Build: exit 0. Pages: 246 on `main`, 246 on this branch, same file list. No new pages.
- Fixes: stale code comments on both studio pages, and the rate-table indentation on both price pages. No change a visitor can see.
- Screenshots in `review/` were re-taken from the final build at 375px and 390px, with the pre-installed Chromium and all external requests blocked.
- Verdict: ready to go live after the on-phone checks listed above and in `REVIEW.md`.
