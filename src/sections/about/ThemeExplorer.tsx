import type { ReactNode } from 'react';
import ConceptBadge from '@/components/ConceptBadge';
import SourceChip from '@/components/SourceChip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { FactId } from '@/data/facts';
import {
  culinaryTraditions,
  culture2025,
  integrationData,
  landmarksData,
  modernInfrastructure,
  museumRegistry,
} from '@/data/aboutData';

const THEMES = [
  { id: 'ancient', label: 'Ancient city' },
  { id: 'monuments', label: 'Monuments' },
  { id: 'museums', label: 'Museums' },
  { id: 'modern', label: 'Modern city' },
  { id: 'food', label: 'Food' },
  { id: 'heritage', label: 'Living heritage' },
  { id: 'culture', label: '2025 culture year' },
];

const imgClass = 'w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10';

function Chip({ factId }: { factId?: FactId }) {
  return factId ? <SourceChip factId={factId} className="ml-1 text-ink-soft" /> : null;
}

/** Image beside text; used by every place-like entry so the tabs share one rhythm. */
function Entry({
  image,
  alt,
  title,
  children,
  concept = false,
  caption,
}: {
  image: string;
  alt: string;
  title: string;
  children: ReactNode;
  concept?: boolean;
  caption?: string;
}) {
  return (
    <article className="grid gap-6 border-t border-limestone py-10 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-10">
      <div className="relative">
        <img loading="lazy" decoding="async" src={image} alt={alt} className={`aspect-[4/3] ${imgClass}`} />
        {concept && <ConceptBadge className="absolute bottom-2 left-2" />}
        {caption && <p className="mt-2 text-sm text-ink-soft">{caption}</p>}
      </div>
      <div>
        <h3 className="text-ink">{title}</h3>
        <div className="mt-3 max-w-[65ch] space-y-3 text-pretty leading-[1.75] text-ink-soft">{children}</div>
      </div>
    </article>
  );
}

