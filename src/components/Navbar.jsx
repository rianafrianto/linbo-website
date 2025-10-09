import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isServicePage = location.pathname.startsWith('/layanan/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'services', label: 'Layanan' },
    { id: 'about', label: 'Tentang' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isServicePage ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 ${scrolled || isServicePage ? '' : 'border-b border-white/30'}`}>
          <Link to="/" className="flex items-center space-x-3">
            <svg className="w-12 h-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 40C60 35.5817 63.5817 32 68 32C100 32 120 60 140 90C145 98 142 105 135 105H75C70.5817 105 67 101.418 67 97V45C67 40.5817 63.4183 37 59 37C54.5817 37 51 40.5817 51 45V97C51 106.941 59.0589 115 69 115H135C150.464 115 160 100 152 85C132 50 108 22 68 22C58.0589 22 50 29.0589 50 38V45C50 49.4183 53.5817 53 58 53C62.4183 53 66 49.4183 66 45V40C66 35.5817 62.4183 32 58 32C53.5817 32 50 35.5817 50 40Z" fill="url(#gradient1)"/>
              <line x1="85" y1="125" x2="160" y2="125" stroke="url(#gradient2)" strokeWidth="8" strokeLinecap="round"/>
              <line x1="85" y1="145" x2="145" y2="145" stroke="url(#gradient3)" strokeWidth="8" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient1" x1="50" y1="22" x2="160" y2="115" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#06B6D4"/>
                  <stop offset="1" stopColor="#3B82F6"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="85" y1="125" x2="160" y2="125" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6"/>
                  <stop offset="0.5" stopColor="#EC4899"/>
                  <stop offset="1" stopColor="#F59E0B"/>
                </linearGradient>
                <linearGradient id="gradient3" x1="85" y1="145" x2="145" y2="145" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6"/>
                  <stop offset="1" stopColor="#EC4899"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <h1 className={`text-2xl font-bold ${scrolled || isServicePage ? 'text-gray-900' : 'text-white'}`}>LINBO</h1>
              <p className={`text-xs ${scrolled || isServicePage ? 'text-gray-600' : 'text-gray-200'}`}>Elegance in Swift Motion</p>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`capitalize font-medium transition-colors ${
                  scrolled || isServicePage ? 'text-gray-700 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={scrolled || isServicePage ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled || isServicePage ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cyan-50 rounded-lg capitalize"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
