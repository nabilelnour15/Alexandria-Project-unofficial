import { useState } from 'react';

const SEEN_KEY = 'alex-disclaimer-seen';
const BANNER_DISMISSED_KEY = 'alex-disclaimer-banner-dismissed';

function readFlag(storage: () => Storage, key: string): boolean {
  try {
    return storage().getItem(key) === '1';
  } catch {
    return false;
  }
}

function writeFlag(storage: () => Storage, key: string) {
  try {
    storage().setItem(key, '1');
  } catch {
    // Storage can be unavailable (private mode, blocked site data). Ignore.
  }
}

const local = () => window.localStorage;
const session = () => window.sessionStorage;

/**
 * First visit: show the full disclaimer dialog.
 * Later visits: show a slim banner, which can be hidden for the session.
 */
export function useDisclaimer() {
  const [seenBefore] = useState(() => readFlag(local, SEEN_KEY));
  const [showDialog, setShowDialog] = useState(!seenBefore);
  const [showBanner, setShowBanner] = useState(
    () => seenBefore && !readFlag(session, BANNER_DISMISSED_KEY),
  );

  const dismissDialog = () => {
    writeFlag(local, SEEN_KEY);
    setShowDialog(false);
  };

  const dismissBanner = () => {
    writeFlag(session, BANNER_DISMISSED_KEY);
    setShowBanner(false);
  };

  return { showDialog, dismissDialog, showBanner, dismissBanner };
}
