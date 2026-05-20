import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book a free intro with Joey";
const description = "Free intro with Joey — The Ascend Method: strength, breathwork and self-inquiry at SculptClub Amsterdam Jordaan. For high-performers feeling stuck or burned out.";
const canonical = "/en/plan-free-intro-with-joey";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-joey", en: "/en/plan-free-intro-with-joey" } },
  ...trainerIntakeOg("joey", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="joey" locale="en" />;
}
