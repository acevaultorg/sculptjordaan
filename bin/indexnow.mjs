#!/usr/bin/env node
// indexnow.mjs — push live URLs to IndexNow so Bing / Yandex / Naver / Seznam
// re-index immediately instead of waiting 3-14 days for a natural crawl.
// Google honors IndexNow signals via Bing data sharing as of 2025.
//
// Usage:
//   node bin/indexnow.mjs                  # pings all URLs from sitemap.xml
//   node bin/indexnow.mjs <url1> <url2>... # pings only the given URLs
//
// Run from bin/ship.sh after a successful deploy.

const HOST = "sculptclub.nl";
const KEY = "ae1c16d6e9e1321057ea5294a59c66e4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAPS = [
  `https://${HOST}/sitemap.xml`,
  `https://${HOST}/sitemap-ai.xml`,
];

async function urlsFromSitemap(sitemapUrl) {
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    console.error(`✗ ${sitemapUrl} → HTTP ${res.status}`);
    return [];
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return matches;
}

async function main() {
  const argUrls = process.argv.slice(2);

  let urls;
  if (argUrls.length > 0) {
    urls = argUrls;
    console.log(`→ IndexNow: ${urls.length} URL(s) from CLI args`);
  } else {
    const fromSitemaps = await Promise.all(SITEMAPS.map(urlsFromSitemap));
    urls = [...new Set(fromSitemaps.flat())];
    console.log(`→ IndexNow: ${urls.length} URL(s) from sitemaps`);
  }

  if (urls.length === 0) {
    console.error("✗ No URLs to submit. Aborting.");
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  // IndexNow is a shared network: a submission accepted by ANY participating
  // endpoint propagates to all members (Bing, Yandex, Naver, Seznam). So we
  // try endpoints in order and succeed on the first acceptance — a single
  // operator's outage doesn't fail the ship. (2026-05-29: Bing-operated
  // api.indexnow.org + bing.com/indexnow returned 502/503 for hours; Yandex
  // accepted the same payload with 202. Without this fallback the ship step
  // failed on a purely external outage.)
  //
  // Accept codes: 200 ok · 202 queued · 422 accepted-with-some-invalid-URLs.
  const ENDPOINTS = [
    "https://api.indexnow.org/indexnow", // neutral aggregator (Bing-operated)
    "https://www.bing.com/indexnow",     // Bing direct
    "https://yandex.com/indexnow",       // Yandex (independent operator)
  ];

  const failures = [];
  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (res.ok || res.status === 202 || res.status === 422) {
        console.log(`✓ IndexNow → HTTP ${res.status} via ${endpoint} (${urls.length} URLs)`);
        process.exit(0);
      }
      failures.push(`${endpoint} → HTTP ${res.status}`);
    } catch (err) {
      failures.push(`${endpoint} → ${err.message}`);
    }
  }

  console.error(`✗ IndexNow: all endpoints failed:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}

main().catch((err) => {
  console.error(`✗ IndexNow failed: ${err.message}`);
  process.exit(1);
});
