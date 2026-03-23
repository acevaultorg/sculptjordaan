import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Alex",
  description: "Book a free introductory session with Alex at SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/en/plan-free-intro-with-alex", languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="en" />;
}
