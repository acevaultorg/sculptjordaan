import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { StartPathCard } from "@/components/marketing/start-path-card";
import { Star, MapPin, Clock, Shield } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: { absolute: "Welcome to SculptClub — Private Studio Amsterdam Jordaan" },
  description:
    "Private studio in the Jordaan. PT from €329 per 4 weeks, Open Gym from €6.13 a session, studio rental from €12/hour. First session free.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/start",
    languages: {
      nl: "/nl/start",
      en: "/en/start",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/start",
    title: "Welcome to SculptClub — Private Studio Amsterdam Jordaan",
    description:
      "Private studio in the Jordaan. PT from €329 per 4 weeks, Open Gym from €6.13 a session, studio rental from €12/hour. First session free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to SculptClub — Private Studio Amsterdam Jordaan",
    description:
      "Private studio in the Jordaan. PT from €329 per 4 weeks, Open Gym from €6.13 a session, studio rental from €12/hour. First session free.",
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
    title: "I want a personal trainer",
    description: "Get matched with a trainer who fits your goals. First intro is 100% free. After that a programme from \u20ac329 per 4 weeks.",
    cta: "Book free intro",
    href: withUtm("/en/free-intro", "pt"),
    external: false,
    highlight: "Free first session",
  },
  {
    icon: "Dumbbell" as const,
    title: "I want to train solo",
    description: "Book 60-min slots in a private studio. Max 4 people. From \u20ac6.13/session, no membership.",
    cta: "Try Open Gym free",
    href: withUtm(acuityLinks.openGymTrial, "open_gym"),
    external: true,
    highlight: "Free tryout",
  },
  {
    icon: "Building2" as const,
    title: "I\u2019m a trainer looking for a studio",
    description: "Fully equipped private studio for your clients. Your own rates. From \u20ac12/hour.",
    cta: "Book free studio tour",
    href: withUtm(acuityLinks.studioTrial, "studio_rental"),
    external: true,
    highlight: "Free tour",
  },
];

const trustItems = [
  { icon: Shield, text: "No contract, no membership" },
  { icon: Clock, text: "Open daily 06:00\u201322:00" },
  { icon: MapPin, text: "Jordaan, Amsterdam" },
];

export default function StartPageEN() {
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
              <span>on Google</span>
            </div>

            {/* Hero — no whileInView animation, visible immediately */}
            <div className="mb-10 sm:mb-14 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Your private studio in the Jordaan
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                What brings you to SculptClub?
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
            Not sure?{" "}
            <a
              href={whatsappLinks.en}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-medium"
            >
              Send us a WhatsApp &rarr;
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
              alt="Warm portrait at the entrance of SculptClub, Jordaan Amsterdam"
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
