import { Info } from 'lucide-react';
import { REPORT_ISSUE_URL } from '../lib/factFormat';

/** Short note at the foot of data-heavy pages explaining the "Source" chips. */
export default function FactsNote({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <div className={dark ? 'bg-ink' : 'bg-white'}>
      <div className="alex-container py-8">
        <p
          className={`flex items-start justify-center gap-2 text-center text-sm ${
            dark ? 'text-white/50' : 'text-ink-soft'
          }`}
        >
          <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Figures are from public sources; tap &lsquo;Source&rsquo; next to a number to see where
            it comes from. Spotted an error?{' '}
            <a
              href={REPORT_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 ${
                dark ? 'text-seaglass hover:text-white' : 'text-sea hover:text-ink'
              }`}
            >
              Report it
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
