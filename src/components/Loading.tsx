/**
 * Suspense fallback for lazily loaded pages. Pure CSS (no framer-motion), so it
 * adds nothing heavy to the entry chunk. It fades in after a short delay, so
 * fast chunk loads never flash a spinner.
 *
 * `dark` is for routes whose navbar is transparent over a dark hero: the
 * fallback then fills the screen in ink, so the white navbar text stays legible.
 */
const Loading = ({ dark = false }: { dark?: boolean }) => (
  <div
    role="status"
    className={`flex items-center justify-center pt-20 animate-in fade-in-0 fill-mode-both duration-300 delay-200 motion-reduce:animate-none ${
      dark ? 'min-h-screen bg-ink' : 'min-h-[60vh] bg-background'
    }`}
  >
    <div className="flex flex-col items-center gap-4">
      <div
        aria-hidden="true"
        className={`w-12 h-12 rounded-full border-4 border-t-transparent animate-spin motion-reduce:animate-none ${
          dark ? 'border-papyrus/80' : 'border-primary'
        }`}
      />
      <p className={`text-sm font-semibold ${dark ? 'text-papyrus' : 'text-primary'}`}>Alexandria</p>
      <span className="sr-only">Loading page…</span>
    </div>
  </div>
);

export default Loading;
