export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/chunks/*',
          '/_next/static/css/*',
          '/_next/static/media/*',
          '/_next/image*',
          '/_next/static/[^/]+/*',
          '/blog/*?page=*'
        ],
        disallow: [
          '/api/',
          '/_next/static/development/*',
          '/_next/static/webpack/*',
          '/.env',
          '/.git',
          '/node_modules/',
          '/_error',
          '/404',
          '/500',
          '/*?*',
          '/*?*&*'
        ]
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: [
          '/',
          '/blog/*?page=*'
        ],
      },
      {
        userAgent: 'MJ12bot',
        disallow: ['/', '*'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/', '*'],
      },
      {
        userAgent: 'SemrushBot',
        disallow: ['/', '*'],
      }
    ],
    sitemap: 'https://tecnologiaplus.com/sitemap.xml',
    host: 'https://tecnologiaplus.com',
    crawlDelay: 10
  }
} 