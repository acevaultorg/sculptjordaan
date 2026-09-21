// POST /api/feedback — stores one feedback submission in Workers KV (binding FEEDBACK).
//
// Two audiences share this endpoint: "client" (people who train here) and
// "renter" (trainers who rent the studio). Pages: /{nl,en}/feedback and
// /{nl,en}/feedback/trainers. Form component: src/components/marketing/feedback-form.tsx.
//
// PRIVACY CONTRACT (mirrored in the privacy policy, section 1.5 + 7):
//   - No IP address and no user agent are stored. Minimum fields only.
//   - first_name and email are optional; email only "if you want a reply".
//   - consent_publish is true ONLY when the visitor ticked the separate, unticked
//     consent box. Nothing on the site reads this store; publishing a quote is a
//     manual, human step and only ever for rows where consent_publish === true.
//
// READ submissions:  npm run feedback:read   (scripts/feedback-read.mjs)
//
// Spam floor (cheap, no third party): honeypot field, minimum time on page,
// size caps. If spam ever shows up, add Turnstile; do not add an IP log.

interface Env {
  FEEDBACK?: KVNamespace;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const AUDIENCES = new Set(["client", "renter"]);
const GROUP = new Set(["yes", "maybe", "no", ""]);

const text = (v: unknown, max: number): string =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";

const list = (v: unknown, maxItems: number, maxLen: number): string[] =>
  Array.isArray(v)
    ? v
        .filter((x): x is string => typeof x === "string")
        .map((x) => x.trim().slice(0, maxLen))
        .filter(Boolean)
        .slice(0, maxItems)
    : [];

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const raw = await context.request.text();
  if (raw.length > 8000) return json({ error: "Too large" }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  if (!body || typeof body !== "object") return json({ error: "Invalid JSON" }, 400);

  // Honeypot: real visitors never see or fill this field. Answer 200 so a bot learns nothing.
  if (text(body.website, 200)) return json({ ok: true });
  // A human needs more than 3 seconds for five questions.
  const elapsed = Number(body.elapsed_ms);
  if (!Number.isFinite(elapsed) || elapsed < 3000) return json({ ok: true });

  const audience = text(body.audience, 20);
  if (!AUDIENCES.has(audience)) return json({ error: "Unknown audience" }, 400);

  const rating = Number(body.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ error: "Rating 1-5 required" }, 400);
  }

  const email = text(body.email, 200);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Invalid email format" }, 400);
  }

  const group = text(body.group, 10);
  const record = {
    ts: new Date().toISOString(),
    audience,
    locale: text(body.locale, 5) === "en" ? "en" : "nl",
    rating,
    feedback: text(body.feedback, 1500),
    ideas: text(body.ideas, 1500),
    equipment: list(body.equipment, 12, 60),
    equipment_other: text(body.equipment_other, 300),
    slots: list(body.slots, 8, 40),
    group: GROUP.has(group) ? group : "",
    trainer: text(body.trainer, 40),
    first_name: text(body.first_name, 60),
    email,
    // Strict: only the literal boolean true counts as consent.
    consent_publish: body.consent_publish === true,
    source: text(body.source, 80),
  };

  const kv = context.env.FEEDBACK;
  if (!kv) {
    // Binding missing = misconfigured deploy. Fail loud so the visitor can retry
    // and the monitor sees a 503, rather than silently dropping an answer.
    console.log("FEEDBACK_BINDING_MISSING");
    return json({ error: "Storage unavailable" }, 503);
  }

  const key = `fb:${audience}:${record.ts}:${crypto.randomUUID().slice(0, 8)}`;
  // 2 years, matching the retention line in the privacy policy (section 7). KV deletes it itself.
  await kv.put(key, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 365 * 2 });
  return json({ ok: true });
};
// Only POST is defined, so CF Pages answers 405 for other methods.
