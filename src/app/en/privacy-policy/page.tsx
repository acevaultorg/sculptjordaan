import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — SculptClub Amsterdam Jordaan" },
  description:
    "SculptClub privacy policy. How we collect, use and protect your personal data in compliance with GDPR.",
  alternates: {
    canonical: "/en/privacy-policy",
    languages: {
      nl: "/nl/privacybeleid",
      en: "/en/privacy-policy",
    },
  },
};

export default function PrivacyPolicyEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          as="h1"
          overline="Legal"
          title="Privacy Policy"
          description="Last updated: 23 February 2026"
        />
      </Section>

      {/* Intro */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              SculptClub (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
              located at Egelantiersgracht 424, 1015 RR Amsterdam, is
              responsible for the processing of personal data as described in
              this privacy policy. We respect your privacy and process personal
              data in accordance with the General Data Protection Regulation
              (GDPR). This policy explains what data we collect, why, how we
              use it and what rights you have.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What data */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              1. What Data Do We Collect?
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.1 Contact Information
            </h3>
            <p className="text-muted-foreground">
              Name, email address, phone number — when you make a booking,
              contact us or sign up for our services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.2 Booking Data
            </h3>
            <p className="text-muted-foreground">
              Date, time and type of booked sessions, cancellation history and
              preferences — via our booking system (Acuity Scheduling).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.3 Payment Data
            </h3>
            <p className="text-muted-foreground">
              Transaction information and payment confirmations. We do not store
              credit card or bank details. Payments are processed by our payment
              processor (Stripe). iDEAL payments are processed via Apple Pay.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.4 Website Usage
            </h3>
            <p className="text-muted-foreground">
              IP address, browser type, pages visited, referring websites and
              session duration — via cookies and analytics tools. See our{" "}
              <Link
                href="/en/cookie-policy"
                className="text-brand hover:text-brand-dark underline"
              >
                Cookie Policy
              </Link>{" "}
              for more information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.5 Communication
            </h3>
            <p className="text-muted-foreground">
              Content of messages you send us via email, WhatsApp or contact
              forms.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* How we use */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              2. How Do We Use Your Data?
            </h2>
            <p className="text-muted-foreground mb-4">
              We process your data for the following purposes:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Service delivery:</strong> processing bookings, sending
                confirmations and door codes, and delivering our services.
              </li>
              <li>
                <strong>Communication:</strong> answering questions and sending
                relevant information about your bookings.
              </li>
              <li>
                <strong>Improvement:</strong> analysing website usage to improve
                our services and user experience.
              </li>
              <li>
                <strong>Marketing:</strong> sending promotional messages, only
                with your explicit consent. You can unsubscribe at any time.
              </li>
              <li>
                <strong>Legal obligations:</strong> complying with tax and
                administrative requirements.
              </li>
              <li>
                <strong>Security:</strong> ensuring the safety of our studio and
                visitors.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Legal basis */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              3. Legal Basis for Processing
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Performance of a contract:</strong> for processing
                bookings and delivering services.
              </li>
              <li>
                <strong>Legitimate interest:</strong> for improving our services
                and ensuring security.
              </li>
              <li>
                <strong>Consent:</strong> for sending marketing messages and
                placing analytical cookies.
              </li>
              <li>
                <strong>Legal obligation:</strong> for complying with tax and
                administrative requirements.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Third parties */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              4. Sharing with Third Parties
            </h2>
            <p className="text-muted-foreground mb-4">
              We only share your data with service providers necessary for our
              business operations:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Acuity Scheduling:</strong> booking management (US,
                EU standard contractual clauses).
              </li>
              <li>
                <strong>Stripe:</strong> payment processing (PCI DSS
                compliant).
              </li>
              <li>
                <strong>Google Analytics 4:</strong> website analytics
                (anonymised data).
              </li>
              <li>
                <strong>Meta (Facebook):</strong> advertising effectiveness
                (via Pixel, anonymised).
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> session recordings and
                heatmaps (anonymised, no personal data captured).
              </li>
              <li>
                <strong>Hosting providers:</strong> for hosting our website
                (Vercel).
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We never sell your personal data to third parties. All service
              providers are contractually obligated to protect your data.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Cookies */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses cookies. For detailed information about which
              cookies we use and how you can manage them, please refer to our{" "}
              <Link
                href="/en/cookie-policy"
                className="text-brand hover:text-brand-dark underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Rights */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Right of access:</strong> you can request which data we
                process about you.
              </li>
              <li>
                <strong>Right to rectification:</strong> you can have incorrect
                data corrected.
              </li>
              <li>
                <strong>Right to erasure:</strong> you can request deletion of
                your data (&quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong>Right to data portability:</strong> you can request to
                receive your data in a structured, commonly used format.
              </li>
              <li>
                <strong>Right to restriction:</strong> you can request
                restriction of the processing of your data.
              </li>
              <li>
                <strong>Right to object:</strong> you can object to the
                processing of your data.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> if processing is
                based on consent, you can withdraw it at any time.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise your rights, contact us at{" "}
              <a
                href="mailto:contact@sculptclub.nl"
                className="text-brand hover:text-brand-dark underline"
              >
                contact@sculptclub.nl
              </a>
              . We will respond to your request within 30 days.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Retention */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Booking data:</strong> 2 years after last booking.
              </li>
              <li>
                <strong>Financial records:</strong> 7 years (legal obligation).
              </li>
              <li>
                <strong>Marketing preferences:</strong> until withdrawal of
                consent.
              </li>
              <li>
                <strong>Website analytics data:</strong> 26 months (Google
                Analytics default).
              </li>
              <li>
                <strong>CCTV footage:</strong> maximum 4 weeks.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* CCTV */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">8. CCTV</h2>
            <p className="text-muted-foreground">
              CCTV may be present in the common areas of the building. This is
              necessary for the security of the premises and the safety of our
              visitors. There are no cameras in the training room. Footage is
              retained for a maximum of 4 weeks and is only accessible to
              authorised personnel. The legal basis for this is our legitimate
              interest (security).
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Security */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              9. Data Security
            </h2>
            <p className="text-muted-foreground">
              We take appropriate technical and organisational measures to
              protect your personal data against unauthorised access, loss or
              misuse. This includes SSL encryption, secure servers and
              restricted access to data.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Complaints */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">10. Complaints</h2>
            <p className="text-muted-foreground">
              If you have a complaint about how we process your personal data,
              please contact us first. If we cannot resolve the issue together,
              you have the right to file a complaint with the Dutch Data
              Protection Authority (
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark underline"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              ).
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p className="text-muted-foreground">
              For questions about this privacy policy or to exercise your
              rights:
            </p>
            <div className="mt-4 text-muted-foreground space-y-1">
              <p>
                <strong>SculptClub</strong>
              </p>
              <p>Egelantiersgracht 424</p>
              <p>1015 RR Amsterdam</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@sculptclub.nl"
                  className="text-brand hover:text-brand-dark underline"
                >
                  contact@sculptclub.nl
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
