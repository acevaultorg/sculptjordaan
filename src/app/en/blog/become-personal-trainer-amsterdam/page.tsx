import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Personal Trainer in Amsterdam — How to Start | SculptClub",
  description:
    "Want to become a personal trainer in Amsterdam? Everything about starting as a freelance trainer: studio, clients, rates and how SculptClub helps you grow.",
  keywords: [
    "become personal trainer amsterdam",
    "freelance personal trainer amsterdam",
    "start personal training business amsterdam",
    "personal trainer studio amsterdam",
    "gym rental for trainers amsterdam",
    "personal training business amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/become-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-worden-amsterdam",
      en: "/en/blog/become-personal-trainer-amsterdam",
    },
  },
};

export default function BecomePTAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Become a personal trainer", url: "/en/blog/become-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Become a Personal Trainer in Amsterdam" description="How to start as a freelance personal trainer in Amsterdam. Studio, clients, rates." url="/en/blog/become-personal-trainer-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Become a Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-overview.jpeg" alt="SculptClub private studio for personal trainers" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam is one of the best cities to work as a personal trainer. Demand
                is high, the market is growing and more people are investing in personal
                guidance. But how do you start? And how do you find a studio without
                immediately taking on high fixed costs?
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What do you need to get started?</h2>
              <ul>
                <li><strong>Certification:</strong> A recognised diploma (NASM, EREPS, or equivalent). Without certification you can&apos;t get insurance.</li>
                <li><strong>Business registration:</strong> Register as a freelancer with the Dutch Chamber of Commerce (KvK). Done in a day.</li>
                <li><strong>Insurance:</strong> Professional liability insurance is mandatory. Costs around €15-30/month.</li>
                <li><strong>Training location:</strong> This is the biggest hurdle. Renting your own studio costs €1,500-3,000/month in Amsterdam. Or you rent by the hour.</li>
                <li><strong>Clients:</strong> Instagram, word-of-mouth, Google and platforms are the main channels.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">The problem: finding a studio</h2>
              <p>
                Most starting trainers get stuck on location. A private studio is too
                expensive. Training in a park depends on weather. And big gyms often
                demand exclusivity or high commissions (30-50% of your revenue).
              </p>
              <p>
                The solution: rent a studio by the hour. No fixed costs, no commission,
                maximum flexibility. You only pay for the hours you use.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: rent a studio without hassle</h2>
              <p>
                At <a href="/en/become-trainer" className="text-brand hover:underline">SculptClub</a> you
                rent a fully equipped private studio in Amsterdam Jordaan. From €12 per hour,
                with zero commission. What you get:
              </p>
              <ul>
                <li><strong>Professional equipment:</strong> Power rack, cable machine, dumbbells, cardio</li>
                <li><strong>Your own profile on the website:</strong> With photo, bio and direct booking link</li>
                <li><strong>Clients via the website:</strong> Hundreds of visitors monthly searching for a trainer</li>
                <li><strong>0% commission:</strong> You keep 100% of your income</li>
                <li><strong>Flexible:</strong> Book per hour, no contract, stop whenever you want</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Rates: what can you earn?</h2>
              <p>
                Most personal trainers in Amsterdam charge €45-90 per session. At SculptClub
                you pay €12/hour for the studio. That means at a rate of €60 per session you
                keep €48 net — no commission, no fixed costs.
              </p>
              <p>
                With 4 sessions per day, 5 days per week, that&apos;s €960 net per week on
                studio rental alone. Compare that to renting your own studio at €2,000/month
                plus equipment and maintenance.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Finding clients in Amsterdam</h2>
              <p>
                The main channels for personal trainers in Amsterdam:
              </p>
              <ul>
                <li><strong>Google:</strong> Make sure you&apos;re findable. A profile on the SculptClub website helps — we rank highly for &quot;personal trainer amsterdam&quot;</li>
                <li><strong>Instagram:</strong> Share workouts, results and behind-the-scenes content</li>
                <li><strong>Word of mouth:</strong> Satisfied clients are your best marketing</li>
                <li><strong>Free intro:</strong> Offer a free first session. Lowering the barrier is the best conversion tactic</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Free tour at SculptClub</h2>
              <p>
                Curious? <a href="/en/become-trainer" className="text-brand hover:underline">See the
                full information</a> or send a WhatsApp directly. We&apos;ll schedule a free
                tour — see if the studio is right for you. No obligations.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental for personal trainers</p></a>
                <a href="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Training space for freelance trainers</p></a>
                <a href="/en/blog/gym-rental-per-hour-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym rental per hour</p></a>
                <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapy studio rental</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start as a trainer?</h3>
              <p className="text-muted-foreground mb-6">See the studio, rates and what we offer.</p>
              <ButtonLink href="/en/become-trainer" size="lg">Become a trainer at SculptClub<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
