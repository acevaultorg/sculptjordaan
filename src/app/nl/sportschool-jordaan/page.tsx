import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: "Sportschool Jordaan zonder Abonnement — SculptClub Privé Club",
  description:
    "De sportschool in de Jordaan zonder abonnement. Privé studio, Open Gym vanaf €5,75 per sessie. Geen contract, geen drukte. Eerste keer gratis proberen.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/nl/sportschool-jordaan",
    languages: {
      nl: "/nl/sportschool-jordaan",
      en: "/en/boutique-gym-amsterdam",
    },
  },
};

const steps = [
  {
    step: "1",
    title: "Probeer gratis",
    desc: "Boek een gratis Open Gym try-out. Ervaar de privé studio in de Jordaan zonder verplichting.",
  },
  {
    step: "2",
    title: "Kies je plan",
    desc: "Open Gym vanaf €29 per 4 weken (4 sessies). Geen abonnement met opzegtermijn — gewoon 4-weken cycli.",
  },
  {
    step: "3",
    title: "Train wanneer jij wilt",
    desc: "Dagelijks open van 06:30 tot 22:00. Deurcode via WhatsApp de avond van tevoren. Geen receptie.",
  },
];

const trustItems = [
  { icon: Shield, text: "Geen abonnement" },
  { icon: Clock, text: "Dagelijks 06:30–22:00" },
  { icon: MessageCircle, text: "Direct boeken via WhatsApp" },
];

const faqs = [
  {
    q: "Is dit een sportschool of een privé club?",
    a: "Eigenlijk allebei. SculptClub is een boutique sportschool in de Jordaan met de uitstraling van een privé club: kleine groepen, geen drukte, geen rijen voor het rek. Gewoon een rustige studio aan de gracht.",
  },
  {
    q: "Wat kost de sportschool in de Jordaan zonder abonnement?",
    a: "Open Gym Instapplan is €29 per 4 weken (4 sessies, €7,25 per keer). Populair €49 per 4 weken (8 sessies). Intensief €69 (12 sessies). Onbeperkt €89. Geen lange contracten, geen opzegtermijn.",
  },
  {
    q: "Kan ik eerst een keer proberen?",
    a: "Ja. De eerste Open Gym sessie is gratis. Boek een try-out en ervaar of de sportschool bij je past. Geen creditcard nodig.",
  },
  {
    q: "Waar zit de sportschool precies?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — midden in de Jordaan, dichtbij de Westerstraat en de Negen Straatjes.",
  },
];

export default function SportschoolJordaanPage() {
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
          Sportschool in de Jordaan{" "}
          <span className="text-brand">zonder abonnement</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Geen sportschool-deal, een privé club. Open Gym vanaf €5,75 per
          sessie. Geen contract, geen opzegtermijn. Eerste keer gratis.
        </p>

        {/* Primary CTA */}
        <a
          href={acuityLinks.openGymTrial}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
        >
          Probeer gratis
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Geen abonnement · Geen creditcard · Eerste sessie gratis
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Vragen?{" "}
          <a
            href={whatsappLinks.openGymNl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline font-medium"
          >
            App ons even →
          </a>
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Open Gym sportschool in de Jordaan — privé studio aan de Egelantiersgracht"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
            fetchPriority="high"
          />
        </div>

        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Zo werkt het</h2>
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
          <h2 className="text-xl font-bold mb-4">Waarom deze sportschool in de Jordaan?</h2>
          <ul className="space-y-3">
            {[
              "Geen abonnement — gewoon 4-weken cycli, opzeggen wanneer je wilt",
              "Open Gym Instapplan: €29 voor 4 sessies (€7,25 p/s)",
              "Open Gym Onbeperkt: €89 per 4 weken",
              "Privé sfeer — geen drukte, nooit wachten op apparaten",
              "Personal trainers beschikbaar (vanaf €45 per sessie)",
              "Ook studio te huren vanaf €12 voor een uur",
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
          <h2 className="text-2xl font-bold text-center mb-8">Wat buurtgenoten zeggen</h2>
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
          <h2 className="text-2xl font-bold mb-2">Een sportschool in de Jordaan, zonder gedoe</h2>
          <p className="text-white/80 mb-6">
            Probeer de eerste sessie gratis. Duurt 2 minuten om te boeken.
          </p>
          <a
            href={acuityLinks.openGymTrial}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all active:scale-95"
          >
            Gratis try-out boeken
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          SculptClub · Egelantiersgracht 424, 1015 RR Amsterdam Jordaan ·{" "}
          <a
            href="https://maps.google.com/?q=Egelantiersgracht+424,+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Bekijk op kaart
          </a>
        </p>
      </main>
    </div>
  );
}
