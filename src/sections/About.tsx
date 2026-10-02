import { useEffect, useRef, useState } from 'react';
import {
  Sun,
  Anchor,
  Landmark,
  BookOpen,
  Building2,
  Palette,
  Users,
  Utensils,
  Zap,
  Info,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  aboutEssence,
  landmarksData,
  modernInfrastructure,
  museumRegistry,
  culture2025,
  culinaryTraditions,
  integrationData,
  timelineEvents,
  summaryData,
} from "../data/aboutData";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionTitle } from "@/components/SectionTitle";
import SourceChip from "@/components/SourceChip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function About({ isTeaser = false }: { isTeaser?: boolean }) {
  const [activeExplorerTab, setActiveExplorerTab] = useState("landmarks");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close the mobile layer picker on Escape or a click outside it.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!mobileMenuRef.current?.contains(e.target as Node)) setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMobileMenuOpen]);

  const explorerTabs = [
    { id: "landmarks", label: "Landmarks", icon: Anchor },
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
              <h2 className="text-ink mb-4">
                The timeless pearl
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed">
                Twenty-three centuries of history, culture and coastal life in
                Egypt's main Mediterranean city.
              </p>
            </div>
            <Link
              to="/about"
              className="alex-btn-primary group inline-flex items-center"
            >
              Discover history
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
              <img
                loading="lazy"
                decoding="async"
                src="/images/alexandria-castle-egypt.jpg"
                alt="Fishing boats in the Eastern Harbour below the Citadel of Qaitbay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            <div className="space-y-6">
              <div className="bg-limestone-wash p-8 rounded-xl border border-limestone/70">
                <h3 className="text-ink mb-4 flex items-center gap-3">
                  <Anchor className="w-6 h-6 text-sea" /> A gateway to
                  civilizations
                </h3>
                <p className="text-ink-soft leading-relaxed">
                  Founded by Alexander the Great in 331 BCE, Alexandria was a
                  centre of learning and sea trade for centuries, mixing Greek,
                  Roman and Egyptian traditions.
                </p>
              </div>
              <div className="bg-sea p-8 rounded-xl text-white shadow-md shadow-sea/20">
                <h3 className="mb-4 flex items-center gap-3 text-white">
                  <Sun className="w-6 h-6 text-gold" /> A Mediterranean
                  city
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Today it is Egypt's second city and main port, home to the
                  Bibliotheca Alexandrina and a long seafront Corniche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/citadel.jpg"
            alt="The Citadel of Qaitbay on the site of the ancient Lighthouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white mb-8">
              Alexandria,
              <br />
              the timeless pearl
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Twenty-three centuries of history, culture and coastal life in
              Egypt's main Mediterranean city.
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
              <div className="bg-white p-6 md:p-10 rounded-xl border border-limestone/70 shadow-md shadow-ink/5 leading-relaxed text-ink-soft text-lg">
                <p className="mb-6">
                  {aboutEssence.geography.description}
                  <SourceChip factId={aboutEssence.geography.factId} className="ml-1" />
                </p>
                <p className="font-bold text-ink">
                  {aboutEssence.geography.location}
                </p>
              </div>

              <div className="bg-limestone-wash p-6 md:p-10 rounded-xl border border-limestone/70">
                <h3 className="text-ink mb-8 flex items-center gap-3">
                  <Sun className="w-8 h-8 text-gold" />{" "}
                  {aboutEssence.geography.character.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-10">
                  <p className="text-ink-soft leading-relaxed text-sm">
                    {aboutEssence.geography.character.description}
                  </p>
                  <p className="text-ink-soft leading-relaxed text-sm">
                    {aboutEssence.geography.character.architecture}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-sea p-6 md:p-10 rounded-xl text-white shadow-lg shadow-sea/30">
                <Landmark className="w-12 h-12 mb-6 opacity-80" />
                <h4 className="mb-4">Why this site</h4>
                <p className="text-white/80 leading-relaxed">
                  {aboutEssence.geography.strategy}
                </p>
              </div>

              <div className="bg-ink rounded-xl p-6 md:p-10 text-white border border-white/5">
                <h3 className="mb-6">
                  {aboutEssence.comparison.title}
                </h3>
                <div className="space-y-4">
                  {aboutEssence.comparison.rows.map((row, i) => (
                    <div
                      key={i}
                      className="pb-4 border-b border-white/5 last:border-0"
                    >
                      <div className="text-xs font-bold text-seaglass mb-1">
                        {row.dim}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                        <div className="text-white">{row.alex}</div>
                        <div className="text-white/70">{row.nile}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline section - NOW SCROLLABLE AND EXPANDABLE */}
        <section className="bg-white py-32 border-y border-limestone/70">
          <div className="alex-container">
            <SectionTitle
              title="A short history"
              subtitle="Select a period to read more"
            />

            <div className="relative pl-8 md:pl-12 border-l-[3px] border-limestone/70 space-y-8 md:space-y-12 ml-3 md:ml-6 max-w-5xl">
              {timelineEvents.map((event, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[53px] md:-left-[69px] top-6 w-10 h-10 rounded-full bg-white border-[3px] border-limestone/70 shadow-sm flex items-center justify-center group-hover:border-sea transition-colors overflow-hidden z-10">
                    <div
                      className={`w-4 h-4 rounded-full transition-colors ${expandedEventIndex === i ? "bg-sea" : "bg-limestone/60 group-hover:bg-sea"}`}
                    />
                  </div>

                  <motion.div
                    layout
                    className={`bg-white p-5 md:p-8 rounded-xl border transition-all duration-500 overflow-hidden ${
                      expandedEventIndex === i
                        ? "border-sea shadow-lg shadow-ink/10"
                        : "border-transparent hover:border-limestone hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedEventIndex(expandedEventIndex === i ? null : i)
                      }
                      aria-expanded={expandedEventIndex === i}
                      aria-controls={`timeline-panel-${i}`}
                      className="w-full text-left flex flex-col md:flex-row md:items-start justify-between gap-6 rounded-xl cursor-pointer"
                    >
                      <span className="block flex-grow">
                        <span className="inline-block px-4 py-1.5 bg-sea/10 text-sea font-bold text-xs rounded-full mb-4">
                          {event.year}
                        </span>
                        <span className="block font-display font-semibold text-ink text-2xl md:text-3xl leading-tight mb-3 group-hover:text-sea transition-colors">
                          {event.title}
                        </span>
                        <span className="block text-ink-soft text-lg leading-relaxed max-w-2xl">
                          {event.desc}
                        </span>
                      </span>
                      <span className="block flex-shrink-0 pt-2">
                        <motion.span
                          aria-hidden="true"
                          animate={{
                            rotate: expandedEventIndex === i ? 180 : 0,
                          }}
                          className="w-10 h-10 rounded-full bg-limestone-wash flex items-center justify-center text-limestone group-hover:text-sea transition-colors"
                        >
                          <ChevronDown className="w-6 h-6" />
                        </motion.span>
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedEventIndex === i && (
                        <motion.div
                          id={`timeline-panel-${i}`}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            marginTop: 32,
                          }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="border-t border-limestone/70 pt-8"
                        >
                          <div className="grid lg:grid-cols-2 gap-10">
                            <p className="text-ink-soft text-base leading-relaxed whitespace-pre-line">
                              {event.longDesc}
                            </p>
                            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-limestone/60 group/img">
                              <img
                                loading="lazy"
                                decoding="async"
                                src={event.image}
                                alt={event.imageAlt ?? event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    "/images/hero-bg.jpg"; // Fallback
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
      <section className="py-24 bg-ink relative overflow-hidden">
        <div className="alex-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-6">
              Explore by theme
            </h2>
            <div className="w-24 h-1.5 bg-sea rounded-full mx-auto" />
          </div>

          <Tabs
            value={activeExplorerTab}
            onValueChange={setActiveExplorerTab}
            orientation="vertical"
            className="flex flex-col lg:flex-row gap-12"
          >
            {/* Mobile Tab Selector */}
            <div ref={mobileMenuRef} className="relative lg:hidden mb-8">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="explorer-mobile-menu"
                aria-label={`Theme: ${explorerTabs.find((t) => t.id === activeExplorerTab)?.label ?? ""}`}
                className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white font-bold"
              >
                <div className="flex items-center gap-3">
                  {(() => {
                    const activeTab = explorerTabs.find(
                      (t) => t.id === activeExplorerTab,
                    );
                    const Icon = activeTab?.icon || Anchor;
                    return <Icon className="w-5 h-5 text-seaglass" />;
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
                    id="explorer-mobile-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 inset-x-0 top-full mt-2 bg-ink-raised border border-white/10 rounded-lg shadow-lg overflow-hidden"
                  >
                    {explorerTabs.map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        aria-current={activeExplorerTab === tab.id ? "true" : undefined}
                        onClick={() => {
                          setActiveExplorerTab(tab.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left font-medium hover:bg-white/5 transition-colors ${
                          activeExplorerTab === tab.id
                            ? "text-seaglass"
                            : "text-white/80"
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
              <TabsList
                aria-label="Themes"
                className="flex flex-col h-auto w-full items-stretch justify-start bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl space-y-2"
              >
                {explorerTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="w-full flex-none h-auto justify-start whitespace-normal border-0 flex items-center gap-4 px-6 py-4 rounded-lg font-bold text-base transition-all duration-300 text-white/75 hover:text-white hover:bg-white/5 data-[state=active]:bg-sea data-[state=active]:hover:bg-sea data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-sea/40"
                    >
                      <Icon
                        className={`size-5 ${activeExplorerTab === tab.id ? "text-white" : "text-seaglass"}`}
                      />
                      <span className="text-sm">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </aside>

            {/* Content Area */}
            <TabsContent value={activeExplorerTab} className="lg:w-3/4">
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
                          title="Ancient wonders"
                          subtitle="The Library, the Lighthouse and the sunken palaces"
                          light={true}
                        />
                        <div className="grid gap-8">
                          {landmarksData.ancient.map((item, i) => (
                            <div
                              key={i}
                              className="group flex flex-col md:flex-row bg-white rounded-xl border border-limestone/70 overflow-hidden hover:shadow-md transition-all duration-500"
                            >
                              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-ink/20 to-transparent" />
                              </div>
                              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                                <h3 className="text-ink mb-4">
                                  {item.name}
                                </h3>
                                <p className="text-ink-soft mb-6 italic">
                                  "{item.desc}"
                                </p>
                                <div className="bg-limestone-wash p-5 rounded-lg border-l-4 border-sea">
                                  <h4 className="text-xs font-bold text-sea mb-2 font-sans font-semibold">
                                    Legacy today
                                  </h4>
                                  <p className="text-sm text-ink font-medium leading-relaxed">
                                    {item.legacy}
                                    {"factId" in item && item.factId && (
                                      <SourceChip factId={item.factId} className="ml-1 text-ink-soft" />
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <SectionTitle
                          title="Monuments and fortifications"
                          light={true}
                        />
                        <div className="grid md:grid-cols-2 gap-8">
                          {landmarksData.monuments.map((item, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-xl border border-limestone/70 overflow-hidden flex flex-col"
                            >
                              <div className="h-48 bg-limestone-wash relative overflow-hidden flex items-center justify-center">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover "
                                />
                              </div>
                              <div className="p-8">
                                <h4 className="mb-4">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-ink-soft leading-relaxed mb-6">
                                  {item.stats}
                                  {"factId" in item && item.factId && (
                                    <SourceChip factId={item.factId} className="ml-1" />
                                  )}
                                </p>
                                <div className="flex items-start gap-3 bg-sea-mist p-4 rounded-lg text-sea">
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
                              className="bg-white rounded-xl border border-limestone/70 overflow-hidden"
                            >
                              <div className="h-48 bg-limestone-wash relative overflow-hidden flex items-center justify-center">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-8">
                                <h4 className="mb-4">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                                  {item.origin}
                                  {"factId" in item && item.factId && (
                                    <SourceChip factId={item.factId} className="ml-1" />
                                  )}
                                </p>
                                <span className="text-xs font-bold text-sea">
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
                        title="The modern city"
                        subtitle="Architecture and public spaces"
                        light={true}
                      />

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 md:p-10 rounded-xl border border-limestone/70 shadow-md shadow-ink/5">
                          <BookOpen className="w-12 h-12 text-sea mb-6" />
                          <h3 className="mb-4">
                            {modernInfrastructure.bibliotheca.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-6 mb-8">
                            {modernInfrastructure.bibliotheca.specs.map(
                              (s, i) => (
                                <div key={i}>
                                  <div className="text-3xl font-bold text-ink mb-1">
                                    {s.value.split(" ")[0]}
                                  </div>
                                  <div className="text-xs font-bold text-ink-soft">
                                    {s.label}
                                  </div>
                                  {s.factId && (
                                    <SourceChip factId={s.factId} className="mt-1 -ml-1 text-ink-soft" />
                                  )}
                                </div>
                              ),
                            )}
                          </div>
                          <div className="bg-limestone-wash p-4 rounded-lg flex items-start gap-3 italic text-sm text-ink-soft">
                            <Palette className="w-5 h-5 text-sea flex-shrink-0 mt-1" />
                            "{modernInfrastructure.bibliotheca.symbol}"
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-sea-deep p-6 md:p-8 rounded-xl text-white">
                            <div>
                              <h4 className="mb-4">
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
                            </div>
                          </div>
                          <div className="bg-white border border-limestone/70 p-8 rounded-xl overflow-hidden group">
                            <h4 className="mb-4">
                              {modernInfrastructure.montaza.title}
                            </h4>
                            <p className="text-ink-soft text-sm leading-relaxed mb-6">
                              {modernInfrastructure.montaza.role}
                            </p>
                            <div className="h-40 bg-limestone-wash rounded-lg border border-limestone/70 flex items-center justify-center mb-6">
                              <PlaceholderImage
                                text={modernInfrastructure.montaza.title}
                                className="w-full h-full object-cover"
                                src={modernInfrastructure.montaza.image}
                              />
                            </div>
                            <span className="text-xs font-bold text-sea">
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
                        title="Museums"
                        subtitle="Collections from the Pharaonic to the modern period"
                        light={true}
                      />
                      <div className="grid gap-6">
                        {museumRegistry.map((mus, i) => (
                          <div
                            key={i}
                            className="bg-white p-6 rounded-xl border border-limestone/70 flex flex-col md:flex-row gap-8 items-center hover:shadow-lg transition-all"
                          >
                            <div className="w-full md:w-48 h-32 bg-limestone-wash rounded-lg flex items-center justify-center border border-limestone/70 flex-shrink-0 relative overflow-hidden">
                              <PlaceholderImage
                                text={mus.name}
                                className="w-full h-full object-cover"
                                src={mus.image}
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="mb-3">
                                {mus.name}
                              </h4>
                              <p className="text-ink-soft text-sm mb-4 leading-relaxed">
                                {mus.focus}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-sea">
                                  Highlights:
                                </span>
                                <span className="text-sm font-semibold">
                                  {mus.highlights}
                                </span>
                              </div>
                            </div>
                            
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

                      <div className="bg-white p-6 md:p-10 rounded-xl border border-limestone/70 shadow-md overflow-hidden relative">
                        <Palette className="absolute top-0 right-0 w-24 h-24 text-limestone-wash" aria-hidden="true" />
                        <h3 className="mb-8 relative z-10">
                          The 2025 programme
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
                          {culture2025.themes.map((theme, i) => (
                            <div key={i} className="text-center">
                              <div className="w-16 h-16 bg-sea text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                                0{i + 1}
                              </div>
                              <h5 className="font-bold text-sm text-ink">
                                {theme}
                              </h5>
                            </div>
                          ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 border-t border-limestone/70 pt-12 relative z-10">
                          <div>
                            <h4 className="mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-sea" />{" "}
                              Partnership with Tirana
                            </h4>
                            <p className="text-ink-soft text-sm leading-relaxed">
                              {culture2025.tirana}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-4 flex items-center gap-2">
                              <Zap className="w-5 h-5 text-gold" /> Main
                              initiatives
                            </h4>
                            <ul className="space-y-3">
                              {culture2025.initiatives.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 text-sm text-ink-soft"
                                >
                                  <div className="w-1.5 h-1.5 bg-sea rounded-full" />{" "}
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
                        title="Food and cafés"
                        subtitle="Seafood and the city's historic cafés"
                        light={true}
                      />
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-white p-8 rounded-xl border border-limestone/70">
                          <h4 className="mb-6 flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-sea" />{" "}
                            Seafood dishes
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-6">
                            {culinaryTraditions.dishes.map((dish, i) => (
                              <div
                                key={i}
                                className="bg-white border border-limestone/70 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                              >
                                <PlaceholderImage
                                  className="h-24 bg-limestone-wash flex items-center justify-center border-b border-limestone/70"
                                  text={dish.name}
                                  src={dish.image}
                                />
                                <div className="p-5">
                                  <h5 className="font-bold text-ink mb-2">
                                    {dish.name}
                                  </h5>
                                  <p className="text-xs text-ink-soft leading-relaxed font-medium">
                                    {dish.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-ink p-8 rounded-xl text-white">
                          <h4 className="mb-6">
                            Historic cafés
                          </h4>
                          {/* <div className="h-32 bg-white/5 border border-white/10 rounded-lg mb-8 flex items-center justify-center">
                            <Anchor className="w-10 h-10 text-white/10" />
                          </div> */}
                          <PlaceholderImage
                            className="h-32 bg-white/5 border border-white/10 rounded-lg mb-8 flex items-center justify-center"
                            text="Délices"
                            src="https://www.etltravel.com/wp-content/uploads/2014/02/delices-pastry-shop-alexandria.jpg"
                          />
                          <p className="text-sm text-white/70 leading-relaxed mb-8">
                            {culinaryTraditions.seafood}
                          </p>
                          <ul className="space-y-4">
                            {["Athineos", "Trianon", "Délices"].map((cafe) => (
                              <li
                                key={cafe}
                                className="flex items-center gap-3 font-bold"
                              >
                                <div className="w-2 h-2 bg-sea rounded-full" />{" "}
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
                        title="Living heritage"
                        subtitle="Architecture and urban archaeology"
                        light={true}
                      />
                      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                          <h4 className="mb-8 text-ink-soft">
                            District styles
                          </h4>
                          <div className="space-y-6">
                            {integrationData.architectural.map((d, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between p-6 bg-white border border-limestone/70 rounded-lg shadow-sm"
                              >
                                <span className="font-bold text-ink">
                                  {d.district}
                                </span>
                                <span className="text-sm font-semibold text-sea">
                                  {d.style}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-12">
                          <div className="p-8 bg-sea text-white rounded-xl">
                            {integrationData.archaeology.quote ? (
                              <blockquote className="mb-4">
                                <p className="font-bold text-2xl">
                                  {integrationData.archaeology.quote}
                                </p>
                                {integrationData.archaeology.author && (
                                  <footer className="mt-2 text-white/70 text-sm">
                                    — {integrationData.archaeology.author}
                                  </footer>
                                )}
                              </blockquote>
                            ) : null}
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
                                className="bg-white p-6 rounded-lg border border-limestone/70 text-center"
                              >
                                <h5 className="font-bold text-ink text-sm mb-1">
                                  {m.label}
                                </h5>
                                <span className="text-xs font-bold text-ink-soft">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FINAL SUMMARY SECTION */}
      <section className="py-24 bg-white">
        <div className="alex-container">
          <div className="bg-ink rounded-xl px-6 py-12 md:p-24 text-center text-white shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-10">
                {summaryData.title}
              </h2>
              <p className="text-white/80 leading-relaxed mb-16 text-xl md:text-2xl font-light">
                {summaryData.description}
              </p>
              <div className="grid sm:grid-cols-3 gap-12">
                {summaryData.pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10"
                  >
                    <h4 className="mb-4 text-seaglass">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-white/75 leading-relaxed">
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
