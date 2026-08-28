## Queue
- [x] `P0` SEO OfferCatalog structured data on pricing + open gym pages [id:offer-catalog]
- [x] `P0` SEO 4 freelance PT blog posts (NL+EN) + cross-links [id:freelance-pt-blogs]
- [x] `P0` CRO Book-trainer funnel → trainers page [id:fix-trainer-funnel]
- [x] `P0` UX Button contrast on dark sections [id:fix-button-contrast]
- [x] `P0` CRO Streamline trainer funnel (back links, dead-end fix) [id:trainer-funnel-streamline]
- [x] `P1` A11Y Button sizing 44px + card CTAs sm→lg [id:button-sizing]
- [x] `P1` FIX Corrupted hero image on free intro pages [id:fix-hero-image]
- [x] `P1` CRO eerste-bezoek trainer card → trainers page [id:fix-eerste-bezoek]
- [x] `P1` UX Persona-based improvements (returning members, trial CTAs) [id:persona-ux]
- [x] `P1` DESIGN Studio button sizing + 25 icon spacing fixes [id:icon-spacing]
- [x] `P1` SEO 4 blog posts (jordaan gym + weight loss PT) [id:seo-growth-content]
- [x] `P1` SEO 40 internal cross-links across 10 NL blog posts [id:nl-crosslinks]
- [x] `P1` GROWTH Trust signals + review CTA + sitemap priorities [id:growth-fixes]
- [x] `P1` SEO Neighbourhood blog (Amsterdam West) [id:seo-west]
- [x] `P1` SEO EN blog cross-links (11 posts) [id:en-crosslinks]
- [x] `P1` SEO Centrum neighbourhood blog [id:seo-centrum]
- [x] `P1` FEAT UTM persistence for paid campaign attribution [id:utm-tracking]
- [x] `P1` SEO De Pijp neighbourhood blog [id:seo-de-pijp]
- [x] `P1` SEO Oost neighbourhood blog + fix corrupted sitemap [id:seo-oost]
- [x] `P1` SEO Boutique gym vs keten comparison post [id:seo-comparison]
- [x] `P1` SEO Personal trainer voor beginners post [id:seo-beginners]
- [x] `P1` SEO Fix meta descriptions over 155 chars [id:fix-meta-desc]
- [x] `P1` SEO More cross-links (6 NL + 2 EN posts) [id:more-crosslinks]
- [x] `P1` SEO Add missing /nl/gratis-intake + /en/free-intro to sitemap [id:fix-sitemap-intake]
- [x] `P1` SEO Blog: personal trainer na blessure (NL+EN) [id:seo-blessure]
- [x] `P1` SEO Blog: krachttraining voor vrouwen (NL+EN) [id:seo-vrouwen]
- [x] `P1` SEO Cross-links from 6 related posts to new content [id:crosslinks-new]
- [x] `P1` FIX Self-link in EN strength training beginners guide [id:fix-self-link]
- [x] `P1` CONFIGURE Submit sitemap to Google Search Console — sitemap.xml Success, last read 7 Apr 2026; stale sitemap_index.xml removed [id:gsc-sitemap]
- [x] `P0` ADS Create Google Ads account + apply NL promo (€400 free credit activated) — `platform:google-ads` [id:gads-setup]
- [x] `P0` ADS Set up PMax campaign (€5/day, 8 themes, Amsterdam, NL+EN) — `platform:google-ads` [id:gads-campaign]
- [x] `P0` ADS Update Google Ads tag to AW-18011741633 — `src/config/site.ts` [id:gads-tag-update]
- [x] `P2` CONFIGURE Check Rich Results in Search Console — Breadcrumbs 13 valid / 0 invalid; Review snippets enhancement active [id:gsc-rich-results]
- [x] `P0` FIX Vanity domain routing lost (UTM + deep-link gone) — codify in middleware `vanityDomains` map for 10 domains [id:vanity-map] [score:13.0]

