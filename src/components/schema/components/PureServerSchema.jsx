import { headers } from 'next/headers';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente que garantiza 100% renderizado del servidor
 * NO tiene 'use client' - es puramente server-side
 * Usa headers() para obtener el pathname del lado del servidor
 */

// Función para extraer pathname desde headers del servidor
function getPathnameFromHeaders() {
  try {
    const headersList = headers();
    const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || '/';
    return pathname;
  } catch (error) {
    // Fallback para casos donde headers no estén disponibles
    return '/';
  }
}

// Función para generar schema en el servidor
function generateServerSchema(pathname) {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    return null;
  }

  try {
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    return generateSchema(schemaMetadata);
  } catch (error) {
    console.error('PureServerSchema - Error generando schema:', error);
    return null;
  }
}

export default function PureServerSchema() {
  // Obtener pathname del lado del servidor
  const pathname = getPathnameFromHeaders();
  
  // Generar schema en el servidor
  const schemaData = generateServerSchema(pathname);

  // Si no hay schema data, no renderizar nada
  if (!schemaData) {
    return null;
  }

  const schemaId = generateSchemaId(pathname);

  // Renderizado server-side puro - NO se rehidrata en el cliente
  return (
    <script
      id={schemaId}
      type="application/ld+json"
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}
