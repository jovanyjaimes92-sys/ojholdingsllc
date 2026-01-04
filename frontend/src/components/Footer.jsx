import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo, navLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_9e6d9073-bb02-4867-b451-c2dd9e23610a/artifacts/5xi4sk5s_Asset%203.png"
                alt="OJ Holdings Logo"
                className="w-10 h-10 object-contain"
              />
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
