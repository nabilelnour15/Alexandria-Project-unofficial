import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import PhotoCredit from '@/components/PhotoCredit';
import SourceChip from '@/components/SourceChip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ImageCredit } from '@/data/imageCredit';
import { investData } from '@/data/investData';

const TABS = [
  { id: 'freezone', label: 'Free zone' },
  { id: 'ports', label: 'Ports' },
  { id: 'drivers', label: 'Key sectors' },
  { id: 'raw', label: 'Raw materials' },
  { id: 'laws', label: 'Laws and incentives' },
];

const imgClass = 'w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/10';

/** Image beside text, separated from the next entry by a hairline. */
function Entry({
  image,
  alt,
  title,
  credit,
  children,
}: {
  image: string;
  alt: string;
  title: string;
  credit?: ImageCredit;
  children: ReactNode;
}) {
  return (
    <article className="grid gap-6 border-t border-limestone py-10 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-10">
      <div>
        <img loading="lazy" decoding="async" src={image} alt={alt} className={`aspect-[4/3] ${imgClass}`} />
        <PhotoCredit credit={credit} className="mt-1.5" />
      </div>
      <div>
        <h3 className="text-ink">{title}</h3>
        <div className="mt-3 max-w-[65ch] space-y-3 text-pretty leading-[1.75] text-ink-soft">{children}</div>
      </div>
    </article>
  );
}

export default function InvestSections() {
  const { publicFreeZone, ports, investmentDrivers, rawMaterials, investmentLaws } = investData;

  return (
    <Tabs defaultValue="freezone">
      <TabsList
        aria-label="Investment topics"
        className="h-auto w-full justify-start gap-1 overflow-x-auto overflow-y-hidden rounded-none border-b border-limestone bg-transparent p-0"
      >
        {TABS.map((t) => (
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
        <TabsContent value="freezone" className="mt-0">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h3 className="text-ink">{publicFreeZone.title}</h3>
              <p className="mt-4 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
                {publicFreeZone.description}
                <SourceChip factId={publicFreeZone.factId} className="ml-1 text-ink-soft" />
              </p>
              <p className="mt-4 border-l-2 border-gold pl-4 font-semibold text-ink">{publicFreeZone.stats}</p>
              <h4 className="mt-10 text-xl text-ink">Businesses based there</h4>
              <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                {publicFreeZone.businesses.map((biz) => (
                  <li key={biz} className="border-t border-limestone py-3 text-ink-soft">
                    {biz}
                  </li>
                ))}
              </ul>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/images/containers.jpeg"
              alt="Shipping containers stacked at a port terminal"
              className={`aspect-[4/5] md:col-span-5 ${imgClass}`}
            />
          </div>
        </TabsContent>

        <TabsContent value="ports" className="mt-0">
          {ports.map((port) => (
            <Entry key={port.name} image={port.image} alt={port.name} title={port.name}>
              <p className="text-ink">
                {port.description}
                {port.factId && <SourceChip factId={port.factId} className="ml-1 text-ink-soft" />}
              </p>
              {port.link && (
                <a
                  href={port.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 font-semibold text-sea underline underline-offset-4 transition-colors hover:text-ink"
                >
                  Port authority website
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </Entry>
          ))}
        </TabsContent>

        <TabsContent value="drivers" className="mt-0">
          {investmentDrivers.map((d) => {
            const tags = d.sectors ?? d.types;
            return (
              <Entry key={d.title} image={d.image} alt="" title={d.title} credit={d.credit}>
                <p className="text-ink">
                  {d.description}
                  {d.factId && <SourceChip factId={d.factId} className="ml-1 text-ink-soft" />}
                </p>
                {tags && (
                  <p>
                    <span className="font-semibold text-ink">{d.sectors ? 'Sectors: ' : 'Types: '}</span>
                    {tags.join(', ')}
                  </p>
                )}
              </Entry>
            );
          })}
        </TabsContent>

        <TabsContent value="raw" className="mt-0">
          {rawMaterials.map((mat) => (
            <Entry key={mat.name} image={mat.image} alt="" title={mat.name} credit={mat.credit}>
              <p className="text-ink">
                {mat.location}, {mat.region}
              </p>
              {mat.description && <p>{mat.description}</p>}
              {mat.uses && (
                <p>
                  <span className="font-semibold text-ink">Applications: </span>
                  {mat.uses}
                </p>
              )}
              {mat.industries && (
                <>
                  <p className="font-semibold text-ink">Industries</p>
                  <ul className="list-disc space-y-1 pl-5">
                    {mat.industries.map((ind) => (
                      <li key={ind}>{ind}</li>
                    ))}
                  </ul>
                </>
              )}
            </Entry>
          ))}
        </TabsContent>

        <TabsContent value="laws" className="mt-0">
          <div className="max-w-3xl">
            <div>
              <h3 className="text-ink">Legal protections and incentives</h3>
              <ul className="mt-6">
                {investmentLaws.provisions.map((law) => {
                  const text = typeof law === 'string' ? law : law.text;
                  return (
                    <li key={text} className="border-t border-limestone py-3 text-ink first:border-t-2 first:border-gold">
                      {text}
                      {typeof law !== 'string' && <SourceChip factId={law.factId} className="ml-1 text-ink-soft" />}
                    </li>
                  );
                })}
              </ul>
              <h4 className="mt-12 text-xl text-ink">Sectors covered by the law</h4>
              <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                {investmentLaws.fields.map((f) => (
                  <li key={f} className="border-t border-limestone py-3 text-ink-soft">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
