import { routes } from "@/config/routes";
import { getPosts } from "@/request/server/posts/get-posts";
import { SHOULD_ROBOTS_INDEX } from "@/data/metadata/config";

export default async function sitemap() {
  // Si no se debe indexar (staging), retornar sitemap vacío
  if (!SHOULD_ROBOTS_INDEX) {
    return [];
  }

  const links = [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';
  const posts = getPosts({ allPosts: true });

  // Función auxiliar para formatear la fecha como YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  const addRoutes = (routeObject) => {
    for (const key in routeObject) {
      const route = routeObject[key];
      if (route.url) {
        links.push({ 
          url: key === 'home' ? `${baseUrl}` : `${baseUrl}${route.url}`, 
          changeFrequency: 'daily', 
          priority: 1.0, 
          lastModified: formatDate(new Date()) 
        });
      }

      if (key === 'landings') {
        for (const landingKey in routeObject[key]) {
          const landingRoute = routeObject[key][landingKey];

          links.push({ 
            url: `${baseUrl}${landingRoute.url}`, 
            changeFrequency: 'daily', 
            priority: 1.0, 
            lastModified: formatDate(new Date()),
          });

          if (landingRoute.children) {
            for (const childKey in landingRoute.children) {
              const childRoute = landingRoute.children[childKey];
              links.push({ 
                url: `${baseUrl}${childRoute.url}`, 
                changeFrequency: 'daily', 
                priority: 1.0, 
                lastModified: formatDate(new Date()) 
              });
            }
          }
        }
      }
    }

    for (const post of posts) {
      const sitemapEntry = {
        url: `${baseUrl}${post.enlace_completo}`, 
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: formatDate(post.fecha_modificacion && new Date(post.fecha_modificacion) > new Date(post.fecha_creacion) ? post.fecha_modificacion : post.fecha_creacion),
      };

      links.push(sitemapEntry);
    }
  };

  addRoutes(routes);

  return links;
} 