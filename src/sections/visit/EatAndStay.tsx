import { accommodationData, diningData, diningTiers } from '@/data/visitData';

type Row = { name: string; desc: string };

function Tier({ label, items }: { label: string; items: Row[] }) {
  return (
    <div className="mt-8">
      <h3 className="font-sans text-base font-semibold text-sea">{label}</h3>
      <dl className="mt-2">
        {items.map((it) => (
          <div key={it.name} className="grid gap-1 border-t border-limestone py-3 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
            <dt className="font-semibold text-ink">{it.name}</dt>
            <dd className="text-pretty text-ink-soft">{it.desc}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function EatAndStay() {
  return (
    <section id="eat-stay" aria-label="Eat and stay" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="alex-container grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-ink">Eat and drink</h2>
          {diningTiers.map((t) => (
            <Tier key={t.key} label={t.label} items={diningData[t.key]} />
          ))}
        </div>
        <div>
          <h2 className="text-ink">Where to stay</h2>
          {accommodationData.map((c) => (
            <Tier key={c.category} label={c.category} items={c.options} />
          ))}
        </div>
      </div>
    </section>
  );
}
