import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

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
            <img src={logo} alt="Linbo Logo" className="w-16 h-16" />
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
