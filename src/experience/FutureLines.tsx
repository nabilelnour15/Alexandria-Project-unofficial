import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import SourceChip from '@/components/SourceChip';
import { facts, type FactId } from '@/data/facts';
import InscriptionHeading from './InscriptionHeading';
import { duration, ease, onceInView, shouldAnimate } from './motion';

function Stat({ factId, label }: { factId: FactId; label: string }) {
  const f = facts[factId];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, onceInView);
  const reduce = useReducedMotion();
  const [n, setN] = useState<number>(reduce ? f.numeric : 0);
  const [done, setDone] = useState(!!reduce);
  const decimals = Number.isInteger(f.numeric) ? 0 : 1;

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, f.numeric, {
      duration: duration.count,
      ease: ease.out,
      onUpdate: setN,
      onComplete: () => setDone(true),
    });
    return () => c.stop();
  }, [inView, reduce, f.numeric]);

  return (
    <div ref={ref} className="rounded-lg border border-papyrus/15 bg-papyrus/5 p-5">
      <p className="flex items-baseline gap-2">
        <span className="font-display text-5xl text-gold tabular-nums">{n.toFixed(decimals)}</span>
        <span className="text-sm text-papyrus/80">{f.unit}</span>
      </p>
      <p className="mt-1 flex items-center gap-2 text-sm text-papyrus">
        {label}
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: done ? 1 : 0 }} transition={{ duration: duration.enter }}>
          <SourceChip factId={factId} />
        </motion.span>
      </p>
    </div>
  );
}

const draw = (delay: number, play: boolean) =>
  play
    ? {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: onceInView,
        transition: { duration: duration.draw, ease: ease.inOut, delay },
      }
    : {};

function RouteMap({ play }: { play: boolean }) {
  return (
    <figure>
      <svg
        viewBox="0 0 600 280"
        role="img"
        aria-label="Indicative schematic: the Raml tram along the coast and the Abu Qir metro running east"
        className="w-full"
      >
        <path d="M0 110 C90 80 170 140 280 115 S480 70 600 95" fill="none" stroke="currentColor" className="text-papyrus/40" strokeWidth="2" />
        <motion.path d="M20 140 C100 112 175 168 280 143 S470 100 580 122" fill="none" stroke="currentColor" className="text-gold" strokeWidth="4" strokeLinecap="round" {...draw(0, play)} />
        <motion.path d="M200 215 C300 195 400 160 470 140 S560 112 580 108" fill="none" stroke="currentColor" className="text-seaglass" strokeWidth="4" strokeLinecap="round" {...draw(0.4, play)} />
        <g className="fill-papyrus/70 text-[13px]">
          <text x="20" y="30">Mediterranean</text>
          <text x="20" y="166" className="fill-gold">Raml tram</text>
          <text x="210" y="240" className="fill-seaglass">Abu Qir metro</text>
          <text x="20" y="266">West</text>
          <text x="562" y="266">East</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-sm text-papyrus/70">Indicative routes, not to scale</figcaption>
    </figure>
  );
}

export default function FutureLines() {
  const reduce = useReducedMotion();
  const play = shouldAnimate(reduce);

  return (
    <section id="xp-future" className="relative scroll-mt-20 overflow-hidden bg-sea py-24 text-papyrus">
      {play && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full"
            style={{ background: 'radial-gradient(circle, rgb(var(--gold) / 0.35), transparent 65%)' }}
            initial={{ opacity: 0, x: -400 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={onceInView}
            transition={{ duration: duration.beam, ease: ease.out }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
            style={{ background: 'linear-gradient(90deg, transparent, rgb(var(--gold) / 0.12))' }}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={onceInView}
            transition={{ duration: duration.beam, ease: ease.out }}
          />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-start justify-between gap-6">
          <div>
            <InscriptionHeading className="text-4xl text-papyrus md:text-5xl">Lines being drawn for 2030</InscriptionHeading>
            <p className="mt-3 max-w-xl text-papyrus/80">
              These are planned and under-construction transit lines. The map below is indicative.
            </p>
          </div>
          <span className="font-display text-6xl text-gold md:text-7xl" aria-hidden="true">2030</span>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <RouteMap play={play} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat factId="ramlTramLength" label="Raml tram length" />
            <Stat factId="ramlTramStations" label="Raml tram stations" />
            <Stat factId="abuQirMetroLength" label="Abu Qir metro length" />
            <Stat factId="abuQirMetroStations" label="Abu Qir metro stations" />
          </div>
        </div>
        <Link
          to="/projects"
          className="mt-10 inline-flex min-h-10 items-center text-gold underline underline-offset-4 hover:text-papyrus"
        >
          See all city projects
        </Link>
      </div>
    </section>
  );
}
