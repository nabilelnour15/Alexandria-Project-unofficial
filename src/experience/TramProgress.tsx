import { stations } from './stations';

/**
 * Raml tram reading progress (motion plan G). A blue-and-cream tram rides a
 * thin rail as the page scrolls, driven purely by CSS `animation-timeline:
 * scroll()` (see experience.css). Browsers without support show the rail and
 * stations only. Each station is a jump link to its section.
 */
export default function TramProgress() {
  return (
    <nav aria-label="Page progress" className="xp-rail fixed top-20 inset-x-0 z-40 hidden md:block pointer-events-none">
      <div className="alex-container">
        <div className="relative h-10">
          <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-ink/40 backdrop-blur-sm" />
          {/* Full-width carrier, so translateX(100%) spans the rail */}
          <div aria-hidden="true" className="xp-tram absolute inset-0">
          <svg viewBox="0 0 28 16" className="absolute left-0 top-1/2 w-7 h-4 -translate-y-[85%]">
            <line x1="14" y1="0.5" x2="11" y2="3" className="stroke-ink/70" strokeWidth="1" />
            <rect x="1" y="3" width="26" height="9" rx="2" className="fill-sea" />
            <rect x="3" y="5" width="22" height="3" rx="1" className="fill-papyrus" />
            <circle cx="7" cy="13.5" r="1.8" className="fill-ink" />
            <circle cx="21" cy="13.5" r="1.8" className="fill-ink" />
          </svg>
          </div>
          <ol className="absolute inset-0 flex items-center justify-between">
            {stations.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  title={s.label}
                  className="pointer-events-auto group flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full border-2 border-papyrus bg-ink transition-transform duration-200 group-hover:scale-125" />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
