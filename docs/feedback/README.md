# Feedback forms (live since 2026-09-21, card mubc1udkwgp5rp)

Two forms, five questions each, under a minute on a phone, no login.

| who | short link (for QR, WhatsApp, mail) | pages |
|---|---|---|
| people who train here | `sculptclub.nl/feedback` | `/nl/feedback`, `/en/feedback` |
| trainers who rent the studio | `sculptclub.nl/feedback/trainers` | `/nl/feedback/trainers`, `/en/feedback/trainers` |

The short links pick Dutch or English from the phone's language, like `/start`.
All four pages are noindex and not in the sitemap: they are reached by link or QR only.

## QR codes (print these)
- `docs/feedback/feedback-qr.png` opens `https://sculptclub.nl/feedback?utm_source=qr`
- `docs/feedback/feedback-trainers-qr.png` opens `https://sculptclub.nl/feedback/trainers?utm_source=qr`
Both were decoded after generation and return exactly those URLs.

## Reading the answers
`npm run feedback:read` (add `-- --consented` for answers that may be published, `-- --json` for raw data).
Storage: Workers KV namespace `sculptclub-feedback` (`2194471adf0843c1aa768dccdb9c7356`), bound to the
Pages project as `FEEDBACK`. No IP address or user agent is stored. Rows delete themselves after 2 years,
which is what the privacy policy (section 7) promises.

## Rules
1. An answer may be shown on the site ONLY when `consent_publish` is `true`. The box starts unticked.
   Publishing a quote is a manual step: copy it into `src/config/trainers.ts` testimonials by hand.
2. The Google review link on the thank-you screen is shown to everyone. Never make it depend on the
   rating: asking only happy people is review gating and is against Google's policy.
3. The equipment question is input for buying decisions. Nothing on the form promises a purchase.
4. The form fires the GA4 event `feedback_submit` only. It must never fire the Ads `conversion`.

## Numbers to watch
Submissions per week, consented quotes collected, Google review count (19 on 2026-09-21, `siteConfig.rating`).
