ORIENT: SculptClub is a bilingual (NL/EN) personal training studio website + trainer acquisition platform for Amsterdam Jordaan. State: main branch, 2 clean commits ahead of last session, Vercel auto-deploy active. Goal: maximize bookings + trainer acquisition.

## Session Handoff
Mode: sovereign auto (v19.33 → v19.34 mid-session)
Objective: SEO + AI-search optimization audit per operator directive — "be sure everything is perfect when it comes to seo and ai search machine optimisation … check for error … check for optimisation"
Progress (2026-04-27): 5 PRs shipped + merged + deployed + verified live:
  PR #42 — bot-harvest robots.txt (22 AI crawlers) + sitemap-ai.xml + CSP fix (Cloudflare beacon was silently blocked since v18) + CSP hardening + HSTS preload + Permissions-Policy + googleBot SERP directives + metadata.alternates root + llms.txt expanded (Identity / Differentiators / Citation-preferred / License)
  PR #43 — Plausible custom events (Free Intake / Acuity / WhatsApp / Phone / Email / Lead Generated). Closes /en/find-personal-trainer false-bounce — was 100% bounce because outbound clicks counted as zero-pageview sessions.
  PR #44 — JsonLd consolidation via @graph + @id linking. One Organization + WebSite + LocalBusiness/HealthClub/SportsActivityLocation entity graph instead of two duplicate scripts. +SearchAction +knowsAbout +hasMap.
  PR #45 — IndexNow auto-ping on every deploy. Key: ae1c16d6e9e1321057ea5294a59c66e4. bin/indexnow.mjs + bin/ship.sh integration. npm run indexnow.
  PR #46 — Speakable schema on WebSite (voice + AI Overview spoken-answer extraction).
  + State files updated (KNOWLEDGE.md ## SEO + AI-search infrastructure section + TASKS.md shipped/queue update).
Plausible 30d health: 126 UV / 320 PV / 33% bounce / 1m59s avg / 2.39 pages-per-session. All AAERA Engagement targets 🟢. Top sources: Direct 66 (19% bounce, 2m39s — high quality) > Google 40 > Instagram 5 > Brave 2 > vanity 2 each.
GSC + Google Ads dashboards: probe blocked at sign-in. Operator's Chrome session signed in as contact@acevault.org but those services live under paulomdevries@gmail.com (per USER-KNOWLEDGE.md). Per security rules brain cannot enter passwords — operator-only sign-in.
Next actions: (a) operator: Hostinger DNS [👤 P0] + Vercel webhook re-link [👤 P0] + GSC sign-in to submit sitemap-ai.xml [👤 P1] + Google Ads payment + conversion verify [👤 P1] + HSTS preload submission [👤 P1] + ai.robots.txt directory PR [👤 P1] + Plausible Goals promotion [👤 P2]. (b) brain: only sitemap.ts real-lastModified polish remains, low priority.
Open questions: none.
Momentum: 5 PRs shipped this session — all merged, deployed, verified live via Chrome MCP DOM checks + curl. Schema graph confirmed on every page (4 entities). All trackers loaded (plausible_fn / gtag_fn / fbq_fn / cf_beacon all true). 14 "failed resources" identified as benign adblocker artifacts on operator's own Chrome only. Production users see all trackers fire correctly. Comprehensive bot-harvest + LLM-citation + voice-search + structured-data + Plausible-attribution all green.
<!-- handoff: 2026-04-27 SEO+AI audit -->
<!-- prior handoff: 2026-04-16 Loop 6 v17.2 craftsman's balance -->

### Prior session handoff (2026-04-16) — preserved for chain context
Loops 4-6 (2026-04-15 → 2026-04-16) — shipped 8 commits across v17, v17.1, v17.2:
  Loop 4 (v17.0): EN/NL cross-links [5b93ad9, ea136b9], Vercel vanity migration API [4a9351c], Next.js 16 priority→preload 70 files [1917528].
  Loop 5 (v17.1 sovereign auto): Pricing hierarchy + math NL+EN [3ca9242], free-intro 45min consistency [f4db71b], Pro pack 20% site-wide [8e36c33], Vercel webhook-dormant docs + P0 task [c8055c5].
  Loop 6 (v17.2 craftsman's balance): Pricing hierarchy unification on 4 sibling pages (boek-studio, studio-huren NL+EN) [233208a].
  CRITICAL discovery: Vercel auto-deploy webhook dormant since 2026-04-13 fleet-wide — manual deploy-hook curl is the standard ship path until re-linked.
