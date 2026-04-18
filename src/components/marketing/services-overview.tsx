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
        "Train 1-op-1 met een trainer die bij jouw doel past. Gratis intake, geen contract. Vanaf €45 per sessie, 0% commissie.",
      href: "/nl/boek-trainer",
      cta: "Plan gratis intake",
      image: "/images/studio/pt-session-barbell.jpg",
      imageAlt: "Trainer begeleidt een personal training sessie bij SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Zelfstandig trainen in een privé studio. Boek een slot, krijg je deurcode, train. Max 3 personen, altijd ruimte. Vanaf €29/4 weken.",
      href: "/nl/boek-gym",
      cta: "Bekijk Open Gym",
      image: "/images/studio/training-squat-cinematic.jpg",
      imageAlt: "Zelfstandig trainen in de privé squat rack bij SculptClub",
    },
    {
      icon: Building2,
      title: "Studio Huren",
      description:
        "Groei je praktijk zonder vaste lasten. Huur de studio per sessie voor jouw klanten. Vanaf €12/60 min, kortingspakketten tot 23% korting.",
      href: "/nl/boek-studio",
      cta: "Bekijk studio & tarieven",
      image: "/images/studio/studio-overview.jpeg",
      imageAlt: "SculptClub studio interieur met sprint lane en dumbbell rack",
    },
  ],
  en: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Train 1-on-1 with a trainer who fits your goals. Free intro, no contract. From €45 per session, 0% commission.",
      href: "/en/book-trainer",
      cta: "Book free intro",
      image: "/images/studio/pt-session-barbell.jpg",
      imageAlt: "Trainer spotting a personal training session at SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Train independently in a private studio. Book a slot, get your door code, train. Max 3 people, always space. From €29/4 weeks.",
      href: "/en/book-gym",
      cta: "View Open Gym",
      image: "/images/studio/training-squat-cinematic.jpg",
      imageAlt: "Self-directed training in the private squat rack at SculptClub",
    },
    {
      icon: Building2,
      title: "Studio Rental",
      description:
        "Grow your practice without fixed costs. Rent the studio per session for your clients. From €12/60 min, discount packs up to 23% off.",
      href: "/en/book-studio",
      cta: "View studio & rates",
      image: "/images/studio/studio-overview.jpeg",
      imageAlt: "SculptClub studio interior with sprint lane and dumbbell rack",
    },
  ],
};

export function ServicesOverview({ locale }: { locale: Locale }) {
  const items = services[locale];
  const t = locale === "nl"
    ? { overline: "Kies zelf", title: "Jouw studio, jouw regels" }
    : { overline: "Your choice", title: "Your studio, your rules" };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} />
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <Link href={service.href} className="block h-full">
              <Card className="h-full group cursor-pointer hover:shadow-brand-lg transition-all duration-300 border-border/50 overflow-hidden pt-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover object-top rounded-t-xl"
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
                  <span className="inline-flex items-center text-sm font-semibold text-brand group-hover:text-brand-dark transition-colors group-hover:gap-2">
                    {service.cta}
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
