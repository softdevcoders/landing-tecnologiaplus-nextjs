#!/usr/bin/env node

const https = require('https');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Configuración
const BASE_URL = 'https://tecnologiaplus.com';
const MAX_CONCURRENT_REQUESTS = 3;
const DELAY_BETWEEN_REQUESTS = 1000;
const REQUEST_TIMEOUT = 10000;

// Datos de rutas y posts
const routes = {
  home: { url: '/', type: 'page', label: 'Página Principal' },
  blog: { url: '/blog', type: 'page', label: 'Blog Principal' },
  contacto: { url: '/contacto', type: 'page', label: 'Contacto' },
  landings: {
    'localizadores-para-restaurantes': { url: '/localizadores-para-restaurantes', type: 'landing', label: 'Localizadores' },
    'llamadores-de-meseros': { url: '/llamadores-de-meseros', type: 'landing', label: 'Llamadores' },
    'turnero-turnoexpress': { url: '/turnero-turnoexpress', type: 'landing', label: 'Turnero' },
    'sistema-de-turnos-turnomaster': { url: '/sistema-de-turnos-turnomaster', type: 'landing', label: 'Sistema Turnos' },
    'rollos-de-fichos-para-turnos': { url: '/rollos-de-fichos-para-turnos', type: 'landing', label: 'Rollos Fichos' },
    'rollos-de-papel-termico': { url: '/rollos-de-papel-termico', type: 'landing', label: 'Rollos Térmicos' },
    'dispensador-de-tickets': { url: '/dispensador-de-tickets', type: 'landing', label: 'Dispensador' },
    'llamado-de-enfermeria-cuidamaster': { url: '/llamado-de-enfermeria-cuidamaster', type: 'landing', label: 'Enfermería' },
    'calificador-de-servicio-al-cliente-opinamaster': { url: '/calificador-de-servicio-al-cliente-opinamaster', type: 'landing', label: 'Calificador' },
    'encuesta-virtual-opinamaster': { url: '/encuesta-virtual-opinamaster', type: 'landing', label: 'Encuesta' }
  },
  landingsChildren: {
    'localizadores-para-restaurantes': [
      { url: '/localizadores-para-restaurantes/localizadores-rec-v3', type: 'landing-child', label: 'Localizador REC V3' },
      { url: '/localizadores-para-restaurantes/localizadores-cir-c2', type: 'landing-child', label: 'Localizador CIR C2' }
    ],
    'llamadores-de-meseros': [
      { url: '/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar', type: 'landing-child', label: 'Llamador E2-N' },
      { url: '/llamadores-de-meseros/llamador-de-meseros-e2-b', type: 'landing-child', label: 'Llamador E2-B' },
      { url: '/llamadores-de-meseros/hablador-de-mesa', type: 'landing-child', label: 'Hablador Mesa' },
      { url: '/llamadores-de-meseros/control-numerico', type: 'landing-child', label: 'Control Numérico' },
      { url: '/llamadores-de-meseros/reloj-receptor-de-llamados', type: 'landing-child', label: 'Reloj Receptor' },
      { url: '/llamadores-de-meseros/pantalla-t1-b', type: 'landing-child', label: 'Pantalla T1-B' },
      { url: '/llamadores-de-meseros/pantalla-t6', type: 'landing-child', label: 'Pantalla T6' }
    ],
    'turnero-turnoexpress': [
      { url: '/turnero-turnoexpress/turnero-t3-modulo-turno', type: 'landing-child', label: 'Turnero T3' },
      { url: '/turnero-turnoexpress/turnero-t3-con-logo', type: 'landing-child', label: 'Turnero T3 Logo' },
      { url: '/turnero-turnoexpress/turnero-t1-b', type: 'landing-child', label: 'Turnero T1-B' },
      { url: '/turnero-turnoexpress/turnero-t1-n', type: 'landing-child', label: 'Turnero T1-N' },
      { url: '/turnero-turnoexpress/turnero-fila-unica-supermercados', type: 'landing-child', label: 'Turnero Fila Única' },
      { url: '/turnero-turnoexpress/turnero-transformer', type: 'landing-child', label: 'Turnero Transformer' }
    ],
    'rollos-de-fichos-para-turnos': [
      { url: '/rollos-de-fichos-para-turnos/rollos-de-turnos', type: 'landing-child', label: 'Rollos Turnos' }
    ],
    'rollos-de-papel-termico': [
      { url: '/rollos-de-papel-termico/rollos-termicos', type: 'landing-child', label: 'Rollos Térmicos' }
    ],
    'dispensador-de-tickets': [
      { url: '/dispensador-de-tickets/dispensador-de-tickets-caracol', type: 'landing-child', label: 'Dispensador Caracol' }
    ],
    'llamado-de-enfermeria-cuidamaster': [
      { url: '/llamado-de-enfermeria-cuidamaster/alarma-de-luz', type: 'landing-child', label: 'Alarma Luz' },
      { url: '/llamado-de-enfermeria-cuidamaster/llamador-e2-blanco', type: 'landing-child', label: 'Llamador E2 Blanco' },
      { url: '/llamado-de-enfermeria-cuidamaster/llamador-e1-para-cuello', type: 'landing-child', label: 'Llamador E1 Cuello' },
      { url: '/llamado-de-enfermeria-cuidamaster/llamador-ex1', type: 'landing-child', label: 'Llamador EX1' },
      { url: '/llamado-de-enfermeria-cuidamaster/pantalla-t1-b', type: 'landing-child', label: 'Pantalla T1-B' },
      { url: '/llamado-de-enfermeria-cuidamaster/pantalla-t6', type: 'landing-child', label: 'Pantalla T6' },
      { url: '/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados', type: 'landing-child', label: 'Reloj Receptor' }
    ],
    'calificador-de-servicio-al-cliente-opinamaster': [
      { url: '/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio', type: 'landing-child', label: 'Calificador Servicio' },
      { url: '/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio', type: 'landing-child', label: 'Aviso Pared' }
    ]
  },
  blogCategories: [
    'rollos-de-papel-termico',
    'localizadores-para-restaurantes',
    'llamadores-de-meseros',
    'llamado-de-enfermeria',
    'sistema-de-turnos',
    'turnero',
    'dispensador-de-tickets',
    'rollos-de-fichos-para-turnos',
    'calificador-de-servicio-al-cliente',
    'encuesta-virtual'
  ]
};

