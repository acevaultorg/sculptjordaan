# Button colour per audience + A/B test (2026-09-30)

Branch `cloud/sculptclub-cta-2026-09-30`. **It is based on `cloud/sculptclub-book-2026-09-30`** (that branch exists), so the two changes do not conflict. Merge the booking branch first, or merge this one, which already contains it. Nothing was deployed and nothing was merged. `main` was not touched.

## What changed, and why
The owner wants each audience to have its own button colour:

| Audience | Pages / sections | Variant A button | Text on it | Contrast |
|---|---|---|---|---|
| **rental**: trainers who rent the studio | studio rental (+ calculator, free trial), book-studio, for-trainers (+ 4 articles), become-trainer, home "for trainers" band | evergreen `#1F4D3A` (dark mode `#46997A`) | white (dark mode near-black) | 9.63:1 (dark 5.77:1) |
| **member**: open gym + finding a trainer | open gym (+ summer deal, student), book-gym, find / book / match a trainer, free intake + the 13 trainer intake pages, free trial, home trainer grid + hero button | coral-orange `#EE5A3C` (dark mode `#FF7A57`) | near-black `#0E0C0A` | 5.73:1 (dark 7.60:1) |
| everything else (blog, prices, contact, …) | unchanged | today's orange | | |

Every pair passes WCAG AA for normal text (4.5:1). The hover shades pass too: 11.6, 4.90, 7.11 and 8.75. Each button also stands out from the page by at least 3:1, except coral on the light bone background, which is 3.13:1 (today's orange is 3.31:1).

**How it's built (design tokens in the existing CSS):**
- `src/app/globals.css`: new tokens `--cta-rental-*`, `--cta-member-*` and `--cta-bg / --cta-bg-hover / --cta-fg`, for light and dark mode.
- A block at the end of the file re-points the existing `--brand` / `--primary` tokens, but only on filled buttons (`a`/`button` with the `bg-brand` or `bg-primary` class, or a pill with that class inside a link, like the studio rate rows).
- Text links, tints and non-clickable orange are untouched, so the "orange = clickable" rule still holds.
- **Audience scope:**
  - `data-audience="rental|member"` goes on the page (new `audience` prop on `PageLayout` and `Section`) or on a section.
  - The existing analytics attribute `data-intent` also works as a scope: `studio_rental` = rental; `open_gym` and `trainer` = member. That colours the home pricing explorer with no component changes.
  - The nearest scope wins.
  - The header tiles and the sticky mobile bar follow their own destination. On the studio page, the active "Huur Studio" tile is green like the page's buttons.
- **A/B switch:**
  - A small blocking script in `<head>` (`src/app/layout.tsx`) runs before first paint, so buttons never flash.
  - It picks A or B at 50/50 per visitor and stores the letter in the first-party cookie `sc_cta_ab` (90 days, `SameSite=Lax`, `Secure` on https).
  - It sets `data-cta-variant` on `<html>`.
  - **Variant B = today's colours**, with the CSS resolving to the same values as before.
  - `?cta=a` / `?cta=b` forces a variant, for checking.
- **GA4 event** (`src/components/layout/cta-experiment.tsx`): GA4 is already on the site (`gtag`, G-QYW5H4XTXW).
  - Every click on a filled button sends `cta_click` with `cta_variant` (a/b), `cta_audience` (rental/member/none) and `cta_text` (the button's own label, max 60 characters).
  - No personal data, no ids.
  - Tab toggles are left out, because they already send `tab_switch`.
  - The existing analytics snippet in `analytics.tsx` is unchanged.
- **One primary button per screen:** I measured the first screen of every changed page at 375 and 390px. No screen shows two different button colours. Home shows one filled button. See "Check" item 3 for the studio page.

## Files touched
- `src/app/globals.css`: tokens and scope rules
- `src/app/layout.tsx`: head script and `<CtaExperiment />`
- `src/components/layout/cta-experiment.tsx`: new, the GA4 click event
- `src/components/layout/page-layout.tsx`, `src/components/sections/section.tsx`: optional `audience` prop
- `src/components/layout/header.tsx`, `src/components/layout/mobile-bottom-cta-bar.tsx`: per-tile / per-bar audience
- `src/components/marketing/trainer-preview-grid.tsx`, `trainer-signal-band.tsx`, `first-time-menu.tsx`, `trainer-intake.tsx`: section audience
- 38 page files under `src/app/nl|en/...`: one attribute each (`<PageLayout audience="…">`, or `data-audience` on the root `div` of the two free-intake pages)
- `qa/`, `review/`: screenshots
- `SUMMARY.md`: this section

No copy, prices, Acuity links or IDs, payment settings, metadata, canonicals, robots, sitemap or analytics snippets changed.

## Build and page count
- Command: `CI=1 npm run build`. `CI=1` stops the prebuild from rewriting `sitemap-lastmod.json`.
- **Exit code 0**, before and after. "Compiled successfully", no type errors.
- **.html pages: 246 before, 246 after, the identical set** (file-list diff). No new pages.
- As on the booking branch: `npm install` changed `package-lock.json`, and the prebuild rewrote `src/lib/image-color-manifest.ts`. Both were restored, so neither is in this diff.

## Screenshots
Playwright ran with the pre-installed Chromium against the built `out/`, served locally. Every request to another host was blocked. No booking page, confirmation page or form was opened or submitted. The cookie banner was dismissed as "essential only" for clean shots.
- `qa/`: home (`/`) and the studio rental page (`/nl/studio-huren`) at 390px, **variant A and variant B**. For each: first screen and full page in light mode, plus the first screen in dark mode (12 files).
- `review/cta-A-*-375-fold.png` and `*-390-fold.png`: the first screen of **every changed page** at 375 and 390px, in variant A (84 files, 42 routes). Variant B looks like the live site. The 13 trainer intake pages share one template, so only Alex (NL + EN) is shot.
- Automated checks on all 92 captures:
  - no horizontal overflow,
  - every filled button at least 44px tall,
  - every filled button's text at least 4.5:1,
  - no mixed button colours on a first screen.

  One problem was found and fixed: a trainer-finder WhatsApp button hardcodes white text, which was 3.41:1 on coral. In variant A, inside a scope, it now uses the audience's text colour.
- Event check, with a stubbed `gtag` and link navigation blocked:
  - studio row (A and B) → `rental`
  - home hero button → `member`
  - open gym button → `member`
  - tab click → no event
- Split check: 40 fresh visitors gave 17 A / 23 B. The cookie and the `<html>` attribute always matched.

## Skipped, and why
- **Pages with both audiences keep today's orange**: prices, over-ons, blog, contact, reviews. Only home is split per section. Tell me if prices should be split per table too.
- **The Google Ads landing pages** (`gratis-intake-ads`) are left unchanged, so the A/B test does not mix with the ad copy test.
- The rules in the prompt about Amazon, affiliate links and "View on Amazon" don't apply to this site (there is no Amazon integration), so nothing was done there.

## Check before this goes live
1. **Cookie consent:** `sc_cta_ab` is set for every visitor, before any consent. It holds only "a" or "b" and is not used for tracking across sites. Please confirm that is acceptable under your cookie policy, or list it on `/nl/cookiebeleid` as a functional cookie. If consent is required, the head script can be gated on `sc_consent`.
2. **GA4:**
   - Register `cta_variant`, `cta_audience` and `cta_text` as event-scoped custom dimensions (Admin → Custom definitions). Otherwise they will not show in reports.
   - With consent mode "denied", GA4 sends cookieless pings, so the counts are modelled.
3. **One primary per screen, studio page:** the first screen shows the two Book rows of the rate table and the active "Per uur" tab, all filled in the same colour (true in B too, from the booking branch's layout). If you want strictly one filled button there, the second row's pill or the tab could become an outline. That is a design call, so I left it.
4. **Brand check:** view both colours on a real phone in light and dark mode. The coral is close to today's orange, so the difference is mostly on the rental side.
5. **Deciding the test:** in GA4, compare `cta_click` per variant and audience, then bookings (`begin_checkout` / `Book_appointment_1`) split by the same `cta_variant`. Those events do not carry the variant, so use a GA4 segment on users who sent `cta_click` with each variant. Adding `cta_variant` as a user property would make this easier; ask if you want it.
6. **To end the test:** delete the head script, or pin every visitor to one variant by changing `Math.random()<0.5` to `true` (A) or `false` (B).

---

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
