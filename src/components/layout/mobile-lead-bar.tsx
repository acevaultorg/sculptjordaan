"use client";

/**
 * Mobile Lead Bar — sticky bottom-of-viewport CTA on every demand-side page.
 *
 * Lead-capture optimization, shipped 2026-05-26 per Clarity audit:
 *   - 18s active time + 1.05% D3 return + 7.37% dead-click rate = visitors
 *     bouncing before reaching any in-content CTA. Sticky bar = always
 *     visible, always tappable, no scroll required.
 *
 * Three equally-visible buttons:
 *   1. WhatsApp  — primary for ~60% of traffic (Audience B + C: curious
 *                  browsers + comparison shoppers prefer async chat)
 *   2. Phone     — co-primary for Jordaan local 30-50 segment (NL
 *                  convention; 1-tap dialer; high-intent signal)
 *   3. Intake    — for ready-to-book (Audience A); calendar flow
 *
 * Click tracking auto-fires via the global delegate in analytics.tsx:
 *   - WhatsApp click → generate_lead + Plausible + Meta/TikTok pixels
 *   - tel: click     → Google Ads conversion + phone_click event
 *   - Acuity click   → begin_booking + Plausible
 *
 * Hidden on:
 *   - /boek*  /book*           (already in booking flow)
 *   - /contact                 (form already present)
 *   - /boeking-bevestigd       /booking-confirmed
 *   - /404 /500
 *   - /admin (none exist but defensive)
 *
 * Mobile-only via Tailwind: `md:hidden` (below 768px).
 */

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";

const HIDDEN_ROUTE_PREFIXES = [
  "/nl/boek",
  "/en/book",
  "/nl/contact",
  "/en/contact",
  "/nl/boeking-bevestigd",
  "/en/booking-confirmed",
  "/social", // operator-facing static gallery
];

const HIDDEN_EXACT = new Set<string>([
  "/404",
  "/500",
]);

function readConsentCookie(): boolean {
  if (typeof document === "undefined") return false;
  return /(?:^|; )sc_consent=/.test(document.cookie);
}

// useSyncExternalStore subscriber + getSnapshot pair for the consent
// cookie. Allocated at module-scope so identity is stable across renders
// (per React 19 rules — passing a new function every render would tear).
function subscribeToConsent(cb: () => void): () => void {
  window.addEventListener("sc:consent-updated", cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("sc:consent-updated", cb);
    window.removeEventListener("storage", cb);
  };
}
const consentServerSnapshot = () => false; // SSR: no document.cookie

export function MobileLeadBar() {
  const pathname = usePathname() ?? "/";

  // Hide while cookie consent dialog is still showing (z-50 cookie banner
  // overlaps z-40 lead bar otherwise — visitor sees a stack of two bars on
  // first paint and neither reads as primary). Clarity audit 2026-05-27:
  // cookie banner Accept got 19.15% of homepage clicks because visitors
  // wanted to dismiss the bottom-of-screen blocker before engaging with
  // anything else. By hiding the lead bar until consent fires, the cookie
  // banner becomes a one-step gate (tap Accept) rather than a two-bar
  // visual conflict — and the lead bar gets a clean stage when it appears
  // 300ms after consent.
  //
  // useSyncExternalStore is the React 19 idiomatic way to subscribe to
  // external (window-level) state. cookie-consent.tsx dispatches
  // `sc:consent-updated` after Accept/Essential; cross-tab updates fire
  // `storage`. Refactored 2026-05-27 from useState+useEffect after the
  // react-hooks/set-state-in-effect lint rule flagged the prior pattern.
  const consented = useSyncExternalStore(
    subscribeToConsent,
    readConsentCookie,
    consentServerSnapshot
  );

  if (!consented) return null;

  // Hide on booking-in-progress / confirmation / 404 / 500 / operator pages.
  for (const prefix of HIDDEN_ROUTE_PREFIXES) {
    if (pathname.startsWith(prefix)) return null;
  }
  if (HIDDEN_EXACT.has(pathname)) return null;

  // Locale detection: /en/* → English, everything else → Dutch.
  const isEn = pathname.startsWith("/en");

  // Phone number stays the same — only label varies by locale.
  const TEL = "+31615147952";

  // Acuity intake landing (locale-aware): visitors get the right-language
  // hub page; the page itself routes them to either Acuity or trainer-match.
  const intakeHref = isEn ? "/en/free-intro" : "/nl/gratis-intake";

  // WhatsApp pre-filled with intake-intent (one-click → operator can match
  // them with a trainer in 2 messages). Pulls from existing whatsappLinks
  // map so the message stays in sync if the source-of-truth copy changes.
  const waHref = isEn ? whatsappLinks.intakeMatchEn : whatsappLinks.intakeMatchNl;

  const t = isEn
    ? {
        wa: "WhatsApp",
        waSub: "Reply <30 min",
        tel: "Call",
        telSub: "Daily 9-21",
        intake: "Free intake",
        intakeSub: "Book your slot",
        srOnly: "Quick contact options",
      }
    : {
        wa: "WhatsApp",
        waSub: "Reactie <30 min",
        tel: "Bel",
        telSub: "Dagelijks 9-21",
        intake: "Gratis intake",
        intakeSub: "Plan je slot",
        srOnly: "Snel contact opties",
      };

  return (
    <nav
      aria-label={t.srOnly}
      // bg-[#0E0C0A] = brand-foreground token (near-black). Hardcoded
      // because Tailwind v4 doesn't expose 'near-black' as a color utility
      // (the token is in globals.css as --brand-foreground, but utility
      // generation only covers --color-brand / --color-brand-dark /
      // --color-brand-foreground). Arbitrary value keeps the warm-tone
      // match with hero/footer instead of cool 'bg-black'.
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0E0C0A]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.4)]"
    >
      <div className="grid grid-cols-3">
        {/* WhatsApp — primary brand color */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 px-2 text-brand-foreground bg-brand active:bg-brand-dark transition-colors min-h-[60px]"
          data-mobile-bar="whatsapp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          <span className="text-[11px] font-bold leading-tight">{t.wa}</span>
          <span className="text-[9px] leading-tight opacity-80">{t.waSub}</span>
        </a>

        {/* Phone — neutral with brand underline (co-primary visual weight) */}
        <a
          href={`tel:${TEL}`}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 px-2 text-white bg-white/5 active:bg-white/10 transition-colors min-h-[60px] border-x border-white/10"
          data-mobile-bar="phone"
        >
          <Phone className="w-5 h-5 text-brand" aria-hidden="true" />
          <span className="text-[11px] font-bold leading-tight">{t.tel}</span>
          <span className="text-[9px] leading-tight text-white/65">{t.telSub}</span>
        </a>

        {/* Intake — calendar route (high-intent) */}
        <a
          href={intakeHref}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 px-2 text-white bg-white/5 active:bg-white/10 transition-colors min-h-[60px]"
          data-mobile-bar="intake"
        >
          <Calendar className="w-5 h-5 text-brand" aria-hidden="true" />
          <span className="text-[11px] font-bold leading-tight">{t.intake}</span>
          <span className="text-[9px] leading-tight text-white/65">{t.intakeSub}</span>
        </a>
      </div>
    </nav>
  );
}
