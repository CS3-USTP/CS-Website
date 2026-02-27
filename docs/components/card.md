# Card Component

Reusable surface/chrome component for the CS website visual style (white panel, dark border, orangey offset plate, optional 3 dots).

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  CardWindowDots,
} from "@/components/ui/card"
```

## Purpose

Use `Card` as the base primitive for:

- navbar pills and icon chips
- hero containers
- section title bars
- objective/achievement tiles
- any panel with optional window-chrome dots

This component is token-driven via `app/globals.css` theme variables:

- `--color-panel-surface`
- `--color-panel-border`
- `--color-panel-plate`
- `--color-panel-dot-1`
- `--color-panel-dot-2`
- `--color-panel-dot-3`

## API Reference

### `Card` Props

In addition to normal `div` props (`className`, `id`, etc.), `Card` supports:

- `mode?: "default" | "decorative"`  
  - `default`: classic card style
  - `decorative`: panel style using panel theme tokens
- `size?: "default" | "sm"`  
  Controls spacing scale.
- `radius?: "sm" | "md" | "lg" | "xl"`  
  Corner radius preset.
- `border?: "default" | "none" | "thin" | "thick"`  
  Border treatment.
- `padding?: "compact" | "default" | "roomy"`  
  Affects spacing in `CardHeader`, `CardContent`, `CardFooter`.
- `headerDivider?: boolean`  
  Adds divider under header area.
- `interactive?: "static" | "hover" | "focus"`  
  - `hover`: slight lift on hover
  - `focus`: focus-within ring
- `plate?: boolean`  
  Adds orangey offset backing effect (implemented as tokenized shadow).
- `windowDots?: "none" | "visible"`  
  Toggles 3-dot chrome.
- `windowDotsPosition?: "left" | "right"`  
  Dot alignment inside top chrome area.
- `dotsPalette?: "default" | "muted" | "mono"`  
  Dot color set.
- `asChild?: boolean`  
  Uses Radix `Slot` to pass styling to a single child element.

### Slot Components

- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardAction`
- `CardContent`
- `CardFooter`
- `CardWindowDots` (standalone dots utility)

## Behavior Notes

- `asChild` requires exactly one child element.
- In `asChild` mode, decorative dot overlay is not injected as separate DOM nodes; use `windowDots="none"` or render dots in surrounding layout if needed.
- `plate` uses a tokenized box-shadow effect and works in both regular and `asChild` mode.
- `padding` is consumed by slot components through `data-*` selectors.

## Recommended Conventions

- **Navbar chips:** `mode="decorative" size="sm" padding="compact" radius="sm" border="thin"`
- **Hero panels:** `mode="decorative" radius="lg|xl" border="thin" plate windowDots="visible"`
- **Section title bars:** `mode="decorative" size="sm" padding="compact" plate`
- **Tiles/cards grid:** `mode="decorative" radius="lg" border="thin" interactive="hover"`

## Sample Usage

### 1) Navbar pill card

```tsx
<Card
  mode="decorative"
  size="sm"
  padding="compact"
  radius="sm"
  border="thin"
  plate
  interactive="hover"
  windowDots="none"
  asChild
  className="px-5 py-2.5 font-medium"
>
  <a href="/">Home</a>
</Card>
```

### 2) Hero panel with dots and plate

```tsx
<Card
  mode="decorative"
  radius="xl"
  border="thin"
  plate
  windowDots="visible"
  windowDotsPosition="right"
  dotsPalette="default"
  headerDivider
  className="pt-12"
>
  <CardHeader>
    <CardTitle className="text-3xl uppercase">
      Be at the Bleeding Edge of Computing
    </CardTitle>
  </CardHeader>
  <CardContent>{/* hero media/content */}</CardContent>
</Card>
```

### 3) Section title bar

```tsx
<Card
  mode="decorative"
  size="sm"
  padding="compact"
  radius="sm"
  border="thin"
  plate
  windowDots="visible"
  windowDotsPosition="left"
  className="items-center pt-10"
>
  <CardTitle className="px-6 pb-4 text-2xl uppercase">
    Program Objectives
  </CardTitle>
</Card>
```

### 4) Achievement tile

```tsx
<Card
  mode="decorative"
  radius="lg"
  border="thin"
  plate
  interactive="hover"
  windowDots="none"
  className="flex-row items-start gap-4 p-4"
>
  <div className="bg-panel-dot-3/50 border-panel-border size-24 rounded-xl border" />
  <div className="space-y-1">
    <h4 className="text-sm font-black uppercase">IEEE Xtreme Competitors</h4>
    <p className="text-muted-foreground text-xs">
      24-hour algorithmic marathon contenders...
    </p>
  </div>
</Card>
```

### 5) Standalone dots utility

```tsx
<CardWindowDots position="left" palette="muted" />
```

## Quick Troubleshooting

- **No plate effect visible**
  - Confirm `plate` prop is set.
  - Confirm `--color-panel-plate` is defined in `@theme inline`.
- **Dots not appearing**
  - Set `windowDots="visible"`.
  - If using `asChild`, prefer rendering dots in surrounding structure.
- **Unexpected spacing**
  - Check `size` and `padding` combinations.
  - Use slot `className` overrides for edge cases.

