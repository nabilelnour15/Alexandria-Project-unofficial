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
- [x] 🟠 **Decide:** label the news as "Illustrative sample", or replace it with real linked news. → **Decided: news section removed** until there is real content. → **Done (2026-10):** back as `/news` "City briefing": real reports only, summarised in our words and linked to the outlet (`newsData.ts`, each claim re-verified).
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
- [x] 🟠 Add `public/images/og-image.jpg` (prompt in `docs/image-prompts.md`). `index.html` already references it. Done Oct 2026 with a real CC0 Wikimedia photo of Qaitbay at night (credit in `docs/image-credits.md`). It can be swapped for the AI version later.
  - [ ] Replace the placeholder domain `alexandria-unofficial.example` in the `og:image`, `og:url` and `twitter:image` tags in `index.html` once the site has its real URL.
- [ ] 🟡 Spot-check the Arabic-source governor facts (Al-Dostor, Al-Ahram) against the original articles.
- [x] Wall-of-scripts script set confirmed by the owner (no Hebrew; "EGYPT" added).

## Phase 2: signature features

- [ ] 🟠 Motion and scroll experience: follow `docs/motion-plan.md` ("The Pharos remembered": beam reveal, layered-city scroll story, tram progress bar).
  - Prototype built as a separate page at `/experience` (`src/pages/ExperiencePage.tsx`, `src/experience/`); the existing pages are unchanged. Still to do: browser QA, the real dusk photo and archival images, and deciding whether to promote it to the home page.
- [ ] "Pharos to Future" scroll timeline from 331 BC to 2030, with every era represented and future items marked "planned".
- [ ] Projects dashboard: a funding-mix chart (EIB/AFD/EU/Government), a committed / identified / unfunded gauge, Vision 2030 goals linked to projects, and status filter chips.
- [ ] "Wall of scripts" texture on dark sections and the footer.
- [ ] One wave-scroll divider and inscription-style section labels.
- [ ] Dusk Corniche hero image with a Qaitbay silhouette.
- [ ] Footer links that jump to page sections (`/visit#transport`), with scrolling to those sections in `ScrollToTop`.
- [ ] Ctrl+K site search (`cmdk` is already installed).
- [ ] Calls to action that fit each page.

### "Live here" page (`/live`): services guide, community, getting around
Residents' page alongside Visit (visitors) and Invest (business). Ideas taken from `alexandria-web-oasis`, rebuilt to fit the trust rules: we point people to the real provider and never do the transaction ourselves. One nav item, with shadcn `Tabs`: Services · Community · Getting around.

**Not doing (from Oasis):** fake "Apply now" or pay-bill flows, usage percentages and popularity stars, dead "Report an issue" buttons, suggestion votes, public-meeting sign-ups. Votes, comments and sign-ups would need a backend with auth, moderation and a privacy policy.

**Rule clarified (owner, Oct 2026):** linking *out* to an official portal as the place to go is fine. Showing government contact details as if they were the site's own is still banned.

- [ ] 🟠 Research and verify the content. This is most of the work. Check each link against the real provider and give it an `asOf`. Leave out any link we can't verify, the same rule as `unsourcedFigures`.
  - **Round 1 done (Oct 2026):**
    - 5 Sonnet research agents, then 24 claims re-checked by Haiku.
    - Data files now hold 14 services, 2 places and 4 recurring events, each labelled `Official` or `Reported`.
    - Fire is settled as **180**, from the Ministry of Interior page. 125 is the water hotline.
  - **Round 2 to-do:**
    - Official sources for ambulance 123 and the Ministry of Health hotline (105 or 15335; sources conflict).
    - Pages that need a browser (JavaScript only or certificate errors):
      - Digital Egypt service list
      - Telecom Egypt `my.te.eg`
      - Tax Authority e-invoicing
      - Alexandria Chamber of Commerce
      - Universal Health Insurance in Alexandria
    - Tram and buses: there's no official transport authority site. `alexapta.org` says it is **not official**, so never link it.
    - Places with no 2026 evidence: Jesuit Cultural Centre, Goethe-Institut, Gudran/Wekalet Behna, Resala, Red Crescent.
    - Not found at all: Institut français, Cervantes, makerspaces, public libraries.
    - Events with no organiser-published dates yet: the two film festivals. No current editions found for the marathon, the Biennale or the Song Festival.
    - Electricity via Fawry: the only source is from 2020, so it's left out until the provider's own page confirms it.
- [x] 🟠 `src/data/servicesData.ts`: `ServiceLink` with `title`, `titleAr`, `category`, `provider`, `channel` (online / in-person / phone), `url`, optional `howTo` steps and `asOf`.
  - No fees, processing times or popularity unless the provider publishes them, and then only through `factId` and a `SourceChip`.
  - Emergency numbers (police, ambulance, fire), each with a source.
  - "Report a problem" links to the real complaints channel and says plainly that we can't pass reports on.
- [x] 🟠 `src/data/communityData.ts`:
  - Places and organisations: cultural centres, libraries, volunteering groups, makerspaces.
  - Recurring events with a *typical month* and the organiser's link. Exact dates only when the organiser has published them. Hide past events at render time.
- [x] 🟠 `sections/Services.tsx` (with `isTeaser`: emergency numbers on the home page) and `sections/Community.tsx`.
  - Category filter chips plus a text filter, with the selection kept in the URL (`?cat=utilities`).
  - Cards show the provider, a channel badge, `ExternalLink` with "Opens [provider]'s site", and "Checked <month>".
