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

  // Para producción: configuración óptima
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/*',
          '/contacto/',
          '/localizadores-para-restaurantes/*',
          '/llamadores-de-meseros/*',
          '/llamado-de-enfermeria-cuidamaster/*',
          '/sistema-de-turnos-turnomaster/*',
          '/turnero-turnoexpress/*',
          '/dispensador-de-tickets/*',
          '/rollos-de-fichos-para-turnos/*',
          '/rollos-de-papel-termico/*',
          '/calificador-de-servicio-al-cliente-opinamaster/*',
          '/encuesta-virtual-opinamaster/*'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/.env',
          '/.git/',
          '/node_modules/',
          '/_error',
          '/404',
          '/500',
          '/test-migration/',
          '/manifest.json',
          '/favicon.ico'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/blog/*',
          '/contacto/',
          '/localizadores-para-restaurantes/*',
          '/llamadores-de-meseros/*',
          '/llamado-de-enfermeria-cuidamaster/*',
          '/sistema-de-turnos-turnomaster/*',
          '/turnero-turnoexpress/*',
          '/dispensador-de-tickets/*',
          '/rollos-de-fichos-para-turnos/*',
          '/rollos-de-papel-termico/*',
          '/calificador-de-servicio-al-cliente-opinamaster/*',
          '/encuesta-virtual-opinamaster/*'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/_vercel/',
          '/.env',
          '/.git/',
          '/node_modules/',
          '/_error',
          '/404',
          '/500',
          '/test-migration/',
          '/manifest.json',
          '/favicon.ico'
        ]
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: [
          '/',
        ],
        disallow: [
          '/_next/',
          '/api/',
          '/manifest.json',
          '/favicon.ico'
        ]
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