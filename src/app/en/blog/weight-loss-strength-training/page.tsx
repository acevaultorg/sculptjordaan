import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Weight Loss Through Strength Training: Why It Works — SculptClub",
  description:
    "Want to lose weight? Discover why strength training is more effective than cardio for fat loss. The science behind the afterburn effect, metabolism, and practical tips.",
  keywords: [
    "weight loss strength training",
    "strength training fat loss",
    "lose weight gym",
    "strength training weight loss women",
    "fat burning strength training",
    "weight loss personal trainer amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/weight-loss-strength-training",
    languages: {
      nl: "/nl/blog/afvallen-met-krachttraining",
      en: "/en/blog/weight-loss-strength-training",
    },
  },
};

export default function WeightLossStrengthTrainingEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Weight Loss Through Strength Training", url: "/en/blog/weight-loss-strength-training" },
        ]}
      />
      <BlogPostingJsonLd
        title="Weight Loss Through Strength Training: Why It Works"
        description="Discover why strength training is more effective than cardio for fat loss. The science behind metabolism, the afterburn effect, and practical tips."
        url="/en/blog/weight-loss-strength-training"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Weight Loss Through Strength Training: Why It Works
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  March 24, 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Strength training for weight loss at SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Many people believe you need to run, cycle, or swim to lose weight. Cardio has been the go-to advice
                for weight loss for years. But science tells a different story: strength training is at least as
                effective, and in the long run even more so. In this article, we explain why.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The problem with cardio alone</h2>
              <p>
                Cardio burns calories during your workout. That much is true. But as soon as you stop running, the
                calorie burn largely stops too. On top of that, your body adapts quickly: after a few weeks, the same
                run burns fewer calories than it did at the start. You have to train longer or harder to get the same
                effect.
              </p>
              <p>
                Worse still: prolonged cardio without strength training puts you at risk of losing muscle mass. And
                that is exactly what you do not want when trying to lose weight, because your muscles are your
                fat-burning engines.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How strength training stimulates fat loss</h2>
              <p>
                Strength training promotes fat loss in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>More muscle mass = higher resting metabolism</strong> — Muscles burn more energy at rest than fat tissue. The more muscle mass you have, the more calories your body burns automatically, even while sitting on the couch.</li>
                <li><strong>The afterburn effect (EPOC)</strong> — After an intense strength training session, your body continues to burn extra calories for hours or even days as it recovers. This effect is significantly stronger than with cardio.</li>
                <li><strong>Improved insulin sensitivity</strong> — Strength training helps your body process carbohydrates more efficiently, so less energy is stored as fat.</li>
                <li><strong>Hormonal response</strong> — Strength training stimulates the production of growth hormone and testosterone, both essential for fat loss and muscle building.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">The science behind the afterburn effect</h2>
              <p>
                The afterburn effect, officially known as EPOC (Excess Post-exercise Oxygen Consumption), is the
                phenomenon where your body uses extra oxygen after your workout to recover. This costs energy. With
                strength training, this effect can last 24 to 72 hours, depending on the intensity of your session.
                With cardio, the effect typically only lasts 1 to 2 hours.
              </p>
              <p>
                In practical terms, this means that after a solid strength training session, you continue to burn
                extra calories throughout the entire next day, without having to do anything for it.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Practical tips for losing weight with strength training</h2>
              <p>
                Ready to get started? Here are concrete tips to get the best results:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Train 2 to 3 times per week</strong> — This is enough to build muscle mass and burn fat. Give your body rest between sessions.</li>
                <li><strong>Focus on compound exercises</strong> — Squats, deadlifts, bench press, and rows target multiple muscle groups at once and burn more calories.</li>
                <li><strong>Progressive overload</strong> — Gradually increase the weight or the number of repetitions. This keeps your body adapting and growing.</li>
                <li><strong>Pair it with a high-protein diet</strong> — Protein is essential for muscle recovery and keeps you feeling full for longer.</li>
                <li><strong>Get enough sleep</strong> — Your muscles recover during sleep, and your body regulates the hormones that influence fat loss.</li>
                <li><strong>Be patient</strong> — The scale may stay the same or even go up initially, because muscle weighs more than fat. Track your progress with photos and how your clothes fit as well.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a personal trainer helps with weight loss</h2>
              <p>
                Training on your own is perfectly fine if you have mastered the basic exercises. But if you are
                serious about losing weight, a personal trainer makes a huge difference. A trainer provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A program tailored to your goals and fitness level</li>
                <li>Proper technique to prevent injuries and maximize results</li>
                <li>Accountability — you have an appointment, so you show up</li>
                <li>Progression — your trainer adjusts your program as you get stronger</li>
                <li>Motivation — on the days when you are not feeling it</li>
              </ul>
              <p>
                At SculptClub, you train in a private studio with professional equipment, guided by an experienced
                trainer. The first intake is always free, so you can get acquainted with no strings attached.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Start today</h2>
              <p>
                Weight loss through strength training works. It is proven, it is sustainable, and it gives you not
                just a leaner body, but a stronger and healthier one too. Start with 2 sessions per week, focus on
                the basics, and give yourself time. The results will come.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym in the Jordaan Amsterdam</p></a>
                <a href="/en/blog/first-time-gym-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First time gym tips</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training beginners guide</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/improve-body-composition-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Improve body composition</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Want to lose weight with guidance?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free intake and discover how a personal trainer can help you reach your weight loss goals.
              </p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">
                Find your trainer
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
