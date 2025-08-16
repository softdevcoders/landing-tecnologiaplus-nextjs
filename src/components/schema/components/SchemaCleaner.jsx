'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { cleanAllSchemas, insertSchemaScript } from '../utils/schemaUtils';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente cliente que limpia y recarga schemas en navegaciones SPA
 * Detecta automáticamente el schema del JsonLdGenerator y lo maneja
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
        const newScript = insertSchemaScript(newSchemaData, generateSchemaId(pathname));
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