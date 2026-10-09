// "Live here" community directory: places and organisations, plus recurring events.
// Same rules as servicesData.ts: every entry is checked against the organiser and
// carries an `asOf`. Events give a typical month; exact dates only when the
// organiser has published them. Past `nextStart` dates are hidden at render time.

import type { Confidence } from './facts';


export const placeKinds = [
  { id: 'cultural-centre', label: 'Cultural centres' },
  { id: 'arts-space', label: 'Arts spaces' },
  { id: 'library', label: 'Libraries' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'makerspace', label: 'Makerspaces' },
  { id: 'heritage', label: 'Heritage groups' },
] as const;

export type PlaceKind = (typeof placeKinds)[number]['id'];

export interface CommunityPlace {
  id: string;
  name: string;
  nameAr?: string;
  kind: PlaceKind;
  /** One plain sentence in our own words. */
  description: string;
  district?: string;
  url: string;
  confidence: Confidence;
  asOf: string;
}

export interface CommunityEvent {
  id: string;
  name: string;
  nameAr?: string;
  /** 1–12, taken from recent editions. */
  typicalMonth: number;
  organiser: string;
  url: string;
  latestEdition: { year: number; dates?: string; source: string };
  /** ISO date of the next published start, only if the organiser announced it. */
  nextStart?: string;
  description: string;
  confidence: Confidence;
  asOf: string;
}

export const places: CommunityPlace[] = [
  {
    id: 'bibliotheca-alexandrina',
    name: 'Bibliotheca Alexandrina',
    nameAr: 'مكتبة الإسكندرية',
    kind: 'cultural-centre',
    description: 'The library on the Corniche, which also hosts exhibitions, lectures, conferences and a yearly book fair.',
    district: 'Shatby',
    url: 'https://www.bibalex.org',
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'alexandria-opera-house',
    name: 'Alexandria Opera House (Sayed Darwish Theatre)',
    nameAr: 'دار أوبرا الإسكندرية – مسرح سيد درويش',
    kind: 'cultural-centre',
    description: 'A historic theatre, run with the Cairo Opera House, that stages concerts, ballet and salon evenings.',
    url: 'https://cairoopera.org',
    confidence: 'Official',
    asOf: '2026-10',
  },
];

export const events: CommunityEvent[] = [
  {
    id: 'ba-book-fair',
    name: 'Alexandria International Book Fair',
    nameAr: 'معرض مكتبة الإسكندرية الدولي للكتاب',
    typicalMonth: 7,
    organiser: 'Bibliotheca Alexandrina',
    url: 'https://www.bibalex.org',
    latestEdition: {
      year: 2026,
      dates: '6–20 July (21st edition)',
      source: 'https://english.ahram.org.eg/News/572847.aspx',
    },
    description: 'A two-week summer book fair at the Bibliotheca Alexandrina, with talks and events for all ages.',
    confidence: 'Reported',
    asOf: '2026-10',
  },
  {
    id: 'opera-summer-festival',
    name: 'Summer Festival at Sayed Darwish Theatre',
    typicalMonth: 7,
    organiser: 'Cairo Opera House',
    url: 'https://cairoopera.org',
    latestEdition: {
      year: 2026,
      dates: '22 July – 6 August',
      source: 'https://cairoopera.org/en/news/cairo-opera-house-launches-the-summer-festival-2026-in-cairo-and-alexandria/',
    },
    description: 'A summer season of nightly concerts in Alexandria, alongside the Cairo programme.',
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'mediterranean-film-festival',
    name: 'Alexandria Mediterranean Film Festival',
    nameAr: 'مهرجان الإسكندرية السينمائي لدول البحر المتوسط',
    typicalMonth: 10,
    organiser: 'Alexandria Mediterranean Film Festival',
    url: 'https://alexmcff.com',
    latestEdition: { year: 2026, source: 'https://filmmakers.festhome.com/festival/8396' },
    description: 'A yearly festival that screens and awards films from Mediterranean countries.',
    confidence: 'Reported',
    asOf: '2026-10',
  },
  {
    id: 'short-film-festival',
    name: 'Alexandria Short Film Festival',
    typicalMonth: 4,
    organiser: 'Alexandria Art Circle Association',
    url: 'https://alex-sff.com',
    latestEdition: { year: 2026, source: 'https://filmmakers.festhome.com/festival/alexandria-short-film-festival' },
    description: 'A spring festival of short fiction, documentary and animation films from Egypt and abroad.',
    confidence: 'Reported',
    asOf: '2026-10',
  },
];
