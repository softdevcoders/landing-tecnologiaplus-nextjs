'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from './utils/schemaGenerator';

/**
 * Componente híbrido que garantiza:
 * 1. Schema 100% server-side en la primera carga (SSR) 
 * 2. Schema adicional para navegación SPA usando React Portal
 * 3. CERO manipulación directa del DOM - 100% React Virtual DOM
 * 4. Previene errores NotFoundError completamente
 * 5. IDs únicos (-spa) para evitar conflictos con schema del servidor
 */

// Función para generar schema del lado cliente
function generateClientSchema(pathname) {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    console.log('HybridServerSchema - Ruta no configurada:', pathname);
    return null;
  }

  try {
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    return generateSchema(schemaMetadata);
  } catch (error) {
    console.error('HybridServerSchema - Error generando schema:', error);
    return null;
  }
}

export default function HybridServerSchema() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRenderSchema, setShouldRenderSchema] = useState(false);

  // Determinar si estamos en el cliente
  useEffect(() => {
    setIsMounted(true);
    
    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      setShouldRenderSchema(true);
      console.log('HybridServerSchema - Iniciando gestión SPA para:', pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Generar schema data y ID de forma memoizada
  const schemaData = useMemo(() => {
    if (!isMounted || !shouldRenderSchema) return null;
    return generateClientSchema(pathname);
  }, [pathname, isMounted, shouldRenderSchema]);

  const schemaId = useMemo(() => {
    if (!schemaData) return null;
    return `${generateSchemaId(pathname)}-spa`; // ID único para SPA
  }, [pathname, schemaData]);

  // Durante SSR o antes del mounting, no renderizar nada
  if (!isMounted || !shouldRenderSchema || !schemaData || typeof window === 'undefined') {
    return null;
  }

  console.log('HybridServerSchema - Renderizando schema SPA para:', pathname);

  // Usar createPortal para renderizar en head sin manipulación directa del DOM
  return createPortal(
    <script
      key={schemaId}
      id={schemaId}
      type="application/ld+json"
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />,
    document.head
  );
}
