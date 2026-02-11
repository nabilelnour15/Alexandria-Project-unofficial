import { useEffect, useRef, useState } from 'react';
import { Landmark, Waves, Palette, Cpu, Check } from 'lucide-react';

const features = [
  {
    icon: Landmark,
    title: 'Ancient Heritage',
    description:
      'Walk through history with well-preserved monuments and archaeological sites dating back thousands of years. From the Catacombs of Kom el Shoqafa to Pompey\'s Pillar.',
    image: '/images/feature-citadel.jpg',
    highlights: ['Catacombs of Kom el Shoqafa', 'Pompey\'s Pillar', 'Roman Amphitheater'],
  },
  {
    icon: Waves,
    title: 'Mediterranean Beauty',
    description:
      'Enjoy stunning coastlines, pristine beaches, and breathtaking sunsets over the azure Mediterranean Sea. The Corniche offers miles of scenic waterfront.',
    image: '/images/feature-beach.jpg',
    highlights: ['Corniche Waterfront', 'Montaza Palace', 'Stanley Beach'],
  },
  {
    icon: Palette,
    title: 'Cultural Hub',
    description:
      'Experience a vibrant arts scene, world-class museums, and year-round cultural festivals. The Bibliotheca Alexandrina stands as a beacon of knowledge.',
    image: '/images/feature-library.jpg',
    highlights: ['Bibliotheca Alexandrina', 'Alexandria Opera House', 'National Museum'],
  },
  {
    icon: Cpu,
    title: 'Modern Infrastructure',
    description:
      'Benefit from excellent transportation, modern amenities, and business-friendly policies. Two international airports and a major seaport.',
    image: '/images/blog-development.jpg',
    highlights: ['Borg El Arab Airport', 'Alexandria Port', 'Free Trade Zone'],
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];
  const Icon = activeFeature.icon;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="alex-section bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#e6f1fc] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`alex-section-tag mb-4 inline-block transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Featured Highlights
          </span>
          <h2
            className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What Makes Alexandria Special
          </h2>
          <p
            className={`text-[#5d6c7b] text-lg transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discover the unique blend of history, culture, and modernity that
            defines our city
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex
                      ? 'opacity-100'
                      : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              ))}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/60 via-transparent to-transparent" />
              
              {/* Feature Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#0068c8]" />
                <span className="font-semibold text-[#0d1623] text-sm">
                  {activeFeature.title}
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0068c8] rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#3898ec]/30 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Feature Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feature, index) => {
                const TabIcon = feature.icon;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#0068c8] text-white shadow-lg shadow-[#0068c8]/25'
                        : 'bg-white text-[#5d6c7b] hover:bg-[#e6f1fc] hover:text-[#0068c8]'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                    <span className="font-medium text-sm hidden sm:inline">
                      {feature.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Feature Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-bold text-[#0d1623] mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-[#5d6c7b] text-lg leading-relaxed mb-6">
                {activeFeature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                <p className="font-semibold text-[#0d1623] text-sm uppercase tracking-wider">
                  Key Highlights
                </p>
                {activeFeature.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 text-[#333333]"
                  >
                    <div className="w-5 h-5 bg-[#e6f1fc] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#0068c8]" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-6 justify-center">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#0068c8]'
                      : 'w-1.5 bg-[#e2e2e2] hover:bg-[#3898ec]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
