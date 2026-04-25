# SculptClub — sculptclub.nl

Boutique personal training studio in Amsterdam Jordaan. Next.js app with bilingual (NL/EN) content.

## Business Facts (NEVER contradict these)
- **Name:** SculptClub (not Sculpt Jordaan, not sculptjordaan)
- **Address:** Egelantiersgracht 424, 1015 RR Amsterdam
- **Phone:** +31 6 83 17 89 34
- **Email:** contact@sculptclub.nl
- **Hours:** Daily 06:30–22:00
- **Founded:** 2025
- **Rating:** 5.0 stars on Google

## Pricing (ALWAYS use these exact numbers)
- **Personal Training:** from €45/session (trainers set own rates, 0% commission, first intake free)
- **Open Gym Instapplan:** 4 sessions, €29/4 weeks (€7.25/session)
- **Open Gym Populair:** 8 sessions, €49/4 weeks (€6.13/session)
- **Open Gym Intensief:** 12 sessions, €69/4 weeks (€5.75/session)
- **Open Gym Onbeperkt:** unlimited, €89/4 weeks
- **Studio Rental Half:** €12/60min, €17/90min
- **Studio Rental Full:** €17/60min, €24/90min
- **Packages:** Starter €89 (10% off), Routine €199 (15% off), Pro €349 (20% off), Volume €549 (23% off)

## Policies (ALWAYS use these)
- **Cancellation:** Always free. No time restriction. Never say "24 hours" or "12 hours".
- **Door code:** Sent via WhatsApp the night before. Never say "per e-mail" or "by email".
- **Payment:** CreditCard, Apple Pay, Google Pay. Studio rental also accepts invoice. iDEAL only via Apple Pay (don't list separately).
- **Contracts:** None. No membership required. Open Gym = 4-week cycles, cancel anytime.

## Trainers
- **Alex:** €69/60min, Strength/Calisthenics/Recovery, NL/EN/PT
- **Eva:** Rate on request, Dietitian, Strength/Nutrition, NL/EN
- **Hamish:** Rate on request, Physiotherapist BSc, Physiotherapy/Strength, NL/EN
- **Andrea:** €45/45min, Strength/Posture/Technique, NL/EN
- **Dara:** Rate on request, Personal Training/Small Group, NL/EN

## Tech Stack
- Next.js 16, React 19, TypeScript
- Bilingual: `/nl/...` (Dutch) and `/en/...` (English)
- Booking: Acuity Scheduling
- Analytics: GA4 (G-QYW5H4XTXW), Google Ads (AW-18011741633, conversion label `NwwsCNGZlp8cEMG71YxD`), Meta Pixel (4350118535216982), TikTok Pixel (D75710BC77UDBCCMHF60), Clarity (vx7zcg6zys)
- Source of truth: `src/config/site.ts` (analytics object). If you update an ID in code, update CLAUDE.md in the same commit.
- Tracking: FunnelPilot fp.js snippet
- Deploy: Vercel

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
- Dark theme only — intentional for brand (never add light mode)
- Color-clickability contract: if it's blue, it MUST be clickable
- Fonts: Syne (headings) + Instrument Sans (body)
- Primary brand color: #134DE1

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
- Never add light mode — dark theme only is intentional for brand
- Always create both NL and EN versions of any new page or blog post

@AGENTS.md
