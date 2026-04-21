#!/usr/bin/env bash
# ship.sh — one-command deploy for sculptclub.nl
# ─────────────────────────────────────────────────────────────
# Temporary workaround while GitHub Actions are disabled on the
# owner's account. Run this from anywhere inside the repo after
# a PR is merged on GitHub — pulls main + deploys to Vercel prod.
#
# Usage: ./bin/ship.sh
# ─────────────────────────────────────────────────────────────
set -euo pipefail

# Find repo root (works from any subdir)
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

echo "→ Switching to main + pulling latest..."
# Detect if we're in a worktree; jump to main worktree if so
if git worktree list | grep -q " [worktree/]"; then
  MAIN_WT="$(git worktree list --porcelain | awk '/^worktree/ {wt=$2} /^branch refs\/heads\/main$/ {print wt; exit}')"
  if [[ -n "$MAIN_WT" && "$MAIN_WT" != "$REPO_ROOT" ]]; then
    echo "  (detected worktree; switching to main at $MAIN_WT)"
    cd "$MAIN_WT"
  fi
fi

git fetch origin main --quiet
git checkout main --quiet 2>/dev/null || true
git pull --ff-only origin main

echo "→ Deploying to Vercel production..."
vercel --prod --yes

echo "✓ Shipped. Verify: curl -sI https://sculptclub.nl/ | head -1"
