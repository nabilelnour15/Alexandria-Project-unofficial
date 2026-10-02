# TODO: Alexandria – Digital Gateway

This list comes from the multi-agent review in [site-review.md](site-review.md). Tasks are grouped by phase and ordered so that earlier work isn't wasted. Priority: 🔴 critical · 🟠 high · 🟡 medium · 🟢 low.

## Phase 0: this week (fixes) ✅ done 2 Oct 2026

### Trust & data
- [x] 🔴 `src/components/Footer.tsx`: remove `info-unofficial@alexandria.gov.eg`, "Governorate Building" and `+20 3 XXX XXXX`.
- [ ] 🟡 `src/components/Footer.tsx`: add your own contact link (email or GitHub). This needs your choice of what to make public.
- [x] 🔴 `src/components/Footer.tsx`: change "© Alexandria. All rights reserved." to "© 2026 Nabil El-Nour – fan project, not affiliated with the Alexandria Governorate".
- [x] 🔴 `src/data/newsData.ts:19,37,55`: remove the fabricated quotes (Governor, Transport Authority, Dr. Ahmed Zayed).
- [x] 🔴 `src/data/governorData.ts:113` and `src/pages/GovernorPage.tsx:387`: remove the "Official Slogan" label.
- [x] 🔴 Governor: update to Ayman Mohamed Ibrahim Attia (sworn in 16 Feb 2026), or reframe Ahmed Khaled as "Governor 2024–2026".
  - Files: `governorData.ts`, `GovernorSection.tsx`, `GovernorPage.tsx` (including the "Milestones 2024-2025" heading at :298), `Hero.tsx`.
- [x] 🟠 Airports: El Nouzha has been closed since 2011. Fix "two international airports" in `investData.ts:15,23`, `Invest.tsx:45` and `Features.tsx:33`.
- [x] 🟠 `projectsData.ts:90`: change the tram wording to "one of the oldest tram systems (1863, electrified 1902)".
- [x] 🟠 `projectsData.ts:156,158` and `governorData.ts:81`: the first e-buses arrived in 2018. Make the fleet size the same in every file (15 vs 55).
- [x] 🟠 `newsData.ts:36`: the Raml tram is blue and cream, not yellow.
- [x] 🟠 `visitData.ts:30`: change the train fares from USD to EGP. Update or remove the "LE1" tram fare at `:56`.
- [x] 🟠 `src/sections/News.tsx:5-60`: delete the hard-coded teaser items. Build the section from `newsData` (`isHot` plus the latest 3) and link each card to `/news/:id`.
- [x] 🟠 `src/sections/Statistics.tsx`: fix "Annual Visitors" showing **2**.

### Images
- [x] 🟡 `src/pages/InvestPage.tsx:245`: change `/images/containers.jpg` to `containers.jpeg`.
- [x] 🟡 `src/data/projectsData.ts:144`: replace the Cairo Metro photo on the Abu Qir Metro project.
- [x] 🟡 `src/data/aboutData.ts:293`: use `Greco-Roman-Museum-in-Alexandria.jpg` for the Graeco-Roman Museum.
- [x] 🟠 Compress `public/images` (28 MB) to WebP/AVIF at 1600 px or less. Start with `Alexandria_Bibliotheca.jpg` (3.5 MB), `14298.png`, `PL.jpg` and `govanor.jpg`.
- [x] 🟡 Delete the 8 unused images: Alexandria-Opera-House, Antoniades-Gardens, Mahmoud-Said-Museum, flo-p-…-unsplash, hero-street, lighthouse-….avif, montaza-palace and unkown-memorial.
- [x] 🟡 Add `loading="lazy" decoding="async"` (done). `width`/`height` are still to do in Phase 1: to images below the fold.

### Routing & build
- [x] 🟠 `vite.config.ts`: change `base: './'` to `base: '/'`.
- [x] 🟠 Add an SPA rewrite rule for the host (for example `public/_redirects` or `vercel.json`).
- [x] 🟠 `src/App.tsx`: add `<Route path="*" element={<NotFoundPage/>}/>`.
- [x] 🟡 `vite.config.ts`: run `inspectAttr()` only in dev (`command === 'serve'`).

### Dead controls
- [x] 🟠 `src/sections/CTA.tsx:80`: make "Plan Your Visit" a `<Link to="/visit">`.
- [x] 🟠 Remove or hide the controls that do nothing:
  - Read More (`News.tsx:187`)
  - Explore Details (`Visit.tsx:327`)
  - Share and the tag chips (`NewsArticlePage.tsx:83,89`)
  - The navbar search and popular-search chips (`Navbar.tsx:159,177`)
  - The newsletter form (`News.tsx:255`)
  - The EN button (`Navbar.tsx:88`)

