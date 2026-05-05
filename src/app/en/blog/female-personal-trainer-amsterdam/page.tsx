import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Female Personal Trainer in Amsterdam — SculptClub" },
  description:
    "Looking for a female personal trainer in Amsterdam? Train with Gezina, Eva or Andrea in our private studio in the Jordaan. Free intro session.",
  keywords: [
    "female personal trainer amsterdam",
    "woman personal trainer amsterdam",
    "personal trainer for women amsterdam",
    "female fitness coach amsterdam",
    "private studio women amsterdam",
    "personal trainer jordaan female",
  ],
  alternates: {
    canonical: "/en/blog/female-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/vrouwelijke-personal-trainer-amsterdam",
      en: "/en/blog/female-personal-trainer-amsterdam",
    },
  },
};

export default function FemalePTAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Female personal trainer", url: "/en/blog/female-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Female Personal Trainer in Amsterdam" description="Why many women prefer to train with a female personal trainer, and the options you have at SculptClub." url="/en/blog/female-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Female Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Dumbbell rack in the SculptClub private studio, Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                More and more women in Amsterdam are choosing a female personal trainer — not
                out of principle, but for practical reasons: technique coaching from someone
                who has the same body, questions about hormones or cycle phase without the
                awkwardness, and a training space that feels like your space rather than
                somebody else&apos;s gym. At SculptClub in the Jordaan we have three female
                trainers. No crowded gym floor, no unsolicited staring — just you, your trainer
                and the private studio.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why pick a female trainer?</h2>
              <p>
                There is no scientific evidence that female trainers are better than male ones.
                Quality depends on the individual, not their gender. But for many women it
                makes a concrete difference on a few specific points:
              </p>
              <ul>
                <li><strong>Body understanding:</strong> Cueing for hips, core and lower back from lived experience often lands faster</li>
                <li><strong>Hormonal context:</strong> Training around your cycle, pregnancy, postpartum or menopause is easier to talk through with a woman who has been there</li>
                <li><strong>Comfort with strength work:</strong> Not everyone feels at ease doing a heavy squat or deadlift for the first time with a man watching</li>
                <li><strong>Role model:</strong> Seeing a woman move heavy weight, be stronger than you&apos;d expect, and navigate the weight rack without hesitation — that changes how you see yourself</li>
              </ul>
              <p>
                These points don&apos;t apply to every woman. For some it really doesn&apos;t matter
                and they&apos;re equally happy training with a male coach. That&apos;s fine too. But if
                it does matter to you, it&apos;s good to know you don&apos;t have to compromise.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The three female trainers at SculptClub</h2>
              <p>
                SculptClub has three female trainers. Each one is independent and sets her own
                approach. Pick based on what you&apos;re looking for, not on who&apos;s available first.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Gezina — Women&apos;s training, strength, performance</h3>
              <p>
                Gezina specifically specialises in training women. She works with women who
                want to get serious about strength training, train for performance, or build a
                long-term progression plan. Her approach is technical, structured and
                challenging without being performative. Book a{" "}
                <a href="/en/plan-free-intro-with-gezina" className="text-brand hover:underline">free intro with Gezina</a>{" "}
                if you&apos;re ready to actually get stronger.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Eva — Strength and nutrition</h3>
              <p>
                Eva is both a certified dietitian and a personal trainer. A rare combination:
                she doesn&apos;t just coach you in the studio — she also looks at what you eat and
                how it affects your training and recovery. Useful if your goals involve fat
                loss, body composition, energy or building muscle. More on the nutrition side?
                See <a href="/en/blog/nutrition-coach-amsterdam" className="text-brand hover:underline">nutrition coach in Amsterdam</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Andrea — Strength, posture, technique</h3>
              <p>
                Andrea works with 45-minute sessions at €45. Her focus is posture, movement
                technique and building a strong foundation. A good match if you&apos;re new to
                strength training, have a desk job, or want to nail technique before loading
                the bar.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private studio — why this tips the balance for many women</h2>
              <p>
                A large gym isn&apos;t always a comfortable place for women to learn strength
                training. The bench area is claimed by men cheering each other on, the squat
                rack queue feels like an exam, and unsolicited advice is more frustrating than
                useful. A <a href="/en/blog/private-gym-vs-big-box-gym" className="text-brand hover:underline">private gym versus a big-box gym</a> is
                a different universe: you get the door code via WhatsApp, you&apos;re there alone
                with your trainer (or alone in <a href="/en/open-gym" className="text-brand hover:underline">Open Gym</a>),
                and nobody is watching your form.
              </p>
              <p>
                The studio is open daily from 06:30 to 22:00. Early morning, lunch break, after
                work — book at a time that suits your day, not when the gym is least busy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a female personal trainer cost in Amsterdam?</h2>
              <p>
                At SculptClub, each trainer sets her own rate. Andrea runs 45-minute sessions
                from €45. Gezina and Eva share their rate during the free intro. In Amsterdam,
                personal training typically falls between €45 and €85 per session. Our{" "}
                <a href="/en/blog/personal-training-cost-amsterdam" className="text-brand hover:underline">honest breakdown of what personal training costs in Amsterdam</a>{" "}
                has more context.
              </p>
              <p>
                No membership, no contract, no notice period. Cancellation is always free — even
                ten minutes before the session. That&apos;s more relaxing than it sounds: you book
                when you can and step back without negotiating a policy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <ol>
                <li><strong>Pick a trainer that matches you.</strong> Browse the{" "}
                  <a href="/en/find-personal-trainer" className="text-brand hover:underline">trainers page</a> or
                  take the short matching quiz.</li>
                <li><strong>Book a free intro.</strong> First session is always free. You
                  discuss your goal, show your movement, and check if the fit feels right.</li>
                <li><strong>Decide after.</strong> No pressure. If it doesn&apos;t click, try
                  another trainer — or start on your own time with{" "}
                  <a href="/en/blog/strength-training-beginners-guide" className="text-brand hover:underline">strength training for beginners</a>{" "}
                  in Open Gym.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/personal-training-weight-loss-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training for weight loss</p></a>
                <a href="/en/blog/nutrition-coach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Nutrition coach in Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">What does personal training cost?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Book a free intro with a female trainer</h3>
              <p className="text-muted-foreground mb-6">Pick Gezina, Eva or Andrea. First session is free, no obligations.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
