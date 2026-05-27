"use client";

/**
 * Mobile-only sticky bottom-bar with contextual primary CTA.
 *
 * Operator directive 2026-05-16: "every new user should book try-out / book
 * see-the-studio / click try-out with trainer · every returning user books ·
 * people that look for a trainer should land on the trainer page".
 *
 * Plausible audit today: 7 Google paid visitors / 86% bounce / 29s avg —
 * visitors LOOK but don't act. Conversion friction is "I don't see one
 * clear action to take next." The HeroPriceBadge gets attention to the
 * price; this bar gets attention to the ACTION.
 *
 * This bar is a permanent above-scroll Primary action on mobile only.
 * Desktop visitors already have the in-header "Try-Out" + "Boek" buttons
 * always visible. Mobile visitors scroll past the hero CTAs and lose
 * sight of any action — this bar restores it.
 *
 * Page-aware contextual targeting:
 *   /                       → "Boek gratis try-out" → /nl/eerste-bezoek
 *   /nl, /en                → same as homepage in localized variants
 *   /nl/studio-huren        → "Boek gratis test sessie" → #schedule anchor
 *   /nl/open-gym            → "Boek gratis Open Gym sessie" → #schedule
 *   /nl/gratis-intake       → "WhatsApp direct" (intakeMatch link)
 *   /nl/vind-jouw-personal- → "WhatsApp direct — wij matchen" (intakeMatch
 *      trainer                  link). Changed 2026-05-16 from scroll-to
 *                               `#trainer-grid` (duplicate with in-page
 *                               dual-CTA shipped same session) → WhatsApp
 *                               instant-match. Bar = conversion exit, not
 *                               scroll loop.
 *   /nl/eerste-bezoek       → "Boek je intake" → trainer-picker
 *   /nl/social, /nl/contact, → "Boek gratis try-out" → /nl/eerste-bezoek
 *      blog posts, etc.
 *
 * Hidden on:
 *   - Acuity embed pages while booking dialog is open (would block dialog)
 *   - Booking-confirmed pages (visitor already converted)
 *
 * Below the WhatsApp floating button — the floating button stays as
 * secondary always-available chat. They coexist (CTA bar takes screen
 * width minus the right-edge WhatsApp circle).
 */

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { getLocaleFromPath } from "@/lib/locale";
import { WhatsAppIcon, pickMessage } from "./whatsapp-button";

// Operator's WhatsApp number. Kept inline to avoid restructuring whatsapp-button.tsx
// (which owns its own PHONE const). Single number value used in both files.
const WA_PHONE = "31683178934";
// E.164 form for tel: links (with leading "+"); WA_PHONE above omits the +
// because wa.me URLs require the country-code-with-no-plus format.
const TEL_PHONE = "+31683178934";

interface CTAConfig {
  label: string;
  href: string;
  /** When true, opens in new tab (for WhatsApp links). */
  external?: boolean;
  /** Plausible event name for click tracking. */
  ctaId: string;
}

