import { useEffect, useRef, useState } from 'react';
import { MapPin, Utensils, Calendar, Camera, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const attractions = [
  {
    id: 1,
    name: 'Bibliotheca Alexandrina',
    category: 'Cultural',
    rating: 4.9,
    image: '/images/feature-library.jpg',
    description: 'A modern library and cultural center commemorating the ancient Library of Alexandria.',
  },
  {
    id: 2,
    name: 'Citadel of Qaitbay',
    category: 'Historical',
    rating: 4.8,
    image: '/images/feature-citadel.jpg',
    description: 'A 15th-century defensive fortress located on the Mediterranean sea coast.',
  },
  {
    id: 3,
    name: 'Montaza Beach',
    category: 'Beaches',
    rating: 4.7,
    image: '/images/feature-beach.jpg',
    description: 'Beautiful sandy beaches with crystal clear waters and palm trees.',
  },
  {
    id: 4,
    name: 'Catacombs of Kom el Shoqafa',
    category: 'Historical',
    rating: 4.8,
    image: '/images/blog-archaeology.jpg',
    description: 'Ancient Roman burial site with unique blend of Egyptian, Greek and Roman art.',
  },
];

const categories = [
  { name: 'All', icon: Camera },
  { name: 'Historical', icon: MapPin },
  { name: 'Beaches', icon: Star },
  { name: 'Cultural', icon: Calendar },
  { name: 'Dining', icon: Utensils },
];

export default function Visit() {
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredAttractions =
    activeCategory === 'All'
      ? attractions
      : attractions.filter((a) => a.category === activeCategory);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="alex-section bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e6f1fc] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-50" />

      <div className="alex-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span
              className={`alex-section-tag mb-4 inline-block transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Plan Your Visit
            </span>
            <h2
              className={`font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1623] mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Explore Alexandria
            </h2>
            <p
              className={`text-[#5d6c7b] text-lg transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Discover world-class attractions, pristine beaches, and rich
              cultural experiences
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/visit"
            className={`alex-btn-primary group transition-all duration-500 delay-300 inline-flex items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            View All Attractions
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filters */}
        <div
          className={`flex flex-wrap gap-2 mb-8 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${activeCategory === category.name
                  ? 'bg-[#0068c8] text-white shadow-lg shadow-[#0068c8]/25'
                  : 'bg-[#f3f3f3] text-[#5d6c7b] hover:bg-[#e6f1fc] hover:text-[#0068c8]'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-sm">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAttractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-semibold text-[#0068c8]">
                    {attraction.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold text-[#0d1623]">
                    {attraction.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#0d1623] mb-2 group-hover:text-[#0068c8] transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-[#5d6c7b] text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>
                <button className="flex items-center text-[#0068c8] font-semibold text-sm group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="bg-gradient-to-br from-[#0068c8] to-[#3898ec] rounded-2xl p-6 text-white">
            <Calendar className="w-10 h-10 mb-4" />
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2">
              Best Time to Visit
            </h3>
            <p className="text-white/80 text-sm">
              March to May and September to November offer the most pleasant
              weather for exploring.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#027a48] to-[#10b981] rounded-2xl p-6 text-white">
            <MapPin className="w-10 h-10 mb-4" />
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2">
              Getting Around
            </h3>
            <p className="text-white/80 text-sm">
              Taxis, ride-sharing, and trams make it easy to explore the city.
              The Corniche is perfect for walks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-2xl p-6 text-white">
            <Utensils className="w-10 h-10 mb-4" />
            <h3 className="font-['Montserrat'] font-bold text-xl mb-2">
              Local Cuisine
            </h3>
            <p className="text-white/80 text-sm">
              Don't miss fresh seafood, traditional Egyptian dishes, and
              Mediterranean flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
