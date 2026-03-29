# SculptClub — Brand Strategy

Migrated from WordPress legacy repo (sculptclub-site). The design tokens below are principles — actual color values, fonts, and spacing live in `tailwind.config.ts` and `src/config/site.ts`.

---

## Brand Personality

1. **Bold** — unapologetic confidence in every touchpoint
2. **Empowering** — transformation through disciplined action
3. **Premium** — elevated craft in a curated Amsterdam setting
4. **Energetic** — kinetic intensity that moves people forward
5. **Precise** — surgical attention to form, technique, and detail

## Brand Essence

> "SculptClub is where disciplined ambition meets refined transformation."

## Audience

Amsterdam professionals (25-45) who treat fitness as craft, not chore. They value quality over convenience, seek expert guidance, and reject mass-market gym culture.

**They value:** Expertise, aesthetic environments, measurable results, community without pretension, time efficiency.

**They reject:** Cookie-cutter programs, overcrowded facilities, cheap equipment, motivational platitudes, bro-science.

## Positioning

> For Amsterdam professionals who demand precision in their training, SculptClub is the boutique studio that combines expert personal training with a curated Jordaan environment — where every session is engineered for measurable transformation.

## Brand Tension

**Raw power ↔ Refined elegance** — The physical intensity of training meets the sophistication of the Jordaan neighborhood.

## Spiritual Neighbors

- **Barry's** — high-energy studio culture + premium positioning
- **Equinox** — elevated fitness as lifestyle brand
- **Apple** — precision engineering meets human-centered design

## Brand Dimensions

- **Primary: Competence** — expertise-driven, structured, trustworthy, results-oriented
- **Secondary: Excitement** — energetic, bold, dynamic, contemporary

## Voice

| Context | Tone |
|---------|------|
| Headings | Direct, active, benefit-focused. Short. Punchy. |
| Body text | Clear, confident, informative. No fluff. |
| CTAs | Specific action verbs with implied transformation. |
| Empty states | Encouraging, forward-looking. |
| Error messages | Honest, helpful, never condescending. |

### CTA Phrases
1. "Start Your Transformation"
2. "Book a Session"
3. "Train With Us"
4. "Claim Your Spot"
5. "See the Studio"

### Copy Examples
- **Error:** "Something didn't work. Refresh and try again — or reach out to us directly."
- **Empty:** "No sessions booked yet. Your transformation starts with one click."
- **Loading:** "Loading your schedule..."
- **Success:** "You're in. Check your email for confirmation."

## Design Principles

### The Color-Clickability Contract
**If it's blue, it MUST be clickable. If it's not clickable, it MUST NOT be blue.**

- Buttons, links, CTAs, focus rings → brand color
- Headings, body text, labels → dark/neutral colors only
- Navigation text (default state) → dark, not brand color

### Visual Hierarchy (5 levels)
| Level | Role | Examples |
|-------|------|----------|
| L1 | THE thing | Hero headline, page title |
| L2 | Supports L1 | Section headings, CTA buttons |
| L3 | Details | Body text, descriptions |
| L4 | Supporting | Dates, captions, metadata |
| L5 | Ambient | Dividers, bg tints, borders |

### Button Hierarchy
- **Primary** (filled): MAX ONE per viewport. "Book Now", "Start Training"
- **Secondary** (outlined): Supports primary. "Learn More", "View Details"
- **Ghost** (text-only): Low emphasis. "Skip", "Cancel"
- Two buttons side-by-side: one primary + one secondary. NEVER two primaries.

### Section Background Rhythm
Never 2+ consecutive sections with the same background. Alternate: base → surface → base → accent → base.

### Quality Checklist
- [ ] Could this appear in a design agency portfolio?
- [ ] Blue = clickable, everywhere, always?
- [ ] Headings NEVER look like links?
- [ ] Does every section have clear L1/L2/L3 hierarchy?
- [ ] Is spacing consistent (tokens, not arbitrary)?
- [ ] Does the site feel like ONE designer made it?

## Research Backing

| Claim | Source |
|-------|--------|
| Typography conveys brand personality | Shaikh, Chaparro & Fox 2006; Grohmann 2016 |
| Color maps to brand dimensions | Labrecque & Milne 2012, JAMS |
| Saturation → excitement, brightness → competence | Labrecque & Milne 2012 Study 2 |
| Processing fluency → trust | Reber, Schwarz & Winkielman 2004 |
| Whitespace → perceived credibility | Lin & Hsieh 2011 |

---

**Origin:** WordPress `sculptclub-brand/BRAND-SPEC.md` + `DESIGN-SYSTEM-SPEC.md`
**Migrated:** 2026-03-29
**Legacy repo:** github.com/pmdevries-rgb/sculptclub-site (archived)
