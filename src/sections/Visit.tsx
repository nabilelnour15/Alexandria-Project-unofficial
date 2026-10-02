import { lazy, Suspense } from 'react';
import { 
  Thermometer, MapPin, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  climateData, transportTabs, attractionCategories, 
  activitiesData, diningData, accommodationData 
} from '../data/visitData';
import SourceChip from '../components/SourceChip';

const ClimateChart = lazy(() => import('./ClimateChart'));
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-ink mb-3">{title}</h2>
    {subtitle && <p className="text-ink-soft text-lg">{subtitle}</p>}
    <div className="w-20 h-1 bg-sea rounded-full mt-4" />
  </div>
);

export default function Visit({ isTeaser = false }: { isTeaser?: boolean }) {

  if (isTeaser) {
    return (
      <section className="alex-section bg-white">
        <div className="alex-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="alex-section-tag mb-4 inline-block">Plan your visit</span>
              <h2 className="text-ink mb-4">
                Explore Alexandria
              </h2>
              <p className="text-ink-soft text-lg">
                Ancient sites, museums, beaches and the Corniche, with tips on
                getting around, eating and where to stay.
              </p>
            </div>
            <Link to="/visit" className="alex-btn-primary group inline-flex items-center">
              View the full guide
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {attractionCategories.find(c => c.id === 'historical')?.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl border border-limestone/70 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    loading="lazy"
                    decoding="async"
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.target as HTMLImageElement).src = '/images/hero-bg.jpg'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-ink group-hover:text-sea transition-colors">{item.name}</h3>
                    {item.factId && <SourceChip factId={item.factId} className="shrink-0 mt-1 text-ink-soft" />}
                  </div>
                  <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sea">
          <img
            src="/images/Alexandria-Bibliotheca-interior.jpg"
            alt="The reading hall of the Bibliotheca Alexandrina"
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="mb-6">
            Plan your journey
          </h1>
          <p className="text-xl text-white">
            When to go, how to get around, what to see and where to stay
          </p>
        </div>
      </section>

      <div className="alex-container py-16 space-y-24">
        {/* Intro & Climate Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Climate and orientation"
                subtitle="When to go and what to expect"
              />
              <p className="text-ink-soft leading-relaxed mb-6">
                {climateData.description}
              </p>

              <div className="bg-limestone-wash p-6 rounded-lg border border-limestone/70">
                <h3 className="text-ink mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sea" /> Orientation
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Alexandria is a ribbon city, stretching along the coast.
                  The <strong>Corniche</strong> is its lifeline. Almost all
                  sights and hotels are along this strip. Transport is funnelled
                  here, making taxis and buses easy to find.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-limestone/70 overflow-hidden flex flex-col">
              <div className="p-6 bg-sea text-white flex justify-between items-center">
                <h3 className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5" /> Climate
                </h3>
                <span className="text-xs text-white bg-white/10 px-2 py-1 rounded">
                  Source: WMO
                </span>
              </div>
              <div className="p-6 flex-grow min-h-[350px] flex flex-col">
                {/* recharts is heavy; load it only when this chart renders */}
                <Suspense
                  fallback={
                    <div
                      aria-hidden="true"
                      className="flex-grow min-h-[302px] rounded-xl bg-limestone-wash animate-pulse"
                    />
                  }
                >
                  <ClimateChart />
                </Suspense>
              </div>
              <div className="px-6 py-4 bg-limestone-wash border-t border-limestone/70 flex gap-4 text-xs text-ink-soft justify-center">
                <div className="flex items-center gap-1">
                  <Info className="w-3 h-3" /> Average high, low and
                  precipitation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Section */}
        <section>
          <SectionHeader title="Getting there and around" />
          <Tabs defaultValue="get-in" className="flex flex-col md:flex-row gap-8">
            <TabsList
              aria-label="Transport options"
              className="md:w-1/4 w-full h-auto items-stretch justify-start bg-transparent p-0 rounded-none flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0"
            >
              {transportTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex-none h-auto justify-start border-0 px-6 py-4 rounded-xl text-left text-base font-bold transition-all whitespace-nowrap md:whitespace-normal bg-limestone-wash text-ink-soft hover:bg-sea-mist data-[state=active]:bg-sea data-[state=active]:hover:bg-sea data-[state=active]:text-white data-[state=active]:shadow-lg"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {transportTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="md:w-3/4">
              <div className="grid md:grid-cols-2 gap-6">
                {tab.content.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.type}
                        className="bg-white p-6 rounded-lg border border-limestone/70 hover:shadow-md transition-shadow"
                      >
                        <div className="w-10 h-10 bg-sea-mist rounded-full flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-sea" />
                        </div>
                        <h4 className="text-ink mb-2">
                          {item.type}
                        </h4>
                        <p className="text-sm text-ink-soft">
                          {item.description}
                          {"factId" in item && item.factId && (
                            <SourceChip factId={item.factId} className="ml-1" />
                          )}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Attractions Section */}
        <section>
          <SectionHeader
            title="Things to see"
            subtitle="Historical monuments, museums and modern landmarks"
          />

          <Tabs defaultValue="historical" className="gap-0">
          <TabsList
            aria-label="Attraction categories"
            className="flex flex-wrap h-auto w-full justify-start bg-transparent p-0 rounded-none gap-3 mb-8"
          >
            {attractionCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex-none h-auto flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium transition-all border border-limestone text-ink-soft hover:border-ink hover:text-ink data-[state=active]:bg-ink data-[state=active]:border-ink data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {attractionCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border border-limestone/70 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = "/images/hero-bg.jpg")
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-bold text-white bg-ink/70 px-2 py-1 rounded mb-2 inline-block">
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start gap-2 mb-4">
                      <h3 className="text-ink group-hover:text-sea transition-colors">
                        {item.name}
                      </h3>
                      {"factId" in item && item.factId && (
                        <SourceChip factId={item.factId} className="shrink-0 mt-1.5 text-ink-soft" />
                      )}
                    </div>
                    <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </TabsContent>
          ))}
          </Tabs>
        </section>

        {/* Lifestyle Grid (Do, Buy, Learn) */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitiesData.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="bg-limestone-wash p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-sea" />
                    <h3 className="text-ink">
                      {activity.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {activity.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-ink-soft flex items-start gap-2"
                      >
                        <span className="text-sea text-lg leading-none">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dining & Sleeping */}
        <section className="grid lg:grid-cols-2 gap-12">
          {/* Dining */}
          <div>
            <SectionHeader title="Eat and drink" />
            <div className="space-y-6">
              {Object.entries(diningData).map(([key, items]) => (
                <div key={key}>
                  <h4 className="text-sea text-sm mb-3 font-sans font-semibold">
                    {key === "midRange" ? "Mid-range" : key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  <div className="space-y-3">
                    {items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-baseline border-b border-limestone/70 pb-2 last:border-0"
                      >
                        <span className="font-medium text-ink">
                          {item.name}
                        </span>
                        <span className="text-sm text-ink-soft text-right ml-4 w-1/2">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sleeping */}
          <div>
            <SectionHeader title="Where to stay" />
            <div className="space-y-6">
              {accommodationData.map((category) => (
                <div key={category.category}>
                  <h4 className="text-sea text-sm mb-3 font-sans font-semibold">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.options.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-baseline border-b border-limestone/70 pb-2 last:border-0"
                      >
                        <span className="font-medium text-ink">
                          {item.name}
                        </span>
                        <span className="text-sm text-ink-soft text-right ml-4 w-1/2">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tourist Offices */}
        <section className="bg-ink text-white p-8 md:p-12 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="mb-2">Need help?</h3>
              <p className="text-white/70 max-w-xl">
                The Egyptian Tourist Authority has offices at Raml Station, Misr
                Railway Station, and Borg El Arab Airport. Dial{" "}
                <span className="text-seaglass font-mono">19654</span> for
                tourist police emergency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
