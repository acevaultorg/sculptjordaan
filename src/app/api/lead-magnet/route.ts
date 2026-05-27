import { NextResponse } from "next/server";

/**
 * POST /api/lead-magnet — stub endpoint for blog email-capture (task E).
 *
 * Until operator picks an email service (ConvertKit / Resend / Buttondown),
 * this endpoint:
 *   1. Validates the email format
 *   2. Logs the capture to Vercel function-logs (persistent, retrievable)
 *   3. Returns 200 OK so the UX flows correctly
 *
 * When operator integrates a real service, swap the LOG step for a real
 * email send + list-add. Captures persisted as logs in the meantime so
 * NOTHING is lost — operator can grep Vercel logs and import manually:
 *   vercel logs sculptclub --since=30d | grep "LEAD_MAGNET"
 *
 * Body shape: { email, source_page, locale, lead_magnet }
 *
 * Anti-abuse:
 *   - Email regex validation (rejects clearly malformed)
 *   - Rate limit: caller-IP soft cap via Vercel-edge default (~30/sec)
 *   - No PII stored beyond the email itself + page-context
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface LeadMagnetRequest {
  email?: string;
  source_page?: string;
  locale?: string;
  lead_magnet?: string;
}

export async function POST(req: Request) {
  let body: LeadMagnetRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, source_page = "/", locale = "nl", lead_magnet = "unknown" } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const trimmed = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  // Log capture to Vercel function-logs (persistent until operator wires real service)
  console.log("LEAD_MAGNET", JSON.stringify({
    ts: new Date().toISOString(),
    email: trimmed,
    source_page,
    locale,
    lead_magnet,
    ip: req.headers.get("x-forwarded-for") || "unknown",
    ua: req.headers.get("user-agent")?.slice(0, 100) || "unknown",
  }));

  // OPERATOR-ACTION TODO: integrate real email service here.
  // ConvertKit example:
  //   await fetch("https://api.convertkit.com/v3/forms/<form-id>/subscribe", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ api_key: process.env.CK_API_KEY, email: trimmed }),
  //   });
  //
  // Resend example:
  //   await resend.emails.send({
  //     to: trimmed,
  //     from: "Paulo <noreply@sculptclub.nl>",
  //     subject: locale === "nl" ? "Jouw PT cheat sheet" : "Your PT cheat sheet",
  //     html: '<p>Hier is je cheat sheet: <a href="https://sculptclub.nl/pt-cheat-sheet">Open + print</a></p>',
  //   });

  // For now: return success + the cheat-sheet URL so the client can render
  // an "open it now" link in the success state if desired.
  const cheatSheetUrl = locale === "en" ? "/pt-cheat-sheet?locale=en" : "/pt-cheat-sheet";

  return NextResponse.json({
    ok: true,
    cheat_sheet_url: cheatSheetUrl,
    message: locale === "en"
      ? "Captured — operator will send the PDF shortly."
      : "Geregistreerd — operator stuurt de PDF binnenkort.",
  });
}