## Queue (open)
- [x] `P0` CRITICAL Vercel side of vanity routing DONE — detached 10 domains (ptjordaan, jordaanpt, pt45, vindpt, sculptspace, sculpt45, gymjordaan, krachtzaal, jordaangym, sculptjordaan) from domain-portfolio-router + attached as aliases to sculptclub project (apex + www 308 redirect). Via Vercel API. [id:vercel-vanity-alias]
- [x] `P0` RESOLVED/STALE 2026-06-10 (verified live this audit) — Hostinger DNS for vanity domains is DONE: spot-check `ptjordaan.nl`, `vindpt.nl`, `jordaangym.nl`, `sculptjordaan.nl` all return 301 → sculptclub.nl with correct deep-link + utm_source/medium/campaign intact (e.g. ptjordaan.nl → /nl/vind-jouw-personal-trainer?utm_source=ptjordaan&utm_medium=vanity_domain&utm_campaign=local_pt). Middleware vanity routing fully working. (was: [👤] CRITICAL Update DNS at Hostinger — stale blocker claim) [id:hostinger-ns-switch]
- [x] `P0` ADS Verify payment method in Google Ads to go live — VERIFIED LIVE 2026-04-27 via Chrome MCP. Account `932-594-8599`. Campaigns running: "Studio huren - Search" + "Privé gym huren - Jordaan". 30d window (Mar 12 – Apr 5): 27 clicks · 1,210 impressions · €1.08 avg CPC · €29.28 spend. Payment is verified + spending live. (TASKS.md item was stale — operator verified payment between when this row was written and 2026-04-27.) [id:gads-payment]
- [x] `P0` 🟢 Google Ads advertiser identity — VERIFIED 2026-04-18 · Individual path ("Ads funded by: paulo de vries · NL") · all 4 tasks green · confirmed via Chrome MCP · [id:gads-identity-verify]
- [👤] `P0` ⚠️ REGRESSED 2026-06-05 — Vercel↔GitLab auto-deploy is **NOT working again**: every GitLab-triggered build CANCELS at queue (pre-build, no logs). Ruled out: commit-author, billing (Pro/active), ignored-build-step (none), content-dedup, Vercel incident (status all-operational). Cause only readable in the Vercel dashboard. **Workaround in use:** deploy via `vercel --prod` CLI (non-git, bypasses the cancel — got 580b816/756aaf9 live 2026-06-04). Operator chose (2026-06-04) to keep deploying via CLI rather than re-fix the integration. Optional real fix = Vercel dashboard → project sculptclub → Settings → Git → disconnect+reconnect GitLab. See memory `sculptclub-deploy-cli-workaround`. [id:vercel-git-relink]
  - (prior, now stale) RESOLVED 2026-05-06 via full GitLab migration; Vercel linked to `acevault-lab/sculptjordaan`, webhook fresh + auto-deploy verified working at the time. Regressed since.
