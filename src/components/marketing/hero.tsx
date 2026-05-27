"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Users, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { trackHeroClick } from "@/lib/tracking";
import { getColor } from "@/lib/image-color-manifest";
import type { Locale } from "@/config/site";

/**
 * Hero background slideshow — operator directive 2026-05-20: "make this
 * picture slide show / new trainers should get a great impressions of the
 * space quickly". A single static photo undersells the studio breadth for
 * the ZZP-trainer audience who actively shop on visible space + equipment.
 *
 * Discipline (preserves the static-CTA principle from photo-slideshow.tsx
 * anti-pattern documentation): ONLY the background image crossfades. All
 * text overlay — overline, h1 "PRIVATE GYM", taglineSub, both CTAs, trust
 * line — stays 100% static. The motion never competes with the CTA layer.
 * It's the equivalent of a slow Ken Burns slideshow across the same H1.
 *
 * LCP protection:
 *   - First image keeps priority + fetchPriority="high" (current hero shot,
 *     unchanged LCP candidate).
 *   - Additional images mount after a 2-second delay so they don't compete
 *     for the initial network budget.
 *   - Rotation starts only after secondary images are mounted.
 *
 * Accessibility:
 *   - Respects prefers-reduced-motion (rotation paused if user opts out).
 *   - Pauses when tab is hidden (no compute spent off-screen).
 *
 * Why operator wants this on the homepage despite the earlier static-hero
 * decision: SculptClub has TWO audiences with opposite needs —
 *   · IG-burst consumer (6s session): wants single clear CTA, static helps.
 *   · ZZP trainer (longer session, evaluating "is this a space I'd rent?"):
 *     wants visible space breadth, slideshow helps.
 * The overlay (CTAs + headline) serves the consumer; the rotating background
 * serves the trainer. Both audiences hit the same homepage; this addresses
 * the trainer-acquisition gap operator surfaced 2026-05-20.
 */
const HERO_IMAGES = [
  {
    src: "/images/studio/training-barbell-squat.jpg",
    alt: "Personal training session at SculptClub private gym in Amsterdam Jordaan — barbell squat in Rogue power rack",
  },
  {
    src: "/images/studio/studio-overview.jpeg",
    alt: "Full overview of the SculptClub private studio in Amsterdam Jordaan — sprint lane, dumbbell rack, power rack",
  },
  {
    src: "/images/studio/canal-view-doors.jpg",
    alt: "View from inside SculptClub onto the Egelantiersgracht canal in Amsterdam Jordaan",
  },
  {
    src: "/images/studio/power-rack.jpeg",
    alt: "Rogue power rack with Olympic barbell at SculptClub private gym in Amsterdam Jordaan",
  },
];

// Rotation cadence: 4800ms (20% faster than the initial 6000ms — operator
// directive 2026-05-20 "make speed 20% faster of it"). Crossfade duration
// stays at 1000ms (Tailwind duration-1000) — faster transitions would feel
// jarring on the full-bleed hero; only the dwell-per-slide shortened.
const ROTATION_MS = 4800;
const SECONDARY_MOUNT_DELAY_MS = 2000;

