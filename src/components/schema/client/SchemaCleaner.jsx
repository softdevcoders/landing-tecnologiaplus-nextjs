'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { cleanAllSchemas, insertSchemaScript } from '../utils/schemaUtils';
import getMetadata from "@/request/server/metadata/get-metadata";
import { DEFAULT_LOGO_IMAGE } from "@/data/metadata/config";

/**
 * Componente cliente que limpia y recarga schemas en navegaciones SPA
 * Detecta automáticamente el schema del JsonLdGenerator y lo maneja
 */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

// Función para generar schema en el cliente (copiada del JsonLdGenerator)
const generateClientSchema = (pathname) => {
  // Mapeo de rutas a metadatos para facilitar la escalabilidad
  const ROUTE_CONFIG = {
    '/localizadores-para-restaurantes': {
      metadataKey: 'localizadores-para-restaurantes',
      serviceType: "Localizadores para restaurantes"
    },
    '/llamadores-de-meseros': {
      metadataKey: 'llamadores-de-meseros',
      serviceType: "Llamadores de meseros"
    },
    // '/turnero-turnoexpress': {
    //   metadataKey: 'turnero-turnoexpress',
    //   serviceType: "Turnero TurnoExpress"
    // },
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
    // '/llamado-de-enfermeria-cuidamaster': {
    //   metadataKey: 'llamado-de-enfermeria-cuidamaster',
    //   serviceType: "Llamado de enfermería CuidaMaster"
    // },
    // '/calificador-de-servicio-al-cliente-opinamaster': {
    //   metadataKey: 'calificador-de-servicio-al-cliente-opinamaster',
    //   serviceType: "Calificador de servicio al cliente Opinamaster"
    // },
    // '/encuesta-virtual-opinamaster': {
    //   metadataKey: 'encuesta-virtual-opinamaster',
    //   serviceType: "Encuesta virtual Opinamaster"
    // }
  };

  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    console.log('SchemaCleaner - Ruta no configurada para schema:', pathname);
    return null;
  }

  try {
    // Obtener metadatos de la ruta
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    
    // Generar breadcrumbs
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": metadata.title.absolute,
        "item": metadata.alternates.canonical
      }
    ];

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": metadata.alternates.canonical,
          "url": metadata.alternates.canonical,
          "name": metadata.title.absolute,
          "isPartOf": { "@id": `${BASE_URL}/#website` },
          "primaryImageOfPage": { "@id": `${metadata.alternates.canonical}#primaryimage` },
          "image": { "@id": `${metadata.alternates.canonical}#primaryimage` },
          "thumbnailUrl": metadata.seoImages?.primary?.large?.url,
          "datePublished": "2025-06-16T17:12:34+00:00",
          "dateModified": "2025-06-16T17:35:53+00:00",
          "description": metadata.description,
          "breadcrumb": { "@id": `${metadata.alternates.canonical}#breadcrumb` },
          "inLanguage": "es-CO",
          "potentialAction": [{
            "@type": "ReadAction",
            "target": [metadata.alternates.canonical]
          }],
          "mainEntity": { "@id": `${metadata.alternates.canonical}#service` }
        },
        {
          "@type": "ImageObject",
          "inLanguage": "es-CO",
          "@id": `${metadata.alternates.canonical}#primaryimage`,
          "url": metadata.seoImages?.primary?.large?.url,
          "contentUrl": metadata.seoImages?.primary?.large?.url,
          "width": metadata.seoImages?.primary?.large?.width,
          "height": metadata.seoImages?.primary?.large?.height,
          "caption": metadata.seoImages?.primary?.large?.alt,
          "representativeOfPage": true
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${metadata.alternates.canonical}#breadcrumb`,
          "itemListElement": breadcrumbs
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": BASE_URL,
          "name": "Tecnología Plus",
          "description": "Fabricantes de soluciones de autoservicio para restaurantes, eventos y negocios. Localizadores y llamadores que llevan tu atención al siguiente nivel.",
          "publisher": {
            "@type": "Organization",
            "name": "Tecnología Plus",
            "url": BASE_URL,
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
          "@id": `${metadata.alternates.canonical}#service`,
          "serviceType": routeConfig.serviceType,
          "provider": { 
            "@type": "Organization", 
            "name": "Tecnología Plus", 
            "url": BASE_URL, 
            "logo": DEFAULT_LOGO_IMAGE.url
          },
          "areaServed": { "@type": "Country", "name": "Colombia" },
          "brand": { "@type": "Brand", "name": "Tecnología Plus" },
          "offers": {
            "@type": "Offer",
            "url": metadata.alternates.canonical,
            "priceCurrency": "COP",
            "price": "0",
            "availability": "https://schema.org/InStock"
          },
          "description": metadata.description,
          "image": metadata.seoImages?.primary?.large?.url,
        }
      ]
    };

    return schema;
  } catch (error) {
    console.error('SchemaCleaner - Error generando schema para:', pathname, error);
    return null;
  }
};

export default function SchemaCleaner() {
  const pathname = usePathname();
  const scriptRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en navegaciones SPA (no en SSR)
    if (typeof window !== 'undefined') {
      // PRIMERO: Limpiar TODOS los schemas anteriores
      cleanAllSchemas();
      
      // SEGUNDO: Generar el schema CORRECTO para la nueva página
      const newSchemaData = generateClientSchema(pathname);
      
      if (newSchemaData) {
        // TERCERO: Insertar el nuevo schema con ID único
        const cleanPath = pathname.replace(/[^a-zA-Z0-9]/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');
        const newScript = insertSchemaScript(newSchemaData, `schema-${cleanPath}`);
        scriptRef.current = newScript;
      }
    }
  }, [pathname]);

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return null; // No renderiza nada visual
}