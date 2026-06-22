/**
 * WhatsApp Business Cloud API — integration helpers (skeleton, 2026-06-21).
 *
 * BRAIN built this; OPERATOR provisions Meta + a DEDICATED number + token + billing
 * (hard gate: new account + credentials + payment). See docs/WHATSAPP-CLOUD-API.md.
 *
 * Everything here is env-driven and SAFE in production when UNCONFIGURED:
 *   - No env → isConfigured() === false → the webhook verify 403s and sending no-ops.
 *   - Sending is ALSO gated behind WHATSAPP_SEND_ENABLED (default OFF) so an automated
 *     reply can never go out as the operator until they explicitly flip it on
 *     (messaging-as-operator is an operator decision, never the brain's).
 *
 * NO secrets are committed — all read from process.env at runtime.
 */

const GRAPH_VERSION = "v21.0";

export interface WaConfig {
  verifyToken: string | undefined;
  token: string | undefined;
  phoneNumberId: string | undefined;
  sendEnabled: boolean;
}

export function getWaConfig(): WaConfig {
  return {
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN,
    token: process.env.WHATSAPP_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    // Default OFF — automated outbound stays disabled until operator opts in.
    sendEnabled: process.env.WHATSAPP_SEND_ENABLED === "true",
  };
}

/** True only when the inbound side (verify token) is provisioned. */
export function isVerifyConfigured(cfg = getWaConfig()): boolean {
  return Boolean(cfg.verifyToken);
}

/** True only when the outbound side (token + phone id) is provisioned. */
export function isSendConfigured(cfg = getWaConfig()): boolean {
  return Boolean(cfg.token && cfg.phoneNumberId);
}

/**
 * Webhook verification handshake (Meta GET challenge).
 * Returns the challenge string to echo back, or null to 403.
 */
export function verifyWebhook(
  mode: string | null,
  token: string | null,
  challenge: string | null,
  cfg = getWaConfig(),
): string | null {
  if (!isVerifyConfigured(cfg)) return null;
  if (mode === "subscribe" && token === cfg.verifyToken && challenge) {
    return challenge;
  }
  return null;
}

export interface InboundMessage {
  /** Sender phone number in international format (PII — never log raw/persist long-term). */
  from: string;
  /** Display name from the contacts payload, if present. */
  name: string;
  /** Text body (empty for non-text message types). */
  text: string;
  /** WhatsApp message id (for idempotency / send-reply targeting). */
  messageId: string;
  type: string;
}

/**
 * Parse the Cloud API webhook payload into a flat list of inbound messages.
 * Tolerant of missing fields + non-message events (status callbacks) → returns [].
 */
export function parseInbound(body: unknown): InboundMessage[] {
  const out: InboundMessage[] = [];
  try {
    const entries = (body as { entry?: unknown[] })?.entry ?? [];
    for (const entry of entries) {
      const changes = (entry as { changes?: unknown[] })?.changes ?? [];
      for (const change of changes) {
        const value = (change as { value?: Record<string, unknown> })?.value ?? {};
        const messages = (value.messages as Record<string, unknown>[]) ?? [];
        const contacts = (value.contacts as Record<string, unknown>[]) ?? [];
        const nameByWaId: Record<string, string> = {};
        for (const c of contacts) {
          const waId = String(c.wa_id ?? "");
          const profile = c.profile as { name?: string } | undefined;
          if (waId) nameByWaId[waId] = profile?.name ?? "";
        }
        for (const m of messages) {
          const from = String(m.from ?? "");
          const type = String(m.type ?? "");
          const textObj = m.text as { body?: string } | undefined;
          out.push({
            from,
            name: nameByWaId[from] ?? "",
            text: textObj?.body ?? "",
            messageId: String(m.id ?? ""),
            type,
          });
        }
      }
    }
  } catch {
    // Malformed payload → no messages. Webhook still returns 200 (Meta requirement).
  }
  return out;
}

export type WaIntent = "studio_rental" | "trainer" | "open_gym" | "generic";

export interface LeadClassification {
  intent: WaIntent;
  /** True when this looks like a NEW trainer / studio-rental lead worth logging. */
  isTrainerLead: boolean;
}

/**
 * Classify an inbound text by intent — mirrors the keyword taxonomy used in
 * src/components/layout/analytics.tsx detectWaIntent (trainer | studio_rental |
 * open_gym | generic) so on-site clicks and inbound API messages classify the
 * same way. studio_rental = the #1 sales lever (ZZP trainer renting the studio).
 */
export function classifyTrainerLead(text: string): LeadClassification {
  const t = (text || "").toLowerCase();
  if (
    t.includes("studio huren") ||
    t.includes("ruimte huren") ||
    t.includes("trainingsruimte") ||
    t.includes("renting the studio") ||
    t.includes("rent the studio") ||
    t.includes("studio bekijken") ||
    t.includes("huren van de studio") ||
    t.includes("fysiotherapeut")
  ) {
    return { intent: "studio_rental", isTrainerLead: true };
  }
  if (t.includes("open gym")) {
    return { intent: "open_gym", isTrainerLead: false };
  }
  if (
    t.includes("trainer worden") ||
    t.includes("become a trainer") ||
    t.includes("join as a trainer") ||
    (t.includes("trainer") && (t.includes("huur") || t.includes("rent") || t.includes("studio")))
  ) {
    return { intent: "trainer", isTrainerLead: true };
  }
  return { intent: "generic", isTrainerLead: false };
}

export interface SendResult {
  ok: boolean;
  skipped?: boolean;
  reason?: string;
  status?: number;
}

/**
 * Send a WhatsApp text message via the Cloud API.
 *
 * DISABLED BY DEFAULT: returns { skipped: true } unless BOTH the outbound creds
 * are provisioned AND WHATSAPP_SEND_ENABLED === "true". This keeps automated
 * outbound off until the operator explicitly opts in (messaging-as-operator is
 * an operator decision). Drafts can be generated freely; this only SENDS.
 */
export async function sendMessage(to: string, text: string, cfg = getWaConfig()): Promise<SendResult> {
  if (!cfg.sendEnabled) return { ok: false, skipped: true, reason: "send_disabled" };
  if (!isSendConfigured(cfg)) return { ok: false, skipped: true, reason: "not_configured" };
  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${cfg.phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cfg.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body: text },
        }),
      },
    );
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, reason: "fetch_failed" };
  }
}
