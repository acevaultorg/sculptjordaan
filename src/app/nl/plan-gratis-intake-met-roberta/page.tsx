import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Roberta — Italiaanse personal trainer Amsterdam";
const description = "Gratis kennismakingsgesprek met Roberta — Italiaanse ACE®-gecertificeerde personal trainer bij SculptClub Amsterdam Jordaan. Kracht, houding & mobiliteit, afvallen. Vrijblijvend.";
const canonical = "/nl/plan-gratis-intake-met-roberta";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-roberta", en: "/en/plan-free-intro-with-roberta" } },
  ...trainerIntakeOg("roberta", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="roberta" locale="nl" />;
}
