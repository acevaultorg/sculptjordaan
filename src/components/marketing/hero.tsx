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
 *   - First image keeps priority + fetchPriority="high" (the LCP candidate).
 *   - Additional images mount only AFTER the first image's real onLoad fires,
 *     so on slow connections they never steal bandwidth from the LCP image
 *     before it paints. A fixed 2s timer mounted them too early on slow-4G —
 *     images 2-4 began fetching while the LCP image was still downloading,
 *     pushing LCP to a measured 10.2s on Lighthouse mobile (2026-05-31).
 *     Secondary images also fetch at fetchPriority="low". A generous fallback
 *     timer still starts the slideshow if onLoad is ever missed.
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
// Order: the SPACE leads (operator directive 2026-05-28 "show the best
// picture of the space first"). studio-overview.jpeg is the signature shot —
// branded SCULPT wall + numbered turf sprint-lane + exposed brick + canal
// light — so the first thing every visitor (consumer AND trainer) sees is the
// actual studio, not a person. The action shot follows in rotation.
const HERO_IMAGES = [
  {
    src: "/images/studio/studio-overview.jpeg",
    alt: "Full overview of the SculptClub private studio in Amsterdam Jordaan — branded sprint lane, dumbbell rack, power rack and canal light",
  },
  {
    src: "/images/studio/entrance-smile.jpg",
    alt: "A smiling SculptClub member in the warm-lit private studio in Amsterdam Jordaan",
  },
  {
    src: "/images/studio/canal-view-doors.jpg",
    alt: "View from inside SculptClub onto the Egelantiersgracht canal in Amsterdam Jordaan",
  },
  {
    src: "/images/studio/boutique-corner.jpg",
    alt: "Cosy corner of the SculptClub private studio — dumbbells, kettlebells and plants in warm Jordaan light",
  },
];

