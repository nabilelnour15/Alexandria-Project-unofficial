import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { Info, ExternalLink } from 'lucide-react';
import { facts, type Confidence, type FactId } from '../data/facts';
import { formatFactDate } from '../lib/factFormat';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const CONFIDENCE_STYLES: Record<Confidence, string> = {
  Official: 'bg-seaglass/15 text-ink border-seaglass/50',
  Reported: 'bg-sea-mist text-sea border-sea/15',
  Estimate: 'bg-terracotta/10 text-terracotta border-terracotta/25',
};

const CONFIDENCE_HELP: Record<Confidence, string> = {
  Official: 'Published by the responsible public body or lender',
  Reported: 'From credible press or a secondary source',
  Estimate: 'Derived by this site from listed figures',
};

const HOVER_OPEN_DELAY = 250;
const HOVER_CLOSE_DELAY = 150;

const isMouse = (e: ReactPointerEvent) => e.pointerType === 'mouse';

/**
 * A small "Source" control shown next to a figure. Click or tap it (or press
 * Enter/Space) to pin a popover with the source, its "as of" date and a
 * confidence label; with a mouse, hovering previews it after a short delay.
 *
 * Built on Radix Popover: it portals to <body> and flips/shifts to stay on
 * screen, Escape closes only the popover (not an enclosing dialog), and clicks
 * inside it never count as "outside" for the popover or a parent dialog.
 */
export default function SourceChip({
  factId,
  className = '',
  iconOnly = false,
}: {
  factId: FactId;
  className?: string;
  /** Hide the "Source" text and show only the icon (for very tight spots). */
  iconOnly?: boolean;
}) {
  const fact = facts[factId];
  const [open, setOpen] = useState(false);
  // Pinned = opened by click/tap/keyboard; it stays open until dismissed.
  const [pinned, setPinned] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const clearTimer = () => window.clearTimeout(timer.current);

  const hoverOpen = (e: ReactPointerEvent) => {
    clearTimer();
    if (!isMouse(e) || open) return;
    timer.current = window.setTimeout(() => setOpen(true), HOVER_OPEN_DELAY);
  };

  const hoverClose = (e: ReactPointerEvent) => {
    if (!isMouse(e) || pinned) return;
    clearTimer();
    timer.current = window.setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY);
  };

  const onOpenChange = (next: boolean) => {
    clearTimer();
    setOpen(next);
    if (!next) setPinned(false);
  };

  const isExternal = /^https?:\/\//.test(fact.source.url);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <span className={`relative z-10 inline-flex align-middle ${className}`}>
        <PopoverTrigger
          type="button"
          aria-label={`Source for ${fact.label}`}
          onPointerEnter={hoverOpen}
          onPointerLeave={hoverClose}
          onClick={(e) => {
            // Handle the toggle here (instead of Radix) so a click on a
            // hover-previewed popover pins it rather than closing it.
            e.preventDefault();
            e.stopPropagation();
            clearTimer();
            if (open && pinned) {
              onOpenChange(false);
            } else {
              setOpen(true);
              setPinned(true);
            }
          }}
          className="inline-flex items-center gap-0.5 min-h-6 min-w-6 justify-center rounded px-1.5 py-0.5 -my-1 text-xs font-semibold leading-none whitespace-nowrap cursor-help"
        >
          <Info className="w-3 h-3 shrink-0" aria-hidden="true" />
          {!iconOnly && <span>Source</span>}
        </PopoverTrigger>
      </span>

      <PopoverContent
        aria-label={`Source for ${fact.label}`}
        onPointerEnter={(e) => {
          if (isMouse(e)) clearTimer();
        }}
        onPointerLeave={hoverClose}
        // A hover preview must not steal focus, or hand it back on close.
        onOpenAutoFocus={(e) => {
          if (!pinned) e.preventDefault();
        }}
        onCloseAutoFocus={(e) => {
          if (!pinned) e.preventDefault();
        }}
        // Portalled content still bubbles through the React tree; keep clicks
        // from reaching handlers around the chip (e.g. a clickable card).
        onClick={(e) => e.stopPropagation()}
        className="text-left text-xs font-normal normal-case tracking-normal leading-snug text-ink-soft"
      >
        <p className="mb-1.5 font-semibold text-ink">{fact.label}</p>
        <p className="mb-2">
          <span className="text-ink-soft">Source: </span>
          {isExternal ? (
            <a
              href={fact.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sea underline underline-offset-2 hover:text-ink rounded-sm break-words"
            >
              {fact.source.label}
              <ExternalLink className="ml-0.5 inline w-3 h-3 align-[-2px]" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span>{fact.source.label}</span>
          )}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-ink-soft">As of {formatFactDate(fact.asOf, true)}</span>
          <span
            title={CONFIDENCE_HELP[fact.confidence]}
            className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${CONFIDENCE_STYLES[fact.confidence]}`}
          >
            {fact.confidence}
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
