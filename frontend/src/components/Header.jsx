import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-amber-500 group-hover:fill-amber-400 transition-colors duration-300">
                <path d="M50 5C30 5 15 20 15 35c0 10 5 18 12 23-5 3-10 8-12 15-3 10 0 22 10 27 15 8 35 8 50 0 10-5 13-17 10-27-2-7-7-12-12-15 7-5 12-13 12-23C85 20 70 5 50 5zm-20 30c0-12 10-20 20-20s20 8 20 20c0 8-5 15-12 18-2-1-5-2-8-2s-6 1-8 2c-7-3-12-10-12-18zm5 35c-3-8 2-15 8-18 5 3 10 5 17 5s12-2 17-5c6 3 11 10 8 18-2 5-8 10-25 10s-23-5-25-10z"/>
                <circle cx="40" cy="32" r="4"/>
                <circle cx="60" cy="32" r="4"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">OJ Holdings</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-amber-500'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-medium hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-amber-500'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-black font-medium mt-2"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
