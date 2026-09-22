#!/usr/bin/env node
/**
 * check-acuity-prices.mjs — the site must never advertise a price that checkout
 * does not charge, and must never link to a product that no longer exists.
 *
 * WHY THIS EXISTS
 * `src/config/acuity.ts` already prescribes the fix as a MANUAL habit:
 *   "Re-verify after any Acuity price edit: follow each catalog.php add-to-cart
 *    link with -L and read the 'price' field in the returned JSON."
 * That habit has already failed once and been hand-repaired twice:
 *   - 2026-07-16 an Acuity price edit SILENTLY DID NOT SAVE (the form submits via
 *     "Update Package", not the Save button) and shipped wrong prices.
 *   - the "daarna €79" promise sat ⚠️-flagged as unbacked until someone manually
 *     checked id 2155890 on 2026-08-28.
 * A comment cannot stop that; a check can. (fleet doctrine: prefer the guard.)
 *
 * WHAT IT VERIFIES, against LIVE Acuity
 *   1. every product the site links to still EXISTS
 *   2. every product whose price the repo declares still COSTS that
 *
 * HOW (and why the obvious probe does not work)
 * Acuity's catalog page is a JS app: the price is NOT in the served HTML text,
 * and — the trap — a NONEXISTENT product id returns HTTP 200 as well, so a
 * status-code probe cannot tell a live product from a dead one. The real signal
 * is the inline `var BUSINESS = {...}` object: its `products` map is populated
 * for a real id and EMPTY for a bogus one. This script parses that by BRACE
 * BALANCE, not by regex — a non-greedy /var BUSINESS = (\{.*?\});/ truncates the
 * JSON at ~3.2KB and then silently yields "no products", which reads exactly
 * like every product being gone.
 *
 * SELF-TEST: it probes a deliberately invalid id FIRST and aborts unless that
 * comes back empty. Without that control a broken parser reports a clean sweep.
 *
 * Network-dependent, so deliberately NOT in prebuild (an offline build must
 * still work). Run it after any Acuity price edit, and before a pricing ship.
 *
 * Usage: npm run check:acuity      (exit 1 = the site would misprice or 404)
 */
import fs from "node:fs";

const SRC = "src/config/acuity.ts";
const OWNER = "36720238";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36";
const url = (id) =>
  `https://app.acuityscheduling.com/catalog.php?owner=${OWNER}&action=addCart&clear=1&id=${id}`;

/**
 * Expected prices. SOURCED FROM src/config/acuity.ts (the in-repo price table
 * comment + the priceRegular/priceDeal/priceStudent constants) and from
 * CLAUDE.md. Kept explicit here so a silent config edit cannot also silently
 * move the expectation — but § drift-check below fails if these ids stop
 * appearing in acuity.ts, so the two cannot diverge unnoticed.
 */
const EXPECTED = {
  2155887: { price: 29, label: "Open Gym Instapplan" },
  2155890: { price: 79, label: "Open Gym Onbeperkt (list)" },
  2247082: { price: 49, label: "Open Gym Onbeperkt Zomerdeal" },
  2272560: { price: 39, label: "Open Gym Onbeperkt Studenten" },
  2149357: { price: 89, label: "Pack Starter" },
  2247124: { price: 179, label: "Pack Routine" },
  2248025: { price: 299, label: "Pack Pro" },
  2248026: { price: 499, label: "Pack Volume" },
};

/**
 * Superseded products kept live so already-sold certificates and grandfathered
 * subscribers keep working (CLAUDE.md: "Certificates sold at old prices keep
 * their old credit"). Their existence is reported but never enforced, and their
 * price is deliberately NOT asserted — an old price is the correct value here.
 */
const LEGACY = new Set([2155888, 2155889, 2160074, 2160077]);

const src = fs.readFileSync(SRC, "utf8");
const declared = [...new Set([...src.matchAll(/id=(\d{7})/g)].map((m) => Number(m[1])))];

