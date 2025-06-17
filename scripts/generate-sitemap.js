const fs = require('fs');
const path = require('path');
const { routes } = require('../src/config/routes');

function getAllRoutes(routesObj, baseUrl = '') {
  let urls = [];
  
  for (const key in routesObj) {
    if (typeof routesObj[key] === 'object') {
      if (routesObj[key].url) {
        urls.push({
          url: `${baseUrl}${routesObj[key].url}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'daily',
          priority: routesObj[key].url === '/' ? '1.0' : '0.8'
        });
      }
      if (routesObj[key].children) {
        urls = urls.concat(getAllRoutes(routesObj[key].children, baseUrl));
      }
    }
  }
  
  return urls;
}

function generateSitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';
  const urls = getAllRoutes(routes, baseUrl);
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap(); 