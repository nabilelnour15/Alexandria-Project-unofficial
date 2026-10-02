export const SectionTitle = ({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-12">
    <h2
      className={`mb-4 ${light ? "text-white" : "text-ink"}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`${light ? "text-white/70" : "text-ink-soft"} text-lg max-w-[65ch] leading-relaxed`}
      >
        {subtitle}
      </p>
    )}
    <div aria-hidden="true" className="w-16 h-0.5 bg-gold mt-6" />
  </div>
);
