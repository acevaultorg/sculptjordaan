import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks, openGymSinglePrice, openGymSummerDeal } from "@/config/acuity";
import { MessageCircle, Clock, MapPin, Users, Dumbbell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gratis Open Gym probeersessie boeken: Privé Studio Jordaan",
  },
  description:
    "Boek je gratis Open Gym probeersessie bij SculptClub in de Jordaan. Kom vrijblijvend langs en train één sessie gratis — geen abonnement, geen verplichting.",
  alternates: {
    canonical: "/nl/gratis-proefles",
    languages: { nl: "/nl/gratis-proefles", en: "/en/free-trial" },
  },
  openGraph: {
    type: "website",
    url: "/nl/gratis-proefles",
    title:
      "Gratis Open Gym probeersessie boeken: Privé Studio Jordaan",
    description:
      "Boek je gratis Open Gym probeersessie bij SculptClub in de Jordaan. Kom vrijblijvend langs en train één sessie gratis — geen abonnement, geen verplichting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Open Gym proefles boeken | SculptClub Amsterdam",
    description:
      "Boek je gratis Open Gym probeersessie bij SculptClub in de Jordaan. Vrijblijvend, geen abonnement.",
  },
};

// Visible FAQ copy and the FAQPage schema are rendered from this one array,
// so the structured data can never drift from what the page actually shows.
const faqs = [
  {
    question: "Is de probeersessie echt gratis?",
    answer:
      "Ja. Je traint één keer gratis in de Open Gym. Je hoeft geen betaalgegevens achter te laten en er volgt geen automatisch abonnement.",
  },
  {
    question: "Moet ik daarna lid worden?",
    answer:
      "Nee. Er is geen contract en geen opzegtermijn. Na je probeersessie kies je zelf of je losse sessies wilt, een plan neemt, of niets doet.",
  },
  {
    question: "Kan ik kosteloos annuleren of verzetten?",
    answer:
      "Ja, altijd en zonder tijdslimiet. Er is geen annuleringstermijn van 24 uur — laat het ons gewoon weten via WhatsApp.",
  },
  {
    question: "Hoe kom ik binnen?",
    answer:
      "Je krijgt de deurcode via WhatsApp, om 00:00 in de nacht voor je sessie. Er is geen balie en niemand hoeft je binnen te laten.",
  },
  {
    question: "Staat er een trainer klaar tijdens de Open Gym?",
    answer:
      "Nee. Open Gym is zelfstandig trainen in een privé studio — geen les en geen begeleiding. Wil je wél begeleiding, kies dan een personal trainer; die eerste kennismaking is ook gratis.",
  },
  {
    question: "Hoe druk kan het zijn?",
    answer:
      "Er trainen maximaal 4 mensen tegelijk in de studio. Je hoeft dus nooit te wachten op materiaal of een bankje.",
  },
];

const studioFacts = [
  {
    icon: Clock,
    title: "Elke dag 06:00 – 22:00",
    body: "Zeven dagen per week open, ook vroeg en laat. Je kiest zelf je moment.",
  },
  {
    icon: Users,
    title: "Maximaal 4 mensen",
    body: "Nooit een rij voor een toestel. De studio blijft rustig, ook op piekmomenten.",
  },
  {
    icon: Dumbbell,
    title: "Vrije gewichten",
    body: "Barbell en squat rack met platform, dumbbells 4 – 40 kg, verstelbare banken en kettlebells.",
  },
  {
    icon: MapPin,
    title: "Egelantiersgracht 424",
    body: "Midden in de Jordaan, 1015 RR Amsterdam. Op loop- en fietsafstand van het centrum.",
  },
];

const steps = [
  {
    n: "1",
    title: "Kies een tijd",
    body: "Pak hierboven een moment dat jou uitkomt. Je ziet direct wat vrij is.",
  },
  {
    n: "2",
    title: "Je krijgt de deurcode",
    body: "Om 00:00 in de nacht ervoor sturen we je de code via WhatsApp, samen met het adres.",
  },
  {
    n: "3",
    title: "Kom langs en train",
    body: "Je traint zelfstandig, in je eigen tempo. Geen intake, geen verkooppraatje.",
  },
];

