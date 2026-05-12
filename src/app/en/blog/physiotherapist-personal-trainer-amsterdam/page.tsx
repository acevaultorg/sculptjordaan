import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Training with an Injury or Pain in Amsterdam — SculptClub" },
  description:
    "An injury doesn't have to mean the end of your training. How SculptClub approaches training-after-injury, alongside (not instead of) your physiotherapist.",
  keywords: [
    "training with injury amsterdam",
    "personal trainer injury amsterdam",
    "strength training after physio amsterdam",
    "rehab training amsterdam jordaan",
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
          { name: "Training with an Injury", url: "/en/blog/physiotherapist-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Training with an Injury or Pain in Amsterdam"
        description="An injury doesn't have to mean the end of your training. How to build strength training in coordination with your physiotherapist."
        url="/en/blog/physiotherapist-personal-trainer-amsterdam"
        datePublished="2026-03-30"
        dateModified="2026-05-08"
      />
      <FaqJsonLd faqs={[
        { question: "Does SculptClub have a physiotherapist on staff?", answer: "Not currently. For diagnosis, treatment and rehabilitation we refer you to a licensed physiotherapist. Our personal trainers take over once your physio gives the green light — strength, technique, progressive loading." },
        { question: "Can I train with a herniated disc?", answer: "Your physiotherapist or doctor decides that, not your personal trainer. With clearance from your treating clinician, our trainers can build you up safely — under the load tolerance they set." },
        { question: "Does my insurance cover the sessions?", answer: "Personal training is not covered by basic health insurance. Some supplementary plans partially cover (para)medical fitness — check your policy." },
        { question: "Where is SculptClub located?", answer: "Egelantiersgracht 424, Amsterdam Jordaan. Open daily 06:30–22:00. For PT sessions your trainer arranges access; for Open Gym you receive a door code via WhatsApp. No buzzer, no reception desk." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Training with an Injury or Pain in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  Updated 8 May 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Private personal training studio at SculptClub Amsterdam"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Honest: we are not physiotherapists.</strong>
                    <span className="text-muted-foreground">
                      SculptClub doesn&apos;t currently have a physiotherapist on staff.
                      For diagnosis, treatment and rehabilitation we recommend consulting
                      a licensed physiotherapist first. What our personal trainers do
                      offer: progressive strength training under supervision once your
                      treating clinician gives the green light.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Back pain, a knee niggle, or an old shoulder injury that just won&apos;t
                resolve. You want to train (again) — but you don&apos;t know how to build
                back up safely. Below we explain how we approach the transition from
                treatment to independent training, in coordination with your physiotherapist.
              </p>

              <h2>Physiotherapy first, training second</h2>
              <p>
                The roles are different. A <strong>physiotherapist</strong> diagnoses,
                treats where needed, and decides when you&apos;re cleared to load. A{" "}
                <strong>personal trainer</strong> takes it from there: progressive
                strength, technique, building load tolerance. Both are necessary — but
                they&apos;re not the same job, and we only do the second one.
              </p>
              <p>
                Still in active treatment? We ask your trainer to coordinate with your
                physiotherapist. Which movements are safe? What&apos;s your current load
                tolerance? What should programming avoid for now? That prevents
                contradictory advice.
              </p>

              <h2>What a good personal trainer can do</h2>
              <ul>
                <li><strong>Watch your technique</strong> — faulty movement patterns are often the cause of complaints. Your trainer corrects them session after session.</li>
                <li><strong>Programmed progression</strong> — no generic plan, but a build that accounts for your situation and your goals.</li>
                <li><strong>Dose the load</strong> — recovery and strength built simultaneously, at a pace that works for your body.</li>
                <li><strong>Prevent relapse</strong> — once recovered, we make sure you don&apos;t make the same mistake twice.</li>
              </ul>

              <h2>A private studio helps</h2>
              <p>
                In a busy gym you train anonymously. Nobody sees your compensation
                pattern getting worse, or that you&apos;re bracing wrong. At SculptClub
                you train <a href="/en/studio-rental" className="text-brand hover:underline">one-on-one in a private studio</a> — just
                you and your trainer. Full attention on your movement, every session.
              </p>

              <h2>How to start</h2>
              <p>
                Still in active treatment? Talk to your physiotherapist first about
                whether strength training is right for you now. With the green light,
                book a free intro with us — no obligations, no cost. We&apos;ll discuss
                your situation, goals and options, and figure out together which trainer
                is the best match.
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
              <h2 className="text-xl font-bold mb-2">Book a free intro</h2>
              <p className="text-muted-foreground mb-6">
                Tell us your situation. We listen, think along, and point you toward
                the right trainer — or, if it&apos;s a better fit, toward a physiotherapist.
              </p>
              <ButtonLink href="/en/find-personal-trainer">
                Find your personal trainer <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
