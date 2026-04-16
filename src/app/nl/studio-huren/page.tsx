import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { acuityLinks, acuityPackages, whatsappLinks } from "@/config/acuity";
import {
  Dumbbell,
  Lock,
  Clock,
  Ban,
  CreditCard,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Studio Huren Personal Trainer Amsterdam | SculptClub Jordaan",
  description:
    "Huur een privé trainingsruimte in Amsterdam Jordaan. Professionele studio voor freelance personal trainers & fysiotherapeuten. Vanaf €12/uur, geen commissie, flexibel per sessie.",
  alternates: {
    canonical: "/nl/studio-huren",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professionele apparatuur",
    description:
      "Powerrack, kabelmachine, dumbbells en alles wat je nodig hebt.",
  },
  {
    icon: Lock,
    title: "Priv\u00e9 ruimte",
    description: "Geen pottenkijkers. Alleen jij en je klant(en).",
  },
  {
    icon: Clock,
    title: "Flexibel per uur",
    description: "Boek wanneer het jou uitkomt. Geen vaste tijden.",
  },
  {
    icon: Ban,
    title: "Geen commissie",
    description: "Jij bepaalt je eigen tarieven. Wij rekenen alleen huur.",
  },
];

const galleryImages = [
  { src: "/images/studio/turf-lane-canal.jpg", alt: "Turf lane met SCULPT wandlogo en uitzicht op de gracht bij SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Achterruimte met slee, Rogue rack en bank onder daklicht bij SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack met planten en vinyl speler bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht vanuit SculptClub op de Egelantiersgracht" },
];

const faqs = [
  {
    q: "Wat kost het om de studio te huren?",
    a: "Halve studio (1:1) vanaf \u20ac12 per 60 minuten. Hele studio (max 6 personen) vanaf \u20ac17 per 60 minuten. Bespaar 10-23% met een kortingspakket.",
  },
  {
    q: "Welke kortingspakketten zijn er?",
    a: "Starter \u20ac89 (10% korting), Routine \u20ac199 (15% korting) en Volume \u20ac549 (23% korting). Pakketten zijn 1 jaar geldig.",
  },
  {
    q: "Wat is inbegrepen bij studio huur?",
    a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. De studio is volledig priv\u00e9 tijdens je huurtijd.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
  },
  {
    q: "Hoe werkt de boeking?",
    a: "Je boekt online via ons boekingssysteem. De avond voor je sessie ontvang je een deurcode via WhatsApp waarmee je de studio kunt betreden.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, je kunt een gratis proefsessie boeken om de studio te bekijken en uit te proberen. Geen verplichtingen.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function StudioRentalPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Studio Huren","url":"/nl/studio-huren"}]} />
      <ServiceJsonLd
        name="Studio Verhuur — Personal Trainer Amsterdam"
        description="Huur een privé trainingsruimte in Amsterdam Jordaan voor freelance personal trainers en fysiotherapeuten. Professionele apparatuur, flexibel per uur, geen commissie."
        url="/nl/studio-huren"
        priceRange="Vanaf €12 per uur"
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* Hero */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
          as="h1"
              overline="Studio Verhuur"
              title="Studio huren voor personal trainers in Amsterdam"
              description="Train je klanten op jouw manier in een privé studio in de Jordaan. Betaal per sessie of bespaar 10-23% met een kortingspakket. Geen abonnement. Geen commissie."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek een gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#tarieven" variant="outline" size="lg">
                Bekijk tarieven
              </ButtonLink>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/facade-sculptclub.jpg"
                alt="Gevel van SculptClub Private Gym aan Egelantiersgracht 424 Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Pricing table */}
      <Section bg="muted" id="tarieven">
        <SectionHeader
          overline="Tarieven"
          title="Uurtarieven"
          description="Flexibel per sessie, geen abonnement verplicht."
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Ruimte</th>
                    <th className="px-4 py-3 text-center font-medium">60 min</th>
                    <th className="px-4 py-3 text-center font-medium">90 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Halve studio (1:1)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;12</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio60}
                        size="default"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio90}
                        size="default"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio60}
                        size="default"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;24</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio90}
                        size="default"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Betaal met CreditCard, Apple Pay, Google Pay of per factuur</span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Discount packages */}
      <Section>
        <SectionHeader
          overline="Voordeelpakketten"
          title="Meer Trainen, Meer Besparen"
          description="Koop een strippenkaart en bespaar op elke sessie. Pakketten zijn 1 jaar geldig."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Starter */}
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;99</span>
                </p>
                <p className="text-3xl font-bold">&euro;89</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 10%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.starter}
                  size="lg"
                  className="mt-4"
                >
                  Koop Starter
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Routine */}
          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;234</span>
                </p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 15%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.routine}
                  size="lg"
                  className="mt-4"
                >
                  Koop Routine
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Pro */}
          <FadeIn delay={0.2}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;436</span>
                </p>
                <p className="text-3xl font-bold">&euro;349</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 20%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.pro}
                  size="lg"
                  className="mt-4"
                >
                  Koop Pro
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Volume */}
          <FadeIn delay={0.3}>
            <Card className="h-full text-center">
              <CardHeader>
                <Badge className="mx-auto mb-2" variant="secondary">Beste deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;713</span>
                </p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 23%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.volume}
                  size="lg"
                  className="mt-4"
                >
                  Koop Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Geldig 1 jaar. Laagste effectieve tarief:{" "}
            <span className="sc-discount">&euro;9,24/sessie</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Liever per bankoverschrijving?{" "}
            <a
              href={whatsappLinks.bankTransferNl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Stuur ons een WhatsApp
            </a>
          </p>
        </FadeIn>
      </Section>

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Waarom SculptClub"
          title="Alles Wat Je Nodig Hebt"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* For freelance trainers */}
      <Section>
        <SectionHeader
          overline="Voor ZZP-trainers & fysiotherapeuten"
          title="Jouw eigen studio, per uur"
          description="Geen vaste huurkosten, geen commissie op je omzet. Huur alleen wanneer je een sessie hebt."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Wat je meeneemt</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Geldige beroepsaansprakelijkheidsverzekering (BA)",
                  "Jouw eigen klanten en tarieven",
                  "Kennis en expertise als trainer of fysiotherapeut",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Wat wij bieden</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Volledig uitgeruste privé studio voor 1:1 en small group",
                  "Geen commissie — jij houdt 100% van je sessietarief",
                  "Flexibel boeken: alleen wanneer jij een klant hebt",
                  "Deurcode per WhatsApp de avond van tevoren",
                  "Professionele apparatuur: squat rack, kabelmachine, dumbbells 4-40 kg, Echo Bike en meer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Gallery */}
      <Section bg="muted">
        <SectionHeader overline="De studio" title="Bekijk de Ruimte" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Veelgestelde vragen" title="Studio Huren FAQ" />

        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      {/* Related articles */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Meer lezen over studio huur</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Studio huren als personal trainer in Amsterdam</p>
              </a>
              <a href="/nl/blog/gym-huren-per-uur-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym huren per uur Amsterdam: flexibele trainingsruimte</p>
              </a>
              <a href="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Trainingsruimte huren als ZZP personal trainer</p>
              </a>
              <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Fysiotherapie studio huren in Amsterdam</p>
              </a>
              <a href="/nl/word-trainer" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Voor trainers</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Word trainer bij SculptClub — 0% commissie</p>
              </a>
              <a href="/nl/blog/personal-trainer-worden-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Personal trainer worden in Amsterdam</p>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om je klanten hier te trainen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Probeer de studio gratis uit met een proefsessie. Geen
              verplichtingen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek een gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
