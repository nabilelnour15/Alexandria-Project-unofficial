import { Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stand-in for the governor's portrait until a credited official or press
 * photo is added (see docs/image-prompts.md). Never replace it with an
 * AI-generated likeness.
 */
export default function PortraitPlaceholder({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "w-full max-w-[16rem] aspect-[4/5] rounded-lg border border-sea/15 bg-sea-mist",
        "flex flex-col items-center justify-center gap-4 px-6 text-center",
        className,
      )}
    >
      <Landmark className="w-10 h-10 text-sea" strokeWidth={1.5} aria-hidden="true" />
      <figcaption className="text-sm text-ink-soft">Portrait to be added (credited photo)</figcaption>
    </figure>
  );
}
