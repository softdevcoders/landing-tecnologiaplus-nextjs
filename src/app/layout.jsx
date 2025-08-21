// Styles
import "@/styles/critical.scss";
import "@/styles/main.scss";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { GoogleTagManager } from '@next/third-parties/google'
import ResourceHints from '@/components/resource-hints'
import GuaranteedServerSchema from '@/components/schema/GuaranteedServerSchema'
import HybridServerSchema from '@/components/schema/HybridServerSchema'

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
  // Solo aplicar upgrade-insecure-requests si la base URL usa HTTPS
  const shouldUpgradeInsecureRequests = process.env.NEXT_PUBLIC_BASE_URL?.startsWith('https://');

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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32_32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16_16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Core meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />

        {/* Content Security Policy - Solo upgrade a HTTPS si la base URL lo usa */}
        {shouldUpgradeInsecureRequests && (
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        )}
        {SHOULD_ROBOTS_INDEX && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P8J6LTX');
              `,
            }}
          />
        )}

        {/* Schema 100% server-side para SEO */}
        <GuaranteedServerSchema />
        
        {/* Gestión de schemas durante navegación SPA */}
        <HybridServerSchema /> 
      </head>
      <body>
        {/* {SHOULD_ROBOTS_INDEX && <GoogleTagManager gtmId="GTM-P8J6LTX" />} */}
        {SHOULD_ROBOTS_INDEX && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-P8J6LTX`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
