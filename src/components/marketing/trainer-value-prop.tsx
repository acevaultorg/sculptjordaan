import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Users, Search, Share2, TrendingUp, ArrowRight } from "lucide-react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    overline: "Meer dan een ruimte",
    title: "Huur de studio. Bouw je praktijk.",
    description:
      "Andere studio's verhuren je een ruimte. Wij helpen je daarnaast aan klanten. Profileer je in onze trainersgids, krijg gematcht met klanten die SculptClub zelf vinden, en deel onze socialmediabereik.",
    items: [
      {
        icon: Users,
        title: "Profiel in onze trainersgids",
        text: "Klanten die SculptClub vinden zien jouw profiel op /vind-jouw-personal-trainer. Geen extra kosten.",
      },
      {
        icon: Search,
        title: "Klanten via SEO",
        text: "10 Nederlandse domeinen sturen 'personal trainer Amsterdam'-zoekers naar de studio. Als huurder profiteer je mee.",
      },
      {
        icon: Share2,
        title: "Social bereik",
        text: "Trainers die hier werken krijgen vermelding op @sculptclubjordaan (Share2 + TikTok). Geen pay-to-promote.",
      },
      {
        icon: TrendingUp,
        title: "Bewezen funnel",
        text: "Bezoekers komen, boeken via Acuity, blijven. Jij behoudt 100% van je tarief; wij verdienen alleen aan de huur.",
      },
    ],
    ctaLabel: "Word SculptClub-trainer",
    ctaHref: "/nl/word-trainer",
    secondaryLabel: "Alleen ruimte huren",
    secondaryHref: "#tarieven",
  },
  en: {
    overline: "More than a room",
    title: "Rent the studio. Grow your practice.",
    description:
      "Other studios rent you a room. We also help you grow your client base. Get featured in our trainer directory, get matched with clients who find SculptClub directly, and share in our social reach.",
    items: [
      {
        icon: Users,
        title: "Profile in our trainer directory",
        text: "Clients who find SculptClub see your profile on /en/find-personal-trainer. No extra cost.",
      },
      {
        icon: Search,
        title: "Clients via SEO",
        text: "10 Dutch domains funnel 'personal trainer Amsterdam' searchers to the studio. Renters benefit from the inbound traffic.",
      },
      {
        icon: Share2,
        title: "Social reach",
        text: "Trainers working here get mentioned on @sculptclubjordaan (Share2 + TikTok). No pay-to-promote.",
      },
      {
        icon: TrendingUp,
        title: "Proven funnel",
        text: "Visitors arrive, book through Acuity, return. You keep 100% of your rate; we earn only on rental.",
      },
    ],
    ctaLabel: "Join as a trainer",
    ctaHref: "/en/become-trainer",
    secondaryLabel: "Just rent the space",
    secondaryHref: "#pricing",
  },
} as const;

export function TrainerValueProp({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Section>
      <SectionHeader
        overline={c.overline}
        title={c.title}
        description={c.description}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {c.items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={idx * 0.05}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3 p-6">
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn delay={0.25}>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonLink
            href={c.ctaHref}
            size="lg"
            className="plausible-event-name=value_prop_member_click"
          >
            {c.ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href={c.secondaryHref}
            variant="outline"
            size="lg"
            className="plausible-event-name=value_prop_rental_click"
          >
            {c.secondaryLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </FadeIn>
    </Section>
  );
}
