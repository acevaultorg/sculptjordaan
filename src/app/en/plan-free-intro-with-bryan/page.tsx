import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Bryan";
const description = "Free intro with Bryan — calisthenics specialist at SculptClub Amsterdam Jordaan. From push-ups to muscle-up and handstand. No commitment.";
const canonical = "/en/plan-free-intro-with-bryan";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: see /nl/plan-gratis-intake-met-bryan rationale (doorway-pattern risk
  // on 9 templated trainer-intake pages). Page stays live for booking flow.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-bryan", en: "/en/plan-free-intro-with-bryan" } },
  ...trainerIntakeOg("bryan", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="bryan" locale="en" />;
}
