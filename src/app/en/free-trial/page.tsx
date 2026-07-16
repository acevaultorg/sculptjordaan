import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Book a free Open Gym trial — Private Studio Jordaan | SculptClub Amsterdam",
  },
  description:
    "Book your free Open Gym trial at SculptClub in the Jordaan. Come by with no obligation and train one session free — no membership, no commitment.",
  alternates: {
    canonical: "/en/free-trial",
    languages: { nl: "/nl/gratis-proefles", en: "/en/free-trial" },
  },
  openGraph: {
    type: "website",
    url: "/en/free-trial",
    title:
      "Book a free Open Gym trial — Private Studio Jordaan | SculptClub Amsterdam",
    description:
      "Book your free Open Gym trial at SculptClub in the Jordaan. Come by with no obligation and train one session free — no membership, no commitment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a free Open Gym trial | SculptClub Amsterdam",
    description:
      "Book your free Open Gym trial at SculptClub in the Jordaan. No obligation, no membership.",
  },
};

export default function FreeTrialPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Open Gym", url: "/en/open-gym" },
          { name: "Free trial", url: "/en/free-trial" },
        ]}
      />
      <Section>
        <SectionHeader
          overline="Free trial"
          title="Book your free trial"
          description="Pick a time and come by. No commitment, no membership — experience for yourself how quiet and fully equipped our private studio in the Jordaan is."
        />
        <AcuityEmbed
          url={acuityFreeTrials.openGymTryout}
          title="Book your free Open Gym trial at SculptClub"
          intent="open_gym"
          pricing="free"
          height={900}
          className="-mx-4 rounded-none overflow-hidden bg-white sm:mx-auto sm:max-w-3xl sm:rounded-2xl"
        />
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            No time slot works, or have a question? Just send us a message —
            we&apos;re happy to help.
          </p>
          <ButtonLink
            href={whatsappLinks.openGymEn}
            variant="outline"
            size="lg"
            external
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
            Ask us on WhatsApp
          </ButtonLink>
        </div>
      </Section>
    </PageLayout>
  );
}
