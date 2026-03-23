import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Dumbbell,
  Shirt,
  Droplets,
  Footprints,
} from "lucide-react";

export const metadata: Metadata = {
  title: "First Visit — SculptClub Amsterdam Jordaan",
  description:
    "Everything you need to know for your first visit to SculptClub. Book your session, come to the studio and start training.",
  alternates: {
    canonical: "/en/first-visit",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Book your session",
    description:
      "Schedule your first session via our online booking system or send us a message via WhatsApp. Choose a time slot that suits you and you'll receive a confirmation email right away.",
    cta: {
      label: "Book now",
      href: acuityLinks.generic,
      external: true,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Come to the studio",
    description:
      "Our studio is located at Egelantiersgracht 424 in Amsterdam Jordaan. After booking you'll receive a door code by email to let yourself in.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Start training",
    description:
      "Your trainer will be ready, or you train independently via Open Gym. All equipment is available and the studio is fully private during your session.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportswear" },
  { icon: Droplets, label: "Towel & water bottle" },
  { icon: Footprints, label: "Indoor sports shoes" },
];

export default function FirstVisitPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="First visit"
          title="Your first time at SculptClub"
          description="In 3 simple steps you're ready to train. No sign-up forms, no obligations."
        />
      </Section>

      {/* Steps */}
      <Section bg="muted">
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-brand" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4">
                      <ButtonLink
                        href={step.cta.href}
                        external={step.cta.external}
                        variant="outline"
                        className="rounded-xl"
                      >
                        {step.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What to Bring */}
      <Section>
        <SectionHeader
          overline="Preparation"
          title="What to bring"
          description="You don't need much. Here's everything you need:"
        />
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {bringItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            A changing area is available in the studio.
          </p>
        </FadeIn>
      </Section>

      {/* Location */}
      <Section bg="muted">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-3">Location</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Where to find us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-1">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Open {siteConfig.hours.toLowerCase()}
            </p>
            <a
              href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
            >
              View on Google Maps
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Book your first session
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Ready to start? Schedule your first session or reach out via
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book your first session
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-background/20 text-background hover:bg-background/10"
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
