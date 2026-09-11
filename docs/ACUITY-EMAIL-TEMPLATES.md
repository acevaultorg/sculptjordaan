# Acuity Confirmation Email — Custom Blocks

> ✅ **EXECUTED IN ACUITY 2026-07-27 (all three live):**
> 1. **Open Gym confirmation** → template "Booking Confirmation 2" (`templateId=3325119`), status **On**, scoped to *Open Gym Sessie / Open Gym Session* + *Book spot / Open gym - Try first time for free* + *Open Gym ClassPass* (class). Section 1 NL block appended.
> 2. **Studio Rental confirmation** → template "Booking Confirmation 3" (`templateId=3325132`), status **On**, scoped to the 5 rental types + 2 rental trials (*Hele Studio 60 / Halve Studio 60 / Halve Studio 90 / Rent Full Studio 90 / Rent Full Studio (try for free) / Free try out: Full Studio 60 / 2 people (try for free)* — "Hele Studio 60 min +6 others"). Section 2 NL block appended.
> 3. **Review-request follow-up** → Client Emails → Follow-ups, **1 day after, after each appointment**, subject "Hoe was je sessie, %first%?". ⚠️ Acuity's follow-up editor has TWO templates: **1A (default)** and **1B (has ALL appointment types dragged in)**. The review block lives in **BOTH** — an empty template silently sends nothing for its types, and 1B can't be deleted via automation. **Future edits must be made in 1A AND 1B.**
>
> Template NAMES ("Booking Confirmation 2/3") are not renameable via automation — admin-internal only, clients never see them.

