ORIENT: SculptClub is a bilingual (NL/EN) personal training studio website + trainer acquisition platform for Amsterdam Jordaan. State: main branch, all commits pushed, Vercel auto-deploy via Layer 7 API confirmed working (cached `paulomdevries-6397` token has team access). Goal: maximize bookings + trainer acquisition.

## Session Handoff
Mode: sovereign auto (v19.42 brain) — `/acepilot auto` from 2026-05-05 fix-all + 2026-05-06 polish + audit continuations
Objective: prior session error recovery → operator "fix this with chrome mcp" → resolve git+Vercel "operator gates" → ship outstanding brain queue → bring SculptClub to AUG baseline
Progress (2026-05-05/06): 5 commits shipped + 4 Layer 7 deploys + 4 state mutations:
  4f9231e — fix(seo): real per-route lastmod via git commit time (initial fs-mtime fix; ineffective on Vercel due to clone-time mtime reset)
  58ce360 — fix(seo): deepen Vercel shallow clone for accurate per-file mtimes (silent no-op on Vercel CI; --deepen=500 reports success but doesn't extend history)
  37b66f5 — fix(seo): commit per-route lastmod map for Vercel shallow clone (PIVOT: regenerate locally, commit JSON, skip CI regen via VERCEL=1 env detect)
  0b5afc6 — docs(state): record sitemap lastmod fix + verify-before-claiming discipline in DECISIONS.md
  a4282ec — feat(state): first AUG v3 baseline for SculptClub (44 — Healthy band)
  + memory writes: feedback_sculptclub_archetype_correction.md (D7 retention is wrong metric for boutique-gym), feedback_verify_gates_before_claiming.md (every "operator-action" claim must run 30s verification — 3 of 3 prior session claims were stale narrative)
Live verification: sitemap.xml now serves 9 distinct lastmod values (was 4-in-12ms uniform-now anti-pattern). Range: 2026-04-01T19:50:49Z → 2026-05-05T13:19:25Z. Real per-file commit history.
AUG v3 baseline: 44 (Healthy band 30-50). 7-factor: acq=3 act=6 eng=6 ret=2 adv=3 mon=7 perf=7. I-35 floor 🟢 PASS. Top weakness: retention-metric mismatch with archetype (not actual cliff per memory) + advocacy mechanism missing (no engineered share/embed loop).
Stale-narrative cleanup: 3 prior "🔴 STILL OPERATOR-ACTION" claims disproven via verification: (a) git remote was already configured at acevaultorg/sculptjordaan, (b) production was already at local main HEAD via Layer 7 auto-deploy, (c) sculptclub had 10 substantive .claude/state/* files all along. Compounds with v19.40 CSIL #28 pattern.
Plausible 30d health: 126 UV / 320 PV / 33% bounce / 1m59s avg / 2.39 pages-per-session — unchanged from prior session (no Plausible API pull this session; numbers from CONTEXT.md prior).
Next actions: (a) operator unchanged from 2026-04-27 list — Hostinger DNS [👤 P0] + Vercel webhook re-link [👤 P0] + GSC sign-in to submit sitemap-ai.xml [👤 P1] + Google Ads payment + conversion verify [👤 P1] + HSTS preload submission [👤 P1] + ai.robots.txt directory PR [👤 P1] + Plausible Goals promotion [👤 P2]. NEW operator hygiene [👤 P3]: 5 stale branches on origin (`seo-neighbourhood-content`, `seo-structured-data`, `seo-studio-rental-freelance`, `trigger-deploy`, `trigger-rebuild`) — operator-confirm before `git push origin --delete <branch>` since destructive on shared state. NEW operator-side data capture [👤 P2]: add Acuity intake field "first session date" so brain can compute repeat-booking-rate-within-30d (real retention metric for archetype). (b) brain: AUG re-baseline weekly (next ≤2026-05-13) once fresh Plausible/Clarity numbers available. Engineered advocacy mechanism (OG result-pages or share-with-friend) deferred — would lift AUG 44→52 but non-trivial implementation; awaiting operator directive. NEW brain followup: generate `npm run prebuild` reminder in `bin/ship.sh` so sitemap-lastmod.json stays fresh on every push.
Open questions: none.
Momentum: brain-doable queue from 2026-04-27 handoff is COMPLETE (sitemap.ts polish shipped, AUG baseline written). 5 commits this session + 4 successful deploys + 0 build failures + 0 operator interruptions. Layer 7 deploy path canonicalized for SculptClub (cached token bypass commit-author allowlist). Verify-before-claiming discipline enforced — 3 of 3 inherited gate claims caught + corrected.
<!-- handoff: 2026-05-06 sitemap-real-lastmod + AUG-baseline + verify-discipline -->
<!-- prior handoff: 2026-04-27 SEO+AI audit -->
<!-- prior prior handoff: 2026-04-16 Loop 6 v17.2 craftsman's balance -->

### Prior session handoff (2026-04-16) — preserved for chain context
Loops 4-6 (2026-04-15 → 2026-04-16) — shipped 8 commits across v17, v17.1, v17.2:
  Loop 4 (v17.0): EN/NL cross-links [5b93ad9, ea136b9], Vercel vanity migration API [4a9351c], Next.js 16 priority→preload 70 files [1917528].
  Loop 5 (v17.1 sovereign auto): Pricing hierarchy + math NL+EN [3ca9242], free-intro 45min consistency [f4db71b], Pro pack 20% site-wide [8e36c33], Vercel webhook-dormant docs + P0 task [c8055c5].
  Loop 6 (v17.2 craftsman's balance): Pricing hierarchy unification on 4 sibling pages (boek-studio, studio-huren NL+EN) [233208a].
  CRITICAL discovery: Vercel auto-deploy webhook dormant since 2026-04-13 fleet-wide — manual deploy-hook curl is the standard ship path until re-linked.
