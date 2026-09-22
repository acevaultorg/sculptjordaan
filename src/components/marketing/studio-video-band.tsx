import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { LandingVideo } from "@/components/marketing/landing-video";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    overline: "Zo ziet het eruit",
    title: "Train in onze privé studio in de Jordaan",
    label: "Mensen trainen in de privé studio van SculptClub in Amsterdam Jordaan",
  },
  en: {
    overline: "See it in action",
    title: "Train in our private studio in the Jordaan",
    label: "People training in SculptClub's private studio in Amsterdam Jordaan",
  },
} as const;

/**
 * Homepage studio b-roll band — caption-free training footage in the actual studio,
 * placed before the booking CTA (see it → act). Reuses the lazy <LandingVideo>
 * (zero LCP impact). Consumer-appropriate; the trainer-recruitment promo lives on
 * the studio-rental page instead.
 */
export function StudioVideoBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Section bg="muted">
      <SectionHeader overline={c.overline} title={c.title} />
      <FadeIn>
        <LandingVideo
          src="/videos/studio-training.mp4"
          poster="/videos/_rs/studio-training-poster-full.webp"
          label={c.label}
        />
      </FadeIn>
    </Section>
  );
}
