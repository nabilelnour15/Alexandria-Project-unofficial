import SourceChip from '@/components/SourceChip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { attractionCategories } from '@/data/visitData';

export default function WhatToSee() {
  return (
    <section id="see" aria-labelledby="see-title" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="alex-container">
        <h2 id="see-title" className="text-ink">
          What to see
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
          Historical monuments, museums, religious sites and modern landmarks. The district is given under
          each name.
        </p>

        <Tabs defaultValue="historical" className="mt-12">
          <TabsList
            aria-label="Attraction categories"
            className="h-auto w-full justify-start gap-1 overflow-x-auto overflow-y-hidden rounded-none border-b border-limestone bg-transparent p-0"
          >
            {attractionCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex-none rounded-none border-0 border-b-2 border-transparent px-4 py-3 text-base font-semibold text-ink-soft shadow-none transition-colors hover:text-ink data-[state=active]:border-sea data-[state=active]:bg-transparent data-[state=active]:text-sea data-[state=active]:shadow-none"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="max-w-5xl pt-12">
            {attractionCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                {cat.items.map((item) => (
                  <article
                    key={item.name}
                    className="grid gap-6 border-t border-limestone py-10 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-10"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={item.image}
                      alt={item.name}
                      className="aspect-[4/3] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10"
                    />
                    <div>
                      <h3 className="text-ink">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-sea">{item.location}</p>
                      <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                        {item.desc}
                        {item.factId && <SourceChip factId={item.factId} className="ml-1" />}
                      </p>
                    </div>
                  </article>
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
