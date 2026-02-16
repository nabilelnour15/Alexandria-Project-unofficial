
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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[30rem] bg-blue-100 rounded-full blur-[120px] -rotate-12 pointer-events-none opacity-60" />

      <div className="alex-container relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Strategic Alignment</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-['Montserrat'] tracking-tight mb-8">
              {vision2030.title}
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
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
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-['Montserrat']">{pillar.title}</h3>
                
                <ul className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
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
          className="mt-24 p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-2 block">Future Outlook</span>
              <h4 className="text-3xl font-black text-slate-900 font-['Montserrat'] mb-4">{projectsData.gcap.title}</h4>
              <p className="text-slate-600 text-lg mb-8">
                {projectsData.gcap.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {projectsData.gcap.pipeline.map((p, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{p.sector}</span>
                    <span className="text-slate-900 font-bold text-lg">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-[2.5rem] text-white text-center w-full lg:w-auto shadow-lg shadow-green-200">
              <span className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Total Identified Pipeline</span>
              <div className="text-5xl font-black font-['Montserrat'] tracking-tighter">€506M</div>
              <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">
                10-15 Year Horizon
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
