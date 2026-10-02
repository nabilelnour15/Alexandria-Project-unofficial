import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-ink wall-of-scripts"
    >
      <div className="alex-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2
            className={`text-white mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}
          >
            Come and see Alexandria for yourself
          </h2>

          {/* Description */}
          <p
            className={`text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            The visitor guide covers the best time to go, getting around, the
            main sights and where to eat and stay.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <Link
              to="/visit"
              className="alex-btn-on-dark w-full sm:w-auto min-w-[200px]"
            >
              Plan your visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
