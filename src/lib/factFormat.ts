import { LAST_REVIEWED } from '../data/facts';

import { formatDate } from './dates';

export { monthName } from './dates';

/**
 * Formats a "YYYY" or "YYYY-MM" date as "2013" or "October 2026".
 * Pass `short` for "Oct 2026".
 */
export const formatFactDate = (value: string, short = false): string => formatDate(value, short);

/** "October 2026" */
export const LAST_REVIEWED_LABEL = formatFactDate(LAST_REVIEWED);

export const REPORT_ISSUE_URL =
  'https://github.com/nabilelnour15/Alexandria-Project-unofficial/issues/new';

/** Opens the "Suggest a place or event" issue form (.github/ISSUE_TEMPLATE/suggest-listing.yml). */
export const SUGGEST_LISTING_URL = `${REPORT_ISSUE_URL}?template=suggest-listing.yml`;
