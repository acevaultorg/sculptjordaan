#!/usr/bin/env node
/**
 * qa-landing.mjs — render check for the one-screen /landing split page.
 *
 * Serves the static export (out/) locally, then for /landing and /en/landing
 * at 375x667, 390x844 and 1440x900 checks:
 *   - no vertical scroll: document.scrollingElement.scrollHeight <= innerHeight
 *   - no horizontal overflow: scrollWidth <= innerWidth
 *   - both main buttons fully inside the viewport, every link >= 44px tall
 *   - white-text contrast over the photos: re-renders with text hidden and
 *     reads the brightest background pixel behind each text box (worst case)
 *   - photos: which file + format each half loaded, bytes, fetchpriority/loading,
 *     and cumulative layout shift (must be 0)
 * and saves screenshots into $QA_DIR (default qa/landing-v2/; clean state = cookie choice made) and
 * one first-visit shot per viewport with the cookie banner showing.
 * Also copies the 375 + 390 clean shots into review/.
 *
 * Never touches a live URL. Usage: npm run build && node scripts/qa-landing.mjs
 */
import http from "node:http";
import { readFile, stat, mkdir, writeFile, copyFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { chromium } from "@playwright/test";

const OUT = "out";
const QA = process.env.QA_DIR || "qa/landing-v3"; // v1/v2 results stay in qa/landing/ and qa/landing-v2/
const REVIEW = "review";
// Owner's bar (2026-10-01): every text box at 7:1 or better, well above AA's 4.5:1.
const MIN_CONTRAST = 7;
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2", ".json": "application/json", ".txt": "text/plain", ".ico": "image/x-icon" };

async function resolveFile(urlPath) {
  const p = decodeURIComponent(urlPath.split("?")[0]);
  for (const c of [p, `${p}.html`, join(p, "index.html")]) {
    try {
      const f = join(OUT, c);
      if ((await stat(f)).isFile()) return f;
    } catch {}
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const f = await resolveFile(req.url === "/" ? "/index.html" : req.url);
  if (!f) { res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "content-type": TYPES[extname(f)] || "application/octet-stream" });
  res.end(await readFile(f));
});
await new Promise((r) => server.listen(4173, r));
const BASE = "http://localhost:4173";

const VIEWPORTS = [
  { w: 375, h: 667 },
  { w: 390, h: 844 },
  { w: 768, h: 1024 }, // tallest desktop-crop slot (portrait tablet)
  { w: 1440, h: 900 },
];
const PAGES = [
  { path: "/landing", slug: "nl" },
  { path: "/en/landing", slug: "en" },
];

