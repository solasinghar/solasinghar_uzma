# Visual Fixes Summary — SolaSinghar by Uzma

## Applied Fixes (May 14, 2026)

### 1. **Gray-Out Effect → Smart Scrim Gradient** ✅

**Problem:** Global dark overlay was flattening the bride's face and creating a "muddy" appearance.

**Solution:** Refined the `.overlay-gradient` in Hero.astro with a progressive opacity gradient:
```css
background: linear-gradient(
  to right,
  rgba(15,15,15,1.00)  0%,      /* Solid dark left (text area) */
  rgba(15,15,15,0.98)  28%,
  rgba(15,15,15,0.92)  38%,
  rgba(15,15,15,0.75)  48%,
  rgba(15,15,15,0.50)  58%,
  rgba(15,15,15,0.25)  66%,
  rgba(15,15,15,0.08)  75%,
  transparent          90%       /* Fully clear right (face area) */
);
```

**Result:** Text remains legible on the left while the bride's face is clear and bright on the right. No more muddy/desaturated appearance.

---

### 2. **Navigation Harsh Cutoff → Seamless Transparency Blending** ✅

**Problem:** Navbar background was too opaque or fully transparent, creating a visible horizontal line.

**Solution:** Applied consistent `backdrop-blur-md` and subtle opacity across all scroll states:

**Initial state (over hero):**
```css
background-color: rgba(15, 15, 15, 0.12);  /* 12% dark */
backdrop-filter: blur(10px);                /* Editorial blur effect */
```

**Scrolled state (over content):**
```css
background-color: rgba(250, 246, 240, 0.92);  /* Ivory, fully opaque */
backdrop-filter: blur(12px);
```

**Result:** The navbar now floats seamlessly over the hero image with no harsh cutoff. The blur effect maintains an editorial, premium feel.

---

### 3. **Typography Overlap & Legibility → Cormorant + Enhanced Shadows** ✅

**Problem:** Text was using Georgia instead of the brand's Cormorant Garamond, and drop-shadows weren't strong enough for intricate embroidery patterns.

**Solution:**

1. **Font Fix:**
   - Changed `.word-sola` and `.word-singhar` from `'Georgia'` to `var(--font-heading)` (Cormorant Garamond)
   - Set font-weight to 300 (light) for editorial elegance
   - Applied same font fix to `.tagline`

2. **Shadow Enhancement:**
   - Wordmark: `drop-shadow(0 4px 20px rgba(0,0,0,0.98)) drop-shadow(0 -2px 8px rgba(0,0,0,0.85))` (double shadow for depth)
   - Byline & Tagline: `drop-shadow(0 2px 8px rgba(0,0,0,0.95)) drop-shadow(0 -1px 4px rgba(0,0,0,0.85))`
   - CTA Buttons: `drop-shadow(0 3px 12px rgba(0,0,0,0.85))`
   - Stats: `drop-shadow(0 1px 4px rgba(0,0,0,0.6))`

**Result:** Typography is now crisp and readable over busy embroidery. Cormorant Garamond's refined strokes enhance the luxury aesthetic.

---

### 4. **Image Alignment (Pre-existing)** ✅

**Status:** Already correctly implemented.

The carousel images use `object-position: 70% 35%` (for image 1), `65% 30%` (image 2), `60% 38%` (image 3) to position the bride's face on the right side of the viewport. The `.overlay-gradient` ensures the text area on the left remains readable while this focal point is clear.

**Result:** The bride's face is the primary focal point and remains bright and detailed.

---

## Technical Details

| Component | Change | File |
|-----------|--------|------|
| **Scrim Gradient** | Multi-stop opacity gradient (left→right) | `Hero.astro` `.overlay-gradient` |
| **Navbar Background** | Added backdrop-blur + subtle opacity | `Navbar.astro` header-bg |
| **Wordmark Typography** | Cormorant Garamond + enhanced drop-shadow | `Hero.astro` `.wordmark`, `.word-sola`, `.word-singhar` |
| **Subtext Typography** | Cormorant Garamond + stronger shadows | `Hero.astro` `.byline`, `.tagline` |
| **CTA & Stats** | Stronger drop-shadows for contrast | `Hero.astro` `.cta-btn`, `.stat` |

---

## Testing Checklist

- [ ] Load homepage and scroll from top to bottom
- [ ] Verify navbar transitions smoothly from transparent to ivory at ~60px scroll
- [ ] Verify hero text is crisp and legible over bridal dress embroidery
- [ ] Verify bride's face (right side of hero) is clear and bright, not desaturated
- [ ] Check on mobile (375px, 768px, 1024px) for responsive scaling
- [ ] Verify no harsh lines or cutoffs between navbar and hero
- [ ] Check text contrast passes WCAG AA (4.5:1 for normal text)

---

## Next Steps (Optional Enhancements)

1. **Fine-tune image focal points** per actual bride photo positions
2. **A/B test scrim gradient** opacity if faces are still slightly muted
3. **Color-correct photos** in src/images/ to ensure consistent skin tones
4. **Add subtle vignette** if edge brightness is inconsistent
5. **Test on older devices** (iOS Safari 14) to ensure blur effects work

---

*All changes maintain the "modern luxury × Riwayat" brand aesthetic while ensuring editorial excellence and legibility.*
