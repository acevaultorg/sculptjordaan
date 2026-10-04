import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { CalendarClock, Users, Sun, Dumbbell, KeyRound, MessageCircle } from "lucide-react";

/**
 * Praktijkruimte per dagdeel (card musgz6ei1z7bn7, plan subscription-top10-v2-2026-10-03 §6 #3).
 *
 * WHY: weekday afternoons are the emptiest hours. Acuity export 2026-09-28, 60 days: 69 paid studio
 * bookings start 13:00-17:59 against 194 at 06:00-11:59, and the public availability API on 2026-10-04
 * showed full-studio starts 13:00-16:00 free on 4 of 5 checked weekdays. This page offers physios,
 * coaches and pilates/online trainers one fixed afternoon (4h) a week, billed per 4 weeks.
 *
 * FACTS ONLY. The price is NOT decided: the page says "prijs op aanvraag" until Paulo's yes on the
 * decision card, and the only CTA is WhatsApp (counted site-wide as whatsapp_click, so never click it
 * in QA: it records a real lead). No treatment table, shower, waiting room or clinical claim, because
 * none is confirmed. Copy written on the Fable writer (rule writing-in-his-name-runs-on-fable-medium).
 * FALSIFIER: 0 enquiries by 2026-11-30, then remove the page from the studio-rental cross-link.
 * EN parity: src/app/en/practice-space-rental/page.tsx (keep in sync).
 */

const PATH = "/nl/praktijkruimte-huren";
const WHATSAPP = `${siteConfig.whatsapp}?text=${encodeURIComponent("Hoi Paulo, ik heb interesse in een vaste middag per week in de studio. Welke middagen zijn vrij?")}`;

const gallery = [
  { src: "/images/studio/back-room-full.jpg", alt: "De studio: zwarte vloer, rack en daklicht" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Daglicht door het dakraam" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Openslaande deuren met uitzicht op de gracht" },
  { src: "/images/studio/model-facade-full.jpg", alt: "De gevel aan de Egelantiersgracht" },
];

export const metadata: Metadata = {
  title: { absolute: "Praktijkruimte huren per dagdeel in de Jordaan, Amsterdam" },
  description: "Een vaste middag per week in een privéstudio aan de gracht. Vier uur, elke week voor jou. Prijs op aanvraag, opzeggen kan altijd.",
  alternates: {
    canonical: PATH,
    languages: { nl: "/nl/praktijkruimte-huren", en: "/en/practice-space-rental" },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: "Praktijkruimte per dagdeel in de Jordaan",
    description: "Een vaste weekdagmiddag per week in een privéstudio aan de Egelantiersgracht. Prijs op aanvraag.",
    images: ["/images/studio/back-room-full.jpg"],
  },
};

const features = [
  { icon: CalendarClock, text: "Eén vaste weekdagmiddag per week, 4 uur" },
  { icon: Users, text: "De hele studio privé, voor 1 tot 8 personen" },
  { icon: Sun, text: "Daglicht via de lichtkoepel en de dubbele deuren aan de gracht" },
  { icon: Dumbbell, text: "Squat rack en dumbbells op een zwarte gymvloer" },
  { icon: Dumbbell, text: "Een slee en de SCULPT-wand" },
  { icon: KeyRound, text: "Deurcode via WhatsApp om middernacht, de avond ervoor. Geen balie." },
];

const faqs = [
  { question: "Wat kost een vast dagdeel?", answer: "Prijs op aanvraag. Stuur een WhatsApp, dan krijg je de prijs. Je betaalt per 4 weken." },
  { question: "Welke middag en hoe lang?", answer: "Eén weekdagmiddag, ongeveer 13:00 tot 17:00. Vier uur. Elke week dezelfde middag, die staat vast voor jou. Die middagen zijn nu meestal vrij, dus je hebt keus." },
  { question: "Voor wie is dit?", answer: "Fysiotherapeuten en coaches die hun eigen klanten ergens privé willen zien. Pilatesdocenten ook. En online trainers die hun klanten soms live willen hebben." },
  { question: "Kan ik opzeggen?", answer: "Ja, altijd. Je betaalt per 4 weken en je stopt wanneer je wilt." },
  { question: "Waar zit de studio?", answer: "Egelantiersgracht 424 in de Jordaan, Amsterdam. Je klanten komen binnen met de deurcode die je de avond ervoor via WhatsApp krijgt. Er is geen balie." },
];

export default function PraktijkruimteHurenPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/nl" }, { name: "Studio huren", url: "/nl/studio-huren" }, { name: "Praktijkruimte per dagdeel", url: "/nl/praktijkruimte-huren" }]} />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="overline text-primary">Vaste middag per week</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Praktijkruimte per dagdeel</h1>
            <p className="mt-4 text-lg text-muted-foreground">{"Een vaste weekdagmiddag, elke week voor jou. Vier uur in een studio die je met niemand deelt. Je klanten komen naar de Egelantiersgracht en jij doet de deur open met een code."}</p>
            <div className="mt-6">
              <p className="text-3xl font-bold text-foreground">Prijs op aanvraag</p>
              <p className="mt-1 text-base text-muted-foreground">Per 4 weken. Altijd opzegbaar.</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP} external size="tall" className="w-full sm:w-auto">
                <MessageCircle className="mr-2 h-4 w-4" />
                Stuur een WhatsApp
              </ButtonLink>
              <ButtonLink href="/nl/studio-huren" size="tall" variant="outline" className="w-full sm:w-auto">
                Liever per uur? Bekijk de uurtarieven
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline={"De studio"} title={"Wat je krijgt"} />
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <PhotoGalleryLightbox images={gallery} locale="nl" />
      </Section>

      <Section bg="muted">
        <SectionHeader overline={"Veelgestelde vragen"} title={"Praktijkruimte per dagdeel"} />
        <dl className="mx-auto max-w-2xl divide-y divide-border">
          {faqs.map((f) => (
            <div key={f.question} className="py-4">
              <dt className="font-semibold">{f.question}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageLayout>
  );
}
