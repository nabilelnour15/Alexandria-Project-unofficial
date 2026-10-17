import { projectsData, type Project } from '@/data/projectsData';
import { STAGES, stageOf } from './stages';

const allProjects: readonly Project[] = projectsData.projects;

/**
 * Home-page summary of the project ledger, drawn as a tram line: the five
 * stages are stops, and each stop lists the projects that have reached it.
 * Horizontal from md up, vertical on phones.
 */
export default function StageLine() {
  const stops = STAGES.map((stage, i) => ({
    ...stage,
    projects: allProjects.filter((p) => stageOf(p) === i),
  }));

  return (
    <ol aria-label="Listed projects by stage, from study to operating" className="relative grid gap-8 md:grid-cols-5 md:gap-4">
      <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-sea/30 md:bottom-auto md:left-[10%] md:right-[10%] md:top-[7px] md:h-0.5 md:w-auto" />
      {stops.map((stop) => {
        const reached = stop.projects.length > 0;
        return (
          <li key={stop.id} className="relative grid grid-cols-[16px_1fr] gap-x-4 md:block md:text-center">
            <span
              aria-hidden="true"
              className={`relative z-10 mt-1 block h-4 w-4 rounded-full border-2 md:mx-auto md:mt-0 ${
                reached ? 'border-sea bg-sea' : 'border-sea/40 bg-limestone-wash'
              }`}
            />
            <div className="md:mt-4">
              <p className="font-display text-xl font-semibold text-ink">
                {stop.label}
                <span className="ml-2 font-sans text-sm font-semibold tabular-nums text-ink-soft">
                  {stop.projects.length}
                </span>
              </p>
              {reached && (
                <ul className="mt-2 space-y-1 text-sm leading-snug text-ink-soft">
                  {stop.projects.map((p) => (
                    <li key={p.id}>{p.title}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
