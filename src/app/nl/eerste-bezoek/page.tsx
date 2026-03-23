import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Dumbbell,
  Shirt,
  Droplets,
  Footprints,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eerste Bezoek — SculptClub Amsterdam Jordaan",
  description:
    "Alles wat je moet weten voor je eerste bezoek aan SculptClub. Boek je sessie, kom naar de studio en start met trainen.",
  alternates: {
    canonical: "/nl/eerste-bezoek",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Boek je sessie",
    description:
      "Plan je eerste sessie via ons online boekingssysteem of stuur ons een bericht via WhatsApp. Kies een tijdslot dat je uitkomt en je ontvangt direct een bevestiging per e-mail.",
    cta: {
      label: "Boek nu",
      href: acuityLinks.generic,
      external: true,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Kom naar de studio",
    description:
      "Onze studio bevindt zich aan de Egelantiersgracht 424 in Amsterdam Jordaan. Na je boeking ontvang je een deurcode per e-mail waarmee je jezelf binnenlaat.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Start met trainen",
    description:
      "Je trainer staat klaar, of je traint zelfstandig via Open Gym. Alle apparatuur is beschikbaar en de studio is volledig privé tijdens jouw sessie.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportkleding" },
  { icon: Droplets, label: "Handdoek & waterfles" },
  { icon: Footprints, label: "Indoor sportschoenen" },
];

export default function EersteBezoekPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Eerste bezoek"
          title="Je eerste keer bij SculptClub"
          description="In 3 simpele stappen ben je klaar om te trainen. Geen inschrijfformulieren, geen verplichtingen."
        />
      </Section>

      {/* Steps */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-brand" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4">
                      <ButtonLink
                        href={step.cta.href}
                        external={step.cta.external}
                        variant="outline"
                        className="rounded-xl"
                      >
                        {step.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What to Bring */}
      <Section>
        <SectionHeader
          overline="Voorbereiding"
          title="Wat neem je mee?"
          description="Je hoeft niet veel mee te nemen. Dit is alles wat je nodig hebt:"
        />
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {bringItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Kleedruimte is beschikbaar in de studio.
          </p>
        </FadeIn>
      </Section>

      {/* Location */}
      <Section bg="muted">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-3">Locatie</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Waar vind je ons?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-1">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Open {siteConfig.hours.toLowerCase()}
            </p>
            <a
              href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
            >
              Bekijk op Google Maps
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Boek je eerste sessie
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Klaar om te beginnen? Plan je eerste sessie of neem contact met
              ons op via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek je eerste sessie
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
