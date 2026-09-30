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
  switchLang: { label: "NL", href: "/landing", hrefLang: "nl" },
  trainer: {
    eyebrow: "For personal trainers",
    headline: "Train your clients in a private studio",
    support: `Rent the studio by the hour, from €${studioRentalFromPrice}. Jordaan, Amsterdam.`,
    cta: { label: "See studio rental", href: "/en/studio-rental" },
    image: {
      src: "/images/studio/pt-session-barbell.jpg",
      alt: "Personal trainer spotting a client's squat in the SculptClub studio",
      position: "50% 35%",
    },
  },
  client: {
    eyebrow: "For anyone who wants to train",
    headline: "Find your trainer, class or open gym",
    support: `First intro session free. Open Gym from €${openGymSinglePrice} an hour. Jordaan, Amsterdam.`,
    cta: { label: "Find your trainer", href: "/en/find-personal-trainer" },
    pills: [
      { label: "Group class", href: "/en/small-group" },
      { label: "Open Gym", href: "/en/open-gym" },
    ],
    image: {
      src: "/images/studio/training-women-coaching.jpg",
      alt: "Trainer coaching a client through a dumbbell shoulder press in the SculptClub studio",
      position: "45% 40%",
    },
  },
};

export default function LandingPageEN() {
  return <SplitLanding copy={copy} />;
}
