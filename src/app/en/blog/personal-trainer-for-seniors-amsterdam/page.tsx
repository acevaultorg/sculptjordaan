import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer for Seniors in Amsterdam — SculptClub" },
  description:
    "Stay fit and strong as you age. A personal trainer helps seniors train safely. Free intro session at SculptClub Amsterdam.",
  keywords: [
    "personal trainer seniors amsterdam",
    "fitness seniors amsterdam",
    "strength training elderly amsterdam",
    "personal training over 50",
    "exercise for seniors amsterdam",
    "fall prevention training amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-for-seniors-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-voor-senioren-amsterdam",
      en: "/en/blog/personal-trainer-for-seniors-amsterdam",
    },
  },
};

export default function PTForSeniorsEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer for seniors", url: "/en/blog/personal-trainer-for-seniors-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer for Seniors in Amsterdam" description="Why strength training is essential for seniors and how SculptClub helps." url="/en/blog/personal-trainer-for-seniors-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer for Seniors in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub private studio interior" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                After fifty, your body changes. Muscle mass decreases, bones become more
                fragile and balance gradually deteriorates. But the good news: with the right
                training you can slow and even reverse this process. Strength training is
                the most effective tool — and it&apos;s never too late to start.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why strength training is essential after 50</h2>
              <p>
                From your thirties, you lose an average of 3-8% of muscle mass per decade.
                After fifty, this accelerates. Less muscle means less strength, a slower
                metabolism and a higher risk of falls. Strength training reverses this:
              </p>
              <ul>
                <li><strong>Stronger bones:</strong> Loading stimulates bone growth and reduces osteoporosis</li>
                <li><strong>Better balance:</strong> Strong legs and a stable core reduce fall risk</li>
                <li><strong>More independence:</strong> Carrying groceries, climbing stairs, getting out of a chair</li>
                <li><strong>Higher metabolism:</strong> More muscle mass burns more calories at rest</li>
                <li><strong>Better mood:</strong> Strength training reduces anxiety, depression and sleep problems</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private guidance makes the difference</h2>
              <p>
                As a senior, proper technique is even more important than for younger athletes.
                Joints are more vulnerable, recovery time is longer and the risk of overload
                is greater. A personal trainer adapts every exercise to your body, your
                limitations and your goals.
              </p>
              <p>
                At SculptClub you train in a <a href="/en/studio" className="text-brand hover:underline">private
                studio</a> — no crowds, no rush, no discomfort. You receive your door code
                via WhatsApp the evening before. You set the pace.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Physiotherapist on the team</h2>
              <p>
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a> works
                as a physiotherapist BSc at SculptClub. He has experience with older adults,
                rehabilitation and chronic conditions. If you&apos;re unsure whether training is
                right for you, he&apos;s the ideal trainer to start with. The{" "}
                <a href="/en/free-intro" className="text-brand hover:underline">first intro session</a> is
                always free.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What to expect</h2>
              <p>
                A typical training programme for seniors at SculptClub includes:
              </p>
              <ul>
                <li><strong>Warm-up:</strong> Light cardio and mobility to prepare joints</li>
                <li><strong>Strength training:</strong> Functional exercises with machines, dumbbells or bodyweight</li>
                <li><strong>Balance exercises:</strong> Single-leg work and core stability for fall prevention</li>
                <li><strong>Cool-down:</strong> Stretching and breathing for recovery</li>
              </ul>
              <p>
                Intensity builds gradually. Your trainer tracks your progress and adjusts
                the programme every few weeks.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Pricing and how to start</h2>
              <p>
                Personal training at SculptClub starts from €45 per session. No membership,
                no contract. <a href="/en/faqs" className="text-brand hover:underline">Cancellation
                is always free</a>. Most seniors train 1-2 times per week — enough for
                noticeable results.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Stay fit at any age</h3>
              <p className="text-muted-foreground mb-6">Book a free intro and discover what personal training can do for you.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
