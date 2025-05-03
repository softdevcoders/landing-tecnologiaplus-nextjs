export default async function sitemap() {
  const baseUrl = 'https://landing-tecnologiaplus-nextjs-dev.vercel.app';

  // Define all your static routes
  const staticRoutes = [
    '',
    '/llamador-meseros',
    '/localizadores',
    '/dispensador-de-tiquetes',
    '/contacto',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Product detail pages
  const productRoutes = [
    '/ver-mas/turnos/pantalla-t1b',
    '/ver-mas/turnos/pantalla-t1n',
    '/ver-mas/turnos/pantalla-t3',
    '/ver-mas/turnos/fila-unica',
    '/ver-mas/meseros/pantalla-t1b',
    '/ver-mas/enfermeria/pantalla-t1b'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
} 