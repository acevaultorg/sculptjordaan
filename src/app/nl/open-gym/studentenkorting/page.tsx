import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { LandingVideo } from "@/components/marketing/landing-video";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { GoogleMap } from "@/components/marketing/google-map";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, openGymStudentDeal, whatsappLinks } from "@/config/acuity";
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Users,
  Clock,
  Ban,
  KeyRound,
  Check,
} from "lucide-react";

/**
 * Open Gym — Studentenkorting. Dedicated landing page for the €39 student rate
 * (Acuity product 2272560, created 2026-09-01).
 *
 * WHY A SEPARATE PAGE AND NOT A ROW ON /nl/prijzen — this is the whole point,
 * do not "simplify" it onto the pricing page:
 *   The risk to TOTAL revenue is not that too few students join, it is that
 *   existing €49 joiners convert DOWN to €39. On the pricing page every
 *   visitor sees €39 and anyone who can claim student status will. On this
 *   page only people who searched student terms ever see it, so the €79 → €49
 *   anchor stays intact for everyone else and the students are ADDITIVE.
 *   Same reasoning as the €49 Zomerdeal: a private Acuity product on a deep
 *   link, deliberately absent from the public catalog.
 *
 * WHY IT IS WORTH DOING AT ALL: the Acuity full export puts true utilisation
 * at ~18% of 112 opening hours/week. A student training off-peak costs
 * essentially nothing to serve and fills dead hours — at 18% the risk is
 * leaving the room empty out of price discipline, not crowding it.
 *
 * WHY €39: sits between the €29 Instapplan (4 sessions) and the €49
 * price-locked deal, so it undercuts neither and the ladder stays coherent.
 *
 * ELIGIBILITY IS DELIBERATELY WIDE — any valid student card, Dutch or
 * international, full-time or part-time. Volume is the lever here; policing a
 * €10 delta with door arguments costs more goodwill than it protects.
 *
 * NOT time-restricted. Acuity scopes availability to APPOINTMENT TYPES, not to
 * subscription products, so an off-peak-only tier would need a separate
 * restricted appointment type. Revisit if peak hours start filling.
 *
 * Gate: openGymStudentDeal.active — flip to false in src/config/acuity.ts and
 * this page stops advertising the rate.
 *
 * EN parity: src/app/en/open-gym/student-discount/page.tsx (keep in sync).
 */

const student = openGymStudentDeal;
const savings = student.priceRegular - student.priceStudent;

const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de privé gym in de Jordaan — SCULPT-muur en apparatuur" },
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press op de bank bij SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang aan de pull-up bar bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Open deuren met uitzicht op de Egelantiersgracht" },
];

