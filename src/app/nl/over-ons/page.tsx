import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle, Users, Dumbbell, Building2, Lock, MapPin, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons — SculptClub Amsterdam Jordaan",
  description:
    "SculptClub is een boutique personal training studio aan de Egelantiersgracht in Amsterdam Jordaan. Privé training, Open Gym en studio verhuur. Opgericht in 2025.",
  alternates: {
    canonical: "/nl/over-ons",
    languages: {
      nl: "/nl/over-ons",
      en: "/en/about",
    },
  },
};

const pillars = [
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Onafhankelijke trainers met hun eigen specialisatie en tarieven. De intake is altijd gratis en wij rekenen 0% commissie.",
  },
  {
    icon: Dumbbell,
    title: "Open Gym",
    description:
      "Train zelfstandig in een privé studio met professionele apparatuur. Boek je sessie, ontvang een deurcode en train op jouw tijd.",
  },
  {
    icon: Building2,
    title: "Studio Huren",
    description:
      "Voor ZZP-trainers en fysiotherapeuten: huur onze volledig uitgeruste studio voor je eigen klanten. Flexibel per uur of via pakketten.",
  },
];

const values = [
  {
    icon: Lock,
    title: "Privé",
    description: "Maximaal 3 personen tegelijk. Geen drukte, geen wachten.",
  },
  {
    icon: MapPin,
    title: "Aan de gracht",
    description:
      "Gelegen aan de Egelantiersgracht in het hart van de Jordaan.",
  },
  {
    icon: CalendarCheck,
    title: "Flexibel",
    description:
      "Geen abonnement, geen contracten. Boek per sessie, annuleer tot 24 uur van tevoren.",
  },
];

export default function OverOnsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Over SculptClub"
          title="Waar gedisciplineerde ambitie verfijnde transformatie ontmoet"
          description="SculptClub is een boutique personal training studio in het hart van Amsterdam's Jordaan. Opgericht in 2025 met een simpele missie: de beste privé trainingsruimte van Amsterdam bieden."
        />
      </Section>

      {/* Story */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ons verhaal
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SculptClub is ontstaan uit frustratie met overvolle sportscholen
                en lange contracten. Wij geloven dat trainen persoonlijk hoort
                te zijn — zonder drukte, zonder verplichtingen, zonder
                compromissen.
              </p>
              <p>
                Onze studio aan de Egelantiersgracht biedt een intieme
                trainingsruimte waar maximaal 3 personen tegelijk welkom zijn.
                Met professionele apparatuur, flexibele boekingen en deurcode
                toegang kun je trainen op jouw voorwaarden.
              </p>
              <p>
                Of je nu traint met een personal trainer, zelfstandig komt
                trainen via Open Gym, of als ZZP-trainer onze studio huurt voor
                je eigen klanten — bij SculptClub draait alles om kwaliteit
                boven kwantiteit.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section>
        <SectionHeader
          overline="Wat wij bieden"
          title="Drie pijlers"
          description="Personal Training, Open Gym en Studio Verhuur — alles onder een dak."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section bg="muted">
        <SectionHeader
          overline="Onze waarden"
          title="Geen abonnement. Geen drukte. Geen contracten."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-3">Locatie</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Aan de Egelantiersgracht
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Open {siteConfig.hours.toLowerCase()}. Deurcode toegang na boeking.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Kom langs en ervaar het zelf
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Boek een gratis intake of neem contact met ons op via WhatsApp.
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
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
