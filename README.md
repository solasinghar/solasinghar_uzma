# SolaSinghar by Uzma

A high-end, single-page bridal salon website for **SolaSinghar by Uzma** — an award-winning Pakistani bridal beauty studio near Java Road, Rawat–Islamabad.

> *Trusted by 700+ brides since 2008. Winner — All Pakistan Bridal Competition (2010), presented by the First Lady of Pakistan.*

---

## Tech stack

| Tool         | Version   | Notes                                                |
|--------------|-----------|------------------------------------------------------|
| Astro        | ^6.1.5    | Single-page site at `src/pages/index.astro`          |
| Tailwind CSS | ^4.2.2    | Vite plugin (`@tailwindcss/vite`) — **CSS-first** config |
| Node         | ≥22.12.0  |                                                      |

There is **no `tailwind.config.js`**. All design tokens (palette, fonts, motion) live in `src/styles/global.css` inside an `@theme {}` block, per Tailwind v4 conventions.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

---

## Project structure

```
.
├── astro.config.mjs            # Tailwind v4 Vite plugin + Unsplash image domain
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── pages/
    │   └── index.astro         # composes all sections + SEO meta + JSON-LD
    ├── styles/
    │   └── global.css          # @theme tokens + base + component utilities
    └── components/
        ├── Navbar.astro        # scroll-aware header, WhatsApp CTA, mobile menu
        ├── Hero.astro          # full-viewport editorial hero
        ├── About.astro         # legacy story · stat strip · signature
        ├── Services.astro      # 4-card grid (bridal · mehndi · hair · party)
        ├── Award.astro         # First Lady's award + 700+ brides social proof
        ├── Gallery.astro       # editorial photo grid (Astro Image)
        ├── Testimonials.astro  # bride quote cards
        ├── Contact.astro       # WhatsApp · address · Google Maps · hours
        └── Footer.astro        # brand · nav · socials · copyright
```

---

## Design tokens

Defined in `src/styles/global.css` under `@theme {}`:

- **Burgundy** `#7B1C2A`
- **Gold** `#C9A84C`
- **Ivory** `#FAF6F0`
- **Charcoal** `#1A1A1A`
- **Heading font:** Cormorant Garamond (editorial serif)
- **Body font:** DM Sans
- **Motion:** `--duration-luxe: 500ms`, `--ease-luxe: cubic-bezier(0.22, 1, 0.36, 1)`

Fonts are loaded from [Bunny Fonts](https://fonts.bunny.net) (a privacy-friendly Google Fonts mirror) in `index.astro`.

---

## WhatsApp booking

All booking CTAs route to:

```
https://wa.me/447777399135?text=...
```

Each service card prefills its own enquiry message.

---

## SEO

- Local-SEO meta targeting **"Best Bridal Makeup in Rawat & Islamabad"**.
- Schema.org `BeautySalon` JSON-LD with address, hours, services, award and `aggregateRating`.
- Open Graph + Twitter cards.
- `geo.position` and ICBM tags for Rawat, Islamabad.

---

## Content notes

- Imagery uses Unsplash placeholders via Astro's `<Image />` component (allow-listed in `astro.config.mjs`). Replace with real bridal photography when available.
- Copy weaves in occasional Urdu words — *Riwayat*, *Dulhan*, *Mehndi*, *Shaan*, *Rukhsati* — for warmth and cultural rootedness.
- Strong, repeated trust signals: 700+ brides since 2008, All Pakistan Bridal Competition 2010, First Lady of Pakistan.
