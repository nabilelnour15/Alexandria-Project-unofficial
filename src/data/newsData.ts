// City briefing: a curated digest of real reporting about Alexandria.
// This site does not write news. Each item is a short summary in our own words
// that links out to the original report. No quotes, no invented items.
// Add an item only with a working `url` and the outlet's own publication `date`.

export type NewsCategory =
  | 'Governorate'
  | 'Transport'
  | 'Heritage & culture'
  | 'Economy & ports'
  | 'City & environment';

export interface NewsItem {
  readonly id: string;
  /** Our own neutral headline. Don't copy the outlet's headline word for word. */
  readonly title: string;
  /** One or two sentences in our own words. Facts only, no quotes. */
  readonly summary: string;
  readonly category: NewsCategory;
  /** Publication date given by the outlet, YYYY-MM-DD. */
  readonly date: string;
  /** Outlet name, e.g. "Ahram Online". */
  readonly outlet: string;
  readonly url: string;
  /** Language of the linked report, when it isn't English. */
  readonly lang?: 'ar' | 'fr';
  /** `projectsData` id when the story is about a listed city project. */
  readonly projectId?: string;
  /** Key in `newsImages`: a licensed photo of the related place, not of the event. */
  readonly image?: string;
}

export const newsCategories: readonly NewsCategory[] = [
  'Governorate',
  'Transport',
  'Heritage & culture',
  'Economy & ports',
  'City & environment',
];

/** URL value for a topic: "Heritage & culture" -> "heritage-culture". */
export const topicSlug = (c: NewsCategory) => c.toLowerCase().replace(/[^a-z]+/g, '-');

/** Lower-case, accent-free text for search. Arabic is left as it is. */
const fold = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/ø/gi, 'o').toLowerCase();

