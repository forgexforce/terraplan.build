# TerraPlan — Brand Guide

> Visual identity reference for TerraPlan. All colors are derived from the
> brand logo files in `/brand/logo/`.

---

## 1. Logo

**Assets** (`/brand/logo/`)

| File | Format | Use |
|------|--------|-----|
| `terraplan-horizontal-logo.svg` | Vector | Primary lockup — web headers, email signatures, documents |
| `terraplan-vertical-logo.svg` | Vector | Square/centered placements — social avatars, stamps, covers |
| `terraplan-horizontal-510x137.png` | Raster | Fallback where SVG is unsupported |
| `terraplan-vertical-260x260.png` | Raster | Avatar / favicon source |

**Mark.** A framed, stylized contour landscape — rolling terrain, fields, and
horizon lines. It signals *land, planning, and survey* in one glance.

**Wordmark.** "TERRA / PLAN" set in a clean, wide, geometric sans. Stacked in
the vertical lockup, inline in the horizontal lockup.

**Clear space.** Keep padding equal to the cap-height of the wordmark on all
sides. Nothing — text, imagery, edges — intrudes on that space.

**Minimum size.** Horizontal: 120 px wide (web) / 1 in (print). Vertical:
64 px wide (web) / 0.6 in (print).

**Don't.** Recolor outside the approved palette · stretch or skew · add shadows
or glows · rotate · place the green mark on a busy photo without a scrim ·
rebuild the wordmark in a substitute typeface.

---

## 2. Design Principles — Minimalism

TerraPlan's identity is **minimalist by discipline**. The logo itself proves
the point: one framed rectangle and a few clean contour lines — nothing more.
Every brand surface must honor that same restraint.

### The three rules

1. **Simple geometry.** Build layouts from basic shapes — rectangles, thin
   straight lines, and the framed-landscape motif drawn from the logo. No
   ornament, no gradients, no drop shadows, no glows. A single hairline rule
   replaces any decorative divider.

2. **Negative space is the design.** Whitespace is not empty — it is the
   luxury signal. Give the logo, headlines, and calls-to-action room to
   breathe. When in doubt, remove an element and add margin. Generous padding
   beats more content, every time.

3. **Limit the elements.** One idea per section. One accent color per screen.
   One typeface family. One primary action. If a surface carries more than a
   small handful of distinct elements, cut until it doesn't.

### How minimalism shows up

- **Layout** — wide margins, generous line spacing, a single clear column for
  reading. Everything aligns to one grid.
- **Color** — neutrals carry the page, green leads, one accent at most (see
  the usage ratio in §7).
- **Type** — a short type scale: a few sizes, two weights. No more.
- **Imagery** — calm landscape and survey photography with open sky or open
  ground, so the eye has somewhere to rest.
- **The logo motif** — the framed-contour rectangle may be reused as a quiet
  design device (a section marker, an image frame), but only as simple line
  geometry — never filled, never decorated.

### The test

Before shipping any brand surface, ask one question: **"Can I remove
something?"** If the answer is yes, remove it. Minimalism is not a polish step
applied at the end — it is the first decision.

---

## 3. Core Brand Colors

The logo uses **exactly two colors**. Everything else in this guide extends
from them.

| Token | Name | HEX | RGB | Role |
|-------|------|-----|-----|------|
| `--terra-pine` | Terra Pine | `#11723A` | 17, 114, 58 | Primary brand color — the terrain mark |
| `--terra-ink` | Terra Ink | `#010101` | 1, 1, 1 | Wordmark, headlines |

Terra Pine in HSL is `145°, 74%, 26%` — a deep, confident forest green.

> **Text note:** for body copy, use a softened ink (`#1A1A1A`) instead of pure
> `#010101`. It reduces eye strain on screens while reading identically as
> "black."

---

## 4. Tints & Shades

A usable scale built from the two core colors. Use the **600 / Ink-900** steps
as the true brand colors; the rest support UI states, hovers, and layout depth.

