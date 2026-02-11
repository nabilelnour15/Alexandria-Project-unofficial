import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building2, Calendar } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 50,
    suffix: '+',
    label: 'Years of Heritage Preservation',
    description: 'Protecting our rich history',
  },
  {
    icon: Users,
    value: 2,
    suffix: 'M+',
    label: 'Annual Visitors',
    description: 'From around the world',
  },
  {
    icon: Building2,
    value: 15,
    suffix: '',
    label: 'Museums & Galleries',
    description: 'Cultural treasures',
  },
  {
    icon: Calendar,
    value: 100,
    suffix: '+',
    label: 'Annual Cultural Events',
    description: 'Festivals & exhibitions',
  },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1623] via-[#0068c8] to-[#0d1623]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3898ec]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#0068c8]/20 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full uppercase tracking-wider mb-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            By The Numbers
          </span>
          <h2
            className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Alexandria in Numbers
          </h2>
          <p
            className={`text-white/70 text-lg transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discover the scale and significance of our vibrant Mediterranean city
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#3898ec]" />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>

                {/* Label */}
                <h3 className="font-['Montserrat'] font-semibold text-white text-lg mb-1">
                  {stat.label}
                </h3>
                <p className="text-white/60 text-sm">{stat.description}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-500 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-white font-['Montserrat'] mb-1">
              $40B
            </p>
            <p className="text-white/60 text-sm">GDP Contribution</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-white font-['Montserrat'] mb-1">
              40%
            </p>
            <p className="text-white/60 text-sm">of Egypt's Industry</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-white font-['Montserrat'] mb-1">
              #1
            </p>
            <p className="text-white/60 text-sm">Mediterranean Port</p>
          </div>
        </div>
      </div>
    </section>
  );
}
