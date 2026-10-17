export default function VisitHelp() {
  return (
    <section aria-labelledby="help-title" className="bg-white pb-20 md:pb-28">
      <div className="alex-container">
        <div className="max-w-3xl border-l-2 border-gold pl-6">
          <h2 id="help-title" className="text-3xl text-ink">
            Need help?
          </h2>
          <p className="mt-3 max-w-[65ch] text-pretty leading-[1.75] text-ink-soft">
            The Egyptian Tourist Authority has offices at Raml Station, Misr Railway Station, and Borg El Arab
            Airport. Dial{' '}
            <a
              href="tel:19654"
              className="font-semibold tabular-nums text-sea underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              19654
            </a>{' '}
            for the tourist police in an emergency.
          </p>
        </div>
      </div>
    </section>
  );
}
