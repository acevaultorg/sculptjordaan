import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks, openGymSinglePrice, openGymSummerDeal } from "@/config/acuity";
import { MessageCircle, Clock, MapPin, Users, Dumbbell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Book a free Open Gym trial: Private Studio Jordaan",
  },
  description:
    "Book your free Open Gym trial at SculptClub in the Jordaan. Come by and train one session free — no membership, no commitment.",
  alternates: {
    canonical: "/en/free-trial",
    languages: { nl: "/nl/gratis-proefles", en: "/en/free-trial" },
  },
  openGraph: {
    type: "website",
    url: "/en/free-trial",
    title:
      "Book a free Open Gym trial: Private Studio Jordaan",
    description:
      "Book your free Open Gym trial at SculptClub in the Jordaan. Come by and train one session free — no membership, no commitment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a free Open Gym trial | SculptClub Amsterdam",
    description:
      "Book your free Open Gym trial at SculptClub in the Jordaan. No commitment, no membership.",
  },
};

// Visible FAQ copy and the FAQPage schema are rendered from this one array,
// so the structured data can never drift from what the page actually shows.
const faqs = [
  {
    question: "Is the trial session really free?",
    answer:
      "Yes. You train once in the Open Gym at no cost. You do not leave payment details and no subscription starts automatically.",
  },
  {
    question: "Do I have to become a member afterwards?",
    answer:
      "No. There is no contract and no notice period. After your trial you decide for yourself whether you want single sessions, a plan, or nothing at all.",
  },
  {
    question: "Can I cancel or reschedule free of charge?",
    answer:
      "Yes, always and with no time limit. There is no 24-hour cancellation window — just let us know on WhatsApp.",
  },
  {
    question: "How do I get in?",
    answer:
      "You receive the door code on WhatsApp at midnight before your session. There is no front desk and nobody needs to let you in.",
  },
  {
    question: "Is a trainer present during Open Gym?",
    answer:
      "No. Open Gym is training on your own in a private studio — not a class and not supervised. If you do want guidance, start with a personal trainer instead; that first session is free too.",
  },
  {
    question: "How busy does it get?",
    answer:
      "A maximum of 4 people train in the studio at the same time, so you never wait for equipment or a bench.",
  },
];

const studioFacts = [
  {
    icon: Clock,
    title: "Open daily 06:00 – 22:00",
    body: "Seven days a week, early mornings and late evenings included. You pick your moment.",
  },
  {
    icon: Users,
    title: "Maximum 4 people",
    body: "Never a queue for a machine. The studio stays calm, even at peak hours.",
  },
  {
    icon: Dumbbell,
    title: "Dumbbells 4 – 40 kg",
    body: "A full set of free weights, plus the essentials for strength and mobility work.",
  },
  {
    icon: MapPin,
    title: "Egelantiersgracht 424",
    body: "In the heart of the Jordaan, 1015 RR Amsterdam. Walking and cycling distance from the centre.",
  },
];

const steps = [
  {
    n: "1",
    title: "Pick a time",
    body: "Choose a slot above that suits you. You see straight away what is free.",
  },
  {
    n: "2",
    title: "Get the door code",
    body: "At midnight before your session, we send you the code on WhatsApp along with the address.",
  },
  {
    n: "3",
    title: "Come by and train",
    body: "You train independently, at your own pace. No intake, no sales pitch.",
  },
];

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
      <FaqJsonLd faqs={faqs} />

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
            size="tall"
            external
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
            Ask us on WhatsApp
          </ButtonLink>
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="What is a trial session exactly?"
          description="One full Open Gym session, free, without committing to anything."
        />
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Open Gym means you{" "}
            <strong className="text-foreground">train independently</strong> in a
            private studio — no group class, no trainer watching over you, no
            fixed programme. You have the space largely to yourself and decide
            what you do and how long you stay.
          </p>
          <p>
            So this is a trial of the space, not a lesson: there is nothing to be
            taught. You come to see whether the studio, the atmosphere and the
            opening hours suit you. If you do want guidance, a{" "}
            <Link
              href="/en/find-personal-trainer"
              className="text-brand underline underline-offset-4"
            >
              personal trainer
            </Link>{" "}
            is the better starting point — that first session is free as well.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="How it works"
          description="From booking to walking in: three steps, no paperwork."
        />
        <ol className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="What you will find"
          description="The studio in short, so you know what to expect."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {studioFacts.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden
                />
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Frequently asked questions"
          description="The things people ask us most before their first visit."
        />
        <dl className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((f) => (
            <div key={f.question} className="py-5">
              <dt className="text-base font-semibold text-foreground">
                {f.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section bg="muted">
        <SectionHeader
          title="And after that?"
          description="If you like it, you choose how to continue — or you simply leave it here."
        />
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {/* 2026-09-24: see the NL twin; prices read from config. */}
          <p className="text-foreground">
            A single session costs €{openGymSinglePrice}, no membership needed. Unlimited training:
            €{openGymSummerDeal.active ? openGymSummerDeal.priceDeal : openGymSummerDeal.priceRegular} per 4 weeks
            {openGymSummerDeal.active ? " (introductory price for new members)" : ""}, cancel anytime.
          </p>
          <p>
            After your trial you are tied to nothing. You can keep booking single
            sessions or take a four-week plan; there is also a student rate on
            proof of a student ID. Current rates and what each plan includes are
            on the{" "}
            <Link
              href="/en/open-gym"
              className="text-brand underline underline-offset-4"
            >
              Open Gym page
            </Link>{" "}
            and on{" "}
            <Link
              href="/en/pricing"
              className="text-brand underline underline-offset-4"
            >
              pricing
            </Link>
            .
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/en/open-gym" size="tall">
            View Open Gym
          </ButtonLink>
          <ButtonLink href="/en/pricing" variant="outline" size="tall">
            All prices
          </ButtonLink>
        </div>
      </Section>
    </PageLayout>
  );
}
