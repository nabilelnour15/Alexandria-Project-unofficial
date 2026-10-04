import { governorData } from '@/data/governorData';
import { asOfLabel } from './asOfLabel';
import SourceList from './SourceList';

export default function Sources() {
  return (
    <section id="sources" aria-labelledby="sources-title" className="scroll-mt-28 bg-white py-20 md:py-28">
      <div className="alex-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="sources-title" className="text-ink">
            Sources
          </h2>
          <p className="mt-4 text-pretty text-ink-soft">
            Information as of <span className="font-semibold text-ink">{asOfLabel}</span>. Offices change, so check
            current news before relying on this page.
          </p>
        </div>
        <SourceList
          links={governorData.sources}
          className="space-y-0 text-ink-soft lg:col-span-8 [&>li]:border-b [&>li]:border-limestone [&>li]:py-3"
        />
      </div>
    </section>
  );
}
