import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { CtaBand } from "@/components/marketing/cta-band";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Boutique Personal Training vs Chain Gyms — SculptClub",
  description:
    "Honest comparison: boutique personal training studio vs big chain gym in Amsterdam. Price, atmosphere, coaching and results — no spin.",
  keywords: [
    "boutique personal training amsterdam",
    "personal trainer vs chain gym",
    "boutique gym vs chain",
    "small personal training studio amsterdam",
    "alternative to big chain gym amsterdam",
  ],
  alternates: {
    canonical: "/en/boutique-personal-training-vs-chain-gyms",
    languages: {
      nl: "/nl/boutique-personal-training-vs-keten",
      en: "/en/boutique-personal-training-vs-chain-gyms",
    },
  },
  openGraph: {
    title: "Boutique Personal Training vs Chain Gyms",
    description:
      "What fits you: a boutique personal training studio or a big chain gym? An honest comparison.",
    url: "/en/boutique-personal-training-vs-chain-gyms",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a boutique personal training studio exactly?",
    answer:
      "A small, private training space where you train with at most a handful of people at a time. Personal coaching is the focus, not member volume. At SculptClub never more than 3 people train in the studio on the Egelantiersgracht at the same time.",
  },
  {
    question: "Is a boutique studio more expensive than a big chain?",
    answer:
      "For a bare membership: yes. A chain runs €20-€40 per month. For what you actually get — a private space, optional one-on-one coaching, no waiting — a boutique studio is often cheaper per result. At SculptClub Open Gym starts at €29/4 weeks and personal training from €45 per session.",
  },
  {
    question: "Do I have to sign a contract?",
    answer:
      "Not at SculptClub. Open Gym runs on 4-week cycles you can stop anytime. Personal training is booked per session. No annual contract, no cancellation fees, free to cancel.",
  },
  {
    question: "Can I try it for free first?",
    answer:
      "Yes. The first intake with a trainer is always free and no-strings. You can also book a free Open Gym trial to experience the studio before committing to anything.",
  },
  {
    question: "When is a big chain actually the better choice?",
    answer:
      "When price is the most important factor, you mainly do cardio, and you don't mind queuing for a machine at peak hours. A chain has 24/7 hours and many locations — useful if you want to train in different parts of the city through the week.",
  },
];

export default function BoutiquePTvsChainEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          {
            name: "Boutique personal training vs chain gyms",
            url: "/en/boutique-personal-training-vs-chain-gyms",
          },
        ]}
      />
      <ServiceJsonLd
        name="Boutique Personal Training Amsterdam"
        description="Private personal training studio in Amsterdam Jordaan. Max 3 people, free intake, no contract. Personal training from €45/session."
        url="/en/boutique-personal-training-vs-chain-gyms"
        priceRange="From €45/session"
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Comparison"
          title="Boutique Personal Training vs Chain Gyms"
          description="An honest look at the difference between a private personal training studio and a big chain gym in Amsterdam — without the marketing spin."
        />
      </Section>

      {/* Comparison table */}
      <Section bg="muted">
        <SectionHeader
          overline="Side by side"
          title="The Honest Comparison"
          description="No attacks on competitors — just the features lined up."
        />

        <FadeIn>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-4 text-left font-medium"></th>
                    <th className="px-4 py-4 text-left font-semibold text-primary">
                      Boutique studio (SculptClub)
                    </th>
                    <th className="px-4 py-4 text-left font-medium text-muted-foreground">
                      Big chain gym
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Group size</td>
                    <td className="px-4 py-3">Max 3 people at a time</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      50-200+ people at peak
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Trainer attention</td>
                    <td className="px-4 py-3">1-on-1, your own program</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Not included, booked separately
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Equipment quality</td>
                    <td className="px-4 py-3">
                      Selectively chosen, always free
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Many machines, often occupied
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Pricing clarity</td>
                    <td className="px-4 py-3">
                      All-in, no surprises
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Sign-up fees, lockers, extras
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Contracts</td>
                    <td className="px-4 py-3">None — stop whenever</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Often 12 months upfront
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Vibe</td>
                    <td className="px-4 py-3">Quiet, private, focused</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Busy, loud music, anonymous
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Best for</td>
                    <td className="px-4 py-3">
                      Results, technique, recovery
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Cardio, high volume, low budget
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Body sections */}
      <Section>
        <div className="mx-auto max-w-3xl prose prose-lg prose-invert">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mt-0 mb-4">
              The difference is in the attention
            </h2>
            <p>
              A big chain gym is built on volume. The more members per square
              meter, the better the business model works. That isn&apos;t
              necessarily a problem if you know what you&apos;re doing and you
              train when it&apos;s quiet. But if you&apos;re just starting,
              want to progress technically, or are coming back from an injury,
              that anonymity is a trap. Nobody corrects your form. Nobody
              notices you&apos;ve been running the same program for three
              weeks. Nobody asks whether today is a good day to lift heavy.
            </p>
            <p>
              In a boutique studio, that&apos;s the whole starting point. Your
              trainer knows your history, your goals and your recovery
              pattern. At SculptClub trainers work on 0% commission — meaning
              they set their own rates and take the time you need, with no
              sales pressure from the studio.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Price versus price per result
            </h2>
            <p>
              A chain costs €20-€40 a month. A boutique studio costs more per
              hour, but you get a private space in return — sometimes
              one-on-one coaching too. The question isn&apos;t which option is
              cheaper, but which option gets you to your goal cheaper. For
              some people that&apos;s a chain with a treadmill. For others
              it&apos;s one well-structured hour a week with a trainer who
              actually knows where you are.
            </p>
            <p>
              Do the math: a year of training twice a week at a chain plus a
              trainer (booked separately) often costs more than a boutique
              studio at the same frequency — and in the boutique studio you
              don&apos;t queue.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Equipment: less is often more
            </h2>
            <p>
              A chain advertises &ldquo;200+ machines.&rdquo; Sounds
              impressive. In practice you use about eight of them. A boutique
              studio chooses those eight carefully: power rack, dumbbells,
              cable machine, a few kettlebells, room to move. Nothing more,
              nothing less. The difference: you don&apos;t wait, and
              everything you need is within reach.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Vibe is not a detail
            </h2>
            <p>
              People underestimate how much atmosphere affects whether you
              actually show up. A loud, crowded floor with mirror-wall selfies
              attracts some people. Others bounce off it instantly. A quiet,
              small space where your name is known and the music doesn&apos;t
              shout is, for many people, the difference between training
              consistently and dropping off after three weeks.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              When a big chain is the right choice
            </h2>
            <p>
              Honestly: a chain is fine if you mostly do cardio, you already
              know your way around the technique, and you value 24/7 hours or
              having multiple locations across the city. If your budget is
              tight and you don&apos;t need coaching, a chain is a logical
              start. Nobody gets worse off using a treadmill at a chain.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              When a boutique studio is the right choice
            </h2>
            <p>
              A boutique studio is the right choice if you want serious
              results, you value quiet and privacy, you want help with
              technique or programming, or you&apos;re returning after an
              injury. Also if you don&apos;t want to be locked into a long
              contract or sign-up fees, and you just want to be able to stop
              whenever it suits you. SculptClub is open daily 06:30 to 22:00
              at Egelantiersgracht 424 in the Jordaan.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="FAQ"
          title="Still Have Questions?"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <CtaBand locale="en" />
    </PageLayout>
  );
}
