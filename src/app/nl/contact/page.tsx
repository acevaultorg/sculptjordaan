"use client";

import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

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
  return (
    <PageLayout>
      <Section>
        <SectionHeader
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
                  className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
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
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam</Label>
                    <Input id="name" placeholder="Je naam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input id="phone" type="tel" placeholder="+31 6..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea
                      id="message"
                      placeholder="Waar kunnen we je mee helpen?"
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled
                    className="inline-flex items-center justify-center w-full rounded-xl bg-brand text-brand-foreground px-6 py-3 text-sm font-semibold opacity-60 cursor-not-allowed"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    Verstuur bericht
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Contactformulier binnenkort beschikbaar. Neem in de
                    tussentijd contact op via WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Map placeholder */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Vind ons in de Jordaan
            </h2>
            <p className="text-muted-foreground mb-6">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <div className="aspect-[16/9] rounded-2xl bg-secondary/50 border border-border/50 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-brand" />
                <p className="text-sm font-medium">Kaart binnenkort beschikbaar</p>
                <a
                  href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand hover:text-brand-dark transition-colors mt-1 inline-block"
                >
                  Bekijk op Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
