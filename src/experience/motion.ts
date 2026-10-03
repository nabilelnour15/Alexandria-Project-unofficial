/**
 * Shared motion settings for the /experience page ("The Pharos remembered",
 * docs/motion-plan.md rule 6). Components read durations and easings from
 * here instead of hard-coding numbers.
 */

/** Durations in seconds (framer-motion units). */
export const duration = {
  exit: 0.15,
  enter: 0.25,
  heading: 0.7,
  beam: 1.6,
  draw: 1.8,
  count: 1.4,
} as const;

/** Cubic-bezier easings. */
export const ease = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const spring = {
  gentle: { type: 'spring', stiffness: 120, damping: 20 },
  snappy: { type: 'spring', stiffness: 300, damping: 30 },
} as const;

/** Viewport options for "play once when it enters the screen". */
export const onceInView = { once: true, amount: 0.4 } as const;

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean };
};

/**
 * True on devices where decorative motion should be skipped: few CPU cores
 * or data saver on (rule 7). Reduced motion is handled separately by
 * `useReducedMotion()` / `<MotionConfig reducedMotion="user">` and CSS.
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const nav = navigator as NavigatorWithHints;
  const cores = nav.hardwareConcurrency;
  return (typeof cores === 'number' && cores <= 4) || nav.connection?.saveData === true;
}

/** Decorative motion gate: false when the user prefers reduced motion or the device is low-end. */
export function shouldAnimate(prefersReducedMotion: boolean | null): boolean {
  return !prefersReducedMotion && !isLowEndDevice();
}

/** Run a one-off intro only once per browser session. Storage can throw, so fail closed (skip). */
export function claimOncePerSession(key: string): boolean {
  try {
    if (sessionStorage.getItem(key)) return false;
    sessionStorage.setItem(key, '1');
    return true;
  } catch {
    return false;
  }
}
