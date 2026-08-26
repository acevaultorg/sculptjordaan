#!/usr/bin/env node
/**
 * build-social-frames.mjs — render a photo-carousel post to TikTok (1080x1920)
 * and Instagram-feed (1080x1350) frames.
 *
 * WHY THIS SHAPE (verified 2026-08-26, see .claude/state/KNOWLEDGE.md
 * "Social frame — post the arithmetic, never the offer"):
 *   - Text-card carousels are the weakest format on both platforms. Every
 *     post that beat us in a TikTok search of our own niche had HUMANS in it.
 *     So every frame here is a real photo from the studio; text sits ON the
 *     photo, never on a coloured card.
 *   - The frame that wins for studio rental is the ARITHMETIC of owning a
 *     room ("eigen gym voor 750 euro per maand" = 220 likes), not the offer
 *     ("huur onze studio" = our own 1/2/7 likes). Frame 1 leads with €240.
 *
 * Safe zones: TikTok's right rail (~200px) and caption block (~430px bottom)
 * overlap the frame — all text stays inside the inset box below.
 *
 * Usage: node scripts/build-social-frames.mjs <post-id>
 */
import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const POST = process.argv[2] || "trainer-arithmetic-001";
const PHOTOS = "/Users/paulodevries/Local/VAULT04-SculptClub/sculptclub-source-photos/gezina-sam-shoot-2026-08-17";
const OUT = path.resolve(`public/social/${POST}`);
fs.mkdirSync(OUT, { recursive: true });

/** Every price/fact here is verified against CLAUDE.md — do not invent. */
const FRAMES = [
  {
    id: "01-hook",
    photo: "shoot-18.jpg",
    focus: "22% 50%",
    kicker: "Voor personal trainers",
    head: "Je eigen studio in de&nbsp;Jordaan.",
    big: "€240",
    sub: "per maand",
  },
  {
    id: "02-rekensom",
    photo: "shoot-06.jpg",
    focus: "50% 60%",
    kicker: "De rekensom",
    head: "20 uur × €12",
    body: "Halve studio, per uur. Hele studio €17. Je betaalt alleen de uren die je echt gebruikt.",
  },
  {
    id: "03-vergelijk",
    photo: "shoot-05.jpg",
    focus: "60% 50%",
    kicker: "Elders",
    head: "Vast bedrag per maand. Of minimaal vijf uur per&nbsp;week.",
    body: "Hier: geen contract, geen minimum, geen abonnement.",
  },
  {
    id: "04-jouw-klanten",
    photo: "shoot-07.jpg",
    focus: "50% 40%",
    kicker: "Jouw praktijk",
    head: "Jouw klanten. Jouw tarief.",
    body: "Wij rekenen alleen de huur van de ruimte.",
  },
  {
    id: "05-cta",
    photo: "shoot-10.jpg",
    focus: "50% 50%",
    kicker: "Egelantiersgracht 424",
    head: "Eerste sessie gratis.",
    body: "Even voelen of het klopt. Dagelijks 06:00–22:00.",
  },
];

