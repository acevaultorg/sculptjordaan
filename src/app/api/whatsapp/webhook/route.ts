import { NextResponse } from "next/server";
import {
  getWaConfig,
  verifyWebhook,
  parseInbound,
  classifyTrainerLead,
} from "@/lib/whatsapp-cloud";

/**
 * WhatsApp Business Cloud API webhook (skeleton, 2026-06-21).
 *
 * BRAIN built this; OPERATOR provisions Meta + a DEDICATED number + token + billing.
 * Full setup: docs/WHATSAPP-CLOUD-API.md.
 *
 * GET  /api/whatsapp/webhook — Meta verification handshake (hub.challenge echo).
 * POST /api/whatsapp/webhook — inbound message events.
 *
 * SAFE WHEN UNCONFIGURED: with no env set, GET 403s and POST just 200s + no-ops,
 * so deploying this route changes nothing on the live site until the operator
 * provisions the Cloud API and points the webhook here.
 *
 * Lead capture mirrors src/app/api/lead-magnet/route.ts: until a Sheets/CRM
 * write is wired, NEW trainer/studio-rental enquiries are logged to Vercel
 * function-logs (persistent, retrievable, NOTHING lost):
 *   vercel logs sculptclub --since=30d | grep WHATSAPP_LEAD
 * The operator can then paste them into the "Sales" sheet, or we wire a Google
 * service-account append later (see the OPERATOR-ACTION TODO below).
 *
 * Outbound auto-reply is DISABLED by default (whatsapp-cloud.ts sendMessage is
 * gated behind WHATSAPP_SEND_ENABLED) — messaging-as-operator stays an operator
 * decision, never automated without explicit opt-in.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Mask a phone number to last 4 digits — reduces PII in logs while still letting
 *  the operator match a logged lead to a real conversation. */
function mask(num: string): string {
  if (!num) return "unknown";
  return num.length <= 4 ? "***" : `***${num.slice(-4)}`;
}

// GET — Meta webhook verification. Echoes hub.challenge when the verify token matches.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const echoed = verifyWebhook(mode, token, challenge);
  if (echoed) {
    // Meta requires the raw challenge string (text/plain), 200.
    return new NextResponse(echoed, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

// POST — inbound messages. Must return 200 fast (Meta retries on non-200).
export async function POST(req: Request) {
  const cfg = getWaConfig();

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const messages = parseInbound(body);

  for (const m of messages) {
    if (!m.text) continue;
    const cls = classifyTrainerLead(m.text);

    if (cls.isTrainerLead) {
      // Persist the lead to function-logs (retrievable). Mask the number (PII),
      // truncate the message. Name + intent are enough to log into the Sales sheet.
      console.log(
        "WHATSAPP_LEAD",
        JSON.stringify({
          ts: new Date().toISOString(),
          name: m.name || "unknown",
          from_masked: mask(m.from),
          intent: cls.intent,
          message: m.text.slice(0, 200),
          message_id: m.messageId,
          source: "whatsapp_cloud_api",
        }),
      );

      // OPERATOR-ACTION TODO (when a Sheets write is wanted): append a row to the
      // "Sales" tab via a Google service account, mirroring the gviz read used by
      // the Sales lead pipeline:
      //   - create a service account, share the sheet with its email (Editor)
      //   - add GOOGLE_SA_KEY (base64 JSON) to env
      //   - sheets.spreadsheets.values.append({ range: "Sales!A:D",
      //       values: [[m.name, "WhatsApp (API)", "Te benaderen", ""]] })
      // Until then, the console.log above loses nothing.
    } else {
      // Non-lead inbound (existing client PT chat, open-gym, generic) — count it
      // for visibility but don't treat as a Sales lead.
      console.log(
        "WHATSAPP_INBOUND",
        JSON.stringify({ ts: new Date().toISOString(), intent: cls.intent, from_masked: mask(m.from) }),
      );
    }

    // NOTE: auto-reply intentionally NOT called here. To enable an automated
    // acknowledgement, the operator sets WHATSAPP_SEND_ENABLED=true and we add a
    // sendMessage(m.from, draft) call — kept off by default (operator gate).
  }

  return NextResponse.json({ ok: true, processed: messages.length }, { status: 200 });
}
