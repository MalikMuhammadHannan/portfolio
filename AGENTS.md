# ferion AI Agent Instructions

## What this project is
- A static single-page React application built with Vite 8 and Tailwind CSS v4.
- No backend, API, or database. The app is served as static HTML/CSS/JS.
- Source files live under `src/`, with UI composition in `src/App.jsx` and `src/main.jsx` as the React entry.

## Primary workspace conventions
- JavaScript + JSX only; no TypeScript.
- Uses Vite path alias `@/*` mapped to `./src/*` in `jsconfig.json` and `vite.config.js`.
- ESLint is configured via `eslint.config.js`; vendored UI primitives under `src/components/ui` are ignored by linting.
- Styling is handled in `src/index.css` with Tailwind v4 and CSS custom properties.

## Key source locations
- `src/App.jsx` — app composition root.
- `src/main.jsx` — React root entry.
- `src/components/` — primary UI components.
  - `src/components/layout/` — header, footer, navigation, theme toggle, dock.
  - `src/components/sections/` — page sections like Hero, About, Experience, Work, Blog.
  - `src/components/ui/` — vendored shadcn primitives and shared UI helpers.
  - `src/components/forgeui/` — adapted ForgeUI components.
- `src/data/` — site data and content for navigation, projects, social links, domains, etc.
- `src/hooks/` — custom hooks used for theme, scroll tracking, reveal effects.
- `src/lib/utils.js` — helper utilities such as `cn()`.

## Build and dev commands
- `npm run dev` — start Vite dev server.
- `npm run build` — production build.
- `npm run preview` — preview the production build.
- `npm run lint` — ESLint checks across the repo.

## Important guidance for AI coding agents
- Preserve the project’s static SPA nature; do not add backend APIs or server-side rendering.
- Keep UI updates within the existing React component hierarchy and data-driven content files when possible.
- Avoid refactoring vendored component primitives in `src/components/ui` and `src/components/forgeui` unless required.
- Use the README as the authoritative source for deployment and customization notes.

## Useful docs
- [README.md](README.md)
