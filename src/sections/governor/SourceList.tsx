import { cn } from '@/lib/utils';
import type { SourceLink } from '@/data/governorData';

export default function SourceList({ links, className }: { links: SourceLink[]; className?: string }) {
  return (
    <ul className={cn('space-y-1.5', className)}>
      {links.map((source) => (
        <li key={source.url}>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-words rounded-sm underline underline-offset-2 transition-colors hover:text-sea"
          >
            {source.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
