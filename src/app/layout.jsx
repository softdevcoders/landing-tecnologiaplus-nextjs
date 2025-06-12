// Styles
import "@/styles/critical.scss";
import "@/styles/main.scss";
import GtmDeferred from '@/components/GtmDeferred'

import { Bebas_Neue, Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: ["400", "700", "900"],
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

        {/* Favicon explicit links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Core meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <GtmDeferred />
      </body>
    </html>
  );
}
