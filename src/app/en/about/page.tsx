import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  Eye,
  Handshake,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: { absolute: "About Us — SculptClub Amsterdam Jordaan" },
  description:
    "SculptClub is a boutique personal training studio on the Egelantiersgracht in Amsterdam Jordaan. Private training, Open Gym and studio rental.",
  alternates: {
    canonical: "/en/about",
    languages: {
      nl: "/nl/over-ons",
      en: "/en/about",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/about",
    title: "About Us — SculptClub Amsterdam Jordaan",
    description:
      "SculptClub is a boutique personal training studio on the Egelantiersgracht in Amsterdam Jordaan. Private training, Open Gym and studio rental.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — SculptClub Amsterdam Jordaan",
    description:
      "SculptClub is a boutique personal training studio on the Egelantiersgracht in Amsterdam Jordaan. Private training, Open Gym and studio rental.",
  },
};

// href + linkLabel added (task mta5j62vzskwd7, 2026-08-26) — EN mirror of
// the same fix on /nl/over-ons. See that file for the full rationale.
const pillars = [
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Independent trainers with their own specialisations and rates. The intro is always free and you pay your trainer directly.",
    href: "/en/find-personal-trainer",
    linkLabel: "Find a personal trainer",
  },
  {
    icon: Dumbbell,
    title: "Open Gym",
    description:
      "Train independently in a private studio with professional equipment. Book your session, receive a door code and train on your time.",
    href: "/en/open-gym",
    linkLabel: "Open Gym Amsterdam Jordaan",
  },
  {
    icon: Building2,
    title: "Studio Rental",
    description:
      "For freelance trainers and physiotherapists: rent our fully equipped studio for your own clients. Flexible per hour or via packages.",
    href: "/en/studio-rental",
    linkLabel: "Studio rental Amsterdam",
  },
];

const uniqueFeatures = [
  {
    icon: Lock,
    title: "Private",
    description: "Open Gym never has more than 4 people at once.",
  },
  {
    icon: MapPin,
    title: "Canal-side",
    description:
      "Egelantiersgracht 424, in the middle of the Jordaan.",
  },
  {
    icon: KeyRound,
    title: "Door code access",
    description:
      "There's no reception desk. At midnight before your session you get a door code via WhatsApp.",
  },
  {
    icon: Clock,
    title: "06:00 \u2013 22:00 daily",
    description:
      "Every day of the week, weekends included.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible",
    description:
      "You book per session or per 4 weeks, with no contract. Cancelling is always free.",
  },
  {
    icon: UserCheck,
    title: "Group size",
    description:
      "Rent the whole studio and it's only you and your group, from 1 to 8 people.",
  },
  // M (2026-06-02) — EN parallel: the 2 positioning principles (Transparent +
  // Trainer-first) the facility grid lacked.
  {
    icon: Eye,
    title: "Transparent",
    description:
      "Every price is on the site. You never have to call for a quote.",
  },
  {
    icon: Handshake,
    title: "Trainer-first",
    description:
      "Our trainers keep 100% of their rate. We just rent the space.",
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
          title="A small studio on the Egelantiersgracht"
          description="A private training studio in the Jordaan, open since 2025. With a trainer, on your own, or as a trainer renting the space."
        />
      </Section>

      {/* Story + Photo */}
      <Section bg="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/entrance-smile.jpg"
                alt="Warm welcome at SculptClub Amsterdam Jordaan — our studio on the canal in the Jordaan"
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
                SculptClub started in 2025 out of annoyance with packed gyms and
                long contracts. Here you train without a membership and without
                the crowd.
              </p>
              <p>
                The studio is small: Open Gym never has more than 4 people at
                once. You book online and get in with a door code sent via
                WhatsApp.
              </p>
              <p>
                You can train here with a personal trainer or on your own through
                Open Gym. If you are a trainer or physio yourself, you rent the
                space by the hour for your own clients.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section>
        <SectionHeader
          overline="What we offer"
          title="What you can do here"
          description="There are three ways to train here."
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
                <Link
                  href={pillar.href}
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
                  {pillar.linkLabel} &rarr;
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What makes us unique */}
      <Section bg="muted">
        <SectionHeader
          overline="Practical"
          title="How it works here"
          description="What to know before your first visit."
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
              Open daily from 06:00 to 22:00. After booking you get a door code.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Come and see the studio
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Book a free intro or reach out via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={"/en/find-personal-trainer"}
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
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
