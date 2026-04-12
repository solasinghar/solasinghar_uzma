# SolaSinghar by Uzma — CLAUDE.md

## Project Overview

**SolaSinghar by Uzma** is a single-page bridal salon website for a high-end Pakistani bridal beauty studio based near Java Road, Rawat, Islamabad.

- **Owner:** Uzma Malik
- **Location:** Near Java Road, Rawat, Islamabad, Pakistan
- **WhatsApp:** +44 7777399135
- **Founded:** 2008
- **Brides Served:** 700+
- **Award:** Winner — All Pakistan Bridal Competition (2010), award presented by the First Lady of Pakistan

### Services
- Bridal makeup (signature specialty)
- Mehndi (henna)
- Hair styling
- Party makeup

### Brand Identity
The aesthetic is **high-end, elegant, and rooted in Pakistani bridal culture** — think deep jewel tones (burgundy, gold, emerald), ornate patterns, and a luxurious editorial feel. Every design decision should evoke the richness of desi bridal tradition while remaining modern and aspirational.

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Astro | ^6.1.5 | Single-page (`src/pages/index.astro`) |
| Tailwind CSS | ^4.2.2 | Vite plugin (`@tailwindcss/vite`); CSS-first config — no `tailwind.config.js` |
| Node | >=22.12.0 | |

**Tailwind v4 note:** Configuration lives in CSS via `@import "tailwindcss"` and `@theme` blocks — do **not** create a `tailwind.config.js`. Custom tokens (colours, fonts) go in the `@theme` layer inside a `.css` file imported into `index.astro`.

---

## Project Structure

```
src/
  pages/
    index.astro        ← entire single-page site lives here
  styles/              ← global CSS (Tailwind imports + @theme tokens)
public/
  favicon.svg
  favicon.ico
  images/              ← downloaded/optimised placeholder images (if any)
```

All website content is on a single scrollable page (`index.astro`). Break the page into Astro components under `src/components/` as sections grow — e.g. `Hero.astro`, `Services.astro`, `Gallery.astro`, `Testimonials.astro`, `Contact.astro`.

---

## Page Sections (target layout)

1. **Navbar** — logo/wordmark, anchor links, WhatsApp CTA button
2. **Hero** — full-viewport, cinematic image, tagline, booking CTA
3. **About** — Uzma's story, 2008 founding, 700+ brides, award highlight
4. **Services** — Bridal Makeup · Mehndi · Hair · Party Makeup (card grid)
5. **Gallery** — masonry or grid of bridal photos (Unsplash placeholders)
6. **Testimonials** — bride quotes / reviews carousel or grid
7. **Award / Trust Badge** — All Pakistan Bridal Competition 2010, First Lady of Pakistan
8. **Contact / Booking** — WhatsApp link, address (near Java Road Rawat, Islamabad), inquiry form (static or Netlify Forms)
9. **Footer** — logo, nav links, social links, copyright

---

## Design Tokens (suggested, override in `@theme`)

```css
@theme {
  --color-brand-gold:    #C9A84C;
  --color-brand-burgundy: #7B1C2A;
  --color-brand-blush:   #F2DDD5;
  --color-brand-ivory:   #FAF6F0;
  --color-brand-charcoal: #1A1A1A;

  --font-heading: 'Cormorant Garamond', serif;  /* elegant editorial serif */
  --font-body:    'DM Sans', sans-serif;
}
```

Load fonts via a `<link>` in the `<head>` of `index.astro` (Google Fonts or Bunny Fonts).

---

## Images

Use **Unsplash** placeholder images until real photos are provided. Use descriptive search terms like:
- `Pakistani bridal makeup`
- `bridal mehndi henna`
- `bridal hair styling`
- `South Asian wedding`

Prefer `https://images.unsplash.com/photo-<id>?w=1200&q=80` URLs directly in `<img>` or Astro `<Image>` tags. Replace with real photography when available.

---

## Content & Copy Guidelines

- **Language:** English (with occasional Urdu words for warmth — e.g. "Dil se", "Shaan", "Riwayat")
- **Tone:** Warm, confident, aspirational. Speaks to brides and their families.
- **Key messages to weave in:**
  - "Trusted by 700+ brides since 2008"
  - "Award-winning artistry — All Pakistan Bridal Competition 2010"
  - "Your wedding day deserves nothing less than perfection"
  - Award presented by the First Lady of Pakistan (a strong credibility signal — always include)

---

## WhatsApp CTA

All booking CTAs should open WhatsApp directly:

```html
<a href="https://wa.me/447777399135?text=Hi%20Uzma%2C%20I%27d%20like%20to%20book%20a%20bridal%20consultation">
  Book via WhatsApp
</a>
```

---

## Commands

```bash
npm run dev      # start dev server (localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview production build
```

---

## Coding Conventions

- Use Astro components (`.astro`) for each page section — keeps `index.astro` clean.
- Tailwind utility classes only; no separate component CSS unless truly necessary.
- Responsive-first: mobile → tablet → desktop breakpoints.
- Prefer Astro's built-in `<Image>` component for optimised images where possible.
- No JavaScript frameworks (no React/Vue) unless a specific interactive feature requires it — keep the bundle lean.
- Animations: subtle CSS transitions or `@keyframes` only. Avoid heavy JS animation libraries.
