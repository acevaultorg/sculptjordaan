import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Dumbbell, Zap, Grip, Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio & Equipment",
  description: "Fully equipped private training studio in Amsterdam Jordaan. Professional strength, conditioning and functional equipment.",
  alternates: { canonical: "/en/studio", languages: { nl: "/nl/studio", en: "/en/studio" } },
};

const equipment = [
  { icon: Dumbbell, title: "Strength", items: ["Barbell & squat rack with platform", "Adjustable benches", "Dumbbells (4–40 kg)", "Dip attachment", "Cable machines"] },
  { icon: Zap, title: "Conditioning", items: ["Echo Bike (assault bike)", "Push/pull sled + track", "Plyo jump box", "Jump ropes"] },
  { icon: Grip, title: "Functional", items: ["Kettlebells", "Medicine balls", "Resistance bands"] },
  { icon: Music, title: "Amenities", items: ["Vinyl record player + Bluetooth speaker", "Free WiFi", "Changing area", "Secure storage", "Drinking water", "Showers", "2 heaters"] },
];

export default function StudioPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader overline="The studio" title="Everything you need. Nothing you don't." description="A fully equipped private training space in the heart of the Jordaan — designed for focused, distraction-free training." />
        <div className="grid sm:grid-cols-2 gap-8">
          {equipment.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section bg="muted">
        <SectionHeader overline="House rules" title="Respect the space" />
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-3 text-muted-foreground">
            <p>Clean all equipment after use.</p>
            <p>Arrive on time for your session — your time slot is yours alone.</p>
            <p>Maximum 3 people in the studio at any time.</p>
            <p>Return weights and accessories to their designated spots.</p>
            <p>No food in the training area. Water bottles welcome.</p>
            <p>Report any equipment issues to us via WhatsApp.</p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