> ✅ **2026-09-11 — refund line added under the Change/Cancel button** (operator: "you can do this").
> Source view, inserted directly after the `</table>` that closes the Change/Cancel button, so it sits
> between that button and "Add to iCal":
> *"Annuleren? Je credits komen direct terug op je account; kaartbetalingen voor losse sessies worden
> binnen enkele dagen automatisch terugbetaald."* + EN line in lighter grey. Same wording as the site
> (commit 532a241, 10 surfaces).
> - **Booking Confirmation 3** (`templateId=3325132`, studio rental) — saved ✓, re-read after a fresh
>   reload: phrase present 1×.
> - **Booking Confirmation 2** (`templateId=3325119`, Open Gym) — saved ✓ ("Booking Confirmation 2
>   saved"), re-read after a fresh reload: phrase present 1×, placed before "Add to iCal".
> - **Cancellation Confirmation** (`emailType=5&templateId=0`, Acuity's default, sent for ALL
>   appointment types + classes) — conditional wording because it also goes to free trials/intakes:
>   *"Betaald met credits? Die staan direct weer op je account. Losse sessie met je kaart betaald? Die
>   wordt binnen enkele dagen automatisch terugbetaald."* + EN. Placed inside the "successfully
>   cancelled" box. Saved ✓, fresh reload: NL 1× · EN 1×.
>   ⚠️ **This template behaves differently:** a source-view (`<>`) edit is DISCARDED when you switch
>   back — the textarea is re-serialised from the visual editor (2,711 → 2,665 chars, line gone).
>   Type into the visual editor instead. Booking Confirmations 2/3 kept source edits fine.
> - **Booking Confirmation (default, `emailType=1&templateId=0`)** — retired number `+31 6 83 17 89 34`
>   replaced with `+31 6 15 14 79 52` in all 3 places (text + Call + WhatsApp links) and the refund line
>   added under Change/Cancel. Saved ✓ ("Booking Confirmation saved"); fresh reload: old 0 · new 4 ·
>   refund 1. **Saving WHILE STILL IN SOURCE VIEW persists on a default template** — it is only the
>   switch back to visual that discards source edits.
> - Receipt merge fields (Insert Field, package-order): first · last · phone · email · receipt summary ·
>   product · total · notes · schedule link · certificate link. **No date, no order/invoice number.**
> - Admin moved: the old `preferences.php?action=emails*` URLs now render an empty shell. Current
>   list is `/admin/client-emails`; a template editor is
>   `/admin/client-emails-editor?emailType=1&templateId=<id>`. The `<>` toolbar button toggles a plain
>   textarea with the full template source, including Acuity's own top card.

Paste these HTML blocks at the bottom of the relevant confirmation emails in Acuity.

## Where to paste

1. Log in to https://secure.acuityscheduling.com/
2. **Business Settings → Customize Appearance → Emails → Confirmation email**
   (or per appointment type: **Appointment Types → [type] → Edit → Confirmation email custom text**)
3. Switch the editor to **HTML / Source mode**
4. Paste the relevant block at the bottom — keep Acuity's existing `%appointmentType%`, `%time%`, etc. variables above

Acuity emails render in Gmail/Outlook/Apple Mail. The markup below is table-based + inline styles for bulletproof rendering.

---

## 0. Legal invoice footer (NL Belastingdienst) — LIVE IN ACUITY SINCE 2026-07-24

> **CORRECTION 2026-08-29.** An earlier version of this section said the footer was "NOT YET IN
> ACUITY". **That was wrong, and it was my error:** I read the Sales-task title and not its body.
> The body records that on **2026-07-24** the supplier-identity block was added via Chrome MCP to
> **all three** receipt templates — Package/Gift Certificate, Subscription Paid, and Appointment
> Receipt — and saved. What was missing was only the *record of it in this file*.

**Status:** live in Acuity. Absent from THIS DOC until now — which is why an agent reading only
the repo concluded it had never been done. (The single `btw|vat|kvk` match previously in this
file was a false positive on the word "pri**vat**e".)

### 🔴 LIKELY LIVE ERROR — the block carries a RETIRED phone number

The paste-ready block recorded on the Sales task (`mrokfzvp6hxt8j`) ends with
**`+31 6 83 17 89 34`** — that is `0683178934`, which CLAUDE.md retired **fleet-wide on
2026-06-01** with an explicit *"NEVER revert to 0683178934."* The paste happened **2026-07-24**,
nearly two months after retirement.

If that block went in verbatim, **every Acuity receipt/invoice since 24 July carries a dead
contact number inside the legal supplier-identity line** — on the document a customer would use
to query a payment. Not verifiable from this repo (Acuity is credential-gated), so it needs an
operator check: the correct number is **+31 6 15 14 79 52** / `wa.me/31615147952`.

### ⚖️ Measured 2026-09-11 against belastingdienst.nl — what each trainer purchase legally needs

Operator asked (2026-09-11): *"make sure all confirmation mails for trainers contain all the
needed information for their financial administration, according to Dutch law."* Checked against
the live Belastingdienst pages the same day (factuureisen + vereenvoudigde factuur), using the
real receipt Joey van Veen received for the €499 Volume pack as the specimen.

**Two regimes, split at €100 incl. btw:**

| item | full factuur (> €100) | vereenvoudigde factuur (≤ €100) | Joey's €499 receipt |
|---|---|---|---|
| supplier name + address | required | required | ✅ |
| btw-id | required | — | ✅ |
| KvK-nummer | required (if registered) | — | ✅ |
| issue date on the document | required | required | ❌ |
| consecutive factuurnummer | required | not required | ❌ (certificate code ≠ invoice number) |
| buyer name + address | required | not required | ❌ name only |
| description + quantity | required | "welke diensten" | ✅ |
| date of supply | required | — | ❌ |
| amount excl. btw | required | — | ❌ |
| btw-tarief | required | btw or data to calculate it | ✅ 9% |
| btw-bedrag | required | btw or data to calculate it | ❌ (€41.20 not shown) |

Sources: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/
and …/factuureisen/aangepaste_regels_facturen/vereenvoudigde_factuur (verbatim: *"de btw of de
gegevens aan de hand waarvan de btw kan worden berekend"*).

**What that means per trainer product:**
- **Single studio rentals (€12 / €17) and the Starter pack (€89)** — ≤ €100, so a simplified
  invoice is enough. The Acuity email can satisfy it once it carries an **issue date**; "incl. 9%
  btw" already counts as "data to calculate the btw".
- **Routine €179 · Pro €299 · Volume €499** — above €100, a **full factuur is required**, and
  these buyers are self-employed trainers who reclaim btw. Acuity has no merge field for a
  consecutive invoice number or the buyer's address, so **no Acuity template can make these
  compliant**. The footer line *"Dit bericht dient als betalingsbewijs / factuur"* over-claims for
  them and should say *betalingsbewijs* only, with a route to request a full factuur.

### 🔎 Live Acuity read 2026-09-11 (device 1, signed in) — what the templates actually say

- **Package / Gift Certificate Order** (`/admin/email-settings/package-order`, 3,475-char source) and
  **Subscription Paid** (`/admin/email-settings/subscription-paid`, 4,114 chars) both carry the
  supplier block + heading "Factuur / Invoice" + footer *"Dit bericht dient als betalingsbewijs /
  factuur bij je aankoop."* Merge fields in use: `%first% %last% %phone% %email% %receipt% %total%
  %notes%` (package) and `%product% %price%` (subscription). **No date, no invoice number, no VAT
  amount** — so the "factuur" claim over-reaches for anything above €100.
- **Appointment Receipts** (`/admin/email-settings/appointment-receipts`) is a plain form: subject,
  title, and a 218-char custom message.
- **Booking Confirmation (default, `emailType=1&templateId=0`)** — sent for SCULPT45 class, Partner
  Full Studio, Studio help 90/120/150, an Open Gym copy and a photoshoot type — **still shows the
  RETIRED number `+31 6 83 17 89 34`: 3 occurrences in its source, 0 of the correct `+31 6 15 14 79 52`.**
  Visible line: *"Need help? Call or WhatsApp us: +31 6 83 17 89 34."*
- **Acuity has a built-in Invoices feature** (`/admin/invoices`, 0 invoices so far). "Create invoice"
  offers: client picker, line items (qty · price), subtotal, **Add tax** (separate VAT line),
  **Invoice ID auto-starting at 1** (consecutive), due date, message, email send. That is the
  realistic route to a full factuur for the €179 / €299 / €499 packs without a new tool.

### ✅ Receipt fix shipped 2026-09-11 (device 1) — verified after reload

- **Package / Gift Certificate Order** and **Subscription Paid**: heading "Factuur / Invoice" →
  **"Betalingsbewijs / Receipt"**; footer now reads *"Alle bedragen zijn inclusief 9% BTW. Dit bericht
  is je betalingsbewijs. Ondernemer? Vraag een factuur met btw-specificatie aan via
  contact@sculptclub.nl (vermeld je bedrijfsnaam en adres). / This email is your payment receipt;
  businesses can request a VAT invoice at contact@sculptclub.nl · P.M. de Vries · KvK 64708101 ·
  BTW-id NL002250100B57"*. Reload count on each page: new footer 2 · old footer 0 · new heading 2 ·
  old heading 0.
- **Appointment Receipts** (single €12/€17 sessions, ≤ €100): preview already renders issue date,
  supplier name + address, KvK, BTW-id, the service line and "inclusief 9% BTW" → meets the
  vereenvoudigde-factuur requirements. Left unchanged.
- **Packs above €100** (€179/€299/€499): a full factuur must be issued on request via Acuity
  Invoices (consecutive ID, tax line) — manual per order. A bookkeeping integration would automate
  this but is a paid, operator-decided step.

### Residual limits (Acuity's design — recorded 2026-07-24, still true)

Acuity receipt templates expose only `%first/last/phone/email/receipt/product/total/notes%`.
There is **no** merge field for a sequential invoice number, a labelled invoice date, the
customer's address, or a net/BTW split. So the Acuity email is a valid *betalingsbewijs* with
supplier identity — not a fully Belastingdienst-compliant factuur. For B2B trainers who need a
true factuur, issue it from the accounting tool (MoneyMonk) using the Acuity order as source.

**Why it matters more for rental than for Open Gym:** studio-rental customers are self-employed
trainers who need a proper *factuur* to reclaim BTW. If the order email is not a valid invoice,
they cannot deduct — and they will ask for one. Open Gym consumers rarely need it; renters
always do.

**Target template:** Acuity's **order / receipt** email (paid items), NOT the appointment
confirmation. The task on the Sales board (`mrokfzvp6hxt8j`) names order emails specifically.

### Block A — static seller identity (READY TO PASTE, all values verified in-repo)

Sources: `src/components/seo/json-ld.tsx` + `public/llms.txt` (KvK + BTW-id), CLAUDE.md (address).

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:1px solid #e5e5e5;padding-top:16px">
  <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#666">
    <strong style="color:#333">SculptClub</strong><br>
    Egelantiersgracht 424, 1015 RR Amsterdam, Nederland<br>
    KvK 64708101 &nbsp;·&nbsp; BTW-id NL002250100B57<br>
    contact@sculptclub.nl &nbsp;·&nbsp; +31 6 15 14 79 52
  </td></tr>
</table>
```

EN version: identical — a Dutch KvK/BTW footer is not translated; the identifiers are legal
values, and "BTW-id" is the correct term on an invoice issued from NL.

### Block B — dynamic invoice fields (OPERATOR maps these to Acuity's order variables)

Dutch law requires a full factuur to carry the items below. Acuity exposes order data through
`%merge%` variables (the confirmation templates already use `%appointmentType%`, `%time%`,
`%first%`), but **the exact variable names for order/receipt fields are not documented in this
repo and are NOT guessed here** — pick them from Acuity's own variable list in the template
editor, which shows what that template actually exposes.

Required: sequential invoice number · invoice date · buyer name (and address, for B2B) ·
description of the service · quantity · date of supply · net amount per VAT rate · the VAT rate
applied · the VAT amount · the total.

### ⚠️ Block C — the VAT rate: 9% is applied today, and is itself an open accountant question

Acuity receipts currently state **"Includes 9% BTW"** — so 9% is what is applied today. The
repo's other mentions of 21% vs 9% are **editorial content** in the BTW blog article written for
freelance trainers, not a statement of SculptClub's own rate.

The open question, raised on the Sales task in July and still unanswered, is whether **9% (sport)
or 21%** is correct for a **PT Strippenkaart** specifically — personal training is not obviously
the same supply as "gelegenheid geven tot sportbeoefening".

The rate genuinely depends on how each product is classified: studio rental to a trainer (room
hire, B2B) and "gelegenheid geven tot sportbeoefening" (Open Gym) do not automatically attract
the same rate. That is an accountant's determination about this business, not something an agent
should infer from a blog post — and a wrong rate on a real invoice is a real problem for the
operator and for every trainer who reclaims against it.

**So: Blocks A and B ship as soon as you paste them. Block C needs one line from you or your
accountant — the rate per product — and then the breakdown can be written in one pass.**

---

## 1. Open Gym confirmation (appointmentType 83513953 + trial 87017445)

**What it adds:** one primary "Book next session" button + the Open Gym membership upgrade options (per operator directive 2026-07-27: Open Gym emails promote Open Gym subscriptions; Studio Rental emails promote the studio packages — see Section 2).

> **Synced 2026-07-27 against `src/config/acuity.ts` + CLAUDE.md:**
> - Removed the "Populair — 8 sessies €49" row (product 2155888): it is no longer in the config, and its €49 price collides with the Zomerdeal price — two different "€49" products in one email is a support headache.
> - Onbeperkt was listed at €89 — wrong twice over. List price is **€79**, and while `openGymSummerDeal.active` is true the row promotes the **Zomerdeal product 2247082** at ~~€79~~ €49, price-locked ("deze prijs blijft zolang je lid blijft" — the honest framing per CLAUDE.md; never "daarna €69/€79" for the deal member).
> - ⚠️ **If the Zomerdeal is switched off** (`openGymSummerDeal.active: false` in `src/config/acuity.ts`), edit the pasted email in Acuity too: swap the Onbeperkt row's link to product **2155890** and the price to plain **€79 / 4 weken**, no badge, no strikethrough. The email is a pasted copy — it does NOT update itself when the config changes.

### NL (for `/nl/boek-gym` customers)

```html
<!-- ═══ SculptClub — Open Gym next steps (NL) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">Wat nu?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Boek je volgende Open Gym sessie</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#544A40;">Direct je volgende uur reserveren — één klik.</p>

      <!-- Primary CTA -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#EA580C;">
            <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=83513953"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
              Boek volgende sessie →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#544A40;font-weight:600;">Train vaker, betaal minder</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#8A8073;">Upgrade naar een lidmaatschap — altijd opzegbaar:</p>

      <!-- Subscription options -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155887"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Instapplan</strong> — 4 sessies &nbsp;·&nbsp; <span style="color:#544A40;">€29 / 4 weken</span>
            <span style="display:block;color:#8A8073;font-size:12px;margin-top:2px;">€7,25 per sessie</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155889"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Intensief</strong> — 12 sessies &nbsp;·&nbsp; <span style="color:#544A40;">€69 / 4 weken</span>
            <span style="display:block;color:#8A8073;font-size:12px;margin-top:2px;">€5,75 per sessie</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2247082"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:2px solid #EA580C;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Onbeperkt</strong> — Zoveel als je wilt
            <span style="display:inline-block;background:#EA580C;color:#0E0C0A;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Zomerdeal</span>
            <span style="display:block;color:#544A40;font-size:13px;margin-top:2px;"><span style="text-decoration:line-through;color:#8A8073;">€79</span> €49 / 4 weken — deze prijs blijft zolang je lid blijft</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:24px 0 0 0;font-size:12px;color:#8A8073;">Vragen? <a href="https://wa.me/31615147952" style="color:#EA580C;text-decoration:underline;">WhatsApp ons</a></p>
    </td>
  </tr>
</table>
```

### EN (for `/en/book-gym` customers)

```html
<!-- ═══ SculptClub — Open Gym next steps (EN) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">What's next?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Book your next Open Gym session</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#544A40;">Reserve your next hour — one click.</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#EA580C;">
            <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=83513953"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
              Book next session →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#544A40;font-weight:600;">Train more, pay less</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#8A8073;">Upgrade to a membership — cancel anytime:</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155887"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter Plan</strong> — 4 sessions &nbsp;·&nbsp; <span style="color:#544A40;">€29 / 4 weeks</span>
            <span style="display:block;color:#8A8073;font-size:12px;margin-top:2px;">€7.25 per session</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155889"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Intensive</strong> — 12 sessions &nbsp;·&nbsp; <span style="color:#544A40;">€69 / 4 weeks</span>
            <span style="display:block;color:#8A8073;font-size:12px;margin-top:2px;">€5.75 per session</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2247082"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:2px solid #EA580C;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Unlimited</strong> — As much as you want
            <span style="display:inline-block;background:#EA580C;color:#0E0C0A;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Summer deal</span>
            <span style="display:block;color:#544A40;font-size:13px;margin-top:2px;"><span style="text-decoration:line-through;color:#8A8073;">€79</span> €49 / 4 weeks — you keep this price for as long as you stay a member</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:24px 0 0 0;font-size:12px;color:#8A8073;">Questions? <a href="https://wa.me/31615147952" style="color:#EA580C;text-decoration:underline;">WhatsApp us</a></p>
    </td>
  </tr>
</table>
```

---

## 2. Studio Rental confirmation (appointmentTypes 84032351, 86677323, 82553655, 85410115)

**What it adds:** two "book next session" buttons (Half 60 + Full 60), the 4 studio discount packages (per operator directive 2026-07-27: Studio Rental emails promote the studio packages, not Open Gym), and a WhatsApp-invoice fallback.

> **Synced 2026-07-27 against `src/config/acuity.ts`:** product links updated to the CURRENT package products created at the 2026-07-18 repricing — Routine **2247124** · Pro **2248025** · Volume **2248026** (Starter stays 2149357). The old ids 2149358/59/60 this doc used were the pre-reprice products; they were price-corrected too, but the new ids are canonical and the old ones are due to be retired to Unavailable. Prices unchanged: Starter €89 (credit €99) · Routine €179 (€210) · Pro €299 (€375) · Volume €499 (€650).

### NL

```html
<!-- ═══ SculptClub — Studio Rental next steps (NL) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">Wat nu?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Boek je volgende sessie</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#544A40;">Kies de studio die bij je les past.</p>

      <!-- Two booking buttons side by side (table = bulletproof in email) -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#EA580C;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=84032351"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
                Half Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#EA580C;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=82553655"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
                Full Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#544A40;font-weight:600;">Train meer, bespaar meer</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#8A8073;">Koop een multi-pass — 1 jaar geldig:</p>

      <!-- 4 pack options -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149357"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter</strong> &nbsp;·&nbsp; <span style="color:#544A40;">€89</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€99</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 10%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2247124"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:2px solid #EA580C;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Routine</strong>
            <span style="display:inline-block;background:#EA580C;color:#0E0C0A;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Meest gekozen</span>
            &nbsp;·&nbsp; <span style="color:#544A40;">€179</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€210</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 15%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2248025"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Pro</strong> &nbsp;·&nbsp; <span style="color:#544A40;">€299</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€375</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 19%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2248026"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Volume</strong>
            <span style="display:inline-block;background:#16a34a;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Beste deal</span>
            &nbsp;·&nbsp; <span style="color:#544A40;">€499</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€650</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 23%</span>
          </a>
        </td></tr>
      </table>

      <!-- WhatsApp invoice fallback -->
      <p style="margin:20px 0 0 0;font-size:13px;color:#544A40;">
        Liever betalen via factuur?
        <a href="https://wa.me/31615147952?text=Hoi%21%20Ik%20wil%20graag%20een%20studio%20pakket%20kopen%20en%20betalen%20via%20factuur.%20Mijn%20naam%3A"
           style="color:#EA580C;text-decoration:underline;font-weight:600;">WhatsApp ons voor een bankoverschrijving →</a>
      </p>
    </td>
  </tr>
</table>
```

### EN

```html
<!-- ═══ SculptClub — Studio Rental next steps (EN) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">What's next?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Book your next session</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#544A40;">Pick the studio that fits your session.</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#EA580C;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=84032351"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
                Half Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#EA580C;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=82553655"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
                Full Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#544A40;font-weight:600;">Train more, save more</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#8A8073;">Buy a multi-pass — valid for 1 year:</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149357"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter</strong> &nbsp;·&nbsp; <span style="color:#544A40;">€89</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€99</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 10%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2247124"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:2px solid #EA580C;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Routine</strong>
            <span style="display:inline-block;background:#EA580C;color:#0E0C0A;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Most popular</span>
            &nbsp;·&nbsp; <span style="color:#544A40;">€179</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€210</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 15%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2248025"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Pro</strong> &nbsp;·&nbsp; <span style="color:#544A40;">€299</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€375</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 19%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2248026"
             style="display:block;padding:14px 16px;background:#F3F0EC;border:1px solid #D3CCC4;border-radius:10px;color:#0E0C0A;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Volume</strong>
            <span style="display:inline-block;background:#16a34a;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Best deal</span>
            &nbsp;·&nbsp; <span style="color:#544A40;">€499</span>
            <span style="color:#8A8073;text-decoration:line-through;font-size:12px;">&nbsp;€650</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 23%</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:20px 0 0 0;font-size:13px;color:#544A40;">
        Prefer bank transfer / invoice?
        <a href="https://wa.me/31615147952?text=Hi%21%20I%27d%20like%20to%20buy%20a%20studio%20pack%20and%20pay%20by%20invoice.%20My%20name%3A"
           style="color:#EA580C;text-decoration:underline;font-weight:600;">WhatsApp us for an invoice →</a>
      </p>
    </td>
  </tr>
</table>
```

---

## 3. Review request — FOLLOW-UP email (all appointment types)

> ⚠️ **This is a FOLLOW-UP email, not a confirmation email.** It must arrive *after* the session, never at booking time — asking for a review before someone has trained makes no sense and reads as spam.
>
> **Why this exists (added 2026-07-27):** SculptClub has **21 Google reviews**; local rivals have **126–719**. Review count is the single biggest driver of local-SERP visibility, and the site currently averages position ~48 on non-branded local queries. A `/review` link and a printable QR already exist — but nothing ever *asks*. This closes that gap: an automatic, honest ask after every completed session.
>
> This is the highest-ROI item in the Marketing project's own notes, and it compounds — every session becomes a chance at a review, forever, with no ongoing operator effort.

### ⚖️ Compliance — read before editing the copy

Google's review policies are strict and the penalties (review removal, profile action) land on **your** listing:

- **Never incentivise.** No discount, free session, or entry-to-win in exchange for a review. Not even a small one.
- **Never gate.** Don't ask only the happy customers, and don't pre-screen ("did you enjoy it? → if yes, review us"). Ask *everyone* the same way.
- **Never script the rating.** Don't write "leave us 5 stars". Ask for an honest review; the 5.0 takes care of itself.

The copy below is deliberately written to satisfy all three. If you rewrite it, keep those constraints.

### Where to set it up in Acuity (~3 min, one-time)

1. Log in to https://secure.acuityscheduling.com/
2. **Business Settings → Customize Appearance → Emails**
3. Find **"Follow-up email"** (Acuity may label it *Follow-Up* or *Post-appointment*). Enable it.
4. Timing: **1 day after** the appointment. Rationale: same-day is too soon (they may still be travelling home), and after ~3 days the session stops feeling fresh and reply rates fall off.
5. Switch the editor to **HTML / Source mode** and paste the block below.
6. Apply to **all appointment types** — Open Gym, Studio Rental, PT, trials. Everyone gets asked, which is also what keeps it compliant (no gating).

**VERIFY:** book a test appointment on a past date (or use Acuity's email preview), confirm the mail arrives and the button lands on the Google star form. `https://sculptclub.nl/review` is a stable redirect → verified live 2026-07-27 → resolves to `search.google.com/local/writereview?placeid=ChIJCXG6-WAJxkcRO-dqhcrQSgU`. Using the `/review` indirection (not the raw Google URL) means the destination can be changed in one place later.

### NL

```html
<!-- ═══ SculptClub — review request, follow-up (NL) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">Hoe was het?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Laat je het ons weten?</h3>
      <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#544A40;">
        We zijn een kleine studio aan de Egelantiersgracht — geen keten, geen marketingbudget.
        Mensen vinden ons vooral via Google. Een eerlijke review, goed of kritisch, helpt de
        volgende persoon beslissen of dit bij ze past. Kost je een minuut.
      </p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#EA580C;">
            <a href="https://sculptclub.nl/review"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
              Schrijf een review →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:20px 0 0 0;font-size:13px;line-height:1.6;color:#8A8073;">
        Liever iets rechtstreeks kwijt? App ons op
        <a href="https://wa.me/31615147952" style="color:#EA580C;text-decoration:none;">06 15 14 79 52</a>
        — we lezen alles en passen dingen echt aan.
      </p>
    </td>
  </tr>
</table>
```

### EN

```html
<!-- ═══ SculptClub — review request, follow-up (EN) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2A2620;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#8A8073;letter-spacing:0.1em;text-transform:uppercase;">How was it?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0E0C0A;">Would you tell us?</h3>
      <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#544A40;">
        We're a small studio on the Egelantiersgracht — no chain, no marketing budget.
        People mostly find us through Google. An honest review, glowing or critical, helps
        the next person work out whether this is right for them. Takes a minute.
      </p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#EA580C;">
            <a href="https://sculptclub.nl/review"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#0E0C0A;text-decoration:none;border-radius:12px;">
              Write a review →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:20px 0 0 0;font-size:13px;line-height:1.6;color:#8A8073;">
        Rather tell us directly? WhatsApp us on
        <a href="https://wa.me/31615147952" style="color:#EA580C;text-decoration:none;">+31 6 15 14 79 52</a>
        — we read everything and we do act on it.
      </p>
    </td>
  </tr>
</table>
```

### Why the copy is written this way

- **Gives a reason.** "Small studio, no marketing budget, people find us through Google" — a concrete, true reason to bother. Reciprocity beats a bare "please review us".
- **"Goed of kritisch" / "glowing or critical"** is doing real work: it's the honest ask that keeps this compliant, *and* it raises response rates because it doesn't feel like a performance request.
- **WhatsApp escape hatch** at the bottom, deliberately placed *after* the review button and not as an alternative to it. This is NOT gating — everyone still gets the review link first. It just gives someone with a real complaint a private route, which protects the rating honestly rather than by filtering.
- Dutch is `je/jouw` throughout, no `u`-vorm, no superlatives — per the SculptClub voice.

---

## Template-to-appointment-type mapping

| Appointment Type ID | Product | Paste block |
|---|---|---|
| 83513953 | Open Gym paid session | Section 1 (NL or EN based on the customer) |
| 87017445 | Open Gym free trial | Section 1 |
| 84032351 | Studio Rental — Half 60 | Section 2 |
| 86677323 | Studio Rental — Half 90 | Section 2 |
| 82553655 | Studio Rental — Full 60 | Section 2 |
| 85410115 | Studio Rental — Full 90 | Section 2 |
| 86758291 | Studio Rental free trial | Section 2 |

## Notes

- Acuity's rich-text editor can strip some styles on save. If the block looks broken after saving, re-open in **HTML source** mode and re-paste.
- All URLs are pulled from `src/config/acuity.ts` — if you add a new plan there, update this doc too.
- Currency formatting in NL uses `,` and EN uses `.` — already applied above.
