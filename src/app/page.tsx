import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { TrainerPreviewGrid } from "@/components/marketing/trainer-preview-grid";
import { TrainerSignalBand } from "@/components/marketing/trainer-signal-band";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { InstagramFeed } from "@/components/marketing/instagram-feed";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { WhyWeExist } from "@/components/marketing/why-we-exist";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const homeFaqs = [
  { question: "Wat kost personal training bij SculptClub?", answer: "Trainers bepalen hun eigen tarieven, vanaf \u20AC45 per sessie. De intake is altijd gratis. Wij rekenen 0% commissie \u2014 de prijs die je ziet is wat je betaalt." },
  { question: "Hoe werkt Open Gym?", answer: "Je traint zelfstandig in onze priv\u00e9 studio met professionele apparatuur. Plan je sessies via ons boekingssysteem, ontvang een deurcode en train op jouw tijd. Vanaf \u20AC5,75 per sessie." },
  { question: "Moet ik een abonnement afsluiten?", answer: "Nee. Open Gym werkt met een 4-weken cyclus zonder contract \u2014 opzeggen kan op elk moment. Personal training boek je per sessie. Studio huur betaal je per uur of via kortingspakketten." },
  { question: "Kan ik de studio huren voor mijn eigen klanten?", answer: "Ja! Als ZZP-trainer of fysiotherapeut kun je onze studio huren vanaf \u20AC12 per 60 minuten. We bieden ook kortingspakketten tot 23% korting." },
  { question: "Hoe annuleer ik een sessie?", answer: "Voor Open Gym en studio-sessies kun je altijd gratis annuleren of verzetten via ons boekingssysteem (Acuity). Voor Personal Training neem je direct contact op met je trainer — ook altijd gratis." },
];

export const metadata: Metadata = {
  title: { absolute: "SculptClub — Personal Training & Privé Studio Amsterdam Jordaan" },
  description:
    "Boutique privé studio in de Jordaan. Personal training vanaf €45 (gratis intake) of huur de studio vanaf €12/uur — 0% commissie, altijd gratis annuleren.",
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
      {/*
        TrainerPreviewGrid added 2026-05-16 per operator directive: "landing
        page should already show all trainers, after scroll". Placed directly
        after Hero so the first scroll-stop is trainer faces + names + free
        intake CTA — the action operator wants every new visitor to take.

        TrainerSignalBand (ZZP studio rental) moved BELOW trainer preview so
        visitor-facing trainer profiles get scroll priority over operator-
        facing studio-rental call (was directly after Hero before).
      */}
      <TrainerPreviewGrid locale="nl" />
      <TrainerSignalBand locale="nl" />
      <ServicesOverview locale="nl" />
      <HowItWorks locale="nl" />
      <WhyWeExist locale="nl" />
      <CtaBand locale="nl" />
      <ReviewsPreview locale="nl" />
      <InstagramFeed locale="nl" />
      <GoogleMap locale="nl" />
      <FaqPreview locale="nl" />
    </PageLayout>
  );
}
