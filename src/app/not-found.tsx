"use client";

import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Dumbbell, DoorOpen, Building2 } from "lucide-react";
import { useState } from "react";

type Lang = "nl" | "en";

const content = {
  nl: {
    subtitle: "Oeps! Deze pagina bestaat niet.",
    description:
      "De pagina die je zoekt is verplaatst of bestaat niet meer. Geen zorgen — we helpen je graag verder.",
    homeButton: "Ga naar home",
    homeHref: "/",
    servicesTitle: "Of bekijk onze diensten",
    services: [
      {
        title: "Personal Trainers",
        description: "Vind jouw ideale personal trainer in de Jordaan.",
        href: "/nl/vind-jouw-personal-trainer",
        icon: Dumbbell,
      },
      {
        title: "Open Gym",
        description: "Train zelfstandig in onze privé studio.",
        href: "/nl/open-gym",
        icon: DoorOpen,
      },
      {
        title: "Studio Huren",
        description: "Huur onze volledig uitgeruste studio voor jouw sessies.",
        href: "/nl/studio-huren",
        icon: Building2,
      },
    ],
  },
  en: {
    subtitle: "Oops! This page doesn't exist.",
    description:
      "The page you're looking for has been moved or no longer exists. No worries — we'll help you find your way.",
    homeButton: "Go home",
    homeHref: "/en",
    servicesTitle: "Or explore our services",
    services: [
      {
        title: "Personal Trainers",
        description: "Find your ideal personal trainer in the Jordaan.",
        href: "/en/find-personal-trainer",
        icon: Dumbbell,
      },
      {
        title: "Open Gym",
        description: "Train independently in our private studio.",
        href: "/en/open-gym",
        icon: DoorOpen,
      },
      {
        title: "Studio Rental",
        description: "Rent our fully equipped studio for your sessions.",
        href: "/en/studio-rental",
        icon: Building2,
      },
    ],
  },
};

function detectLang(): Lang {
  if (typeof window === "undefined") return "nl";
  if (window.location.pathname.startsWith("/en")) return "en";
  if (typeof document !== "undefined" && document.referrer) {
    try {
      const ref = new URL(document.referrer);
      if (ref.pathname.startsWith("/en")) return "en";
    } catch {
      // ignore invalid referrer
    }
  }
  return "nl";
}

export default function NotFound() {
  const [lang] = useState<Lang>(detectLang);

  const t = content[lang];

  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <div className="text-center">
            <p className="text-[8rem] sm:text-[12rem] font-bold leading-none tracking-tighter text-brand/20">
              404
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold -mt-4 sm:-mt-8">
              {t.subtitle}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {t.description}
            </p>
            <div className="mt-8">
              <ButtonLink href={t.homeHref} size="lg">
                <Home className="w-4 h-4" />
                {t.homeButton}
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader
          overline="404"
          title={t.servicesTitle}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {t.services.map((service, i) => (
            <FadeIn key={service.href} delay={i * 0.1}>
              <a href={service.href} className="block h-full">
                <Card className="h-full cursor-pointer hover:shadow-brand-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <service.icon className="h-6 w-6 text-brand" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
