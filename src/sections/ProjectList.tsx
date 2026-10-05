import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { ProjectDetailModal } from '../components/ProjectCard';
import StatusLedger from './projects/StatusLedger';
import FundingMix from './projects/FundingMix';
import ProjectEntry from './projects/ProjectEntry';
import { FILTERS, matchesFilter } from './projects/stages';

const allProjects: readonly Project[] = projectsData.projects;

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterId, setFilterId] = useState('all');

  const filter = FILTERS.find((f) => f.id === filterId) ?? FILTERS[0];
  const visible = allProjects.filter((p) => matchesFilter(p, filter));

  const open = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="ledger" aria-labelledby="ledger-title" className="scroll-mt-28 bg-white py-24 md:py-32">
        <div className="alex-container">
          <h2 id="ledger-title" className="max-w-3xl text-ink">
            How far along is each project
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
            Every listed project sits on one track, from study to operating. A dot shows the stage the project has
            reached, not the share of work done.
          </p>

          <div role="group" aria-label="Filter by stage" className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const count = allProjects.filter((p) => matchesFilter(p, f)).length;
              const active = f.id === filterId;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilterId(f.id)}
                  className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-semibold tabular-nums transition-colors ${
                    active
                      ? 'border-sea bg-sea text-white'
                      : 'border-limestone bg-white text-ink-soft hover:border-sea hover:text-sea'
                  }`}
                >
                  {f.label} ({count})
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="mt-3 text-sm text-ink-soft">
            Showing {visible.length} of {allProjects.length} projects.
          </p>

          <div className="mt-8">
            <StatusLedger projects={visible} onOpen={open} />
          </div>
        </div>
      </section>

      <FundingMix />

      <section id="projects" aria-labelledby="projects-title" className="scroll-mt-28 bg-white py-24 md:py-32">
        <div className="alex-container">
          <h2 id="projects-title" className="max-w-3xl text-ink">
            The projects
          </h2>
          <div className="mt-12 max-w-5xl space-y-20">
            {projectsData.categories.map((category) => {
              const rows = visible.filter((p) => p.category === category.id);
              if (rows.length === 0) return null;
              return (
                <div key={category.id}>
                  <h3 className="border-l-2 border-gold pl-4 text-3xl text-ink">{category.label}</h3>
                  <p className="mt-3 max-w-[65ch] pl-4 text-pretty text-ink-soft">{category.description}</p>
                  <div className="mt-8">
                    {rows.map((project) => (
                      <ProjectEntry key={project.id} project={project} onOpen={() => open(project)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
