import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1623] via-[#0068c8] to-[#0d1623]" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3898ec]/20 rounded-full blur-3xl" />

      <div className="alex-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#3898ec]" />
            <span className="text-white/90 text-sm font-medium">
              Start Your Journey Today
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience the Magic of{' '}
            <span className="text-[#3898ec]">Alexandria</span>
          </h2>

          {/* Description */}
          <p
            className={`text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Plan your visit today and discover why this city has captivated
            travelers for over two millennia. Ancient wonders, Mediterranean
            beauty, and warm hospitality await.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={() => scrollToSection('#visit')}
              className="group px-8 py-4 bg-white text-[#0068c8] font-semibold rounded-xl transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 flex items-center"
            >
              Plan Your Visit
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Contact Us
            </button>
          </div>

          {/* Trust Badges */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-500 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-['Montserrat']">
                2M+
              </p>
              <p className="text-white/60 text-sm">Happy Visitors</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-['Montserrat']">
                4.8
              </p>
              <p className="text-white/60 text-sm">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white font-['Montserrat']">
                100+
              </p>
              <p className="text-white/60 text-sm">Annual Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
