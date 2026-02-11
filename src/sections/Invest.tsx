import { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  Ship,
  Building2,
  Hotel,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Residential, commercial, and industrial development opportunities.',
    growth: '+15%',
  },
  {
    icon: Ship,
    title: 'Logistics & Ports',
    description: 'Strategic location with Egypt\'s largest port handling 40% of trade.',
    growth: '+22%',
  },
  {
    icon: Hotel,
    title: 'Tourism & Hospitality',
    description: '2M+ annual visitors create demand for hotels and services.',
    growth: '+18%',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Growing tech hub with startup ecosystem and IT parks.',
    growth: '+28%',
  },
];

const advantages = [
  '40% of Egypt\'s industrial production',
  'Largest Mediterranean port in Egypt',
  'Two international airports',
  'Free Trade Zone benefits',
  'Young, educated workforce',
  'Tax incentives for investors',
];

export default function Invest() {
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
      className="alex-section bg-[#0d1623] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0068c8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#3898ec]/10 rounded-full blur-3xl" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-[#0068c8]/20 text-[#3898ec] text-sm font-semibold rounded-full uppercase tracking-wider mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Investment Opportunities
          </span>
          <h2
            className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Invest in Alexandria
          </h2>
          <p
            className={`text-white/70 text-lg transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Strategic location, robust infrastructure, and business-friendly
            policies make Alexandria the ideal investment destination
          </p>
        </div>

        {/* Key Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <Globe className="w-8 h-8 text-[#3898ec] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white font-['Montserrat']">
              $40B
            </p>
            <p className="text-white/60 text-sm">GDP Contribution</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-[#3898ec] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white font-['Montserrat']">
              40%
            </p>
            <p className="text-white/60 text-sm">Industrial Output</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <Ship className="w-8 h-8 text-[#3898ec] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white font-['Montserrat']">
              #1
            </p>
            <p className="text-white/60 text-sm">Port in Egypt</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-[#3898ec] mx-auto mb-2" />
            <p className="text-2xl font-bold text-white font-['Montserrat']">
              5.6M
            </p>
            <p className="text-white/60 text-sm">Population</p>
          </div>
        </div>

        {/* Investment Sectors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0068c8]/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#3898ec]" />
                  </div>
                  <span className="px-3 py-1 bg-[#027a48]/20 text-[#10b981] text-sm font-semibold rounded-full">
                    {sector.growth}
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-white mb-2">
                  {sector.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {sector.description}
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
            <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-6">
              Why Invest in Alexandria?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#3898ec] flex-shrink-0" />
                  <span className="text-sm">{advantage}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/invest" className="alex-btn-primary group inline-flex items-center">
                Start Investing
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20">
                Download Guide
              </button>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div
            className={`transition-all duration-700 delay-700 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="relative bg-gradient-to-br from-[#0068c8] to-[#3898ec] rounded-2xl p-8 overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-4">
                  Ready to Invest?
                </h3>
                <p className="text-white/80 mb-6">
                  Our investment office is ready to assist you with every step of
                  your investment journey in Alexandria.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Free investment consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Streamlined permit process</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Ongoing business support</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-[#0068c8] font-semibold rounded-lg transition-all duration-300 hover:bg-white/90">
                  Contact Investment Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
