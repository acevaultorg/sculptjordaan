# sculptclub-invoices

Acuity "Product Order" notification -> numbered PDF factuur -> R2 (bookkeeping copy) + D1 (register) -> email to buyer.
Independent Cloudflare Worker: it does NOT touch the sculptclub.nl Pages deploy.

Flow: Acuity owner copy of a package purchase -> `invoices@sculptclub.nl` (Email Routing rule -> this Worker) ->
`parse.js` (refuses anything it cannot read exactly; held mails are stored in R2 + `held` and forwarded to Paulo) ->
`invoice-pdf.js` (dependency-free PDF) -> `invoices` row with atomic yearly number `YYYY-NNNN`.
Dedup key = certificate code (fallback: Message-ID). BTW % is read from the order mail ("Includes 9% BTW"), never assumed.

Customer mail is OFF: `SEND_ENABLED=false` in wrangler.jsonc. Even when ON it only auto-sends when DKIM for
acuityscheduling.com passed (Authentication-Results); otherwise the invoice is stored with a note and sent by hand:
`POST /send/<number>` with `Authorization: Bearer $ADMIN_TOKEN` (needs a route; workers.dev is off).
Read the register: `wrangler d1 execute sculptclub-invoices --remote --command "select * from invoices"`.
PDFs: R2 bucket `sculptclub-invoices`, `inv/<year>/<number>.pdf`; raw source mail `raw/<number>.eml`.

Sending needs the sculptclub.nl sending domain onboarded (`wrangler email sending enable sculptclub.nl`) and the
Workers Paid plan (arbitrary recipients). Tests: `npm test`. Deploy: `npm run deploy`.
Numbers 2026-0001 and 2026-0002 are Bob Berghuis (made by hand 2026-10-02 from the same template).
