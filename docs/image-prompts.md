# Image prompts (Google Gemini)

Prompts for the images the site still needs. Line numbers were taken on 2026-10-02 and may move as other work lands, so search for the quoted value if a line has shifted.

## How to use

**Quickest:** `npm run gen:image -- <filename>.jpg` builds the full prompt from this file (preamble + prompt + "Do not include: …" from Avoid), calls Gemini, then crops, resizes and compresses the result into `public/images/`. Needs `GEMINI_API_KEY` in `.env.local`. Then do steps 2, 5 and 6 below. The manual steps:

1. Paste the **style preamble** below, then the prompt for the image, into Gemini image generation. Add the **Avoid** line as a final instruction ("Do not include: …").
2. Generate at or above the listed size and pick the best result. Regenerate if any text, logo, watermark or identifiable face appears.
3. Export as **JPG**. Aim for **under 300 KB with the longest side at most 1920 px**. Or run the same Pillow pass used on `public/images`: `ImageOps.exif_transpose`, `thumbnail((1920, 1920))`, `save(quality=80, optimize=True, progressive=True)`.
4. Save the file to `public/images/` with the **exact filename** listed.
5. Replace the `src` / `image` value in the listed file with `/images/<filename>`.
6. For anything marked **Concept** or **Illustration**, show the **On-site label** text wherever the image appears (caption, or the planned "Concept" badge from `docs/TODO.md`). Never present it as a photo of something that exists.

### Rules for every image

- No text, letters, signage, logos, brand marks or watermarks in the image.
- No real, identifiable people. Never generate the governor, officials or any named person. Crowds stay small, distant and anonymous.
- Alexandria is a **Mediterranean port city**: no camels, desert dunes, pyramids, belly dancers, feluccas on the Nile, or "Arabian Nights" styling.
- Transit colours: the **Raml tram is blue and cream**; the **city trams are yellow**.
- Real heritage landmarks get **real photos**, not AI images (see "Use real photos instead" at the end).

## Style preamble

Paste this before every prompt:

