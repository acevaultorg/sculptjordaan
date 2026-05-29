import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Phone } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";
import { Footer } from "@/components/layout/footer";

/**
 * /nl/gratis-intake-ads — lean landing page variant for paid Google Ads traffic.
 *
 * Shipped 2026-05-26 lead-cap optimization (task B). Used ONLY as the Ads
 * campaign destination URL. Industry benchmark: dedicated Ads landings
 * convert 1.5-2.5× generic landings. Strips friction: no header nav, no
 * trainer-grid, no FAQ-scroll, no marketing sections.
 *
 * Design discipline:
 *   - One full viewport on mobile = decision-point above fold
 *   - Single primary CTA (WhatsApp — fastest path for paid traffic)
 *   - Secondary CTA (match-quiz) for visitors who want to evaluate first
 *   - Logo only (no header nav — single-purpose page)
 *   - Sticky lead bar HIDDEN (single-CTA discipline)
 *   - Lead-rescue popup HIDDEN (already in single-conversion flow)
 *
 * SEO:
 *   - noindex (paid-only surface; don't dilute organic canonical)
 *   - canonical → /nl/gratis-intake (organic SEO benefits accrue there)
 *
 * Tracking:
 *   - Plausible "Ads Landing Lead" event fires on WhatsApp click via the
 *     global delegate in analytics.tsx (no per-page wiring needed)
 *   - Google Ads conversion fires via tel: + WhatsApp + Acuity click hooks
 */

export const metadata: Metadata = {
  title: { absolute: "Personal Training Jordaan · Gratis Intake — SculptClub" },
  description:
    "Privé personal training studio in Amsterdam Jordaan. Vanaf €45/sessie, eerste intake gratis. WhatsApp antwoord binnen 30 min.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/gratis-intake",
    languages: {
      nl: "/nl/gratis-intake",
      en: "/en/free-intro",
    },
  },
};

export default function GratisIntakeAdsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo-only header (no nav — single-purpose page) */}
      <header className="flex items-center justify-center py-5 px-4 border-b border-border/30">
        <Link href="/" aria-label="Naar homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto dark:invert"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
      </header>

      <main className="flex-1 mx-auto max-w-xl px-4 py-8 sm:py-12 text-center w-full flex flex-col">
        {/* Trust badge — Google reviews above the fold */}
        <div className="inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-semibold text-foreground ml-1">5.0</span>
          <span>op Google</span>
        </div>

        {/* Headline — specific + price-anchored. Paid visitors clicked on
            a personal-trainer query — they want clear confirmation they're
            in the right place. */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
          Personal training Jordaan
          <br />
          <span className="text-brand">eerste sessie gratis</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-md mx-auto">
          Privé studio · vanaf €45 · WhatsApp antwoord <strong className="text-foreground font-semibold">binnen 30 min</strong>
        </p>

        {/* PRIMARY CTA — WhatsApp. Highest-converting path for paid traffic:
            1 tap, async, operator can qualify in 2 messages. Pre-filled
            message routes to general intake-match line (operator matches
            to best trainer). */}
        <a
          href={whatsappLinks.intakeMatchNl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="ads-landing-whatsapp-primary"
          className="plausible-event-name=ads_landing_whatsapp inline-flex items-center justify-center gap-2 w-full max-w-md mx-auto px-6 py-4 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-base shadow-brand-lg min-h-[56px] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp ons — match je trainer in 30 sec
        </a>

        {/* Secondary CTA — for visitors who want to evaluate before chatting */}
        <Link
          href="/nl/match-trainer"
          data-cta="ads-landing-match-quiz"
          className="plausible-event-name=ads_landing_quiz inline-flex items-center justify-center gap-1.5 mt-3 text-sm font-semibold text-foreground hover:text-brand underline-offset-4 hover:underline transition-colors"
        >
          Of plan direct gratis intake → match je trainer in 3 vragen
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Tertiary CTA — phone (NL professional segment) */}
        <a
          href="tel:+31683178934"
          data-cta="ads-landing-phone"
          className="inline-flex items-center justify-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Of bel direct · +31 6 83 17 89 34 · dagelijks 09-21
        </a>

        {/* Trust strip — below fold but in viewport on most mobile */}
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto w-full">
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">Geen contract</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">altijd opzegbaar</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">45 minuten</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">vrijblijvend</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">11 trainers</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">jouw match</p>
          </div>
        </div>

        {/* Studio photo — anchors location + space quality below fold */}
        <div className="mt-6 rounded-2xl overflow-hidden aspect-video relative shadow-lg max-w-md mx-auto w-full">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Lachend met dumbbells bij SculptClub privé studio in Jordaan"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 448px"
            loading="lazy"
          />
        </div>

        {/* Minimal footer — address + legal links (kept tight for paid-page focus) */}
        <p className="mt-8 text-xs text-muted-foreground">
          Egelantiersgracht 424 · 1015 RR Amsterdam · Dagelijks 06:30–22:00
        </p>
      </main>
      <Footer />
    </div>
  );
}
