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
  title: "Studio Rental for Personal Trainers Amsterdam | SculptClub Jordaan",
  description:
    "Rent a private training studio in Amsterdam Jordaan. For freelance PTs & physiotherapists. From €12/hour, no commission.",
  alternates: {
    canonical: "/en/studio-rental",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professional equipment",
    description:
      "Power rack, cable machine, dumbbells and everything you need.",
  },
  {
    icon: Lock,
    title: "Private space",
    description: "No onlookers. Just you and your client(s).",
  },
  {
    icon: Clock,
    title: "Flexible by the hour",
    description: "Book when it suits you. No fixed schedules.",
  },
  {
    icon: Ban,
    title: "No commission",
    description: "You set your own rates. We only charge rent.",
  },
];

const galleryImages = [
  { src: "/images/studio/turf-lane-canal.jpg", alt: "Turf lane with SCULPT wall logo and canal view at SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Back room with sled, Rogue rack and bench under skylight at SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack with plants and vinyl player at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "View from SculptClub to Egelantiersgracht canal Amsterdam" },
];

const faqs = [
  {
    q: "How much does it cost to rent the studio?",
    a: "Half studio (1:1) from \u20ac12 per 60 minutes. Full studio (max 6 people) from \u20ac17 per 60 minutes. Save 10-23% with a discount package.",
  },
  {
    q: "What discount packages are available?",
    a: "Starter \u20ac89 (10% off), Routine \u20ac199 (15% off) and Volume \u20ac549 (23% off). Packages are valid for 1 year.",
  },
  {
    q: "What is included with studio rental?",
    a: "All equipment, wifi, music, climate control and cleaning. The studio is fully private during your rental time.",
  },
  {
    q: "Do I need insurance?",
    a: "Yes, as a freelance trainer or physiotherapist you need valid professional liability insurance. This is your own responsibility.",
  },
  {
    q: "How does booking work?",
    a: "You book online via our booking system. The night before your session you receive a door code via WhatsApp to enter the studio.",
  },
  {
    q: "Can I try the studio first?",
    a: "Yes, you can book a free trial session to see and try the studio. No obligations.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function StudioRentalPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Studio Rental","url":"/en/studio-rental"}]} />
      <ServiceJsonLd
        name="Studio Rental — Personal Trainer Amsterdam"
        description="Rent a private training studio in Amsterdam Jordaan for freelance personal trainers and physiotherapists. Professional equipment, flexible by the hour, no commission."
        url="/en/studio-rental"
        priceRange="From €12 per hour"
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* Hero */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
          as="h1"
              overline="Studio Rental"
              title="Studio rental for personal trainers in Amsterdam"
              description="Train your clients your way in a private studio in the Jordaan. Pay per session or save 10-23% with a discount package. No subscription. No commission."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Book a free trial session
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#pricing" variant="outline" size="lg">
                View rates
              </ButtonLink>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/facade-sculptclub.jpg"
                alt="SculptClub Private Gym facade at Egelantiersgracht 424 Amsterdam"
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
      <Section bg="muted" id="pricing">
        <SectionHeader
          overline="Pricing"
          title="Hourly Rates"
          description="Flexible per session, no subscription required."
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Space</th>
                    <th className="px-4 py-3 text-center font-medium">60 min</th>
                    <th className="px-4 py-3 text-center font-medium">90 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Half studio (1:1)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;12</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio60}
                        size="default"
                        className="ml-3"
                      >
                        Book
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio90}
                        size="default"
                        className="ml-3"
                      >
                        Book
                      </ButtonLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full studio (max 6)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio60}
                        size="default"
                        className="ml-3"
                      >
                        Book
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;24</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio90}
                        size="default"
                        className="ml-3"
                      >
                        Book
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
              <span>Pay with CreditCard, Apple Pay, Google Pay or by invoice</span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Discount packages */}
      <Section>
        <SectionHeader
          overline="Discount Packages"
          title="Train More, Save More"
          description="Buy a credit package and save on every session. Packages are valid for 1 year."
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
                  <span className="sc-discount">Save 10%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.starter}
                  size="lg"
                  className="mt-4"
                >
                  Buy Starter
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Routine */}
          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Most popular</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;234</span>
                </p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 15%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.routine}
                  size="lg"
                  className="mt-4"
                >
                  Buy Routine
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
                  <span className="sc-discount">Save 20%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.pro}
                  size="lg"
                  className="mt-4"
                >
                  Buy Pro
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Volume */}
          <FadeIn delay={0.3}>
            <Card className="h-full text-center">
              <CardHeader>
                <Badge className="mx-auto mb-2" variant="secondary">Best deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;713</span>
                </p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 23%</span>
                </p>
                <ButtonLink
                  href={acuityPackages.studio.volume}
                  size="lg"
                  className="mt-4"
                >
                  Buy Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Valid for 1 year. Lowest effective rate:{" "}
            <span className="sc-discount">&euro;9.24/session</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Prefer bank transfer?{" "}
            <a
              href={whatsappLinks.bankTransferEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Send us a WhatsApp
            </a>
          </p>
        </FadeIn>
      </Section>

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="Everything You Need"
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
          overline="For freelance trainers & physiotherapists"
          title="Your own studio, by the hour"
          description="No fixed rental costs, no commission on your revenue. Rent only when you have a session."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">What you bring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Valid professional liability insurance",
                  "Your own clients and rates",
                  "Your knowledge and expertise as a trainer or physiotherapist",
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
              <h3 className="font-bold text-lg">What we provide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Fully equipped private studio for 1:1 and small group",
                  "Zero commission — you keep 100% of your session rate",
                  "Flexible booking: only when you have a client",
                  "Door code via WhatsApp the evening before",
                  "Professional equipment: squat rack, cable machine, dumbbells 4–40 kg, Echo Bike and more",
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
        <SectionHeader overline="The studio" title="See the Space" />
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
        <SectionHeader overline="Frequently asked questions" title="Studio Rental FAQ" />

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
            <h2 className="text-2xl font-bold mb-6">Read more about studio rental</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Studio rental for personal trainers in Amsterdam</p>
              </a>
              <a href="/en/blog/gym-rental-per-hour-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym rental per hour Amsterdam: flexible training space</p>
              </a>
              <a href="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Rent training space as a freelance personal trainer</p>
              </a>
              <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Physiotherapy studio rental in Amsterdam</p>
              </a>
              <a href="/en/become-trainer" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">For trainers</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Become a trainer at SculptClub — 0% commission</p>
              </a>
              <a href="/en/blog/become-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Become a personal trainer in Amsterdam</p>
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
              Ready to train your clients here?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Try the studio for free with a trial session. No obligations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Book a free trial session
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioEn}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
