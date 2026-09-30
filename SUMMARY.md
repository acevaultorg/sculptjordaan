# SUMMARY: /landing split page (branch `cloud/sculptclub-landing-2026-09-30`)

## What changed

New one-screen landing page for campaign traffic (Instagram bio, TikTok, QR codes):

- **`/landing`** (Dutch) and **`/en/landing`** (English). I checked first that `/landing` was unused: there was no route in `src/app`, and no rule in `public/_redirects` or `functions/_middleware.ts`. So `/start` was not needed and is untouched.
- Exactly 100svh, no scroll. Left/top: personal trainers who rent the studio (evergreen, male photo). Right/bottom: people who want a trainer, a group class or Open Gym (coral-orange, female photo). One headline, one fact line and one big button per half. The client half also has two small pills.
- `noindex, follow`, canonical to itself, NL/EN hreflang pair. It is **not** added to the sitemap, because it is noindex.
- GA4 events `landing_trainer_click` / `landing_client_click`, with params `link_target` and `locale` only.

Full design reasoning, the research behind it and the render-check table are in **[qa/landing/SUMMARY.md](qa/landing/SUMMARY.md)**.

## Files touched

| File | Change |
|---|---|
| `src/app/landing/page.tsx` | new, NL page, metadata + copy |
| `src/app/en/landing/page.tsx` | new, EN page |
| `src/components/marketing/split-landing.tsx` | new, the split layout (client component for the click events) |
| `src/lib/tracking.ts` | added `trackLandingClick()` |
| `src/config/acuity.ts` | added `studioRentalFromPrice = 12`, the existing half-studio 60-min rate, so the page reads the number instead of hardcoding it. No price, link or Acuity setting changed. |
| `src/config/navigation.ts` | `/landing` ↔ `/en/landing` pair (hreflang + language hint) |
| `src/components/layout/mobile-bottom-cta-bar.tsx` | sticky bar hidden on `/landing` only |
| `src/components/layout/whatsapp-button.tsx` | desktop WhatsApp bubble hidden on `/landing` only |
| `scripts/check-orphan-routes.mjs` | allow-list entry for `/landing` (campaign page, reached from outside the site) |
| `scripts/qa-landing.mjs` | new, local render check + screenshots |
| `qa/landing/*`, `review/*` | screenshots, `results.json`, design summary |

Not touched: prices, Acuity links, payment settings, analytics snippets, cookie consent, robots.txt, sitemap logic, other canonicals, `/boeking-bevestigd`. No form was submitted and nothing was deployed.

## Build and page counts

- Baseline on `main` @ `28af32b`: `CI=1 npm run build` → **exit 0, 246 HTML pages**.
- Final on this branch: `CI=1 npm run build` → **exit 0, 248 HTML pages**. The only additions are `out/landing.html` and `out/en/landing.html`.
- TypeScript: clean. `check:logo` ✓, `check:sitemap` ✓ (206 URLs, all built), orphan check ✓.
- ESLint on changed files: one error, in `mobile-bottom-cta-bar.tsx:352` (`setState` in effect). It is **already on main** and not in code I changed.

## Screenshots

All taken with the pre-installed Chromium against the local `out/` build. No `playwright install` was needed.

- `qa/landing/`: NL + EN at 375×667, 390×844, 1440×900, both clean and with the first-visit cookie banner (12 PNGs), plus `results.json`.
- `review/`: NL + EN at 375 and 390 wide (the only changed pages that render differently).
- Every check passes at all three sizes: `scrollHeight <= innerHeight`, no horizontal overflow, both buttons fully in view, no link under 44px, text measured white, worst-case text contrast 7.0:1 or better (AA is 4.5:1).

## Skipped or worked around, and why

- **`npm ci` fails on main.** `package-lock.json` is out of sync ("Missing: @swc/helpers@0.5.23"). I used `npm install` to build and then restored the lockfile, so it is **not** in this branch. Someone should fix the lockfile on main separately.
- **`src/lib/image-color-manifest.ts`** is rewritten by prebuild in a fresh container (it ran before the image variants existed: 103 entries instead of 692). I restored it after every build and did not commit it.
- **Amazon / affiliate rules from the session brief:** this site has no Amazon or affiliate content, so there was nothing to apply.
- **Three pills → two.** There is no chooser page for trainer / group class / open gym, so the big client button goes to the trainer finder. The pills cover the other two: Groepsles, Open Gym. A "Personal trainer" pill would have repeated the button.

## What a human must check before it goes live

1. **Photo consent.** Please confirm that the people in both photos agreed to marketing use:
   - `public/images/studio/pt-session-barbell.jpg`: man in a white hoodie spotting a client's squat, and the client, who is partly visible.
   - `public/images/studio/training-women-coaching.jpg`: two women, a trainer and a client doing a dumbbell press.
   Both photos are already used elsewhere on the site (homepage services, `/nl/word-trainer`, the female-trainer blog post), but this page puts them full-screen as the first thing campaign visitors see.
2. **Cookie banner on small phones.** On a first visit at 375×667 the banner covers the client button until the visitor chooses (`qa/landing/nl-375x667-cookie-banner.png`). At 390×844 and on desktop nothing is covered. I left consent alone. If this matters, the owner could decide on a smaller banner for this page.
3. **The orange rule.** CLAUDE.md says "if it's orange, it MUST be clickable". The coral half background was your explicit request, and it is not itself a link. The white button on it is. Please confirm you are happy with that exception.
4. **The Groepsles pill** goes to `/nl/small-group`. `navigation.ts` notes zero Small Group bookings in July and August, so you may prefer a different target (for example `/nl/lessen`) or no pill.
5. **"Open Gym vanaf €9 per uur"** refers to the €9 single one-hour session (`openGymSinglePrice`). Please say if you would rather lead with a plan price.
6. **Branch name.** This session's harness designated `claude/sculptclub-landing-page-k1zj4c`. Your brief named `cloud/sculptclub-landing-2026-09-30`, so the work is on your branch. `main` was not pushed.
7. After merge: the deploy procedure in CLAUDE.md, then `node bin/indexnow.mjs` is **not** needed, because the page is noindex.
