import SourceChip from '@/components/SourceChip';
import type { FactId } from '@/data/facts';
import { investData } from '@/data/investData';

type Reason = string | { text: string; factId?: FactId };
const reasons = (investData.whyAlexandria.reasons as readonly Reason[]).map(
  (r): { text: string; factId?: FactId } => (typeof r === 'string' ? { text: r } : r),
);

export default function WhyAlexandria() {
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-28 bg-white py-24 md:py-32">
      <div className="alex-container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 id="why-title" className="text-ink">
              Why companies choose Alexandria
            </h2>
            <p className="mt-6 max-w-[65ch] text-pretty text-lg leading-relaxed text-ink-soft">
              Sea, road, rail and air links meet here, close to an established industrial base and a large
              workforce.
            </p>
            <figure className="mt-10">
              <img
                src="/images/containers.jpeg"
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
              />
            </figure>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {reasons.map((reason) => (
            <li key={reason.text} className="border-t border-limestone py-5 first:border-t-2 first:border-gold">
              <p className="max-w-[65ch] text-pretty leading-[1.75] text-ink">
                {reason.text}
                {reason.factId && <SourceChip factId={reason.factId} className="ml-1 text-ink-soft" />}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
