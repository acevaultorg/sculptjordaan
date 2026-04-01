import Script from "next/script";
import { siteConfig } from "@/config/site";

const { ga4, googleAds, googleAdsConversion, fbPixel, clarity, tiktokPixel } = siteConfig.analytics;

export function Analytics() {
  return (
    <>
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
            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href]');
              if (el && el.href && el.href.includes('acuityscheduling.com')) {
                var isIntake = isFreeIntroPage();
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', { send_to: '${googleAds}/${googleAdsConversion}' });
                  if (isIntake) {
                    gtag('event', 'free_intake_click', { booking_source: window.location.pathname });
                  }
                }
                if (typeof fbq === 'function') {
                  fbq('track', isIntake ? 'Lead' : 'InitiateCheckout');
                }
                if (typeof ttq !== 'undefined') {
                  ttq.track(isIntake ? 'SubmitForm' : 'AddToCart');
                }
              }
            }, true);
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
