import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Improve Body Composition Amsterdam — SculptClub",
  description:
    "Less fat, more muscle — without crash diets. Personal training focused on body recomposition at SculptClub Amsterdam Jordaan. Free intro session.",
  keywords: [
    "improve body composition amsterdam",
    "body recomposition amsterdam",
    "personal trainer body composition amsterdam",
    "lose fat gain muscle amsterdam",
    "reduce body fat amsterdam",
    "build muscle amsterdam",
    "personal trainer body recomp amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/improve-body-composition-amsterdam",
    languages: {
      en: "/en/blog/improve-body-composition-amsterdam",
      nl: "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam",
    },
  },
};

export default function ImproveBodyCompositionAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/en/blog" },
          { name: "Improve body composition", url: "/en/blog/improve-body-composition-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Improve Body Composition in Amsterdam"
        description="Less fat, more muscle — without crash diets. How personal training at SculptClub structurally improves your body composition."
        url="/en/blog/improve-body-composition-amsterdam"
        datePublished="2026-04-23"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Improve Body Composition in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />23 April 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Personal training studio SculptClub Amsterdam Jordaan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                The scale only tells half the story. Two people can weigh exactly the same and
                look completely different — because their body composition differs. What matters
                is the ratio between fat mass and muscle mass. Improving that ratio is precisely
                what targeted personal training achieves.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                What is body composition and why does it matter?
              </h2>
              <p>
                Body composition describes what percentage of your body weight consists of fat,
                muscle, bone, and water. A high body fat percentage at a normal weight —
                sometimes called <em>skinny fat</em> — carries the same health risks as
                overweight on the scale. Conversely, people with significant muscle mass may
                weigh more than the &ldquo;ideal weight&rdquo; while being in excellent health.
              </p>
              <p>
                Reducing body fat while building muscle simultaneously is called{" "}
                <strong>body recomposition</strong>. It requires two things at once: the right
                training and nutrition that supports that process. That&rsquo;s exactly why
                random cardio or a crash diet rarely works — you also lose muscle mass, which
                slows your metabolism and makes results harder to maintain.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                How strength training changes your body composition
              </h2>
              <p>
                Strength training is the most effective method to improve body composition.
                Here&rsquo;s why:
              </p>
              <ul>
                <li>
                  <strong>Muscle stimulation:</strong> Resistance training signals your body to
                  synthesise muscle protein. That new muscle tissue is metabolically active — it
                  burns calories even at rest.
                </li>
                <li>
                  <strong>Afterburn effect:</strong> After intense strength training, your
                  metabolism stays elevated. This is known as EPOC (Excess Post-exercise Oxygen
                  Consumption) — you continue burning extra calories for hours after your workout.
                </li>
                <li>
                  <strong>Hormonal response:</strong> Heavy training stimulates growth hormone
                  and testosterone production — both play a direct role in fat burning and muscle
                  recovery.
                </li>
                <li>
                  <strong>Insulin sensitivity:</strong> Regular strength training improves the
                  insulin sensitivity of your muscle cells. This means carbohydrates are more
                  likely to be stored in muscles than as body fat.
                </li>
              </ul>
              <p>
                Cardio has its place — but as the primary method for body recomposition, it
                falls short. Those who only run or cycle lose weight but also precious muscle
                mass. The result: a lower weight with the same or higher fat ratio.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Nutrition as the second pillar
              </h2>
              <p>
                Training and nutrition are inseparable. You can&rsquo;t out-train a poor diet.
                But &ldquo;eating less&rdquo; isn&rsquo;t the answer either — it&rsquo;s about
                the <em>composition</em> of your diet:
              </p>
              <ul>
                <li>
                  <strong>Protein intake:</strong> Sufficient protein (1.6–2.2 g per kg body
                  weight per day) is essential for muscle recovery and growth. Without that
                  signal, your body won&rsquo;t build muscle — even if you train hard.
                </li>
                <li>
                  <strong>Calorie balance:</strong> Body recomposition works best at a slight
                  calorie deficit or maintenance calories — not extreme restrictions that put your
                  body into &ldquo;starvation mode.&rdquo;
                </li>
                <li>
                  <strong>Timing:</strong> Eating around your training — fuel before, recovery
                  after — optimises muscle protein synthesis.
                </li>
              </ul>
              <p>
                At SculptClub, we work with a{" "}
                <a href="/en/blog/nutrition-coach-amsterdam" className="text-brand hover:underline">
                  nutrition coach
                </a>{" "}
                who aligns your diet with your training goals. No crash diet, no calorie counting
                to the last gram — just a sustainable pattern that works for you.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Tracking progress
              </h2>
              <p>
                Improving body composition takes patience — and the right measurement methods.
                The scale is a poor gauge: if you&rsquo;re simultaneously losing fat and building
                muscle, weight can stay stable for weeks while you&rsquo;re visibly changing.
              </p>
              <p>
                Better indicators:
              </p>
              <ul>
                <li>Circumference measurements (waist, hips, thighs, upper arms)</li>
                <li>Before and after photos every 4 weeks</li>
                <li>How clothing fits</li>
                <li>Training performance (more weight, more reps)</li>
                <li>Energy levels and sleep quality</li>
              </ul>
              <p>
                Your trainer at SculptClub tracks these benchmarks and adjusts your programme
                when progress stalls. That adjustment is precisely where a personal trainer adds
                value over a self-written plan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                How long does it take?
              </h2>
              <p>
                Honest answer: longer than most people hope, but shorter than they fear. Body
                recomposition — losing fat and building muscle simultaneously — is a slower
                process than purely cutting or bulking. Realistic expectations:
              </p>
              <ul>
                <li>
                  <strong>Month 1–2:</strong> Body adapts to training. Energy improves.
                  First visual changes visible to people who know you.
                </li>
                <li>
                  <strong>Month 3–4:</strong> Clearly measurable fat loss. Clothes fit looser.
                  Strength increases noticeably.
                </li>
                <li>
                  <strong>Month 5–6:</strong> Significant change in physique. New habits feel
                  natural and automatic.
                </li>
              </ul>
              <p>
                Those who train three times per week and get their nutrition on track will see
                unmistakable results after 12 weeks.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Personal training at SculptClub
              </h2>
              <p>
                At SculptClub you train in a{" "}
                <a href="/en/studio" className="text-brand hover:underline">
                  private studio
                </a>{" "}
                in Amsterdam Jordaan. No queue for equipment, no distractions — just you, your
                trainer, and a focused programme. Our trainers have diverse specialisations:{" "}
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">
                  physiotherapy-backed training
                </a>
                ,{" "}
                <a href="/en/blog/nutrition-coach-amsterdam" className="text-brand hover:underline">
                  nutrition coaching
                </a>
                , and specific goals like{" "}
                <a href="/en/blog/strength-training-for-women" className="text-brand hover:underline">
                  strength training for women
                </a>{" "}
                or{" "}
                <a href="/en/blog/lose-weight-with-strength-training" className="text-brand hover:underline">
                  losing weight with strength training
                </a>
                .
              </p>
              <p>
                Personal training starts at €45 per session. No membership, no contract. Your
                first intake is free and non-committal — we discuss your goals and build a plan.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Keep reading</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="/en/blog/lose-weight-with-strength-training"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Lose weight with strength training
                  </p>
                </a>
                <a
                  href="/en/blog/strength-training-for-women"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Strength training for women
                  </p>
                </a>
                <a
                  href="/en/blog/nutrition-coach-amsterdam"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Nutrition coach Amsterdam
                  </p>
                </a>
                <a
                  href="/en/blog/how-much-does-personal-training-cost-amsterdam"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    How much does personal training cost?
                  </p>
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to transform your physique?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free intro session and discover how personal training structurally
                improves your body composition.
              </p>
              <ButtonLink href="/en/free-intro" size="lg">
                Book free intro
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
