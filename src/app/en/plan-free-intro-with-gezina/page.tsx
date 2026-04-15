import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Gezina",
  description: "Book a free intro with Gezina — certified personal trainer specializing in women's training, strength and performance at SculptClub Amsterdam Jordaan. No commitment.",
  alternates: { canonical: "/en/plan-free-intro-with-gezina", languages: { nl: "/nl/plan-gratis-intake-met-gezina", en: "/en/plan-free-intro-with-gezina" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="gezina" locale="en" />;
}
