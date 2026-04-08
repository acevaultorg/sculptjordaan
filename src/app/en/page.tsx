import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { InstagramFeed } from "@/components/marketing/instagram-feed";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { WhyWeExist } from "@/components/marketing/why-we-exist";
import { ComparisonTeaser } from "@/components/marketing/comparison-teaser";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const homeFaqs = [
  { question: "How much does personal training cost at SculptClub?", answer: "Trainers set their own rates, starting from \u20AC45 per session. The intro is always free. We charge 0% commission \u2014 the price you see is what you pay." },
  { question: "How does Open Gym work?", answer: "You train independently in our private studio with professional equipment. Schedule your sessions via our booking system, receive a door code and train on your time. From \u20AC5.75 per session." },
  { question: "Do I need a subscription?", answer: "No. Open Gym works on a 4-week cycle with no contract \u2014 cancel anytime. Personal training is booked per session. Studio rental is per hour or via discount packages." },
  { question: "Can I rent the studio for my own clients?", answer: "Yes! As a freelance trainer or physiotherapist, you can rent our studio from \u20AC12 per 60 minutes. We also offer discount packages up to 23% off." },
  { question: "How do I cancel a session?", answer: "You can always cancel or reschedule for free via our booking system." },
];

export const metadata: Metadata = {
  title: "SculptClub — Boutique Personal Training Amsterdam Jordaan",
  description:
    "Private personal training studio in the Jordaan, Amsterdam. Free intro — trainers from €45/session. Open Gym & studio rental. No membership, no contract.",
  alternates: {
    canonical: "/en",
    languages: {
      nl: "/",
      en: "/en",
    },
  },
};

export default function HomePageEN() {
  return (
    <PageLayout>
      <FaqJsonLd faqs={homeFaqs} />
      <Hero locale="en" />
      <ServicesOverview locale="en" />
      <HowItWorks locale="en" />
      <WhyWeExist locale="en" />
      <ComparisonTeaser locale="en" />
      <CtaBand locale="en" />
      <ReviewsPreview locale="en" />
      <InstagramFeed locale="en" />
      <GoogleMap locale="en" />
      <FaqPreview locale="en" />
    </PageLayout>
  );
}
