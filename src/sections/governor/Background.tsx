import { governorData } from '@/data/governorData';

export default function Background() {
  const { biography } = governorData;
  return (
    <section id="background" aria-labelledby="background-title" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="alex-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <h2 id="background-title" className="text-ink lg:col-span-4">
          Background
        </h2>
        <div className="lg:col-span-8">
          <p className="max-w-[60ch] text-pretty text-xl leading-[1.7] text-ink">{biography.summary}</p>
          <ul className="mt-8 max-w-[65ch] border-t border-limestone">
            {biography.career.map((item) => (
              <li key={item} className="border-b border-limestone py-4 text-pretty leading-[1.75] text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