/** Pull `var BUSINESS = {...}` out by brace balance. Regex truncates it. */
function businessObject(html) {
  const i = html.indexOf("var BUSINESS");
  if (i < 0) return null;
  const start = html.indexOf("{", i);
  if (start < 0) return null;
  let depth = 0;
  for (let j = start; j < html.length; j++) {
    if (html[j] === "{") depth++;
    else if (html[j] === "}" && --depth === 0) {
      try {
        return JSON.parse(html.slice(start, j + 1));
      } catch {
        return null;
      }
    }
  }
  return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Acuity rate-limits a rapid sweep: running this twice in a couple of minutes
 * made three products that had just read ✓ come back "unparseable page"
 * (measured 2026-09-22). Unparseable is a TRANSPORT symptom, not a pricing
 * fact, and treating it as a problem turns a flake into a blocked deploy — so
 * retry once, slowly, before believing it. A genuinely dead product fails the
 * retry too, so nothing real is hidden.
 */
async function readBusiness(u) {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (attempt) await sleep(2500);
    const res = await fetch(u, { headers: { "User-Agent": UA }, redirect: "follow" });
    if (!res.ok) { if (attempt) return { httpError: res.status }; continue; }
    const b = businessObject(await res.text());
    if (b !== null) return { business: b };
  }
  return { parseFailed: true };
}

async function productsFor(id) {
  const r = await readBusiness(url(id));
  if (r.httpError || r.parseFailed) return { ...r, products: [] };
  return { products: Object.values(r.business.products ?? {}).flat() };
}

const problems = [];
const warnings = [];

// ── SELF-TEST ────────────────────────────────────────────────────────────────
// A bogus id must come back with zero products. If it does not, this script
// cannot distinguish a live product from a dead one and every "OK" below is
// meaningless — so refuse rather than report a clean sweep.
const control = await productsFor(9999999);
if (control.parseFailed) {
  console.error("✗ self-test failed: could not parse `var BUSINESS` at all — Acuity changed its page shape.");
  console.error("  Every result would be a false ABSENT. Fix the parser before trusting this check.");
  process.exit(2);
}
if (control.products.length > 0) {
  console.error("✗ self-test failed: a nonexistent product id returned products. The check cannot detect absence.");
  process.exit(2);
}
console.log("✓ self-test: bogus id 9999999 → 0 products (the check can detect a dead product)\n");

// ── drift check: expectations must still correspond to the config ────────────
for (const id of Object.keys(EXPECTED).map(Number)) {
  if (!declared.includes(id)) {
    problems.push(
      `${id} (${EXPECTED[id].label}) is asserted here but no longer appears in ${SRC} — ` +
        `remove it from EXPECTED, or restore the link.`
    );
  }
}
for (const id of declared) {
  if (!(id in EXPECTED) && !LEGACY.has(id)) {
    warnings.push(`${id} is linked from ${SRC} but has no expected price here — add it to EXPECTED or LEGACY.`);
  }
}

// ── the actual verification ──────────────────────────────────────────────────
for (const id of declared) {
  const exp = EXPECTED[id];
  const { products, httpError, parseFailed } = await productsFor(id);

  if (httpError || parseFailed) {
    const why = httpError ? `HTTP ${httpError}` : "unparseable page";
    // Never pass on an unreadable answer — but never fail a legacy id on it either.
    (exp ? problems : warnings).push(`${id} ${exp?.label ?? "(legacy)"} — could not read (${why}).`);
    console.log(`  ?  ${id}  ${why}`);
    continue;
  }

  if (products.length === 0) {
    if (exp) {
      problems.push(`${id} ${exp.label} — GONE from Acuity, but the site still links to it (dead money path).`);
      console.log(`  ✗  ${id}  ${exp.label} — ABSENT`);
    } else {
      console.log(`  ·  ${id}  legacy — absent (fine: retired)`);
    }
    continue;
  }

  const p = products[0];
  if (!exp) {
    console.log(`  ·  ${id}  legacy — live at €${p.price} (${p.title})`);
    continue;
  }
  if (p.price !== exp.price) {
    problems.push(
      `${id} ${exp.label} — site advertises €${exp.price} but Acuity charges €${p.price}. ` +
        `Either the Acuity edit did not save, or the repo is stale.`
    );
    console.log(`  ✗  ${id}  ${exp.label} — expected €${exp.price}, Acuity says €${p.price}`);
  } else {
    console.log(`  ✓  ${id}  ${exp.label} — €${p.price}  (${p.title})`);
  }
}

