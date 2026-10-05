import { governorData } from '@/data/governorData';

/** "2026-10" -> "October 2026". */
export const asOfLabel = (() => {
  const [year, month] = governorData.asOf.split('-').map(Number);
  return new Date(year, month - 1).toLocaleString('en-GB', { month: 'long', year: 'numeric' });
})();
