import {
  Info,
  ExternalLink,
  ArrowUp,
  Github,
  Flag,
  CalendarCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { LAST_REVIEWED_LABEL, REPORT_ISSUE_URL } from '../lib/factFormat';

const footerLinks = {
  explore: [
    { name: 'About Alexandria', href: '/about' },
    { name: 'The governor', href: '/governor' },
    { name: 'City projects', href: '/projects' },
  ],
  visit: [
    { name: 'Plan your trip', href: '/visit' },
    { name: 'Living in Alexandria', href: '/live' },
  ],
  business: [
    { name: 'Invest in Alexandria', href: '/invest' },
  ],
};



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-ink wall-of-scripts relative overflow-hidden border-t-2 border-gold/60">
      <div className="alex-container relative z-10 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h3 className="text-white">
                  Alexandria <span className="text-white/70 font-semibold">·</span>{' '}
                  <span lang="ar" dir="rtl">الإسكندرية</span>
                </h3>
                <p className="text-white/70 text-sm">An unofficial guide to the city</p>
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              A digital gateway to Alexandria, Egypt. Discover ancient
              heritage, modern innovation, and Mediterranean beauty.
            </p>

            {/* Unofficial Notice */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/70">
                <Info className="w-5 h-5 text-seaglass shrink-0 mt-0.5" />
                <span className="text-sm">
                  Unofficial fan project — not affiliated with the Alexandria Governorate
                </span>
              </div>
              <a
                href="https://alexandria.gov.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-seaglass transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-seaglass shrink-0" />
                <span className="text-sm">Official Alexandria Governorate site (alexandria.gov.eg)</span>
              </a>
              <a
                href="https://github.com/nabilelnour15/Alexandria-Project-unofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-seaglass transition-colors"
              >
                <Github className="w-5 h-5 text-seaglass shrink-0" />
                <span className="text-sm">Project on GitHub</span>
              </a>
              <a
                href={REPORT_ISSUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-seaglass transition-colors"
              >
                <Flag className="w-5 h-5 text-seaglass shrink-0" />
                <span className="text-sm">Report an inaccuracy</span>
              </a>
              <p className="flex items-center gap-3 text-white/50">
                <CalendarCheck className="w-5 h-5 text-seaglass shrink-0" aria-hidden="true" />
                <span className="text-sm">Facts last reviewed: {LAST_REVIEWED_LABEL}</span>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-gold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-seaglass transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold mb-4">Visit</h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-seaglass transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold mb-4">Business</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-seaglass transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Disclaimer */}
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                &copy; {new Date().getFullYear()} Nabil El-Nour — fan project. Not affiliated with the Alexandria Governorate.
              </p>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-sea hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div> */}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
