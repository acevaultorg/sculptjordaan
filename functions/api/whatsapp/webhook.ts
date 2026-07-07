// GET/POST /api/whatsapp/webhook — WhatsApp Business Cloud API webhook.
// Ported (minimal, safe-when-unconfigured) from src/app/api/whatsapp/webhook/route.ts
// during the Vercel→CF Pages migration (2026-07-07). The original depends on
// src/lib/whatsapp-cloud.ts (parse/classify/send). WhatsApp is NOT provisioned
// (no env set), so the LIVE behaviour today is exactly: GET → 403, POST → 200 no-op.
// This port preserves that inert behaviour + the Meta verification handshake.
//
// FOLLOW-UP (when operator provisions Meta + a dedicated number + token): port
// the full inbound parse/classify/lead-log from src/lib/whatsapp-cloud.ts here.
// See docs/WHATSAPP-CLOUD-API.md.

interface Env {
  WHATSAPP_VERIFY_TOKEN?: string;
}

// Meta verification handshake: echo hub.challenge iff the verify token matches.
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge") || "";
  const expected = context.env.WHATSAPP_VERIFY_TOKEN;

  if (expected && mode === "subscribe" && token === expected) {
    return new Response(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return new Response("Forbidden", { status: 403 });
};

// Inbound message events. Unconfigured → accept + no-op (Meta requires a 200).
export const onRequestPost: PagesFunction<Env> = async () => {
  return new Response("OK", { status: 200 });
};
