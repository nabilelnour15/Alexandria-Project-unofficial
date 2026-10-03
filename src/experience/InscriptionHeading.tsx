import { motion, useReducedMotion } from 'framer-motion';
import { duration, ease, onceInView } from './motion';

/**
 * Section h2 whose letters rise a few pixels from behind a mask, like an
 * inscription being carved (motion plan B). Plays once per heading. The full
 * text stays in the DOM (and in the accessible name) from the first paint.
 */
export default function InscriptionHeading({
  children,
  className,
  id,
}: {
  children: string;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const words = children.split(' ');

  if (reduce) {
    return (
      <h2 id={id} className={className}>
        {children}
      </h2>
    );
  }

  return (
    <motion.h2
      id={id}
      aria-label={children}
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={onceInView}
      transition={{ staggerChildren: 0.035 }}
    >
      {words.map((word, w) => (
        <span key={w} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          {[...word].map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{ hidden: { y: '0.6em', opacity: 0 }, shown: { y: 0, opacity: 1 } }}
              transition={{ duration: duration.heading, ease: ease.out }}
            >
              {ch}
            </motion.span>
          ))}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.h2>
  );
}

