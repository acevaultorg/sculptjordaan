import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Rent Training Space as a Freelance Personal Trainer in Amsterdam — SculptClub",
  description:
    "Practical guide for freelance personal trainers looking to rent training space in Amsterdam. Costs, insurance, tax benefits and how to get started.",
  keywords: [
    "rent training space freelance personal trainer",
    "freelance PT studio rental amsterdam",
    "personal trainer workspace amsterdam",
    "private gym rental freelance trainer",
    "fitness studio rental amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
      en: "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
    },
  },
};

export default function BlogPostFreelanceTrainerEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Rent training space as a freelance PT", url: "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Rent Training Space as a Freelance Personal Trainer in Amsterdam"
        description="Practical guide for freelance personal trainers looking to rent training space in Amsterdam."
        url="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam"
        datePublished="2026-04-02"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Rent Training Space as a Freelance Personal Trainer in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  April 2, 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="Fully equipped training space at SculptClub Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You&apos;re registered as a freelance personal trainer, your first clients are coming in,
                and now you need somewhere to train them. Training at their homes doesn&apos;t scale. Renting
                your own place is too expensive. An hourly studio rental is the sweet spot — professional,
                flexible and affordable. Here&apos;s everything you need to know about renting training
                space in Amsterdam as a freelance PT.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why freelance trainers are choosing studio rental</h2>
              <p>
                The personal training market in Amsterdam is growing. More trainers are choosing
                self-employment over working at big-box gyms. You set your own rates, choose your own
                clients and build your own brand. But without a professional space, you hit a ceiling.
                Clients expect more than a park workout or a session in their living room. A dedicated
                training space — even if rented by the hour — gives you credibility and lets you charge
                premium rates.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does training space cost in Amsterdam?</h2>
              <p>
                Leasing your own studio in Amsterdam starts at €1,500 to €3,000 per month, excluding
                equipment, cleaning and maintenance. For a freelance trainer just starting out, that&apos;s
                a huge risk.
              </p>
              <p>
                The alternative: rent by the hour in an existing studio. At SculptClub, you can rent
                half the studio from €12 per 60 minutes, or the full studio from €17 per hour. With
                discount packages you save up to 23%. The math: if you run 20 sessions per week at €50
                each, your studio space at SculptClub costs roughly 15 to 20 percent of revenue —
                compare that to the 40 to 60 percent you&apos;d give up at a big gym chain.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Tax benefits for freelance trainers in the Netherlands</h2>
              <p>
                As a freelance trainer (ZZP) in the Netherlands, your studio rental costs are fully
                tax-deductible as business expenses. This includes hourly rental fees, session packages,
                travel costs to the studio (€0.23 per km), your professional liability insurance,
                marketing costs and continuing education. Keep good records — your accountant will thank you.
              </p>
              <p>
                If you exceed the small business scheme (KOR) threshold, you charge 21% VAT to your
                clients. The VAT on your studio costs can be reclaimed as input tax. In practice, the
                real cost of a rented training space is lower than the amount on the invoice.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Insurance: what do you need?</h2>
              <p>
                As a freelance personal trainer you need at minimum a professional liability insurance
                (beroepsaansprakelijkheidsverzekering). This covers damage from errors in your guidance
                or advice. Many trainers also take out a general liability insurance for damage to third
                parties or property. Always check whether the studio you rent has its own insurance for
                equipment and the space. At SculptClub, the studio is fully insured — you only need to
                focus on your own coverage.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What to look for in a training space</h2>
              <p>
                Not every space is suitable for personal training. Here&apos;s what to check:
              </p>
              <ul>
                <li><strong>Equipment:</strong> Power rack, cable machine, dumbbells, bench — the essentials for any PT session</li>
                <li><strong>Privacy:</strong> Your client should feel comfortable, not exposed in a crowded room</li>
                <li><strong>Location:</strong> Centrally located, easy to reach by public transport and bike</li>
                <li><strong>Flexibility:</strong> Can you book by the hour or are you locked into a long-term contract?</li>
                <li><strong>Cleaning and maintenance:</strong> Who is responsible?</li>
                <li><strong>Cancellation policy:</strong> What happens when a client cancels?</li>
              </ul>
              <p>
                At SculptClub, you can always cancel for free. You receive a door code via WhatsApp the
                evening before, so you can walk straight in. The studio is cleaned after every session
                and equipment is always in top condition.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Build your brand with a fixed training location</h2>
              <p>
                One underrated benefit of a consistent training location is the effect on your brand.
                Your clients know where to go, you can deliver a consistent experience and you can use
                the location in your marketing. Studio photos on your Instagram, your address on Google
                Maps, reviews that mention the space — it makes your brand more tangible than a trainer
                who works everywhere and nowhere.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Step-by-step: how to get started</h2>
              <p>
                Ready to go? Here&apos;s how to start renting training space as a freelance PT:
              </p>
              <ol>
                <li>Make sure your Chamber of Commerce registration is in order</li>
                <li>Get professional liability insurance</li>
                <li>Visit the studio and test the equipment</li>
                <li>Start with a few hours per week and scale up as your client base grows</li>
                <li>Use the location in your marketing — photos, Google profile, social media</li>
              </ol>

              <h2 className="text-2xl font-bold mt-10 mb-4">Get started at SculptClub</h2>
              <p>
                SculptClub in Amsterdam&apos;s Jordaan neighbourhood is built for independent trainers.
                A fully equipped private studio, bookable by the hour, no long-term contract and always
                free cancellation. Studio rental from €12 per hour, with discount packages up to 23% off.
                0% commission — what you earn, you keep.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Want to see the studio?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free viewing or get in touch directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/studio-rental" size="lg">
                  View studio & rates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hi%2C%20I%27m%20a%20freelance%20trainer%20interested%20in%20renting%20the%20studio"
                  size="lg"
                  variant="outline"
                  external
                >
                  WhatsApp us
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
