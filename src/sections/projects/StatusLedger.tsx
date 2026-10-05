import SourceChip from '@/components/SourceChip';
import { projectsData, statusLabels, type Project } from '@/data/projectsData';
import { STAGES, stageOf } from './stages';

/**
 * The page's signature: one shared track of five stages, and every project
 * is a dot on it. Filled line = stages passed. Position is a stage, not a
 * percentage complete.
 */
export default function StatusLedger({
  projects,
  onOpen,
}: {
  projects: readonly Project[];
  onOpen: (project: Project) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <caption className="sr-only">
          Listed projects placed on a five-stage track from study to operating, with budget
        </caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="w-[30%] pb-3 pr-4 text-sm font-semibold text-ink">
              Project
            </th>
            <th scope="col" className="pb-3 text-sm font-semibold text-ink">
              <span className="grid grid-cols-5">
                {STAGES.map((s) => (
                  <span key={s.id} className="text-center">
                    {s.label}
                  </span>
                ))}
              </span>
            </th>
            <th scope="col" className="w-[18%] pb-3 pl-4 text-right text-sm font-semibold text-ink">
              Budget
            </th>
          </tr>
        </thead>
        {projectsData.categories.map((category) => {
          const rows = projects.filter((p) => p.category === category.id);
          if (rows.length === 0) return null;
          return (
            <tbody key={category.id}>
              <tr>
                <th
                  scope="colgroup"
                  colSpan={3}
                  className="pb-2 pt-8 font-display text-xl font-semibold text-sea"
                >
                  {category.label}
                </th>
              </tr>
              {rows.map((project) => {
                const stage = stageOf(project);
                const left = ((stage + 0.5) / STAGES.length) * 100;
                return (
                  <tr key={project.id} className="border-t border-limestone align-middle">
                    <th scope="row" className="py-4 pr-4 text-left font-normal">
                      <button
                        type="button"
                        onClick={() => onOpen(project)}
                        aria-haspopup="dialog"
                        className="-my-2 block min-h-10 py-2 text-left font-semibold text-ink underline decoration-limestone decoration-2 underline-offset-4 transition-colors hover:text-sea hover:decoration-gold"
                      >
                        {project.title}
                      </button>
                      <span className="block text-sm text-ink-soft">
                        {statusLabels[project.status]}, {project.year}
                      </span>
                    </th>
                    <td className="py-4">
                      <div className="relative h-6" role="img" aria-label={`Stage: ${STAGES[stage].label}`}>
                        <span className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-limestone" />
                        <span
                          className="absolute left-[10%] top-1/2 h-0.5 -translate-y-1/2 bg-sea"
                          style={{ width: `${left - 10}%` }}
                        />
                        {STAGES.map((s, i) => (
                          <span
                            key={s.id}
                            className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-limestone"
                            style={{ left: `${((i + 0.5) / STAGES.length) * 100}%` }}
                          />
                        ))}
                        <span
                          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sea shadow-[0_0_0_1.5px_rgb(var(--sea))]"
                          style={{ left: `${left}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-right text-sm font-semibold tabular-nums text-ink">
                      {project.budget}
                      {project.factId && <SourceChip factId={project.factId} className="ml-1 text-ink-soft" />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
