import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "SculptClub accessibility statement. Our commitment to digital and physical accessibility.",
  alternates: { canonical: "/en/accessibility-statement", languages: { nl: "/nl/toegankelijkheid", en: "/en/accessibility-statement" } },
};

export default function AccessibilityEN() {
  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Accessibility Statement</h1>

          <p>SculptClub is committed to making our website and studio accessible to everyone. We aim for WCAG 2.1 Level AA compliance.</p>

          <h2>Digital accessibility</h2>
          <ul>
            <li>Keyboard navigation on all pages</li>
            <li>Screen reader support</li>
            <li>Sufficient color contrast (WCAG AA)</li>
            <li>Alt text on all images</li>
            <li>Clear heading structure</li>
            <li>Touch targets of at least 44px</li>
          </ul>

          <h2>Physical accessibility</h2>
          <p>Our studio is located in a historic building in the Jordaan. This means there are limitations to physical accessibility. Please contact us if you have specific needs — we are happy to help.</p>

          <h2>Feedback</h2>
          <p>Experiencing accessibility issues? Let us know at info@sculptclub.nl or via WhatsApp. We take your feedback seriously and continuously work on improvements.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
