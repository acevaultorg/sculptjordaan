import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SculptClub privacy policy. How we collect, use and protect your personal data in compliance with GDPR. Your privacy matters.",
  alternates: { canonical: "/en/privacy-policy", languages: { nl: "/nl/privacybeleid", en: "/en/privacy-policy" } },
};

export default function PrivacyPolicyEN() {
  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: 23 February 2026</p>

          <h2>1. Who we are</h2>
          <p>SculptClub operates a private personal training studio at Egelantiersgracht 424, 1015 RR Amsterdam, Netherlands. Email: contact@sculptclub.nl.</p>

          <h2>2. What data we collect</h2>
          <ul>
            <li><strong>Contact information:</strong> name, email, phone number — when you fill out a form or contact us</li>
            <li><strong>Booking data:</strong> session times, trainer preferences — via our booking system (Acuity Scheduling)</li>
            <li><strong>Payment data:</strong> processed by our payment provider; we do not store card details</li>
            <li><strong>Usage data:</strong> pages visited, device info — via analytics (see Cookie Policy)</li>
            <li><strong>CCTV footage:</strong> for security purposes inside the studio</li>
          </ul>

          <h2>3. How we use your data</h2>
          <ul>
            <li>To provide and manage your bookings</li>
            <li>To communicate with you about your sessions</li>
            <li>To improve our services and website</li>
            <li>For security (CCTV)</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Sharing your data</h2>
          <p>We only share data with service providers that help us operate (booking system, payment processor, email service). We do not sell your data.</p>

          <h2>5. Cookies</h2>
          <p>See our <a href="/en/cookie-policy">Cookie Policy</a> for details on cookies and tracking.</p>

          <h2>6. Your rights (GDPR)</h2>
          <p>You have the right to access, correct, delete, restrict or port your personal data. Contact us at contact@sculptclub.nl.</p>

          <h2>7. Data retention</h2>
          <p>We retain your data for as long as needed to provide services and meet legal obligations. CCTV footage is retained for a maximum of 30 days.</p>

          <h2>8. Security</h2>
          <p>We use appropriate technical and organizational measures to protect your data.</p>

          <h2>9. Contact</h2>
          <p>SculptClub<br />Egelantiersgracht 424<br />1015 RR Amsterdam<br />contact@sculptclub.nl</p>
        </div>
      </Section>
    </PageLayout>
  );
}
