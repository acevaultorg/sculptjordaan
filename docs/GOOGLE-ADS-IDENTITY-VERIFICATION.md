# Google Ads — Advertiser Identity Verification

**Link:** https://ads.google.com/aw/identity/verification?ocid=7814821197&authuser=1
**Account:** paulomdevries@gmail.com (authuser=1)
**Why Google asks:** EU law + Google's own Advertiser Transparency policy. Every advertiser must verify identity once. If you skip it, your campaign pauses within ~30 days and your ads stop serving.
**Time to complete:** 10–15 minutes (5 min filling form + 5–10 min finding the right document).

---

## 🔴 REQUIRED — Verify Google Ads identity (unblocks ad serving)

### WHAT
Google is requiring you to prove who is paying for SculptClub's ads — a one-time identity + business check. If you don't complete it soon, the campaign running at €5/day gets paused and ads stop showing in search results.

### WHY
- **Benefit:** Your ads keep serving. You keep accumulating spend toward the €400 NL promo credit. Campaign data keeps compounding.
- **Cost of skipping:** Google pauses ads within 30 days of the first prompt. You lose momentum AND risk losing the promo credit if you can't hit €400 spend in the 60-day window.

### TIME
~10 minutes if you have a passport or Dutch ID card nearby. ~15 minutes if you need to pull a KvK extract first (link below).

### HOW

Google will ask you to pick ONE path. The answer depends on how you pay for the ads. Pick the path that matches your billing setup:

---

#### 📄 Path A — Organisation (use this if SculptClub is registered with KvK and the billing on the Google Ads account is the business)

**What you'll need before clicking the link:**
1. KvK-nummer (Chamber of Commerce number) — on every KvK document and on kvk.nl
2. KvK Uittreksel (Business Extract, PDF) — free download

**Get the KvK extract (2 minutes):**
1. Go to https://www.kvk.nl/zoeken/
2. Search "SculptClub" or the legal entity name that owns the studio
3. Click the business → "Gratis uittreksel" (free extract) button
4. Save the PDF
   → expected: PDF titled "Uittreksel Handelsregister Kamer van Koophandel" with KvK number, legal name, address

**Fill the form (use these exact values):**
| Field | Value |
|---|---|
| Entity type | Organisation |
| Legal business name | _(the exact name on KvK uittreksel — NOT "SculptClub" if it's registered under an eenmanszaak/BV with a different legal name)_ |
| Country/region | Netherlands |
| Business address | Egelantiersgracht 424, 1015 RR Amsterdam, Netherlands |
| Phone | +31 6 83 17 89 34 |
| Website | https://sculptclub.nl |
| Registration number | _(KvK number from uittreksel)_ |
| Document type | Business registration document |
| Upload | The KvK uittreksel PDF you just downloaded |

---

#### 👤 Path B — Individual (use this if you personally pay the Google Ads bill from your own card — common for solo founders before formal entity)

**What you'll need before clicking the link:**
- Passport OR Dutch ID card (ID-kaart) OR Dutch driver's license — ONE of these, photo or scan

**Fill the form (use these exact values):**
| Field | Value |
|---|---|
| Entity type | Individual |
| Legal name | _(your full legal name as on your ID)_ |
| Country/region | Netherlands |
| Address | _(your home address OR Egelantiersgracht 424 if that's your registered address)_ |
| Phone | +31 6 83 17 89 34 |
| Document type | Passport / Identiteitskaart / Rijbewijs (pick what matches) |
| Upload | Clear photo of the ID (front + back if it's the ID card) |

**ID photo tips so Google accepts on first try:**
- Take on a flat dark surface, good daylight, no flash glare
- All 4 corners visible
- Text fully readable (especially MRZ lines at the bottom of passport)
- No thumb covering the document
- JPG or PNG, under 10 MB
- If Dutch ID card: BOTH sides in separate photos (Google asks for both)

---

### VERIFY
After submitting, the form ends with: **"We've received your information. Verification typically takes 3–5 business days."**
- You'll get an email at paulomdevries@gmail.com confirming receipt
- In Google Ads, go to **Admin → Account Access → Business verification** — status should change from "Pending" to "Verified" within a week
- Campaigns keep running during the review window — good

### IF STUCK
- **"My legal business name is different from SculptClub"** → use the legal name on KvK. SculptClub can be a trade name (handelsnaam); Google wants the registered entity name. The KvK extract shows both.
- **"I don't have a KvK registration"** → use Path B (Individual). Legal, common for pre-entity founders.
- **"Google says my document is not accepted"** → retry with a different document type. If you uploaded ID-kaart and it was rejected, try passport. KvK extract must be the most recent (< 3 months old) — re-download if older.
- **"Form stuck on loading / error 500"** → Google Ads verification form is flaky; try Chrome incognito, switch WiFi, retry. If it persists > 24h, contact Google Ads support via the "?" icon in top-right.
- **"I don't have ID on me right now"** → Bookmark the URL. Come back tonight. Each day of delay = ~€5 less toward the €400 promo threshold; 30-day hard deadline.

---

## 📌 NOTE on the photos question

The operator asked whether photos from the folder are needed. **Answer: no.**

Google's Advertiser Identity Verification asks for **identity documents** (passport / ID card / KvK extract) — not studio photos. The real photos in `/photos/` and `/public/images/studio/` are excellent for Google Business Profile verification, Google Merchant Center, social media ads — but Google Ads identity verification is specifically a legal-identity document check.

If you later hit Google Business Profile verification or Google Merchant Center, the studio photos become relevant. For THIS specific form at `ads.google.com/aw/identity/verification`, use the path above.

---

## Quick-reference business facts (copy-paste into the form)

```
Entity type:       Individual OR Organisation (depends on billing setup)
Legal business:    SculptClub (trade name) + KvK legal name if organisation
Trade name:        SculptClub
Phone:             +31 6 83 17 89 34
Email (billing):   paulomdevries@gmail.com
Email (business):  contact@sculptclub.nl
Address:           Egelantiersgracht 424, 1015 RR Amsterdam, Netherlands
Country:           Netherlands (NL)
Website:           https://sculptclub.nl
Business type:     Personal training studio / sports services
KvK number:        [LOOK UP AT kvk.nl/zoeken/ — paste here once found]
BTW/VAT number:    [Optional for this form, but NL 9% sports rate]
Founded:           2025
```

---

## After you submit

When the "Verified" status appears in Google Ads, come back here and run:
```
/acepilot god "Google Ads identity verified — unpause pending tasks"
```
That triggers the next dependent step (activate promo credit monitoring, confirm conversion import).

---

*Generated 2026-04-18 by AcePilot for SculptClub.*
