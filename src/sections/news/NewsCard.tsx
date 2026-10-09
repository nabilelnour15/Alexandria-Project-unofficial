import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { NewsItem } from '../../data/newsData';
import type { NewsImage } from '../../data/newsImages';
import { LANGUAGE_NAME, imageFor, postPath, shortDate } from '../../lib/newsFormat';
import { cn } from '@/lib/utils';

/** The card's photo, or a quiet topic panel when a story has no licensed photo yet. */
export function NewsPicture({
  item,
  className,
  priority = false,
}: {
  item: NewsItem;
  className?: string;
  /** Above-the-fold photo: load straight away. */
  priority?: boolean;
}) {
  const image = imageFor(item);
  if (!image) {
    return (
      <div aria-hidden="true" className={cn('flex items-end bg-sea p-5', className)}>
        <span className="border-t-2 border-gold pt-2 font-display text-2xl text-white/85">{item.category}</span>
      </div>
    );
  }
  // Decorative here: the headline beside it says what the story is about.
  return (
    <img
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={cn('object-cover', className)}
    />
  );
}

const CREDIT_LINK = 'rounded-sm underline underline-offset-2 hover:text-ink';

/** Author and licence, each linked, as CC BY and BY-SA require. Photos are cropped to fit. */
export function PhotoCredit({ image }: { image: NewsImage }) {
  return (
    <>
      Photo (cropped):{' '}
      <a href={image.source} target="_blank" rel="noopener noreferrer" className={CREDIT_LINK}>
        {image.author}
        <span className="sr-only"> on Wikimedia Commons (opens in a new tab)</span>
      </a>
      ,{' '}
      {image.licenseUrl ? (
        <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className={CREDIT_LINK}>
          {image.license}
          <span className="sr-only"> licence (opens in a new tab)</span>
        </a>
      ) : (
        image.license
      )}
    </>
  );
}

/** Credit under a card photo. Sits above the card's stretched link so its links stay clickable. */
function CardCredit({ item }: { item: NewsItem }) {
  const image = imageFor(item);
  if (!image) return null;
  return (
    <p className="relative z-10 mt-1.5 text-xs leading-snug text-ink-soft">
      <PhotoCredit image={image} />
    </p>
  );
}

function Meta({ item, showCategory }: { item: NewsItem; showCategory: boolean }) {
  return (
    <p className="flex flex-wrap gap-x-3 text-sm">
      <time dateTime={item.date} className="font-semibold tabular-nums text-sea">
        {shortDate(item.date)}
      </time>
      {showCategory && <span className="text-terracotta">{item.category}</span>}
    </p>
  );
}

function Source({ item }: { item: NewsItem }) {
  return (
    <p className="mt-3 text-sm text-ink-soft">
      Based on reporting by {item.outlet}
      {item.lang && ` (in ${LANGUAGE_NAME[item.lang]})`}
    </p>
  );
}

// The headline link is stretched over the whole card (after:inset-0), so the card
// is one link without a clickable div.
// Keyboard focus rings the whole card (tram yellow is the site's focus colour).
const STRETCHED_LINK =
  'rounded-sm text-ink transition-colors after:absolute after:inset-0 after:-m-2 after:rounded-md hover:text-sea group-hover:text-sea focus-visible:!shadow-none focus-visible:!outline-none focus-visible:after:outline focus-visible:after:outline-[3px] focus-visible:after:outline-offset-2 focus-visible:after:outline-tram focus-visible:after:shadow-[0_0_0_5px_rgb(var(--ink))]';

interface CardProps {
  item: NewsItem;
  showCategory?: boolean;
  headingLevel?: 'h2' | 'h3';
}

export function NewsCard({ item, showCategory = true, headingLevel: Heading = 'h3' }: CardProps) {
  return (
    <article className="group relative flex flex-col">
      <div className="overflow-hidden rounded-md bg-limestone">
        <NewsPicture
          item={item}
          className="aspect-[16/10] w-full motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <CardCredit item={item} />
      <div className="mt-3">
        <Meta item={item} showCategory={showCategory} />
      </div>
      <Heading className="mt-2 text-balance text-2xl leading-snug">
        <Link to={postPath(item)} className={STRETCHED_LINK}>
          {item.title}
        </Link>
      </Heading>
      <p className="mt-2 line-clamp-3 text-pretty leading-relaxed text-ink-soft">{item.summary}</p>
      <Source item={item} />
    </article>
  );
}

/** The newest story, set large beside its photo. */
export function LeadCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative grid gap-6 md:grid-cols-12 md:items-center md:gap-10">
      <div className="md:col-span-7">
        <div className="overflow-hidden rounded-md bg-limestone">
          <NewsPicture
            item={item}
            priority
            className="aspect-[16/10] w-full motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <CardCredit item={item} />
      </div>
      <div className="md:col-span-5">
        <p className="text-sm font-semibold text-terracotta">Latest · {item.category}</p>
        <h2 className="mt-3 text-balance text-3xl leading-tight md:text-4xl">
          <Link to={postPath(item)} className={STRETCHED_LINK}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{item.summary}</p>
        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
          <time dateTime={item.date} className="font-semibold tabular-nums text-sea">
            {shortDate(item.date)}
          </time>
          <span>From {item.outlet}</span>
        </p>
        <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 font-semibold text-sea">
          Read the story
          <ArrowRight className="h-4 w-4 motion-safe:transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
