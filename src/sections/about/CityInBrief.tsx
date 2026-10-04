import SourceChip from '@/components/SourceChip';
import { aboutEssence } from '@/data/aboutData';

export default function CityInBrief() {
  const { geography: g, comparison } = aboutEssence;

  return (
    <section id="in-brief" aria-labelledby="in-brief-title" className="scroll-mt-28 bg-white py-24 md:py-32">
      <div className="alex-container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="in-brief-title" className="text-ink">
            {g.title}
          </h2>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-ink">
            {g.description}
            <SourceChip factId={g.factId} className="ml-1 text-ink-soft" />
          </p>
          <p className="mt-5 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{g.location}</p>

          <h3 className="mt-12 text-ink">{g.character.title}</h3>
          <p className="mt-4 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{g.character.description}</p>
          <p className="mt-4 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{g.character.architecture}</p>
        </div>

        <div className="space-y-12 lg:col-span-6 lg:pt-3">
          <aside aria-labelledby="why-site" className="border-l-2 border-gold pl-6">
            <h3 id="why-site" className="text-ink">
              Why Alexander chose this site
            </h3>
            <p className="mt-3 text-pretty leading-[1.75] text-ink-soft">{g.strategy}</p>
          </aside>

          <table className="w-full border-collapse text-left text-sm">
            <caption className="mb-4 text-left font-display text-2xl font-semibold text-ink">
              {comparison.title}
            </caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <td className="py-3 pr-4" />
                <th scope="col" className="py-3 pr-4 font-semibold text-sea">
                  Alexandria
                </th>
                <th scope="col" className="py-3 font-semibold text-ink-soft">
                  Nile valley cities
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.dim} className="border-b border-limestone align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-ink">
                    {row.dim}
                  </th>
                  <td className="py-4 pr-4 text-pretty text-ink">{row.alex}</td>
                  <td className="py-4 text-pretty text-ink-soft">{row.nile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
