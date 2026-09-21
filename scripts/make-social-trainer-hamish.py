#!/usr/bin/env python3
"""Trainer spotlight — Hamish. Dual-audience by design (operator brief 2026-08-25):
other TRAINERS should see it and want the concept; prospective CLIENTS should book him.

Slide 3 is the trainer-facing beat - it states plainly that Hamish rents the studio and
keeps his own clients and rate. To a client that reads as transparency (and matches what
/nl/studio-huren already says publicly); to a trainer scrolling past, it is the pitch.

Every fact from src/config/trainers.ts: Kracht / High Performance / Afvallen, NL+EN,
EUR72 per 60 min, bio, and his own intake page. NEVER "0% commissie" - rent + freedom.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import os

import os as _os
# Fonts live in the repo (scripts/fonts/, open licence). They used to sit in one session's
# scratchpad, which vanished, and every generator here broke with 'cannot open resource'.
S = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), 'fonts') + '/'
REPO = '/Users/paulodevries/Local/VAULT04-SculptClub/sculptclub/'
OUT = REPO + 'public/social/trainer-hamish-2026-08/'
P, T = REPO + 'public/images/studio/', REPO + 'public/images/trainers/'
os.makedirs(OUT, exist_ok=True)

ORANGE, BONE, MUTED, DIM = (239, 80, 18), (247, 244, 240), (198, 192, 184), (150, 143, 135)
W, H, M = 1080, 1920, 84

def font(n, s): return ImageFont.truetype(S + n, s)
def lift(i, k=1.10): return ImageEnhance.Brightness(i).enhance(k)

def cover(img, w, h, bias=0.5):
    iw, ih = img.size; sc = max(w / iw, h / ih)
    img = img.resize((int(iw * sc + 1), int(ih * sc + 1)), Image.LANCZOS)
    return img.crop((int((img.width - w) * .5), int((img.height - h) * bias),
                     int((img.width - w) * .5) + w, int((img.height - h) * bias) + h))

def scrim(img, start=.15, strength=232, flat=0):
    w, h = img.size; g = Image.new('L', (1, h))
    for y in range(h):
        t = y / h
        g.putpixel((0, y), max(0, min(255, flat + (0 if t < start else
                   int((strength - flat) * ((t - start) / (1 - start)) ** 1.45)))))
    return Image.composite(Image.new('RGB', (w, h), (0, 0, 0)), img, g.resize((w, h)))

def wrap(d, t, f, mw):
    out, cur = [], ''
    for wd in t.split():
        s2 = (cur + ' ' + wd).strip()
        if d.textlength(s2, font=f) <= mw: cur = s2
        else: out.append(cur); cur = wd
    if cur: out.append(cur)
    return out

def block(d, x, y, t, f, fill, mw, lead=1.1):
    a, dd = f.getmetrics(); lh = int((a + dd) * lead)
    ls = wrap(d, t, f, mw)
    for i, ln in enumerate(ls): d.text((x, y + i * lh), ln, font=f, fill=fill)
    return y + len(ls) * lh

def top_scrim(img, depth=0.22, strength=120):
    """darken the top band only — the wordmark sits there and slide 1 opens on sky"""
    w, h = img.size
    g = Image.new('L', (1, h))
    for y in range(h):
        t = y / h
        g.putpixel((0, y), int(strength * (1 - (t / depth) ** 0.9)) if t < depth else 0)
    return Image.composite(Image.new('RGB', (w, h), (0, 0, 0)), img, g.resize((w, h)))

def logo(im, y=120, w=286):
    """Paste the REAL wordmark. The logo is a FILE, never type — the mark is two
    words in a custom grotesque that Syne does not reproduce. Guarded by
    scripts/check-logo.mjs after a typed wordmark shipped live on 2026-08-26."""
    mark = Image.open(REPO + 'public/images/logo-sculptclub.png').convert('RGBA')
    h = max(1, round(mark.height * (w / mark.width)))
    mark = mark.resize((w, h), Image.LANCZOS)
    # source art is near-black; recolour to bone, keep the alpha channel
    tint = Image.new('RGBA', mark.size, BONE + (255,))
    tint.putalpha(mark.getchannel('A'))
    im.paste(tint, (M, y), tint)

def pill(d, x, y, txt, f, bg=ORANGE, fg=(14, 12, 10), padx=22, pady=10, r=10):
    tw = d.textlength(txt, font=f); a, dd = f.getmetrics()
    d.rounded_rectangle([x, y, x + tw + padx * 2, y + a + dd + pady * 2], radius=r, fill=bg)
    d.text((x + padx, y + pady), txt, font=f, fill=fg)
    return y + a + dd + pady * 2

def dot(d, x, y, r=9): d.ellipse([x, y, x + r * 2, y + r * 2], fill=ORANGE)

def fit(d, lines, name, start, mw, floor=58, step=4):
    s = start
    while s > floor:
        f = font(name, s)
        if max(d.textlength(t, font=f) for t in lines) <= mw: return f
        s -= step
    return font(name, floor)

# 1 · who he is
def f1(out):
    im = scrim(lift(cover(Image.open(T + 'hamish.jpg').convert('RGB'), W, H, bias=.14), 1.06),
               start=.30, strength=244, flat=16)
    im = top_scrim(im, depth=0.26, strength=205)
    d = ImageDraw.Draw(im); logo(im)
    y = 1080
    y = pill(d, M, y, 'PERSONAL TRAINER · JORDAAN', font('IS-600.ttf', 36)) + 32
    y = block(d, M, y, 'Hamish.', font('Syne-800.ttf', 132), BONE, W - M * 2, lead=1.0) + 26
    # 2026-09-21: the two small lines sat on the print of his own shirt ("Hamish Leijer")
    # and the letters ran into each other. A soft dark backing behind just those lines.
    from PIL import ImageFilter
    ov = Image.new('L', im.size, 0)
    ImageDraw.Draw(ov).rounded_rectangle((M - 40, y - 18, W - M + 10, y + 150), radius=40, fill=190)
    im.paste(Image.new('RGB', im.size, (0, 0, 0)), (0, 0), ov.filter(ImageFilter.GaussianBlur(34)))
    d = ImageDraw.Draw(im)
    y = block(d, M, y, 'Kracht · High Performance · Afvallen', font('IS-500.ttf', 42), BONE, W - M * 2 - 60, lead=1.28)
    y += 16
    block(d, M, y, 'Nederlands & Engels · Egelantiersgracht', font('IS-500.ttf', 34), DIM, W - M * 2 - 60, lead=1.3)
    im.save(out, quality=93)

# 2 · how he trains
def f2(out):
    im = cover(Image.open(P + 'rogue-sled.jpg').convert('RGB'), W, H, bias=.42)
    im = scrim(lift(im, 0.94).filter(ImageFilter.GaussianBlur(4)), start=0, strength=192, flat=136)
    d = ImageDraw.Draw(im); logo(im)
    y = 620
    f_h = fit(d, ['Geen shortcuts.'], 'Syne-800.ttf', 96, W - M * 2)
    y = block(d, M, y, 'Geen shortcuts.', f_h, BONE, W - M * 2, lead=1.04)
    y = block(d, M, y, 'Alleen opbouw.', f_h, ORANGE, W - M * 2, lead=1.04) + 46
    block(d, M, y, 'Functionele kracht, metabole optimalisatie en een aanpak die '
                   'aansluit op een druk leven. Structurele progressie, geen trucjes.',
          font('IS-500.ttf', 42), BONE, W - M * 2 - 50, lead=1.34)
    im.save(out, quality=93)

# 3 · the concept - the beat other TRAINERS are meant to notice
def f3(out):
    im = cover(Image.open(P + 'sculpt-wall-logo.jpeg').convert('RGB'), W, H, bias=.5)
    im = scrim(lift(im, 1.06).filter(ImageFilter.GaussianBlur(7)), start=0, strength=184, flat=140)
    d = ImageDraw.Draw(im); logo(im)
    y = 470
    y = block(d, M, y, 'Hoe het hier werkt.', font('Syne-800.ttf', 84), BONE, W - M * 2, lead=1.06) + 52
    for r in ['Hamish is zelfstandig, geen personeel',
              'Hij huurt de studio per uur, wanneer hij wil',
              'Eigen klanten, eigen tarief',
              'Je spreekt met hém af en betaalt hem direct']:
        dot(d, M + 4, y + 16)
        y_end = block(d, M + 52, y, r, font('IS-500.ttf', 42), BONE, W - M * 2 - 80, lead=1.26)
        y = max(y_end, y + 58) + 32
    y += 16
    block(d, M, y, 'Ook trainer? Zo huren ze hier allemaal.', font('IS-600.ttf', 38), ORANGE, W - M * 2 - 40)
    im.save(out, quality=93)

# 4 · cta - client-facing
def f4(out):
    im = scrim(lift(cover(Image.open(P + 'studio-interior-1.jpeg').convert('RGB'), W, H, bias=.42), 1.14),
               start=.02, strength=246, flat=76)
    d = ImageDraw.Draw(im); logo(im)
    y = 900
    y = block(d, M, y, 'Train met', font('Syne-800.ttf', 100), BONE, W - M * 2, lead=1.03)
    y = block(d, M, y, 'Hamish.', font('Syne-800.ttf', 100), ORANGE, W - M * 2, lead=1.03) + 34
    y = block(d, M, y, 'Eerste kennismaking gratis · vanaf €299 per 4 weken',
              font('IS-500.ttf', 42), BONE, W - M * 2 - 70, lead=1.3) + 18
    y = block(d, M, y, 'Egelantiersgracht 424 · dagelijks 06:00–22:00',
              font('IS-500.ttf', 34), MUTED, W - M * 2 - 60, lead=1.3) + 34
    pill(d, M, y, 'sculptclub.nl/hamish', font('IS-600.ttf', 40), padx=28, pady=15, r=16)
    im.save(out, quality=93)

f1(OUT + '01-wie.jpg'); f2(OUT + '02-aanpak.jpg'); f3(OUT + '03-concept.jpg'); f4(OUT + '04-cta.jpg')
for n, top in [('01-wie', 480), ('02-aanpak', 250), ('03-hoe' if False else '03-concept', 230), ('04-cta', 400)]:
    Image.open(OUT + n + '.jpg').crop((0, top, 1080, top + 1350)).save(OUT + n + '-ig-feed.jpg', quality=93)
print('\n'.join(sorted(os.listdir(OUT))))
