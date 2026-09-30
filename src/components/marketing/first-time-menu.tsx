"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, Users, UsersRound, Dumbbell, Building2 } from "lucide-react";
import { trackHeroClick } from "@/lib/tracking";
import type { Locale } from "@/config/site";

/**
 * First-time visitor wayfinder — operator directive 2026-07-04: replace the
 * hero's multi-CTA cluster (primary "Vind je trainer" + "zie alle trainers"
 * link + "Studio huren voor trainers" outline button) with ONE "Eerste keer? /
 * First time?" button that opens a menu of the 4 category paths, framed for a
 * newcomer.
 *
 * Why a single wayfinder over the prior 2-CTA audience split: a first-time
 * visitor to a studio with FOUR distinct offerings (Small Group · Open Gym ·
 * Personal Training · Rent Studio) doesn't yet know which one they are. One
 * inviting "First time?" opener that asks "where do you want to start?" removes
 * the need to pre-rank two consumer CTAs against each other on the hero, and
 * routes every audience (including the ZZP-trainer rental funnel) from a single
 * tap. The full paths still exist — they're one tap deeper, inside the sheet.
 *
 * The sheet reuses the exact bottom-sheet pattern the header's booking menu
 * already ships (backdrop-fade-in + panel-slide-up keyframes in globals.css,
 * body-scroll lock, backdrop/X/Escape close) so it feels native to the site.
 *
 * Ordering is first-timer-optimized: the three consumer paths lead (Personal
 * Training first — its "first intake free" is the strongest low-friction hook;
 * then Open Gym's low entry price; then Small Group), with the trainer-only
 * "Rent Studio" path separated below a divider since a first-timer is almost
 * always a consumer, not a trainer looking to rent.
 */

type FirstTimeOption = {
  icon: typeof Users;
  title: string;
  description: string;
  href: string;
  badge?: string;
  event: string;
};

const copy: Record<
  Locale,
  {
    button: string;
    title: string;
    subtitle: string;
    trainerHeading: string;
    close: string;
    consumer: FirstTimeOption[];
    trainer: FirstTimeOption;
  }
> = {
  nl: {
    // "probeersessie", never "proefles" (operator 2026-07-17): this button is an
    // UMBRELLA over Open Gym (train solo) + Studio huren (rental) — neither is a
    // "les". The studio-rental path already said "sessie"; this aligns the rest.
    button: "Boek gratis probeersessie",
    title: "Waar wil je beginnen?",
    subtitle: "Nieuw bij SculptClub? Kies wat bij je past en we helpen je op weg.",
    trainerHeading: "Ben je zelf trainer?",
    close: "Sluiten",
    consumer: [
      {
        icon: Users,
        title: "Personal Training",
        description: "Een traject naar jouw doel, met je eigen trainer. Eerste intake gratis.",
        href: "/nl/vind-jouw-personal-trainer",
        badge: "Boek intake",
        event: "first_time_personal_training",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Zelf trainen, max 4 personen. Nu €49/4 wkn.",
        // Points at the ZOMERDEAL landing page (operator 2026-07-21) — the same
        // offer the live summer ad sells (~~€79~~ → €49). Two reasons this
        // beats the previous /nl/gratis-proefles target: (1) a first-timer
        // tapping Open Gym sees the actual current offer instead of having to
        // find it, and (2) the deal page's PRIMARY CTA is still the free
        // tryout, so the "Gratis probeersessie" badge below stays a true
        // promise — the 2026-07-17 reason for not sending them to /nl/open-gym
        // (which buries the booking step) is respected.
        href: "/nl/open-gym/onbeperkt-zomerdeal",
        badge: "Gratis probeersessie",
        event: "first_time_open_gym",
      },
      {
        icon: UsersRound,
        title: "Small Group",
        description: "Samen sterker in een kleine groep.",
        href: "/nl/small-group",
        event: "first_time_small_group",
      },
    ],
    trainer: {
      icon: Building2,
      title: "Studio huren",
      description: "Bekijk de studio en probeer een sessie gratis. Vanaf €12/uur.",
      href: "/nl/studio-huren/gratis-test",
      event: "first_time_rent_studio",
    },
  },
  en: {
    button: "Book free trial",
    title: "Where do you want to start?",
    subtitle: "New to SculptClub? Pick what fits you and we'll guide you.",
    trainerHeading: "Are you a trainer yourself?",
    close: "Close",
    consumer: [
      {
        icon: Users,
        title: "Personal Training",
        description: "A programme toward your goal, with your own trainer. First intro free.",
        href: "/en/find-personal-trainer",
        badge: "Book intake",
        event: "first_time_personal_training",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Train on your own, max 4 people. Now €49/4 wks.",
        // See NL comment — the summer-deal landing page, whose primary CTA is
        // still the free tryout, so the "Free trial" badge stays truthful.
        href: "/en/open-gym/unlimited-summer-deal",
        badge: "Free trial",
        event: "first_time_open_gym",
      },
      {
        icon: UsersRound,
        title: "Small Group",
        description: "Stronger together in a small group.",
        href: "/en/small-group",
        event: "first_time_small_group",
      },
    ],
    trainer: {
      icon: Building2,
      title: "Studio rental",
      description: "See the studio and try a session for free. From €12/hr.",
      href: "/en/studio-rental/free-trial",
      event: "first_time_rent_studio",
    },
  },
};

