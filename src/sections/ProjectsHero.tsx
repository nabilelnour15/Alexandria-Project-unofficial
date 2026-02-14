
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { TrendingUp, Users, Globe, Database } from 'lucide-react';

const icons = {
  "Invested (2016-2026)": TrendingUp,
  "Coordination": Users,
  "Major Projects": Globe,
  "GCAP Pipeline": Database
};

export default function ProjectsHero() {
  const { hero } = projectsData;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-60" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="alex-container relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-full mb-6 uppercase tracking-widest border border-blue-100">
              2016 - 2026 Analysis
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 font-['Montserrat'] leading-[1.1] tracking-tight">
              {hero.title}
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-slate-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              {hero.subtitle}
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto mb-12 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm">
              {hero.summary}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {hero.stats.map((stat, idx) => {
                const Icon = icons[stat.label as keyof typeof icons] || TrendingUp;
                return (
                  <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-3 text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-black text-slate-900 mb-1 font-['Montserrat']">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
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
