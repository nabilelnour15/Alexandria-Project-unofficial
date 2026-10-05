import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Info } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import NotFoundPage from './NotFoundPage';
import { newsItems, topicSlug } from '../data/newsData';
import { newsPosts } from '../data/newsPosts';
import { projectsData } from '../data/projectsData';
import { NewsCard, PhotoCredit } from '../sections/news/NewsCard';
import { LANGUAGE_NAME, imageFor, longDate } from '../lib/newsFormat';
import { REPORT_ISSUE_URL } from '../lib/factFormat';

export default function NewsPostPage() {
  const { id } = useParams();
  const item = newsItems.find((i) => i.id === id);
  if (!item) return <NotFoundPage />;

  const body = newsPosts[item.id];
  const image = imageFor(item);
  const project = item.projectId ? projectsData.projects.find((p) => p.id === item.projectId) : undefined;
  const related = newsItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="bg-white pt-20">
      <PageMeta title={item.title} description={item.summary} />

      <article>
        <header className="alex-container max-w-3xl pt-10 md:pt-14">
          <Link
            to="/news"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-sea hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            City briefing
          </Link>
          <p className="mt-6 flex flex-wrap gap-x-3 text-sm">
            <Link
              to={`/news?topic=${topicSlug(item.category)}`}
              className="rounded-sm font-semibold text-terracotta hover:text-ink"
            >
              {item.category}
            </Link>
            <time dateTime={item.date} className="tabular-nums text-ink-soft">
              {longDate(item.date)}
            </time>
          </p>
          <h1 className="mt-3 text-balance text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] leading-[1.05] tracking-tight text-ink">
            {item.title}
          </h1>
          <p className="mt-5 text-pretty text-xl leading-relaxed text-ink-soft">{item.summary}</p>
          <p className="mt-5 border-l-2 border-gold pl-4 text-sm text-ink-soft">
            Written by this unofficial fan site from a report by{' '}
            <span className="font-semibold text-ink">{item.outlet}</span>
            {item.lang && ` (in ${LANGUAGE_NAME[item.lang]})`}.
          </p>
        </header>

        {image && (
          <figure className="alex-container mt-10 max-w-5xl">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              fetchPriority="high"
              className="aspect-[16/9] w-full rounded-md bg-limestone object-cover"
            />
            <figcaption className="mt-2 text-xs leading-relaxed text-ink-soft">
              {image.alt}. A related photo, not taken at the event reported. <PhotoCredit image={image} />
            </figcaption>
          </figure>
        )}

        <div className="alex-container max-w-3xl py-10 md:py-14">
          {body ? (
            <div className="space-y-6 text-lg leading-[1.8] text-ink">
              {body.map((paragraph, i) => (
                <p key={i} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-[1.8] text-ink-soft">
              We only have a short summary of this story, because the original report isn&rsquo;t freely
              readable. See the source below for the full report.
            </p>
          )}

          <aside aria-label="Source" className="mt-12 rounded-md bg-limestone-wash p-6 md:p-8">
            <h2 className="font-sans text-sm font-semibold text-ink">Original report</h2>
            <p className="mt-2 text-ink-soft">
              {item.outlet}, {longDate(item.date)}
              {item.lang && ` · in ${LANGUAGE_NAME[item.lang]}`}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang={item.lang}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold text-sea hover:text-ink"
            >
              Read it on {item.outlet}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {(project || item.category === 'Governorate') && (
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-limestone pt-4 text-sm">
                {project && (
                  <Link to="/projects" className="rounded-sm text-sea underline underline-offset-2 hover:text-ink">
                    Project: {project.title}
                  </Link>
                )}
                {item.category === 'Governorate' && (
                  <Link to="/governor" className="rounded-sm text-sea underline underline-offset-2 hover:text-ink">
                    About the governor
                  </Link>
                )}
              </p>
            )}
          </aside>

          <p className="mt-8 flex items-start gap-2 text-sm text-ink-soft">
            <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              This story uses only facts from the original report, in our own words. Spotted an error?{' '}
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
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-limestone bg-white py-16 md:py-20">
          <div className="alex-container">
            <h2 id="related-title" className="text-2xl text-ink md:text-3xl">
              More on {item.category.toLowerCase()}
            </h2>
            <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.id} className="flex">
                  <NewsCard item={r} showCategory={false} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
