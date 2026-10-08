import { useSearchParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Services from '../sections/Services';
import Community from '../sections/Community';
import GettingAround from '../sections/GettingAround';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TABS = [
  { id: 'services', label: 'Services' },
  { id: 'community', label: 'Community' },
  { id: 'getting-around', label: 'Getting around' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const isTab = (value: string | null): value is TabId => TABS.some((t) => t.id === value);

export default function LivePage() {
  const [params, setParams] = useSearchParams();
  const raw = params.get('tab');
  const tab: TabId = isTab(raw) ? raw : 'services';

  const onTabChange = (next: string) => {
    // A new tab starts unfiltered, so drop the services category too.
    setParams(next === 'services' ? {} : { tab: next }, { replace: true });
  };

  return (
    <div className="bg-white pt-20">
      <PageMeta path="/live" />

      <header className="wall-of-scripts relative bg-ink py-16 text-white md:py-20">
        <div className="alex-container">
          <p lang="ar" dir="rtl" className="text-left text-2xl text-white/70">
            الحياة في الإسكندرية
          </p>
          <h1 className="mt-2 text-[clamp(2.75rem,1.5rem+5vw,5.5rem)] leading-[0.95] tracking-tight text-white">
            Living in Alexandria
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            Where to go for everyday services, what's on through the year, and how to get around.
          </p>
        </div>
      </header>

      <div className="alex-container py-12">
        <Tabs value={tab} onValueChange={onTabChange}>
          <TabsList
            aria-label="Living in Alexandria"
            className="mb-12 h-auto w-full justify-start gap-1 overflow-x-auto overflow-y-hidden rounded-none border-b border-limestone bg-transparent p-0"
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

          <TabsContent value="services">
            <h2 className="sr-only">Services</h2>
            <Services />
          </TabsContent>
          <TabsContent value="community">
            <Community />
          </TabsContent>
          <TabsContent value="getting-around">
            <GettingAround />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