### Pine (green) scale

| Step | HEX | Suggested use |
|------|-----|---------------|
| Pine 900 | `#06351A` | Deep footers, overlays |
| Pine 800 | `#0A4A26` | Hover/pressed state of primary |
| Pine 700 | `#0E5D30` | Dark accents |
| **Pine 600** | **`#11723A`** | **Primary brand color** |
| Pine 500 | `#1C8A49` | Active links, highlights |
| Pine 400 | `#3BA967` | Charts, secondary accents |
| Pine 300 | `#6FC592` | Illustrations, soft accents |
| Pine 200 | `#A8DDBF` | Tags, badges, subtle fills |
| Pine 100 | `#DCF0E4` | Section tint, callouts |
| Pine 50  | `#F0F8F3` | Faint background wash |

### Ink (neutral) scale

| Step | HEX | Suggested use |
|------|-----|---------------|
| **Ink 900** | **`#010101`** | **Logo wordmark** |
| Ink 800 | `#1A1A1A` | Headlines & body text |
| Ink 700 | `#333333` | Strong secondary text |
| Ink 600 | `#4D4D4D` | Captions, labels |
| Ink 500 | `#6E6E6E` | Muted/placeholder text |
| Ink 400 | `#999999` | Disabled text |
| Ink 300 | `#C4C4C4` | Borders, rules |
| Ink 200 | `#E2E2E2` | Dividers, input outlines |
| Ink 100 | `#F2F2F2` | Light surfaces |

---

## 5. Complementary Colors

Color-theory partners to Terra Pine, for moments that need contrast (CTAs,
data viz, editorial accents). Use **sparingly** — green and ink carry the
brand; these are seasoning, not the meal.

| Relationship | Name | HEX | Notes |
|--------------|------|-----|-------|
| Direct complement (hue +180°) | Heritage Plum | `#72114A` | The mathematical opposite of Terra Pine. Rich, premium; good for rare editorial accents. |
| Complement of Terra Ink | Pure White | `#FEFEFE` | Black is achromatic — its functional complement is white. |
| Split-complement A (hue +150°) | Royal Indigo | `#11176E` | Calmer than the direct complement; pairs well for trust-signal UI. |
| Split-complement B (hue +210°) | Clay Red | `#6E1111` | Warm, earthy contrast; ties to "land/soil." |
| Triadic (warm, hue −120°) | Terra Sienna | `#733A11` | **Recommended accent.** A warm earth-brown that echoes the green's exact hue family — premium and on-theme for land. |

> **Recommendation:** of these, lead with **Terra Sienna `#733A11`** as the
> brand's warm accent. It is the most on-narrative (earth, terrain) and the
> most flexible. Reserve Heritage Plum for rare editorial flourishes only.

---

## 6. Inverse Colors

A true RGB inversion (`255 − value`) of each logo color. These are the
literal photo-negative of the brand. Use them deliberately — for dark-mode
experiments, "negative" art treatments, or unexpected campaign moments.

| Source | Source HEX | Inverse HEX | Inverse name |
|--------|-----------|-------------|--------------|
| Terra Pine | `#11723A` | `#EE8DC5` | Blossom Pink |
| Terra Ink | `#010101` | `#FEFEFE` | Inverse White |

**Inverse pairing:** Blossom Pink `#EE8DC5` on Inverse White `#FEFEFE`.
Soft and light — the visual opposite of the grounded core brand. Treat it as
an *experimental* palette, not a primary one. If used, restrict it to a single
campaign surface so it never competes with the core identity.

---

## 7. Recommended Website Palette

A curated, role-based set for the TerraPlan marketing site. Built for a
**high-end, concierge feel**: generous whitespace, warm neutrals, deep green
authority, and a restrained brass accent for luxury cues.

