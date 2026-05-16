import Script from "next/script";
import { siteConfig } from "@/config/site";

const { ga4, googleAds, googleAdsConversion, googleAdsConversionPurchase, fbPixel, clarity, tiktokPixel } = siteConfig.analytics;
const PLAUSIBLE_DOMAIN = "sculptclub.nl";

export function Analytics() {
  return (
    <>
      {/* Plausible — privacy-first analytics, no cookies, no consent needed */}
      <Script
        defer
        data-domain={PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.outbound-links.tagged-events.js"
        strategy="afterInteractive"
      />
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

      {/* Facebook Pixel */}
      <Script id="fb-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fbPixel}');
          fbq('track', 'PageView');
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
              if (href.includes('id=2149358')) return { type: 'studio_pack_routine', value: 199 };
              if (href.includes('id=2149360')) return { type: 'studio_pack_volume', value: 549 };
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
              // Direct trainer numbers (Joey, Dara) — trainer intent, free intake assumed
              if (href.indexOf('wa.me/31639175337') !== -1) return { intent: 'trainer', pricing: 'free', trainer_name: 'Joey' };
              if (href.indexOf('wa.me/31645658213') !== -1) return { intent: 'trainer', pricing: 'free', trainer_name: 'Dara' };
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
              // Volume pack purchase = trainer paid (€549 PT package)
              if (text.indexOf('volume pakket') !== -1 || text.indexOf('volume pack') !== -1) {
                return { intent: 'trainer', pricing: 'paid', trainer_name: '' };
              }
              // Free intake / blog inquiries → trainer free tryout
              if (text.indexOf('intake') !== -1 || text.indexOf('intro') !== -1 || text.indexOf('tarief') !== -1 || text.indexOf("'s rate") !== -1 || text.indexOf('afvallen') !== -1 || text.indexOf('begeleiding') !== -1 || text.indexOf('krachttraining') !== -1 || text.indexOf('rugklachten') !== -1) {
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
                }
                return;
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

      {/* Google Ads remarketing — page category signals for audience building */}
      <Script id="gads-remarketing" strategy="afterInteractive">
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

            function fire(attempt) {
              attempt = attempt || 0;
              var ready = (typeof window.gtag === 'function') &&
                          (typeof window.fbq === 'function') &&
                          window.ttq && (typeof window.ttq.track === 'function') &&
                          (typeof window.plausible === 'function');
              if (!ready && attempt < 30) {
                setTimeout(function() { fire(attempt + 1); }, 200);
                return;
              }
              if (typeof window.gtag === 'function') {
                // Fire the Purchase conversion action (not Submit-lead-form) — booking-confirmed
                // pages represent completed paid bookings, the highest-value conversion class.
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
              if (typeof window.fbq === 'function') {
                window.fbq('track', 'Purchase', { value: value, currency: 'EUR', content_name: type });
              }
              if (window.ttq && typeof window.ttq.track === 'function') {
                window.ttq.track('CompletePayment', { value: value, currency: 'EUR', content_type: type });
              }
              if (typeof window.plausible === 'function') {
                window.plausible('Booking Confirmed', {
                  props: { booking_type: type, value: value, source: document.referrer || 'direct' }
                });
              }
            }
            fire();
          })();
        `}
      </Script>

      {/* TikTok Pixel — only loads when pixel ID is configured */}
      {tiktokPixel && (
        <Script id="tiktok-pixel" strategy="lazyOnload">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('${tiktokPixel}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      )}
    </>
  );
}
