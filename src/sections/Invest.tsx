import { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  Ship,
  Building2,
  Hotel,
  Cpu,

  CheckCircle2,
  Users,
  LandPlot,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SourceChip from '../components/SourceChip';
import { facts, type FactId } from '../data/facts';

const sectors: { icon: typeof Ship; title: string; description: string; factId?: FactId }[] = [
  {
    icon: Building2,
    title: 'Real estate',
    description: 'Residential, commercial, and industrial development opportunities.',
  },
  {
    icon: Ship,
    title: 'Logistics and ports',
    description: `Egypt's main port, handling ${facts.portTradeShare.value} of the country's foreign trade.`,
    factId: 'portTradeShare',
  },
  {
    icon: Hotel,
    title: 'Tourism and hospitality',
    description: 'Heritage sites, beaches and year-round visitors create demand for hotels and services.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'A growing number of startups and IT companies.',
  },
];

const advantages: { text: string; factId?: FactId }[] = [
  { text: "Around 40% of Egypt's industrial activity (2013)", factId: 'industrialShare' },
  { text: 'Largest Mediterranean port in Egypt' },
  { text: 'Borg El Arab International Airport' },
  { text: 'Public free zone in Amreya' },
  { text: 'Young, educated workforce' },
  { text: 'Tax incentives for investors' },
];

const keyStats: { icon: typeof Ship; value: string; label: string; factId: FactId }[] = [
  { icon: Ship, value: `≈${facts.portTradeShare.numeric}%`, label: 'Of foreign trade via the port', factId: 'portTradeShare' },
  { icon: TrendingUp, value: `≈${facts.industrialShare.numeric}%`, label: 'Industrial activity (2013)', factId: 'industrialShare' },
  { icon: LandPlot, value: '5.7M m²', label: 'Public free zone', factId: 'freeZoneArea' },
  { icon: Users, value: '≈5.6M', label: 'Population', factId: 'population' },
];

export default function Invest({ isTeaser = false }: { isTeaser?: boolean }) {
  void isTeaser;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="invest"
      ref={sectionRef}
      className="alex-section bg-ink relative overflow-hidden"
    >
      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-white mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}
          >
            Invest in Alexandria
          </h2>
          <p
            className={`text-white/70 text-lg transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Egypt's main port, a public free zone and a long-established
            industrial base
          </p>
        </div>

        {/* Key Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {keyStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4 md:p-6 text-center min-w-0">
                <Icon className="w-8 h-8 text-seaglass mx-auto mb-2" />
                <p className="text-2xl font-bold text-white font-display">
                  {stat.value}
                </p>
                <p className="text-white/75 text-sm">{stat.label}</p>
                <div className="mt-2 text-white/70">
                  <SourceChip factId={stat.factId} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Investment Sectors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className={`bg-white/5 rounded-lg p-6 transition-all duration-500 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-sea/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-seaglass" />
                  </div>
                </div>
                <h3 className="text-white mb-2">
                  {sector.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {sector.description}
                  {sector.factId && <SourceChip factId={sector.factId} className="ml-1 text-white/70" />}
                </p>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Advantages */}
          <div
            className={`transition-all duration-700 delay-600 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
              }`}
          >
            <h3 className="text-white mb-6">
              Why invest in Alexandria?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage) => (
                <div
                  key={advantage.text}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-seaglass flex-shrink-0" />
                  <span className="text-sm">
                    {advantage.text}
                    {advantage.factId && <SourceChip factId={advantage.factId} className="ml-1" />}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/invest" className="alex-btn-on-dark">
                Read the investment guide
              </Link>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div
            className={`transition-all duration-700 delay-700 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="bg-sea rounded-lg p-6 md:p-8">
              <h3 className="text-white mb-4">
                Before you invest
              </h3>
              <p className="text-white/85 leading-relaxed">
                This is an unofficial guide, not an investment office. For
                licences, free zone applications and incentives, contact
                Egypt's General Authority for Investment and Free Zones (GAFI)
                directly, and check every figure here against its source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
