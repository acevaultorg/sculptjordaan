import Script from "next/script";
import { siteConfig } from "@/config/site";

const { ga4, googleAds, googleAdsConversion, fbPixel, clarity, tiktokPixel } = siteConfig.analytics;
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
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500,
          });
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
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href]');
              if (!el || !el.href) return;
              var href = el.href;

              // ── Acuity click → full conversion stack ───────────────────
              if (href.includes('acuityscheduling.com')) {
                var isIntake = isFreeIntroPage();
                var booking = detectBookingType(href);
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: booking.value,
                    currency: 'EUR'
                  });
                  gtag('event', 'begin_checkout', {
                    booking_type: booking.type,
                    value: booking.value,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                  if (isIntake) {
                    gtag('event', 'free_intake_click', {
                      booking_source: window.location.pathname,
                      value: 45,
                      currency: 'EUR'
                    });
                  }
                }
                if (typeof fbq === 'function') {
                  fbq('track', isIntake ? 'Lead' : 'InitiateCheckout', {
                    value: booking.value || 45,
                    currency: 'EUR',
                    content_name: booking.type
                  });
                }
                if (typeof ttq !== 'undefined') {
                  ttq.track(isIntake ? 'SubmitForm' : 'AddToCart', {
                    value: booking.value,
                    currency: 'EUR'
                  });
                }
                return;
              }

              // ── WhatsApp click → high-intent lead → Google Ads conversion ───────────────
              // Treat wa.me/* the same as a free-intake lead (€45 value).
              // These are users who WhatsApp to book — legitimate conversions.
              if (href.indexOf('wa.me/') !== -1 || href.indexOf('whatsapp.com/') !== -1) {
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: '${googleAds}/${googleAdsConversion}',
                    value: 45,
                    currency: 'EUR'
                  });
                  gtag('event', 'whatsapp_click', {
                    booking_source: window.location.pathname,
                    value: 45,
                    currency: 'EUR'
                  });
                  gtag('event', 'generate_lead', {
                    method: 'whatsapp',
                    value: 45,
                    currency: 'EUR',
                    booking_source: window.location.pathname
                  });
                }
                if (typeof fbq === 'function') {
                  fbq('track', 'Contact', {
                    value: 45,
                    currency: 'EUR',
                    content_name: 'whatsapp'
                  });
                }
                if (typeof ttq !== 'undefined') {
                  ttq.track('Contact', {
                    value: 45,
                    currency: 'EUR'
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
