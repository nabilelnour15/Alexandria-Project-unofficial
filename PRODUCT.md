# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A general city portal with no single lead audience; design trade-offs weigh all four equally:

- **Visitors and the curious:** planning a trip or learning about the city's 2,300-year history (About, Visit, Experience).
- **Residents:** finding bills, documents, emergencies, community places, events and traffic links (Live), and following city news (News).
- **Investors and professionals:** evaluating city projects and opportunities (Invest, Projects).
- **Readers of civic information:** who governs the city and what is being built (Governor, Projects).

## Product Purpose

"Alexandria – Digital Gateway" is an unofficial, fan-made guide to Alexandria, Egypt. It has two equal goals: to be a genuinely useful, accurate guide to the city, and to showcase its owner's (Nabil El-Nour) design and engineering craft. Success means a visitor trusts what they read, finds what they came for, and leaves with a sense of the city's layered history and its future.

## Positioning

A single, carefully sourced gateway that spans the ancient city, daily life and the city's future, where every headline figure carries its source, date and confidence. Official and commercial sites can't truthfully be both independent and sourced this openly; this one is explicitly unofficial and says so.

## Operating Context

- Static client-side SPA, deployed at https://alexandria-project-unofficial.vercel.app. No backend, no accounts.
- Content is kept current by GitHub Actions bots (news refresh every 3 days, data audit weekly) that open PRs into `main`; nothing publishes without the owner merging.
- Readers can report inaccuracies through GitHub issues ("Report an inaccuracy").
- Link previews are generated per route at build time for social sharing.

## Capabilities and Constraints

- Routes: `/`, `/about`, `/visit`, `/live`, `/invest`, `/projects`, `/governor`, `/news`, `/news/:id`, `/experience`, plus a 404.
- React 19 + TypeScript + Vite + Tailwind + shadcn/ui; content lives in `src/data/*.ts`, figures in `src/data/facts.ts`.
- Trust rules (binding):
  - Never present the site as official: no "Official" labels, `.gov.eg` contacts or governorate addresses.
  - No quotes put in the mouths of real officials or institutions.
  - Every headline figure comes from `facts.ts` with source, `asOf` and confidence; unsourced figures are removed or reworded, never invented.
  - AI-generated images carry the "Concept illustration — AI-generated" badge; real landmarks and people use real, credited photos, never AI likenesses.
  - A disclaimer shows as a dialog on first visit, then a slim banner.
- Open: the owner's public contact link in the footer is not yet decided.

## Brand Commitments

- Name: "Alexandria – Digital Gateway", always paired with the Arabic "الإسكندرية".
- Voice: plain, factual, sourced; never promotional on the city's behalf.
- The `.wall-of-scripts` texture's script set (Greek, Coptic, Arabic, Latin, hieroglyphs, no Hebrew) is the owner's decision; don't change it without asking.
- The existing palette and type choices are recorded in CLAUDE.md ("Pharos & Papyrus").

## Evidence on Hand

- Sourced facts and review dates: `src/data/facts.ts`; governor sources: `src/data/governorData.ts`.
- Real photos with credits: `public/images/`, `docs/image-credits.md`.
- AI concept image prompts: `docs/image-prompts.md`.
- Review and roadmap: `docs/site-review.md`, `docs/TODO.md`.
- No testimonials, partnerships, endorsements or official affiliations exist; never fabricate them.

## Product Principles

1. Accuracy before beauty: a fix to a fact or a trust problem outranks new design.
2. Say what's sourced and what isn't; uncertainty is shown, not hidden.
3. Serve every audience without letting any one page bury the others.
4. Respect every layer of the city's history; avoid kitsch and Orientalist cliché.
5. Craft is part of the purpose: the site should be worth showing as work.

## Accessibility & Inclusion

- WCAG 2.2 AA is required for all work.
- Full Arabic with RTL layout is planned (Phase 3); new work should not block it.
- Motion respects `prefers-reduced-motion`.
