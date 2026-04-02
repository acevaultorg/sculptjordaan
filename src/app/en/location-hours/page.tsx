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
  title: "Location & Hours — SculptClub Amsterdam Jordaan",
  description:
    "SculptClub is located on the Egelantiersgracht in the Jordaan, Amsterdam. Open daily 06:30 to 22:00. Easy to reach by tram, metro, bike or on foot.",
  alternates: {
    canonical: "/en/location-hours",
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
      "Tram 13, 17 — Elandsgracht stop (3 min walk). Metro 52 — Vijzelgracht station (10 min walk).",
  },
  {
    icon: Bike,
    title: "Bike",
    description:
      "Bike racks right outside on the Egelantiersgracht. Free bike parking nearby.",
  },
  {
    icon: Footprints,
    title: "Walking",
    description:
      "10 minutes walk from Amsterdam Central. 5 minutes from the Anne Frank House.",
  },
  {
    icon: Navigation,
    title: "Car",
    description:
      "Elandsgracht parking garage is a 5-minute walk. Street parking in the area is limited.",
  },
];

export default function LocationPageEN() {
  const mapsUrl = `https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`;

  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Location & Hours","url":"/en/location-hours"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Location"
          title="Find Us in the Jordaan"
          description="Private personal training studio on the Egelantiersgracht, in the heart of Amsterdam's Jordaan district."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
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
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-muted-foreground">
                    Daily: 06:30 - 22:00
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    By appointment. Book your session online or via WhatsApp.
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
                Get Directions
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="aspect-[4/3] rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSculptClub!5e0!3m2!1sen!2snl!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SculptClub on Google Maps"
                className="rounded-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader
          overline="Getting Here"
          title="How to Find Us"
          description="Easy to reach from anywhere in Amsterdam."
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
              The Jordaan — Amsterdam&apos;s Most Beloved Neighbourhood
            </h2>
            <p className="text-muted-foreground mb-4">
              Our studio is located on the Egelantiersgracht, one of
              Amsterdam&apos;s most beautiful canals. The Jordaan is known for
              its charming canal houses, cosy terraces and creative energy.
              Train in a neighbourhood that feels like home.
            </p>
            <p className="text-muted-foreground mb-8">
              After your workout, enjoy a coffee at one of the many nearby
              cafes, or stroll along the canals. The perfect blend of fitness
              and lifestyle.
            </p>
            <ButtonLink
              href={siteConfig.whatsapp}
              external
              variant="outline"
              size="lg"
              className="rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us with questions
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