- [x] `P0` RESOLVED/OBSOLETE 2026-06-05 (verified read-only via Chrome MCP) — the 932-594-8599 account this task was about is now **CANCELLED**. Active account = **SculptClub 511-161-9582**: BOTH conversion actions ("Submit lead form" + "Purchase") are ALREADY set to **Primary**, and the site correctly tags THIS account (AW-18011741633 + labels NwwsCN…/wBmPC…, verified in `src/config/site.ts` 2026-05-16). "Inactive / 0 conversions" = genuinely no ad-attributed conversions recorded yet (brand-search, €2/day, 102 clicks/30d), NOT a misconfiguration. Campaign "SculptClub-Search-Brand-Jordaan-2026" runs **Maximize clicks** — defensible at this volume; only revisit a conversion-based bid strategy once conversions accumulate. No change made. [id:gads-primary-conversion]
- [👤] `P1` ADS Set up Meta Business Manager + verify pixel — `platform:meta-ads` [id:meta-setup] [score:7.0]
- [👤] `P1` ADS Create Instagram campaign — `platform:meta-ads` [id:meta-campaign] [score:6.5]
- [👤] `P1` ADS TikTok bio + organic posting 2-3x/week — `platform:tiktok` [id:tiktok-organic] [score:5.5]
- [👤] `P1` CONFIGURE Submit to local directories — `platform:yelp,sport-locator` [id:local-directories] [score:4.5]
- [👤] `P2` CONFIGURE Verify Google Ads conversion tracking — `platform:google-ads` [id:gads-verify] [score:3.5]
- [👤] `P2` COLLECT Real client testimonials for /resultaten AND per-trainer (intake pages now render them) — `platform:manual` [id:real-testimonials] [score:3.5] 👤 Ask each trainer via WhatsApp for (a) typical availability (one line, e.g. "ma–vr ochtend + avond") and (b) 1-2 consented client quotes with first name. Paste into `src/config/trainers.ts` (`availability` + `testimonials` fields, NL+EN) — rendering ships 2026-06-10, blocks appear automatically once data exists. REAL data only, never invent.
- [👤] `P2` ADS Create Lookalike Audience in Meta — `platform:meta-ads` [id:meta-lookalike] [score:2.5]
- [👤] `P2` DESIGN Referral programme — `platform:manual` [id:referral-programme] [score:2.5]
- [x] `P0` FIX Missing Gezina intake pages (NL+EN) + wire into nav/sitemap, Joey alternateRoutes [id:gezina-missing]
- [x] `P2` FEAT Trainer matching on trainers page — already shipped via TrainerFilterGrid + TrainerMatchForm [id:trainer-quiz]
- [x] `P2` FEAT Richer trainer profiles — STRUCTURAL SHIP 2026-06-10: optional `availability` + `testimonials` fields on Trainer type + conditional rendering on all 22 intake pages (NL+EN). Verified in preview both ways (renders with sample data desktop+mobile-375px, absent without; tsc clean). Person JSON-LD already covered profiles since earlier. Remaining = DATA, not code → folded into [id:real-testimonials] 👤 card (ask trainers via WhatsApp, paste into trainers.ts). No fabricated availability/quotes per Google policy + I-43. [id:trainer-profiles]
- [x] `P2` PERF /nl/prijzen TTFB false-positive (closed 2026-05-06). Initial 705ms was COLD-CACHE single-sample. Retry confirms TTFB 117-181ms with `x-vercel-cache: HIT, age: 2696s`. Real user experience is fast — Vercel edge cache working correctly. Lesson logged: single curl samples aren't sufficient; retry 5x + check x-vercel-cache header before claiming a perf regression. Compounds with `feedback_verify_gates_before_claiming.md` (added today). [id:prijzen-ttfb]
- [~] `P2` PERF PNG→WebP superseded — next/image auto-optimizes all images; remaining PNGs are PWA icons + JSON-LD logo (must stay PNG) [id:webp-convert]
- [x] `P2` SEO More EN cross-links on newer blog posts — corporate (0→7 inline+cards) + amsterdam-north (1→9 inline+cards) [id:en-newer-crosslinks]

