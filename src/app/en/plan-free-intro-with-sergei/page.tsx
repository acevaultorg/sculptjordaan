import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book a free intro with Sergei";
const description = "Free intro with Sergei — certified personal trainer with 10+ years of experience. Body recomposition, posture correction, strength & recovery at SculptClub Amsterdam Jordaan.";
const canonical = "/en/plan-free-intro-with-sergei";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-sergei", en: "/en/plan-free-intro-with-sergei" } },
  ...trainerIntakeOg("sergei", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="sergei" locale="en" />;
}
