# Shreekumar B — Portfolio (Vol. 02)

An editorial, magazine-style portfolio for **Shreekumar B**, AI systems builder.
Warm paper background, hairline rules, a giant serif display face, and CSS-only
"plate" visuals for each project. Built as a single scrolling page.

## Tech stack

- **Next.js 15** (App Router, `src/` directory) with **static export** (`output: "export"`)
- **TypeScript** (strict, no `any`)
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/app/globals.css`
  (no `tailwind.config.js`)
- **Framer Motion** for load, scroll, and clip-path animations
- **next/font/google** — Fraunces (display serif), Archivo (body), IBM Plex Mono (labels)
- No UI component library, no CMS, no state manager

## Project structure

```
public/                     portrait-square.jpg · portrait.jpg · landscape.jpg
src/
  app/
    layout.tsx              fonts, metadata, favicon, theme-color
    page.tsx                composes the sections
    globals.css            @theme design tokens + primitives
  components/               one component per section
    Masthead · Hero · PhotoBand · Manifesto · SelectedWork · Plate
    TechIndex · About · Contact · Cursor · Reveal · BackToTop
  data/
    projects.ts            typed array of the six projects (+ plate visuals)
    tech.ts                tech index groups + ticker items
```

All copy, project descriptions, tech lists, links, and captions live in `src/data`
and are rendered by mapping over typed arrays.

## Design tokens

Defined once in `globals.css` under `@theme` and consumed as Tailwind utilities:

| Token            | Value                     | Utility examples          |
| ---------------- | ------------------------- | ------------------------- |
| paper            | `#EEECE6`                 | `bg-paper`                |
| paper-2          | `#E6E3DB`                 | `bg-paper-2`              |
| ink              | `#161511`                 | `text-ink` `bg-ink`       |
| muted            | `#6F6B60`                 | `text-muted`              |
| faint            | `#A5A196`                 | `text-faint`              |
| moss             | `#2E4B34`                 | `text-moss` `bg-moss`     |
| hairline         | `rgba(22,21,17,.14)`      | `border-hairline`         |
| hairline-strong  | `rgba(22,21,17,.32)`      | `border-hairline-strong`  |

Fonts map to `font-serif`, `font-sans`, `font-mono`.

## Accessibility & motion

- Semantic `header` / `nav` / `main` / `section` / `article` / `figure` / `figcaption`
- Keyboard-accessible mobile menu (`aria-expanded`, Escape to close, focus management)
- Visible moss focus rings
- Hero headline can never be left stuck hidden — a 1600ms fallback forces the
  final visible state even if the rise animation never runs
- Everything respects `prefers-reduced-motion: reduce` (animations disabled,
  all content shown immediately, custom cursor hidden)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static export → ./out
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
```

The build must pass with zero TypeScript and zero ESLint errors.

## Deployment

The site is a fully static export in `./out`, deployable to any static host.

### GitHub Pages (automated)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
Because a project site is served from a sub-path, the workflow sets
`NEXT_PUBLIC_BASE_PATH=/Portfolio---v2` before building. Rename this if the repo
name changes.

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or run the workflow manually).

### Netlify / custom domain

Serve from the root — no base path needed.

- Build command: `npm run build`
- Publish directory: `out`

Leave `NEXT_PUBLIC_BASE_PATH` unset so routes and assets resolve from `/`.

## Images

The three photographs in `public/` are used directly via `next/image` with explicit
dimensions and real alt text. The studio portrait is intentionally high-contrast
black-and-white art direction on the warm paper background.
