import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Building2, Landmark } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Alexandria aerial view"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1623]/90 via-[#0d1623]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/50 via-transparent to-[#0d1623]/30" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 right-1/4 w-64 h-64 bg-[#0068c8]/10 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        />
        <div
          className={`absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#3898ec]/10 rounded-full blur-2xl transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 alex-container pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#3898ec]" />
              <span className="text-white/90 text-sm font-medium">
                Egypt's Mediterranean Jewel
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-['Montserrat'] font-bold text-white mb-6">
              <span
                className={`block text-lg md:text-xl font-medium text-[#3898ec] mb-2 transition-all duration-700 delay-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                DISCOVER
              </span>
              <span
                className={`block text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                ALEXANDRIA
              </span>
              <span
                className={`block text-xl md:text-2xl font-normal text-white/80 mt-3 transition-all duration-700 delay-300 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Where Ancient Wisdom Meets Modern Innovation
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Experience the perfect blend of ancient heritage and modern
              innovation on Egypt's stunning Mediterranean coast. A city of
              timeless beauty and forward momentum.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollToSection('#visit')}
                className="alex-btn-primary group animate-pulse-glow"
              >
                Explore the City
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#visit')}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Plan Your Visit
              </button>
            </div>

            {/* Quick Stats */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-700 delay-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0068c8]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#3898ec]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-['Montserrat']">
                    5.6M+
                  </p>
                  <p className="text-white/60 text-sm">Population</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0068c8]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-[#3898ec]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-['Montserrat']">
                    2,300+
                  </p>
                  <p className="text-white/60 text-sm">Years of History</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Image Card */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative perspective-1000">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-y-[-2deg] transition-transform duration-500">
                <img
                  src="/images/hero-street.jpg"
                  alt="Qaitbay Street"
                  className="w-full h-[500px] object-cover"
                />
                {/* Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-[#0068c8] font-semibold text-sm">
                    Featured
                  </span>
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl font-['Montserrat'] mb-2">
                    Citadel of Qaitbay
                  </h3>
                  <p className="text-white/70 text-sm">
                    A 15th-century defensive fortress located on the Mediterranean
                    sea coast
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0068c8] rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#3898ec]/50 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
