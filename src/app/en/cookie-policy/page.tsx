import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "SculptClub cookie policy. Learn what cookies we use, why we use them, and how to manage your preferences on our website.",
  alternates: { canonical: "/en/cookie-policy", languages: { nl: "/nl/cookiebeleid", en: "/en/cookie-policy" } },
};

export default function CookiePolicyEN() {
  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Cookie Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: 23 February 2026</p>

          <h2>What are cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>

          <h2>What cookies do we use?</h2>

          <h3>Necessary cookies</h3>
          <p>Required for the website to function. Cannot be disabled.</p>

          <h3>Functional cookies</h3>
          <p>Remember your preferences such as language setting and cookie choice.</p>

          <h3>Analytical cookies</h3>
          <p>Google Analytics 4 (GA4) helps us understand how visitors use the website. This data is anonymized.</p>

          <h3>Marketing cookies</h3>
          <p>Facebook Pixel and Google Ads help us show relevant advertisements. These cookies are only placed with your consent.</p>

          <h2>Managing your cookies</h2>
          <p>You can change your cookie preferences via the cookie banner at the bottom of the page, or through your browser settings.</p>

          <h2>Contact</h2>
          <p>SculptClub<br />Egelantiersgracht 424, 1015 RR Amsterdam<br />contact@sculptclub.nl</p>
        </div>
      </Section>
    </PageLayout>
  );
}
