import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Small Group Training in Amsterdam — SculptClub Jordaan" },
  description:
    "Train with your partner, friend or colleagues. Small group personal training in a private studio in the Jordaan. From 2 people, no contract, invoice available.",
  keywords: [
    "small group training amsterdam",
    "duo personal training amsterdam",
    "partner training amsterdam",
    "team training amsterdam",
    "small group pt jordaan",
    "couples personal training amsterdam",
    "semi-private personal training amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/small-group-training-amsterdam",
    languages: {
      nl: "/nl/blog/small-group-training-amsterdam",
      en: "/en/blog/small-group-training-amsterdam",
    },
  },
};

export default function SmallGroupTrainingAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Small group training", url: "/en/blog/small-group-training-amsterdam" }]} />
      <BlogPostingJsonLd title="Small Group Training in Amsterdam" description="Train together with a partner, friend or small team in a private studio in the Jordaan — how it works, what it costs, who it fits." url="/en/blog/small-group-training-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Small Group Training in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-overview.jpeg" alt="SculptClub private studio — space for small group training" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Not everyone wants to train solo. For many people, training works better with
                someone alongside — a partner who&apos;s free the same morning, a friend with
                the same goals, two or three colleagues looking to break up the work week.
                Small group training at SculptClub in the Jordaan gives you the quality of
                personal coaching at a lower cost per person, without the crowd of a big-box
                gym.
              </p>
              <p>
                This guide explains how small group works at SculptClub, which group sizes
                suit it, what it costs, and why it feels different to a CrossFit box or
                bootcamp class.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What is small group at SculptClub?</h2>
              <p>
                Small group = 2 to 4 people training with one trainer in our private studio.
                You choose who&apos;s in your group — these are always closed, fixed groups.
                No strangers, no queue for a rack, no announced workout-of-the-day.
              </p>
              <p>
                The programme is built for your shared goal — or, when goals differ, as
                individual variants inside the same session. The trainer gives shared cues,
                watches technique, and scales load per person.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who does it work for?</h2>
              <ul>
                <li><strong>Couples / partners:</strong> Shared availability, similar fitness goals, built-in accountability.</li>
                <li><strong>Friends:</strong> Two or three people who already motivate each other. Splitting the cost makes it more accessible.</li>
                <li><strong>Colleagues:</strong> Fixed weekly slot, short distance from Centrum and Zuidas, invoice on company name (see{" "}
                  <a href="/en/blog/corporate-personal-training-amsterdam" className="text-brand hover:underline">corporate personal training</a>).</li>
                <li><strong>Family:</strong> Mother-daughter, brothers, parent-with-adult-child. Training together is a different bond-builder than a coffee.</li>
                <li><strong>Small teams (3-4):</strong> Startups, marketing teams, small firms. A weekly "energise" session instead of a pizza lunch.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does it cost?</h2>
              <p>
                Small group rates are per trainer per session, not per person. You split the
                cost with your group. A duo session (2 people) with Andrea is €45 for 45
                minutes — so €22.50 per person. A trio (3 people) drops that to €15 per
                person at the same length.
              </p>
              <p>
                For trainers without a fixed rate (Eva, Gezina, Dara, Hamish, Jearmey) you
                confirm the small-group rate during the free intro. In Amsterdam, small
                group PT typically ranges €12-€30 per person per session — well below solo
                PT (€45-€85) and comparable to premium gym memberships. See our{" "}
                <a href="/en/blog/personal-training-cost-amsterdam" className="text-brand hover:underline">personal training cost guide</a>{" "}
                for more context.
              </p>
              <p>
                No contract, no membership. Book a single session or a package, pause
                whenever life gets in the way.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why not a CrossFit box or bootcamp?</h2>
              <p>
                Nothing wrong with CrossFit or bootcamp if that&apos;s your thing. But they are:
              </p>
              <ul>
                <li><strong>Open groups:</strong> You don&apos;t pick who&apos;s in. Energy varies session to session.</li>
                <li><strong>Fixed programme:</strong> Workout of the day, not tailored to your goal.</li>
                <li><strong>High-intensity default:</strong> Works for conditioning; less for progressive squat technique or injury recovery.</li>
                <li><strong>Not private:</strong> Coaching is shared across the whole class; technique mistakes can go unnoticed.</li>
              </ul>
              <p>
                Small group at SculptClub = closed group, programmatic personal training,
                private studio. You pay a little more than bootcamp, but you get near-
                one-on-one coaching.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Which trainers offer small group?</h2>
              <p>
                Most trainers can run small group. A few have particular specialisation:
              </p>
              <ul>
                <li><strong><a href="/en/plan-free-intro-with-dara" className="text-brand hover:underline">Dara</a></strong> — small group specialist. Energetic approach, strong fit for mixed groups and colleague teams.</li>
                <li><strong>Alex</strong> — strength and calisthenics in duo or trio. Good fit when the whole group already has a baseline.</li>
                <li><strong>Andrea</strong> — technical skill building. Suits duos who want to learn strength together.</li>
                <li><strong><a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">Gezina</a></strong> — women&apos;s training in small groups (2-3 women).</li>
                <li><strong>Jearmey</strong> — strength and athletic performance; popular for duos with a sports background.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Practical — how to book as a group</h2>
              <ul>
                <li><strong>One person books:</strong> Session is held under one name. You split the invoice internally or use the optional company invoice.</li>
                <li><strong>Door code for all:</strong> By default to the booker; on request sent via WhatsApp to all participants.</li>
                <li><strong>If one drops out:</strong> Session typically continues for the rest (depends on your trainer). Cancellation is always free.</li>
                <li><strong>Invoice on company name:</strong> Standard for colleague groups. Detail confirmed with your trainer.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <ol>
                <li>Pick a trainer together based on specialisation (see the <a href="/en/find-personal-trainer" className="text-brand hover:underline">trainers page</a>).</li>
                <li>One person books a{" "}
                  <a href="/en/free-intro" className="text-brand hover:underline">free intro</a> —
                  ideally together, but a single scout works too.</li>
                <li>During the intro you discuss group composition, goals and frequency. Then the trainer schedules the first group session.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/corporate-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Corporate personal training</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">What does personal training cost?</p></a>
                <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental for trainers</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/private-gym-vs-big-box-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Private gym vs big-box gym</p></a>
                <a href="/en/blog/female-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Female personal trainer</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Book a free intro with your group</h3>
              <p className="text-muted-foreground mb-6">Duo, trio or small team. First session is always free.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
