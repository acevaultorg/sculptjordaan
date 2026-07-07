// POST /api/lead-magnet — blog email-capture stub.
// Ported from src/app/api/lead-magnet/route.ts during the Vercel→CF Pages
// migration (2026-07-07): static export can't host a Request-reading route,
// so it lives here as a CF Pages Function. Behaviour is identical:
//   1. validate email format  2. log the capture (CF Functions logs)  3. 200 OK
// OPERATOR-ACTION TODO (unchanged): swap the log for a real email service
// (ConvertKit / Resend / Buttondown). Captures are logged so nothing is lost.

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

  const cheatSheetUrl = locale === "en" ? "/pt-cheat-sheet?locale=en" : "/pt-cheat-sheet";
  return json({
    ok: true,
    cheat_sheet_url: cheatSheetUrl,
    message: locale === "en"
      ? "Captured — operator will send the PDF shortly."
      : "Geregistreerd — operator stuurt de PDF binnenkort.",
  });
};
// Only POST is defined → CF Pages auto-returns 405 for other methods.
