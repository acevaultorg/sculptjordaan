// POST /api/trainer-profile: a trainer asks to be listed in the trainer directory
// (/nl/trainers, /en/trainers). Form: src/components/marketing/trainer-profile-form.tsx.
//
// Stored in the existing FEEDBACK Workers KV namespace (same binding the feedback and
// lead-magnet forms use, so no new hosting setup), under the prefix `trainerprofile:`.
// Read them:  npx wrangler kv key list --binding FEEDBACK --prefix trainerprofile:
//
// NOTHING IS PUBLISHED FROM HERE. A person reads the request and adds the listing to
// src/data/trainer-directory.json by hand. `consent_listing` must be the literal
// boolean true or the request is refused.
//
// Privacy: no IP address and no user agent are stored. Spam floor is the same as
// /api/feedback: honeypot, minimum time on page, size caps.

interface Env {
  FEEDBACK?: KVNamespace;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const text = (v: unknown, max: number): string =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const raw = await context.request.text();
  if (raw.length > 6000) return json({ error: "Too large" }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  if (!body || typeof body !== "object") return json({ error: "Invalid JSON" }, 400);

  // Honeypot: real visitors never see this field. Answer 200 so a bot learns nothing.
  if (text(body.company, 200)) return json({ ok: true });
  const elapsed = Number(body.elapsed_ms);
  if (!Number.isFinite(elapsed) || elapsed < 3000) return json({ ok: true });

  if (body.consent_listing !== true) return json({ error: "Consent required" }, 400);

  const name = text(body.name, 80);
  const email = text(body.email, 200);
  const specialties = text(body.specialties, 200);
  if (!name) return json({ error: "Name required" }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Invalid email format" }, 400);
  if (!specialties) return json({ error: "Specialties required" }, 400);

  const ts = new Date().toISOString();
  const record = {
    ts,
    status: "pending",
    locale: text(body.locale, 5) === "en" ? "en" : "nl",
    name,
    email,
    specialties,
    neighbourhood: text(body.neighbourhood, 80),
    languages: text(body.languages, 120),
    link: text(body.link, 200),
    consent_listing: true,
    consent_ts: ts,
  };

  const kv = context.env.FEEDBACK;
  if (!kv) {
    // Binding missing = misconfigured deploy. Fail loud so the form shows the email fallback.
    console.log("TRAINER_PROFILE_BINDING_MISSING");
    return json({ error: "Storage unavailable" }, 503);
  }

  await kv.put(`trainerprofile:${ts}:${crypto.randomUUID().slice(0, 8)}`, JSON.stringify(record), {
    expirationTtl: 60 * 60 * 24 * 365 * 2,
  });
  return json({ ok: true });
};
// Only POST is defined, so CF Pages answers 405 for other methods.
