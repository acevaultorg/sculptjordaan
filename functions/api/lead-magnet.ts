// POST /api/lead-magnet — blog email-capture stub.
// Ported from src/app/api/lead-magnet/route.ts during the Vercel→CF Pages
// migration (2026-07-07): static export can't host a Request-reading route,
// so it lives here as a CF Pages Function. Behaviour is identical:
//   1. validate email format  2. log the capture (CF Functions logs)  3. 200 OK
// Captures are stored in the FEEDBACK KV namespace under "lead:" (2026-09-27);
// the console.log line stays as a second trace.

interface LeadMagnetRequest {
  email?: string;
  source_page?: string;
  locale?: string;
  lead_magnet?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export const onRequestPost: PagesFunction = async (context) => {
  let body: LeadMagnetRequest;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { email, source_page = "/", locale = "nl", lead_magnet = "unknown" } = body;

  if (!email || typeof email !== "string") return json({ error: "Email required" }, 400);

  const trimmed = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return json({ error: "Invalid email format" }, 400);
  }

  // Log capture to CF Pages Functions logs (persistent until a real service is wired).
  //   wrangler pages deployment tail  →  grep "LEAD_MAGNET"
  console.log("LEAD_MAGNET", JSON.stringify({
    ts: new Date().toISOString(),
    email: trimmed,
    source_page,
    locale,
    lead_magnet,
    ip: context.request.headers.get("cf-connecting-ip") || context.request.headers.get("x-forwarded-for") || "unknown",
    ua: context.request.headers.get("user-agent")?.slice(0, 100) || "unknown",
  }));

  // 2026-09-27: store the capture durably. Until now it only went to
  // console.log, and CF Functions logs are not kept unless someone is tailing,
  // so every address was lost. Reuses the FEEDBACK KV binding (prefix "lead:")
  // with the same 2-year TTL as feedback (privacy policy section 7). A missing
  // binding does not fail the visitor: they still get the cheat sheet below.
  const kv = (context.env as { FEEDBACK?: KVNamespace }).FEEDBACK;
  if (kv) {
    const ts = new Date().toISOString();
    await kv.put(
      `lead:${ts}:${crypto.randomUUID().slice(0, 8)}`,
      JSON.stringify({ ts, email: trimmed, source_page, locale, lead_magnet }),
      { expirationTtl: 60 * 60 * 24 * 365 * 2 },
    );
  } else {
    console.log("LEAD_MAGNET_BINDING_MISSING");
  }

  const cheatSheetUrl = locale === "en" ? "/pt-cheat-sheet?locale=en" : "/pt-cheat-sheet";
  return json({
    ok: true,
    cheat_sheet_url: cheatSheetUrl,
    message: locale === "en"
      ? "Saved. Your cheat sheet is ready."
      : "Opgeslagen. Je cheat sheet staat klaar.",
  });
};
// Only POST is defined → CF Pages auto-returns 405 for other methods.
