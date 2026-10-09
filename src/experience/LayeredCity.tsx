import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import SourceChip from '@/components/SourceChip';
import { timelineEvents, type TimelineEvent } from '@/data/aboutData';
import { cn } from '@/lib/utils';
import InscriptionHeading from './InscriptionHeading';
import { duration } from './motion';
import { useIsDesktop } from './useIsDesktop';

const N = timelineEvents.length;
const IMG = 'object-cover outline outline-1 -outline-offset-1 outline-white/10';

// Prose dates that have a sourced fact (matched on the year string).
function YearChip({ year }: { year: string }) {
  if (year === '331 BCE') return <SourceChip factId="foundingYear" />;
  if (year === '1477–1479') return <SourceChip factId="qaitbayCitadelBuilt" />;
  return null;
}

// Coastline stage: 0 = Ptolemaic shore, 1 = Heptastadion joins the island, 2 = modern Corniche.
const stageOf = (i: number) => (i <= 1 ? 0 : i <= 5 ? 1 : 2);

function Coastline({ stage }: { stage: number }) {
  const fade = (s: number) => ({
    animate: { opacity: stage === s ? 1 : stage > s ? 0.25 : 0 },
    transition: { duration: duration.enter },
  });
  return (
    <figure className="w-64 text-gold">
      <svg
        viewBox="0 0 240 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Simplified coastline in three stages: the Ptolemaic shore with Pharos island offshore, the causeway joining island to mainland, and the wider modern Corniche"
      >
        <motion.g {...fade(0)}>
          <path d="M0 72 C40 66 80 76 120 71 S200 64 240 69" />
          <path d="M148 42 q10 -9 26 -3 q9 6 -1 11 q-15 4 -25 -8z" />
        </motion.g>
        <motion.g {...fade(1)}>
          <path d="M162 51 C160 58 156 64 152 70" />
        </motion.g>
        <motion.g {...fade(2)}>
          <path d="M0 80 C50 74 90 82 130 76 C150 60 170 56 176 54 C200 68 220 70 240 72" />
          <path d="M184 36 q8 -6 20 -2" />
        </motion.g>
      </svg>
      <figcaption className="mt-2 text-xs leading-snug text-papyrus/70">
        Approximate coastline, after published reconstructions. Not to scale.
      </figcaption>
    </figure>
  );
}

// One palimpsest layer: fades in over its slice of progress, then recedes behind the next.
function Layer({ ev, i, progress }: { ev: TimelineEvent; i: number; progress: MotionValue<number> }) {
  const a = i / N;
  const b = (i + 1) / N;
  const opacity = useTransform(
    progress,
    i === 0 ? [0, b, b + 0.6 / N] : i === N - 1 ? [a, a + 0.6 / N] : [a, a + 0.6 / N, b, b + 0.6 / N],
    i === 0 ? [0.92, 0.92, 0.25] : i === N - 1 ? [0, 0.92] : [0, 0.92, 0.92, 0.25],
  );
  const scale = useTransform(progress, [a, b], [1.04, 1]);
  return (
    <motion.img
      src={ev.image}
      alt=""
      aria-hidden="true"
      decoding="async"
      loading={i < 2 ? 'eager' : 'lazy'}
      style={{ opacity, scale }}
      className={cn(IMG, 'absolute inset-0 h-full w-full')}
    />
  );
}

function PinnedStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(N - 1, Math.max(0, Math.floor(p * N)));
    setActive((cur) => (cur === next ? cur : next));
  });
  const ev = timelineEvents[active];

  return (
    <div ref={ref} style={{ height: `${N * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {timelineEvents.map((e, i) => (
          <Layer key={e.year} ev={e} i={i} progress={scrollYProgress} />
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-10 px-12 pb-16">
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={ev.year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: duration.enter } }}
                exit={{ opacity: 0, transition: { duration: duration.exit } }}
              >
                <p className="flex flex-wrap items-center gap-3 font-display text-7xl tabular-nums text-papyrus xl:text-8xl">
                  {ev.year}
                  <YearChip year={ev.year} />
                </p>
                <h3 className="mt-3 text-3xl text-white">{ev.title}</h3>
                <p className="mt-2 text-lg text-papyrus/85">{ev.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <Coastline stage={stageOf(active)} />
        </div>

        <div aria-hidden="true" className="absolute right-6 top-1/2 flex -translate-y-1/2 gap-3">
          <div aria-hidden="true" className="relative w-px bg-white/20">
            <motion.div style={{ scaleY: scrollYProgress }} className="absolute inset-0 origin-top bg-tram" />
          </div>
          <ol className="space-y-2 text-sm">
            {timelineEvents.map((e, i) => (
              <li
                key={e.year}
                className={cn('tabular-nums', i === active ? 'font-semibold text-tram' : 'text-papyrus/60')}
              >
                {e.year}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function CardSequence() {
  return (
    <ol className="mx-auto max-w-5xl space-y-8 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-8">
      {timelineEvents.map((e) => (
        <li key={e.year} className="overflow-hidden rounded-lg bg-white/5">
          <img
            src={e.image}
            alt={e.imageAlt ?? e.title}
            loading="lazy"
            decoding="async"
            className={cn(IMG, 'aspect-[16/10] w-full')}
          />
          <div className="p-5">
            <p className="flex flex-wrap items-center gap-2 font-display text-3xl tabular-nums text-papyrus">
              {e.year}
              <YearChip year={e.year} />
            </p>
            <h3 className="mt-1 text-xl text-white">{e.title}</h3>
            <p className="mt-2 text-papyrus/85">{e.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function LayeredCity() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();

  return (
    <section id="xp-layers" aria-labelledby="xp-layers-title" className="relative scroll-mt-20 bg-ink text-papyrus">
      <div aria-hidden="true" className="wall-of-scripts pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6">
        <InscriptionHeading id="xp-layers-title" className="text-4xl text-white md:text-5xl">
          The layered city
        </InscriptionHeading>
        <p className="mt-4 max-w-xl text-lg text-papyrus/85">
          Alexandria was never replaced, only built over. Scroll through the layers.
        </p>
      </div>
      <div className="relative">{desktop && !reduce ? <PinnedStage /> : <CardSequence />}</div>
    </section>
  );
}
