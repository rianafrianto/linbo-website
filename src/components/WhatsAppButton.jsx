import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 z-50"
    >
      <Phone size={24} />
    </a>
  );
};

export default WhatsAppButton;
