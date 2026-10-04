import SourceList from './SourceList';
import { governorData } from '@/data/governorData';

/**
 * The page's signature: a dated ledger of career milestones and reported activity, with
 * the source for each line printed beside it. It reads like a public record rather than a
 * profile, so a claim and its evidence are never separated. CSS sticky only.
 */
export default function TenureRecord() {
  const labelByUrl = new Map(governorData.sources.map((s) => [s.url, s.label]));

  return (
    <section id="record" aria-labelledby="record-title" className="scroll-mt-28 bg-limestone-wash py-20 md:py-28">
      <div className="alex-container">
        <h2 id="record-title" className="max-w-3xl text-ink">
          Record in office
        </h2>
        <p className="mt-4 max-w-[60ch] text-pretty text-lg text-ink-soft">{governorData.recordIntro}</p>

        <ol className="mt-14 border-t-2 border-gold">
          {governorData.record.map((entry) => (
            <li
              key={entry.title}
              className="grid gap-4 border-b border-limestone py-8 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,18rem)]"
            >
              <p className="font-display text-2xl font-semibold leading-tight tabular-nums text-sea md:sticky md:top-28 md:self-start">
                {entry.date}
              </p>
              <div>
                <h3 className="text-ink">{entry.title}</h3>
                <p className="mt-2 max-w-[60ch] text-pretty leading-[1.75] text-ink-soft">{entry.text}</p>
              </div>
              <div className="text-sm text-ink-soft md:col-start-2 lg:col-start-3">
                <p className="font-semibold text-ink">Source</p>
                {entry.sourceUrls.length > 0 ? (
                  <SourceList
                    className="mt-1"
                    links={entry.sourceUrls.map((url) => ({ url, label: labelByUrl.get(url) ?? url }))}
                  />
                ) : (
                  <p className="mt-1 text-pretty">Al-Dostor, as cited in the text. See the full list below.</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
