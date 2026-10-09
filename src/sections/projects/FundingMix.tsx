import SourceChip from '@/components/SourceChip';
import { projectsData, type Project } from '@/data/projectsData';

const projects: readonly Project[] = projectsData.projects;

/** Colour per funder; the legend always repeats the name, so colour is never the only cue. */
const TONE: Record<string, string> = {
  EIB: 'bg-sea',
  AFD: 'bg-seaglass',
  EBRD: 'bg-ink',
  AIIB: 'bg-sea-deep',
  EU: 'bg-gold',
  'EU Grant': 'bg-gold',
  'Egypt Govt': 'bg-limestone',
  'EBRD TA grant': 'bg-terracotta',
  'Balance (derived: €592M total − lenders)': 'bg-limestone',
};

/** Bar widths only: the first number in a listed amount, e.g. "€138M" gives 138. */
const weight = (amount: string) => Number(amount.match(/[\d.]+/)?.[0] ?? 0);

export default function FundingMix() {
  const split = projects.filter((p) => p.financialFramework.length > 0);
  const noSplit = projects.filter((p) => p.financialFramework.length === 0);

  return (
    <section id="funding" aria-labelledby="funding-title" className="scroll-mt-28 bg-limestone-wash py-24 md:py-32">
      <div className="alex-container">
        <h2 id="funding-title" className="max-w-3xl text-ink">
          Who is paying
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
          Only {split.length} of the {projects.length} projects have a published split between lenders, grants and the
          Egyptian government. Each bar shows the amounts as listed.
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-3">
          {split.map((project) => (
            <figure key={project.id}>
              <figcaption>
                <h3 className="text-2xl text-ink">{project.title}</h3>
                <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-ink">
                  {project.budget}
                  {project.factId && <SourceChip factId={project.factId} className="ml-1 text-ink-soft" />}
                </p>
              </figcaption>
              <div
                aria-hidden="true"
                className="mt-5 flex h-8 gap-0.5 overflow-hidden rounded-sm outline outline-1 -outline-offset-1 outline-black/10"
              >
                {project.financialFramework.map((f) => (
                  <span
                    key={f.source}
                    className={`block min-w-1 ${TONE[f.source] ?? 'bg-ink-soft'}`}
                    style={{ flex: `${weight(f.amount)} 1 0` }}
                  />
                ))}
              </div>
              <dl className="mt-4">
                {project.financialFramework.map((f) => (
                  <div
                    key={f.source}
                    className="flex items-baseline justify-between gap-4 border-t border-limestone py-2.5"
                  >
                    <dt className="flex items-center gap-2 text-ink-soft">
                      <span
                        aria-hidden="true"
                        className={`inline-block h-3 w-3 shrink-0 rounded-sm outline outline-1 -outline-offset-1 outline-black/20 ${TONE[f.source] ?? 'bg-ink-soft'}`}
                      />
                      {f.source}
                    </dt>
                    <dd className="font-semibold tabular-nums text-ink">
                      {f.amount}
                      {f.factId && <SourceChip factId={f.factId} iconOnly className="ml-1 text-ink-soft" />}
                    </dd>
                  </div>
                ))}
              </dl>
            </figure>
          ))}
        </div>

        <p className="mt-14 max-w-[65ch] text-pretty border-l-2 border-gold pl-5 leading-[1.75] text-ink-soft">
          No funding split is published here for{' '}
          {noSplit.map((p, i) => (
            <span key={p.id}>
              {p.title}
              {i < noSplit.length - 2 ? ', ' : i === noSplit.length - 2 ? ' or ' : ''}
            </span>
          ))}
          . Their budgets are shown as listed, and some are estimates or not yet set.
        </p>
      </div>
    </section>
  );
}
