import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { CalendarClock, Users, Sun, Dumbbell, KeyRound, MessageCircle } from "lucide-react";

/**
 * Practice space by the half-day (card musgz6ei1z7bn7, plan subscription-top10-v2-2026-10-03 §6 #3).
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
 * NL parity: src/app/nl/praktijkruimte-huren/page.tsx (keep in sync).
 */

const PATH = "/en/practice-space-rental";
const WHATSAPP = `${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Paulo, I'm interested in a fixed afternoon a week in the studio. Which afternoons are free?")}`;

const gallery = [
  { src: "/images/studio/back-room-full.jpg", alt: "The studio: black floor, rack and skylight" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Daylight through the skylight" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Double doors onto the canal" },
  { src: "/images/studio/model-facade-full.jpg", alt: "The facade on the Egelantiersgracht" },
];

export const metadata: Metadata = {
  title: { absolute: "Rent practice space by the half-day, Jordaan Amsterdam" },
  description: "One fixed weekday afternoon a week in a private studio on the canal. Four hours, held for you every week. Price on request, cancel any time.",
  alternates: {
    canonical: PATH,
    languages: { nl: "/nl/praktijkruimte-huren", en: "/en/practice-space-rental" },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: "Practice space by the half-day in the Jordaan",
    description: "One fixed weekday afternoon a week in a private studio on the Egelantiersgracht. Price on request.",
    images: ["/images/studio/back-room-full.jpg"],
  },
};

const features = [
  { icon: CalendarClock, text: "One fixed weekday afternoon a week, 4 hours" },
  { icon: Users, text: "The whole studio to yourself, for 1 to 8 people" },
  { icon: Sun, text: "Daylight through the skylight and the double doors onto the canal" },
  { icon: Dumbbell, text: "Squat rack and dumbbells on a black gym floor" },
  { icon: Dumbbell, text: "A sled and the SCULPT wall" },
  { icon: KeyRound, text: "Door code by WhatsApp at midnight the night before. No reception desk." },
];

const faqs = [
  { question: "What does a fixed half-day cost?", answer: "Price on request. Send a WhatsApp and you'll get the price. You pay per 4 weeks." },
  { question: "Which afternoon, and how long?", answer: "One weekday afternoon, roughly 13:00 to 17:00. Four hours. The same afternoon every week, held for you. Those afternoons are mostly free right now, so you can pick." },
  { question: "Who is this for?", answer: "Physiotherapists and coaches who want to see their own clients somewhere private. Pilates teachers too. And online trainers who sometimes want a client in the room." },
  { question: "Can I cancel?", answer: "Yes, any time. You pay per 4 weeks and you stop when you want." },
  { question: "Where is the studio?", answer: "Egelantiersgracht 424 in the Jordaan, Amsterdam. Your clients come in with the door code you get by WhatsApp the night before. There is no reception desk." },
];

export default function PracticeSpaceRentalPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Studio rental", url: "/en/studio-rental" }, { name: "Practice space by the half-day", url: "/en/practice-space-rental" }]} />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="overline text-primary">A fixed afternoon a week</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Practice space by the half-day</h1>
            <p className="mt-4 text-lg text-muted-foreground">{"One fixed weekday afternoon, held for you every week. Four hours in a studio you don't share with anyone. Your clients come to the Egelantiersgracht and you open the door with a code."}</p>
            <div className="mt-6">
              <p className="text-3xl font-bold text-foreground">Price on request</p>
              <p className="mt-1 text-base text-muted-foreground">Billed per 4 weeks. Cancel any time.</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP} external size="tall" className="w-full sm:w-auto">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send a WhatsApp
              </ButtonLink>
              <ButtonLink href="/en/studio-rental" size="tall" variant="outline" className="w-full sm:w-auto">
                Rather book by the hour? See hourly rates
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline={"The studio"} title={"What you get"} />
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
        <PhotoGalleryLightbox images={gallery} locale="en" />
      </Section>

      <Section bg="muted">
        <SectionHeader overline={"Questions"} title={"Practice space by the half-day"} />
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
