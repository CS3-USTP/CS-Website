## Description

Implements a reusable decorative Card component for the CS website, supporting navbar pills, hero panels, section title bars, achievement tiles, and other panel-style surfaces. The component is token-driven via Tailwind theme variables and provides configurable props for dots, plate (orangey drop shadow), radius, border, padding, and interactive states.

### Changes

- **`components/ui/card.tsx`** — Extended with decorative mode, CVA variants, `CardWindowDots`, plate shadow, `asChild` polymorphism, and full prop API
- **`app/globals.css`** — Added panel theme variables (`--panel-surface`, `--panel-border`, `--panel-plate`, `--panel-dot-1/2/3`) and `@theme inline` mappings
- **`app/page.tsx`** — Card showcase page with navbar, hero, about program, program objectives, achievements, and prop variants examples
- **`docs/components/card.md`** — Comprehensive documentation with API reference, usage conventions, and sample code
- **`docs/README.md`** and **`docs/components/README.md`** — Docs index for component documentation
- **`.github/pull_request_template.md`** — PR template for future contributions

## Type of Change

- [x] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Checklist

- [x] My code follows the project's style guidelines (lint/format)
- [x] I have performed a self-review of my code
- [x] I have commented my code, particularly in hard-to-understand areas
- [x] I have made corresponding changes to the documentation