// URLs reales de los posts del blog extraídas automáticamente de src/data/blogs/index.js
const blogPosts = [
  { url: '/blog/llamado-de-enfermeria/como-mejorar-servicio-enfermeria-en-geriatricos', type: 'blog-post', label: 'Post 1 - como mejorar servicio enfermeria en geriatricos' },
  { url: '/blog/llamado-de-enfermeria/por-que-usar-sistema-llamado-de-enfermeria', type: 'blog-post', label: 'Post 2 - por que usar sistema llamado de enfermeria' },
  { url: '/blog/llamado-de-enfermeria/beneficios-invertir-en-sistemas-de-llamador-de-pacientes', type: 'blog-post', label: 'Post 3 - beneficios invertir en sistemas de llamador de pacientes' },
  { url: '/blog/llamado-de-enfermeria/mejora-experiencia-paciente-con-timbre-llamado-enfermeria', type: 'blog-post', label: 'Post 4 - mejora experiencia paciente con timbre llamado enfermeria' },
  { url: '/blog/llamado-de-enfermeria/como-llamadores-enfermeria-transforman-hospitales', type: 'blog-post', label: 'Post 5 - como llamadores enfermeria transforman hospitales' },
  { url: '/blog/llamado-de-enfermeria/timbre-para-cama-hospital-atencion-rapida-paciente', type: 'blog-post', label: 'Post 6 - timbre para cama hospital atencion rapida paciente' },
  { url: '/blog/llamado-de-enfermeria/boton-para-llamar-enfermera-facilita-labor-personal', type: 'blog-post', label: 'Post 7 - boton para llamar enfermera facilita labor personal' },
  { url: '/blog/llamadores-de-meseros/como-reducir-tiempos-espera-restaurante', type: 'blog-post', label: 'Post 8 - como reducir tiempos espera restaurante' },
  { url: '/blog/llamadores-de-meseros/implementar-timbres-de-mesa-para-restaurante', type: 'blog-post', label: 'Post 9 - implementar timbres de mesa para restaurante' },
  { url: '/blog/llamadores-de-meseros/llamadores-mesa-tecnologia-revoluciona-atencion-al-cliente', type: 'blog-post', label: 'Post 10 - llamadores mesa tecnologia revoluciona atencion al cliente' },
  { url: '/blog/llamadores-de-meseros/reducir-tiempo-de-espera-mejora-satisfaccion-del-cliente', type: 'blog-post', label: 'Post 11 - reducir tiempo de espera mejora satisfaccion del cliente' },
  { url: '/blog/llamadores-de-meseros/aumenta-propinas-llamadores-de-meseros-en-restaurantes', type: 'blog-post', label: 'Post 12 - aumenta propinas llamadores de meseros en restaurantes' },
  { url: '/blog/llamadores-de-meseros/como-mejorar-administracion-restaurantes', type: 'blog-post', label: 'Post 13 - como mejorar administracion restaurantes' },
  { url: '/blog/llamadores-de-meseros/transforma-atencion-cliente-llamadores-de-meseros', type: 'blog-post', label: 'Post 14 - transforma atencion cliente llamadores de meseros' },
  { url: '/blog/llamadores-de-meseros/como-mejorar-servicio-restaurante', type: 'blog-post', label: 'Post 15 - como mejorar servicio restaurante' },
  { url: '/blog/llamadores-de-meseros/mejorar-atencion-gimnasios-llamador-entrenadores', type: 'blog-post', label: 'Post 16 - mejorar atencion gimnasios llamador entrenadores' },
  { url: '/blog/llamadores-de-meseros/llamadores-meseros-esenciales-elevar-nivel-restaurante', type: 'blog-post', label: 'Post 17 - llamadores meseros esenciales elevar nivel restaurante' },
  { url: '/blog/llamadores-de-meseros/llamador-de-meseros-realmente-necesario', type: 'blog-post', label: 'Post 18 - llamador de meseros realmente necesario' },
  { url: '/blog/llamadores-de-meseros/timbre-inalambrico-para-restaurantes-revoluciona-el-servicio', type: 'blog-post', label: 'Post 19 - timbre inalambrico para restaurantes revoluciona el servicio' },
  { url: '/blog/localizadores-para-restaurantes/autoservicio-restaurante-8-infaltables', type: 'blog-post', label: 'Post 20 - autoservicio restaurante 8 infaltables' },
  { url: '/blog/localizadores-para-restaurantes/avisadores-clientes-restaurante-autoservicio', type: 'blog-post', label: 'Post 21 - avisadores clientes restaurante autoservicio' },
  { url: '/blog/localizadores-para-restaurantes/escoger-localizador-ideal-restaurante-bogota', type: 'blog-post', label: 'Post 22 - escoger localizador ideal restaurante bogota' },
  { url: '/blog/localizadores-para-restaurantes/autoservicio-colombia-6-claves', type: 'blog-post', label: 'Post 23 - autoservicio colombia 6 claves' },
  { url: '/blog/localizadores-para-restaurantes/localizadores-clientes-autoservicio', type: 'blog-post', label: 'Post 24 - localizadores clientes autoservicio' },
  { url: '/blog/localizadores-para-restaurantes/como-elegir-localizadores-para-restaurantes', type: 'blog-post', label: 'Post 25 - como elegir localizadores para restaurantes' },
  { url: '/blog/localizadores-para-restaurantes/por-que-usar-localizadores-para-restaurantes', type: 'blog-post', label: 'Post 26 - por que usar localizadores para restaurantes' },
  { url: '/blog/localizadores-para-restaurantes/caos-zonas-de-comida', type: 'blog-post', label: 'Post 27 - caos zonas de comida' },
  { url: '/blog/localizadores-para-restaurantes/secreto-espera-agradable', type: 'blog-post', label: 'Post 28 - secreto espera agradable' },
  { url: '/blog/localizadores-para-restaurantes/avisador-de-pedidos-fidelizacion-clientes', type: 'blog-post', label: 'Post 29 - avisador de pedidos fidelizacion clientes' },
  { url: '/blog/localizadores-para-restaurantes/guia-localizadores-clientes-restaurantes-colombia', type: 'blog-post', label: 'Post 30 - guia localizadores clientes restaurantes colombia' },
  { url: '/blog/localizadores-para-restaurantes/localizadores-autoservicio-bogota-rec-v3', type: 'blog-post', label: 'Post 31 - localizadores autoservicio bogota rec v3' },
  { url: '/blog/localizadores-para-restaurantes/sistema-de-llamado-restaurante-porque-lo-necesitas', type: 'blog-post', label: 'Post 32 - sistema de llamado restaurante porque lo necesitas' },
  { url: '/blog/localizadores-para-restaurantes/localizadores-clientes-atencion-sin-mas-personal', type: 'blog-post', label: 'Post 33 - localizadores clientes atencion sin mas personal' },
  { url: '/blog/localizadores-para-restaurantes/como-funcionan-localizadores-restaurantes-pasos', type: 'blog-post', label: 'Post 34 - como funcionan localizadores restaurantes pasos' },
  { url: '/blog/localizadores-para-restaurantes/localizadores-clientes-resistentes-golpes-caidas', type: 'blog-post', label: 'Post 35 - localizadores clientes resistentes golpes caidas' },
  { url: '/blog/turnero/moderniza-tu-atencion-cliente-restaurantes-autoservicio', type: 'blog-post', label: 'Post 36 - moderniza tu atencion cliente restaurantes autoservicio' },
  { url: '/blog/turnero/orden-en-salas-de-espera-digiturno', type: 'blog-post', label: 'Post 37 - orden en salas de espera digiturno' },
  { url: '/blog/turnero/organizador-filas-digital-como-funciona', type: 'blog-post', label: 'Post 38 - organizador filas digital como funciona' },
  { url: '/blog/turnero/turneros-digitales-casos-exito-colombia', type: 'blog-post', label: 'Post 39 - turneros digitales casos exito colombia' },
  { url: '/blog/turnero/gestor-turnos-clientes-digitales-manuales', type: 'blog-post', label: 'Post 40 - gestor turnos clientes digitales manuales' },
  { url: '/blog/turnero/como-mejorar-servicio-enfermeria-en-geriatricos', type: 'blog-post', label: 'Post 41 - como mejorar servicio enfermeria en geriatricos' },
  { url: '/blog/sistema-de-turnos/reducir-tiempo-espera-gestion-turnos', type: 'blog-post', label: 'Post 42 - reducir tiempo espera gestion turnos' },
  { url: '/blog/sistema-de-turnos/sistema-espera-inteligente-como-funciona', type: 'blog-post', label: 'Post 43 - sistema espera inteligente como funciona' },
  { url: '/blog/sistema-de-turnos/mejor-sistema-turnos-inalambrico-drogueria', type: 'blog-post', label: 'Post 44 - mejor sistema turnos inalambrico drogueria' },
  { url: '/blog/sistema-de-turnos/pantalla-de-turnos-plan-eficaz-equipo', type: 'blog-post', label: 'Post 45 - pantalla de turnos plan eficaz equipo' },
  { url: '/blog/sistema-de-turnos/mejor-software-turnos-negocio', type: 'blog-post', label: 'Post 46 - mejor software turnos negocio' },
  { url: '/blog/sistema-de-turnos/mejorar-gestion-filas', type: 'blog-post', label: 'Post 47 - mejorar gestion filas' },
  { url: '/blog/sistema-de-turnos/importancia-sistema-turnos-negocios-beneficios', type: 'blog-post', label: 'Post 48 - importancia sistema turnos negocios beneficios' },
  { url: '/blog/sistema-de-turnos/5-ventajas-software-turnos', type: 'blog-post', label: 'Post 49 - 5 ventajas software turnos' },
  { url: '/blog/sistema-de-turnos/organizar-filas-turnero-digital', type: 'blog-post', label: 'Post 50 - organizar filas turnero digital' },
  { url: '/blog/sistema-de-turnos/integrar-sistema-espera-software-gestion-facturacion', type: 'blog-post', label: 'Post 51 - integrar sistema espera software gestion facturacion' },
  { url: '/blog/sistema-de-turnos/facilitar-transicion-software-gestion-turnos', type: 'blog-post', label: 'Post 52 - facilitar transicion software gestion turnos' },
  { url: '/blog/turnero/como-mejorar-servicio-enfermeria-en-geriatricos', type: 'blog-post', label: 'Post 53 - como mejorar servicio enfermeria en geriatricos' },
  { url: '/blog/dispensador-de-tickets/calcular-inversion-despachador-tickets-colombia', type: 'blog-post', label: 'Post 54 - calcular inversion despachador tickets colombia' },
  { url: '/blog/dispensador-de-tickets/deberias-tener-dispensador-turnos-negocio', type: 'blog-post', label: 'Post 55 - deberias tener dispensador turnos negocio' },
  { url: '/blog/dispensador-de-tickets/integrar-dispensador-turnos-sistema-gestion', type: 'blog-post', label: 'Post 56 - integrar dispensador turnos sistema gestion' },
  { url: '/blog/dispensador-de-tickets/mejora-la-atencion-en-negocio-con-un-despachador-de-tickets', type: 'blog-post', label: 'Post 57 - mejora la atencion en negocio con un despachador de tickets' },
  { url: '/blog/rollos-de-fichos-para-turnos/todo-lo-que-necesitas-saber-numeros-guia-completa', type: 'blog-post', label: 'Post 58 - todo lo que necesitas saber numeros guia completa' },
  { url: '/blog/rollos-de-fichos-para-turnos/aspectos-clave-comprar-rollos-turnos', type: 'blog-post', label: 'Post 59 - aspectos clave comprar rollos turnos' },
  { url: '/blog/rollos-de-fichos-para-turnos/rollos-para-turneros', type: 'blog-post', label: 'Post 60 - rollos para turneros' },
  { url: '/blog/rollos-de-papel-termico/secreto-del-exito-en-gestion-de-turnos', type: 'blog-post', label: 'Post 61 - secreto del exito en gestion de turnos' },
  { url: '/blog/rollos-de-papel-termico/que-es-papel-transferencia-termica-como-usarlo', type: 'blog-post', label: 'Post 62 - que es papel transferencia termica como usarlo' },
  { url: '/blog/rollos-de-papel-termico/como-ahorrar-dinero-medio-ambiente', type: 'blog-post', label: 'Post 63 - como ahorrar dinero medio ambiente' },
  { url: '/blog/calificador-de-servicio-al-cliente/evaluar-calidad-servicio-cliente', type: 'blog-post', label: 'Post 64 - evaluar calidad servicio cliente' },
  { url: '/blog/calificador-de-servicio-al-cliente/herramienta-retroalimentacion-cliente', type: 'blog-post', label: 'Post 65 - herramienta retroalimentacion cliente' },
  { url: '/blog/calificador-de-servicio-al-cliente/como-mejorar-la-satisfaccion-del-cliente', type: 'blog-post', label: 'Post 66 - como mejorar la satisfaccion del cliente' },
  { url: '/blog/calificador-de-servicio-al-cliente/por-que-usar-calificadores-de-servicio', type: 'blog-post', label: 'Post 67 - por que usar calificadores de servicio' },
  { url: '/blog/calificador-de-servicio-al-cliente/como-califica-servicio-preguntas-personalizadas', type: 'blog-post', label: 'Post 68 - como califica servicio preguntas personalizadas' }
];

