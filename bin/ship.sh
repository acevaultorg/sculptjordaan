#!/usr/bin/env bash
# ship.sh — DECOMMISSIONED 2026-08-31. Do not resurrect as a one-command deploy.
# ─────────────────────────────────────────────────────────────────────────────
# This script used to run `vercel --prod --yes`. Vercel is RETIRED for this
# project (CF Pages migration, nameservers moved 2026-08-29).
#
# It is kept as a SIGNPOST, not deleted, because its final line was actively
# dangerous:
#
#     echo "✓ Shipped. Verify: curl -sI https://sculptclub.nl/ | head -1"
#
# That curl returns HTTP 200 from Cloudflare whether or not anything deployed,
# so the "verification" passed while the deploy went nowhere. Same blind-
# instrument class as a git guard that is installed but never invoked: the
# check returns the reassuring answer precisely when it cannot see.
#
# It also called `node bin/indexnow.mjs` bare — which submits EVERY sitemap URL.
# Since a CSS change touches every page, that is the batch-abuse pattern.
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

cat >&2 <<'MSG'
✗ bin/ship.sh is decommissioned — it deployed to Vercel, which is retired.

  Use the canonical CF Pages procedure (CLAUDE.md "Deploy procedure"):

    1. npm run build
       ⚠ Build success is NOT $? — `next build` can print "Compiled
         successfully", fail type-check, and still exit 0 with a STALE out/.
    2. npx wrangler pages functions build --outdir=DIR
       cp DIR/index.js out/_worker.js
       echo '{"version":1,"include":["/*"],"exclude":[]}' > out/_routes.json
    3. CF_BRANCH=main python3 -u scripts/cf-pages-chunked-deploy.py
       (wrangler EPIPEs on the ~154MB export; the chunked deployer also
        carries the functions guard — do not bypass it)
    4. VERIFY FUNCTIONS — this is the only check that discriminates:
         curl -s -o /dev/null -w '%{http_code}\n' \
           "https://sculptclub.nl/api/whatsapp/webhook?hub.mode=subscribe"
       Must be 403. A 404/405 means the worker is missing → REDEPLOY.
       A plain `curl -sI https://sculptclub.nl/` proves NOTHING: it returns
       200 from Cloudflare regardless of whether your deploy landed.
    5. node bin/indexnow.mjs <url> <url> …   ← ONLY the URLs you changed.
       Never bare: with no args it submits the entire sitemap.
MSG
exit 1
