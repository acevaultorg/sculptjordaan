"use client";

/**
 * TrainerProfileForm: a trainer asks to be listed in the directory.
 * Posts to /api/trainer-profile (functions/api/trainer-profile.ts), which stores the
 * request in the same Workers KV namespace the feedback and lead forms use.
 * If sending fails, the visitor gets a mailto link to the studio address instead.
 *
 * RULES THIS COMPONENT KEEPS:
 *  - Nothing is published from here. A person on the SculptClub side reads the request
 *    and adds the listing by hand. The consent box is required and starts unticked.
 *  - No analytics events at all. This form must never fire an ad conversion.
 *  - The email address is for contact only and is never shown in the directory.
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    name: "Naam",
    email: "E-mail",
    emailHint: "Alleen voor contact. Je e-mailadres komt niet in de gids.",
    specialties: "Specialiteiten",
    specialtiesHint: "Bijvoorbeeld kracht, afvallen, herstel",
    neighbourhood: "Wijk in Amsterdam",
    neighbourhoodHint: "Bijvoorbeeld De Pijp of Jordaan",
    languages: "Talen",
    languagesHint: "Bijvoorbeeld Nederlands, Engels",
    link: "Website of Instagram",
    linkHint: "Hier kunnen klanten bij je boeken of meer over je lezen",
    consent:
      "Ik ga ermee akkoord dat SculptClub mijn naam, specialiteiten, wijk, talen en link in de trainergids op sculptclub.nl toont.",
    consentHint: "Je kunt je profiel altijd laten weghalen via contact@sculptclub.nl.",
    privacy:
      "Wat we bewaren: alleen wat je hier invult (naam, e-mailadres, specialiteiten, wijk, talen, link) en het moment van je toestemming, maximaal 2 jaar. Geen IP-adres. Je profiel gaat pas online nadat we het hebben nagekeken en jij toestemming hebt gegeven.",
    submit: "Verstuur",
    sending: "Versturen",
    needName: "Vul je naam in.",
    needEmail: "Vul een geldig e-mailadres in.",
    needSpecialties: "Vul minstens één specialiteit in.",
    needConsent: "Zonder je toestemming kunnen we je profiel niet tonen.",
    error: "Versturen lukt nu niet. Stuur je gegevens liever per e-mail:",
    mailCta: "Open e-mail aan SculptClub",
    mailSubject: "Profiel voor de trainergids",
    thanksTitle: "Bedankt, we hebben je aanvraag.",
    thanksBody: "We bekijken je gegevens en mailen je voordat je profiel online komt. Zonder jouw akkoord staat er niets online.",
    back: "Naar de trainergids",
    backHref: "/nl/trainers",
  },
  en: {
    name: "Name",
    email: "Email",
    emailHint: "For contact only. Your email address is not shown in the directory.",
    specialties: "Specialties",
    specialtiesHint: "For example strength, weight loss, recovery",
    neighbourhood: "Neighbourhood in Amsterdam",
    neighbourhoodHint: "For example De Pijp or Jordaan",
    languages: "Languages",
    languagesHint: "For example Dutch, English",
    link: "Website or Instagram",
    linkHint: "Where clients can book with you or read more about you",
    consent:
      "I agree that SculptClub shows my name, specialties, neighbourhood, languages and link in the trainer directory on sculptclub.nl.",
    consentHint: "You can ask us to remove your profile at any time via contact@sculptclub.nl.",
    privacy:
      "What we store: only what you enter here (name, email, specialties, neighbourhood, languages, link) and when you gave consent, for at most 2 years. No IP address. Your profile only goes live after we have reviewed it and you have given consent.",
    submit: "Send",
    sending: "Sending",
    needName: "Enter your name.",
    needEmail: "Enter a valid email address.",
    needSpecialties: "Enter at least one specialty.",
    needConsent: "We cannot show your profile without your consent.",
    error: "Sending does not work right now. Please email your details instead:",
    mailCta: "Open email to SculptClub",
    mailSubject: "Profile for the trainer directory",
    thanksTitle: "Thank you, we have your request.",
    thanksBody: "We will review your details and email you before your profile goes online. Nothing is shown without your agreement.",
    back: "Go to the trainer directory",
    backHref: "/en/trainers",
  },
} as const;

export function TrainerProfileForm({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const startedAt = useRef<number>(Date.now());
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [problem, setProblem] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [languages, setLanguages] = useState("");
  const [link, setLink] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState(""); // honeypot

  const thanksRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state !== "success" || !thanksRef.current) return;
    thanksRef.current.scrollIntoView({ block: "center" });
    thanksRef.current.focus({ preventScroll: true });
  }, [state]);

  const mailtoHref = () => {
    const body = [
      `${t.name}: ${name}`,
      `${t.email}: ${email}`,
      `${t.specialties}: ${specialties}`,
      `${t.neighbourhood}: ${neighbourhood}`,
      `${t.languages}: ${languages}`,
      `${t.link}: ${link}`,
      "",
      t.consent,
    ].join("\n");
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(body)}`;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setProblem(t.needName);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setProblem(t.needEmail);
    if (!specialties.trim()) return setProblem(t.needSpecialties);
    if (!consent) return setProblem(t.needConsent);
    setProblem("");
    setState("submitting");
    try {
      const res = await fetch("/api/trainer-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name,
          email,
          specialties,
          neighbourhood,
          languages,
          link,
          consent_listing: consent === true,
          company,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div ref={thanksRef} tabIndex={-1} role="status" className="scroll-mt-40 rounded-2xl border border-border bg-card p-6 text-center outline-none">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-brand" aria-hidden="true" />
        <h2 className="mb-2 text-xl font-bold">{t.thanksTitle}</h2>
        <p className="mb-5 text-muted-foreground">{t.thanksBody}</p>
        <a
          href={t.backHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark"
        >
          {t.back}
        </a>
      </div>
    );
  }

  const field = "space-y-2";
  const input = "min-h-[44px]";
  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className={field}>
        <Label htmlFor="tp-name" className="text-base font-semibold">{t.name}</Label>
        <Input id="tp-name" autoComplete="name" maxLength={80} required value={name} onChange={(e) => setName(e.target.value)} className={input} />
      </div>
      <div className={field}>
        <Label htmlFor="tp-email" className="text-base font-semibold">{t.email}</Label>
        <p className="text-sm text-muted-foreground">{t.emailHint}</p>
        <Input id="tp-email" type="email" autoComplete="email" maxLength={200} required value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
      </div>
      <div className={field}>
        <Label htmlFor="tp-specialties" className="text-base font-semibold">{t.specialties}</Label>
        <p className="text-sm text-muted-foreground">{t.specialtiesHint}</p>
        <Input id="tp-specialties" maxLength={200} required value={specialties} onChange={(e) => setSpecialties(e.target.value)} className={input} />
      </div>
      <div className={field}>
        <Label htmlFor="tp-area" className="text-base font-semibold">{t.neighbourhood}</Label>
        <p className="text-sm text-muted-foreground">{t.neighbourhoodHint}</p>
        <Input id="tp-area" maxLength={80} value={neighbourhood} onChange={(e) => setNeighbourhood(e.target.value)} className={input} />
      </div>
      <div className={field}>
        <Label htmlFor="tp-languages" className="text-base font-semibold">{t.languages}</Label>
        <p className="text-sm text-muted-foreground">{t.languagesHint}</p>
        <Input id="tp-languages" maxLength={120} value={languages} onChange={(e) => setLanguages(e.target.value)} className={input} />
      </div>
      <div className={field}>
        <Label htmlFor="tp-link" className="text-base font-semibold">{t.link}</Label>
        <p className="text-sm text-muted-foreground">{t.linkHint}</p>
        <Input id="tp-link" inputMode="url" autoCapitalize="none" maxLength={200} value={link} onChange={(e) => setLink(e.target.value)} className={input} />
      </div>

      {/* honeypot: hidden from people and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="tp-company">Company</label>
        <input id="tp-company" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>

      {/* consent: required, unticked by default */}
      <div className="flex items-start gap-3">
        <input
          id="tp-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-6 w-6 shrink-0 rounded border-border accent-[var(--brand)]"
        />
        <div>
          <label htmlFor="tp-consent" className="text-sm font-medium leading-snug">{t.consent}</label>
          <p className="mt-1 text-sm text-muted-foreground">{t.consentHint}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{t.privacy}</p>

      {problem && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {problem}
        </p>
      )}
      {state === "error" && (
        <div role="alert" className="rounded-xl border border-border bg-card p-4 text-sm">
          <p className="mb-3">
            {t.error} <span className="font-semibold">{siteConfig.email}</span>
          </p>
          <a
            href={mailtoHref()}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-5 font-semibold transition-colors hover:border-brand hover:text-brand"
          >
            {t.mailCta}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </button>
    </form>
  );
}
