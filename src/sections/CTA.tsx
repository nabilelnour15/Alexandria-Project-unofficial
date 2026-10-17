import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { LAST_REVIEWED_LABEL, REPORT_ISSUE_URL } from '../lib/factFormat';

const how = [
  {
    term: 'Sourced figures',
    detail: 'Each headline figure has a source chip with where it came from, its date and a confidence label.',
  },
  {
    term: `Checked ${LAST_REVIEWED_LABEL}`,
    detail: 'Bots suggest news and data updates. A person reviews every change before it goes live.',
  },
  {
    term: 'Spotted a mistake?',
    detail: 'Open an issue on GitHub. Every report is checked against the source.',
  },
];

/**
 * Closing band: how the guide is kept honest, then a quiet invitation to visit.
 * Pass `showVisitLink={false}` on /visit so the page doesn't link to itself.
 */
export default function CTA({ showVisitLink = true }: { showVisitLink?: boolean }) {
  return (
    <section aria-labelledby="how-title" className="alex-section bg-papyrus">
      <div className="alex-container">
        <h2 id="how-title" className="text-ink">
          How this guide works
        </h2>
        <dl className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-3">
          {how.map((item) => (
            <div key={item.term} className="border-t border-ink/15 pt-4">
              <dt className="font-display text-2xl font-semibold text-ink">{item.term}</dt>
              <dd className="mt-2 max-w-[40ch] text-pretty leading-relaxed text-ink-soft">{item.detail}</dd>
            </div>
          ))}
        </dl>
        <a
          href={REPORT_ISSUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-10 items-center gap-1.5 font-semibold text-sea underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink"
        >
          Report an inaccuracy
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>

        {showVisitLink && (
          <div className="mt-16 flex flex-col gap-6 border-t border-ink/15 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[60ch] text-pretty text-lg leading-[1.75] text-ink-soft">
              Planning a trip? The visitor guide covers when to go, getting around, the main sights and where to eat
              and stay.
            </p>
            <Link to="/visit" className="alex-btn-primary shrink-0">
              Read the visitor guide
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
