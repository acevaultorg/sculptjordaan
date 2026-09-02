#!/usr/bin/env node
/**
 * check-vanity-domains.mjs — verify every configured vanity domain still redirects.
 *
 * WHY THIS EXISTS
 * KNOWLEDGE.md, 2026-08-31: "Vanity redirect domains rot silently — 5 of 10 were
 * down and nothing noticed." They fail WITHOUT touching sculptclub.nl, so no
 * alert fires, no page 404s, and the main site stays green. A prior session even
 * reported "all 5 vanity domains still 301-ing with correct UTMs" — that was
 * false when measured. The only thing that catches this is actually asking them.
 *
 * These are not decorative. The five working ones carried 99 sessions / 30d
 * (~16% of all site traffic, GA4 2026-09-02) and they are the channel that
 * offline/word-of-mouth arrives through. A dead one is a silent zero.
 *
 * WHY IT PARSES THE MIDDLEWARE INSTEAD OF LISTING DOMAINS
 * functions/_middleware.ts is the single source of truth. A hardcoded list here
 * would drift from it, and a monitor that checks a stale list is worse than no
 * monitor — it reports green about domains nobody serves any more.
 *
 * WARN-ONLY BY DEFAULT, and that is deliberate. Some domains are down for a
 * REASON (see KNOWN_DOWN). A check that goes red for an expected state trains
 * people to ignore it. It fails only on a NEW breakage, or with --strict.
 *
 * KNOWN LIMITATION — READ BEFORE TRUSTING A RESULT
 * This tests the redirect only. It does NOT prove the destination is healthy,
 * and it cannot see a domain that is missing from the map entirely (if someone
 * registers a vanity domain and never adds it here, this is blind to it).
 *
 * Usage:
 *   node scripts/check-vanity-domains.mjs            # warn-only
 *   node scripts/check-vanity-domains.mjs --strict   # non-zero on any failure
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MIDDLEWARE = join(__dirname, "..", "functions", "_middleware.ts");
const STRICT = process.argv.includes("--strict");
const TIMEOUT_MS = 12000;

/**
 * Domains that are down ON PURPOSE, or down for a cause already diagnosed and
 * recorded. Keeping them here is what stops this check from crying wolf.
 * A domain listed here that COMES BACK is reported too — that is also news.
 */
const KNOWN_DOWN = {
  "krachtzaal.nl":
    "DROPPED — operator decision (KNOWLEDGE.md 2026-08-31). SIDN whois: 'is free'. " +
    "Not registered. The map entry below it is stale; do not re-register on this check's account.",
  "vindpt.nl":
    "IN QUARANTINE — SIDN post-expiry grace window (measured 2026-09-02). Expired; " +
    "reclaimable for a limited period, then released. Three other domains " +
    "(ptjordaan/jordaanpt/pt45) already serve the same destination and all work.",
  "sculpt45.com":
    "NS NOT SWITCHED — registered + ACTIVE to 2027-07-31 at Hostinger, but delegated to " +
    "ns1/ns2.dns-expired.com serving a parking lander. CF zone + Pages custom domain are " +
    "ALREADY set up; the only gap is the nameserver change at Hostinger to " +
    "amanda/lochlan.ns.cloudflare.com. Operator-gated (registrar access).",
};

function parseVanityMap(src) {
  // Grab the object literal body of `const vanityDomains: Record<...> = { ... };`
  const start = src.indexOf("const vanityDomains");
  if (start === -1) throw new Error("could not find `const vanityDomains` in " + MIDDLEWARE);
  const open = src.indexOf("{", start);
  let depth = 0, end = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error("unbalanced braces in vanityDomains map");
  const body = src.slice(open + 1, end);

  const out = {};
  const row =
    /"([a-z0-9.-]+)"\s*:\s*\{\s*destPath:\s*"([^"]*)"\s*,\s*utmSource:\s*"([^"]*)"\s*,\s*utmCampaign:\s*"([^"]*)"/g;
  let m;
  while ((m = row.exec(body)) !== null) {
    out[m[1]] = { destPath: m[2], utmSource: m[3], utmCampaign: m[4] };
  }
  return out;
}

function expectedLocation(cfg) {
  return (
    `https://sculptclub.nl${cfg.destPath}` +
    `?utm_source=${cfg.utmSource}` +
    `&utm_medium=vanity_domain` +
    `&utm_campaign=${cfg.utmCampaign}`
  );
}

async function probe(host) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`https://${host}/`, {
      method: "HEAD",
      redirect: "manual",
      signal: ctl.signal,
    });
    return { ok: true, status: res.status, location: res.headers.get("location") || "" };
  } catch (err) {
    return { ok: false, error: err.name === "AbortError" ? "timeout" : String(err.message || err) };
  } finally {
    clearTimeout(t);
  }
}

const src = readFileSync(MIDDLEWARE, "utf8");
const map = parseVanityMap(src);
const hosts = Object.keys(map);

if (hosts.length === 0) {
  console.error("✗ parsed 0 vanity domains — the parser is broken, not the domains.");
  process.exit(1);
}

console.log(`Checking ${hosts.length} vanity domains from functions/_middleware.ts\n`);

const results = await Promise.all(
  hosts.map(async (h) => ({ host: h, cfg: map[h], res: await probe(h) }))
);

const newlyBroken = [];
const recovered = [];
let okCount = 0;

for (const { host, cfg, res } of results.sort((a, b) => a.host.localeCompare(b.host))) {
  const want = expectedLocation(cfg);
  const known = KNOWN_DOWN[host];
  const healthy = res.ok && res.status >= 300 && res.status < 400 && res.location === want;

  if (healthy) {
    okCount++;
    if (known) {
      recovered.push(host);
      console.log(`⚠ ${host.padEnd(20)} RECOVERED — was known-down, now 301s correctly.`);
      console.log(`  ${" ".repeat(20)} Remove it from KNOWN_DOWN in this script.`);
    } else {
      console.log(`✓ ${host.padEnd(20)} 301 → ${res.location}`);
    }
    continue;
  }

  const detail = res.ok
    ? res.status >= 300 && res.status < 400
      ? `301 to WRONG target\n  ${" ".repeat(20)} got:  ${res.location}\n  ${" ".repeat(20)} want: ${want}`
      : `HTTP ${res.status} (expected a 3xx redirect)`
    : `no response (${res.error})`;

  if (known) {
    console.log(`· ${host.padEnd(20)} known-down — ${detail.split("\n")[0]}`);
    console.log(`  ${" ".repeat(20)} ${known}`);
  } else {
    newlyBroken.push(host);
    console.log(`✗ ${host.padEnd(20)} ${detail}`);
  }
}

console.log(
  `\n${okCount}/${hosts.length} healthy · ${Object.keys(KNOWN_DOWN).length} known-down · ${newlyBroken.length} NEW failures`
);

if (recovered.length) {
  console.log(`\nRecovered (update KNOWN_DOWN): ${recovered.join(", ")}`);
}

if (newlyBroken.length) {
  console.log(`\n✗ NEW breakage: ${newlyBroken.join(", ")}`);
  console.log(`  These are not in KNOWN_DOWN — something changed. Investigate before dismissing.`);
  process.exit(1);
}

if (STRICT && Object.keys(KNOWN_DOWN).length) {
  console.log(`\n--strict: failing because known-down domains exist.`);
  process.exit(1);
}
