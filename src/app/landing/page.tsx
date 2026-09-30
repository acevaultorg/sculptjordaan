import type { Metadata } from "next";
import { SplitLanding, type SplitLandingCopy } from "@/components/marketing/split-landing";
import { openGymSinglePrice, studioRentalFromPrice } from "@/config/acuity";

/**
 * /landing — campaign split page (Instagram bio, TikTok, QR codes). Dutch, like
 * every un-prefixed page on this site; English twin at /en/landing.
 * noindex,follow while it is a campaign page: it must not compete with / for
 * brand search, and follow keeps the links it points at crawlable.
 */

const title = "SculptClub: studio huren of trainen in de Jordaan";
const description =
  "Personal trainer? Huur de privé studio per uur. Wil je trainen? Vind je trainer, groepsles of Open Gym. Jordaan, Amsterdam.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/landing",
    languages: { nl: "/landing", en: "/en/landing" },
  },
  openGraph: { type: "website", url: "/landing", title, description },
  twitter: { card: "summary_large_image", title, description },
};

const copy: SplitLandingCopy = {
  locale: "nl",
  homeHref: "/",
  homeLabel: "SculptClub, naar de homepage",
  switchLang: { label: "EN", href: "/en/landing", hrefLang: "en" },
  trainer: {
    eyebrow: "Voor personal trainers",
    headline: "Train je klanten in een privé studio",
    support: `Huur de studio per uur, vanaf €${studioRentalFromPrice}. Jordaan, Amsterdam.`,
    cta: { label: "Bekijk studio huren", href: "/nl/studio-huren" },
    image: {
      src: "/images/studio/pt-session-barbell.jpg",
      alt: "Personal trainer begeleidt een cliënt bij een squat in de studio van SculptClub",
      position: "50% 35%",
    },
  },
  client: {
    eyebrow: "Voor wie wil trainen",
    headline: "Vind je trainer, groepsles of Open Gym",
    support: `Eerste intake gratis. Open Gym vanaf €${openGymSinglePrice} per uur. Jordaan, Amsterdam.`,
    cta: { label: "Vind je trainer", href: "/nl/vind-jouw-personal-trainer" },
    pills: [
      { label: "Groepsles", href: "/nl/small-group" },
      { label: "Open Gym", href: "/nl/open-gym" },
    ],
    image: {
      src: "/images/studio/training-women-coaching.jpg",
      alt: "Trainer coacht een cliënt bij schouderdrukken met dumbbells in de studio van SculptClub",
      position: "45% 40%",
    },
  },
};

export default function LandingPageNL() {
  return <SplitLanding copy={copy} />;
}
