import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityLinks } from "@/config/acuity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tips, Insights & Stories | SculptClub Amsterdam Jordaan",
  description:
    "Read our blog about personal training, open gym, fitness tips and more from our studio in the Jordaan, Amsterdam.",
  alternates: {
    canonical: "/en/blog",
    languages: {
      nl: "/nl/blog",
      en: "/en/blog",
    },
  },
};

const posts = [
  {
    title: "Personal Training in Amsterdam Jordaan: What to Know",
    excerpt:
      "Everything about personal training in the Jordaan. Discover what a private studio offers, what to expect, and why the Jordaan is the perfect location.",
    category: "Personal Training",
    href: "/en/blog/personal-training-amsterdam-jordaan",
    date: "March 24, 2026",
  },
  {
    title: "Strength Training for Beginners: Complete Guide",
    excerpt:
      "Start strength training the right way. Learn the fundamental exercises, how often to train, and how to avoid injuries.",
    category: "Training",
    href: "/en/blog/strength-training-beginners-guide",
    date: "March 24, 2026",
  },
  {
    title: "Open Gym vs Regular Gym: Which is Right for You?",
    excerpt:
      "Compare Open Gym with a regular gym on price, privacy, equipment, and atmosphere to make the best choice.",
    category: "Open Gym",
    href: "/en/blog/open-gym-vs-regular-gym",
    date: "March 24, 2026",
  },
  {
    title: "How Much Does Personal Training Cost in Amsterdam?",
    excerpt:
      "Discover average prices, what affects the cost, and why a boutique studio offers great value from €45 per session.",
    category: "Personal Training",
    href: "/en/blog/personal-training-cost-amsterdam",
    date: "March 24, 2026",
  },
  {
    title: "First Time at the Gym: 7 Tips for Beginners",
    excerpt:
      "Nervous about your first gym visit? These 7 practical tips will help you walk in with confidence and get a great start.",
    category: "Beginners",
    href: "/en/blog/first-time-gym-tips",
    date: "March 24, 2026",
  },
  {
    title: "Personal Trainer in Amsterdam: How to Find the Best Match",
    excerpt:
      "How do you find the right personal trainer? Discover what to look for, red flags to avoid, and why a free intro makes all the difference.",
    category: "Personal Training",
    href: "/en/blog/personal-trainer-amsterdam",
    date: "March 24, 2026",
  },
  {
    title: "Gym Without Membership in Amsterdam: Your Options",
    excerpt:
      "Don't want a long-term membership? Discover flexible fitness options in Amsterdam, from pay-per-session to Open Gym.",
    category: "Open Gym",
    href: "/en/blog/gym-without-membership-amsterdam",
    date: "March 24, 2026",
  },
  {
    title: "Weight Loss Through Strength Training: Why It Works",
    excerpt:
      "Discover how strength training helps you lose weight more effectively than cardio alone. Build muscle, boost metabolism, and see lasting results.",
    category: "Training",
    href: "/en/blog/weight-loss-strength-training",
    date: "March 24, 2026",
  },
  {
    title: "How to Stay Consistent with Exercise: 7 Proven Tips",
    excerpt:
      "Struggling to stick with your workouts? Discover 7 practical tips to stay consistent with exercise and build lasting fitness habits.",
    category: "Motivation",
    href: "/en/blog/stay-consistent-exercise",
    date: "March 26, 2026",
  },
  {
    title: "Private Gym vs Big Box Gym: The Key Differences",
    excerpt:
      "What is the difference between a private gym and a big box gym? Compare atmosphere, equipment, personal attention and price.",
    category: "Comparison",
    href: "/en/blog/private-gym-vs-big-box-gym",
    date: "March 26, 2026",
  },
  {
    title: "Studio Rental for Personal Trainers in Amsterdam",
    excerpt:
      "Looking for a training space? Discover why renting a studio is the smartest choice for freelance personal trainers. From just €12 per hour.",
    category: "For Trainers",
    href: "/en/blog/studio-rental-personal-trainers-amsterdam",
    date: "March 26, 2026",
  },
  {
    title: "Nutrition Coach Amsterdam: Do You Need a Dietitian for Your Training?",
    excerpt:
      "What's the difference between a nutrition coach and a registered dietitian? When does professional nutrition advice actually make a difference in your results?",
    category: "Nutrition",
    href: "/en/blog/nutrition-coach-amsterdam",
    date: "March 30, 2026",
  },
  {
    title: "Physiotherapist as Personal Trainer in Amsterdam: Training with an Injury",
    excerpt:
      "An injury doesn't have to mean the end of your training. Discover how a physiotherapist-personal trainer helps you train safely and recover faster.",
    category: "Rehabilitation",
    href: "/en/blog/physiotherapist-personal-trainer-amsterdam",
    date: "March 30, 2026",
  },
  {
    title: "Free Intro Personal Trainer Amsterdam: What to Expect",
    excerpt:
      "What happens during a free intro with a personal trainer in Amsterdam? Everything about the session, how to prepare, and what questions to ask.",
    category: "Tips",
    href: "/en/blog/free-intro-personal-trainer-amsterdam",
    date: "April 1, 2026",
  },
  {
    title: "Gym Rental Per Hour Amsterdam: Flexible Studio for Freelance Trainers",
    excerpt:
      "Looking for a gym or training studio to rent per hour in Amsterdam? Everything about flexible studio hire for freelance personal trainers and physiotherapists.",
    category: "For Trainers",
    href: "/en/blog/gym-rental-per-hour-amsterdam",
    date: "April 1, 2026",
  },
  {
    title: "Rent Training Space as a Freelance Personal Trainer in Amsterdam",
    excerpt:
      "Practical guide for freelance personal trainers: costs, tax benefits, insurance and how to start renting training space in Amsterdam.",
    category: "For Trainers",
    href: "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
    date: "April 2, 2026",
  },
  {
    title: "Physiotherapy Studio Rental in Amsterdam",
    excerpt:
      "Looking for a space for physiotherapy or rehab training? Rent a fully equipped private studio by the hour. Ideal for freelance physiotherapists.",
    category: "For Trainers",
    href: "/en/blog/physiotherapy-studio-rental-amsterdam",
    date: "April 2, 2026",
  },
  {
    title: "Gym in the Jordaan Amsterdam: Your Options Compared",
    excerpt:
      "Looking for a gym in the Jordaan? Compare big chains, boutique studios and private gyms. Find what fits your training style.",
    category: "Local",
    href: "/en/blog/gym-jordaan-amsterdam",
    date: "April 2, 2026",
  },
  {
    title: "Personal Training for Weight Loss in Amsterdam",
    excerpt:
      "Want to lose weight with guidance? Discover why strength training beats cardio and how a personal trainer helps you get results.",
    category: "Training",
    href: "/en/blog/personal-training-weight-loss-amsterdam",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer Amsterdam West & Oud-West",
    excerpt:
      "Looking for a personal trainer in Amsterdam West? SculptClub in the Jordaan is a 5-minute bike ride. Free intro, from €45/session.",
    category: "Local",
    href: "/en/blog/personal-trainer-amsterdam-west",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer Amsterdam Centrum",
    excerpt:
      "Looking for a personal trainer in Amsterdam Centrum? SculptClub in the Jordaan is just around the corner. Free intro, from €45/session.",
    category: "Local",
    href: "/en/blog/personal-trainer-amsterdam-centrum",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer De Pijp Amsterdam",
    excerpt:
      "Looking for a personal trainer in De Pijp? SculptClub in the Jordaan is a 10-minute bike ride through the Vondelpark.",
    category: "Local",
    href: "/en/blog/personal-trainer-de-pijp-amsterdam",
    date: "April 2, 2026",
  },
  {
    title: "Boutique Gym vs Big Chain Gym: What's Right for You?",
    excerpt:
      "Deciding between a boutique gym and a big chain? Compare price, atmosphere, equipment and results.",
    category: "Comparison",
    href: "/en/blog/boutique-gym-vs-big-chain-gym",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer for Beginners",
    excerpt:
      "Never trained before? A personal trainer helps beginners start safely. Free intro, no experience needed.",
    category: "Training",
    href: "/en/blog/personal-trainer-for-beginners",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer Amsterdam East",
    excerpt:
      "Looking for a personal trainer in Amsterdam East? SculptClub in the Jordaan is a 15-minute bike ride.",
    category: "Local",
    href: "/en/blog/personal-trainer-amsterdam-east",
    date: "April 2, 2026",
  },
  {
    title: "Personal Trainer After an Injury in Amsterdam",
    excerpt:
      "Returning to exercise after an injury? A personal trainer builds you back safely with tailored recovery training.",
    category: "Recovery",
    href: "/en/blog/personal-trainer-after-injury-amsterdam",
    date: "April 3, 2026",
  },
  {
    title: "Strength Training for Women in Amsterdam",
    excerpt:
      "Strength training is the best investment in women's health. Discover why and how to start.",
    category: "Training",
    href: "/en/blog/strength-training-for-women",
    date: "April 3, 2026",
  },
  {
    title: "Personal Trainer Amsterdam South",
    excerpt:
      "Live in Amsterdam South? SculptClub in the Jordaan is a 10-minute bike ride. Private studio, no membership.",
    category: "Local",
    href: "/en/blog/personal-trainer-amsterdam-south",
    date: "April 3, 2026",
  },
  {
    title: "Personal Trainer for Seniors in Amsterdam",
    excerpt:
      "Stay fit and strong as you age. A personal trainer helps seniors train safely and effectively.",
    category: "Training",
    href: "/en/blog/personal-trainer-for-seniors-amsterdam",
    date: "April 3, 2026",
  },
  {
    title: "Become a Personal Trainer in Amsterdam",
    excerpt:
      "Want to start as a freelance personal trainer? Everything about studio, clients and rates in Amsterdam.",
    category: "For Trainers",
    href: "/en/blog/become-personal-trainer-amsterdam",
    date: "April 3, 2026",
  },
  {
    title: "Personal Trainer Amsterdam North",
    excerpt:
      "Living or working in Amsterdam Noord and looking for a personal trainer? Honest local overview, plus a quiet alternative in the Jordaan via the ferry.",
    category: "Local",
    href: "/en/blog/personal-trainer-amsterdam-north",
    date: "April 5, 2026",
  },
  {
    title: "Corporate Personal Training Amsterdam",
    excerpt:
      "Personal training for busy professionals and small teams in Amsterdam. Private studio in the Jordaan, open daily 06:30–22:00, invoice on company name available.",
    category: "Corporate",
    href: "/en/blog/corporate-personal-training-amsterdam",
    date: "April 5, 2026",
  },
  {
    title: "Female Personal Trainer in Amsterdam",
    excerpt:
      "Three female trainers at SculptClub — Gezina, Eva and Andrea. Private studio in the Jordaan, no crowds, no judgement. First intro is free.",
    category: "Training",
    href: "/en/blog/female-personal-trainer-amsterdam",
    date: "April 15, 2026",
  },
  {
    title: "English-Speaking Personal Trainer in Amsterdam",
    excerpt:
      "Every trainer at SculptClub coaches fluently in English. No Dutch required for intake, sessions, invoices or communication. Built for expats and internationals.",
    category: "Expats",
    href: "/en/blog/english-speaking-personal-trainer-amsterdam",
    date: "April 15, 2026",
  },
  {
    title: "Postpartum Personal Trainer in Amsterdam",
    excerpt:
      "Return to strength training safely after birth. Private studio, female trainers experienced with diastasis recti, pelvic floor and postpartum programming.",
    category: "Training",
    href: "/en/blog/postpartum-personal-trainer-amsterdam",
    date: "April 15, 2026",
  },
  {
    title: "Prenatal Personal Trainer in Amsterdam",
    excerpt:
      "Stay strong safely through pregnancy. Trimester-specific programming, hip mobility, pelvic floor, birth prep. Private studio, female trainers.",
    category: "Training",
    href: "/en/blog/prenatal-personal-trainer-amsterdam",
    date: "April 15, 2026",
  },
];

export default function BlogPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
        ]}
      />

      {/* Hero + Posts grid */}
      <Section bg="muted">
        <SectionHeader
          as="h1"
          overline="Blog"
          title="Tips, Insights & Stories"
          description="Articles about personal training, fitness, nutrition and everything around our studio in the Jordaan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...posts].reverse().map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Link href={post.href} className="block h-full">
                <Card className="h-full flex flex-col cursor-pointer hover:shadow-brand-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to start?"
          title="Book a Free Trial"
          description="Experience for yourself what it is like to train in our private studio in the Jordaan."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Book Free Trial
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
