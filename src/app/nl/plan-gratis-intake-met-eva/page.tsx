import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Ueva",
  description: "Boek een gratis kennismakingsgesprek met Ueva bij SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-eva", languages: { nl: "/nl/plan-gratis-intake-met-eva", en: "/en/plan-free-intro-with-eva" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="eva" locale="nl" />;
}
