import type { Metadata } from "next";
import { SplitLanding, type SplitLandingCopy } from "@/components/marketing/split-landing";
import { studioRentalFromPrice } from "@/config/acuity";

/**
 * /en/landing — English twin of /landing (campaign split page). Same rules:
 * noindex,follow and a self-canonical.
 */

const title = "SculptClub: rent the studio or train in the Jordaan";
const description =
  "Personal trainer? Rent the studio by the hour. Want to train? Find your trainer, class or open gym. Jordaan, Amsterdam.";

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
    eyebrow: "I'm a trainer",
    headline: "Your clients, your studio.",
    support: `Studio by the hour, from €${studioRentalFromPrice}.`,
    // Paulo 2026-10-04 (muu5d6dn1ypv53): "Rent the studio" first, "See the studio" underneath.
    cta: { label: "Rent the studio", href: "/en/book-studio" },
    pills: [{ label: "See the studio", href: "/en/studio-rental" }],
    menuHref: "/en/studio-rental",
    image: {
      picture: "landing-trainer",
      alt: "Personal trainer coaching a client through a dumbbell shoulder press in the SculptClub studio",
      position: { base: "50% 45%", md: "50% 30%" },
    },
  },
  client: {
    eyebrow: "I want to train",
    headline: "Want to get stronger?",
    support: "Start with a free intro.",
    cta: { label: "Choose your trainer", href: "/en/find-personal-trainer" },
    pills: [
      { label: "Group class", href: "/en/small-group" },
      { label: "Open Gym", href: "/en/open-gym" },
    ],
    image: {
      picture: "landing-client",
      alt: "A woman training with dumbbells in the SculptClub studio",
      position: { base: "50% 30%", md: "50% 0%" },
    },
  },
};

export default function LandingPageEN() {
  return <SplitLanding copy={copy} />;
}
