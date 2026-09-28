import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Users, Search, Share2, TrendingUp, ArrowRight } from "lucide-react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    overline: "Meer dan een ruimte",
    title: "We sturen ook klanten jouw kant op",
    description:
      "Je krijgt een profiel in onze trainersgids. Wie SculptClub via Google of Instagram vindt, kan jou daar direct kiezen.",
    items: [
      {
        icon: Users,
        title: "Profiel in onze trainersgids",
        text: "Klanten die SculptClub vinden zien jouw profiel op /vind-jouw-personal-trainer. Geen extra kosten.",
      },
      {
        icon: Search,
        title: "Klanten via SEO",
        text: "10 Nederlandse domeinen sturen mensen die 'personal trainer Amsterdam' zoeken naar de studio.",
      },
      {
        icon: Share2,
        title: "Social bereik",
        text: "Trainers die hier werken noemen we op Instagram en TikTok (@sculptclubjordaan). Daar betaal je niets voor.",
      },
      {
        icon: TrendingUp,
        title: "Geen commissie",
        text: "Jij houdt 100% van je tarief. Wij verdienen alleen aan de huur.",
      },
    ],
    ctaLabel: "Word SculptClub-trainer",
    ctaHref: "/nl/word-trainer",
    secondaryLabel: "Alleen ruimte huren",
    secondaryHref: "#tarieven",
  },
  en: {
    overline: "More than a room",
    title: "We also send clients your way",
    description:
      "You get a profile in our trainer directory. People who find SculptClub on Google or Instagram can pick you there directly.",
    items: [
      {
        icon: Users,
        title: "Profile in our trainer directory",
        text: "Clients who find SculptClub see your profile on /en/find-personal-trainer. No extra cost.",
      },
      {
        icon: Search,
        title: "Clients via SEO",
        text: "10 Dutch domains send people searching 'personal trainer Amsterdam' to the studio.",
      },
      {
        icon: Share2,
        title: "Social reach",
        text: "We mention trainers who work here on Instagram and TikTok (@sculptclubjordaan). You don't pay for it.",
      },
      {
        icon: TrendingUp,
        title: "No commission",
        text: "You keep 100% of your rate. We only earn from the rent.",
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
