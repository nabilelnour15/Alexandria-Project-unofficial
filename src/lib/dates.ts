/** "2026" */
export type Year = `${number}`;
/** "2026-10" */
export type YearMonth = `${number}-${number}`;
/** "2026-10-08" */
export type IsoDate = `${number}-${number}-${number}`;

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

/** Month number (1–12) to its English name; '' when out of range. */
export const monthName = (month: number): string => MONTHS[month - 1] ?? '';

/**
 * Formats "YYYY", "YYYY-MM" or "YYYY-MM-DD" as "2013", "October 2026" or "8 October 2026"
 * (`short`: "Oct 2026", "8 Oct 2026"). A malformed value is returned unchanged.
 */
export function formatDate(value: string, short = false): string {
  const match = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(value);
  if (!match) return value;
  const [, year, month, day] = match;
  if (!month) return year;
  const name = monthName(Number(month));
  if (!name) return value;
  const label = short ? name.slice(0, 3) : name;
  return day ? `${Number(day)} ${label} ${year}` : `${label} ${year}`;
}
