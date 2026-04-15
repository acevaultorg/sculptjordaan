import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition Coach Amsterdam: Do You Need a Dietitian for Your Training? — SculptClub",
  description:
    "What's the difference between a nutrition coach and a registered dietitian in Amsterdam? When does nutrition advice actually make a difference in your training results?",
  keywords: [
    "nutrition coach amsterdam",
    "dietitian amsterdam",
    "nutritionist amsterdam",
    "personal trainer nutrition amsterdam",
    "diet coach amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/nutrition-coach-amsterdam",
    languages: {
      nl: "/nl/blog/voedingscoach-amsterdam",
      en: "/en/blog/nutrition-coach-amsterdam",
    },
  },
};

export default function NutritionCoachAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Nutrition Coach Amsterdam", url: "/en/blog/nutrition-coach-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Nutrition Coach Amsterdam: Do You Need a Dietitian for Your Training?"
        description="What's the difference between a nutrition coach and a registered dietitian in Amsterdam? When does nutrition advice make a difference in your results?"
        url="/en/blog/nutrition-coach-amsterdam"
        datePublished="2026-03-30"
      />
      <FaqJsonLd faqs={[
        { question: "Nutrition coach vs. registered dietitian: what's the difference?", answer: "In the Netherlands, the title diëtist (dietitian) is a protected professional title. A registered dietitian holds an HBO degree (university of applied sciences) and is registered in the BIG register — the Dutch equivalent of a licensed healthcare professional. They can work with medical nutrition cases, including diabetes, kidney disease and digestive disorders, and sessions may be (partially) reimbursed by Dutch health insurance." },
        { question: "When do you actually need a nutrition coach?", answer: "Not everyone needs a dietitian right away. But in these situations, professional nutrition advice makes a real difference:" },
        { question: "What does a nutrition consultation cost in Amsterdam?", answer: "A standalone session with an independent dietitian in Amsterdam costs on average €70–€110 per hour. Some supplementary health insurances cover part of this — check your policy." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Nutrition Coach Amsterdam: Do You Need a Dietitian for Your Training?
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
                src="/images/trainers/eva.jpg"
                alt="Eva, registered dietitian and personal trainer at SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You&apos;re training consistently, eating &ldquo;pretty healthy&rdquo; — but results aren&apos;t coming. Or you want to lose weight but can&apos;t figure out how to align your diet with your workouts. This is exactly where a nutrition coach or dietitian in Amsterdam makes the difference.
              </p>

              <h2>Nutrition coach vs. registered dietitian: what&apos;s the difference?</h2>
              <p>
                In the Netherlands, the title <strong>diëtist</strong> (dietitian) is a protected professional title. A registered dietitian holds an HBO degree (university of applied sciences) and is registered in the BIG register — the Dutch equivalent of a licensed healthcare professional. They can work with medical nutrition cases, including diabetes, kidney disease and digestive disorders, and sessions may be (partially) reimbursed by Dutch health insurance.
              </p>
              <p>
                A <strong>nutrition coach</strong> has no legally protected title. Quality varies enormously — from qualified coaches with solid backgrounds to weekend-certificate practitioners. Always check qualifications.
              </p>
              <p>
                At SculptClub, <strong>Eva</strong> works as both a registered dietitian and personal trainer. She combines evidence-based nutrition advice with a practical training programme — something most standalone nutrition consults don&apos;t offer.
              </p>

              <h2>When do you actually need a nutrition coach?</h2>
              <p>
                Not everyone needs a dietitian right away. But in these situations, professional nutrition advice makes a real difference:
              </p>
              <ul>
                <li><strong>You&apos;ve been training for months but see no progress.</strong> Nutrition is likely the missing piece.</li>
                <li><strong>You want to lose weight but can&apos;t shift it.</strong> Calorie deficits work — but only when you know how to implement them sustainably.</li>
                <li><strong>You want to build muscle.</strong> Sufficient protein at the right times is just as important as the training itself.</li>
                <li><strong>You have energy issues or slow recovery.</strong> Poor nutrition significantly delays recovery after training.</li>
                <li><strong>You have a specific condition.</strong> For PCOS, thyroid issues or digestive problems, a registered dietitian is the right person.</li>
              </ul>

              <h2>Nutrition and training together: why it works better</h2>
              <p>
                Most people work with a personal trainer <em>or</em> a dietitian. Rarely both. The problem: training and nutrition are inseparable. What you eat directly affects how you perform, how you recover, and how quickly you see results.
              </p>
              <p>
                When your trainer also understands nutrition — or better yet, is also a dietitian — you don&apos;t need to coordinate two separate programmes. Everything is aligned: your training load, your calorie needs, your protein intake, your recovery plan.
              </p>

              <h2>What does a nutrition consultation cost in Amsterdam?</h2>
              <p>
                A standalone session with an independent dietitian in Amsterdam costs on average €70–€110 per hour. Some supplementary health insurances cover part of this — check your policy.
              </p>
              <p>
                At SculptClub, nutrition is integrated into personal training sessions with Eva. You don&apos;t pay separately for a nutrition consultation — it&apos;s all in one session. Her rate is available on request.
              </p>

              <h2>Nutrition coaching in Amsterdam Jordaan</h2>
              <p>
                SculptClub is located at Egelantiersgracht 424 in the Jordaan — one of Amsterdam&apos;s most beautiful neighbourhoods. No busy gym floor, no queues for equipment. Just you, your trainer, and a fully equipped private studio.
              </p>
              <p>
                Eva helps you with strength training and nutrition. Your first intro is always free. No contract, no membership.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-training-weight-loss-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training for weight loss</p></a>
                <a href="/en/blog/weight-loss-strength-training" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Weight loss with strength training</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-secondary border border-border/50">
              <h2 className="text-xl font-bold mb-2">Free intro with Eva</h2>
              <p className="text-muted-foreground mb-6">
                Want to align your training and nutrition? Book a free intro with Eva and find out what&apos;s possible.
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
