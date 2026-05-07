# Mobile audit — 2026-05-07

Comprehensive WCAG 2.1 AA + mobile-UX audit of the live site. Ran via JS DOM inspection (Chrome MCP `resize_window` resizes the OS chrome but not the rendered viewport — verified `window.innerWidth: 1661` after every resize, so visual mobile renders weren't possible — pivoted to code-level audit on Tailwind responsive classes + computed styles).

## ✅ Issues found + fixed in-session

### Header tap targets — commit `80f9d80`
4 persistent header buttons were `h-9` (36px) / `w-9 h-9` (36×36) on mobile — below WCAG 2.5.5 mobile target of 44×44.

| Element | Was | Now |
|---|---|---|
| "Nieuw hier?" / "New here?" link | `h-9` | `h-11 sm:h-9` |
| "Boek" / "Book" button | `h-9` | `h-11 sm:h-9` |
| Client login icon button | `w-9 h-9` | `w-11 h-11 sm:w-9 sm:h-9` |
| Hamburger menu button | `w-9 h-9` | `w-11 h-11 sm:w-9 sm:h-9` |

Lang toggle was already correct (`w-11 h-11 sm:w-9 sm:h-9`) — used as the canonical pattern for the fixes.

### Input default height — commit `b1e3323`
The shadcn-style `Input` component default was `h-8` (32px) sitewide. Affects every form using `<Input />` (notably `/nl/contact`).

`h-8` → `h-11 sm:h-8` (44 mobile, 32 desktop preserved).

## ✅ Items verified clean

| Check | Result |
|---|---|
| Viewport meta tag | ✓ `width=device-width, initial-scale=1` |
| Horizontal overflow | ✓ `bodyScrollWidth === bodyClientWidth` |
| All `<Image>` have `alt` | ✓ 0 missing across 102 usages |
| Form `<input>` labels | ✓ `<label htmlFor>` matches `<input id>` |
| `text-muted-foreground` contrast | ✓ 6.36:1 (`#8a8d9b` on `#000000`) — passes AA normal |
| `h1` contrast | ✓ 17.97:1 — passes AAA |
| Hero CTA buttons | ✓ 216×52 — exceeds 44×44 |
| Trainer-intake form inputs (custom, not Input component) | ✓ proper sizing via direct CSS |
| Inline text links (footer phone, "Bekijk reviews", etc) at 20-22px | ✓ WCAG inline-text-link exception applies |

## ✅ Pages audited

| Page | Tap-target issues | Notes |
|---|---|---|
| Homepage | 0 | Hero CTAs already 216×52 |
| /nl/vind-jouw-personal-trainer | 0 | |
| /nl/open-gym | 0 | |
| /nl/prijzen | 0 | 64 price cards detected, no overflow |
| /nl/plan-gratis-intake-met-alex | 0 | Trainer page clean |
| /nl/blog/personal-trainer-rugklachten-amsterdam | 0 | Blog post clean, no fixed-width risks |
| /nl/contact (form) | Was: 32px inputs → fixed to 44px on mobile (Input fix) | Submit button was already 44px |

## 🟡 Operator-decision items (not unilaterally fixed)

### Brand button contrast — borderline AA fail (4.33:1 vs required 4.5:1)

**The numbers:**
- Light theme `--brand: #134DE1` — contrast vs white = 6.4:1 ✓ passes AA
- Dark theme `--brand: #4B6BFF` — contrast vs white = **4.33:1** ❌ marginally fails AA normal text (needs 4.5:1)

The site runs dark theme by default (per CLAUDE.md "Dark theme only — intentional for brand"), so the dark-theme brand `#4B6BFF` is what mobile users actually see on every "Boek" / "Book" button.

WCAG large-text relief (3.0:1 instead of 4.5:1) does NOT apply because:
- Button text is `text-[11px] sm:text-sm` — that's 11px mobile, 14px desktop
- Large-text threshold is ≥24px OR ≥18.67px bold
- Even desktop's 14px bold is below the 18.67px bold threshold
- So all button instances are "normal text" per WCAG

**Three fix options (operator picks one):**

1. **Darken `--brand` in dark theme** — change from `#4B6BFF` to e.g. `#3D5DE0` (still recognizably brand-blue but enough darker to pass 4.5:1 against white). Affects every `bg-brand` element, not just buttons. Brand identity decision.

2. **Use `bg-brand-dark` for buttons instead of `bg-brand`** — `--brand-dark: #3450CC` already exists and easily passes contrast. Visually slightly darker brand button. Would need updates in 50+ button instances OR add a compound class like `bg-brand-button` that maps to `--brand-dark`.

3. **Accept the marginal fail** — 4.33 vs 4.5 is barely below threshold. In practice mobile users will read white-on-brand-blue buttons fine. Document as known partial-AA-noncompliance.

My recommendation: **Option 2** (use `bg-brand-dark` for buttons). Smallest visual change, best contrast outcome. The dark-theme `#4B6BFF` was lightened to be visible on dark backgrounds — buttons don't sit on dark backgrounds, they sit on themselves, so darker is fine.

**To ship Option 2:** edit each ButtonLink/Button instance with `bg-brand` → `bg-brand-dark`. Brain-doable in 30 min if you give the green light.

## Methodology limitations

Chrome MCP `resize_window` resizes the OS browser window but NOT the rendered viewport. JS audit ran at desktop viewport (1661px) — for elements with responsive Tailwind classes (e.g., `h-11 sm:h-9`), I had to read the class strings directly to know what mobile would render.

This means:
- Real mobile-only layout bugs (e.g., text overflow at 375px specifically) couldn't be visually verified
- The 18 deploys this session preserve desktop layout via `sm:` prefix breakpoints — so even if a mobile issue exists I haven't seen, the responsive contract limits damage to mobile only

For true visual mobile verification, the operator should:
1. Open `https://sculptclub.nl/` in Safari / Chrome on an actual phone (or device emulator)
2. Run through the Mobile Checklist in `mobile-perfection-default.md`:
   - Layout / Typography / CTAs / Spacing / Forms / Modals / Nav / Images / Performance / CTA Reach

Or use Chrome DevTools desktop with device toolbar enabled (F12 → toggle device emulation → iPhone 12 → 375×812).

---

*Generated 2026-05-07 as part of the mobile audit thread. See commits `80f9d80` + `b1e3323` for the shipped fixes.*
