// Title, description and share image for each route. Pages read their title and
// description from here (PageMeta), and the build writes the same values as Open
// Graph tags into a static HTML file per route (plugins/shareMeta.ts), because
// LinkedIn, Facebook and WhatsApp don't run JavaScript.
//
// `image` must be a real, credited photo that appears on that page. Never use an
// AI concept image here: a share card can't carry the ConceptBadge. Pages with no
// suitable photo use the default.

export const SITE_URL = 'https://alexandria-project-unofficial.vercel.app';
export const SITE_NAME = 'Alexandria Digital Gateway (unofficial)';

export interface ShareImage {
  /** Path under public/, e.g. "/images/citadel.jpg". Cropped to 1200×630 at build time. */
  readonly src: string;
  readonly alt: string;
}

export interface PageMetaEntry {
  /** Omitted on the home page, which uses the site name alone. */
  readonly title?: string;
  readonly description: string;
  /** Falls back to `defaultShareImage`. */
  readonly image?: ShareImage;
}

export const defaultShareImage: ShareImage = {
  src: '/images/citadel.jpg',
  alt: 'The Citadel of Qaitbay on its headland at the mouth of the Eastern Harbour',
};

export const pageMeta = {
  '/': {
    description:
      'An unofficial fan guide to Alexandria, Egypt: 2,300 years of history, places to visit, city projects and investment opportunities on the Mediterranean.',
  },
  '/about': {
    title: 'About Alexandria',
    description:
      'The history, landmarks, museums, culture and food of Alexandria, from its founding by Alexander the Great to the modern Mediterranean city.',
    image: {
      src: '/images/Ancient-Roman-theater-alexandria.jpg',
      alt: 'The Roman theatre at Kom el-Dikka, Alexandria',
    },
  },
  '/visit': {
    title: 'Visit Alexandria',
    description:
      'Plan a trip to Alexandria: weather by month, getting there and around, attractions, museums and things to do in Egypt\'s Mediterranean city.',
    image: {
      src: '/images/Alexandria-Bibliotheca-interior.jpg',
      alt: 'The reading hall of the Bibliotheca Alexandrina',
    },
  },
  '/live': {
    title: 'Live in Alexandria',
    description:
      "An unofficial residents' guide to Alexandria: where to go for bills, documents and emergencies, community places and yearly events, and live traffic links.",
  },
  '/news': {
    title: 'City briefing',
    description:
      "Short, sourced stories about Alexandria's governorate, transport, heritage, economy and environment, written from public reporting with a link to each original.",
    // Image: the newest story's photo, chosen at build time.
  },
  '/invest': {
    title: 'Invest in Alexandria',
    description:
      'Why invest in Alexandria: its ports, free zones, industrial areas, key sectors and the investment laws and incentives that apply.',
    image: {
      src: '/images/containers.jpeg',
      alt: 'Shipping containers stacked at a port terminal',
    },
  },
  '/projects': {
    title: 'City projects',
    description:
      'Major infrastructure and development projects in Alexandria, with status, budgets, timelines and how they align with Egypt Vision 2030.',
  },
  '/governor': {
    title: 'Governor of Alexandria',
    description:
      "Who leads Alexandria Governorate: the governor's background, priorities and record, compiled by an unofficial fan project from public sources.",
    // Image: the newest Governorate story's photo, chosen at build time.
  },
  '/experience': {
    title: 'The Pharos remembered',
    description:
      'A scroll story through Alexandria: a lighthouse beam over the Eastern Harbour, twenty-three centuries of layered city, a walk along the Corniche and the lines being built for 2030.',
    image: {
      src: '/images/alexandria-castle-egypt.jpg',
      alt: 'Fishing boats in the Eastern Harbour below the Citadel of Qaitbay',
    },
  },
} as const satisfies Record<string, PageMetaEntry>;

export type PagePath = keyof typeof pageMeta;

export const fullTitle = (title?: string) => (title ? `${title} — ${SITE_NAME}` : SITE_NAME);
