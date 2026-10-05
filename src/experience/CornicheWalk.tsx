import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SourceChip from '@/components/SourceChip';
import type { FactId } from '@/data/facts';
import InscriptionHeading from './InscriptionHeading';
import { useIsDesktop } from './useIsDesktop';

type Stop = { name: string; image: string; alt: string; text: string; note?: string; factId?: FactId };

// East to west, the order you meet them along the Corniche.
const stops: Stop[] = [
  {
    name: 'Montaza Palace',
    image: '/images/A-wonderful-picture-of-Montazah-Palace.jpg',
    alt: 'Montaza Palace and its gardens at the eastern end of the Corniche',
    text: 'Royal gardens and a palace complex on the eastern edge of the city.',
  },
  {
    name: 'Stanley Bridge',
    image: '/images/Stanley-Bridge-alexandria.jpg',
    alt: 'Stanley Bridge curving over the Mediterranean shore',
    text: 'An iconic bridge with panoramic sea views.',
  },
  {
    name: 'Bibliotheca Alexandrina',
    image: '/images/Alexandria_Bibliotheca.jpg',
    alt: 'The Bibliotheca Alexandrina and its tilted disc roof',
    text: 'A library, planetarium and antiquities museum facing the harbour.',
    note: 'Opened 2002',
    factId: 'bibliothecaOpened',
  },
  {
    name: 'Citadel of Qaitbay',
    image: '/images/citadel.jpg',
    alt: 'The Citadel of Qaitbay at the western tip of the Eastern Harbour',
    text: 'A fortress built on the site of the Pharos, with a maritime museum inside.',
    note: 'Built 1477–1479',
    factId: 'qaitbayCitadelBuilt',
  },
];

function StopCard({ stop, className }: { stop: Stop; className: string }) {
  return (
    <li className={className}>
      <figure className="overflow-hidden rounded-lg border border-limestone bg-papyrus shadow-sm">
        <img
          src={stop.image}
          alt={stop.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="aspect-[4/3] w-full object-cover"
        />
        <figcaption className="space-y-2 p-5">
          <h3 className="text-2xl text-ink">{stop.name}</h3>
          <p className="text-sm text-ink/80">{stop.text}</p>
          {stop.note && stop.factId && (
            <p className="flex items-center gap-2 text-sm text-sea">
              {stop.note}
              <SourceChip factId={stop.factId} />
            </p>
          )}
        </figcaption>
      </figure>
    </li>
  );
}

function Promenade() {
  return (
    <div className="mt-8 flex items-center gap-3 text-sea" aria-hidden="true">
      <span className="text-sm">East</span>
      <span className="h-px flex-1 bg-sea/40" />
      <span className="text-sm">West</span>
    </div>
  );
}

function PinnedStrip() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  const [max, setMax] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -max]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const measure = () => setMax(Math.max(0, strip.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(strip);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div ref={wrapRef} className="h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.ul
          ref={stripRef}
          aria-label="Landmarks along the Corniche, east to west"
          style={{ x }}
          className="flex w-max gap-8 px-[8vw] will-change-transform"
        >
          {stops.map((s) => (
            <StopCard key={s.name} stop={s} className="w-[26rem] shrink-0" />
          ))}
        </motion.ul>
        <div className="px-[8vw]">
          <Promenade />
        </div>
      </div>
    </div>
  );
}

export default function CornicheWalk() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const pinned = desktop && !reduce;

  return (
    <section id="xp-corniche" className="scroll-mt-20 bg-limestone-wash py-20 text-ink">
      <div className="mx-auto max-w-6xl px-4">
        <InscriptionHeading className="text-4xl text-ink md:text-5xl">A walk along the Corniche</InscriptionHeading>
        <p className="mt-3 max-w-xl text-ink/80">East to west, in the order you&apos;d meet them on foot.</p>
      </div>
      {pinned ? (
        <PinnedStrip />
      ) : (
        <div className="mx-auto mt-10 max-w-6xl px-4">
          <ul
            aria-label="Landmarks along the Corniche, east to west"
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
          >
            {stops.map((s) => (
              <StopCard key={s.name} stop={s} className="w-[80%] shrink-0 snap-center sm:w-[22rem]" />
            ))}
          </ul>
          <Promenade />
        </div>
      )}
    </section>
  );
}
