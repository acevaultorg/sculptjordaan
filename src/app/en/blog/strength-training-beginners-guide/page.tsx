import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Strength Training for Beginners: Complete Guide — SculptClub",
  description:
    "Start strength training the right way. Learn the fundamental exercises, how often to train, and how to avoid injuries in this complete beginner's guide.",
  keywords: [
    "strength training beginners",
    "beginner strength training guide",
    "how to start strength training",
    "gym beginners amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/strength-training-beginners-guide",
    languages: {
      nl: "/nl/blog/krachttraining-voor-beginners",
      en: "/en/blog/strength-training-beginners-guide",
    },
  },
};

export default function BlogPostEN2() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Strength Training for Beginners", url: "/en/blog/strength-training-beginners-guide" },
        ]}
      />
      <BlogPostingJsonLd
        title="Strength Training for Beginners: Complete Guide"
        description="Start strength training the right way. Learn the fundamental exercises and how to avoid injuries."
        url="/en/blog/strength-training-beginners-guide"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Strength Training for Beginners: Complete Guide
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

            <div className="prose prose-lg max-w-none">
              <p>
                Strength training is one of the best things you can do for your health. It helps you get stronger, improves
                your posture, boosts your metabolism, and contributes to your overall well-being. But when you are just
                starting out, it can feel overwhelming. Where do you begin? How heavy should you lift? And how do you prevent
                injuries? This complete guide answers all your questions.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why strength training?</h2>
              <p>
                Strength training offers benefits that go far beyond building muscle. Scientific research shows that regular
                strength training helps prevent osteoporosis, improves mental health, lowers blood pressure, and increases
                energy levels. It also aids weight management: more muscle mass means a higher resting metabolism.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The 5 fundamental exercises for beginners</h2>
              <p>
                As a beginner, you do not need to learn dozens of exercises. Start with these five compound movements that
                train multiple muscle groups at once:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Squat</strong> — Trains your quads, glutes, and core. Start with your own bodyweight and
                  gradually add weight.
                </li>
                <li>
                  <strong>Deadlift</strong> — One of the most effective exercises for your entire posterior chain: back,
                  glutes, and hamstrings. Technique is crucial here.
                </li>
                <li>
                  <strong>Bench press</strong> — Trains your chest, shoulders, and triceps. Start light and focus on
                  a controlled movement.
                </li>
                <li>
                  <strong>Overhead press</strong> — Builds strong shoulders and improves your posture.
                </li>
                <li>
                  <strong>Row</strong> — Strengthens your back and helps prevent shoulder problems. Essential for a
                  balanced physique.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-10 mb-4">How often should beginners train?</h2>
              <p>
                When you are just starting out, two to three times per week is more than enough. Your body needs time to
                recover and adapt to the new demands. An effective beginner schedule looks like this:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Day 1:</strong> Squat, bench press, row — 3 sets of 8-12 reps</li>
                <li><strong>Day 2:</strong> Rest</li>
                <li><strong>Day 3:</strong> Deadlift, overhead press, pull-ups (or lat pulldown) — 3 sets of 8-12 reps</li>
                <li><strong>Day 4:</strong> Rest</li>
                <li><strong>Day 5:</strong> Repeat day 1 with slightly increased weight</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Common beginner mistakes</h2>
              <p>
                Most beginners make the same mistakes. By knowing them in advance, you can avoid them:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Starting too heavy</strong> — Begin light and build up gradually. Technique always comes before weight.</li>
                <li><strong>Skipping the warm-up</strong> — Always take 5-10 minutes to warm up your muscles.</li>
                <li><strong>Inconsistency</strong> — Consistency matters more than intensity. Three light sessions per week beats one heavy session per month.</li>
                <li><strong>Not enough rest</strong> — Muscles grow during recovery, not during the workout itself.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">The importance of proper guidance</h2>
              <p>
                As a beginner, proper technique is essential to prevent injuries. An experienced personal trainer can help
                you with correct exercise form, design a personalized training program, and motivate you when things get
                tough. At SculptClub, we work with trainers who specialize in guiding beginners.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Progressive overload: the secret to progress</h3>
              <p>
                The most important principle in strength training is progressive overload: gradually doing more than last
                time. This can mean adding more weight, doing more repetitions, or performing more sets. Keep a training
                log to track your progress over time.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Start today</h2>
              <p>
                The beauty of strength training is that anyone can start, regardless of age or fitness level. All you need
                is the right guidance and a bit of discipline. Schedule your first session at SculptClub and discover how
                enjoyable and effective strength training can be.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start strength training?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free intro and discover how our trainers can help you.
              </p>
              <ButtonLink href="/en/book" size="lg">
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
