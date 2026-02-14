import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Building2, 
  Zap, 
  Route, 
  Leaf, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  LayoutGrid,
  CheckCircle2,
  Calendar,
  Anchor
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../sections/CTA';
import { governorData, type Achievement } from '../data/governorData';


const PlaceholderImage = ({ text = "Governor Image", className = "" }: { text?: string, className?: string }) => (
  <div className={`w-full bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative ${className}`}>
    <img 
      src="/images/govanor.jpg" 
      alt={text} 
      className="w-full h-full object-cover"
    />
  </div>
);


const AchievementSection = ({ achievement }: { achievement: Achievement }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid lg:grid-cols-2 gap-12 items-center"
  >
    <div>
      <h3 className="text-3xl font-black text-slate-900 mb-6 font-['Montserrat']">{achievement.title}</h3>
      <p className="text-slate-600 text-lg mb-8 leading-relaxed">
        {achievement.description}
      </p>
      <div className="space-y-4">
        {achievement.items.map((item, idx) => (
          <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-[#0068c8]/30 transition-all">
            <div className="w-6 h-6 rounded-full bg-[#0068c8]/10 flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle2 className="w-4 h-4 text-[#0068c8]" />
            </div>
            <p className="text-slate-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="col-span-1 sm:col-span-2">

<PlaceholderImage text={`${achievement.title} Visualization`} className="aspect-video [&_img]:object-top" />

      </div>
      {achievement.stats?.map((stat, idx) => (
        <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[#0068c8] text-3xl font-black mb-1 font-['Montserrat']">{stat.value}</p>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function GovernorPage() {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'sustainability' | 'publicServices'>('infrastructure');

  const icons: Record<string, any> = {
    Building: Building2,
    Route: Route,
    DollarSign: TrendingUp,
    Zap: Zap
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isInternal />
      
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent -z-10" />
          
          <div className="alex-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-4 py-1.5 bg-[#0068c8]/10 text-[#0068c8] text-xs font-black rounded-full uppercase tracking-widest">
                    Leadership & Vision
                  </span>
                  <div className="h-[1px] w-12 bg-[#0068c8]/30" />
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 font-['Montserrat'] leading-[1.1]">
                  {governorData.rank} <br />
                  <span className="text-[#0068c8]">{governorData.name}</span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  Leading Alexandria's transformation into a world-class smart city, balancing historical preservation with futuristic infrastructure and sustainable mobility.
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
                
                <button className="alex-btn-primary flex items-center gap-3 group">
                   Read Full Biography
                   <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0068c8]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#3898ec]/10 rounded-full blur-3xl" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <PlaceholderImage text="Official Portrait: Vice-Admiral Ahmed Khaled Hassan Saeed" className="aspect-[4/5] object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="py-12 bg-white relative z-20">
          <div className="alex-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {governorData.quickStats.map((stat, idx) => {
                const Icon = icons[stat.icon] || LayoutGrid;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0068c8] transition-colors">
                      <Icon className="w-6 h-6 text-[#0068c8] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-2 font-['Montserrat']">{stat.value}</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.1em]">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="alex-container">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-20 items-start">
                <div className="w-full md:w-1/3">
                  <div className="sticky top-32">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 font-['Montserrat'] leading-tight">
                      Biography & <br />Military Career
                    </h2>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm">
                      "Building Alexandria's future requires the same discipline, strategy, and dedication as defending Egyptian waters."
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="prose prose-lg prose-slate max-w-none">
                    <p className="text-xl text-slate-700 leading-relaxed mb-8">
                      {governorData.biography.summary}
                    </p>
                    <div className="space-y-6">
                       {governorData.biography.militaryCareer.map((item, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#0068c8] mt-2.5 flex-shrink-0" />
                            <p className="text-slate-600 leading-relaxed">{item}</p>
                         </div>
                       ))}
                    </div>
                    <p className="mt-8 p-6 bg-[#0068c8]/5 rounded-2xl border-l-4 border-[#0068c8] text-slate-800 font-medium">
                       {governorData.biography.appointment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Achievements Tabs */}
        <section className="py-32 bg-slate-50">
          <div className="alex-container">
            <div className="text-center mb-16">
              <span className="text-[#0068c8] font-black uppercase tracking-[0.2em] text-xs mb-4 block">Milestones 2024-2025</span>
              <h2 className="text-5xl font-black text-slate-900 font-['Montserrat'] mb-6">Strategic Achievements</h2>
              <div className="h-1 w-20 bg-[#0068c8] mx-auto rounded-full" />
            </div>

            {/* Custom Tabs */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                {[
                  { id: 'infrastructure', label: 'Infrastructure', icon: Building2 },
                  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
                  { id: 'publicServices', label: 'Public Services', icon: ShieldCheck },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                      activeTab === tab.id 
                      ? 'bg-[#0068c8] text-white shadow-xl shadow-[#0068c8]/25 scale-105' 
                      : 'bg-white text-slate-500 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-[#0068c8]'}`} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="bg-white p-8 lg:p-16 rounded-[3rem] shadow-sm border border-slate-100">
                <AnimatePresence mode="wait">
                  {activeTab === 'infrastructure' && (
                    <AchievementSection key="infra" achievement={governorData.achievements.infrastructure} />
                  )}
                  {activeTab === 'sustainability' && (
                    <AchievementSection key="sust" achievement={governorData.achievements.sustainability} />
                  )}
                  {activeTab === 'publicServices' && (
                    <AchievementSection key="pub" achievement={governorData.achievements.publicServices} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Abstract decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
             <div className="text-[20rem] font-black text-slate-900 leading-none">2030</div>
          </div>
          
          <div className="alex-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[#3898ec] font-black uppercase tracking-[0.2em] text-xs mb-4 block">The Road Ahead</span>
                <h2 className="text-5xl font-black text-slate-900 font-['Montserrat'] mb-8 leading-tight">
                  Vision for the <br />Future Government
                </h2>
                <div className="p-10 bg-gradient-to-br from-[#0068c8] to-[#3898ec] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4">Official Slogan</p>
                  <blockquote className="text-3xl font-black font-['Montserrat'] leading-relaxed relative z-10">
                    "{governorData.vision.tagline}"
                  </blockquote>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 {governorData.vision.pillars.map((pillar, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 border border-slate-100 rounded-3xl hover:border-[#3898ec]/30 hover:bg-slate-50 transition-all"
                   >
                     <h4 className="text-lg font-bold text-slate-900 mb-4 font-['Montserrat']">{pillar.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
