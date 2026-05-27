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

export function MobileLeadBar() {
  const pathname = usePathname() ?? "/";

  // Hide on booking-in-progress / confirmation / 404 / 500 / operator pages.
  for (const prefix of HIDDEN_ROUTE_PREFIXES) {
    if (pathname.startsWith(prefix)) return null;
  }
  if (HIDDEN_EXACT.has(pathname)) return null;

  // Locale detection: /en/* → English, everything else → Dutch.
  const isEn = pathname.startsWith("/en");

  // Phone number stays the same — only label varies by locale.
  const TEL = "+31683178934";

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
        telSub: "Mon-Fri 9-21",
        intake: "Free intake",
        intakeSub: "45 min · book",
        srOnly: "Quick contact options",
      }
    : {
        wa: "WhatsApp",
        waSub: "Reactie <30 min",
        tel: "Bel",
        telSub: "ma-vr 09-21",
        intake: "Gratis intake",
        intakeSub: "45 min · plan",
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
