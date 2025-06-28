export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/.env',
          '/.git',
          '/node_modules/',
          '/_next/static/development/',
          '/_next/static/webpack/',
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