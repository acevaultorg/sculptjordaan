# SculptClub — sculptclub.nl

Boutique personal training studio in Amsterdam Jordaan. Next.js app with bilingual (NL/EN) content.

## Business Facts (NEVER contradict these)
- **Name:** SculptClub (not Sculpt Jordaan, not sculptjordaan)
- **Address:** Egelantiersgracht 424, 1015 RR Amsterdam
- **Phone / WhatsApp:** +31 6 15 14 79 52 (`wa.me/31615147952`) — single public number for calls AND WhatsApp Business (⚠️ **auto-replies: UNCONFIRMED as of 2026-08-29** — this file has asserted them live since 2026-06-01, but TaskPeace card `mpkw98i81h0hyg` is still 🔴 ACTIVE and BLOCKING with paste-ready setup steps, last touched 2026-06-17. Both cannot be true. Only the operator can settle it: WhatsApp the line from a second phone outside 09:00-21:00 and see if a reply arrives. Until then do NOT tell anyone after-hours leads are being caught — 3 shipped lead-cap surfaces push WhatsApp as the primary CTA, so if the away-message is off, that is a live revenue leak, not a documentation nit.). Replaced old `0683178934` fleet-wide on 2026-06-01 per operator. NEVER revert to 0683178934 even if older context/memory references it.
- **Email:** contact@sculptclub.nl
- **Hours:** Daily 06:00–22:00
- **Founded:** 2025
- **Rating:** 5.0 stars on Google
- **Open Gym capacity:** max **4 people** in the studio at a time (operator 2026-06-23, raised from 3). Use "max 4 personen / max 4 people" everywhere — never "3".
- **Dumbbells: 4–40 kg** (photo-verified 2026-08-28 from the rack close-up IMG_0878 — engraved 10/12.5/15/20/22.5/25 + two 40s on the floor row; site previously carried FOUR contradictory claims incl. "tot 50 kg" and "tot 32 kg", all fixed to 40). NEVER write "tot 50 kg" or "tot 32 kg". Lower bound 4-vs-2 kg is operator-confirmable; top is 40.
- **Studio rental capacity (operator 2026-07-13):** Half studio = **max 2** (1:1 / a duo); the *other* half can be used at the same time by another trainer OR by Open Gym — so up to 4 people share the room (two couples of 2, or one couple + 2 Open Gym, or 4 Open Gym). Full studio = **fully private, NO fixed maximum** (your own small group). **NEVER say the full studio holds "6"** — that figure was wrong and was corrected fleet-wide on 2026-07-13. Full-studio labels use "kleine groep / small group", never a hard number.

## Pricing (ALWAYS use these exact numbers)
- **Personal Training:** from €45/session (trainers are self-employed — they set their own rates and
  the client pays them directly; first intake free). ⚠️ Do NOT write "0% commissie"/"0% commission":
  trainers rent the room and bring their own clients, so there was never a commission to waive.
  Operator's words: "weird bull shit". Safe published phrasing: "je houdt 100% van je tarief".
  Naming what OTHER gyms charge (30–50%) is fine and stays.
