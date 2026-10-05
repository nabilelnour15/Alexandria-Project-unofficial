import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { NewsItem } from '../../data/newsData';
import { projectsData } from '../../data/projectsData';
import { cn } from '@/lib/utils';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-09-14" -> { day: "14", month: "Sep", year: "2026", full: "14 September 2026" } */
function splitDate(date: string) {
  const [year, month, day] = date.split('-');
  const m = Number(month) - 1;
  return { day: String(Number(day)), month: MONTHS_SHORT[m] ?? '', year, full: `${Number(day)} ${MONTHS[m] ?? ''} ${year}` };
}

const projectTitle = (id: string) => projectsData.projects.find((p) => p.id === id)?.title;

function Headline({ item, className }: { item: NewsItem; className?: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      hrefLang={item.lang}
      className={cn(
        'group rounded-sm text-ink decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-sea hover:underline',
        className,
      )}
    >
      {item.title}
      <ArrowUpRight
        aria-hidden="true"
        className="ml-1 inline-block h-[0.8em] w-[0.8em] -translate-y-px text-ink-soft motion-safe:transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sea"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Byline({ item }: { item: NewsItem }) {
  const project = item.projectId ? projectTitle(item.projectId) : undefined;
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
      <span className="font-semibold text-ink">{item.outlet}</span>
      {item.lang === 'ar' && (
        <span className="rounded-full border border-limestone px-2 py-0.5 text-xs">In Arabic</span>
      )}
      {item.lang === 'fr' && (
        <span className="rounded-full border border-limestone px-2 py-0.5 text-xs">In French</span>
      )}
      {project && (
        <Link
          to="/projects"
          className="rounded-sm text-sea underline underline-offset-2 hover:text-ink"
        >
          Project: {project}
        </Link>
      )}
    </p>
  );
}

/** The newest story in view, set large with a display dateline. */
export function LeadEntry({ item }: { item: NewsItem }) {
  const d = splitDate(item.date);
  return (
    <article className="grid gap-6 border-t-2 border-gold pt-8 md:grid-cols-[10rem_1fr] md:gap-10">
      <time dateTime={item.date} className="font-display leading-none text-sea">
        <span className="sr-only">{d.full}</span>
        <span aria-hidden="true" className="block text-7xl font-semibold tabular-nums md:text-8xl">{d.day}</span>
        <span aria-hidden="true" className="mt-1 block text-xl text-ink-soft">
          {d.month} {d.year}
        </span>
      </time>
      <div>
        <p className="text-sm font-semibold text-terracotta">Latest · {item.category}</p>
        <h2 className="mt-2 text-balance text-3xl leading-tight md:text-5xl">
          <Headline item={item} />
        </h2>
        <p className="mt-4 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink-soft">
          {item.summary}
        </p>
        <Byline item={item} />
      </div>
    </article>
  );
}

/** One row of the month ledger. */
export function NewsEntry({ item, showCategory }: { item: NewsItem; showCategory: boolean }) {
  const d = splitDate(item.date);
  return (
    <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-limestone py-6 md:grid-cols-[5rem_1fr] md:gap-8">
      <time dateTime={item.date} className="font-display leading-none text-sea">
        <span className="sr-only">{d.full}</span>
        <span aria-hidden="true" className="block text-4xl font-semibold tabular-nums md:text-5xl">{d.day}</span>
        <span aria-hidden="true" className="mt-1 block text-sm text-ink-soft">{d.month}</span>
      </time>
      <article>
        {showCategory && <p className="text-sm font-semibold text-terracotta">{item.category}</p>}
        <h3 className="mt-1 text-balance text-2xl leading-snug">
          <Headline item={item} />
        </h3>
        <p className="mt-2 max-w-[65ch] text-pretty leading-relaxed text-ink-soft">{item.summary}</p>
        <Byline item={item} />
      </article>
    </li>
  );
}
