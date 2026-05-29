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
  // Signal to other scripts
  (window as Window & { sc_consent?: string }).sc_consent = granted ? "all" : "essential";
}

export function CookieConsent() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = copy[locale];

  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

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

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ease-out ${
        animateIn ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      role="dialog"
      aria-label={t.title}
    >
      {/* Floating compact card with inset margins — the prior full-bleed bar
          covered the hero CTA + "ONZE TRAINERS" section, which reads as a
          content-blocker and raises bounce. A small card that sits ABOVE the
          fold's content (not over it) gets out of the way fast: visitors
          resolve it in one tap and engage with the real page. */}
      <div className="mx-auto w-full max-w-md sm:max-w-2xl p-3 sm:p-4">
        <div className="rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-2xl px-4 py-4 sm:px-5">
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <p className="flex-1 text-sm leading-snug text-foreground">
              {t.text}{" "}
              <Link
                href={t.policyLink}
                className="underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.policyLabel}
              </Link>
            </p>
          </div>

          {/* Two equal-width, single-tap choices. Reject (essential) on the
              left, accept on the right — both ≥44px with identical footprint,
              because EU/ACM rules require reject to be as easy as accept (and a
              symmetric choice is what keeps trust + resolution rate high).
              Accept is a light FILLED button: a clear affirmative that resolves
              the banner fast — deliberately NOT brand-orange, so it doesn't
              steal the eye from the hero "Match je trainer" CTA (2026-05-27
              Clarity decision preserved; orange stays reserved for revenue
              actions). The earlier double-grey pair read as two equally-muted
              options, which slows the decision; one clear affirmative speeds it. */}
          <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:flex sm:justify-end">
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
  );
}
