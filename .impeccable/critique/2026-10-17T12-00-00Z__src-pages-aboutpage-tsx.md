---
target: about page
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:D:\\Alexandria\\app\\src\\pages\\AboutPage.tsx"
target_fingerprint: "sha256:73395631785171561cc6ac3b2ca1a2c3f56e67d2584c9d103cae63eef4bd2aa5"
target_path: "D:\\Alexandria\\app\\src\\pages\\AboutPage.tsx"
timestamp: 2026-10-17T12-00-00Z
slug: src-pages-aboutpage-tsx
---
Method: manual code review (Impeccable is not installed, so the detector and the second agent did not run). There was no rendered pass, so no overlays.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | On-page nav in the hero and an active tab state; nothing shows where you are in the long Chronicle |
| 2 | Match System / Real World | 3 | Plain language; "Living heritage" and "2025 culture year" are vague tab names |
| 3 | User Control and Freedom | 3 | Anchors and tabs work; no way back to the top of the 9-chapter history except scrolling |
| 4 | Consistency and Standards | 2 | The same sights appear in the About "Monuments" and "Museums" tabs and in Visit's "What to see", with different facts; "Capital of Culture" and "Capital of Culture and Dialogue" both used |
| 5 | Error Prevention | 2 | Images presented as real that aren't (see P0) |
| 6 | Recognition Rather Than Recall | 3 | Good hero nav; 7 tabs hide most of the content behind labels |
| 7 | Flexibility and Efficiency | 3 | Anchors are deep-linkable; tabs are not (no hash or query state) |
| 8 | Aesthetic and Minimalist Design | 3 | Strong hero and Chronicle; ThemeExplorer is a 7-tab encyclopedia |
| 9 | Error Recovery | 2 | No "Report an inaccuracy" or FactsNote on a page full of history claims |
| 10 | Help and Documentation | 3 | SourceChips on key dates; most claims in the tabs have none |
| **Total** | | **27/40** | **Good** |

## Design Specificity Verdict

The hero is the best on the site: the city's name in Greek, Arabic and English on the wall-of-scripts, with a real photo and a sourced caption (`AboutHero.tsx`). The Chronicle's pinned years (`Chronicle.tsx:26`) are a real signature. After that, ThemeExplorer turns into a generic tabbed reference panel that could belong to any city.

## Overall Impression

A confident, well-built history page whose trust is let down by its pictures: one image is not what it claims to be, and most photos have no credit.

## What's Working

1. **The trilingual hero** on the wall-of-scripts, with an on-page nav and a sourced founding date.
2. **Chronicle:** sticky years, one image per era, and readable measure (`max-w-[60ch]`/`[65ch]`).
3. **CityInBrief:** a real `<table>` comparing Alexandria with Nile valley cities, with caption and scoped headers. The Corven engraving is labelled "an imagined view… not a photograph", which is the right model.

## Priority Issues

1. **[P0] A misattributed photo.** `cleopatra-palace-anterhodos.jpg` ("Submerged royal quarter", Ancient tab, `aboutData.ts:247`) is the well-known viral picture of a lion statue among columns. As far as I know it shows the Neptune Memorial Reef off Miami, not Alexandria. Confirm its origin before trusting it. **Fix:** remove it. Use a credited photo of the real underwater site (for example from Franck Goddio / IEASM press material, if the licence allows), or show no image. **Command:** /impeccable clarify
2. **[P1] Uncredited photos and unlabelled reconstructions.** None of these images appear in `docs/image-credits.md`: `citadel.jpg`, `lighthouse.jpg`, `Alexander-the-Great.jpg`, `MohamedAli.jpg`, `Serapeum-of-Alexandria.jpg` or most other photos on the page. `lighthouse.jpg` is an 18th-century engraving of the Pharos (it looks like Fischer von Erlach's), shown without the "imagined view" caption that the Corven engraving gets. **Fix:** record author, licence and source for every image and render `PhotoCredit`. Caption every reconstruction as a reconstruction. **Command:** /impeccable clarify
3. **[P1] Unsourced or wrong figures in the tabs.** Al-Mursi Abul-Abbas is called a "14th-century Sufi shrine with a 73-meter minaret" (`aboutData.ts:278`). The saint died in the 13th century, the present mosque dates from the 20th century, and the 73 m has no source. Kom el-Shoqafa's "largest Roman burial site in Egypt… 35 meters" (`:262`) is also unsourced. The "2025 culture year" tab still talks about events "planned" for 2025, a year that is now over. **Fix:** source each one through `facts.ts` or reword it. Put the culture-year text in the past tense or drop the tab. **Command:** /impeccable clarify (with source-researcher and claim-verifier)
4. **[P2] Duplicated content with Visit.** Monuments and museums appear on both pages with different wording and facts. The lead says "For opening hours and tickets, see the visitor guide", but Visit has no opening hours. **Fix:** About covers what a place *was* and *means*; Visit covers *how to go*. Link each entry across the two pages rather than describing it twice. **Command:** /impeccable distill
5. **[P2] Seven tabs bury the content.** Hidden tab panels cannot be found by scanning or by Ctrl+F, and their content can't be linked to. **Fix:** cut to 4 tabs (Ancient, Monuments & museums, Modern city, Food). Move "Living heritage" into the Chronicle or CityInBrief, and sync the selected tab to `?tab=`. **Command:** /impeccable layout

## Persona Red Flags

- **Jordan (first-timer):** reads a strong hero, then scrolls through nine long chapters before reaching anything visual or practical. A "jump to era" control would help.
- **Riley (stress tester):** recognises the viral "Cleopatra's palace" lion photo, and the page loses its credibility.
- **Casey (mobile):** the 7-tab strip scrolls sideways with no hint that more tabs exist. Chronicle images sit below long text on every chapter.
- **Samir (investor):** not the audience for this page; the closing "See the city's projects" link serves them well.

## Minor Observations

- The same Qaitbay photo appears three times (hero, the 1477 chapter, and `alexandria-castle-egypt.jpg` reused for the 1517 Ottoman chapter).
- `Chronicle.tsx:44` sets alt to `''` whenever a caption exists. That works, but the caption then has to describe the image, and "The Citadel of Qaitbay" adds nothing.
- `ThemeExplorer` "modern" stats show only `s.value.split(' ')[0]`, so "Millions of books" renders as "Millions".
- There is no FactsNote ("Last reviewed" / "Report an inaccuracy") on this page, but there is one on Projects and Invest.

## Questions to Consider

1. Should About be the "what it means" page and Visit the "how to go" page, with no sight described twice?
2. Could the Chronicle carry the places, with each era showing what survives of it today, so the tabs aren't needed at all?