- **Open Gym losse sessie:** **€9 / 1 uur**, geen lidmaatschap nodig — the cheapest paid entry product and the hook the door poster leads with. Acuity `appointmentType=83513953` (`acuityPaidSessions.openGymSession`). ⚠️ **DO NOT "correct" this off a page as a hallucination** — it was missing from this list until 2026-08-29 and a fact-audit nearly stripped it from `docs/poster-open-gym-deur-2026.html` on exactly that reasoning. Verified live on /nl/open-gym (body copy + JSON-LD) and in acuity.ts the same day.
- **Open Gym Instapplan:** 4 sessions, €29/4 weeks (€7.25/session)
- **Open Gym Onbeperkt:** unlimited, **€79/4 weeks** (list price raised 2026-07-21 to match the live summer-deal ad creative, which anchors ~~€79~~ → €49; was €69 from 2026-07-15, €59 before that. NEVER quote €59 or €69 as the current list price). ✅ VERIFIED IN ACUITY 2026-08-28: the regular "Open gym - Onbeperkt" product (id 2155890) reads €79, so the "daarna €79" promise IS backed. (This supersedes the earlier ⚠️ risk note and the stale `src/config/acuity.ts` comment that said it was "still €69".) All 7 products re-read live and matching: 2155887 €29 · 2155890 €79 · 2247082 €49 · 2149357 €89 · 2247124 €179 · 2248025 €299 · 2248026 €499. **Zomeraanbieding:** new members join at **€49/4 weeks and keep that price for as long as they stay a member** (price-locked, honest urgency = the €49 window closes for new joiners, NOT "daarna €69" for the deal member). Config + gate: `openGymSummerDeal` in `src/config/acuity.ts` (`active:false` → every deal surface disappears, plain €79 shows — `priceRegular: 79`). Existing pre-2026-07-15 members are grandfathered at their old €59 Acuity product — never touch it. Acuity holds ONE price per subscription product → the deal is a SEPARATE €49 product (operator creates it; `dealUrl` in config).
- **Studio Rental Half:** €12/60min, €17/90min
- **Studio Rental Full:** €17/60min, €24/90min
- **Packages:** Starter €89 (10% off, credit €99), Routine €179 (15% off, credit €210), Pro €299 (20% off, credit €375), Volume €499 (23% off, credit €650) — repriced; EXECUTED in Acuity 2026-07-18 (the 2026-07-16 attempt never saved — Acuity's edit form submits via "Update Package"/requestSubmit, NOT the "Save" button; a bare Save click silently discards changes). Acuity IDs: Starter 2149357 · Routine 2247124 · Pro 2248025 · Volume 2248026 (linked in `src/config/acuity.ts`). Old products 2149358/59/60 were price-corrected too (so cached pages charge right prices); set them Unavailable only after a relink is verified live. Certificates sold at old prices keep their old credit.

## Copy vocabulary (operator 2026-07-17)
- **"probeersessie", NEVER "proefles"** in visible copy (buttons, badges, FAQ, body). Open Gym = training solo and studio huren = renting a room — neither is a *les*, so "proefles" is factually wrong. PT/Small Group keep "intake"/"kennismaking".
- **EXCEPTION — SEO surfaces keep "proefles":** page `title`/`description`/`keywords` and the `/nl/gratis-proefles` URL. "Proefles" is the term Dutch people actually search; "probeersessie" has ~no search volume. Both words mean the same thing, so this is honest — accurate copy, searchable metadata. Don't "fix" the metadata to probeersessie: it silently costs organic clicks.
- Hero secondary CTA is **"Stel je vraag" / "Ask a question"** (not "Even appen"/"Have a chat") — it names the visitor's actual need; the WhatsApp icon already signals the channel.

## Policies (ALWAYS use these)
- **Cancellation:** Always free. No time restriction. Never say "24 hours" or "12 hours".
- **Door code:** Sent via WhatsApp the night before. Never say "per e-mail" or "by email".
- **Payment:** CreditCard, Apple Pay, Google Pay. Studio rental also accepts invoice. iDEAL only via Apple Pay (don't list separately).
- **Contracts:** None. No membership required. Open Gym = 4-week cycles, cancel anytime.

## Trainers (13 — source of truth: `src/config/trainers.ts`)
- **Alex:** €69 / 60 min, Static Calisthenics, Gymnastiek, Prestatie, NL,EN,PT
- **Eva:** op aanvraag, Kracht, Voeding, NL,EN
- **Bryan:** vanaf €55 / 60 min, Calisthenics, Skills, Mobiliteit, NL,EN
- **Ibrahim:** op aanvraag, Voeding, Afvallen, Revalidatie, NL,EN
- **Gezina:** op aanvraag, Training voor vrouwen, Kracht, Prestatie, NL,EN
- **Andrea:** €45 / 45 min, Kracht, Houding, Techniek, NL,EN
- **Dara:** op aanvraag, Kracht & Balans, Personal Training, Beginners welkom, NL,EN
- **Jearmey:** op aanvraag, Kracht, Afvallen, Atletische Prestatie, NL,EN
- **Sergei:** €80 / 60 min, Lichaamsrecompositie, Houdingscorrectie, Kracht & Beweging, Herstel, EN,RU
- **Joey:** op aanvraag, Kracht, Ademwerk, Zenuwstelsel, Zelfonderzoek, NL,EN
- **Hamish:** €72 / 60 min, Kracht, High Performance, Afvallen, NL,EN
- **Tom:** €100 / 60 min, Kracht & Conditie, Duurzame Training, Brazilian Jiu-Jitsu, EN
- **Roberta:** op aanvraag, Kracht, Houding & Mobiliteit, Afvallen, EN,IT
- Short link per trainer: `sculptclub.nl/<naam>` → their own intake page (all 13 pages live at
  `/nl/plan-gratis-intake-met-<naam>`). Trainers are SELF-EMPLOYED: own rates, own clients, client
  pays them directly. NEVER "0% commissie" — the frame is rent + freedom.
- ⚠️ Bryan (last rental Mar 2026) and Tom (never appears in the rental export) are listed but not
  currently renting. Five renters who DO pay weekly have no profile at all — see
  `docs/TRAINER-ROSTER-RECONCILIATION-2026-08-25.md`.

## Tech Stack
- Next.js 16, React 19, TypeScript
- Bilingual: `/nl/...` (Dutch) and `/en/...` (English)
- Booking: Acuity Scheduling
- Analytics: GA4 (G-QYW5H4XTXW), Google Tag Manager (GTM-PG592B5Q), Google Ads (AW-18011741633 — Submit-lead-form label `NwwsCNGZlp8cEMG71YxD` for forms + Purchase label `wBmPCNKywIccEMG71YxD` for completed bookings), Meta Pixel (4350118535216982), TikTok Pixel (D75710BC77UDBCCMHF60), Clarity (vx7zcg6zys)
- Source of truth: `src/config/site.ts` (analytics object). If you update an ID in code, update CLAUDE.md in the same commit.
- Event taxonomy: every WhatsApp + Acuity click event includes `intent` (`trainer` | `studio_rental` | `open_gym` | `generic`) + `pricing` (`free` | `paid` | `unknown`). Splits Plausible goals by these props to see trainer-free-tryouts vs trainer-paid-packs vs studio-rental vs gym-subs. **Full reference: [docs/ANALYTICS.md](docs/ANALYTICS.md)** (goals, props, classification rules, Plausible UI navigation, naming-mismatch trap, verification protocol).
- **Meta Pixel is CONSENT-GATED (2026-07-20) — do NOT "fix" it back to always-on.** `connect.facebook.net` is not requested at all until the `sc_consent=all` cookie exists; the `sc:consent-updated` event from `cookie-consent.tsx` starts it. This is deliberate: /nl/cookiebeleid promises "Deze cookies worden alleen geplaatst met je toestemming", and a live audit on 2026-07-20 found the pixel was firing PageView + setting `_fbp` on every visit regardless. Deliberately NOT used: Meta's `fbq('consent','revoke')` (still loads fbevents.js → leaks IP/referrer pre-consent) and the `<noscript>` fallback img (fires unconditionally, cannot be gated). Strategy is `afterInteractive`, not `lazyOnload` — gating means only opted-in visitors load it, so it's safe to load promptly. Expect Meta-reported conversions to be LOWER than pre-2026-07-20; that is decliners' data correctly disappearing, not a regression.
- Tracking: FunnelPilot fp.js snippet — **DISABLED 2026-07-20** (commented out in `src/app/layout.tsx`). `funnelpilot.app` has the operator's Cloudflare NS but no A record, so the script failed `ERR_NAME_NOT_RESOLVED` on every page load and tracked nothing; the product (`VAULT-Fleet/cro/funnelpilot`) is archived + undeployed. Kept as a commented placeholder — re-enable by uncommenting once funnelpilot.app resolves.
- Deploy: **Cloudflare Pages** (project `sculptclub`, account `72bfd26c…`). Migrated OFF Vercel 2026-07-14 (nameservers → amanda/lochlan.ns.cloudflare.com; email stays on Hostinger — MX/SPF/DKIM/DMARC exact-copied into the CF zone, NEVER touch those records). Static export (`output: "export"` → `out/`) + Pages Functions compiled to Advanced-Mode `_worker.js`.
  **Deploy procedure:** (1) `npm run build`. (2) `npx wrangler pages functions build --outdir=DIR` → copy `DIR/index.js` to `out/_worker.js` + write `out/_routes.json` (`{"version":1,"include":["/*"],"exclude":[]}`). (3) `CF_BRANCH=main python3 -u scripts/cf-pages-chunked-deploy.py` (chunked deployer — wrangler EPIPEs on the 154MB export; the deployer ships `_worker.js`/`_routes.json` as deployment FORM FIELDS, never as static assets, or Functions silently don't run). `CF_SKIP_UPLOAD=1` re-creates a deployment in ~6s right after an upload run. Verify Functions after every deploy: `/api/whatsapp/webhook?hub.mode=subscribe…` must return 403 (404/405 = worker missing → REDEPLOY). (4) **Ping IndexNow with ONLY the changed URLs**: `node bin/indexnow.mjs <url> <url> …`. ⚠️ Regression found 2026-08-28: `bin/ship.sh` (the OLD Vercel path) was what used to call IndexNow, so since the 2026-07-14 CF Pages migration **no deploy has pinged it** — ~6 weeks of ships went unannounced to Bing/Yandex/Naver/Seznam (and Google via Bing data-sharing), which starves indexation. Do NOT run `node bin/indexnow.mjs` bare on a routine deploy: with no args it submits every sitemap URL, and since CSS/layout changes touch every page that is the batch-abuse pattern `fleet-mobile-standard` warns about. Pass the handful of URLs you actually changed. (5) **Build-success is NOT `$?`** — see `.claude/state/KNOWLEDGE.md` "Build/deploy trap": `next build` can print "Compiled successfully", fail type-check, and still exit 0 with a stale `out/`. ~~BATCH deploys (full upload ≈ 45-65 min)~~ **(MEASURED 2026-08-29: the upload is now ~77 SECONDS, not 45-65 min — 1565 changed files in 9 batches, 80s end-to-end. The old figure predates the `CF_BATCH_MB=20` default; at 20MB/batch the batch COUNT collapses and per-batch SSL-handshake overhead stops dominating. So the BUILD (~25 min on the WD drive) is the expensive half, NOT the transfer — do not defer a deploy to 'batch' it, that trade no longer exists.)** Still don't run parallel with other fleet sessions' chunked deploys (uplink contention kills batches).
  Vercel is RETIRED for this project — never deploy there; the old Vercel rules are void.

## URL Structure
- Dutch: `/nl/vind-jouw-personal-trainer`, `/nl/open-gym`, `/nl/studio-huren`, `/nl/prijzen`, `/nl/blog/...`
- English: `/en/find-personal-trainer`, `/en/open-gym`, `/en/studio-rental`, `/en/pricing`, `/en/blog/...`
- Root `/` = Dutch homepage, `/en` = English homepage

## Key Patterns
- All pages use `PageLayout`, `Section`, `SectionHeader`, `FadeIn` components
- Blog posts use `BlogPostingJsonLd` + `BreadcrumbJsonLd`
- CTA sections at bottom of every page (dark bg, booking + WhatsApp buttons)
- Trainer config in `src/config/trainers.ts`
- Site config in `src/config/site.ts`
- Booking links in `src/config/acuity.ts`

## Brand & Design
- Brand strategy, voice, and design principles: `docs/BRAND-STRATEGY.md`
- Automatic light/dark mode via system preference (added 2026-05-29, operator directive). Both palettes live in `src/app/globals.css` (`:root` = light warm-bone, `.dark` = dark near-black), switched by a flash-free `prefers-color-scheme` script in `layout.tsx`. Build for BOTH modes — use theme tokens (`bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-brand`), never hardcoded `text-white`/`bg-black` on token surfaces (white text is only OK over photos or on the orange brand button). (Supersedes the prior "dark only — never add light mode" rule.)
- Color-clickability contract: if it's orange, it MUST be clickable (and if it's not clickable, it MUST NOT be orange)
- Fonts: Syne (headings) + Instrument Sans (body)
- **THE LOGO IS A FILE, NEVER TYPE. Non-negotiable.** The wordmark is `public/images/logo-sculptclub.svg` (or `.png`) — **"SCULPT CLUB", TWO words**, a heavy custom grotesque with tight spacing. It is **not Syne**, it is **not one word**, and it is **never** letter-spaced. NEVER draw it as text in any generator, canvas, SVG, PIL script, OG image, social frame, email, PDF or slide — always embed the real asset. Source art is near-black → `filter:invert(1)` (or the `.png` on light) to place it white on a dark photo, same as the header's `dark:invert`. Run `npm run check:logo` before shipping anything that renders the mark.
- Primary brand color: #EF5012 (vibrant orange — changed from #134DE1 blue on 2026-05-17; source of truth: `--brand`/`--primary` in `src/app/globals.css`)

## Legacy WordPress Repo
- **Repo:** github.com/pmdevries-rgb/sculptclub-site (archived)
- Contains PHP snippets, JS runtime, and WordPress themes from before the Next.js migration
- All business logic has been migrated to this repo — the WordPress repo is reference only
- Do NOT build new features there

## Common Mistakes to Avoid
- Never use "€49" or "€60" for PT starting price — it's **€45**
- Never mention cancellation time limits — cancellation is **always free**
- Never say door code comes by email — it comes **via WhatsApp the night before**
- Never list iDEAL as a standalone payment method
- **Never render the logo as text** (`SCULPTCLUB` in Syne/letter-spaced/one word). Embed `public/images/logo-sculptclub.svg`. Two traps that hide the failure: (a) a `.mark` class loses to `.f img` on specificity and the logo silently full-bleeds cropped to its middle — scope it `.f img.mark` and reset `inset`/`object-fit`; (b) a render gate on `querySelector("img")` waits on the *photo*, so the frame ships with no logo — wait for **every** image. Shipped wrong on live social 2026-08-26; operator: "dont make the logo mistake in the future! very important".
- Never use "sculptjordaan" or "Sculpt Jordaan" as the business name — it's **SculptClub**
- Never use **0683178934** — the public number is now **+31 6 15 14 79 52** / `wa.me/31615147952` (the WhatsApp Business line with auto-replies). 0683178934 was retired 2026-06-01.
- Build for BOTH light + dark mode via theme tokens — auto light/dark shipped 2026-05-29 (see "Brand & Design" above). The old "dark only — never add light mode" rule is RETIRED.
- Always create both NL and EN versions of any new page or blog post
- **Paid-ads budget cap = max €2/day** (operator-set 2026-06-17) — applies to Google Ads + any paid channel. NEVER propose or set a higher ad budget without explicit operator approval. (The old Google Ads task said €15-30/day — corrected to €2/day.)

## Killed investigations — DON'T re-propose (verified dead 2026-06-16; full memo in PromptPrio archive)
- **NEVER re-add a device-language / Accept-Language auto-redirect on `/`** — `/` ALWAYS serves Dutch. An auto-flip previously drove **28% off the Dutch funnel**. Non-Dutch visitors get the dismissible `<LanguageHint/>` OFFER instead (reads navigator.languages, one-tap, never forces). See the comment in `src/middleware.ts`.
- **DON'T "fix" the SSR `<html lang="nl">` on /en pages** — an inline head-script corrects it to "en" before paint (JS users + Googlebot + screen readers all see "en"). The only perfect fix is a 95-folder route-group refactor = high risk for a non-issue. The redundant `nl`+`nl-NL` hreflang and the `/start`→`/` route are harmless and intentional.
- **DON'T build an Acuity→Google Ads pack-attribution webhook** — Google Ads Purchases = 0 (it drives trainer LEADS, not packs); offline import needs a gclid that Instagram/Direct bookings don't carry. Attributes ~nothing for multi-day dev cost. KILLED — only revisit if PAID pack campaigns start.
- **DON'T blindly edit the global Acuity "Custom Conversion Tracking" script** — it's ONE global script (Integrations → boeking-bevestigd) firing for scheduled appointments. A wrong edit breaks the WORKING studio_rental tracking (the main revenue line). The real studio_rental leak is IN-Acuity (intake form / Apple-Pay prominence) = operator-side; the booking PAGE is already clean.
- **Channel-mix truth:** bookings come from Direct + Instagram + organic search; Google Ads drives trainer leads only. Highest-ROI growth = operator-side Instagram (point Open-Gym content at `/nl/open-gym`).

@AGENTS.md
