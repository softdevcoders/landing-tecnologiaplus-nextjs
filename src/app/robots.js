export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/image*',
          '/_next/static/images/*',
          '/_next/static/media/*',
          '/blog/*?page=*'
        ],
        disallow: [
          '/api/',
          '/_next/static/development/*',
          '/_next/static/webpack/*',
          '/_next/static/chunks/*',
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