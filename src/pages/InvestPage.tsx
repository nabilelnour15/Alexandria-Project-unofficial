import { motion } from 'framer-motion';
import {
  CheckCircle2,
  //   MapPin,
  Building,
  ArrowRight,
  TrendingUp,
  Ship,
  Users,
  LandPlot,
} from "lucide-react";
import SourceChip from "../components/SourceChip";
import FactsNote from "../components/FactsNote";
import { facts, type FactId } from "../data/facts";
import PageMeta from "../components/PageMeta";
import InvestSections from "../sections/InvestSections";
import CTA from "../sections/CTA";
import { investData } from "../data/investData";

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

// A "why invest" reason is either plain text or `{ text, factId }` when it quotes a figure.
type Reason = string | { text: string; factId?: FactId };
const rawReasons: readonly Reason[] = investData.whyAlexandria.reasons;
const reasons = rawReasons.map((r): { text: string; factId?: FactId } => (typeof r === "string" ? { text: r } : r));

const keyStats: {
  icon: typeof Ship;
  label: string;
  value: string;
  factId: FactId;
  color: string;
}[] = [
  {
    icon: Ship,
    label: "Of Egypt's foreign trade via Alexandria Port",
    value: `≈${facts.portTradeShare.numeric}%`,
    factId: "portTradeShare",
    color: "from-sea to-sea-deep",
  },
  {
    icon: TrendingUp,
    label: "Of Egypt's industrial activity (2013)",
    value: `≈${facts.industrialShare.numeric}%`,
    factId: "industrialShare",
    color: "from-sea-deep to-sea",
  },
  {
    icon: Users,
    label: "Residents",
    value: "≈5.6M",
    factId: "population",
    color: "from-sea to-sea-deep",
  },
  {
    icon: LandPlot,
    label: "Public Free Zone area",
    value: "5.7M m²",
    factId: "freeZoneArea",
    color: "from-sea-deep to-sea",
  },
];

export default function InvestPage() {
  return (
    <div className="bg-ink">
      <PageMeta
        title="Invest in Alexandria"
        description="Why invest in Alexandria: its ports, free zones, industrial areas, key sectors and the investment laws and incentives that apply."
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 md:pb-28">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            text="High-Res Alexandria Skyline / Port Image"
            className="h-full rounded-none border-none"
            src="/images/Alexandria-sitecore.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        </div>

        <div className="alex-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="alex-kicker-dark mb-4">
              Egypt's main trading port
            </span>
            <h1 className="text-white mb-8">
              Invest in Alexandria
            </h1>
            <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Alexandria's ports, free zone and industrial districts handle a
              large share of Egypt's trade and manufacturing. This page
              collects the basics in one place.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#investment-zones" className="alex-btn-on-dark px-8 py-4 text-lg">
                See zones and incentives
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Overlay */}
      <section className="relative z-20 md:-mt-20">
        <div className="alex-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {keyStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-ink-raised p-5 md:p-8 rounded-xl border border-white/10 min-w-0"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/70 text-sm font-semibold">
                  {stat.label}
                </p>
                <div className="mt-3 text-white/70">
                  <SourceChip factId={stat.factId} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 md:py-32 bg-ink">
        <div className="alex-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-white mb-8">
                Why companies choose Alexandria
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                Sea, road, rail and air links meet here, close to an
                established industrial base and a large workforce.
              </p>
              <PlaceholderImage
                text="Business Excellence in Alexandria"
                className="aspect-[16/10]"
                src="/images/invest-power.jpg"
              />
            </motion.div>

            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-5 md:p-8 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 rounded-full bg-seaglass/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-seaglass" />
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {reason.text}
                      {reason.factId && (
                        <SourceChip factId={reason.factId} className="ml-1 text-white/70" />
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Technical Data */}
      <section id="investment-zones" className="py-20 bg-ink/50 scroll-mt-20">
        <div className="alex-container mb-12 text-center">
          <h2 className="text-white mb-4">
            Zones, laws and incentives
          </h2>
          <p className="text-white/70">
            Free zones, industrial areas, key sectors and the laws that apply.
          </p>
        </div>
        <InvestSections />
      </section>

      {/* Strategic Opportunities */}
      {/* <section className="py-20 md:py-32 bg-ink">
        <div className="alex-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-white mb-6">
                Current Strategic <br /> Opportunities
              </h2>
              <p className="text-white/60 text-lg">
                High-value projects currently open for international and
                domestic partnership.
              </p>
            </div>
            <div className="flex gap-4">
              <PlaceholderImage
                text="Project Map Overview"
                className="w-48 aspect-video"
                src="/images/containers.jpeg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investData.opportunities.map((opp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-ink-raised rounded-xl overflow-hidden border border-white/10 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64">
                  <PlaceholderImage
                    text={`${opp.title} Site Image`}
                    className="h-full rounded-none border-none"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-seaglass text-xs font-bold border border-white/10">
                      {opp.approach}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-white mb-4 group-hover:text-seaglass transition-colors">
                    {opp.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-8 text-white/40">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{opp.location}</span>
                    </div>
                    {opp.area && (
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="text-sm">{opp.area}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white/5 rounded-lg border border-white/5 mb-8">
                    <p className="text-white/70 leading-relaxed text-sm">
                      {opp.purpose}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-seaglass font-bold group/btn">
                    View Project Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories */}
      <section className="py-32 bg-ink/40">
        <div className="alex-container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-seaglass/10 text-seaglass text-xs font-bold rounded-full mb-6 border border-seaglass/20">
              Companies already here
            </span>
            <h2 className="text-white mb-8">
              International firms in Alexandria
            </h2>
            <p className="text-white/60 max-w-4xl mx-auto text-lg leading-relaxed">
              Egypt's second-largest city and main Mediterranean port has drawn
              international companies that serve the Middle East and Africa.
              A few examples follow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {investData.successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-ink-raised rounded-xl border border-white/10 hover:border-seaglass/30 transition-all group overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 md:p-10 flex-grow">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-3">
                      {/* Using a placeholder for company logos */}
                      <Building className="w-8 h-8 text-ink" />
                    </div>
                    <span className="px-4 py-1.5 bg-white/5 rounded-full text-white/70 text-xs font-bold border border-white/10">
                      {story.year}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-seaglass text-xs font-bold mb-2 block">
                      {story.industry}
                    </span>
                    <h4 className="text-white">
                      {story.name}
                    </h4>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">
                    {story.successStory}
                  </p>
                </div>
                <div className="px-6 md:px-10 py-6 bg-white/5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/60 text-xs font-medium italic">
                    Regional expansion
                  </span>
                  {story.link ? (
                    <a
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open ${story.name} link`}
                      aria-label={`Open ${story.name} link`}
                      className="w-8 h-8 rounded-full bg-seaglass/10 flex items-center justify-center hover:bg-seaglass/20 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 text-seaglass" />
                    </a>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-seaglass/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-seaglass" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-ink-raised p-6 md:p-12 rounded-xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="lg:w-2/3">
                <p className="text-white/70 text-lg leading-relaxed">
                  These companies show how Alexandria's mix of port access, a
                  large local population and proximity to Europe and Africa
                  can help firms scale.
                </p>
              </div>
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-white/70 text-sm">
                    Other firms, such as shipping giants like Worms Alexandria
                    Cargo Services and EIS Group, also thrive in logistics,
                    but the focus here is on broader global leaders with
                    documented expansions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FactsNote tone="dark" />

      <CTA />
    </div>
  );
}
