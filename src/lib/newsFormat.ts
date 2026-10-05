import type { NewsItem } from '../data/newsData';
import { newsImages, type NewsImage } from '../data/newsImages';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const parts = (date: string) => ({
  day: Number(date.slice(8, 10)),
  month: MONTHS[Number(date.slice(5, 7)) - 1] ?? '',
  year: date.slice(0, 4),
});

/** "2026-09-08" -> "8 September 2026" */
export function longDate(date: string): string {
  const { day, month, year } = parts(date);
  return `${day} ${month} ${year}`;
}

/** "2026-09-08" -> "8 Sep 2026" */
export function shortDate(date: string): string {
  const { day, month, year } = parts(date);
  return `${day} ${month.slice(0, 3)} ${year}`;
}

export const postPath = (item: NewsItem) => `/news/${item.id}`;

export const imageFor = (item: NewsItem): NewsImage | undefined =>
  item.image ? newsImages[item.image] : undefined;

export const LANGUAGE_NAME: Record<NonNullable<NewsItem['lang']>, string> = {
  ar: 'Arabic',
  fr: 'French',
};
