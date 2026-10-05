/** Section anchors on the /experience page; the tram progress rail stops at each. */
export const stations = [
  { id: 'xp-harbour', label: 'Harbour' },
  { id: 'xp-layers', label: 'Layered city' },
  { id: 'xp-corniche', label: 'Corniche' },
  { id: 'xp-future', label: 'Future lines' },
  { id: 'xp-scripts', label: 'Wall of scripts' },
] as const;

export type StationId = (typeof stations)[number]['id'];
