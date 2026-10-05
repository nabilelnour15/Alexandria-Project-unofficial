import { useSearchParams } from 'react-router-dom';
import { Info } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { newsCategories, newsItems, type NewsCategory, type NewsItem } from '../data/newsData';
import { LeadEntry, NewsEntry } from '../sections/news/NewsEntry';
import { REPORT_ISSUE_URL, formatFactDate } from '../lib/factFormat';
import { cn } from '@/lib/utils';

const slug = (c: NewsCategory) => c.toLowerCase().replace(/[^a-z]+/g, '-');

const byNewest = (a: NewsItem, b: NewsItem) => b.date.localeCompare(a.date);

/** Groups items (already newest first) by "YYYY-MM". */
function groupByMonth(items: readonly NewsItem[]) {
  const groups: { month: string; items: NewsItem[] }[] = [];
  for (const item of items) {
    const month = item.date.slice(0, 7);
    const last = groups.at(-1);
    if (last?.month === month) last.items.push(item);
    else groups.push({ month, items: [item] });
  }
  return groups;
}

export default function NewsPage() {
  const [params, setParams] = useSearchParams();
  const topic = newsCategories.find((c) => slug(c) === params.get('topic'));

  const sorted = [...newsItems].sort(byNewest);
  const visible = topic ? sorted.filter((i) => i.category === topic) : sorted;
  const [lead, ...rest] = visible;
  const months = groupByMonth(rest);

  const setTopic = (next?: NewsCategory) =>
    setParams(next ? { topic: slug(next) } : {}, { replace: true });

  // Topics with no reports are hidden rather than disabled.
  const filters: { label: string; value?: NewsCategory; count: number }[] = [
    { label: 'All', count: sorted.length },
    ...newsCategories
      .map((c) => ({ label: c, value: c, count: sorted.filter((i) => i.category === c).length }))
      .filter((f) => f.count > 0),
  ];
  const plural = (n: number) => `${n} ${n === 1 ? 'report' : 'reports'}`;

  return (
    <div className="bg-white pt-20">
      <PageMeta
        title="City briefing"
        description="Recent reporting on Alexandria's transport, heritage, economy and environment, summarised in a line and linked to the original outlet."
      />

      <header className="wall-of-scripts relative bg-ink py-16 text-white md:py-20">
        <div className="alex-container">
          <p lang="ar" dir="rtl" className="text-left text-2xl text-white/70">
            أخبار المدينة
          </p>
          <h1 className="mt-2 text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] leading-[0.95] tracking-tight text-white">
            City briefing
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            What other outlets are reporting about Alexandria. We don&rsquo;t write the news: each item is
            a one-line summary that links to the original report.
          </p>
          {sorted[0] && (
            <p className="mt-6 text-sm text-white/60">
              Latest item {formatFactDate(sorted[0].date.slice(0, 7))} · {plural(sorted.length)}
            </p>
          )}
        </div>
      </header>

      <div className="alex-container py-12 md:py-16">
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
          {lead ? (
            <>
              <LeadEntry item={lead} />
              {months.map((group) => (
                <section key={group.month} aria-labelledby={`m-${group.month}`} className="mt-16">
                  <h2 id={`m-${group.month}`} className="mb-2 text-2xl text-ink md:text-3xl">
                    {formatFactDate(group.month)}
                  </h2>
                  <ul>
                    {group.items.map((item) => (
                      <NewsEntry key={item.id} item={item} showCategory={!topic} />
                    ))}
                  </ul>
                </section>
              ))}
            </>
          ) : (
            <p className="py-16 text-center text-lg text-ink-soft">
              No reports here yet. The briefing only lists stories we can link to a source.
            </p>
          )}
        </div>

        <p className="mt-16 flex items-start gap-2 border-t border-limestone pt-8 text-sm text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Summaries are ours; the reporting belongs to each outlet, so check the original before relying
            on it. Broken link, error, or a story we missed?{' '}
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
