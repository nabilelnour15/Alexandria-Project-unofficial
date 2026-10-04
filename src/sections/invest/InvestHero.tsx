import SourceChip from '@/components/SourceChip';
import { facts, type FactId } from '@/data/facts';

const SECTIONS = [
  { href: '#why', label: 'Why Alexandria' },
  { href: '#investment-zones', label: 'Zones, ports and laws' },
  { href: '#companies', label: 'Companies already here' },
  { href: '#where-to-act', label: 'Where to act' },
];

/** The ledger: the city's trade and industry facts as ruled rows, each with its source. */
const LEDGER: { label: string; value: string; factId: FactId }[] = [
  { label: "Of Egypt's foreign trade passes through Alexandria Port", value: `≈${facts.portTradeShare.numeric}%`, factId: 'portTradeShare' },
  { label: "Of Egypt's industrial activity, in and around the city (2013)", value: `≈${facts.industrialShare.numeric}%`, factId: 'industrialShare' },
  { label: 'Public Free Zone at Amreya, the largest in Egypt by area', value: '5.7M m²', factId: 'freeZoneArea' },
  { label: 'Residents of the governorate', value: '≈5.6M', factId: 'population' },
];

/**
 * Signature element: a calm trade ledger. Investors scan for facts, so the
 * figures sit in ruled rows like a port tally sheet instead of stat cards.
 */
export default function InvestHero() {
  return (
    <header className="wall-of-scripts relative overflow-hidden bg-ink pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div className="alex-container grid items-end gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h1 className="text-[clamp(3rem,1.5rem+6vw,6.5rem)] leading-[0.95] tracking-tight text-white">
            Invest in Alexandria
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            Alexandria's ports, free zone and industrial districts handle a large share of Egypt's trade and
            manufacturing. This page collects the basics in one place, and points to where you apply.
          </p>
          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="rounded-sm border-b border-gold/60 pb-1 text-sm font-semibold text-white/90 transition-colors hover:border-tram hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <section aria-labelledby="ledger-title" className="lg:col-span-6">
          <h2 id="ledger-title" className="border-b-2 border-gold pb-3 text-2xl text-white">
            The trade ledger
          </h2>
          <dl>
            {LEDGER.map((row) => (
              <div
                key={row.factId}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 border-b border-white/15 py-5"
              >
                <dt className="text-pretty text-white/75">
                  {row.label}
                  <SourceChip factId={row.factId} className="ml-1 text-white/70" />
                </dt>
                <dd className="text-right font-display text-4xl font-semibold tabular-nums text-white md:text-5xl">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </header>
  );
}