function pickCTA(pathname: string, locale: "nl" | "en"): CTAConfig | null {
  // Don't show on conversion-completion pages
  if (/\/(boeking-bevestigd|booking-confirmed)/.test(pathname)) return null;

  // NOTE: labels NEVER end with " →" — the JSX renders an <ArrowRight /> icon
  // for both internal AND external CTAs. 2026-05-16: operator phone-shot
  // showed "Boek gratis try-out → →" — duplicate-arrow bug from labels
  // containing trailing → plus JSX-rendered icon. Stripped from all labels.

  // Studio-rental — visitors are PT-trainers shopping rental space
  if (/\/(studio-huren|studio-rental)(\/|$)/.test(pathname)) {
    return {
      label: locale === "nl" ? "Boek gratis test sessie" : "Book free test session",
      href: "#schedule",
      ctaId: "mobile-cta-studio-test",
    };
  }

  // Open Gym — visitors want to try the gym
  if (/\/(open-gym)(\/|$)/.test(pathname)) {
    return {
      label: locale === "nl" ? "Boek gratis Open Gym" : "Book free Open Gym",
      href: "#schedule",
      ctaId: "mobile-cta-opengym-trial",
    };
  }

  // Free-intake — visitors are PT-curious clients
  if (/\/(gratis-intake|free-intro)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "WhatsApp direct",
          href: "https://wa.me/31683178934?text=" +
            encodeURIComponent("Hoi! Ik wil graag een gratis intake boeken. Kun je mij matchen met de juiste trainer?"),
          external: true,
          ctaId: "mobile-cta-intake-whatsapp",
        }
      : {
          label: "WhatsApp us now",
          href: "https://wa.me/31683178934?text=" +
            encodeURIComponent("Hi! I'd like to book a free intake. Can you match me with the right trainer?"),
          external: true,
          ctaId: "mobile-cta-intake-whatsapp",
        };
  }

  // Trainer-finder hub — visitors evaluating trainers.
  //
  // Was: scroll-to `#trainer-grid` anchor. Problem: the in-page dual-CTA
  // strip shipped 2026-05-16 already exposes the scroll-grid action above
  // the fold. The sticky-bar duplicating that action = redundant; visitors
  // scrolling PAST the grid (to FAQ / specific-need routing / etc) lost
  // the conversion exit because the bar just re-scrolled them up.
  //
  // Now: WhatsApp-direct match — same target as the in-page emerald CTA,
  // but persistent. Visitor 60%+ down the page can still tap one button
  // and reach a real lead. Pre-filled message asks SculptClub to match
  // with the right trainer (operator-mediated, no choice paralysis).
  if (/\/(vind-jouw-personal-trainer|find-personal-trainer)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "WhatsApp direct — wij matchen",
          href: "https://wa.me/31683178934?text=" +
            encodeURIComponent("Hoi! Ik wil graag een gratis intake boeken. Kun je mij matchen met de juiste trainer?"),
          external: true,
          ctaId: "mobile-cta-trainerhub-whatsapp",
        }
      : {
          label: "WhatsApp us — we'll match",
          href: "https://wa.me/31683178934?text=" +
            encodeURIComponent("Hi! I'd like to book a free intake. Can you match me with the right trainer?"),
          external: true,
          ctaId: "mobile-cta-trainerhub-whatsapp",
        };
  }

  // Eerste-bezoek / first-visit — visitors planning their first time
  if (/\/(eerste-bezoek|first-visit)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "Boek je gratis intake",
          href: "/nl/vind-jouw-personal-trainer",
          ctaId: "mobile-cta-firstvisit-intake",
        }
      : {
          label: "Book your free intake",
          href: "/en/find-personal-trainer",
          ctaId: "mobile-cta-firstvisit-intake",
        };
  }

  // Word-trainer / become-trainer — for-trainers funnel
  if (/\/(word-trainer|become-trainer|voor-trainers|for-trainers)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "Bekijk de studio",
          href: "/nl/studio-huren",
          ctaId: "mobile-cta-trainer-studio",
        }
      : {
          label: "See the studio",
          href: "/en/studio-rental",
          ctaId: "mobile-cta-trainer-studio",
        };
  }

  // Default — homepage, blog, social, contact, prijzen, etc.
  //
  // Click-intent fix 2026-05-17: was routing "Boek gratis try-out" (a
  // CONVERSION-style label — "Boek" = book now) to /nl/eerste-bezoek
  // (an INFORMATION page that requires scrolling 1.5 viewports to reach
  // any actual booking CTA). Visitor mental model on tap: "book NOW"
  // → landing on info-first page = friction.
  //
  // New: route to /nl/gratis-intake — the dedicated conversion landing
  // with dual-primary CTAs above the fold (WhatsApp direct + "Of kies
  // je trainer"). Same page the paid Google Ads campaign already lands
  // on; consistent funnel architecture. Visitors who want the full
  // first-visit education can still reach /nl/eerste-bezoek via the
  // header "Try-Out" button or footer links.
  return locale === "nl"
    ? {
        label: "Boek gratis intake",
        href: "/nl/gratis-intake",
        ctaId: "mobile-cta-default-intake",
      }
    : {
        label: "Book free intake",
        href: "/en/free-intro",
        ctaId: "mobile-cta-default-intake",
      };
}

