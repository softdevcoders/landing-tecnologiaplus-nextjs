import { routes } from "@/config/routes";

export default async function sitemap() {
  const links = [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

  const addRoutes = (routeObject) => {
    for (const key in routeObject) {
      const route = routeObject[key];
      if (route.url) {
        links.push({ url: `${baseUrl}${route.url}`, changefreq: 'daily', priority: 1.0 });
      }

      if (key === 'landings') {
        for (const landingKey in routeObject[key]) {
          const landingRoute = routeObject[key][landingKey];
          links.push({ url: `${baseUrl}${landingRoute.url}`, changefreq: 'daily', priority: 1.0 });

          if (landingRoute.children) {
            for (const childKey in landingRoute.children) {
              const childRoute = landingRoute.children[childKey];
              links.push({ url: `${baseUrl}${childRoute.url}`, changefreq: 'daily', priority: 1.0 });
            }
          }
        }
      }
    }
  };

  addRoutes(routes);

  return links;
} 