'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { services } from '../data/servicesData';
import Image from 'next/image';

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      router.push('/');
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
    router.push(`/layanan/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Linbo Logo" width={40} height={40} />
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
          <p>&copy; 2025 LINBO - PT. Lancar Indah Bro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
