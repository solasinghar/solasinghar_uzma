# SolaSinghar Color Palette Reference

## Primary Brand Colors

### Burgundy Tones
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-burgundy` | `#7B1C2A` | Primary headings, CTAs, hero overlays |
| `--color-burgundy-deep` | `#4A0E18` | Dark accents, deep backgrounds |
| `--color-burgundy-light` | `#A32638` | Hover states, secondary accents |

### Gold & Champagne Accents ✨
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gold` | `#D4AF37` | Ornaments, dividers, icons, emphasis |
| `--color-gold-soft` | `#F1E5AC` | Champagne highlights, warm undertones |
| `--color-gold-deep` | `#B8860B` | Deep gold borders, gradients |
| `--color-gold-warm` | `#E8D4A8` | **NEW:** Champagne highlight accent |
| `--color-champagne` | `#F5E6D3` | **NEW:** Soft champagne text, backgrounds |
| `--color-rose-gold` | `#D4A574` | **NEW:** Rose-gold accent for jewelry imagery |

### Neutral Tones
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ivory` | `#FAF6F0` | Page background, light text on dark |
| `--color-ivory-warm` | `#FFFBF5` | Warm white option |
| `--color-charcoal` | `#0F0F0F` | Body text, headings on light |
| `--color-charcoal-soft` | `#4A4A4A` | **NEW:** Secondary text, lower emphasis |

---

## Color Combinations & Applications

### Hero Section
```
Background: Burgundy Deep (#4A0E18) with scrim
Text: Ivory (#FAF6F0)
Accents: Gold (#D4AF37), Champagne Soft (#F1E5AC)
```

### CTA Buttons
```
Background: Gold (#D4AF37)
Text: Charcoal (#0F0F0F)
Hover: Transparent with Gold border
```

### Testimonial Cards
```
Background: Ivory with 4% opacity over dark
Border: Gold soft (20% opacity)
Text: Ivory (82% opacity)
Quote mark: Gold (15% opacity)
Name: Gold emphasis (#D4AF37)
Event: Light gray (45% opacity)
```

### Section Dividers
```
Primary: Linear gradient from transparent → Gold → transparent
Thickness: 1px, 45% opacity
```

### Service Cards
```
Background: Charcoal or Burgundy
Text: Ivory / Champagne
Icons: Gold / Rose-gold
Borders: Gold soft
```

---

## New CSS Utility Classes

### Color Classes
```css
.accent-gold              /* color: #D4AF37 */
.accent-champagne         /* color: #F5E6D3 */
.accent-rose-gold         /* color: #D4A574 */
```

### Background Classes
```css
.bg-gold-overlay          /* background: rgba(212, 175, 55, 0.06) */
```

### Border Classes
```css
.border-gold-soft         /* border-color: rgba(212, 175, 55, 0.25) */
```

### Text Emphasis
```css
.text-gold-emphasis       /* color: #D4AF37, font-weight: 600, letter-spacing: 0.05em */
```

---

## Design System Philosophy

### **Modern Luxury × Riwayat** (Tradition)

The palette balances:
- **Deep jewel tones** (burgundy) → traditional Pakistani bridal richness
- **Warm metallics** (gold) → wedding jewelry authenticity
- **Champagne accents** → contemporary luxury and elegance
- **Clean neutrals** (ivory, charcoal) → editorial clarity

### Accessibility
- All text contrasts meet WCAG AAA standards
- Gold accents have sufficient contrast on light backgrounds
- Charcoal text reads crisp on ivory backgrounds
- Drop shadows added to white headings on textured images

---

## Implementation Examples

### Heading with Gold Emphasis
```html
<h2>
  In the words of 
  <em style="color: var(--color-gold);">our brides.</em>
</h2>
```

### Gold Shimmer Text (gradient)
```css
.gold-shimmer {
  background: linear-gradient(
    to right,
    #B8860B 0%,
    #F1E5AC 20%,
    #D4AF37 40%,
    #F1E5AC 60%,
    #B8860B 80%,
    #D4AF37 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 4s linear infinite;
}
```

### Champagne Overlay Background
```html
<div class="bg-gold-overlay">
  <!-- Content with champagne undertone -->
</div>
```

---

## Color Emotion & Culture

**Burgundy** (`#7B1C2A`)  
→ Deep, intimate, traditional bridal richness  
→ Pakistani wedding textiles & embroidery  
→ Trust, heritage, luxury

**Gold** (`#D4AF37`)  
→ Celebration, auspiciousness (Indian/Pakistani tradition)  
→ Wedding jewelry, ornaments, mehndi highlights  
→ Joy, prosperity, timelessness

**Champagne** (`#F1E5AC`, `#E8D4A8`)  
→ Modern elegance, warmth, accessibility  
→ Contemporary luxury, aspiration  
→ Bridges tradition with editorial sophistication

**Ivory** (`#FAF6F0`)  
→ Bridal purity, sophistication  
→ Canvas for ornate designs (like henna patterns)  
→ Light, breathable, welcoming

---

## Files to Reference

- **CSS Theme Definitions:** `src/styles/global.css` (lines 3-23)
- **Component Utilities:** `src/styles/global.css` (lines 104-118)
- **Used in All Components:** Navbar, Hero, Services, Testimonials, Contact, Footer

---

*Last Updated: May 17, 2026*
