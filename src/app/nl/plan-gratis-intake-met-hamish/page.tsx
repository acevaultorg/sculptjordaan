import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Hamish",
  description: "Gratis intake met Hamish — fysiotherapeut BSc, specialist in revalidatie en kracht bij SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-hamish", languages: { nl: "/nl/plan-gratis-intake-met-hamish", en: "/en/plan-free-intro-with-hamish" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="hamish" locale="nl" />;
}
