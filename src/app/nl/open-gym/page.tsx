import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks } from "@/config/acuity";
import { Clock, Key, Dumbbell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Gym — Train Zelfstandig | SculptClub Amsterdam Jordaan",
  description:
    "Train zelfstandig in een priv\u00e9 studio in de Jordaan. Boek een tijdslot, ontvang je deurcode en train op jouw manier. Vanaf \u20AC29 per 4 weken.",
  alternates: {
    canonical: "/nl/open-gym",
    languages: {
      nl: "/nl/open-gym",
      en: "/en/open-gym",
    },
  },
};

const plans = [
  {
    name: "Instapplan",
    frequency: "1x / week",
    price: "\u20AC29",
    period: "/ 4 weken",
    perSession: "\u20AC7,25 / sessie",
    badge: null,
  },
  {
    name: "Populair",
    frequency: "2x / week",
    price: "\u20AC49",
    period: "/ 4 weken",
    perSession: "\u20AC6,13 / sessie",
    badge: "Meest gekozen",
  },
  {
    name: "Intensief",
    frequency: "3x / week",
    price: "\u20AC69",
    period: "/ 4 weken",
    perSession: "\u20AC5,75 / sessie",
    badge: null,
  },
  {
    name: "Onbeperkt",
    frequency: "Onbeperkt",
    price: "\u20AC89",
    period: "/ 4 weken",
    perSession: null,
    badge: null,
  },
];

const steps = [
  {
    icon: Clock,
    title: "Boek een sessie",
    description: "Kies een tijdslot dat bij je past via ons boekingssysteem.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Je ontvangt een unieke code om de studio binnen te komen.",
  },
  {
    icon: Dumbbell,
    title: "Train op jouw tijd",
    description:
      "Gebruik de volledige studio met professionele apparatuur, helemaal voor jezelf.",
  },
];

const faqs = [
  {
    q: "Wat is Open Gym precies?",
    a: "Open Gym geeft je toegang tot onze priv\u00e9 studio om zelfstandig te trainen. Je boekt een tijdslot, ontvangt een deurcode en hebt de volledige ruimte en apparatuur tot je beschikking.",
  },
  {
    q: "Welke apparatuur is beschikbaar?",
    a: "De studio is volledig uitgerust met een powerrack, verstelbare bank, dumbbells, kabelmachine, cardio apparatuur en meer. Alles wat je nodig hebt voor een complete training.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Elke Open Gym sessie duurt 60 minuten. Je kunt meerdere sessies achter elkaar boeken als je langer wilt trainen.",
  },
  {
    q: "Kan ik een vriend meenemen?",
    a: "Open Gym sessies zijn individueel. Wil je samen trainen? Bekijk dan onze studio verhuur opties voor small group training.",
  },
  {
    q: "Wat als ik mijn sessie moet annuleren?",
    a: "Je kunt tot 12 uur van tevoren kosteloos annuleren via het boekingssysteem. Bij te laat annuleren wordt de sessie in mindering gebracht op je tegoed.",
  },
];

export default function OpenGymPageNL() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Open Gym"
          title="Train Zelfstandig"
          description="Open Gym in een priv\u00e9 studio. Geen drukte, geen wachten. Boek een tijdslot en train op jouw manier met professionele apparatuur."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink href={acuityLinks.openGymBook} size="lg">
            Boek Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section bg="muted">
        <SectionHeader
          overline="Tarieven"
          title="Kies Jouw Plan"
          description="Alle plannen zijn per 4 weken. Geen contract, geen verplichtingen."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center ${plan.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge className="mx-auto mb-2">{plan.badge}</Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.frequency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}
                      {plan.period}
                    </span>
                  </p>
                  {plan.perSession && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.perSession}
                    </p>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 flex justify-center">
          <ButtonLink href={acuityLinks.openGymBook} size="lg">
            Boek Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 Stappen aan de Slag"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Open Gym FAQ" />

        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
