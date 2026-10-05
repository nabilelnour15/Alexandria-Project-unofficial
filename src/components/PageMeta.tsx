const SITE_SUFFIX = 'Alexandria Digital Gateway (unofficial)';

/**
 * Per-page document metadata. React 19 hoists <title> and <meta> into <head>.
 */
export default function PageMeta({
  title,
  description,
}: {
  title?: string;
  description: string;
}) {
  const fullTitle = title ? `${title} — ${SITE_SUFFIX}` : SITE_SUFFIX;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </>
  );
}
