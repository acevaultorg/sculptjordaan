import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Prenatal Personal Trainer in Amsterdam — SculptClub",
  description:
    "Stay strong safely through pregnancy. Private studio in the Jordaan, female trainers experienced with prenatal strength, mobility and birth preparation.",
  keywords: [
    "prenatal personal trainer amsterdam",
    "pregnancy personal trainer amsterdam",
    "pregnant strength training amsterdam",
    "prenatal fitness amsterdam",
    "safe pregnancy workout amsterdam",
    "prenatal training jordaan",
  ],
  alternates: {
    canonical: "/en/blog/prenatal-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-zwangerschap-amsterdam",
      en: "/en/blog/prenatal-personal-trainer-amsterdam",
    },
  },
};

export default function PrenatalPTAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Prenatal personal trainer", url: "/en/blog/prenatal-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Prenatal Personal Trainer in Amsterdam" description="How to keep training safely through pregnancy, trimester by trimester, and why a female trainer with prenatal experience changes the picture." url="/en/blog/prenatal-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Prenatal Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub private studio — a calm place to keep training through pregnancy" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Staying active through pregnancy is, for most uncomplicated pregnancies, a
                good idea — provided intensity and exercise selection move with your body.
                The old advice of "rest is best" has been superseded: current research and
                obstetric guidelines support moderate strength training and mobility work as
                protective against back pain, gestational diabetes, and they tend to make
                postpartum recovery easier.
              </p>
              <p>
                That said: a big-box gym is rarely a comfortable place to train while
                pregnant. SculptClub in the Jordaan is a quiet alternative — a private
                studio, no crowds, and female trainers experienced with prenatal clients.
                This guide covers what&apos;s safe, what changes trimester by trimester, and
                how to start.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">First: green light from your provider</h2>
              <p>
                Before you start or continue structured training, a short check-in with your
                midwife or OB/GYN is appropriate. For a healthy pregnancy this is usually a
                formality. If you have a history of miscarriage, a twin pregnancy, certain
                blood-pressure or placenta issues, there may be restrictions — and those you
                always follow.
              </p>
              <p>
                Red flags that stop training and require contact with your provider: vaginal
                bleeding, unusual pain, dizziness, severe shortness of breath, contractions,
                fluid loss. These are not "just part of training" — call first, train only
                after green light.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What changes trimester by trimester</h2>

              <h3 className="text-xl font-bold mt-8 mb-3">First trimester (weeks 1-13)</h3>
              <p>
                Little changes externally, but a lot internally. Nausea and fatigue can make
                training uncomfortable. If you already have a routine: mostly continue at
                similar intensity if your energy allows. What we adjust: no new personal
                records, more attention to hydration, less high-impact jumping or impact
                work.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Second trimester (weeks 14-27)</h3>
              <p>
                Often the most comfortable window. Nausea eases, energy returns, the bump
                grows. From around week 16 we avoid supine (on-back) exercises (vena cava
                compression) and adapt to side-lying or upright variations. Strength and
                conditioning remain possible — in a controlled form with focus on technique
                and breath.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Third trimester (weeks 28-birth)</h3>
              <p>
                Relaxin loosens joints, balance shifts, fatigue often returns. We reduce
                intensity and focus on posture, pelvic floor, and birth preparation (hip
                mobility, leg strength). Many clients continue with short sessions close to
                the due date — but your body sets the pace.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What a prenatal-aware trainer does</h2>
              <ul>
                <li><strong>Adapts compound lifts:</strong> Squats, deadlifts and pulling variations usually stay safe with moderate load; we avoid the Valsalva manoeuvre (breath-holding).</li>
                <li><strong>Core emphasis:</strong> No classic crunches or full planks in the back half — instead, breath-led core activation and dead bugs.</li>
                <li><strong>Pelvic-floor work:</strong> Both relaxation and activation. Overactive pelvic floor can make labour harder; underactive leads to postpartum problems.</li>
                <li><strong>Cardio within comfort:</strong> Walking, light bike, swimming — heart rate isn&apos;t a hard line any more (old 140 rule); we go by "can I still talk?" (Borg 6-7).</li>
                <li><strong>Hip mobility:</strong> Preparing for birth by maintaining hip and lower-back range.</li>
                <li><strong>Balance and fall prevention:</strong> Centre of gravity shifts; single-leg work only with support.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a female trainer tips the balance</h2>
              <p>
                Same reasons as postpartum, only more acute. Conversations about nausea,
                pelvic floor, sexuality during pregnancy and breastfeeding prep are easier
                and more precise with someone who has been through it or works daily with
                pregnant clients. See also the{" "}
                <a href="/en/blog/female-personal-trainer-amsterdam" className="text-brand hover:underline">female-trainer guide</a>.
              </p>
              <p>
                SculptClub has three female trainers:
              </p>
              <ul>
                <li><strong><a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">Gezina</a></strong> — women&apos;s training, strength, performance. First pick for prenatal clients.</li>
                <li><strong>Eva</strong> — certified dietitian and PT. Nutrition adjustments during pregnancy plus strength work.</li>
                <li><strong>Andrea</strong> — strength, posture, technique. Detailed cueing, controlled pace.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Practical — training while pregnant</h2>
              <ul>
                <li><strong>Open 06:30-22:00 daily:</strong> Schedule around your energy, not around opening hours.</li>
                <li><strong>Private studio:</strong> No mirror wall, no bench-press audience. Your pace, your space.</li>
                <li><strong>Cancellation always free:</strong> Off day? You cancel and we rebook. No hassle.</li>
                <li><strong>No contract:</strong> Buy a 4- or 8-session package. Pause around the birth with no notice period.</li>
                <li><strong>Works with your pelvic-floor physio:</strong> Ask your physio to share notes with your trainer — much faster than parallel programmes.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <ol>
                <li>Check with your midwife or OB/GYN that structured exercise suits your pregnancy.</li>
                <li>Book a{" "}
                  <a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">free intro with Gezina</a>{" "}
                  (or another female trainer). 45-60 minutes, no cost.</li>
                <li>During the intro you discuss your trimester, any restrictions and goals. The trainer builds a plan together with you.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/postpartum-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Postpartum personal trainer</p></a>
                <a href="/en/blog/female-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Female personal trainer</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapist as personal trainer</p></a>
                <a href="/en/blog/nutrition-coach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Nutrition coach in Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Train safely through your pregnancy</h3>
              <p className="text-muted-foreground mb-6">Book a free intro with a female trainer. Your pace, your trimester.</p>
              <ButtonLink href="/en/plan-free-intro-with-gezina" size="lg">Book with Gezina<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