### Quick wins
- [x] 🟡 Add the two-language name "Alexandria · الإسكندرية" to the Navbar logo, the Footer brand and the Hero.
- [x] 🟡 Focus and contrast:
  - Add a global `focus-visible` ring.
  - Raise footer text from `white/40` to at least `/70`.
  - Make the 10px tags at least 12px.
  - Remove `outline-none` from the inputs.

### Done beyond the original list
- [x] Converted `14298.png` to `great-library-illustration.jpg` and `portOfAlexanrida.png` to `port-of-alexandria.jpg`. `public/images` went from 27.3 MB to 9.3 MB.
- [x] Deleted 4 more unused images (blog-festival, blog-culture, blog-sustainable, roman-amphitheatre).
- [x] Disclaimer title is now "Unofficial Fan Site"; "Official Heritage Guide" is now "Heritage Guide"; removed the unattributed project quote.
- [x] Hero: fixed the button-inside-link CTAs, added the Arabic name, corrected the stat labels. The nav link is now "Governance".
- [x] News: 41st festival edition, museum reopening dated 2023, no invented announcements.
- [x] 404 page, a share fallback, Escape closes the mobile menu, and `text-[10px]` is now `text-xs` everywhere.
- [x] Gemini image prompts are in `docs/image-prompts.md`. Abu Qir Metro shows a placeholder until `abu-qir-metro-concept.jpg` is generated.

## Phase 1: foundation ✅ mostly done 2026-10 (4 items left)

### App shell
- [x] 🟠 Layout route with `<Outlet/>` (Navbar, Footer, `ScrollToTop`, `DisclaimerPopup`). Remove the copies from the 9 pages.
- [x] 🟠 Remove the fake 2-second loader (`App.tsx:20-27`). Load each page with `React.lazy` and use `Suspense` as the loading fallback.
- [x] 🟠 `main.tsx`: wrap the app in `<MotionConfig reducedMotion="user">`.
- [x] 🟠 `Hero.tsx`: give the h1 a fixed accessible name and mark the `TypeAnimation` span `aria-hidden`.
- [x] 🟡 Add a skip link.
- [x] 🟡 `ProjectsHero.tsx`: change its `<h1>` to an `<h2>` so the home page has one h1.
- [x] 🟡 `About.tsx:420` and `InvestSections.tsx:398`: remove the nested `<main>`.
- [x] 🟡 Turn clickable `div`s into buttons or links: `ProjectCard.tsx:65`, `About.tsx:236`, `DidYouKnow.tsx:58`.
- [x] 🟡 Use the shadcn `Dialog` for the project modal and the disclaimer. Use the shadcn `Tabs` for the Visit, Governor and Invest tabs.
- [x] 🟠 SEO: add a meta description, an OpenGraph image (1200×630) and a favicon to `index.html`. Give each page its own `<title>` and `<meta>` (React 19).

### Tokens & cleanup
- [x] 🟡 Delete the dead code:
  - `Explore.tsx`, `Features.tsx`, `Statistics.tsx`, `DidYouKnow.tsx`, `Services.tsx`
  - `ServicesPage.tsx`, `App.css`, `use-mobile.ts`
  - The `/services` links in the Footer
- [x] 🟡 Remove the unused shadcn UI files and packages, then confirm with `npx depcheck`.
- [x] 🟡 `eslint.config.js`: ignore `src/components/ui`, or fix its 8 lint errors.
- [x] 🟠 Move the 413 hard-coded hex colours into Tailwind and CSS colour variables.
- [x] 🟠 Apply the "Pharos & Papyrus" palette:
  - Colours: `#0B3C5D`, `#0E1A24`, `#F4ECDC`, `#E8DFCC`, `#C49A3A`, `#A44A2F`, `#5FA8A0`
  - Tram yellow `#F2C230` for "live" signals only
- [x] 🟠 Fonts: Cormorant Garamond for headings, Inter or Open Sans for body text, Noto Naskh Arabic for Arabic. Remove the inline `font-['Montserrat']`.
- [ ] 🟡 Merge the 3 copies of `PlaceholderImage` into the shared one, with an `icon` prop.
- [ ] 🟡 Replace the 7 copies of the IntersectionObserver code with a `useInView` hook.
- [ ] 🟡 Move hard-coded content (nav links, footer, invest arrays, search terms) into `src/data`.
- [ ] 🟢 Use `@/` imports everywhere and add Prettier.

