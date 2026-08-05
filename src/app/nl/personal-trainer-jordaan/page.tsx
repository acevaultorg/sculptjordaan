import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { trainers } from "@/config/trainers";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Jordaan & Centrum — SculptClub Privé Studio Amsterdam" },
  description:
    "Personal training in de Jordaan en het Centrum van Amsterdam. Privé studio aan de Egelantiersgracht — vanaf €45 per sessie, geen contract, eerste intake gratis. Telefonisch of in de studio.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/nl/personal-trainer-jordaan",
    languages: {
      nl: "/nl/personal-trainer-jordaan",
      en: "/en/personal-trainer-amsterdam-jordaan",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/personal-trainer-jordaan",
    title: "Personal Trainer Jordaan & Centrum — SculptClub Privé Studio Amsterdam",
    description:
      "Personal training in de Jordaan en het Centrum van Amsterdam. Privé studio aan de Egelantiersgracht — vanaf €45 per sessie, geen contract, eerste intake gratis. Telefonisch of in de studio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Jordaan & Centrum — SculptClub Privé Studio Amsterdam",
    description:
      "Personal training in de Jordaan en het Centrum van Amsterdam. Privé studio aan de Egelantiersgracht — vanaf €45 per sessie, geen contract, eerste intake gratis. Telefonisch of in de studio.",
  },
};

const steps = [
  {
    step: "1",
    title: "Kies je personal trainer",
    // 2026-06-02 (K): count now dynamic via trainers.length (was hardcoded "7"
    // + a drifted name list — canonical roster is larger). Names dropped to
    // stay self-maintaining; specialties kept for SEO + intent.
    desc: `${trainers.length} personal trainers in de Jordaan, elk met een eigen specialisatie en stijl — van krachttraining en voeding tot houding, herstel en small group.`,
  },
  {
    step: "2",
    title: "Plan je gratis intake",
    desc: "Vrijblijvende kennismaking, 100% gratis. Bespreek je doelen en ervaar de privé studio aan de gracht.",
  },
  {
    step: "3",
    title: "Train op jouw moment",
    desc: "Dagelijks open van 06:00 tot 22:00. Boek per sessie, vanaf €45. Geen verplichting achteraf.",
  },
];

const trustItems = [
  { icon: Shield, text: "Altijd opzegbaar" },
  { icon: Clock, text: "Dagelijks 06:00–22:00" },
  { icon: MessageCircle, text: "Direct contact via WhatsApp" },
];

const faqs = [
  {
    q: "Waar in de Jordaan vind ik SculptClub?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — midden in de Jordaan, op loopafstand van het Centrum, de Westerstraat, Lindengracht, de Negen Straatjes en het Westerpark.",
  },
  {
    q: "Kom ik makkelijk vanuit het Centrum?",
    a: "Ja. Met tram 13 of 17 sta je zo bij de Marnixstraat, en bus 18 en 21 stoppen om de hoek. De meeste klanten komen lopend of op de fiets vanuit de Jordaan, het Centrum of Westerpark — geen parkeerstress.",
  },
  {
    q: "Is er parkeergelegenheid?",
    a: "In de buurt geldt betaald parkeren; de meeste klanten komen op de fiets of lopend. Vraag je trainer naar de handigste optie als je met de auto komt.",
  },
  {
    q: "Wat kost een personal trainer in de Jordaan?",
    a: "Bij SculptClub starten tarieven vanaf €45 per sessie. Trainers bepalen hun eigen tarief; je betaalt je trainer direct. De eerste intake is gratis.",
  },
  {
    q: "Kan ik mijn personal trainer zelf kiezen?",
    a: `Ja. Je kiest uit ${trainers.length} personal trainers in de Jordaan, elk met eigen specialisatie — krachttraining, voeding, training voor vrouwen, houding of small group. Voor fysiotherapie verwijzen we je door (we hebben geen fysiotherapeut in dienst). Je vindt hun profielen op onze trainerspagina.`,
  },
  {
    q: "Moet ik een abonnement afsluiten?",
    a: "Nee. Geen abonnement, geen contract, geen lange binding. Je boekt per sessie en kunt altijd gratis annuleren.",
  },
];

