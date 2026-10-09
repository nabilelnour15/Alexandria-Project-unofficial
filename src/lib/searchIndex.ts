import { fold } from '@/lib/text';
import { navLinks } from '@/lib/navLinks';
import { newsItems } from '@/data/newsData';
import { projectsData } from '@/data/projectsData';
import { attractionCategories } from '@/data/visitData';
import { services } from '@/data/servicesData';
import { places } from '@/data/communityData';

export const searchTypeOrder = ['Page', 'News', 'Project', 'Visit', 'Service', 'Community'] as const;

export type SearchType = (typeof searchTypeOrder)[number];

export interface SearchEntry {
  readonly id: string;
  readonly type: SearchType;
  readonly title: string;
  readonly subtitle?: string;
  readonly href: string;
  /** Folded text that is matched against the query. */
  readonly haystack: string;
  /** Folded title, used to rank title hits first. */
  readonly foldedTitle: string;
}

export { fold };

const entry = (
  id: string,
  type: SearchType,
  title: string,
  href: string,
  subtitle: string | undefined,
  extra: ReadonlyArray<string | undefined> = [],
): SearchEntry => ({
  id,
  type,
  title,
  subtitle,
  href,
  haystack: fold([title, subtitle, ...extra].filter(Boolean).join(' ')),
  foldedTitle: fold(title),
});

export const searchIndex: readonly SearchEntry[] = [
  ...navLinks.map((l) => entry(`page:${l.href}`, 'Page', l.name, l.href, undefined)),
  ...newsItems.map((n) =>
    entry(`news:${n.id}`, 'News', n.title, `/news/${n.id}`, `${n.outlet} · ${n.category}`, [n.summary]),
  ),
  ...projectsData.projects.map((p) =>
    entry(`project:${p.id}`, 'Project', p.title, '/projects', `${p.category} · ${p.status}`, [p.description]),
  ),
  ...attractionCategories.flatMap((c) =>
    c.items.map((a, i) =>
      entry(`visit:${c.id}:${i}`, 'Visit', a.name, '/visit', `${c.label} · ${a.location}`, [a.desc]),
    ),
  ),
  ...services.map((s) =>
    entry(`service:${s.id}`, 'Service', s.title, '/live?tab=services', s.provider, [s.titleAr, s.category, s.note]),
  ),
  ...places.map((p) =>
    entry(`community:${p.id}`, 'Community', p.name, '/live?tab=community', p.district ?? p.kind.replace(/-/g, ' '), [
      p.nameAr,
      p.description,
    ]),
  ),
];

/** Every word of the query must appear in the entry. Title hits rank first. Empty query lists the pages. */
export function searchEntries(query: string): SearchEntry[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return searchIndex.filter((e) => e.type === 'Page');
  const rank = (e: SearchEntry) => (words.every((w) => e.foldedTitle.includes(w)) ? 0 : 1);
  return searchIndex
    .filter((e) => words.every((w) => e.haystack.includes(w)))
    .sort((a, b) => rank(a) - rank(b));
}
