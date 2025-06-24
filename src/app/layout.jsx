// Styles
import "@/styles/critical.scss";
import "@/styles/main.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoogleTagManager } from '@next/third-parties/google'

import { Bebas_Neue, Montserrat } from 'next/font/google'
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

export default function RootLayout({ children }) {

  return (
    <html lang="es" className={`${montserrat.className} ${bebas.className} ${montserrat.variable} ${bebas.variable}`}>
      <head>
        {/* Preconnect for CDN & Google Fonts */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Security Headers */}
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

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
      </head>
      <body>
        {SHOULD_ROBOTS_INDEX && <GoogleTagManager gtmId="GTM-P8J6LTX" />}
        {children}
      </body>
    </html>
  );
}
