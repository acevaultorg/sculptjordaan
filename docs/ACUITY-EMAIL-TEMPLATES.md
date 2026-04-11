# Acuity Confirmation Email — Custom Blocks

Paste these HTML blocks at the bottom of the relevant confirmation emails in Acuity.

## Where to paste

1. Log in to https://secure.acuityscheduling.com/
2. **Business Settings → Customize Appearance → Emails → Confirmation email**
   (or per appointment type: **Appointment Types → [type] → Edit → Confirmation email custom text**)
3. Switch the editor to **HTML / Source mode**
4. Paste the relevant block at the bottom — keep Acuity's existing `%appointmentType%`, `%time%`, etc. variables above

Acuity emails render in Gmail/Outlook/Apple Mail. The markup below is table-based + inline styles for bulletproof rendering.

---

## 1. Open Gym confirmation (appointmentType 83513953 + trial 87017445)

**What it adds:** one primary "Book next session" button + the 4 membership upgrade options.

### NL (for `/nl/boek-gym` customers)

```html
<!-- ═══ SculptClub — Open Gym next steps (NL) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2a2f3a;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#7a8296;letter-spacing:0.1em;text-transform:uppercase;">Wat nu?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0b0d14;">Boek je volgende Open Gym sessie</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#4a5062;">Direct je volgende uur reserveren — één klik.</p>

      <!-- Primary CTA -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#134DE1;">
            <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=83513953"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
              Boek volgende sessie →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#4a5062;font-weight:600;">Train vaker, betaal minder</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#7a8296;">Upgrade naar een lidmaatschap — altijd opzegbaar:</p>

      <!-- Subscription options -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155887"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Instapplan</strong> — 4 sessies &nbsp;·&nbsp; <span style="color:#4a5062;">€29 / 4 weken</span>
            <span style="display:block;color:#7a8296;font-size:12px;margin-top:2px;">€7,25 per sessie</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155888"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:2px solid #134DE1;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Populair</strong> — 8 sessies
            <span style="display:inline-block;background:#134DE1;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Meest gekozen</span>
            <span style="display:block;color:#4a5062;font-size:13px;margin-top:2px;">€49 / 4 weken — €6,13 per sessie</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155889"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Intensief</strong> — 12 sessies &nbsp;·&nbsp; <span style="color:#4a5062;">€69 / 4 weken</span>
            <span style="display:block;color:#7a8296;font-size:12px;margin-top:2px;">€5,75 per sessie</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155890"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Onbeperkt</strong> — Zoveel als je wilt &nbsp;·&nbsp; <span style="color:#4a5062;">€89 / 4 weken</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:24px 0 0 0;font-size:12px;color:#7a8296;">Vragen? <a href="https://wa.me/31683178934" style="color:#134DE1;text-decoration:underline;">WhatsApp ons</a></p>
    </td>
  </tr>
</table>
```

### EN (for `/en/book-gym` customers)

```html
<!-- ═══ SculptClub — Open Gym next steps (EN) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2a2f3a;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#7a8296;letter-spacing:0.1em;text-transform:uppercase;">What's next?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0b0d14;">Book your next Open Gym session</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#4a5062;">Reserve your next hour — one click.</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="border-radius:12px;background:#134DE1;">
            <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=83513953"
               style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
              Book next session →
            </a>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#4a5062;font-weight:600;">Train more, pay less</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#7a8296;">Upgrade to a membership — cancel anytime:</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155887"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter Plan</strong> — 4 sessions &nbsp;·&nbsp; <span style="color:#4a5062;">€29 / 4 weeks</span>
            <span style="display:block;color:#7a8296;font-size:12px;margin-top:2px;">€7.25 per session</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155888"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:2px solid #134DE1;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Popular</strong> — 8 sessions
            <span style="display:inline-block;background:#134DE1;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Most popular</span>
            <span style="display:block;color:#4a5062;font-size:13px;margin-top:2px;">€49 / 4 weeks — €6.13 per session</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155889"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Intensive</strong> — 12 sessions &nbsp;·&nbsp; <span style="color:#4a5062;">€69 / 4 weeks</span>
            <span style="display:block;color:#7a8296;font-size:12px;margin-top:2px;">€5.75 per session</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2155890"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Unlimited</strong> — As much as you want &nbsp;·&nbsp; <span style="color:#4a5062;">€89 / 4 weeks</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:24px 0 0 0;font-size:12px;color:#7a8296;">Questions? <a href="https://wa.me/31683178934" style="color:#134DE1;text-decoration:underline;">WhatsApp us</a></p>
    </td>
  </tr>
</table>
```

---

## 2. Studio Rental confirmation (appointmentTypes 84032351, 86677323, 82553655, 85410115)

**What it adds:** two "book next session" buttons (Half 60 + Full 60), 4 discount pack options, and a WhatsApp-invoice fallback.

### NL

