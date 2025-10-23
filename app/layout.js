import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://linbo.co.id'),
  title: {
    default: 'Linbo | Elegance in Swift Motion - Jasa Logistik Ekspor Impor',
    template: '%s | Linbo'
  },
  description: 'LINBO - PT. Lancar Indah Bro menyediakan layanan logistik terpercaya untuk ekspor-impor, custom clearance, pengiriman domestik, dan trucking. Solusi pengiriman profesional ke seluruh dunia.',
  keywords: ['linbo', 'logistik', 'ekspor impor', 'custom clearance', 'PPJK', 'pengiriman domestik', 'trucking', 'cargo', 'freight forwarding', 'jasa pengiriman', 'PT Lancar Indah Bro'],
  authors: [{ name: 'LINBO - PT. Lancar Indah Bro' }],
  creator: 'LINBO',
  publisher: 'LINBO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'StUqo2W7ZYPzvLti7sDhcWbbQf3r94HpWW70SSIE7Mg',
  },
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://linbo.co.id',
    siteName: 'Linbo',
    title: 'Linbo | Elegance in Swift Motion - Jasa Logistik Ekspor Impor',
    description: 'Solusi logistik terpercaya untuk ekspor-impor, custom clearance, dan pengiriman domestik. Jangkauan ke 50+ negara di seluruh dunia.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Linbo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linbo | Elegance in Swift Motion',
    description: 'Solusi logistik terpercaya untuk ekspor-impor, custom clearance, dan pengiriman domestik.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
