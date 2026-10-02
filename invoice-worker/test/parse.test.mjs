import assert from "node:assert/strict";
import { parseOrder, htmlToText } from "../src/parse.js";
import { splitVat } from "../src/invoice-pdf.js";

// Real Acuity owner-copy text (Bob Berghuis, 2026-08-14), as returned by Gmail plain-text view.
const real = "\tSculptClubP.M. de VriesEgelantiersgracht 424,\n1015 RR AmsterdamKvK 64708101 · BTW-id\nNL002250100B57contact@sculptclub.nl ·\nsculptclub.nl\n\t\n\t\tFactuur / Invoice\n\t\t\tBob Berghuis\n\t\t\tphone: +31642890637 | email:\nberghuis.bob@gmail.com\n\t\t\t\nItemUnit PriceQuantityTotal\nVolume — Strippenkaart / Discount Pack (23%\nkorting)€499.001€499.00 Certificate codes:\nB4F9E3A3 Schedule\n\t\t\tTotal\n\t\t\t499.00 Includes 9% BTW\n\tAlle bedragen zijn inclusief 9% BTW. Dit bericht\ndient als betalingsbewijs / factuur bij je\naankoop.SculptClub · P.M. de Vries · KvK\n64708101 · BTW-id NL002250100B57\n";
const r = parseOrder("Product Order: Bob Berghuis", real);
assert.equal(r.ok, true, r.reason);
assert.equal(r.name, "Bob Berghuis"); assert.equal(r.email, "berghuis.bob@gmail.com");
assert.equal(r.vatPct, 9); assert.equal(r.totalGrossCents, 49900);
assert.deepEqual(r.certs, ["B4F9E3A3"]); assert.equal(r.lines[0].desc, "Volume — Strippenkaart / Discount Pack (23% korting)");

// HTML variant: cells separated, two items, qty 2
const html = `<table><tr><td>Factuur / Invoice</td></tr><tr><td>Ann Test</td></tr><tr><td>phone: 0612 | email: <a href="x">Ann@Test.nl</a></td></tr>
<tr><th>Item</th><th>Unit Price</th><th>Quantity</th><th>Total</th></tr>
<tr><td>Starter pack</td><td>€89.00</td><td>2</td><td>€178.00</td></tr><tr><td>Routine pack</td><td>€179.00</td><td>1</td><td>€179.00</td></tr>
<tr><td>Total</td><td>357.00 Includes 9% BTW</td></tr></table>`;
const h = parseOrder("Product Order: Ann Test", htmlToText(html));
assert.equal(h.ok, true, h.reason); assert.equal(h.lines.length, 2); assert.equal(h.lines[0].qty, 2); assert.equal(h.email, "ann@test.nl");

// Refusals: wrong subject, tampered total, missing VAT
assert.equal(parseOrder("Appointment Rescheduled: x", real).ok, false);
assert.equal(parseOrder("Product Order: Bob", real.replace("499.00 Includes", "500.00 Includes")).ok, false);
assert.equal(parseOrder("Product Order: Bob", real.replace("Includes 9% BTW", "")).ok, false);

// VAT split: matches what Bob's receipts imply
assert.deepEqual(splitVat(49900, 9), { net: 45780, vat: 4120, gross: 49900 });
assert.deepEqual(splitVat(8900, 9), { net: 8165, vat: 735, gross: 8900 });
console.log("parse tests ok");
