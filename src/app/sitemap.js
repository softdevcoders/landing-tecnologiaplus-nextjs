import { routes } from "@/config/routes";
import { getPosts } from "@/request/server/posts/get-posts";

export default async function sitemap() {
  const links = [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';
  const posts = getPosts({ allPosts: true });

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

    for (const post of posts) {
      links.push({
        url: `${baseUrl}${post.current_link}`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: post.updated_at ?? post.date,
      });
    }
  };

  addRoutes(routes);

  return links;
} 