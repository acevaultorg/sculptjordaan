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
    "Privé personal training studio in de Jordaan, Amsterdam. Personal training, Open Gym en studio verhuur. Geen abonnement, geen drukte, geen contracten.",
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
      en: "/en",
    },
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      <Hero locale="nl" />
      <ServicesOverview locale="nl" />
      <HowItWorks locale="nl" />
      <ReviewsPreview locale="nl" />
      <GoogleMap locale="nl" />
      <FaqPreview locale="nl" />
      <CtaBand locale="nl" />
    </PageLayout>
  );
}
