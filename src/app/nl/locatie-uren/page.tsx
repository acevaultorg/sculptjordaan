import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  Clock,
  Train,
  Bike,
  Footprints,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Locatie & Openingstijden — SculptClub Amsterdam Jordaan",
  description:
    "SculptClub ligt aan de Egelantiersgracht in de Jordaan, Amsterdam. Dagelijks geopend van 06:30 tot 22:00. Makkelijk bereikbaar met tram, metro, fiets of te voet.",
  alternates: {
    canonical: "/nl/locatie-uren",
    languages: {
      nl: "/nl/locatie-uren",
      en: "/en/location-hours",
    },
  },
};

const directions = [
  {
    icon: Train,
    title: "Tram & Metro",
    description:
      "Tram 13, 17 — halte Elandsgracht (3 min lopen). Metro 52 — station Vijzelgracht (10 min lopen).",
  },
  {
    icon: Bike,
    title: "Fiets",
    description:
      "Fietsenrekken direct voor de deur aan de Egelantiersgracht. Gratis fietsparkeren in de buurt.",
  },
  {
    icon: Footprints,
    title: "Lopen",
    description:
      "10 minuten lopen vanaf Amsterdam Centraal. 5 minuten vanaf de Anne Frank Huis.",
  },
  {
    icon: Navigation,
    title: "Auto",
    description:
      "Parkeergarage Elandsgracht op 5 minuten loopafstand. Straatparkeren in de buurt beperkt.",
  },
];

export default function LocationPageNL() {
  const mapsUrl = `https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`;

  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Locatie & Uren","url":"/nl/locatie-uren"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Locatie"
          title="Vind ons in de Jordaan"
          description="Privé personal training studio aan de Egelantiersgracht, in het hart van de Amsterdamse Jordaan."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Adres</p>
                  <p className="text-muted-foreground">
                    {siteConfig.address.street}
                  </p>
                  <p className="text-muted-foreground">
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Openingstijden</p>
                  <p className="text-muted-foreground">
                    Dagelijks: 06:30 - 22:00
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Op afspraak. Boek je sessie online of via WhatsApp.
                  </p>
                </div>
              </div>

              <ButtonLink
                href={mapsUrl}
                external
                size="lg"
                className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                <Navigation className="w-4 h-4" />
                Routebeschrijving
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="aspect-[4/3] rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSculptClub!5e0!3m2!1snl!2snl!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SculptClub op Google Maps"
                className="rounded-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader
          overline="Bereikbaarheid"
          title="Hoe kom je bij ons?"
          description="Makkelijk bereikbaar vanuit heel Amsterdam."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {directions.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card ring-1 ring-foreground/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              De Jordaan — Amsterdam&apos;s meest geliefde buurt
            </h2>
            <p className="text-muted-foreground mb-4">
              Onze studio ligt aan de Egelantiersgracht, een van de mooiste
              grachten van Amsterdam. De Jordaan staat bekend om zijn
              karakteristieke grachtenpanden, gezellige terrassen en creatieve
              energie. Train in een buurt waar je je thuis voelt.
            </p>
            <p className="text-muted-foreground mb-8">
              Na je workout kun je genieten van een koffie bij een van de vele
              cafes in de buurt, of wandelen langs de grachten. De perfecte
              combinatie van fitness en lifestyle.
            </p>
            <ButtonLink
              href={siteConfig.whatsapp}
              external
              variant="outline"
              size="lg"
              className="rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ons voor vragen
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
