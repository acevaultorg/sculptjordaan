# SculptClub — sculptclub.nl

Boutique personal training studio in Amsterdam Jordaan. Next.js app with bilingual (NL/EN) content.

## Business Facts (NEVER contradict these)
- **Name:** SculptClub (not Sculpt Jordaan, not sculptjordaan)
- **Address:** Egelantiersgracht 424, 1015 RR Amsterdam
- **Phone / WhatsApp:** +31 6 15 14 79 52 (`wa.me/31615147952`) — single public number for calls AND WhatsApp Business (auto-replies live on this line). Replaced old `0683178934` fleet-wide on 2026-06-01 per operator. NEVER revert to 0683178934 even if older context/memory references it.
- **Email:** contact@sculptclub.nl
- **Hours:** Daily 06:30–22:00
- **Founded:** 2025
- **Rating:** 5.0 stars on Google
- **Open Gym capacity:** max **4 people** in the studio at a time (operator 2026-06-23, raised from 3). Use "max 4 personen / max 4 people" everywhere — never "3".
- **Studio rental capacity (operator 2026-07-13):** Half studio = **max 2** (1:1 / a duo); the *other* half can be used at the same time by another trainer OR by Open Gym — so up to 4 people share the room (two couples of 2, or one couple + 2 Open Gym, or 4 Open Gym). Full studio = **fully private, NO fixed maximum** (your own small group). **NEVER say the full studio holds "6"** — that figure was wrong and was corrected fleet-wide on 2026-07-13. Full-studio labels use "kleine groep / small group", never a hard number.

## Pricing (ALWAYS use these exact numbers)
- **Personal Training:** from €45/session (trainers set own rates, 0% commission, first intake free)
- **Open Gym Instapplan:** 4 sessions, €29/4 weeks (€7.25/session)
- **Open Gym Onbeperkt:** unlimited, **€69/4 weeks** (base price set 2026-07-15 — operator decision, "right moment to set prices"; was €59 before that. NEVER quote €59 as current). **Zomeraanbieding:** new members join at **€49/4 weeks and keep that price for as long as they stay a member** (price-locked, honest urgency = the €49 window closes for new joiners, NOT "daarna €69" for the deal member). Config + gate: `openGymSummerDeal` in `src/config/acuity.ts` (`active:false` → every deal surface disappears, plain €69 shows). Existing pre-2026-07-15 members are grandfathered at their old €59 Acuity product — never touch it. Acuity holds ONE price per subscription product → the deal is a SEPARATE €49 product (operator creates it; `dealUrl` in config).
- **Studio Rental Half:** €12/60min, €17/90min
- **Studio Rental Full:** €17/60min, €24/90min
- **Packages:** Starter €89 (10% off, credit €99), Routine €179 (15% off, credit €210), Pro €299 (20% off, credit €375), Volume €499 (23% off, credit €650) — repriced 2026-07-16 (operator); Acuity products duplicated to new IDs, old ones set Unavailable (existing codes stay valid)

## Policies (ALWAYS use these)
- **Cancellation:** Always free. No time restriction. Never say "24 hours" or "12 hours".
- **Door code:** Sent via WhatsApp the night before. Never say "per e-mail" or "by email".
- **Payment:** CreditCard, Apple Pay, Google Pay. Studio rental also accepts invoice. iDEAL only via Apple Pay (don't list separately).
- **Contracts:** None. No membership required. Open Gym = 4-week cycles, cancel anytime.

## Trainers
- **Alex:** €69/60min, Strength/Calisthenics/Recovery, NL/EN/PT
- **Eva:** Rate on request, Dietitian, Strength/Nutrition, NL/EN
- **Andrea:** €45/45min, Strength/Posture/Technique, NL/EN
- **Dara:** Rate on request, Strength & Balance/Personal Training, NL/EN

## Tech Stack
- Next.js 16, React 19, TypeScript
- Bilingual: `/nl/...` (Dutch) and `/en/...` (English)
- Booking: Acuity Scheduling
- Analytics: GA4 (G-QYW5H4XTXW), Google Tag Manager (GTM-PG592B5Q), Google Ads (AW-18011741633 — Submit-lead-form label `NwwsCNGZlp8cEMG71YxD` for forms + Purchase label `wBmPCNKywIccEMG71YxD` for completed bookings), Meta Pixel (4350118535216982), TikTok Pixel (D75710BC77UDBCCMHF60), Clarity (vx7zcg6zys)
- Source of truth: `src/config/site.ts` (analytics object). If you update an ID in code, update CLAUDE.md in the same commit.
- Event taxonomy: every WhatsApp + Acuity click event includes `intent` (`trainer` | `studio_rental` | `open_gym` | `generic`) + `pricing` (`free` | `paid` | `unknown`). Splits Plausible goals by these props to see trainer-free-tryouts vs trainer-paid-packs vs studio-rental vs gym-subs. **Full reference: [docs/ANALYTICS.md](docs/ANALYTICS.md)** (goals, props, classification rules, Plausible UI navigation, naming-mismatch trap, verification protocol).
- Tracking: FunnelPilot fp.js snippet
- Deploy: **Cloudflare Pages** (project `sculptclub`, account `72bfd26c…`). Migrated OFF Vercel 2026-07-14 (nameservers → amanda/lochlan.ns.cloudflare.com; email stays on Hostinger — MX/SPF/DKIM/DMARC exact-copied into the CF zone, NEVER touch those records). Static export (`output: "export"` → `out/`) + Pages Functions compiled to Advanced-Mode `_worker.js`.
  **Deploy procedure:** (1) `npm run build`. (2) `npx wrangler pages functions build --outdir=DIR` → copy `DIR/index.js` to `out/_worker.js` + write `out/_routes.json` (`{"version":1,"include":["/*"],"exclude":[]}`). (3) `CF_BRANCH=main python3 -u scripts/cf-pages-chunked-deploy.py` (chunked deployer — wrangler EPIPEs on the 154MB export; the deployer ships `_worker.js`/`_routes.json` as deployment FORM FIELDS, never as static assets, or Functions silently don't run). `CF_SKIP_UPLOAD=1` re-creates a deployment in ~6s right after an upload run. Verify Functions after every deploy: `/api/whatsapp/webhook?hub.mode=subscribe…` must return 403 (404/405 = worker missing → REDEPLOY). BATCH deploys (full upload ≈ 45-65 min); don't run parallel with other fleet sessions' chunked deploys (uplink contention kills batches).
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
