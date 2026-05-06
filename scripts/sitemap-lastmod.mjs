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

// Vercel does a shallow git clone (depth=1) by default — `git log -1` then
// returns the deploy-merge time for every file unchanged in that single
// commit, defeating the point of per-file mtimes. Deepen history before
// querying. No-op locally where the repo is already non-shallow.
function deepenGitHistory() {
  try {
    const isShallow =
      execSync("git rev-parse --is-shallow-repository", {
        cwd: REPO,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() === "true";
    if (!isShallow) return;
    console.log("  deepening shallow git clone for per-file mtimes...");
    try {
      execSync("git fetch --deepen=500 --quiet", {
        cwd: REPO,
        stdio: ["ignore", "ignore", "ignore"],
      });
    } catch {
      try {
        execSync("git fetch --unshallow --quiet", {
          cwd: REPO,
          stdio: ["ignore", "ignore", "ignore"],
        });
      } catch {
        // Couldn't deepen — files unchanged in HEAD will fall through to
        // the build-time fs/now fallback in sitemap.ts.
      }
    }
  } catch {
    // Not a git repo (rare in CI) — also fall through to fs/now.
  }
}

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

deepenGitHistory();
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
