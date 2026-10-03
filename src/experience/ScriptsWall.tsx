import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import InscriptionHeading from './InscriptionHeading';
import { ease, onceInView } from './motion';

// One line per script, in the order they appear (owner's set: no Hebrew, "EGYPT" kept).
const LINES = [
  { text: 'ΑΛΕΞΑΝΔΡΕΙΑ', className: 'text-papyrus/80 tracking-[0.2em]' },
  { text: 'ⲣⲁⲕⲟϯ · ⲁⲗⲉⲝⲁⲛⲇⲣⲓⲁ', className: 'text-seaglass/80 tracking-[0.15em]' },
  { text: 'الإسكندرية', className: 'text-gold/90', lang: 'ar' },
  { text: 'ALEXANDRIA · EGYPT', className: 'text-papyrus/70 tracking-[0.3em]' },
  { text: '𓈖𓂀𓋹 𓇳𓅓𓊪𓆑', className: 'text-gold/70 tracking-[0.25em]' },
];

/** Closing section: the wall of scripts writes itself, one script at a time (motion plan H). */
export default function ScriptsWall() {
  const reduce = useReducedMotion();

  return (
    <section id="xp-scripts" className="scroll-mt-20 relative bg-ink wall-of-scripts text-white min-h-[70vh] flex items-center">
      <div className="alex-container alex-section">
        <InscriptionHeading className="text-white max-w-3xl mb-6">
          Written in every script the city has used
        </InscriptionHeading>
        <p className="text-white/75 text-lg max-w-[60ch] leading-relaxed mb-12">
          The granite wall of the Bibliotheca Alexandrina is carved with characters from the world's
          scripts. Alexandria has written its own name in many of them.
        </p>

        <p className="sr-only">
          Alexandria written in Greek, Coptic, Arabic, Latin and Egyptian hieroglyphs.
        </p>
        <motion.div
          aria-hidden="true"
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight space-y-3 mb-14"
          initial={reduce ? false : 'hidden'}
          whileInView="shown"
          viewport={onceInView}
          transition={{ staggerChildren: 0.5 }}
        >
          {LINES.map((line) => (
            <motion.p
              key={line.text}
              lang={line.lang}
              dir={line.lang ? 'rtl' : undefined}
              className={line.className}
              variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
              transition={{ duration: 1.2, ease: ease.out }}
            >
              {line.text}
            </motion.p>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <Link to="/visit" className="alex-btn-on-dark active:scale-[0.96] transition-transform">
            Plan your visit
          </Link>
          <Link to="/" className="alex-btn-ghost-dark active:scale-[0.96] transition-transform">
            Back to the classic home page
          </Link>
        </div>
      </div>
    </section>
  );
}
