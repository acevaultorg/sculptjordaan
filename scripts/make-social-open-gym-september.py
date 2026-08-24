#!/usr/bin/env python3
"""SculptClub post #3 — "Vier mensen. Meer niet." (Open Gym, September restart).

Client-side post. Chosen over two trainer-pitch concepts by an evidence panel:
the last two posts were both rental pitches to the same URL, and a third would
have broken the operator's own "rotate pillars" rule in the content calendar.

Design constraints carried in from the panel's must-fix list:
  * Slide 1 states "Open Gym" in BOTH the pill and the subline. Slide 1 gets
    screenshotted and reshared alone, and "Vier mensen. Meer niet." without the
    qualifier is FALSE house-wide - max 4 is the Open Gym cap; full-studio
    rental has no fixed maximum. Never trim that qualifier for layout.
  * No euro figure anywhere. Dodges the unresolved EUR79-vs-EUR69 Onbeperkt
    conflict AND the EUR45 two-audience trap (a cheap PT price reassures a
    client but repels a trainer who might rent the room).
  * No claims about the reader or about other gyms. "Geen wachtrij" is the
    site's own published copy (eerste-bezoek:85), not a competitor jab.
  * "probeersessie", never "proefles", on every visible surface.
  * Photos deliberately avoid all four used in the 24 Aug equipment tour.

1080x1920 (TikTok/Story) + 1080x1350 (IG feed). Text lives 210..1430 so the
TikTok caption UI and right rail never cover it.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import os

S = '/private/tmp/claude-502/-Users-paulodevries-Local-VAULT04-SculptClub/6fcb818f-507a-4265-a0bf-0a79c8e2fe08/scratchpad/'
REPO = '/Users/paulodevries/Local/VAULT04-SculptClub/sculptclub/'
OUT = REPO + 'public/social/open-gym-september-2026/'
P = REPO + 'public/images/studio/'
os.makedirs(OUT, exist_ok=True)

ORANGE = (239, 80, 18)
BONE = (247, 244, 240)
MUTED = (198, 192, 184)
DIM = (150, 143, 135)
W, H = 1080, 1920
M = 84

def font(n, s): return ImageFont.truetype(S + n, s)

def lift(img, k=1.14):
    return ImageEnhance.Brightness(img).enhance(k)

def cover(img, w, h, bias=0.5):
    iw, ih = img.size
    sc = max(w / iw, h / ih)
    img = img.resize((int(iw * sc + 1), int(ih * sc + 1)), Image.LANCZOS)
    x = int((img.width - w) * 0.5); y = int((img.height - h) * bias)
    return img.crop((x, y, x + w, y + h))

def scrim(img, start=0.15, strength=232, flat=0):
    w, h = img.size
    g = Image.new('L', (1, h))
    for y in range(h):
        t = y / h
        v = flat + (0 if t < start else int((strength - flat) * ((t - start) / (1 - start)) ** 1.45))
        g.putpixel((0, y), max(0, min(255, v)))
    return Image.composite(Image.new('RGB', (w, h), (0, 0, 0)), img, g.resize((w, h)))

def side_scrim(img, upto=0.70, strength=150):
    """darken the left band where left-aligned copy sits, feathering to clear"""
    w, h = img.size
    g = Image.new('L', (w, 1))
    for x in range(w):
        t = x / w
        v = int(strength * (1 - (t / upto) ** 1.6)) if t < upto else 0
        g.putpixel((x, 0), max(0, min(255, v)))
    return Image.composite(Image.new('RGB', (w, h), (0, 0, 0)), img, g.resize((w, h)))

def wrap(d, text, f, mw):
    out, cur = [], ''
    for wd in text.split():
        t = (cur + ' ' + wd).strip()
        if d.textlength(t, font=f) <= mw: cur = t
        else: out.append(cur); cur = wd
    if cur: out.append(cur)
    return out

def block(d, x, y, text, f, fill, mw, lead=1.1):
    asc, desc = f.getmetrics(); lh = int((asc + desc) * lead)
    lines = wrap(d, text, f, mw)
    for i, ln in enumerate(lines): d.text((x, y + i * lh), ln, font=f, fill=fill)
    return y + len(lines) * lh

def logo(d, y=120):
    d.text((M, y), 'SCULPTCLUB', font=font('Syne-800.ttf', 36), fill=BONE)

def pill(d, x, y, txt, f, bg=ORANGE, fg=(14, 12, 10), padx=22, pady=10, r=10):
    tw = d.textlength(txt, font=f); asc, desc = f.getmetrics()
    d.rounded_rectangle([x, y, x + tw + padx * 2, y + asc + desc + pady * 2], radius=r, fill=bg)
    d.text((x + padx, y + pady), txt, font=f, fill=fg)
    return y + asc + desc + pady * 2

def dot(d, x, y, r=9, c=ORANGE): d.ellipse([x, y, x + r * 2, y + r * 2], fill=c)

def fit(d, lines, name, start, mw, floor=60, step=4):
    """shrink until EVERY line fits on one line - kills orphan wraps"""
    s = start
    while s > floor:
        f = font(name, s)
        if max(d.textlength(t, font=f) for t in lines) <= mw: return f
        s -= step
    return font(name, floor)

# ── 1 · hook ────────────────────────────────────────────────────────────────
def f1(out):
    im = scrim(lift(cover(Image.open(P + 'studio-overview.jpeg').convert('RGB'), W, H, bias=0.46), 1.20),
               start=0.04, strength=234, flat=34)
    d = ImageDraw.Draw(im); logo(d)
    f_lab, f_sub = font('IS-600.ttf', 38), font('IS-500.ttf', 42)
    y = 640
    y = pill(d, M, y, 'OPEN GYM · JORDAAN', f_lab) + 36
    f_big = fit(d, ['Vier mensen.', 'Meer niet.'], 'Syne-800.ttf', 126, W - M * 2)
    y = block(d, M, y, 'Vier mensen.', f_big, BONE, W - M * 2, lead=1.0)
    y = block(d, M, y, 'Meer niet.', f_big, ORANGE, W - M * 2, lead=1.0)
    y += 40
    # "Open Gym" here is load-bearing - it is what keeps the headline true if
    # this frame is cropped or reshared on its own. Never cut it for space.
    block(d, M, y, 'Open Gym in de Jordaan. Zo druk wordt het hier.',
          f_sub, MUTED, W - M * 2 - 110, lead=1.3)
    im.save(out, quality=93)

# ── 2 · insight ─────────────────────────────────────────────────────────────
def f2(out):
    im = cover(Image.open(P + 'facade-sculptclub.jpg').convert('RGB'), W, H, bias=0.5)
    im = scrim(lift(im, 1.10).filter(ImageFilter.GaussianBlur(3)), start=0.0, strength=150, flat=64)
    im = side_scrim(im, upto=0.78, strength=165)
    d = ImageDraw.Draw(im); logo(d)
    f_h = fit(d, ['Waarom mensen', 'stoppen.'], 'Syne-800.ttf', 92, W - M * 2)
    f_b = font('IS-500.ttf', 46)
    y = 700
    y = block(d, M, y, 'Waarom mensen', f_h, BONE, W - M * 2, lead=1.06)
    y = block(d, M, y, 'stoppen.', f_h, ORANGE, W - M * 2, lead=1.06)
    y += 54
    y = block(d, M, y, 'Zelden omdat de training te zwaar was.', f_b, BONE, W - M * 2 - 40, lead=1.34)
    y += 18
    block(d, M, y, 'Meestal omdat de weg ernaartoe dat werd.', f_b, MUTED, W - M * 2 - 40, lead=1.34)
    im.save(out, quality=93)

# ── 3 · proof ───────────────────────────────────────────────────────────────
def f3(out):
    im = cover(Image.open(P + 'turf-lane-canal.jpg').convert('RGB'), W, H, bias=0.5)
    im = scrim(lift(im, 1.14).filter(ImageFilter.GaussianBlur(5)), start=0.0, strength=168, flat=108)
    d = ImageDraw.Draw(im); logo(d)
    f_h, f_r = font('Syne-800.ttf', 84), font('IS-500.ttf', 42)
    y = 470
    y = block(d, M, y, 'Hoe het hier werkt.', f_h, BONE, W - M * 2, lead=1.06) + 56
    rows = [
        'Open Gym: maximaal vier mensen tegelijk',
        'Sessies van 60 minuten, je boekt je eigen uur',
        'Elke dag open van 06:00 tot 22:00',
        'Deurcode via WhatsApp, de avond ervoor',
    ]
    for r in rows:
        dot(d, M + 4, y + 16)
        y_end = block(d, M + 52, y, r, f_r, BONE, W - M * 2 - 80, lead=1.26)
        y = max(y_end, y + 58) + 34
    y += 14
    block(d, M, y, 'Geen wachtrij.', font('IS-600.ttf', 40), ORANGE, W - M * 2)
    im.save(out, quality=93)

# ── 4 · cta ─────────────────────────────────────────────────────────────────
def f4(out):
    im = scrim(lift(cover(Image.open(P + 'entrance-smile.jpg').convert('RGB'), W, H, bias=0.30), 1.06),
               start=0.05, strength=238, flat=38)
    d = ImageDraw.Draw(im); logo(d)
    f_h, f_s, f_m, f_b = (font('Syne-800.ttf', 96), font('IS-500.ttf', 42),
                          font('IS-500.ttf', 34), font('IS-600.ttf', 40))
    y = 940
    y = block(d, M, y, 'Kom een keer', f_h, BONE, W - M * 2, lead=1.04)
    y = block(d, M, y, 'kijken.', f_h, ORANGE, W - M * 2, lead=1.04)
    y += 36
    y = block(d, M, y, 'Je eerste keer is gratis. Geen creditcard, geen abonnement dat vanzelf doorloopt.',
              f_s, MUTED, W - M * 2 - 100, lead=1.3)
    y += 26
    y = block(d, M, y, 'Egelantiersgracht 424 · dagelijks 06:00–22:00', f_m, DIM, W - M * 2 - 60, lead=1.3)
    y += 34
    pill(d, M, y, 'sculptclub.nl/open-gym', f_b, padx=28, pady=15, r=16)
    im.save(out, quality=93)

f1(OUT + '01-hook.jpg')
f2(OUT + '02-waarom.jpg')
f3(OUT + '03-hoe.jpg')
f4(OUT + '04-cta.jpg')

for n, top in [('01-hook', 300), ('02-waarom', 240), ('03-hoe', 230), ('04-cta', 420)]:
    Image.open(OUT + n + '.jpg').crop((0, top, 1080, top + 1350)).save(
        OUT + n + '-ig-feed.jpg', quality=93)

print('\n'.join(sorted(os.listdir(OUT))))
