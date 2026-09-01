import Script from "next/script";
import { siteConfig } from "@/config/site";

const { ga4, gtm, googleAds, googleAdsConversion, googleAdsConversionPurchase, fbPixel, clarity, tiktokPixel } = siteConfig.analytics;

export function Analytics() {
  return (
    <>
      {/* Plausible — STOPPED (operator 2026-07-04: "we stop with plausible ...
          we use clarity and analytics the upcoming months"). The plausible.io
          script LOADER is removed so nothing is fetched from plausible.io and
          no events are sent to the (now inactive) account. The init stub below
          is KEPT on purpose: dozens of components across the app call
          window.plausible(...) (operator: "you dont have to remove the tracks")
          — the stub keeps window.plausible a safe queue function so every one
          of those calls stays a harmless no-op (queues in memory, never
          flushed, never throws) instead of a ReferenceError. Conversion +
          engagement tracking continues via GA4 + Google Ads + Microsoft
          Clarity below. To re-enable Plausible later, restore the
          <Script defer data-domain src="https://plausible.io/js/script.outbound-links.tagged-events.js"> loader. */}
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>

      {/* Google Analytics 4 + Google Ads — consent mode v2 default denied */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Consent Mode v2 — ADVANCED (not basic).
          // Basic mode (what we had before) blocked Google Ads conversion pings
          // entirely when ad_storage was denied → 0 measured conversions on
          // €182/30d Ads spend in SculptClub Ads account 511-161-9582 (audited
          // 2026-05-15 via Chrome MCP). Most fleet visitors bounce in <2s from
          // Instagram → never click cookie banner → consent stays denied →
          // Google Ads conversion never recorded.
          //
          // Advanced mode (this block + url_passthrough + ads_data_redaction)
          // sends anonymized/cookieless pings even in denied state. Google
          // then uses conversion modeling to attribute these to campaigns.
          // GDPR-compliant: no cookies, no PII, no cross-site tracking when
          // ad_storage is denied — Google receives signal but cannot identify.
          // analytics_storage GRANTED by default (was 'denied', which silently
          // gated Microsoft Clarity at init: Plausible showed 152 UV/7d while
          // Clarity captured 0 across 3+ days). Clarity is anonymous +
          // cookieless on first-visit and reads gtag consent at script-load
          // time; with analytics_storage:'denied' it inits with track:false
          // and the later clarity('consent') call doesn't retroactively
          // re-enable recording. Granting analytics_storage on default lets
          // GA4 + Clarity record from page one. ad_storage / ad_user_data /
          // ad_personalization stay 'denied' until cookie banner accept
          // (which is what GDPR actually requires — analytics_storage covers
          // first-party anonymous session analytics, which is legal under
          // legitimate-interest in EU jurisdictions per ICO + EDPB guidance).
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
          gtag('set', 'url_passthrough', true);
          gtag('set', 'ads_data_redaction', true);
          gtag('config', '${ga4}');
          gtag('config', '${googleAds}');
        `}
      </Script>

      {/* Google Tag Manager — loaded AFTER the gtag consent-default block above so
          GTM (container ${gtm}) reads the established Consent Mode v2 state from the
          shared window.dataLayer. Canonical GTM snippet; pairs with the <noscript>
          iframe placed right after <body> in layout.tsx. */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtm}');
        `}
      </Script>

      {/* Meta (Facebook) Pixel — CONSENT-GATED.

          Audited live 2026-07-20 (Playwright, real Chrome, no consent clicked):
          the old version fired PageView and set the `_fbp` cookie on every
          visit regardless of the cookie banner, while GA4/Ads correctly
          honoured Consent Mode v2. That directly contradicted our own
          published cookie policy — /nl/cookiebeleid states verbatim
          "Facebook Pixel en Google Ads ... Deze cookies worden alleen
          geplaatst met je toestemming." Behaviour now matches the promise.

          Two deliberate choices:

          1. We do NOT load connect.facebook.net at all until consent.
             Meta's documented alternative — fbq('consent','revoke') before
             init — still downloads fbevents.js, which hands the visitor's IP
             and referrer to Meta before they've agreed to anything. Not
             requesting the script is both stricter and ~80KB cheaper for
             everyone who declines.

          2. Strategy moved lazyOnload -> afterInteractive. The old lazyOnload
             put PageView at +1.8-3.9s on mobile and +11.6s on one desktop
             run, so early bouncers were invisible to Meta and ad optimisation
             was learning from partial data. Gating on consent means the
             script now loads only for visitors who opted in, so loading it
             promptly costs the declining majority nothing while giving Meta
             complete data for the ones who did consent.

          The stub is installed unconditionally so the ~8 `fbq(...)` calls in
          the handlers below stay safe no-ops pre-consent (they queue in
          memory and flush on init if consent is later granted — Meta's own
          revoke/grant semantics). No <noscript> fallback img on purpose: it
          would fire unconditionally and cannot be consent-gated. */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          (function(){
            !function(f,b,e,v,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[]}(window,document);

            var started = false;
            function startPixel(){
              if (started) return;
              started = true;
              var t = document.createElement('script'); t.async = !0;
              t.src = 'https://connect.facebook.net/en_US/fbevents.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(t, s);
              fbq('init', '${fbPixel}');
              fbq('track', 'PageView');
            }
            function hasConsent(){
              return document.cookie.indexOf('sc_consent=all') > -1;
            }

            if (hasConsent()) {
              // Returning visitor who already accepted — no waiting.
              startPixel();
            } else {
              // CookieConsent sets the cookie BEFORE dispatching this event,
              // so reading the cookie here is safe. 'essential' choosers never
              // reach startPixel(), so Meta is never contacted for them.
              window.addEventListener('sc:consent-updated', function(){
                if (hasConsent()) startPixel();
              });
            }
          })();
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="ms-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarity}");
          // Clarity is cookieless + anonymous by design (no PII, no cross-site tracking).
          // GA4 consent-mode-v2 'analytics_storage: denied' default was inadvertently
          // gating Clarity's recording too — 0 sessions captured for 3+ days post-2026-05-15
          // Consent-Mode-v2-Advanced ship while Plausible still showed 152 UV/7d.
          // Explicit consent grant scoped to Clarity ONLY restores recording without
          // touching GA4/Ads consent state. Verified Clarity privacy posture:
          // https://learn.microsoft.com/en-us/clarity/setup-and-installation/cookie-consent
          window.clarity && window.clarity("consent");
        `}
      </Script>

      {/* Google Ads conversion — fires when visitor clicks any Acuity booking link */}
      <Script id="gads-conversion" strategy="afterInteractive">
        {`
          (function() {
            var FREE_INTRO_PAGES = ['/nl/gratis-intake', '/en/free-intro', '/nl/plan-gratis-intake-met-', '/en/plan-free-intro-with-'];
            function isFreeIntroPage() {
              var p = window.location.pathname;
              return FREE_INTRO_PAGES.some(function(s) { return p.startsWith(s); });
            }
            function detectBookingType(href) {
              if (href.includes('id=2155887') || href.includes('id=2155888') || href.includes('id=2155889') || href.includes('id=2155890')) return { type: 'open_gym', value: 49 };
              if (href.includes('id=2149357')) return { type: 'studio_pack_starter', value: 89 };
              if (href.includes('id=2149358')) return { type: 'studio_pack_routine', value: 179 };
              if (href.includes('id=2149360')) return { type: 'studio_pack_volume', value: 499 };
              if (href.includes('appointmentType=84032351') || href.includes('appointmentType=86677323') || href.includes('appointmentType=82553655') || href.includes('appointmentType=85410115')) return { type: 'studio_rental', value: 12 };
              if (href.includes('appointmentType=83513953')) return { type: 'open_gym_session', value: 7 };
              if (href.includes('appointmentType=87017445') || href.includes('appointmentType=86758291')) return { type: 'trial', value: 0 };
              return { type: 'generic', value: 0 };
            }
            // Intent: cross-funnel category — 'trainer' | 'studio_rental' | 'open_gym' | 'generic'.
            // Pricing: funnel stage — 'free' (free intake/tryout) | 'paid' (real money) | 'unknown'.
            // Operator can split any goal by intent + pricing in Plausible to see today's trainer-free-tryouts vs trainer-paid-packs vs studio-rental-bookings vs gym-subs.
            function classifyAcuityIntent(bookingType) {
              if (bookingType === 'open_gym' || bookingType === 'open_gym_session') return 'open_gym';
              if (bookingType === 'studio_rental') return 'studio_rental';
              if (bookingType === 'trial' || bookingType === 'studio_pack_starter' || bookingType === 'studio_pack_routine' || bookingType === 'studio_pack_volume') return 'trainer';
              return 'generic';
            }
            function classifyAcuityPricing(bookingType) {
              if (bookingType === 'trial') return 'free';
              if (bookingType === 'generic') return 'unknown';
              return 'paid';
            }
            function detectWaIntent(href) {
              // Direct trainer numbers → trainer intent, free intake assumed.
              // All 12 trainer WhatsApp numbers mapped (Tom 2026-07-01) so per-trainer
              // lead attribution (trainer_name prop on whatsapp_click / generate_lead
              // / Trainer_Intake_Lead_1) works for EVERY trainer, not just Joey + Dara.
              // Numbers mirror the whatsapp fields in src/config/trainers.ts — keep in
              // sync when a trainer's number changes. Each number is unique and not a
              // prefix of another, so indexOf with the 'wa.me/' anchor can't false-match.
              var TRAINER_WA = {
                '351917397700': 'Alex', '31623232640': 'Eva', '31642267007': 'Bryan',
                '31636091780': 'Ibrahim', '31613440302': 'Gezina', '31622730864': 'Andrea',
                '31645658213': 'Dara', '31621582581': 'Jearmey', '31639382800': 'Sergei',
                '31639175337': 'Joey', '31613326221': 'Hamish', '31615294322': 'Tom'
              };
              for (var waNum in TRAINER_WA) {
                if (href.indexOf('wa.me/' + waNum) !== -1) return { intent: 'trainer', pricing: 'free', trainer_name: TRAINER_WA[waNum] };
              }
              // Decode text= param to classify by message content
              var text = '';
              var qIdx = href.indexOf('text=');
              if (qIdx !== -1) {
                var raw = href.substring(qIdx + 5);
                var ampIdx = raw.indexOf('&');
                if (ampIdx !== -1) raw = raw.substring(0, ampIdx);
                try { text = decodeURIComponent(raw).toLowerCase(); } catch (_) { text = raw.toLowerCase(); }
              }
              // Open Gym = paid subscription
              if (text.indexOf('open gym') !== -1) return { intent: 'open_gym', pricing: 'paid', trainer_name: '' };
              // Studio rental = paid hourly
              if (text.indexOf('studio huren') !== -1 || text.indexOf('renting the studio') !== -1 || text.indexOf('huren van de studio') !== -1 || text.indexOf('trainingsruimte') !== -1 || text.indexOf('fysiotherapeut') !== -1) {
                return { intent: 'studio_rental', pricing: 'paid', trainer_name: '' };
              }
              // Volume pack purchase = trainer paid (€499 PT package)
              if (text.indexOf('volume pakket') !== -1 || text.indexOf('volume pack') !== -1) {
                return { intent: 'trainer', pricing: 'paid', trainer_name: '' };
              }
              // Free intake / blog inquiries → trainer free tryout
              if (text.indexOf('intake') !== -1 || text.indexOf('intro') !== -1 || text.indexOf('tarief') !== -1 || text.indexOf("'s rate") !== -1 || text.indexOf('afvallen') !== -1 || text.indexOf('begeleiding') !== -1 || text.indexOf('krachttraining') !== -1 || text.indexOf('rugklachten') !== -1) {
                return { intent: 'trainer', pricing: 'free', trainer_name: '' };
              }
              // Floating WhatsApp button + find/become-trainer messages mention
              // "trainer" but not the canonical phrases above (e.g. "Ik ben personal
              // trainer en wil graag de studio bekijken / huren", "trainer worden",
              // "ik zoek een personal trainer"). Classify them so the highest-intent
              // trainer/studio-rental clicks from the omnipresent floating button
              // aren't logged as 'generic' (attribution fix 2026-06-21).
              if (text.indexOf('trainer') !== -1) {
                if (text.indexOf('studio') !== -1 || text.indexOf('huren') !== -1 || text.indexOf('rent the studio') !== -1) {
                  return { intent: 'studio_rental', pricing: 'paid', trainer_name: '' };
                }
                return { intent: 'trainer', pricing: 'free', trainer_name: '' };
              }
              return { intent: 'generic', pricing: 'unknown', trainer_name: '' };
            }
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href]');
              if (!el || !el.href) return;
              var href = el.href;

              // ── Acuity click → full conversion stack ───────────────────
              if (href.includes('acuityscheduling.com')) {
                var isIntake = isFreeIntroPage();
                var booking = detectBookingType(href);
                var acuityIntent = classifyAcuityIntent(booking.type);
                var acuityPricing = classifyAcuityPricing(booking.type);
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: booking.value,
                    currency: 'EUR'
                  });
                  // GA4 event named to match the 'Book appointment' imported conversion
                  // (Google Ads → Conversions → Book appointment uses GA4 event
                  // 'Book_appointment_1'). The Ads-side trigger was originally configured
                  // as a Page Load on a URL that doesn't exist (/nl/training-studio-huren-amsterdam/)
                  // so this Click-based event variant gives operator a working trigger
                  // to point the Ads conversion at via GA4 admin.
                  gtag('event', 'Book_appointment_1', {
                    value: booking.value,
                    currency: 'EUR',
                    booking_type: booking.type,
                    intent: acuityIntent,
                    pricing: acuityPricing,
                    booking_source: window.location.pathname
                  });
                  gtag('event', 'begin_checkout', {
                    booking_type: booking.type,
                    intent: acuityIntent,
                    pricing: acuityPricing,
                    value: booking.value,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                  if (isIntake) {
                    gtag('event', 'free_intake_click', {
                      booking_source: window.location.pathname,
                      intent: acuityIntent,
                      pricing: acuityPricing,
                      value: 45,
                      currency: 'EUR'
                    });
                  }
                }
                if (typeof fbq === 'function') {
                  fbq('track', isIntake ? 'Lead' : 'InitiateCheckout', {
                    value: booking.value || 45,
                    currency: 'EUR',
                    content_name: booking.type,
                    content_category: acuityIntent + '|' + acuityPricing
                  });
                }
                if (typeof ttq !== 'undefined') {
                  ttq.track(isIntake ? 'SubmitForm' : 'AddToCart', {
                    value: booking.value,
                    currency: 'EUR',
                    content_category: acuityIntent + '|' + acuityPricing
                  });
                }
                if (typeof window.plausible === 'function') {
                  // Note: 'Free Intake: Click' matches the goal already configured in Plausible Settings.
                  // Don't rename to 'Free Intake Click' (no colon) — historical funnels depend on this name.
                  window.plausible(isIntake ? 'Free Intake: Click' : 'Acuity Click', {
                    props: {
                      booking_type: booking.type,
                      intent: acuityIntent,
                      pricing: acuityPricing,
                      value: booking.value || 45,
                      source_page: window.location.pathname
                    }
                  });
                  if (isIntake) {
                    window.plausible('Lead Generated', { props: { method: 'free_intake', intent: acuityIntent, pricing: acuityPricing, value: 45, source_page: window.location.pathname } });
                  // Clarity (added 2026-08-29). Clarity had ZERO custom tags — only clarity('consent') —
                  // so session recordings could not be filtered to converters, which is the whole
                  // point of having replay on a trafficked site. 'set' makes the session filterable;
                  // 'upgrade' forces Clarity to RETAIN it (Clarity samples, so converting sessions
                  // were the ones most likely to be discarded).
                  if (typeof window.clarity === 'function') {
                    window.clarity('set', 'conversion', 'free_intake');
                    window.clarity('upgrade', 'lead');
                  }
                  }
                }
                return;
              }

              // ── WhatsApp click → high-intent lead → Google Ads conversion ───────────────
              // Treat wa.me/* the same as a free-intake lead (€45 value).
              // These are users who WhatsApp to book — legitimate conversions.
              if (href.indexOf('wa.me/') !== -1 || href.indexOf('whatsapp.com/') !== -1) {
                var waSig = detectWaIntent(href);
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: 45,
                    currency: 'EUR'
                  });
                  // GA4 event matching 'Trainer Intake Lead' imported conversion
                  // (Google Ads → Conversions → Trainer Intake Lead, status 'Needs attention').
                  // WhatsApp clicks to trainer numbers ARE intake leads — fire the event so
                  // operator can re-trigger the Ads-side conversion against this GA4 event.
                  gtag('event', 'Trainer_Intake_Lead_1', {
                    value: 45,
                    currency: 'EUR',
                    intent: waSig.intent,
                    pricing: waSig.pricing,
                    trainer_name: waSig.trainer_name,
                    booking_source: window.location.pathname,
                    method: 'whatsapp'
                  });
                  gtag('event', 'whatsapp_click', {
                    booking_source: window.location.pathname,
                    intent: waSig.intent,
                    pricing: waSig.pricing,
                    trainer_name: waSig.trainer_name,
                    value: 45,
                    currency: 'EUR'
                  });
                  gtag('event', 'generate_lead', {
                    method: 'whatsapp',
                    intent: waSig.intent,
                    pricing: waSig.pricing,
                    trainer_name: waSig.trainer_name,
                    value: 45,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                }
                if (typeof fbq === 'function') {
                  fbq('track', 'Contact', {
                    value: 45,
                    currency: 'EUR',
                    content_name: 'whatsapp',
                    content_category: waSig.intent + '|' + waSig.pricing
                  });
                }
                if (typeof ttq !== 'undefined') {
                  ttq.track('Contact', {
                    value: 45,
                    currency: 'EUR',
                    content_category: waSig.intent + '|' + waSig.pricing
                  });
                }
                if (typeof window.plausible === 'function') {
                  window.plausible('WhatsApp Click', {
                    props: { value: 45, source_page: window.location.pathname, intent: waSig.intent, pricing: waSig.pricing, trainer_name: waSig.trainer_name }
                  });
                  window.plausible('Lead Generated', {
                    props: { method: 'whatsapp', value: 45, source_page: window.location.pathname, intent: waSig.intent, pricing: waSig.pricing, trainer_name: waSig.trainer_name }
                  });
                  // Clarity (added 2026-08-29). Clarity had ZERO custom tags — only clarity('consent') —
                  // so session recordings could not be filtered to converters, which is the whole
                  // point of having replay on a trafficked site. 'set' makes the session filterable;
                  // 'upgrade' forces Clarity to RETAIN it (Clarity samples, so converting sessions
                  // were the ones most likely to be discarded).
                  if (typeof window.clarity === 'function') {
                    window.clarity('set', 'conversion', 'whatsapp');
                    window.clarity('upgrade', 'lead');
                  }
                }
                return;
              }

              // ── Phone click → lead → Google Ads conversion ─────────────
              // Click-to-call = high-intent (mobile users tapping CTA).
              if (href.indexOf('tel:') === 0) {
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: 45,
                    currency: 'EUR'
                  });
                  gtag('event', 'phone_click', {
                    booking_source: window.location.pathname,
                    value: 45,
                    currency: 'EUR'
                  });
                  gtag('event', 'generate_lead', {
                    method: 'phone',
                    value: 45,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                }
                if (typeof fbq === 'function') fbq('track', 'Contact', { content_name: 'phone', value: 45, currency: 'EUR' });
                if (typeof window.plausible === 'function') {
                  window.plausible('Phone Click', {
                    props: { value: 45, source_page: window.location.pathname }
                  });
                  window.plausible('Lead Generated', {
                    props: { method: 'phone', value: 45, source_page: window.location.pathname }
                  });
                  // Clarity (added 2026-08-29). Clarity had ZERO custom tags — only clarity('consent') —
                  // so session recordings could not be filtered to converters, which is the whole
                  // point of having replay on a trafficked site. 'set' makes the session filterable;
                  // 'upgrade' forces Clarity to RETAIN it (Clarity samples, so converting sessions
                  // were the ones most likely to be discarded).
                  if (typeof window.clarity === 'function') {
                    window.clarity('set', 'conversion', 'phone');
                    window.clarity('upgrade', 'lead');
                  }
                }
                return;
              }
              // ── Email click → lead → Google Ads conversion (lower value) ─
              if (href.indexOf('mailto:') === 0) {
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: 30,
                    currency: 'EUR'
                  });
                  gtag('event', 'email_click', {
                    booking_source: window.location.pathname,
                    value: 30,
                    currency: 'EUR'
                  });
                  gtag('event', 'generate_lead', {
                    method: 'email',
                    value: 30,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                }
                if (typeof fbq === 'function') fbq('track', 'Contact', { content_name: 'email', value: 30, currency: 'EUR' });
                if (typeof window.plausible === 'function') {
                  window.plausible('Email Click', {
                    props: { value: 30, source_page: window.location.pathname }
                  });
                  window.plausible('Lead Generated', {
                    props: { method: 'email', value: 30, source_page: window.location.pathname }
                  });
                  // Clarity (added 2026-08-29). Clarity had ZERO custom tags — only clarity('consent') —
                  // so session recordings could not be filtered to converters, which is the whole
                  // point of having replay on a trafficked site. 'set' makes the session filterable;
                  // 'upgrade' forces Clarity to RETAIN it (Clarity samples, so converting sessions
                  // were the ones most likely to be discarded).
                  if (typeof window.clarity === 'function') {
                    window.clarity('set', 'conversion', 'email');
                    window.clarity('upgrade', 'lead');
                  }
                }
                return;
              }

              // ── Internal link → Nav Click (coverage for menu / footer / in-content links) ─
              // Additive ONLY: booking/contact/external links already returned above; this
              // never touches the Acuity/studio_rental logic. Closes the internal-link
              // tracking blind spot so we can see which nav + footer + menu items get clicked.
              // (2026-06-18 — every clickable now tracked.)
              if (el.host === window.location.host) {
                var navRaw = el.getAttribute('href') || '';
                if (navRaw.charAt(0) !== '#') {            // skip same-page anchors
                  var navSection = 'main';
                  if (el.closest('header')) navSection = 'header';
                  else if (el.closest('footer')) navSection = 'footer';
                  else if (el.closest('nav')) navSection = 'nav';
                  var navLabel = (el.textContent || '').trim().slice(0, 40);
                  if (typeof window.plausible === 'function') {
                    window.plausible('Nav Click', {
                      props: { dest: el.pathname || navRaw, section: navSection, label: navLabel, source_page: window.location.pathname }
                    });
                  }
                }
              }
            }, true);
          })();
        `}
      </Script>

      {/* Scroll depth + data-cta click tracking (engagement signals → GA4) */}
      <Script id="engagement-tracking" strategy="afterInteractive">
        {`
          (function() {
            if (typeof window === 'undefined') return;
            var milestones = [25, 50, 75, 100];
            var fired = {};
            function onScroll() {
              var doc = document.documentElement;
              var top = window.scrollY || doc.scrollTop;
              var vh = window.innerHeight || doc.clientHeight;
              var total = doc.scrollHeight - vh;
              if (total <= 0) return;
              var pct = Math.round((top / total) * 100);
              for (var i = 0; i < milestones.length; i++) {
                var m = milestones[i];
                if (pct >= m && !fired[m]) {
                  fired[m] = 1;
                  if (typeof gtag === 'function') {
                    gtag('event', 'scroll_depth', { percent: m, page_path: window.location.pathname });
                  }
                }
              }
              // INP hygiene (2026-05-31): once all 4 milestones fire, stop
              // listening — no reason to run this handler on every subsequent
              // scroll event for the rest of the session.
              if (fired[25] && fired[50] && fired[75] && fired[100]) {
                window.removeEventListener('scroll', onScroll);
              }
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            document.addEventListener('click', function(e) {
              var t = e.target;
              while (t && t !== document.body) {
                if (t.getAttribute && t.getAttribute('data-cta')) {
                  if (typeof gtag === 'function') {
                    gtag('event', 'cta_click', {
                      cta_id: t.getAttribute('data-cta'),
                      page_path: window.location.pathname
                    });
                  }
                  break;
                }
                t = t.parentElement;
              }
            });
          })();
        `}
      </Script>

      {/* Google Ads remarketing — page category signals for audience building.
          lazyOnload (2026-05-31): fire-and-forget audience tag, not time-
          sensitive — moved off the afterInteractive critical path to free the
          main thread during the early-interaction window (INP). gtag is always
          defined by lazyOnload time. Conversion tags stay afterInteractive. */}
      <Script id="gads-remarketing" strategy="lazyOnload">
        {`
          (function() {
            if (typeof gtag !== 'function') return;
            var p = window.location.pathname;
            var cat = 'visitor';
            if (p.includes('/vind-jouw-personal-trainer') || p.includes('/find-personal-trainer')) cat = 'trainer_seeker';
            else if (p.includes('/open-gym') || p.includes('/boek-gym') || p.includes('/book-gym')) cat = 'gym_prospect';
            else if (p.includes('/studio-huren') || p.includes('/studio-rental') || p.includes('/word-trainer') || p.includes('/become-trainer')) cat = 'studio_renter';
            else if (p.includes('/prijzen') || p.includes('/pricing')) cat = 'pricing_viewer';
            else if (p.includes('/plan-gratis-intake') || p.includes('/plan-free-intro') || p.includes('/gratis-intake') || p.includes('/free-intro')) cat = 'intake_page';
            else if (p.includes('/blog/')) cat = 'blog_reader';
            gtag('event', 'page_category', { page_category: cat, page_path: p });
          })();
        `}
      </Script>

      {/* Booking-confirmed conversion firing (server-rendered script — fires on hydration).
          Replaces the prior useEffect-based approach in
          src/app/{nl/boeking-bevestigd, en/booking-confirmed}/page.tsx which silently
          did NOT fire under Next.js 16 page-level "use client" hydration semantics
          (verified via Chrome MCP 2026-05-16: dataLayer stayed at length 10 + 0
          conversion events 20s after navigation despite identical bundle code).
          Same retry-pattern as the other afterInteractive scripts above — verified
          firing reliably in the same dataLayer the operator can see in pagead2 ccm/collect. */}
      <Script id="booking-confirmed-conversion" strategy="afterInteractive">
        {`
          (function() {
            var p = window.location.pathname;
            if (p !== '/nl/boeking-bevestigd' && p !== '/en/booking-confirmed') return;
            if (window.__scBookingFired) return;
            window.__scBookingFired = true;

            var params = new URLSearchParams(window.location.search);
            var type = params.get('type') || 'generic';
            var value = Number(params.get('value') || '12') || 12;
            var id = params.get('id') || ('bk-' + Date.now());

            // Per-pixel firing — each pixel retries independently until its specific tag
            // is loaded (gtag = afterInteractive ~immediate; fbq + ttq = lazyOnload ~3-8s post-idle;
            // plausible = afterInteractive ~immediate). The prior implementation gated all
            // firing on the SLOWEST pixel being ready, hitting the 30-attempt cap before
            // fbq/ttq loaded and silently dropping every conversion event.

            // Each pixel has its own fired-once guard so retries can't double-fire.
            var fired = { gads: false, fbq: false, ttq: false, plausible: false };

            function tryFire(attempt) {
              attempt = attempt || 0;

              if (!fired.gads && typeof window.gtag === 'function') {
                fired.gads = true;
                // Purchase conversion action (not Submit-lead-form) — booking-confirmed pages
                // represent completed paid bookings, the highest-value conversion class.
                window.gtag('event', 'conversion', {
                  send_to: '${googleAds}/${googleAdsConversionPurchase}',
                  value: value, currency: 'EUR', transaction_id: id
                });
                window.gtag('event', 'Book_appointment_1', {
                  value: value, currency: 'EUR', booking_type: type, completion: true
                });
                window.gtag('event', 'purchase', {
                  transaction_id: id, value: value, currency: 'EUR',
                  items: [{ item_name: type, price: value, quantity: 1 }]
                });
              }
              if (!fired.plausible && typeof window.plausible === 'function') {
                fired.plausible = true;
                window.plausible('Booking Confirmed', {
                  props: { booking_type: type, value: value, source: document.referrer || 'direct' }
                });
              }
              if (!fired.fbq && typeof window.fbq === 'function') {
                fired.fbq = true;
                window.fbq('track', 'Purchase', { value: value, currency: 'EUR', content_name: type });
              }
              if (!fired.ttq && window.ttq && typeof window.ttq.track === 'function') {
                fired.ttq = true;
                window.ttq.track('CompletePayment', { value: value, currency: 'EUR', content_type: type });
              }

              // Keep retrying for slow-load pixels (fbq + ttq are lazyOnload, can take 3-10s)
              // until all 4 fire or 60 attempts × 200ms = 12s cap.
              if ((!fired.gads || !fired.fbq || !fired.ttq || !fired.plausible) && attempt < 60) {
                setTimeout(function() { tryFire(attempt + 1); }, 200);
              }
            }
            tryFire();
          })();
        `}
      </Script>

      {/* TikTok Pixel — CONSENT-GATED (fixed 2026-09-02; was firing for every
          visitor unconditionally regardless of the cookie banner — verified
          live via Playwright, real Chrome, no consent clicked: analytics.tiktok.com
          was requested and TikTok's cross-site ad-attribution cookies were set
          on first paint for 100% of traffic. /nl/cookiebeleid's Marketing-cookies
          section names only "Facebook Pixel en Google Ads" as consent-gated;
          TikTok wasn't even disclosed there, let alone gated — the exact same
          violation class the Meta Pixel fix above addressed on 2026-07-20, just
          undiscovered until now. Same pattern as Meta Pixel: ttq.load()/ttq.page()
          only run after sc_consent=all exists (immediately for a returning
          consented visitor, or on the sc:consent-updated event after Accept).
          Declining costs nothing extra — the pixel loader script (the SDK
          bootstrap) still has to be present as a stub so ttq.page()/track()
          calls elsewhere don't throw, matching the fbq() stub pattern above. */}
      {tiktokPixel && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            }(window, document, 'ttq');

            var ttqStarted = false;
            function startTikTokPixel() {
              if (ttqStarted) return;
              ttqStarted = true;
              window.ttq.load('${tiktokPixel}');
              window.ttq.page();
            }
            function ttqHasConsent() {
              return document.cookie.indexOf('sc_consent=all') > -1;
            }

            if (ttqHasConsent()) {
              startTikTokPixel();
            } else {
              window.addEventListener('sc:consent-updated', function () {
                if (ttqHasConsent()) startTikTokPixel();
              });
            }
          `}
        </Script>
      )}
    </>
  );
}
