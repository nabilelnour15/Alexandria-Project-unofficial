import { Link } from 'react-router-dom';
import SourceChip from '@/components/SourceChip';
import { attractionCategories } from '@/data/visitData';

// Seafront sights in the order you pass them along the Corniche, from the
// Western Harbour to Montaza. Names must match visitData; missing ones are skipped.
const CORNICHE_WEST_TO_EAST = [
  'Ras El-Tin Palace',
  'Citadel of Qaitbay',
  'Bibliotheca Alexandrina',
  'Stanley Bridge',
  'Montaza Palace',
];

export default function VisitTeaser() {
  const items = attractionCategories.find((c) => c.id === 'historical')?.items.slice(0, 3) ?? [];
  const allItems = attractionCategories.flatMap((c) => c.items);
  const stops = CORNICHE_WEST_TO_EAST.flatMap((name) => allItems.filter((item) => item.name === name));

  return (
    <section className="alex-section bg-limestone-wash">
      <div className="alex-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-ink">Plan your visit</h2>
            <p className="mt-4 text-pretty text-lg text-ink-soft">
              Ancient sites, museums, beaches and the Corniche, with tips on getting around, eating and where
              to stay.
            </p>
          </div>
          <Link to="/visit" className="alex-btn-primary">
            View the full guide
          </Link>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.name}>
              <img
                loading="lazy"
                decoding="async"
                src={item.image}
                alt={item.name}
                className="aspect-[4/3] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
              />
              <div className="mt-4 flex items-baseline">
                <h3 className="text-2xl text-ink">{item.name}</h3>
                {item.factId && <SourceChip factId={item.factId} className="ml-1 text-ink-soft" />}
              </div>
              <p className="mt-1 text-pretty text-ink-soft">{item.desc}</p>
            </li>
          ))}
        </ul>

        {stops.length > 1 && (
          <div className="mt-16">
            <h3 className="text-xl text-ink">Along the Corniche, west to east</h3>
            <ol className="relative mt-6 grid gap-6 md:grid-cols-5 md:gap-4">
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-[5px] top-2 w-0.5 bg-sea/25 md:bottom-auto md:left-[10%] md:right-[10%] md:top-[5px] md:h-0.5 md:w-auto"
              />
              {stops.map((stop) => (
                <li key={stop.name} className="relative grid grid-cols-[12px_1fr] gap-x-4 md:block md:text-center">
                  <span aria-hidden="true" className="relative z-10 mt-1.5 block h-3 w-3 rounded-full bg-sea md:mx-auto md:mt-0" />
                  <div className="md:mt-3">
                    <p className="font-semibold leading-snug text-ink">{stop.name}</p>
                    <p className="text-sm text-ink-soft">{stop.location}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
