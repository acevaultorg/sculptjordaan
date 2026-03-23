import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { CtaBand } from "@/components/marketing/cta-band";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SculptClub — Boutique Personal Training Amsterdam Jordaan",
  description:
    "Private personal training studio in the Jordaan, Amsterdam. Personal training, Open Gym and studio rental. No membership, no crowds, no contracts.",
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
      <Hero locale="en" />
      <ServicesOverview locale="en" />
      <HowItWorks locale="en" />
      <ReviewsPreview locale="en" />
      <GoogleMap locale="en" />
      <FaqPreview locale="en" />
      <CtaBand locale="en" />
    </PageLayout>
  );
}
