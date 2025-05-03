import "./styles/critical.scss"; // Critical CSS for first render
import "./styles/main.scss"; // Import main CSS directly
import Providers from "./context/Providers";
// import { Inter, Montserrat, Bebas_Neue } from 'next/font/google';
import SchemaOrg from '../components/SchemaOrg';

// Temporarily disabled Google fonts to fix build
// const inter = Inter({ 
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter'
// });

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-montserrat',
//   weight: ['400', '500', '600', '700']
// });

// const bebasNeue = Bebas_Neue({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-bebas-neue',
//   weight: '400'
// });

export const metadata = {
  title: {
    template: '%s | Tecnología Plus',
    default: 'Tecnología Plus - Sistemas de Turnos y Llamadores de Meseros'
  },
  description: "Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia y experiencia en su negocio",
  metadataBase: new URL('https://landing-tecnologiaplus-nextjs-dev.vercel.app'),
  keywords: ['sistemas de turnos', 'llamador de meseros', 'localizadores', 'tecnología para negocios', 'dispositivos para restaurantes'],
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
    },
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-image-preview': 'none',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Tecnología Plus - Sistemas para Mejorar su Negocio',
    description: 'Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia de su negocio',
    url: 'https://landing-tecnologiaplus-nextjs-dev.vercel.app',
    siteName: 'Tecnología Plus',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Tecnología Plus - Soluciones tecnológicas para su negocio',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Tecnología Plus - Sistemas para Mejorar su Negocio',
    description: 'Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores',
    images: ['/android-chrome-192x192.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  other: {
    'msapplication-TileImage': '/mstile-270x270.png'
  }
};

/**
 * Root layout component
 * This layout includes performance optimizations like:
 * - Font optimization with next/font/google
 * - DNS prefetching and preconnect for critical domains
 * - Security headers to prevent third-party cookies
 * - Proper meta tags for dimensions to prevent layout shifts
 */
export default function RootLayout({ children }) {
  return (
    // <html lang="es" className={`${inter.variable} ${montserrat.variable} ${bebasNeue.variable}`}>
    <html lang="es" className="font-montserrat">
      <head>
        {/* Essential resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tecnologiaplus.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.emailjs.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />

        {/* Font links using CDN - ensure proper font loading */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;900&family=Bebas+Neue&display=swap" rel="stylesheet" />

        {/* Favicon explicit links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Core meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Dimension hints for critical LCP images */}
        <meta name="thumbnail:width" content="375" />
        <meta name="thumbnail:height" content="400" />

        {/* Enhanced security headers */}
        <meta httpEquiv="Feature-Policy" content="autoplay 'none'; camera 'none'; microphone 'none'; geolocation 'none'" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=(), browsing-topics=(), attribution-reporting=()" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://res.cloudinary.com https://api.emailjs.com; img-src 'self' data: https: https://res.cloudinary.com https://i.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src data: 'self' https://fonts.gstatic.com; frame-src https://www.youtube-nocookie.com https://www.youtube.com; object-src 'none'; block-all-mixed-content; base-uri 'self'" />

        {/* Fix referrer policy for cross-origin requests */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <SchemaOrg />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

