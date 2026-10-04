import { useState, useEffect, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Governance', href: '/governor' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Visit', href: '/visit' },
  { name: 'Live here', href: '/live' },
  { name: 'Invest', href: '/invest' },
];

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isInternal
          ? 'bg-white/95 backdrop-blur-xl border-b border-limestone'
          : 'bg-transparent'
          }`}
      >
        {banner}
        <div className="alex-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/images/logo.svg" 
                alt="Alexandria · الإسكندرية — Home"
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
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
    </>
  );
}
