import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Joey",
  description: "Gratis intake met Joey — The Ascend Method: kracht, ademwerk en zelfonderzoek bij SculptClub Amsterdam Jordaan. Voor high-performers die vastzitten of burn-out ervaren.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-joey", languages: { nl: "/nl/plan-gratis-intake-met-joey", en: "/en/plan-free-intro-with-joey" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="joey" locale="nl" />;
}
