# QA_LOG — sculptclub.nl

## 2026-09-10 — Money-Page QA cycle 2 (task mtva5678zbtbc0, step 1/5 SCAN)

Scanner: `tooling/55-fleet-dashboard/scripts/money-page-scan.mjs` (7/7 positive controls pass). Sample = up to 12 URLs per class (home/hubs/entity/sub/tools) from the live sitemap, plus a 404 probe. Money path = the site's own `/go/` shape replayed from live HTML with a bare curl, no `-L`, no tokens, no nav headers (302→own origin or 200 interstitial = PASS; 302→amazon with `tag=` or 404 = FAIL). Full log: device 1 scratchpad `mps-full.log` / `mps-rerun.json`.

**sculptclub.nl — NO-CTA-FOUND — expected: gym site, no Amazon affiliate CTAs; 0 defects on 39 pages (22 `<img>` sizing flags, informational).**

| check | result |
|---|---|
| sitemap URLs / sampled | 199 / 39 |
| HTTP 200 + title + h1 | PASS |
| secret / token leak in visible text | none |
| Amazon CTAs | none by design (not an affiliate site) |
| canonical + JSON-LD | PASS |
| internal links resolve | PASS |
| `<img>` without width+height | 22 pages — informational |

### Findings
- None. No P-rated finding on this cycle.

### BROWSE — phone-first (cycle 2, step 2/5, 2026-09-10)

Harness: Playwright iPhone 15 (WebKit 26.5) + Pixel 7 (Chromium 151) via `~/.claude/bin/ace-mobile-qa` + scripted flows (device 1 scratchpad `mqa-generic.json`, `flows-earners.json`, screenshots in `~/.claude/tools/pw/out/`). Generic pass = home + 3 hubs + entity + sub + tools page per site, both devices: status, horizontal overflow, JS errors, tap targets <40px. Never tapped a `/go/` link.

| check | result |
|---|---|
| generic 7 pages × 2 devices | all 200, no overflow; only console noise is Clarity/Bing pixel blocked by WebKit ITP — harmless |
| header CTAs | 44px; "Boek gratis probeersessie" 260x50 |

**Findings (browse):**
- None.

### BANK (cycle 2, step 5/5, 2026-09-10)
Cycle 2 closed: 0 P0/P1 on this site; open items above carry their P-rating and the metric to watch. Fleet rollup line appended to card mtjt4qjomup9pn (📊 MONEY-PAGE QA — fleet rollup). Next cycle: re-run `tooling/55-fleet-dashboard/scripts/money-page-scan.mjs <domain>` and diff against the cycle-2 table above before browsing.