```html
<!-- ═══ SculptClub — Studio Rental next steps (NL) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2a2f3a;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#7a8296;letter-spacing:0.1em;text-transform:uppercase;">Wat nu?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0b0d14;">Boek je volgende sessie</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#4a5062;">Kies de studio die bij je les past.</p>

      <!-- Two booking buttons side by side (table = bulletproof in email) -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#134DE1;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=84032351"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
                Half Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#134DE1;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=82553655"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
                Full Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#4a5062;font-weight:600;">Train meer, bespaar meer</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#7a8296;">Koop een multi-pass — 1 jaar geldig:</p>

      <!-- 4 pack options -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149357"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter</strong> &nbsp;·&nbsp; <span style="color:#4a5062;">€89</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€99</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 10%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149358"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:2px solid #134DE1;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Routine</strong>
            <span style="display:inline-block;background:#134DE1;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Meest gekozen</span>
            &nbsp;·&nbsp; <span style="color:#4a5062;">€199</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€234</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 15%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149359"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Pro</strong> &nbsp;·&nbsp; <span style="color:#4a5062;">€349</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€436</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 19%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149360"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Volume</strong>
            <span style="display:inline-block;background:#16a34a;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Beste deal</span>
            &nbsp;·&nbsp; <span style="color:#4a5062;">€549</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€713</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Bespaar 23%</span>
          </a>
        </td></tr>
      </table>

      <!-- WhatsApp invoice fallback -->
      <p style="margin:20px 0 0 0;font-size:13px;color:#4a5062;">
        Liever betalen via factuur?
        <a href="https://wa.me/31683178934?text=Hoi%21%20Ik%20wil%20graag%20een%20studio%20pakket%20kopen%20en%20betalen%20via%20factuur.%20Mijn%20naam%3A"
           style="color:#134DE1;text-decoration:underline;font-weight:600;">WhatsApp ons voor een bankoverschrijving →</a>
      </p>
    </td>
  </tr>
</table>
```

### EN

```html
<!-- ═══ SculptClub — Studio Rental next steps (EN) ═══ -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px;border-top:1px solid #2a2f3a;padding-top:28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:0 16px;">
      <p style="margin:0 0 8px 0;font-size:12px;color:#7a8296;letter-spacing:0.1em;text-transform:uppercase;">What's next?</p>
      <h3 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:#0b0d14;">Book your next session</h3>
      <p style="margin:0 0 20px 0;font-size:14px;color:#4a5062;">Pick the studio that fits your session.</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
        <tr>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#134DE1;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=84032351"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
                Half Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
          <td style="padding:0 6px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-radius:12px;background:#134DE1;">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=36720238&appointmentType=82553655"
                 style="display:inline-block;padding:14px 22px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;">
                Full Studio (60 min) →
              </a>
            </td></tr></table>
          </td>
        </tr>
      </table>

      <p style="margin:36px 0 14px 0;font-size:14px;color:#4a5062;font-weight:600;">Train more, save more</p>
      <p style="margin:0 0 16px 0;font-size:13px;color:#7a8296;">Buy a multi-pass — valid for 1 year:</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:480px;margin:0 auto;">
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149357"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Starter</strong> &nbsp;·&nbsp; <span style="color:#4a5062;">€89</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€99</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 10%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149358"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:2px solid #134DE1;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Routine</strong>
            <span style="display:inline-block;background:#134DE1;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Most popular</span>
            &nbsp;·&nbsp; <span style="color:#4a5062;">€199</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€234</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 15%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149359"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Pro</strong> &nbsp;·&nbsp; <span style="color:#4a5062;">€349</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€436</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 19%</span>
          </a>
        </td></tr>
        <tr><td style="padding:4px 0;">
          <a href="https://app.acuityscheduling.com/catalog.php?owner=36720238&action=addCart&clear=1&id=2149360"
             style="display:block;padding:14px 16px;background:#f5f6fa;border:1px solid #e4e7ef;border-radius:10px;color:#0b0d14;text-decoration:none;font-size:14px;text-align:left;">
            <strong>Volume</strong>
            <span style="display:inline-block;background:#16a34a;color:#ffffff;padding:2px 10px;border-radius:999px;font-size:11px;margin-left:6px;font-weight:600;">Best deal</span>
            &nbsp;·&nbsp; <span style="color:#4a5062;">€549</span>
            <span style="color:#7a8296;text-decoration:line-through;font-size:12px;">&nbsp;€713</span>
            <span style="display:block;color:#16a34a;font-size:12px;margin-top:2px;">Save 23%</span>
          </a>
        </td></tr>
      </table>

      <p style="margin:20px 0 0 0;font-size:13px;color:#4a5062;">
        Prefer bank transfer / invoice?
        <a href="https://wa.me/31683178934?text=Hi%21%20I%27d%20like%20to%20buy%20a%20studio%20pack%20and%20pay%20by%20invoice.%20My%20name%3A"
           style="color:#134DE1;text-decoration:underline;font-weight:600;">WhatsApp us for an invoice →</a>
      </p>
    </td>
  </tr>
</table>
```

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
