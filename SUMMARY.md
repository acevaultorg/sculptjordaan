# Local search: SculptClub, 2026-09-30

Branch: `cloud/sculptclub-local-2026-09-30` (from `main` at `28af32b`). Not merged, not deployed.

## Goal

More people in Amsterdam who search for a place to train, or for a studio to rent, find SculptClub. Only facts already in the repo were used (CLAUDE.md business facts, `src/config/site.ts`, `src/config/acuity.ts`, `src/config/trainers.ts`, existing page copy).

## What I found first

Most of the groundwork was already there, so this branch improves what exists rather than adding pages.

| Search intent | Page that serves it | State before |
|---|---|---|
| Rent a PT studio / training space / gym by the hour in Amsterdam or the Jordaan | `/nl/studio-huren`, `/en/studio-rental` | Strong page. No answer for "can I bring a small group", no address/hours answer, EN title did not mention Amsterdam. Two factual slips (see below). |
| Private training space for personal trainers | `/nl/voor-trainers`, `/en/for-trainers` | Good, linked to studio rental. |
| Small-group training | `/nl/small-group`, `/en/small-group` | Good, but linked to no other page on the site. |
| Space for your own small group | Full-studio row on the studio rental page (1 to 8 people) | Only a note in the rate table. Now a direct FAQ answer. |
| A gym in the Jordaan without a membership | `/nl/open-gym`, `/nl/sportschool-jordaan`, `/en/boutique-gym-amsterdam` | Good. |
| The room and the equipment | `/nl/studio`, `/en/studio` | No link to studio rental except an anchor. |
| Address and opening hours | `/nl/locatie-uren`, `/en/location-hours` | No link to any service page. |

**No new pages were needed**: every real intent already had one page. Adding more would have split the same searches across two pages.

Already in place and **left exactly as it was**: `robots.ts` (search engines and 20 named AI crawlers are allowed, only `/api/` is blocked), `sitemap.ts` / `sitemap-ai.xml` (all the pages above are already listed), all canonicals and hreflang, all analytics, all prices and Acuity links. The LocalBusiness / HealthClub / SportsActivityLocation JSON-LD was already rendered on every page by the root layout.

## What changed

1. **Links between the intent pages** (`src/components/marketing/local-intent-links.tsx`, new)
   A calm "More at SculptClub" block with six cards (studio rental, for trainers, small group, Open Gym, studio and equipment, location and hours). Each page shows the other five. Added to 10 pages: studio-huren, studio-rental, voor-trainers, for-trainers, small-group (NL+EN), studio (NL+EN), locatie-uren, location-hours. Icons are lucide inline SVGs in `currentColor`; every card is at least 44px tall. The Open Gym price comes from `openGymSinglePrice` in `acuity.ts`; the address comes from `siteConfig`.

2. **Studio rental page, NL + EN**
   - New FAQ: "Can I rent the full studio for a small group?" Full studio, private, 1 to 8 people, €17 / 60 min, €24 / 90 min.
   - New FAQ: "Where is the studio and when can I rent it?" Egelantiersgracht 424, 1015 RR, every day 06:00 to 22:00.
   - Fixed: "Deurcode per WhatsApp de avond van tevoren" now says "om 00:00 in de nacht voor je sessie" (CLAUDE.md policy). Same fix on `/nl/sportschool-jordaan`.
   - Fixed: "The studio is fully private during your rental time" was only true for the full studio. It now says that with a half studio, another trainer or Open Gym may use the other half.
   - EN title: "Personal Trainer Studio Rental | SculptClub Jordaan" is now "Rent a PT Studio in Amsterdam from €12/hour | SculptClub", matching the NL title. The NL title and all descriptions were already clear and were left alone.
   - Both FAQs also go into the page's FAQPage JSON-LD automatically.

3. **One name, address and phone in all structured data** (`src/components/seo/json-ld.tsx`)
   Service `provider`, Offer `seller`, Person `worksFor` and the reviews block each declared their own partial "LocalBusiness" (no phone, no `@id`). They now all use one `BUSINESS_REF` (name, url, phone, address, `@id`) that points to the full LocalBusiness / HealthClub / SportsActivityLocation entity. The same change is in the trainer ItemList on `/nl/vind-jouw-personal-trainer` and `/en/find-personal-trainer`. No value changed (no price, rating or hours).

4. **`/llms.txt` rewritten** (`public/llms.txt`)
   It now opens with what SculptClub is, where it is and how to book, then lists prices, equipment, trainers and main pages. Facts that were wrong or had no source in the repo:
   - Open Gym single session €10 is now €9 (`openGymSinglePrice`, verified in Acuity 2026-09-22 per the code comment).
   - "Open Gym Populair: 8 sessions, €49" removed. No config, Acuity product or page backs it.
   - Full studio "no fixed maximum" is now 1 to 8 people (superseded 2026-09-14).
   - Tom: NL/EN is now EN (`trainers.ts`).
   - Trainer hourly rates removed. The site stopped naming them on 2026-09-19 and the JSON-LD dropped them for the same reason.
   - Added: student rate €39, the four intent pages, how the door code works, the "Last updated" date.
   `scripts/check-trainer-consistency.mjs` still passes.

## Files touched

