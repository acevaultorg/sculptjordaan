import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ReviewsJsonLd , BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Star, ArrowRight, MessageCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — SculptClub Amsterdam Jordaan",
  description:
    "Read what our clients say about SculptClub. 5.0 stars on Google. Boutique personal training in Amsterdam Jordaan.",
  alternates: {
    canonical: "/en/reviews",
    languages: {
      nl: "/nl/reviews",
      en: "/en/reviews",
    },
  },
};

/* ─── Real Google Reviews (verified from Google Maps, March 2026) ─── */
const reviews = [
  {
    name: "Alina Gurzhapova",
    text: "I'm a trainer and I work with my clients in this wonderful fitness studio and I truly love it! Great location, well structured space, nice team work!",
    rating: 5,
    date: "Feb 2026",
  },
  {
    name: "Bryan van Luijken",
    text: "I give my small group Calisthenics classes here for 3 athletes. Great location! Small but nice. Has everything we need. Even free coffee and tea!",
    rating: 5,
    date: "Feb 2026",
    badge: "Local Guide",
  },
  {
    name: "Pien Buseman",
    text: "What a gift — a boutique gym with great trainers within walking distance. Small but very nice. All equipment is available, with a PT if you want, and you can also train on your own. A great addition to the neighborhood!",
    rating: 5,
    date: "Oct 2025",
  },
  {
    name: "Dara Thompson",
    text: "Great space to train my clients. Private, fully equipped, and always clean. Booking made easy with credits.",
    rating: 5,
    date: "Feb 2026",
  },
  {
    name: "Sanne Oosterhof",
    text: "I'm looking forward to SculptClub! It seems like a pleasant, small-scale place to train, without the crowds of a big gym. The location is ideal and easily accessible.",
    rating: 5,
    date: "Aug 2025",
  },
  {
    name: "Rick Schippers",
    text: "How cool that a new gym is coming to the Egelantiersgracht! A real asset for the neighborhood. I'm really looking forward to working out here — close to home.",
    rating: 5,
    date: "Aug 2025",
  },
  {
    name: "Aleksandra Nechaeva",
    text: "I live just around the corner, and am very excited to see a new training space opening up nearby. The view on the canal is gonna be unbeatable if you need extra motivation to come by and lift some weights!",
    rating: 5,
    date: "Aug 2025",
  },
  {
    name: "Kevin Berghuis",
    text: "Wow what a top location for this gym! I can't wait to start my first workout here. It's such an inspiring setting to train in!",
    rating: 5,
    date: "Aug 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const reviewsJsonLdData = reviews.map((r) => ({
  name: r.name,
  text: r.text,
  rating: r.rating,
  date: r.date.replace(/Feb 2026/i, "2026-02-01").replace(/Oct 2025/i, "2025-10-01").replace(/Aug 2025/i, "2025-08-01"),
}));

export default function ReviewsPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Reviews","url":"/en/reviews"}]} />
      <ReviewsJsonLd reviews={reviewsJsonLdData} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Google Reviews"
          title="What our clients say"
          description={`${siteConfig.rating.value} stars on Google — ${siteConfig.rating.count} reviews`}
        />
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">{siteConfig.rating.value}</span>
          </div>
          <div className="text-center">
            <a
              href={siteConfig.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
            >
              View on Google
              <ExternalLink className="ml-1 w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-2xl border border-border/50 bg-card p-6 shadow-brand-sm">
                <StarRating rating={review.rating} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GoogleIcon />
                    <p className="text-sm font-semibold">{review.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={siteConfig.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              View all reviews on Google
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experience it yourself
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Book a free trial and discover why our clients give us 5 stars.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
