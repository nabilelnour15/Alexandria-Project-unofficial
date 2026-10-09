import { ExternalLink } from 'lucide-react';
import SourceChip from '@/components/SourceChip';
import { investData } from '@/data/investData';

export default function SuccessStories() {
  return (
    <section id="companies" aria-labelledby="companies-title" className="scroll-mt-28 bg-limestone-wash py-24 md:py-32">
      <div className="alex-container">
        <h2 id="companies-title" className="text-ink">
          International firms in Alexandria
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
          Egypt's second-largest city and main Mediterranean port has drawn international companies that serve
          the Middle East and Africa. A few examples follow, each with its press source.
        </p>

        <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
          {investData.successStories.map((story, i) => (
            <li
              key={story.name}
              className={`border-t py-8 ${i < 2 ? 'border-t-2 border-gold' : 'border-limestone'} ${i === 1 ? 'max-md:border-limestone max-md:border-t' : ''}`}
            >
              <p className="text-sm font-semibold text-sea">
                {story.industry}, {story.year}
              </p>
              <h3 className="mt-1 text-ink">{story.name}</h3>
              <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                {story.successStory}
                {story.factId && <SourceChip factId={story.factId} className="ml-1" />}
              </p>
              {story.link && (
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sea underline underline-offset-4 transition-colors hover:text-ink"
                >
                  Read the source
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">({story.name}, opens in a new tab)</span>
                </a>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[65ch] text-pretty text-sm leading-[1.75] text-ink-soft">
          Shipping and logistics firms such as Worms Alexandria Cargo Services and EIS Group also operate here;
          the examples above focus on wider global names with documented expansions.
        </p>
      </div>
    </section>
  );
}