export const metadata: Metadata = {
  title: { absolute: `Studentenkorting — Onbeperkt sporten €${student.priceStudent}/4 weken | SculptClub Jordaan` },
  description: `Studentenkorting in Amsterdam: onbeperkt trainen in onze privé gym in de Jordaan voor €${student.priceStudent} per 4 weken in plaats van €${student.priceRegular}. Laat je studentenpas zien, geen contract, eerste sessie gratis.`,
  keywords: [
    "studentenkorting sportschool amsterdam",
    "sportschool student amsterdam",
    "goedkope sportschool amsterdam student",
    "student gym amsterdam",
    "sporten als student amsterdam",
    "sportschool jordaan student",
    "sportschool zonder contract student",
  ],
  alternates: {
    canonical: "/nl/open-gym/studentenkorting",
    languages: {
      nl: "/nl/open-gym/studentenkorting",
      en: "/en/open-gym/student-discount",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/open-gym/studentenkorting",
    title: `Studentenkorting — onbeperkt trainen voor €${student.priceStudent}/4 weken`,
    description: `Normaal €${student.priceRegular}. Met studentenpas €${student.priceStudent} per 4 weken. Privé gym in de Jordaan, max 4 personen, geen contract.`,
  },
};

const included = [
  { icon: Users, text: "Max 4 personen in de studio, dus nooit wachten op een toestel" },
  { icon: Clock, text: "Elke dag open van 06:00 tot 22:00, ook tussen colleges door" },
  { icon: KeyRound, text: "Deurcode via WhatsApp, zodat je meteen kunt beginnen" },
  { icon: Ban, text: "Geen contract en geen opzegtermijn. Stoppen is altijd gratis" },
];

const faqs = [
  {
    question: "Wie komt in aanmerking voor de studentenprijs?",
    answer:
      "Iedereen met een geldige studentenpas. Nederlands of internationaal, voltijd of deeltijd, HBO, universiteit of MBO: het maakt niet uit. Je laat je pas één keer zien bij je eerste bezoek.",
  },
  {
    question: "Hoe laat ik zien dat ik student ben?",
    answer:
      "Gewoon je studentenpas of collegekaart laten zien als je er de eerste keer bent. Meer is het niet. Geen formulieren en niets opsturen.",
  },
  {
    question: `Wat kost het precies?`,
    answer: `€${student.priceStudent} per 4 weken voor onbeperkt Open Gym, in plaats van €${student.priceRegular}. Dat is €${savings} per 4 weken minder. Je betaalt per 4 weken en je zegt altijd gratis op.`,
  },
  {
    question: "Kan ik eerst gratis proberen?",
    answer:
      "Ja. Je eerste sessie is gratis en vrijblijvend, ook als je daarna geen lid wordt. Je krijgt de deurcode via WhatsApp en je traint gewoon een keer mee.",
  },
  {
    question: "Zit ik ergens aan vast?",
    answer:
      "Nee. Het loopt per 4 weken en je zegt altijd gratis op, zonder opzegtermijn en zonder uitleg. Handig als je een tentamenperiode of een zomer weg bent.",
  },
  {
    question: "Hoe druk is het?",
    answer:
      "Er zijn maximaal 4 mensen tegelijk in de studio. Dat is het hele punt van een privé gym: je hoeft nooit te wachten en je traint niet in een volle zaal.",
  },
  {
    question: "Is er ook iets goedkopers als ik weinig train?",
    answer: `Ja. Het Instapplan is €29 per 4 weken voor 4 sessies (€7,25 per keer). Handig als je één keer per week traint. Onbeperkt is voordeliger zodra je vaker dan één keer per week gaat.`,
  },
];

export default function StudentenkortingPage() {
  const on = student.active;

  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/nl" },
          { name: "Open Gym", url: "/nl/open-gym" },
          { name: "Studentenkorting", url: "/nl/open-gym/studentenkorting" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* ── Offer ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            {on && (
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                Studentenprijs
              </span>
            )}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Onbeperkt sporten als student in de Jordaan
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Privé gym aan de Egelantiersgracht. Max 4 personen. Train zo vaak
              je wilt, tussen je colleges door.
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-3">
              {on && (
                <span className="sc-price-old text-2xl text-muted-foreground">
                  €{student.priceRegular}
                </span>
              )}
              <span className="text-6xl font-bold text-foreground">
                €{on ? student.priceStudent : student.priceRegular}
              </span>
              <span className="text-lg text-muted-foreground">/ 4 weken</span>
            </div>

            {on && (
              <>
                <p className="mt-3 text-lg font-semibold text-brand">
                  €{savings} per 4 weken minder met je studentenpas
                </p>
                <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
                  Laat je studentenpas zien bij je eerste bezoek. Meer hoef je
                  niet te doen.
                </p>
              </>
            )}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.openGymTryout}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Boek gratis probeersessie
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              {on && (
                <ButtonLink
                  href={student.url}
                  external
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Word direct lid
                </ButtonLink>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Eerste sessie gratis en vrijblijvend, ook als je daarna geen lid
              wordt.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Eligibility — the one thing a student actually needs to know ── */}
      {on && (
        <Section bg="muted">
          <FadeIn>
            <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Eén keer je studentenpas laten zien, that&apos;s it
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Elke geldige studentenpas telt: Nederlands of
                  internationaal, voltijd of deeltijd, UvA, VU, HvA, MBO of
                  ergens anders. Geen formulieren, geen bewijs opsturen, geen
                  wachttijd. Je laat je pas zien als je er de eerste keer bent
                  en je betaalt €{student.priceStudent} per 4 weken zolang je
                  lid blijft.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* ── What you get ──────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">Wat je krijgt</h2>
            <ul className="mt-6 space-y-4">
              {included.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Liever eerst alle plannen en foto&apos;s zien?{" "}
              <a
                href="/nl/open-gym"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
              >
                Bekijk de volledige Open Gym pagina
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Kijk zelf ─────────────────────────────────────────────────── */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">De Jordaan</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">
                Train waar Amsterdam op z&apos;n mooist is
              </h2>
              <p className="mt-2 text-muted-foreground">
                Jouw gym ligt aan de Egelantiersgracht. De bootjes varen voorbij
                en het is er nooit druk.
              </p>
            </div>
            <div className="mx-auto max-w-xs">
              <LandingVideo
                src="/videos/opengym-canal.mp4"
                poster="/videos/_rs/opengym-canal-poster-full.webp"
                label="De Egelantiersgracht, recht voor de deur van SculptClub"
                aspectClassName="aspect-[9/16]"
              />
            </div>
            <div className="mt-8">
              <PhotoGalleryLightbox images={galleryImages} locale="nl" />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              Veelgestelde vragen
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="flex items-start gap-2 font-semibold text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {faq.question}
                  </dt>
                  <dd className="mt-2 pl-6 text-muted-foreground">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </Section>

      <ReviewsPreview locale="nl" />
      <GoogleMap locale="nl" />

      {/* ── Vragen ────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Nog een vraag?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Stuur een appje, je krijgt gewoon antwoord van een mens.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink
                href={whatsappLinks.openGymNl}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto plausible-event-name=WhatsApp+Click"
              >
                <MessageCircle className="h-4 w-4" />
                Stel je vraag
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
