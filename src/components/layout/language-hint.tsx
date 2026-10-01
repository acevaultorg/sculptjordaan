"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLocaleFromPath, getAlternatePath } from "@/lib/locale";

// v2 (2026-07-04): the offer used to sit behind the taller 2-row header on
// mobile (top-[58px]) so it was invisible — and it marked "seen" on detection,
// so returning visitors never got it. Bumping the key re-arms it once for
// everyone now that it renders below the header.
const SEEN_KEY = "sc_lang_hint_seen_v2";

// Pages that carry their OWN language offer, where this floating pill would be
// a second, overlapping one (card mupiur5tiruhfu, 2026-10-01): the split
// campaign landings have an NL/EN switch in their own header and no site
// header, so the pill sat on the hero eyebrow; /en/become-trainer renders the
// in-flow <AltLanguageOffer>.
const OWN_OFFER_PATHS = new Set(["/landing", "/en/landing", "/en/become-trainer"]);

/**
 * Device-language hint — a polite, one-time offer (never a forced redirect).
 *
 * The site deliberately does NOT auto-redirect by Accept-Language: auto-flipping
 * English-device visitors to /en drove 28% off the Dutch-optimized landing page
 * (see src/middleware.ts). So `/` always serves Dutch. This component is the
 * non-destructive alternative — for a visitor whose device/browser language
 * differs from the page they landed on, it OFFERS the matching version.
 *
 * UX is tuned to NOT annoy:
 *  - shows at most ONCE per visitor (the header globe is the permanent switch);
 *  - waits ~0.9s then gently slides in, so it never fights the first impression;
 *  - auto-retires after ~10s if ignored, or on the first scroll, so it never
 *    rides over page content (it is `fixed`);
 *  - never shows while the cookie banner is still open: it waits for the
 *    `sc:consent-updated` event when no sc_consent cookie exists yet;
 *  - one tap dismiss; clicking it switches + preserves the current page
 *    (getAlternatePath: /nl/open-gym → /en/open-gym, not just the homepage).
 *
 * Reads navigator.languages (the OS/browser language setting on every device —
 * iOS, Android, desktop), so it works on the static export with zero server cost.
 */
export function LanguageHint() {
  const pathname = usePathname() || "/";
  const [hint, setHint] = useState<{ href: string; label: string } | null>(null);
  const [visible, setVisible] = useState(false);
  const timers = useRef<number[]>([]);

  // Detect once on mount. pathname is intentionally NOT a dependency: the offer
  // is one-time, so SPA navigation must not re-trigger it (the SEEN flag also
  // guards this, but keeping the effect mount-only makes the single-offer
  // guarantee explicit).
  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(SEEN_KEY);
    } catch {
      /* private mode / blocked storage — just proceed without the flag */
    }
    if (seen) return;
    if (OWN_OFFER_PATHS.has(pathname.replace(/\/+$/, "") || "/")) return;

    let primary = "";
    try {
      primary = (
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        ""
      ).toLowerCase();
    } catch {
      return;
    }

    const locale = getLocaleFromPath(pathname);
    const prefersDutch = primary.startsWith("nl");
    const alt = getAlternatePath(pathname);

    let target: { href: string; label: string } | null = null;
    if (locale === "nl" && !prefersDutch) {
      target = { href: alt, label: "Continue in English" };
    } else if (locale === "en" && prefersDutch) {
      target = { href: alt, label: "Doorgaan in het Nederlands" };
    }
    if (!target) return;

    // v4 (2026-10-01, card munn2xhadw3ro4): the pill is `fixed`, so at 390px
    // it rode over the trainer cards while scrolling and stacked with the
    // cookie bar on the first screen. Now it (a) waits until the cookie
    // question is answered, (b) retires on the first real scroll, and
    // (c) is marked seen only when it actually shows.
    const consentGiven = () => /(?:^|;\s*)sc_consent=/.test(document.cookie);
    let shown = false;
    const hide = () => setVisible(false);
    const onScroll = () => {
      if (window.scrollY > 60) hide();
    };
    const show = () => {
      if (shown) return;
      shown = true;
      try {
        localStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
      setHint(target);
      const tIn = window.setTimeout(() => {
        // Visitor already scrolled into the page during the delay: skip it.
        if (window.scrollY > 60) return;
        setVisible(true);
        window.addEventListener("scroll", onScroll, { passive: true });
      }, 900);
      const tOut = window.setTimeout(hide, 10_000);
      timers.current.push(tIn, tOut);
    };
    const onConsent = () => show();

    if (consentGiven()) show();
    else window.addEventListener("sc:consent-updated", onConsent);

    return () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("sc:consent-updated", onConsent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hint) return null;

  const close = () => setVisible(false);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        // Sit just BELOW the header: ~103px 2-row header on mobile/tablet,
        // ~61px 1-row header at lg+.
        "fixed top-[112px] left-1/2 z-40 w-[calc(100%-1rem)] max-w-md -translate-x-1/2 px-2 lg:top-[72px] lg:w-auto",
        "transition-all duration-300 ease-out motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      )}
    >
      {/* v3 (2026-09-14, card mu19p0yxv3zseo): the ANCHOR is the whole pill (globe +
          padding included) so no tap on it is inert, and the dismiss target is 44px
          (fleet tap-target standard) instead of 28px. Copy and behaviour unchanged. */}
      <div className="flex items-center rounded-full border border-border bg-card/95 pr-1 shadow-brand-lg backdrop-blur-md">
        <a
          href={hint.href}
          className="plausible-event-name=lang_hint_switch flex min-w-0 flex-1 items-center gap-2 self-stretch rounded-full py-2 pl-3 pr-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
        >
          <Globe className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate">{hint.label} →</span>
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss"
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors touch-manipulation hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
