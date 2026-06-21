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
import { ArrowRight } from "lucide-react";
import { getLocaleFromPath } from "@/lib/locale";
import { WhatsAppIcon, pickMessage } from "./whatsapp-button";

// Operator's WhatsApp number. Kept inline to avoid restructuring whatsapp-button.tsx
// (which owns its own PHONE const). Single number value used in both files.
const WA_PHONE = "31615147952";

interface CTAConfig {
  label: string;
  href: string;
  /** When true, opens in new tab (for WhatsApp links). */
  external?: boolean;
  /** Plausible event name for click tracking. */
  ctaId: string;
}

function pickCTA(pathname: string, locale: "nl" | "en"): CTAConfig | null {
  // Homepage (/ · /nl · /en) — DE-AGGRESSION (operator directive 2026-06-21:
  // "feel the site is too aggressive on sales → may have a counter-effect on
  // conversions; want extreme-good UX that converts well but doesn't 'scream'").
  // Plausible 30d data backs it: this default-branch sticky bar
  // (`mobile_cta_default_intake`) earned just 8 clicks across ALL content pages —
  // the loudest, most persistent, most screen-blocking element, yet the LEAST-
  // clicked CTA surface — while the homepage's calm, always-visible header CTAs
  // (`header_boek_open` 50 + `header_tryout_open` 38) + hero primary (31) + the
  // CtaBand carry the conversion (Acuity Click 154 overall). The homepage bar was
  // a nav-PUSH to /nl/gratis-intake (not a scroll-back to an on-page widget), so
  // removing the permanent orange bottom pill from the flagship first-impression
  // page calms the whole-page scroll WITHOUT removing a working conversion path.
  // KEPT on genuine funnel pages (studio-huren / open-gym / trainer-hub) where it
  // routes to a real booking widget. Reversible: delete this guard to restore.
  if (/^\/(nl|en)?\/?$/.test(pathname)) return null;

  // Hide on dedicated booking-STEP pages — the page IS the booking action, so a
  // floating "go to booking" CTA is redundant and competes with the on-page
  // widget's own button. Operator UX screenshot 2026-06-03 on
  // /studio-huren/gratis-test showed TWO "Naar boeking" CTAs on one screen
  // (the sticky bar + the inline AcuityEmbed's own button) = confusion. On the
  // 22 per-trainer plan-* pages the bar was even worse: it fell to the default
  // branch and MISDIRECTED the visitor away to the generic /gratis-intake — a
  // funnel leak off a trainer-specific booking page. This finally realises the
  // component's long-documented but never-implemented intent ("Hidden on:
  // Acuity embed pages"). Content HUBS that merely contain a booking section
  // (homepage, /studio-huren hub, /open-gym, /gratis-intake landing,
  // /vind-jouw-personal-trainer) KEEP the bar — there it scrolls the visitor
  // BACK to the widget instead of duplicating it.
  if (
    /\/(boeking-bevestigd|booking-confirmed)(\/|$)/.test(pathname) || // post-booking — already converted
    /\/(studio-huren|studio-rental)\/(gratis-test|free-trial)(\/|$)/.test(pathname) || // free-trial step (the screenshot)
    /\/plan-(gratis-intake-met|free-intro-with)-/.test(pathname) || // per-trainer intake step (×22)
    /\/(boek-trainer|boek-gym|boek-studio|book-trainer|book-gym|book-studio)(\/|$)/.test(pathname) || // dedicated book pages
    /\/(boek|book|start)(\/|$)/.test(pathname) // book/start booking endpoints
  ) {
    return null;
  }

  // NOTE: labels NEVER end with " →" — the JSX renders an <ArrowRight /> icon
  // for both internal AND external CTAs. 2026-05-16: operator phone-shot
  // showed "Boek gratis try-out → →" — duplicate-arrow bug from labels
  // containing trailing → plus JSX-rendered icon. Stripped from all labels.

  // Studio-rental — visitors are PT-trainers shopping rental space.
  // 2026-05-27: route changed from #schedule (deleted free-trial
  // embed) to #book (top booking widget on /nl/studio-huren). Page
  // now leads with the canonical booking widget; mobile sticky bar
  // returns visitor there after deep-scroll.
  if (/\/(studio-huren|studio-rental)(\/|$)/.test(pathname)) {
    return {
      label: locale === "nl" ? "Naar boeking" : "Go to booking",
      href: "#book",
      ctaId: "mobile-cta-studio-book",
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
          href: "https://wa.me/31615147952?text=" +
            encodeURIComponent("Hoi! Ik wil graag een gratis intake boeken. Kun je mij matchen met de juiste trainer?"),
          external: true,
          ctaId: "mobile-cta-intake-whatsapp",
        }
      : {
          label: "WhatsApp us now",
          href: "https://wa.me/31615147952?text=" +
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
          href: "https://wa.me/31615147952?text=" +
            encodeURIComponent("Hoi! Ik wil graag een gratis intake boeken. Kun je mij matchen met de juiste trainer?"),
          external: true,
          ctaId: "mobile-cta-trainerhub-whatsapp",
        }
      : {
          label: "WhatsApp us — we'll match",
          href: "https://wa.me/31615147952?text=" +
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

  // Word-trainer / become-trainer — direct trainer-conversion page.
  // Sticky bar routes to on-page aanmeld-form (operator directive
  // 2026-05-27 "vage funnels!! zorg dat trainer dan op de pagina zijn
  // gegevens achterlaat"). Pre-fix routed AWAY to /nl/studio-huren —
  // the trainer landed on a consumer-pricing page and lost trainer-
  // funnel context. Form lives at #aanmelden (nl) / #apply (en).
  if (/\/(word-trainer|become-trainer)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "Meld je aan",
          href: "#aanmelden",
          ctaId: "mobile-cta-trainer-apply",
        }
      : {
          label: "Apply now",
          href: "#apply",
          ctaId: "mobile-cta-trainer-apply",
        };
  }

  // Voor-trainers / for-trainers — hub page (no on-page form, sends
  // to the dedicated word-trainer/become-trainer page which has the
  // form). Two-step bar = hub → trainer page → form anchor.
  if (/\/(voor-trainers|for-trainers)(\/|$)/.test(pathname)) {
    return locale === "nl"
      ? {
          label: "Word SculptClub-trainer",
          href: "/nl/word-trainer#aanmelden",
          ctaId: "mobile-cta-trainerhub-apply",
        }
      : {
          label: "Become a trainer",
          href: "/en/become-trainer#apply",
          ctaId: "mobile-cta-trainerhub-apply",
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
  // 2026-06-20 (operator): "Boek gratis intake" was VAGUE — intake for WHAT?
  // (trainer / studio tour / become-a-trainer?). On a multi-funnel studio a
  // bare "intake" makes the visitor guess. This default CTA goes to the
  // personal-training free intro (/nl/gratis-intake), so name it: "met trainer".
  return locale === "nl"
    ? {
        label: "Gratis intake met trainer",
        href: "/nl/gratis-intake",
        ctaId: "mobile-cta-default-intake",
      }
    : {
        label: "Free intro with a trainer",
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

  // Anchor-aware visibility — hide the bar once its in-page anchor target is on
  // screen. The in-page-anchor CTAs (#schedule / #book / #aanmelden / #apply)
  // scroll the visitor to a section that already lives on this page. Once that
  // section is actually in view the bar is redundant ("book the thing you're
  // already booking") AND its fixed orange pill overlaps the live widget's own
  // controls — the Acuity time-slot buttons sit at the bottom of #schedule,
  // exactly where this bar sits. Operator UX screenshot 2026-06-17
  // (/en/open-gym#schedule): the orange "Book free Open Gym" bar showing over the
  // open Acuity scheduler read as "do the thing you're already doing". This
  // extends the long-standing "Hidden on booking-step pages" intent to content
  // HUBS that book inline (open-gym, studio hub) — by section visibility, not path.
  const anchorTarget = cta?.href.startsWith("#") ? cta.href : null;
  const [anchorInView, setAnchorInView] = useState(false);
  useEffect(() => {
    setAnchorInView(false);
    if (!anchorTarget || typeof IntersectionObserver === "undefined") return;
    const el = document.querySelector(anchorTarget);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setAnchorInView(entry.isIntersecting),
      // -25% bottom margin: the section must climb a quarter of the way up the
      // screen before it counts as "in view", so the bar only hides once the
      // visitor has genuinely scrolled INTO the schedule — not when its top edge
      // merely peeks at the very bottom (where the bar is still doing its job of
      // pulling them down to it).
      { rootMargin: "0px 0px -25% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [anchorTarget]);

  if (!cta) return null;

  // Shown after the hero is scrolled past, BUT hidden while the in-page anchor
  // target (booking schedule / apply form) is on screen — see anchorInView above.
  const showBar = revealed && !anchorInView;

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
          showBar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        role="region"
        aria-hidden={!showBar}
        aria-label={locale === "nl" ? "Snelle actie" : "Quick action"}
      >
        {/* Backdrop with blur — sits above page content; semi-transparent so
            the page background shows through subtly while keeping CTA legible. */}
        <div
          className="border-t border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80
                     px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]
                     shadow-[0_-4px_16px_-2px_rgba(0,0,0,0.35)]"
        >
          {/* Two-slot row: primary CTA (flex-1) + WhatsApp circle.
              Phone slot REMOVED 2026-06-20 — operator flagged the 3-element bar
              as a "super bad decision". Why it had to go:
                (1) the phone item was already data-confirmed DEAD and dropped
                    from the old MobileLeadBar in commit 94600f8 ("drop dead
                    Phone item — data-driven"), but the same dead button
                    survived here uncaught — a flip-flop regression;
                (2) three tap-targets in two colours (grey phone + orange CTA +
                    green WhatsApp) is exactly the "too many buttons / too many
                    CTA colours" clutter the operator has repeatedly rejected;
                (3) the grey circle read as a disabled/ugly element.
              This WhatsApp-first audience chats, it doesn't cold-call; the phone
              path still lives in the footer + /nl/contact for the rare weekend
              caller. Clean result: ONE orange primary CTA + ONE green WhatsApp
              circle. Do NOT re-add the phone here. */}
          <div className="flex items-center gap-2">
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
