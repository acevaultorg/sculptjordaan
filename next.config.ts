import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

// Build-time version stamp shown in the footer (operator 2026-07-04). Format
// `v` + HHMM + DDMMYY in Europe/Amsterdam local time, computed HERE (next.config
// runs once per build in Node) so it reflects the DEPLOY moment — not the
// visitor's clock. Amsterdam TZ is forced via Intl so it's correct regardless
// of the build machine's timezone. Exposed to the client bundle via the `env`
// config below → process.env.NEXT_PUBLIC_BUILD_VERSION.
const buildVersion = (() => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Amsterdam",
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).formatToParts(new Date());
  const g = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `v${g("hour")}${g("minute")}${g("day")}${g("month")}${g("year")}`;
})();

// ─────────────────────────────────────────────────────────────────────────
// Cloudflare Pages static export (migrated OFF Vercel 2026-07-07 — the Vercel
// account is being closed). What moved where, because `output: 'export'`
// cannot run these server features:
//   • redirects()          → public/_redirects  (253 rules, auto-generated)
//   • middleware.ts        → functions/_middleware.ts (host-based vanity/www/
//                            /review//start/wrong-locale — CF Pages Functions)
//   • api/* (POST routes)  → functions/api/*     (read Request → not exportable)
//   • next/image optimizer → images.unoptimized  (Cloudflare Image-Resizing
//                            loader is the perf follow-up; see MIGRATION task)
// sitemap-ai.xml/route.ts is a static GET → renders to a static file, kept as-is.
// ─────────────────────────────────────────────────────────────────────────
const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BUILD_VERSION: buildVersion,
  },
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer(nextConfig);
