import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Ualex",
  description: "Boek een gratis kennismakingsgesprek met Ualex bij SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-alex", languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="nl" />;
}
