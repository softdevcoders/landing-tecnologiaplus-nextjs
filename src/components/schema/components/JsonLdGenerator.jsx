/**
 * Componente que genera el script JSON-LD dependiendo del path
 * Se ejecuta en el servidor para estar en el HEAD sin hidratación
 */
import getMetadata from "@/request/server/metadata/get-metadata";
import { cookies } from 'next/headers';
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

export default async function JsonLdGenerator() {
  const cookieStore = await cookies();
  const pathname = cookieStore.get('current-path')?.value || '/';

  // Verificar si la ruta está configurada
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    return null; // No generar schema para rutas no configuradas
  }

  try {
    // Obtener metadatos de la ruta
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    
    // Preparar metadatos para el schema
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    
    // Generar schema con los metadatos
    const schema = generateSchema(schemaMetadata);

    // Generar ID único para este schema
    const schemaId = generateSchemaId(pathname);

    return (
      <script 
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }} 
      />
    );
  } catch (error) {
    console.error('Error generating schema for path:', pathname, error);
    return null;
  }
}