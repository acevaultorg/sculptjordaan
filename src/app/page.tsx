import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { TrainerPreviewGrid } from "@/components/marketing/trainer-preview-grid";
import { TrainerSignalBand } from "@/components/marketing/trainer-signal-band";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HomePricingExplorer } from "@/components/marketing/home-pricing-explorer";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { InstagramFeed } from "@/components/marketing/instagram-feed";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { WhyWeExist } from "@/components/marketing/why-we-exist";
import { CtaBand } from "@/components/marketing/cta-band";
import { StudioVideoBand } from "@/components/marketing/studio-video-band";
import { FirstTimeMenu } from "@/components/marketing/first-time-menu";
import { FadeIn } from "@/components/sections/section";
import { FaqJsonLd, DefinedTermJsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const homeFaqs = [
  { question: "Hoe werkt SculptClub?", answer: "Wij matchen je met freelance personal trainers voor privésessies of small group. Kies je eigen trainer, train 1-op-1 of in een kleine groep in onze privé studio in de Jordaan, en betaal direct aan je trainer, geen abonnement, geen tussenpersoon. De eerste intake is altijd gratis." },
  { question: "Wat kost personal training bij SculptClub?", answer: "Elke trainer bepaalt zijn eigen tarief, te zien op het trainersprofiel. De intake is altijd gratis. De prijs die je ziet betaal je direct aan je trainer, geen tussenpersoon." },
  { question: "Hoe werkt Open Gym?", answer: "Je traint zelfstandig met vrije gewichten in onze priv\u00e9 studio: barbell en squat rack, dumbbells 4-40 kg, verstelbare banken en kettlebells. Plan je sessies via ons boekingssysteem, ontvang een deurcode en train op jouw tijd. Vanaf \u20AC7,25 per sessie." },
  { question: "Moet ik een abonnement afsluiten?", answer: "Nee. Open Gym werkt met een 4-weken cyclus zonder contract, opzeggen kan op elk moment. Personal training boek je per sessie. Studio huur betaal je per uur of via kortingspakketten." },
  { question: "Kan ik de studio huren voor mijn eigen klanten?", answer: "Ja! Als ZZP-trainer of fysiotherapeut kun je onze studio huren vanaf \u20AC12 per 60 minuten. We bieden ook kortingspakketten tot 23% korting." },
  { question: "Hoe annuleer ik een sessie?", answer: "Voor Open Gym en studio-sessies kun je altijd gratis annuleren of verzetten via ons boekingssysteem (Acuity). Voor Personal Training neem je direct contact op met je trainer, ook altijd gratis." },
];

export const metadata: Metadata = {
  title: { absolute: "SculptClub — Personal Training Studio Amsterdam Jordaan" },
  description:
    "Huur jouw eigen studio in de Jordaan vanaf €12/uur, eigen klanten, eigen tarief, geen contract. Ook personal training met gratis intake.",
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "SculptClub — Personal Training Studio Amsterdam Jordaan",
    description:
      "Huur jouw eigen studio in de Jordaan vanaf €12/uur, eigen klanten, eigen tarief, geen contract. Ook personal training met gratis intake.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SculptClub — Personal Training Studio Amsterdam Jordaan",
    description:
      "Huur jouw eigen studio in de Jordaan vanaf €12/uur, eigen klanten, eigen tarief, geen contract. Ook personal training met gratis intake.",
  },
};

