import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  explore: [
    { name: 'About Alexandria', href: '/about' },
    { name: 'History & Heritage', href: '/about' },
    { name: 'Landmarks', href: '/visit' },
    { name: 'Culture & Arts', href: '/about' },
  ],
  visit: [
    { name: 'Plan Your Trip', href: '/visit' },
    { name: 'Attractions', href: '/visit' },
    { name: 'Hotels & Accommodation', href: '/visit' },
    { name: 'Restaurants', href: '/visit' },
  ],
  business: [
    { name: 'Investment Opportunities', href: '/invest' },
    { name: 'Business Directory', href: '/invest' },
    { name: 'Free Trade Zone', href: '/invest' },
    { name: 'Start a Business', href: '/invest' },
  ],
  government: [
    { name: 'City Services', href: '/services' },
    { name: 'Permits & Licenses', href: '/services' },
    { name: 'Pay Fees', href: '/services' },
    { name: 'Report Issues', href: '/services' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0d1623] relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="alex-container relative z-10 pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0068c8] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-['Montserrat']">
                  A
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl font-['Montserrat']">
                  Alexandria
                </h3>
                <p className="text-white/60 text-sm">The Mediterranean Jewel</p>
              </div>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              The official digital gateway to Alexandria, Egypt. Discover ancient
              heritage, modern innovation, and Mediterranean beauty.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-[#3898ec]" />
                <span className="text-sm">Governorate Building, Alexandria</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-[#3898ec]" />
                <span className="text-sm">+20 3 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-[#3898ec]" />
                <span className="text-sm">info@alexandria.gov.eg</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[#3898ec] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Visit</h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[#3898ec] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Business</h4>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[#3898ec] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Column - Hidden for now */}
          {/* 
          <div>
            <h4 className="text-white font-semibold mb-4">Government</h4>
            <ul className="space-y-3">
              {footerLinks.government.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-[#3898ec] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> 
          */}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Disclaimer */}
            <div className="text-center md:text-left">
              <p className="text-white/50 text-sm mb-1">
                &copy; {new Date().getFullYear()} Alexandria. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-2">
                This site is made with love to the city. It is not an official one, made by <span className="text-white/60 font-medium">Nabil El-Nour</span>.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#0068c8] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
