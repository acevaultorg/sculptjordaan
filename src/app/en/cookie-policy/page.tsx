import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "SculptClub cookie policy. Learn what cookies we use, why we use them, and how to manage your preferences on our website.",
  alternates: { canonical: "/en/cookie-policy", languages: { nl: "/nl/cookiebeleid", en: "/en/cookie-policy" } },
  openGraph: {
    type: "website",
    url: "/en/cookie-policy",
    title: "Cookie Policy",
    description:
      "SculptClub cookie policy. Learn what cookies we use, why we use them, and how to manage your preferences on our website.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy",
    description:
      "SculptClub cookie policy. Learn what cookies we use, why we use them, and how to manage your preferences on our website.",
  },
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
          {/* See the NL twin for why this was added 2026-09-22. Cookie names and
              purposes are taken verbatim from Microsoft's own documentation;
              retention is not stated there, so it is not stated here either. */}
          <p>
            Microsoft Clarity produces heatmaps and session recordings: it lets us
            replay, anonymized, where visitors click, scroll and get stuck, so we
            can improve the site. For this Clarity sets the first-party cookies{" "}
            <code>_clck</code> (a pseudonymous Clarity user ID) and{" "}
            <code>_clsk</code> (links several page views into one session
            recording), and may additionally set Microsoft&rsquo;s own cookies
            (CLID, ANONCHK, MR, MUID and SM). Microsoft acts as processor here;
            their own cookie list is published in the Clarity documentation.
            Clarity only loads after you accept all cookies in the cookie banner;
            without that choice nothing is requested from Microsoft.
          </p>
          <p>
            Microsoft Advertising (Bing UET) also loads, to measure whether a
            visit from Bing leads to a booking. We do not run advertisements on
            Bing ourselves; the tag is used for measurement only. Like Clarity, it only loads after
            you accept all cookies in the cookie banner.
          </p>

          <h3>Marketing cookies</h3>
          <p>Facebook Pixel, TikTok Pixel and Google Ads help us show relevant advertisements. These cookies are only placed with your consent.</p>

          <h2>Managing your cookies</h2>
          <p>You can change your cookie preferences via the cookie banner at the bottom of the page, or through your browser settings.</p>

          <h2>Contact</h2>
          <p>SculptClub<br />Egelantiersgracht 424, 1015 RR Amsterdam<br />contact@sculptclub.nl</p>
        </div>
      </Section>
    </PageLayout>
  );
}
