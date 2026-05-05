import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Physiotherapist as Personal Trainer in Amsterdam: Training with an Injury — SculptClub" },
  description:
    "An injury doesn't have to mean the end of your training. Discover how a physiotherapist-personal trainer in Amsterdam helps you train safely and recover faster.",
  keywords: [
    "physiotherapist amsterdam",
    "physiotherapy personal trainer amsterdam",
    "training with injury amsterdam",
    "rehabilitation training amsterdam",
    "physio personal trainer amsterdam jordaan",
  ],
  alternates: {
    canonical: "/en/blog/physiotherapist-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
      en: "/en/blog/physiotherapist-personal-trainer-amsterdam",
    },
  },
};

export default function PhysiotherapistPersonalTrainerEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Physiotherapist Personal Trainer Amsterdam", url: "/en/blog/physiotherapist-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Physiotherapist as Personal Trainer in Amsterdam: Training with an Injury"
        description="An injury doesn't have to mean the end of your training. A physiotherapist as personal trainer lets you train safely and recover faster."
        url="/en/blog/physiotherapist-personal-trainer-amsterdam"
        datePublished="2026-03-30"
      />
      <FaqJsonLd faqs={[
        { question: "What can a physiotherapist-personal trainer do for you?", answer: "Screen for limitations — before you start training, they map out what you can and can't do.; Movement analysis — faulty movement patterns are often the cause of complaints. Correcting them early prevents new injuries.; Tailored training programme — no generic plan, but a programme that accounts for your specific injury and goals.; Progressive loading — building recovery and strength simultaneously, at a pace that works for your body.; Preventing relapse — once recovered, they make sure you..." },
        { question: "Can I train with a herniated disc?", answer: "In many cases, yes — but with supervision and the right modifications. A physiotherapist determines which exercises are safe and how to progress loading without worsening the condition." },
        { question: "Can I train after surgery?", answer: "Depending on what surgery and when. Post-surgical rehabilitation is one of Hamish's specialities. He works alongside your surgeon or specialist's guidelines to build you back up safely." },
        { question: "Do you speak English?", answer: "Yes. Hamish is fully fluent in English — all sessions can be conducted in English." },
        { question: "Where is SculptClub located?", answer: "Egelantiersgracht 424, Amsterdam Jordaan. Open daily from 06:30 to 22:00. You receive a door code via WhatsApp — no buzzer, no reception desk." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Physiotherapist as Personal Trainer in Amsterdam: Training with an Injury
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  30 March 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/trainers/hamish.jpg"
                alt="Hamish, physiotherapist and personal trainer at SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Back pain, a knee complaint, or a lingering shoulder injury that never quite heals. You want to keep training — but you&apos;re not sure how to do it safely. This is exactly where a physiotherapist who is also a personal trainer makes all the difference.
              </p>

              <h2>Why a regular personal trainer isn&apos;t always enough</h2>
              <p>
                Most personal trainers know how to build an effective programme for healthy individuals. But with an injury, chronic pain, or a rehabilitation trajectory, you need more than that. Loading incorrectly delays recovery — or makes things worse.
              </p>
              <p>
                A physiotherapist understands anatomy, knows how tissue heals, and can distinguish between pain that&apos;s acceptable during recovery and pain that&apos;s a warning signal. When that knowledge is combined with personal training, you don&apos;t just train safely — you train effectively.
              </p>

              <h2>What can a physiotherapist-personal trainer do for you?</h2>
              <ul>
                <li><strong>Screen for limitations</strong> — before you start training, they map out what you can and can&apos;t do.</li>
                <li><strong>Movement analysis</strong> — faulty movement patterns are often the cause of complaints. Correcting them early prevents new injuries.</li>
                <li><strong>Tailored training programme</strong> — no generic plan, but a programme that accounts for your specific injury and goals.</li>
                <li><strong>Progressive loading</strong> — building recovery and strength simultaneously, at a pace that works for your body.</li>
                <li><strong>Preventing relapse</strong> — once recovered, they make sure you don&apos;t repeat the same mistake.</li>
              </ul>

              <h2>Hamish: physiotherapist and personal trainer in Amsterdam</h2>
              <p>
                At SculptClub, <strong>Hamish</strong> holds a BSc in Physiotherapy and is also a qualified personal trainer. He works with people who can no longer train optimally due to injury or chronic complaints, as well as people who want to preventively strengthen their body.
              </p>
              <p>
                Hamish offers both 1-on-1 sessions and small group training. His approach combines physiotherapy knowledge with strength training. Rate available on request.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>Can I train with a herniated disc?</h3>
              <p>
                In many cases, yes — but with supervision and the right modifications. A physiotherapist determines which exercises are safe and how to progress loading without worsening the condition.
              </p>
              <h3>Can I train after surgery?</h3>
              <p>
                Depending on what surgery and when. Post-surgical rehabilitation is one of Hamish&apos;s specialities. He works alongside your surgeon or specialist&apos;s guidelines to build you back up safely.
              </p>
              <h3>Do you speak English?</h3>
              <p>
                Yes. Hamish is fully fluent in English — all sessions can be conducted in English.
              </p>
              <h3>Where is SculptClub located?</h3>
              <p>
                Egelantiersgracht 424, Amsterdam Jordaan. Open daily from 06:30 to 22:00. You receive a door code via WhatsApp — no buzzer, no reception desk.
              </p>

              <h2>Injury or chronic pain? Start with a free intro</h2>
              <p>
                An intro costs nothing. In 45 minutes you discuss your complaints, goals and options with Hamish. No contract, no commitment.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapy studio rental</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-secondary border border-border/50">
              <h2 className="text-xl font-bold mb-2">Free intro with Hamish</h2>
              <p className="text-muted-foreground mb-6">
                Injury, chronic pain, or simply wanting to build up carefully? Book a free intro.
              </p>
              <ButtonLink href="/en/free-intro">
                Book free intro <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
