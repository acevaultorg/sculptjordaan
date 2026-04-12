import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  ArrowRight,
  MessageCircle,
  Percent,
  Building2,
  CalendarClock,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Trainer at SculptClub — Studio Rental Amsterdam Jordaan",
  description:
    "Start or grow your personal training practice at SculptClub. 0% commission, your own profile on our website, private studio from €12/hour. Free tour.",
  keywords: [
    "become personal trainer amsterdam",
    "personal trainer studio rental",
    "training space amsterdam",
    "freelance personal trainer amsterdam",
    "gym rental personal trainer",
    "start personal training business amsterdam",
  ],
  alternates: {
    canonical: "/en/become-trainer",
    languages: {
      nl: "/nl/word-trainer",
      en: "/en/become-trainer",
    },
  },
};

const benefits = [
  {
    icon: Percent,
    title: "0% commission",
    description: "Keep 100% of your income. We charge zero commission — none. Your rate is your rate.",
  },
  {
    icon: Building2,
    title: "Premium private studio",
    description: "Fully equipped studio on the Egelantiersgracht. Power rack, cable machine, dumbbells, cardio. Everything you need.",
  },
  {
    icon: Globe,
    title: "Your own profile on our website",
    description: "You get a personal profile page with photo, bio, specialisations and a direct booking link. We bring clients to you.",
  },
  {
    icon: CalendarClock,
    title: "Flexible schedule",
    description: "Book the studio whenever it suits you. Per hour, per day, or via a fixed package. No set times, no obligations.",
  },
  {
    icon: Users,
    title: "Clients via SculptClub",
    description: "Our website attracts hundreds of visitors monthly searching for personal training in Amsterdam. Your profile is right there.",
  },
  {
    icon: TrendingUp,
    title: "Grow your practice",
    description: "From starting trainer to established practice. We help you grow without overhead — no renting an entire space, no fixed costs.",
  },
];

const steps = [
  { step: "1", title: "Get in touch", description: "Send a WhatsApp or fill in the form. We usually respond within an hour." },
  { step: "2", title: "Free tour", description: "Come see the studio. Check the space, ask questions, and see if it fits." },
  { step: "3", title: "Start immediately", description: "Choose your package, send us your photo and bio, and your profile goes live. No waiting." },
];

const faqs = [
  { q: "How much does it cost to rent the studio?", a: "From €12 per 60 minutes. With a 10-hour package you pay €10.20/hour (15% off). With a 20-hour package €9.24/hour (23% off). Packages are valid for 3 months." },
  { q: "Do I need my own insurance?", a: "Yes, you need a valid professional liability insurance. This is your own responsibility." },
  { q: "How many clients can I train at once?", a: "The studio is suitable for 1-on-1 sessions and small groups of up to 3 people." },
  { q: "Do I really get a profile on the website?", a: "Yes. You get a personal profile page with photo, bio, specialisations, rates and a direct booking link. This is included with every rental package." },
  { q: "Do I need to sign a contract?", a: "No. You book per hour or buy a package. No long-term contract, no obligations. Stop whenever you want." },
  { q: "What equipment is available?", a: "Power rack, adjustable bench, dumbbells (2-40 kg), cable machine, assault bike, rower and accessories. Everything you need for professional sessions." },
  { q: "Can I see the studio first?", a: "Of course. Send a WhatsApp and we'll schedule a free tour. No obligations." },
  { q: "Where is SculptClub located?", a: "Egelantiersgracht 424, Amsterdam Jordaan. Centrally located, easily accessible by bike and public transport from all over Amsterdam." },
];

export default function BecomeTrainerEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Become a Trainer", url: "/en/become-trainer" }]} />

      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="overline mb-3 text-brand">For independent trainers</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                <span className="text-brand">0% commission.</span> Your clients, your rates, your schedule.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A private studio in the Jordaan where you keep 100% of what you charge. Rent by the hour from €12, pay only when you train, and get a free profile on sculptclub.nl to help you fill your calendar.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>✓ 0% commission — the rate you charge is the rate you keep</li>
                <li>✓ Rent by the hour from €12, or save up to 23% with a pack</li>
                <li>✓ Free profile + WhatsApp CTA on our website</li>
                <li>✓ No membership, no fixed overhead, cancel anytime</li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink
                  href={`https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to know more about working at SculptClub")}`}
                  external
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-brand-foreground"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us
                </ButtonLink>
                <ButtonLink href="/en/studio-rental" variant="outline" size="lg">
                  View studio & rates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Free tour</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />No contract</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />From €12/hour</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/studio/canal-view-doors.jpg"
                alt="View from inside SculptClub through open doors to Egelantiersgracht canal"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="Everything you need, nothing you don't"
          description="No own studio required. No fixed costs. No commission. Focus on what you do best: training."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="How it works"
          title="Live in 3 steps"
          description="From first contact to your own profile on the website — it takes less than a week."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio showcase */}
      <Section bg="muted">
        <SectionHeader
          overline="The studio"
          title="Egelantiersgracht 424, Amsterdam Jordaan"
          description="Centrally located private studio with professional equipment. Open daily from 06:30 to 22:00."
        />
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/studio/training-bike-smile.jpg", alt: "Smiling on assault bike at SculptClub" },
              { src: "/images/studio/training-barbell-dramatic.jpg", alt: "Dramatic barbell close-up at SculptClub" },
              { src: "/images/studio/training-barbell-skylight.jpg", alt: "Barbell training under skylight at SculptClub" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href="/en/studio" variant="outline" size="lg">
            <MapPin className="w-4 h-4" />
            View the studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          overline="Pricing"
          title="Transparent prices, no surprises"
          description="Book per hour or buy a package with a discount. No long-term contract."
        />
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€12</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">Half studio</p>
              </CardContent>
            </Card>
            <Card className="text-center border-brand">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€10.20</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">10-hour package · 15% off</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€9.24</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">20-hour package · 23% off</p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">All packages are valid for 3 months. <a href="/en/pricing" className="text-brand hover:underline">View all rates</a></p>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="Frequently asked questions"
          title="Everything you want to know"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Send a WhatsApp and schedule a free tour. No obligations — just see if it fits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={`https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to see the studio")}`}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
              <ButtonLink
                href="/en/studio-rental"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                View rates
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
