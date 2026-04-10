# Decisions

## 2026-03-30 00:01 — Pre-session stash
CHOSE: stashed 1 change (.claude/launch.json) · WHY: clean baseline · STASH: stash@{0}
---

## 2026-03-30 14:58 — Hero CTA reorder + tracking
CHOSE: Swap Studio Huren from position 3→2, add GA4 hero_cta_click event · WHY: Studio rental is #1 money maker (user directive), zero hero click tracking existed · LOGGED 🟢: @designer suggested visual differentiation for priority CTA (e.g. elevated bg-white/15 border-white/40) — deferred as user only asked for reorder. @strategist suggested trust strip reinforcement — deferred: "Eerste intake gratis" already covers free entry, adding studio-specific trust may dilute. @designer flagged text-white/50 trust line contrast — worth verifying on actual rendered page.
---

## 2026-03-30 — Session 3: blog routes + cleanup
CHOSE: Add 4 missing blog alternate route mappings + remove unused acuityPackages import from pricing pages · WHY: language switcher broken on 4 newest blog posts, dead import adds noise · SPECIALIST REVIEW: subagents hit rate limit, self-qualified — changes are pure config data + dead import removal, AUTO confidence.
---

## 2026-04-01 — Session 4: email drift + growth
CHOSE: Replace all 13 info@sculptclub.nl → contact@sculptclub.nl across 8 legal/policy files · WHY: site config defines contact@ as canonical; info@ was never the official address · SAME COMMIT: fixed iDEAL as standalone in NL privacy policy → "Stripe + Apple Pay (iDEAL)"

## 2026-04-01 — Session 4 (cont): Google Ads + SEO growth
CHOSE: (1) Add free_intake_click GA4 event that fires specifically when Acuity link clicked from gratis-intake/free-intro pages · WHY: existing conversion tracked ALL Acuity clicks equally; Google Ads needs free-intake signal for bid optimization · (2) Add NL+EN blog posts targeting "gratis intake personal trainer amsterdam" / "free intro personal trainer amsterdam" · WHY: high-intent organic query with zero content targeting it; fastest organic path to more free intro bookings · (3) Smarter Meta Pixel routing: Lead for intake clicks, InitiateCheckout for paid booking clicks · WHY: aligns pixel events with actual funnel stage.

## 2026-04-01 — fix-intake-form-submit
CHOSE: Fix handleSubmit in trainer-intake.tsx to build WhatsApp URL from form data + redirect, instead of silently swallowing the submission · WHY: Form was collecting name/phone/message but doing nothing with it — all leads were silently lost. Refactored trainerWhatsapp to split base URL (`waBase`) from query string to avoid double-encoding. Also added 6 missing blog URLs to sitemap.ts (voedingscoach, fysiotherapeut, gratis-intake NL + EN equivalents).

## 2026-04-10 — ACEO session: vanity domain routing in code
CHOSE: Move ALL 10 vanity domain routing from Vercel dashboard "Redirect to URL" into the SculptClub Next.js middleware as a `vanityDomains` map · WHY: Health sweep discovered that ALL vanity domains (ptjordaan.nl, jordaanpt.nl, pt45.nl, vindpt.nl, sculptspace.nl, sculpt45.com, gymjordaan.nl, krachtzaal.nl, jordaangym.nl, sculptjordaan.nl) had been reset to bare `https://sculptclub.nl` destinations — losing deep-link paths AND UTM attribution AND sending Dutch-intent visitors to the English geo-redirected homepage. This was the single biggest revenue leak in the cluster. The middleware approach is resilient to accidental dashboard edits because config lives in git. REQUIRES: operator must change each domain's Vercel configuration from "Redirect" to alias (see HANDOFF.md step 1) — until then the code change has no effect because Vercel's redirect fires before middleware runs. Also preserved the existing /en→/nl host-aware behavior for jordaangym.nl (Dutch domain → Dutch homepage, not /en). Each domain injects proper utm_source/medium/campaign tags.

## 2026-04-10 — ACEO session: continuous health monitoring
CHOSE: Create `check-fleet-health.sh` in VAULT04 root + scheduled daily Claude task at 08:38 local time + HANDOFF.md batched human action guide · WHY: Operator asked "where the problems are" — needed a single-file morning dashboard (HEALTH.md) that shows vanity domain HTTP status + SculptClub funnel URLs + project git state + pending [👤] actions + deep-links to all revenue dashboards. Script runs in ~5 seconds from terminal; scheduled task auto-runs every morning; HANDOFF.md consolidates all 14 pending human actions into priority-ranked steps. This gives the operator a daily ops cockpit across all 13 domains without needing to remember which project has which pending work.
