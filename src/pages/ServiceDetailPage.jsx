import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Check, Phone } from 'lucide-react';
import { services, serviceDetails } from '../data/servicesData';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const detail = serviceDetails[serviceId];
  const serviceColor = services.find(s => s.id === serviceId)?.color || 'from-cyan-500 to-blue-600';

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${serviceColor} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            {detail.hero}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {detail.title}
          </h1>
          <p className="text-2xl mb-8 font-light">
            {detail.subtitle}
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            {detail.description}
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detail.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${serviceColor} text-white rounded-xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan yang Kami Sediakan</h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${serviceColor} mx-auto`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detail.services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${serviceColor} rounded-lg flex items-center justify-center`}>
                  <Check className="text-white" size={20} />
                </div>
                <p className="text-gray-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Alur Proses</h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${serviceColor} mx-auto`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${serviceColor} rounded-full text-2xl font-bold mb-4`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
                {index < detail.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-cyan-400" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan Kami</h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${serviceColor} mx-auto`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-6 bg-gradient-to-br ${serviceColor} text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <Check size={24} className="flex-shrink-0" />
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 bg-gradient-to-br ${serviceColor}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Siap Menggunakan Layanan Kami?</h2>
          <p className="text-xl mb-8">Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6289630541569"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Chat via WhatsApp
            </a>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
