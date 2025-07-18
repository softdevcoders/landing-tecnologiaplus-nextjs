const path = require('path');
// Bundle analyzer (only when ANALYZE env var is set)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  
  // Configuración del compilador SWC para optimizar para navegadores modernos
  compiler: {
    // Remover consoles en producción para optimizar el bundle
    removeConsole: process.env.NODE_ENV === 'production',
    // Minify CSS
    styledComponents: true,
  },
  
  // SWC está habilitado por defecto en Next.js 15
  
  images: {
    domains: ['res.cloudinary.com', 'i.ytimg.com', '31.97.14.208', 'tecnologiaplus.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '31.97.14.208',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tecnologiaplus.com',
        pathname: '**',
      }
    ],
    // unoptimized: process.env.NODE_ENV === 'production',
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  
  webpack: (config, { dev, isServer }) => {
    // Configurar para navegadores modernos - evitar polyfills innecesarios
    if (!dev && !isServer) {
      // Deshabilitar polyfills específicos que ya son soportados por navegadores modernos
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Evitar polyfills para características ES6+ ya soportadas
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.string.trim-start': false,
      };
      
      // Configurar para usar características nativas de navegadores modernos
      config.resolve.alias = {
        ...config.resolve.alias,
        // Mapear a implementaciones nativas cuando sea posible
        'core-js/stable/array/at': 'core-js/stable/array/at',
        'core-js/stable/array/flat': 'core-js/stable/array/flat',
        'core-js/stable/array/flat-map': 'core-js/stable/array/flat-map',
        'core-js/stable/object/from-entries': 'core-js/stable/object/from-entries',
        'core-js/stable/object/has-own': 'core-js/stable/object/has-own',
        'core-js/stable/string/trim-end': 'core-js/stable/string/trim-end',
        'core-js/stable/string/trim-start': 'core-js/stable/string/trim-start',
      };
    }

    // Optimizaciones específicas para Swiper
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000, // Increased to reduce CSS chunking
          cacheGroups: {
            // Combine all CSS into fewer chunks
            styles: {
              name: 'styles',
              test: /\.(css|scss|sass)$/,
              chunks: 'all',
              enforce: true,
              priority: 30,
            },
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'swiper',
              priority: 10,
              enforce: true,
            },
            swiperModules: {
              test: /[\\/]node_modules[\\/]swiper[\\/]modules[\\/]/,
              name: 'swiper-modules',
              priority: 20,
              enforce: true,
            },
          },
        },
      };
    }

    // Alias Swiper to dynamic client-only wrapper to reduce bundle size
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'swiper/react': path.resolve(__dirname, 'src/components/ui/SwiperDynamic'),
    };

    // Optimize CSS loading in production - Next.js handles this automatically
    // Additional CSS optimization is handled by the splitChunks configuration above

    // You can customize webpack configuration here
    return config;
  },
  // async redirects() {
  //   return [
  //     // Redirigir HTTP a HTTPS de manera segura
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'header',
  //           key: 'x-forwarded-proto',
  //           value: 'http'
  //         }
  //       ],
  //       permanent: true,
  //       destination: 'https://tecnologiaplus.com/:path*',
  //       basePath: false
  //     },
  //     // Redirigir www a non-www de manera segura
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: 'www.tecnologiaplus.com'
  //         }
  //       ],
  //       permanent: true,
  //       destination: 'https://tecnologiaplus.com/:path*',
  //       basePath: false
  //     },
  //   ];
  // },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'react-icons',
      'lodash',
    ],
  },
  // Enable source maps in production
  productionBrowserSourceMaps: false,
  // Configuración de caché
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hora
    pagesBufferLength: 5,
  },
  // Headers de seguridad actualizados
  async headers() {
    return [
      // Bloquear indexación de archivos _next
      // {
      //   source: '/_next/:path*',
      //   headers: [
      //     {
      //       key: 'X-Robots-Tag',
      //       value: 'noindex, nofollow, nosnippet, noarchive, noimageindex'
      //     }
      //   ]
      // },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tecnologiaplus.com'
          }
        ],
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), bluetooth=(), serial=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https://*.cloudinary.com https://*.googleapis.com https://*.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://ssl.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://*.tawk.to https://embed.tawk.to; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com data:; font-src 'self' data: https://fonts.gstatic.com https://*.gstatic.com http://fonts.gstatic.com http://*.gstatic.com; img-src 'self' data: blob: https: https://www.google-analytics.com https://www.googletagmanager.com https://*.cloudinary.com https://*.google.com https://*.googleadservices.com; connect-src 'self' https://* wss://*; frame-src 'self' https://www.googletagmanager.com https://*.tawk.to https://tawk.to https://*.doubleclick.net https://*.google.com https://*.googleadservices.com https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com; base-uri 'self'; form-action 'self'; worker-src 'self' blob:; object-src 'none'; media-src 'self' https://*.cloudinary.com"
          }
        ]
      }
    ];
  },
};

// Export wrapped config (adds bundle analyzer if enabled)
module.exports = withBundleAnalyzer(nextConfig); 