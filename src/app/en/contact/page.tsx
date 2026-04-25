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
    note: "We usually reply within 1 hour",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    href: `https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`,
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: siteConfig.hours,
  },
];

export default function ContactPageEN() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const parts = [
      `Hi! I'm ${name.trim()}.`,
      phone.trim() ? `My phone number is ${phone.trim()}.` : "",
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
        locale: "en",
      });
      gtag("event", "contact_form_submit", { method: "whatsapp", locale: "en" });
    }
    if (typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function") {
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq!("track", "Lead", { value: 45, currency: "EUR", content_name: "contact_form_en" });
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Contact","url":"/en/contact"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Contact"
          title="Get in touch"
          description="Have a question, want to learn more, or just want to stop by? We're here to help."
        />
      </Section>

      <Section bg="muted">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact details</h2>
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
                  WhatsApp us directly
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.15}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Send us a message
                </h3>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-brand mx-auto mb-3" />
                    <p className="font-semibold text-lg mb-1">Message ready!</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      You&apos;re being redirected to WhatsApp to send your message. We usually reply within 1 hour.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setName(""); setPhone(""); setMessage(""); }}
                      className="text-sm text-brand hover:text-brand-dark transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+31 6..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
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
                      Send via WhatsApp
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Your message will be prepared in WhatsApp so you can send it directly.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <GoogleMap locale="en" />
    </PageLayout>
  );
}
