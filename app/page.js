'use client';

import React from 'react';
import { ChevronRight, Phone, Mail, MapPin, Globe, Users, Award, TrendingUp, Clock, Zap, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { services } from '../data/servicesData';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToService = (serviceId) => {
    router.push(`/layanan/${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-4">
            <div className="inline-block">
              <Image src="/logo.png" alt="Linbo Logo" width={192} height={192} className="mx-auto drop-shadow-2xl" priority />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            LINBO
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            PT. LANCAR INDAH BRO
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            ELEGANCE IN SWIFT MOTION
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
            Solusi logistik terpercaya untuk kebutuhan ekspor-impor, custom clearance, dan pengiriman domestik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Konsultasi Gratis
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Lihat Layanan
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai solusi logistik yang komprehensif untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer relative overflow-hidden"
                onClick={() => navigateToService(service.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-cyan-600 mb-6 transform group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Klien Puas', icon: <Users /> },
              { number: '50+', label: 'Negara Tujuan', icon: <Globe /> },
              { number: '10+', label: 'Tahun Pengalaman', icon: <Award /> },
              { number: '99%', label: 'On-Time Delivery', icon: <TrendingUp /> }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <div className="text-cyan-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tentang LINBO
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                LINBO adalah perusahaan logistik terpercaya yang berfokus pada kemudahan, kecepatan, dan keandalan dalam setiap pengiriman. Dengan motto "Lancar Indah Bro - Elegance in Swift Motion", kami berkomitmen memberikan layanan terbaik untuk kebutuhan ekspor-impor Anda.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Didukung oleh tim profesional dan sistem tracking modern, kami memastikan setiap barang Anda sampai tepat waktu dan dalam kondisi sempurna.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Klien Puas' },
                  { number: '50+', label: 'Negara Tujuan' },
                  { number: '24/7', label: 'Customer Service' },
                  { number: '99%', label: 'On-Time Delivery' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">{item.number}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-1 bg-white/50 mr-4"></div>
                    <h3 className="text-3xl font-bold">Mengapa Memilih LINBO?</h3>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        icon: <Award size={24} />,
                        title: 'Pengalaman 10+ Tahun',
                        desc: 'Expert di bidang logistik internasional'
                      },
                      {
                        icon: <Clock size={24} />,
                        title: 'Layanan 24/7',
                        desc: 'Tim profesional siap membantu kapan saja'
                      },
                      {
                        icon: <TrendingUp size={24} />,
                        title: 'Harga Kompetitif',
                        desc: 'Service premium dengan harga terjangkau'
                      },
                      {
                        icon: <Zap size={24} />,
                        title: 'Tracking Real-Time',
                        desc: 'Monitor pengiriman dengan mudah'
                      },
                      {
                        icon: <Shield size={24} />,
                        title: 'Asuransi Penuh',
                        desc: 'Keamanan maksimal untuk setiap barang'
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:translate-x-3 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="mt-8 w-full py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Hubungi Kami Sekarang</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl -z-10 transform rotate-3"></div>
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-cyan-100 to-blue-200 rounded-3xl -z-20 transform rotate-1"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Siap membantu kebutuhan logistik Anda. Hubungi kami sekarang untuk konsultasi gratis!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Phone size={28} />, title: 'Telepon', info: ['+62 896-3054-1569'] },
              { icon: <Mail size={28} />, title: 'Email', info: ['info@linbo.co.id', 'cs@linbo.co.id'] },
              { icon: <MapPin size={28} />, title: 'Alamat', info: ['Jl. Haji Liyas 34, Sudimara Barat', 'RT 001 / RW 003', 'Kel. Paninggilan Utara, Kec. Ciledug', 'Kota Tangerang, Provinsi Banten'] }
            ].map((contact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
                  <div className="text-white">{contact.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                {contact.info.map((line, i) => (
                  <p key={i} className="text-gray-300">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Dapatkan Konsultasi Gratis</h3>
              <p className="text-gray-600">Hubungi kami melalui WhatsApp untuk konsultasi langsung dengan tim kami</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6289630541569"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl"
              >
                <Phone className="mr-2" size={20} />
                Chat via WhatsApp
              </a>
              <a
                href="mailto:info@linbo.co.id"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
