// "Honest Ledger": the single source of truth for every headline figure on the site.
// Each fact carries a source, an "as of" date and a confidence label.
//   Official = published by the responsible public body or lender
//   Reported = credible press or secondary source; no primary page found
//   Estimate = derived by this site (e.g. a sum of listed figures)
// Figures we could not source are NOT in `facts`; they are listed in `unsourcedFigures`.

export type Confidence = 'Official' | 'Reported' | 'Estimate';

export interface Fact {
  id: string;
  label: string;
  value: string;
  numeric?: number;
  unit?: string;
  source: { label: string; url: string };
  asOf: string;
  confidence: Confidence;
  note?: string;
}

export const LAST_REVIEWED = '2026-10';

export const facts = {
  // ---- City & people -------------------------------------------------------
  population: {
    id: 'population',
    label: 'Population (Alexandria Governorate)',
    value: '≈5.6 million',
    numeric: 5_599_387,
    unit: 'people',
    source: {
      label: 'CAPMAS, governorate population estimates (Jan 2024)',
      url: 'https://www.capmas.gov.eg/Admin/Pages%20Files/20245121324361-%20pop_new.pdf',
    },
    asOf: '2024-01',
    confidence: 'Official',
    note: 'Total residents, not workforce. CAPMAS mid-2023 estimate was 5,546,663.',
  },
  foundingYear: {
    id: 'foundingYear',
    label: 'Founded by Alexander the Great',
    value: '331 BCE',
    numeric: -331,
    unit: 'year',
    source: {
      label: 'Egypt Ministry of Tourism and Antiquities – Alexandria',
      url: 'https://egymonuments.gov.eg/en/archaeological-sites/alexandria',
    },
    asOf: '2026-10',
    confidence: 'Official',
    note: 'Gives the year only; the month (April vs January) is debated, so state the year alone. 331 BCE to 2026 is about 2,350 years.',
  },

  // ---- Economy & trade -----------------------------------------------------
  portTradeShare: {
    id: 'portTradeShare',
    label: "Share of Egypt's foreign trade handled by Alexandria Port",
    value: 'about 60%',
    numeric: 60,
    unit: '%',
    source: {
      label: 'Alexandria Port Authority – About the port',
      url: 'https://apa.gov.eg/en/page/port-information/about-port/',
    },
    asOf: '2026-10',
    confidence: 'Official',
    note: 'Replaces the conflicting 40% / 40%+ / 55% figures. Oxford Business Group (2013) put all Alexandria ports at about 75%.',
  },
  industrialShare: {
    id: 'industrialShare',
    label: "Share of Egypt's industrial activity in and around Alexandria",
    value: 'around 40%',
    numeric: 40,
    unit: '%',
    source: {
      label: 'Oxford Business Group, The Report: Egypt 2013',
      url: 'https://oxfordbusinessgroup.com/reports/egypt/2013-report/economy/alexandria-the-great-with-a-number-of-advantages-the-city-has-a-bright-future',
    },
    asOf: '2013',
    confidence: 'Reported',
    note: 'Old, widely repeated figure with no current CAPMAS breakdown. Say "around 40%" and show the date.',
  },
  freeZoneArea: {
    id: 'freeZoneArea',
    label: 'Alexandria Public Free Zone (Amreya) area',
    value: '5.7 million m² (1,357 feddans)',
    numeric: 5_700_000,
    unit: 'm²',
    source: {
      label: 'GAFI, Free Zones Guide',
      url: 'https://gafiadmin.gafi.gov.eg/media/hcrcxnq0/free-zones-guide.pdf',
    },
    asOf: '2025',
    confidence: 'Official',
    note: 'GAFI: the largest public free zone in Egypt by area, about 25 km from the city centre and 20 km from the seaport.',
  },

  // ---- Governorate programme (2024–2026) ----------------------------------
  governorateProjectsCompleted: {
    id: 'governorateProjectsCompleted',
    label: 'Governorate projects completed (31 more under way)',
    value: '63',
    numeric: 63,
    unit: 'projects',
    source: {
      label: "Amwal Al Ghad – governor's briefing to the Prime Minister",
      url: 'https://en.amwalalghad.com/alexandria-scales-up-public-transport-roadworks-to-ease-congestion/',
    },
    asOf: '2025-07',
    confidence: 'Reported',
  },
  governorateProjectsValue: {
    id: 'governorateProjectsValue',
    label: 'Value of completed governorate projects',
    value: 'EGP 90.5 billion',
    numeric: 90_500_000_000,
    unit: 'EGP',
    source: {
      label: "Amwal Al Ghad – governor's briefing to the Prime Minister",
      url: 'https://en.amwalalghad.com/alexandria-scales-up-public-transport-roadworks-to-ease-congestion/',
    },
    asOf: '2025-07',
    confidence: 'Reported',
    note: 'About US$1.83B at the time. Covers the 63 completed projects, so do not write "90.5B+".',
  },
  roadsRehabilitated: {
    id: 'roadsRehabilitated',
    label: 'Roads built or upgraded',
    value: 'about 200 km',
    numeric: 200,
    unit: 'km',
    source: {
      label: "Amwal Al Ghad – governor's briefing to the Prime Minister",
      url: 'https://en.amwalalghad.com/alexandria-scales-up-public-transport-roadworks-to-ease-congestion/',
    },
    asOf: '2025-07',
    confidence: 'Reported',
    note: 'A further 117 km was under development. That figure is road length, not the Corniche.',
  },
  electricBusFleet: {
    id: 'electricBusFleet',
    label: 'Electric buses in service',
    value: '55',
    numeric: 55,
    unit: 'buses',
    source: {
      label: "Amwal Al Ghad – governor's briefing to the Prime Minister",
      url: 'https://en.amwalalghad.com/alexandria-scales-up-public-transport-roadworks-to-ease-congestion/',
    },
    asOf: '2025-07',
    confidence: 'Reported',
    note: 'The first 15 BYD buses arrived in 2018. 55 is the fleet size in 2025.',
  },

  // ---- Abu Qir Metro ------------------------------------------------------
  abuQirMetroLength: {
    id: 'abuQirMetroLength',
    label: 'Abu Qir Metro length',
    value: '21.7 km',
    numeric: 21.7,
    unit: 'km',
    source: {
      label: 'EIB – Alexandria Abu Qir Urban Rail Project (20180765)',
      url: 'https://www.eib.org/en/projects/all/20180765',
    },
    asOf: '2023-09',
    confidence: 'Official',
    note: 'AIIB rounds it to 22 km, of which 16 km is elevated.',
  },
  abuQirMetroStations: {
    id: 'abuQirMetroStations',
    label: 'Abu Qir Metro stations',
    value: '20',
    numeric: 20,
    unit: 'stations',
    source: {
      label: 'AIIB – Alexandria Abu Qir Metro Line, Project Summary Information (Mar 2026)',
      url: 'https://www.aiib.org/en/projects/details/2026/_download/Egypt/Updated-PSI-P000207-Egypt-Alexandria-Abu-Qir-Metro-Line-Project-Egypt-clean.pdf',
    },
    asOf: '2026-03',
    confidence: 'Official',
  },
  abuQirMetroCapacity: {
    id: 'abuQirMetroCapacity',
    label: 'Abu Qir Metro design capacity',
    value: '60,000 passengers per hour per direction',
    numeric: 60_000,
    unit: 'passengers/hour/direction',
    source: {
      label: 'Ahram Online – contract signing (Sep 2023)',
      url: 'https://english.ahram.org.eg/NewsContent/1/1235/507917/Egypt/Urban--Transport/FrenchEgyptian-consortium-to-convert-Alexandria-Me.aspx',
    },
    asOf: '2023-09',
    confidence: 'Reported',
    note: 'The lenders publish no figure. The governorate cited "over 40,000/hr" in Jul 2025, so the 40k vs 60k conflict is in the sources too.',
  },
  abuQirMetroCost: {
    id: 'abuQirMetroCost',
    label: 'Abu Qir Metro total project cost',
    value: '€1.764 billion',
    numeric: 1_764_000_000,
    unit: 'EUR',
    source: {
      label: 'EIB project 20180765; AIIB PSI (Mar 2026)',
      url: 'https://www.eib.org/en/projects/all/20180765',
    },
    asOf: '2026-03',
    confidence: 'Official',
    note: 'Lenders: EIB €750M, EBRD €250M, AFD €250M, AIIB €250M, Government of Egypt €264M. The EPC contract alone is about €1.3B. Completion is expected Jan 2028. The site\'s €1.39B is out of date.',
  },

  // ---- Raml Tram ----------------------------------------------------------
  ramlTramOpened: {
    id: 'ramlTramOpened',
    label: 'Raml tram in operation since',
    value: '1863',
    numeric: 1863,
    unit: 'year',
    source: {
      label: 'Ahram Online – Raml tram modernisation (May 2025)',
      url: 'https://english.ahram.org.eg/News/546727.aspx',
    },
    asOf: '2025-05',
    confidence: 'Reported',
    note: 'It opened as a horse-drawn line, so do not call it the "oldest electric" tram.',
  },
  ramlTramLength: {
    id: 'ramlTramLength',
    label: 'Raml tram length (modernised line)',
    value: '13.2 km',
    numeric: 13.2,
    unit: 'km',
    source: {
      label: 'Ahram Online – Raml tram modernisation (May 2025)',
      url: 'https://english.ahram.org.eg/News/546727.aspx',
    },
    asOf: '2025-05',
    confidence: 'Reported',
    note: 'Made up of 5.7 km at street level, 7.3 km elevated and 276 m underground. EIB appraisal (2018) gave 13.8 km.',
  },
  ramlTramStations: {
    id: 'ramlTramStations',
    label: 'Raml tram stations (modernised line)',
    value: '24',
    numeric: 24,
    unit: 'stations',
    source: {
      label: 'Ahram Online – Raml tram modernisation (May 2025)',
      url: 'https://english.ahram.org.eg/News/546727.aspx',
    },
    asOf: '2025-05',
    confidence: 'Reported',
  },
  ramlTramRidershipTarget: {
    id: 'ramlTramRidershipTarget',
    label: 'Raml tram target ridership after modernisation',
    value: '500,000 passengers per day',
    numeric: 500_000,
    unit: 'passengers/day',
    source: {
      label: 'AFD – Key projects in Alexandria (factsheet)',
      url: 'https://afd.fr/sites/default/files/2024-10-02-49-04/Fiche%20projets%20phares%20Alexandrie%20ANG.pdf',
    },
    asOf: '2024-10',
    confidence: 'Official',
    note: 'A target, not current ridership. The governorate cited 450,000 (up from 80,000) in Jul 2025. Hourly capacity rises from 4,700 to 13,800 per direction (Ahram).',
  },
  ramlTramCost: {
    id: 'ramlTramCost',
    label: 'Raml tram modernisation total cost',
    value: '€592 million',
    numeric: 592_000_000,
    unit: 'EUR',
    source: {
      label: 'EIB – Alexandria Raml Tram (20160125)',
      url: 'https://www.eib.org/en/projects/all/20160125',
    },
    asOf: '2018-09',
    confidence: 'Official',
    note: 'EIB €138M, AFD €100M, EU grant €8M. The rest is from the Government of Egypt.',
  },

  // ---- Projects page (derived) --------------------------------------------
  projectsTotal: {
    id: 'projectsTotal',
    label: 'Sum of listed project budgets',
    value: '≈€2.52 billion',
    numeric: 2_524_000_000,
    unit: 'EUR',
    source: {
      label: 'Sum of budgets listed on this site (projectsData.ts)',
      url: '/projects',
    },
    asOf: '2026-10',
    confidence: 'Estimate',
    note: 'Adds the 7 projects with a budget: 592 + 1,764 + 20 + 30 + 33 + 50 + 35 = €2,524M (Abu Qir uses the official €1.764B). Excludes e-buses, wastewater and Alstom, which have no budget. Shown on the site as "≈€2.5B in listed project budgets". This is a sum of listed projects, not money "invested".',
  },
  projectsUnderConstruction: {
    id: 'projectsUnderConstruction',
    label: 'Listed projects under construction',
    value: '4',
    numeric: 4,
    unit: 'projects',
    source: {
      label: 'Count of status "Under Construction" in projectsData.ts',
      url: '/projects',
    },
    asOf: '2026-10',
    confidence: 'Estimate',
    note: 'The four are Raml tram, Abu Qir metro, the regional control centre and the Alstom complex. Ideally computed from the data at render time.',
  },

  // ---- Heritage -----------------------------------------------------------
  pompeysPillarHeight: {
    id: 'pompeysPillarHeight',
    label: "Pompey's Pillar (Diocletian's Column) height",
    value: '26.85 m',
    numeric: 26.85,
    unit: 'm',
    source: {
      label: "Wikipedia – Pompey's Pillar (pointer; no primary page found)",
      url: 'https://en.wikipedia.org/wiki/Pompey%27s_Pillar',
    },
    asOf: '2026-10',
    confidence: 'Reported',
    note: 'Includes base and capital. Dated to the late 290s CE (Ministry of Tourism and Antiquities); 297 vs 298–302 CE is debated, so prefer "c. 298 CE" or "late 290s".',
  },
  qaitbayCitadelBuilt: {
    id: 'qaitbayCitadelBuilt',
    label: 'Citadel of Qaitbay built',
    value: '1477–1479',
    numeric: 1477,
    unit: 'year',
    source: {
      label: 'Egypt Ministry of Tourism and Antiquities – Qaitbay Fort',
      url: 'https://egymonuments.gov.eg/monuments/qaitbay-fort/',
    },
    asOf: '2026-10',
    confidence: 'Official',
    note: 'Built 882–884 AH on the ruins of the Pharos lighthouse.',
  },
  bibliothecaOpened: {
    id: 'bibliothecaOpened',
    label: 'Bibliotheca Alexandrina inaugurated',
    value: '16 October 2002',
    numeric: 2002,
    unit: 'year',
    source: {
      label: 'Bibliotheca Alexandrina – The New Bibliotheca Alexandrina (2007)',
      url: 'https://www.bibalex.org/Attachments/Publications/Files/1_NewBibliothecaAlexandrina.pdf',
    },
    asOf: '2007',
    confidence: 'Official',
  },
  bibliothecaCapacity: {
    id: 'bibliothecaCapacity',
    label: 'Bibliotheca Alexandrina ultimate shelf capacity',
    value: '8 million volumes',
    numeric: 8_000_000,
    unit: 'volumes',
    source: {
      label: 'Bibliotheca Alexandrina – The New Bibliotheca Alexandrina (2007)',
      url: 'https://www.bibalex.org/Attachments/Publications/Files/1_NewBibliothecaAlexandrina.pdf',
    },
    asOf: '2007',
    confidence: 'Official',
    note: 'This is a design capacity (with compact storage), not the current holdings.',
  },
  bibliothecaReadingSeats: {
    id: 'bibliothecaReadingSeats',
    label: 'Bibliotheca Alexandrina main reading hall seats',
    value: '2,500',
    numeric: 2_500,
    unit: 'seats',
    source: {
      label: 'Bibliotheca Alexandrina – The New Bibliotheca Alexandrina (2007)',
      url: 'https://www.bibalex.org/Attachments/Publications/Files/1_NewBibliothecaAlexandrina.pdf',
    },
    asOf: '2007',
    confidence: 'Official',
  },
  bibliothecaMuseums: {
    id: 'bibliothecaMuseums',
    label: 'Museums inside the Bibliotheca Alexandrina',
    value: '4',
    numeric: 4,
    unit: 'museums',
    source: {
      label: 'Bibliotheca Alexandrina – Overview',
      url: 'https://www.bibalex.org/en/Page/overview',
    },
    asOf: '2026-10',
    confidence: 'Official',
    note: 'The four are the Antiquities, Manuscripts, Sadat and History of Science museums.',
  },
  bibliothecaVisitors: {
    id: 'bibliothecaVisitors',
    label: 'Bibliotheca Alexandrina annual visitors',
    value: 'about 1.5 million',
    numeric: 1_500_000,
    unit: 'visitors/year',
    source: {
      label: 'Bibliotheca Alexandrina – Overview',
      url: 'https://www.bibalex.org/en/Page/overview',
    },
    asOf: '2026-10',
    confidence: 'Official',
    note: 'This figure is for the Bibliotheca only. It is not a city-wide visitor count.',
  },
} as const satisfies Record<string, Fact>;

