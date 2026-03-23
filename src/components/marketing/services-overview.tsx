"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Dumbbell, Building2, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

const services = {
  nl: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Kies een personal trainer die past bij jouw doel. Eerste intake altijd gratis. Trainers bepalen hun eigen prijs — vanaf €49 per sessie.",
      href: "/nl/vind-jouw-personal-trainer",
      cta: "Bekijk trainers & tarieven",
      image: "/images/trainers/alex.jpg",
      imageAlt: "Personal Training bij SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Open Gym in een rustige privé studio. Boek een slot van 60 min, max 3 personen tegelijk. Lidmaatschap vanaf €49/4 weken.",
      href: "/nl/open-gym",
      cta: "Bekijk Open Gym & prijzen",
      image: "/images/studio/power-rack.jpeg",
      imageAlt: "Open Gym apparatuur bij SculptClub",
    },
    {
      icon: Building2,
      title: "Studio Huren",
      description:
        "Voor trainers. Huur de studio per sessie voor jouw klanten. Vanaf €12 per uur, of bespaar tot 23% met een kortingspakket. Geen contract.",
      href: "/nl/studio-huren",
      cta: "Bekijk studio & tarieven",
      image: "/images/studio/studio-overview.jpeg",
      imageAlt: "SculptClub studio overzicht",
    },
  ],
  en: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Choose a personal trainer who fits your goals. First intro always free. Trainers set their own rates — from €49 per session.",
      href: "/en/find-personal-trainer",
      cta: "View trainers & rates",
      image: "/images/trainers/alex.jpg",
      imageAlt: "Personal Training at SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Open Gym in a quiet private studio. Book 60-min sessions, max 3 people at a time. Membership from €49/4 weeks.",
      href: "/en/open-gym",
      cta: "View Open Gym & pricing",
      image: "/images/studio/power-rack.jpeg",
      imageAlt: "Open Gym equipment at SculptClub",
    },
    {
      icon: Building2,
      title: "Studio Rental",
      description:
        "For trainers. Rent the studio per session for your clients. From €12 per hour, or save up to 23% with a discount package. No contract.",
      href: "/en/studio-rental",
      cta: "View studio & rates",
      image: "/images/studio/studio-overview.jpeg",
      imageAlt: "SculptClub studio overview",
    },
  ],
};

export function ServicesOverview({ locale }: { locale: Locale }) {
  const items = services[locale];
  const t = locale === "nl"
    ? { overline: "Drie manieren om te trainen", title: "Jouw studio, jouw regels" }
    : { overline: "Three ways to train", title: "Your studio, your rules" };

  return (
    <Section bg="muted">
      <SectionHeader overline={t.overline} title={t.title} />
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <Card className="h-full group hover:shadow-brand-lg transition-all duration-300 border-border/50 overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3">
                  <service.icon className="w-5 h-5 text-brand" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors group-hover:gap-2"
                >
                  {service.cta}
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
