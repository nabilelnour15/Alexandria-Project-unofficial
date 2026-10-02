import { Sparkles } from 'lucide-react';

/** Overlay label for AI-generated concept images. Place inside a `relative` image box. */
export default function ConceptBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none inline-flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm ${className}`}
    >
      <Sparkles className="w-3 h-3 shrink-0" aria-hidden="true" />
      Concept illustration — AI-generated
    </span>
  );
}
