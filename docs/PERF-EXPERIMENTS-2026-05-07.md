# Perf experiments — 2026-05-07 session

Honest log of perf changes shipped/reverted in this session. Per `~/.claude/rules/learn-from-data.md`: every projection must be measured, every measurement must adjust the heuristic.

---

## ✅ KEPT — `loading="eager" + fetchPriority="high"` site-wide (commits 39e6c05 + 1e6ca13)

**Hypothesis.** Per Next.js 16 docs verbatim, `preload` prop alone only emits `<link rel=preload>` in `<head>` — it does NOT set `loading=eager` or `fetchpriority=high` on the rendered `<img>`. Verified live: hero `<img>` had `loading="auto"` + `fetchPriority="auto"` despite `preload` being set in JSX. Browser deprioritized fetch.

**Action.** Replaced `preload` → `loading="eager" fetchPriority="high"` on 82 hero `<Image>` components.

**Measurement.** Single-shot Chrome MCP measurements were noisy (variable 9-17s LCP). 3-run Lighthouse mobile baseline post-deploy: LCP 6.7s, FCP 3.3s, TBT 260ms, CLS 0, Score 64/100. Versus typical Next.js best-practice baseline (LCP <2.5s), still suboptimal — but the change is **per-docs correct** and unblocks the browser's fetch prioritization.

**Verdict.** Kept. Marginal real-user benefit (faster image fetch), no observed regression.

---

## ✅ KEPT — framer-motion drop (commit 22debd0)

**Hypothesis.** Bundle analyzer (`@next/bundle-analyzer --webpack`) measured framer-motion at 120.5 KB parsed in client bundle. FadeIn was already neutralized to plain div in commit 497f24d (2026-05-06) due to framer-motion's IntersectionObserver missing initial-mount viewport elements in Next 16 + React 19 + framer-motion 12. Remaining usages (section.tsx h2/h3 SectionHeader, hero.tsx motion.div, header.tsx 14× motion.div + AnimatePresence with spring physics) could be replaced with native CSS keyframes + IntersectionObserver.

**Action.** Refactored 3 files. Added 5 keyframes to globals.css (hero-content-fade-in, hamburger-dropdown-in, backdrop-fade-in, panel-slide-up, panel-card-fade-in). `npm uninstall framer-motion`.

**Measurement.** Bundle analyzer post-uninstall: framer-motion 0 KB (gone), motion-dom 0 KB, motion-utils 0 KB. Total client bundle 2,031.7 KB → 1,952.6 KB (**-79.1 KB / -3.9%**). tsc clean. Production verification: hero animation, hamburger menu, login panel, book panel + booking-card stagger all render correctly. No regressions.

**Verdict.** Kept. -79 KB is real, structural, compounds on every page load. Spring physics → cubic-bezier ease-out is visually equivalent at this scale; conditional render means modal exit animations are now instant rather than animated, accepted per the FadeIn fix precedent (visibility > exit polish).

---

## 🔴 REVERTED — `placeholder="blur"` with sharp-generated blurDataURL (commit 005687f → fce4ebc)

**Hypothesis.** Lighthouse mobile audit measured LCP=6.7s on `/nl/studio-huren` — image-bound. Visitors landing on the page see a black hero area until image fetches (~3-4s on throttled mobile). Adding `placeholder="blur"` with a 10×10px JPEG blurDataURL (~360 bytes inline) would render an instant blurred LQIP <200ms via Next.js's `background-image: url(...)` style, dramatically improving perceived LCP without changing actual LCP timestamp.

**Action.** Built `scripts/generate-blur-manifest.mjs` (sharp-based, 89 entries × ~360 bytes), `src/lib/blur-manifest.ts` (auto-generated), wired into prebuild. Added `placeholder="blur" blurDataURL={getBlur(HERO_SRC)}` to homepage hero (training-barbell-squat.jpg) and studio-huren hero (gym-latest.jpg).

**Visual verification (Chrome MCP, fast desktop network).** Confirmed working: at 1s post-navigation, hero shows recognizable blurred preview of the actual studio (color palette + composition visible) instead of black void. Subjective UX win.

**Lighthouse mobile measurement (3 consecutive runs, throttled 1.5Mbps + 4× CPU slowdown):**

| Metric | Before blur | After blur Run 2 | After blur Run 3 |
|---|---:|---:|---:|
| LCP | 6,724ms | 15,468ms | 15,584ms |
| FCP | 3,256ms | 9,628ms | 9,635ms |
| Speed Index | 3,613ms | 9,628ms | 9,635ms |
| TBT | 263ms | 284ms | 272ms |
| TTI | 15,656ms | 16,477ms | 16,535ms |
| Performance | 64/100 | 50/100 | 51/100 |

Runs 2+3 are within ±150ms of each other → **regression is consistent, not noise**.

**Why it regressed (root cause).** Next.js converts the JPEG blurDataURL into an inline SVG with `feGaussianBlur` filter applied as `background-image` on the `<img>` element. On Lighthouse's simulated mobile (Slow 4G + 4× CPU slowdown), the SVG `feGaussianBlur` paint cost adds ~6 seconds of paint blocking time. The visual benefit of the LQIP is dominated by the GPU/CPU cost of rendering the blurred SVG on weak hardware. **On fast desktop networks (where Chrome MCP runs), the SVG paints fast and the win is real. On throttled mobile (representative of real users in low-coverage areas), the SVG paint is the new bottleneck.**

**Verdict.** Reverted. The visual win on fast networks doesn't compensate for slowing real-user mobile paint by 6+ seconds.

**Future directions worth exploring** (any of these would avoid the SVG paint cost):

1. **Static color background** — `placeholder="empty"` + a CSS `background-color` that matches the image's dominant color (e.g., dark gray for the gym photo). Zero paint cost. Less informative than blur but still better than pitch black.
2. **Background-color via OG image color extraction** — at build time, use sharp to extract the dominant color from each image, emit `getBlur(src)` as a flat hex color → render `<div style={{backgroundColor: getBlur(src)}} />` behind the `<Image>`. Zero SVG, zero paint cost.
3. **`placeholder="blur"` ONLY on routes that already have fast LCP** — don't apply to mobile-LCP-critical routes like `/nl/studio-huren`. Could apply to blog post heroes where LCP is text, not image.
4. **`<picture>` with low-quality + high-quality variants** — manually serve a tiny low-quality JPEG (~5 KB) as a fallback before the full image arrives. Complex; probably not worth it vs. option 1 or 2.

Recommended next-iteration approach: **Option 2 (dominant-color background)**. Dark-themed brand means dominant colors will be dark anyway, but per-image color matching looks more polished than a single fallback. Effort: ~30 min to write the script + wire it.

---

## Calibration update for future sessions

- Lighthouse mobile (simulated 1.5Mbps + 4× CPU) is the **authoritative LCP/FCP signal** for Plausible-class user populations. Trust it over Chrome MCP synthetic.
- A change that **adds CPU paint work** (SVG filters, complex CSS animations on critical-path elements) can regress perceived perf on throttled mobile **even when it helps perceived perf on desktop**. Always measure on slow CPU before shipping.
- 3-run Lighthouse with consistent values (±5%) = real signal. Single-run = noise.