- `src/components/marketing/local-intent-links.tsx` (new)
- `src/components/seo/json-ld.tsx`
- `src/app/nl/studio-huren/page.tsx`, `src/app/en/studio-rental/page.tsx`
- `src/app/nl/voor-trainers/page.tsx`, `src/app/en/for-trainers/page.tsx`
- `src/app/nl/small-group/page.tsx`, `src/app/en/small-group/page.tsx`
- `src/app/nl/studio/page.tsx`, `src/app/en/studio/page.tsx`
- `src/app/nl/locatie-uren/page.tsx`, `src/app/en/location-hours/page.tsx`
- `src/app/nl/sportschool-jordaan/page.tsx` (door-code line only)
- `src/app/nl/vind-jouw-personal-trainer/page.tsx`, `src/app/en/find-personal-trainer/page.tsx` (JSON-LD reference only)
- `public/llms.txt`
- `review/*.png` (screenshots), `SUMMARY.md`

## Build and page counts

Both builds were run with `CI=1 npm run build` so the prebuild does not rewrite `src/sitemap-lastmod.json`. The generated `src/lib/image-color-manifest.ts` was restored after each build and is not part of this branch.

| | Exit code | `.html` pages in `out/` |
|---|---|---|
| Before (clean `main`) | 0 | 246 |
| After (this branch) | 0 | 246 |

The list of built pages is identical before and after. No type errors in either log.

Checks on the built output:
- Every indexable page (229 of 246) has the LocalBusiness / SportsActivityLocation block with name "SculptClub", "Egelantiersgracht 424" and "+31615147952". The 17 others are the internal `/social/*` frame pages, which are `noindex,nofollow` and were like this before.
- Only one phone number appears in any JSON-LD on the site: +31615147952.
- `npm run check:sitemap`: all 206 sitemap URLs have a built page. All ten intent pages are in `sitemap.xml`.
- `npm run check:copy`: totals are exactly the same as before the change (no new long headings, em dashes or hype words).
- `out/robots.txt` and the sitemaps come from untouched code.

Note: `npm ci` fails on `main` because `package-lock.json` is missing `@swc/helpers@0.5.23`. I used `npm install` to build and did not commit the lockfile change. Someone should run `npm install` and commit the lockfile on its own.

## Screenshots

Chromium from `/opt/pw-browsers` (no download needed). `out/` was served locally and each changed page was captured at 375px and 390px wide, full page, plus a close-up of the new link block (`*-links.png`). External requests were blocked and the cookie banner was set to "essential only", so no analytics fired.

The site's sticky header, language hint and bottom booking bar sit on top of some close-ups. That is the normal page chrome, not part of the change.

Automated checks at both widths: no horizontal scroll on any of the 13 pages, and no card in the new link block is under 44px tall.

46 files in `review/`: 26 full-page shots (13 pages x 2 widths) and 20 close-ups of the new link block (10 pages x 2 widths). Pages: en/find-personal-trainer, en/for-trainers, en/location-hours, en/small-group, en/studio, en/studio-rental, nl/locatie-uren, nl/small-group, nl/sportschool-jordaan, nl/studio, nl/studio-huren, nl/vind-jouw-personal-trainer, nl/voor-trainers.

## Skipped, and why

- **No new pages.** Every intent already had a page (see the table above).
- **robots.txt, sitemap logic, canonicals and analytics unchanged.** They already did what the goal asks, and the session rules say to keep them exactly as they are.
- **`/nl/sportschool-jordaan` and `/en/boutique-gym-amsterdam`** did not get the link block. They are standalone landing pages with their own minimal layout (no header or footer), probably for campaigns, so extra outbound links could hurt them.
- **NL studio-huren title** left as it is. A code comment says it was worded from Search Console data.
- **Amazon / affiliate rules** do not apply here: this repo has no Amazon, Amili or /go/ code. Nothing was fetched from amazon.com.
- **No `/boeking-bevestigd` visit and no form submitted.** Screenshots only loaded the pages listed above.

## What a person should check before this goes live

1. The new FAQ answer quotes €24 per 90 minutes for the full studio (CLAUDE.md, and several trainer articles already say €24). The rate table on the page only shows 60 minutes, and `acuityLinks.fullStudio90` exists but no page links to it. Please confirm a renter can actually book 90 minutes, or remove the 90-minute price from the answer.
2. `/llms.txt` no longer lists an "Open Gym Populair, 8 sessions €49" plan. If that plan really exists in Acuity, add it back, and add it to `acuity.ts` too.
3. `/llms.txt` says "Studio rental can also be paid by invoice, on request". The old file said invoices were only for packs, not single hours. Please confirm which is true.
4. Look at the link block on a real phone in light and dark mode (the screenshots are light mode only).
5. After deploy, run the steps in CLAUDE.md (check:sitemap, check:vanity, Functions 403 check). Ping IndexNow with only the changed URLs: the 10 intent pages, `/nl/sportschool-jordaan`, `/nl/vind-jouw-personal-trainer`, `/en/find-personal-trainer`, `/llms.txt`.
6. Run the pages through Google's Rich Results Test to confirm the FAQ and LocalBusiness data.

## Review pass (2026-09-30)

A second session reviewed this branch; details in `REVIEW.md`. Changes it made:
- `public/llms.txt`: transit line removed (Vijzelgracht metro is not a 10-minute walk).
- Studio and location pages NL+EN: the link block now sits above the closing call to action instead of after it.
- Studio rental NL+EN: "Bottom CTA" comment moved back above the CTA section.
- `local-intent-links.tsx`: uses `next/link`; the last word of each title stays together with its arrow.
- `review/`: all 46 screenshots retaken after these fixes.

Build after the review: exit 0, 246 `.html` pages, same list as `main` (also rebuilt: exit 0, 246).
