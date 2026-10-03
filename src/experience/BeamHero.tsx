import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import SourceChip from '@/components/SourceChip';
import { claimOncePerSession, duration, ease, shouldAnimate } from './motion';

const IMAGE = '/images/alexandria-castle-egypt.jpg';
// Corniche lights: x position (%), size (px), scroll window start (0..1).
const LIGHTS = [6, 14, 22, 31, 40, 48, 57, 66, 74, 83, 91].map((x, i) => ({
  x,
  size: 6 + (i % 3) * 3,
  y: 66 + ((i * 7) % 5),
  start: 0.2 + (i % 6) * 0.07,
}));

function Light({ x, y, size, start, p, still }: (typeof LIGHTS)[number] & { p: MotionValue<number>; still: boolean }) {
  const opacity = useTransform(p, [start, start + 0.3], [0, 0.9]);
  return (
    <motion.span
      aria-hidden="true"
      className="absolute rounded-full bg-gold blur-[3px]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        opacity: still ? 0.35 : opacity,
        boxShadow: '0 0 14px 4px rgb(var(--gold) / 0.55)',
      }}
    />
  );
}

export default function BeamHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Dusk to night: crossfade, slow zoom (rest state = dusk, frame 0).
  const night = useTransform(p, [0.05, 0.85], [0, 1]);
  const scale = useTransform(p, [0, 1], [1, 1.08]);

  // Beam reveal: reveal 125 is the finished frame (mask fully opaque).
  const reveal = useMotionValue(125);
  const sweep = useMotionValue(0);
  const beamOpacity = useMotionValue(0.3);
  const mask = useTransform(reveal, (v) => `linear-gradient(90deg, #000 ${v - 25}%, transparent ${v}%)`);

  // Cached so StrictMode's double effect run doesn't consume the session flag twice.
  const playIntro = useRef<boolean | null>(null);

  // Layout effect: set the start frame before first paint, only when the intro will play.
  useLayoutEffect(() => {
    playIntro.current ??= shouldAnimate(reduce) && claimOncePerSession('xp-beam');
    if (!playIntro.current) return;
    reveal.set(0);
    sweep.set(-30);
    beamOpacity.set(0.6);
    const opts = { duration: duration.beam, ease: ease.out };
    const controls = [
      animate(reveal, 125, opts),
      animate(sweep, 0, opts),
      animate(beamOpacity, 0.3, { duration: duration.beam * 1.5 }),
    ];
    return () => {
      controls.forEach((c) => c.stop());
      reveal.set(125);
    };
  }, [reduce, reveal, sweep, beamOpacity]);

  const still = !!reduce;

  return (
    <section
      id="xp-harbour"
      ref={ref}
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-ink flex items-center"
    >
      <motion.div className="absolute inset-0" style={still ? undefined : { scale }}>
        <img
          src={IMAGE}
          alt="Fishing boats in the Eastern Harbour, with the Qaitbay Citadel behind"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dusk grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-sea/45 to-ink/85" />
        <div className="absolute inset-0 bg-gold/10 mix-blend-soft-light" />
        {/* Night layer: same photo, darker and cooler, faded in on scroll */}
        <motion.div className="absolute inset-0" style={{ opacity: still ? 0 : night }} aria-hidden="true">
          <img
            src={IMAGE}
            alt=""
            decoding="async"
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(.45) saturate(.8) hue-rotate(-10deg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-sea/50 to-ink/90" />
        </motion.div>
        <div className="absolute inset-0">
          {LIGHTS.map((l) => (
            <Light key={l.x} {...l} p={p} still={still} />
          ))}
        </div>
      </motion.div>

      {/* Pharos beam: soft warm wedge from the citadel, then a faint resting glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{ opacity: beamOpacity, rotate: sweep, transformOrigin: '82% 74%' }}
      >
        <div
          className="absolute inset-0 blur-2xl"
          style={{
            background:
              'conic-gradient(from 232deg at 82% 74%, transparent 0deg, rgb(var(--gold) / 0.55) 14deg, rgb(var(--papyrus) / 0.35) 22deg, transparent 38deg, transparent 360deg)',
          }}
        />
      </motion.div>

      {/* Qaitbay silhouette, low and squat with a central keep */}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 110"
        className="pointer-events-none absolute bottom-0 right-[2%] z-10 h-24 w-72 text-ink sm:h-32 sm:w-96 lg:w-[34rem] lg:h-44"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          fill="currentColor"
          d="M0 110V86h28v-8h10v8h26v-8h10v8h30V62h14v-8h10v-8h8v-8h8v8h8v8h10v8h14v24h30v-8h10v8h26v-8h10v8h28v24Z"
        />
      </svg>

      <div className="relative z-20 alex-container pt-24 pb-28">
        <motion.h1 className="mb-6 text-white" style={{ maskImage: mask, WebkitMaskImage: mask }}>
          <span className="mb-4 block text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Alexandria
          </span>
          <span lang="ar" dir="rtl" className="block w-fit text-4xl font-semibold md:text-5xl">
            الإسكندرية
          </span>
        </motion.h1>
        <p className="mb-8 max-w-xl text-lg leading-snug text-white/85 md:text-xl">
          Twenty-three centuries on the Mediterranean. The lighthouse is gone; the city remembers it.
        </p>
        <div className="mb-10 flex flex-wrap gap-4">
          <a href="#xp-layers" className="alex-btn-on-dark active:scale-[0.96] transition-transform">
            Begin the story
          </a>
          <Link to="/" className="alex-btn-ghost-dark active:scale-[0.96] transition-transform">
            Back to the classic site
          </Link>
        </div>
        <div>
          <p className="font-display text-4xl font-semibold leading-none text-white">2,300+ years</p>
          <p className="mt-1 text-sm text-white/70">
            Since the city's founding
            <SourceChip factId="foundingYear" className="ml-1 text-white/80" />
          </p>
        </div>
      </div>

      <p className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs text-white/60">Scroll</p>
    </section>
  );
}
