import { routes } from "@/config/routes";
import { getPosts } from "@/request/server/posts/get-posts";
import { SHOULD_ROBOTS_INDEX } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

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
          url: key === 'home' ? `${baseUrl}` : `${baseUrl}${route.url}/`, 
          changeFrequency: 'daily', 
          priority: 1.0, 
          lastModified: formatDate(new Date()) 
        });
      }

      if (key === 'landings') {
        for (const landingKey in routeObject[key]) {
          const landingRoute = routeObject[key][landingKey];
          const landingConfig = getLandingPageConfig(landingKey, 'root');
          
          let images = null;
          if (landingConfig.image) {
            const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
            const baseTransformations = "f_auto,q_auto,c_fill,g_auto";
            images = [`${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_630${landingConfig.image}`];
          }

          links.push({ 
            url: `${baseUrl}${landingRoute.url}/`, 
            changeFrequency: 'daily', 
            priority: 1.0, 
            lastModified: formatDate(new Date()),
            images: images
          });

          if (landingRoute.children) {
            for (const childKey in landingRoute.children) {
              const childRoute = landingRoute.children[childKey];
              links.push({ 
                url: `${baseUrl}${childRoute.url}/`, 
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
        url: `${baseUrl}${post.current_link}/`,
        changeFrequency: 'monthly',
        priority: 0.8,
        lastModified: formatDate(post.modified && new Date(post.modified) > new Date(post.date) ? post.modified : post.date),
      };

      // Agregar información de imagen principal si existe
      if (post.images && post.images.length > 0) {
        const mainImage = post.images[0];
        const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
        const baseTransformations = "f_auto,q_auto,c_fill,g_auto";
        
        // Next.js 15 no soporta title y caption en images, usamos solo URL
        sitemapEntry.images = [`${CLOUDINARY_BASE_URL}/${baseTransformations}/${mainImage}.jpeg`];
      }

      links.push(sitemapEntry);
    }
  };

  addRoutes(routes);

  return links;
} 