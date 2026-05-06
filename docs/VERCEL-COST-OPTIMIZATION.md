# Vercel cost optimization — what's costing money & what to do

**Project:** sculptclub.nl on Vercel Pro (`paulomdevries-6397's projects`)
**Recent reality check:** April 2026 invoice was **$156.77** (overage $136.77 over $20 base) — so Pro overages are real cost on this project.

This doc is the audit + fix roadmap.

---

## What costs money on Vercel Pro (in order)

| Resource | Pro included | Overage | Likely on this project |
|---|---|---|---|
| **Image Optimization** transformations | 5,000/mo | **$5 / 1k** | 🔴 HIGH — 102 `next/image` usages × 53 source images, every cache miss = paid transform |
| **Function GB-Hours** (Lambda) | 1,000/mo | $0.18/GB-hr | 🟡 MEDIUM — pages render via Lambda (no `output: 'export'`); 152 pages |
| **Function Invocations** | 1M/mo | $0.65/1M | 🟡 MEDIUM — same reason |
| **Bandwidth** (Fast Data Transfer) | 1 TB/mo | $0.40/GB | 🟡 MEDIUM — was 44MB of source images before today's compression |
| **Edge Function Invocations** | 1M/mo | $2/1M | 🟢 LOW — only `opengraph-image.tsx` + `twitter-image.tsx` are edge |
| **Speed Insights / Web Analytics** | included | per-event | 🟢 LOW unless heavy traffic |

---

## What was found in the audit (2026-05-06)

### 🔴 Cloudflare proxy is OFF for sculptclub.nl

```
$ curl -sI https://sculptclub.nl | grep -i "^server:"
server: Vercel
```

No `cf-ray` header → DNS-only mode (per `dns-flip-discipline.md`).

**Implications:**
- Every `_next/image` transform is paid by Vercel (CF Polish would absorb this for free)
- No CF edge cache (longer Vercel edge distance for European visitors)
- No CF WAF / bot-fight (irrelevant to cost but raises bandwidth)
- No CF AI Crawler control / Pay-Per-Crawl revenue

### 🟡 Source images were oversized (FIXED 2026-05-06)

53 source images, total **44 MB** before. Top files were 580-1012 KB JPEGs at q=95.

After running `npm run optimize:images`: **19 MB** total (-57%, 24.7 MB saved).

Each cache-miss transform now serves a smaller payload → bandwidth ↓.

### 🟢 Architecture is otherwise lean

- ✅ No `/api` routes (no Lambda function calls outside SSR)
- ✅ No middleware (no per-request edge invocations)
- ✅ No cron jobs
- ✅ Long cache headers on `/images/*` and `/fonts/*` (`max-age=31536000, immutable`)
- ✅ No `dynamic = 'force-dynamic'` on any page (so Next.js auto-statics where possible)

---

## Cost-cut options ranked by impact

### Option 1 — Re-enable Cloudflare proxy (orange cloud) 🔴 HIGHEST IMPACT

**Operator action only — DNS dashboard.**

In the Cloudflare DNS dashboard for sculptclub.nl, flip both DNS records (`@` apex + `www`) from grey-cloud (DNS-only) to **orange-cloud (Proxied)**.

**Then in CF dashboard → Speed → Optimization:**
- Enable **Polish** (lossy mode) — auto-converts images to WebP/AVIF at edge, free on Pro
- Enable **Mirage** (mobile image optimization)

**Why this is the biggest cut:**
- CF caches your `_next/image` transforms at the CF edge after the first request from a region. Subsequent visitors in that region serve from CF, not Vercel → fewer paid transforms.
- CF Polish converts to AVIF/WebP for free. Vercel charges for that conversion.
- Bandwidth from CF edge (free up to fair-use) beats Vercel bandwidth ($0.40/GB after 1TB).

**Risk:** None for this project — no auth flows or origin-IP-required SaaS endpoints. The dns-flip-discipline.md rule covers this.

**Estimated savings:** **~70-90% of image-optimization overage** + ~30% of bandwidth overage.

**Cost to operator:** 2 minutes in the dashboard.

---

### Option 2 — Drop Vercel Image Optimization, use plain `<img>` (or `unoptimized: true`) 🟡 MEDIUM IMPACT

If Option 1 isn't enough, set `images.unoptimized: true` in next.config.ts.

**What this does:**
- Eliminates ALL paid Vercel image transforms ($0 image-opt cost)
- `next/image` becomes a plain `<img>` with browser-native lazy loading
- No automatic AVIF/WebP conversion
- No automatic responsive `srcset`

**Tradeoffs:**
- Mobile users download the source image (now ~150KB avg after optimization, was ~600KB) instead of a phone-sized 50KB AVIF
- Solo-mobile-visit cost +100KB per image; less critical now that source images are pre-optimized
- LCP may regress slightly without responsive variants

**When to ship this:** if Option 1 + image pre-compression isn't enough, OR if you want zero transformation cost regardless.

**Estimated savings:** **100% of image-optimization overage** (~$5 per 1000 transforms over base).

**Cost to ship:** 1-line code change + verify Lighthouse doesn't regress.

---

### Option 3 — Disable Vercel Speed Insights + Web Analytics 🟢 SMALL IMPACT

The site already has Plausible + GA4 + Microsoft Clarity. Vercel Speed Insights and Web Analytics are redundant.

