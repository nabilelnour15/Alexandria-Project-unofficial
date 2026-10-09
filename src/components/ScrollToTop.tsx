import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_WAIT_MS = 2500;

export default function ScrollToTop() {
    const { pathname, hash, key } = useLocation();
    const prevPath = useRef<string | null>(null);

    // Runs on every navigation (location.key), so same-hash links re-scroll too.
    useEffect(() => {
        const pathChanged = prevPath.current !== null && prevPath.current !== pathname;
        prevPath.current = pathname;
        let raf = 0;

        if (!hash) {
            window.scrollTo(0, 0);
            if (pathChanged) {
                // Move focus to the new page after it has rendered.
                raf = requestAnimationFrame(() => {
                    document.getElementById('main-content')?.focus({ preventScroll: true });
                });
            }
            return () => cancelAnimationFrame(raf);
        }

        // Hash: wait for the lazy page to render the target, then scroll and focus it.
        let id = hash.slice(1);
        try {
            id = decodeURIComponent(id);
        } catch {
            /* keep raw id */
        }
        if (!id) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const start = performance.now();

        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
                if (!el.hasAttribute('tabindex')) {
                    el.setAttribute('tabindex', '-1');
                    el.style.outline = 'none';
                }
                el.focus({ preventScroll: true });
                return;
            }
            if (performance.now() - start < MAX_WAIT_MS) {
                raf = requestAnimationFrame(tryScroll);
            }
        };
        raf = requestAnimationFrame(tryScroll);

        return () => cancelAnimationFrame(raf);
    }, [key, pathname, hash]);

    return null;
}
