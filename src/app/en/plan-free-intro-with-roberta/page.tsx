import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free discovery call with Roberta";
const description = "Free discovery call with Roberta — Italian ACE® certified personal trainer at SculptClub Amsterdam Jordaan. Strength, posture & mobility, weight loss. No commitment.";
const canonical = "/en/plan-free-intro-with-roberta";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-roberta", en: "/en/plan-free-intro-with-roberta" } },
  ...trainerIntakeOg("roberta", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="roberta" locale="en" />;
}
