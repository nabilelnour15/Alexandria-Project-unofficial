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
            Airport. Dial <span className="font-semibold tabular-nums text-ink">19654</span> for tourist police
            emergency.
          </p>
        </div>
      </div>
    </section>
  );
}
