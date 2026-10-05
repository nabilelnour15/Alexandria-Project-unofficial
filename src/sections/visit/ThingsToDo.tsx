import { activitiesData } from '@/data/visitData';

export default function ThingsToDo() {
  return (
    <section id="do" aria-labelledby="do-title" className="scroll-mt-28 bg-limestone-wash py-20 md:py-28">
      <div className="alex-container">
        <h2 id="do-title" className="text-ink">
          Things to do
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {activitiesData.map((group) => (
            <div key={group.title} className="border-t-2 border-gold pt-5">
              <h3 className="text-2xl text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
