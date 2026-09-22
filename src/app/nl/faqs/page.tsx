import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { FaqJsonLd , BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Veelgestelde Vragen — SculptClub Amsterdam Jordaan" },
  description:
    "Antwoorden op veelgestelde vragen over personal training, Open Gym, studio huur, prijzen en boekingen bij SculptClub Amsterdam.",
  alternates: {
    canonical: "/nl/faqs",
    languages: {
      nl: "/nl/faqs",
      en: "/en/faqs",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/faqs",
    title: "Veelgestelde Vragen — SculptClub Amsterdam Jordaan",
    description:
      "Antwoorden op veelgestelde vragen over personal training, Open Gym, studio huur, prijzen en boekingen bij SculptClub Amsterdam.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veelgestelde Vragen — SculptClub Amsterdam Jordaan",
    description:
      "Antwoorden op veelgestelde vragen over personal training, Open Gym, studio huur, prijzen en boekingen bij SculptClub Amsterdam.",
  },
};

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "Algemeen",
    items: [
      {
        q: "Hoe werkt het prijsmodel van SculptClub?",
        a: "SculptClub werkt zonder abonnementen. Open Gym koop je per 4-weken cyclus (vanaf \u20AC6,13/sessie). Personal training boek en betaal je per sessie, rechtstreeks aan je trainer. Studio verhuur is per uur of via kortingspakketten.",
      },
      {
        q: "Heb ik een abonnement nodig?",
        a: "Nee. We werken zonder contracten of verplichtingen. Open Gym draait op 4-weken cycli die je op elk moment kunt opzeggen. Personal training boek je per sessie.",
      },
      {
        q: "Hoe annuleer ik een sessie?",
        a: "Voor Open Gym en studio-sessies kun je altijd gratis annuleren of verzetten via ons boekingssysteem (Acuity). Voor Personal Training neem je direct contact op met je trainer — ook altijd gratis. Annuleer je? Je credits komen direct terug op je account; kaartbetalingen voor losse sessies worden binnen enkele dagen automatisch terugbetaald.",
      },
      {
        q: "Wat moet ik meenemen?",
        a: "Sportkleding, een handdoek, een waterfles en indoor sportschoenen. Kleedruimte is beschikbaar in de studio.",
      },
      {
        q: "Hoe werkt het boekingssysteem?",
        a: "Voor Open Gym en studio gebruiken we Acuity Scheduling — je boekt online en ontvangt de avond ervoor je deurcode via WhatsApp. Voor Personal Training neem je direct contact op met je trainer (WhatsApp of contactformulier); de trainer plant samen met jou en regelt studio-toegang. Geen receptie, geen wachttijden.",
      },
    ],
  },
  {
    title: "Personal Training",
    items: [
      {
        q: "Is de intake gratis?",
        a: "Ja, de eerste kennismaking met een trainer is altijd gratis. Tijdens de intake bespreek je je doelen, ervaring en wensen, en kijk je of er een klik is.",
      },
      {
        q: "Wat kosten de trainers?",
        a: "Trainers bepalen hun eigen tarieven. Een SCULPT TRANSFORMATION start vanaf €299 per 4 weken, inclusief onbeperkt Open Gym. De prijs die je van je trainer hoort betaal je direct — zonder tussenpersoon.",
      },
      {
        q: "Hoe kies ik een trainer?",
        a: "Op onze trainerspagina vind je het profiel van elke trainer met hun specialisatie, ervaring en tarieven. Je kunt ook contact met ons opnemen via WhatsApp voor persoonlijk advies.",
      },
      {
        q: "Wat als de trainer niet bij me past?",
        a: "Geen probleem. De intake is gratis en vrijblijvend. Je zit nergens aan vast. Wil je een andere trainer proberen? Dat kan altijd.",
      },
      {
        // T (2026-06-02) first-timer gap — beginner nervousness, the #1 reason
        // people hesitate to start PT (validated across competitor FAQs).
        q: "Ik heb nog nooit personal training gedaan — is dit iets voor mij?",
        a: "Zeker. Veel klanten beginnen zonder ervaring. Je trainer start bij jouw niveau, legt elke oefening rustig uit en bouwt op in jouw tempo — in een privé studio, met volledige focus. Juist als je nieuw bent, is 1-op-1 begeleiding de veiligste en snelste manier om goed te beginnen.",
      },
      {
        // T — expat / English (every Jordaan rival chases this; we have 4+
        // bilingual trainers but never answered it at FAQ level).
        q: "Spreken de trainers Engels?",
        a: "Ja. Al onze trainers coachen vloeiend in het Engels — geen Nederlands nodig. Op de trainerspagina zie je per trainer welke talen ze spreken.",
      },
      {
        // T — injury-safe. Grounded: Alex (herstel), Ibrahim (revalidatie),
        // Andrea (techniek) cover this. Honest about no in-house physio
        // (consistent with the /nl/personal-trainer-jordaan FAQ).
        q: "Kan ik trainen met een blessure of na revalidatie?",
        a: "Ja, met de juiste trainer. Verschillende trainers hebben ervaring met herstel en revalidatie en bouwen veilig op — techniek eerst, rustig tempo. Bespreek je situatie tijdens de gratis intake; bij medische klachten werken we waar nodig samen met je fysiotherapeut. Wij hebben zelf geen fysiotherapeut in dienst.",
      },
    ],
  },
  {
    title: "Open Gym",
    items: [
      {
        q: "Hoe werkt Open Gym?",
        a: "Je boekt een tijdslot via ons boekingssysteem, ontvangt de avond ervoor je deurcode via WhatsApp, en traint zelfstandig in onze privé studio. Maximaal 4 personen tegelijk.",
      },
      {
        q: "Wat zijn de 4-weken cycli?",
        a: "Open Gym werkt in cycli van 4 weken. Je kiest het aantal sessies per week (2x, 3x of onbeperkt), betaalt vooraf, en kunt na elke cyclus opzeggen. Geen contract, geen verplichtingen.",
      },
      {
        q: "Welke apparatuur is beschikbaar?",
        a: "Onze studio is volledig uitgerust met professionele apparatuur van Rogue, Eleiko en Concept2: squat rack, verstelbare bank, dumbbells, kabelmachine, cardio en accessoires. Alles wat je nodig hebt voor een volledige training.",
      },
      {
        q: "Hoe werkt de deurcode?",
        a: "De avond voor je sessie ontvang je via WhatsApp een unieke deurcode die geldig is voor jouw tijdslot. Hiermee open je de voordeur en kun je direct beginnen met trainen.",
      },
    ],
  },
  {
    title: "Studio Huren",
    items: [
      {
        q: "Wat kost het om de studio te huren?",
        a: "Vanaf \u20AC12 per 60 minuten (halve studio) of \u20AC17 per 60 minuten (hele studio). We bieden ook strippenkaarten met 10-23% korting.",
      },
      {
        q: "Welke pakketten zijn er?",
        // Prices corrected 2026-09-22 to match /nl/prijzen, which is the
        // canonical surface — it is the one with the buy buttons. This answer
        // had Routine \u20AC199 / Pro \u20AC349 / Volume \u20AC549 while the
        // pricing page charges \u20AC179 / \u20AC299 / \u20AC499, so three of
        // the four tiers were quoted ABOVE the real price. The discount
        // percentages were already right and are unchanged (89/99, 179/210,
        // 299/375, 499/650 = 10/15/20/23%), which is what dates this as a
        // stale copy of an older price table rather than a different product.
        // No number here is invented: all four come from src/app/nl/prijzen.
        a: "Starter \u20AC89 (10% korting), Routine \u20AC179 (15% korting), Pro \u20AC299 (20% korting) en Volume \u20AC499 (23% korting). Pakketten zijn 1 jaar geldig en te gebruiken voor halve of hele studio.",
      },
      {
        q: "Wat is inbegrepen bij studio huur?",
        a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. Je hoeft alleen je eigen klanten mee te nemen. De studio is volledig privé tijdens je huurtijd.",
      },
      {
        q: "Heb ik een verzekering nodig?",
        a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
      },
    ],
  },
];

