import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Postpartum Personal Trainer in Amsterdam — SculptClub",
  description:
    "Return to strength training safely after birth. Private studio in the Jordaan, female trainers with postpartum experience. Free intro, no contract.",
  keywords: [
    "postpartum personal trainer amsterdam",
    "personal trainer after birth amsterdam",
    "postnatal training amsterdam",
    "return to gym after pregnancy amsterdam",
    "diastasis recti trainer amsterdam",
    "pelvic floor training amsterdam",
    "mom fitness amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/postpartum-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-na-bevalling-amsterdam",
      en: "/en/blog/postpartum-personal-trainer-amsterdam",
    },
  },
};

export default function PostpartumPTAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Postpartum personal trainer", url: "/en/blog/postpartum-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Postpartum Personal Trainer in Amsterdam" description="How to safely return to strength training after birth, and why a female trainer with postpartum experience changes the picture." url="/en/blog/postpartum-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Postpartum Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub private studio — a quiet place to restart postpartum" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Getting back to training after birth is rarely straightforward. Your body has
                been through nine months of change, then a delivery, then often months of
                broken sleep, altered muscle tone, and a core/pelvic floor that don&apos;t do
                what they used to without thinking. In a big-box gym you end up in the same
                room as 20-year-olds on bench presses — fine in principle, but the context
                doesn&apos;t help.
              </p>
              <p>
                SculptClub in the Jordaan offers a quieter alternative: a private studio, no
                audience, and female trainers experienced with postpartum clients. This guide
                covers what to watch for, when you can start, and how a personal trainer makes
                the process safer and faster.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">When is it safe to start?</h2>
              <p>
                The standard first benchmark is the 6-week check with your GP or midwife after
                an uncomplicated birth (longer after a C-section or complications). Green light
                there means you can begin gentle training — not that you&apos;re back to your
                pre-pregnancy level. Building back progressively usually takes 3 to 9 months,
                depending on the delivery, how recovery is going, and whether you&apos;re
                breastfeeding.
              </p>
              <p>
                More important than a date: how does your core feel, is there diastasis recti
                (separation of the rectus abdominis), how stable is your pelvic floor, and
                where is there pain or instability? A proper postpartum intake starts with
                those questions — not "how much can you lift?"
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What a postpartum-aware trainer watches for</h2>
              <ul>
                <li><strong>Diastasis recti:</strong> Avoid exercises that push the abdominal wall forward (classic crunches, full planks) until the gap closes. Instead: breath-led core activation, dead bugs, mindful side planks.</li>
                <li><strong>Pelvic floor:</strong> Leaking when you jump or cough isn&apos;t "just part of motherhood" — it signals the pelvic floor needs attention. Often done alongside a pelvic-floor physiotherapist.</li>
                <li><strong>Joints:</strong> Relaxin (the pregnancy hormone) stays in your system for weeks to months, especially if you&apos;re breastfeeding. Joints are slightly looser and less stable — technique matters more.</li>
                <li><strong>Energy and sleep:</strong> A programme that assumes 8 hours&apos; sleep doesn&apos;t work. Gradual intensity, shorter sessions, lots of breathing room.</li>
                <li><strong>Mental side:</strong> Returning to training is often emotional too. Small, achievable goals build confidence faster than ambitious plans.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a female trainer tips the balance</h2>
              <p>
                Not because male trainers can&apos;t learn this — but because conversations
                about pelvic floor, C-section recovery, sexuality and breastfeeding are easier
                and more precise with someone who can speak from experience. The{" "}
                <a href="/en/blog/female-personal-trainer-amsterdam" className="text-brand hover:underline">female-trainer guide</a>{" "}
                explains why many women have this preference; postpartum is the most pronounced
                version of it.
              </p>
              <p>
                SculptClub has three female trainers on the roster:
              </p>
              <ul>
                <li><strong><a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">Gezina</a></strong> — specialises in women&apos;s training, strength and cycle-aware programming. First pick for postpartum clients.</li>
                <li><strong>Eva</strong> — certified dietitian and personal trainer. Combine nutrition recovery (including breastfeeding) with strength training.</li>
                <li><strong>Andrea</strong> — strength, posture and technique. Gradual ramp, detailed cueing.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">What a first postpartum programme looks like</h2>
              <p>
                A typical ramp at SculptClub, adapted to your starting point:
              </p>
              <ol>
                <li><strong>Weeks 1-4 post green-light:</strong> Breathwork, core activation, walking, gentle compound patterns without load (box squat, hip hinge).</li>
                <li><strong>Weeks 4-8:</strong> Light resistance, dumbbells, mobility. Volume low, technique first. Breastfeeding mothers: schedule sessions after a feed for comfort.</li>
                <li><strong>Months 3-6:</strong> Progressive overload. Reintroducing heavier compound lifts (squat, deadlift, pull-down) as core and pelvic floor stabilise.</li>
                <li><strong>Month 6+:</strong> Performance training if you want it. Strength goals, conditioning, body composition.</li>
              </ol>
              <p>
                No two postpartum experiences are identical. Pace is dictated by what your body
                reports, not by social media.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Practical — training with a baby</h2>
              <ul>
                <li><strong>Open 06:30-22:00 daily:</strong> Fit a session before partner leaves for work, during afternoon nap, or evening when someone&apos;s home.</li>
                <li><strong>Cancellation is always free:</strong> No 24-hour rule. Rough night? You cancel and we rebook. No hassle.</li>
                <li><strong>Private studio:</strong> No changing-room logistics. WhatsApp door code, trainer waiting.</li>
                <li><strong>No contract:</strong> Buy a package when you&apos;re ready. Pause for months if you need to.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Working with a pelvic-floor physiotherapist</h2>
              <p>
                For many postpartum clients, a pelvic-floor physio is the first stop. If you&apos;re
                already being treated, our trainers coordinate with your therapist so the
                programmes reinforce rather than conflict.{" "}
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a>{" "}
                works as a physiotherapist BSc at SculptClub — a useful bridge if you want
                physio guidance and PT guidance in one place.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <ol>
                <li>Book a{" "}
                  <a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">free intro with Gezina</a>{" "}
                  (or another female trainer). 45-60 minutes, no cost.</li>
                <li>During the intro you discuss the birth, your recovery, your goals and any limitations. Open and without judgement.</li>
                <li>Trainer builds a first plan together with you. First session is booked when you&apos;re ready.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/female-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Female personal trainer</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapist as personal trainer</p></a>
                <a href="/en/blog/nutrition-coach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Nutrition coach in Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start back safely?</h3>
              <p className="text-muted-foreground mb-6">Book a free intro with a female trainer. Honest, at your pace.</p>
              <ButtonLink href="/en/plan-free-intro-with-gezina" size="lg">Book with Gezina<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
