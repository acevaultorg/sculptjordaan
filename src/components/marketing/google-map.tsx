"use client";

import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

export function GoogleMap({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          overline: "Locatie",
          title: "Vind ons in de Jordaan",
          hours: "Dagelijks 06:30–22:00",
          directions: "Route plannen",
        }
      : {
          overline: "Location",
          title: "Find us in the Jordaan",
          hours: "Daily 06:30–22:00",
          directions: "Get directions",
        };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} />
      <FadeIn>
        <div className="grid md:grid-cols-[1fr_300px] gap-6 items-start">
          {/* Map embed */}
          <div className="relative w-full aspect-[16/9] md:aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-brand-sm">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60960f9ba7109%3A0x54ad0ca856ae73b!2sSculptClub!5e0!3m2!1snl!2snl!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SculptClub locatie"
              className="absolute inset-0"
            />
          </div>

          {/* Info card */}
          <div className="space-y-4 rounded-2xl border border-border/50 bg-card p-5 shadow-brand-sm">
            {/* Address — decorative icon (muted), not clickable. The Route button below handles navigation. */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm">{siteConfig.address.street}</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.address.zip} {siteConfig.address.city}
                </p>
              </div>
            </div>

            {/* Hours — decorative icon (muted), not clickable. */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">{t.hours}</p>
            </div>

            {/* Phone — whole row is a tel: link, icon stays brand-colored (clickable context). */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-start gap-3 group"
            >
              <Phone className="w-5 h-5 text-brand mt-0.5 shrink-0 group-hover:text-brand-dark transition-colors" aria-hidden="true" />
              <span className="text-sm font-medium text-brand group-hover:text-brand-dark transition-colors">
                {siteConfig.phoneDisplay}
              </span>
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.geo.lat},${siteConfig.geo.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-xl bg-brand hover:bg-brand-dark text-white py-3 text-sm font-semibold transition-all"
            >
              {t.directions}
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
