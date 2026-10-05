import { useId } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { newsItems, topicSlug, type NewsCategory } from '../data/newsData';
import { NewsCard } from './news/NewsCard';

interface NewsTeaserProps {
  /** Only show this topic, and link to the briefing filtered by it. */
  topic?: NewsCategory;
  title?: string;
  intro?: string;
}

/** The three newest items from the city briefing (home page, and per topic on related pages). */
export default function NewsTeaser({
  topic,
  title = 'City briefing',
  intro = 'Short stories about what is happening in the city, written from public reporting with a link to each source.',
}: NewsTeaserProps) {
  const titleId = useId();
  const latest = newsItems
    .filter((i) => !topic || i.category === topic)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section aria-labelledby={titleId} className="alex-section border-t border-limestone bg-white">
      <div className="alex-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id={titleId} className="text-ink">
              {title}
            </h2>
            <p className="mt-4 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink-soft">{intro}</p>
          </div>
          <Link
            to={topic ? `/news?topic=${topicSlug(topic)}` : '/news'}
            className="group inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold text-sea hover:text-ink"
          >
            {topic ? `All ${topic.toLowerCase()} stories` : 'All stories'}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 motion-safe:transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {latest.map((item) => (
            <li key={item.id} className="flex">
              <NewsCard item={item} showCategory={!topic} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
