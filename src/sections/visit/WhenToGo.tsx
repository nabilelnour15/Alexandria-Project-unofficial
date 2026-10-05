import { lazy, Suspense, useState } from 'react';
import { climateData } from '@/data/visitData';
import SourceChip from '@/components/SourceChip';

// recharts is heavy; load it only when the detailed chart is opened
const ClimateChart = lazy(() => import('../ClimateChart'));

const ROWS = [
  { label: 'High (°C)', values: climateData.highs },
  { label: 'Low (°C)', values: climateData.lows },
  { label: 'Rain (mm)', values: climateData.precipitation },
  { label: 'Sea (°C)', values: climateData.seaTemp },
];

/**
 * The page's signature element: the year as one strip of twelve months, with the
 * recommended months marked, so "when should I go?" is answered at a glance.
 */
export default function WhenToGo() {
  const [showChart, setShowChart] = useState(false);
  const best = new Set(climateData.bestMonths);

  return (
    <section id="when" aria-labelledby="when-title" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="alex-container">
        <h2 id="when-title" className="text-ink">
          When to go
        </h2>
        <p className="mt-4 max-w-[65ch] text-pretty text-lg leading-[1.75] text-ink-soft">
          {climateData.description}
        </p>

        <div
          role="region"
          aria-label="Climate by month, scrolls sideways on small screens"
          tabIndex={0}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full min-w-[40rem] table-fixed border-collapse text-center tabular-nums">
            <caption className="mb-4 text-left text-sm text-ink-soft">
              Monthly averages, 1991–2020 (El Nouzha station). Gold marks the months best for a visit.{' '}
              <SourceChip factId="climateNormals" />
            </caption>
            <thead>
              <tr>
                <td className="w-24 sm:w-28" />
                {climateData.months.map((m) => (
                  <th
                    key={m}
                    scope="col"
                    className={`border-t-4 pb-2 pt-2 font-display text-xl font-semibold ${
                      best.has(m) ? 'border-gold text-ink' : 'border-limestone text-ink-soft'
                    }`}
                  >
                    {m}
                    {best.has(m) && <span className="sr-only"> (recommended)</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr aria-hidden="true">
                <td />
                {climateData.highs.map((h, i) => (
                  <td key={climateData.months[i]} className="h-28 align-bottom">
                    <div
                      className={`mx-auto w-3 rounded-t-sm ${best.has(climateData.months[i]) ? 'bg-gold' : 'bg-limestone'}`}
                      style={{ height: `${h * 3}px` }}
                    />
                  </td>
                ))}
              </tr>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-t border-limestone">
                  <th scope="row" className="py-3 pr-3 text-left text-sm font-semibold text-ink">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={climateData.months[i]} className="py-3 text-ink-soft">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <aside className="border-l-2 border-gold pl-6 md:col-span-7">
            <h3 className="text-2xl text-ink">Orientation</h3>
            <p className="mt-2 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
              Alexandria is a ribbon city, stretching along the coast. The Corniche is its lifeline. Almost
              all sights and hotels are along this strip. Transport is funnelled here, making taxis and
              buses easy to find.
            </p>
          </aside>
          <div className="md:col-span-5">
            <button
              type="button"
              aria-expanded={showChart}
              aria-controls="climate-chart"
              onClick={() => setShowChart((v) => !v)}
              className="alex-btn-secondary"
            >
              {showChart ? 'Hide the chart' : 'Show the chart'}
            </button>
          </div>
        </div>

        <div id="climate-chart" className="mt-8">
          {showChart && (
            <Suspense
              fallback={<div aria-hidden="true" className="h-[302px] animate-pulse rounded-lg bg-limestone-wash" />}
            >
              <ClimateChart />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  );
}
