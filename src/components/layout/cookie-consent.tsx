"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie } from "lucide-react";
import { getLocaleFromPath } from "@/lib/locale";

const copy = {
  nl: {
    title: "Cookies",
    text: "Wij gebruiken cookies om je ervaring te verbeteren en onze website te analyseren.",
    accept: "Accepteren",
    essential: "Alleen essentieel",
    policyLink: "/nl/cookiebeleid",
    policyLabel: "Cookiebeleid",
  },
  en: {
    title: "Cookies",
    text: "We use cookies to improve your experience and analyze our website.",
    accept: "Accept",
    essential: "Essential only",
    policyLink: "/en/cookie-policy",
    policyLabel: "Cookie policy",
  },
} as const;

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (w.gtag) {
    w.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
    });
  }
  // Meta Pixel. It is consent-gated in analytics.tsx: connect.facebook.net is
  // never even requested until `sc_consent=all` exists, so on grant there is
  // usually nothing loaded here yet — the `sc:consent-updated` event below is
  // what starts it. This call only matters on the way back down: if the pixel
  // IS already running (returning visitor who previously accepted) and consent
  // is withdrawn, revoke stops it sending further events and setting cookies.
  const wf = window as Window & { fbq?: (...args: unknown[]) => void };
  if (!granted && typeof wf.fbq === "function" && (wf.fbq as { loaded?: boolean }).loaded) {
    wf.fbq("consent", "revoke");
  }

  // Signal to other scripts
  (window as Window & { sc_consent?: string }).sc_consent = granted ? "all" : "essential";
}

export function CookieConsent() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = copy[locale];

  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  // Minimized = banner collapsed to a small cookie chip (bottom-left). Visitors
  // who ignore the banner and just start scrolling were stuck with a z-50
  // full-width bar covering the bottom of the screen forever — which also hid
  // the sticky mobile CTA bar (z-40) on every funnel page, killing its
  // conversion job (operator screenshot 2026-07-23). After ~1.2 viewports of
  // scroll without a choice we collapse to the chip: the page's own CTAs get
  // the bottom edge back, the choice stays one tap away, and consent remains
  // default-DENIED until an explicit Accept (GDPR-safe — ignoring is treated
  // as "not yet", never as consent).
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const existing = getCookie("sc_consent");
    if (existing) {
      // Already consented — update gtag state
      updateConsent(existing === "all");
      return;
    }
    // Show after a short delay so the hero owns the first impression — the
    // banner slides up ~700ms in rather than competing on first paint (analytics
    // + ad cookies are Consent-Mode default-denied, so delaying the prompt is
    // safe). Then a rAF flips animateIn for the slide+fade transition.
    const showTimer = window.setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setAnimateIn(true));
    }, 700);
    return () => window.clearTimeout(showTimer);
  }, []);

  // Auto-minimize on scroll. Re-arms every time the banner is (re)opened:
  // baseline = scroll position when the banner appeared; once the visitor
  // scrolls meaningfully past it (or past ~1.2 viewports on first load) the
  // banner collapses to the chip. So a chip-reopened banner that gets ignored
  // again also re-minimizes after ~300px of further scrolling instead of
  // permanently covering the page's own bottom CTAs again.
  useEffect(() => {
    if (!visible || minimized) return;
    const baseline = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2 && Math.abs(y - baseline) > 300) {
        setMinimized(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible, minimized]);

  function handleAccept() {
    setCookie("sc_consent", "all", 365);
    updateConsent(true);
    notifyConsentChanged();
    dismiss();
  }

  function handleEssential() {
    setCookie("sc_consent", "essential", 365);
    updateConsent(false);
    notifyConsentChanged();
    dismiss();
  }

  // Wired 2026-05-27 to let MobileLeadBar appear immediately after consent
  // is given without a full-page reload. MobileLeadBar listens for this on
  // mount + window-level so the sticky lead-CTA reveals cleanly the moment
  // the cookie banner dismisses, instead of stacking z-40 vs z-50 on first
  // paint (Clarity audit showed 19.15% of homepage clicks were on the
  // cookie banner's Accept — visitors wanted the bottom-blocker gone before
  // engaging with anything else). Custom event keeps the cross-tab `storage`
  // listener as a fallback path too.
  function notifyConsentChanged() {
    if (typeof window === "undefined") return;
    try {
      window.dispatchEvent(new CustomEvent("sc:consent-updated"));
    } catch {
      // Older browsers without CustomEvent constructor — silent skip; the
      // bar will appear on next navigation when readConsentCookie() picks
      // up the cookie regardless.
    }
  }

  function dismiss() {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  // Minimized chip — small, bottom-left, sits ABOVE the mobile sticky CTA bar
  // (bottom-24 clears the 64px bar + safe-area; md has no bar → bottom-4).
  // Muted styling on purpose: it must not compete with page CTAs.
  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        aria-label={`${t.title} — ${t.policyLabel}`}
        className="fixed left-3 bottom-24 md:bottom-4 z-40 flex h-11 w-11 items-center justify-center
                   rounded-full border border-border bg-card shadow-lg text-muted-foreground
                   hover:text-foreground transition-colors cursor-pointer"
      >
        <Cookie className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
        animateIn ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-label={t.title}
    >
      {/* Solid, edge-to-edge bottom bar. It MUST be opaque + full-width so that
          content scrolling underneath disappears against a clean sealed edge.
          The earlier floating semi-transparent card (bg-card/95 + blur + inset
          margins) let section photos show through + around it, so as you
          scrolled past the studio section it looked like two panels colliding.
          Kept compact (single row on desktop, tight stack on mobile) so it
          still covers minimal content — the size issue that retired the
          original tall bar. 2026-10-01: on phones the text is 13px with a
          smaller icon so it fits in 2 lines instead of 3; at 375px the bar
          covered the second Book row on /nl/studio-huren on a first visit.
          Buttons keep their 44px height. */}
      <div className="bg-card border-t border-border shadow-[0_-8px_24px_rgba(0,0,0,0.5)]">
        <div className="mx-auto w-full max-w-3xl px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col gap-2.5 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5 sm:items-center">
              <Cookie className="mt-px sm:mt-0 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <p className="text-[13px] leading-snug text-foreground sm:text-sm">
                {t.text}{" "}
                <Link
                  href={t.policyLink}
                  className="underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.policyLabel}
                </Link>
              </p>
            </div>

            {/* Reject (essential) + accept — both ≥44px, one-tap, equal
                footprint (EU/ACM: reject as easy as accept). Accept is
                light-filled (clear affirmative, fast resolution), deliberately
                NOT brand-orange so it doesn't steal the eye from the hero CTA
                (2026-05-27 Clarity decision preserved). */}
            <div className="grid grid-cols-2 gap-2.5 shrink-0 sm:flex">
              <button
                onClick={handleEssential}
                className="rounded-full border border-border bg-transparent px-5 py-2.5 min-h-[44px] text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer sm:min-w-[150px]"
              >
                {t.essential}
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full bg-foreground px-5 py-2.5 min-h-[44px] text-sm font-semibold text-background hover:bg-foreground/90 transition-colors cursor-pointer sm:min-w-[150px]"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