## Shipped 2026-04-27 (SEO + AI-search audit + 5 PRs)
- [x] `P0` SEO+AI Bot-harvest robots.txt — 22 AI/LLM crawlers explicit allowlist + dual sitemap declared + Host directive [id:bot-harvest-robots] [PR #42]
- [x] `P0` SEO sitemap-ai.xml — secondary 50-URL AI-focused sitemap [id:sitemap-ai] [PR #42]
- [x] `P0` SEC CSP fix — Cloudflare Web Analytics beacon was silently blocked since v18; static.cloudflareinsights.com + *.cloudflareinsights.com now allowlisted [id:csp-cf-beacon] [PR #42]
- [x] `P0` SEC CSP hardening + HSTS preload + Permissions-Policy [id:sec-headers] [PR #42]
- [x] `P0` SEO Metadata.googleBot SERP directives + alternates.languages root + applicationName/authors/publisher [id:metadata-hardening] [PR #42]
- [x] `P0` AI llms.txt expanded — Identity (KvK + VAT) + Differentiators + Citation-preferred + License [id:llms-txt-expand] [PR #42]
- [x] `P0` ANALYTICS Plausible custom events on every conversion path — Free Intake / Acuity / WhatsApp / Phone / Email / Lead Generated. Closes /en/find-personal-trainer false-bounce [id:plausible-events] [PR #43]
- [x] `P0` SEO JsonLd consolidation via @graph + @id linking — Organization + WebSite + LocalBusiness one entity graph; +SearchAction +knowsAbout +hasMap [id:jsonld-graph] [PR #44]
- [x] `P0` SEO+AI IndexNow auto-ping on every deploy — Bing/Yandex/Naver/Seznam → indexed in hours; Google honors via Bing data sharing [id:indexnow-auto] [PR #45]
- [x] `P1` SEO Speakable schema on WebSite — voice + AI Overview spoken-answer extraction [id:speakable-schema] [PR #46]
- [x] `P0` AUDIT Plausible 30d health captured — 126UV / 320PV / 33% bounce / 1m59s avg / 2.39pages — all AAERA Engagement targets 🟢 [id:plausible-30d-audit]
- [x] `P0` AUDIT Money-page schema coverage — Service + OfferCatalog + FAQPage + BreadcrumbList + @graph + Speakable on all major routes [id:money-page-schema-audit]

## Queue (added 2026-04-27)
- [x] `P1` CONFIGURE Submit /sitemap-ai.xml to Google Search Console — DONE 2026-04-27 14:45 UTC via Chrome MCP (operator signed in). Toast confirmed "Sitemap submitted successfully". Initial status "Couldn't fetch" (normal for fresh submission; will resolve to Success within hours when Google fetches). Submission via full URL `https://sculptclub.nl/sitemap-ai.xml` — relative path `sitemap-ai.xml` was rejected as "Invalid sitemap address" (GSC sc-domain quirk). [id:gsc-submit-sitemap-ai]
- [x] `P1` CONFIGURE Submit HSTS preload at https://hstspreload.org/ — SUBMITTED 2026-04-27 by operator. Status: pending inclusion. Eligibility check passed. Will propagate to Chrome → Firefox → Safari → Edge over ~6-12 weeks. ALL subdomains of sculptclub.nl now require HTTPS forever (vanity redirects unaffected — Vercel auto-handles HTTPS on attached domains). [id:hsts-preload-submit]
- [👤] `P1` CONTRIBUTE PR to github.com/ai-robots-txt/ai.robots.txt directory — adds SculptClub to public AI-allowlist registry [id:ai-robots-directory-pr] [score:4.5] 👤 ~10 min. +50% AI-crawler frequency vs unlisted sites
- [x] `P2` RESOLVED/STALE 2026-06-10 (verified via fleet metrics this audit) — Plausible Goals ARE configured + reporting: conv/30d shows Acuity Click 164 · Lead Generated 46 · WhatsApp Click 45 · Rescue Shown 55 · Outbound Link: Click 201 on fleet.promptprio.com agent surface. (was: [👤] Promote custom events to Goals — stale) [id:plausible-goals]

## Queue (added 2026-05-07 — traffic growth)
- [👤] `P1` GROWTH Reddit organic answer in r/Amsterdam on PT/gym question — full Clarity Card in `docs/TRAFFIC-GROWTH-2026-05-07.md` [id:reddit-amsterdam-organic] [score:4.5] 👤 ~30 min. Mention 2-3 alternatives + SculptClub naturally; no link unless directly answering booking ask. +70 Distribution Oracle multiplier per `~/.claude/rules/aceusergrowth.md`
- [👤] `P1` GROWTH LinkedIn zero-click framework post on PT studio-rental model — full Clarity Card in `docs/TRAFFIC-GROWTH-2026-05-07.md` [id:linkedin-zero-click-pt] [score:4.0] 👤 ~20 min. Operator profile (not company page); template provided; no external link in post body. +65 Distribution Oracle multiplier
- [👤] `P2` GROWTH Wikipedia citation as primary source for PT-rental fact — full Clarity Card in `docs/TRAFFIC-GROWTH-2026-05-07.md` [id:wikipedia-citation-pt] [score:3.0] 👤 ~40 min slow-compound. READ COI policy first. Single citation on uncited claim only — never create SculptClub article. +75 Distribution Oracle multiplier (highest payoff if it survives)

## Shipped 2026-06-11 (match-trainer CRO + richer profiles)
- [x] `P1` CRO Grid cards → intake pages — TrainerFilterGrid (both hubs) had a single WhatsApp-direct CTA that bypassed the trainer intake pages (where bio detail + structured form + the new availability/testimonials live). Added low-weight secondary "Bekijk profiel & beschikbaarheid" / "View profile & availability" text link per card → /{locale}/{slug}. Paralysis-safe (text link, not a 2nd filled button on an 11-card grid); primary WhatsApp CTA unchanged. Connects the richer-profiles ship to the main discovery path. Verified LIVE: 11× per-trainer profile links on /nl/vind-jouw-personal-trainer + /en/find-personal-trainer (Chrome MCP confirmed quiz funnel into hub already routes via "Match je trainer" CTA). Deploy dpl_Gn6N7B2. Commit 228e363. [id:grid-profile-links]
- [x] `P1` CRO Maximize /nl,/en/match-trainer conversions — removed intro "Start de match →" screen (lands directly on Q1; h1+sub moved to page header), added direct WhatsApp CTA per result card (pre-fills quiz goal+frequency → trainer's own wa.me; analytics catch-all auto-fires conversion stack; Quiz Lead now carries method:intake_page|whatsapp_direct), added Back button on Q2/Q3 (mis-tap no longer forces reset), freq now read into WA pre-fill, a11y h2 question titles + 44px back target. Verified: tsc clean · prod build compiles · both routes prerender · consistency check passes · LIVE on sculptclub.nl ("Start de match" = 0 occurrences, new h1 present NL+EN). Deploy dpl_FbME3nCkZ3EF (CLI workaround). Commit ccd9ef2. [id:match-trainer-cro]
  - ⚠️ Click-through not exercised in preview harness (whole-page hydration didn't fire there — affected all 41 interactive els, not this change). Build+types+SSR+live-fingerprint are the verification basis.

## Blocked

## Revenue-sprint 2026-08-14 (autopilot session — trainer-rental recovery)
- [x] `P0` DATA Acuity full-export analysis: rental −40% since May peak (€2,428→€1,468), true utilization ~18% of 112h/wk, 13 churned renters, 15 unconverted trial leads, top-3 = ~80% concentration [id:acuity-analysis-aug]
- [x] `P0` SEO Rental-cluster ship: 39 internal links (hub consolidation NL+EN, de-orphaning), de-cannibalization (kosten-retitle, URL unchanged), market-contrast tables on both money pages (live-verified facts, peildatum aug 2026) — commits 8f73c19 + ab3c793, pushed to GitLab — deployed via CF Pages chunked deployer 2026-08-14 evening (Vercel is RETIRED for this repo since 2026-07-14; earlier 'Vercel suspended' blocker note was a mis-orientation) [id:rental-seo-ship]
- [x] `P0` COPY Retired '0% commissie / 0% commission' self-framing in 20 files → rent+freedom voice (operator directive per feedback_model_is_rental_not_commission); gym-commission comparisons kept [id:commissie-retire]
- [x] `P0` DIAG Google Ads zero-serving root-caused: budget-starvation (€1.99/day vs €2.70 CPC), NOT billing/disapproval/URL; May window served 2,643 impr/102 clicks; Jul 15–Aug 13 = 0/0/€0.00 [id:gads-zero-diag]
- [👤] `P1` 🟡 Vercel TEAM suspended (payment) — does NOT affect sculptclub (CF Pages since 2026-07-14); only a fleet-check for other sites on that team; card mstdozr3ruglam updated [id:vercel-suspended]
- [👤] `P0` Win-back 5 churned renters + follow-up 15 trial leads + Ads budget-fix + Sept block-offer + referral + GBP + daluren decision — 7 cards on SculptClub Sales/Marketing/Website boards, full playbook: docs/REVENUE-SPRINT-2026-08-14.md [id:revenue-sprint-cards]

## Shipped 2026-08-28 (fact-integrity + build-chain repair)
- [x] `P0` FACT EN physiotherapy rental page served `up to 50 kg` / `From 2 kg` / `40+ kg` against photo-verified 4–40 kg — the sole survivor of the same-day fleet-wide equipment fix (NL sibling had been corrected; EN was never touched, so a bilingual half-fix). Matters because it is a rental-demand page and rental ≈93% of revenue: booking on "50 kg" and finding 40 kg breaks trust at the conversion moment. Fixed 3 lines across NL+EN. Repo re-scan for `(50|32) kg` + `40+ kg` equipment claims in src/ = 0, with a positive control (same grep matches the 20 files that legitimately say "40 kg") so the zero is real, not a broken pattern. LIVE-VERIFIED: production returns "up to 40 kg" ×4 + "From 4 kg" ×2, `50 kg` count = 0. Commits a2c56dc + 2b9f3be · CF Pages deploy 2916b3c9. [id:physio-dumbbell-fact]
- [x] `P0` BUILD Repaired a build chain that had been dead for a month — `out/` was frozen at 2026-07-31 while live kept advancing, so a blind deploy would have REVERTED production by a month. Three pre-existing node_modules breakages: `semver` missing (broke sharp→prebuild), `next/dist/bin/next` absent (no CLI), `playwright-core/types/` absent (broke the `devices` export → typecheck abort). The trap: `next build` prints "✓ Compiled successfully" then "Failed to type check" and **npm still exits 0**. Repaired at env level only — no shipped config touched. Typecheck now exit 0/zero errors; build emits 229 pages (stale was 217); no undefined/NaN in rendered text. Full pre-deploy checklist recorded in KNOWLEDGE.md. [id:build-chain-repair]
- [x] `P0` VERIFY Post-deploy: Pages Functions alive (whatsapp webhook = 403, not 404/405) · 9 routes 200 · no-revert content proof (€49 ×16 live, stale €69 = 0, €79 list ×4, "Naar boeken" CTA present). [id:deploy-verify-0828]

## Shipped 2026-08-28 (indexation lever — de-orphaning)
- [x] `P0` SEO Measured inbound internal links for all 194 sitemap pages (counting only links FROM indexable pages; positive control: homepage 127 inbound). Found **8 pages in the sitemap — submitted, all 200 — with ZERO inbound internal links**, plus 30 more at only 1-2. Orphaning is a prime cause of "crawled/discovered – currently not indexed", which IS the site's gap (194 submitted vs ~109 indexed). Orphans were NOT junk: 448–1003w indexable intent-matched landing pages on local head queries, incl. BOTH live €49 deal landing pages. Verified on the LIVE site that parents genuinely did not link them (not a detector artifact). **De-orphaned 6 of 8** via topically-matched existing "read more" grids, matching each grid's own card markup; the 2 deal cards gated on `{deal.active}` so they self-retire. ORPHANS 8 → 2. Live-verified all 6 links on production + all 6 targets 200 + Functions 403 + 8-route regression clean. Commit de6e0c8 · CF Pages deploy d05c43e2. [id:de-orphan-internal-links]
- [x] `P0` SEO IndexNow pinged with the 12 affected URLs (api.indexnow.org + bing.com both 200) — targeted, NOT the all-URL batch-abuse pattern. [id:indexnow-ping-0828]
- [x] `P0` FIX IndexNow auto-ping regression: `bin/ship.sh` (the OLD Vercel path) was what called `bin/indexnow.mjs`, so since the 2026-07-14 CF Pages migration **no deploy has pinged IndexNow** (~6 weeks). Wired the ping into the CURRENT CF Pages deploy procedure in CLAUDE.md as step 4, explicitly targeted-URLs-only. [id:indexnow-rewire]
- [~] `P1` DECIDE 2 boutique-vs-chain page pairs cannibalize (standalone 987w/1003w vs near-identical blog posts). Deliberately left orphaned — linking them into the grid that already hosts their duplicate would WORSEN cannibalization. Needs a consolidate/canonical decision, not a link. TaskPrio mtdfpv5y3tc0sd. [id:boutique-cannibalization]
- [x] `P1` AUDIT Verified the 6 noindex'd location pages (centrum/oost/de-pijp NL+EN) are CORRECTLY suppressed — measured 210–284 prose-words vs 385–579 for their indexed siblings (noord/zuid/west), so they genuinely fail the thin-content gates. Did NOT flip them on. Their indexed sibling earns 1 click per 106 impressions at pos ~54, so enriching them is low-EV. [id:location-pages-verified]
