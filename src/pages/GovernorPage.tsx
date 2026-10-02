import { motion } from 'framer-motion';
import { Award, Calendar, Info } from "lucide-react";
import PageMeta from "../components/PageMeta";
import PortraitPlaceholder from "../components/PortraitPlaceholder";
import CTA from "../sections/CTA";
import { governorData } from "../data/governorData";

const asOfLabel = (() => {
  const [year, month] = governorData.asOf.split("-").map(Number);
  return new Date(year, month - 1).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });
})();

export default function GovernorPage() {
  return (
    <div className="bg-white">
      <PageMeta
        title="Governor of Alexandria"
        description="Who leads Alexandria Governorate: the governor's background, priorities and record, compiled by an unofficial fan project from public sources."
      />
      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-limestone-wash -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent -z-10" />

        <div className="alex-container">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-sea/10 text-sea text-xs font-bold rounded-full">
                  {governorData.title}
                </span>
                <div className="h-[1px] w-12 bg-sea/30" />
              </div>

              <h1 className="text-ink mb-8">
                {governorData.honorific}{"\u00a0"}{governorData.name}
              </h1>

              <p className="text-xl text-ink-soft mb-6 max-w-xl leading-relaxed">
                {governorData.title} since {governorData.appointedDate}.
              </p>

              <div className="flex items-start gap-3 p-4 mb-10 max-w-xl bg-sea/5 border border-sea/20 rounded-lg text-ink-soft">
                <Info className="w-5 h-5 text-sea flex-shrink-0 mt-0.5" />
                <p>{governorData.previousGovernorNote}</p>
              </div>

              <div className="flex flex-wrap gap-8 py-8 border-y border-limestone/70 mb-10">
                <div className="flex flex-col">
                  <span className="text-ink-soft text-xs font-bold mb-1">
                    In office
                  </span>
                  <span className="text-ink font-bold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sea" />
                    {governorData.tenure}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-ink-soft text-xs font-bold mb-1">
                    Background
                  </span>
                  <span className="text-ink font-bold flex items-center gap-2">
                    <Award className="w-4 h-4 text-sea" />
                    {governorData.background}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Portrait: use an official or press photo with credit (see docs/image-prompts.md) */}
            <PortraitPlaceholder className="lg:mt-16" />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 md:py-32 bg-limestone-wash overflow-hidden">
        <div className="alex-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
              <div className="w-full md:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-ink mb-8">
                    Biography and career
                  </h2>
                  <div className="p-6 bg-white rounded-lg border border-limestone/70 text-ink-soft text-sm">
                    {governorData.title}, {governorData.tenure.toLowerCase()}.
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-xl text-ink-soft leading-relaxed mb-8">
                    {governorData.biography.summary}
                  </p>
                  <div className="space-y-6">
                    {governorData.biography.career.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-sea mt-2.5 flex-shrink-0" />
                        <p className="text-ink-soft leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 p-6 bg-sea/5 rounded-lg border-l-4 border-sea text-ink font-medium">
                    {governorData.biography.appointment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reported Priorities Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="alex-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sea font-bold text-sm mb-4 block">
                {governorData.tenure}
              </span>
              <h2 className="text-ink mb-8">
                Reported priorities
              </h2>
              <div className="p-6 md:p-10 bg-sea rounded-xl text-white shadow-lg">
                <p className="text-xl font-bold font-display leading-relaxed">
                  {governorData.priorities.intro}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {governorData.priorities.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 md:p-8 border border-limestone/70 rounded-xl"
                >
                  <h4 className="text-ink mb-4">
                    {item.title}
                  </h4>
                  <p className="text-ink-soft text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="mt-24 pt-8 border-t border-limestone/70 text-xs text-ink-soft">
            <p className="font-bold mb-3">Sources</p>
            <ul className="space-y-1.5">
              {governorData.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sea underline underline-offset-2 break-words"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4">Information as of {asOfLabel}.</p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
