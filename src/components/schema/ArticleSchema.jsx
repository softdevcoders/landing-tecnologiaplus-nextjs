import { generateImageStructuredData } from "@/lib/optimizedImageServer";
import { LOGO_METADATA } from "@/data/metadata/config";
import { routes } from "@/config/routes";

/**
 * Componente que genera Schema.org structured data para artículos de blog
 * Optimizado para SEO y rich snippets en Google
 */
const ArticleSchema = ({ post, baseUrl }) => {
  if (!post) return null;

  // Generar datos de imagen estructurados usando metadatos de marketing
  const imageData = generateImageStructuredData(
    post.images[0], 
    post.metadata?.title,
    post.metadata?.description
  );

  // Obtener información de categoría
  const getCategoryInfo = (categoryKey) => {
    const categories = routes.blog.children;
    const category = Object.values(categories).find(cat => cat.category_key === categoryKey);
    return {
      name: category?.category_name || categoryKey,
      url: category?.url || `/blog/${categoryKey}`
    };
  };

  const categoryInfo = getCategoryInfo(post.categories[0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metadata?.title,
    "description": post.metadata?.description,
    "image": imageData,
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": {
      "@type": "Organization",
      "name": "Tecnología Plus",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_METADATA,
        "width": 512,
        "height": 512
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tecnología Plus",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_METADATA,
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${post.current_link}`
    },
    "url": `${baseUrl}${post.current_link}`,
    "articleSection": categoryInfo.name,
    "keywords": post.metadata?.keywords || [post.title.rendered],
    "inLanguage": "es-ES",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": categoryInfo.name,
          "item": `${baseUrl}${categoryInfo.url}/`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": post.metadata?.title,
          "item": `${baseUrl}${post.current_link}/`
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
};

export default ArticleSchema; 