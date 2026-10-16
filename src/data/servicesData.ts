// "Live here" services guide: signposting only. We point people to the real provider
// and never do the transaction ourselves (see docs/TODO.md, "Live here" page).
// Every entry must be checked against the provider and carry an `asOf`.
// No fees, processing times or popularity unless the provider publishes them,
// and then only through `factId` so the UI shows a SourceChip.
// `confidence` uses the facts.ts labels: Official = the provider's or ministry's own
// page says it; Reported = news or a secondary guide says it.

import type { Confidence, FactId } from './facts';

export type ServiceCategory =
  | 'emergency'
  | 'documents'
  | 'utilities'
  | 'transport'
  | 'health'
  | 'business'
  | 'complaints';

export type ServiceChannel = 'online' | 'in-person' | 'phone';

export interface ServiceLink {
  id: string;
  title: string;
  titleAr?: string;
  category: ServiceCategory;
  /** Who actually runs it. Never this site. */
  provider: string;
  channel: ServiceChannel;
  /** Outbound link to the provider, or `tel:` for phone lines. */
  url: string;
  howTo?: string[];
  /** Where we confirmed the details, when that isn't `url` itself. */
  source?: { label: string; url: string };
  confidence: Confidence;
  asOf: string;
  note?: string;
  factId?: FactId;
}

export const serviceCategories: { id: ServiceCategory; label: string }[] = [
  { id: 'emergency', label: 'Emergency' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'documents', label: 'Documents & ID' },
  { id: 'transport', label: 'Transport' },
  { id: 'health', label: 'Health' },
  { id: 'business', label: 'Business' },
  { id: 'complaints', label: 'Complaints' },
];

const moiEmergency = {
  label: 'Ministry of Interior – emergency numbers',
  url: 'https://www.moi.gov.eg/home/EmergancyNumber',
};

const elWatanHotlines = {
  label: 'El Watan – unified hotlines',
  url: 'https://www.elwatannews.com/news/details/8297442',
};

