import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions — SculptClub Amsterdam Jordaan" },
  description:
    "Terms and conditions of SculptClub. Information about bookings, cancellation, payment, house rules and liability.",
  alternates: {
    canonical: "/en/terms-conditions",
    languages: {
      nl: "/nl/algemene-voorwaarden",
      en: "/en/terms-conditions",
    },
  },
};

export default function TermsPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          as="h1"
          overline="Legal"
          title="Terms & Conditions"
          description="Version: 23 February 2026"
        />
      </Section>

      {/* 1. Definitions */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>&quot;SculptClub&quot;</strong> (also: &quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;): the company SculptClub,
                located at Egelantiersgracht 424, 1015 RR Amsterdam, the
                Netherlands.
              </li>
              <li>
                <strong>&quot;Client&quot;</strong> (also: &quot;you&quot;,
                &quot;your&quot;): any natural or legal person who uses the
                services of SculptClub.
              </li>
              <li>
                <strong>&quot;Services&quot;</strong>: personal training
                sessions, Open Gym access, studio rental, and other services
                offered by SculptClub.
              </li>
              <li>
                <strong>&quot;Trainer&quot;</strong>: an independent personal
                trainer who uses the facilities of SculptClub.
              </li>
              <li>
                <strong>&quot;Booking System&quot;</strong>: the online
                reservation system (Acuity Scheduling) through which clients
                book sessions.
              </li>
              <li>
                <strong>&quot;Studio&quot;</strong>: the training facility of
                SculptClub at the above-mentioned address.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* 2. Applicability */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">2. Applicability</h2>
            <p className="text-muted-foreground">
              These terms and conditions apply to all services, offers,
              agreements, and bookings of SculptClub. By using our services, you
              agree to these terms. Deviations from these terms are only valid if
              agreed upon in writing. SculptClub reserves the right to modify
              these terms. Changes will be communicated via our website and take
              effect 30 days after publication.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 3. Services */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">3. Services</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.1 Personal Training
            </h3>
            <p className="text-muted-foreground">
              Personal training sessions are conducted by independent trainers
              who rent the SculptClub studio. The agreement for personal training
              is between you and the trainer. SculptClub provides the space and
              equipment but is not a party to the agreement between client and
              trainer. Trainers set their own rates and conditions.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Open Gym</h3>
            <p className="text-muted-foreground">
              Open Gym provides access to the studio for independent training
              during booked time slots. Open Gym operates in 4-week cycles. You
              choose the number of sessions per week and pay in advance. After
              each cycle, you can cancel without obligations. A maximum of 3
              people may train in the studio simultaneously.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.3 Studio Rental
            </h3>
            <p className="text-muted-foreground">
              The studio can be rented by independent trainers,
              physiotherapists, and other fitness professionals. Rental is per
              hour or via discount packages (10 or 20 hours). Renters must hold
              valid professional liability insurance. All equipment, wifi, and
              basic facilities are included.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 4. Bookings & Payment */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              4. Bookings &amp; Payment
            </h2>
            <p className="text-muted-foreground">
              Bookings are made through our online booking system (Acuity
              Scheduling). After booking, you will receive a confirmation via the booking system.
              The evening before your session, you will receive a unique door
              code via WhatsApp. Payment for Open Gym is made in advance
              per cycle through the booking system. Payment for personal training
              is made directly to the trainer according to their terms. Payment
              for studio rental is made in advance per hour or per package. All
              listed prices include VAT unless stated otherwise.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 5. Cancellation */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">5. Cancellation</h2>
            <p className="text-muted-foreground">
              You may cancel or reschedule a booking free of charge at any time
              through the booking system. Failure to appear (no-show) without
              prior cancellation may be charged. SculptClub reserves
              the right to cancel sessions in cases of force majeure (such as
              emergencies, equipment failure, or extreme weather conditions). In
              such cases, you will receive a full alternative time slot or
              refund.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 6. House Rules */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">6. House Rules</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                Maximum <strong>3 people</strong> in the studio at the same time.
              </li>
              <li>
                Respect the equipment: use towels, re-rack weights, and report
                damage immediately.
              </li>
              <li>Wear clean indoor sports shoes in the studio.</li>
              <li>
                Leave the studio as you would like to find it: clean and tidy.
              </li>
              <li>
                Smoking, alcohol, and drugs are not permitted in the studio.
              </li>
              <li>
                Respect booking times: leave the studio on time so the next user
                can begin.
              </li>
              <li>
                Pets are not allowed in the studio (with the exception of
                service animals).
              </li>
              <li>
                Noise should be kept to a minimum out of respect for
                neighbouring residents. The building is located in a residential
                area.
              </li>
              <li>
                SculptClub reserves the right to deny access in cases of
                repeated violation of the house rules.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* 7. Liability */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">7. Liability</h2>
            <p className="text-muted-foreground">
              Use of the studio and equipment is entirely at your own risk.
              SculptClub is not liable for injury, property damage, or loss of
              personal belongings, unless this is a direct result of gross
              negligence or intent on the part of SculptClub. SculptClub is not
              liable for the services of independent trainers. The agreement for
              personal training is between you and the trainer. Clients and
              renters are responsible for seeking medical advice before starting
              a training programme. SculptClub recommends always consulting a
              physician if in doubt about your physical fitness.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 8. Privacy */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">8. Privacy</h2>
            <p className="text-muted-foreground">
              SculptClub processes personal data in accordance with the General
              Data Protection Regulation (GDPR). For more information on how we
              collect, use, and protect your data, please refer to our{" "}
              <Link
                href="/en/privacy-policy"
                className="text-brand hover:text-brand-dark underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 9. CCTV */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">9. CCTV</h2>
            <p className="text-muted-foreground">
              CCTV may be present in the communal areas of the building for
              security purposes. There are no cameras in the training studio
              itself. CCTV footage is retained for a maximum of 4 weeks and is
              only accessible to authorised personnel. CCTV is indicated by
              signage at the entrance. For more information, see our{" "}
              <Link
                href="/en/privacy-policy"
                className="text-brand hover:text-brand-dark underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 10. Intellectual Property */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All intellectual property rights relating to the SculptClub
              website, branding, logos, content, and marketing materials belong
              to SculptClub. It is not permitted to copy, distribute, or use
              SculptClub materials for commercial purposes without prior written
              consent. Trainers may use the SculptClub logo and name to promote
              their services at SculptClub, provided this is in accordance with
              our brand guidelines.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 11. Governing Law */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              11. Governing Law &amp; Disputes
            </h2>
            <p className="text-muted-foreground">
              These terms and conditions and all agreements with SculptClub are
              governed by Dutch law. Disputes arising from or in connection with
              these terms shall be submitted to the competent court in Amsterdam.
              Before submitting a dispute to the court, the parties shall
              endeavour to resolve the dispute by mutual consultation.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 12. Contact */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Get in touch:
            </p>
            <div className="mt-4 text-muted-foreground space-y-1">
              <p>
                <strong>SculptClub</strong>
              </p>
              <p>Egelantiersgracht 424</p>
              <p>1015 RR Amsterdam</p>
              <p>The Netherlands</p>
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
