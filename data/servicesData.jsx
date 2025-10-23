import { Ship, FileText, Home, Package, Truck, Globe, Shield, Zap, Users, Award, MapPin, Clock } from 'lucide-react';

export const services = [
  {
    id: 'ekspor-impor',
    icon: <Ship className="w-12 h-12" />,
    title: "Jasa Ekspor-Impor",
    description: "Layanan pengiriman internasional yang cepat dan terpercaya ke seluruh dunia",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 'custom-clearance',
    icon: <FileText className="w-12 h-12" />,
    title: "Custom Clearance / PPJK",
    description: "Pengurusan dokumen kepabeanan dan izin impor-ekspor yang profesional",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 'domestik',
    icon: <Home className="w-12 h-12" />,
    title: "Domestik",
    description: "Pengiriman dalam negeri yang efisien ke seluruh wilayah Indonesia",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 'pengiriman',
    icon: <Package className="w-12 h-12" />,
    title: "Jasa Pengiriman",
    description: "Solusi pengiriman door-to-door dengan tracking real-time",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 'trucking',
    icon: <Truck className="w-12 h-12" />,
    title: "Trucking",
    description: "Armada truk lengkap untuk berbagai kebutuhan angkutan darat",
    color: "from-indigo-500 to-blue-500"
  }
];

