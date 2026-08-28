#!/usr/bin/env node
/**
 * Fetch EVERY thumbnail the live contact sheet references and report the real status.
 *
 * Written after claiming the page was "live" on the strength of having created the
 * files, without requesting a single URL. All 139 images were 404. A claim about
 * live state has to be backed by a live read.
 *
 *   node scripts/verify-photo-library.mjs [baseUrl]
 */
const BASE = (process.argv[2] ?? "https://sculptclub.nl") + "/social/photo-library/";

const idx = await fetch(BASE, { cache: "no-store" });
if (!idx.ok) { console.error(`✗ index ${idx.status} at ${BASE}`); process.exit(1); }
const html = await idx.text();

const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
if (!srcs.length) { console.error("✗ index served but references no images"); process.exit(1); }

// positive control FIRST — if a known-good asset fails, the prober is broken, not the site
const control = await fetch("https://sculptclub.nl/images/logo-sculptclub.svg", { method: "HEAD" });
if (!control.ok) { console.error(`✗ control asset returned ${control.status} — prober or network is at fault, not the page`); process.exit(1); }

let ok = 0; const bad = [];
const q = [...srcs];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (q.length) {
    const s = q.shift();
    try {
      const r = await fetch(new URL(s, BASE), { method: "HEAD" });
      r.ok ? ok++ : bad.push(`${r.status}  ${s}`);
    } catch (e) { bad.push(`ERR  ${s}  ${e.message}`); }
  }
}));

console.log(`control: 200 · referenced: ${srcs.length} · ok: ${ok} · broken: ${bad.length}`);
if (bad.length) { console.log(bad.slice(0, 15).map((b) => "  " + b).join("\n")); process.exit(1); }
console.log("✓ every referenced image loads");
