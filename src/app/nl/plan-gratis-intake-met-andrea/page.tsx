import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Uandrea",
  description: "Boek een gratis kennismakingsgesprek met Uandrea bij SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-andrea", languages: { nl: "/nl/plan-gratis-intake-met-andrea", en: "/en/plan-free-intro-with-andrea" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="andrea" locale="nl" />;
}
