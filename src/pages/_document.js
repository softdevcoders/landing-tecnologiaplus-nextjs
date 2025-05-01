import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Additional performance optimization headers */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        
        {/* PWA support */}
        <meta name="application-name" content="Tecnología Plus" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tecnología Plus" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* More permissive Content Security Policy */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: http:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src https://www.youtube-nocookie.com https://www.youtube.com;" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Script to add dimensions to images that don't have them (client-side fix for CLS) */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Fix CLS issues by adding dimensions to images without width/height
                window.addEventListener('DOMContentLoaded', function() {
                  const images = document.querySelectorAll('img:not([width]):not([height])');
                  images.forEach(img => {
                    // Set default dimensions to reduce CLS
                    if (!img.hasAttribute('width')) {
                      img.setAttribute('width', '300');
                    }
                    if (!img.hasAttribute('height')) {
                      img.setAttribute('height', '200');
                    }
                    
                    // Set aspect ratio to prevent layout shifts
                    img.style.aspectRatio = img.width + ' / ' + img.height;
                  });
                });
              `,
            }}
          />
        )}
      </body>
    </Html>
  );
} 