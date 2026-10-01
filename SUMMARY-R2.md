# Round 2 (2026-10-01)

Starting point: the round-1 branch `cloud/sculptclub-book-2026-09-30`. It is the studio-rental booking path work plus its review (see `SUMMARY.md` and `REVIEW.md`). This round continues from there. Round 1 had no open build or layout problem: it built with exit 0, had 246 pages and no overflow at 375px. So nothing had to be repaired first.

Branch: `claude/r2-sculptjordaan-2026-10-01-r0lnti`. This is the branch the session was set up to push to. The task named `cloud/r2-sculptjordaan-2026-10-01`, but this session can only push to the branch above. Nothing was merged or deployed, and `main` was not touched.

## What changed and why

### 1. The trainer count was wrong on 6 pages and in the match quiz (said 12; the roster has 13)
- The trainer finder already said "13 trainers", taken from `src/config/trainers.ts`.
- These pages hardcoded "12 trainers":
  - the free-intro page (`/nl/gratis-intake`, `/en/free-intro`)
  - the match quiz (`/nl/match-trainer`, `/en/match-trainer`), in the page text, the meta/OG description and the quiz's "see all" link
  - the first-visit page (`/nl/eerste-bezoek`, `/en/first-visit`), in the card note and the HowTo JSON-LD step
- **Fix:** all of them now read `trainers.length`, so the count stays right when the roster changes.
- Checked in the built HTML: all of these pages now say 13.

### 2. The studio-rental closing section promised something its button did not do
- This was flagged in the round-1 review.
- The line said "Try the studio for free with a trial session", but the only button goes to the rates.
- **Fix:** the line now matches the button:
  - NL: "Kies een tijd en boek per uur. Geen abonnement, en annuleren is altijd gratis."
  - EN: "Pick a time and book by the hour. No membership, and cancelling is always free."
- Both facts come from CLAUDE.md: no membership, and cancelling is always free.
- The free trial is still linked directly under the rates and in the "first time?" block.

### 3. The cookie banner covered the second Book row on a first phone visit
- This was flagged in round 1 as "check on a real phone".
- At 375px the banner's text ran to 3 lines (about 138px), and it covered the "Hele studio · Boek" row on `/nl/studio-huren`.
- **Fix:** below the `sm` breakpoint, the text is 13px with a smaller icon and slightly tighter padding. The text now fits in 2 lines, about 28px shorter.
- Both Book rows are now fully visible on the first screen at 375 and 390px, with the banner showing. Compare `review/r2/BEFORE-banner-nl_studio-huren-375-fold.png` with `review/r2/banner-nl_studio-huren-375-fold.png`.
- Not changed: the wording, the buttons (still 44px, reject as easy as accept), the consent logic and desktop.
- The banner is on every page, so this helps every first visit on a phone.

## Files touched
- `src/app/nl/gratis-intake/page.tsx`, `src/app/en/free-intro/page.tsx`
- `src/app/nl/match-trainer/page.tsx`, `src/app/en/match-trainer/page.tsx`
- `src/app/nl/eerste-bezoek/page.tsx`, `src/app/en/first-visit/page.tsx`
- `src/components/marketing/trainer-match-quiz.tsx`
- `src/app/nl/studio-huren/page.tsx`, `src/app/en/studio-rental/page.tsx`
- `src/components/layout/cookie-consent.tsx`
- `review/r2/` (screenshots), `SUMMARY-R2.md`

## Not touched
- Prices, Acuity links, analytics snippets, robots, sitemap logic, canonicals and hreflang.
- The site has no Amazon or affiliate links, so there were none to keep.

## Build and page count
- Command: `CI=1 npm run build`. `CI=1` keeps `sitemap-lastmod.json` as committed.
- **Exit code: 0**, both before and after.
- **.html pages: 246 before, 246 after**, the identical file list (checked with a diff). No new pages.
- `npx tsc --noEmit`: clean.
- ESLint on the changed files: 2 errors (unescaped `'`) in `src/app/en/free-intro/page.tsx`. They are the same on the base branch, and this round did not cause them.
- As in round 1, `npm install` rewrites `package-lock.json` and the prebuild rewrites `src/lib/image-color-manifest.ts` in this container. Both were reverted, so neither is in the diff.

## Screenshots (`review/r2/`)
- How they were taken: with the pre-installed Chromium, against the built `out/` served locally, with every external request blocked.
- Every changed page at 375 and 390px: first screen (`*-fold.png`) and full page (`*-full.jpg`, scaled to 1x to keep the repo small). These are taken with the cookie banner dismissed.
- `banner-*` shots show the first screen with the banner, for the home page (NL/EN) and both studio pages.
- No horizontal overflow on any page (`scrollWidth` equals the viewport).
- All shots are light mode only. As in round 1, headless dark mode does not paint correctly locally.

## Skipped, and why
- **The two Ads landing pages** (`/nl/gratis-intake-ads`, `/en/free-intro-ads`) still say "12 trainers". CLAUDE.md keeps some of their copy in step with the live ad text, so I left them for a human. Changing them to `trainers.length` is a one-line edit each.
- **Blog posts and code comments** that mention 12 trainers were not changed. They are dated content or internal notes.
- **Round-1 items that need a human:** the unnamed quotes on `/nl/boek-studio` and the stacked invoice buttons there. Both are still open.

## Check before this goes live
1. Confirm the roster really is 13 trainers to show publicly. CLAUDE.md notes that Bryan and Tom are listed but not currently renting. If either should come off the site, remove them in `src/config/trainers.ts` and every count follows.
2. Decide whether the two Ads landing pages should also say 13 (see Skipped).
3. Look at the cookie banner on a real phone in both light and dark mode. Check that 13px text reads comfortably.
4. Round-1 checks 2–5 in `SUMMARY.md` still stand: the Acuity "free times before you pay" flow, the quiet-times line, invoice for hourly bookings, and the Plausible goal name for the trial link.
