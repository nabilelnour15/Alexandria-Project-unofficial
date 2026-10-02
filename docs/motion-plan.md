# Motion & Scroll Experience Plan: "The Pharos remembered"

*Status: ideas only, not implemented. Written in October 2026.*
*Sources: the `frontend-design` plugin, the `make-interfaces-feel-better` skill, and ECC's `motion-foundations`, `motion-patterns` and `motion-advanced` guides (in `~/tools/ECC/skills/`).*

Goal: a site that makes a strong first impression and feels modern while honouring Alexandria's heritage.

## Guiding principle

**Put the boldness in one place.** Sites where every section fades and slides up are the most common sign of an AI-made template. The plan is one unforgettable opening, one scroll story, and quiet, polished details everywhere else.

```
 SCROLL STORYBOARD (home page)
 ┌──────────────────────────────┐
 │ 1. Dusk harbour. A beam      │  ← the signature moment (once per visit)
 │    sweeps and reveals the    │
 │    title "Alexandria"        │
 ├──────────────────────────────┤
 │ 2. The sky deepens to night, │  ← the hero reacts to scrolling
 │    and the Corniche lights   │
 │    come on                   │
 ├──────────────────────────────┤
 │ 3. PINNED: the layered city  │  ← the scroll story
 │    Ptolemaic → Roman →       │
 │    Coptic → Islamic →        │
 │    cosmopolitan → today      │
 ├──────────────────────────────┤
 │ 4. Walk the Corniche         │  ← the Visit section
 │    (east → west)             │
 ├──────────────────────────────┤
 │ 5. Future lines draw on      │  ← the Projects section
 │    the map                   │
 ├──────────────────────────────┤
 │ 6. The wall of scripts       │  ← the closing moment
 │    writes itself             │
 └──────────────────────────────┘
 Throughout: a small Raml tram on a rail shows how far you've read
```

---

## 1. The first look

### A. The Pharos beam reveal (the signature)

- **Where:** `src/sections/Hero.tsx`
- **What happens:**
  - The page opens on the Eastern Harbour at dusk.
  - A single soft lighthouse beam starts at the Qaitbay silhouette, which stands on the old Pharos site, and sweeps across the screen.
  - As it passes, "Alexandria · الإسكندرية" appears through it, like light catching carved stone.
- **Timing:** about 1.6 s, once per session (a `sessionStorage` flag).
- **Heritage hook:** the lighthouse no longer exists, so the beam is the city remembering it.
- **Rules:**
  - The heading text must exist in the page from the first moment, so search engines see it and the page still loads fast. The beam only reveals it visually, using a CSS mask or clip-path.
  - Visitors who use reduce motion see the finished frame straight away.

### B. Inscription headings

- **Where:** the main section headings (h2) only. Body text never animates.
- **What happens:** the Cormorant letters rise a few pixels from behind a mask and settle, like an inscription being carved.
- **Timing:** once per heading, when it enters the screen.

---

## 2. While scrolling

### C. Dusk to night on the hero

- **Where:** `Hero.tsx`
- **What happens:** as you scroll down, the sky darkens, the image zooms in slightly, and the Corniche lights fade in.
- **How:** two gradings of the same photo (dusk and night), blended according to scroll position. No video.

### D. The layered city (the main scroll story)

- **Where:** a new section on the home page (teaser) and on the About page (full version).
- **What happens:** the section stays pinned on screen while you scroll through the eras, each one stacking over the last as a translucent layer, like a palimpsest. Each layer has one image, one date and one sentence.
  - Ptolemaic, from 331 BCE
  - Roman
  - Coptic
  - Islamic, from 641 CE
  - Mamluk, with Qaitbay in 1477–1479
  - Ottoman, from 1517
  - Cosmopolitan, 19th–20th century
  - Today
- **The coastline redraws** itself through the eras as an SVG line: the Ptolemaic shore, then the Heptastadion causeway linking the island, then the Corniche of today.
- **Why:** this delivers the curator's favourite idea (the layered map, 9/10) and the "Pharos to Future" timeline in one piece.
- **Mobile:** no pinning. Use a simple vertical sequence instead.

### E. A walk along the Corniche

- **Where:** `src/sections/Visit.tsx`
- **What happens:** scrolling down moves a panoramic strip of landmarks sideways, in their **real geographic order**: Montaza → Stanley Bridge → the Bibliotheca → Qaitbay.
- **Mobile:** a normal swipe carousel, with no pinning.

### F. Future lines draw themselves

- **Where:** `src/sections/ProjectsHero.tsx` / `ProjectList.tsx`
- **What happens:**
  - The 13.2 km Raml tram line and the 21.7 km Abu Qir metro line draw onto a map as you reach the section.
  - Each stat counts up once, then its `SourceChip` appears.
  - The beam from the opening comes back once to point at "2030", tying the story together.

### G. Raml tram reading progress

