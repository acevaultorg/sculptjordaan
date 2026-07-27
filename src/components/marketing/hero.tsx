"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { FirstTimeMenu } from "@/components/marketing/first-time-menu";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { whatsappLinks } from "@/config/acuity";
import { trackHeroClick } from "@/lib/tracking";
import { getColor } from "@/lib/image-color-manifest";
import { siteConfig, type Locale } from "@/config/site";

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
// FOCAL POINTS (`position`) — 2026-07-20. Every hero photo is PORTRAIT
// (1440x1920). The desktop hero is a wide band, so object-cover scales each
// photo to the full width and only ~33% of its HEIGHT is ever on screen. Which
// third you see is decided entirely by the Y value here.
//
// All four previously shared one hardcoded `center 25%`, which put the visible
// window at roughly 17%-50% of the photo — i.e. ceiling, pipes and track
// lighting — and cropped off the sprint-lane numbers, dumbbell rack and mats
// that live at 55%-100%. The hero of a private gym was showing everything
// except the gym. Each photo now gets the anchor its own composition needs.
//
// Mobile is unaffected: there the portrait image is cropped horizontally, not
// vertically, so the full height shows and this Y value is inert.
const HERO_IMAGES = [
  {
    src: "/images/studio/studio-overview.jpeg",
    alt: "Full overview of the SculptClub private studio in Amsterdam Jordaan — branded sprint lane, dumbbell rack, power rack and canal light",
    // Signature shot. 40% is the one value that fits BOTH halves of it in the
    // ~33% window: the whole SCULPT wall AND the numbered sprint lane, dumbbell
    // rack and power rack down the back. Tested against 25/50/58/64/70:
    // 25% = ceiling + pipes (the old bug); 50% clips the letters against the
    // header and collides with the nav logo; 58%+ drops the branding entirely
    // and leaves a half-cut "SCU" ghost behind the header.
    position: "center 40%",
  },
  {
    src: "/images/studio/entrance-smile.jpg",
    alt: "A smiling SculptClub member in the warm-lit private studio in Amsterdam Jordaan",
    // Tight portrait — the hardest of the four, because her face sits at ~31%
    // of the photo and the desktop band is only ~33% tall, so there is barely
    // room to place it. 32% lifts her whole face into the clear strip between
    // the header and the headline. Tested against 8/24/36/42: the old 24% ran
    // the headline straight across her eyes and the CTA over her mouth; 42%
    // decapitated her and centred the frame on her chest.
    position: "center 32%",
  },
  {
    src: "/images/studio/canal-view-doors.jpg",
    alt: "View from inside SculptClub onto the Egelantiersgracht canal in Amsterdam Jordaan",
    // The canal view IS this photo's subject, so don't drop so low that the
    // doors leave frame. 58% keeps the full doorway + canal and picks up the
    // medicine balls, bench and plant at the edges. Tested 68/75 to try to
    // reach the floor mats: both cut the canal houses off and left a dead
    // expanse of pavement, so 58% stands.
    position: "center 58%",
  },
  {
    src: "/images/studio/boutique-corner.jpg",
    alt: "Cosy corner of the SculptClub private studio — dumbbells, kettlebells and plants in warm Jordaan light",
    // 55% centres the dumbbell rack + kettlebells; 25% showed the vinyl shelf
    // and bare wall above them.
    position: "center 55%",
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
      // ⚠️ trustParts (NL here + EN below) is DEAD CONFIG — it is NOT rendered
      // anywhere. The hero trust line was removed on purpose in c09cb52
      // (operator 2026-07-04, image annotation: "Hero: remove the trust line
      // 'Eerste intake gratis · Altijd opzegbaar · 5.0 ★ Google'"). Kept only
      // as a record of the wording + the tracking events, so the copy isn't
      // lost if it's ever reinstated.
      // DO NOT "fix" this by re-rendering it — that reverses an explicit
      // operator decision. Verified 2026-07-27: a mobile-375 audit found the
      // hero shows no social proof above the fold (first "5.0 op Google" sits
      // at y≈919 on an 812px viewport, i.e. below the fold) while ~20% of
      // sessions arrive cold from Instagram. That is a real trade-off, but it
      // is the operator's call to reopen — surface it, don't silently undo it.
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
    <section className="relative overflow-hidden -mt-32 lg:-mt-20 min-h-[78vh] sm:min-h-[80vh] lg:min-h-[88vh] flex flex-col">
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
              className={`object-cover [transform:translateZ(0)] transition-opacity duration-1000 ease-in-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              // Per-image focal point — see HERO_IMAGES. Was a single hardcoded
              // [object-position:center_25%] for all four, which framed the
              // ceiling and cropped the gym away on desktop (2026-07-20 fix).
              style={{ objectPosition: img.position }}
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
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-6xl w-full px-4 sm:px-6 pt-36 pb-10 sm:pb-12 lg:pt-24 lg:pb-16">
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
          {/* Top spacer — operator 2026-07-04: "put PRIVATE GYM JORDAAN more
              in the middle of the image". Pushes the headline down toward
              vertical-middle of the hero photo area (which rotates across 4
              differently-composed photos, so this targets the SECTION's
              middle, not any one image's specific content — the existing
              radial-gradient dark-vignette below is centered on the section
              too, so legibility holds regardless of which photo is active).
              Mobile/tablet only (lg:h-0) — desktop already centers the whole
              headline+CTA cluster via lg:justify-center, this would double
              up there. Doesn't touch the CTA-near-thumb bottom anchoring:
              the flex-1 spacer between headline and CTAs (below) just
              absorbs less space, so CTAs stay exactly where they were. */}
          <div className="h-[17vh] sm:h-[19vh] lg:h-0" aria-hidden="true" />

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

          {/* BOTTOM CLUSTER — single "First time?" wayfinder (operator
              2026-07-04: "change this buttons in First time?, when users clicks,
              first time menu should appear"). Replaces the prior primary +
              "zie alle trainers" link + trainer-rental outline button. One
              inviting opener routes every audience (consumer PT / Open Gym /
              Small Group AND ZZP-trainer rental) from a single tap; the four
              paths live one tap deeper inside the sheet, first-timer-framed.
              See first-time-menu.tsx for the full rationale + the paths.
              (Prior 2-CTA audience-split rationale intentionally superseded by
              this directive — the split is now expressed inside the menu, not
              on the hero surface.) */}
          {/* Operator 2026-07-16: two CTAs — the free-trial wayfinder (same
              sheet as before, relabeled "Boek gratis proefles"/"Book free
              trial" in first-time-menu.tsx) + a low-threshold WhatsApp chat
              for everyone not ready to book. White-glass secondary is allowed
              here (over photo). */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <FirstTimeMenu locale={locale} />
            <a
              href={whatsappLinks[locale]}
              target="_blank"
              rel="noopener noreferrer"
              data-intent="generic"
              data-pricing="unknown"
              onClick={() => trackHeroClick("whatsapp_chat", 1, locale)}
              className="plausible-event-name=hero_whatsapp_chat inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 min-h-[48px]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {locale === "nl" ? "Stel je vraag" : "Ask a question"}
            </a>
          </div>

          {/* SOCIAL PROOF — rating only, deliberately NOT the old 3-part trust
              bar (operator removed that on 2026-07-04, c09cb52; the minimalist
              hero direction stands). Re-added 2026-07-27 on the operator's
              explicit "you decide all, do what's best for revenue".

              Why the rating specifically: a mobile-375 audit that day found the
              hero carried NO social proof above the fold — the first "5.0 op
              Google" sat at y≈919 on an 812px viewport, i.e. unseen — while
              ~20% of sessions arrive COLD from Instagram (in-app browser) with
              zero prior context, 69% of all sessions are mobile, and 17% quick-
              back. The 5.0/21-review rating is the single strongest owned trust
              asset and it was invisible to exactly the visitors who need it.
              The site's own best-converting page (/en/studio-rental/free-trial)
              already shows the rating directly under its CTA — this mirrors
              that proven pattern rather than inventing one.

              Placement: directly under the CTAs so it lands ~y=530 on a 375px
              screen — inside the fold AND clear of the cookie banner, which
              occupies 669-812px on first paint.

              Values come from siteConfig.rating so they can never drift from
              the JSON-LD / reviews section. White text is allowed here because
              it sits over the hero photo (per CLAUDE.md). */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=SculptClub+Egelantiersgracht+424+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHeroClick("google_rating", 2, locale)}
            className="plausible-event-name=hero_trust_reviews mt-4 inline-flex items-center justify-center gap-1.5 self-center text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <span aria-hidden="true" className="text-base leading-none text-[#FFC107]">★★★★★</span>
            <span>
              {locale === "nl"
                ? `${siteConfig.rating.value.toFixed(1).replace(".", ",")} op Google · ${siteConfig.rating.count} reviews`
                : `${siteConfig.rating.value.toFixed(1)} on Google · ${siteConfig.rating.count} reviews`}
            </span>
          </a>

          {/* Bottom spacer — operator 2026-07-04 "make the button smaller and
              the position higher" (Saints & Stars example). Mobile/tablet only:
              mirrors the flex-1 spacer ABOVE the button so the wayfinder now
              CENTERS in the lower area of the hero instead of hugging the very
              bottom — lands it higher (lower-third, like the example) while the
              headline stays mid-hero. lg:hidden so desktop's justify-center
              centering of the headline+CTA group is untouched. */}
          <div className="flex-1 lg:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
