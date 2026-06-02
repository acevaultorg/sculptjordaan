import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Phone } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";
import { Footer } from "@/components/layout/footer";

/**
 * /en/free-intro-ads — English locale of the lean Ads landing variant.
 * See /nl/gratis-intake-ads/page.tsx for design rationale.
 */

export const metadata: Metadata = {
  title: { absolute: "Personal Training Amsterdam · Free Intro — SculptClub" },
  description:
    "Private personal training studio in Amsterdam Jordaan. From €45/session, first intro free. WhatsApp reply within 30 min.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/free-intro",
    languages: {
      nl: "/nl/gratis-intake",
      en: "/en/free-intro",
    },
  },
};

export default function FreeIntroAdsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-center py-5 px-4 border-b border-border/30">
        <Link href="/en" aria-label="Back to homepage">
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
        <div className="inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-semibold text-foreground ml-1">5.0</span>
          <span>on Google</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
          Personal training Amsterdam
          <br />
          <span className="text-brand">first intro free</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-md mx-auto">
          Private studio in Jordaan · from €45 · WhatsApp reply <strong className="text-foreground font-semibold">within 30 min</strong>
        </p>

        <a
          href={whatsappLinks.intakeMatchEn}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="ads-landing-whatsapp-primary"
          className="plausible-event-name=ads_landing_whatsapp inline-flex items-center justify-center gap-2 w-full max-w-md mx-auto px-6 py-4 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-base shadow-brand-lg min-h-[56px] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp us — match your trainer in 30 sec
        </a>

        <Link
          href="/en/match-trainer"
          data-cta="ads-landing-match-quiz"
          className="plausible-event-name=ads_landing_quiz inline-flex items-center justify-center gap-1.5 mt-3 text-sm font-semibold text-foreground hover:text-brand underline-offset-4 hover:underline transition-colors"
        >
          Or book directly → match your trainer in 3 questions
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="tel:+31615147952"
          data-cta="ads-landing-phone"
          className="inline-flex items-center justify-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Or call direct · +31 6 15 14 79 52 · daily 9-21
        </a>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto w-full">
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">No contract</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">cancel anytime</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">Free</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">no obligation</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-secondary border border-border/30">
            <p className="text-xs font-semibold text-foreground">11 trainers</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">your match</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl overflow-hidden aspect-video relative shadow-lg max-w-md mx-auto w-full">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Training at SculptClub private studio in Amsterdam Jordaan"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 448px"
            loading="lazy"
          />
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Egelantiersgracht 424 · 1015 RR Amsterdam · Daily 06:30–22:00
        </p>
      </main>
      <Footer />
    </div>
  );
}
