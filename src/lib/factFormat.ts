import { LAST_REVIEWED } from '../data/facts';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Formats a "YYYY" or "YYYY-MM" date as "2013" or "October 2026".
 * Pass `short` for "Oct 2026".
 */
export function formatFactDate(value: string, short = false): string {
  const match = /^(\d{4})(?:-(\d{2}))?$/.exec(value);
  if (!match) return value;
  const [, year, month] = match;
  if (!month) return year;
  const name = MONTHS[Number(month) - 1];
  if (!name) return year;
  return `${short ? name.slice(0, 3) : name} ${year}`;
}

/** "October 2026" */
export const LAST_REVIEWED_LABEL = formatFactDate(LAST_REVIEWED);

export const REPORT_ISSUE_URL =
  'https://github.com/nabilelnour15/Alexandria-Project-unofficial/issues/new';
