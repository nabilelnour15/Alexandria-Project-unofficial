import { useState } from 'react';
import { 
  Sun, Anchor, Landmark, 
  BookOpen, Building2, Palette, 
  Users, Utensils, Zap, Info,
  ChevronRight, ChevronDown, Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  aboutEssence, landmarksData, 
  modernInfrastructure, museumRegistry, culture2025, 
  culinaryTraditions, integrationData, timelineEvents,
  summaryData
} from '../data/aboutData';
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {SectionTitle} from "@/components/SectionTitle";
export default function About({ isTeaser = false }: { isTeaser?: boolean }) {
  const [activeExplorerTab, setActiveExplorerTab] = useState("landmarks");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const explorerTabs = [
    { id: "landmarks", label: "Wonders", icon: Anchor },
    { id: "modern", label: "Modern", icon: Zap },
    { id: "museums", label: "Museums", icon: BookOpen },
    { id: "culture", label: "2025 Culture", icon: Palette },
    { id: "culinary", label: "Seafood", icon: Utensils },
    { id: "heritage", label: "Heritage", icon: Building2 },
  ];

  const [expandedEventIndex, setExpandedEventIndex] = useState<number | null>(
    null,
  );



  if (isTeaser) {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="alex-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="alex-section-tag mb-4 inline-block">
                About Alexandria
              </span>
              <h2 className="font-['Montserrat'] text-3xl md:text-5xl font-black text-[#0d1623] mb-4">
                The Timeless <span className="text-[#0068c8]">Pearl</span>
              </h2>
              <p className="text-[#5d6c7b] text-lg leading-relaxed">
                Explore twenty-five centuries of history, culture, and coastal
                identity in Egypt's Mediterranean masterpiece.
              </p>
            </div>
            <Link
              to="/about"
              className="alex-btn-primary group inline-flex items-center"
            >
              Discover History
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
              <img
                src="/images/alexandria-castle-egypt.jpg"
                alt="Alexandria Coast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/60 to-transparent" />
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h3 className="font-bold text-xl text-[#0d1623] mb-4 flex items-center gap-3">
                  <Anchor className="w-6 h-6 text-[#0068c8]" /> A Gateway to
                  Civilizations
                </h3>
                <p className="text-[#5d6c7b] leading-relaxed">
                  Founded by Alexander the Great in 331 BCE, Alexandria served
                  as the beacon of knowledge and maritime power for centuries,
                  blending Greco-Roman heritage with Egyptian spirit.
                </p>
              </div>
              <div className="bg-[#0068c8] p-8 rounded-[2rem] text-white shadow-xl shadow-blue-500/20">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-white">
                  <Sun className="w-6 h-6 text-yellow-400" /> Mediterranean
                  Identity
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Today, it stands as a vibrant metropolis, home to the modern
                  Bibliotheca Alexandrina and a coastline that continues to
                  inspire poets, travelers, and innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfe] pb-20">
      {/* Hero Header */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/San-Stefano-Grand-Plaza-alexandria.jpg"
            alt="Alexandria Coastline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1623]/70 via-[#0d1623]/40 to-[#fcfdfe]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#3898ec] font-black text-xs uppercase tracking-[0.2em] mb-8">
              Official Heritage Guide
            </span>
            <h1 className="font-['Montserrat'] text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Alexandria
              <br />
              <span className="text-[#3898ec]">Timeless Pearl</span>
            </h1>
            <p className="text-white/100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Explore twenty-five centuries of history, culture, and coastal
              identity in Egypt's Mediterranean masterpiece.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CORE NARRATIVE: SCROLLABLE SECTION */}
      <div className="py-24 space-y-32">
        {/* Essence Section */}
        <section className="alex-container">
          <SectionTitle
            title={aboutEssence.geography.title}
            subtitle={aboutEssence.geography.subtitle}
          />

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 leading-relaxed text-[#5d6c7b] text-lg">
                <p className="mb-6">{aboutEssence.geography.description}</p>
                <p className="font-bold text-[#0d1623]">
                  {aboutEssence.geography.location}
                </p>
              </div>

              <div className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="font-bold text-2xl text-[#0d1623] mb-8 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-[#f59e0b]" />{" "}
                  {aboutEssence.geography.character.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-10">
                  <p className="text-[#5d6c7b] leading-relaxed text-sm">
                    {aboutEssence.geography.character.description}
                  </p>
                  <p className="text-[#5d6c7b] leading-relaxed text-sm">
                    {aboutEssence.geography.character.architecture}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0068c8] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <Landmark className="w-12 h-12 mb-6 opacity-80" />
                <h4 className="font-bold text-2xl mb-4">Strategic Foresight</h4>
                <p className="text-white/80 leading-relaxed">
                  {aboutEssence.geography.strategy}
                </p>
              </div>

              <div className="bg-[#0d1623] rounded-[2.5rem] p-10 text-white overflow-hidden relative border border-white/5">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0068c8] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <h3 className="font-bold text-xl mb-6 relative z-10">
                  {aboutEssence.comparison.title}
                </h3>
                <div className="space-y-4 relative z-10">
                  {aboutEssence.comparison.rows.map((row, i) => (
                    <div
                      key={i}
                      className="pb-4 border-b border-white/5 last:border-0"
                    >
                      <div className="text-[10px] uppercase font-bold text-[#3898ec] tracking-widest mb-1">
                        {row.dim}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                        <div className="text-white">{row.alex}</div>
                        <div className="text-white/40">{row.nile}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline section - NOW SCROLLABLE AND EXPANDABLE */}
        <section className="bg-white py-32 border-y border-gray-100">
          <div className="alex-container">
            <SectionTitle
              title="The Historical Tapestry"
              subtitle="Click on a timeline point to expand and discover its deep history"
            />

            <div className="relative pl-12 border-l-[3px] border-gray-100 space-y-12 ml-6 max-w-5xl">
              {timelineEvents.map((event, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[63px] top-6 w-10 h-10 rounded-full bg-white border-[3px] border-gray-100 shadow-sm flex items-center justify-center group-hover:border-[#0068c8] transition-colors overflow-hidden z-10">
                    <div
                      className={`w-4 h-4 rounded-full transition-colors ${expandedEventIndex === i ? "bg-[#0068c8]" : "bg-gray-200 group-hover:bg-[#0068c8]"}`}
                    />
                  </div>

                  <motion.div
                    layout
                    onClick={() =>
                      setExpandedEventIndex(expandedEventIndex === i ? null : i)
                    }
                    className={`bg-[#fcfdfe] p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer overflow-hidden ${
                      expandedEventIndex === i
                        ? "border-[#0068c8] shadow-2xl shadow-blue-900/10"
                        : "border-transparent hover:border-gray-200 hover:shadow-xl"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex-grow">
                        <span className="inline-block px-4 py-1.5 bg-[#0068c8]/10 text-[#0068c8] font-black text-xs tracking-widest rounded-full mb-4">
                          {event.year}
                        </span>
                        <h4 className="font-bold text-[#0d1623] text-2xl mb-3 tracking-tight group-hover:text-[#0068c8] transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-[#5d6c7b] text-lg leading-relaxed max-w-2xl">
                          {event.desc}
                        </p>
                      </div>
                      <div className="flex-shrink-0 pt-2">
                        <motion.div
                          animate={{
                            rotate: expandedEventIndex === i ? 180 : 0,
                          }}
                          className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#ced4da] group-hover:text-[#0068c8] transition-colors"
                        >
                          <ChevronDown className="w-6 h-6" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedEventIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 32,
                          }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="border-t border-gray-100 pt-8"
                        >
                          <div className="grid lg:grid-cols-2 gap-10">
                            <div className="space-y-6">
                              <p className="text-[#5d6c7b] text-base leading-relaxed whitespace-pre-line">
                                {event.longDesc}
                              </p>
                              <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                <Info className="w-5 h-5 text-[#0068c8]" />
                                <span className="text-sm font-bold text-[#0068c8]/80 uppercase tracking-wider">
                                  Historical Significance
                                </span>
                              </div>
                            </div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 group/img">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                onError={(e) => {
                                  (e.target as any).src = "/images/hero-bg.jpg"; // Fallback
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* INTERACTIVE EXPLORER: TABBED SECTION */}
      <section className="py-24 bg-[#0d1623] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0068c8] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3898ec] rounded-full blur-[120px]" />
        </div>

        <div className="alex-container relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#3898ec] font-black text-xs uppercase tracking-[0.3em] mb-4 inline-block">
              Interactive Explorer
            </span>
            <h2 className="font-['Montserrat'] text-4xl md:text-6xl font-black text-white mb-6">
              Discovery Layers
            </h2>
            <div className="w-24 h-1.5 bg-[#0068c8] rounded-full mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Mobile Tab Selector */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold"
              >
                <div className="flex items-center gap-3">
                  {(() => {
                    const activeTab = explorerTabs.find(
                      (t) => t.id === activeExplorerTab,
                    );
                    const Icon = activeTab?.icon || Anchor;
                    return <Icon className="w-5 h-5 text-[#3898ec]" />;
                  })()}
                  <span>
                    {
                      explorerTabs.find((t) => t.id === activeExplorerTab)
                        ?.label
                    }
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 left-4 right-4 mt-2 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {explorerTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveExplorerTab(tab.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left font-medium hover:bg-white/5 transition-colors ${
                          activeExplorerTab === tab.id
                            ? "text-[#3898ec]"
                            : "text-white/60"
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Tabs Sidebar */}
            <aside className="lg:w-1/4 hidden lg:block h-full sticky top-32">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] space-y-2">
                {explorerTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveExplorerTab(tab.id)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                        activeExplorerTab === tab.id
                          ? "bg-[#0068c8] text-white shadow-2xl shadow-blue-500/40"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${activeExplorerTab === tab.id ? "text-white" : "text-[#3898ec]"}`}
                      />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Content Area */}
            <main className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExplorerTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[600px]"
                >
                  {activeExplorerTab === "landmarks" && (
                    <div className="space-y-16">
                      <section>
                        <SectionTitle
                          title="Ancient Wonders"
                          subtitle="The legacy of Pharos and Alexandria's maritime glory"
                          light={true}
                        />
                        <div className="grid gap-8">
                          {landmarksData.ancient.map((item, i) => (
                            <div
                              key={i}
                              className="group flex flex-col md:flex-row bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1623]/20 to-transparent" />
                              </div>
                              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                <h3 className="font-bold text-2xl text-[#0d1623] mb-4">
                                  {item.name}
                                </h3>
                                <p className="text-[#5d6c7b] mb-6 italic">
                                  "{item.desc}"
                                </p>
                                <div className="bg-[#f8fafc] p-5 rounded-2xl border-l-4 border-[#0068c8]">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0068c8] mb-2">
                                    Modern Legacy
                                  </h4>
                                  <p className="text-sm text-[#0d1623] font-medium leading-relaxed">
                                    {item.legacy}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <SectionTitle
                          title="Monuments & Fortifications"
                          light={true}
                        />
                        <div className="grid md:grid-cols-2 gap-8">
                          {landmarksData.monuments.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col"
                            >
                              <div className="h-48 bg-[#f1f5f9] relative overflow-hidden flex items-center justify-center">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover "
                                />
                                {/* <Camera className="w-10 h-10 text-gray-300 absolute" />
                                <span className="absolute bottom-3 right-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                  Image Placeholder
                                </span> */}
                              </div>
                              <div className="p-8">
                                <h4 className="font-bold text-xl mb-4">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-[#5d6c7b] leading-relaxed mb-6">
                                  {item.stats}
                                </p>
                                <div className="flex items-start gap-3 bg-[#e6f1fc] p-4 rounded-2xl text-[#0068c8]">
                                  <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                  <p className="text-xs font-bold leading-relaxed">
                                    {item.fact}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                          {landmarksData.fortifications.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
                            >
                              <div className="h-48 bg-[#f1f5f9] relative overflow-hidden flex items-center justify-center">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-8">
                                <h4 className="font-bold text-xl mb-4">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-[#5d6c7b] leading-relaxed mb-4">
                                  {item.origin}
                                </p>
                                <span className="text-xs font-bold text-[#0068c8]">
                                  {item.function}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  )}

                  {activeExplorerTab === "modern" && (
                    <div className="space-y-12">
                      <SectionTitle
                        title="Modern Marvels"
                        subtitle="Architecture and urban infrastructure"
                        light={true}
                      />

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
                          <BookOpen className="w-12 h-12 text-[#0068c8] mb-6" />
                          <h3 className="font-bold text-2xl mb-4">
                            {modernInfrastructure.bibliotheca.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-6 mb-8">
                            {modernInfrastructure.bibliotheca.specs.map(
                              (s, i) => (
                                <div key={i}>
                                  <div className="text-3xl font-bold text-[#0d1623] mb-1">
                                    {s.value.split(" ")[0]}
                                  </div>
                                  <div className="text-xs uppercase font-bold text-[#5d6c7b] tracking-wider">
                                    {s.label}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                          <div className="bg-[#f1f5f9] p-4 rounded-2xl flex items-start gap-3 italic text-sm text-[#5d6c7b]">
                            <Palette className="w-5 h-5 text-[#0068c8] flex-shrink-0 mt-1" />
                            "{modernInfrastructure.bibliotheca.symbol}"
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-br from-[#0068c8] to-[#0d1623] p-8 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors" />
                            <div className="relative z-10">
                              <h4 className="font-bold text-xl mb-4">
                                {modernInfrastructure.corniche.title}
                              </h4>
                              <p className="text-white/80 leading-relaxed mb-4">
                                {modernInfrastructure.corniche.length}
                              </p>
                              <p className="text-sm font-medium mb-6">
                                {modernInfrastructure.corniche.social}
                              </p>
                              <PlaceholderImage
                                text={modernInfrastructure.corniche.title}
                                className="aspect-[4/3] object-cover "
                                src={modernInfrastructure.corniche.image}
                              />
                              {/* <div className="mt-6 h-32 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                                <Camera className="w-8 h-8 text-white/30" />
                                <span className="ml-3 text-[10px] uppercase font-bold tracking-widest text-white/30">
                                  Corniche Photo Space
                                </span>
                              </div> */}
                            </div>
                          </div>
                          <div className="bg-white border border-gray-100 p-8 rounded-3xl overflow-hidden group">
                            <h4 className="font-bold text-xl mb-4">
                              {modernInfrastructure.montaza.title}
                            </h4>
                            <p className="text-[#5d6c7b] text-sm leading-relaxed mb-6">
                              {modernInfrastructure.montaza.role}
                            </p>
                            <div className="h-40 bg-[#f8fafc] rounded-2xl border border-gray-100 flex items-center justify-center mb-6">
                              <PlaceholderImage
                                text={modernInfrastructure.montaza.title}
                                className="w-full h-full object-cover"
                                src={modernInfrastructure.montaza.image}
                              />
                            </div>
                            <span className="text-xs font-bold text-[#0068c8] uppercase tracking-widest">
                              {modernInfrastructure.montaza.gardens}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeExplorerTab === "museums" && (
                    <div className="space-y-8">
                      <SectionTitle
                        title="Museums & Heritage"
                        subtitle="Preserving the palimpsest of history"
                        light={true}
                      />
                      <div className="grid gap-6">
                        {museumRegistry.map((mus, i) => (
                          <div
                            key={i}
                            className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center hover:shadow-lg transition-all"
                          >
                            <div className="w-full md:w-48 h-32 bg-[#f8fafc] rounded-2xl flex items-center justify-center border border-gray-100 flex-shrink-0 relative overflow-hidden">
                              <Camera className="w-8 h-8 text-gray-200" />
                              <span className="absolute bottom-2 inset-x-0 text-center text-[8px] font-bold text-gray-300 uppercase tracking-widest">
                                Entry Placeholder
                              </span>
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-bold text-xl mb-3">
                                {mus.name}
                              </h4>
                              <p className="text-[#5d6c7b] text-sm mb-4 leading-relaxed">
                                {mus.focus}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black uppercase tracking-tighter text-[#0068c8]">
                                  Highlights:
                                </span>
                                <span className="text-sm font-semibold">
                                  {mus.highlights}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="hidden md:block w-6 h-6 text-gray-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeExplorerTab === "culture" && (
                    <div className="space-y-12">
                      <SectionTitle
                        title={culture2025.title}
                        subtitle="Capital of Culture and Dialogue"
                        light={true}
                      />

                      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8">
                          <Palette className="w-24 h-24 text-gray-50 -mr-8 -mt-8" />
                        </div>
                        <h3 className="font-bold text-2xl mb-8 relative z-10">
                          2025 Program Framework
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
                          {culture2025.themes.map((theme, i) => (
                            <div key={i} className="text-center">
                              <div className="w-16 h-16 bg-[#0068c8] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-2xl">
                                0{i + 1}
                              </div>
                              <h5 className="font-bold text-sm text-[#0d1623]">
                                {theme}
                              </h5>
                            </div>
                          ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-100 pt-12 relative z-10">
                          <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-[#0068c8]" />{" "}
                              Tirana Partnership
                            </h4>
                            <p className="text-[#5d6c7b] text-sm leading-relaxed">
                              {culture2025.tirana}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-[#f59e0b]" /> Key
                              Initiatives
                            </h4>
                            <ul className="space-y-3">
                              {culture2025.initiatives.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 text-sm text-[#5d6c7b]"
                                >
                                  <div className="w-1.5 h-1.5 bg-[#0068c8] rounded-full" />{" "}
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeExplorerTab === "culinary" && (
                    <div className="space-y-12">
                      <SectionTitle
                        title="Culinary & Society"
                        subtitle="The seafood supremacy and café culture"
                        light={true}
                      />
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100">
                          <h4 className="font-bold text-2xl mb-6 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-[#0068c8]" />{" "}
                            Signature Seafood
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-6">
                            {culinaryTraditions.dishes.map((dish, i) => (
                              <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                              >
                                <div className="h-24 bg-[#f8fafc] flex items-center justify-center border-b border-gray-50">
                                  <Camera className="w-6 h-6 text-gray-200" />
                                </div>
                                <div className="p-5">
                                  <h5 className="font-bold text-[#0d1623] mb-2">
                                    {dish.name}
                                  </h5>
                                  <p className="text-[10px] text-[#5d6c7b] leading-relaxed font-medium">
                                    {dish.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#0d1623] p-8 rounded-3xl text-white">
                          <h4 className="font-bold text-xl mb-6">
                            Historic Cafés
                          </h4>
                          <div className="h-32 bg-white/5 border border-white/10 rounded-2xl mb-8 flex items-center justify-center">
                            <Anchor className="w-10 h-10 text-white/10" />
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed mb-8">
                            {culinaryTraditions.seafood}
                          </p>
                          <ul className="space-y-4">
                            {["Athineos", "Trianon", "Délices"].map((cafe) => (
                              <li
                                key={cafe}
                                className="flex items-center gap-3 font-bold"
                              >
                                <div className="w-2 h-2 bg-[#0068c8] rounded-full" />{" "}
                                {cafe}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeExplorerTab === "heritage" && (
                    <div className="space-y-12">
                      <SectionTitle
                        title="The Living Heritage"
                        subtitle="Architecture and urban archaeology"
                        light={true}
                      />
                      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-[#5d6c7b]">
                            District Styles
                          </h4>
                          <div className="space-y-6">
                            {integrationData.architectural.map((d, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm"
                              >
                                <span className="font-bold text-[#0d1623]">
                                  {d.district}
                                </span>
                                <span className="text-sm font-semibold text-[#0068c8]">
                                  {d.style}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-12">
                          <div className="p-8 bg-[#0068c8] text-white rounded-3xl">
                            <h4 className="font-bold text-2xl mb-4">
                              {integrationData.archaeology.quote}
                            </h4>
                            <p className="text-white/70 text-sm">
                              Mandatory archaeological monitoring and salvage
                              excavation requirements define construction in the
                              city.
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {integrationData.archaeology.methods.map((m, i) => (
                              <div
                                key={i}
                                className="bg-white p-6 rounded-2xl border border-gray-100 text-center"
                              >
                                <h5 className="font-bold text-[#0d1623] text-sm mb-1">
                                  {m.label}
                                </h5>
                                <span className="text-[10px] uppercase font-bold text-[#5d6c7b] tracking-wider">
                                  {m.desc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </section>

      {/* FINAL SUMMARY SECTION */}
      <section className="py-24 bg-white">
        <div className="alex-container">
          <div className="bg-[#0d1623] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0068c8] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-['Montserrat'] text-4xl md:text-6xl font-black mb-10 leading-tight">
                {summaryData.title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-16 text-xl md:text-2xl font-light">
                {summaryData.description}
              </p>
              <div className="grid sm:grid-cols-3 gap-12">
                {summaryData.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#3898ec] group-hover:text-white transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