/** True when every word of `query` appears in the item's title, summary, outlet or topic. */
export function matchesQuery(item: NewsItem, query: string): boolean {
  const haystack = fold(`${item.title} ${item.summary} ${item.outlet} ${item.category}`);
  return fold(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}

// Last checked 2026-10 (each claim re-checked against its page).
export const newsItems: readonly NewsItem[] = [
  {
    id: 'ba-rethinking-rebuilding-2026-10',
    title: 'Library to host "Rethinking Rebuilding" symposium, 11–13 October',
    summary:
      'The Bibliotheca Alexandrina is organising a public international symposium with Snøhetta and the Norwegian Embassy, with lectures, exhibitions, film screenings and masterclasses.',
    category: 'Heritage & culture',
    date: '2026-10-04',
    outlet: 'Bibliotheca Alexandrina',
    url: 'https://www.bibalex.org/news/Details.aspx?DocumentID=46344&page=1',
    image: 'library',
  },
  {
    id: 'ba-travellers-seminar-2026-09',
    title: "Seminar on Egypt in travellers' writings at the library's Antiquities Museum",
    summary:
      'Three lectures looked at how Arab, Muslim and Western travellers described Egypt across different periods.',
    category: 'Heritage & culture',
    date: '2026-09-29',
    outlet: 'Bibliotheca Alexandrina',
    url: 'https://www.bibalex.org/news/Details.aspx?DocumentID=46341&page=1',
    image: 'library',
  },
  {
    id: 'raml-tram-replacement-routes-2026-09',
    title: 'Five replacement minibus routes while the Raml tram is closed',
    summary:
      'For the new school year the governorate set five alternative routes using minibuses and microbuses, with fares of EGP 6–10, free rides for over-70s and half fares for over-60s.',
    category: 'Transport',
    date: '2026-09-14',
    outlet: 'Masrawy',
    url: 'https://www.masrawy.com/news/news_regions/details/2026/9/14/3047854',
    lang: 'ar',
    projectId: 'raml-tram',
    image: 'raml-tram',
  },
  {
    id: 'abu-qir-metro-progress-2026-06',
    title: 'Abu Qir metro first phase reported 47% complete',
    summary:
      'The 22 km, 20-station first phase from Abu Qir to Misr station was reported 47% executed during a prime-ministerial inspection, with opening targeted for 2027.',
    category: 'Transport',
    date: '2026-06-08',
    outlet: 'Al-Dostor',
    url: 'https://www.dostor.org/5589136',
    lang: 'ar',
    projectId: 'abu-qir-metro',
    image: 'rail',
  },
  {
    id: 'high-speed-rail-central-alexandria-2026-05',
    title: 'Study to bring high-speed rail into central Alexandria',
    summary:
      'The National Authority for Tunnels signed with Siemens Mobility for a feasibility study on extending the high-speed rail network into the city centre.',
    category: 'Transport',
    date: '2026-05-02',
    outlet: 'Egypt Independent',
    url: 'https://www.egyptindependent.com/egypt-studies-high-speed-train-extension-to-central-alexandria/',
    image: 'rail',
  },
  {
    id: 'northern-coast-protection-2026-09',
    title: 'Coastal defence works planned for two Alexandria stretches',
    summary:
      "The water ministry reviewed north-coast protection projects. In Alexandria, a 2 km first phase runs between Bir Masoud and Al-Mahrousa, and a 600 m second phase at Laurent is meant to protect the Corniche seawall and restore the beach.",
    category: 'City & environment',
    date: '2026-09-08',
    outlet: 'Daily News Egypt',
    url: 'https://www.dailynewsegypt.com/2026/09/08/egypt-advances-coastal-protection-projects-to-address-climate-risks-along-northern-shoreline/',
    image: 'corniche',
  },
  {
    id: 'ad-ports-alexandria-containers-offer-2026-06',
    title: 'AD Ports raises its offer for Alexandria Container and Cargo Handling',
    summary:
      'An AD Ports Group subsidiary submitted a revised tender offer of EGP 27.47 per share for up to 90% of the company that runs container terminals at Alexandria and Dekheila, about 19.5% above its earlier offer.',
    category: 'Economy & ports',
    date: '2026-06-14',
    outlet: 'Enterprise',
    url: 'https://enterpriseam.com/egypt/2026/06/14/ad-ports-bumps-up-alex-containers-offer-to-egp-27-47-per-share-to-consolidate-51-3-majority/',
    image: 'port',
  },
  {
    id: 'west-mahrousa-shore-protection-2026-06',
    title: 'Ministers inspect shore protection at West Mahrousa',
    summary:
      'The water resources minister and the governor visited coastal works at West Mahrousa, where submerged barriers are set to recover 600 m of eroded beach. The plan is to restore 2.6 km of beaches by the end of 2027.',
    category: 'City & environment',
    date: '2026-06-13',
    outlet: 'Ahram Gate',
    url: 'https://gate.ahram.org.eg/News/5672427.aspx',
    lang: 'ar',
    image: 'corniche',
  },
  {
    id: 'borg-el-arab-factories-2026-06',
    title: 'Prime minister opens factories in New Borg El Arab',
    summary:
      'The prime minister toured the Borg El Arab industrial area, opened new factories including a garment plant, and inspected the Alstom railway manufacturing complex.',
    category: 'Economy & ports',
    date: '2026-06-07',
    outlet: 'Daily News Egypt',
    url: 'https://www.dailynewsegypt.com/2026/06/07/madbouly-opens-factories-inspects-major-investments-in-alexandria/',
    projectId: 'alstom-complex',
    image: 'industry',
  },
  {
    id: 'moharram-bek-excavation-2026-05',
    title: 'Moharram Bek excavation finds Ptolemaic to Byzantine remains',
    summary:
      "Excavations in Alexandria's Moharram Bek district uncovered artefacts and remains spanning the Ptolemaic, Roman and Byzantine periods.",
    category: 'Heritage & culture',
    date: '2026-05-09',
    outlet: 'The Jerusalem Post',
    url: 'https://www.jpost.com/archaeology/article-895584',
    image: 'archaeology',
  },
  {
    id: 'beach-lifeguard-checks-2026-05',
    title: 'Lifeguard readiness checked on beaches from Abu Qir to km 21',
    summary:
      "A joint committee toured the city's beaches before the summer season to check lifeguard readiness under the national \"Beaches Without Drowning\" initiative.",
    category: 'City & environment',
    date: '2026-05-01',
    outlet: 'Al-Dostor',
    url: 'https://www.dostor.org/5534125',
    lang: 'ar',
    image: 'beach',
  },
  {
    id: 'summer-2026-corniche-beaches',
    title: 'Corniche widened and 43 beaches open for summer 2026',
    summary:
      'Ahead of summer, 5 km of the Corniche was widened and 43 public beaches opened (19 in the east, 24 in the west), with one free beach and entry prices of EGP 5 to 30 at the rest.',
    category: 'City & environment',
    date: '2026-04-22',
    outlet: 'Ahram Gate',
    url: 'https://gate.ahram.org.eg/Massai/News/5601326.aspx',
    lang: 'ar',
    image: 'corniche',
  },
  {
    id: 'raml-tram-suspended-2026-04',
    title: 'Raml tram fully suspended for light-rail rebuild',
    summary:
      'All service on the Raml tram stopped on 1 April 2026 so the line can be rebuilt as a higher-capacity light rail.',
    category: 'Transport',
    date: '2026-04-10',
    outlet: 'Urban Transport Magazine',
    url: 'https://www.urban-transport-magazine.com/en/alexandria-system-transition-of-the-ramleh-tram-between-modernisation-and-the-loss-of-urban-identity/',
    projectId: 'raml-tram',
    image: 'raml-tram',
  },
  {
    id: 'raml-tram-minister-review-2026-03',
    title: 'Transport minister reviews Raml tram rehabilitation',
    summary:
      'According to the contractor, the rebuilt line will run 13.2 km with 24 stations and use 30 new Hyundai Rotem trams.',
    category: 'Transport',
    date: '2026-03-04',
    outlet: "Arab Contractors (contractor's press release)",
    url: 'https://arabcont.com/english/Release-2026-2376',
    projectId: 'raml-tram',
    image: 'raml-tram',
  },
  {
    id: 'iskandariya-btefrah-2026-07',
    title: 'Summer initiative brings sports sessions to city beaches',
    summary:
      'The fifth edition of the "Iskandariya Btefrah" initiative ran fitness, running, football and volleyball activities on Alexandria beaches with the youth and sports directorate.',
    category: 'Governorate',
    date: '2026-07-31',
    outlet: 'Al-Bawaba News',
    url: 'https://www.albawabhnews.com/5392614',
    lang: 'ar',
    image: 'beach',
  },
  {
    id: 'green-smart-projects-2026-06',
    title: 'Governor meets national green smart projects coordinator',
    summary:
      "The governor met the initiative's general coordinator, Ambassador Hisham Badr, about Alexandria's part in the initiative's new round.",
    category: 'Governorate',
    date: '2026-06-30',
    outlet: 'Ahram Gate',
    url: 'https://gate.ahram.org.eg/News/5722799.aspx',
    lang: 'ar',
    image: 'city',
  },
  {
    id: 'encroachment-removals-2026-06',
    title: '25 encroachments removed in latest enforcement wave',
    summary:
      'District authorities removed 25 encroachments and building violations as part of the second phase of the 29th national removal wave.',
    category: 'Governorate',
    date: '2026-06-08',
    outlet: 'Al-Dostor',
    url: 'https://www.dostor.org/5589634',
    lang: 'ar',
    image: 'city',
  },
  {
    id: 'shop-licence-single-window-2026-06',
    title: 'One-stop window for shop licences, opened in April',
    summary:
      'A prime-ministerial review of Alexandria projects noted that the governorate and the Chamber of Commerce opened the first unified window for licensing shops and commercial premises in April 2026.',
    category: 'Governorate',
    date: '2026-06-02',
    outlet: 'Masrawy',
    url: 'https://www.masrawy.com/news/news_egypt/details/2026/6/2/2996864/',
    lang: 'ar',
    image: 'city',
  },
  {
    id: 'alexandria-university-hospitals-2026-05',
    title: 'EGP 632 million of upgrades open at Alexandria University hospitals',
    summary:
      'The higher education minister, the governor and the university president opened healthcare projects at the university hospitals, costing about EGP 632 million in total.',
    category: 'City & environment',
    date: '2026-05-10',
    outlet: 'Ministry of Higher Education',
    url: 'https://mohesr.gov.eg/en/all-events/minister-of-higher-education,-alexandria-governor,-and-president-of-alexandria-university-inaugurate-healthcare-projects-worth-egp-632-million',
    image: 'hospital',
  },
  {
    id: 'urban-capacity-phase-two-2026-04',
    title: 'Phase two of urban capacity-building project reviewed',
    summary:
      'The governorate, the Urban Development Fund and GIZ reviewed early results of phase two, which covers Karmouz and El-Labban after phase one in Abu Qir. The project runs to 2029.',
    category: 'Governorate',
    date: '2026-04-30',
    outlet: 'Al-Dostor',
    url: 'https://www.dostor.org/5532106',
    lang: 'ar',
    image: 'city',
  },
  {
    id: 'amreya-hospital-expansion-2026-04',
    title: 'El-Amreya General Hospital expansion opens',
    summary:
      'An expansion built with the petroleum sector opened at the hospital, doubling its operating rooms from three to six.',
    category: 'City & environment',
    date: '2026-04-29',
    outlet: 'Al-Dostor',
    url: 'https://www.dostor.org/5531431',
    lang: 'ar',
    image: 'hospital',
  },
  {
    id: 'health-insurance-hospitals-inspection-2026-04',
    title: 'Governor inspects two health-insurance hospitals',
    summary:
      'The governor toured the Gamal Abdel Nasser and Sporting Students hospitals to check services and equipment.',
    category: 'Governorate',
    date: '2026-04-05',
    outlet: 'Al-Watan',
    url: 'https://www.elwatannews.com/news/details/8259310',
    lang: 'ar',
    image: 'hospital',
  },
  {
    id: 'governor-sworn-in-2026-02',
    title: 'Ayman Mohamed Ibrahim Attia sworn in as governor of Alexandria',
    summary:
      'New governors and their deputies took the oath of office before the president; Ayman Mohamed Ibrahim Attia was named governor of Alexandria.',
    category: 'Governorate',
    date: '2026-02-16',
    outlet: 'Youm7',
    url: 'https://www.youm7.com/7307019',
    lang: 'ar',
    image: 'city',
  },
];
