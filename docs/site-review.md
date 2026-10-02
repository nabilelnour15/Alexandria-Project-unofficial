# Alexandria – Digital Gateway: Site Review & Improvement Plan

*Review date: 2 October 2026. No source files were changed during this review.*

## How this review was made

The review ran in two rounds of AI agents. Each round combined independent review, brainstorming and judging.

**Round 1** had five independent reviewers:

| Agent | Focus |
|---|---|
| Fact-checker | History, statistics, officials, news, contact details, image paths. Used web sources. |
| Heritage designer | Colours, fonts, motifs, storytelling and Arabic support that reflect 2,300 years of history |
| Future designer | Vision 2030, projects, data visualisation, the link from the ancient city to the future |
| UX & accessibility reviewer | Navigation, friction, mobile, accessibility, SEO, performance, trust |
| Technical reviewer | Lint, build, bugs, dead code, image sizes, routing |

**Round 2** had three judges. Each scored all 78 ideas, vetoed some, merged others and picked their top choices:

| Judge | Lens |
|---|---|
| Heritage curator | Authenticity and respect for every layer of the city; avoiding kitsch and Orientalist clichés |
| Urban strategist | Credibility; whether the future story is believable on an unofficial site |
| Engineering lead | Impact per hour for a solo developer; what order to do things in |

> **All three judges reached the same verdict independently: fix the facts and the trust problems before adding new design.** A beautiful page that carries invented facts disrespects the city.

---

## 1. Data check: fix first

### Critical

1. **The site looks like an official government site.**
   - `Footer.tsx` shows the email `info-unofficial@alexandria.gov.eg`, which is on the real government domain.
   - It also shows "Governorate Building", a placeholder phone number (`+20 3 XXX XXXX`) and "© Alexandria. All rights reserved."
   - **Fix:** use your own contact details and the line "Fan project – not affiliated with the Alexandria Governorate".
2. **Quotes are fabricated and attributed to real people.**
   - The Governor (`newsData.ts:19`) and the Bibliotheca Alexandrina's director, Dr. Ahmed Zayed (`newsData.ts:55`).
   - The "Head of the Public Transport Authority" (`newsData.ts:37`).
   - The "Official Slogan" label in `governorData.ts:113` and `GovernorPage.tsx:387`.
   - **Fix:** remove them, or replace them with sourced quotes that link to where they came from.
