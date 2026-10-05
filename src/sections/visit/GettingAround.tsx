import SourceChip from '@/components/SourceChip';
import { transportTabs } from '@/data/visitData';

export default function GettingAround() {
  return (
    <section id="transport" aria-labelledby="transport-title" className="scroll-mt-28 bg-limestone-wash py-20 md:py-28">
      <div className="alex-container">
        <h2 id="transport-title" className="text-ink">
          Getting there and around
        </h2>
        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {transportTabs.map((group) => (
            <div key={group.id}>
              <h3 className="text-2xl text-ink">{group.label}</h3>
              <dl className="mt-4">
                {group.content.map((item) => (
                  <div key={item.type} className="grid gap-1 border-t border-limestone py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="font-semibold text-ink">{item.type}</dt>
                    <dd className="max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                      {item.description}
                      {item.factId && <SourceChip factId={item.factId} className="ml-1" />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
