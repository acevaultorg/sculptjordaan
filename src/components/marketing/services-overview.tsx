"use client";

import Link from "next/link";
import { Users, Dumbbell, Building2, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { acuityLinks } from "@/config/acuity";
import type { Locale } from "@/config/site";

const services = {
  nl: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Kies jouw trainer. Gratis intake. Trainers bepalen hun eigen tarieven — vanaf €49 per sessie. 0% commissie model.",
      href: "/nl/vind-jouw-personal-trainer",
      cta: "Vind je Trainer",
      acuity: false,
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Train zelfstandig in een privé studio met professionele apparatuur. Vanaf €5,75 per sessie. Geen abonnement, per 4 weken.",
      href: "/nl/open-gym",
      cta: "Ontdek Open Gym",
      acuity: false,
    },
    {
      icon: Building2,
      title: "Studio Huren",
      description:
        "Huur onze volledig uitgeruste studio voor je eigen klanten. Vanaf €9,24 per sessie met kortingspakketten. Flexibel per uur.",
      href: "/nl/studio-huren",
      cta: "Bekijk Tarieven",
      acuity: false,
    },
  ],
  en: [
    {
      icon: Users,
      title: "Personal Training",
      description:
        "Choose your trainer. Free intro. Trainers set their own rates — from €49 per session. 0% commission model.",
      href: "/en/find-personal-trainer",
      cta: "Find your Trainer",
      acuity: false,
    },
    {
      icon: Dumbbell,
      title: "Open Gym",
      description:
        "Train independently in a private studio with professional equipment. From €5.75 per session. No contracts, per 4 weeks.",
      href: "/en/open-gym",
      cta: "Discover Open Gym",
      acuity: false,
    },
    {
      icon: Building2,
      title: "Studio Rental",
      description:
        "Rent our fully equipped studio for your own clients. From €9.24 per session with discount packages. Flexible per hour.",
      href: "/en/studio-rental",
      cta: "View Rates",
      acuity: false,
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
            <Card className="h-full group hover:shadow-brand-lg transition-all duration-300 border-border/50">
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
