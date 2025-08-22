import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from './utils/schemaGenerator';
import { headers } from "next/headers";

/**
 * Componente que GARANTIZA 100% renderizado del servidor
 * - NO tiene 'use client' 
 * - Recibe pathname como prop desde el layout (server-side)
 * - Se ejecuta SOLO en el servidor durante SSR
 * - Incluye suppressHydrationWarning para evitar rehidratación
 */

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
    console.error('GuaranteedServerSchema - Error generando schema:', error);
    return null;
  }
}

export default async function GuaranteedServerSchema() {
  // Obtener pathname dinámicamente del middleware via headers
  const headersList = await headers();
  const currentPath = headersList.get('x-pathname');
  
  // Si no hay pathname, no generar schema
  if (!currentPath) {
    console.log('GuaranteedServerSchema - No hay pathname del middleware, no se genera schema');
    return null;
  }
  
  console.log('GuaranteedServerSchema - Pathname del middleware:', currentPath);
  
  // Generar schema en el servidor usando el pathname dinámico
  const schemaData = generateServerSchema(currentPath);

  // Si no hay schema data, no renderizar nada
  if (!schemaData) {
    console.log('GuaranteedServerSchema - No hay configuración para:', currentPath);
    return null;
  }

  const schemaId = generateSchemaId(currentPath);

  // Renderizado server-side puro con suppressHydrationWarning
  // Esto garantiza que NO se rehidrate en el cliente
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