- **Where:** `src/components/Layout.tsx`
- **What happens:**
  - A thin rail across the top of the page, with a small **blue-and-cream** Raml tram (the real colours) moving along it as you scroll.
  - It stops at "stations" that match the page's sections. Tapping a station jumps to that section, so it doubles as navigation.
- **How:** a CSS scroll-driven animation, `animation-timeline: scroll()`, with no JavaScript.

### H. The wall of scripts writes itself

- **Where:** `src/components/Footer.tsx`, `.wall-of-scripts` in `src/index.css`
- **What happens:** when you reach the footer, the glyphs appear one script at a time: Greek, Coptic, Arabic, Latin, then the hieroglyphs. Slow and quiet.
- **Note:** keep the owner's script set (no Hebrew, "EGYPT" included). See CLAUDE.md.

---

## 3. Small details that make it feel premium

These come from `make-interfaces-feel-better`:

| Detail | Idea |
|---|---|
| Page changes | A gentle cross-fade with a soft wave-shaped wipe, using the browser's View Transitions API. A project card's image grows smoothly into its popup (`view-transition-name` / `layoutId`). |
| Navigation | The active-link underline slides to the new item instead of jumping. |
| Buttons | A slight `scale(0.96)` press. Animate only `transform`, `background-color` and `box-shadow`, never `transition: all`. |
| Numbers | `font-variant-numeric: tabular-nums` on counters so digits don't shift. Each counter runs once only. |
| Headings | `text-wrap: balance` on titles and `pretty` on captions. |
| Images | A subtle neutral inset outline (`outline: 1px solid rgba(0,0,0,.1); outline-offset: -1px`). |
| Entrances and exits | Enter in about 250 ms (opacity plus a small `translateY`), exit in about 150 ms. Exits are always quieter. |
| Hit areas | Every control is at least 40×40 px, with source chips and the tram "stations" expanded through a pseudo-element. |

---

## 4. Avoid

- Fade-and-slide on every section, which is the generic AI-template look.
- Parallax everywhere, or hijacking the scroll so the page doesn't move as expected.
- Autoplaying video in the hero, which is heavy and bad for loading speed.
- Typing animations (one was removed in Phase 1).
- Animated papyrus scrolls, Greek-key borders or rotating hieroglyphs (vetoed by the heritage curator).
- Pinned sections on phones.

---

## 5. Performance and accessibility rules

1. **CSS first.** Use the browser's native scroll-driven animations (`animation-timeline: view()` / `scroll()`) for reveals and the tram progress bar. They need no JavaScript and run off the main thread. Browsers without support simply show the page without the effect.
2. **framer-motion only where needed:** the pinned layered city (D) and the line drawing (F), each in a lazily loaded file. Keep the main file at about 259 kB or less. framer-motion must stay out of it (see CLAUDE.md).
3. **Reduce motion.** Every effect needs a still version. `<MotionConfig reducedMotion="user">` already exists in `main.tsx`. Add `@media (prefers-reduced-motion: reduce)` fallbacks for the CSS animations.
4. **Only cheap properties.** Animate only `transform`, `opacity` and (sparingly) `filter`. Use `will-change` only to fix a first-frame stutter.
5. **Loading speed.** Never hide the hero image or the h1 before the first paint. The intro animates on top of content that is already there.
6. **Shared motion settings.** Define them once, following `motion-foundations`, for example `src/lib/motion.ts` with durations, easings, spring presets and a `shouldAnimate()` gate. No hard-coded numbers in components.
7. **Low-end devices.** Skip decorative motion when `navigator.hardwareConcurrency <= 4` or data saver is on.

---

## 6. Build order

| Phase | Items | Effort |
|---|---|---|
| 1. Quick wins | The details in section 3, tram progress (G), inscription headings (B), View Transitions between pages | 1–2 days |
| 2. Signature | Pharos beam reveal (A), dusk to night (C), shared motion settings (rule 6) | about 1 week |
| 3. Story | Layered city (D), future lines (F) | about 2 weeks |
| 4. Later | Corniche walk (E), the wall that writes itself (H) | as time allows |

After each phase, run the `verification-loop` skill, then the `browser-qa` skill (console errors, three screen sizes, smoothness on mobile, axe accessibility checks). Use the `react-reviewer` agent on the changes.

---

## 7. Assets needed

- [ ] **Dusk Corniche hero photo** (`corniche-dusk-hero.jpg`). The Gemini prompt is in `docs/image-prompts.md`. A night version of the same photo for (C) can be made by colour grading.
- [ ] **2–3 archival, public-domain photos** for the layered city (Wikimedia Commons, for example "Ramleh station 1900", "Alexandria harbour 19th century"), with credits.
- [ ] **An approximate SVG coastline** for each era (Ptolemaic shore, Heptastadion, modern Corniche), traced from open map data and published reconstructions, and cited.
- [ ] **SVG route paths** for the Raml tram and the Abu Qir metro, labelled "indicative".
- [ ] **A small blue-and-cream Raml tram icon** (SVG) for the progress bar.
- [ ] **A Qaitbay silhouette** (SVG) for the beam's starting point.