// ── APPOINTMENT TYPES ────────────────────────────────────────────────────────
// The products above are the CATALOG (packages and subscriptions). The single
// bookable SESSIONS are a different Acuity object reached by a different URL,
// and nothing checked them — which is exactly where the drift happened:
// 2026-09-22 the pricing page advertised the single Open Gym session at €10
// while Acuity had been charging €9, contradicting /nl/open-gym and
// /nl/boek-gym, which both already said €9. The dated "ACUITY IN SYNC" note in
// src/config/acuity.ts lists every product and no session, so the gap was in
// the verification, not in anyone's attention.
//
// Same page shape, same parser: schedule.php also carries `var BUSINESS`, and
// its `appointmentTypes` map is populated for a real type and EMPTY for a bogus
// one — so the same self-test applies and is run again below rather than
// assumed from the catalog one passing.
const typeUrl = (t) =>
  `https://app.acuityscheduling.com/schedule.php?owner=${OWNER}&appointmentType=${t}`;

/**
 * Prices the SITE advertises for bookable sessions. €0 entries are free by
 * design (the trial sessions) — asserting 0 still catches the day one of them
 * silently acquires a price.
 */
const EXPECTED_TYPES = {
  83513953: { price: 9, label: "Open Gym Sessie" },
  82553655: { price: 17, label: "Hele Studio 60 min" },
  84032351: { price: 12, label: "Halve Studio 60 min" },
  85410115: { price: 24, label: "Rent Full Studio 90 min" },
  87017445: { price: 0, label: "Open Gym — first time free" },
  86758291: { price: 0, label: "Free try out: Full Studio 60 min" },
};

async function typesFor(t) {
  const r = await readBusiness(typeUrl(t));
  if (r.httpError || r.parseFailed) return { ...r, types: [] };
  const raw = r.business.appointmentTypes ?? {};
  return { types: Object.values(raw).flatMap((v) => (Array.isArray(v) ? v : [v])) };
}

console.log("\nappointment types (bookable sessions):");

const typeControl = await typesFor(99999999);
if (typeControl.parseFailed) {
  console.error("✗ self-test failed: could not parse `var BUSINESS` on schedule.php — Acuity changed its page shape.");
  process.exit(2);
}
if (typeControl.types.length > 0) {
  console.error("✗ self-test failed: a nonexistent appointmentType returned a type. The check cannot detect absence.");
  process.exit(2);
}

for (const [id, exp] of Object.entries(EXPECTED_TYPES)) {
  const { types, httpError, parseFailed } = await typesFor(id);
  if (httpError || parseFailed) {
    problems.push(`${id} ${exp.label} — could not read (${httpError ? `HTTP ${httpError}` : "parse failed"}).`);
    console.log(`  ?  ${id}  ${exp.label} — unreadable`);
    continue;
  }
  if (types.length === 0) {
    problems.push(`${id} ${exp.label} — GONE from Acuity, but the site still links to it (dead booking path).`);
    console.log(`  ✗  ${id}  ${exp.label} — ABSENT`);
    continue;
  }
  const t = types[0];
  const price = Number(t.price);
  if (!t.active) {
    problems.push(`${id} ${exp.label} — exists but is INACTIVE in Acuity, so nobody can book it.`);
    console.log(`  ✗  ${id}  ${exp.label} — inactive`);
    continue;
  }
  if (price !== exp.price) {
    problems.push(
      `${id} ${exp.label} — site advertises €${exp.price} but Acuity charges €${price}. ` +
        `The site must never quote more than checkout takes.`
    );
    console.log(`  ✗  ${id}  ${exp.label} — expected €${exp.price}, Acuity says €${price}`);
  } else {
    console.log(`  ✓  ${id}  ${exp.label} — €${price}  (${String(t.name).slice(0, 44)})`);
  }
}

if (warnings.length) {
  console.log("\n⚠ warnings (not blocking):");
  for (const w of warnings) console.log(`   ${w}`);
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s) — the site would misprice or link to a dead product:`);
  for (const p of problems) console.error(`   ${p}`);
  console.error("\n  Fix in Acuity (remember: the package form submits via 'Update Package', NOT 'Save'),");
  console.error(`  then re-run. If the repo is the stale side, update ${SRC} + CLAUDE.md together.`);
  process.exit(1);
}

console.log(
  `\n✓ all ${Object.keys(EXPECTED).length} advertised products and ${Object.keys(EXPECTED_TYPES).length} bookable sessions exist at the advertised price.`,
);