export function Hero({ locale }: { locale: Locale }) {
  const t = {
    // Hero CTAs split by audience:
    // - Primary = CONSUMER (Vind Personal Trainer → trainer hub) — matches
    //   paid Google PT-search + organic + brand traffic
    // - Secondary = ZZP TRAINER (Huur studio (voor trainers) → studio-rental)
    //   — matches "studio huren amsterdam" + ZZP-trainer prospecting
    //
    // History 2026-05-16: tried "Bekijk de studio" → /nl/studio (consumer
    // gallery) for the secondary CTA but operator restored ZZP-trainer
    // targeting because (a) consumer audience is already covered by the
    // primary trainer CTA, (b) the secondary CTA's distinct value-prop
    // serves ZZP-trainers shopping for rental space, (c) "(voor trainers)"
    // parenthetical disambiguates the audience explicitly on the button.
    // 2026-05-19 hero refresh (Saints & Stars-style adaptation, scoped to
    // safe high-impact changes — hero text rewrite parked because "PRIVATE
    // GYM JORDAAN" on one line overflows mobile at any readable scale and
    // a two-line stack is a larger layout decision):
    //
    // - Sub swapped from generic "Jouw manier. Jouw resultaat." (every PT
    //   studio uses some variant — cliché, no specific brand claim) to
    //   concrete friction-reducer "Eerste sessie vrijblijvend." — premium
    //   Dutch synonym for "free first session" without the discount-flyer
    //   register. NB: trust line below repeats "Eerste intake gratis" — same
    //   message in two voices (premium + proof), which reinforces rather
    //   than duplicates.
    // - Primary CTA: "Probeer Personal training" → /nl/gratis-intake (most
    //   direct conversion landing — same page paid Google Ads optimizes for).
    //   2026-05-19 (same-day refinement): swapped from "Probeer vandaag" per
    //   operator. "Vandaag" was urgency-vague — visitor didn't know WHAT they
    //   were trying. "Personal training" anchors the offer specifically +
    //   disambiguates from the demoted "Voor trainers" link below (consumer vs
    //   ZZP trainer split is now explicit at the action layer). Urgency is
    //   already carried by the subhero ("Eerste sessie vrijblijvend.") + trust
    //   line ("Eerste intake gratis"), so the CTA didn't need to repeat it.
    //   Casing matches operator's intent ("Personal training" P-cap + t-lower
    //   — Dutch-relaxed register for a borrowed-English service name; matches
    //   blog headers and codebase usage of this variant).
    // - Secondary CTA: re-promoted to outline button 2026-05-19 (same-day
    //   refinement). The 2026-05-19 demotion to small text link cited Saints &
    //   Stars / Equinox single-CTA conversion math (~15-25% lift on consumer
    //   click-through from removing choice paralysis). That math is correct for
    //   single-funnel boutique gyms — but SculptClub runs TWO equal-importance
    //   funnels:
    //     · Consumer (PT bookings) — revenue per session
    //     · ZZP trainer (studio rental) — recurring monthly + EACH trainer
    //       brings a client roster (the highest-LTV channel by far)
    //   Demoting ZZP trainer surface to a text link undersells the funnel that
    //   actually compounds. Outline-button (transparent bg + white border)
    //   restores prominence while preserving visual hierarchy via fill-vs-
    //   outline contrast — primary action still wins the eye, secondary still
    //   reads as clearly tappable. Building2 icon back (matches historical
    //   pre-2026-05-19 convention + signals "studio/building" semantically).
    //   Audience-first framing kept ("Voor trainers: studio huren") because
    //   that disambiguation MUST hit before the action when sitting below a
    //   "Personal training" primary — otherwise reader confuses two trainer
    //   contexts. Casing: "studio huren" lowercase (Dutch grammar + URL slug
    //   match `/nl/studio-huren`; operator typed "Studio huren" but that was
    //   phone auto-capitalize — corrected per operator's "fix my prompts"
    //   delegation).
    // Trust line is an array of segments so the action-suggesting bullets can
    // become real <Link>s instead of staying as flat text. Clarity 3d-mobile
    // heatmap on /nl/ (2026-05-19): the `P.text-sm.text-muted-foreground[2]`
    // element accumulated 3 clicks / 5.45 % of all taps as DEAD CLICKS — visitors
    // were tapping the trust bullets expecting an action. The two segments that
    // promise the action ("Eerste intake gratis" + "5.0 ★ Google") get hrefs;
    // the static factual segments ("Geen contracten" / "Dagelijks 06:30–22:00")
    // stay as spans. Each clickable bullet ships a distinct Plausible event
    // (hero_trust_intake / hero_trust_reviews) so we can measure if the
    // dead-click signal converts into a real conversion path.
    //
    // Google reviews URL: maps.app.goo.gl share-link to the SculptClub place
    // listing. Opens Google Maps directly on the reviews tab on mobile;
    // browser fallback for desktop. (Operator can swap to a precise Place ID
    // URL by editing the href below — current link is the canonical share-link
    // returned by Google's own share dialog for the listing.)
    // 2026-05-26 lead-cap refinement — added price-anchor chip "vanaf €45"
    // directly under taglineSub (catches the 40% of mobile visitors who
    // bounce before scrolling past the headline → price unknown is a
    // primary bounce cause for boutique-PT pricing audiences). WhatsApp
    // CTA promoted from the sticky bar into the hero CTA cluster as a
    // 3rd outline button — gives Audience B (curious browser, 40% of
    // traffic) a 0-scroll path to async chat. Trust line tightened from
    // 4 bullets → 3 (hours dropped — already shown in sticky bar; price
    // moved into anchor chip).
    nl: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Eerste sessie vrijblijvend.",
      // Was: "vanaf €45 · privé studio Jordaan" — operator audit 2026-05-27
      // flagged as duplicate ("Jordaan" repeats overline, "privé studio"
      // repeats h1 "PRIVATE GYM"). New copy adds genuinely-new value:
      // 1-op-1 attention = the differentiator from chain-gym group trainers.
      priceAnchor: "vanaf €45 · 1-op-1 met je trainer",
      // 2026-05-27 Clarity audit lesson — heatmap shows "Voor trainers"
      // (4 clicks) beats "Probeer Personal training" (2 clicks) on the same
      // hero. Hypothesis: "Probeer" is a vague verb that signals commit-
      // ment without showing the next step. "Match je trainer in 30 sec"
      // tells the visitor EXACTLY what happens + signals low time-cost +
      // routes directly to the just-shipped match quiz (highest-converting
      // path for cold IG traffic — 63% of visits). Destination changed
      // from /nl/gratis-intake (trainer-grid landing) to /nl/match-trainer
      // (3-question quiz that outputs top-2 trainer match).
      ctas: [
        { label: "Match je trainer in 30 sec", href: "/nl/match-trainer", icon: Users, primary: true },
      ],
      trainerLink: { label: "Voor trainers: studio huren", href: "/nl/studio-huren" },
      // whatsappLink removed 2026-05-27 — see comment in BOTTOM CLUSTER.
      trustParts: [
        { text: "Eerste intake gratis", href: "/nl/gratis-intake", event: "hero_trust_intake" },
        { text: "Geen contracten" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
    en: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "First session free.",
      // See NL parallel — was "private studio in Jordaan" (duplicate of
      // overline + h1). New copy: 1-on-1 differentiator.
      priceAnchor: "from €45 · 1-on-1 with your trainer",
      // See NL parallel comment (2026-05-27 Clarity audit).
      ctas: [
        { label: "Match your trainer in 30 sec", href: "/en/match-trainer", icon: Users, primary: true },
      ],
      trainerLink: { label: "For trainers: studio rental", href: "/en/studio-rental" },
      // whatsappLink removed 2026-05-27 — see NL comment.
      trustParts: [
        { text: "First intro free", href: "/en/free-intro", event: "hero_trust_intake" },
        { text: "No contracts" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
  }[locale];

  // Slideshow state — see HERO_IMAGES JSDoc above for the discipline.
  const [active, setActive] = useState(0);
  const [secondaryMounted, setSecondaryMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  // Mount images 2..N after a short delay so they don't compete for the
  // initial LCP-critical network budget (the first photo + above-fold text
  // owns the first ~2 seconds).
  useEffect(() => {
    const t = window.setTimeout(() => setSecondaryMounted(true), SECONDARY_MOUNT_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Respect prefers-reduced-motion + pause when tab is hidden.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePause = () => setPaused(mq.matches || document.hidden);
    updatePause();
    mq.addEventListener("change", updatePause);
    document.addEventListener("visibilitychange", updatePause);
    return () => {
      mq.removeEventListener("change", updatePause);
      document.removeEventListener("visibilitychange", updatePause);
    };
  }, []);

  // Auto-advance the active image — only after secondary images mount + not
  // paused + multiple images exist. Slow enough (6s) to let each photo breathe.
  useEffect(() => {
    if (!secondaryMounted || paused || HERO_IMAGES.length < 2) return;
    const id = window.setInterval(() => {
      setActive((cur) => (cur + 1) % HERO_IMAGES.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [secondaryMounted, paused]);

  return (
    <section className="relative overflow-hidden -mt-20 min-h-[72vh] sm:min-h-[80vh] lg:min-h-[88vh] flex flex-col">
      {/* Background slideshow — only the image crossfades; text overlay below
          stays 100% static. backgroundColor renders BEFORE the first image
          fetches: zero-paint-cost dominant-color preview (matched via
          build-time manifest). Replaces the reverted blur-SVG approach
          (see docs/PERF-EXPERIMENTS-2026-05-07.md). */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
        aria-hidden="true"
      >
        {HERO_IMAGES.map((img, i) => {
          // Mount only the first image initially; rest after delay to protect
          // LCP. Each image stays mounted once shown — crossfade swaps opacity,
          // not the DOM node, so the network fetch happens once per image.
          if (i > 0 && !secondaryMounted) return null;
          return (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover [object-position:center_25%] [transform:translateZ(0)] transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
              loading={i === 0 ? "eager" : "lazy"}
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          );
        })}
        {/* Two-layer overlay for mobile text legibility against bright image
            areas (sky, skin, equipment reflections). The first gradient gives
            the top/bottom dark veil for nav + bottom CTAs. The second adds a
            radial darkening centered on the content cluster (~50% down + 40%
            opacity) so PRIVATE GYM headline + CTAs stay readable on ANY image
            section. Tried text-shadow alone first — insufficient on phones in
            full sunlight against bright torso/sky regions. Overlays stay
            on top of all slideshow images via z-stack order. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/50" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_55%)]" />
      </div>

      {/* Inner container — flex column with top cluster anchored near top
          and bottom cluster anchored near bottom. Padding matches the nav
          height at top and gives breathing room at bottom. */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-6xl w-full px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16">
        <div
          className="text-center flex-1 flex flex-col [text-shadow:_0_2px_24px_rgba(0,0,0,0.9),_0_0_12px_rgba(0,0,0,0.75)] [animation:hero-content-fade-in_0.6s_ease-out]"
        >
          {/* TOP CLUSTER — overline + h1 + taglineSub (tight group, pulled up) */}
          <div>
            <p className="overline mb-4 !text-white/85 tracking-[0.18em]">{t.subtitle}</p>

            <h1 className="text-white">
              {/* Hero headline — single line on all viewports 320px+.
                  2026-05-17: was clamp(1.875rem,8vw,4rem). Headless iPhone 14
                  Pro screenshot (393×852) showed "PRIVATE GY..." clipped at
                  right — Syne Bold +0.12em tracking renders ~11.5× font-size,
                  not the 9.09× the prior comment claimed. At 393px viewport
                  the 31.44px font produced ~370px text width inside a 361px
                  inner container (px-4 = 16px gutters), and parent section's
                  overflow-hidden cut the "M".
                  New: clamp(1.5rem, 7vw, 4rem) — 24px min → 27.5px @ iPhone
                  → 56px @ 800px → 64px max @ 914px+. At 393px: 27.5 × 11.5
                  = 316px in 361px container = 45px headroom. Same dramatic
                  cap on desktop (64px @ 914px+), only mobile/small-tablet
                  shrinks ~12.5%. */}
              <span className="block font-bold tracking-[0.12em] leading-[0.95] text-[clamp(1.5rem,7vw,4rem)]">
                PRIVATE GYM
              </span>
              <span className="block mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white/85">
                {t.taglineSub}
              </span>
              {/* Price anchor — added 2026-05-26 lead-cap (task A). Catches
                  the price-curious visitor before bounce. Subtle white/70
                  weight so it reads as informational, not a sales-shout. */}
              <span className="block mt-2 sm:mt-3 text-sm sm:text-base text-white/70 font-medium">
                {t.priceAnchor}
              </span>
            </h1>
          </div>

          {/* Flexible spacer — pushes CTAs to the bottom of the hero */}
          <div className="flex-1 min-h-[2rem]" aria-hidden="true" />

          {/* BOTTOM CLUSTER — primary (fill) + secondary (outline) + trust.
              Two equal-height buttons stacked, distinguished by fill vs
              outline. Primary still wins the eye (orange fill on warm gradient
              = high color anchor); secondary clearly tappable (full button
              footprint, 44×44 WCAG, white border at 50% opacity = visible but
              subordinate). The audience-distinct value-props remove choice
              paralysis: visitor decides "am I here to train, or here to rent
              the studio?" in one read — no internal ranking of two equivalent
              consumer offers needed. */}
          <div>
            <div className="flex flex-col items-stretch gap-3 max-w-md mx-auto">
              {t.ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  className={`plausible-event-name=hero_cta_${i + 1}_primary rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-brand hover:bg-brand-dark text-brand-foreground border border-brand transition-all shadow-brand-lg [text-shadow:none]`}
                  onClick={() => trackHeroClick(cta.label, i + 1, locale)}
                >
                  <cta.icon className="w-4 h-4" />
                  {cta.label}
                </ButtonLink>
              ))}

              {/* ZZP-trainer acquisition CTA — outline variant for hierarchy
                  via fill-vs-outline (not size). Same min-height + padding +
                  font as primary so both feel like first-class actions.
                  Border at white/50 + hover bg white/10 reads on the warm
                  hero gradient without competing with the orange anchor. */}
              <ButtonLink
                href={t.trainerLink.href}
                size="lg"
                className="plausible-event-name=hero_trainer_cta rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white transition-all [text-shadow:none]"
                onClick={() => trackHeroClick(t.trainerLink.label, 2, locale)}
              >
                <Building2 className="w-4 h-4" />
                {t.trainerLink.label}
              </ButtonLink>

              {/* WhatsApp CTA REMOVED from hero 2026-05-27 — UX audit per
                  operator directive "too many buttons, too many primary
                  CTA colors". WhatsApp is already always-available via the
                  fixed MobileLeadBar (bottom sticky on every demand page,
                  including this one) + the CtaBand below fold. Stacking
                  3 hero CTAs (orange + outline + emerald) on mobile was
                  decision-paralysis + color-competition. Two-CTA hero
                  reads cleaner: ONE primary (PT intake = largest audience)
                  + ONE secondary (trainer rental = highest LTV audience).
                  Visitors who want chat first see it in the sticky bar
                  bottom-of-viewport, always within thumb reach. */}
            </div>

            {/* Trust line — mixed clickable + static bullets.
                Clickable segments get subtle underline-on-hover + same color
                register as static (no visual jump that would distract from the
                primary action). Visitors who tap "Eerste intake gratis" hit the
                same destination as the primary CTA — same goal, different
                surface — so a tap from the trust line is a real conversion not
                a leak. */}
            <p className="mt-4 text-center text-xs text-white/70">
              {t.trustParts.map((part, i) => (
                <span key={part.text}>
                  {i > 0 && <span aria-hidden> · </span>}
                  {part.href ? (
                    <Link
                      href={part.href}
                      target={part.external ? "_blank" : undefined}
                      rel={part.external ? "noopener noreferrer" : undefined}
                      onClick={() => trackHeroClick(part.text, i + 100, locale)}
                      className={`plausible-event-name=${part.event} underline-offset-4 decoration-white/30 hover:text-white hover:underline hover:decoration-white/70 transition-colors`}
                    >
                      {part.text}
                    </Link>
                  ) : (
                    <span>{part.text}</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
