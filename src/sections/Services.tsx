import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Building, Palette, HeadphonesIcon, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'For Visitors',
    description:
      'Explore attractions, plan your trip, and make the most of your Alexandria experience.',
    image: '/images/service-visitors.jpg',
    color: 'from-[#0068c8] to-[#3898ec]',
    link: '#visit',
  },
  {
    icon: Briefcase,
    title: 'For Investors',
    description:
      'Discover opportunities, access resources, and grow your business in our thriving city.',
    image: '/images/service-investors.jpg',
    color: 'from-[#027a48] to-[#10b981]',
    link: '#invest',
  },
  {
    icon: Building,
    title: 'For Government',
    description:
      'Access municipal services, permits, and official resources for citizens and businesses.',
    image: '/images/service-government.jpg',
    color: 'from-[#7c3aed] to-[#a78bfa]',
    link: '#services',
  },
  {
    icon: Palette,
    title: 'For Culture',
    description:
      'Immerse yourself in Alexandria\'s rich heritage and vibrant arts scene.',
    image: '/images/service-culture.jpg',
    color: 'from-[#ea580c] to-[#fb923c]',
    link: '#explore',
  },
  {
    icon: HeadphonesIcon,
    title: 'For Support',
    description:
      'Find help, report issues, and connect with city services and assistance.',
    image: '/images/service-support.jpg',
    color: 'from-[#0891b2] to-[#22d3ee]',
    link: '#contact',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the card animations
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="alex-section bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#e6f1fc] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e6f1fc] rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="alex-section-tag mb-4 inline-block">
            What We Offer
          </span>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4">
            Services for Everyone
          </h2>
          <p className="text-[#5d6c7b] text-lg">
            Discover tailored experiences and resources designed for visitors,
            businesses, and residents alike.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={service.title}
                onClick={() => scrollToSection(service.link)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-[#0068c8]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Montserrat'] text-xl font-bold text-[#0d1623] mb-2 group-hover:text-[#0068c8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#5d6c7b] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center text-[#0068c8] font-semibold text-sm group/link">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#0068c8]/30 pointer-events-none`}
                />
              </div>
            );
          })}
        </div>

        {/* Quick Access Tiles */}
        <div className="mt-16">
          <h3 className="font-['Montserrat'] text-xl font-semibold text-[#0d1623] mb-6 text-center">
            Quick Access
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Pay Fees', icon: '💳' },
              { label: 'Apply for Permits', icon: '📋' },
              { label: 'Tourism Guide', icon: '🗺️' },
              { label: 'Investment Info', icon: '📈' },
            ].map((item, index) => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-3 p-6 bg-[#f8fafc] rounded-xl hover:bg-[#e6f1fc] transition-all duration-300 hover:-translate-y-1 group ${
                  visibleCards.length > 0
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[#333333] font-medium text-sm text-center">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
