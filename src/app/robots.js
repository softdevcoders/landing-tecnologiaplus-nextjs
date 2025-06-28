export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/image*',
          '/_next/static/images/*',
          '/_next/static/media/*'
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
          '/*?*'  // Clean Parameters
        ]
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
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