export default function PersonalTrainerJordaanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* FAQPage schema (K, 2026-06-02) — page had FAQs but no schema. Enables
          rich-result / PAA eligibility. LocalBusiness is already global (layout). */}
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
          Personal trainer{" "}
          <span className="text-brand">in de Jordaan</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          {trainers.length} trainers, één privé studio aan de Egelantiersgracht.
          Vanaf €45 per sessie. Geen contract. Eerste intake gratis.
        </p>

        {/* Primary CTA */}
        <a
          href={"/nl/vind-jouw-personal-trainer"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
        >
          Plan je gratis intake
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Geen contract · Gratis annuleren · 100% vrijblijvend
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Liever even appen?{" "}
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
            alt="Personal training in de privé studio van SculptClub aan de Egelantiersgracht in de Jordaan"
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
                <div className="w-8 h-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold shrink-0">
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
          <h2 className="text-xl font-bold mb-4">Wat krijg je in de Jordaan?</h2>
          <ul className="space-y-3">
            {[
              "Privé studio aan de Egelantiersgracht — geen drukte",
              "5 personal trainers, jouw match qua doel en stijl",
              "Eerste intake 100% gratis, geen creditcard nodig",
              "Geen abonnement — boek per sessie, vanaf €45",
              "Dagelijks open van 06:00 tot 22:00",
              "Deurcode via WhatsApp — geen receptie, geen wachten",
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
              <p className="text-sm leading-relaxed">“{r.text}”</p>
              <p className="text-xs text-muted-foreground mt-2">— {r.name} · Google</p>
            </div>
          ))}
        </div>

        {/* Neighbourhood content (K, 2026-06-02) — the local-SEO rank-driver.
            ~280 words, Jordaan + Centrum keyword-dense + accessibility +
            "rustig niet druk" + ZZP-rental angle. This is HOW U.P./Omnia rank
            for "personal trainer Amsterdam Jordaan"; SculptClub had thin
            content + zero Centrum coverage before this. */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold mb-5">Personal training in de Jordaan én het Centrum</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Onze privé studio ligt aan de <strong className="text-foreground">Egelantiersgracht 424</strong>, midden in de Jordaan — op loopafstand van het Centrum, het Westerpark en de Westelijke Eilanden. Of je nu in de Jordaan woont, in de grachtengordel werkt of vanuit het Centrum komt: je traint binnen een paar minuten, zonder gedoe.
            </p>
            <p>
              <strong className="text-foreground">Makkelijk bereikbaar.</strong> Met tram 13 of 17 sta je zo bij de Marnixstraat; bus 18 en 21 stoppen om de hoek. De meeste klanten komen lopend of op de fiets — geen zoektocht naar een parkeerplek, geen file. Train vóór je werk, in je lunchpauze of 's avonds: we zijn dagelijks open van 06:00 tot 22:00.
            </p>
            <p>
              <strong className="text-foreground">Rustig, niet druk.</strong> Anders dan een grote sportschool in het Centrum train je hier in een rustige, volledig uitgeruste privé studio aan de gracht — met Rogue, Eleiko en Concept2. Geen wachtrij, volledige focus. Alleen jij en je trainer, of een kleine groep.
            </p>
            <p>
              <strong className="text-foreground">Voor wie.</strong> Of je nu begint, terugkomt na een blessure, sterker wilt worden of gewoon fitter: je trainer maakt een plan op maat rond jouw doel, niveau en agenda.
            </p>
            <p>
              <strong className="text-foreground">Ben je zelf trainer?</strong> Personal trainers en fysiotherapeuten huren onze studio vanaf €12/uur — eigen tarief en klanten, geen contract. Ideaal als je eigen ruimte zoekt in de Jordaan of het Centrum.{" "}
              <Link href="/nl/studio-huren" className="text-brand hover:underline font-medium">Bekijk studio huren →</Link>
            </p>
          </div>
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
        <div className="mt-16 p-8 rounded-2xl bg-brand text-brand-foreground text-center">
          <h2 className="text-2xl font-bold mb-2">Train met een personal trainer in de Jordaan</h2>
          <p className="text-white/80 mb-6">
            Plan nu je gratis intake. Duurt 2 minuten.
          </p>
          <a
            href={"/nl/vind-jouw-personal-trainer"}
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
      <Footer />
    </div>
  );
}
