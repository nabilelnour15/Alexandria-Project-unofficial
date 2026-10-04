import { Link } from 'react-router-dom';
import SourceChip from '@/components/SourceChip';
import { attractionCategories } from '@/data/visitData';

export default function VisitTeaser() {
  const items = attractionCategories.find((c) => c.id === 'historical')?.items.slice(0, 3) ?? [];
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
            <li key={item.name} className="border-t-2 border-gold pt-5">
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
      </div>
    </section>
  );
}
