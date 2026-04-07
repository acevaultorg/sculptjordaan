"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    // Show banner after next frame (async → not a synchronous effect setState)
    const raf1 = requestAnimationFrame(() => {
      setVisible(true);
      const raf2 = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  function handleAccept() {
    setCookie("sc_consent", "all", 365);
    updateConsent(true);
    dismiss();
  }

  function handleEssential() {
    setCookie("sc_consent", "essential", 365);
    updateConsent(false);
    dismiss();
  }

  function dismiss() {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
        animateIn ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-label={t.title}
    >
      <div className="bg-card/95 backdrop-blur-md border-t border-border rounded-t-2xl md:rounded-t-none">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                {t.text}{" "}
                <Link
                  href={t.policyLink}
                  className="underline text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.policyLabel}
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleEssential}
                className="rounded-full border border-border bg-transparent px-5 py-2.5 min-h-[44px] text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                {t.essential}
              </button>
              <button
                onClick={handleAccept}
                className="rounded-full bg-brand px-5 py-2.5 min-h-[44px] text-sm font-medium text-white hover:bg-brand/90 transition-colors cursor-pointer"
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
