import { Link } from 'react-router-dom';
import SourceChip from '../components/SourceChip';
import { facts, type FactId } from '../data/facts';

const sectors: { title: string; description: string; factId?: FactId }[] = [
  {
    title: 'Real estate',
    description: 'Residential, commercial, and industrial development opportunities.',
  },
  {
    title: 'Logistics and ports',
    description: `Egypt's main port, handling ${facts.portTradeShare.value} of the country's foreign trade.`,
    factId: 'portTradeShare',
  },
  {
    title: 'Tourism and hospitality',
    description: 'Heritage sites, beaches and year-round visitors create demand for hotels and services.',
  },
  {
    title: 'Technology',
    description: 'A growing number of startups and IT companies.',
  },
];

const advantages: { text: string; factId?: FactId }[] = [
  { text: "Around 40% of Egypt's industrial activity (2013)", factId: 'industrialShare' },
  { text: 'Largest Mediterranean port in Egypt' },
  { text: 'Borg El Arab International Airport' },
  { text: 'Public free zone in Amreya' },
  { text: 'Young, educated workforce' },
  { text: 'Tax incentives for investors' },
];

const keyStats: { value: string; label: string; factId: FactId }[] = [
  { value: `≈${facts.portTradeShare.numeric}%`, label: 'Of foreign trade via the port', factId: 'portTradeShare' },
  { value: `≈${facts.industrialShare.numeric}%`, label: 'Industrial activity (2013)', factId: 'industrialShare' },
  { value: '5.7M m²', label: 'Public free zone', factId: 'freeZoneArea' },
  { value: '≈5.6M', label: 'Population', factId: 'population' },
];

/** Home-page teaser for /invest. */
export default function Invest() {

  return (
    <section id="invest" aria-labelledby="invest-title" className="alex-section bg-ink text-white">
      <div className="alex-container">
        <h2 id="invest-title" className="max-w-3xl text-white">
          Invest in Alexandria
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-white/75">
          Egypt's main port, a public free zone and a long-established industrial base
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {keyStats.map((stat) => (
            <div key={stat.factId} className="flex min-w-0 flex-col-reverse border-t-2 border-gold pt-3">
              <dt className="mt-1 text-sm text-white/75">
                {stat.label}
                <SourceChip factId={stat.factId} className="ml-1 text-white/70" />
              </dt>
              <dd className="font-display text-4xl font-semibold tabular-nums text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-16 grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <li key={sector.title} className="border-t border-white/15 py-5">
              <h3 className="text-2xl text-white">{sector.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-white/75">
                {sector.description}
                {sector.factId && <SourceChip factId={sector.factId} className="ml-1 text-white/70" />}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-white">Why invest in Alexandria?</h3>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {advantages.map((advantage) => (
                <li key={advantage.text} className="border-t border-white/15 py-3 text-sm text-white/80">
                  {advantage.text}
                  {advantage.factId && <SourceChip factId={advantage.factId} className="ml-1 text-white/70" />}
                </li>
              ))}
            </ul>
            <Link to="/invest" className="alex-btn-on-dark mt-8">
              Read the investment guide
            </Link>
          </div>

          <aside className="border-l-2 border-gold pl-6">
            <h3 className="text-white">Before you invest</h3>
            <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-white/80">
              This is an unofficial guide, not an investment office. For licences, free zone applications and
              incentives, contact Egypt's General Authority for Investment and Free Zones (GAFI) directly, and
              check every figure here against its source.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
