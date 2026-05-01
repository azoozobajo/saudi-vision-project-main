## Goal

Make **#9F3CA4** (plum) clearly visible across the site as a third brand color, alongside the existing Saudi green (primary) and gold (accent). Approach: **Option 1 + touch of Option 2** — plum lives in eyebrows, active states, and a hero accent, so it appears on every screen without overpowering green.

## Changes

### 1. `src/styles.css` — add plum tokens
- Add `--plum: oklch(0.50 0.20 327)` (≈ #9F3CA4) and `--plum-soft: oklch(0.93 0.04 327)` to `:root` and `.dark`.
- Register `--color-plum` and `--color-plum-soft` under `@theme inline` so Tailwind utilities work (`text-plum`, `bg-plum-soft`, `border-plum`).
- Update `.eyebrow` rule to use `var(--color-plum)` instead of gold — instantly puts plum on every section heading.
- Add a subtle plum radial-gradient layer to `.hero-pattern` so the hero background carries a visible plum glow blended with the green.

### 2. `src/components/proposal/Tabs.tsx` — active tab in plum
- Active tab underline + text color → `var(--color-plum)`.
- Hover state on inactive tabs → soft plum tint (`bg-plum-soft/40`).

### 3. `src/components/proposal/TopNav.tsx` — active nav link in plum
- The currently active section link gets a plum underline / plum text.

### 4. `src/components/proposal/SectionHeading.tsx` — plum gold-rule
- The small horizontal rule under section titles switches from gold to plum so every section header carries the color.

### 5. `src/lib/constants.ts` — plum in pillar rotation
- Replace one slot in `PILLAR_COLORS` with `var(--color-plum)` so charts and pillar cards naturally pick it up.

### 6. `src/components/proposal/ReadingProgress.tsx` — plum progress bar
- The reading-progress bar at the top of the page becomes plum (it's a thin always-visible element — a great place for a brand accent).

## Out of scope
- No changes to the primary green identity (buttons, hero text, footer band stay green).
- No changes to copy/content.
- Gold accents remain where they are; plum is added alongside, not as a replacement for gold.

## Result
Plum appears on: section eyebrows, section dividers, active tab, active nav link, reading-progress bar, hero background glow, and one pillar color. Visible on every screen without dominating the brand.
