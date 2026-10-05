/** Credit for a freely licensed photo; shown under the image (CC BY and BY-SA require it). */
export interface ImageCredit {
  readonly author: string;
  readonly license: string;
  readonly licenseUrl?: string;
  /** Page the photo came from (Wikimedia Commons file page). */
  readonly source: string;
}