function luminance([r, g, b]) {
  const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
await mkdir(QA, { recursive: true });
await mkdir(REVIEW, { recursive: true });
const results = [];
let failed = 0;

for (const pg of PAGES) {
  for (const vp of VIEWPORTS) {
    const mobile = vp.w < 768;
    const dpr = mobile ? 2 : vp.w === 768 ? 2 : 1;
    for (const state of ["clean", "first-visit"]) {
      const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: dpr, isMobile: mobile, hasTouch: mobile, locale: pg.slug === "nl" ? "nl-NL" : "en-GB" });
      if (state === "clean") await ctx.addCookies([{ name: "sc_consent", value: "essential", url: BASE }]);
      const page = await ctx.newPage();
      await page.addInitScript(() => {
        window.__cls = 0;
        new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true });
      });
      await page.goto(BASE + pg.path, { waitUntil: "networkidle" });
      await page.evaluate(async () => { await Promise.all([...document.images].map((i) => (i.complete ? null : i.decode().catch(() => null)))); });
      await page.waitForTimeout(1500); // cookie banner shows after 700ms
      const shot = `${QA}/${pg.slug}-${vp.w}x${vp.h}${state === "first-visit" ? "-cookie-banner" : ""}.png`;
      await page.screenshot({ path: shot });

      if (state === "first-visit") {
        const banner = await page.evaluate(() => {
          const d = document.querySelector('[role="dialog"]');
          const r = d?.getBoundingClientRect();
          const btns = [...document.querySelectorAll("main section a.rounded-full.bg-white")].map((a) => a.getBoundingClientRect());
          return r ? { bannerTop: Math.round(r.top), buttonsCovered: btns.filter((b) => b.bottom > r.top).length } : null;
        });
        results.push({ page: pg.path, viewport: `${vp.w}x${vp.h}`, state, screenshot: shot, banner });
        await ctx.close();
        continue;
      }

      const m = await page.evaluate(() => {
        const se = document.scrollingElement;
        const inView = (r) => r.top >= 0 && r.left >= 0 && r.bottom <= innerHeight && r.right <= innerWidth && r.width > 0;
        const ctas = [...document.querySelectorAll("main section a.rounded-full.bg-white")].map((a) => ({ text: a.textContent.trim(), rect: a.getBoundingClientRect().toJSON() }));
        const links = [...document.querySelectorAll("main a")].map((a) => ({ text: a.textContent.trim() || a.getAttribute("aria-label"), h: Math.round(a.getBoundingClientRect().height), w: Math.round(a.getBoundingClientRect().width), visible: inView(a.getBoundingClientRect()) }));
        const overlays = ["[role=dialog]"].map((s) => !!document.querySelector(s));
        return {
          scrollHeight: se.scrollHeight, innerHeight, scrollWidth: se.scrollWidth, innerWidth,
          ctas: ctas.map((c) => ({ text: c.text, visible: inView(c.rect), bottom: Math.round(c.rect.bottom) })),
          smallLinks: links.filter((l) => l.h < 44 || l.w < 44),
          hiddenLinks: links.filter((l) => !l.visible).map((l) => l.text),
          cookieBanner: overlays[0],
          cls: +window.__cls.toFixed(4),
          photos: [...document.querySelectorAll("main section picture img")].map((i) => {
            const url = i.currentSrc;
            const res = performance.getEntriesByType("resource").find((r) => r.name === url);
            return { file: url.split("/").pop(), bytes: res?.encodedBodySize ?? null, rendered: `${Math.round(i.getBoundingClientRect().width)}x${Math.round(i.getBoundingClientRect().height)}`, fetchpriority: i.getAttribute("fetchpriority"), loading: i.getAttribute("loading"), alt: i.alt };
          }),
          stickyBar: !!document.querySelector(".fixed.bottom-0.md\\:hidden"),
          whatsappBubble: !!document.querySelector('a[aria-label="Chat via WhatsApp"]'),
          // The contrast pass below assumes white text; prove it (a global h2 colour once overrode it).
          nonWhiteText: [...document.querySelectorAll("main section p, main section h2, main section ul a")].filter((el) => getComputedStyle(el).color.replace(/\s/g, "") !== "rgb(255,255,255)" && !getComputedStyle(el).color.startsWith("rgba(255, 255, 255")).map((el) => `${el.tagName}: ${getComputedStyle(el).color}`),
        };
      });

      // Contrast: hide text + buttons, screenshot, read brightest pixel behind each white text box.
      const boxes = await page.evaluate(() =>
        [...document.querySelectorAll("main section p, main section h2, main section ul a")].map((el) => ({ text: el.textContent.trim().slice(0, 40), r: el.getBoundingClientRect().toJSON() })),
      );
      await page.addStyleTag({ content: "main *{color:transparent!important;text-shadow:none!important} main section a{visibility:hidden!important}" });
      const buf = await page.screenshot({ type: "png" });
      const px = await page.evaluate(async ({ b64, boxes, dpr }) => {
        const img = new Image();
        img.src = "data:image/png;base64," + b64;
        await img.decode();
        const c = document.createElement("canvas");
        c.width = img.width; c.height = img.height;
        const g = c.getContext("2d");
        g.drawImage(img, 0, 0);
        return boxes.map(({ text, r }) => {
          const d = g.getImageData(Math.max(0, r.x * dpr), Math.max(0, r.y * dpr), Math.max(1, r.width * dpr), Math.max(1, r.height * dpr)).data;
          const lums = [];
          for (let i = 0; i < d.length; i += 4) lums.push([d[i], d[i + 1], d[i + 2]]);
          return { text, pixels: lums };
        });
      }, { b64: buf.toString("base64"), boxes, dpr });
      const contrast = px.map(({ text, pixels }) => {
        const L = pixels.map(luminance).sort((a, b) => a - b);
        const p99 = L[Math.floor(L.length * 0.99)] ?? 0; // ignore a stray 1% of pixels (anti-aliasing)
        return { text, worstRatio: +(1.05 / (p99 + 0.05)).toFixed(2) };
      });

      const ok =
        m.scrollHeight <= m.innerHeight &&
        m.scrollWidth <= m.innerWidth &&
        m.ctas.length === 2 && m.ctas.every((c) => c.visible) &&
        m.hiddenLinks.length === 0 && m.smallLinks.length === 0 && m.nonWhiteText.length === 0 &&
        m.cls === 0 && m.photos.length === 2 && m.photos.every((p) => p.file && p.alt) &&
        contrast.every((c) => c.worstRatio >= MIN_CONTRAST);
      if (!ok) failed++;
      results.push({ page: pg.path, viewport: `${vp.w}x${vp.h}`, state, ok, screenshot: shot, ...m, contrast });
      if (mobile) await copyFile(shot, `${REVIEW}/landing-${pg.slug}-${vp.w}.png`);
      await ctx.close();
    }
  }
}

await browser.close();
server.close();
await writeFile(`${QA}/results.json`, JSON.stringify(results, null, 2) + "\n");
for (const r of results) {
  if (r.state === "clean") {
    const minC = Math.min(...r.contrast.map((c) => c.worstRatio));
    console.log(`${r.ok ? "PASS" : "FAIL"} ${r.page} ${r.viewport} scroll ${r.scrollHeight}/${r.innerHeight} width ${r.scrollWidth}/${r.innerWidth} ctas ${r.ctas.map((c) => `${c.visible ? "in" : "OUT"}@${c.bottom}`).join(",")} small ${r.smallLinks.length} nonWhite ${r.nonWhiteText.length} minContrast ${minC} cls ${r.cls} bar ${r.stickyBar} wa ${r.whatsappBubble}`);
    for (const ph of r.photos) console.log(`     photo ${ph.file} ${ph.bytes == null ? "?" : (ph.bytes / 1024).toFixed(1) + " KB"} rendered ${ph.rendered} fetchpriority=${ph.fetchpriority} loading=${ph.loading}`);
  } else {
    console.log(`INFO ${r.page} ${r.viewport} first visit: cookie banner top ${r.banner?.bannerTop}, main buttons under it: ${r.banner?.buttonsCovered}`);
  }
}
process.exit(failed ? 1 : 0);