export const services: ServiceLink[] = [
  // ---- Emergency -----------------------------------------------------------
  {
    id: 'police',
    title: 'Police emergency',
    titleAr: 'شرطة النجدة',
    category: 'emergency',
    provider: 'Ministry of Interior',
    channel: 'phone',
    url: 'tel:122',
    source: moiEmergency,
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'ambulance',
    title: 'Ambulance',
    titleAr: 'الإسعاف',
    category: 'emergency',
    provider: 'Egyptian Ambulance Organization',
    channel: 'phone',
    url: 'tel:123',
    source: {
      label: 'Egypt Telegraph – head of the Ambulance Authority on line 123',
      url: 'https://www.egypttelegraph.com/article/267019/الإسعاف-خدمات-الطوارئ-مجانية-و86-من-مكالمات',
    },
    confidence: 'Reported',
    asOf: '2026-10',
    note: 'Given by the head of the Ambulance Authority in the press; no ministry page lists it yet.',
  },
  {
    id: 'civil-protection',
    title: 'Fire and civil protection',
    titleAr: 'الحماية المدنية',
    category: 'emergency',
    provider: 'Ministry of Interior',
    channel: 'phone',
    url: 'tel:180',
    source: moiEmergency,
    confidence: 'Official',
    asOf: '2026-10',
    note: 'Some guides (e.g. AUC) list 125 for fire; 125 is the water hotline.',
  },
  {
    id: 'traffic-accidents',
    title: 'Traffic accidents',
    titleAr: 'حوادث المرور',
    category: 'emergency',
    provider: 'Ministry of Interior',
    channel: 'phone',
    url: 'tel:01221110000',
    source: moiEmergency,
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'gas-emergency',
    title: 'Natural gas emergency',
    titleAr: 'طوارئ الغاز الطبيعي',
    category: 'emergency',
    provider: 'Natural gas distribution companies',
    channel: 'phone',
    url: 'tel:129',
    source: elWatanHotlines,
    confidence: 'Reported',
    asOf: '2026-10',
  },

  // ---- Utilities -----------------------------------------------------------
  {
    id: 'water-bill',
    title: 'Check your water bill',
    titleAr: 'الاستعلام عن فاتورة المياه',
    category: 'utilities',
    provider: 'Alexandria Water Company',
    channel: 'online',
    url: 'https://alexwater.com.eg/fatora_new/',
    howTo: ['Enter the electronic payment number printed on your bill.'],
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'water-hotline',
    title: 'Water faults and complaints',
    titleAr: 'الخط الساخن لمياه الشرب',
    category: 'utilities',
    provider: 'Alexandria Water Company',
    channel: 'phone',
    url: 'tel:125',
    source: { label: 'Alexandria Water Company', url: 'https://alexwater.com.eg' },
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'electricity-hotline',
    title: 'Electricity faults and complaints',
    titleAr: 'شكاوى وأعطال الكهرباء',
    category: 'utilities',
    provider: 'Electricity distribution companies (national number)',
    channel: 'phone',
    url: 'tel:121',
    source: elWatanHotlines,
    confidence: 'Reported',
    asOf: '2026-10',
  },
  {
    id: 'telecom-egypt-bill',
    title: 'Pay your landline or home internet bill',
    titleAr: 'سداد فاتورة المصرية للاتصالات (WE)',
    category: 'utilities',
    provider: 'Telecom Egypt (WE)',
    channel: 'online',
    url: 'https://te.eg/en/web/guest/w/my-we-app',
    howTo: ['Pay in the My WE app, or for someone else’s line.'],
    confidence: 'Official',
    asOf: '2026-10',
  },

  // ---- Documents & ID ------------------------------------------------------
  {
    id: 'digital-egypt',
    title: 'Digital Egypt government services portal',
    titleAr: 'منصة مصر الرقمية',
    category: 'documents',
    provider: 'Government of Egypt',
    channel: 'online',
    url: 'https://digital.gov.eg',
    source: {
      label: 'Enterprise – guide to Egypt’s online government services (Aug 2026)',
      url: 'https://enterpriseam.com/egypt/2026/08/02/your-guide-to-navigating-egypts-online-government-services/',
    },
    confidence: 'Reported',
    asOf: '2026-10',
    note: 'Civil status documents, traffic and other services. The portal only renders with JavaScript, so its service list is not verified here.',
  },

  // ---- Transport -----------------------------------------------------------
  {
    id: 'train-tickets',
    title: 'Book train tickets',
    titleAr: 'حجز تذاكر القطارات',
    category: 'transport',
    provider: 'Egyptian National Railways',
    channel: 'online',
    url: 'https://enr.gov.eg',
    confidence: 'Official',
    asOf: '2026-10',
  },

  // ---- Health --------------------------------------------------------------
  {
    id: 'drug-authority',
    title: 'Medicine shortages and pharmacy complaints',
    category: 'health',
    provider: 'Egyptian Drug Authority',
    channel: 'phone',
    url: 'tel:15301',
    source: { label: 'Egyptian Drug Authority – contact us', url: 'https://edaegypt.gov.eg/en/contact-us/' },
    confidence: 'Official',
    asOf: '2026-10',
  },
  {
    id: 'health-hotline',
    title: 'Ministry of Health hotline',
    titleAr: 'الخط الساخن الموحد لوزارة الصحة والسكان',
    category: 'health',
    provider: 'Ministry of Health and Population',
    channel: 'phone',
    url: 'tel:105',
    source: {
      label: 'Youm7 – ministry figures for the unified hotline 105 (Aug 2026)',
      url: 'https://www.youm7.com/story/2026/8/2/الصحة-الخط-الساخن-الموحد-105-يسجل-أكثر-من-38-ألف/7500216',
    },
    confidence: 'Reported',
    asOf: '2026-10',
    note: '15335 is a separate line for the 100 Million Seha campaign.',
  },

  // ---- Business ------------------------------------------------------------
  {
    id: 'gafi',
    title: 'Start or register a company',
    category: 'business',
    provider: 'General Authority for Investment and Free Zones (GAFI)',
    channel: 'online',
    url: 'https://www.gafi.gov.eg',
    confidence: 'Official',
    asOf: '2026-10',
    note: 'GAFI also runs an Investors Services Centre in Alexandria (Daily News Egypt, June 2026).',
  },
  {
    id: 'e-invoicing',
    title: 'E-invoice and e-receipt system',
    titleAr: 'منظومة الفاتورة الإلكترونية',
    category: 'business',
    provider: 'Egyptian Tax Authority',
    channel: 'online',
    url: 'https://ssp.eta.gov.eg/',
    source: { label: 'Egyptian Tax Authority', url: 'https://www.eta.gov.eg' },
    confidence: 'Official',
    asOf: '2026-10',
  },

  // ---- Complaints ----------------------------------------------------------
  {
    id: 'unified-complaints',
    title: 'Government complaints portal',
    titleAr: 'منظومة الشكاوى الحكومية الموحدة',
    category: 'complaints',
    provider: 'Unified Government Complaints System',
    channel: 'online',
    url: 'https://www.shakwa.eg',
    howTo: ['Submit online, or call 16528.'],
    source: { label: 'Egyptian Drug Authority – contact us', url: 'https://edaegypt.gov.eg/en/contact-us/' },
    confidence: 'Official',
    asOf: '2026-10',
    note: 'This site cannot pass reports on. Use the official channel.',
  },
];
