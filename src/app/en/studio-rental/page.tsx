import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { acuityLinks } from "@/config/acuity";
import { Dumbbell, Lock, Clock, Ban } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Rental — Private Training Space | SculptClub Amsterdam Jordaan",
  description:
    "Rent our private studio in the Jordaan for personal training or small group sessions. From \u20AC12/hour, no commission. Professional equipment, flexible by the hour.",
  alternates: {
    canonical: "/en/studio-rental",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const rates = [
  {
    type: "Half studio (1:1)",
    prices: [
      { duration: "60 min", price: "\u20AC12" },
      { duration: "90 min", price: "\u20AC17" },
    ],
  },
  {
    type: "Full studio (max 6)",
    prices: [
      { duration: "60 min", price: "\u20AC17" },
      { duration: "90 min", price: "\u20AC24" },
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "\u20AC89",
    badge: null,
    savings: "save 10%",
  },
  {
    name: "Routine",
    price: "\u20AC199",
    badge: "Most popular",
    savings: "save 15%",
  },
  {
    name: "Volume",
    price: "\u20AC549",
    badge: "Best value",
    savings: "save 23%",
  },
];

const features = [
  {
    icon: Dumbbell,
    title: "Professional equipment",
    description:
      "Power rack, cable machine, dumbbells and everything you need.",
  },
  {
    icon: Lock,
    title: "Private space",
    description: "No onlookers. Just you and your client(s).",
  },
  {
    icon: Clock,
    title: "Flexible by the hour",
    description: "Book when it suits you. No fixed schedules.",
  },
  {
    icon: Ban,
    title: "No commission",
    description: "You set your own rates. We only charge rent.",
  },
];

export default function StudioRentalPageEN() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Studio Rental"
          title="Rent the Studio"
          description="Your clients. Our space. Rent our fully equipped private studio by the hour and deliver personal training sessions in a professional setting."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Rent the Studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing table */}
      <Section bg="muted">
        <SectionHeader
          overline="Pricing"
          title="Hourly Rates"
          description="Flexible per session, no subscription required."
        />

        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Space</th>
                    <th className="px-4 py-3 text-center font-medium">
                      60 min
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      90 min
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((rate) => (
                    <tr key={rate.type} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium">{rate.type}</td>
                      {rate.prices.map((p) => (
                        <td
                          key={p.duration}
                          className="px-4 py-3 text-center font-semibold"
                        >
                          {p.price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Discount packages */}
      <Section>
        <SectionHeader
          overline="Discount Packages"
          title="Train More, Save More"
          description="Buy a credit package and save on every session. Packages are valid for 1 year."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center ${pkg.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {pkg.badge && (
                    <Badge className="mx-auto mb-2">{pkg.badge}</Badge>
                  )}
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                  <p className="mt-2 text-sm">
                    <span className="sc-discount">{pkg.savings}</span>
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Packages are valid for 1 year. Lowest effective rate:{" "}
            <span className="sc-discount">\u20AC9.24 / session</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8 flex justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Rent the Studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="Everything You Need"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
