---
name: Premium Minimalist System
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  price:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: auto
---

## Brand & Style

The design system is anchored in a philosophy of "Product as Hero." It draws heavily from Apple-inspired minimalism, prioritizing negative space and high-quality typography to create a calm, gallery-like shopping experience. By stripping away aggressive marketing banners and loud promotional colors, the system fosters a sense of luxury and trustworthiness.

The design movement is a blend of **Minimalism** and **Corporate Modern**. It relies on intentional layout structures where white space is not merely empty, but an active element used to group information and guide the user's eye. The tone is sophisticated and understated, appealing to a discerning audience that values clarity and technical precision over visual noise.

## Colors

The palette is strictly curated to maintain a premium aesthetic. The primary color, a Deep Black (#0F0F0F), is used for all core text and primary iconography to ensure maximum legibility and a sharp, high-contrast look against the White (#FFFFFF) background. 

The Soft Indigo (#6366F1) serves as a functional accent, reserved strictly for primary calls to action, active states, or subtle notification cues. This color should be used sparingly to maintain its impact. Muted Gray (#F5F5F5) provides a soft secondary surface for sectioning content or background fills for product tiles, while the Border color (#E5E5E5) defines structural boundaries without creating visual clutter.

## Typography

This design system utilizes a dual-font strategy to balance technical modernity with utilitarian readability. **Space Grotesk** is used for headlines to provide a distinctive, geometric character that feels innovative. Headlines (H1 and H2) are set in Bold to create a clear hierarchy.

**Inter** handles all functional text, including body copy and prices. For pricing, a semi-bold weight is applied to ensure it stands out within the product information hierarchy without requiring a different typeface. Line heights are generous—especially for body copy—to reinforce the airy, premium feel of the design system.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop, centered in the viewport with a max-width of 1280px. It utilizes a 12-column grid with 24px gutters. For mobile and tablet, the system transitions to a fluid model with 16px to 24px side margins.

A rigorous 8px spacing scale is used to maintain rhythmic consistency. Generous vertical padding (using the `xl` or `lg` units) should be applied between major page sections to prevent the layout from feeling cramped. Content should be grouped logically with tighter spacing (`sm` or `md`) and separated from other groups by significantly larger gaps to create a natural visual flow.

## Elevation & Depth

To maintain a minimalist and "flat" premium aesthetic, the design system avoids heavy, dark shadows. Depth is primarily conveyed through **Tonal Layers** and **Low-contrast Outlines**.

- **Level 0 (Base):** Pure white background.
- **Level 1 (Surfaces):** Light Gray (#F5F5F5) backgrounds for cards, input fields, or secondary sections.
- **Level 2 (Interaction):** Subtle, highly-diffused ambient shadows (0px 4px 20px rgba(0,0,0,0.04)) are used only for hovering over interactive elements like product cards or menu dropdowns.

Borders should be used sparingly, primarily to define the edges of input fields and buttons, using the #E5E5E5 shade to remain unobtrusive.

## Shapes

The shape language is consistently **Rounded**, reflecting a modern and approachable hardware-inspired look. A base radius of 8px (0.5rem) is applied to standard buttons and input fields. Larger containers, such as product cards and modals, should use a 16px (1rem) radius to feel substantial and high-end.

This curvature should be applied consistently across all UI elements, including image containers and selection states, to ensure a cohesive visual signature that feels intentional and soft.

## Components

### Buttons
Primary buttons are solid Deep Black (#0F0F0F) with white text and 8px rounded corners. Secondary buttons use a White background with a 1px border (#E5E5E5) or a soft Gray (#F5F5F5) fill. The Soft Indigo (#6366F1) is used only for the most critical action on a page, such as "Checkout."

### Input Forms
Fields are designed with a Light Gray (#F5F5F5) background and no border in their default state. Upon focus, they transition to a white background with a subtle 1px border in Deep Black. Labels sit above the field in 12px Inter Medium.

### Product Cards
Cards feature a minimal layout: a large image on a #F5F5F5 background, followed by the product name in 16px Inter and the price in 18px Inter Semi-bold. There are no visible borders on the card itself; the image container provides the structure.

### Navigation
The navigation is a clean, top-aligned bar with text-only links. It uses high whitespace and avoids icons except for essential utility functions (Search, Cart, Profile), which should be rendered in thin-stroke, minimal line art.

### Chips & Filters
Small tags used for categories or status should use a #F5F5F5 background with 14px Inter Regular text and a pill-shaped (full) radius. Active states use the Soft Indigo accent for the text color or a subtle bottom indicator.