export type FactId = keyof typeof facts;

/**
 * Figures the site used to show without a source. None of them remain in `src/`:
 * each was either removed outright or reworded without a number. `where` says
 * what the copy says now. If a source turns up, add it to `facts` instead.
 */
export const unsourcedFigures: {
  figure: string;
  status: 'removed' | 'reworded';
  where: string;
}[] = [
  {
    figure: '$40B GDP contribution',
    status: 'removed',
    where: 'Dropped from the home stats strip (Statistics section deleted) and the Invest section.',
  },
  {
    figure: 'Sector growth +15% / +22% / +18% / +28%',
    status: 'removed',
    where: 'Invest section sector cards now have descriptions only, no growth rates.',
  },
  {
    figure: '2M+ annual visitors (city-wide)',
    status: 'reworded',
    where: 'Invest tourism sector says "year-round visitors"; the only visitor count is the sourced Bibliotheca figure.',
  },
  {
    figure: '15 museums & galleries',
    status: 'removed',
    where: 'Home stats strip removed.',
  },
  {
    figure: '100+ annual cultural events',
    status: 'removed',
    where: 'Home stats strip removed.',
  },
  {
    figure: '50+ years of heritage preservation',
    status: 'removed',
    where: 'Home stats strip removed.',
  },
  {
    figure: 'Corniche length (about 20 km)',
    status: 'reworded',
    where: 'aboutData corniche and visitData "Walking" say "a long seafront promenade" / "the long seafront Corniche".',
  },
  {
    figure: 'City "stretching 30 km along the coast"',
    status: 'reworded',
    where: 'Visit section "Orientation": "a ribbon city, stretching along the coast".',
  },
  {
    figure: 'Population "nearly 7 million"',
    status: 'reworded',
    where: 'Invest page uses the sourced population fact (≈5.6M) and otherwise says "large local population".',
  },
  {
    figure: '5.6M labelled "Strategic Workforce"',
    status: 'reworded',
    where: 'Invest page and section label it "Population", with a source chip.',
  },
  {
    figure: 'GCAP pipeline €506M total identified',
    status: 'reworded',
    where: 'projectsData GCAP shows ≈€180M, the sum of the listed pipeline items (Vision 2030 section and Projects hero).',
  },
  {
    figure: '40% less street-lighting energy (and 10% from ad boards)',
    status: 'removed',
    where: 'Removed from the home hero and governorData.',
  },
  {
    figure: '99.96% monitoring rate / 56,400+ spatial changes',
    status: 'removed',
    where: 'Removed from governorData.',
  },
  {
    figure: '41+ tourist attractions',
    status: 'reworded',
    where: 'investData tourism driver: "a wide range of heritage and coastal attractions".',
  },
  {
    figure: 'Ptolemaic peak population 500k–1M; 40% foreign-born by the 1940s',
    status: 'reworded',
    where: 'aboutData eras: "a large, mixed population" and "large Greek, Italian and other foreign communities".',
  },
];
