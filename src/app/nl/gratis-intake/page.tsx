import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: "Gratis Intake Personal Training — SculptClub Amsterdam Jordaan",
  description:
    "Plan je gratis intake bij SculptClub. Privé personal training studio in de Jordaan. Geen contract, geen abonnement. Eerste kennismaking 100% gratis.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/gratis-intake",
    languages: {
      nl: "/nl/gratis-intake",
      en: "/en/free-intro",
    },
  },
};

const steps = [
  {
    step: "1",
    title: "Boek online",
    desc: "Kies een tijd die past — direct in onze agenda. Duurt 2 minuten.",
  },
  {
    step: "2",
    title: "Kom langs",
    desc: "Je ontvangt een deurcode via WhatsApp de avond van tevoren. Geen receptie, geen wachten.",
  },
  {
    step: "3",
    title: "Ontdek of het past",
    desc: "45 minuten gratis kennismaking. Geen verplichting. Geen verborgen kosten.",
  },
];

const trustItems = [
  { icon: Shield, text: "Geen contract" },
  { icon: Clock, text: "Dagelijks 06:30–22:00" },
  { icon: MessageCircle, text: "Snel antwoord via WhatsApp" },
];

const faqs = [
  {
    q: "Kost de intake echt niets?",
    a: "Ja. De eerste kennismaking van 45 minuten is altijd gratis — geen creditcard vereist.",
  },
  {
    q: "Ben ik ergens aan gebonden na de intake?",
    a: "Nee. Je beslist daarna zelf of je verder wilt. Geen abonnement, geen contract.",
  },
  {
    q: "Wat gebeurt er tijdens de intake?",
    a: "Je leert de trainer kennen, bespreekt je doelen en maakt kennis met de studio. De trainer legt uit wat hij of zij voor je kan betekenen.",
  },
  {
    q: "Hoe kom ik binnen?",
    a: "Je ontvangt de avond van tevoren een unieke deurcode via WhatsApp. Geen bel, geen receptie.",
  },
];

export default function GratisIntakePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Link href="/" aria-label="Terug naar homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto dark:invert"
            preload
          />
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-12 text-center">
        {/* Stars */}
        <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-semibold text-foreground ml-1">5.0</span>
          <span>op Google</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.95] mb-4">
          Eerste intake{" "}
          <span className="text-brand">100% gratis</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Maak kennis met je personal trainer in ons privé studio aan de gracht
          in de Jordaan. Geen verplichting, geen abonnement.
        </p>

        {/* Primary CTA */}
        <a
          href={acuityLinks.generic}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
        >
          Plan je gratis intake
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Geen contract · Gratis annuleren · 45 minuten
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Liever via WhatsApp?{" "}
          <a
            href={whatsappLinks.nl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline font-medium"
          >
            Stuur een berichtje →
          </a>
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Lachend met dumbbells bij SculptClub privé studio"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
            fetchPriority="high"
          />
        </div>

        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Hoe werkt het?</h2>
          <div className="grid gap-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust icons */}
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

        {/* What you get */}
        <div className="mt-16 text-left p-6 rounded-2xl bg-secondary border border-border/50">
          <h2 className="text-xl font-bold mb-4">Wat krijg je?</h2>
          <ul className="space-y-3">
            {[
              "45 minuten gratis persoonlijke kennismaking",
              "Privé studio — geen drukte, geen afleidingen",
              "Inzicht in jouw doelen en de beste aanpak",
              "Eerlijke tarieven, 0% commissie",
              "Trainers vanaf €45/sessie",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real reviews */}
        <div className="mt-16 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Wat klanten zeggen</h2>
          {[
            {
              name: "Pien B.",
              text: "Wat een cadeau — een boutique sportschool met goede trainers op loopafstand. Klein maar zeer fijn.",
            },
            {
              name: "Bryan van L.",
              text: "Geweldige locatie! Klein maar fijn. Heeft alles wat wij nodig hebben.",
            },
          ].map((r) => (
            <div key={r.name} className="p-5 rounded-xl border border-border/50 bg-secondary">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs text-muted-foreground mt-2">— {r.name} · Google</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border/50 bg-secondary">
                <p className="font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-brand text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Klaar om te beginnen?</h2>
          <p className="text-white/80 mb-6">
            Plan nu je gratis intake. Duurt 2 minuten.
          </p>
          <a
            href={acuityLinks.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all active:scale-95"
          >
            Gratis intake plannen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          Egelantiersgracht 424, Amsterdam Jordaan
        </p>
      </main>
    </div>
  );
}
