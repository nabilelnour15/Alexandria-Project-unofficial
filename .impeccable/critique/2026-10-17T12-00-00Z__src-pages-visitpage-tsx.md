---
target: visit page
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Alexandria\\app\\src\\pages\\VisitPage.tsx"
target_fingerprint: "sha256:d0d98aecfecd7a10d63eb37c2885338292b4f843b5f8083e3ca0bc803e8be704"
target_path: "D:\\Alexandria\\app\\src\\pages\\VisitPage.tsx"
timestamp: 2026-10-17T12-00-00Z
slug: src-pages-visitpage-tsx
---
Method: manual code review (Impeccable is not installed, so the detector and the second agent did not run). There was no rendered pass, so no overlays.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Prices and fares have no date, so a reader can't tell they may be years old |
| 2 | Match System / Real World | 3 | Practical sections in trip order; "LE", "#" and "AC" shorthand reads like copied notes |
| 3 | User Control and Freedom | 3 | On-page nav and a chart toggle; tabs aren't linkable |
| 4 | Consistency and Standards | 2 | The page ends by telling the reader to "Read the visitor guide", linking to itself; mixed "Harbor"/"harbour" |
| 5 | Error Prevention | 2 | Unsourced ticket prices and taxi fares lead visitors to wrong budgets |
| 6 | Recognition Rather Than Recall | 3 | The district is shown under each sight; no map, and no link to one |
| 7 | Flexibility and Efficiency | 2 | Tourist police number isn't tap-to-call (the home page's emergency numbers are) |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained and orderly, but the bottom half is six plain lists |
| 9 | Error Recovery | 2 | "Report an inaccuracy" exists only because the home page CTA was reused |
| 10 | Help and Documentation | 2 | Almost nothing on the page has a SourceChip except the climate, tram and four sight dates |
| **Total** | | **24/40** | **Acceptable** |

## Design Specificity Verdict

`WhenToGo` is a genuinely authored device: twelve months in one strip, best months ruled in gold, bars sized by high temperature, with a sourced 1991–2020 caption and recharts loaded only on demand. The home teaser's west-to-east Corniche line (`VisitTeaser.tsx:54-72`) is the page's best idea, yet the full page doesn't use it. Everything after "What to see" is a stack of definition lists.

## Overall Impression

A well-organised page with the best data visual on the site. Its practical detail (prices, fares, restaurants, hotels) is unsourced and undated, and that is exactly what a visitor acts on.

## What's Working

1. **The When to go strip:** an accessible table (scoped headers, an sr-only "recommended" label, a focusable scroll region) with a sourced caption.
2. **Trip-order structure:** when, getting there, see, do, eat and stay, with a matching on-page nav.
3. **The district under every sight name**, and an honest "Orientation" note that the city is one coastal ribbon.

## Priority Issues

1. **[P1] The closing CTA links to the page you're on.** `VisitPage.tsx` renders the home page `CTA`, which ends with "Planning a trip? … Read the visitor guide" → `/visit` (`CTA.tsx:47-55`). **Fix:** add a `showVisitLink={false}` prop, or give Visit its own closing (sources, last reviewed, Report an inaccuracy). **Command:** /impeccable clarify
2. **[P1] Unsourced, undated prices.** These have no source and no `asOf`: "LE150 foreigners", "LE100", "LE25", taxis "LE400+", buses "LE100-300" and the double-decker "LE25" (`visitData.ts:61-71, 117-169, 250`). Egyptian ticket prices have changed several times since these look to have been written. **Fix:** drop the prices and link the official ticketing page for each site. Otherwise add facts with `asOf`, and show "prices as of …" in the UI. **Command:** /impeccable clarify (with source-researcher)
3. **[P1] Unverified restaurants, hotels and claims.** 15 restaurants and 14 hotels have no sources or dates. Some may be duplicates: "Le Metropole", "Paradise Inn" and "Windsor Palace" may all be Paradise Inn properties. "Oldest royal palace in Egypt" (Ras El-Tin), "standing since 1850" (synagogue) and "73m minaret" are unsourced. "Work" lists "Natural gas sector" and "International schools", which are not things a visitor does. Most sight photos are missing from `docs/image-credits.md`. **Fix:** verify every entry, or cut each list to a few long-standing institutions with a "check before you go" note. Remove the "Work" column, and credit the photos. **Command:** /impeccable distill
4. **[P2] The Corniche device stops at the home page.** **Fix:** reuse the west-to-east line as the spine of "What to see" (filter by stretch instead of by category), and add a link to an external map for each sight. **Command:** /impeccable bolder
5. **[P2] Help is hard to act on.** The tourist police number `19654` is a `<span>`, not a `tel:` link (`VisitHelp.tsx:11`). Tourist office locations are unsourced, and the help box sits after Eat and Stay, at the very end of the page. **Fix:** make the number a `tel:` link, source the offices, and add "Need help?" to the hero nav. **Command:** /impeccable clarify

## Persona Red Flags

- **Jordan (first-timer):** budgets from LE150 ticket prices and LE400 taxi fares that may be well out of date. Meets "Careem requires local #" and "AC" shorthand.
- **Riley (stress tester):** the last button on the page reloads the same page. The bar row in the climate table is `aria-hidden`, which is fine, but the "Show the chart" button gives no hint of what the chart adds.
- **Casey (mobile):** the climate table scrolls sideways at 40rem (no visible hint beyond the aria label). Six sections of plain lists below the fold. Tap-to-call is missing for the tourist police.
- **Samir (investor):** the "Work" column (coworking spaces, the natural gas sector) is aimed at them but misplaced; it belongs on Live or Invest.

## Minor Observations

- `VisitPage.tsx` has `pt-20` on a white wrapper above an ink hero, so a white strip shows under the solid navbar. Check it at every breakpoint.
- `WhatToSee.tsx:45` uses `alt={item.name}`, which repeats the h3 right after it. Use `alt=""` or describe the view.
- The climate data cites a `climateNormals` source for air temperatures, but the sea temperature row has no source.
- "Western Harbor" vs "harbour" elsewhere. Pick British spelling throughout.
- The hero photo (`Alexandria-Bibliotheca-interior.jpg`) has no credit.

## Questions to Consider

1. Should the Visit page carry prices at all, or link to the people who set them?
2. If the city really is one strip of coast, should the page be organised by stretch rather than by category?