> Photorealistic, editorial-quality image of Alexandria, Egypt, a Mediterranean port city. Soft, clear Mediterranean light, humid sea air, a warm limestone and sand-coloured city with weathered early-20th-century European-style apartment blocks, balconies and shutters. Natural colour grading leaning on deep sea blue (#0B3C5D), dark ink blue-black (#0E1A24) in shadows, warm papyrus cream (#F4ECDC) and limestone (#E8DFCC) in highlights, with small accents of muted gold (#C49A3A). Calm, dignified, contemporary documentary style, 35 mm lens look, realistic scale and materials. No text, letters, signage, logos or watermarks. No identifiable faces; any people are small, distant and anonymous.

For textures and illustrations, drop "Photorealistic, editorial-quality" and keep the palette and the no-text rules.

---

## 1. Site-wide and signature visuals

### og-image.jpg

> **Current file (Oct 2026):** a real CC0 Wikimedia photo of Qaitbay at night (see `docs/image-credits.md`). Generate this prompt with `--force` only if you want to replace it.

- **Used in:** `index.html` (to add as `<meta property="og:image" content="/images/og-image.jpg">`; see the SEO item in `docs/TODO.md`)
- **Size:** 1200×630 (1.91:1)
- **Prompt:** Wide coastal view of the Eastern Harbour of Alexandria at dusk. On the right third, the low silhouette of a 15th-century Mamluk sea fortress on a narrow headland, seen as a simple dark shape against the sky, not in close detail. A deep blue sea (#0B3C5D) with gentle swells and a sky graded from warm gold (#C49A3A) at the horizon to dark ink blue (#0E1A24) above. The left half and upper-left are calm, empty sky and water, kept dark and uncluttered so a title can be placed on top. A few distant city lights along the curve of the shore. Quiet, cinematic, poster-like composition.
- **Avoid:** text, logos, boats with names, people, fireworks, oversaturated orange, lens flare, pyramids, desert, minarets placed on the fortress, fantasy architecture.
- **On-site label:** "Illustration — AI-generated" (in the page footer or `alt`). Alternatively use a CC-licensed Wikimedia photo, search **"Citadel of Qaitbay sunset"**, cropped to 1200×630 with attribution.

### corniche-dusk-hero.jpg

- **Used in:** `src/sections/Hero.tsx:27` (currently `/images/Alexandria-Corniche-alexandria.jpg`)
- **Size:** 16:9, 1920×1080
- **Prompt:** Panoramic view along the Alexandria Corniche at blue hour. A long, curving seafront road with a low stone sea wall and wide pavement follows the bay, lined with tall cream and limestone apartment buildings with balconies, their windows starting to glow warm. Far along the curve, at the tip of the bay, the small dark silhouette of the Qaitbay sea fortress sits against the last gold light on the horizon. Calm deep-blue sea on the left, light car trails on the road, sky from gold (#C49A3A) near the horizon to ink blue (#0E1A24) above. The lower third and centre are darker and quieter so white headline text stays readable on top.
- **Avoid:** text, readable signs, billboards, brand logos, identifiable people, skyscrapers or a Dubai-style skyline, palm-lined tropical beach, desert, camels, feluccas, heavy HDR.
- **On-site label:** "Illustration — AI-generated" (small caption in a corner of the hero).

### pharos-to-future-timeline.jpg

- **Used in:** the planned "Pharos to Future" timeline (Phase 2 in `docs/TODO.md`); no component yet
- **Size:** 21:9, 1920×820
- **Prompt:** A single wide, continuous illustrated panorama of the Alexandria coastline that changes era from left to right without hard borders: on the far left an ancient harbour at dawn with a tall stepped lighthouse tower in soft, painterly haze (clearly an artistic reconstruction); then Hellenistic colonnades and a Roman theatre of white marble; then a medieval sea fortress and harbour walls; then 19th and early-20th-century European-style seafront buildings with a blue-and-cream tram; then a modern tilted-disc library building by the sea; and on the far right, a soft, light, sketch-like future waterfront with a light-rail viaduct and green parks, drawn more faintly to show it is planned. One continuous horizon and sea line ties it together. Warm papyrus (#F4ECDC) and limestone (#E8DFCC) base tones, deep sea blue water (#0B3C5D), gold (#C49A3A) highlights, gentle engraved / watercolour texture.
- **Avoid:** text, dates, labels, people in costume, pyramids, sphinx, desert, camels, feluccas, sci-fi neon cities, flying cars, logos.
- **On-site label:** "Illustration — AI-generated; ancient and future scenes are artistic impressions".

### wall-of-scripts-tile.jpg

- **Used in:** the planned "Wall of scripts" texture for dark sections and `src/components/Footer.tsx` (Phase 2); intended as a CSS `background-image` with `background-repeat: repeat`
- **Size:** 1:1, 1024×1024, **seamless tile**
- **Prompt:** Seamless, tileable texture of rough grey granite blocks carved with shallow relief characters from many of the world's writing systems (shapes inspired by Egyptian hieroglyphs, Greek, Arabic, Latin, Chinese, Devanagari and cuneiform), inspired by the granite wall of world alphabets at the Bibliotheca Alexandrina. The carvings are abstract glyph-like forms, not real readable words. Very low contrast: dark ink blue-grey stone (#0E1A24 to #1A2A36) with carvings only slightly lighter, soft raking light from the upper left, fine stone grain. Even lighting with no vignette or hotspots, so it repeats without visible seams.
- **Avoid:** readable words or sentences, modern Latin text, logos, high contrast, glossy stone, vignette, visible tile edges, colour casts, cracks running off one edge only.
- **On-site label:** none needed (decorative texture). Use it at about 5–10% opacity over the section colour.

---

## 2. Future projects (Concept illustrations)

All of these show planned or in-progress projects, so each one **must** carry its On-site label wherever it appears (project card and modal: `src/components/ProjectCard.tsx:69` and `:155`). Card size: 4:3, 1600×1200.

### abu-qir-metro-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:145` (`image:` of `abu-qir-metro`; it currently shows a Cairo Metro photo. Another agent is changing the path to `/images/abu-qir-metro-concept.jpg`)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of a modern elevated suburban metro line running east from central Alexandria towards Abu Qir. A sleek, modern electric train (white and sea-blue, no branding) on a clean concrete viaduct passes above a busy avenue lined with cream and limestone mid-rise apartment blocks with balconies and laundry, typical of eastern Alexandria. A glimpse of the Mediterranean and a few palm trees in the distance. Late-afternoon Mediterranean light, slightly hazy sea air. Accurate scale, realistic concrete, overhead catenary wires, a simple open-air elevated station with a curved canopy in the mid-ground.
- **Avoid:** text, station names, logos, Cairo Metro trains or Cairo landmarks, underground tunnels, skyscrapers, desert, camels, identifiable people, futuristic sci-fi styling.
- **On-site label:** "Concept illustration — AI-generated".

### raml-tram-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:112-113` (`raml-tram`; currently hotlinked from railwaynews.net). Can also replace the Unsplash image at `src/data/newsData.ts:44` (tram news item).
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of a modernised Raml tram in Alexandria: a new low-floor, double-ended tram painted in the Raml line's traditional **blue and cream** livery, stopping at a refurbished tram stop with a simple shelter on a tree-lined street of early-20th-century European-style buildings with ornate balconies, close to the seafront. Overhead wires, new paving, step-free platform. Morning Mediterranean light, calm and clean.
- **Avoid:** yellow trams, red trams, text, route numbers, logos, adverts, identifiable people, snow, northern-European streets, skyscrapers.
- **On-site label:** "Concept illustration — AI-generated".

### brt-corridor-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:187-188` (`brt-corridors`; currently hotlinked from aqarmap.com.eg)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of a bus rapid transit corridor on a wide Alexandria avenue: two dedicated central bus lanes with a raised island station with a shaded canopy, a long articulated electric bus in white and sea-blue with no branding, ordinary traffic in the side lanes, cream and limestone apartment blocks on both sides. Clear Mediterranean daylight, neat landscaping strips.
- **Avoid:** text, logos, adverts, route numbers, identifiable people, skyscrapers, desert, any city that is not a Mediterranean Egyptian city.
- **On-site label:** "Concept illustration — AI-generated".

### sludge-to-energy-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:209` (`sludge-to-energy` has only `imagePlaceholder`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of a modern wastewater sludge-to-energy plant on the flat edge of Alexandria near Lake Mariout: several egg-shaped and cylindrical anaerobic digesters, a gas holder dome, pipe racks and a small control building, clean concrete and steel, reed beds and water in the background. Soft late-afternoon light, slightly hazy.
- **Avoid:** text, logos, smoke plumes, pollution, identifiable people, desert dunes, nuclear-style cooling towers.
- **On-site label:** "Concept illustration — AI-generated".

### solar-water-treatment-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:228` (`solar-water-treatment`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of rows of solar panels on the flat roofs and open ground of a water treatment plant on the outskirts of Alexandria: round clarifier tanks, filter basins, pump buildings, and neat rows of photovoltaic panels reflecting a clear blue sky. Bright Mediterranean midday light, limestone-coloured ground.
- **Avoid:** text, logos, desert dunes, camels, identifiable people, wind turbines dominating the frame.
- **On-site label:** "Concept illustration — AI-generated".

### regional-control-center-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:250` (`regional-control-center`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Interior of a modern utility control room: a curved video wall showing abstract network diagrams and maps (no readable text), a row of operator desks with monitors, calm blue lighting (#0B3C5D) with warm accent lights, a window showing a sliver of Alexandria rooftops and sea. Operators, if any, seen from behind and out of focus.
- **Avoid:** readable text or numbers on screens, logos, identifiable faces, sci-fi holograms, military styling.
- **On-site label:** "Concept illustration — AI-generated".

### wastewater-network-concept.jpg

> **Still needed:** the Oct 2026 attempt had garbled AI text labels ("Water water", "Sewage sewage"). Regenerate with no labels.

- **Used in:** `src/data/projectsData.ts:268` (`wastewater-network`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Cut-away concept view of an Alexandria street during pipe-network works: a neat trench with large new concrete sewer pipes being placed, barriers and a small excavator, cream apartment blocks with balconies behind, the surface section showing the pipe network below in a clean illustrative cross-section. Daylight, orderly site.
- **Avoid:** text, logos, safety-sign lettering, identifiable workers' faces, mud chaos, flooding disaster imagery.
- **On-site label:** "Concept illustration — AI-generated".

### suds-green-drainage-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:286` (`suds`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of sustainable urban drainage on an Alexandria residential street after light winter rain: planted rain gardens and bioswales along the pavement, permeable paving, small street trees, water collecting in the planted areas instead of the road, cream and limestone buildings with balconies. Fresh, overcast Mediterranean winter light with wet reflections.
- **Avoid:** text, logos, severe flooding, identifiable people, tropical jungle planting, northern-European brick streets.
- **On-site label:** "Concept illustration — AI-generated".

### rail-factory-borg-el-arab-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Used in:** `src/data/projectsData.ts:305` (`alstom-complex`; add an `image` field)
- **Size:** 4:3, 1600×1200
- **Prompt:** Concept visualisation of a large modern rolling-stock factory in an industrial zone west of Alexandria: long assembly hall with steel portal frames, unbranded tram and metro car bodies on assembly tracks, bright high-bay lighting, a test track outside with flat land beyond. Clean, orderly, industrial.
- **Avoid:** company logos or names (do not show Alstom branding), text, identifiable workers, smoke, desert dunes, camels.
- **On-site label:** "Concept illustration — AI-generated".

---

## 3. Investment opportunities (Concept illustrations)

- **Used in:** `src/pages/InvestPage.tsx:259` (`PlaceholderImage` with no `src`). The opportunities in `src/data/investData.ts:159-188` have no `image` field yet: add one to each and pass `src={opp.image}`.
- **Size:** 4:3, 1600×1200
- **On-site label for all four:** "Concept illustration — AI-generated".

### kuta-land-hotel-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Data:** `investData.ts:161` "Utilization of Kuta Land"
- **Prompt:** Concept visualisation of an empty, fenced seafront development plot in central Alexandria at golden hour, with a faint, translucent white architectural massing model of a low-rise luxury hotel drawn over the plot to show it is a proposal. Cream and limestone city blocks and the calm sea around it.
- **Avoid:** text, logos, hotel brand names, the Bibliotheca Alexandrina building in detail, skyscrapers, identifiable people.

### recreational-medical-city-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Data:** `investData.ts:168` "Recreational or Medical City"
- **Prompt:** Aerial concept visualisation of a large planned campus on the edge of Alexandria: low white medical and leisure buildings, shaded walkways, green parks, a lake and sports fields, all drawn in a soft architectural-model style with light shadows, the dense city faintly visible at the edge.
- **Avoid:** text, logos, hospital crosses, identifiable people, desert dunes, skyscrapers.

### pharos-restoration-concept.jpg

> **Still needed:** the Oct 2026 attempt showed a generic modern lighthouse, not the ancient Pharos. Regenerate as the three-tiered ancient tower, clearly an artistic reconstruction.

- **Data:** `investData.ts:175` "Restoration of the Ancient Lighthouse (Pharos)"
- **Prompt:** Clearly illustrative architectural concept of a reconstructed ancient lighthouse museum on a harbour headland: a tall three-stage tower (square base, octagonal middle, cylindrical top) in pale limestone, drawn in a soft watercolour and pencil style, with a modest modern museum pavilion and small marina at its foot, sea in deep blue (#0B3C5D), warm papyrus sky.
- **Avoid:** photorealism (it must read as an illustration), text, logos, people, fantasy glowing beacons, pyramids, desert.
- **On-site label:** "Concept illustration — AI-generated; not an official design".

### rowing-stream-concept.jpg

> **Done (Oct 2026):** in `public/images/`, from the owner's Gemini batch.

- **Data:** `investData.ts:182` "International Maritime Rowing Stream"
- **Prompt:** Concept visualisation of a long, straight 2 km rowing course of calm water on flat land at the edge of Alexandria: lane buoys in a row, a low modern boathouse and grandstand with a shaded roof, reeds and palms along the banks, early-morning mist and soft light. Two distant rowing shells as small silhouettes.
- **Avoid:** text, logos, flags with emblems, identifiable people, desert, camels, feluccas.

---

## 4. Food (Illustrations)

Generic food and scenes with no specific landmark detail. These replace images hotlinked from other sites.

### Dishes

- **Used in:** `src/data/aboutData.ts:321-339` (`culinaryTraditions.dishes`), rendered in `src/sections/About.tsx:753`
- **Size:** 4:3, 1200×900 (shown as a short banner, so keep the dish centred)
- **On-site label for all:** "Illustration — AI-generated".
- **Shared avoid line:** text, logos, branded plates, hands or faces, cutlery clutter, Nile, pyramids, desert backdrops.

| Filename | Replaces | Prompt |
|---|---|---|
| `dish-sayadieh.jpg` | `aboutData.ts:321-322` (asif.org) | Overhead photo of Alexandrian sayadieh: a mound of rice tinted brown with caramelised onions, topped with pieces of white fish fillet, toasted pine nuts and parsley, on a simple ceramic platter on a weathered limestone tabletop, lemon wedges beside it, soft window light. |
| `dish-shrimp-tagine.jpg` | `aboutData.ts:327-328` (cairoscene.com) | Close-up of an Egyptian clay tagine (tajine) of shrimp baked in a herby tomato, pepper and garlic sauce, bubbling at the edges, on a seaside café table with a blue-and-cream cloth, soft daylight. |
| `dish-grilled-bouri.jpg` | `aboutData.ts:333` (slowmed.eu) | Whole grilled grey mullet (bouri) with charred skin, scattered with coarse salt and herbs, lemon halves, tahini and a small green salad on a fishmonger-restaurant table near the sea, late-afternoon light. |
| `dish-calamari-meshwi.jpg` | `aboutData.ts:338-339` (greekislandstaverna.com; it currently shows fried rings, not grilled squid) | Whole grilled squid (calamari meshwi) with char marks, brushed with garlic, olive oil and parsley, on a metal plate with lemon, on a seaside table with the sea softly blurred behind. |

### News items

News was removed from the site in Phase 1 (owner's decision, until there is real content), so no news images are needed.

---

## 5. Governor portrait (Ayman Mohamed Ibrahim Attia)

**Don't generate his portrait with AI.** An AI-made, realistic image of a real, living official looks like a real photo but isn't one. On an unofficial site, that is misleading and could be seen as impersonation. Gemini also usually refuses to generate likenesses of real public figures. Use one of these instead:

1. **Official or press photo (recommended).** Use a photo released by the Alexandria Governorate or the State Information Service, or a news-agency photo you have permission to use.
   - Save it as `public/images/governor-attia.jpg` (portrait, about 1200×1500, compressed to under 300 KB).
   - Show a credit under it, for example "Photo: Alexandria Governorate".
   - Commons search: **"Ayman Attia governor"** / **"أيمن عطية محافظ"**. Use it only if it is CC-licensed, and add attribution.
   - Then replace the `PlaceholderImage` in `src/pages/GovernorPage.tsx` and `src/sections/GovernorSection.tsx` with an `<img>` that has this `src`, plus the caption.
2. **Placeholder with no likeness**, until you have a real photo. It is safe to generate because it doesn't depict any person:

### governor-placeholder.jpg

- **Used in:** the portrait slot in `GovernorPage.tsx` and `GovernorSection.tsx`
- **Size:** 4:5, 1200×1500
- **Prompt:** Elegant, minimal editorial illustration for a city-governance page: the classical limestone façade of a civic building in Alexandria, Egypt, with tall arched windows and a balcony, softly lit at golden hour. The Egyptian flag and a plain blue flag hang on poles beside the entrance, gently moving in the sea breeze. A warm papyrus-cream (#F4ECDC) and limestone (#E8DFCC) palette with deep sea-blue (#0B3C5D) shadows and a muted gold (#C49A3A) sky. Calm, symmetrical, dignified composition with empty space in the lower third.
- **Avoid:** any people or faces, silhouettes of a man in a suit, text, emblems, seals, coats of arms, logos, readable signs, military symbols.
- **On-site label:** "Illustration — AI-generated. Official portrait to be added."

---

## 6. Use real photos instead (no AI prompt)

These show real places, buildings or businesses, so the site should use real photos. Get them from Wikimedia Commons (CC BY / CC BY-SA / public domain), download them into `public/images/`, compress them as above, and show the attribution (author, licence, link) in a caption or a credits page.

| Where | Current image | What to do | Commons search terms |
|---|---|---|---|
| `src/data/projectsData.ts:167` (Electric Bus, completed) | hotlinked from dailynewsegypt.com | Reuse the local `/images/bus-elc.png` (already used in `governorData.ts:92`), or a Commons photo | "Alexandria electric bus", "Buses in Alexandria Egypt" |
| `src/sections/About.tsx:780` (Délices) | hotlinked from etltravel.com | A real business: use your own photo or a Commons photo, never an AI image | "Délices Alexandria", "Patisserie Delices Alexandria" |
| `og-image.jpg` (alternative) | none | A real photo instead of the AI one in section 1 | "Citadel of Qaitbay sunset", "Qaitbay Citadel Alexandria dusk" |
| Current-state photos for projects (optional, next to the concept images) | none | Show what exists today beside the concept | "Ramleh tram Alexandria", "Abu Qir railway line", "Alexandria tram yellow" |
