# SUMMARY: /landing photos, red and blue duotone (branch `claude/sculptclub-landing-images-1mu1ig`)

Owner's request (1 Oct): give each half of the red/blue split page the best studio photo, with a red or blue overlay that keeps every line readable and still lets the photo read.

## Read this first: base branch and branch name

- **`/landing` is not on `main`.** It only exists on `cloud/sculptclub-landing-v3-2026-10-01` (tip `0f9a154`, the red/blue v2 page). `main` is still `28af32b`. That branch descends cleanly from main, so I fast-forwarded it and built on top. This branch therefore holds the v1 + v2 landing work **plus** the photo work below. The v2 branch summary moved to `qa/landing-v2/BRANCH-SUMMARY.md`.
- **Branch name.** The brief asked for `cloud/sculptclub-landing-images-2026-10-01`. This cloud session is pinned to `claude/sculptclub-landing-images-1mu1ig` and may not push anywhere else, so the work is on that branch. Nothing went to main. Nothing was merged or deployed.

## What changed

1. **Photos.** Both are the studio's own, already in the repo. There are no stock or AI images.
   - **Trainer half:** `studio/training-women-coaching.jpg`. A trainer stands behind a client and coaches a dumbbell shoulder press in the studio, and both faces are visible. Before, this photo sat on the client half, and the trainer half used `pt-session-barbell.jpg`, which has black letterbox bars and a small figure.
   - **Client half:** `studio/training-barbell-squat.jpg`. A woman sets up a barbell squat under the studio skylight. It shows strength and energy, and its strong light-to-dark range survives the duotone best. The darker dumbbell and bike shots turned into flat colour.
2. **Art direction instead of one crop.** The phone half is close to square (375×334 to 390×422), while the desktop half is portrait (720×900, and 384×1024 on a portrait tablet). Each photo now has two crops:
   - a square one for phones;
   - a 3:4 one for desktop, framed on the faces.

   The `object-position` is set per layout (phone / ≥768px). Faces stay in frame at 375, 390, 768 and 1440.
3. **Real duotone in the page's own tokens.** The photo is grayscale and is mapped onto the page's existing colours:
   - `mix-blend-multiply` with the tint colour (`#1E4FD6` / `#B42330`) turns white into the tint;
   - `mix-blend-screen` with the base colour (`#0A1633` / `#3F0910`) turns black into the base.

   So every pixel falls between the half's own dark and light colour, and **nothing in the photo can be brighter than the tint**. On top sits a same-hue scrim (30 → 48%), lighter than v2's 50 → 66% black-navy. Legibility no longer depends on which photo is used: white text is at least 5.5:1 by construction, and 8:1 or better with the scrim.
4. **Measured contrast on the rendered pixels** (`scripts/qa-landing.mjs`). The script hides the text, re-screenshots, and reads the brightest pixel (p99) behind every text box:

   | | min contrast, white text |
   |---|---|
   | 375×667 | 8.01 : 1 (NL), 8.07 : 1 (EN) |
   | 390×844 | 8.14 : 1 |
   | 768×1024 | 9.47 : 1 |
   | 1440×900 | 9.62 : 1 |

   AA needs 4.5:1. The owner's bar from v2 (7:1) holds everywhere. Buttons are white with navy or crimson ink (15:1 and 10:1, unchanged).
5. **Performance.**
   - The new reusable block `<ArtDirectedPicture>` renders a `<picture>`: AVIF, then WebP `<source>`, then a JPEG fallback on the `<img>`. It has a `srcset` per crop, `sizes`, and `width`/`height`.
   - Only the trainer photo (the first visible one, top on phones and left on desktop) gets `fetchpriority="high"`. The client photo gets `loading="lazy"`.
   - The variants are single-channel grayscale: the colour comes from CSS, which keeps the tokens in code and makes the files small.
   - The page's two photos together, as measured by QA in Chromium:

     | Viewport | Before (v2: WebP of the full colour photos) | Now (AVIF) |
     |---|---|---|
     | 375 / 390, DPR 2 | ≈ 74.6 KB | 28.3 KB |
     | 1440×900 | ≈ 74.6 KB | 29.2 KB |

     That is **about −62%**. The "before" figure is the size of the 750w WebP files the old loader picked.
   - CLS is 0 at every viewport. The photos sit in absolutely positioned layers, so nothing can move.
6. **Tone.** The variants get `normalise` + light CLAHE (local contrast), so faces and kit still read inside the squeezed duotone range. This is safe for the text because the duotone caps the brightest pixel at the tint either way.

Unchanged: all copy, both CTAs and their hrefs, the pills, `landing_trainer_click` / `landing_client_click`, the NL | EN toggle, the logo file, metadata, noindex/canonical/hreflang, analytics, robots, the sitemap and the consent banner. Only the photo `alt` texts changed, because the photos changed (NL and EN).

