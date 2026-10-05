import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_WAIT_MS = 2500;

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    // Pathname change without a hash: back to the top.
    useEffect(() => {
        if (!hash) window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Hash: wait for the lazy page to render the target, then scroll and focus it.
    useEffect(() => {
        if (!hash) return;

        let id = hash.slice(1);
        try {
            id = decodeURIComponent(id);
        } catch {
            /* keep raw id */
        }
        if (!id) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const start = performance.now();
        let raf = 0;

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
    }, [pathname, hash]);

    return null;
}
