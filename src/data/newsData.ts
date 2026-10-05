// City briefing: a curated digest of real reporting about Alexandria.
// This site does not write news. Each item is a short summary in our own words
// that links out to the original report. No quotes, no invented items.
// Add an item only with a working `url` and the outlet's own publication `date`.

export type NewsCategory =
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
}

export const newsCategories: readonly NewsCategory[] = [
  'Transport',
  'Heritage & culture',
  'Economy & ports',
  'City & environment',
];

// Last checked 2026-10 (each claim re-checked against its page).
export const newsItems: readonly NewsItem[] = [
  {
    id: 'northern-coast-protection-2026-09',
    title: 'Coastal defence works planned for two Alexandria stretches',
    summary:
      "The water ministry reviewed north-coast protection projects. In Alexandria, a 2 km first phase runs between Bir Masoud and Al-Mahrousa, and a 600 m second phase at Laurent is meant to protect the Corniche seawall and restore the beach.",
    category: 'City & environment',
    date: '2026-09-08',
    outlet: 'Daily News Egypt',
    url: 'https://www.dailynewsegypt.com/2026/09/08/egypt-advances-coastal-protection-projects-to-address-climate-risks-along-northern-shoreline/',
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
  },
  {
    id: 'west-mahrousa-shore-protection-2026-06',
    title: 'Ministers inspect shore protection at West Mahrousa',
    summary:
      'The water resources minister and the governor visited coastal works at West Mahrousa, where 600 m of eroded beach has been recovered. The plan is to restore 2.6 km of beaches by the end of 2027.',
    category: 'City & environment',
    date: '2026-06-13',
    outlet: 'Ahram Gate',
    url: 'https://gate.ahram.org.eg/News/5672427.aspx',
    lang: 'ar',
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
  },
  {
    id: 'summer-2026-corniche-beaches',
    title: 'Corniche widened and 43 beaches open for summer 2026',
    summary:
      'Ahead of summer, 5 km of the Corniche was widened and 43 public beaches opened (19 in the east, 24 in the west), with entry prices set between EGP 5 and 30.',
    category: 'City & environment',
    date: '2026-04-22',
    outlet: 'Ahram Gate',
    url: 'https://gate.ahram.org.eg/Massai/News/5601326.aspx',
    lang: 'ar',
  },
  {
    id: 'raml-tram-suspended-2026-04',
    title: 'Raml tram fully suspended for light-rail rebuild',
    summary:
      'All service on the Raml tram has stopped so the line can be rebuilt as a higher-capacity light rail.',
    category: 'Transport',
    date: '2026-04-09',
    outlet: 'Global Mass Transit',
    url: 'https://globalmasstransit.net/alexandria-suspends-ramleh-tramway-for-light-rail-upgrade-egypt/',
    projectId: 'raml-tram',
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
  },
];
