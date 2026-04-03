import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "First Time at the Gym: 7 Tips for Beginners — SculptClub",
  description:
    "Nervous about your first gym visit? These 7 practical tips will help you prepare, walk in with confidence, and get off to a great start.",
  keywords: [
    "first time gym tips",
    "gym tips for beginners",
    "first gym visit",
    "beginner gym guide",
    "starting gym amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/first-time-gym-tips",
    languages: {
      nl: "/nl/blog/eerste-keer-sportschool-tips",
      en: "/en/blog/first-time-gym-tips",
    },
  },
};

export default function FirstTimeGymTips() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "First Time at the Gym: 7 Tips", url: "/en/blog/first-time-gym-tips" },
        ]}
      />
      <BlogPostingJsonLd
        title="First Time at the Gym: 7 Tips for Beginners"
        description="7 practical tips for your first gym visit. Prepare well, walk in with confidence, and get a great start."
        url="/en/blog/first-time-gym-tips"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                First Time at the Gym: 7 Tips for Beginners
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
                alt="Dumbbell rack at SculptClub private gym in Amsterdam Jordaan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Walking into a gym for the first time can feel intimidating. You might not know what to expect, feel
                unsure about the equipment, or worry that everyone is watching you. Let us put your mind at ease:
                everyone was a beginner once. With these 7 practical tips, you will be well prepared and walk through
                those doors with confidence.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Choose the Right Gym for You</h2>
              <p>
                Not every gym is the right fit for everyone. Large chain gyms can feel overwhelming for beginners —
                lots of people, lots of machines, and very little guidance. Consider a smaller studio or boutique gym
                where the atmosphere is more personal and there is more attention for new members. At SculptClub in the
                Jordaan, for example, you train in a private studio, so you can ease in at your own pace without
                feeling watched.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Wear Comfortable Workout Clothes</h2>
              <p>
                You do not need expensive sportswear. Wear whatever feels comfortable and lets you move freely. A
                T-shirt, athletic shorts or leggings, and supportive sneakers are all you need. Bring a towel and a
                water bottle as well. Most gyms have lockers, but check beforehand so you know what to expect.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Go in with a Plan</h2>
              <p>
                The biggest mistake beginners make is going to the gym without a plan. You wander around, try a few
                random machines, and leave frustrated. Before your visit, look up a simple beginner program or book an
                introduction with a trainer who can create a customized routine for you. Having a plan gives you
                direction and prevents wasted time.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Start Light and Focus on Form</h2>
              <p>
                It is tempting to lift heavy right away, but this is the fastest route to injury. Start with light
                weights and focus on proper form. It does not matter how much you lift — what matters is performing the
                movement correctly. A strong foundation now prevents problems later and ensures you progress faster in
                the long run.
              </p>
              <p>
                Do not hesitate to ask for a tour or help with an exercise. Every good gym has staff who are happy to
                assist. At SculptClub, we always offer a free introduction so an experienced trainer can show you
                the equipment and build a program tailored to you.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Stop Worrying About What Others Think</h2>
              <p>
                This might be the most important tip of all. The truth is: nobody is paying attention to you. Everyone
                in the gym is focused on their own workout. That muscular person in the corner? They were once a
                nervous beginner too. And if you would still rather train in complete privacy, a private studio is an
                excellent option. No spectators, no judgment — just you and your training.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">6. Be Consistent, Not Perfect</h2>
              <p>
                You do not need to work out five days a week to see results. Start with twice a week and stick with it.
                Consistency matters far more than intensity, especially in the beginning. After a few weeks, it becomes
                a habit and you can gradually increase. Give yourself time — results do not come overnight, but they
                absolutely come if you keep showing up.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">7. Consider a Personal Trainer for the First Few Weeks</h2>
              <p>
                If you want to hit the ground running, consider working with a personal trainer for the first few
                weeks. A trainer teaches you the fundamental exercises, creates a customized program, and ensures
                your form is correct from day one. After a few sessions, you can continue on your own, armed with
                the knowledge and confidence to train effectively.
              </p>
              <p>
                At SculptClub, your first introduction is always free. You can discover whether personal training is
                right for you without any obligation or commitment.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Your First Step Starts Here</h2>
              <p>
                The hardest part is opening that door and walking in. Everything after that gets easier. Whether you
                choose a big gym, Open Gym, or personal training — what matters most is that you start. Your future
                self will thank you.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
                <a href="/en/blog/gym-without-membership-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym without membership</p></a>
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Prefer to start with guidance?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free introduction with one of our trainers. We will help you get started — at your own pace.
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
