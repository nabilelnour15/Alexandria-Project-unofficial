
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ShieldCheck, Target, TrendingUp, Heart, Sprout } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';


const icons: Record<number, LucideIcon> = {
  0: TrendingUp,
  1: Heart,
  2: Sprout,
  3: ShieldCheck
};


export default function Vision2030Section() {
  const { vision2030 } = projectsData;

  return (
    <section className="py-20 md:py-32 bg-limestone-wash">
      <div className="alex-container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="alex-section-tag mb-3">Strategic alignment</span>
            <h2 className="text-ink mb-8">
              {vision2030.title}
            </h2>
            <p className="text-ink-soft text-xl max-w-3xl mx-auto leading-relaxed">
              {vision2030.description}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vision2030.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Target;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 bg-white rounded-xl border border-limestone shadow-sm"
              >
                <div className="w-14 h-14 bg-sea-mist rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-sea" />
                </div>

                <h3 className="text-ink mb-6">{pillar.title}</h3>

                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-ink-soft">
                      <div className="w-1.5 h-1.5 rounded-full bg-seaglass" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* GCAP Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-6 md:p-12 bg-white rounded-xl border border-limestone shadow-md"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <span className="text-sea font-semibold text-sm mb-2 block">Longer-term plan</span>
              <h4 className="text-ink mb-4">{projectsData.gcap.title}</h4>
              <p className="text-ink-soft text-lg mb-8">
                {projectsData.gcap.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {projectsData.gcap.pipeline.map((p, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-ink-soft text-xs font-bold">{p.sector}</span>
                    <span className="text-ink font-bold text-lg">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-sea rounded-xl text-white text-center w-full lg:w-auto">
              <span className="text-sm font-bold text-white/85 mb-2">Listed pipeline items</span>
              {/* gcap.budget reads "≈€180M in listed pipeline items"; show just the amount here */}
              <div className="text-5xl font-bold font-display">{projectsData.gcap.budget.split(' in ')[0]}</div>
              <span className="mt-2 text-xs text-white/85">Sum of the items listed, not money spent</span>
              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-xs font-bold">
                10–15 year horizon
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