In Vercel dashboard → Project Settings → Speed Insights / Web Analytics → **Disable** both.

**Estimated savings:** small but $0 cost; 1 less beacon = faster page loads.

**Cost to operator:** 30 seconds.

---

### Option 4 — Static export + Cloudflare Workers redirects 🟢 STRUCTURAL (defer)

Most aggressive: set `output: 'export'` in next.config.ts → site builds as fully static HTML, no Lambda functions ever run.

**Why it's not a quick win:**
- The 180+ redirects in next.config.ts depend on the Vercel routing layer — static export ignores `redirects()` and `headers()`
- Would need to migrate all redirects + headers to a Cloudflare Worker in front

**When to do it:** if Vercel cost stays high after Options 1-3, OR if the operator wants to migrate fully off Vercel.

**Estimated savings:** ~100% of Function GB-Hours + Function Invocation overage. Image transforms still paid via CF (free with Polish on).

**Cost:** 4-6h migration work + operator approval to ship redirects to a Worker.

---

### Option 5 — Disable telemetry / unused features in Vercel project settings 🟢 SMALL IMPACT

Check Vercel dashboard for sculptclub project settings:

- **Functions → Region:** is it set to a single region? Multi-region adds cost.
- **Functions → Memory:** if any function defaults to 1 GB, cap to 256 MB (we have no API routes so this is moot)
- **Cron Jobs:** none configured ✅
- **Storage (KV / Blob / Postgres):** none used ✅
- **Speed Insights / Web Analytics:** see Option 3

---

## What was shipped today (2026-05-06)

| Action | Status | Saved |
|---|---|---|
| Pre-compressed 78 images (`npm run optimize:images`) | ✅ Live | 24.7 MB / -57% bandwidth on cache-miss |
| Added reusable `npm run optimize:images` script | ✅ Live | Re-runnable any time new images are added |
| Wrote this audit doc | ✅ Live | Reference for future cost decisions |

---

## What you should do next (ranked by ROI)

### 🔴 REQUIRED — Re-enable Cloudflare proxy on sculptclub.nl

**WHAT:** Flip DNS records `@` and `www` from grey-cloud (DNS-only) to orange-cloud (Proxied) in Cloudflare dashboard. Enable Polish (lossy) under Speed → Optimization.

**WHY:** Currently every image transform + every page request goes direct to Vercel, paying full Vercel rates. CF in front absorbs ~70-90% of these. Plus you get free WAF, Polish, AI bot control, and Pay-Per-Crawl eligibility.

**TIME:** ~2 minutes.

**HOW:**
1. Go to https://dash.cloudflare.com → sculptclub.nl → DNS
2. Click the `A` record for `@` → toggle Proxy status to **Proxied** → Save
3. Same for `www` (if it's a CNAME or A record)
4. Wait 30 seconds
5. Verify: `curl -sI https://sculptclub.nl | grep -iE "^(server|cf-ray):"` → should show `cf-ray: ...`
6. Go to Speed → Optimization → Polish: set to **Lossy**
7. Optional: Mirage → enable

**VERIFY:** After ~30 seconds, run:
```bash
curl -sI https://sculptclub.nl | grep -iE "^(server|cf-ray):"
# expected: server: cloudflare + cf-ray: <hash>-<region>
```

**IF STUCK:**
- DNS record not editable → it might not be on Cloudflare DNS at all. Check `dig +short sculptclub.nl NS`. If the nameservers don't end in `cloudflare.com`, the domain is on another DNS provider and this option doesn't apply (skip to Option 2).
- "DNS only" toggle disabled / locked → some Vercel-managed domains lock DNS records. Migrate DNS to your own CF zone first.

---

### 🟡 RECOMMENDED — Disable redundant Vercel telemetry

**WHAT:** Turn off Vercel Speed Insights + Web Analytics in project settings. The site already runs Plausible + GA4 + Microsoft Clarity.

**WHY:** Removing the redundant beacon shaves a tiny amount off function invocations + makes pages slightly faster. No information loss because Plausible covers the same metrics.

**TIME:** 30 seconds.

**HOW:**
1. Go to https://vercel.com/paulomdevries-6397s-projects/sculptclub/settings/analytics
2. Toggle off Speed Insights
3. Settings → Web Analytics → Disable

**VERIFY:**
```bash
curl -sL https://sculptclub.nl | grep -E "(speed-insights|/_vercel/insights)" | head
# expected: no matches
```

---

### 🟢 OPTIONAL — Ship `images.unoptimized: true` if Option 1 isn't enough

After 30 days post-Option-1, if Vercel image-opt overage is still > $30/mo, ship the `unoptimized` flag.

I'll wait for you to give the green light before changing this — it's a tradeoff (loses responsive variants) and depends on how much CF Polish handles after the proxy flip.

---

## How to monitor cost trends

Vercel dashboard → Settings → Usage. Track these monthly:

- **Image Optimization** (Source Images Transformed) — should drop ~80% after CF proxy re-enable
- **Fast Data Transfer (Bandwidth)** — should drop ~30% from compressed images alone, more after CF
- **Function GB-Hours** — should stay roughly flat (we didn't change function behavior)
- **Total $ on next bill** — target: under $50/mo

If after 30 days Image Optimization is still > $20/mo, escalate to Option 2 (`unoptimized: true`).

---

*Written 2026-05-06. Linked from CLAUDE.md as the canonical cost-cut plan.*
