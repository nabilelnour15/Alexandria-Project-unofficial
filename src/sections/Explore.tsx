import { useEffect, useRef, useState } from 'react';
import { Clock, BookOpen, Landmark, Scroll, ArrowRight } from 'lucide-react';

const timeline = [
  {
    era: 'Ancient Era',
    period: '331 BC - 641 AD',
    title: 'Foundation & Glory',
    description:
      'Founded by Alexander the Great in 331 BC, Alexandria became the capital of Egypt and a center of learning and culture. The famous Library of Alexandria and the Lighthouse (one of the Seven Wonders) were built during this period.',
    events: [
      '331 BC - Founded by Alexander the Great',
      '295 BC - Library of Alexandria established',
      '280 BC - Lighthouse of Alexandria completed',
      '48 BC - Library partially burned',
    ],
    color: 'from-amber-600 to-amber-400',
  },
  {
    era: 'Islamic Era',
    period: '641 AD - 1798 AD',
    title: 'New Beginnings',
    description:
      'After the Arab conquest, Alexandria became an important Islamic city. The city saw the construction of mosques and madrasas, while maintaining its role as a major Mediterranean port.',
    events: [
      '641 AD - Arab conquest of Alexandria',
      '1480 AD - Citadel of Qaitbay built',
      '1517 AD - Ottoman rule begins',
      '1798 AD - French expedition arrives',
    ],
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    era: 'Modern Era',
    period: '1805 AD - Present',
    title: 'Revival & Growth',
    description:
      'Under Muhammad Ali Pasha and subsequent rulers, Alexandria was modernized. The city expanded, new infrastructure was built, and it became Egypt\'s window to the Mediterranean.',
    events: [
      '1805 AD - Muhammad Ali takes power',
      '1856 AD - First railway in Africa',
      '1882 AD - British bombardment',
      '2002 AD - New Library of Alexandria opens',
    ],
    color: 'from-[#0068c8] to-[#3898ec]',
  },
];

const landmarks = [
  {
    name: 'Bibliotheca Alexandrina',
    type: 'Cultural',
    year: '2002',
    image: '/images/feature-library.jpg',
  },
  {
    name: 'Citadel of Qaitbay',
    type: 'Historical',
    year: '1480',
    image: '/images/feature-citadel.jpg',
  },
  {
    name: 'Catacombs of Kom el Shoqafa',
    type: 'Archaeological',
    year: '2nd Century',
    image: '/images/blog-archaeology.jpg',
  },
  {
    name: 'Montaza Palace',
    type: 'Royal',
    year: '1892',
    image: '/images/feature-beach.jpg',
  },
];

export default function Explore() {
  const [activeEra, setActiveEra] = useState(0);
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

  const activeTimeline = timeline[activeEra];

  return (
    <section
      id="explore"
      ref={sectionRef}
      className="alex-section bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#e6f1fc] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`alex-section-tag mb-4 inline-block transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Heritage
          </span>
          <h2
            className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4 transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Explore the City
          </h2>
          <p
            className={`text-[#5d6c7b] text-lg transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Journey through over 2,300 years of history, from ancient wonders to
            modern achievements
          </p>
        </div>

        {/* Timeline Section */}
        <div
          className={`mb-20 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Era Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {timeline.map((era, index) => (
              <button
                key={era.era}
                onClick={() => setActiveEra(index)}
                className={`relative px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeEra === index
                    ? 'bg-white shadow-xl'
                    : 'bg-white/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${era.color} flex items-center justify-center`}
                  >
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p
                      className={`font-semibold ${
                        activeEra === index
                          ? 'text-[#0d1623]'
                          : 'text-[#5d6c7b]'
                      }`}
                    >
                      {era.era}
                    </p>
                    <p className="text-xs text-[#5d6c7b]">{era.period}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Content */}
              <div className="p-8 lg:p-12">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${activeTimeline.color} rounded-full mb-6`}
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">
                    {activeTimeline.period}
                  </span>
                </div>

                <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-bold text-[#0d1623] mb-4">
                  {activeTimeline.title}
                </h3>

                <p className="text-[#5d6c7b] text-lg leading-relaxed mb-8">
                  {activeTimeline.description}
                </p>

                <div className="space-y-3">
                  <p className="font-semibold text-[#0d1623] text-sm uppercase tracking-wider">
                    Key Events
                  </p>
                  {activeTimeline.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#333333]"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeTimeline.color}`}
                      />
                      <span className="text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visual */}
              <div
                className={`relative bg-gradient-to-br ${activeTimeline.color} p-8 lg:p-12 flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <Landmark className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <p className="text-6xl font-bold font-['Montserrat'] mb-2">
                    {activeTimeline.period.split(' ')[0]}
                  </p>
                  <p className="text-white/80 text-lg">{activeTimeline.era}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-['Montserrat'] text-2xl font-bold text-[#0d1623]">
              Iconic Landmarks
            </h3>
            <button className="flex items-center text-[#0068c8] font-semibold group">
              <span>View All</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarks.map((landmark, index) => (
              <div
                key={landmark.name}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={landmark.image}
                    alt={landmark.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-[#0068c8]">
                      {landmark.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Scroll className="w-4 h-4 text-[#5d6c7b]" />
                    <span className="text-xs text-[#5d6c7b]">
                      {landmark.type}
                    </span>
                  </div>
                  <h4 className="font-['Montserrat'] font-bold text-lg text-[#0d1623] group-hover:text-[#0068c8] transition-colors">
                    {landmark.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
