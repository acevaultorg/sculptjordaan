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

## 2026-05-06 — sitemap real per-route lastmod via committed git-mtime map
CHOSE: pre-generate `src/sitemap-lastmod.json` locally + commit to repo + skip regeneration in CI (VERCEL=1 / CI=1) · WHY: live verification before fix showed 146 URLs with only 4 unique lastmods within a 12ms build-time window — Google/Bing's documented uniform-now anti-pattern. Initial fix (read fs.statSync at build time) didn't survive Vercel's clone-time mtime reset. Second fix (git fetch --deepen=500) silently no-op'd on Vercel build container even though my prebuild logged "deepening shallow git clone" — production stayed at 3 distinct dates vs 7 local. Third pivot solved it: commit the JSON map. Live now shows 9 distinct per-file commit times spanning Apr 1 → May 5 — real freshness signal Google can act on. · TRADE-OFF: operator must `npm run prebuild` before pushing significant content edits to keep the map fresh. Acceptable — the previous state (uniform-now) was actively harmful for SEO; even slightly-stale per-file mtimes are dramatically better. · COMMITS: 4f9231e (initial fs-mtime fix) → 58ce360 (deepen attempt, ineffective on Vercel) → 37b66f5 (commit-the-map, 9 distinct lastmods on production). · VERIFIED LIVE: `curl https://sculptclub.nl/sitemap.xml | grep lastmod | sort -u | wc -l` returns 9.
---

## 2026-05-06 — verify-before-claiming-blocked discipline
CHOSE: every "operator-action required" / "blocking" claim in session reports MUST run a 30-second in-session verification before being repeated · WHY: this session inherited 3 "🔴 STILL OPERATOR-ACTION" claims from prior session, ALL three turned out to be already-resolved-stale-narrative: (a) "git remote not configured" → was configured at acevaultorg/sculptjordaan, (b) "operator must run vercel deploy --prod" → production was already at local main HEAD via Layer 7 auto-deploy, (c) "sculptclub has no .claude/state/" → had 10 substantive state files. Cost of inheriting unverified claims geometrically across versions: ~30 min of session time + erroneous Clarity Card emissions to operator. · COMPOUNDS WITH: brain v19.40 CSIL #28 (Operator-Gate Verification) + `rules/version-identity-sync.md` "verify before claiming" + `rules/deploy-truth.md` fingerprint-check pattern. · MEMORY: `feedback_verify_gates_before_claiming.md` codifies the verification-map (git remote → `git remote -v`, deploy → `curl /v6/deployments`, state → `ls .claude/state/`, etc.).
---