3. **The governor is out of date.** In the February 2026 rotation, **Ayman Mohamed Ibrahim Attia** replaced Vice-Admiral Ahmed Khaled. He was sworn in on 16 Feb 2026, according to [EgyptToday](https://www.egypttoday.com/Article/1/145084/New-Governors-and-Deputies-Sworn-in-Before-President-Abdel-Fattah).
   - **Fix:** rewrite the page for the new governor, or present the current one as "Governor 2024–2026".
   - Files: `governorData.ts`, `GovernorSection.tsx`, `GovernorPage.tsx`, `Hero.tsx`.

### High

4. **The news articles are fictional but presented as real.**
   - The festival article says it is the "40th edition", but the 41st ran on 2–6 Oct 2025.
   - The tech summit appears to be invented.
   - The Graeco-Roman Museum reopening is dated 2025, but it reopened in Oct 2023.
   - The bylines look invented.
   - **Fix:** label every article "Illustrative sample", or replace them with real news that links to its source.
5. **The home page news section has its own data.** `sections/News.tsx` hard-codes 5 *different* items, credited to "Culture Ministry" and "Tourism Board". Its cards don't link anywhere.
   - **Fix:** build this section from `newsData` and link each card to its article.
6. **Factual errors:**
   - **"Two international airports":** El Nouzha has been closed since 2011–12 (`investData.ts`, `Invest.tsx`, `Features.tsx`).
   - **"Oldest continuously operating electric tram (1863)":** the tram opened in 1863 as a horse-drawn line and was electrified in 1902.
   - **Electric buses:** the first ones arrived in **2018**, not 2023. The fleet is given as 15 in one file and 55 in another.
   - **Tram colours:** the Raml tram is blue and cream. The yellow trams are the city lines.
   - **Train fares** are given in USD ("$40"). Tickets are in EGP and cost a few dollars.

### Medium: the same fact has different values in different places

| Item | Values found |
|---|---|
| Corniche length | 19 km / 30 km / 117 km |
| Port share of Egypt's trade | 40% / 55% |
| Pompey's Pillar height | 25 m / 26.85 m (26.85 m is correct) |
| Qaitbay Citadel date | 1477 / 1480 (1477–1479 is correct) |
| Founding month | April / January 331 BCE |
| Abu Qir Metro capacity | 40,000/hr / 60,000/hr |
| Raml tram ridership | 450,000/day / 500,000/day |
| Projects total | €2.65B+ / "over €2.5B". The flagship projects add up to about €1.98B. |
| Projects "under construction" | "six" (only 4 have that status) |
| GCAP pipeline | €506M (the listed items add up to about €180M) |
| Annual visitors (`Statistics.tsx`) | shown as **2** |
| Population | "approx. 5M" (CAPMAS: about 5.6M). 5.6M is also mislabelled as "workforce". |

### Medium and low

- **Numbers with no source:** "$40B GDP", sector growth of "+15/22/18/28%", "2M+ visitors" and "100+ events". Add a source or remove them.
- **Wrong images:** the Abu Qir Metro shows a **Cairo** Metro photo, and the Graeco-Roman Museum shows the Roman theater.
- **Broken image:** `InvestPage.tsx:245` points to `/images/containers.jpg`, but the file is `.jpeg`.
- **Spelling:**
  - Mariout (not Marriout), SIBCO (not Seibco), Om Zagheiw, Karmouz.
  - Standardise Montaza, Qaitbay, Anfushi, Abu Qir, Graeco-Roman.

**Facts that were checked and are correct:**
- Founding in 331 BCE, planned by Dinocrates.
- The Pharos: about 280 BCE, over 100 m tall, fell in 1323.
- Pompey's Pillar: 26.85 m, around 297 CE.
- Kom el-Shoqafa: 2nd century CE.
- Montaza Palace: 1892.
- Bibliotheca Alexandrina: 2002, by Snøhetta.
- Abu Qir Metro: 21.7 km, 20 stations.
- Raml tram: 13.2 km, 24 stations.
- 2025 Mediterranean Capital of Culture.

---

## 2. Bugs, usability and code

### High priority

- **Inner pages break when refreshed.** `vite.config.ts` has `base: './'` and the app uses `BrowserRouter`. Refreshing or sharing `/news/1` loads a blank page. There is also no 404 page.
  - **Fix:** set `base: '/'`, add a rewrite rule on the host so every path serves the app, and add `<Route path="*">`.
- **Many buttons do nothing:**
  - Plan Your Visit (it points to `#visit`, which doesn't exist)
  - Read More, Explore Details, Share
  - The tag chips, the navbar search and its popular-search chips
  - The newsletter form and the EN button
  - **Fix:** connect each one or remove it.
- **The site is slow:**
  - Every visit has a fake 2-second loading screen.
  - All the code ships as one **1.07 MB** file.
  - The images add up to **28 MB**. `Alexandria_Bibliotheca.jpg` alone is 3.5 MB.
  - **Fix:** remove the fake loader, load each page's code only when it is opened (`React.lazy`), convert images to WebP/AVIF at 1600 px or less, lazy-load images further down the page, and delete the 8 unused images.
- **Accessibility:**
  - framer-motion animations ignore the visitor's reduce-motion setting.
  - The looping typing animation inside the `<h1>` keeps being re-read by screen readers.
  - Project cards and timeline cards are clickable `div`s, so they can't be reached by keyboard.
  - The project popup and the disclaimer popup don't work like proper dialogs (focus, Escape key, labels).
- **SEO:** `index.html` has only a `<title>`. There is no description, no OpenGraph preview image, no favicon, and every page has the same title.

### Medium priority

- The disclaimer pops up on every visit. Show it as a full popup the first time, then as a slim banner.
- Faint text: footer links at `white/40` and 10px grey tags fall below the 4.5:1 contrast ratio.
- There are two `<h1>`s on the home page, a `<main>` inside another `<main>`, and no skip link.
- The news page has no search, category filter or sort.

### Code health

- **Lint:** 8 errors, all in the generated `components/ui` files.
- **Build:** passes.
- 9 pages each repeat the navbar and footer. Use one layout route with `<Outlet/>` instead.
- 413 colour codes are typed directly into 17 files. Move them into shared colour variables.
- Unused code:
  - 5 section files, `ServicesPage`, `App.css` and `use-mobile.ts`
  - About 52 shadcn UI files and about 15 packages
- `PlaceholderImage` has been copied 3 times, and the same scroll-reveal code is repeated in 7 sections.
- `kimi-plugin-inspect-react` runs in the live build, not only during development.
- `@tailwindcss/typography` isn't installed, so the `prose` classes on news articles do nothing.

---

## 3. Heritage design: the judges' best picks

| Rank | Idea | Effort | Why it won |
|---|---|---|---|
| 1 | **"Pharos & Papyrus" colours and fonts**, plus Cormorant Garamond headings, Inter or Open Sans for body text, and Noto Naskh Arabic / Amiri for Arabic | M | The city's real materials (sea, limestone, papyrus). Gives the whole site an identity. |
| 2 | **Two-language name "Alexandria · الإسكندرية"** everywhere now; full Arabic with right-to-left layout later | S, then L | Very little work. The curator called an English-only heritage site a cultural failing. |
| 3 | **Bibliotheca "wall of scripts" texture**: many alphabets at about 4% opacity on dark sections and the footer | S–M | A real nod to the Bibliotheca's granite wall, not a cliché. |
| 4 | **Tram yellow `#F2C230` used only for "live" signals** such as breaking news, the active menu item and focus rings | S | A real city symbol with a clear meaning. |
| 5 | **"Then and now" archive photos**, each with a credit and a date | M | How museums present history. |
| 6 | **Cavafy lines between sections**: Greek original plus your own or a public-domain translation | S | The city's poet. Most English translations are still under copyright. |
| 7 | **One wave-scroll divider** (not the Greek key pattern everywhere) | S | Restraint keeps it from looking generic. |

**Proposed palette:**

| Name | Hex | Use |
|---|---|---|
| Mediterranean | `#0B3C5D` | Primary colour |
| Night-harbour ink | `#0E1A24` | Dark sections |
| Papyrus | `#F4ECDC` | Section backgrounds |
| Limestone | `#E8DFCC` | Cards and borders |
| Ptolemaic gold | `#C49A3A` | Accents and buttons |
| Terracotta | `#A44A2F` | Tags |
| Sea-glass | `#5FA8A0` | Hover states and links |
| Tram yellow | `#F2C230` | "Live" signals only |

**Rejected as kitsch or culturally off:**
- Mashrabiya and Coptic corners on cards (they mix traditions with no meaning)
- The papyrus-unroll animation
- Greek numerals on counters
- The Cinzel font ("toga party")
- A colour per historical era (Orientalist shorthand)
- The Pharos loading screen (the loader should be removed)
- A felucca icon (it's a Nile boat; use an Anfushi fishing boat)
- A "Le Phare d'Alexandrie" masthead. It was a real historical newspaper, so its name shouldn't go on fictional news.

---

## 4. Future design: the judges' best picks

| Rank | Idea | Effort | Why it won |
|---|---|---|---|
| 1 | **"Honest Ledger" trust layer.** Every figure carries a source, an "as of" date and a label (Official / Reported / Estimate). Concept renders get a "Concept" badge. Each page shows "Last reviewed" and "Report an inaccuracy". Every figure comes from one `facts.ts` file. | S–M | All three judges scored it 10/10. It stops the same fact having two values. |
| 2 | **"Pharos to Future" timeline.** One scrolling timeline from 331 BC to 2030 with these stops: Ptolemaic, Roman, Coptic, Jewish community (from the Septuagint to Eliyahu Hanavi), Arab conquest 641, Mamluk/Qaitbay, the cosmopolitan era with the 1863 tram, the Bibliotheca in 2002, then current projects. A light beam fills as you scroll; future items are dashed and marked "planned". | M | The single bridge between heritage and future. |
| 3 | **Honest projects dashboard**: project status filters, a chart of who funds each project (EIB / AFD / EU / Government), a gauge of committed vs identified vs unfunded money, and Vision 2030 goals linked to projects | S–M | Uses data the site already has and replaces the made-up €506M. |
| 4 | **Layered city map**: one SVG map with the ancient coastline and the Heptastadion, today's Corniche, and planned tram and metro routes marked "indicative location" | L | The curator's favourite (9/10). Do it later. |
| 5 | **Calls to action that fit each page** (Projects: "Follow progress"; Home: "See Alexandria 2030") | S | Low cost, once the buttons actually work. |

**Rejected or postponed for credibility reasons:**
- **The investor matching wizard.** It implies the site brokers deals. Use a static "where to look" guide linking to GAFI (the government investment agency).
- **Charts or a timeline chart without sourced numbers.** They make guesses look rigorous.
- **Before/after renders of planned projects,** unless they always carry a "Concept" badge.
- **Startup and youth statistics,** because there is no data.
- **Counters with no date.**

---

## 5. Roadmap

> The full TODO list, with one task per finding plus file paths and priorities, is in [TODO.md](TODO.md).

### Phase 0: this week (fixes)
- [ ] Footer: remove the government email, the placeholder address and phone, and change the copyright line
- [ ] Remove the fabricated quotes and the "Official Slogan" label
- [ ] Update the governor, or reframe the page as 2024–2026
- [ ] Fix the factual errors (airports, tram, e-buses, fares) and the wrong or broken images
- [ ] Build the home page news section from `newsData`
- [ ] `base: '/'`, a rewrite rule on the host, and a 404 page
- [ ] Compress the images and delete the unused ones
- [ ] Remove the dead buttons (connect them later)
- [ ] Run the inspector plugin in development only
- [ ] Two-language name "Alexandria · الإسكندرية"
- [ ] Focus rings and contrast fixes

### Phase 1: foundation
- [ ] **App shell:** one layout route, a skip link, page-by-page code loading instead of the fake loader, `MotionConfig reducedMotion="user"`, a title and description for each page
- [ ] **Tokens first:** delete the dead code, move the 413 colour codes into shared variables, add the new colours, fonts and tram yellow, and move hard-coded content into `src/data`
- [ ] **Honest Ledger:** a source label, a concept badge, "Last reviewed", "Report an inaccuracy", and a disclaimer shown as a popup once and then a banner
- [ ] Make every repeated fact use one value; fix spelling and transliteration
- [ ] Decide whether the news is labelled as sample content or replaced with real news
- [ ] Install `@tailwindcss/typography`

### Phase 2: signature features
- [ ] "Pharos to Future" timeline
- [ ] Honest projects dashboard: funding chart, pipeline gauge, Vision 2030 goals linked to projects, status filters
- [ ] "Wall of scripts" texture, the wave divider and inscription-style section labels
- [ ] Dusk Corniche hero image
- [ ] Footer links that jump to page sections; Ctrl+K site search

### Phase 3: later
- [ ] Layered city map
- [ ] Full Arabic with right-to-left layout
- [ ] Rising-sea climate story (only with IPCC-sourced figures)
- [ ] News search and filters (once the news is real)
- [ ] Practical visitor info with "data as of" dates; "then / now / 2030" photos

---

## 6. Open decisions

| Decision | Judges' views |
|---|---|
| **Full Arabic with right-to-left layout** | Curator 9/10 ("most Alexandrians read Arabic"); engineering lead 3/10 ("doubles every content change"). **Compromise:** two-language name now, full Arabic after the content is stable. |
| **Rising-sea climate story** | Curator 8/10 ("Alexandria's defining future story"); strategist 4/10 ("alarmist or greenwash unless fully sourced"). |
| **News content** | Label it as sample content (fast), or replace it with real news that links to sources (more credible). |
