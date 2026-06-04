"use client";

/**
 * Lead Rescue Popup — second-chance lead-cap for would-be-bouncers.
 *
 * Shipped 2026-05-26 lead-cap optimization. Visitor signals (or comes
 * close to signaling) "I'm about to leave without converting" → we show
 * one small slide-in with WhatsApp + Acuity options. Once per session.
 *
 * Trigger (2026-06-04: desktop exit-intent ONLY):
 *   Desktop: mouseleave from viewport at y < 50px (toward URL bar / tabs) —
 *   the visitor is already leaving, so it never interrupts active use.
 *   Mobile: NOT shown — the always-present MobileLeadBar is the mobile funnel.
 *   (The old 30s timed trigger was removed: data showed 87% dismiss for ~3
 *   intake/quiz clicks/30d, and it interrupted engaged readers mid-scroll.)
 *   NO full-screen dim/backdrop — it's a quiet corner toast, not a modal.
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

import { useState, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";

// Never show the rescue where the visitor is ALREADY in a conversion flow — it
// would be redundant + interruptive (operator screenshot 2026-06-04 caught it
// firing ON the gratis-test booking widget). Covers booking steps, the intake
// landings, the match flow, contact + confirmation.
const HIDDEN_ROUTE_PREFIXES = [
  "/nl/boek",            // boek-trainer / boek-gym / boek-studio
  "/en/book",            // book-* + booking-confirmed
  "/nl/boeking-bevestigd",
  "/en/booking-confirmed",
  "/nl/contact",
  "/en/contact",
  "/nl/match-trainer",   // already in the match flow
  "/en/match-trainer",
  "/nl/gratis-intake",   // intake landing (+ -ads) — visitor already deciding
  "/en/free-intro",      // free-intro landing (+ -ads)
  "/nl/studio-huren/gratis-test",  // dedicated booking step
  "/en/studio-rental/free-trial",
  "/nl/plan-gratis-intake-met-",   // per-trainer booking step
  "/en/plan-free-intro-with-",
  "/nl/start",
  "/social",
];

const SESSION_FLAG = "sculptclub-rescue-shown";

function readConsentCookie(): boolean {
  if (typeof document === "undefined") return false;
  return /(?:^|; )sc_consent=/.test(document.cookie);
}

// useSyncExternalStore stable references — see MobileLeadBar parallel.
function subscribeToConsent(cb: () => void): () => void {
  window.addEventListener("sc:consent-updated", cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("sc:consent-updated", cb);
    window.removeEventListener("storage", cb);
  };
}
const consentServerSnapshot = () => false;

export function LeadRescuePopup() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState<"exit" | "timed" | null>(null);
  // Cookie-consent gate (wired 2026-05-27 — mirrors MobileLeadBar gate).
  // If visitor hasn't dismissed the cookie banner yet, the rescue popup
  // would stack visually on top of the cookie banner (z-61 vs z-50) at
  // the bottom of viewport — two competing modals. useSyncExternalStore
  // is React 19's idiomatic external-state subscription; the rescue
  // effect re-runs the moment consent fires (visitor accepts → 30s timer
  // starts from that moment for late-engagement audiences).
  const consented = useSyncExternalStore(
    subscribeToConsent,
    readConsentCookie,
    consentServerSnapshot
  );

  const isEn = pathname.startsWith("/en");

  // Hidden routes — don't load any handlers
  const hidden = HIDDEN_ROUTE_PREFIXES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (hidden) return;
    if (!consented) return; // Gate: see useState declaration above.

    // Already shown this session — never re-fire
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_FLAG)) {
      return;
    }

    // Respect reduced-motion preference (skip rescue entirely)
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) return;
    }

    let firedOnce = false;

    const fire = () => {
      if (firedOnce) return;
      firedOnce = true;
      sessionStorage.setItem(SESSION_FLAG, "1");
      setTrigger("exit");
      setOpen(true);
      if (typeof window !== "undefined" && window.plausible) {
        window.plausible("Rescue Shown", { props: { trigger: "exit", path: pathname } });
      }
    };

    // ── Desktop exit-intent ONLY ──
    // The 30s timed trigger was removed 2026-06-04 (operator UX review + data:
    // 87% dismiss for ~3 intake/quiz clicks in 30d, and it fired on ENGAGED
    // readers mid-scroll — interruptive). It was also the only path that fired
    // on mobile; mobile now relies on the always-present MobileLeadBar
    // (WhatsApp/Bel/Intake) rather than an interrupting popup. Exit-intent fires
    // only when a desktop visitor moves the cursor toward the tab/URL bar —
    // they're already leaving — so it never interrupts active use.
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && e.relatedTarget == null) fire();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hidden, pathname, consented]);

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

  // Page-context-aware pre-fill (mirrors mobile-lead-bar): homepage + generic
  // pages serve both PT clients and studio-rental trainers → neutral pre-fill;
  // only intent-specific pages get an intent-matched message.
  const waHref = (() => {
    if (/\/(studio-huren|studio-rental|voor-trainers|for-trainers|word-trainer|become-trainer)(\/|$)/.test(pathname))
      return isEn ? whatsappLinks.studioEn : whatsappLinks.studioNl;
    if (/\/(open-gym)(\/|$)/.test(pathname))
      return isEn ? whatsappLinks.openGymEn : whatsappLinks.openGymNl;
    if (/\/(vind-jouw-personal-trainer|find-personal-trainer|gratis-intake|free-intro)(\/|$)/.test(pathname))
      return isEn ? whatsappLinks.intakeMatchEn : whatsappLinks.intakeMatchNl;
    return isEn ? whatsappLinks.en : whatsappLinks.nl;
  })();
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
        // "Liever WhatsApp" felt grammatically odd to operator
        // (2026-05-27 — "beetje gek taalgebruik"). It reads as a
        // half-sentence in Dutch (literally "rather WhatsApp" with no
        // verb). Replaced with "WhatsApp ons" — natural, action-oriented,
        // matches Dutch operator-action register.
        wa: "WhatsApp ons",
        intake: "Plan direct gratis intake",
        close: "Sluiten",
      };

  return (
    <>
      {/* Quiet corner toast — NO full-screen backdrop/dim (removed 2026-06-04:
          the dim made a gentle slide-in feel like a blocking modal). It doesn't
          lock scroll or dim the page; dismiss via the X or Escape. */}

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
