"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

const reviewsHref: Record<Locale, string> = {
  nl: "/nl/reviews",
  en: "/en/reviews",
};

/* ─── Real Google Reviews (verified from Google Maps) ─── */
const reviews = [
  {
    name: "Bryan van Luijken",
    text: {
      nl: "Ik geef hier mijn small group Calisthenics aan 3 atleten. Geweldige locatie! Klein maar fijn. Heeft alles wat wij nodig hebben. Zelfs gratis koffie en thee!",
      en: "I give my small group Calisthenics classes here for 3 athletes. Great location! Small but nice. Has everything we need. Even free coffee and tea!",
    },
    rating: 5,
  },
  {
    name: "Pien Buseman",
    text: {
      nl: "Wat een cadeau een 'boutique' sportschool met goede trainers op loopafstand. Het is klein maar zeer fijn. Alle apparaten zijn aanwezig, indien gewenst met een PT en je kan er ook zelf trainen. Aanwinst voor in de buurt!",
      en: "What a gift — a boutique gym with great trainers within walking distance. Small but very nice. All equipment is available, with a PT if you want, and you can also train on your own. A great addition to the neighborhood!",
    },
    rating: 5,
  },
  {
    name: "Dara Thompson",
    text: {
      nl: "Geweldige ruimte om mijn klanten te trainen. Privé, volledig uitgerust en altijd schoon. Boeken makkelijk gemaakt met credits.",
      en: "Great space to train my clients. Private, fully equipped, and always clean. Booking made easy with credits.",
    },
    rating: 5,
  },
];

export function ReviewsPreview({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          overline: "Google Reviews",
          title: "Wat onze klanten zeggen",
          cta: "Bekijk alle reviews op Google",
          ctaHref: siteConfig.google,
          google: `${siteConfig.rating.value} sterren op Google (${siteConfig.rating.count} reviews)`,
        }
      : {
          overline: "Google Reviews",
          title: "What our clients say",
          cta: "View all reviews on Google",
          ctaHref: siteConfig.google,
          google: `${siteConfig.rating.value} stars on Google (${siteConfig.rating.count} reviews)`,
        };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} description={t.google} />
      <div className="grid sm:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <FadeIn key={review.name} delay={i * 0.1}>
            <Link href={reviewsHref[locale]} className="block h-full">
              <div className="h-full cursor-pointer rounded-2xl border border-border/50 bg-card p-6 shadow-brand-sm hover:shadow-brand-lg transition-shadow duration-300">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text[locale]}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {/* Google "G" icon */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <p className="text-sm font-semibold">{review.name}</p>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={t.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          {t.cta}
          <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}
