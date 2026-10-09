import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Info, Search, X } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { matchesQuery, topicSlug as slug, newsCategories, newsItems, type NewsCategory, type NewsItem } from '../data/newsData';
import { LeadCard, NewsCard } from '../sections/news/NewsCard';
import { REPORT_ISSUE_URL, formatFactDate } from '../lib/factFormat';
import { cn } from '@/lib/utils';

const RESET_LINK = 'min-h-11 rounded-sm font-semibold text-sea underline underline-offset-2 hover:text-ink';

const byNewest = (a: NewsItem, b: NewsItem) => b.date.localeCompare(a.date);

export default function NewsPage() {
  const [params, setParams] = useSearchParams();
  const topic = newsCategories.find((c) => slug(c) === params.get('topic'));
  const query = params.get('q') ?? '';
  const searching = query.trim() !== '';

  const sorted = useMemo(() => [...newsItems].sort(byNewest), []);
  const found = useMemo(
    () => (searching ? sorted.filter((i) => matchesQuery(i, query)) : sorted),
    [sorted, searching, query],
  );
  const visible = useMemo(() => (topic ? found.filter((i) => i.category === topic) : found), [found, topic]);
  // While searching, every result sits in the grid; the lead layout is for browsing.
  const lead = searching ? undefined : visible[0];
  const rest = searching ? visible : visible.slice(1);

  // Topic and search are both kept in the URL, so a filtered view can be shared.
  const update = (key: 'topic' | 'q', value?: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };
  const setTopic = (next?: NewsCategory) => update('topic', next && slug(next));

  // Topics with no reports at all are hidden; counts follow the search.
  const filters: { label: string; value?: NewsCategory; count: number }[] = [
    { label: 'All', count: found.length },
    ...newsCategories
      .filter((c) => sorted.some((i) => i.category === c))
      .map((c) => ({ label: c, value: c, count: found.filter((i) => i.category === c).length })),
  ];
  const plural = (n: number) => `${n} ${n === 1 ? 'story' : 'stories'}`;

  return (
    <div className="bg-white pt-20">
      <PageMeta path="/news" />

      <header className="wall-of-scripts relative bg-ink py-16 text-white md:py-20">
        <div className="alex-container">
          <p lang="ar" dir="rtl" className="text-left text-2xl text-white/70">
            أخبار المدينة
          </p>
          <h1 className="mt-2 text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] leading-[0.95] tracking-tight text-white">
            City briefing
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            Short stories about what is happening in Alexandria, written in our own words from public
            reporting. Every story names its source and links to the original.
          </p>
          {sorted[0] && (
            <p className="mt-6 text-sm text-white/60">
              Latest story {formatFactDate(sorted[0].date.slice(0, 7))} · {plural(sorted.length)}
            </p>
          )}
        </div>
      </header>

      <div className="alex-container py-12 md:py-16">
        {sorted.length > 0 && (
          <search role="search" className="mb-6 block max-w-xl">
            <label htmlFor="news-search" className="text-sm font-semibold text-ink">
              Search stories
            </label>
            <div className="relative mt-2">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft"
              />
              <input
                id="news-search"
                type="search"
                enterKeyHint="search"
                autoComplete="off"
                value={query}
                onChange={(e) => update('q', e.target.value)}
                placeholder="e.g. governor, tram, beaches"
                className="min-h-12 w-full rounded-md border border-limestone bg-white py-3 pl-12 pr-12 text-base text-ink placeholder:text-ink-soft focus:border-sea [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => update('q')}
                  className="absolute right-1 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-ink-soft hover:text-ink"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>
          </search>
        )}

        {sorted.length > 0 && (
          <div role="group" aria-label="Filter by topic" className="mb-12 border-b border-limestone">
            <ul className="-mb-px flex flex-wrap gap-x-1">
              {filters.map((f) => {
                const active = f.value === topic;
                return (
                  <li key={f.label} className="flex-none">
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setTopic(f.value)}
                      className={cn(
                        'min-h-11 rounded-t-sm border-b-2 px-4 py-3 text-base font-semibold transition-colors',
                        active
                          ? 'border-sea text-sea'
                          : 'border-transparent text-ink-soft hover:text-ink',
                      )}
                    >
                      {f.label}
                      <span className="sr-only">, </span>
                      <span className="ml-1.5 font-normal tabular-nums text-ink-soft">{f.count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p role="status" className="sr-only">
              Showing {plural(visible.length)}
              {topic ? ` on ${topic}` : ''}
            </p>
          </div>
        )}

        <div>
          {visible.length > 0 ? (
            <>
              {lead && <LeadCard item={lead} />}
              {rest.length > 0 && (
                <section aria-labelledby="more-reports" className={cn(lead && 'mt-20 border-t border-limestone pt-12')}>
                  <h2 id="more-reports" className={cn('mb-8 text-2xl text-ink md:text-3xl', !lead && 'sr-only')}>
                    {lead ? 'More reports' : 'Results'}
                  </h2>
                  <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((item) => (
                      <li key={item.id} className="flex">
                        <NewsCard item={item} showCategory={!topic} />
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          ) : sorted.length > 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg text-ink-soft">
                No stories match{searching ? ` “${query.trim()}”` : ''}
                {topic ? ` in ${topic}` : ''}.
              </p>
              <p className="mt-4 flex flex-wrap justify-center gap-x-6">
                {searching && (
                  <button type="button" onClick={() => update('q')} className={RESET_LINK}>
                    Clear search
                  </button>
                )}
                {topic && (
                  <button type="button" onClick={() => update('topic')} className={RESET_LINK}>
                    All topics
                  </button>
                )}
              </p>
            </div>
          ) : (
            <p className="py-16 text-center text-lg text-ink-soft">
              No stories here yet. The briefing only covers news we can link to a source.
            </p>
          )}
        </div>

        <p className="mt-16 flex items-start gap-2 border-t border-limestone pt-8 text-sm text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Stories are summaries in our own words; the reporting belongs to each outlet, so check the original
            before relying on it. Photos show the place a story is about, not the event itself. Error, broken
            link, or a story we missed?{' '}
            <a
              href={REPORT_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sea underline underline-offset-2 hover:text-ink"
            >
              Tell us
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
