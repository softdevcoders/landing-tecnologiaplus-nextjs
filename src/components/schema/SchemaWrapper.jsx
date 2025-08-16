import { DEFAULT_LOGO_IMAGE } from "@/data/metadata/config";
import Script from "next/script";
import SchemaCleaner from "./client/SchemaCleaner";

// URL base para canonical URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

/**
 * Wrapper opcional para schemas - solo renderiza si se proporcionan datos
 * Útil para páginas que pueden o no tener schema
 */
export default function SchemaWrapper({
  // Información básica de la página (opcional)
  pageTitle,
  pageDescription,
  pageUrl,
  primaryImage,
  datePublished,
  dateModified,
  serviceType,
  
  // Flag para habilitar/deshabilitar schema
  enableSchema = true,
  
  // Schema personalizado (si se proporciona, ignora las props individuales)
  customSchema = null
}) {
  // Si no está habilitado o no hay datos suficientes, no renderizar nada
  if (!enableSchema || (!customSchema && !pageTitle && !pageUrl)) {
    return null;
  }

  // Si se proporciona schema personalizado, usarlo directamente
  if (customSchema) {
    return (
      <>
        <SchemaCleaner schemaData={customSchema} />
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          id="landing-page-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(customSchema, null, 2)
          }} 
        />
      </>
    );
  }

  // Generar breadcrumbs
  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": `${BASE_URL}`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": pageUrl
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        "url": pageUrl,
        "name": pageTitle,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "primaryImageOfPage": { "@id": `${pageUrl}#primaryimage` },
        "image": { "@id": `${pageUrl}#primaryimage` },
        "thumbnailUrl": primaryImage?.url,
        "datePublished": datePublished || "2025-06-16T17:12:34+00:00",
        "dateModified": dateModified || "2025-06-16T17:35:53+00:00",
        "description": pageDescription,
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "inLanguage": "es-CO",
        "potentialAction": [{
          "@type": "ReadAction",
          "target": [pageUrl]
        }],
        "mainEntity": { "@id": `${pageUrl}#service` }
      },
      {
        "@type": "ImageObject",
        "inLanguage": "es-CO",
        "@id": `${pageUrl}#primaryimage`,
        "url": primaryImage?.url,
        "contentUrl": primaryImage?.url,
        "width": primaryImage?.width,
        "height": primaryImage?.height,
        "caption": primaryImage?.alt,
        "representativeOfPage": true
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": breadcrumbs
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": "Tecnología Plus",
        "description": "Fabricantes de soluciones de autoservicio para restaurantes, eventos y negocios. Localizadores y llamadores que llevan tu atención al siguiente nivel.",
        "publisher": {
          "@type": "Organization",
          "name": "Tecnología Plus",
          "url": `${BASE_URL}`,
          "logo": { 
            "@type": "ImageObject", 
            "url": DEFAULT_LOGO_IMAGE.url,
            "width": DEFAULT_LOGO_IMAGE.width,  
            "height": DEFAULT_LOGO_IMAGE.height
          },
          "sameAs": [
            "https://www.facebook.com/tecnologiapluscolombia",
            "https://www.instagram.com/tecnologiapluscolombia",
            "https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg",
            "https://www.tiktok.com/@tecnologiapluscolombia",
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "email": "ventas@tecnologiaplus.com",
              "telephone": "+57 316 468 2034",
              "contactType": "Ventas",
              "areaServed": "CO",
              "availableLanguage": "es-CO"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+57 322 734 7971",
              "contactType": "Ventas",
              "areaServed": "CO",
              "availableLanguage": "es-CO"
            }
          ]
        },
        "inLanguage": "es-CO"
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "serviceType": serviceType,
        "provider": { 
          "@type": "Organization", 
          "name": "Tecnología Plus", 
          "url": `${BASE_URL}`, 
          "logo": DEFAULT_LOGO_IMAGE.url
        },
        "areaServed": { "@type": "Country", "name": "Colombia" },
        "brand": { "@type": "Brand", "name": "Tecnología Plus" },
        "offers": {
          "@type": "Offer",
          "url": pageUrl,
          "priceCurrency": "COP",
          "price": "0",
          "availability": "https://schema.org/InStock"
        },
        "description": pageDescription,
        "image": primaryImage?.url,
        "inLanguage": "es-CO"
      }
    ]
  };

  return (
    <>
      {/* Componente cliente para limpiar schemas en navegaciones SPA */}
      <SchemaCleaner schemaData={schema} />
      
      {/* Script SSR para SEO inicial */}
      <Script
        type="application/ld+json"
        strategy="beforeInteractive"
        id="landing-page-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2)
        }} 
      />
    </>
  );
}
