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
import { ArrowRight } from "lucide-react";
import { getLocaleFromPath } from "@/lib/locale";

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
  // "Free try-out" routes to eerste-bezoek (the universal "first time here?" page)
  return locale === "nl"
    ? {
        label: "Boek gratis try-out",
        href: "/nl/eerste-bezoek",
        ctaId: "mobile-cta-default-tryout",
      }
    : {
        label: "Book free try-out",
        href: "/en/first-visit",
        ctaId: "mobile-cta-default-tryout",
      };
}

export function MobileBottomCTABar() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const cta = pickCTA(pathname, locale);

  if (!cta) return null;

  return (
    <>
      {/* Spacer — pushes page content above the bar so it isn't hidden.
          Mobile-only. The bar itself is 64px tall; we add 80px of safe-area
          spacer so iOS Safari home-indicator + the bar both clear content. */}
      <div className="h-20 md:hidden" aria-hidden />

      {/* The bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        role="region"
        aria-label={locale === "nl" ? "Snelle actie" : "Quick action"}
      >
        {/* Backdrop with blur — sits above page content; semi-transparent so
            the page background shows through subtly while keeping CTA legible. */}
        <div
          className="border-t border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80
                     px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]
                     shadow-[0_-4px_16px_-2px_rgba(0,0,0,0.35)]"
        >
          {/* Primary CTA takes (almost) full width — leaves room for the
              floating WhatsApp circle at bottom-right (it's at right-6
              with size 14×14, so we keep right margin pr-20 to clear it). */}
          {cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cta={cta.ctaId}
              className={`plausible-event-name=${cta.ctaId.replace(/-/g, "_")} flex w-full items-center justify-center gap-2
                         rounded-2xl bg-brand px-5 py-3.5
                         text-base font-bold text-white
                         shadow-lg shadow-brand/30
                         transition-all active:scale-[0.98]
                         pr-20`}
            >
              {cta.label}
              <ArrowRight className="h-5 w-5 -mr-2" />
            </a>
          ) : (
            <Link
              href={cta.href}
              data-cta={cta.ctaId}
              className={`plausible-event-name=${cta.ctaId.replace(/-/g, "_")} flex w-full items-center justify-center gap-2
                         rounded-2xl bg-brand px-5 py-3.5
                         text-base font-bold text-white
                         shadow-lg shadow-brand/30
                         transition-all active:scale-[0.98]
                         pr-20`}
            >
              {cta.label}
              <ArrowRight className="h-5 w-5 -mr-2" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
