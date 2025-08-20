import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente SERVER-SIDE que renderiza schemas garantizando 100% SSR
 * NO es un componente cliente, se ejecuta solo en el servidor
 * Garantiza que el schema esté en el HTML inicial para SEO perfecto
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
    console.error('ServerSchemaHead - Error generando schema:', error);
    return null;
  }
}

export default function ServerSchemaHead({ pathname }) {
  // Generar schema en el servidor
  const schemaData = generateServerSchema(pathname);

  // Si no hay schema data, no renderizar nada
  if (!schemaData) {
    return null;
  }

  const schemaId = generateSchemaId(pathname);

  // Renderizado server-side puro - NO se rehidrata
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
