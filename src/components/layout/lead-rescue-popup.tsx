"use client";

/**
 * Lead Rescue Popup — second-chance lead-cap for would-be-bouncers.
 *
 * Shipped 2026-05-26 lead-cap optimization. Visitor signals (or comes
 * close to signaling) "I'm about to leave without converting" → we show
 * one small slide-in with WhatsApp + Acuity options. Once per session.
 *
 * Trigger heuristics (one of):
 *   Desktop: mouseleave from viewport at y < 50px (toward URL bar / tabs)
 *   Mobile/all: 30s on page + scrollY > 200px + tab visible
 *               (proxy for "engaged then idle" before bounce)
 *
 * Anti-patterns avoided (I-23 + the no-dark-patterns floor):
 *   - NO modal overlay that blocks scroll (annoying, AdSense policy)
 *   - NO fake countdown / scarcity
 *   - NO confirmshaming ("no thanks I hate saving money")
 *   - Dismissable X always visible · Escape key closes
 *   - sessionStorage flag prevents re-firing in same session
 *   - Skipped on routes already in lead-capture flow (boek/contact/etc.)
 *   - Skipped if reduced-motion preference (respects accessibility)
 *
 * Tracking:
 *   - plausible('Rescue Shown', { trigger: 'exit-intent' | 'timed' })
 *   - plausible('Rescue Action', { action: 'whatsapp' | 'intake' | 'dismiss' })
 */

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";

const HIDDEN_ROUTE_PREFIXES = [
  "/nl/boek",
  "/en/book",
  "/nl/contact",
  "/en/contact",
  "/nl/boeking-bevestigd",
  "/en/booking-confirmed",
  "/nl/match-trainer",  // visitor is already in the match flow
  "/en/match-trainer",
  "/social",
];

const SESSION_FLAG = "sculptclub-rescue-shown";
const TIMED_TRIGGER_MS = 30000;   // 30s engaged before timed trigger
const TIMED_MIN_SCROLL_PX = 200;  // must scroll at least this much before timed

export function LeadRescuePopup() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState<"exit" | "timed" | null>(null);

  const isEn = pathname.startsWith("/en");

  // Hidden routes — don't load any handlers
  const hidden = HIDDEN_ROUTE_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (hidden) return;

    // Already shown this session — never re-fire
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_FLAG)) {
      return;
    }

    // Respect reduced-motion preference (skip rescue entirely)
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) return;
    }

    let timedFired = false;
    let exitFired = false;

    const fire = (which: "exit" | "timed") => {
      if (timedFired || exitFired) return;
      if (which === "timed") timedFired = true;
      else exitFired = true;
      sessionStorage.setItem(SESSION_FLAG, "1");
      setTrigger(which);
      setOpen(true);
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("Rescue Shown", { props: { trigger: which, path: pathname } });
      }
    };

    // ── Exit-intent (desktop) ──
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && e.relatedTarget == null) {
        fire("exit");
      }
    };

    // ── Timed trigger (mobile + desktop fallback) ──
    const timedTimer = window.setTimeout(() => {
      if (window.scrollY >= TIMED_MIN_SCROLL_PX && document.visibilityState === "visible") {
        fire("timed");
      }
    }, TIMED_TRIGGER_MS);

    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timedTimer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hidden, pathname]);

  // Escape key closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function track(action: string) {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible("Rescue Action", { props: { action, trigger } });
    }
  }

  function dismiss() {
    track("dismiss");
    setOpen(false);
  }

  if (hidden || !open) return null;

  const waHref = isEn ? whatsappLinks.intakeMatchEn : whatsappLinks.intakeMatchNl;
  const intakeHref = isEn ? "/en/free-intro" : "/nl/gratis-intake";
  const matchHref = isEn ? "/en/match-trainer" : "/nl/match-trainer";

  const t = isEn
    ? {
        eyebrow: "Wait — 1 question?",
        title: "Get matched in 30 seconds",
        sub: "3-question quiz · top-2 trainer match · no signup",
        quiz: "Take the 30s match quiz",
        wa: "WhatsApp instead",
        intake: "Book free intro directly",
        close: "Close",
      }
    : {
        eyebrow: "Wacht — 1 vraag?",
        title: "Match in 30 seconden",
        sub: "3-vragen quiz · top-2 trainer match · geen signup",
        quiz: "Doe de 30 sec match-quiz",
        wa: "Liever WhatsApp",
        intake: "Plan direct gratis intake",
        close: "Sluiten",
      };

  return (
    <>
      {/* Backdrop — subtle, click-to-dismiss, no scroll lock */}
      <div
        className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] animate-[rescue-fade_0.2s_ease-out]"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup — fixed bottom on mobile, bottom-right on desktop */}
      <div
        role="dialog"
        aria-labelledby="rescue-title"
        aria-describedby="rescue-sub"
        className="fixed z-[61] left-3 right-3 bottom-[max(env(safe-area-inset-bottom),1rem)] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[380px] rounded-2xl border border-brand/30 bg-[#1A1410] shadow-2xl animate-[rescue-slide-in_0.3s_ease-out]"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/15 border border-brand/30 text-[11px] font-bold uppercase tracking-wider text-brand">
              <Sparkles className="w-3 h-3" />
              {t.eyebrow}
            </div>
            <button
              onClick={dismiss}
              aria-label={t.close}
              className="text-white/50 hover:text-white transition-colors -mr-2 -mt-1 p-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <h2 id="rescue-title" className="text-lg sm:text-xl font-bold text-white leading-tight">
            {t.title}
          </h2>
          <p id="rescue-sub" className="mt-1 text-sm text-white/70">{t.sub}</p>

          <div className="mt-4 flex flex-col gap-2">
            {/* PRIMARY: quiz — the highest-converting path for the audience this
                popup targets (would-be-bouncer = undecided, quiz collapses choice) */}
            <Link
              href={matchHref}
              onClick={() => track("quiz")}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm transition-colors min-h-[48px]"
            >
              <Sparkles className="w-4 h-4" />
              {t.quiz}
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp")}
                className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-white font-semibold text-xs transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                {t.wa}
              </a>
              <Link
                href={intakeHref}
                onClick={() => track("intake")}
                className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-brand" />
                {t.intake}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes rescue-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes rescue-slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
