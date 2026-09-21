#!/usr/bin/env node
// Read feedback submissions from Workers KV (namespace sculptclub-feedback).
//   npm run feedback:read            human-readable list, newest first
//   npm run feedback:read -- --json  raw JSON array
//   npm run feedback:read -- --consented   only answers that may be published
//
// PUBLISHING RULE: an answer may only ever be shown on the site when
// consent_publish is true. This script prints PUBLISHABLE: yes/no per row so
// nobody has to infer it. Nothing on the site reads this store automatically.
//
// Uses wrangler's OAuth login. The CLOUDFLARE_API_TOKEN exported in ~/.zshenv is
// Pages-scoped and cannot read KV, so it is removed from the child environment.
import { execFileSync } from "node:child_process";

const NAMESPACE_ID = "2194471adf0843c1aa768dccdb9c7356";
const env = { ...process.env };
delete env.CLOUDFLARE_API_TOKEN;
delete env.CF_PAGES_TOKEN;
delete env.CLOUDFLARE_PAGES_API_TOKEN;

const w = (args) =>
  execFileSync("npx", ["wrangler", ...args], { env, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

const asJson = process.argv.includes("--json");
const onlyConsented = process.argv.includes("--consented");

const listed = w(["kv", "key", "list", "--namespace-id", NAMESPACE_ID, "--prefix", "fb:", "--remote"]);
const keys = JSON.parse(listed.slice(listed.indexOf("["))).map((k) => k.name).sort().reverse();

const rows = [];
for (const key of keys) {
  const raw = w(["kv", "key", "get", key, "--namespace-id", NAMESPACE_ID, "--remote"]);
  try {
    rows.push({ key, ...JSON.parse(raw.slice(raw.indexOf("{"))) });
  } catch {
    rows.push({ key, parse_error: true });
  }
}
const shown = onlyConsented ? rows.filter((r) => r.consent_publish === true) : rows;

if (asJson) {
  console.log(JSON.stringify(shown, null, 2));
} else {
  console.log(`${shown.length} of ${rows.length} submission(s)\n`);
  for (const r of shown) {
    console.log(`${r.ts}  ${r.audience}  ${r.locale}  rating ${r.rating}/5  PUBLISHABLE: ${r.consent_publish === true ? "yes" : "no"}`);
    if (r.first_name || r.trainer || r.email) console.log(`  who: ${r.first_name || "-"}${r.trainer ? `  trainer: ${r.trainer}` : ""}${r.email ? `  reply to: ${r.email}` : ""}`);
    if (r.feedback) console.log(`  feedback: ${r.feedback}`);
    if (r.ideas) console.log(`  ideas: ${r.ideas}`);
    if (r.equipment?.length || r.equipment_other) console.log(`  equipment: ${[...(r.equipment || []), r.equipment_other].filter(Boolean).join(", ")}`);
    if (r.slots?.length) console.log(`  slots: ${r.slots.join(", ")}`);
    if (r.group) console.log(`  group class: ${r.group}`);
    if (r.source) console.log(`  source: ${r.source}`);
    console.log(`  key: ${r.key}\n`);
  }
}
