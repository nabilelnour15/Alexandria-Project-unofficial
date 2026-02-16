
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import type { Project } from '../data/projectsData';
import { PlaceholderImage } from "./PlaceholderImage";
// const PlaceholderImage = ({ text = "Image Placeholder", className = "" }: { text?: string, className?: string }) => (
//   <div className={`w-full bg-slate-100 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}>
//     <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
//     </div>
//     <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{text}</span>
//   </div>
// );

const StatusBadge = ({ status }: { status: Project["status"] }) => {
  const styles = {
    Completed: "bg-green-100 text-green-700 border-green-200",
    "Under Construction": "bg-blue-100 text-blue-700 border-blue-200",
    "Early Implementation": "bg-indigo-100 text-indigo-700 border-indigo-200",
    "Under Development": "bg-amber-100 text-amber-700 border-amber-200",
    Planning: "bg-slate-100 text-slate-600 border-slate-200",
    Pipeline: "bg-purple-100 text-purple-700 border-purple-200",
    "Detailed Study Required":
      "bg-orange-100 text-orange-700 border-orange-200",
  };

  const Icon =
    status === "Completed"
      ? CheckCircle2
      : status === "Detailed Study Required"
        ? AlertCircle
        : Clock;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${styles[status] || styles["Planning"]}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {status}
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
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer group hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <PlaceholderImage
          text={project.imagePlaceholder}
          className="h-full group-hover:scale-105 transition-transform duration-700"
          src={project.image}
        />
        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1 block">
            {project.subCategory || project.category}
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-['Montserrat'] leading-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Budget
            </span>
            <span className="text-slate-900 font-bold text-sm">
              {project.budget}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Timeline
            </span>
            <span className="text-slate-900 font-bold text-sm">
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-500 hover:text-red-500 transition-colors shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Image & Abstract */}
            <div className="md:w-1/3 relative h-64 md:h-auto bg-slate-50 border-r border-slate-100 overflow-y-auto custom-scrollbar">
              <PlaceholderImage
                text={project.imagePlaceholder}
                className="h-64 md:h-1/2 w-full"
                src={project.image}
              />
              <div className="p-8">
                <StatusBadge status={project.status} />
                <h2 className="text-2xl font-black text-slate-900 font-['Montserrat'] leading-tight mt-4 mb-2">
                  {project.title}
                </h2>
                <span className="text-slate-500 text-sm font-medium">
                  {project.category}
                </span>

                {project.quote && (
                  <blockquote className="mt-8 pt-8 border-t border-slate-200">
                    <p className="text-slate-600 italic text-sm leading-relaxed">
                      "{project.quote}"
                    </p>
                  </blockquote>
                )}
              </div>
            </div>

            {/* Right Column: Full Details */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar space-y-10 bg-white">
              {/* Description */}
              <section>
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 font-['Montserrat'] mb-4">
                  <span className="w-1 h-6 bg-blue-600 rounded-full" /> Project
                  Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              {/* Technical Specifications */}
              <section className="grid sm:grid-cols-2 gap-x-8 gap-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="sm:col-span-2 flex items-center gap-2 text-blue-600 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <h4 className="font-bold">Technical Specifications</h4>
                </div>
                {Object.entries(project.technicalSpecs).map(([key, val], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {key}
                    </span>
                    <span className="text-slate-900 font-semibold">{val}</span>
                  </div>
                ))}
              </section>

              {/* Financial Framework */}
              {project.financialFramework.length > 0 && (
                <section>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 font-['Montserrat'] mb-6">
                    <span className="w-1 h-6 bg-green-500 rounded-full" />{" "}
                    Financial Framework
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.financialFramework.map((f, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col"
                      >
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
                          {f.source}
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          {f.amount}
                        </span>
                        {f.instrument && (
                          <span className="text-slate-400 text-xs mt-1">
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
                <div className="flex items-center gap-2 text-slate-900 mb-4">
                  <Target className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold font-['Montserrat']">
                    Vision 2030 Alignment
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.vision2030Pillars.map((p, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-semibold border border-red-100"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