| Token | Role | HEX |
|-------|------|-----|
| `--canvas` | Page background (warm bone) | `#F8F6F1` |
| `--surface` | Cards, panels | `#FFFFFF` |
| `--section-tint` | Alternating section background (stone) | `#EFEDE5` |
| `--border` | Dividers, hairlines | `#E2E0D8` |
| `--primary` | Primary brand / buttons / links | `#11723A` |
| `--primary-deep` | Hover, footer, dark blocks | `#0A4A26` |
| `--text` | Headlines & body | `#1A1A1A` |
| `--text-muted` | Captions, secondary text | `#5C5C5C` |
| `--accent-brass` | Luxury accent — rules, icons, fine detail | `#B89150` |
| `--accent-sienna` | Warm earth accent — highlights, tags | `#733A11` |

### Why this palette

- **Warm bone canvas, not stark white.** Pure white reads as tech/clinical;
  bone reads as gallery, paper, and craft — the right register for a concierge
  service.
- **Deep green = authority.** Terra Pine carries headings, primary buttons,
  and key moments. It is the single loudest color on the page.
- **Brass = the high-end signal.** A thin brass rule under a headline or a
  brass icon stroke does more for "premium" than any amount of gold gradient.
  Keep it to fine detail; never fill large areas with it.
- **Sienna = the land tie-in.** Use for small accents that nod to soil,
  terrain, and earth without competing with the green.
- **Restraint is the brand.** On any given screen: one green, one neutral
  family, and at most one accent. White space is a feature.

### Suggested usage ratio

```
Neutrals (canvas + surface + text)  ~70%
Terra Pine (primary green)          ~22%
Brass + Sienna accents (combined)    ~8%
```

### CSS custom properties

```css
:root {
  /* Core */
  --terra-pine:    #11723A;
  --terra-ink:     #010101;

  /* Website palette */
  --canvas:        #F8F6F1;
  --surface:       #FFFFFF;
  --section-tint:  #EFEDE5;
  --border:        #E2E0D8;
  --primary:       #11723A;
  --primary-deep:  #0A4A26;
  --text:          #1A1A1A;
  --text-muted:    #5C5C5C;
  --accent-brass:  #B89150;
  --accent-sienna: #733A11;
}
```

---

## 8. Accessibility — Contrast

Approximate WCAG 2.1 contrast ratios. Verify final pairings before launch.

| Foreground | Background | Ratio | Verdict |
|------------|-----------|-------|---------|
| Terra Ink `#1A1A1A` | Canvas `#F8F6F1` | ~17 : 1 | Passes AA + AAA (all text) |
| Terra Pine `#11723A` | White `#FFFFFF` | ~6.0 : 1 | Passes AA (all text), AAA (large) |
| Terra Pine `#11723A` | Canvas `#F8F6F1` | ~5.7 : 1 | Passes AA (all text) |
| Terra Sienna `#733A11` | White `#FFFFFF` | ~9.0 : 1 | Passes AA + AAA (all text) |
| White `#FFFFFF` | Terra Pine `#11723A` | ~6.0 : 1 | Passes AA — safe for button labels |
| Brass `#B89150` | White `#FFFFFF` | ~2.9 : 1 | **Decorative only — not for text** |
| Brass `#B89150` | Terra Ink `#010101` | ~7.2 : 1 | Passes AA + AAA — safe for text on dark |

**Rule of thumb:** brass is a *detail* color. Put text in ink, pine, or
sienna. If brass must carry text, only do so on a dark (ink/pine) background.

---

## 9. Quick Reference

```
PRIMARY      Terra Pine      #11723A
INK          Terra Ink       #010101  (text: #1A1A1A)
ACCENT       Terra Sienna    #733A11
LUXURY       Brass           #B89150
CANVAS       Warm Bone       #F8F6F1
COMPLEMENT   Heritage Plum   #72114A  (rare editorial use)
INVERSE      Blossom Pink    #EE8DC5  (experimental only)
```