export const serviceDetails = {
  'ekspor-impor': {
    title: "Jasa Ekspor-Impor",
    subtitle: "Solusi Pengiriman Internasional Terpercaya",
    hero: "Jangkauan ke 50+ Negara di Seluruh Dunia",
    description: "LINBO menyediakan layanan ekspor-impor yang komprehensif dengan jangkauan global. Kami memahami kompleksitas perdagangan internasional dan siap membantu bisnis Anda berkembang di pasar global.",
    features: [
      { icon: <Globe />, title: "Jangkauan Global", desc: "Layanan ke 50+ negara di seluruh benua" },
      { icon: <Shield />, title: "Asuransi Penuh", desc: "Perlindungan maksimal untuk setiap pengiriman" },
      { icon: <Zap />, title: "Proses Cepat", desc: "Handling dan customs clearance yang efisien" },
      { icon: <Award />, title: "Bersertifikat", desc: "Lisensi resmi dan tersertifikasi internasional" }
    ],
    services: [
      "Pengiriman udara (Air Freight)",
      "Pengiriman laut (Sea Freight)",
      "Konsolidasi cargo untuk efisiensi biaya",
      "Door-to-door delivery international",
      "Handling barang khusus dan berbahaya",
      "Asuransi cargo internasional"
    ],
    process: [
      { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan dan jenis barang" },
      { step: "2", title: "Quotation", desc: "Penawaran harga yang kompetitif" },
      { step: "3", title: "Dokumentasi", desc: "Pengurusan dokumen ekspor/impor" },
      { step: "4", title: "Pengiriman", desc: "Loading dan pengiriman barang" },
      { step: "5", title: "Customs", desc: "Proses kepabeanan di negara tujuan" },
      { step: "6", title: "Delivery", desc: "Pengiriman ke alamat tujuan akhir" }
    ],
    benefits: [
      "Harga kompetitif dengan service premium",
      "Tracking real-time untuk setiap pengiriman",
      "Tim profesional berpengalaman 10+ tahun",
      "Network partner internasional terpercaya",
      "Handling khusus untuk berbagai jenis cargo",
      "Dokumentasi lengkap dan akurat"
    ]
  },
  'custom-clearance': {
    title: "Custom Clearance / PPJK",
    subtitle: "Kepabeanan yang Mudah dan Cepat",
    hero: "Trusted PPJK Partner",
    description: "Sebagai Pengusaha Pengurusan Jasa Kepabeanan (PPJK) resmi, kami memastikan proses customs clearance Anda berjalan lancar tanpa hambatan. Tim expert kami siap menangani semua kompleksitas regulasi kepabeanan.",
    features: [
      { icon: <FileText />, title: "Dokumen Lengkap", desc: "Pengurusan semua dokumen kepabeanan" },
      { icon: <Shield />, title: "Legal & Aman", desc: "PPJK resmi terdaftar di DJBC" },
      { icon: <Zap />, title: "Fast Processing", desc: "Clearance cepat dengan jalur prioritas" },
      { icon: <Users />, title: "Expert Team", desc: "Tim berpengalaman dalam regulasi bea cukai" }
    ],
    services: [
      "Pengurusan PIB (Pemberitahuan Impor Barang)",
      "Pengurusan PEB (Pemberitahuan Ekspor Barang)",
      "Konsultasi tarif dan klasifikasi barang (HS Code)",
      "Pengurusan perizinan khusus (SNI, BPOM, dll)",
      "Audit dan konsultasi kepabeanan",
      "Pengurusan fasilitas kepabeanan (KITE, dll)"
    ],
    process: [
      { step: "1", title: "Document Review", desc: "Verifikasi kelengkapan dokumen" },
      { step: "2", title: "HS Code", desc: "Klasifikasi dan penetapan tarif" },
      { step: "3", title: "Filing", desc: "Submit dokumen ke sistem bea cukai" },
      { step: "4", title: "Payment", desc: "Pembayaran bea masuk dan pajak" },
      { step: "5", title: "Inspection", desc: "Koordinasi pemeriksaan fisik (jika ada)" },
      { step: "6", title: "Release", desc: "Pengeluaran barang dari pelabuhan" }
    ],
    benefits: [
      "PPJK resmi terdaftar dan bersertifikat",
      "Pengalaman handling berbagai jenis komoditas",
      "Update regulasi kepabeanan terkini",
      "Konsultasi gratis untuk optimasi biaya",
      "Koordinasi langsung dengan pihak bea cukai",
      "Transparansi biaya tanpa hidden charge"
    ]
  },
  'domestik': {
    title: "Pengiriman Domestik",
    subtitle: "Jangkauan ke Seluruh Nusantara",
    hero: "34 Provinsi, 514 Kota/Kabupaten",
    description: "Layanan pengiriman domestik LINBO menjangkau seluruh wilayah Indonesia, dari Sabang sampai Merauke. Kami memahami karakteristik setiap wilayah dan memastikan barang Anda sampai tepat waktu.",
    features: [
      { icon: <MapPin />, title: "Jangkauan Luas", desc: "Kirim ke seluruh pelosok Indonesia" },
      { icon: <Truck />, title: "Armada Lengkap", desc: "Berbagai jenis kendaraan tersedia" },
      { icon: <Zap />, title: "Pengiriman Cepat", desc: "Reguler, express, dan same day service" },
      { icon: <Shield />, title: "Asuransi", desc: "Perlindungan penuh untuk barang Anda" }
    ],
    services: [
      "Pengiriman regular ke seluruh Indonesia",
      "Express delivery untuk pengiriman urgent",
      "Same day delivery untuk area Jabodetabek",
      "Pengiriman barang besar dan berat",
      "Cold chain untuk produk temperature control",
      "Cash on delivery (COD) service"
    ],
    process: [
      { step: "1", title: "Booking", desc: "Order via website, app, atau telepon" },
      { step: "2", title: "Pick Up", desc: "Kami jemput barang di lokasi Anda" },
      { step: "3", title: "Processing", desc: "Packing dan sortir di warehouse" },
      { step: "4", title: "Transit", desc: "Pengiriman via jalur darat/udara/laut" },
      { step: "5", title: "Last Mile", desc: "Pengiriman ke alamat tujuan" },
      { step: "6", title: "POD", desc: "Proof of delivery dengan foto & tanda tangan" }
    ],
    benefits: [
      "Coverage area terluas di Indonesia",
      "Pilihan layanan sesuai budget dan urgency",
      "Tracking real-time di setiap tahap",
      "Network gudang di kota-kota besar",
      "Tim kurir profesional dan terlatih",
      "Customer service responsive 24/7"
    ]
  },
  'pengiriman': {
    title: "Jasa Pengiriman",
    subtitle: "Door-to-Door Delivery Service",
    hero: "Pengiriman Aman, Cepat & Terpercaya",
    description: "Layanan pengiriman LINBO dirancang untuk memberikan kemudahan maksimal. Dari pick-up hingga delivery, semua kami handle dengan profesional dan penuh tanggung jawab.",
    features: [
      { icon: <Package />, title: "Door-to-Door", desc: "Kami jemput dan antar ke alamat tujuan" },
      { icon: <Globe />, title: "Local & International", desc: "Layanan domestik dan luar negeri" },
      { icon: <Zap />, title: "Real-time Tracking", desc: "Monitor posisi barang kapan saja" },
      { icon: <Shield />, title: "Secure & Safe", desc: "Packing professional dan asuransi" }
    ],
    services: [
      "Pengiriman dokumen dan paket kecil",
      "Pengiriman barang elektronik",
      "Pengiriman furniture dan barang besar",
      "Pengiriman kendaraan bermotor",
      "Pengiriman produk frozen dan fresh",
      "White glove delivery service"
    ],
    process: [
      { step: "1", title: "Request", desc: "Ajukan permintaan pengiriman" },
      { step: "2", title: "Quote", desc: "Dapatkan estimasi biaya instantly" },
      { step: "3", title: "Schedule", desc: "Tentukan waktu pick-up" },
      { step: "4", title: "Pack & Pick", desc: "Kami packing dan ambil barang" },
      { step: "5", title: "Ship", desc: "Pengiriman dengan metode terbaik" },
      { step: "6", title: "Deliver", desc: "Sampai ke tujuan dengan aman" }
    ],
    benefits: [
      "Layanan pick-up gratis untuk area tertentu",
      "Packing material tersedia dan professional",
      "Berbagai metode pembayaran (transfer, CC, COD)",
      "Notifikasi otomatis di setiap milestone",
      "Insurance coverage hingga Rp 50 juta",
      "Garansi kompensasi jika terlambat atau rusak"
    ]
  },
  'trucking': {
    title: "Trucking Service",
    subtitle: "Armada Truk Lengkap untuk Berbagai Kebutuhan",
    hero: "100+ Unit Armada Siap Melayani",
    description: "LINBO menyediakan layanan trucking dengan armada lengkap dan terawat. Dari pick-up kecil hingga trailer besar, kami siap mendukung kebutuhan logistik Anda dengan optimal.",
    features: [
      { icon: <Truck />, title: "Armada Lengkap", desc: "Berbagai jenis dan kapasitas truk" },
      { icon: <Shield />, title: "Terawat & Aman", desc: "Maintenance berkala dan safety first" },
      { icon: <Users />, title: "Driver Profesional", desc: "Berpengalaman dan tersertifikasi" },
      { icon: <MapPin />, title: "GPS Tracking", desc: "Monitor perjalanan real-time" }
    ],
    services: [
      "Sewa truk harian, mingguan, bulanan",
      "Truk Engkel (CDD) - kapasitas 3-4 ton",
      "Truk CDE & CDD Long - kapasitas 5-6 ton",
      "Truk Fuso & Tronton - kapasitas 8-12 ton",
      "Truk Trailer & Container - kapasitas 20-30 ton",
      "Specialized truck (refrigerated, tanker, dll)"
    ],
    process: [
      { step: "1", title: "Survey", desc: "Analisa kebutuhan dan jenis muatan" },
      { step: "2", title: "Planning", desc: "Tentukan jenis truk dan rute optimal" },
      { step: "3", title: "Agreement", desc: "Kontrak dan jadwal pengiriman" },
      { step: "4", title: "Loading", desc: "Muat barang dengan SOP safety" },
      { step: "5", title: "Transport", desc: "Pengiriman dengan monitoring" },
      { step: "6", title: "Unloading", desc: "Bongkar muat di tujuan" }
    ],
    benefits: [
      "Armada terawat dengan maintenance berkala",
      "Driver berpengalaman minimum 5 tahun",
      "Asuransi all risk untuk setiap pengiriman",
      "GPS tracking untuk monitoring real-time",
      "Harga kompetitif dengan service terbaik",
      "Tersedia layanan 24/7 termasuk hari libur"
    ]
  }
};
