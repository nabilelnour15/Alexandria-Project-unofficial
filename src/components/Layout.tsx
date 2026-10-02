import { Suspense, lazy, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Info, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Loading from './Loading';
import { useDisclaimer } from '../lib/disclaimer';

// The first-visit dialog (and Radix Dialog with it) is only fetched when shown.
const DisclaimerPopup = lazy(() => import('./DisclaimerPopup'));

// Pages whose hero is dark, so the navbar stays transparent until scrolled.
const TRANSPARENT_NAV_PATHS = ['/', '/about', '/invest'];

/** Shared by the banner and the spacer below, so they always match. */
const DISCLAIMER_BANNER_HEIGHT = 'h-12 sm:h-9';

/**
 * Slim disclaimer shown on return visits. Rendered inside the fixed navbar
 * so it never overlaps it.
 */
function DisclaimerBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      role="region"
      aria-label="Site disclaimer"
      className={`${DISCLAIMER_BANNER_HEIGHT} bg-ink text-white/90 text-xs sm:text-sm border-l-4 border-tram`}
    >
      <div className="alex-container h-full flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 leading-snug">
          <Info className="w-4 h-4 shrink-0 text-tram" aria-hidden="true" />
          <span>Unofficial fan project — not affiliated with the Alexandria Governorate.</span>
        </p>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss disclaimer banner"
          className="shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const isInternal = !TRANSPARENT_NAV_PATHS.includes(pathname);
  const { showDialog, dismissDialog, showBanner, dismissBanner } = useDisclaimer();
  // Keep the dialog mounted after dismissal so its close animation can play.
  const [needsDialog] = useState(showDialog);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-tram focus:text-ink focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar
        isInternal={isInternal}
        banner={showBanner ? <DisclaimerBanner onDismiss={dismissBanner} /> : null}
      />
      {/* Reserve the banner's height so it does not cover the top of each page */}
      {showBanner && <div aria-hidden="true" className={DISCLAIMER_BANNER_HEIGHT} />}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Transparent-navbar pages get a dark fallback so the white nav stays legible */}
        <Suspense fallback={<Loading dark={!isInternal} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {needsDialog && (
        <Suspense fallback={null}>
          <DisclaimerPopup open={showDialog} onDismiss={dismissDialog} />
        </Suspense>
      )}
    </>
  );
}
