
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { Wallet, Users, Construction, ListChecks, TrendingUp } from 'lucide-react';
import SourceChip from '../components/SourceChip';

// Keys must match the stat labels in projectsData.hero.stats.
const icons = {
  "Listed project budgets": Wallet,
  "Coordination": Users,
  "Under construction": Construction,
  "GCAP listed pipeline items": ListChecks,
};

export default function ProjectsHero({
  headingLevel = 2,
}: {
  /** 1 on the Projects page; 2 when embedded in another page (e.g. Home) */
  headingLevel?: 1 | 2;
}) {
  const { hero } = projectsData;
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="alex-container">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="alex-section-tag mb-4">
              Projects from 2016 to 2026
            </span>

            <Heading className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 font-display leading-[1.1]">
              {hero.title}
            </Heading>

            <p className="text-xl md:text-2xl font-medium text-ink-soft mb-8 max-w-3xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>

            <p className="text-ink-soft text-lg leading-relaxed max-w-4xl mx-auto mb-12 bg-limestone-wash p-6 rounded-lg border border-limestone/70">
              {hero.summary}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {hero.stats.map((stat, idx) => {
                const Icon = icons[stat.label as keyof typeof icons] || TrendingUp;
                return (
                  <div key={idx} className="p-4 md:p-6 bg-white rounded-lg shadow-sm border border-limestone/70 min-w-0">
                    <div className="flex justify-center mb-3 text-sea">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-ink mb-1 font-display">{stat.value}</div>
                    <div className="text-xs font-bold text-ink-soft">{stat.label}</div>
                    {stat.factId && (
                      <div className="mt-2 text-ink-soft">
                        <SourceChip factId={stat.factId} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
