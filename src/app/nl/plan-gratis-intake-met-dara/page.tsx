import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Dara",
  description: "Boek een gratis kennismakingsgesprek met Dara bij SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-dara", languages: { nl: "/nl/plan-gratis-intake-met-dara", en: "/en/plan-free-intro-with-dara" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="dara" locale="nl" />;
}
