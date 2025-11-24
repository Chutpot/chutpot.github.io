# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/`: Route entries (`index.astro`, `about.astro`, `contact.astro`, `games.astro`, `games/[slug].astro`). Keep new pages in this folder and use kebab-case filenames for URL clarity.
- `src/layouts/`: Shared shells (`Base.astro`, `Page.astro`). Extend these instead of duplicating headers/footers.
- `src/content/games/`: Markdown game entries plus `config.ts` for collections. Keep slugs lowercase-kebab and co-locate images with the entry.
- `src/assets/`: Logos and shared art; prefer optimized SVG/PNG. Use `public/` for passthrough static files and CDN targets.
- `src/styles/global.css`: Global Tailwind v4 utilities and custom rules. Build output lands in `dist/` (do not edit).

## Build, Test, and Development Commands
- `npm install` — install deps.
- `npm run dev` — start local dev server (default http://localhost:4321).
- `npm run build` — production build into `dist/`.
- `npm run preview` — serve the built site for a pre-deploy check.
- `npm run astro -- check` — Astro diagnostics (routes, types, content collections). Run before committing.

## Coding Style & Naming Conventions
- Match existing files: 2-space indentation, ES modules, and concise imports.
- Components/layouts use PascalCase; routes and content slugs use lowercase-kebab.
- Favor layout/components over inline markup repetition; keep page-specific CSS minimal and in `global.css` when reusable.
- Tailwind v4: use utility classes; avoid ad-hoc style attributes when a utility exists.
- Asset naming: descriptive, lowercase-kebab (e.g., `cerebellum-vertical.png`).

## Testing Guidelines
- No automated test suite yet; gate changes with `npm run astro -- check` and `npm run build`.
- Manual smoke: load key routes (`/`, `/about`, `/contact`, `/games`, a sample `/games/<slug>`) in dev and preview; verify images from `src/assets` and `src/content` resolve.

## Commit & Pull Request Guidelines
- History favors short, imperative subjects (“Update Contact”). Follow that style; keep subjects under ~72 characters and include a scope when useful.
- For PRs: include a short summary, list of affected pages/components, screenshots for visual changes, linked issue (if any), and notes on manual checks (`dev`, `build`, `astro check`).

Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without me having to explicitly ask.
