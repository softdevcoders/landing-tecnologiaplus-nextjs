import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from './schemaGenerator';

/**
 * Utilidades para generar schemas en el servidor
 * Estas funciones se ejecutan SOLO en el servidor durante SSR
 */

/**
 * Genera el HTML del schema para insertar directamente en el head
 * Se ejecuta en el servidor, no en el cliente
 */
export function generateSchemaHTML(pathname) {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    return '';
  }

  try {
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    const schemaData = generateSchema(schemaMetadata);
    const schemaId = generateSchemaId(pathname);

    // Generar HTML del script directamente
    return `<script id="${schemaId}" type="application/ld+json">${JSON.stringify(schemaData)}</script>`;
  } catch (error) {
    console.error('generateSchemaHTML - Error generando schema:', error);
    return '';
  }
}

/**
 * Genera el schema data para usar en metadata de Next.js
 */
export function generateSchemaForMetadata(pathname) {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    return null;
  }

  try {
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    return generateSchema(schemaMetadata);
  } catch (error) {
    console.error('generateSchemaForMetadata - Error generando schema:', error);
    return null;
  }
}
