#!/usr/bin/env node
// Generate src/sitemap-lastmod.json — per-route git commit time keyed by URL path.
// Runs at prebuild so sitemap.ts has a fresh map at build time.
// Vercel resets fs mtimes on git clone, so fs.statSync gives uniform "now" for every URL —
// a known anti-pattern (Google + Bing discount uniform lastmod). Git commit time is the
// real per-file freshness signal.

import { execSync } from "node:child_process";
import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO = join(__dirname, "..");
const APP_DIR = join(REPO, "src", "app");
const OUT = join(REPO, "src", "sitemap-lastmod.json");

function walk(dir, results = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(path, results);
    } else if (entry.isFile() && /^page\.(tsx|ts|mdx)$/.test(entry.name)) {
      results.push(path);
    }
  }
  return results;
}

function routeForFile(filePath) {
  const rel = relative(APP_DIR, filePath);
  const dir = dirname(rel);
  if (dir === "." || dir === "") return "/";
  // Strip Next.js route groups like (marketing) — they don't appear in URLs
  const segments = dir.split("/").filter((s) => !/^\(.*\)$/.test(s));
  return "/" + segments.join("/");
}

function gitCommitTime(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: REPO,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const pageFiles = walk(APP_DIR);
const map = {};
let resolved = 0;
let missed = 0;

for (const f of pageFiles) {
  const route = routeForFile(f);
  const iso = gitCommitTime(f);
  if (iso) {
    map[route] = iso;
    resolved++;
  } else {
    missed++;
  }
}

writeFileSync(OUT, JSON.stringify(map, null, 2) + "\n");
console.log(
  `✓ sitemap-lastmod.json: ${resolved} routes resolved, ${missed} unresolved (fall back to fs/now)`,
);
