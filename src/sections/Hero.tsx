import { Link } from 'react-router-dom';

/** The six sections of the site, in the order the home page presents them. */
const INDEX = [
  { to: '/about', label: 'About', note: 'History, culture and the city in brief' },
  { to: '/visit', label: 'Visit', note: 'Sights, beaches and getting around' },
  { to: '/live', label: 'Live here', note: 'Services, bills and who to call' },
  { to: '/invest', label: 'Invest', note: 'The port, the free zone and key sectors' },
  { to: '/projects', label: 'Projects', note: 'What is being built, and who is paying' },
  { to: '/governor', label: 'Governance', note: 'The governor and the governorate' },
];

/**
 * Signature element: the hero is an index of the city. The six sections of the
 * site are set as a quiet typographic table of contents over the Corniche photo.
 */
export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden bg-ink pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <img
        src="/images/Alexandria-Corniche-alexandria.jpg"
        alt="The Corniche in Alexandria"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/60" aria-hidden="true" />

      <div className="alex-container relative grid items-end gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          {/* The English and Arabic names together form the page's single h1. */}
          <h1 className="text-white">
            <span className="block text-[clamp(4rem,1.5rem+10vw,8.5rem)] leading-[0.9] tracking-tight">Alexandria</span>
            <span lang="ar" dir="rtl" className="mt-3 block w-fit text-4xl font-semibold text-white/85 md:text-5xl">
              الإسكندرية
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/85 md:text-xl">
            Twenty-three centuries on the Mediterranean, and a port city still being built.
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/75">
            An unofficial fan guide to the city's history, places to visit, investment and current projects.
          </p>
        </div>

        <nav aria-label="Sections of this site" className="lg:col-span-6">
          <ul className="border-b border-white/20">
            {INDEX.map((s) => (
              <li key={s.to} className="border-t border-white/20">
                <Link
                  to={s.to}
                  className="group flex min-h-14 flex-col gap-1 py-4 transition-colors hover:bg-white/5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-3xl font-semibold leading-none text-white transition-colors group-hover:text-gold sm:w-40 sm:shrink-0">
                    {s.label}
                  </span>
                  <span className="text-sm text-white/75">{s.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
