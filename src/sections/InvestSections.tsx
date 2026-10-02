import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { investData } from '../data/investData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Factory, 
  Settings, 
  Scale, 
  Building,
  Anchor,
  Droplets,
  Container,
  Zap,
  ExternalLink,
} from 'lucide-react';

const categories = [
  { id: 'freezone', label: 'Free zone', icon: Container },
  { id: 'drivers', label: 'Key sectors', icon: Zap },
  { id: 'raw', label: 'Raw materials', icon: Droplets },
  { id: 'ports', label: 'Ports', icon: Anchor },
  { id: 'laws', label: 'Laws and incentives', icon: Scale },
];

const PlaceholderImage = ({
  text = "Image placeholder",
  className = "",
  src,
  alt,
}: {
  text?: string;
  className?: string;
  src?: string;
  alt?: string;
}) => (
  <div
    className={`w-full bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}
  >
    {src ? (
      // Render a real image when `src` is provided. It fills the container preserving rounded corners.
      <img
        src={src}
        alt={alt ?? text}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    ) : (
      // Original placeholder visuals
      <>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <Building className="w-6 h-6 text-white/20" />
        </div>
        <span className="text-white/20 text-xs font-bold">
          {text}
        </span>
      </>
    )}
  </div>
);

export default function InvestSections() {
  const [activeTab, setActiveTab] = useState("freezone");

  const renderContent = () => {
    switch (activeTab) {
      case "freezone":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-white mb-4">
                    {investData.publicFreeZone.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {investData.publicFreeZone.description}
                  </p>
                  <div className="inline-block px-6 py-3 bg-sea/20 border border-seaglass/30 rounded-full text-seaglass font-semibold">
                    {investData.publicFreeZone.stats}
                  </div>
                </div>
                <PlaceholderImage
                  text="Shipping containers"
                  className="aspect-[9/10]"
                  src="/images/containers.jpeg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investData.publicFreeZone.businesses.map((biz, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-lg border border-white/5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-seaglass/20 rounded-lg flex items-center justify-center">
                    <Factory className="w-5 h-5 text-seaglass" />
                  </div>
                  <span className="text-white font-medium">{biz}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "drivers":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-white mb-6">
              What drives investment
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {investData.investmentDrivers.map((driver, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10"
                >
                  <h4 className="text-white mb-4">
                    {driver.title}
                  </h4>
                  <p className="text-white/75 text-sm mb-6 leading-relaxed">
                    {driver.description}
                  </p>
                  <div className="mb-6">
                    <PlaceholderImage
                      text={driver.title}
                      src={driver.image}
                      alt=""
                      className="aspect-[4/3] rounded-xl border-none"
                    />
                  </div>
                  {driver.sectors && (
                    <div className="flex flex-wrap gap-2">
                      {driver.sectors.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/75 border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  {driver.types && (
                    <div className="flex flex-wrap gap-2">
                      {driver.types.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-seaglass/10 rounded-full text-xs text-seaglass border border-seaglass/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "raw":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-white mb-6">
              Raw materials
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              {investData.rawMaterials.map((mat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <h4 className="text-seaglass">
                            {mat.name}
                          </h4>
                          <p className="text-white/70 flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" /> {mat.location},{" "}
                            {mat.region}
                          </p>
                        </div>
                        {mat.reserve && (
                          <div className="px-5 py-2 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-white/70 text-xs block">
                              Reserve
                            </span>
                            <span className="text-white font-bold">
                              {mat.reserve}
                            </span>
                          </div>
                        )}
                      </div>
                      {mat.industries && (
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {mat.industries.map((ind) => (
                            <div
                              key={ind}
                              className="flex items-center gap-3 text-white/70 text-sm"
                            >
                              <Settings className="w-4 h-4 text-seaglass/50" />
                              {ind}
                            </div>
                          ))}
                        </div>
                      )}
                      {mat.description && (
                        <p className="text-white/70 mb-4">{mat.description}</p>
                      )}
                      {mat.uses && (
                        <div className="mt-4 p-4 bg-seaglass/5 rounded-xl border border-seaglass/10">
                          <span className="text-seaglass font-bold text-sm block mb-1">
                            Applications
                          </span>
                          <p className="text-white/70 text-sm">{mat.uses}</p>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-1/3">
                      <PlaceholderImage
                        text={mat.name}
                        src={mat.image}
                        alt=""
                        className="aspect-[4/5] rounded-xl border-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "ports":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-white mb-6">
              Ports
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {investData.ports.map((port, idx) => (
                <div
                  key={idx}
                  className="bg-ink-raised p-5 md:p-8 rounded-xl border border-white/10"
                >
                  <div className="mb-6">
                    <PlaceholderImage
                      text={port.name}
                      src={port.image}
                      alt={port.name}
                      className="aspect-[4/6] rounded-xl border-none"
                    />
                  </div>
                  <h4 className="text-white mb-4">
                    {port.name}
                  </h4>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {port.description}
                  </p>
                  {port.link && (
                    <a
                      href={port.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-seaglass hover:underline font-medium"
                    >
                      Port authority website
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "laws":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-white mb-8">
                  Legal protections and incentives
                </h3>
                <div className="grid gap-4">
                  {investData.investmentLaws.provisions.map((law, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-5 bg-white/5 rounded-lg border border-white/5"
                    >
                      <Scale className="w-6 h-6 text-seaglass flex-shrink-0" />
                      <span className="text-white/80 font-medium">{law}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PlaceholderImage
                text="Legal framework"
                src="/images/law_invest.jpg"
                alt=""
                className="aspect-[4/6] rounded-xl border-none"
              />
            </div>

            <div className="bg-sea p-6 md:p-10 rounded-xl">
              <div>
                <h4 className="text-white mb-6">
                  Sectors covered by the law
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {investData.investmentLaws.fields.map((field) => (
                    <div
                      key={field}
                      className="px-4 py-3 bg-white/10 rounded-xl text-white/90 text-sm border border-white/10"
                    >
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="alex-section bg-ink pt-0">
      <div className="alex-container">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          orientation="vertical"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <TabsList
              aria-label="Investment topics"
              className="sticky top-32 flex flex-col h-auto w-full items-stretch justify-start bg-transparent p-0 rounded-none space-y-2"
            >
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="w-full flex-none h-auto justify-start whitespace-normal border-0 flex items-center gap-4 px-6 py-4 rounded-lg text-base font-normal transition-all duration-300 group text-white/75 hover:bg-white/5 hover:text-white data-[state=active]:bg-sea data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-sea/20"
                >
                  <cat.icon
                    className={`size-5 ${activeTab === cat.id ? "text-white" : "group-hover:text-seaglass transition-colors"}`}
                  />
                  <span className="font-semibold text-sm">
                    {cat.label}
                  </span>
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </aside>

          {/* Main Content Area */}
          <TabsContent
            value={activeTab}
            className="lg:w-3/4 min-w-0 lg:min-h-[600px] bg-white/5 rounded-xl border border-white/10 p-4 sm:p-8 md:p-12"
          >
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