export default function ThemeExplorer() {
  const { bibliotheca, corniche, montaza } = modernInfrastructure;

  return (
    <section id="explore" aria-labelledby="explore-title" className="scroll-mt-28 bg-white py-24 md:py-32">
      <div className="alex-container">
        <h2 id="explore-title" className="text-ink">
          Places, food and culture
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-soft">
          What remains of each era, and what the city is like today. For opening hours and tickets, see
          the visitor guide.
        </p>

        <Tabs defaultValue="ancient" className="mt-12">
          <TabsList
            aria-label="Themes"
            className="h-auto w-full justify-start gap-1 overflow-x-auto overflow-y-hidden rounded-none border-b border-limestone bg-transparent p-0"
          >
            {THEMES.map((t) => (
              <TabsTrigger
                key={t.id}
                value={t.id}
                className="flex-none rounded-none border-0 border-b-2 border-transparent px-4 py-3 text-base font-semibold text-ink-soft shadow-none transition-colors hover:text-ink data-[state=active]:border-sea data-[state=active]:bg-transparent data-[state=active]:text-sea data-[state=active]:shadow-none"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="max-w-5xl pt-12">
            <TabsContent value="ancient" className="mt-0">
              {landmarksData.ancient.map((item) => (
                <Entry
                  key={item.name}
                  image={item.image}
                  alt=""
                  title={item.name}
                  caption={item.image.includes('illustration') ? 'Artistic reconstruction, not a photograph.' : undefined}
                >
                  <p className="text-ink">{item.desc}</p>
                  <p>
                    <span className="font-semibold text-ink">Today: </span>
                    {item.legacy}
                    <Chip factId={item.factId} />
                  </p>
                </Entry>
              ))}
            </TabsContent>

            <TabsContent value="monuments" className="mt-0">
              {landmarksData.monuments.map((item) => (
                <Entry key={item.name} image={item.image} alt="" title={item.name}>
                  <p className="text-ink">
                    {item.stats}
                    <Chip factId={item.factId} />
                  </p>
                  <p>{item.fact}</p>
                </Entry>
              ))}
              {landmarksData.fortifications.map((item) => (
                <Entry key={item.name} image={item.image} alt="" title={item.name}>
                  <p className="text-ink">
                    {item.origin}
                    <Chip factId={item.factId} />
                  </p>
                  <p>{item.function}</p>
                </Entry>
              ))}
            </TabsContent>

            <TabsContent value="museums" className="mt-0">
              {museumRegistry.map((m) => (
                <Entry key={m.name} image={m.image} alt="" title={m.name}>
                  <p className="text-ink">{m.focus}</p>
                  <p>
                    <span className="font-semibold text-ink">Highlights: </span>
                    {m.highlights}
                  </p>
                </Entry>
              ))}
            </TabsContent>

            <TabsContent value="modern" className="mt-0">
              <article className="pb-10">
                <h3 className="text-ink">{bibliotheca.title}</h3>
                <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
                  {bibliotheca.specs.map((s) => (
                    <div key={s.label} className="border-t-2 border-gold pt-3">
                      <dt className="text-sm text-ink-soft">{s.label}</dt>
                      <dd className="mt-1 flex items-baseline font-display text-4xl font-semibold tabular-nums text-ink">
                        {s.value.split(' ')[0]}
                        <Chip factId={s.factId} />
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">{bibliotheca.symbol}</p>
              </article>
              <Entry image={corniche.image} alt="" title={corniche.title}>
                <p className="text-ink">{corniche.length}</p>
                <p>{corniche.social}</p>
              </Entry>
              <Entry image={montaza.image} alt="" title={montaza.title}>
                <p className="text-ink">{montaza.role}</p>
                <p>{montaza.gardens}</p>
              </Entry>
            </TabsContent>

            <TabsContent value="food" className="mt-0">
              <p className="max-w-[65ch] text-pretty text-lg leading-relaxed text-ink">{culinaryTraditions.seafood}</p>
              <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {culinaryTraditions.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="relative">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={dish.image}
                        alt={`Illustration of ${dish.name}`}
                        className={`aspect-[3/2] ${imgClass}`}
                      />
                      <ConceptBadge className="absolute bottom-2 left-2" />
                    </div>
                    <h3 className="mt-4 text-2xl text-ink">{dish.name}</h3>
                    <p className="mt-1 text-pretty text-ink-soft">{dish.desc}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="heritage" className="mt-0">
              <div className="grid gap-14 md:grid-cols-2">
                <div>
                  <h3 className="text-ink">Building styles by district</h3>
                  <dl className="mt-6">
                    {integrationData.architectural.map((d) => (
                      <div key={d.district} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-limestone py-4">
                        <dt className="font-semibold text-ink">{d.district}</dt>
                        <dd className="text-pretty text-ink-soft">{d.style}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="text-ink">Archaeology under the city</h3>
                  <p className="mt-4 text-pretty leading-[1.75] text-ink-soft">
                    Building work in Alexandria often runs into the ancient city, so construction is
                    monitored and finds are excavated before work continues. Underwater teams map the
                    harbours with:
                  </p>
                  <dl className="mt-4">
                    {integrationData.archaeology.methods.map((m) => (
                      <div key={m.label} className="grid grid-cols-[10rem_1fr] gap-4 border-t border-limestone py-3">
                        <dt className="font-semibold text-ink">{m.label}</dt>
                        <dd className="text-ink-soft">{m.desc}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="culture" className="mt-0">
              <h3 className="text-ink">{culture2025.title}</h3>
              <div className="mt-6 grid gap-12 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-ink">Themes</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
                    {culture2025.themes.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="mt-8 font-semibold text-ink">Partnership with Tirana</p>
                  <p className="mt-2 text-pretty leading-[1.75] text-ink-soft">{culture2025.tirana}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">Main initiatives</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
                    {culture2025.initiatives.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
