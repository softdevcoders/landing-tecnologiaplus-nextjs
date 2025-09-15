import { DEFAULT_LOGO_IMAGE } from "@/data/metadata/config";

// ============================================================================
// CONFIGURACIÓN CENTRALIZADA
// ============================================================================

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

// Mapeo de rutas a metadatos para facilitar la escalabilidad
export const ROUTE_CONFIG = {
  '/localizadores-para-restaurantes': {
    metadataKey: 'localizadores-para-restaurantes',
    serviceType: "Localizadores para restaurantes"
  },
  '/llamadores-de-meseros': {
    metadataKey: 'llamadores-de-meseros',
    serviceType: "Llamadores de meseros"
  },
  '/turnero-turnoexpress': {
    metadataKey: 'turnero-turnoexpress',
    serviceType: "Turnero TurnoExpress"
  },
  // '/sistema-de-turnos-turnomaster': {
  //   metadataKey: 'sistema-de-turnos-turnomaster',
  //   serviceType: "Sistema de turnos TurnoMaster"
  // },
  // '/rollos-de-fichos-para-turnos': {
  //   metadataKey: 'rollos-de-fichos-para-turnos',
  //   serviceType: "Rollos de fichos para turnos"
  // },
  // '/rollos-de-papel-termico': {
  //   metadataKey: 'rollos-de-papel-termico',
  //   serviceType: "Rollos de papel térmico"
  // },
  // '/dispensador-de-tickets': {
  //   metadataKey: 'dispensador-de-tickets',
  //   serviceType: "Dispensador de tickets"
  // },
  '/llamado-de-enfermeria': {
    metadataKey: 'llamado-de-enfermeria',
    serviceType: "Llamado de enfermería"
  },
  // '/calificador-de-servicio-al-cliente-opinamaster': {
  //   metadataKey: 'calificador-de-servicio-al-cliente-opinamaster',
  //   serviceType: "Calificador de servicio al cliente Opinamaster"
  // },
  // '/encuesta-virtual-opinamaster': {
  //   metadataKey: 'encuesta-virtual-opinamaster',
  //   serviceType: "Encuesta virtual Opinamaster"
  // }
};

export const ORGANIZATION_INFO = {
  name: "Tecnología Plus",
  description: "Fabricantes de soluciones de autoservicio para restaurantes, eventos y negocios. Localizadores y llamadores que llevan tu atención al siguiente nivel.",
  sameAs: [
    "https://www.facebook.com/tecnologiapluscolombia",
    "https://www.instagram.com/tecnologiapluscolombia",
    "https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg",
    "https://www.tiktok.com/@tecnologiapluscolombia",
  ],
  contactPoints: [
    {
      email: "ventas@tecnologiaplus.com",
      telephone: "+57 316 468 2034",
      contactType: "Ventas",
      areaServed: "CO",
      availableLanguage: "es-CO"
    },
    {
      telephone: "+57 322 734 7971",
      contactType: "Ventas",
      areaServed: "CO",
      availableLanguage: "es-CO"
    }
  ]
};

export const SCHEMA_DATES = {
  datePublished: "2025-06-16T17:12:34+00:00",
  dateModified: "2025-06-16T17:35:53+00:00"
};

// ============================================================================
// FUNCIONES DE GENERACIÓN DE SCHEMA
// ============================================================================

/**
 * Genera breadcrumbs para el schema
 */
export function generateBreadcrumbs(pageTitle, pageUrl) {
  return [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageTitle,
      "item": pageUrl
    }
  ];
}

/**
 * Genera el schema completo de JSON-LD
 */
export function generateSchema(metadata) {
  const { pageTitle, pageDescription, pageUrl, primaryImage, serviceType } = metadata;
  
  // Generar breadcrumbs
  const breadcrumbs = generateBreadcrumbs(pageTitle, pageUrl);

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
        "thumbnailUrl": primaryImage.url,
        "datePublished": SCHEMA_DATES.datePublished,
        "dateModified": SCHEMA_DATES.dateModified,
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
        "url": primaryImage.url,
        "contentUrl": primaryImage.url,
        "width": primaryImage.width,
        "height": primaryImage.height,
        "caption": primaryImage.alt,
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
        "url": BASE_URL,
        "name": ORGANIZATION_INFO.name,
        "description": ORGANIZATION_INFO.description,
        "publisher": {
          "@type": "Organization",
          "name": ORGANIZATION_INFO.name,
          "url": BASE_URL,
          "logo": { 
            "@type": "ImageObject", 
            "url": DEFAULT_LOGO_IMAGE.url,
            "width": DEFAULT_LOGO_IMAGE.width,  
            "height": DEFAULT_LOGO_IMAGE.height
          },
          "sameAs": ORGANIZATION_INFO.sameAs,
          "contactPoint": ORGANIZATION_INFO.contactPoints.map(contact => ({
            "@type": "ContactPoint",
            ...contact
          }))
        },
        "inLanguage": "es-CO"
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "serviceType": serviceType,
        "provider": { 
          "@type": "Organization", 
          "name": ORGANIZATION_INFO.name, 
          "url": BASE_URL, 
          "logo": DEFAULT_LOGO_IMAGE.url
        },
        "areaServed": { "@type": "Country", "name": "Colombia" },
        "brand": { "@type": "Brand", "name": ORGANIZATION_INFO.name },
        "offers": {
          "@type": "Offer",
          "url": pageUrl,
          "priceCurrency": "COP",
          "price": "0",
          "availability": "https://schema.org/InStock"
        },
        "description": pageDescription,
        "image": primaryImage.url,
      }
    ]
  };

  return schema;
}

/**
 * Genera ID único para el schema basado en la ruta
 */
export function generateSchemaId(pathname) {
  const cleanPath = pathname.replace(/[^a-zA-Z0-9]/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
  return `schema-${cleanPath}`;
}

/**
 * Prepara los metadatos para la generación del schema
 */
export function prepareSchemaMetadata(metadata, serviceType) {
  return {
    pageTitle: metadata.title.absolute,
    pageDescription: metadata.description,
    pageUrl: metadata.alternates.canonical,
    serviceType,
    primaryImage: metadata.seoImages?.primary
  };
}
