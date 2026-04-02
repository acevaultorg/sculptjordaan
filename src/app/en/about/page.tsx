import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  Users,
  Dumbbell,
  Building2,
  Lock,
  MapPin,
  CalendarCheck,
  KeyRound,
  Clock,
  UserCheck,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "About Us — SculptClub Amsterdam Jordaan",
  description:
    "SculptClub is a boutique personal training studio on the Egelantiersgracht in Amsterdam Jordaan. Private training, Open Gym and studio rental. Founded in 2025.",
  alternates: {
    canonical: "/en/about",
    languages: {
      nl: "/nl/over-ons",
      en: "/en/about",
    },
  },
};

const pillars = [
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Independent trainers with their own specialisations and rates. The intro is always free and we charge 0% commission.",
  },
  {
    icon: Dumbbell,
    title: "Open Gym",
    description:
      "Train independently in a private studio with professional equipment. Book your session, receive a door code and train on your time.",
  },
  {
    icon: Building2,
    title: "Studio Rental",
    description:
      "For freelance trainers and physiotherapists: rent our fully equipped studio for your own clients. Flexible per hour or via packages.",
  },
];

const uniqueFeatures = [
  {
    icon: Lock,
    title: "Private",
    description: "Maximum 3 people during Open Gym. No crowds, no waiting.",
  },
  {
    icon: MapPin,
    title: "Canal-side",
    description:
      "Located on the Egelantiersgracht in the heart of the Jordaan.",
  },
  {
    icon: KeyRound,
    title: "Door code access",
    description:
      "No reception desk. After booking you receive a door code and train at your convenience.",
  },
  {
    icon: Clock,
    title: "06:30 \u2013 22:00 daily",
    description:
      "Open 7 days a week. Early birds and night owls, everyone is welcome.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible",
    description:
      "No membership, no contracts. Book per session, cancel anytime for free.",
  },
  {
    icon: UserCheck,
    title: "Tailored capacity",
    description:
      "During Open Gym we limit the space to three people. With a full studio rental the space fits up to six people plus your trainer.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"About","url":"/en/about"}]} />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="About SculptClub"
          title="Where disciplined ambition meets refined transformation"
          description="SculptClub is a boutique personal training studio in the heart of Amsterdam\u2019s Jordaan. Founded in 2025 with a simple mission: to provide the best private training space in Amsterdam."
        />
      </Section>

      {/* Story + Photo */}
      <Section bg="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/studio-interior-1.jpeg"
                alt="SculptClub studio interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SculptClub was born out of frustration with overcrowded gyms and
                long-term contracts. We believe training should be personal
                &mdash; without crowds, without obligations, without compromises.
              </p>
              <p>
                Our studio on the Egelantiersgracht offers an intimate training
                space where a maximum of 3 people are welcome at a time. With
                professional equipment, flexible bookings and door code access,
                you can train on your own terms.
              </p>
              <p>
                Whether you train with a personal trainer, come for an
                independent Open Gym session, or rent our studio as a freelance
                trainer for your own clients &mdash; at SculptClub it&apos;s all about
                quality over quantity.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section>
        <SectionHeader
          overline="What we offer"
          title="Three pillars"
          description="Personal Training, Open Gym and Studio Rental — all under one roof."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What makes us unique */}
      <Section bg="muted">
        <SectionHeader
          overline="Our values"
          title="What makes us unique"
          description="No membership. No crowds. No contracts."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFeatures.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-3">Location</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              On the Egelantiersgracht
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Open {siteConfig.hours.toLowerCase()}. Door code access after booking.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Come and experience it yourself
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Book a free intro or reach out via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                size="lg"
              >
                Book Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
