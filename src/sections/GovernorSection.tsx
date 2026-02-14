
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Award, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { governorData } from '../data/governorData';

const PlaceholderImage = ({ text = "Image Placeholder", className = "" }: { text?: string, className?: string }) => (
  <div className={`w-full bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}>
    <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
    </div>
    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
      <Anchor className="w-6 h-6 text-slate-400" />
    </div>
    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest px-4 text-center">{text}</span>
  </div>
);

export default function GovernorSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="alex-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-4 py-1.5 bg-[#0068c8]/10 text-[#0068c8] text-xs font-black rounded-full uppercase tracking-widest">
                Leadership
              </span>
              <div className="h-[1px] w-12 bg-[#0068c8]/30" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 font-['Montserrat'] leading-[1.1]">
              {governorData.rank} <br />
              <span className="text-[#0068c8]">{governorData.name}</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              {governorData.biography.summary}
            </p>
            
            <div className="flex flex-wrap gap-8 py-8 border-y border-slate-100 mb-10">
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Took Office</span>
                <span className="text-slate-900 font-bold flex items-center gap-2">
                   <Calendar className="w-4 h-4 text-[#0068c8]" />
                   {governorData.appointedDate}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Background</span>
                <span className="text-slate-900 font-bold flex items-center gap-2">
                   <Award className="w-4 h-4 text-[#0068c8]" />
                   Former Navy Commander
                </span>
              </div>
            </div>
            
            <Link to="/governor" className="alex-btn-primary inline-flex items-center gap-3 group">
               Read Full Biography
               <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0068c8]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#3898ec]/10 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <PlaceholderImage text="Official Portrait: Vice-Admiral Ahmed Khaled Hassan Saeed" className="aspect-[4/5]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
