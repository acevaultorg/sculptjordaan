import type { Metadata } from "next";
import { SplitLanding, type SplitLandingCopy } from "@/components/marketing/split-landing";
import { openGymSinglePrice, studioRentalFromPrice } from "@/config/acuity";

/**
 * /en/landing — English twin of /landing (campaign split page). Same rules:
 * noindex,follow and a self-canonical.
 */

const title = "SculptClub: rent the studio or train in the Jordaan";
const description =
  "Personal trainer? Rent the private studio by the hour. Want to train? Find your trainer, class or open gym. Jordaan, Amsterdam.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/en/landing",
    languages: { nl: "/landing", en: "/en/landing" },
  },
  openGraph: { type: "website", url: "/en/landing", title, description },
  twitter: { card: "summary_large_image", title, description },
};

const copy: SplitLandingCopy = {
  locale: "en",
  homeHref: "/en",
  homeLabel: "SculptClub, go to the homepage",
  langLabel: "Language",
  switchLang: { label: "NL", href: "/landing", hrefLang: "nl", ariaLabel: "Nederlands" },
  trainer: {
    eyebrow: "I'm a personal trainer",
    headline: "Your clients, your rate. Our studio.",
    support: `Private studio by the hour, from €${studioRentalFromPrice}. No contract. Jordaan, Amsterdam.`,
    cta: { label: "See the studio", href: "/en/studio-rental" },
    image: {
      picture: "landing-trainer",
      alt: "Personal trainer coaching a client through a dumbbell shoulder press in the SculptClub studio",
      position: { base: "50% 45%", md: "50% 30%" },
    },
  },
  client: {
    eyebrow: "I want to train",
    headline: "Want to get stronger? Start with a free intro.",
    support: `Rather train on your own? Open Gym from €${openGymSinglePrice} an hour. Jordaan, Amsterdam.`,
    cta: { label: "Choose your trainer", href: "/en/find-personal-trainer" },
    pills: [
      { label: "Group class", href: "/en/small-group" },
      { label: "Open Gym", href: "/en/open-gym" },
    ],
    image: {
      picture: "landing-client",
      alt: "A woman training with a barbell under the skylight of the SculptClub studio",
      position: { base: "55% 30%", md: "54% 25%" },
    },
  },
};

export default function LandingPageEN() {
  return <SplitLanding copy={copy} />;
}
