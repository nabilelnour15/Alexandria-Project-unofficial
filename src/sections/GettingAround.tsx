import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SourceChip from '../components/SourceChip';
import { facts, type FactId } from '../data/facts';

// City centre (Raml Station area). Both links open the provider's own live map;
// this site shows no traffic data itself. Step 2 (TomTom map) is in docs/TODO.md.
const CENTRE = '31.2001,29.9187';

const TRAFFIC_LINKS = [
  {
    name: 'Google Maps',
    detail: 'Traffic layer over the whole city',
    href: `https://www.google.com/maps/@?api=1&map_action=map&center=${CENTRE}&zoom=12&layer=traffic`,
  },
  {
    name: 'Waze',
    detail: 'Live map with driver reports',
    href: `https://waze.com/ul?ll=${encodeURIComponent(CENTRE)}&zoom=12`,
  },
];

function FactLine({ id }: { id: FactId }) {
  const fact = facts[id];
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-t border-limestone py-4">
      <dt className="text-ink-soft">{fact.label}</dt>
      <dd className="flex items-baseline font-display text-3xl font-semibold tabular-nums text-ink">
        {fact.value}
        <SourceChip factId={id} className="ml-1 text-ink-soft" iconOnly />
      </dd>
    </div>
  );
}

export default function GettingAround() {
  return (
    <div className="space-y-20">
      <section id="traffic" aria-labelledby="live-traffic" className="scroll-mt-28">
        <div className="flex items-center gap-3">
          <h2 id="live-traffic" className="text-ink">
            Live traffic
          </h2>
          <span className="rounded-full bg-tram px-2.5 py-0.5 text-xs font-bold text-ink">Live</span>
        </div>
        <p className="mb-8 mt-3 max-w-[65ch] text-pretty text-ink-soft">
          Alexandria has no public live-traffic feed. These links open live maps run by Google and
          Waze, centred on the city.
        </p>
        <ul className="border-b border-limestone">
          {TRAFFIC_LINKS.map((l) => (
            <li key={l.name} className="border-t border-limestone">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between gap-4 py-5"
              >
                <span>
                  <span className="block font-display text-3xl font-semibold text-ink transition-colors group-hover:text-sea">
                    {l.name}
                  </span>
                  <span className="text-sm text-ink-soft">{l.detail}</span>
                </span>
                <ExternalLink className="h-5 w-5 shrink-0 text-sea" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="rail-lines" aria-labelledby="rail" className="scroll-mt-28 grid gap-14 lg:grid-cols-2">
        <h2 id="rail" className="sr-only">
          Tram and metro
        </h2>
        <article>
          <h3 className="mb-3 text-ink">Raml tram</h3>
          <dl className="border-b border-limestone">
            <FactLine id="ramlTramOpened" />
            <FactLine id="ramlTramLength" />
            <FactLine id="ramlTramStations" />
          </dl>
        </article>
        <article>
          <h3 className="mb-3 text-ink">Abu Qir Metro (planned)</h3>
          <dl className="border-b border-limestone">
            <FactLine id="abuQirMetroLength" />
            <FactLine id="abuQirMetroStations" />
          </dl>
          <Link
            to="/projects"
            className="mt-4 inline-flex min-h-10 items-center rounded-sm border-b-2 border-gold font-semibold text-sea transition-colors hover:text-ink"
          >
            Follow it on the City projects page
          </Link>
        </article>
      </section>
    </div>
  );
}
