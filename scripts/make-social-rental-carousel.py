#!/usr/bin/env python3
"""Build the SculptClub trainer-rental photo-carousel (TikTok photo mode + Instagram).

Brand: Syne (headings) + Instrument Sans (body), #EF5012 orange, near-black #0E0C0A.
1080x1920 (TikTok photo / IG Story-Reel) + 1080x1350 IG-feed variants.
Safe area: all text between y=210 and y=1430 (TikTok caption/UI eats the bottom ~430px,
right rail ~180px). Every claim traces to CLAUDE.md. NEVER '0% commissie'.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

S = '/private/tmp/claude-502/-Users-paulodevries-Local-VAULT04-SculptClub/6fcb818f-507a-4265-a0bf-0a79c8e2fe08/scratchpad/'
REPO = '/Users/paulodevries/Local/VAULT04-SculptClub/'
OUT = REPO + 'sculptclub/public/social/2026-08-rental/'
os.makedirs(OUT, exist_ok=True)

ORANGE = (239, 80, 18)
BONE = (247, 244, 240)
MUTED = (198, 192, 184)
DIM = (150, 143, 135)
W, H = 1080, 1920
M = 84                 # side margin
SAFE_TOP, SAFE_BOT = 210, 1430

def font(n, s):
    return ImageFont.truetype(S + n, s)

def cover(img, w, h, bias=0.5):
    iw, ih = img.size
    sc = max(w / iw, h / ih)
    nw, nh = int(iw * sc + 1), int(ih * sc + 1)
    img = img.resize((nw, nh), Image.LANCZOS)
    x = int((nw - w) * 0.5)
    y = int((nh - h) * bias)
    return img.crop((x, y, x + w, y + h))

def scrim(img, start=0.15, strength=232, flat=0):
    """dark gradient growing downward from `start`, plus optional flat dim"""
    w, h = img.size
    g = Image.new('L', (1, h))
    for y in range(h):
        t = y / h
        v = flat + (0 if t < start else int((strength - flat) * ((t - start) / (1 - start)) ** 1.45))
        g.putpixel((0, y), max(0, min(255, v)))
    g = g.resize((w, h))
    return Image.composite(Image.new('RGB', (w, h), (0, 0, 0)), img, g)

def wrap(d, text, f, mw):
    out, cur = [], ''
    for wd in text.split():
        t = (cur + ' ' + wd).strip()
        if d.textlength(t, font=f) <= mw:
            cur = t
        else:
            out.append(cur); cur = wd
    if cur:
        out.append(cur)
    return out

def block(d, x, y, text, f, fill, mw, lead=1.1):
    asc, desc = f.getmetrics()
    lh = int((asc + desc) * lead)
    for i, ln in enumerate(wrap(d, text, f, mw)):
        d.text((x, y + i * lh), ln, font=f, fill=fill)
    return y + len(wrap(d, text, f, mw)) * lh

def logo(d, y=120):
    d.text((M, y), 'SCULPTCLUB', font=font('Syne-800.ttf', 36), fill=BONE)

def dot(d, x, y, r=9, c=ORANGE):
    d.ellipse([x, y, x + r * 2, y + r * 2], fill=c)

def check(d, x, y, s=30, c=ORANGE, w=7):
    d.line([(x, y + s * 0.55), (x + s * 0.36, y + s * 0.9)], fill=c, width=w)
    d.line([(x + s * 0.36, y + s * 0.9), (x + s, y + s * 0.08)], fill=c, width=w)

def dash(d, x, y, w=30, c=DIM, t=5):
    d.line([(x, y), (x + w, y)], fill=c, width=t)

# ── frames ──────────────────────────────────────────────────────────────────
def f1_hook(src, out):
    im = scrim(cover(Image.open(src).convert('RGB'), W, H, bias=0.42), start=0.02, strength=238, flat=52)
    d = ImageDraw.Draw(im); logo(d)
    f_over, f_big, f_sub = font('IS-600.ttf', 38), font('Syne-800.ttf', 122), font('IS-500.ttf', 42)
    y = 660
    lab = 'VOOR TRAINERS · JORDAAN'
    lw = d.textlength(lab, font=f_over); a, dd = f_over.getmetrics()
    d.rounded_rectangle([M, y, M + lw + 44, y + a + dd + 20], radius=10, fill=ORANGE)
    d.text((M + 22, y + 10), lab, font=f_over, fill=(14, 12, 10)); y += a + dd + 20 + 34
    y = block(d, M, y, 'Jouw eigen studio.', f_big, BONE, W - M * 2, lead=1.0)
    y = block(d, M, y, 'Per uur.', f_big, ORANGE, W - M * 2, lead=1.0)
    y += 36
    block(d, M, y, 'Geen contract. Geen minimum. Jouw klanten, jouw tarief.', f_sub, MUTED, W - M * 2 - 120, lead=1.3)
    im.save(out, quality=93)

def f2_price(src, out):
    im = cover(Image.open(src).convert('RGB'), W, H, bias=0.5).filter(ImageFilter.GaussianBlur(3))
    im = scrim(im, start=0.0, strength=150, flat=95)
    d = ImageDraw.Draw(im); logo(d)
    f_lab, f_num, f_unit, f_row = font('IS-600.ttf', 38), font('Syne-800.ttf', 200), font('Syne-700.ttf', 60), font('IS-500.ttf', 44)
    y = 700
    d.text((M, y), 'HUUR DE STUDIO', font=f_lab, fill=ORANGE); y += 84
    d.text((M, y), '€12', font=f_num, fill=BONE)
    d.text((M + d.textlength('€12', font=f_num) + 20, y + 112), '/uur', font=f_unit, fill=ORANGE)
    y += 288
    for row in ['Halve studio, 1-op-1', 'Hele studio vanaf €17/uur', 'Eerste sessie gratis']:
        dot(d, M + 4, y + 16); d.text((M + 52, y), row, font=f_row, fill=(238, 234, 228)); y += 80
    im.save(out, quality=93)

def f3_compare(src, out):
    im = cover(Image.open(src).convert('RGB'), W, H, bias=0.5).filter(ImageFilter.GaussianBlur(9))
    im = scrim(im, start=0.0, strength=180, flat=140)
    d = ImageDraw.Draw(im); logo(d)
    f_h, f_lab, f_it, f_fine = font('Syne-800.ttf', 84), font('IS-600.ttf', 34), font('IS-500.ttf', 41), font('IS-500.ttf', 28)
    y = 430
    y = block(d, M, y, 'Reken het na.', f_h, BONE, W - M * 2, lead=1.05); y += 44
    d.text((M, y), 'ELDERS IN AMSTERDAM', font=f_lab, fill=DIM); y += 64
    for row in ['Vaste maandhuur v.a. €600 p/m', 'Minimum 5 uur per week', 'Premium: €22,50 per uur']:
        dash(d, M + 2, y + 26); d.text((M + 52, y), row, font=f_it, fill=MUTED); y += 74
    y += 44
    d.text((M, y), 'BIJ SCULPTCLUB', font=f_lab, fill=ORANGE); y += 64
    for row in ['€12 per uur', 'Geen minimum, geen contract', 'Jouw klanten, jouw tarief']:
        check(d, M, y + 4); d.text((M + 56, y), row, font=f_it, fill=BONE); y += 74
    y += 22
    d.text((M, y), 'Marktcijfers Amsterdam · peildatum aug 2026', font=f_fine, fill=DIM)
    im.save(out, quality=93)

def f4_cta(src, out):
    im = scrim(cover(Image.open(src).convert('RGB'), W, H, bias=0.36), start=0.02, strength=240, flat=58)
    d = ImageDraw.Draw(im); logo(d)
    f_h, f_sub, f_b = font('Syne-800.ttf', 96), font('IS-500.ttf', 42), font('IS-600.ttf', 42)
    y = 800
    y = block(d, M, y, 'Kom eerst gratis proberen.', f_h, BONE, W - M * 2 - 60, lead=1.04); y += 34
    y = block(d, M, y, 'Egelantiersgracht 424 · dagelijks 06:00–22:00', f_sub, MUTED, W - M * 2 - 120, lead=1.28)
    y += 44
    txt = 'sculptclub.nl'
    tw = d.textlength(txt, font=f_b); asc, desc = f_b.getmetrics()
    d.rounded_rectangle([M, y, M + tw + 56, y + asc + desc + 30], radius=16, fill=ORANGE)
    d.text((M + 28, y + 15), txt, font=f_b, fill=(14, 12, 10))
    im.save(out, quality=93)

P = REPO + 'sculptclub/public/images/studio/'
f1_hook(P + 'back-room-full.jpg', OUT + '01-hook.jpg')
f2_price(P + 'gym-latest.jpg', OUT + '02-prijs.jpg')
f3_compare(P + 'boutique-corner.jpg', OUT + '03-vergelijk.jpg')
f4_cta(P + 'canal-view-doors.jpg', OUT + '04-cta.jpg')

# IG feed 4:5 — recrop around the text band (text lives 210..1430)
for n in ['01-hook', '02-prijs', '03-vergelijk', '04-cta']:
    im = Image.open(OUT + n + '.jpg')
    top = 300 if n in ('01-hook', '04-cta') else 220
    im.crop((0, top, 1080, top + 1350)).save(OUT + n + '-ig-feed.jpg', quality=93)

print('\n'.join(sorted(os.listdir(OUT))))
