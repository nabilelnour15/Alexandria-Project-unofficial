/** Lower-case, accent-free text for search. Arabic is left as it is. */
export const fold = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/ø/gi, 'o').toLowerCase();
