# /landing v2: red and blue, sharper copy, phone fixes

Branch `cloud/sculptclub-landing-v3-2026-10-01`, 1 Oct 2026. Pages: `/landing` (Dutch) and `/en/landing`.
Owner's feedback: "Improve the UI/UX design and UX copy. I have the feeling red and blue would be better."

## 1. Colours

| | Trainer half (top / left) | Client half (bottom / right) |
|---|---|---|
| Feeling | deep, calm, "your workplace" | warm, energetic, "start now" |
| Base (under the photo) | navy `#0A1633` | oxblood `#3F0910` |
| Multiply tint | cobalt `#1E4FD6` | crimson `#B42330` |
| Scrim (top → bottom) | navy `rgba(5,12,34)` at 0.50 → 0.66 | oxblood `rgba(46,4,8)` at 0.30 → 0.50 |
| Button text on white | `#0A1633` (about 15:1) | `#9B1620` (about 9:1) |
| Eyebrow rule | `#8FB0FF` | `#FFB0A8` |

Why these shades:

- **The blue is SculptClub's own.** The site's brand colour was cobalt `#134DE1` until May 2026. The tint is that cobalt, slightly lifted so it survives the multiply, over a navy base. It reads as "established, professional", not as a tech-startup blue.
- **The red is crimson toward brick, not tomato.** The first try (`#D42A30`) looked bright cherry on desktop, which is the supermarket-sale red the brief warns against. Moving the tint to `#B42330` over an oxblood base keeps the energy and reads as rich. It also sits well next to the current brand orange `#EF5012` used on the rest of the site: same warm family, deeper.
- **The scrim is tinted, not black.** A black scrim turns both halves grey-brown. A scrim in each half's own dark hue keeps the colour saturated while still darkening the text area.
- The orange-means-clickable rule on the site is unaffected: nothing on this page is orange.

## 2. Copy

Rules I held to: the visitor's own words, one headline + one fact line + one button per half, real facts only (prices come from `src/config/acuity.ts`, never typed in), no hype.

### Eyebrows: the visitor picks themselves

| | Before | After |
|---|---|---|
| Trainer | Voor personal trainers / For personal trainers | **Ik ben personal trainer / I'm a personal trainer** |
| Client | Voor wie wil trainen / For anyone who wants to train | **Ik wil trainen / I want to train** |

"Voor wie wil trainen" is us describing a target group. "Ik wil trainen" is the sentence in the visitor's head. On a split page the eyebrow is the choice, so it should read like a choice.

### Trainer headline: three options

1. *Train je klanten in je eigen privé studio* (close to v1; clear, but says what they already do)
2. *Een eigen studio, zonder vaste huur* (strong, but a renter thinks in hours, and "vaste huur" invites a pricing question the page can't answer in one line)
3. **Jouw klanten, jouw tarief. Onze studio.** ← picked

Why 3: a self-employed trainer's two worries are "do I keep my clients" and "do I keep my rate". This answers both in five words before saying what we offer, and it is true: trainers bring their own clients and set and keep their own rates (CLAUDE.md). It avoids the forbidden "0% commissie" framing. EN: *Your clients, your rate. Our studio.*

Fact line: *Privé studio per uur, vanaf €12. Geen contract. Jordaan, Amsterdam.* (€12 = `studioRentalFromPrice`, half studio 60 min; "no contract" is house policy.)
Button: *Bekijk de studio / See the studio* (was "Bekijk studio huren", which is a noun phrase, not something you do).

### Client headline: three options

1. *Vind de trainer die bij je past* (warm, but passive and close to v1)
2. *Begin vandaag met trainen* (energetic, but vague: begin how?)
3. **Sterker worden? Begin met een gratis intake.** ← picked

Why 3: it starts with the visitor's goal in their own words, then gives the first step and removes the cost worry in the same line. "Gratis intake" is the real first step for personal training. EN: *Want to get stronger? Start with a free intro.*

Fact line: *Liever zelf trainen? Open Gym vanaf €9 per uur. Jordaan, Amsterdam.* (€9 = `openGymSinglePrice`). I made this a question on purpose: it is the visitor's alternative, and it keeps the €9 clearly tied to Open Gym, so nobody reads it as a personal training price.
Button: *Kies je trainer / Choose your trainer* (same link as before: the trainer page is where you choose a trainer and plan the free intake).
The Groepsles / Open Gym pills stay as they were.

## 3. Phone UX fixes

| What felt off | Fix |
|---|---|
| Logo centred over the trainer half on phones, with a lone "EN" floating on the right; neither lined up with the text | One top bar on the content's own left edge: logo left (same 24px gutter as the text), language switch right. On desktop it sits the same way. |
| "EN" alone looked like stray text, and you couldn't tell which language you were in | **NL / EN toggle**: the current language is a filled white chip (`aria-current`), the other is an outlined chip. Each has a 44×44 tap area, drawn as a 32px chip so it doesn't outweigh the logo. Wrapped in `<nav aria-label="Taal">`; the link has `lang` and `aria-label="English"/"Nederlands"`. |
| Eyebrow was a plain uppercase line that read like a label | Shorter first-person text, with a small coloured rule before it, so it reads as the start of the half rather than as a caption. |
| Buttons 52px | 56px on every size, 17px text. |
| Headline a bit small on phones | 28px on phones (was 26px), tighter line height. |
| Logo drop shadow | Removed. On the tinted scrim it added a grey halo. |

## 4. Render check (`npm run build && node scripts/qa-landing.mjs`)

The script now fails below **7:1** (was 4.5:1) and writes here. Served from `out/` locally; no live URL touched.

| Page | Viewport | scrollHeight / innerHeight | Width overflow | Both buttons in view | Links < 44px | Worst text contrast |
|---|---|---|---|---|---|---|
| /landing | 375×667 | 667 / 667 | none | yes | 0 | 11.11 : 1 |
| /landing | 390×844 | 844 / 844 | none | yes | 0 | 10.86 : 1 |
| /landing | 1440×900 | 900 / 900 | none | yes | 0 | 10.78 : 1 |
| /en/landing | 375×667 | 667 / 667 | none | yes | 0 | 11.02 : 1 |
| /en/landing | 390×844 | 844 / 844 | none | yes | 0 | 10.86 : 1 |
| /en/landing | 1440×900 | 900 / 900 | none | yes | 0 | 10.78 : 1 |

Contrast is measured, not estimated: text is made transparent, the page is re-rendered, and the brightest 1% of pixels behind each text box is compared with white. Full numbers per text box are in `results.json`.

**Still true from v1:** at 375×667 on a first visit, the site-wide cookie banner covers the client button until the visitor picks an option. Not changed here (legal surface, site-wide).

Screenshots: `nl-*.png`, `en-*.png` (cookie choice made) and `*-cookie-banner.png` (first visit).
