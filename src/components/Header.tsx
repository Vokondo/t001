import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? theme === 'dark'
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 animate-slide-in-down'
          : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 animate-slide-in-down'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover-rotate animate-glow">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className={`text-xl font-semibold transition-all duration-300 group-hover:text-orange-400 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Trendzeta
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift animate-fade-in-up ${
                  isActive(item.path) 
                    ? 'text-orange-400 bg-orange-500/10 animate-glow' 
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <button className={`font-medium transition-all duration-300 text-sm px-3 py-2 hover-lift ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}>
              Sign In
            </button>
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center text-sm btn-animate hover-lift animate-glow">
              Get Started
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <button
            className={`lg:hidden transition-all duration-300 hover-scale icon-wiggle ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b animate-slide-in-down ${
            theme === 'dark'
              ? 'bg-black/95 border-white/10'
              : 'bg-white/95 border-gray-200'
          }`}>
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm hover-lift animate-fade-in-left ${
                    isActive(item.path) 
                      ? 'text-orange-400 bg-orange-500/10' 
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <button className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover-lift ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    Sign In
                  </button>
                  <ThemeToggle />
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg font-medium text-sm btn-animate hover-lift animate-glow">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;