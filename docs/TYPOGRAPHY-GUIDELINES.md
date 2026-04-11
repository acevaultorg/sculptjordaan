# SculptClub Typography Guidelines

Derived from direct measurement of three reference sites via Chrome MCP DOM inspection on 2026-04-11.

## Reference data (measured, not guessed)

Measured at 1482px viewport width on production sites:

| Brand | Headline text | Font-size | Weight | Letter-spacing | Transform | % viewport width | Font family |
|---|---|---|---|---|---|---|---|
| Apple | "iPhone" (H2 product band) | **56px** | 600 | -0.28px (-0.005em) | none | 23% | SF Pro Display |
| Saints & Stars | "NEXT LEVEL GYM" (H1 hero) | **54px** | 700 | 8px (+0.148em) | uppercase | 37% | FSHackney-regular |
| Balenciaga | "BAGS FOR WOMEN" (H1 category) | **22px** | 400 | 1.1px (+0.05em) | uppercase | 13% | BB-CondBold |

## Key observations

1. **Premium brands top out around 54–56px for the largest on-page headline.** Apple and Saints & Stars both converge here. This is not a coincidence — this is the sweet spot for "strong hero" without becoming overwhelming on editorial layouts.
2. **Balenciaga goes even smaller (22px) because imagery carries the message.** Their homepage literally has zero text overlay on the hero video — the video IS the hero.
3. **None of the three exceed 60px** on any on-page headline. If you're shipping a web headline over 80px, you're shouting; over 100px, you're screaming.
4. **The "monumental" feel of Saints & Stars comes from tracking + uppercase, not font-size.** 54px with +0.15em tracking and uppercase reads as BOLD AND EDITORIAL. 54px with normal tracking would read as ordinary.
5. **Weight 600–700 is standard.** Apple uses 600 (SF Pro semibold), S&S uses 700 (FSHackney bold). Nobody uses 900/black for hero headlines.
6. **Viewport coverage 23–37% is the target** for the largest on-page headline. If your hero headline takes up >50% of viewport width, it's competing with the imagery.

## SculptClub rules (binding)

### Hero headline (H1, homepage only)

| Property | Value | Rationale |
|---|---|---|
| **max font-size (xl+)** | **64px / 4rem** | Between Apple (56) and a slight bump for fitness-brand confidence. Never above 72px. |
| **min font-size (mobile)** | **32px / 2rem** | Readable on 320px viewports when stacked. |
| **scaling** | fluid via `clamp()` | Never use breakpoint-based jumps — always clamp. |
| **font-weight** | **700** | Matches Saints & Stars. |
| **letter-spacing** | **+0.12em** | Wide editorial tracking. The single biggest lever for "premium fitness brand" feel. |
| **text-transform** | **uppercase** | Text should be written in uppercase in the source (e.g. `PRIVATE GYM`), not toggled via CSS (avoids TTS/accessibility issues). |
| **line-height** | **0.95–1.0** | Tight for single-line, never below 0.9. |
| **layout** | stacked on `< sm` (640px), single line on `sm+` | Safety — prevents mid-viewport overflow on narrow tablets. |
| **target % viewport width** | **30–40%** on desktop | Not 60%+. |

### Hero supporting line (taglineSub)

| Property | Value |
|---|---|
| **font-size** | `text-lg sm:text-xl lg:text-2xl` (18 / 20 / 24px) |
| **font-weight** | 600 |
| **letter-spacing** | -0.02em (subtle tightening for sentence case) |
| **text-transform** | none (sentence case) |
| **ratio to h1** | ~1:2.5 to 1:3 (64px h1 → 20-24px sub) |

### Section headlines (H2 on content pages)

| Property | Value |
|---|---|
| **font-size** | `text-3xl sm:text-4xl lg:text-5xl` (30 / 36 / 48px) |
| **max** | **48px** — never larger than the hero H1. |
| **font-weight** | 700 |
| **letter-spacing** | -0.02em |
| **text-transform** | sentence case (matches body copy) |

### Section overline (eyebrow label above H2)

| Property | Value |
|---|---|
| **font-size** | 12-14px fixed |
| **letter-spacing** | +0.18em (very wide, matches existing `.overline` class) |
| **text-transform** | uppercase |
| **font-weight** | 500-600 |

### Body copy

| Property | Value |
|---|---|
| **font-size** | 16-18px |
| **line-height** | 1.5–1.7 |
| **tracking** | normal or -0.01em |
| **font-family** | Instrument Sans (per site config) |
| **max line length** | 65ch (readable measure) |

## Forbidden

- ❌ Hero H1 above 72px at any viewport (yes that includes 1920+).
- ❌ `text-[11rem]` (176px) / `text-[9rem]` (144px) — these belong to advertising posters, not websites.
- ❌ Using CSS `text-transform: uppercase` as the sole uppercase mechanism — always also uppercase the source text (accessibility + SEO).
- ❌ Breakpoint-based hero font sizing (e.g. `text-7xl sm:text-8xl md:text-[6.5rem]`) — always use `clamp()` instead.
- ❌ Monumental type over images without enough contrast — always check AA contrast at the rendered size.

## Why these specific numbers

The 64px max is chosen because:
- Apple's 56px is the proven floor for "big brand headline"
- Saints & Stars's 54px is the proven floor for "fitness brand headline"  
- A small bump to 64px positions SculptClub marginally more confident than both references without being monumentally larger
- 64px at 1728px viewport = 3.7% of viewport, which leaves 96% of viewport for imagery
- 64px with +0.12em tracking and 11 characters (`PRIVATE GYM`) = ~582px rendered width = 34% of viewport, matching Saints & Stars's 37%

## Implementation verification

Any hero H1 change must be verified via Chrome MCP DOM probe at 12 viewport widths: 320, 375, 414, 500, 640, 768, 1024, 1152, 1280, 1440, 1728, 1920.

At each width, compute:
- `font-size` = clamp value at that viewport
- `text-width` = font-size × ratio-per-char × char-count (measured empirically per font)
- `container-width` = `min(viewport - padding, 1104)` (max-w-6xl minus px)
- `fits` = `text-width ≤ container-width`
- `pct-viewport` = `text-width / viewport`

A passing hero change must:
- fit at all 12 widths
- hit 30–40% viewport coverage at desktop widths (1280+)
- stay ≥24px at mobile widths (320–500) for readability

## Appendix: measurement script

```js
// Run in browser console on any reference site to extract typography
(() => {
  const all = document.querySelectorAll('h1, h2, [class*="headline"], [class*="hero"]');
  return Array.from(all).map(el => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: el.textContent.trim().slice(0, 40),
      fontSize: parseFloat(cs.fontSize),
      fontWeight: cs.fontWeight,
      letterSpacing: cs.letterSpacing,
      textTransform: cs.textTransform,
      fontFamily: cs.fontFamily.slice(0, 30),
      width: Math.round(r.width),
      pctViewport: Math.round(100 * r.width / window.innerWidth),
    };
  }).sort((a, b) => b.fontSize - a.fontSize).slice(0, 5);
})();
```
