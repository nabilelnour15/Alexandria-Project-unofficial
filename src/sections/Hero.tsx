import { useRef } from 'react';
import { Landmark, MousePointer2 } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SourceChip from '../components/SourceChip';

const MotionLink = motion.create(Link);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const shouldReduceMotion = useReducedMotion();


  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={shouldReduceMotion ? undefined : { y: y1 }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 scale-105"
        >
          <img
            src="/images/Alexandria-Corniche-alexandria.jpg"
            alt="The Corniche in Alexandria"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/50 lg:via-ink/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 alex-container pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Heading */}
            {/* The English and Arabic names together form the page's single h1. */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] mb-4">
                Alexandria
              </span>
              <span
                lang="ar"
                dir="rtl"
                className="block w-fit text-4xl md:text-5xl font-semibold text-white"
              >
                الإسكندرية
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl leading-snug text-white/85 max-w-xl mb-4"
            >
              Twenty-three centuries on the Mediterranean, and a port city still being built.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              An unofficial guide to the city's history, places to visit, investment and current projects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <MotionLink
                to="/about"
                className="alex-btn-on-dark"
              >
                Explore the heritage
              </MotionLink>
              <MotionLink
                to="/governor"
                className="alex-btn-ghost-dark"
              >
                Governance
              </MotionLink>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <Landmark className="w-7 h-7 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-4xl font-semibold leading-none text-white font-display">
                    2,300+
                  </p>
                  <p className="text-white/60 text-sm">
                    Years of history
                    <SourceChip factId="foundingYear" className="ml-1 text-white/80" />
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Featured Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative group">
              <img 
                src="/images/logo.svg" 
                alt="Alexandria Brand" 
                className="relative z-10 w-full max-w-md h-auto brightness-0 invert drop-shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 10, 0] }}
        transition={shouldReduceMotion ? { delay: 1 } : { duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-medium">Scroll</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>

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
