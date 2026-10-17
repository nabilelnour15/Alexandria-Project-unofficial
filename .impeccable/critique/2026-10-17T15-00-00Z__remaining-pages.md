---
target: live, invest, projects, governor, news, news post, experience, 404
timestamp: 2026-10-17T15-00-00Z
slug: remaining-pages
scores: { live: 28, invest: 27, projects: 30, governor: 31, news: 31, news-post: 32, experience: 24, not-found: 22 }
max_score: 40
p0_count: 0
p1_count: 6
---
Method: manual code review. Impeccable is not installed, so the detector and the second agent did not run, and there was no rendered pass. Scores use the same 10 heuristics as the home, About and Visit reports. Only the scores and the key issues are listed per page.

## Site-wide patterns (fix once, helps every page)

1. **[P1] The tram story is inconsistent across the site.** Visit now says the trams stopped in 2026. The Live page "Getting around" tab still lists the Raml tram as a running service (opened 1863, length, stations) with no mention of the suspension (`GettingAround.tsx:77-84`). Projects gives the tram's timeline as "2026-2027", but sources report reopening in 2027-2028 (`projectsData.ts:124`). **Fix:** add a "suspended since 2026 for rebuilding" line, using `ramlTramSuspended`, on Live and in the Projects entry, and update the timeline to the reported range.
2. **[P1] Uncredited photos everywhere.** `containers.jpeg`, `port-of-alexandria.jpg`, `DekhaliaPort.jpg` (Invest), and the Corniche photos reused on Experience (`citadel.jpg`, `Stanley-Bridge-alexandria.jpg`, `A-wonderful-picture-of-Montazah-Palace.jpg`, `Alexandria_Bibliotheca.jpg`, `alexandria-castle-egypt.jpg`) are missing from `docs/image-credits.md`. This is the same issue as About and Visit, and one credit audit would fix every page.
3. **[P2] The closing band ends on "Read the visitor guide" for every audience.** Invest and Projects both end with FactsNote *and* CTA, so "Report an inaccuracy" appears twice within a screen, followed by a visitor pitch aimed at investors. **Fix:** pass `showVisitLink={false}` on Invest and Projects (the prop already exists), or drop FactsNote where CTA follows it.
4. **[P2] Four different filter styles.** Live uses underlined chips, Projects uses filled pills (`rounded-full bg-sea`), News uses underlined tabs with counts, and the 404 page uses `bg-sea-mist` pills. **Fix:** pick one pattern, either the News version or Live's chips.
5. **[P2] White strip above the ink headers.** The Live, News and news-post pages wrap the content in `bg-white pt-20` and put an ink or white header underneath, unlike About and Invest, which use a transparent navbar. Check all three breakpoints.

## Live — 28/40 (Good)

**Working:** honest "we point you to the real provider" framing, the selected tab and category are kept in the URL, the search has a live result count, emergency numbers are tap-to-call, community events show exact dates only when the organiser has published them, and there is a "Suggest a place" flow.

- **[P1]** Raml tram facts are shown as if the tram is running (pattern 1). "Abu Qir Metro (planned)" (`GettingAround.tsx:86`) contradicts Projects, which lists it as "Under Construction".
- **[P2]** A tram-yellow **Live** badge sits on a section that only links out to Google and Waze (`GettingAround.tsx:44`). Tram yellow is reserved for live signals, and this one isn't. Drop the badge or rename it "Live maps".
- **[P2]** The "Getting around" tab on Live and "Getting there and around" on Visit cover the same topic with different content. Cross-link them, or move tram and metro facts to one place.

## Invest — 27/40 (Good)

**Working:** the trade ledger hero (ruled rows, each with a source chip), the GAFI "where to act" guardrail, and the company stories with "Read the source" links.

- **[P1]** The second headline figure in the hero is a 2013 estimate ("≈40% of industrial activity", `InvestHero.tsx:14`). It is labelled, but it is still the second thing an investor reads. Move it out of the ledger or replace it with a current figure.
- **[P1]** Claims inside company stories have no source: GM's "over 7,000 jobs" and "Chevrolet Optra and T-Series" (the `gmAlexandria1926` fact only covers 1926), and the Coca-Cola story has no `factId`. Check them against the linked articles or cut them.
- **[P2]** About 70 lines of commented-out "Strategic Opportunities" JSX in `InvestPage.tsx:35-109`. It's dead code, so delete it (git keeps the history).
- **[P2]** `containers.jpeg` appears twice (Why Alexandria and the Free zone tab). Port entries use `alt={port.name}`, which repeats the h3.

