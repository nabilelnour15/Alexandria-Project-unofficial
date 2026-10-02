
import { motion } from 'framer-motion';
import { 
  X, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { statusLabels, type Project } from '../data/projectsData';
import { PlaceholderImage } from "./PlaceholderImage";
import SourceChip from "./SourceChip";
import ConceptBadge from "./ConceptBadge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
/**
 * Project visual. Projects without an image yet get a deliberate limestone/sea
 * panel with the placeholder caption and an "Image coming soon" note, instead
 * of an empty box.
 */
const ProjectImage = ({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) => {
  if (project.image) {
    return (
      <PlaceholderImage
        text={project.imagePlaceholder}
        className={className}
        src={project.image}
      />
    );
  }
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-limestone via-limestone-wash to-sea-mist px-6 text-center ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgb(var(--sea)) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <ImageIcon className="relative w-7 h-7 text-sea/50" aria-hidden="true" />
      <span className="relative font-display text-lg font-semibold leading-tight text-sea">
        {project.imagePlaceholder}
      </span>
      <span className="relative text-xs font-medium text-ink-soft">Image coming soon</span>
    </div>
  );
};

const StatusBadge = ({ status }: { status: Project["status"] }) => {
  const styles = {
    Completed: "bg-seaglass/15 text-ink border-seaglass/50",
    Operational: "bg-seaglass/15 text-ink border-seaglass/50",
    "Under Construction": "bg-sea-mist text-sea border-sea/20",
    "Early Implementation": "bg-sea-mist text-sea border-sea/20",
    "Under Development": "bg-sea-mist text-sea border-sea/20",
    Planning: "bg-limestone/60 text-ink-soft border-limestone",
    Pipeline: "bg-limestone/60 text-ink-soft border-limestone",
    "Detailed Study Required":
      "bg-terracotta/5 text-terracotta border-terracotta/30",
  };

  const Icon =
    status === "Completed" || status === "Operational"
      ? CheckCircle2
      : status === "Detailed Study Required"
        ? AlertCircle
        : Clock;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-semibold border ${styles[status] || styles["Planning"]}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {statusLabels[status]}
    </span>
  );
};

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-lg shadow-sm border border-limestone/70 overflow-hidden cursor-pointer group hover:shadow-md hover:border-sea/15 has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-tram has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:shadow-[0_0_0_5px_rgb(var(--ink))] transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <ProjectImage
          project={project}
          className="h-full group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>
        {project.isConcept && project.image && (
          <ConceptBadge className="absolute bottom-3 left-3" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-sea text-xs font-bold mb-1 block">
            {project.subCategory || project.category}
          </span>
          <h3 className="text-ink group-hover:text-sea transition-colors">
            {/* The ::after overlay stretches this button over the whole card */}
            <button
              type="button"
              onClick={onClick}
              aria-haspopup="dialog"
              className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none"
            >
              {project.title}
            </button>
          </h3>
        </div>

        <p className="text-ink-soft text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-limestone/70 mt-auto">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-ink-soft">
              Budget
            </span>
            <span className="text-ink font-bold text-sm inline-flex items-center gap-1">
              {project.budget}
              {project.factId && <SourceChip factId={project.factId} />}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold text-ink-soft">
              Timeline
            </span>
            <span className="text-ink font-bold text-sm">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-5xl max-h-[90vh] p-0 gap-0 bg-white rounded-xl border-0 shadow-lg overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close project details"
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-ink-soft hover:text-sea transition-colors shadow-sm"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </DialogClose>

        {/* Left Column: Image & Abstract */}
        <div className="md:w-1/3 relative h-64 md:h-auto bg-limestone-wash border-r border-limestone/70 overflow-y-auto">
          <div className="relative h-64 md:h-1/2">
            <ProjectImage project={project} className="h-full w-full" />
            {project.isConcept && project.image && (
              <ConceptBadge className="absolute bottom-3 left-3" />
            )}
          </div>
          <div className="p-8">
            <StatusBadge status={project.status} />
            <DialogTitle className="text-2xl font-bold text-ink font-display leading-tight mt-4 mb-2">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-ink-soft text-sm font-medium">
              {project.category}
            </DialogDescription>

            {project.quote && (
              <blockquote className="mt-8 pt-8 border-t border-limestone">
                <p className="text-ink-soft italic text-sm leading-relaxed">
                  "{project.quote}"
                </p>
              </blockquote>
            )}
          </div>
        </div>

        {/* Right Column: Full Details */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-10 bg-white">
          {/* Description */}
          <section>
            <h4 className="flex items-center gap-2 text-ink mb-4">
              <span className="w-1 h-6 bg-sea rounded-full" /> Project
              Overview
            </h4>
            <p className="text-ink-soft leading-relaxed text-lg">
              {project.description}
            </p>
          </section>

          {/* Technical Specifications */}
          <section className="grid sm:grid-cols-2 gap-x-8 gap-y-6 bg-limestone-wash p-6 rounded-lg border border-limestone/70">
            <div className="sm:col-span-2 flex items-center gap-2 text-sea mb-2">
              <TrendingUp className="w-5 h-5" />
              <h4 className="">Technical Specifications</h4>
            </div>
            {Object.entries(project.technicalSpecs).map(([key, val], i) => {
              const specFactId = project.specFactIds?.[key];
              return (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-bold text-ink-soft mb-1">
                    {key}
                  </span>
                  <span className="text-ink font-semibold">
                    {val}
                    {specFactId && <SourceChip factId={specFactId} className="ml-1" />}
                  </span>
                </div>
              );
            })}
          </section>

          {/* Financial Framework */}
          {project.financialFramework.length > 0 && (
            <section>
              <h4 className="flex items-center gap-2 text-ink mb-6">
                <span className="w-1 h-6 bg-seaglass rounded-full" />{" "}
                Financial Framework
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.financialFramework.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xl border border-limestone shadow-sm flex flex-col"
                  >
                    <span className="text-ink-soft text-xs font-bold mb-1">
                      {f.source}
                    </span>
                    <span className="text-xl font-bold text-ink">
                      {f.amount}
                    </span>
                    {f.instrument && (
                      <span className="text-ink-soft text-xs mt-1">
                        {f.instrument}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Vision 2030 Pillars */}
          <section>
            <div className="flex items-center gap-2 text-ink mb-4">
              <Target className="w-5 h-5 text-terracotta" />
              <h4 className="">
                Vision 2030 Alignment
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.vision2030Pillars.map((p, i) => (
                <span
                  key={i}
                  className="alex-tag text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
