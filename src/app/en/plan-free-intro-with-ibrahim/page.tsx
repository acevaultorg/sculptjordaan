import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Ibrahim";
const description = "Free intro with Ibrahim — nutrition, weight loss and rehabilitation at SculptClub Amsterdam Jordaan. Practical plans that fit your lifestyle. No obligation.";
const canonical = "/en/plan-free-intro-with-ibrahim";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: per-trainer conversion-funnel route. Same rationale as the NL
  // parallel — avoids the templated-trainer-intake doorway pattern.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-ibrahim", en: "/en/plan-free-intro-with-ibrahim" } },
  ...trainerIntakeOg("ibrahim", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="ibrahim" locale="en" />;
}