// Rotation cadence: 4800ms (20% faster than the initial 6000ms — operator
// directive 2026-05-20 "make speed 20% faster of it"). Crossfade duration
// stays at 1000ms (Tailwind duration-1000) — faster transitions would feel
// jarring on the full-bleed hero; only the dwell-per-slide shortened.
const ROTATION_MS = 4800;
// Fallback only — secondary images normally mount on the first image's real
// onLoad (see Hero). This timer just guarantees the slideshow eventually
// starts if onLoad never fires (broken/detached image). Set well past a
// slow-4G LCP so it never pre-empts the first image's bandwidth on slow links.
const SECONDARY_MOUNT_FALLBACK_MS = 6000;

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
      // 2026-06-02 hero v3 refresh — operator screenshot compared SculptClub
      // hero to RUSH ("CHASE THE RUSH") + Saints & Stars ("NEXT LEVEL GYM" +
      // €1 promo) and proposed: "PRIVATE GYM JORDAAN / Find your trainer and
      // become / [Match with trainer] [rent the studio]". Direction: tighter
      // above-fold + emotional anchor (vs prior static-positioning hero).
      //
      // Couldn't ship "PRIVATE GYM JORDAAN" on one line: at iPhone 14 Pro
      // (393×3DPR) the 19-char string at clamp(1.5rem,7vw,4rem) + tracking
      // 0.12em = ~547px width inside a 361px inner container → overflow.
      // The math is the same calibration the 2026-05-17 fix landed on for
      // "PRIVATE GYM" alone (11 chars, ~316px @ 27.5px font, fits with 45px
      // headroom). Adding JORDAAN to the same line breaks that headroom.
      //
      // Synthesis: stack JORDAAN as a smaller H1 sub-line below PRIVATE GYM
      // (carries location INTO the brand visual identity, not chrome above
      // it). The overline "Amsterdam ××× Jordaan" is dropped — net 0 lines
      // vs current, but JORDAAN now reads as part of the brand name rather
      // than a faded location label.
      //
      // taglineSub swapped from "Eerste sessie vrijblijvend." (2026-05-19
      // premium friction-reducer) → "Vind je trainer. Word sterker." —
      // emotional anchor matching the RUSH single-emotion ruthlessness the
      // brain audit praised. "Word sterker" is brand-pointed (PRIVATE GYM =
      // strength-oriented voice). Friction-reduction is preserved via trust
      // line bullet "Eerste intake gratis" (clickable link added 2026-04-XX,
      // already above-fold).
      //
      // priceAnchor condensed: "vanaf €45 · 1-op-1 met je trainer" →
      // "vanaf €45 · 1-op-1" — "met je trainer" is implied by primary CTA
      // "Match je trainer in 30 sec" so condensing removes redundancy
      // without losing the lead-cap signal (40% mobile pre-scroll bounce
      // cause per 2026-05-26 operator audit).
      //
      // Subtitle field kept in shape with null so the destructuring/render
      // sites stay stable (the JSX guards on `t.subtitle` to skip rendering).
      subtitle: null,
      // taglineSub + priceAnchor removed 2026-07-04 (operator: "remove this
      // text" — the cropped hero screenshot showed exactly these two lines).
      // Hero now leads with the PRIVATE GYM / JORDAAN H1 + CTAs, no tagline/
      // price line. Fields kept as null so the render guards + data shape stay
      // stable (same pattern as `subtitle: null`).
      taglineSub: null,
      priceAnchor: null,
      // 2026-05-27 Clarity audit lesson — heatmap shows "Voor trainers"
      // (4 clicks) beats "Probeer Personal training" (2 clicks) on the same
      // hero. Hypothesis: "Probeer" is a vague verb that signals commit-
      // ment without showing the next step. "Match je trainer in 30 sec"
      // tells the visitor EXACTLY what happens + signals low time-cost +
      // routes directly to the just-shipped match quiz (highest-converting
      // path for cold IG traffic — 63% of visits). Destination changed
      // from /nl/gratis-intake (trainer-grid landing) to /nl/match-trainer
      // (3-question quiz that outputs top-2 trainer match).
      // 2026-06-20 copy fix (operator): "Match je trainer in 30 sec" →
      // "Vind je trainer in 30 sec". "Match je trainer" is awkward Dutch —
      // "match" doesn't read as a native transitive verb on "je trainer".
      // "Vind je trainer" is natural + states the outcome; the proven
      // "in 30 sec" low-time-cost signal + the match-quiz destination stay.
      ctas: [
        { label: "Vind je trainer in 30 sec", href: "/nl/match-trainer", icon: Users, primary: true },
      ],
      // 2026-06-02 label reorder per operator: "Voor trainers: studio huren"
      // → "Studio huren voor trainers". Noun-first reads more natural in Dutch
      // (the audience qualifier follows the action, not precedes it). Audience
      // disambiguation preserved ("voor trainers" still explicit, just trailing
      // — consumer reader still understands this is the trainer-rental funnel,
      // not a personal-workout rental).
      trainerLink: { label: "Studio huren voor trainers", href: "/nl/studio-huren" },
      // whatsappLink removed 2026-05-27 — see comment in BOTTOM CLUSTER.
      trustParts: [
        { text: "Eerste intake gratis", href: "/nl/gratis-intake", event: "hero_trust_intake" },
        // 2026-06-02: was static text. Clarity 2026-05-19 audit showed 5.45% of
        // trust-line taps were dead clicks; v19 fix promoted 2 of 3 bullets to
        // links but missed this middle one. Routes to /nl/prijzen which opens
        // with the no-contract / cancel-anytime policy.
        // 2026-06-02 same-session refinement: copy changed from "Geen contracten"
        // → "Altijd opzegbaar". Reasons: (a) Dutch gym vocabulary — buyers fear
        // "abonnement" + "opzegtermijn", not "contract" as a noun, (b) plural
        // "contracten" read slightly formal/legal, (c) positive framing matches
        // the other two trust bullets (rhythm becomes 3-of-3 positive value
        // statements: "Eerste intake gratis · Altijd opzegbaar · 5.0 ★ Google"),
        // (d) exact match for CLAUDE.md policy "Cancellation: Always free. No
        // time restriction." Plausible event name kept as `hero_trust_no_contracts`
        // for analytics continuity (don't break the historical click series).
        { text: "Altijd opzegbaar", href: "/nl/prijzen", event: "hero_trust_no_contracts" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
    en: {
      // See NL parallel for full 2026-06-02 hero v3 reasoning. EN matches
      // structure exactly: overline dropped, JORDAAN moves into H1 stack,
      // taglineSub becomes emotional anchor, priceAnchor condensed.
      subtitle: null,
      // See NL parallel — removed 2026-07-04 per operator "remove this text".
      taglineSub: null,
      priceAnchor: null,
      // See NL parallel comment (2026-05-27 Clarity audit + 2026-06-20 copy
      // fix: "Match your trainer" had the same awkwardness as the Dutch).
      ctas: [
        { label: "Find your trainer in 30 sec", href: "/en/match-trainer", icon: Users, primary: true },
      ],
      // See NL parallel reorder (2026-06-02).
      trainerLink: { label: "Studio rental for trainers", href: "/en/studio-rental" },
      // whatsappLink removed 2026-05-27 — see NL comment.
      trustParts: [
        { text: "First intro free", href: "/en/free-intro", event: "hero_trust_intake" },
        // See NL parallel — same dead-click closure + 2026-06-02 copy refinement
        // from "No contracts" → "Cancel anytime" (positive framing, matches the
        // other two bullets, exact CLAUDE.md policy).
        { text: "Cancel anytime", href: "/en/pricing", event: "hero_trust_no_contracts" },
        { text: "5.0 ★ Google", href: "https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam", event: "hero_trust_reviews", external: true },
      ],
    },
  }[locale];

  // Slideshow state — see HERO_IMAGES JSDoc above for the discipline.
  const [active, setActive] = useState(0);
  const [secondaryMounted, setSecondaryMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  // Mount images 2..N only after the first (LCP) image has actually loaded —
  // see onLoad on image 0 below. This timer is a fallback that starts the
  // slideshow even if that onLoad never fires (cached-broken / detached node).
  useEffect(() => {
    const t = window.setTimeout(() => setSecondaryMounted(true), SECONDARY_MOUNT_FALLBACK_MS);
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
    <section className="relative overflow-hidden -mt-32 min-h-[78vh] sm:min-h-[80vh] lg:min-h-[88vh] flex flex-col">
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
              fetchPriority={i === 0 ? "high" : "low"}
              onLoad={i === 0 ? () => setSecondaryMounted(true) : undefined}
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

      {/* Inner container — flex column with top cluster anchored near top and
          bottom cluster anchored near bottom. Top padding clears the FIXED
          header. Since the 2026-07-04 header redesign the header is TWO rows
          (utility + category tiles ≈ 122px) at EVERY breakpoint (was mobile-only
          before), so pt-36 (144px) now applies at sm+ too, with lg:pt-40 (160px)
          for large-screen rhythm. If the header height changes, re-tune. */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-6xl w-full px-4 sm:px-6 pt-36 pb-10 sm:pb-12 lg:pt-40 lg:pb-16">
        <div
          // Mobile/tablet (base + sm): top-anchored headline, flex-1 spacer
          // pushes CTAs to the bottom (near-thumb) — unchanged, this is the
          // tuned mobile layout for the 89% mobile audience.
          // Desktop (lg+): center the whole cluster vertically instead. The
          // tall 88vh hero + bottom-anchored CTAs left a big dead-zone of empty
          // photo between the headline and the CTAs on wide screens; centering
          // composes them as one tight group (operator audit 2026-05-29).
          className="text-center flex-1 flex flex-col lg:justify-center [text-shadow:_0_2px_24px_rgba(0,0,0,0.9),_0_0_12px_rgba(0,0,0,0.75)] [animation:hero-content-fade-in_0.6s_ease-out]"
        >
          {/* TOP CLUSTER — h1 (with JORDAAN sub-line) + taglineSub.
              2026-06-02: overline removed; JORDAAN moved INTO the H1 stack
              as a smaller second line below PRIVATE GYM. See `nl:` strings
              comment for the full rationale (overflow math + visual-hierarchy
              shift from location-as-chrome to location-as-brand). */}
          <div>
            {t.subtitle && (
              <p className="overline mb-4 !text-white/85 tracking-[0.18em]">{t.subtitle}</p>
            )}

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
                  shrinks ~12.5%.

                  2026-06-02 PRIVATE GYM stays solo on line 1; JORDAAN renders
                  as a smaller second span below — see next span. */}
              <span className="block font-bold tracking-[0.12em] leading-[0.95] text-[clamp(1.5rem,7vw,4rem)]">
                PRIVATE GYM
              </span>
              {/* JORDAAN — 2026-06-02 second H1 line replacing the dropped
                  overline. Smaller clamp (1rem→1.875rem, ~4vw) keeps it
                  visibly subordinate to PRIVATE GYM. Wider tracking
                  (0.22em) gives it the spaced location-label register the
                  old overline carried. Same white/85 tint matches the
                  visual hierarchy used elsewhere in the page. */}
              <span className="block mt-1 sm:mt-2 font-bold tracking-[0.22em] leading-[1] text-[clamp(1rem,4vw,1.875rem)] text-white/85">
                JORDAAN
              </span>
              {t.taglineSub && (
                <span className="block mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white/85">
                  {t.taglineSub}
                </span>
              )}
              {/* Price anchor — added 2026-05-26 lead-cap (task A). Catches
                  the price-curious visitor before bounce. Subtle white/70
                  weight so it reads as informational, not a sales-shout.
                  Removed 2026-07-04 per operator (see nl strings) — guarded
                  so it only renders when priceAnchor is non-null. */}
              {t.priceAnchor && (
                <span className="block mt-2 sm:mt-3 text-sm sm:text-base text-white/70 font-medium">
                  {t.priceAnchor}
                </span>
              )}
            </h1>
          </div>

          {/* Spacer. Mobile/tablet: flex-1 grows to push CTAs to the bottom.
              Desktop (lg+): fixed 64px gap (flex-none) so the parent's
              lg:justify-center can center the headline+CTA group together
              instead of the spacer eating all the vertical space. */}
          <div className="flex-1 min-h-[2rem] lg:flex-none lg:h-16" aria-hidden="true" />

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

              {/* Direct-book path — clients prefer booking directly over the quiz
                  (Plausible 30d: Acuity Click 159 ≫ Quiz-start 36). Kept as a quiet
                  text link, NOT another button / primary-colour, per the operator's
                  "too many buttons" hero directive (2026-05-27). */}
              <Link
                href={locale === "nl" ? "/nl/boek-trainer" : "/en/book-trainer"}
                className="plausible-event-name=hero_direct_book self-center text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white transition-colors"
                onClick={() => trackHeroClick("hero direct book", 0, locale)}
              >
                {locale === "nl" ? "Of boek direct je gratis intake →" : "Or book your free intro directly →"}
              </Link>

              {/* ZZP-trainer acquisition CTA — outline variant for hierarchy
                  via fill-vs-outline (not size). Same min-height + padding +
                  font as primary so both feel like first-class actions.
                  2026-06-02 legibility fix: pure transparent bg failed against
                  bright photos in the hero rotation (canal-view-doors.jpg has
                  sky + light-tree areas; white-on-beige washes out, operator
                  screenshot caught it). Switched to glass-blur over a black
                  veil — same pattern the proven Try-Out header button uses
                  — guaranteed readable against ANY rotation slide while
                  staying visually subordinate to the orange primary CTA.
                  Border bumped to white/60 for slightly stronger definition
                  and `[text-shadow:none]` REMOVED so the button text inherits
                  the hero parent's text-shadow (double insurance against
                  bright-background contrast failure). */}
              <ButtonLink
                href={t.trainerLink.href}
                size="lg"
                className="plausible-event-name=hero_trainer_cta rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-black/35 backdrop-blur-md hover:bg-black/45 text-white border border-white/60 hover:border-white active:scale-95 transition-all"
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
