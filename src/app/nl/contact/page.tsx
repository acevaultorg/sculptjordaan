"use client";

import { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GoogleMap } from "@/components/marketing/google-map";
import { siteConfig } from "@/config/site";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: siteConfig.whatsapp,
    note: "Meestal reageren we binnen 1 uur",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    href: `https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`,
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: siteConfig.hours,
  },
];

export default function ContactPageNL() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const parts = [
      `Hoi! Ik ben ${name.trim()}.`,
      phone.trim() ? `Mijn telefoonnummer is ${phone.trim()}.` : "",
      "",
      message.trim(),
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/31683178934?text=${encodeURIComponent(parts.join("\n"))}`;
    // Fire conversion + lead events BEFORE window.open (popup blockers can clip async work)
    if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag!;
      gtag("event", "conversion", {
        send_to: "AW-18011741633/NwwsCNGZlp8cEMG71YxD",
        value: 45,
        currency: "EUR",
      });
      gtag("event", "generate_lead", {
        method: "contact_form",
        value: 45,
        currency: "EUR",
        locale: "nl",
      });
      gtag("event", "contact_form_submit", { method: "whatsapp", locale: "nl" });
    }
    if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq!("track", "Lead", { value: 45, currency: "EUR", content_name: "contact_form_nl" });
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Contact","url":"/nl/contact"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Contact"
          title="Neem contact met ons op"
          description="Heb je een vraag, wil je meer weten of gewoon even langskomen? We staan voor je klaar."
        />
      </Section>

      <Section bg="muted">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-brand transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                      {item.note && (
                        <p className="text-xs text-muted-foreground/70 mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink
                  href={siteConfig.whatsapp}
                  external
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ons direct
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Stuur ons een bericht
                </h3>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-brand mx-auto mb-3" />
                    <p className="font-semibold text-lg mb-1">Bericht klaar!</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Je wordt doorgestuurd naar WhatsApp om het bericht te versturen. We reageren meestal binnen 1 uur.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setName(""); setPhone(""); setMessage(""); }}
                      className="text-sm text-brand hover:text-brand-dark transition-colors"
                    >
                      Nog een bericht sturen
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam *</Label>
                      <Input
                        id="name"
                        placeholder="Je naam"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+31 6..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        placeholder="Waar kunnen we je mee helpen?"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      Verstuur via WhatsApp
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Je bericht wordt klaargezet in WhatsApp zodat je het direct kunt versturen.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <GoogleMap locale="nl" />
    </PageLayout>
  );
}
