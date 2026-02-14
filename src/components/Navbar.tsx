import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Governor', href: '/governor' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  // { name: 'Services', href: '/services' },
  { name: 'Visit', href: '/visit' },
  { name: 'Invest', href: '/invest' },
  { name: 'News', href: '/news' },
];

export default function Navbar({ isInternal = false }: { isInternal?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isInternal
          ? 'bg-white/95 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="alex-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-[#0068c8] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl font-['Montserrat']">A</span>
              </div>
              <span
                className={`font-bold text-lg hidden sm:block transition-colors duration-300 font-['Montserrat'] ${isScrolled || isInternal ? 'text-[#0d1623]' : 'text-white'
                  }`}
              >
                Alexandria
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${isScrolled || isInternal
                    ? location.pathname === link.href ? 'text-[#0068c8]' : 'text-[#333333] hover:text-[#0068c8]'
                    : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0068c8] transition-all duration-300 group-hover:w-3/4 ${isScrolled || isInternal ? 'bg-[#0068c8]' : 'bg-white'
                      } ${location.pathname === link.href ? 'w-3/4' : ''}`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-lg transition-all duration-300 hover:bg-[#0068c8]/10 ${isScrolled || isInternal ? 'text-[#333333]' : 'text-white'
                  }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <button
                className={`hidden sm:flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[#0068c8]/10 ${isScrolled || isInternal ? 'text-[#333333]' : 'text-white'
                  }`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled || isInternal
                  ? 'text-[#333333] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
                  }`}
                aria-label="Toggle menu"
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
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen
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
                  className={`px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${location.pathname === link.href
                    ? 'bg-[#e6f1fc] text-[#0068c8]'
                    : 'text-[#333333] hover:bg-[#e6f1fc] hover:text-[#0068c8]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-all duration-300 ${isSearchOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-4 transition-all duration-300 ${isSearchOpen ? 'scale-100' : 'scale-95'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-[#5d6c7b]" />
              <input
                type="text"
                placeholder="Search Alexandria..."
                className="flex-1 text-lg outline-none text-[#333333] placeholder:text-[#5d6c7b]"
                autoFocus={isSearchOpen}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#5d6c7b]" />
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-[#5d6c7b]">Popular searches:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Citadel', 'Library', 'Beaches', 'Investment', 'Hotels'].map(
                  (term) => (
                    <button
                      key={term}
                      className="px-3 py-1 text-sm bg-[#e6f1fc] text-[#0068c8] rounded-full hover:bg-[#0068c8] hover:text-white transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
