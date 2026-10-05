import SourceChip from '@/components/SourceChip';
import { ProjectFigure } from '@/components/ProjectCard';
import { statusLabels, type Project } from '@/data/projectsData';

export default function ProjectEntry({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article
      className={`grid gap-6 border-t border-limestone py-10 md:gap-10 ${
        project.image ? 'sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]' : ''
      }`}
    >
      {project.image && <ProjectFigure project={project} className="aspect-[4/3]" />}
      <div>
        <p className="text-sm text-ink-soft">{project.subCategory ?? statusLabels[project.status]}</p>
        <h4 className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">{project.title}</h4>
        <p className="mt-1 text-sm font-semibold text-sea">{statusLabels[project.status]}</p>
        <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{project.description}</p>

        <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
          <div>
            <dt className="text-sm text-ink-soft">Budget</dt>
            <dd className="font-semibold tabular-nums text-ink">
              {project.budget}
              {project.factId && <SourceChip factId={project.factId} className="ml-1 text-ink-soft" />}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-soft">Timeline</dt>
            <dd className="font-semibold tabular-nums text-ink">{project.year}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="mt-5 inline-flex min-h-10 items-center border-b border-gold/70 text-sm font-semibold text-sea transition-colors hover:border-gold hover:text-ink"
        >
          Specifications and funding
          <span className="sr-only"> for {project.title}</span>
        </button>
      </div>
    </article>
  );
}
