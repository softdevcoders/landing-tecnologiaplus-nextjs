// Styles
import "@/styles/critical.scss";
import "@/styles/main.scss";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { GoogleTagManager } from '@next/third-parties/google'
import ResourceHints from '@/components/resource-hints'

import { Bebas_Neue, Montserrat, Archivo_Black } from 'next/font/google'
import { SHOULD_ROBOTS_INDEX } from "@/data/metadata/config";
 
const montserrat = Montserrat({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const archivo_black = Archivo_Black({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black',
})

// Generate metadata for better preconnect handling
export async function generateMetadata() {
  return {
    other: {
      // Force preconnect hints to be processed early
      'preconnect-0': 'https://res.cloudinary.com',
      'preconnect-1': 'https://fonts.googleapis.com',
      'preconnect-2': 'https://fonts.gstatic.com',
    },
  };
}

export default function RootLayout({ children }) {

  return (
    <html lang="es" className={`${montserrat.className} ${bebas.className} ${archivo_black.variable} ${montserrat.variable} ${bebas.variable}`}>
      <head>
        {/* Critical resource hints - processed first for maximum performance */}
        <ResourceHints />

        {/* Security Headers */}
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" /> */}

        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Favicon explicit links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Core meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />

        {/* Additional meta tags */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body>
        {SHOULD_ROBOTS_INDEX && <GoogleTagManager gtmId="GTM-P8J6LTX" />}
        {children}
      </body>
    </html>
  );
}
