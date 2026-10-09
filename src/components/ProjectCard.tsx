import { X } from 'lucide-react';
import { statusLabels, type Project } from '../data/projectsData';
import SourceChip from './SourceChip';
import ConceptBadge from './ConceptBadge';
import PhotoCredit from './PhotoCredit';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog';

/**
 * Project picture. AI concept images carry the badge; a project without an
 * image yet gets a plain limestone panel saying so, instead of an empty box.
 */
export function ProjectFigure({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  if (!project.image) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-limestone-wash px-6 text-center text-sm text-ink-soft outline outline-1 -outline-offset-1 outline-black/10 ${className}`}
      >
        Image coming soon
      </div>
    );
  }
  return (
    <div>
      <div className={`relative ${className}`}>
        <img
          src={project.image}
          alt={project.imagePlaceholder}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
        />
        {project.isConcept && <ConceptBadge className="absolute bottom-2 left-2" />}
      </div>
      <PhotoCredit credit={project.credit} className="mt-1.5" />
    </div>
  );
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project) return null;
  const specs = Object.entries(project.technicalSpecs);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[90vh] flex-col gap-0 overflow-hidden rounded-xl border-0 bg-white p-0 shadow-lg sm:max-w-4xl md:flex-row"
      >
        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close project details"
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-soft shadow-sm transition-colors hover:text-sea"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </DialogClose>

        <div className="shrink-0 overflow-y-auto border-limestone bg-limestone-wash p-6 md:w-2/5 md:border-r md:p-8">
          <ProjectFigure project={project} className="aspect-[4/3]" />
          <DialogTitle className="mt-6 font-display text-3xl font-semibold leading-tight text-ink">
            {project.title}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-ink-soft">
            {statusLabels[project.status]}, {project.year}
          </DialogDescription>
          {project.quote && (
            <blockquote className="mt-6 border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-ink-soft">
              {project.quote}
            </blockquote>
          )}
        </div>

        <div className="flex-1 space-y-10 overflow-y-auto p-6 md:p-10">
          <section aria-labelledby="pd-overview">
            <h3 id="pd-overview" className="text-xl text-ink">
              Overview
            </h3>
            <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{project.description}</p>
          </section>

          <section aria-labelledby="pd-specs">
            <h3 id="pd-specs" className="text-xl text-ink">
              Specifications
            </h3>
            <dl className="mt-3">
              {specs.map(([key, val]) => {
                const specFactId = project.specFactIds?.[key];
                return (
                  <div key={key} className="grid grid-cols-[minmax(0,9rem)_1fr] gap-4 border-t border-limestone py-3">
                    <dt className="text-sm text-ink-soft">{key}</dt>
                    <dd className="font-semibold tabular-nums text-ink">
                      {val}
                      {specFactId && <SourceChip factId={specFactId} className="ml-1 text-ink-soft" />}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>

          {project.financialFramework.length > 0 && (
            <section aria-labelledby="pd-funding">
              <h3 id="pd-funding" className="text-xl text-ink">
                Who is paying
              </h3>
              <dl className="mt-3">
                {project.financialFramework.map((f) => (
                  <div
                    key={f.source}
                    className="flex items-baseline justify-between gap-4 border-t border-limestone py-3"
                  >
                    <dt className="text-ink-soft">
                      {f.source}
                      {f.instrument && <span className="block text-xs">{f.instrument}</span>}
                    </dt>
                    <dd className="font-display text-2xl font-semibold tabular-nums text-ink">
                      {f.amount}
                      {f.factId && <SourceChip factId={f.factId} iconOnly className="ml-1 text-ink-soft" />}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section aria-labelledby="pd-vision">
            <h3 id="pd-vision" className="text-xl text-ink">
              Vision 2030 alignment
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.vision2030Pillars.map((p) => (
                <li key={p} className="alex-tag text-sm">
                  {p}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
