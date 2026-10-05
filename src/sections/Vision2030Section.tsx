import { projectsData } from '../data/projectsData';

export default function Vision2030Section() {
  const { vision2030, gcap } = projectsData;

  return (
    <section
      id="vision-2030"
      aria-labelledby="vision-title"
      className="scroll-mt-28 bg-limestone-wash py-24 md:py-32"
    >
      <div className="alex-container">
        <h2 id="vision-title" className="max-w-3xl text-ink">
          {vision2030.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">{vision2030.description}</p>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {vision2030.pillars.map((pillar) => (
            <li key={pillar.title} className="border-t-2 border-gold pt-5">
              <h3 className="text-2xl text-ink">{pillar.title}</h3>
              <ul className="mt-3 space-y-1.5 text-ink-soft">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm text-ink-soft">Longer-term plan</p>
            <h3 className="mt-1 text-3xl text-ink">{gcap.title}</h3>
            <p className="mt-4 max-w-[60ch] text-pretty leading-[1.75] text-ink-soft">{gcap.description}</p>
            <p className="mt-8 font-display text-6xl font-semibold tabular-nums leading-none text-sea">
              {/* gcap.budget reads "≈€180M in listed pipeline items"; show just the amount here */}
              {gcap.budget.split(' in ')[0]}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Listed pipeline items over a 10–15 year horizon. A sum of the items listed, not money spent.
            </p>
          </div>

          <table className="w-full text-left lg:col-span-6">
            <caption className="sr-only">Listed pipeline items by sector</caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="pb-3 text-sm font-semibold text-ink">
                  Sector
                </th>
                <th scope="col" className="pb-3 text-right text-sm font-semibold text-ink">
                  Listed value
                </th>
              </tr>
            </thead>
            <tbody>
              {gcap.pipeline.map((p) => (
                <tr key={p.sector} className="border-t border-limestone">
                  <th scope="row" className="py-3 font-normal text-ink-soft">
                    {p.sector}
                  </th>
                  <td className="py-3 text-right font-semibold tabular-nums text-ink">{p.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
