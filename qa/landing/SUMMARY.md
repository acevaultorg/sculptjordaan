# /landing: design choices, research and render check

Branch `cloud/sculptclub-landing-2026-09-30`, 30 Sep 2026. Pages: `/landing` (Dutch) and `/en/landing`.

## What the page is

One screen (100svh), no scroll, split in two:

| | Trainer half | Client half |
|---|---|---|
| Position | left on desktop, top on phone | right on desktop, bottom on phone |
| Colour | deep evergreen (`#0E2A21` base, `#2C6B52` tint) | warm coral-orange (`#F0592A` tint, `#8F2E0B` base) |
| Photo | `public/images/studio/pt-session-barbell.jpg`: male trainer spotting a client's squat in the studio | `public/images/studio/training-women-coaching.jpg`: female trainer coaching a client's dumbbell shoulder press in the studio |
| Eyebrow | Voor personal trainers / For personal trainers | Voor wie wil trainen / For anyone who wants to train |
| Headline | Train je klanten in een privé studio / Train your clients in a private studio | Vind je trainer, groepsles of Open Gym / Find your trainer, class or Open Gym |
| Fact line | Huur de studio per uur, vanaf €12. Jordaan, Amsterdam. | Eerste intake gratis. Open Gym vanaf €9 per uur. Jordaan, Amsterdam. |
| Button | Bekijk studio huren → `/nl/studio-huren` (EN `/en/studio-rental`) | Vind je trainer → `/nl/vind-jouw-personal-trainer` (EN `/en/find-personal-trainer`) |
| Pills | none | Groepsles → `/nl/small-group`, Open Gym → `/nl/open-gym` (EN: Group class, Open Gym) |

Above both halves: the logo file (`logo-sculptclub.svg`, shown white) centred over the seam, linking to the homepage, plus a 44px `EN` / `NL` language link on the right.

## Why it looks like this

**Research.** Split-screen layouts work when a page offers two *equal, non-overlapping* choices: each side gets its own image, message and one call to action, and visitors pick their own path onto a page written for them ([Solution Squad on split-screen design](https://solutionsquad.co.nz/blog/how-to-use-split-screen-design-effectively/); [TwoTone Creative on multiple audiences](https://www.twotonecreative.com/resources/5-ways-to-target-multiple-audiences-with-your-website/)). Nielsen Norman Group warns against audience-based navigation when people fit more than one group, and against splash screens in front of the real homepage ([NN/g, audience-based navigation](https://www.nngroup.com/videos/audience-based-website-navigation/); [NN/g, homepage guidelines](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/)). That shaped these choices:

1. **Two groups that don't overlap.** "I rent the room for my own clients" and "I want to be trained or train here" are different people. A visitor can place themselves in about a second, which is the case where NN/g's objection doesn't apply.
2. **Not the homepage.** `/` stays as it is. This is a campaign URL for Instagram bio, TikTok and QR codes, where people arrive cold and on a phone. The page is `noindex, follow`, so it doesn't compete with the homepage in search.
3. **The visitor's words, not ours.** Each headline says what that visitor wants to do ("Train je klanten…", "Vind je trainer…"). The eyebrow says who the half is for, so nobody has to work it out from the photo.
4. **One real fact per half, no hype.** €12 per hour is the half-studio 60-min rate, and €9 per hour is the Open Gym single session. Both are read from `src/config/acuity.ts`, not typed into the page. "Eerste intake gratis" and "Jordaan, Amsterdam" come from the business facts in CLAUDE.md.
5. **One big button per half.** Both buttons are white with the half's dark colour as text. That gives the strongest contrast, looks the same on both sides, and keeps the two halves visually level. No chooser page for trainer / group class / open gym exists (checked: `/nl/boek` includes studio rental and no group class, `/nl/lessen` links out to trainers' own sites, and `/nl/eerste-bezoek` is a how-it-works page). So the button goes to the main client path (finding a trainer, which starts with a free intake) and the two other client paths sit under it as small pills. A third "Personal trainer" pill would have repeated the button, so I left it out.
6. **Contrast.** The photos get a multiply tint in the half's colour, which keeps the light and shade, and then a dark scrim that is darkest where the text sits. The render check measures the real result instead of estimating it (see below).
7. **Calm motion.** On hover the button lifts 1px and brightens slightly, and the arrow nudges 2px. On tap it scales to 0.98. Nothing else animates.
8. **Phone layout.** The halves are exactly 50/50 (`grid-rows-2` on `100svh`). On desktop both text blocks start at 30% of the height so the eyebrows and headlines line up across the seam.
9. **No third CTA.** The site's sticky mobile CTA bar and the desktop WhatsApp bubble are switched off on `/landing` only. They would have added a third, competing button, and the bubble sat on top of the coral half.

## Tracking

GA4 events, sent through the existing `sendEvent` helper in `src/lib/tracking.ts` (consent mode applies as on every page):

- `landing_trainer_click` (trainer button)
- `landing_client_click` (client button and both pills)

Params: `link_target` (the internal path clicked) and `locale`. No personal data. All links are internal, so the global Acuity / WhatsApp listener never fires a Google Ads conversion from this page. A routing page shouldn't count as a lead.

## Render check (`node scripts/qa-landing.mjs` after `npm run build`)

The script serves `out/` locally (no live URL touched) and checks both pages at three sizes. Results are in `results.json`.

| Page | Viewport | scrollHeight / innerHeight | Width overflow | Both buttons in view | Links < 44px | Worst text contrast |
|---|---|---|---|---|---|---|
| /landing | 375×667 | 667 / 667 | none | yes | 0 | 7.29 : 1 |
| /landing | 390×844 | 844 / 844 | none | yes | 0 | 7.14 : 1 |
| /landing | 1440×900 | 900 / 900 | none | yes | 0 | 7.14 : 1 |
| /en/landing | 375×667 | 667 / 667 | none | yes | 0 | 7.29 : 1 |
| /en/landing | 390×844 | 844 / 844 | none | yes | 0 | 7.14 : 1 |
| /en/landing | 1440×900 | 900 / 900 | none | yes | 0 | 7.01 : 1 |

How contrast is measured: the page is re-rendered with all text made transparent. For every text box, the brightest 1% of background pixels behind it (the worst case) is compared against white. AA needs 4.5:1, and every box clears 7:1. The script also asserts that every text element's computed colour really is white. The first render failed exactly that way: the site-wide `h2` rule in `globals.css` painted the headlines near-black, and the fix is in commit `bf5d0ae`.

Screenshots:
- `nl-*.png` / `en-*.png`: clean state, with the cookie choice already made
- `*-cookie-banner.png`: first visit, cookie banner open

**First visit on a small phone:** at 375×667 the existing cookie banner (top edge ~524px) covers the client button until the visitor taps "Alleen essentieel" or "Accepteren". At 390×844 and on desktop it covers nothing. I did not change the consent banner (legal surface, site-wide). See "what a human must check" in the root SUMMARY.md.
