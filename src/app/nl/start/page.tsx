import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { StartPathCard } from "@/components/marketing/start-path-card";
import { Star, MapPin, Clock, Shield } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: { absolute: "Welkom bij SculptClub \u2014 Priv\u00e9 Studio Amsterdam Jordaan" },
  description:
    "Priv\u00e9 personal training studio in de Jordaan. Personal training vanaf \u20ac45, Open Gym vanaf \u20ac6,13/sessie, studio huren vanaf \u20ac12/uur. Eerste sessie gratis.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/start",
    languages: {
      nl: "/nl/start",
      en: "/en/start",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/start",
    title: "Welkom bij SculptClub \u2014 Priv\u00e9 Studio Amsterdam Jordaan",
    description:
      "Priv\u00e9 personal training studio in de Jordaan. Personal training vanaf \u20ac45, Open Gym vanaf \u20ac6,13/sessie, studio huren vanaf \u20ac12/uur. Eerste sessie gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welkom bij SculptClub \u2014 Priv\u00e9 Studio Amsterdam Jordaan",
    description:
      "Priv\u00e9 personal training studio in de Jordaan. Personal training vanaf \u20ac45, Open Gym vanaf \u20ac6,13/sessie, studio huren vanaf \u20ac12/uur. Eerste sessie gratis.",
  },
};

// UTM-tagged Instagram bio paths \u2014 attribution survives through to Acuity bookings.
// utm_content differentiates which of the 3 audience paths the visitor picked.
const IG_UTM = "utm_source=instagram&utm_medium=bio&utm_campaign=start";
const withUtm = (url: string, content: string) => {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${IG_UTM}&utm_content=${content}`;
};

const paths = [
  {
    icon: "Users" as const,
    title: "Ik zoek een personal trainer",
    description: "Vind een trainer die bij jouw doelen past. De eerste intake is 100% gratis. Vanaf \u20ac45/sessie daarna.",
    cta: "Boek gratis intake",
    href: withUtm("/nl/gratis-intake", "pt"),
    external: false,
    highlight: "Eerste sessie gratis",
  },
  {
    icon: "Dumbbell" as const,
    title: "Ik wil zelfstandig trainen",
    description: "Boek 60-min slots in een priv\u00e9 studio. Max 4 personen. Vanaf \u20ac6,13/sessie, geen abonnement.",
    cta: "Probeer Open Gym gratis",
    href: withUtm(acuityLinks.openGymTrial, "open_gym"),
    external: true,
    highlight: "Gratis proefles",
  },
  {
    icon: "Building2" as const,
    title: "Ik ben trainer en zoek een studio",
    description: "Volledig uitgeruste priv\u00e9 studio voor jouw cli\u00ebnten. Eigen tarief en klanten. Vanaf \u20ac12/uur.",
    cta: "Boek gratis rondleiding",
    href: withUtm(acuityLinks.studioTrial, "studio_rental"),
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

          {/* Three audience paths — tracked via StartPathCard */}
          <div className="grid gap-4">
            {paths.map((path) => (
              <StartPathCard key={path.title} {...path} />
            ))}
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
              src="/images/studio/portrait-entrance-warm.jpg"
              alt="Warm portret bij de entree van SculptClub, Jordaan Amsterdam"
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
