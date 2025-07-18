/**
 * Componente Schema.org para Landing Pages
 * Genera structured data optimizado para SEO incluyendo:
 * - Product schema para productos específicos
 * - BreadcrumbList para navegación
 * - WebPage para la página general
 * - Organization para datos de la empresa
 */

import { routes } from "@/config/routes";
import { generateOptimizedImageVariants } from "@/lib/optimizedImageServer";
import { cleanText } from "@/lib/clean-text";
import { LOGO_METADATA } from "@/data/metadata/config";

// URL base para canonical URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

// Información de la organización
const ORGANIZATION_DATA = {
  "@type": "Organization",
  "name": "Tecnología Plus",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": LOGO_METADATA,
    "width": 192,
    "height": 192
  },
  "description": "Fabricantes expertos en sistemas de autoservicio, turnos y gestión de filas para restaurantes, hospitales y centros comerciales.",
  // "email": "ventas@tecnologiaplus.com",
  // "address": [
  //   {
  //     "@type": "PostalAddress",
  //     "addressCountry": "CO",
  //     "addressLocality": "Bogotá",
  //     "streetAddress": "Cra 19 # 82-85 oficina 401",
  //     "addressRegion": "Bogotá D.C."
  //   },
  //   {
  //     "@type": "PostalAddress",
  //     "addressCountry": "CO",
  //     "addressLocality": "Medellín",
  //     "streetAddress": "El Poblado edificio Oceanía",
  //     "addressRegion": "Antioquia"
  //   },
  //   {
  //     "@type": "PostalAddress",
  //     "addressCountry": "PE",
  //     "addressLocality": "Lima",
  //     "addressRegion": "Lima"
  //   }
  // ],
  // "contactPoint": [
  //   {
  //     "@type": "ContactPoint",
  //     "contactType": "sales",
  //     "availableLanguage": ["Spanish"],
  //     "telephone": ["+573164682034", "+573227347971"],
  //     "areaServed": "CO",
  //     "contactOption": "TollFree"
  //   },
  //   {
  //     "@type": "ContactPoint",
  //     "contactType": "sales",
  //     "availableLanguage": ["Spanish"],
  //     "telephone": "+51976270171",
  //     "areaServed": "PE",
  //     "contactOption": "TollFree"
  //   }
  // ],
  // "areaServed": [
  //   {
  //     "@type": "GeoCircle",
  //     "geoMidpoint": {
  //       "@type": "GeoCoordinates",
  //       "latitude": "4.6097",
  //       "longitude": "-74.0817"
  //     },
  //     "description": "Colombia - Cobertura nacional"
  //   },
  //   {
  //     "@type": "Country",
  //     "name": "Peru"
  //   }
  // ],
  // "serviceArea": ["Colombia", "Peru", "Latin America"]
};

/**
 * Genera breadcrumbs basado en la estructura de rutas
 */
function generateBreadcrumbs(landingCategory, productSlug = null) {
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": BASE_URL
    }
  ];

  // Buscar la categoría en las rutas
  const categoryRoute = routes.landings[landingCategory];
  if (categoryRoute) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": categoryRoute.label,
      "item": `${BASE_URL}${categoryRoute.url}`
    });

    // Si es un producto específico, añadir el breadcrumb del producto
    if (productSlug && categoryRoute.children && categoryRoute.children[productSlug]) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": categoryRoute.children[productSlug].name,
        "item": `${BASE_URL}${categoryRoute.children[productSlug].url}`
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  };
}

/**
 * Genera schema de producto
 */
function generateProductSchema({
  name,
  description,
  images = [],
  category = "Sistemas de Autoservicio",
  brand = "Tecnología Plus",
  manufacturer = "Tecnología Plus",
  url,
  keywords = []
}) {
  // Optimizar imágenes para diferentes formatos
  const optimizedImages = images.map(imageUrl => {
    const variants = generateOptimizedImageVariants(imageUrl, name);
    return {
      "@type": "ImageObject",
      "url": variants.openGraph.url,
      "width": variants.openGraph.width,
      "height": variants.openGraph.height,
      "caption": name
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": cleanText(name),
    "description": cleanText(description),
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": manufacturer,
      "url": BASE_URL
    },
    "category": category,
    "image": optimizedImages,
    "url": url,
    "keywords": keywords.join(", "),
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Tecnología Plus",
        "url": BASE_URL
      }
    }
  };
}

/**
 * Genera schema de página web
 */
function generateWebPageSchema({
  name,
  description,
  url,
  primaryImageUrl,
  isProductPage = false,
  keywords = []
}) {
  const optimizedImage = primaryImageUrl ? 
    generateOptimizedImageVariants(primaryImageUrl, name) : null;

  const imageData = optimizedImage ? {
    "@type": "ImageObject",
    "url": optimizedImage.openGraph.url,
    "width": optimizedImage.openGraph.width,
    "height": optimizedImage.openGraph.height,
    "caption": name,
  } : undefined;

  return {
    "@context": "https://schema.org",
    "@type": isProductPage ? "ItemPage" : "WebPage",
    "name": cleanText(name),
    "description": cleanText(description),
    "url": `${url}/`,
    "image": imageData, // Propiedad estándar que Google reconoce mejor
    // "primaryImageOfPage": imageData, // Propiedad específica para WebPage
    "keywords": keywords.join(", "),
    "inLanguage": "es-ES",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Tecnología Plus",
      "url": BASE_URL
    },
    "publisher": ORGANIZATION_DATA
  };
}

/**
 * Props del componente LandingPageSchema
 */
export default function LandingPageSchema({
  // Información básica de la página
  pageTitle,
  pageDescription,
  pageUrl,
  keywords = [],
  
  // Información del producto (opcional)
  productData = null,
  
  // Navegación
  landingCategory, // ej: 'localizadoresParaRestaurantes'
  productSlug = null, // ej: 'rec_v3' para productos específicos
  
  // Imágenes
  primaryImage = null,
  productImages = []
}) {
  
  const schemas = [];

  // 1. Schema de organización (siempre presente)
  schemas.push(ORGANIZATION_DATA);

  // 2. Schema de breadcrumbs
  schemas.push(generateBreadcrumbs(landingCategory, productSlug));

  // 3. Schema de página web
  schemas.push(generateWebPageSchema({
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    primaryImageUrl: primaryImage,
    isProductPage: !!productData,
    keywords
  }));

  // 4. Schema de producto (si se proporciona información del producto)
  if (productData) {
    schemas.push(generateProductSchema({
      name: productData.name,
      description: productData.description,
      images: productImages,
      category: productData.category || "Sistemas de Autoservicio",
      url: pageUrl,
      keywords
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas, null, 2)
      }}
    />
  );
}