export function FirstTimeMenu({
  locale,
  placement = "hero",
}: {
  locale: Locale;
  /** Where this wayfinder is rendered — drives the click-event name so a
   *  bottom-of-page tap is distinguishable from the hero tap in analytics. */
  placement?: "hero" | "bottom";
}) {
  const t = copy[locale];
  const [open, setOpen] = useState(false);

  // Lock body scroll while the sheet is open + close on Escape (matches the
  // header booking sheet's behavior).
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function handleOpen() {
    setOpen(true);
    // position 1 = hero, 2 = bottom-of-page (GA4 hero_cta_click distinguisher
    // while Plausible is off; the plausible-event-name class below also carries
    // the placement for when Plausible is re-enabled).
    trackHeroClick(t.button, placement === "bottom" ? 2 : 1, locale);
  }

  function OptionCard({ opt }: { opt: FirstTimeOption }) {
    const Icon = opt.icon;
    return (
      <Link
        href={opt.href}
        onClick={() => {
          setOpen(false);
          trackHeroClick(opt.title, 1, locale);
        }}
        className={`plausible-event-name=hero_${opt.event} flex items-center gap-3 p-3 rounded-2xl border border-border/60 hover:border-brand hover:bg-brand/5 transition-colors group`}
      >
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          {/* flex-wrap so the badge drops to its own line as a whole pill when
              it doesn't fit beside the title (e.g. "Personal Training" +
              "Gratis intake" on a narrow phone) — instead of the badge text
              fracturing into "Gratis" / "intake". Title + badge each stay on
              one line (whitespace-nowrap); the badge never shrinks (shrink-0). */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-base whitespace-nowrap">{opt.title}</span>
            {opt.badge && (
              <span className="shrink-0 whitespace-nowrap text-[11px] font-semibold text-brand bg-brand/10 rounded-full px-2 py-0.5">
                {opt.badge}
              </span>
            )}
          </div>
          <div className="text-[13px] leading-snug text-muted-foreground">{opt.description}</div>
        </div>
        <ArrowRight
          className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <>
      {/* The single hero action — orange primary, THE hero CTA. No icon
          (operator 2026-07-04: a decorative sparkle didn't reinforce "first
          time?" and added noise — a clean text button reads as the clearest,
          highest-CTR call to action). Bumped a step for prominence: text-base
          + font-bold + 56px min-height (was 14px/semibold/52px). Full-width,
          anchored at the bottom of the hero = the mobile thumb zone.
          Click tracking: the `plausible-event-name=hero_first_time` class fires
          a Plausible CUSTOM EVENT on every click (the site loads the
          tagged-events script) — make it a Goal in Plausible to read CTR. A
          GA4 `hero_cta_click` event also fires via handleOpen(). */}
      <div data-audience="member" className="flex justify-center">
        <button
          type="button"
          onClick={handleOpen}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={`plausible-event-name=${placement}_first_time inline-flex items-center justify-center rounded-full px-8 py-3 min-h-[48px] text-base font-bold bg-brand hover:bg-brand-dark text-brand-foreground border border-brand transition-all shadow-brand-lg cursor-pointer active:scale-95 [text-shadow:none]`}
        >
          {t.button}
        </button>
      </div>

      {/* ─── First-time menu — bottom sheet ───
          Portaled to document.body so it escapes the hero section's stacking
          context: the sheet is z-[999] but the cookie-consent banner is a
          root-level fixed z-50 element, and without the portal an ancestor
          stacking context would trap the sheet BELOW it (the banner would
          overlap the lower cards — and first-time visitors are exactly the
          ones who still see the cookie banner). Portaling to body puts the
          sheet at the root stacking context so z-[999] > z-50 actually holds.
          Only renders while open (post-click, always client-side) so there's
          no SSR/hydration concern. */}
      {open && typeof document !== "undefined" && createPortal(
        <>
          <div
            className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm [animation:backdrop-fade-in_0.25s_ease-out]"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="first-time-title"
            className="fixed inset-x-0 bottom-0 z-[999] flex flex-col max-h-[85dvh] [animation:panel-slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="bg-[#FFFFFF] dark:bg-[#0B0907] rounded-t-[2rem] shadow-2xl flex flex-col flex-1 overflow-hidden">
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>
              <div className="flex items-center justify-between px-6 py-3">
                <h2 id="first-time-title" className="text-lg sm:text-xl font-bold tracking-tight">
                  {t.title}
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors cursor-pointer shrink-0"
                  aria-label={t.close}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 pb-5">
                <p className="text-[13px] text-muted-foreground mb-3">{t.subtitle}</p>

                <div className="space-y-2">
                  {t.consumer.map((opt) => (
                    <OptionCard key={opt.href} opt={opt} />
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    {t.trainerHeading}
                  </p>
                  <OptionCard opt={t.trainer} />
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
