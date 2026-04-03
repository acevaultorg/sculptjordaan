import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Jearmey",
  description: "Gratis intake met Jearmey — specialist in kracht, afvallen en atletische prestaties bij SculptClub Amsterdam Jordaan. Geen verplichtingen.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-jearmey", languages: { nl: "/nl/plan-gratis-intake-met-jearmey", en: "/en/plan-free-intro-with-jearmey" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="jearmey" locale="nl" />;
}
