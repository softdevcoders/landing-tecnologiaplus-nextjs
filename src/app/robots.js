import { SHOULD_ROBOTS_INDEX } from "@/data/metadata/config";

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

  if (!SHOULD_ROBOTS_INDEX) {
    // Para staging: bloquear toda indexación
    return {
      rules: [
        {
          userAgent: '*',
          disallow: ['/'],
        }
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    }
  }

  // Para producción: configuración actual
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
          '/blog/*'
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
          '/500'
        ]
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: [
          '/',
          '/blog/*'
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
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
    crawlDelay: 10
  }
} 