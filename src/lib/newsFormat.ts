import type { NewsItem } from '../data/newsData';
import { formatDate } from './dates';
import { newsImages, type NewsImage } from '../data/newsImages';

/** "2026-09-08" -> "8 September 2026"; a malformed date is returned as is. */
export const longDate = (date: string): string => formatDate(date);

/** "2026-09-08" -> "8 Sep 2026"; a malformed date is returned as is. */
export const shortDate = (date: string): string => formatDate(date, true);

export const postPath = (item: NewsItem) => `/news/${item.id}`;

export const imageFor = (item: NewsItem): NewsImage | undefined =>
  item.image ? newsImages[item.image] : undefined;

export const LANGUAGE_NAME: Record<NonNullable<NewsItem['lang']>, string> = {
  ar: 'Arabic',
  fr: 'French',
};