export default function HomePage() {
  return (
    <PageLayout>
      <FaqJsonLd faqs={homeFaqs} />
      {/* DefinedTerm schema — high-GEO leverage for definitional queries
          ("wat is open gym Amsterdam", "wat is een privé studio", etc.).
          AI engines + Google Knowledge Graph weight DefinedTerm markup
          heavily when extracting definitions. SculptClub becomes the
          authoritative entity-reference for these terms in the Amsterdam
          context. Added 2026-05-17 per /acepilot brain seo geo aeo. */}
      <DefinedTermJsonLd
        termSetName="SculptClub Personal Training — Begrippen"
        termSetUrl="/"
        terms={[
          {
            name: "Privé studio",
            description: "Een trainingsruimte die exclusief voor jou (en je trainer) beschikbaar is tijdens je sessie. Bij SculptClub in Amsterdam Jordaan betekent dit geen drukte, geen wachtrijen voor apparatuur, en volledige privacy — anders dan bij commerciële sportscholen waar je deelt met tientallen anderen.",
            url: "/nl/studio",
          },
          {
            name: "Personal Training",
            description: "1-op-1 training met een gecertificeerde personal trainer die je sessie ontwerpt rond jouw doelen, niveau en lichaam. Bij SculptClub in de Jordaan vanaf €299 per 4 weken inclusief onbeperkt Open Gym, eerste intake gratis, geen contract, geen lidmaatschap. Trainers werken zelfstandig (ZZP): ze huren de studio en houden 100% van hun tarief.",
            url: "/nl/vind-jouw-personal-trainer",
          },
          {
            name: "Open Gym",
            description: "Zelfstandig trainen in een rustige, volledig uitgeruste privé studio met maximaal 4 personen per slot. Bij SculptClub in Amsterdam Jordaan vanaf €29 per 4 weken (Instapplan, 4 sessies). Inclusief alle apparatuur, gratis koffie/thee, en deurcode-toegang via WhatsApp.",
            url: "/nl/open-gym",
          },
          {
            name: "Studio huren",
            description: "Privé trainingsruimte huren als freelance personal trainer of fysiotherapeut. Bij SculptClub vanaf €12/uur (halve studio) of €17/uur (hele studio). Eigen tarief en klanten, geen contract, altijd gratis annuleren. Inclusief alle apparatuur, wifi, muziek en schoonmaak.",
            url: "/nl/studio-huren",
          },
          {
            name: "Calisthenics",
            description: "Trainingsmethode die uitsluitend het eigen lichaamsgewicht gebruikt voor weerstand — push-ups, pull-ups, dips, planks, muscle-ups. Sommige SculptClub trainers (zoals Alex, Joey) specialiseren in calisthenics-progressies van beginner naar gevorderd niveau.",
            url: "/nl/vind-jouw-personal-trainer",
          },
          {
            name: "ZZP personal trainer",
            description: "Zelfstandige zonder personeel — een freelance personal trainer die zijn of haar eigen praktijk runt, eigen tarieven bepaalt, en cliënten direct factureert. Bij SculptClub huren ZZP-trainers de studio per uur of per pakket — ze houden 100% van hun tarief, SculptClub verdient alleen aan de huur.",
            url: "/nl/voor-trainers",
          },
          {
            name: "Gratis intake",
            description: "Een vrijblijvende kennismakingssessie met een personal trainer waar je doelen bespreekt, de aanpak leert kennen, en voelt of er een klik is — zonder verplichting en zonder kosten. Bij SculptClub is de eerste intake altijd 100% gratis, met geen creditcard vereist. De duur stem je samen met je trainer af.",
            url: "/nl/gratis-intake",
          },
        ]}
      />
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
      <HomePricingExplorer locale="nl" />
      <HowItWorks locale="nl" />
      <WhyWeExist locale="nl" />
      <StudioVideoBand locale="nl" />
      <CtaBand locale="nl" />
      <ReviewsPreview locale="nl" />
      <InstagramFeed locale="nl" />
      <GoogleMap locale="nl" />
      <FaqPreview locale="nl" />
      {/* Bottom "Eerste keer?" wayfinder (operator 2026-07-04): a visitor who
          scrolled all the way to the bottom gets one clear next action — the
          SAME first-timer menu the hero opens (4 paths), framed for someone who
          just finished reading. placement="bottom" so its taps track separately
          from the hero button. Sits after the FAQ = the last thing before the
          footer, exactly where a bottom-reacher lands. */}
      <section className="border-t border-border bg-secondary/40 py-16 sm:py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Eerste keer bij SculptClub?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Kies je startpunt. We helpen je op weg.
            </p>
            <div className="mt-7">
              <FirstTimeMenu locale="nl" placement="bottom" />
            </div>
          </div>
        </FadeIn>
      </section>
    </PageLayout>
  );
}
