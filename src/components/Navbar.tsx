import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { navLinks } from '@/lib/navLinks';
import { Link, useLocation } from 'react-router-dom';
import { prefetch } from '@/lib/routes';
import RouteErrorBoundary from './RouteErrorBoundary';

const SiteSearch = lazy(() => import('./SiteSearch'));

export default function Navbar({
  isInternal = false,
  banner = null,
}: {
  isInternal?: boolean;
  /** Optional slim banner rendered above the bar, inside the fixed header */
  banner?: ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  // Mount the search chunk the first time it is opened, then keep it mounted.
  const [searchLoaded, setSearchLoaded] = useState(false);
  const openSearch = () => {
    setSearchLoaded(true);
    setSearchOpen(true);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const k = event.key.toLowerCase();
      if (k === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchLoaded(true);
        setSearchOpen((o) => !o);
        return;
      }
      if (k === '/' && !event.metaKey && !event.ctrlKey && !event.altKey) {
        if (event.defaultPrevented || event.repeat) return;
        if (document.querySelector('[role=dialog][data-state=open]')) return;
        const el = (event.target as HTMLElement | null) ?? (document.activeElement as HTMLElement | null);
        if (
          el &&
          (el.isContentEditable ||
            /^(input|textarea|select)$/i.test(el.tagName) ||
            el.closest?.('[role=textbox], [role=combobox], [contenteditable]'))
        )
          return;
        event.preventDefault();
        setSearchLoaded(true);
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const [menuPath, setMenuPath] = useState(location.pathname);

  // Close the mobile menu whenever the route changes
  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on Escape while it is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close the mobile menu once the viewport reaches `lg` (where it is hidden),
  // so its scroll lock is released.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const mql = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [isMobileMenuOpen]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isInternal
          ? 'bg-white/95 backdrop-blur-xl border-b border-limestone'
          : 'bg-transparent'
          }`}
      >
        {banner}
        <nav aria-label="Main">
        <div className="alex-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/images/logo.svg" 
                alt="Alexandria, home"
                width={160}
                height={48}
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  isScrolled || isInternal ? '' : 'brightness-0 invert'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => prefetch(link.href)}
                  onFocus={() => prefetch(link.href)}
                  onTouchStart={() => prefetch(link.href)}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                  className={`relative px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300 group ${isScrolled || isInternal
                    ? location.pathname === link.href ? 'text-ink font-semibold' : 'text-ink-soft hover:text-sea'
                    : location.pathname === link.href ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-4 right-4 h-[3px] rounded-full transition-opacity duration-300 ${location.pathname === link.href
                      ? 'bg-tram opacity-100'
                      : `opacity-0 group-hover:opacity-100 ${isScrolled || isInternal ? 'bg-sea/30' : 'bg-white/40'}`
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search the site (Ctrl+K)"
                aria-keyshortcuts="Control+K Meta+K"
                className={`hidden lg:flex p-2 rounded-lg items-center gap-2 transition-colors duration-300 ${isScrolled || isInternal
                  ? 'text-ink hover:bg-limestone/60'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
                <kbd className="text-xs font-sans opacity-70" aria-hidden="true">⌘K</kbd>
              </button>
              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled || isInternal
                  ? 'text-ink hover:bg-limestone/60'
                  : 'text-white hover:bg-white/10'
                  }`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          inert={!isMobileMenuOpen}
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-limestone transition-all duration-300 ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="alex-container py-4">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openSearch();
                }}
                aria-label="Search the site"
                className="flex items-center gap-2 px-4 py-3 text-left font-medium text-ink rounded-lg hover:bg-sea-mist hover:text-sea transition-colors duration-200"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
                Search
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => prefetch(link.href)}
                  onFocus={() => prefetch(link.href)}
                  onTouchStart={() => prefetch(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                  className={`px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${location.pathname === link.href
                    ? 'bg-sea-mist text-ink border-l-[3px] border-tram'
                    : 'text-ink hover:bg-sea-mist hover:text-sea'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        </nav>
      </header>
      {searchLoaded && (
        <RouteErrorBoundary silent>
          <Suspense fallback={null}>
            <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
          </Suspense>
        </RouteErrorBoundary>
      )}
    </>
  );
}
