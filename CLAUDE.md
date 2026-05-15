## 1. Project Overview

**SolaSinghar by Uzma** is a single-page bridal salon website for a high-end Pakistani bridal beauty studio.

| Field | Value |
|---|---|
| Owner | Uzma Malik |
| Location | Near Java Road, Rawat, Islamabad, Pakistan |
| WhatsApp | +44 7777 399 135 → `https://wa.me/447777399135` |
| Founded | 2008 |
| Brides served | 700+ |
| Award | Winner — All Pakistan Bridal Competition (2010), presented by the **First Lady of Pakistan** |

### Services (in order of prominence)
1. Bridal Makeup *(signature)*
2. Mehndi (henna)
3. Hair Styling
4. Party Makeup

### Brand identity
High-end, editorial, rooted in Pakistani bridal culture — deep jewel tones (burgundy, gold), ornate but disciplined. The vibe is **modern luxury × *Riwayat*** (tradition). Every design decision should evoke desi bridal richness while staying modern and aspirational.

---

## 2. Tech Stack (locked)

| Tool | Version | Notes |
|---|---|---|
| Astro | ^6.1.5 | Single-page (`src/pages/index.astro`) |
| Tailwind CSS | ^4.2.2 | Vite plugin (`@tailwindcss/vite`) — **CSS-first, no `tailwind.config.js`** |
| Node | ≥22.12.0 | |
| Sharp | ^0.33.5 | For Astro `<Image>` optimization |
| TypeScript | ^5.6.3 | Strict mode (extends `astro/tsconfigs/strict`) |
| @astrojs/check | ^0.9.4 | Used in `npm run build` |

**Tailwind v4 rule:** all design tokens live in `src/styles/global.css` inside `@theme {}` blocks. **Do not** create `tailwind.config.js`. Use utility classes (e.g., `text-gold`, `bg-burgundy`) instead of hardcoded `style` variables to ensure responsive compatibility and JIT engine support.

---

## 3. Project Structure

```
E:\Solasinghar\
├── astro.config.mjs            # Tailwind v4 Vite plugin
├── package.json                # Astro 6.1.5, Tailwind 4.2.2, Sharp, TS check
├── tsconfig.json               # extends astro/tsconfigs/strict
├── public/
│   ├── favicon.svg             # burgundy + gold mehndi-inspired star
│   └── robots.txt              # allow all + sitemap pointer
└── src/
    ├── images/
    │               # Local bridal archive (Replaces Unsplash)
    ├── pages/
    │   └── index.astro         # composes all sections + full SEO meta + JSON-LD
    ├── styles/
    │   └── global.css          # @theme tokens + base layer + component utilities
    └── components/
        ├── Navbar.astro        # Updated: backdrop-blur-md + bg-ivory/10 transparency
        ├── Hero.astro          # Updated: Local imports + Scrim gradient logic
        ├── About.astro         # legacy story · stat strip · signature
        ├── Services.astro      # 4-card grid: bridal · mehndi · hair · party
        ├── Award.astro         # First Lady's award + 700+ brides social proof
        ├── Gallery.astro       # editorial photo grid (Astro Image)
        ├── Testimonials.astro  # bride quote cards
        ├── Contact.astro       # WhatsApp · address · Google Maps embed
        └── Footer.astro        # brand · nav · socials · copyright
```

---

## 4. Design System & Visual Fixes

### 4.1 Palette (declared in `@theme {}` in `src/styles/global.css`)

| Token | Hex | Use |
|---|---|---|
| `--color-burgundy` | `#7B1C2A` | Primary brand, headings accent, CTAs |
| `--color-gold` | `#C9A84C` | Secondary brand, ornaments, dividers |
| `--color-ivory` | `#FAF6F0` | Page background, light text on dark |
| `--color-charcoal` | `#1A1A1A` | Body text, dark sections |

### 4.2 Hero & Nav Visual Corrections
* **The Scrim:** Replaced global dark image overlays with a CSS scrim: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)`. This ensures text legibility on the left while keeping the bride's face clear, bright, and detailed on the right.
* **Nav Transparency:** The Navbar uses `backdrop-blur-md` and `bg-ivory/10` when positioned over the Hero to eliminate the harsh horizontal "cutoff" line and blend seamlessly with the editorial background.
* **Typography Contrast:** Added `drop-shadow-sm` and verified weights (300/400) for white serif headings to ensure they remain crisp against intricate bridal embroidery textures.

---

## 5. Imagery & Asset Pipeline

- **Source:** All placeholders and Unsplash URLs are replaced by real photography from Uzma's archive stored in `src/assets/images/`.
- **Implementation:** Images are **imported** in component frontmatter to allow Astro's `<Image>` component to perform local optimization (Sharp).
- **Hero Carousel:** A 3-slide CSS `@keyframes` crossfade cycle (15s total). Slide 1 is set to `loading="eager"` and `decoding="sync"` for optimal LCP.

---

## 6. Content & Tone

### Tone
Warm, confident, aspirational. English with occasional Urdu words for authenticity (*Riwayat, Dulhan, Mehndi, Shaan*).

### Trust signals
- *"Trusted by 700+ brides since 2008"*
- *"Award-winning artistry — All Pakistan Bridal Competition 2010"*
- *"Award presented by the First Lady of Pakistan"*

---

## 7. WhatsApp Integration

**Single canonical number:** `+44 7777 399 135` → URL `https://wa.me/447777399135`.
Prefills contextual messages per CTA (e.g., *"Hi Uzma, I'd like to book a bridal consultation"* or service-specific enquiries).

---

## 8. SEO & Local Targeting

- **Primary Target:** "Best Bridal Makeup in Rawat & Islamabad".
- **Schema.org:** JSON-LD `BeautySalon` data including the Rawat address and the First Lady award.
- **Geo-Tags:** Metadata for Rawat, Islamabad, and Rawalpindi regions.

---



*This file is the single source of truth for the SolaSinghar build. Update it whenever architectural decisions change.*
