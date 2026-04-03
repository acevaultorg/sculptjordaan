import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Alex",
  description: "Gratis intake met Alex — specialist in kracht, calisthenics en hersteltraining bij SculptClub Amsterdam Jordaan. Geen verplichtingen.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-alex", languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="nl" />;
}
