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

const blogPosts = [
  { url: '/blog/llamado-de-enfermeria-cuidamaster/como-mejorar-servicio-enfermeria-en-geriatricos', type: 'blog-post', label: 'Mejorar Servicio Enfermería' },
  { url: '/blog/llamado-de-enfermeria-cuidamaster/por-que-usar-sistema-llamado-de-enfermeria', type: 'blog-post', label: 'Por Qué Usar Sistema Enfermería' },
  { url: '/blog/llamado-de-enfermeria-cuidamaster/beneficios-invertir-en-sistemas-de-llamador-de-pacientes', type: 'blog-post', label: 'Beneficios Llamador Pacientes' },
  { url: '/blog/llamadores-de-meseros/ventajas-sistema-llamador-meseros', type: 'blog-post', label: 'Ventajas Llamador Meseros' },
  { url: '/blog/llamadores-de-meseros/como-funciona-sistema-llamador-meseros', type: 'blog-post', label: 'Cómo Funciona Llamador Meseros' },
  { url: '/blog/localizadores-para-restaurantes/beneficios-localizadores-restaurantes', type: 'blog-post', label: 'Beneficios Localizadores' },
  { url: '/blog/localizadores-para-restaurantes/como-funciona-localizador-restaurantes', type: 'blog-post', label: 'Cómo Funciona Localizador' },
  { url: '/blog/turnero-turnoexpress/ventajas-sistema-turnero', type: 'blog-post', label: 'Ventajas Sistema Turnero' },
  { url: '/blog/turnero-turnoexpress/como-funciona-turnero', type: 'blog-post', label: 'Cómo Funciona Turnero' },
  { url: '/blog/sistema-de-turnos-turnomaster/beneficios-sistema-turnos', type: 'blog-post', label: 'Beneficios Sistema Turnos' },
  { url: '/blog/sistema-de-turnos-turnomaster/como-funciona-sistema-turnos', type: 'blog-post', label: 'Cómo Funciona Sistema Turnos' },
  { url: '/blog/dispensador-de-tickets/ventajas-dispensador-tickets', type: 'blog-post', label: 'Ventajas Dispensador' },
  { url: '/blog/dispensador-de-tickets/como-funciona-dispensador-tickets', type: 'blog-post', label: 'Cómo Funciona Dispensador' },
  { url: '/blog/rollos-de-fichos-para-turnos/beneficios-rollos-fichos-turnos', type: 'blog-post', label: 'Beneficios Rollos Fichos' },
  { url: '/blog/rollos-de-fichos-para-turnos/como-funciona-rollos-fichos-turnos', type: 'blog-post', label: 'Cómo Funciona Rollos Fichos' },
  { url: '/blog/rollos-de-papel-termico/ventajas-rollos-papel-termico', type: 'blog-post', label: 'Ventajas Rollos Térmicos' },
  { url: '/blog/rollos-de-papel-termico/como-funciona-rollos-papel-termico', type: 'blog-post', label: 'Cómo Funciona Rollos Térmicos' },
  { url: '/blog/calificador-de-servicio-al-cliente-opinamaster/por-que-usar-calificadores-de-servicio', type: 'blog-post', label: 'Por Qué Usar Calificadores' },
  { url: '/blog/calificador-de-servicio-al-cliente-opinamaster/como-califica-servicio-preguntas-personalizadas', type: 'blog-post', label: 'Cómo Califica Servicio' }
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