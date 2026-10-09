import { fullTitle, pageMeta, type PagePath } from '../data/pageMeta';

type PageMetaProps = ({ path: PagePath } | { title?: string; description: string }) & {
  /** e.g. "noindex" */
  robots?: string;
};

/**
 * Per-page document metadata. React 19 hoists <title> and <meta> into <head>.
 * Routes in `pageMeta` pass their `path`; share tags for them are written at build time.
 */
export default function PageMeta(props: PageMetaProps) {
  const { title, description } =
    'path' in props ? { title: undefined, ...pageMeta[props.path] } : props;

  return (
    <>
      <title>{fullTitle(title)}</title>
      <meta name="description" content={description} />
      {props.robots && <meta name="robots" content={props.robots} />}
    </>
  );
}
