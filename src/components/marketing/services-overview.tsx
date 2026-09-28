"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Building2, Dumbbell, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

const services = {
  nl: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Train 1-op-1 in een privé studio met een trainer die bij jouw doel past. Gratis intake, geen contract.",
      href: "/nl/vind-jouw-personal-trainer",
      cta: "Vind je trainer",
      image: "/images/studio/pt-session-barbell.jpg",
      imageAlt: "Trainer begeleidt een personal training sessie bij SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Ook zonder trainer. Train zelf met vrije gewichten: squat rack, dumbbells tot 40 kg, kettlebells. Max 4 personen, geen contract, eerste keer gratis. Vanaf €7,25 per sessie.",
      href: "/nl/open-gym",
      cta: "Bekijk Open Gym",
      image: "/images/studio/training-dumbbells-focus.jpg",
      imageAlt: "Zelfstandig trainen met dumbbells bij SculptClub Open Gym in de Jordaan",
    },
    {
      icon: Building2,
      title: "Studio Huren",
      description:
        "Privé trainingsruimte voor freelance personal trainers en fysiotherapeuten. Huur per uur, behoud je klanten, volledige vrijheid. Vanaf €12/60 min.",
      href: "/nl/studio-huren",
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
        "Train 1-on-1 in a private studio with a trainer who fits your goals. Free intro, no contract.",
      href: "/en/find-personal-trainer",
      cta: "Find your trainer",
      image: "/images/studio/pt-session-barbell.jpg",
      imageAlt: "Trainer spotting a personal training session at SculptClub",
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Train on your own in a calm private studio with pro equipment, max 4 people. 4-week membership, no contract, first session free. From €7.25 per session.",
      href: "/en/open-gym",
      cta: "View Open Gym",
      image: "/images/studio/training-dumbbells-focus.jpg",
      imageAlt: "Training solo with dumbbells at SculptClub Open Gym in the Jordaan",
    },
    {
      icon: Building2,
      title: "Studio Rental",
      description:
        "Private training space for freelance personal trainers and physiotherapists. Rent per hour, keep your clients, full freedom. From €12/60 min.",
      href: "/en/studio-rental",
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <Link href={service.href} className="block h-full">
              <Card className="h-full group cursor-pointer hover:shadow-brand-lg transition-all duration-300 border-border/50 overflow-hidden pt-0">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover object-center rounded-t-xl"
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
