import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo, navLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-amber-500">
                  <path d="M50 5C30 5 15 20 15 35c0 10 5 18 12 23-5 3-10 8-12 15-3 10 0 22 10 27 15 8 35 8 50 0 10-5 13-17 10-27-2-7-7-12-12-15 7-5 12-13 12-23C85 20 70 5 50 5zm-20 30c0-12 10-20 20-20s20 8 20 20c0 8-5 15-12 18-2-1-5-2-8-2s-6 1-8 2c-7-3-12-10-12-18zm5 35c-3-8 2-15 8-18 5 3 10 5 17 5s12-2 17-5c6 3 11 10 8 18-2 5-8 10-25 10s-23-5-25-10z"/>
                  <circle cx="40" cy="32" r="4"/>
                  <circle cx="60" cy="32" r="4"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">OJ Holdings LLC</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="text-amber-500" />
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
              >
                <Phone size={18} className="text-amber-500" />
                {companyInfo.phone}
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-amber-500" />
                {companyInfo.headquarters}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white/40 hover:text-amber-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-white/40 hover:text-amber-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
