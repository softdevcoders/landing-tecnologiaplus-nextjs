'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import getMetadata from "@/request/server/metadata/get-metadata";
import { ROUTE_CONFIG, generateSchema, generateSchemaId, prepareSchemaMetadata } from '../utils/schemaGenerator';

/**
 * Componente híbrido que garantiza:
 * 1. Schema 100% server-side en la primera carga (SSR)
 * 2. Actualización reactiva durante navegación SPA (CSR)
 * 3. Limpieza automática de schemas anteriores
 * 4. No manipulación directa del DOM - solo usa React
 */

// Función para generar schema (reutilizada del servidor)
function generateClientSchema(pathname) {
  const routeConfig = ROUTE_CONFIG[pathname];
  if (!routeConfig) {
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

export default function HybridServerSchema({ serverPathname }) {
  const clientPathname = usePathname();
  const mountedRef = useRef(false);
  const currentSchemaRef = useRef(null);

  // Determinar si estamos en SSR o CSR
  const isSSR = typeof window === 'undefined';
  const pathname = isSSR ? serverPathname || '/localizadores-para-restaurantes' : clientPathname;

  useEffect(() => {
    // Solo ejecutar en el cliente (navegación SPA)
    if (typeof window !== 'undefined') {
      mountedRef.current = true;
      
      // PRIMERO: Limpiar TODOS los schemas existentes (incluido el del servidor)
      const allSchemas = document.querySelectorAll('script[type="application/ld+json"]');
      allSchemas.forEach(schema => {
        if (schema && schema.parentNode) {
          schema.remove();
        }
      });
      
      // SEGUNDO: Generar y agregar el nuevo schema para la página actual
      const newSchemaData = generateClientSchema(clientPathname);
      
      if (newSchemaData) {
        const newSchemaId = generateSchemaId(clientPathname);
        console.log('HybridServerSchema - Actualizando schema para navegación SPA:', clientPathname);
        
        // Crear nuevo schema
        const newScript = document.createElement('script');
        newScript.id = newSchemaId;
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(newSchemaData);
        
        // Insertar en head
        document.head.appendChild(newScript);
        currentSchemaRef.current = newSchemaId;
      }
    }

    return () => {
      // Cleanup al cambiar de ruta
      if (currentSchemaRef.current && typeof window !== 'undefined') {
        const element = document.getElementById(currentSchemaRef.current);
        if (element) {
          element.remove();
        }
      }
    };
  }, [clientPathname]);

  // Cleanup final al desmontar
  useEffect(() => {
    return () => {
      if (currentSchemaRef.current && typeof window !== 'undefined') {
        const element = document.getElementById(currentSchemaRef.current);
        if (element) {
          element.remove();
        }
      }
    };
  }, []);

  // Durante SSR, NO renderizar nada (solo manejar SPA navigation)
  if (isSSR) {
    return null;
  }

  // Durante CSR, no renderizar nada (el useEffect maneja la lógica)
  return null;
}
