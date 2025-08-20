'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useSchemaManager } from '../hooks/useSchemaManager';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente cliente que gestiona schemas en navegaciones SPA usando Virtual DOM
 * NO manipula el DOM directamente, usa el estado de React
 */

// Función para generar schema en el cliente (usando configuración compartida)
const generateClientSchema = (pathname) => {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
    console.log('SchemaCleaner - Ruta no configurada para schema:', pathname);
    return null;
  }

  try {
    // Obtener metadatos de la ruta
    const { [routeConfig.metadataKey]: { root: metadata } } = getMetadata('landings');
    
    // Preparar metadatos para el schema
    const schemaMetadata = prepareSchemaMetadata(metadata, routeConfig.serviceType);
    
    // Generar schema usando la función compartida
    return generateSchema(schemaMetadata);
  } catch (error) {
    console.error('SchemaCleaner - Error generando schema para:', pathname, error);
    return null;
  }
};

export default function SchemaCleaner() {
  const pathname = usePathname();

  // Generar schema de forma memoizada para evitar regeneraciones innecesarias
  const schemaData = useMemo(() => {
    return generateClientSchema(pathname);
  }, [pathname]);

  // Usar el hook personalizado para gestionar el schema reactivamente
  const { schemaId } = useSchemaManager(pathname, schemaData);

  // Log para debugging (opcional)
  if (schemaData && schemaId) {
    console.log('SchemaCleaner - Schema gestionado reactivamente:', schemaId);
  }

  return null; // No renderiza nada visual
}