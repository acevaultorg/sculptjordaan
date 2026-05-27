"use client";

/**
 * Trainer-application form for /nl/word-trainer + /en/become-trainer.
 *
 * Operator directive 2026-05-27: "zorg dat trainer dan op de pagina zijn
 * gegevens achterlaat, of whatsapp verstuurd om zich aan te melden ofzo.
 * vage funnels!!"
 *
 * Trainer-funnel was previously: WhatsApp button → operator chat. That
 * works if the trainer types something useful. Many didn't — operator
 * received "hi" / "interest?" with no contact info, requiring a back-
 * and-forth before any qualification could happen.
 *
 * This form structures the first-touch:
 *   - name (required)
 *   - phone (required) — primary callback channel
 *   - email (optional)
 *   - kort bericht (optional) — what they want / experience / availability
 *
 * On submit, opens WhatsApp with a pre-filled, structured message
 * containing all fields. No backend, no DB, no email-provider. The
 * operator gets a WhatsApp from a NEW conversation (their own number)
 * with the trainer's data pasted in, ready to reply to. Trainer's WA
 * client opens with that exact message ready to send.
 *
 * Why client-only deep-link (vs server action + email):
 *   1. Zero backend = zero spam-filter/deliverability failure mode
 *   2. Trainer sees their own message before sending = trust + control
 *   3. Operator already lives in WhatsApp Business for SculptClub leads
 *   4. Form is recoverable: if trainer abandons the WA hand-off, they
 *      can re-fill since state is client-side; no "did my message send?"
 *      anxiety from a fire-and-forget POST.
 */

import { useId, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const PHONE = "31683178934";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    nameLabel: "Naam",
    namePh: "Je naam",
    phoneLabel: "Telefoon",
    phonePh: "+31 6 ...",
    emailLabel: "E-mail (optioneel)",
    emailPh: "jij@voorbeeld.nl",
    msgLabel: "Korte intro (optioneel)",
    msgPh: "Ervaring, specialisatie, beschikbaarheid — wat handig is om te weten.",
    submit: "Verstuur via WhatsApp",
    hint: "We openen WhatsApp met je gegevens — je verstuurt zelf.",
    nameRequired: "Vul je naam in.",
    phoneRequired: "Vul je telefoonnummer in.",
    waPreface: "Hoi! Ik wil graag personal trainer worden bij SculptClub.",
    waName: "Naam",
    waPhone: "Telefoon",
    waEmail: "E-mail",
    waMsg: "Bericht",
  },
  en: {
    nameLabel: "Name",
    namePh: "Your name",
    phoneLabel: "Phone",
    phonePh: "+31 6 ...",
    emailLabel: "Email (optional)",
    emailPh: "you@example.com",
    msgLabel: "Short intro (optional)",
    msgPh: "Experience, focus, availability — what's useful to know.",
    submit: "Send via WhatsApp",
    hint: "We open WhatsApp with your details — you send it yourself.",
    nameRequired: "Please enter your name.",
    phoneRequired: "Please enter your phone number.",
    waPreface: "Hi! I'd like to become a personal trainer at SculptClub.",
    waName: "Name",
    waPhone: "Phone",
    waEmail: "Email",
    waMsg: "Message",
  },
} as const;

export function TrainerApplicationForm({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const formId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError(c.nameRequired);
      return;
    }
    if (!phone.trim()) {
      setError(c.phoneRequired);
      return;
    }
    setError(null);

    const lines: string[] = [
      c.waPreface,
      "",
      `${c.waName}: ${name.trim()}`,
      `${c.waPhone}: ${phone.trim()}`,
    ];
    if (email.trim()) lines.push(`${c.waEmail}: ${email.trim()}`);
    if (msg.trim()) {
      lines.push("", `${c.waMsg}:`, msg.trim());
    }
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/60 transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-xl gap-4"
      noValidate
      aria-describedby={`${formId}-hint`}
    >
      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-name`} className="text-sm font-medium">
          {c.nameLabel} <span className="text-brand">*</span>
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={c.namePh}
          className={inputCls}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-phone`} className="text-sm font-medium">
          {c.phoneLabel} <span className="text-brand">*</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={c.phonePh}
          className={inputCls}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-email`} className="text-sm font-medium">
          {c.emailLabel}
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.emailPh}
          className={inputCls}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-msg`} className="text-sm font-medium">
          {c.msgLabel}
        </label>
        <textarea
          id={`${formId}-msg`}
          name="message"
          rows={4}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder={c.msgPh}
          className={`${inputCls} resize-none`}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="plausible-event-name=word_trainer_form_submit mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-brand-foreground hover:bg-brand-dark transition-all active:scale-[0.98]"
      >
        <MessageCircle className="h-5 w-5" />
        {c.submit}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p id={`${formId}-hint`} className="text-center text-xs text-muted-foreground">
        {c.hint}
      </p>
    </form>
  );
}
