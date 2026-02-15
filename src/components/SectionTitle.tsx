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
      className={`font-['Montserrat'] text-3xl md:text-5xl font-black mb-4 ${light ? "text-white" : "text-[#0d1623]"}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`${light ? "text-white/70" : "text-[#5d6c7b]"} text-lg max-w-3xl leading-relaxed`}
      >
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1.5 bg-[#0068c8] rounded-full mt-6" />
  </div>
);