### Honest Ledger (trust layer)
- [x] 🟠 Create `src/data/facts.ts`: one value per figure, each with `source`, `asOf` and `confidence` (Official / Reported / Estimate).
- [x] 🟠 Make the repeated facts use one value each:
  - Corniche length, port share, Pompey's Pillar (26.85 m), Qaitbay (1477–1479), founding (331 BCE)
  - Metro capacity, tram ridership, population (about 5.6M)
- [x] 🟠 Fix the projects totals:
  - €2.65B vs €2.5B
  - "six" under construction (there are 4)
  - €506M vs about €180M
  - The "[Redacted]" placeholders
- [x] 🟠 Remove or add sources for: $40B GDP, the +15/22/18/28% growth figures, 2M+ visitors and 100+ events.
- [x] 🟡 Add a `SourceChip` component and a "Concept" badge for renders.
- [x] 🟡 Add "Last reviewed" and "Report an inaccuracy" to the footer and the article pages.
- [x] 🟡 Disclaimer: retitle it "Unofficial fan site", show the full dialog on the first visit, then a slim banner after that.
- [x] 🟠 **Decide:** label the news as "Illustrative sample", or replace it with real linked news. → **Decided: news section removed** until there is real content.
- [x] 🟠 Remaining inconsistencies found in review:
  - Population "nearly 7 million" (`InvestPage.tsx:~386`)
  - "Roads Built 200km" vs "rehabilitated" (`governorData.ts:~144`)
  - Mixed BC/AD and BCE/CE
  - "Qaitbey" (`investData.ts:~100`)
  - "Behind Al Nozha Airport" should read "former Al Nozha Airport"
- [x] 🟡 Unattributed quote blocks: `InvestPage.tsx:~384-390`, `aboutData.ts:~351`.
- [x] 🟡 News article 3, "Mediterranean Tech Summit", appears to be invented. Part of the news decision.
- [x] 🟢 Fix spelling: Mariout, SIBCO, Om Zagheiw, Karmouz. Standardise Montaza, Qaitbay, Anfushi, Abu Qir and Graeco-Roman.
- [x] 🟡 Install `@tailwindcss/typography` so the article `prose` classes work. Consider using markdown or DOMPurify instead of `dangerouslySetInnerHTML`.
- [x] Governor content now covers Eng. Ayman Mohamed Ibrahim Attia (since 16 Feb 2026), with a sources list. Portrait placeholder until an official photo is added (see `docs/image-prompts.md` §5).
- [x] Footer: "Project on GitHub" and "Report an inaccuracy" (GitHub issues) links, plus "Facts last reviewed".
- [x] Recharts split into a lazy `ClimateChart` chunk. The main bundle went from 1,003 kB to about 445 kB.
- [ ] 🟠 Add `public/images/og-image.jpg` (prompt in `docs/image-prompts.md`). `index.html` already references it.
- [ ] 🟡 Spot-check the Arabic-source governor facts (Al-Dostor, Al-Ahram) against the original articles.
- [x] Wall-of-scripts script set confirmed by the owner (no Hebrew; "EGYPT" added).

## Phase 2: signature features
- [ ] "Pharos to Future" scroll timeline from 331 BC to 2030, with every era represented and future items marked "planned".
- [ ] Projects dashboard: a funding-mix chart (EIB/AFD/EU/Government), a committed / identified / unfunded gauge, Vision 2030 goals linked to projects, and status filter chips.
- [ ] "Wall of scripts" texture on dark sections and the footer.
- [ ] One wave-scroll divider and inscription-style section labels.
- [ ] Dusk Corniche hero image with a Qaitbay silhouette.
- [ ] Footer links that jump to page sections (`/visit#transport`), with scrolling to those sections in `ScrollToTop`.
- [ ] Ctrl+K site search (`cmdk` is already installed).
- [ ] Calls to action that fit each page.

## Phase 3: later
- [ ] Layered city map: ancient coastline, today's Corniche and planned routes, with "indicative location" labels.
- [ ] Full Arabic with right-to-left layout (i18n, `dir="rtl"`, logical spacing utilities).
- [ ] Rising-sea climate story, only with IPCC AR6 sources.
- [ ] News search, category filters and sort, kept in the URL, once the news is real.
- [ ] Practical visitor info (hours, tickets, transport) with "data as of" dates.
- [ ] "Then / now / 2030" photos with credits and "Concept" badges.
- [ ] Cavafy lines between sections (Greek plus your own or a public-domain translation).

## Won't do (vetoed by the judges)
- Investor matching wizard (link to GAFI instead)
- Pharos loading screen
- Papyrus-unroll animation and Greek-numeral counters
- Mashrabiya and Coptic card corners
- Cinzel font
- A colour per historical era
- A "Le Phare d'Alexandrie" masthead
- Charts with no sources, renders without labels, counters with no date
