import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { newsItems } from '../data/newsData';
import { formatFactDate } from '../lib/factFormat';

/** "2026-09-08" -> "8 Sep 2026" */
const shortDate = (date: string) => `${Number(date.slice(8, 10))} ${formatFactDate(date.slice(0, 7), true)}`;

/** Home page: the three newest items from the city briefing. */
export default function NewsTeaser() {
  const latest = [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section aria-labelledby="news-teaser-title" className="alex-section border-t border-limestone bg-white">
      <div className="alex-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="news-teaser-title" className="text-ink">
              City briefing
            </h2>
            <p className="mt-4 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink-soft">
              Recent reporting on Alexandria from other outlets, summarised in a line and linked to the source.
            </p>
          </div>
          <Link
            to="/news"
            className="group inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold text-sea hover:text-ink"
          >
            All reports
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 motion-safe:transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {latest.map((item) => (
            <li key={item.id} className="border-t-2 border-gold pt-5">
              <p className="flex flex-wrap gap-x-3 text-sm">
                <time dateTime={item.date} className="font-semibold tabular-nums text-sea">
                  {shortDate(item.date)}
                </time>
                <span className="text-terracotta">{item.category}</span>
              </p>
              <h3 className="mt-3 text-balance text-2xl leading-snug">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  hrefLang={item.lang}
                  className="group rounded-sm text-ink decoration-gold decoration-2 underline-offset-4 hover:text-sea hover:underline"
                >
                  {item.title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.8em] w-[0.8em] -translate-y-px text-ink-soft group-hover:text-sea"
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                {item.outlet}
                {item.lang === 'ar' && ' · In Arabic'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
