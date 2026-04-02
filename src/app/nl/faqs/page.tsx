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
  title: "Veelgestelde Vragen — SculptClub Amsterdam Jordaan",
  description:
    "Antwoorden op veelgestelde vragen over personal training, Open Gym, studio huur, prijzen en boekingen bij SculptClub Amsterdam.",
  alternates: {
    canonical: "/nl/faqs",
    languages: {
      nl: "/nl/faqs",
      en: "/en/faqs",
    },
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
        a: "SculptClub werkt zonder abonnementen. Open Gym koop je per 4-weken cyclus (vanaf \u20AC5,75/sessie). Personal training boek en betaal je per sessie, rechtstreeks aan je trainer. Studio verhuur is per uur of via kortingspakketten.",
      },
      {
        q: "Heb ik een abonnement nodig?",
        a: "Nee. We werken zonder contracten of verplichtingen. Open Gym draait op 4-weken cycli die je op elk moment kunt opzeggen. Personal training boek je per sessie.",
      },
      {
        q: "Hoe annuleer ik een sessie?",
        a: "Je kunt altijd gratis annuleren of verzetten via ons boekingssysteem.",
      },
      {
        q: "Wat moet ik meenemen?",
        a: "Sportkleding, een handdoek, een waterfles en indoor sportschoenen. Kleedruimte is beschikbaar in de studio.",
      },
      {
        q: "Hoe werkt het boekingssysteem?",
        a: "We gebruiken Acuity Scheduling. Je boekt online en ontvangt de avond ervoor je deurcode via WhatsApp. Geen receptie, geen wachttijden.",
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
        a: "Trainers bepalen hun eigen tarieven, vanaf €45 per sessie. Wij rekenen 0% commissie — de prijs die je van je trainer hoort is wat je betaalt.",
      },
      {
        q: "Hoe kies ik een trainer?",
        a: "Op onze trainerspagina vind je het profiel van elke trainer met hun specialisatie, ervaring en tarieven. Je kunt ook contact met ons opnemen via WhatsApp voor persoonlijk advies.",
      },
      {
        q: "Wat als de trainer niet bij me past?",
        a: "Geen probleem. De intake is gratis en vrijblijvend. Je zit nergens aan vast. Wil je een andere trainer proberen? Dat kan altijd.",
      },
    ],
  },
  {
    title: "Open Gym",
    items: [
      {
        q: "Hoe werkt Open Gym?",
        a: "Je boekt een tijdslot via ons boekingssysteem, ontvangt de avond ervoor je deurcode via WhatsApp, en traint zelfstandig in onze privé studio. Maximaal 3 personen tegelijk.",
      },
      {
        q: "Wat zijn de 4-weken cycli?",
        a: "Open Gym werkt in cycli van 4 weken. Je kiest het aantal sessies per week (2x, 3x of onbeperkt), betaalt vooraf, en kunt na elke cyclus opzeggen. Geen contract, geen verplichtingen.",
      },
      {
        q: "Welke apparatuur is beschikbaar?",
        a: "Onze studio is volledig uitgerust met professionele apparatuur: squat rack, verstelbare bank, dumbbells, kabelmachine, cardio equipment en accessoires. Alles wat je nodig hebt voor een volledige training.",
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
        a: "Vanaf \u20AC12 per 60 minuten. We bieden ook kortingspakketten: 10-uren pakket met 15% korting en een 20-uren pakket met 23% korting.",
      },
      {
        q: "Welke pakketten zijn er?",
        a: "Per uur: \u20AC12/60 min. 10-uren pakket: \u20AC10,20/60 min (15% korting). 20-uren pakket: \u20AC9,24/60 min (23% korting). Pakketten zijn 3 maanden geldig.",
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
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Nog vragen?
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Neem contact met ons op via WhatsApp. Meestal reageren we binnen 1
              uur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek Gratis Proefles
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-background/20 text-background hover:bg-background/10"
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
