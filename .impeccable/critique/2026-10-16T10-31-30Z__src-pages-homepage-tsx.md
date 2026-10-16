---
target: home page
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:D:\\Alexandria\\app\\src\\pages\\HomePage.tsx"
target_fingerprint: "sha256:b86a85ea6497589a4f915beb453a70f389b4e82a14dddb0ce3d095ec4dc2501f"
target_path: "D:\\Alexandria\\app\\src\\pages\\HomePage.tsx"
timestamp: 2026-10-16T10-31-30Z
slug: src-pages-homepage-tsx
---
Method: dual-agent (A: design review · B: detector)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active nav, news dates and "Facts last reviewed" are good. Each stat's "as of" date is hidden inside a popover. |
| 2 | Match System / Real World | 3 | Jargon on the home page: "4 MDBs", "GCAP total cost estimate" |
| 3 | User Control and Freedom | 3 | The banner returns every session and permanently takes 36px of fixed chrome |
| 4 | Consistency and Standards | 2 | Navbar order contradicts the hero index; "Live here" and "Living in Alexandria" name the same page; "Plan your visit" is both a heading and the final CTA |
| 5 | Error Prevention | 3 | "Before you invest" (GAFI) and "we point you to the real provider" are good guard rails |
| 6 | Recognition Rather Than Recall | 3 | Good index descriptions; search hint shows ⌘K on Windows |
| 7 | Flexibility and Efficiency | 3 | Ctrl+K and "/" open search; emergency numbers are tap-to-call |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained palette, but 9 sections (about 15 mobile screens) and an Invest band with 5 layers |
| 9 | Error Recovery | 3 | "Report an inaccuracy" exists, but only in the footer, far from the figures |
| 10 | Help and Documentation | 2 | Nothing explains how sourcing or the confidence labels work, though that is the product's differentiator |
| **Total** | | **28/40** | **Good** |

## Design Specificity Verdict

**Design review:** the hero (a typographic index of the six sections over the Corniche, with a bilingual h1) and the footer's wall-of-scripts are authored for Alexandria. Everything between them is one repeated template: H2, lead, a sea-blue button, then a 3- to 5-column grid with a `border-t-2 border-gold` rule. Two four-up stat walls sit back to back (`Invest.tsx:54-64`, `ProjectsHero.tsx:64-74`), and the signature texture never appears in the body. Swap the photos and the middle could be any city.

**Detector:** 2 source findings and 4 rendered findings.
- side-tab, `DisclaimerPopup.tsx:44`: a rounded callout with a 4px gold left border. Real, and it sits in the dialog the design review flagged independently.
- side-tab, `Layout.tsx:30`: the full-width disclaimer banner. Borderline; it is a banner, not a card.
- border-accent-on-rounded, `Services.tsx:86`: the tab underline on filter chips. False positive.
- overused-font (Open Sans): a documented brand choice, so the brief wins. Not acted on.
- dark-glow (`index.css:324-330`) and bounce-easing (`index.css:77`): dead CSS that nothing uses. Delete it.

**Overlays:** none. No browser automation tool was available. The detector ran a headless page scan at 1280 and 390 widths instead.

## Overall Impression

A disciplined, trustworthy page with a great opening and a generic middle. Its biggest strength, sourcing in the open, is never shown or explained, and the page ends on brochure copy for visitors only.

## What's Working

1. **The hero index** (`Hero.tsx:4-61`): a city portal that opens on a table of contents, with a bilingual title. Calm, confident and ownable.
2. **Trust in the UI:** SourceChip popovers (source, as-of date, confidence), the GAFI aside, news attribution and photo credits.
3. **Token and type discipline:** consistent use of Pharos & Papyrus and none of the rejected ideas. Tram-yellow focus ring, reduced motion respected, tap-to-call numbers.

## Priority Issues

1. **[P1] The first-visit dialog undercuts trust.** The first words a visitor reads are promotional ("passion project… so special") plus a vague AI note (`DisclaimerPopup.tsx:41-50`), laid over the best screen. Its callout is also the detector's real side-tab hit. **Fix:** three factual lines (unofficial and not affiliated; every figure links to its source and date; AI helps research and a person checks every change), a shorter panel that leaves the h1 visible, and no side-stripe callout. **Command:** /impeccable clarify
2. **[P1] Unsourced selling points.** "4 MDBs" has no factId (`projectsData.ts:76`). "Tax incentives", "Young, educated workforce", "Largest Mediterranean port" and "growing number of startups" are unsourced (`Invest.tsx:5-32`). "≈40% industrial activity" dates from 2013. **Fix:** source each through `facts.ts`, reword it as a fact, or cut it; show the 2013 figure's age. **Command:** /impeccable clarify (with source-researcher and claim-verifier)
3. **[P1] Two competing navigations at the fold.** 8 nav links in a different order from the 6-row index; News is missing from the index; `/experience` is unreachable. **Fix:** order `navLinks` the same as the index and drop "Home"; add News to the index; consider letting the index serve as the nav on `/` until it scrolls away. **Command:** /impeccable layout
4. **[P2] Template sameness in the middle and a duplicate stat wall.** **Fix:** give each band one Alexandria-specific device: a tram-line or stage ledger for Projects instead of a second stat grid, an east-to-west Corniche sequence for Visit, the wall-of-scripts on the ink Invest band. Reserve the gold top rule for one role. **Command:** /impeccable bolder
5. **[P2] The empty governor portrait and a visitor-only ending.** "Portrait to be added" is a 256×320 blank box on mobile (`GovernorSection.tsx:33`), and the CTA "Come and see Alexandria for yourself" serves one audience in a promotional voice (`CTA.tsx:8`). **Fix:** drop the placeholder on the home page. End on a "How this guide works" strip (sourced figures, last-reviewed date, Report an inaccuracy, bots propose and a person merges). **Command:** /impeccable distill

## Persona Red Flags

- **Jordan (first-timer):** meets the modal before the city, then 15 equal targets with no "start here". "Live here" and "Living in Alexandria" look like two different places. "MDBs" and "GCAP" mean nothing to them.
- **Riley (stress tester):** 7px horizontal scroll at 360px (first-visit state). "01221110000" in a 4xl serif sits flush with the edge at 390px (`Services.tsx:32-37`). With storage blocked, the dialog reappears on every load. Two of the three news cards use the same photo.
- **Casey (mobile):** about 15 screens, about 112px of fixed chrome (13% of the viewport), About below the second screen, a large blank portrait tile. Tap-to-call is excellent.
- **Samir (logistics investor):** trusts the sourced port and free-zone stats and the GAFI note, then hits unsourced selling points and a 13-year-old figure, and the stats don't link to `/invest` anchors.

## Minor Observations

- The `text-white/75` index notes over the bright right side of the hero photo need an AA contrast check (`Hero.tsx:26,56`).
- Footer tagline is brochure copy (`Footer.tsx:60-63`); "Living in Alexandria" sits under the Visit column; footer headings go from h3 straight to h4.
- Eight identical `alex-btn-primary` buttons; "All stories" is the only text link.
- Group the emergency number as "0122 111 0000".
- Delete the dead `pulse-glow` and `scale-in` CSS.

## Questions to Consider

1. If sourcing in the open is the one thing official sites can't offer, why isn't it the closing peak of the page?
2. On `/`, could the hero index *be* the navigation?
3. Below the hero, which section could only exist for Alexandria?
