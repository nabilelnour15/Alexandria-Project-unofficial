import { Component, type ErrorInfo, type ReactNode } from 'react';

const RELOAD_FLAG = 'alex:chunk-reload';

function isChunkError(error: unknown): boolean {
  const e = error as { name?: string; message?: string } | null;
  const text = `${e?.name ?? ''} ${e?.message ?? ''}`;
  return /ChunkLoadError|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
    text,
  );
}

type Props = {
  children: ReactNode;
  /** Render nothing on failure (for optional lazy widgets). */
  silent?: boolean;
};

export default class RouteErrorBoundary extends Component<Props, { error: Error | null }> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (!this.props.silent && isChunkError(error)) {
      let already = false;
      try {
        already = sessionStorage.getItem(RELOAD_FLAG) === '1';
        if (!already) sessionStorage.setItem(RELOAD_FLAG, '1');
      } catch {
        already = true; // storage unavailable: don't risk a reload loop
      }
      if (!already) {
        window.location.reload();
        return;
      }
    }
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    if (this.props.silent) return null;
    return (
      <div role="alert" className="alex-container flex min-h-[60vh] items-center justify-center pt-28 pb-20">
        <div className="max-w-md rounded-lg border border-limestone bg-papyrus p-8 text-center">
          <h1 className="mb-3 text-ink">Couldn't load this page</h1>
          <p className="mb-6 text-ink-soft">
            Something went wrong while loading this page. Reloading usually fixes it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-sea px-5 py-2.5 font-semibold text-white transition-colors hover:bg-sea-deep"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}
