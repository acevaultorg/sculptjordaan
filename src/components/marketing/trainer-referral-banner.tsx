import { Section, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    badge: "Voor huidige trainers",
    title: "Ken je een trainer die ruimte zoekt?",
    body: "Stuur ze naar SculptClub. Boekt je collega 5+ studio-uren? Dan krijg je 1 uur huur cadeau. Geen limiet — verwijs zoveel collega's als je wilt.",
    cta: "WhatsApp ons hun naam: +31 6 15 14 79 52. Goede trainers herkennen goede trainers.",
  },
  en: {
    badge: "For current trainers",
    title: "Know a trainer looking for a studio?",
    body: "Send them to SculptClub. When your colleague books 5+ rental hours, you get 1 hour free. No cap — refer as many trainers as you want.",
    cta: "WhatsApp us their name: +31 6 15 14 79 52. Good trainers recognize good trainers.",
  },
} as const;

export function TrainerReferralBanner({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Section>
      <FadeIn>
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex flex-col gap-3 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Gift className="h-6 w-6 text-primary" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {c.badge}
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-tight md:text-2xl">
              {c.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {c.body}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {c.cta}
            </p>
          </CardContent>
        </Card>
      </FadeIn>
    </Section>
  );
}
