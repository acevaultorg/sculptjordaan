import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Dumbbell, Users, Building2, MapPin, Clock, Shield } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: "Welcome to SculptClub — Private Studio Amsterdam Jordaan",
  description:
    "Private personal training studio in the Jordaan. Personal training from €45, Open Gym from €5.75/session, studio rental from €12/hour. Free first session.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/start",
    languages: {
      nl: "/nl/start",
      en: "/en/start",
    },
  },
};

const paths = [
  {
    icon: Users,
    title: "I want a personal trainer",
    description: "Get matched with a trainer who fits your goals. First intro is 100% free.",
    cta: "Book free intro",
    href: "/en/free-intro",
    external: false,
    highlight: "Free first session",
  },
  {
    icon: Dumbbell,
    title: "I want to train solo",
    description: "Book 60-min slots in a private studio. Max 3 people. No membership needed.",
    cta: "Try Open Gym free",
    href: acuityLinks.openGymTrial,
    external: true,
    highlight: "Free tryout",
  },
  {
    icon: Building2,
    title: "I\u2019m a trainer looking for a studio",
    description: "Rent our fully equipped studio for your clients. 0% commission. Your rate, your schedule.",
    cta: "Book free studio tour",
    href: acuityLinks.studioTrial,
    external: true,
    highlight: "Free tour",
  },
];

const trustItems = [
  { icon: Shield, text: "No contract, no membership" },
  { icon: Clock, text: "Open daily 06:30\u201322:00" },
  { icon: MapPin, text: "Jordaan, Amsterdam" },
];

export default function StartPageEN() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Link href="/en" aria-label="Back to homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto dark:invert"
            priority
          />
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-10">
        {/* Social proof */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="font-semibold text-foreground ml-1">5.0</span>
            <span>on Google</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
            Your private studio in the{" "}
            <span className="text-brand">Jordaan</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            What brings you to SculptClub?
          </p>
        </div>

        {/* Three audience paths */}
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
          Not sure?{" "}
          <a
            href={whatsappLinks.en}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline font-medium"
          >
            Send us a WhatsApp →
          </a>
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/studio-interior-1.jpeg"
            alt="SculptClub private studio in the Jordaan, Amsterdam"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>

        {/* Trust items */}
        <div className="mt-8 grid grid-cols-3 gap-3">
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

        {/* Quick info */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>Egelantiersgracht 424, Amsterdam Jordaan</p>
        </div>
      </main>
    </div>
  );
}
