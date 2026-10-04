import type { Project } from '@/data/projectsData';

/**
 * The shared track every project is placed on. The data has eight status
 * wordings; they are grouped into five stages so projects can be compared.
 * A position is a stage, not a percentage complete.
 */
export const STAGES = [
  { id: 'study', label: 'Study' },
  { id: 'planning', label: 'Planning' },
  { id: 'development', label: 'Development' },
  { id: 'construction', label: 'Construction' },
  { id: 'operating', label: 'Operating' },
] as const;

const STAGE_INDEX: Record<Project['status'], number> = {
  'Detailed Study Required': 0,
  Planning: 1,
  Pipeline: 1,
  'Under Development': 2,
  'Early Implementation': 2,
  'Under Construction': 3,
  Operational: 4,
  Completed: 4,
};

export const stageOf = (project: Project) => STAGE_INDEX[project.status];

export interface StageFilter {
  readonly id: string;
  readonly label: string;
  /** Stage indexes this filter keeps; empty means everything. */
  readonly stages: readonly number[];
}

export const FILTERS: readonly StageFilter[] = [
  { id: 'all', label: 'All', stages: [] },
  { id: 'construction', label: 'Under construction', stages: [3] },
  { id: 'development', label: 'In development', stages: [2] },
  { id: 'planning', label: 'Planning and study', stages: [0, 1] },
  { id: 'operating', label: 'Operating', stages: [4] },
];

export const matchesFilter = (project: Project, filter: StageFilter) =>
  filter.stages.length === 0 || filter.stages.includes(stageOf(project));