/** Compute the global FAQ index offset for each category */
const categoryOffsets = faqCategories.reduce<number[]>((acc, cat, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + faqCategories[i - 1].items.length);
  return acc;
}, []);

const allFaqs = faqCategories.flatMap((cat) =>
  cat.items.map((item) => ({ question: item.q, answer: item.a }))
);

export default function FaqsPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Veelgestelde Vragen","url":"/nl/faqs"}]} />
      <FaqJsonLd faqs={allFaqs} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Veelgestelde vragen"
          title="Alles wat je wilt weten"
          description="Vind hier antwoord op de meest gestelde vragen. Staat je vraag er niet bij? Neem contact met ons op via WhatsApp."
        />
      </Section>

      {faqCategories.map((category, catIdx) => (
        <Section key={category.title} bg={catIdx % 2 === 0 ? "muted" : "default"}>
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              {category.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              <Accordion className="space-y-2">
                {category.items.map((faq, faqIdx) => {
                  const idx = categoryOffsets[catIdx] + faqIdx;
                  return (
                    <AccordionItem
                      key={idx}
                      value={idx}
                      className="border border-border/50 rounded-xl px-4 data-[open]:bg-secondary/30"
                    >
                      <AccordionTrigger className="text-left text-base font-medium py-4 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </FadeIn>
        </Section>
      ))}

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Nog vragen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Neem contact met ons op via WhatsApp. Meestal reageren we binnen 1
              uur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={"/nl/vind-jouw-personal-trainer"}
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek Gratis Intake
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
