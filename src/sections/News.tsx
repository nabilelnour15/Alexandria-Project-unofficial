import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'Alexandria Hosts International Film Festival',
    excerpt:
      'The city\'s annual celebration of cinema brings together filmmakers from around the world for a week of screenings, workshops, and networking events.',
    image: '/images/blog-festival.jpg',
    date: 'Jan 15, 2026',
    author: 'City News Desk',
    category: 'Events',
    featured: true,
  },
  {
    id: 2,
    title: 'New Archaeological Discovery Unearthed',
    excerpt:
      'Recent excavations reveal ancient artifacts dating back to the Ptolemaic period, shedding new light on Alexandria\'s rich history.',
    image: '/images/blog-archaeology.jpg',
    date: 'Jan 12, 2026',
    author: 'Heritage Team',
    category: 'Archaeology',
    featured: false,
  },
  {
    id: 3,
    title: 'Coastal Development Project Launched',
    excerpt:
      'Major infrastructure improvements along the Corniche aim to enhance visitor experience and boost tourism.',
    image: '/images/blog-development.jpg',
    date: 'Jan 10, 2026',
    author: 'Development Office',
    category: 'Infrastructure',
    featured: false,
  },
  {
    id: 4,
    title: 'Cultural Heritage Initiative Announced',
    excerpt:
      'New programs aim to preserve and promote Alexandria\'s rich historical legacy for future generations.',
    image: '/images/blog-culture.jpg',
    date: 'Jan 8, 2026',
    author: 'Culture Ministry',
    category: 'Culture',
    featured: false,
  },
  {
    id: 5,
    title: 'Sustainable Tourism Program Launches',
    excerpt:
      'Eco-friendly initiatives support responsible travel and environmental conservation along the Mediterranean coast.',
    image: '/images/blog-sustainable.jpg',
    date: 'Jan 5, 2026',
    author: 'Tourism Board',
    category: 'Environment',
    featured: false,
  },
];

export default function News() {
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

  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="alex-section bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e6f1fc] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span
              className={`alex-section-tag mb-4 inline-block transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Latest Updates
            </span>
            <h2
              className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4 transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              News & Announcements
            </h2>
            <p
              className={`text-[#5d6c7b] text-lg transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Stay informed about the latest developments, events, and stories
              from Alexandria
            </p>
          </div>

          <button
            className={`alex-btn-secondary group transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            View All News
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          {featuredNews && (
            <div
              className={`group lg:row-span-2 bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-2xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-[#0068c8] text-white text-sm font-semibold rounded-full">
                  Featured
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-medium text-[#0d1623]">
                    {featuredNews.category}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 text-sm text-[#5d6c7b] mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{featuredNews.author}</span>
                  </div>
                </div>

                <h3 className="font-['Montserrat'] text-xl lg:text-2xl font-bold text-[#0d1623] mb-3 group-hover:text-[#0068c8] transition-colors">
                  {featuredNews.title}
                </h3>

                <p className="text-[#5d6c7b] leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>

                <button className="flex items-center text-[#0068c8] font-semibold group/btn">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          )}

          {/* Other News */}
          <div className="space-y-6">
            {otherNews.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`group flex gap-4 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative w-32 md:w-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 py-4 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3 h-3 text-[#0068c8]" />
                    <span className="text-xs font-medium text-[#0068c8]">
                      {item.category}
                    </span>
                    <span className="text-[#e2e2e2]">|</span>
                    <span className="text-xs text-[#5d6c7b]">{item.date}</span>
                  </div>

                  <h4 className="font-['Montserrat'] font-bold text-[#0d1623] mb-2 line-clamp-2 group-hover:text-[#0068c8] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-[#5d6c7b] text-sm line-clamp-2 hidden sm:block">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div
          className={`mt-16 bg-gradient-to-r from-[#0068c8] to-[#3898ec] rounded-2xl p-8 md:p-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest news, events, and
                announcements from Alexandria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-colors"
              />
              <button className="px-6 py-3 bg-white text-[#0068c8] font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
