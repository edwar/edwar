---
name: Edwar Amaya Portfolio
description: A developer portfolio played straight at the Josh Comeau / Brittany Chiang tier - neutrals and one forest-green accent sampled from the photo, a variable-type name as the craft demonstration.
colors:
  bg-light: "oklch(0.982 0.006 125)"
  surface-light: "oklch(1 0.002 125)"
  surface-2-light: "oklch(0.96 0.01 135)"
  line-light: "oklch(0.88 0.015 140)"
  ink-light: "oklch(0.2 0.02 150)"
  ink-muted-light: "oklch(0.44 0.025 150)"
  accent-light: "oklch(0.46 0.09 150)"
  accent-soft-light: "oklch(0.93 0.035 145)"
  bg-dark: "oklch(0.17 0.012 150)"
  surface-dark: "oklch(0.21 0.015 150)"
  surface-2-dark: "oklch(0.26 0.018 150)"
  line-dark: "oklch(0.33 0.02 150)"
  ink-dark: "oklch(0.96 0.008 130)"
  ink-muted-dark: "oklch(0.76 0.02 140)"
  accent-dark: "oklch(0.8 0.13 150)"
  accent-soft-dark: "oklch(0.42 0.06 150)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.surface-light}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
---

# Design System: Edwar Amaya Portfolio

## Overview

**Creative North Star: "The Open Workshop."** A developer portfolio at the best-in-class standard, played straight: personal, extremely legible, work forward, motion restrained. It is the category's conventions executed at full craft, not a costume. The one authored moment is the name in the hero: a variable font whose weight and width respond to the pointer, which demonstrates typographic and interaction craft in the first viewport without hiding the contact action.

Physical scene: a founder or hiring manager skimming several candidates between meetings on a laptop in a lit office, and a developer peer who may open DevTools. Both themes are designed equally; the system preference decides.

**Key characteristics:** neutral scale tinted toward the green of the photo's jacket; a single accent; flat tonal layering with hairline borders; two type families; generous vertical rhythm; one entrance style; everything keyboard-reachable.

**Anti-references:** the previous look (dark ground, fuchsia-pink gradient, bento cards, tilt and elastic effects), gradient text, glass decoration, icon-heading-text card grids as page structure.

## Colors

Restrained strategy: neutrals plus one accent used for links, the primary action, focus rings and the active nav item. Neutrals are tinted toward hue 150, sampled from Edwar's photo (olive jacket #253328, charcoal shirt, navy jeans, warm skin).

- **Ink / Ink Muted:** body and secondary text. Ink Muted still passes 4.5:1 on every surface.
- **Bg / Surface / Surface 2:** page ground, raised content, recessed panels. Layering is tonal, not shadowed.
- **Line:** 1px hairlines for cards and dividers.
- **Forest-green accent:** deep forest green on light, light sage-green on dark. Text on a filled accent is the surface color in light and the dark ground in dark. Accent Soft is the only tint for hover fills and the hero photo panel (pale sage on light, mid green on dark so the dark jacket stays separated).

## Typography

Display and headings use Bricolage Grotesque (variable, weight 200-800 and width 75-100). Body and UI use Hanken Grotesk. Body measure 65-70ch, display max 6rem, tracking never below -0.04em, headings balanced.

## Layout

12-column container, max 72rem, 16px gutters on mobile and 24px from `md`. Vertical rhythm 96px between sections on desktop, 64px on mobile, more space above a heading than below it. Projects split into two structures: three larger cards for company and client work, then a dense two-column list of rows (thumbnail left, text right) for own products.

## Elevation & Depth

Flat. Cards sit on Surface with a Line border; hover raises the border to Accent and nothing else moves except the thumbnail zooming 3 percent. The sticky header gains a soft shadow after scroll.

## Shapes

12px radius on cards and buttons, 8px on chips and inputs, 20px on the hero photo panel. No pill buttons except the language and theme toggles.

## Components

- **Buttons:** primary is solid Accent, secondary is Surface with a Line border. Visible 3px focus ring in Accent with 2px offset.
- **Project card/row:** the title is the link; its hit area is stretched over the whole card. Stack shown as text chips (name + small icon), never icons alone.
- **Header:** wordmark left, section links, language and theme toggles, and a Contact button; collapses to a menu panel under `md`. The current section link carries `aria-current`.
- **Hero name:** each letter is a span; weight and width interpolate by pointer distance. Reduced motion renders it static at weight 700.

## Do's and Don'ts

- Do keep the accent to links, the primary action, focus and active state.
- Do keep project text at 4.5:1 or better in both themes.
- Do keep one entrance: elements rise 16px and fade once.
- Don't add gradients, glass, tilt, elastic or magnetic effects.
- Don't show tech icons without names; monochrome logos sit on a light tile in dark mode.
- Don't re-pick the accent without re-sampling the photo: the palette follows it.
- Don't invent clients, metrics or testimonials.
