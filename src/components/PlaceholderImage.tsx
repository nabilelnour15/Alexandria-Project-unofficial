export const PlaceholderImage = ({
  text = "Image Placeholder",
  className = "",
  src,
  alt,
}: {
  text?: string;
  className?: string;
  src?: string;
  alt?: string;
}) => (
  <div
    className={`w-full bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}
  >
    {src ? (
      // Render a real image when `src` is provided. It fills the container preserving rounded corners.
      <img
        src={src}
        alt={alt ?? text}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      // Original placeholder visuals
      <>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <span className="text-white/20 text-xs font-bold uppercase tracking-widest">
          {text}
        </span>
      </>
    )}
  </div>
);
