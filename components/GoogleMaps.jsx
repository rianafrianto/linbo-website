'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

const GoogleMaps = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=PT+LANCAR+INDAH+BRO+(LINBO),+Jl.+Haji+Liyas+34,+Sudimara+Barat,+RT+001/RW+003,+Paninggilan+Utara,+Ciledug,+Tangerang,+Banten&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi LINBO - PT. Lancar Indah Bro"
        />
      </div>
      <a
        href="https://maps.app.goo.gl/YhunwQkR1vNLb4vv9"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
      >
        <MapPin size={18} className="mr-2" />
        Buka di Google Maps
      </a>
    </div>
  );
};

export default GoogleMaps;
