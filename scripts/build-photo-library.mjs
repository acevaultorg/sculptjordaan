#!/usr/bin/env node
/**
 * Regenerate the photo-library contact sheet FROM DISK.
 *
 * Exists because the page silently drifted from the files: index.html shipped
 * listing 139 thumbnails while the thumbs/ directory was never deployed, so every
 * image 404'd on the live site. Generating the HTML from a directory read means
 * the page can only ever list files that actually exist.
 *
 * Also normalises filenames: the April shoot is named "Martin hiperflow website-081.jpg"
 * and raw spaces in an <img src> are an avoidable 404 risk on a CDN.
 *
 *   node scripts/build-photo-library.mjs
 *
 * Then deploy, then VERIFY BY FETCHING — `npm run verify:photo-library`.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/social/photo-library");
const THUMBS = path.join(ROOT, "thumbs");

// prefix → [label, source path, native resolution]
const SHOOTS = {
  "classpass-uploads":               ["ClassPass uploads",            "classpass-uploads/",                                    "1500×2000"],
  "exports-fullres-2026-07":         ["Fullres exports — juli 2026",  "exports-fullres-2026-07/",                              "4000×6000"],
  "exports-web-2026-07":             ["Web exports — juli 2026",      "exports-web-2026-07/",                                  "web"],
  "gbp-uploads":                     ["Google-profiel uploads",       "gbp-uploads/",                                          "1500×2000"],
  "gezina-sam-shoot-2026-08-17":     ["Gezina / Sam — 17 aug 2026",   "gezina-sam-shoot-2026-08-17/",                          "1066×1600 (WhatsApp)"],
  "wetransfer_foto-s-fe-x-sculpt":   ["FE x Sculpt — april 2026",     "wetransfer_foto-s-fe-x-sculpt_2026-04-12_1727 (1)/",    "3388×4517"],
  "wetransfer_foto-s-sculpt":        ["Sculpt — februari 2026",       "wetransfer_foto-s-sculpt_2026-02-12_2328 (1)/",         "4284×5712"],
};

// 1 — normalise filenames. Spaces and parens in a URL are a needless 404 risk.
let renamed = 0;
for (const f of fs.readdirSync(THUMBS)) {
  const safe = f.replace(/[ ()]+/g, "-").replace(/-+/g, "-");
  if (safe !== f) { fs.renameSync(path.join(THUMBS, f), path.join(THUMBS, safe)); renamed++; }
}

// 2 — read what is ACTUALLY on disk, and group it
const files = fs.readdirSync(THUMBS).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
const groups = new Map();
for (const f of files) {
  const key = Object.keys(SHOOTS).find((k) => f.startsWith(k)) ?? "_other";
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(f);
}
if (groups.has("_other")) {
  SHOOTS._other = ["Ongegroepeerd", "—", "?"];
  console.warn(`⚠ ${groups.get("_other").length} file(s) matched no shoot prefix`);
}

// 3 — reuse the existing <style> verbatim so the design cannot drift
const prev = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const style = prev.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const sections = [...groups.entries()].map(([key, fl]) => {
  const [label, src, res] = SHOOTS[key];
  return `<section>
  <h2>${esc(label)} <em>${fl.length} foto's · ${esc(res)}</em></h2>
  <p class="path">sculptclub-source-photos/${esc(src)}</p>
  <div class="grid">${fl.map((f) => {
    const short = f.replace(new RegExp("^" + key + "_*"), "").replace(/\.[^.]+$/, "");
    // encodeURIComponent on top of the rename — belt and braces, costs nothing
    return `<a class="t" href="thumbs/${encodeURIComponent(f)}" target="_blank" rel="noopener">` +
           `<img src="thumbs/${encodeURIComponent(f)}" alt="" loading="lazy" decoding="async" width="520" height="693">` +
           `<span>${esc(short)}</span></a>`;
  }).join("")}</div>
</section>`;
}).join("\n");

const html = `<!DOCTYPE html>
<html lang="nl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>SculptClub · fotobibliotheek (${files.length})</title>
<meta name="robots" content="noindex,nofollow">
${style}</head><body>
<header>
  <span class="pill">Fotobibliotheek</span>
  <h1>${files.length} foto's, ${groups.size} shoots</h1>
  <p class="lead">Elke bronfoto die we hebben, als thumbnail. Klik om het origineel op ware grootte
  te openen. Gegenereerd vanaf schijf, dus wat hier staat bestaat ook echt.</p>
</header>
${sections}
<footer>Niet geïndexeerd. Thumbnails zijn 520px; de originelen zijn tot 4000×6000.
Gegenereerd door <code>scripts/build-photo-library.mjs</code>.</footer>
</body></html>
`;

fs.writeFileSync(path.join(ROOT, "index.html"), html);
console.log(`✓ ${files.length} photos · ${groups.size} shoots · ${renamed} filename(s) normalised`);
