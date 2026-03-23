import { Users, Dumbbell, Building2, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { whatsappLinks } from "@/config/acuity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book your session at SculptClub. Personal training, Open Gym or studio rental in Amsterdam Jordaan.",
  alternates: { canonical: "/en/book", languages: { nl: "/nl/boek", en: "/en/book" } },
};

const bookingOptions = [
  {
    icon: Users,
    title: "Personal Training",
    description: "Book a session with one of our expert trainers. Free intro available.",
    href: "/en/find-personal-trainer",
    cta: "Find your Trainer",
    external: false,
  },
  {
    icon: Dumbbell,
    title: "Open Gym Session",
    description: "Reserve your private training slot in our fully equipped studio.",
    href: "/en/open-gym",
    cta: "Train Solo",
    external: false,
  },
  {
    icon: Building2,
    title: "Studio Rental",
    description: "Rent the studio for your own clients. Flexible per hour or with discount packages.",
    href: "/en/studio-rental",
    cta: "Rent the Studio",
    external: false,
  },
];

export default function BookPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Schedule"
          title="Book a session"
          description="Pick your session, select a time and you're set. Questions? WhatsApp us."
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {bookingOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-border/50 bg-card p-6 flex flex-col gap-4 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <option.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold">{option.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {option.description}
                </p>
                <ButtonLink
                  href={option.href}
                  external={option.external}
                  className="w-full bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl text-sm font-semibold transition-all"
                >
                  {option.cta}
                </ButtonLink>
              </div>
            ))}
          </div>

          {/* WhatsApp contact */}
          <div className="mt-10 text-center space-y-3">
            <ButtonLink
              href={whatsappLinks.generic}
              external
              variant="outline"
              size="lg"
              className="rounded-xl px-8 py-5 text-base font-semibold"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp us
            </ButtonLink>
            <p className="text-sm text-muted-foreground">
              Questions? We usually respond within 1 hour.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
