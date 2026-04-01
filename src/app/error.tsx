"use client";

import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { RefreshCw, Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const content = {
  nl: {
    title: "Er ging iets mis.",
    description:
      "Vernieuw de pagina en probeer het opnieuw \u2014 of neem rechtstreeks contact met ons op.",
    retry: "Opnieuw proberen",
    home: "Ga naar home",
    homeHref: "/",
  },
  en: {
    title: "Something went wrong.",
    description:
      "Refresh the page and try again \u2014 or reach out to us directly.",
    retry: "Try again",
    home: "Go home",
    homeHref: "/en",
  },
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [lang, setLang] = useState<"nl" | "en">("nl");

  useEffect(() => {
    if (window.location.pathname.startsWith("/en")) {
      setLang("en");
    }
  }, []);

  const t = content[lang];

  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <div className="text-center">
            <p className="text-[8rem] sm:text-[12rem] font-bold leading-none tracking-tighter text-brand/20">
              500
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold -mt-4 sm:-mt-8">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {t.description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand-dark transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                {t.retry}
              </button>
              <ButtonLink href={t.homeHref} variant="outline" size="lg">
                <Home className="mr-2 w-4 h-4" />
                {t.home}
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
