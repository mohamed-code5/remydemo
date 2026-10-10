# Remy

Marketing site and product UI for **Remy** — the AI call center that answers
every call. Human-sounding voice agents that answer, qualify, and resolve calls
24/7, then hand off to your team with full context.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.
UI primitives come from [shadcn/ui](https://ui.shadcn.com) (Base UI style
`base-nova`); the navbar and hero are adapted from
[shadcnblocks.com](https://www.shadcnblocks.com) blocks.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Production build             |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project structure

```
src/
  app/
    layout.tsx        # Fonts, metadata, base shell
    globals.css       # Design tokens, animations, utilities
    page.tsx          # Landing page composition
  components/
    icons.tsx         # SVG icon set + logo
    ui.tsx            # App-level Button, Pill, Container, SectionHeader
    ui/               # shadcn/ui primitives (button, avatar, navigation-menu, sheet, accordion)
    Reveal.tsx        # Scroll-reveal wrapper
    landing/          # One component per landing section
```

> The `components/ui.tsx` file and the `components/ui/` folder coexist on purpose:
> `@/components/ui` resolves to the app-level helpers, while `@/components/ui/button`
> and friends resolve to the shadcn primitives.

## Design system

- **Theme:** premium dark, near-black canvas with a violet → cyan accent gradient
- **Type:** Space Grotesk (display) + DM Sans (body)
- **Surfaces:** glassmorphic cards, subtle grid backgrounds, soft glows
- **Motion:** respects `prefers-reduced-motion` throughout
