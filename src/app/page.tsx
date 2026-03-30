import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { InstagramFeed } from "@/components/marketing/instagram-feed";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const homeFaqs = [
  { question: "Wat kost personal training bij SculptClub?", answer: "Trainers bepalen hun eigen tarieven, vanaf \u20AC45 per sessie. De intake is altijd gratis. Wij rekenen 0% commissie \u2014 de prijs die je ziet is wat je betaalt." },
  { question: "Hoe werkt Open Gym?", answer: "Je traint zelfstandig in onze priv\u00e9 studio met professionele apparatuur. Plan je sessies via ons boekingssysteem, ontvang een deurcode en train op jouw tijd. Vanaf \u20AC5,75 per sessie." },
  { question: "Moet ik een abonnement afsluiten?", answer: "Nee. Open Gym werkt met een 4-weken cyclus zonder contract \u2014 opzeggen kan op elk moment. Personal training boek je per sessie. Studio huur betaal je per uur of via kortingspakketten." },
  { question: "Kan ik de studio huren voor mijn eigen klanten?", answer: "Ja! Als ZZP-trainer of fysiotherapeut kun je onze studio huren vanaf \u20AC12 per 60 minuten. We bieden ook kortingspakketten tot 23% korting." },
  { question: "Hoe annuleer ik een sessie?", answer: "Je kunt altijd gratis annuleren of verzetten via ons boekingssysteem." },
];

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
      <FaqJsonLd faqs={homeFaqs} />
      <Hero locale="nl" />
      <ServicesOverview locale="nl" />
      <HowItWorks locale="nl" />
      <CtaBand locale="nl" />
      <ReviewsPreview locale="nl" />
      <InstagramFeed locale="nl" />
      <GoogleMap locale="nl" />
      <FaqPreview locale="nl" />
    </PageLayout>
  );
}
