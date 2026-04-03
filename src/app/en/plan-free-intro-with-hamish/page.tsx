import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Hamish",
  description: "Book a free intro with Hamish — physiotherapist BSc specialising in rehabilitation and strength at SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/en/plan-free-intro-with-hamish", languages: { nl: "/nl/plan-gratis-intake-met-hamish", en: "/en/plan-free-intro-with-hamish" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="hamish" locale="en" />;
}
