import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "English-Speaking Personal Trainer in Amsterdam — SculptClub",
  description:
    "Expat or international in Amsterdam? Every trainer at SculptClub coaches fluently in English. Private studio in the Jordaan. Free intro session.",
  keywords: [
    "english speaking personal trainer amsterdam",
    "english personal trainer amsterdam",
    "expat personal trainer amsterdam",
    "international personal trainer amsterdam",
    "english fitness coach amsterdam",
    "personal trainer amsterdam for expats",
  ],
  alternates: {
    canonical: "/en/blog/english-speaking-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/engels-sprekende-personal-trainer-amsterdam",
      en: "/en/blog/english-speaking-personal-trainer-amsterdam",
    },
  },
};

export default function EnglishSpeakingPTAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "English-speaking personal trainer", url: "/en/blog/english-speaking-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="English-Speaking Personal Trainer in Amsterdam" description="Why every trainer at SculptClub coaches fluently in English, and what that means for expats and internationals training in Amsterdam." url="/en/blog/english-speaking-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">English-Speaking Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub private studio in the Jordaan, Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                About one in five people living in Amsterdam is a non-Dutch national, and most
                of them work and socialise in English. The city is bilingual in practice — but
                its gyms aren&apos;t always. Big-box gyms typically list "some staff speak English"
                and then hand you a contract in Dutch. If you&apos;re looking for coaching that
                actually lands — cues, questions, progression, nutrition conversations — a
                trainer whose English is equal to yours matters more than you&apos;d expect.
              </p>
              <p>
                At SculptClub in the Jordaan every trainer on the roster coaches fluently in
                English. Not "enough to get by" — actual coaching-fluent. Many are bilingual
                Dutch-English from birth, one is a native English speaker, and all of them run
                full intake and ongoing sessions in whichever language you prefer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why does this matter in a gym?</h2>
              <p>
                When a squat goes sideways, a good trainer gives three cues in five seconds:
                "sit back," "chest up," "drive through your heel." In your second language, that
                same cue-stream becomes guesswork. You lose the session&apos;s tempo. Small
                technique errors accumulate into bigger ones. Over months this is the difference
                between steady progress and stalled progress.
              </p>
              <p>
                English matters even more in the surrounding conversations: sleep, stress,
                nutrition, cycle-tracking, injury history. These shape the programme as much as
                the lifting does. If you can&apos;t explain a back twinge precisely in Dutch,
                you&apos;ll under-describe it — and the trainer plans the next session without
                the full picture.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Every SculptClub trainer, in English</h2>
              <p>
                The short version of the roster, with languages highlighted:
              </p>
              <ul>
                <li><strong>Alex</strong> — Strength, calisthenics, recovery. NL/EN/PT. €69/60 min.</li>
                <li><strong>Eva</strong> — Certified dietitian + personal trainer. Strength and nutrition. NL/EN.</li>
                <li><strong>Hamish</strong> — Physiotherapist BSc. Rehab, injury prevention. NL/EN.</li>
                <li><strong>Gezina</strong> — Women&apos;s training, strength, performance. NL/EN. See the{" "}
                  <a href="/en/blog/female-personal-trainer-amsterdam" className="text-brand hover:underline">female-trainer guide</a>.</li>
                <li><strong>Andrea</strong> — Strength, posture, technique. NL/EN. €45/45 min.</li>
                <li><strong>Dara</strong> — Personal training + small group. NL/EN.</li>
                <li><strong>Jearmey</strong> — Strength, fat loss, athletic performance. NL/EN.</li>
              </ul>
              <p>
                Browse the full <a href="/en/find-personal-trainer" className="text-brand hover:underline">trainer page</a> for
                bios, specialisations, Instagram and rate-on-request details.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What expats usually ask before starting</h2>

              <h3 className="text-xl font-bold mt-8 mb-3">"Do I need to speak any Dutch at all?"</h3>
              <p>
                No. Sessions, intake forms, communication (WhatsApp door code, reschedule
                messages), invoices and studio signage all work in English. The{" "}
                <a href="/en/free-intro" className="text-brand hover:underline">free intro</a> and{" "}
                <a href="/en/pricing" className="text-brand hover:underline">pricing page</a> are
                both in English. Nothing about the membership model assumes you speak Dutch.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"Is pricing in EUR, and does it include VAT?"</h3>
              <p>
                Yes. Rates are in EUR, inclusive of VAT. Personal training starts from €45 per
                session — trainers set their own rates. See our{" "}
                <a href="/en/blog/personal-training-cost-amsterdam" className="text-brand hover:underline">honest breakdown of personal training costs in Amsterdam</a>{" "}
                for a full comparison with chain-gym and freelance-gym pricing.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"Can I get an invoice on company name for tax/KOR purposes?"</h3>
              <p>
                For <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="text-brand hover:underline">studio rental</a>,
                yes — invoices are issued as standard. For personal training, each trainer is
                independent and issues their own invoice; most can put it on company name with
                your VAT number and an itemised description. Whether personal training is
                tax-deductible for your entity is a question for your accountant. See also our{" "}
                <a href="/en/blog/corporate-personal-training-amsterdam" className="text-brand hover:underline">corporate PT guide</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"I live in Zuidas / Centrum / Noord / Oost. Is the Jordaan practical?"</h3>
              <p>
                The Jordaan is central Amsterdam — walkable from Centrum, a 10-minute cycle from
                Zuidas, and reachable from Noord via the free IJ ferry. The studio is open
                06:30–22:00 daily, which makes squeezing a session around work calls workable.
                Read the neighbourhood-specific guides:{" "}
                <a href="/en/blog/personal-trainer-amsterdam-centrum" className="text-brand hover:underline">Centrum</a>,{" "}
                <a href="/en/blog/personal-trainer-amsterdam-south" className="text-brand hover:underline">Zuidas/South</a>,{" "}
                <a href="/en/blog/personal-trainer-amsterdam-north" className="text-brand hover:underline">Noord</a>,{" "}
                <a href="/en/blog/personal-trainer-amsterdam-east" className="text-brand hover:underline">Oost</a>,{" "}
                <a href="/en/blog/personal-trainer-amsterdam-west" className="text-brand hover:underline">West</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"What if I&apos;m only here for 3 months?"</h3>
              <p>
                Short-stay works. No contract, no notice period. You pay per session (or a
                short package) and stop when you leave. The{" "}
                <a href="/en/blog/gym-without-membership-amsterdam" className="text-brand hover:underline">no-membership gym guide</a>{" "}
                explains why the pay-as-you-go model suits expats and relocators well.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The practical side</h2>
              <ul>
                <li><strong>Booking:</strong> Acuity online scheduler in English — one-click rebooking, email confirmations.</li>
                <li><strong>Door code:</strong> Sent via WhatsApp the evening before your session (not by email).</li>
                <li><strong>Cancellation:</strong> Always free. No 24-hour rule, no 12-hour rule. Life happens, we get it.</li>
                <li><strong>Payments:</strong> Card, Apple Pay, Google Pay. For studio rental we also invoice.</li>
                <li><strong>Facilities:</strong> Private studio in the Jordaan. Shower and changing room on site.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <ol>
                <li>Browse trainers — pick one whose specialisation matches your goal.</li>
                <li>Book a <a href="/en/free-intro" className="text-brand hover:underline">free intro session</a>. 45 minutes. No obligation.</li>
                <li>Decide after. If the trainer doesn&apos;t click, try another. If the schedule doesn&apos;t work, use <a href="/en/open-gym" className="text-brand hover:underline">Open Gym</a> to train solo.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/female-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Female personal trainer in Amsterdam</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">What does personal training cost?</p></a>
                <a href="/en/blog/gym-without-membership-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym without a membership</p></a>
                <a href="/en/blog/corporate-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Corporate personal training</p></a>
                <a href="/en/blog/nutrition-coach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Nutrition coach in Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Book your free intro in English</h3>
              <p className="text-muted-foreground mb-6">Meet the trainer, discuss your goal, try the studio. Zero obligation.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
