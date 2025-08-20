'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente que renderiza schemas directamente en el head durante SSR
 * Compatible con Next.js App Router y funciona durante el build
 */

// Función para generar schema (reutilizada)
const generateClientSchema = (pathname) => {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    return null;
  }

  try {
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    return generateSchema(schemaMetadata);
  } catch (error) {
    console.error('SchemaHead - Error generando schema:', error);
    return null;
  }
};

export default function SchemaHead() {
  const pathname = usePathname();

  // Generar schema de forma memoizada
  const schemaData = useMemo(() => {
    return generateClientSchema(pathname);
  }, [pathname]);

  // Si no hay schema data, no renderizar nada
  if (!schemaData) {
    return null;
  }

  const schemaId = generateSchemaId(pathname);

  return (
    <script
      id={schemaId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}
