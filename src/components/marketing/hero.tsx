"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { trackHeroClick } from "@/lib/tracking";
import { getColor } from "@/lib/image-color-manifest";
import type { Locale } from "@/config/site";

const HERO_SRC = "/images/studio/training-barbell-squat.jpg";

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
    nl: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Eerste sessie vrijblijvend.",
      ctas: [
        { label: "Probeer Personal training", href: "/nl/gratis-intake", icon: Users, primary: true },
      ],
      trainerLink: { label: "Voor trainers: studio huren", href: "/nl/studio-huren" },
      trustParts: [
        { text: "Eerste intake gratis", href: "/nl/gratis-intake", event: "hero_trust_intake" },
        { text: "Geen contracten" },
        { text: "Dagelijks 06:30–22:00" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
    en: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "First session free.",
      ctas: [
        { label: "Try Personal training", href: "/en/free-intro", icon: Users, primary: true },
      ],
      trainerLink: { label: "For trainers: studio rental", href: "/en/studio-rental" },
      trustParts: [
        { text: "First intro free", href: "/en/free-intro", event: "hero_trust_intake" },
        { text: "No contracts" },
        { text: "Daily 06:30–22:00" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
  }[locale];

  return (
    <section className="relative overflow-hidden -mt-20 min-h-[90vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col">
      {/* Background image — minimal overlay so the gym stays visible.
          Text contrast comes from text-shadow on the hero container.
          backgroundColor renders BEFORE the image fetches: zero-paint-cost
          dominant-color preview (matched to image via build-time manifest).
          Replaces the reverted blur-SVG approach (see
          docs/PERF-EXPERIMENTS-2026-05-07.md). */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: getColor(HERO_SRC) }}>
        <Image
          src={HERO_SRC}
          alt="Personal training session at SculptClub private gym in Amsterdam Jordaan — barbell squat in Rogue power rack"
          fill
          className="object-cover [object-position:center_25%] [transform:translateZ(0)]"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        {/* Two-layer overlay for mobile text legibility against bright image
            areas (sky, skin, equipment reflections). The first gradient gives
            the top/bottom dark veil for nav + bottom CTAs. The second adds a
            radial darkening centered on the content cluster (~50% down + 40%
            opacity) so PRIVATE GYM headline + CTAs stay readable on ANY image
            section. Tried text-shadow alone first — insufficient on phones in
            full sunlight against bright torso/sky regions. */}
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
