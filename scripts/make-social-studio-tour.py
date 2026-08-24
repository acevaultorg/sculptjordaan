#!/usr/bin/env python3
"""SculptClub post #2 — "Dit huur je" studio-tour carousel (TikTok photo mode + Instagram).

Angle differs from trainer-rental-2026-08 (that one = prijs + marktvergelijking).
This one answers the objection that comes AFTER the price: "is die ruimte wat?".
Every claim traces to the live money pages / CLAUDE.md:
  Rogue power rack + Olympic barbell   → /nl/studio-huren gallery alt
  verstelbare bank · kabelmachine · Echo Bike · dumbbells → /nl/studio-huren line 509 + open-gym FAQ
  deurcode via WhatsApp de avond ervoor → CLAUDE.md Policies
  halve studio €12/uur · hele €17/uur · eerste sessie gratis · Egelantiersgracht 424 · 06:00-22:00
NEVER '0% commissie' — frame is huur + vrijheid.
Deliberately no dumbbell kg-number: the site conflicts (4-40 kg vs "tot 32 kg"), so we name
the equipment instead of risking a false claim.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

S = '/private/tmp/claude-502/-Users-paulodevries-Local-VAULT04-SculptClub/6fcb818f-507a-4265-a0bf-0a79c8e2fe08/scratchpad/'
REPO = '/Users/paulodevries/Local/VAULT04-SculptClub/'
OUT = REPO + 'sculptclub/public/social/studio-tour-2026-08/'
os.makedirs(OUT, exist_ok=True)

ORANGE = (239, 80, 18); BONE = (247, 244, 240); MUTED = (198, 192, 184); DIM = (150, 143, 135)
W, H = 1080, 1920
M = 84

def font(n, s): return ImageFont.truetype(S + n, s)

def cover(img, w, h, bias=0.5):
    iw, ih = img.size
    sc = max(w / iw, h / ih)
    nw, nh = int(iw * sc + 1), int(ih * sc + 1)
    img = img.resize((nw, nh), Image.LANCZOS)
    return img.crop((int((nw - w) * .5), int((nh - h) * bias), int((nw - w) * .5) + w, int((nh - h) * bias) + h))

def scrim(img, start=.15, strength=232, flat=0):
    w, h = img.size
    g = Image.new('L', (1, h))
    for y in range(h):
        t = y / h
        g.putpixel((0, y), max(0, min(255, flat + (0 if t < start else int((strength - flat) * ((t - start) / (1 - start)) ** 1.45)))))
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

def logo(d, y=120): d.text((M, y), 'SCULPTCLUB', font=font('Syne-800.ttf', 36), fill=BONE)
def dot(d, x, y, r=9, c=ORANGE): d.ellipse([x, y, x + r * 2, y + r * 2], fill=c)

def num_badge(d, x, y, n, f):
    s = 54
    d.ellipse([x, y, x + s, y + s], fill=ORANGE)
    tw = d.textlength(n, font=f); asc, desc = f.getmetrics()
    d.text((x + (s - tw) / 2, y + (s - (asc + desc)) / 2 + 2), n, font=f, fill=(14, 12, 10))

P = REPO + 'sculptclub/public/images/studio/'

# 1 — HOOK: the room itself
im = scrim(cover(Image.open(P + 'gym-latest.jpg').convert('RGB'), W, H, bias=.45), start=.02, strength=238, flat=48)
d = ImageDraw.Draw(im); logo(d)
f_over, f_big, f_sub = font('IS-600.ttf', 38), font('Syne-800.ttf', 118), font('IS-500.ttf', 42)
y = 640
lab = 'VOOR TRAINERS · JORDAAN'
lw = d.textlength(lab, font=f_over); a, dd = f_over.getmetrics()
d.rounded_rectangle([M, y, M + lw + 44, y + a + dd + 20], radius=10, fill=ORANGE)
d.text((M + 22, y + 10), lab, font=f_over, fill=(14, 12, 10)); y += a + dd + 54
# auto-fit: shrink until BOTH headline lines fit on one line each (no orphan wraps)
L1, L2 = 'Dit huur je', 'voor €12.'
size = 118
while size > 60:
    f_big = font('Syne-800.ttf', size)
    if max(d.textlength(L1, font=f_big), d.textlength(L2, font=f_big)) <= W - M * 2:
        break
    size -= 4
asc, dsc = f_big.getmetrics(); lh = int((asc + dsc) * 1.0)
d.text((M, y), L1, font=f_big, fill=BONE); y += lh
d.text((M, y), L2, font=f_big, fill=ORANGE); y += lh + 34
block(d, M, y, 'Per uur. Halve studio, 1-op-1. Geen contract.', f_sub, MUTED, W - M * 2 - 130, lead=1.3)
im.save(OUT + '01-hook.jpg', quality=93)

# 2 — WAT ER STAAT
im = scrim(cover(Image.open(P + 'power-rack.jpeg').convert('RGB'), W, H, bias=.5).filter(ImageFilter.GaussianBlur(4)), start=0, strength=170, flat=120)
d = ImageDraw.Draw(im); logo(d)
f_h, f_row = font('Syne-800.ttf', 84), font('IS-500.ttf', 44)
y = 520
y = block(d, M, y, 'Wat er staat.', f_h, BONE, W - M * 2, lead=1.05); y += 56
for row in ['Rogue power rack + Olympic barbell', 'Volledige dumbbell-set', 'Kabelmachine', 'Verstelbare bank', 'Echo Bike']:
    dot(d, M + 4, y + 18); block(d, M + 56, y, row, f_row, BONE, W - M * 2 - 70, lead=1.2); y += 92
im.save(OUT + '02-wat.jpg', quality=93)

# 3 — ZO WERKT HET
im = scrim(cover(Image.open(P + 'canal-view-doors.jpg').convert('RGB'), W, H, bias=.5).filter(ImageFilter.GaussianBlur(7)), start=0, strength=186, flat=142)
d = ImageDraw.Draw(im); logo(d)
f_h, f_step, f_n = font('Syne-800.ttf', 84), font('IS-500.ttf', 42), font('Syne-700.ttf', 32)
y = 470
y = block(d, M, y, 'Zo werkt het.', f_h, BONE, W - M * 2, lead=1.05); y += 56
for i, row in enumerate(['Boek het uur dat jij wilt.', 'Deurcode via WhatsApp, de avond ervoor.', 'Deur dicht. Jouw klant, jouw tarief.', 'Klaar? Je betaalt alleen dat uur.']):
    num_badge(d, M, y - 2, str(i + 1), f_n)
    y_end = block(d, M + 82, y, row, f_step, BONE, W - M * 2 - 110, lead=1.25)
    y = max(y_end, y + 60) + 46   # advance past the real wrapped height + gap
im.save(OUT + '03-hoe.jpg', quality=93)

# 4 — CTA
im = scrim(cover(Image.open(P + 'back-room-full.jpg').convert('RGB'), W, H, bias=.4), start=.02, strength=240, flat=56)
d = ImageDraw.Draw(im); logo(d)
f_h, f_sub, f_b = font('Syne-800.ttf', 96), font('IS-500.ttf', 42), font('IS-600.ttf', 42)
y = 780
y = block(d, M, y, 'Eerste sessie gratis.', f_h, BONE, W - M * 2 - 60, lead=1.04); y += 30
y = block(d, M, y, 'Hele studio vanaf €17/uur · Egelantiersgracht 424 · dagelijks 06:00–22:00', f_sub, MUTED, W - M * 2 - 120, lead=1.28); y += 44
txt = 'sculptclub.nl'
tw = d.textlength(txt, font=f_b); asc, desc = f_b.getmetrics()
d.rounded_rectangle([M, y, M + tw + 56, y + asc + desc + 30], radius=16, fill=ORANGE)
d.text((M + 28, y + 15), txt, font=f_b, fill=(14, 12, 10))
im.save(OUT + '04-cta.jpg', quality=93)

for n in ['01-hook', '02-wat', '03-hoe', '04-cta']:
    im = Image.open(OUT + n + '.jpg')
    top = 300 if n in ('01-hook', '04-cta') else 220
    im.crop((0, top, 1080, top + 1350)).save(OUT + n + '-ig-feed.jpg', quality=93)
print('\n'.join(sorted(os.listdir(OUT))))