// Función para hacer petición HTTP/HTTPS
async function makeRequest(urlString) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(urlString);
    const isHttps = parsedUrl.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (isHttps ? 443 : 80),
      path: parsedUrl.path,
      method: 'GET',
      timeout: REQUEST_TIMEOUT,
      headers: {
        'User-Agent': 'SEO-Audit-Bot/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    };

    const req = client.request(options, (res) => {
      let body = '';
      let redirectUrl = null;

      // Manejar redirecciones
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        redirectUrl = res.headers.location;
      }

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body,
          redirectUrl: redirectUrl
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Función para verificar problemas de indexación y capturar detalles
function hasIndexingIssues(headers, html) {
  const issues = [];
  const foundHeaders = [];
  const foundMetas = [];
  
  // Verificar X-Robots-Tag
  const xRobotsTag = headers['x-robots-tag'];
  if (xRobotsTag) {
    foundHeaders.push(`X-Robots-Tag: ${xRobotsTag}`);
    const lowerTag = xRobotsTag.toLowerCase();
    if (lowerTag.includes('noindex') || lowerTag.includes('nofollow')) {
      issues.push(`X-Robots-Tag restrictivo: ${xRobotsTag}`);
    }
  }
  
  // Verificar Cache-Control (solo para información, no es problema SEO)
  const cacheControl = headers['cache-control'];
  if (cacheControl) {
    foundHeaders.push(`Cache-Control: ${cacheControl}`);
    // Cache-Control no afecta la indexación, no se marca como problema
  }
  
  // Verificar meta robots
  const robotsMetaRegex = /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/gi;
  let match;
  while ((match = robotsMetaRegex.exec(html)) !== null) {
    foundMetas.push(`Meta robots: ${match[1]}`);
    const content = match[1].toLowerCase();
    if (content.includes('noindex') || content.includes('nofollow')) {
      issues.push(`Meta robots restrictivo: ${match[1]}`);
    }
  }
  
  // Verificar meta googlebot
  const googlebotMetaRegex = /<meta[^>]*name=["']googlebot["'][^>]*content=["']([^"']*)["'][^>]*>/gi;
  while ((match = googlebotMetaRegex.exec(html)) !== null) {
    foundMetas.push(`Meta googlebot: ${match[1]}`);
    const content = match[1].toLowerCase();
    if (content.includes('noindex') || content.includes('nofollow')) {
      issues.push(`Meta googlebot restrictivo: ${match[1]}`);
    }
  }
  
  return {
    issues,
    foundHeaders,
    foundMetas
  };
}

// Función para extraer URLs de landing pages
function extractLandingUrls() {
  const urls = [];
  
  // Agregar landing pages principales
  Object.entries(routes.landings).forEach(([key, landing]) => {
    urls.push({
      url: `${BASE_URL}${landing.url}`,
      type: landing.type,
      label: landing.label,
      expectedNoindex: false
    });
  });
  
  // Agregar landing pages hijas
  Object.entries(routes.landingsChildren).forEach(([parentKey, children]) => {
    children.forEach(child => {
      urls.push({
        url: `${BASE_URL}${child.url}`,
        type: child.type,
        label: child.label,
        expectedNoindex: false
      });
    });
  });
  
  return urls;
}

// Función para generar todas las URLs
function generateAllUrls() {
  const urls = [];
  
  // Páginas principales
  Object.entries(routes).forEach(([key, route]) => {
    if (typeof route === 'object' && route.url && route.type === 'page') {
      urls.push({
        url: `${BASE_URL}${route.url}`,
        type: route.type,
        label: route.label,
        expectedNoindex: false
      });
    }
  });
  
  // Landing pages
  urls.push(...extractLandingUrls());
  
  // Posts del blog
  blogPosts.forEach(post => {
    urls.push({
      url: `${BASE_URL}${post.url}`,
      type: post.type,
      label: post.label,
      expectedNoindex: false
    });
  });
  
  // Paginaciones del blog (páginas 2-10)
  for (let page = 2; page <= 10; page++) {
    urls.push({
      url: `${BASE_URL}/blog?page=${page}`,
      type: 'blog-pagination',
      label: `Blog Paginación ${page}`,
      expectedNoindex: true
    });
  }
  
  // Paginaciones de categorías (páginas 2-5)
  routes.blogCategories.forEach(category => {
    for (let page = 2; page <= 5; page++) {
      urls.push({
        url: `${BASE_URL}/blog/${category}?page=${page}`,
        type: 'category-pagination',
        label: `${category} Paginación ${page}`,
        expectedNoindex: true
      });
    }
  });
  
  return urls;
}

// Función para procesar una URL
async function processUrl(urlData) {
  const { url, type, label, expectedNoindex } = urlData;
  
  try {
    console.log(`Verificando: ${url}`);
    console.log(`  Tipo: ${type} | Esperado: ${expectedNoindex ? 'DESINDEXADA' : 'INDEXADA'}`);
    
    const response = await makeRequest(url);
    const indexingResult = hasIndexingIssues(response.headers, response.body);
    const issues = indexingResult.issues;
    const hasIssues = issues.length > 0;
    
    // Determinar si el comportamiento es correcto
    let status = 'CORRECTO';
    if (response.statusCode >= 400) {
      status = 'ERROR';
    } else if (expectedNoindex && !hasIssues) {
      status = 'PROBLEMA'; // Debería estar desindexada pero no tiene etiquetas restrictivas
    } else if (!expectedNoindex && hasIssues) {
      status = 'PROBLEMA'; // Debería estar indexada pero tiene etiquetas restrictivas
    }
    
    // Mostrar resultado
    if (status === 'CORRECTO') {
      if (expectedNoindex) {
        console.log(`  ✅ Correctamente desindexada`);
        if (issues.length > 0) {
          issues.forEach(issue => console.log(`    - ${issue}`));
        }
      } else {
        console.log(`  ✅ Correctamente indexada`);
      }
    } else if (status === 'PROBLEMA') {
      console.log(`  ❌ Debería estar ${expectedNoindex ? 'desindexada' : 'indexada'} pero ${expectedNoindex ? 'no tiene' : 'tiene'} etiquetas restrictivas`);
      if (issues.length > 0) {
        issues.forEach(issue => console.log(`    - ${issue}`));
      }
    } else {
      console.log(`  ⚠️ Error: ${response.statusCode}`);
    }
    
    return {
      url, type, label, statusCode: response.statusCode,
      expectedNoindex, hasIssues, issues, status, redirectUrl: response.redirectUrl,
      foundHeaders: indexingResult.foundHeaders,
      foundMetas: indexingResult.foundMetas
    };
    
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    return {
      url, type, label, statusCode: 0,
      expectedNoindex, hasIssues: false, issues: [error.message], status: 'ERROR', redirectUrl: null,
      foundHeaders: [], foundMetas: []
    };
  }
}

// Función para procesar URLs en lotes
async function processUrlsInBatches(urls) {
  const results = [];
  const totalBatches = Math.ceil(urls.length / MAX_CONCURRENT_REQUESTS);
  
  for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQUESTS) {
    const batch = urls.slice(i, i + MAX_CONCURRENT_REQUESTS);
    const batchNumber = Math.floor(i / MAX_CONCURRENT_REQUESTS) + 1;
    
    console.log(`\nProcesando lote ${batchNumber}/${totalBatches} (${batch.length} URLs)`);
    
    const batchPromises = batch.map(processUrl);
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    if (i + MAX_CONCURRENT_REQUESTS < urls.length) {
      console.log(`Esperando ${DELAY_BETWEEN_REQUESTS}ms antes del siguiente lote...`);
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
    }
  }
  
  return results;
}

// Función para generar reporte
function generateReport(results) {
  const summary = {
    totalUrls: results.length,
    correctBehavior: results.filter(r => r.status === 'CORRECTO').length,
    problems: results.filter(r => r.status === 'PROBLEMA').length,
    errors: results.filter(r => r.status === 'ERROR').length
  };
  
  console.log('\n=== REPORTE DE AUDITORÍA SEO ===');
  console.log(`Total de URLs verificadas: ${summary.totalUrls}`);
  console.log(`Comportamiento correcto: ${summary.correctBehavior}`);
  console.log(`Problemas encontrados: ${summary.problems}`);
  console.log(`Errores de conexión: ${summary.errors}`);
  
  if (summary.problems > 0) {
    console.log('\nURLs CON PROBLEMAS:\n');
    results.filter(r => r.status === 'PROBLEMA').forEach(result => {
      console.log(`${result.url}`);
      console.log(`  Tipo: ${result.type} | Esperado: ${result.expectedNoindex ? 'DESINDEXADA' : 'INDEXADA'}`);
      result.issues.forEach(issue => console.log(`  - ${issue}`));
      console.log('');
    });
  }
  
  if (summary.errors > 0) {
    console.log('\nURLs CON ERRORES:\n');
    results.filter(r => r.status === 'ERROR').forEach(result => {
      console.log(`${result.url} - ${result.issues[0]}`);
    });
  }
  
  if (summary.problems === 0 && summary.errors === 0) {
    console.log('\n🎉 ¡Excelente! Todas las URLs tienen el comportamiento correcto');
  } else if (summary.problems > 0) {
    console.log(`\n⚠️  Se encontraron ${summary.problems} URLs con problemas`);
  }
  
  return { summary, results };
}

// Función principal
async function main() {
  console.log('🔍 AUDITORÍA SEO - TECNOLOGIAPLUS.COM');
  console.log('Verificando indexación correcta según expectativas\n');
  
  const urls = generateAllUrls();
  console.log(`Total de URLs a verificar: ${urls.length}\n`);
  
  const results = await processUrlsInBatches(urls);
  const report = generateReport(results);
  
  // Guardar reporte
  const reportPath = path.join(__dirname, 'seo-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n✅ Reporte guardado en: ${reportPath}`);
}

// Ejecutar script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, generateAllUrls, processUrl, makeRequest, hasIndexingIssues }; 