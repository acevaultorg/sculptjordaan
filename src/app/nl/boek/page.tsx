import { Users, Dumbbell, Building2, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boek een sessie",
  description: "Plan direct je sessie bij SculptClub. Personal training, Open Gym of studio huur in Amsterdam Jordaan.",
  alternates: { canonical: "/nl/boek", languages: { nl: "/nl/boek", en: "/en/book" } },
};

const bookingOptions = [
  {
    icon: Users,
    title: "Personal Training",
    description: "Boek een sessie met een van onze expert trainers. Gratis intake beschikbaar.",
    href: acuityLinks.generic,
    cta: "Boek Personal Training",
  },
  {
    icon: Dumbbell,
    title: "Open Gym Sessie",
    description: "Reserveer je privé trainingsslot in onze volledig uitgeruste studio.",
    href: acuityLinks.openGymBook,
    cta: "Boek Open Gym",
  },
  {
    icon: Building2,
    title: "Studio Huren",
    description: "Huur de studio voor je eigen klanten. Flexibel per uur of met kortingspakket.",
    href: acuityLinks.generic,
    cta: "Huur de Studio",
  },
];

export default function BookPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Reserveren"
          title="Boek een sessie"
          description="Kies je sessie, selecteer een tijd en je bent klaar. Heb je vragen? WhatsApp ons."
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
                  external
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
              WhatsApp ons
            </ButtonLink>
            <p className="text-sm text-muted-foreground">
              Heb je vragen? We reageren meestal binnen 1 uur.
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
