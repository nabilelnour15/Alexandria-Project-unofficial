import type { ImageCredit } from '@/data/imageCredit';

const LINK = 'rounded-sm underline underline-offset-2 hover:text-ink';

/** "Photo: author, licence", each linked. Same style as the news photo credit. */
export default function PhotoCredit({ credit, className = '' }: { credit?: ImageCredit; className?: string }) {
  if (!credit) return null;
  return (
    <p className={`text-xs leading-snug text-ink-soft ${className}`}>
      Photo:{' '}
      <a href={credit.source} target="_blank" rel="noopener noreferrer" className={LINK}>
        {credit.author}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      ,{' '}
      {credit.licenseUrl ? (
        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
          {credit.license}
          <span className="sr-only"> licence (opens in a new tab)</span>
        </a>
      ) : (
        credit.license
      )}
    </p>
  );
}
