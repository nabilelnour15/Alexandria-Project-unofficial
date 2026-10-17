import SourceChip from '@/components/SourceChip';

export default function VisitHelp() {
  return (
    <section aria-labelledby="help-title" className="bg-white pb-20 md:pb-28">
      <div className="alex-container">
        <div className="max-w-3xl border-l-2 border-gold pl-6">
          <h2 id="help-title" className="text-3xl text-ink">
            Need help?
          </h2>
          <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
            For questions or complaints about sites and museums, the Ministry of Tourism and Antiquities runs a
            hotline on{' '}
            <a
              href="tel:19654"
              className="font-semibold tabular-nums text-sea underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              19654
            </a>{' '}
            (daily, 9:00–17:00).
            <SourceChip factId="tourismHotline" className="ml-1" />
          </p>
        </div>
      </div>
    </section>
  );
}
