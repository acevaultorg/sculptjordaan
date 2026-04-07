import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Personal Training Amsterdam — SculptClub",
  description:
    "Personal training for busy professionals and small teams in Amsterdam. Private studio in the Jordaan, daily 06:30–22:00, invoice on company name possible.",
  keywords: [
    "corporate personal training amsterdam",
    "executive personal trainer amsterdam",
    "business personal training amsterdam",
    "corporate wellness amsterdam",
    "personal training for executives amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/corporate-personal-training-amsterdam",
    languages: {
      nl: "/nl/blog/zakelijk-personal-training-amsterdam",
      en: "/en/blog/corporate-personal-training-amsterdam",
    },
  },
  openGraph: {
    title: "Corporate Personal Training Amsterdam — SculptClub",
    description:
      "Discreet private studio in the Jordaan for busy professionals, executives and small teams. Flexible hours, invoicing available.",
    url: "/en/blog/corporate-personal-training-amsterdam",
    type: "article",
  },
};

const faqs = [
  {
    question: "Can I book personal training through my company and get an invoice?",
    answer:
      "For studio rental we provide an invoice as standard. For personal training, each trainer settles directly with you; many trainers can issue an invoice on company name with your VAT number. Discuss this during your free intro.",
  },
  {
    question: "Is personal training tax-deductible for my business?",
    answer:
      "It depends on your situation and entity type. We don't give tax advice — please consult your own accountant. What we can do is make sure invoices are correctly itemised so your accountant has what they need.",
  },
  {
    question: "Do you offer hours that suit a busy schedule?",
    answer:
      "Yes. The studio is open daily from 06:30 to 22:00, weekends included. Early-morning sessions before a Zuidas workday or late-evening sessions after a city-centre meeting are both standard.",
  },
  {
    question: "Can I train with colleagues or a small team?",
    answer:
      "Yes. Several trainers offer small-group sessions for 2 to 4 people. For team wellness, an introductory programme or one-off off-sites we can reserve the entire studio.",
  },
  {
    question: "How discreet is the studio?",
    answer:
      "You train one-on-one in a closed studio — no street-level windows, no other clients, no cameras pointed at the floor. For executives or public-facing professionals who'd rather not be photographed mid-set in an open gym, this is often the deciding factor.",
  },
  {
    question: "How far is it from Zuidas and the city centre?",
    answer:
      "From Zuidas it's 15 to 20 minutes by car to Egelantiersgracht, or roughly 25 minutes via metro 52 plus a 5-minute walk from Rokin. From Damrak and Leidseplein, it's a 5 to 10 minute bike ride.",
  },
];

export default function CorporatePersonalTrainingAmsterdamEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Corporate personal training Amsterdam", url: "/en/blog/corporate-personal-training-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Corporate Personal Training Amsterdam"
        description="Personal training for busy professionals and teams in Amsterdam. Discreet private studio, flexible hours."
        url="/en/blog/corporate-personal-training-amsterdam"
        datePublished="2026-04-08"
        dateModified="2026-04-08"
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Corporate Personal Training in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 8, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub private studio for corporate personal training in Amsterdam" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                A packed calendar. Client meetings that run over. A flight tomorrow morning. For busy
                professionals in Amsterdam, exercise itself is rarely the problem — finding the time
                and sticking with it is. A gym with queues for every machine, changing rooms shared
                with eighty strangers, and a trainer you have to brief from scratch every week: that
                burns more energy than it gives back. SculptClub is built differently. One private
                studio in the Jordaan, fixed trainers, no membership, and a schedule that fits how an
                executive actually works.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a private studio works for corporate clients</h2>
              <p>
                The difference between exercising and exercising consistently is rarely motivation.
                It&apos;s friction. The more steps between you and your workout, the faster a busy week
                kills it. A private studio removes almost all of that friction: no waiting, no crowds,
                no small talk, no re-explaining your goals. You walk in, your trainer is ready, your
                programme is loaded, and in 60 minutes you&apos;ve trained properly. For people whose
                calendar runs in 30-minute blocks, that&apos;s the difference between showing up and
                cancelling.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Flexible hours for full calendars</h2>
              <p>
                The studio is open daily from 06:30 to 22:00. That sounds obvious, but it matters in
                practice. For Zuidas executives with an 08:00 first call, a 06:45 session is realistic
                — train, shower, coffee, on time at the office. For consultants leaving the office at
                19:00, a 19:30 or 20:00 session is normal. We don&apos;t book in fixed slots; you and your
                trainer agree what fits.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Discretion and privacy</h2>
              <p>
                You train one-on-one in a closed studio. No street-level windows, no other clients, no
                cameras pointed at the floor. For public figures, executives and anyone who&apos;d rather
                not be photographed mid-set, that&apos;s often decisive. It&apos;s not luxury — it&apos;s practical.
                You can train hard without thinking about who&apos;s watching.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Invoicing and accounting</h2>
              <p>
                For studio rental we provide an invoice as standard. Personal training works
                differently: each trainer is independent and issues their own invoice. Many can put it
                on company name with your VAT number and an itemised description. Whether personal
                training is tax-deductible for your business depends on your entity, your situation
                and the nature of the expense — please discuss that with your own accountant. What we
                do guarantee: invoices that are correct and traceable, so your accountant has what
                they need.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Small-group sessions for teams and colleagues</h2>
              <p>
                Not everyone wants to train alone. Several trainers offer small-group sessions for 2 to
                4 people — useful for colleagues training together or a regular pair sharing the
                accountability. For companies offering their team a wellness programme we can also
                reserve the entire studio periodically, optionally combined with a short education
                block on strength, nutrition or posture. That&apos;s not an off-the-shelf package — call
                or email and we&apos;ll build something that fits.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why the Jordaan works for centre and Zuidas professionals</h2>
              <p>
                Egelantiersgracht is well placed. From Damrak you&apos;re here in 5 minutes by bike. From
                Leidseplein, 7. From Zuidas via metro 52, you&apos;re at Rokin in 15 minutes, then 5 minutes
                walking or biking. For people who want to train between meetings, or cycle home along
                the canals after work, the location is a real advantage that a ring-road gym can&apos;t
                match. And during your session you&apos;re in a quiet side street, not a shopping plaza.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/find-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Find your personal trainer</p></a>
                <a href="/en/free-intro" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Book a free intro</p></a>
                <a href="/en/studio-rental" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental with invoice</p></a>
                <a href="/en/pricing" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">See our pricing</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No-strings introduction</h3>
              <p className="text-muted-foreground mb-6">Book a free intro with one of our five trainers. Decide afterwards whether it fits.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/find-personal-trainer" size="lg">Meet our trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/en/studio-rental" size="lg" variant="outline">Studio rental</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
