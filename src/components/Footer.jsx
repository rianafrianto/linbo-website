import React from 'react';
import { Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { services } from '../data/servicesData';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
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

  const navigateToService = (serviceId) => {
    navigate(`/layanan/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3">
              <svg className="w-10 h-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 40C60 35.5817 63.5817 32 68 32C100 32 120 60 140 90C145 98 142 105 135 105H75C70.5817 105 67 101.418 67 97V45C67 40.5817 63.4183 37 59 37C54.5817 37 51 40.5817 51 45V97C51 106.941 59.0589 115 69 115H135C150.464 115 160 100 152 85C132 50 108 22 68 22C58.0589 22 50 29.0589 50 38V45C50 49.4183 53.5817 53 58 53C62.4183 53 66 49.4183 66 45V40C66 35.5817 62.4183 32 58 32C53.5817 32 50 35.5817 50 40Z" fill="url(#footerGradient1)"/>
                <line x1="85" y1="125" x2="160" y2="125" stroke="url(#footerGradient2)" strokeWidth="8" strokeLinecap="round"/>
                <line x1="85" y1="145" x2="145" y2="145" stroke="url(#footerGradient3)" strokeWidth="8" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footerGradient1" x1="50" y1="22" x2="160" y2="115" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4"/>
                    <stop offset="1" stopColor="#3B82F6"/>
                  </linearGradient>
                  <linearGradient id="footerGradient2" x1="85" y1="125" x2="160" y2="125" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6"/>
                    <stop offset="0.5" stopColor="#EC4899"/>
                    <stop offset="1" stopColor="#F59E0B"/>
                  </linearGradient>
                  <linearGradient id="footerGradient3" x1="85" y1="145" x2="145" y2="145" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6"/>
                    <stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-white">LINBO</h3>
                <p className="text-xs text-gray-400">Swift Motion</p>
              </div>
            </div>
            <p className="text-sm">Solusi logistik terpercaya untuk kebutuhan bisnis Anda.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateToService(service.id)}
                    className="hover:text-cyan-400 transition text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition">Tentang Kami</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition">Tim Kami</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition">Karir</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition">Blog</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition">Kontak</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 text-cyan-400" />
                <div>
                  <p className="font-semibold">Senin - Jumat</p>
                  <p>08:00 - 17:00 WIB</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="mr-2 mt-1 text-cyan-400" />
                <div>
                  <p className="font-semibold">Sabtu</p>
                  <p>08:00 - 12:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2025 LINBO - Lancar Indah Bro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
