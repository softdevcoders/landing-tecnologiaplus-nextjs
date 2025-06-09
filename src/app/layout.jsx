// Styles
import "@/styles/critical.scss";
import "@/styles/main.scss";

import { Bebas_Neue, Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
})

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.className} ${bebas.className}`}>
      <head>
        {/* Favicon explicit links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Core meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        {process.env.SHOULD_ROBOTS_INDEX === 'true' && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
