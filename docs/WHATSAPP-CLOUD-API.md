# WhatsApp Business Cloud API — integration

**Status:** skeleton shipped (2026-06-21), **NOT live**. Code is safe-when-unconfigured.
**Split:** brain built the code; **operator provisions** Meta + a dedicated number + token + billing (hard gate: new account + credentials + payment).

## What this gives you (once provisioned)

- **Inbound webhook** — every WhatsApp message to the business number hits
  `POST /api/whatsapp/webhook`, gets classified by intent (`studio_rental` |
  `trainer` | `open_gym` | `generic`), and NEW trainer/studio-rental enquiries
  are logged so they reach the Sales pipeline.
- **Outbound send helper** — `sendMessage()` for automated acknowledgements /
  template messages. **OFF by default** (gated behind `WHATSAPP_SEND_ENABLED`)
  so nothing is ever sent as you without explicit opt-in.
- **"Click-to-WhatsApp" lead capture** — ad/site WhatsApp clicks that land in the
  inbox get auto-classified + logged (no manual sheet entry).

## Files

- `src/lib/whatsapp-cloud.ts` — config, webhook verify, inbound parse, intent
  classifier (mirrors `analytics.tsx` `detectWaIntent` taxonomy), `sendMessage()`.
- `src/app/api/whatsapp/webhook/route.ts` — `GET` (Meta verify handshake) +
  `POST` (inbound → classify → log). Returns 200 fast (Meta retries non-200).

## Lead capture (until a Sheets write is wired)

Mirrors `src/app/api/lead-magnet/route.ts`: leads are logged to Vercel
function-logs — **persistent, retrievable, nothing lost**:

```
vercel logs sculptclub --since=30d | grep WHATSAPP_LEAD
```

Each `WHATSAPP_LEAD` row: `{ ts, name, from_masked (last-4 only), intent, message, message_id }`.
Paste them into the **Sales** tab, or wire an automatic Google Sheets append later
(service-account TODO is in the route file).

## Provisioning (OPERATOR — ~30-45 min, hard gate)

1. **developers.facebook.com** → **Create app** → type **Business**.
2. Add the **WhatsApp** product to the app.
3. **Register a DEDICATED phone number** for the API.
   ⚠️ It **cannot** be the same number that's in your normal WhatsApp Business
   *app* (the +31 6 15 14 79 52 line). A number can be on the app **or** the API,
   not both. Use a second number (or migrate — but migrating removes it from the app).
4. Copy the **Phone Number ID** and generate a **permanent access token**
   (System User token in Business Settings — temp tokens expire in 24h).
5. Pick a **verify token** (any random string you choose).
6. Add env vars (Vercel → Project → Settings → Environment Variables):
   ```
   WHATSAPP_VERIFY_TOKEN=<the random string you chose>
   WHATSAPP_TOKEN=<permanent access token>
   WHATSAPP_PHONE_NUMBER_ID=<phone number id>
   # leave this OUT (or =false) to keep auto-replies OFF:
   # WHATSAPP_SEND_ENABLED=true
   ```
7. In the app's **WhatsApp → Configuration → Webhook**:
   - Callback URL: `https://sculptclub.nl/api/whatsapp/webhook`
   - Verify token: the same `WHATSAPP_VERIFY_TOKEN`
   - Subscribe to the **messages** field.
8. Deploy (this skeleton ships with the next batched deploy).

## Verify it works

- Webhook handshake: Meta shows a green "Verified" when the callback URL +
  verify token match (the `GET` echoes `hub.challenge`).
- Send a test WhatsApp to the API number → check
  `vercel logs sculptclub | grep WHATSAPP_LEAD` (a studio-rental message) or
  `grep WHATSAPP_INBOUND` (anything else).

## Cost

Free tier of conversations, then **metered per conversation** (Meta's
conversation-based pricing). At SculptClub's volume this is small, but it IS
paid above the free tier — your billing decision.

## Enabling auto-replies (later, optional)

Set `WHATSAPP_SEND_ENABLED=true` and add a `sendMessage(m.from, draft)` call in
the route's POST loop. Keep drafts short + on-brand (NL voice: je/jouw, no u, no
hype). Auto-sending as the business is your call — it stays off until you flip it.