export default function GratisProeflesPage() {
  return (
    <PageLayout audience="member">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Open Gym", url: "/nl/open-gym" },
          { name: "Gratis proefles", url: "/nl/gratis-proefles" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <SectionHeader
          overline="gratis probeersessie"
          title="Plan je gratis probeersessie"
          description="Kies een tijd en train een uur zelf met vrije gewichten in onze privé studio in de Jordaan. Geen verplichting, geen abonnement."
        />
        <AcuityEmbed
          url={acuityFreeTrials.openGymTryout}
          title="Boek je gratis Open Gym probeersessie bij SculptClub"
          intent="open_gym"
          pricing="free"
          height={900}
          className="-mx-4 rounded-none overflow-hidden bg-white sm:mx-auto sm:max-w-3xl sm:rounded-2xl"
        />
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Past geen enkel moment of heb je een vraag? Stuur ons even een
            berichtje — we denken graag met je mee.
          </p>
          <ButtonLink
            href={whatsappLinks.openGymNl}
            variant="outline"
            size="tall"
            external
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
            Stel je vraag via WhatsApp
          </ButtonLink>
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="Wat is een probeersessie precies?"
          description="Eén volledige Open Gym sessie, gratis, zonder dat je ergens aan vastzit."
        />
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Open Gym betekent dat je <strong className="text-foreground">zelfstandig traint</strong>{" "}
            in een privé studio — geen groepsles, geen trainer die meekijkt, geen
            vast schema. Je hebt de ruimte grotendeels voor jezelf en bepaalt zelf
            wat je doet en hoe lang je blijft.
          </p>
          <p>
            Daarom noemen we het een probeersessie en geen les: er valt niets te
            volgen. Je komt kijken of de studio, de sfeer en de
            tijden bij je passen. Zoek je juist wél begeleiding, dan is een{" "}
            <Link
              href="/nl/vind-jouw-personal-trainer"
              className="text-brand underline underline-offset-4"
            >
              personal trainer
            </Link>{" "}
            de betere start — ook daar is de eerste kennismaking gratis.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Zo werkt het"
          description="Van boeken tot binnenlopen: drie stappen, geen papierwerk."
        />
        <ol className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="Wat je aantreft"
          description="De studio in het kort, zodat je weet waar je aan toe bent."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {studioFacts.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Veelgestelde vragen"
          description="De dingen die mensen ons het vaakst vragen voor hun eerste bezoek."
        />
        <dl className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((f) => (
            <div key={f.question} className="py-5">
              <dt className="text-base font-semibold text-foreground">
                {f.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="En daarna?"
          description="Bevalt het? Dan kies je zelf hoe je verdergaat — of je laat het gewoon hierbij."
        />
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {/* 2026-09-24: the next step's price, read from config so it cannot drift from
              /nl/prijzen (the reason 11b757b linked instead of restating). */}
          <p className="text-foreground">
            Een losse sessie kost €{openGymSinglePrice}, zonder lidmaatschap. Onbeperkt trainen:
            €{openGymSummerDeal.active ? openGymSummerDeal.priceDeal : openGymSummerDeal.priceRegular} per 4 weken
            {openGymSummerDeal.active ? " (introductieprijs voor nieuwe leden)" : ""}, altijd opzegbaar.
          </p>
          <p>
            Na je probeersessie zit je nergens aan vast. Je kunt losse sessies
            blijven boeken of een plan van vier weken nemen; er is ook een
            studententarief op vertoon van een studentenpas. De actuele tarieven
            en wat er precies bij zit staan op de{" "}
            <Link
              href="/nl/open-gym"
              className="text-brand underline underline-offset-4"
            >
              Open Gym pagina
            </Link>{" "}
            en op{" "}
            <Link
              href="/nl/prijzen"
              className="text-brand underline underline-offset-4"
            >
              prijzen
            </Link>
            .
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/nl/open-gym" size="tall">
            Bekijk Open Gym
          </ButtonLink>
          <ButtonLink href="/nl/prijzen" variant="outline" size="tall">
            Alle prijzen
          </ButtonLink>
        </div>
      </Section>
    </PageLayout>
  );
}
