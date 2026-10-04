import { timelineEvents } from '@/data/aboutData';

/**
 * The page's signature: each era is a chapter whose year stays pinned beside
 * the text while you read it (CSS sticky only, so nothing to animate).
 */
export default function Chronicle() {
  return (
    <section id="history" aria-labelledby="history-title" className="scroll-mt-28 bg-limestone-wash py-24 md:py-32">
      <div className="alex-container">
        <h2 id="history-title" className="max-w-3xl text-ink">
          A short history
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
          From a fishing village called Rhakotis to Egypt's second city, in {timelineEvents.length}{' '}
          chapters.
        </p>

        <ol className="mt-16">
          {timelineEvents.map((event) => (
            <li
              key={event.year}
              className="grid gap-4 border-t border-limestone py-12 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-12 md:py-16 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
            >
              <div>
                <p className="text-balance font-display text-4xl font-semibold leading-none text-sea md:sticky md:top-32 md:text-[2.75rem] xl:text-5xl">
                  {/* Keep the era (BCE/CE) on the same line as its number. */}
                  {event.year.replace(/ (BCE|CE)$/, ' $1')}
                </p>
              </div>

              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] xl:gap-12">
                <div>
                  <h3 className="text-ink">{event.title}</h3>
                  <p className="mt-3 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink">{event.desc}</p>
                  <p className="mt-5 max-w-[65ch] text-pretty leading-[1.8] text-ink-soft">{event.longDesc}</p>
                </div>

                <figure className="max-w-md xl:max-w-none">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={event.image}
                    alt={event.imageAlt ? '' : event.title}
                    className="aspect-[4/3] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
                  />
                  {event.imageAlt && (
                    <figcaption className="mt-2 text-pretty text-sm text-ink-soft">{event.imageAlt}</figcaption>
                  )}
                </figure>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
