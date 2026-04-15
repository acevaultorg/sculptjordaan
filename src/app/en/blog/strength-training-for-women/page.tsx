import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Strength Training for Women in Amsterdam — SculptClub",
  description:
    "Strength training is the best investment in your health. Personal training for women at SculptClub Amsterdam. Free intro session.",
  keywords: [
    "strength training for women amsterdam",
    "women personal trainer amsterdam",
    "gym for women amsterdam",
    "weight training women amsterdam",
    "fitness for women amsterdam",
    "strength training women beginners",
  ],
  alternates: {
    canonical: "/en/blog/strength-training-for-women",
    languages: {
      nl: "/nl/blog/krachttraining-voor-vrouwen",
      en: "/en/blog/strength-training-for-women",
    },
  },
};

export default function StrengthTrainingForWomenEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Strength training for women", url: "/en/blog/strength-training-for-women" }]} />
      <BlogPostingJsonLd title="Strength Training for Women in Amsterdam" description="Why strength training is the best investment for women and how to start at SculptClub." url="/en/blog/strength-training-for-women" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Strength Training for Women in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Dumbbell rack at SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Strength training isn&apos;t just for men. It&apos;s the most underrated investment in
                women&apos;s health. Stronger bones, better posture, more energy, and a body that
                stays functionally fit well into old age. Yet many women still stick to cardio
                only. Time to change that.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why strength training matters especially for women</h2>
              <p>
                After thirty, women lose an average of 3-5% of muscle mass per decade. After
                menopause, this accelerates. Strength training reverses this process. The
                benefits go far beyond building muscle:
              </p>
              <ul>
                <li><strong>Bone density:</strong> Strength training stimulates bone growth and reduces osteoporosis risk</li>
                <li><strong>Metabolism:</strong> More muscle mass means a higher resting metabolic rate, even on the sofa</li>
                <li><strong>Posture:</strong> Strong back and shoulder muscles correct a sedentary work posture</li>
                <li><strong>Mental health:</strong> Strength training reduces stress, anxiety and depressive symptoms</li>
                <li><strong>Functional strength:</strong> Carrying groceries, climbing stairs, lifting children — everything becomes easier</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">&quot;Won&apos;t I get too bulky?&quot;</h2>
              <p>
                No. Women produce a fraction of the testosterone that men have. The images of
                extremely muscular women you see online are the result of years of highly
                specific training, strict nutrition, and sometimes supplements. Normal strength
                training gives you a toned, strong body — not a bodybuilder silhouette. Your
                trainer adjusts your programme to your goals.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private training: no stares, no discomfort</h2>
              <p>
                Many women feel uncomfortable in the weights section of a large gym. The male
                dominance, the stares, the feeling of being watched. At SculptClub you train
                in a <a href="/en/studio" className="text-brand hover:underline">private
                studio</a> — just you and your trainer. You receive your door code via WhatsApp
                the evening before. No reception, no waiting, no audience.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">A programme tailored to you</h2>
              <p>
                No standard template. Your trainer creates a programme based on your goals,
                experience and available time. Whether you want to lose weight, get stronger,
                or simply feel fitter — the plan fits you. Every few weeks your trainer
                evaluates progress and adjusts.
              </p>
              <p>
                SculptClub has five trainers with diverse specialisations. From{" "}
                <a href="/en/blog/nutrition-coach-amsterdam" className="text-brand hover:underline">nutrition coaching</a> to{" "}
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">physiotherapy</a> —
                you&apos;ll find the expertise that suits you.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <p>
                Step 1: Choose a trainer on our{" "}
                <a href="/en/find-personal-trainer" className="text-brand hover:underline">trainers page</a>.
                Step 2: Book your free intro session. Step 3: Start. The first session is
                always free and no-obligation. Personal training starts from €45 per session.
                No membership, no contract. <a href="/en/faqs" className="text-brand hover:underline">Cancellation
                is always free</a>.
              </p>
              <p>
                Prefer to train independently? With <a href="/en/open-gym" className="text-brand hover:underline">Open
                Gym</a> you can train on your own in our private studio, from €5.75 per session.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
                <a href="/en/blog/weight-loss-strength-training" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Weight loss with strength training</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to get stronger?</h3>
              <p className="text-muted-foreground mb-6">Book a free intro session and discover what strength training can do for you.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
