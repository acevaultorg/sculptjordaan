import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Andrea",
  description: "Gratis intake met Andrea — specialist in houding, techniek en kracht bij SculptClub Amsterdam Jordaan. Vanaf €45/sessie.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-andrea", languages: { nl: "/nl/plan-gratis-intake-met-andrea", en: "/en/plan-free-intro-with-andrea" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="andrea" locale="nl" />;
}