const css = (w, h, textTop, textBottom) => `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Instrument+Sans:wght@400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden;background:#14100D}
  .f{position:relative;width:${w}px;height:${h}px;overflow:hidden}
  .f img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  /* The text block lives in the bottom ~45%. The scrim must be genuinely dark
     THERE regardless of what the photo does — a light wall behind an orange
     kicker is unreadable otherwise (caught on frames 1/2/4, 2026-08-26). */
  .scrim{position:absolute;inset:0;background:
    linear-gradient(180deg,rgba(18,14,11,.62) 0%,rgba(18,14,11,.16) 22%,rgba(18,14,11,.14) 40%,
                    rgba(18,14,11,.55) 58%,rgba(18,14,11,.86) 76%,rgba(18,14,11,.95) 100%)}
  .box{position:absolute;left:${Math.round(w*0.075)}px;right:${Math.round(w*0.075)}px;
       top:${textTop}px;bottom:${textBottom}px;
       display:flex;flex-direction:column;justify-content:flex-end;gap:${Math.round(w*0.026)}px}
  .kick{font-family:'Instrument Sans',sans-serif;font-weight:600;color:#FF8A57;
        font-size:${Math.round(w*0.033)}px;letter-spacing:.17em;text-transform:uppercase}
  h1{font-family:Syne,sans-serif;font-weight:800;color:#FDFAF6;line-height:1.02;
     letter-spacing:-.022em;font-size:${Math.round(w*0.088)}px;text-wrap:balance;
     text-shadow:0 2px 28px rgba(0,0,0,.45)}
  .big{font-family:Syne,sans-serif;font-weight:800;color:#FDFAF6;line-height:.9;
       font-size:${Math.round(w*0.188)}px;letter-spacing:-.035em;
       text-shadow:0 2px 34px rgba(0,0,0,.5)}
  .bigsub{font-family:'Instrument Sans',sans-serif;font-weight:500;color:#FDFAF6;opacity:.9;
          font-size:${Math.round(w*0.045)}px;margin-top:${Math.round(w*-0.012)}px}
  p{font-family:'Instrument Sans',sans-serif;font-weight:400;color:#F3EBE2;opacity:.94;
    font-size:${Math.round(w*0.042)}px;line-height:1.42;max-width:${Math.round(w*0.82)}px;
    text-shadow:0 1px 16px rgba(0,0,0,.45)}
  .mark{position:absolute;left:${Math.round(w*0.075)}px;top:${Math.round(h*0.055)}px;
        font-family:Syne,sans-serif;font-weight:800;color:#FDFAF6;opacity:.92;
        font-size:${Math.round(w*0.036)}px;letter-spacing:.24em}
`;

const html = (f, w, h, textTop, textBottom) => `<!doctype html><meta charset="utf-8">
<style>${css(w, h, textTop, textBottom)}</style>
<div class="f">
  <img src="file://${path.join(PHOTOS, f.photo)}" style="object-position:${f.focus}">
  <div class="scrim"></div>
  <div class="mark">SCULPTCLUB</div>
  <div class="box">
    ${f.kicker ? `<div class="kick">${f.kicker}</div>` : ""}
    ${f.big ? `<div class="big">${f.big}</div><div class="bigsub">${f.sub}</div>` : ""}
    <h1>${f.head}</h1>
    ${f.body ? `<p>${f.body}</p>` : ""}
  </div>
</div>`;

const browser = await chromium.launch({ channel: "chrome" });
const TMP = fs.mkdtempSync("/tmp/scframes-");

/**
 * Render via a real file:// document, NOT page.setContent(). setContent leaves
 * the document on about:blank, and Chrome refuses file:// subresources from an
 * about:blank base — every photo silently fails and you ship black frames with
 * floating text. Writing the HTML to disk first makes the <img> same-origin.
 */
async function render(f, w, h, top, bottom, suffix) {
  const tmpFile = path.join(TMP, `${f.id}${suffix}.html`);
  fs.writeFileSync(tmpFile, html(f, w, h, top, bottom));
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(`file://${tmpFile}`, { waitUntil: "load" });
  await page.waitForFunction(() => {
    const img = document.querySelector("img");
    return img && img.complete && img.naturalWidth > 0;
  }, { timeout: 15000 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(OUT, `${f.id}${suffix}.jpg`), quality: 92, type: "jpeg" });
  await page.close();
}

// TikTok / Story 1080x1920 — keep text clear of the right rail + caption block.
for (const f of FRAMES) await render(f, 1080, 1920, 420, 470, "");

// Instagram feed 1080x1350 (4:5 — the crop IG defaults away from; pick 4:5 manually).
for (const f of FRAMES) await render(f, 1080, 1350, 300, 120, "-ig-feed");

await browser.close();
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`✓ ${FRAMES.length * 2} frames → ${OUT}`);
