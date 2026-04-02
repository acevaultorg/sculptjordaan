# Knowledge

- Booking architecture: Acuity Scheduling (Owner ID 36720238) splits into catalog.php (packages) and schedule.php (single sessions). Trainer intake pages redirect to specific appointmentType IDs. <!-- added 2026-03-30, source: scan -->
- Language switching: alternateRoutes in `src/config/navigation.ts` is the single source of truth. Middleware auto-redirects wrong-locale slugs by deriving from alternateRoutes. Pages not in alternateRoutes fall back to locale homepage. <!-- added 2026-03-30, source: scan -->
- Geo-redirect: Middleware redirects non-Dutch accept-language on root (/) to /en. www and sculptjordaan.nl subdomains 301 to sculptclub.nl. <!-- added 2026-03-30, source: scan -->
- Pricing values in code MUST match CLAUDE.md: PT €45/session (not €49), Open Gym starts at €29/4wk (Instapplan). The €49 figure is the "Populair" plan (8 sessions/4wk) — valid when referencing that plan specifically, wrong when used as "starting from" price. <!-- added 2026-03-30, source: scan -->
- Lint noise: .vercel/ build artifacts generate ~20 lint errors (require imports, this-alias). These are not source issues — eslint runs on generated code. <!-- added 2026-03-30, source: scan -->
- Blog posts use hardcoded WhatsApp links (wa.me URLs) rather than importing from config. Always grep for placeholder numbers (31612345678) when new blog posts are added. Real number: 31683178934. <!-- added 2026-03-30, source: task -->

- Revenue priority: Studio rental is the #1 revenue driver. Should be prominent in hero CTAs and conversion paths. <!-- added 2026-03-30, source: user -->

## Error patterns
- config: Placeholder WhatsApp number in blog CTA → replace with real number from CLAUDE.md (+31 6 83 17 89 34 = 31683178934). Blog posts don't use acuity.ts config — they hardcode wa.me links. <!-- added 2026-03-30, source: task -->

- Google Ads tracking: Single conversion action fires on ALL Acuity link clicks (AW-17749877333/QW0mCPOF_YocENXE5o9C). Added secondary GA4 event `free_intake_click` that fires specifically from gratis-intake/free-intro/plan-gratis-intake-met-* pages. Import this event in Google Ads as a secondary conversion to optimize for free intro bookings. <!-- added 2026-04-01, source: task -->
- Email: Canonical contact email is contact@sculptclub.nl (from site config). All legal/policy pages now use this. Never use info@sculptclub.nl. <!-- added 2026-04-01, source: task -->
- Blog SEO strategy: New posts target "gratis intake personal trainer amsterdam" (NL) and "free intro personal trainer amsterdam" (EN). These are high-intent queries from people already decided on personal training, just looking for the right studio. <!-- added 2026-04-01, source: task -->

## Error patterns
- trainer-intake form: handleSubmit was a stub (just setSubmitted=true, no send). Always verify form submit handlers actually send data. Pattern: WhatsApp redirect with form data encoded as text. <!-- added 2026-04-01, source: task -->
- sitemap.ts: must be manually updated when new pages/blog posts are added. Not auto-generated. Check after every session that adds new routes. <!-- added 2026-04-01, source: task -->