- [x] 🟠 `pages/LivePage.tsx`: lazy route, `PageMeta`, one `h1`, a navbar item and footer links. Add a home-page teaser. The tab is kept in the URL (`?tab=`).
  - [ ] Browser QA at phone width. Window resizing didn't work during the Oct 2026 check, so only desktop was seen.
- [x] 🟡 "Suggest a place or event": a GitHub issue form (`.github/ISSUE_TEMPLATE/suggest-listing.yml`) linked the same way as "Report an inaccuracy" in `lib/factFormat.ts`. The owner reviews suggestions and adds them to the data file.
  - **Decide:** GitHub needs an account. If that's too much of a barrier, use a Tally or Google Form and add a privacy note.
- [ ] 🟡 `scripts/check-links.mjs`: a manual check that every outbound `url` still resolves. Run it at each "Last reviewed".
- [ ] 🟡 Getting around: live traffic, see the section below.

### Live traffic ("Getting around" tab on `/live`)
There's no open government traffic API for Alexandria, and Waze only shares data with partner cities.

- [x] 🟠 **Step 1 (no key, no cost):** done as `sections/GettingAround.tsx`: Google Maps traffic layer and Waze links centred on the city, plus tram and metro facts.
  - "Check live traffic" deep links to Google Maps and Waze for key corridors (Corniche, Mahmoudeya axis, desert road entrance).
  - A short transport section that reuses the sourced tram and metro facts from `facts.ts`.
- [ ] 🟡 **Step 2:** a live map using TomTom raster tiles: Map Display as the base and Traffic Flow on top. Free tier: 200K tiles a month for each.
  - Use Leaflet (light, about 40 kB gzipped). Lazy-load it like `ClimateChart` so the entry chunk stays clean.
  - Show the map only after a "Load live map" click, which saves quota and doesn't block first paint.
  - Mark it as live with a tram-yellow "Live" pill. Credit "Traffic data © TomTom" and add "Not an official source".
  - Restrict the API key to the site's domain (`VITE_TOMTOM_KEY`). If tiles fail or the quota runs out, fall back to the Step 1 links.
  - **Check first:** TomTom's terms on mixing with other base maps, key referrer restrictions, and how good Alexandria's flow coverage is (try the evaluation account).
- [ ] 🟢 TomTom Traffic Index figures for Alexandria (congestion level, time per 10 km) in `facts.ts` with `asOf`, shown as context next to the map.
- [ ] 🟢 Later: the DT4A / Transport for Cairo Alexandria GTFS (mapped 2022, 104 routes) for a static routes layer. Check the licence first. Possible overlap with the Phase 3 layered city map.

### Page redesigns (Oct 2026)
Done with the design skills (frontend-design, make-interfaces-feel-better, react-patterns): one signature element per page, editorial structure instead of the card kit, and no framer-motion on these pages.
- [x] About: a type-led hero with the city's names, and a chronicle with sticky years. The four dish images are now AI concept images, replacing hotlinked food photos.
- [x] Visit: a month-by-month climate table, with the recharts chart loading only when you click for it.
- [x] Invest: a "trade ledger" hero and a "Where to look next" section linking to GAFI.
- [x] Live here: emergency numbers as large type, with directory rows below.
- [x] Projects: a stage ledger with status filters and a "who is paying" view.
- [x] Governance: a dated record in office, each entry with its source (6 of 7 claims checked by the claim-verifier).
- [ ] 🟠 Browser QA at phone width for all six pages. Window resizing didn't work in this session.
- [ ] 🟡 Governance: the Al-Mandara bridge entry was removed because no source covers it. Add it back only with a link.
- [ ] 🟡 Governance portrait: Wikimedia Commons has nothing. Ask the governorate's media office for permission to use an official photo (with credit). Never use an AI likeness.
- [ ] 🟡 Electric Bus project: replace the hotlinked dailynewsegypt.com photo with a freely licensed one.
- [ ] 🟡 Visit climate: the figures cite "WMO" but have no `factId`, so they need a `facts.ts` entry. The same goes for the Invest figures with no `factId` (162.1k acres, the 1.96 coefficient, the 1.7M t sand reserve).
- [ ] 🟡 Invest: the stock images (`invest-*.jpg`, `white_sand.jpg`, `sodium_chloride.jpg`, `law_invest.jpg`) have no known source. Check whether they're licensed or AI. `invest-power.jpg`, which shows identifiable officials, is no longer used.
- [ ] 🟢 About: the Great Library image is a painting of unknown origin. It's captioned "Artistic reconstruction" for now; find its source.
- [ ] 🟢 Projects: "committed vs identified vs unfunded" needs sourced `facts.ts` entries before it can be built.
- [ ] 🟢 Deep links like `/about#explore` open at the wrong spot, because the route is lazy-loaded (see the ScrollToTop item above).
- [ ] 🟢 Dead code: `SectionTitle.tsx`, and `PlaceholderImage` (used only inside the commented-out Invest opportunities).
- [ ] 🟢 Live here: a native speaker should check the Arabic hero line «الحياة في الإسكندرية».

## Phase 3: later
- [ ] Layered city map: ancient coastline, today's Corniche and planned routes, with "indicative location" labels.
- [ ] Full Arabic with right-to-left layout (i18n, `dir="rtl"`, logical spacing utilities).
- [ ] Rising-sea climate story, only with IPCC AR6 sources.
- [x] News topic filter kept in the URL (`/news?topic=`). Search and sort can wait until there are more items.
- [ ] News: refresh `newsData.ts` monthly (source-researcher → claim-verifier). Optional home teaser of the latest 3.
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
