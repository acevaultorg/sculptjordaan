import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Star, ArrowRight, Dumbbell, Users, Building2, MapPin, Clock, Shield } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: "Welkom bij SculptClub \u2014 Priv\u00e9 Studio Amsterdam Jordaan",
  description:
    "Priv\u00e9 personal training studio in de Jordaan. Personal training vanaf \u20ac45, Open Gym vanaf \u20ac5,75/sessie, studio huren vanaf \u20ac12/uur. Eerste sessie gratis.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/start",
    languages: {
      nl: "/nl/start",
      en: "/en/start",
    },
  },
};

const paths = [
  {
    icon: Users,
    title: "Ik zoek een personal trainer",
    description: "Vind een trainer die bij jouw doelen past. De eerste intake is 100% gratis. Vanaf \u20ac45/sessie daarna.",
    cta: "Boek gratis intake",
    href: "/nl/gratis-intake?utm_source=instagram&utm_medium=bio&utm_campaign=start",
    external: false,
    highlight: "Eerste sessie gratis",
  },
  {
    icon: Dumbbell,
    title: "Ik wil zelfstandig trainen",
    description: "Boek 60-min slots in een priv\u00e9 studio. Max 3 personen. Vanaf \u20ac5,75/sessie, geen abonnement.",
    cta: "Probeer Open Gym gratis",
    href: acuityLinks.openGymTrial,
    external: true,
    highlight: "Gratis proefles",
  },
  {
    icon: Building2,
    title: "Ik ben trainer en zoek een studio",
    description: "Volledig uitgeruste priv\u00e9 studio voor jouw cli\u00ebnten. 0% commissie. Vanaf \u20ac12/uur.",
    cta: "Boek gratis rondleiding",
    href: acuityLinks.studioTrial,
    external: true,
    highlight: "Gratis rondleiding",
  },
];

const trustItems = [
  { icon: Shield, text: "Geen contract, geen abonnement" },
  { icon: Clock, text: "Dagelijks open 06:30\u201322:00" },
  { icon: MapPin, text: "Jordaan, Amsterdam" },
];

export default function StartPageNL() {
  return (
    <PageLayout>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          {/* Social proof */}
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-semibold text-foreground ml-1">5.0</span>
              <span>op Google</span>
            </div>

            {/* Hero — no whileInView animation, visible immediately */}
            <div className="mb-10 sm:mb-14 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Jouw priv&eacute; studio in de Jordaan
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Wat brengt jou naar SculptClub?
              </p>
            </div>
          </div>

          {/* Three audience paths — no animation delay */}
          <div className="grid gap-4">
            {paths.map((path) => {
              const content = (
                <div className="group relative flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-secondary hover:border-brand/50 hover:bg-secondary/80 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <path.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 pr-20 sm:pr-24">
                      <h2 className="font-bold text-lg leading-tight">{path.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {path.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                      {path.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                    {path.highlight}
                  </span>
                </div>
              );

              return path.external ? (
                <a
                  key={path.title}
                  href={path.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <Link key={path.title} href={path.href}>
                  {content}
                </Link>
              );
            })}
          </div>

          {/* WhatsApp fallback */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Niet zeker?{" "}
            <a
              href={whatsappLinks.nl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-medium"
            >
              Stuur ons een WhatsApp &rarr;
            </a>
          </p>

          {/* Trust items */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary border border-border/50"
              >
                <item.icon className="w-5 h-5 text-brand" />
                <span className="text-xs text-center text-muted-foreground leading-tight">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Studio photo */}
          <div className="mt-8 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
            <Image
              src="/images/studio/studio-overview.jpeg"
              alt="SculptClub priv&eacute; studio in de Jordaan, Amsterdam"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          {/* Address */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Egelantiersgracht 424, Amsterdam Jordaan</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
