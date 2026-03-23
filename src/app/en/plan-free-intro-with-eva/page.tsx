import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Ueva",
  description: "Book a free introductory session with Ueva at SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/en/plan-free-intro-with-eva", languages: { nl: "/nl/plan-gratis-intake-met-eva", en: "/en/plan-free-intro-with-eva" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="eva" locale="en" />;
}
