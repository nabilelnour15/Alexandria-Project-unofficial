import { useId, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { services, serviceCategories, type ServiceCategory } from '../data/servicesData';
import { DirectoryEntry, EmergencyEntry } from './live/ServiceEntries';
import { cn } from '@/lib/utils';

const phoneNumber = (url: string) => url.replace(/^tel:/, '');

const isCategory = (value: string | null): value is ServiceCategory =>
  serviceCategories.some((c) => c.id === value);

/** Home-page teaser: the emergency numbers plus a link to the full guide. */
function ServicesTeaser() {
  const emergency = services.filter((s) => s.category === 'emergency');
  return (
    <section className="alex-section bg-limestone-wash">
      <div className="alex-container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-ink">Living in Alexandria</h2>
            <p className="text-pretty text-lg text-ink-soft">
              Where to go for bills, documents, transport and help. We point you to the real
              provider; this fan site doesn't provide any service itself.
            </p>
          </div>
          <Link to="/live" className="alex-btn-primary">
            See the services guide
          </Link>
        </div>
        <h3 className="mb-4 text-ink">Emergency numbers</h3>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
          {emergency.map((s) => (
            <li key={s.id} className="border-t-2 border-gold pt-3">
              <a href={s.url} className="block rounded-sm text-ink transition-colors hover:text-sea">
                <span className="block font-display text-4xl font-semibold tabular-nums">
                  {phoneNumber(s.url)}
                </span>
                <span className="mt-1 block text-sm text-ink-soft">{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Services({ isTeaser = false }: { isTeaser?: boolean }) {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const searchId = useId();

  if (isTeaser) return <ServicesTeaser />;

  const rawCategory = params.get('cat');
  const category = isCategory(rawCategory) ? rawCategory : null;

  const setCategory = (next: ServiceCategory | null) => {
    setParams(
      (prev) => {
        const p = new URLSearchParams(prev);
        if (next) p.set('cat', next);
        else p.delete('cat');
        return p;
      },
      { replace: true },
    );
  };

  const q = query.trim().toLowerCase();
  const visible = services.filter(
    (s) =>
      (!category || s.category === category) &&
      (!q ||
        [s.title, s.titleAr, s.provider, s.note].some((text) => text?.toLowerCase().includes(q))),
  );
  const emergency = visible.filter((s) => s.category === 'emergency');
  const groups = serviceCategories
    .filter((c) => c.id !== 'emergency')
    .map((c) => ({ ...c, items: visible.filter((s) => s.category === c.id) }))
    .filter((g) => g.items.length > 0);

  const chip = (active: boolean) =>
    cn(
      'min-h-10 rounded-sm border-b-2 px-3 py-2 text-sm font-semibold transition-colors',
      active
        ? 'border-sea text-sea'
        : 'border-transparent text-ink-soft hover:border-limestone hover:text-ink',
    );

  return (
    <div>
      {emergency.length > 0 && (
        <section aria-labelledby="emergency-numbers" className="mb-12 bg-limestone-wash px-6 py-10 md:px-10">
          <h3 id="emergency-numbers" className="text-ink">
            Emergency numbers
          </h3>
          <p className="mt-2 max-w-[65ch] text-pretty text-ink-soft">Tap a number to call from your phone.</p>
          <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {emergency.map((s) => (
              <EmergencyEntry key={s.id} service={s} />
            ))}
          </ul>
        </section>
      )}

      <div className="mb-8 border-l-2 border-gold pl-5">
        <p className="max-w-[65ch] text-pretty text-sm leading-relaxed text-ink-soft">
          This is an unofficial fan guide. Each entry links to the organisation that actually
          provides the service. We can't take payments, applications or complaints.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="-ml-3 flex flex-wrap gap-x-1 gap-y-1">
          <button type="button" aria-pressed={!category} className={chip(!category)} onClick={() => setCategory(null)}>
            All
          </button>
          {serviceCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              className={chip(category === c.id)}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <label htmlFor={searchId} className="sr-only">
            Search services
          </label>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, e.g. water"
            className="min-h-11 w-full rounded-lg border border-limestone bg-white py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-soft/70 focus:border-sea focus:outline-none"
          />
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? 'service' : 'services'} shown
      </p>

      {visible.length === 0 ? (
        <p className="border-t border-limestone py-10 text-ink-soft">
          Nothing matches yet. We only list services we've checked against the provider.
        </p>
      ) : (
        groups.map((g) => (
          <section key={g.id} aria-labelledby={`cat-${g.id}`} className="mt-12 first:mt-0">
            <h3 id={`cat-${g.id}`} className="mb-2 text-ink">
              {g.label}
            </h3>
            <ul className="border-b border-limestone">
              {g.items.map((s) => (
                <DirectoryEntry key={s.id} service={s} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
