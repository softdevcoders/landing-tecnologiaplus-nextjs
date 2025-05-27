/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com', 'i.ytimg.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
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
    ],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Turbopack configuration for compatibility
  turbo: {
    loaders: {
      '.svg': ['@svgr/webpack', 'url-loader'],
      '.css': ['style-loader', 'css-loader'],
      '.scss': ['style-loader', 'css-loader', 'sass-loader'],
    },
    rules: {
      // Add specific rules for Turbopack if needed
    }
  },
  // Enhanced webpack configuration for optimizing JavaScript bundles
  webpack: (config, { isServer, dev }) => {
    // Only run optimizations in production builds
    if (dev) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/](?!swiper|@swiper)/,
            name(module) {
              const path = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              const name = path ? path[1].replace('@', '') : '';
              return `npm.${name.replace(/[\\/]/, '-')}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // Create separate chunk for Swiper
          swiper: {
            test: /[\\/]node_modules[\\/](swiper|@swiper)[\\/]/,
            name: 'swiper',
            priority: 20,
            enforce: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 10,
          },
          // Add a specific chunk for CSS
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
            priority: 50,
          },
        },
      };
      
      // Ensure consistent CSS rendering in production
      // Add this to fix SVG icon "breathing" issues
      if (config.module && config.module.rules) {
        // Find the CSS/SCSS rules
        const cssRules = config.module.rules.find(rule => 
          rule.oneOf && rule.oneOf.some(r => r.test && r.test.toString().includes('css'))
        );
        
        if (cssRules && cssRules.oneOf) {
          // Add specific options for CSS processing to ensure stable rendering
          cssRules.oneOf.forEach(rule => {
            if (rule.use && Array.isArray(rule.use)) {
              rule.use.forEach(loader => {
                if (loader.loader && loader.loader.includes('css-loader')) {
                  // Ensure consistent SVG rendering
                  loader.options = loader.options || {};
                  loader.options.importLoaders = 1;
                  loader.options.url = true;
                  // Add this to handle external URLs
                  loader.options.esModule = false;
                }
              });
            }
          });
        }
      }
    } else {
      // Development specific settings
      config.devtool = 'eval-source-map';
    }

    // Handle URLs in CSS
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
            esModule: false,
          }
        }
      ],
      include: [/node_modules/, /src/],
    });

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: ['@svgr/webpack'],
      },
      
    );

    return config;
  },
  experimental: {
    optimizeCss: true,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=(), attribution-reporting=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https: https://res.cloudinary.com https://i.ytimg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src data: 'self' https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com https://res.cloudinary.com; frame-src https://www.youtube-nocookie.com https://www.youtube.com; object-src 'none'; block-all-mixed-content; base-uri 'self'",
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      // Add cache header for robots.txt and sitemap
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          }
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          }
        ],
      },
      {
        source: '/sitemap-:path*.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