## Projects — 30/40 (Good)

**Working:** StatusLedger is the strongest data design on the site (one shared five-stage track, "a stage, not a percentage", a real `<table>` with row headers). FundingMix honestly says "only N of M have a published split" and labels the derived balance as derived. GCAP is framed as "estimated costs, not money committed".

- **[P1]** The Raml tram timeline and status are out of date (pattern 1).
- **[P2]** The ledger table scrolls sideways below 46rem with no visible cue. Add a fade at the edge or a "scroll" hint, as the When-to-go table on Visit does.
- **[P2]** Vision 2030 pillar items are unsourced lists. Link the Vision 2030 document or mark them as a summary.
- **[P2]** The page ends with the visitor CTA (pattern 3).

## Governor — 31/40 (Good)

**Working:** a model of the trust rules. A plain header with "does not speak for the governor", a dated record with the source printed beside every line, an "Information as of" date in two places, and the AI portrait labelled on the image and in the caption, as approved.

- **[P2]** The record is thin: five entries, the latest from July 2026, while the page says "as of Oct 2026". Either add Aug–Oct entries through the news bot or say "latest entry July 2026".
- **[P2]** "6,000 tonnes of waste a day" is a figure inside the text that isn't in `facts.ts`. It is attributed to Al-Ahram, which is acceptable, but by the site's own rules it should be a fact.
- **[P2]** The on-page nav skips "In the news". The closing "Plan a visit" button is off-topic here; "City briefing" fits better.
- Minor: trailing space in `governorData.ts:72`.

## News (City briefing) — 31/40 (Good)

**Working:** search and topic are kept in the URL and shareable, topics with no stories are hidden, counts follow the search, and the empty states offer resets. The stance is clear: "summaries in our own words", "photos show the place, not the event".

- **[P2]** Photos are reused heavily: the `city` image appears on 5 stories, and `raml-tram`, `hospital` and `corniche` on 3 each, so neighbouring cards often look the same. Add more photos to the pool, or prefer a text-only card over repeating an image.
- **[P2]** The search writes to the URL on every keystroke (`replace: true`, so history is fine). With a large list, debounce it.

## News post — 32/40 (Good)

**Working:** the outlet and language appear before the body, the "related photo, not taken at the event" caption, an honest fallback when no full text exists, a source box with the outlet and date, and cross-links to Projects and Governor.

- **[P2]** "Project: …" links to `/projects`, not to that project. Add an anchor (`/projects#raml-tram`) or open its dialog.
- Minor: an unknown post id renders the 404 page inside the post layout, so the white `pt-20` wrapper applies twice.

## Experience — 24/40 (Acceptable)

**Working:** respects reduced motion (`useReducedMotion` in BeamHero and CornicheWalk), uses source chips on its dates, and the lighthouse beam reveal is the most ownable motion idea on the site.

- **[P1]** Still unreachable: nothing in the navbar, footer or home page links to `/experience` (raised in the home critique and still true). Either link it from About ("Walk the Corniche") or remove the route and its 157 kB chunk.
- **[P2]** `CornicheWalk` uses a 300vh scroll container (`CornicheWalk.tsx:101`), which means a lot of scrolling on a phone for four stops. Check it on a phone, or shorten it below md.
- **[P2]** "Lines being drawn for 2030" shows the Raml tram as a future line without noting that the current service has stopped.
- Uncredited photos (pattern 2).

## 404 — 22/40 (Acceptable)

- **[P2]** Only two suggestions (Visit, Projects). Add News, Live and the site search (Ctrl+K already exists).
- **[P2]** `bg-sea-mist` pill links don't appear anywhere else on the site, and `font-bold text-sea` "404" is a one-off eyebrow. Use the standard link style.
- Minor: 4-space indentation, while the rest of the codebase uses 2.

## Suggested order

1. Make the tram consistent on Live and Projects (P1, small, factual).
2. Credit audit across all pages (P1, one pass).
3. Invest: source or cut the GM and Coca-Cola claims; move the 2013 figure out of the hero.
4. Decide on `/experience`: link it or remove it.
5. Clean-up batch: CTA prop on Invest and Projects, filter style, dead JSX, 404 links.
