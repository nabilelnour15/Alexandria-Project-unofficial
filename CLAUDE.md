# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Alexandria - Digital Gateway": an unofficial fan-made portal/landing site for the city of Alexandria, Egypt. It is a purely static client-side SPA (React 19 + TypeScript + Vite 7 + Tailwind 3 + shadcn/ui). There is no backend, no API calls, and no test suite.

**Trust rules (do not regress):**
- The site must never present itself as official. Don't use "Official" labels, `.gov.eg` contact details or governorate addresses.
- Don't put quotes in the mouths of real officials or institutions.
- Every headline figure should come from `src/data/facts.ts`, which records source, `asOf` and confidence. Remove or reword figures with no source rather than inventing them.
- AI-generated images must carry the `ConceptBadge` ("Concept illustration — AI-generated"). Real landmarks and people use real photos with credit; never AI likenesses of real people.
- The disclaimer is a dialog on the first visit, then a slim banner (`lib/disclaimer.ts`).

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build     # tsc -b (type-check) then vite build -> dist/
npm run lint      # ESLint (flat config; src/components/ui is ignored)
npm run preview   # serve the production build (use it to test deep links)
npm run gen:image -- <name>.jpg   # Gemini image from docs/image-prompts.md -> public/images (--list, --prompt, --size, --force)
```

`gen:image` reads `GEMINI_API_KEY` from `.env.local` (gitignored; template in `.env.example`). Never give a key a `VITE_` prefix, because Vite bundles those into the public site. Never ask for the key in chat. Add new prompts to `docs/image-prompts.md` first, and check every result for text, logos or faces before using it.

No test framework is configured. `npm run build` type-checks: `tsconfig.app.json` is strict with `noUnusedLocals`/`noUnusedParameters`, so unused imports or props break the build. Lint should stay at 0 errors.

## Architecture

- **Routing:** `src/main.tsx` wraps `App` in `<MotionConfig reducedMotion="user">`. `src/App.tsx` puts every route under `<Route element={<Layout/>}>`.
  - `components/Layout.tsx` provides the skip link, `ScrollToTop`, `Navbar`, `<main id="main-content">` with `Suspense` (`Loading` is the fallback) around `<Outlet/>`, `Footer`, and the disclaimer dialog or banner.
  - Pages are `React.lazy` chunks: `/`, `/about`, `/visit`, `/invest`, `/projects`, `/governor`, plus a `*` route for `NotFoundPage`.
  - The navbar is transparent over dark heroes (`/`, `/about`, `/invest`) and solid on other pages.
- **Pages vs sections:**
  - `src/pages/*Page.tsx` don't render Navbar, Footer or `<main>`; Layout does.
  - Each page renders `PageMeta`, which sets the React 19 `<title>` and meta description.
  - Pages compose components from `src/sections/`. Some sections (`About`, `Visit`, `Invest`) take an `isTeaser` prop: `HomePage` shows the short version and the dedicated page shows the full one. `ProjectsHero` takes `headingLevel`, so each page has exactly one `h1`.
- **Content lives in `src/data/*.ts`.** Change content there, not in the components.
  - `facts.ts` is the single source for figures: `facts`, `unsourcedFigures` and `LAST_REVIEWED`.
  - Data items reference facts with optional `factId` or `specFactIds`, and components render a `SourceChip` next to those figures.
  - `governorData.ts` covers the current governor (Ayman Mohamed Ibrahim Attia, since Feb 2026), with a `sources` list and an `asOf` date.
  - Re-verify these when they change.
- **Feedback links:** `lib/factFormat.ts` holds the "Report an inaccuracy" URL (GitHub issues) and formats `LAST_REVIEWED`. `FactsNote` shows them on the Projects and Invest pages.
- **Heavy dependencies:** recharts is only used by `sections/ClimateChart.tsx`, which is lazy-loaded. Keep heavy libraries out of the main chunk.
- **Dialogs, tabs and popovers:** use the shadcn `Dialog`, `Tabs` and `Popover` in `components/ui/` (only `button`, `dialog`, `tabs` and `popover` remain). `SourceChip` is built on the Popover. The first-visit dialog is lazy-loaded; the banner lives in `Layout`.
- **Entry chunk:** keep framer-motion and Radix out of the entry chunk. `Loading` is a pure CSS spinner. Add others with the shadcn CLI as needed. Don't use clickable `div`s.
- **Vite config:**
  - `base: '/'` is required for `BrowserRouter` deep links; `public/_redirects` and `vercel.json` add the SPA fallback.
  - The `@` alias points to `src/`.
  - `kimi-plugin-inspect-react` is enabled only for `vite serve`.
- **Images:**
  - Files live in `public/images/` and are referenced as `/images/...`. Keep them compressed (≤1920px, JPG quality ≈80).
  - `docs/image-prompts.md` holds the Gemini prompts for concept images and the governor-portrait guidance.
  - Add `loading="lazy" decoding="async"` to images below the fold.
  - Record every real photo's author, licence and source in `docs/image-credits.md`.

## Styling conventions

- `src/components/ui/` is generated shadcn/ui code ("new-york" style). Avoid editing it for one-off page styling.
- Theme tokens are CSS variables in `src/index.css` and are consumed by `tailwind.config.js`. Use the named brand tokens instead of arbitrary hex classes like `bg-[#...]`.
- The brand palette is "Pharos & Papyrus":
  - sea `#0B3C5D`
  - ink `#0E1A24`
  - papyrus `#F4ECDC`
  - limestone `#E8DFCC`
  - gold `#C49A3A`
  - terracotta `#A44A2F`
  - sea-glass `#5FA8A0`
  - tram yellow `#F2C230`, used only for "live" signals such as active nav and focus
- Fonts: Cormorant Garamond for headings, Open Sans for body text, Noto Naskh Arabic for `[lang=ar]`.
- Signature texture: `.wall-of-scripts` in `src/index.css`. Its script set is the owner's decision: Greek, Coptic, Arabic, Latin (including "EGYPT") and hieroglyphs, and **no Hebrew**. Don't change it without asking.
- Design reviews rejected: Cinzel, mashrabiya or Coptic card ornaments, papyrus-unroll animations, Greek numerals, a colour per era, and ALL-CAPS eyebrows on every heading.
- Animations use `framer-motion`, and must respect reduced motion. Icons come from `lucide-react`. Merge class names with `cn()` from `@/lib/utils`.

## Tooling (global, from ECC)

A curated ECC set is installed globally. The list is in `~/.claude/ecc-curated.md` and the source is in `~/tools/ECC`. Use these for this project:

| When | Use |
|---|---|
| After any change, before committing | `verification-loop` skill (build, type-check, lint, security grep, diff review). Then a `typescript-reviewer` or `react-reviewer` agent on the diff. |
| UI work: new sections, timeline, map, dashboard | `make-interfaces-feel-better` + `react-patterns`, then the `frontend-design` plugin for direction. Run the `design-system` skill to audit token and colour consistency against "Pharos & Papyrus". |
| Accessibility checks | `frontend-a11y` while building. `accessibility` skill or `a11y-architect` agent for WCAG 2.2 AA audits. |
| Before deploys, and after merging to `production` | `browser-qa` (claude-in-chrome: console errors, three breakpoints, axe) and `production-audit`. |
| SEO and share previews | `seo` skill or `seo-specialist` agent (meta, OG image, sitemap/robots, structured data for landmarks). |
| Bundle size and speed | `react-performance` + `vite-patterns`, or the `performance-optimizer` agent. |
| Arabic / RTL (Phase 3) | `i18n-sync` for locale files. |
| Dead code and duplicates (remaining Phase 1 items) | `refactor-cleaner` agent. |
| Build failures | `build-error-resolver` agent. |
| Too many tools loaded | `context-budget` skill. |
| Researching content for `src/data` | Project agents in `.claude/agents/`: `source-researcher` (sonnet, medium) finds entries with evidence, one category per agent, run in parallel. Then `claim-verifier` (haiku, low) re-checks each `{claim, url}`. The main session merges the results and asks the owner about every conflict. The researcher reads pages through the NotebookLM MCP (`gemini-notebook-mcp`, local scope, unofficial, `nlm login`), which keeps them out of Claude's context. It falls back to WebFetch when the MCP isn't available. |

## Content bots (GitHub Actions)

- `news-refresh.yml` runs every 3 days and `data-audit.yml` runs every Monday; both can also be started by hand from the Actions tab. Their instructions are in `.github/prompts/`.
- A read-only job runs `claude-code-action` (Sonnet orchestrating `source-researcher`, `news-writer` and `claim-verifier`) and hands over only a patch limited to `src/data`. `bot-pr.yml` then applies it, builds, lints and opens or updates a PR into `main` (branches `bot/news-refresh` and `bot/data-audit`). Nothing is published without the owner merging.
- `scripts/check-links.mjs` checks every URL in `src/data` before the audit, so Claude only looks at failures.
- Setup: the `ANTHROPIC_API_KEY` repository secret, and *Settings → Actions → General → Allow GitHub Actions to create and approve pull requests*. Schedules run only once the workflow files are on `production` (the default branch).

## Docs

`docs/site-review.md` and `docs/site-review.html` hold the review and the judged ideas. `docs/TODO.md` holds the phased task list. Update TODO.md when you finish items.

## Branches

Work happens on `main`. `production` is the PR target branch.