## Kit blocks

There is **no "Amili kit" in this repo**. A search for `amili` finds nothing; that kit belongs to the Amazon-affiliate sites. This site also has no Amazon or affiliate content, so the Amazon rules in the brief had nothing to apply to. Following the "reusable kit block, never a one-off" rule, the new element is its own documented block:

- **Added:** `src/components/ui/art-directed-picture.tsx`, with its generator `scripts/generate-art-directed-pictures.mjs` (`npm run images:pictures`) and the generated `src/lib/art-directed-picture-manifest.ts`. To add a photo, add one entry with its crops, run the script, and commit.
- **Reused:** the existing `SplitLanding` component, its `THEME` tokens and the logo asset.

## Files touched

| File | Change |
|---|---|
| `src/components/ui/art-directed-picture.tsx` | **new** reusable `<picture>` block |
| `scripts/generate-art-directed-pictures.mjs` | **new** crop + AVIF/WebP/JPEG generator |
| `src/lib/art-directed-picture-manifest.ts` | **new**, generated |
| `public/images/_pic/*` | **new**: 39 files, 1.0 MB in total across all crops, widths and formats (a visitor downloads 2 of them) |
| `src/components/marketing/split-landing.tsx` | duotone layers, `ArtDirectedPicture`, priority only on the first half |
| `src/app/landing/page.tsx`, `src/app/en/landing/page.tsx` | photo ids, alt text, per-layout position |
| `scripts/generate-responsive-images.mjs`, `scripts/generate-image-color-manifest.mjs` | skip `public/images/_pic/` (already sized, and grayscale) |
| `package.json` | `images:pictures` script |
| `scripts/qa-landing.mjs` | 768×1024 viewport, logs the loaded file, format, bytes, fetchpriority/loading, CLS; output `qa/landing-v3/` |
| `qa/landing-v3/*`, `review/landing-{nl,en}-{375,390}.png` | screenshots + `results.json` |

## Build and page counts

- Before (v3 tip `0f9a154`, my changes stashed): `CI=1 npm run build` → **exit 0, 248 HTML pages**.
- After (committed state): `CI=1 npm run build` → **exit 0, 248 HTML pages**. No pages were added or removed.
- `tsc --noEmit` is clean. ESLint on the changed files is clean.
- `check:logo` ✓. `check:sitemap` ✓ (206 URLs, all built). All 39 variant URLs exist in `out/`.
- The one Turbopack NFT warning on `next.config.ts` was there before as well.

## Screenshots

These were taken with the pre-installed Chromium against the local `out/` build. No live URL was opened, and no CTA was clicked.

- `review/landing-{nl,en}-{375,390}.png`
- `qa/landing-v3/`: NL + EN at 375×667, 390×844, 768×1024 and 1440×900, both clean and with the first-visit cookie banner.
- All 8 clean runs PASS: no scroll, no overflow, both buttons in view, every link ≥ 44px, all text white, CLS 0, contrast as above.

## Skipped or not possible here

- **`ui-render-check.mjs` on the live page.** That tool lives in `~/Local/VAULT-Fleet/...`, which does not exist in this cloud container. The page is also not live from this branch, because nothing may be deployed. `scripts/qa-landing.mjs` covers the same checks locally at 375 and 390 (plus 768 and 1440). Run the fleet render check once this is deployed.
- **JPEG fallback.** It is generated and present in `out/`, but Chromium always picks AVIF, so the fallback was not exercised in a browser.
- **`npm ci`** still fails on the out-of-sync lockfile (same as v1/v2). I built with `npm install` and restored `package-lock.json`. `src/lib/image-color-manifest.ts` is rewritten by prebuild in a fresh container; I restored it and did not commit it.

## What a human must check before it goes live

1. **Merge order.** This branch contains the whole `/landing` page. Merge it instead of v1/v2, not on top of a different landing branch.
2. **Photo consent.** Three people now appear full-screen on a campaign page: the coach, the client and the woman squatting. Please confirm all three are fine with this use. This was already open for v1/v2, and the people changed.
3. **The red and blue on a real phone.** They were tuned on screenshots; OLED screens make red look more saturated.
4. **Cookie banner at 375×667** (unchanged): on a first visit it still covers the client button until the visitor chooses.
5. After deploying, run the fleet `ui-render-check.mjs` on `/landing` and `/en/landing` at 375 and 390.

## Next improvement (not done)

- At 375 wide the text block covers almost the whole half, so the faces sit behind the headline. A layout change (for example, letting the photo show in a band above the eyebrow on taller phones) would show more of the people. That changes the v2 layout the owner approved, so it is a decision for them, not a quiet tweak.