export function MobileBottomCTABar() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const cta = pickCTA(pathname, locale);

  // Scroll-aware visibility — bar hides while hero / top-of-page is in view; appears
  // only after the user scrolls past ~60% of viewport height. Prevents 'orange button
  // overload' on hero (operator screenshot 2026-05-17: hero's primary orange CTA AND
  // sticky bar's orange CTA were both visible at once = two big oranges fighting for
  // attention on the same screen). Pattern matches Equinox / Barry's / boutique fitness
  // sites — one primary CTA visible per viewport, always.
  //
  // Threshold uses viewport-height-relative (not fixed pixels) so it adapts to phone
  // height. 60% lands past the hero fold on phones; tablet+ hides the bar entirely
  // (md:hidden in the wrapper) so this only matters on mobile.
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const onScroll = () => setRevealed(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!cta) return null;

  return (
    <>
      {/* Spacer — pushes page content above the bar so it isn't hidden.
          Mobile-only. The bar itself is 64px tall; we add 80px of safe-area
          spacer so iOS Safari home-indicator + the bar both clear content. */}
      <div className="h-20 md:hidden" aria-hidden />

      {/* The bar — fades in only once user scrolls past hero (revealed = true).
          Transition is short (200ms) + uses opacity + pointer-events so the bar is
          truly inert when hidden (no accidental taps on invisible orange button). */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-opacity duration-200 ${
          revealed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        role="region"
        aria-hidden={!revealed}
        aria-label={locale === "nl" ? "Snelle actie" : "Quick action"}
      >
        {/* Backdrop with blur — sits above page content; semi-transparent so
            the page background shows through subtly while keeping CTA legible. */}
        <div
          className="border-t border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80
                     px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]
                     shadow-[0_-4px_16px_-2px_rgba(0,0,0,0.35)]"
        >
          {/* Three-slot row: phone-icon LEFT (tel:) + primary CTA MIDDLE (flex-1)
              + WhatsApp circle RIGHT.
              Phone slot added 2026-05-27 after operator UX audit of the
              after-scroll bar: above-fold visitors get the 3-button
              MobileLeadBar (WhatsApp/Bel/Gratis intake) which gave them
              a 1-tap phone path; once the user scrolled past 60% of viewport
              the MobileLeadBar got covered by this bar (single orange CTA
              + WA circle) and the phone affordance vanished. The Jordaan-
              local 30-50 segment + weekend phone-callers (operator
              directive: "mensen mogen ook in het weekend bellen") need the
              phone path preserved after scroll. Now: phone-circle on the
              left, primary CTA still dominates the middle (flex-1), WA
              circle on the right. All three targets are 48×48px (>WCAG 44).
              Conditional logic: phone-circle shows when primary CTA is NOT
              a tel: link (parallel pattern to the WA-circle conditional). */}
          <div className="flex items-center gap-2">
            {/* Phone slot — 1-tap call. Hidden when the primary CTA is itself
                a tel: link (no second-tap-to-call to avoid redundancy). */}
            {!cta.href.startsWith("tel:") && (
              <a
                href={`tel:${TEL_PHONE}`}
                aria-label={locale === "nl" ? "Bel SculptClub" : "Call SculptClub"}
                data-cta="mobile-cta-tel-integrated"
                className="plausible-event-name=mobile_cta_tel_integrated shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 border border-foreground/15 text-foreground hover:bg-foreground/15 transition-colors active:scale-95"
              >
                <Phone className="h-5 w-5" />
              </a>
            )}

            {cta.external ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={cta.ctaId}
                className={`plausible-event-name=${cta.ctaId.replace(/-/g, "_")} flex-1 flex items-center justify-center gap-2
                           rounded-2xl bg-brand px-5 py-3.5
                           text-base font-bold text-brand-foreground
                           transition-all active:scale-[0.98]`}
              >
                {cta.label}
                <ArrowRight className="h-5 w-5 -mr-1" />
              </a>
            ) : (
              <Link
                href={cta.href}
                data-cta={cta.ctaId}
                className={`plausible-event-name=${cta.ctaId.replace(/-/g, "_")} flex-1 flex items-center justify-center gap-2
                           rounded-2xl bg-brand px-5 py-3.5
                           text-base font-bold text-brand-foreground
                           transition-all active:scale-[0.98]`}
              >
                {cta.label}
                <ArrowRight className="h-5 w-5 -mr-1" />
              </Link>
            )}

            {/* Integrated WhatsApp circle — rendered only when the primary
                CTA is NOT itself a WhatsApp link. On /nl/gratis-intake and
                /nl/vind-jouw-personal-trainer the bar IS already a WhatsApp
                call (cta.href starts with https://wa.me/...), so a second
                WhatsApp circle next to it would be a redundant duplicate.
                On every other page (homepage, blog, studio-huren, open-gym,
                eerste-bezoek, voor-trainers, etc.) the primary CTA goes
                somewhere else, so the WA circle provides a fast quick-chat
                alternative path right alongside it.
                Size h-12 w-12 = 48×48px — clears WCAG 2.5.5 44×44 target floor
                + visually balanced against the ~52px primary CTA height.
                Uses pickMessage() so the pre-filled chat opener is the same
                context-aware message the desktop floating button shows. */}
            {!cta.href.includes("wa.me") && (
              <a
                href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(pickMessage(pathname, locale))}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={locale === "nl" ? "Chat via WhatsApp" : "Chat via WhatsApp"}
                data-cta="mobile-cta-wa-integrated"
                className="plausible-event-name=mobile_cta_wa_integrated shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors active:scale-95"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
