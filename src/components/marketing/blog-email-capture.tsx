"use client";

/**
 * BlogEmailCapture — inline email capture on every blog post.
 *
 * Shipped 2026-05-26 lead-cap (task E). Blog visitors are 95% top-of-funnel
 * (informational query). They're not ready to book BUT they ARE willing to
 * give email for value. Industry benchmark: 5-10% email-capture rate on
 * quality content. Each captured email = 6-month nurture pipeline = compound
 * intake bookings.
 *
 * Lead magnet: "10 vragen die jouw personal trainer moet kunnen beantwoorden"
 * — printable PDF artifact at /pt-cheat-sheet.
 *
 * Submission: POST /api/lead-magnet stub — logs email + returns success.
 * Operator wires to real email service (ConvertKit / Resend / Buttondown)
 * once decided. Until then, captures persist as server logs visible in
 * Vercel function-logs (not lost — operator can manually import).
 *
 * Anti-pattern avoided:
 *   - No multi-field form (just email — friction kill)
 *   - No exit-intent / popup overlay (separate component for that)
 *   - GDPR-explicit opt-in checkbox per EU compliance
 *   - Already-subscribed state persisted via localStorage (no re-prompt)
 */

import { useState, useEffect } from "react";
import { CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props: Record<string, unknown> }) => void;
  }
}

const LS_KEY = "sculptclub-blog-email-captured";

export function BlogEmailCapture() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem(LS_KEY)) {
      setAlreadyDone(true);
    }
  }, []);

  const t = isEn
    ? {
        eyebrow: "Free download",
        title: "10 questions your personal trainer should be able to answer",
        sub: "2-page cheat sheet with a scoring rubric. If your PT can't answer 7/10, find a new one.",
        emailLabel: "Your email",
        emailPlaceholder: "you@example.com",
        consent: "OK to send me the PDF + occasional SculptClub updates (unsubscribe anytime)",
        submit: "Send me the cheat sheet",
        submitting: "Sending…",
        success: "Sent — check your inbox in 1 minute. If nothing arrives, peek in spam.",
        errorGeneric: "Something went wrong. Try again, or WhatsApp us at +31 6 15 14 79 52.",
        errorInvalid: "That doesn't look like a valid email — try again?",
        errorConsent: "Please tick the consent box first.",
        alreadyDone: "✓ You already got the cheat sheet — thanks!",
      }
    : {
        eyebrow: "Gratis download",
        title: "10 vragen die jouw personal trainer moet kunnen beantwoorden",
        sub: "Cheat sheet van 2 pagina's met een scoring-rubric. Als je PT minder dan 7/10 haalt, zoek een nieuwe.",
        emailLabel: "Jouw e-mail",
        emailPlaceholder: "jij@voorbeeld.nl",
        consent: "OK om me de PDF te sturen + af en toe een SculptClub update (uitschrijven kan altijd)",
        submit: "Stuur me de cheat sheet",
        submitting: "Versturen…",
        success: "Verstuurd — check je inbox binnen 1 minuut. Niets ontvangen? Kijk in spam.",
        errorGeneric: "Er ging iets mis. Probeer opnieuw, of WhatsApp ons op +31 6 15 14 79 52.",
        errorInvalid: "Dat lijkt geen geldig e-mailadres — probeer opnieuw?",
        errorConsent: "Vink eerst de consent-checkbox aan.",
        alreadyDone: "✓ Je hebt de cheat sheet al ontvangen — dankjewel!",
      };

  if (alreadyDone) {
    return (
      <aside className="my-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-6 text-center">
        <p className="text-sm font-semibold text-emerald-500">{t.alreadyDone}</p>
      </aside>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "submitting") return;

    setErrorMsg("");

    const emailTrim = email.trim();
    if (!emailTrim || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      setState("error");
      setErrorMsg(t.errorInvalid);
      return;
    }

    if (!consent) {
      setState("error");
      setErrorMsg(t.errorConsent);
      return;
    }

    setState("submitting");
    try {
      const r = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailTrim,
          source_page: pathname,
          locale: isEn ? "en" : "nl",
          lead_magnet: "pt-cheat-sheet",
        }),
      });

      if (!r.ok) throw new Error("submit failed");

      setState("success");
      try { localStorage.setItem(LS_KEY, Date.now().toString()); } catch {}
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("Blog Email Capture", {
          props: { source_page: pathname, locale: isEn ? "en" : "nl" },
        });
      }
    } catch {
      setState("error");
      setErrorMsg(t.errorGeneric);
    }
  }

  if (state === "success") {
    return (
      <aside className="my-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-6 text-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
        <p className="text-base font-bold text-foreground">{t.success}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          {isEn ? "Want to skip ahead and book a free intro?" : "Direct een gratis intake plannen?"}{" "}
          <a
            href={isEn ? "/en/match-trainer" : "/nl/match-trainer"}
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            {isEn ? "Find your trainer in 30 sec →" : "Vind je trainer in 30 sec →"}
          </a>
        </p>
      </aside>
    );
  }

  return (
    <aside className="my-10 rounded-2xl border border-brand/30 bg-brand/5 p-5 sm:p-6">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/15 border border-brand/30 text-[11px] font-bold uppercase tracking-wider text-brand mb-3">
        <Sparkles className="w-3 h-3" />
        {t.eyebrow}
      </div>
      <h3 className="text-lg sm:text-xl font-bold leading-tight">{t.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{t.sub}</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <label className="block">
          <span className="sr-only">{t.emailLabel}</span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            disabled={state === "submitting"}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand min-h-[48px]"
            aria-label={t.emailLabel}
          />
        </label>

        <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={state === "submitting"}
            className="mt-0.5 w-4 h-4 accent-brand"
          />
          <span>{t.consent}</span>
        </label>

        {state === "error" && errorMsg && (
          <p className="text-xs text-red-500" role="alert">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm transition-colors min-h-[48px] disabled:opacity-60"
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {t.submitting}
            </>
          ) : (
            t.submit
          )}
        </button>
      </form>
    </aside>
  );
}
