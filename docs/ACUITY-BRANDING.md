# Acuity Scheduler — Brand Color Matching

Exact color values to paste into Acuity's **Customize Appearance** settings so the embedded scheduler matches sculptclub.nl perfectly.

## Where to apply

1. Log in to https://secure.acuityscheduling.com/
2. **Business Settings → Customize Appearance → Scheduler Colors** (or similar; Acuity occasionally renames panels)
3. Fill in the hex values below. Paste *without* the `#` if Acuity's input strips it — include it otherwise.
4. Save, then reload sculptclub.nl/en/book-gym and verify the Acuity iframe matches.

## Color palette (dark mode — the production theme)

These come from `src/app/globals.css` (`.dark` block).

| Acuity field | Hex | Role |
|---|---|---|
| **Main / Background** | `#0F1118` | Page background |
| **Card / Panel background** | `#1A1D28` | Cards, form fields, dropdown panels |
| **Text color** | `#EDEDF0` | Body copy, form labels, titles |
| **Muted / Secondary text** | `#8A8D9B` | Timestamps, help text, inactive labels |
| **Primary / Button color** | `#4B6BFF` | Book / Continue / Confirm buttons |
| **Button hover** | `#3450CC` | Button hover state (if separate field exists) |
| **Button text** | `#FFFFFF` | Text on primary buttons |
| **Accent / Link color** | `#4B6BFF` | Inline links, active tab underlines |
| **Border** | `#2A2A35` | Dividers, input borders |
| **Error / Alert** | `#EF4444` | Validation errors |

## Fonts

Acuity's standard plan uses its own system fonts and does not allow custom font uploads on most tiers. If your plan allows custom CSS:

- **Headings**: Syne, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Body**: Instrument Sans, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

If custom fonts aren't available, leave Acuity on its defaults — the color match will still carry most of the brand lift.

## Optional custom CSS (Acuity Premium / Enterprise only)

If your plan includes **Custom CSS**, paste this in **Customize Appearance → Advanced CSS**:

```css
/* Match sculptclub.nl dark noir theme */
:root {
  --sc-bg: #0F1118;
  --sc-card: #1A1D28;
  --sc-fg: #EDEDF0;
  --sc-muted: #8A8D9B;
  --sc-brand: #4B6BFF;
  --sc-brand-hover: #3450CC;
  --sc-border: #2A2A35;
}

body,
.schedule-page,
.appointment-types-page {
  background: var(--sc-bg) !important;
  color: var(--sc-fg) !important;
}

.appointment-type,
.card,
.panel,
input,
select,
textarea {
  background: var(--sc-card) !important;
  color: var(--sc-fg) !important;
  border-color: var(--sc-border) !important;
}

.btn-primary,
button[type="submit"],
.book-button {
  background: var(--sc-brand) !important;
  color: #FFFFFF !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 14px 28px !important;
  font-weight: 600 !important;
  transition: background 0.2s ease !important;
}

.btn-primary:hover,
button[type="submit"]:hover,
.book-button:hover {
  background: var(--sc-brand-hover) !important;
}

a,
.link {
  color: var(--sc-brand) !important;
}

.text-muted,
.help-text,
.small-text {
  color: var(--sc-muted) !important;
}

/* Rounded corners to match site design language */
.card,
.panel,
input,
select,
textarea {
  border-radius: 12px !important;
}
```

Acuity's class names occasionally change. If a selector stops matching, inspect the scheduler in DevTools and update the corresponding selector — the color variables above stay the same.

## Why these colors and not the light ones

The production site is dark-only (see `CLAUDE.md`). Light mode tokens exist in `globals.css` but aren't used on sculptclub.nl. Matching Acuity to the live dark theme is what users actually see when they click through a booking button.

## Verification after saving

1. Visit https://sculptclub.nl/en/book-gym on production
2. Click **Book a session** — a new tab opens Acuity
3. The scheduler should use `#0F1118` background, `#4B6BFF` buttons, white text
4. If colors don't update, hard-reload Acuity (Cmd+Shift+R) — Acuity caches styles aggressively
