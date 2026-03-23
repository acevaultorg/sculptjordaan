"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappLinks } from "@/config/acuity";

interface TrainerMatchFormProps {
  locale: "nl" | "en";
}

const goalOptions = {
  nl: [
    { value: "", label: "Kies je doel..." },
    { value: "afvallen", label: "Afvallen" },
    { value: "spiermassa", label: "Spiermassa" },
    { value: "revalidatie", label: "Revalidatie" },
    { value: "fitness", label: "Algemene fitness" },
    { value: "anders", label: "Anders" },
  ],
  en: [
    { value: "", label: "Choose your goal..." },
    { value: "weight-loss", label: "Weight loss" },
    { value: "muscle-gain", label: "Muscle gain" },
    { value: "rehabilitation", label: "Rehabilitation" },
    { value: "general-fitness", label: "General fitness" },
    { value: "other", label: "Other" },
  ],
};

const labels = {
  nl: {
    name: "Naam",
    whatsapp: "WhatsApp nummer",
    goal: "Doel",
    message: "Bericht (optioneel)",
    submit: "Stuur bericht via WhatsApp",
    namePlaceholder: "Je naam",
    whatsappPlaceholder: "+31 6...",
    messagePlaceholder: "Vertel ons meer over je doelen...",
  },
  en: {
    name: "Name",
    whatsapp: "WhatsApp number",
    goal: "Goal",
    message: "Message (optional)",
    submit: "Send message via WhatsApp",
    namePlaceholder: "Your name",
    whatsappPlaceholder: "+31 6...",
    messagePlaceholder: "Tell us more about your goals...",
  },
};

export function TrainerMatchForm({ locale }: TrainerMatchFormProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  const t = labels[locale];
  const goals = goalOptions[locale];

  const selectedGoalLabel =
    goals.find((g) => g.value === goal)?.label ?? goal;

  const buildWhatsAppUrl = () => {
    const text =
      locale === "nl"
        ? `Hoi! Ik zoek een personal trainer bij SculptClub.\n\nNaam: ${name}\nWhatsApp: ${whatsapp}\nDoel: ${selectedGoalLabel}${message ? `\nBericht: ${message}` : ""}`
        : `Hi! I'm looking for a personal trainer at SculptClub.\n\nName: ${name}\nWhatsApp: ${whatsapp}\nGoal: ${selectedGoalLabel}${message ? `\nMessage: ${message}` : ""}`;
    return `https://wa.me/31683178934?text=${encodeURIComponent(text)}`;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name && whatsapp && goal) {
          window.open(buildWhatsAppUrl(), "_blank");
        }
      }}
      className="mx-auto max-w-md space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="match-name">{t.name}</Label>
        <Input
          id="match-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.namePlaceholder}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="match-whatsapp">{t.whatsapp}</Label>
        <Input
          id="match-whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder={t.whatsappPlaceholder}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="match-goal">{t.goal}</Label>
        <select
          id="match-goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
        >
          {goals.map((g) => (
            <option key={g.value} value={g.value} disabled={g.value === ""}>
              {g.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="match-message">{t.message}</Label>
        <Textarea
          id="match-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        {t.submit}
      </button>
    </form>
  );
}
