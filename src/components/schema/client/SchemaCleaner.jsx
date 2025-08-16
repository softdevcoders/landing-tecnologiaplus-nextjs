'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { cleanSchemaIfExists, insertSchemaScript } from '../utils/schemaUtils';

/**
 * Componente cliente que limpia y recarga schemas en navegaciones SPA
 * Solo se ejecuta en el cliente para manejar navegaciones
 */
export default function SchemaCleaner({ schemaData }) {
  const pathname = usePathname();
  const scriptRef = useRef(null);

  useEffect(() => {
    // Solo ejecutar en navegaciones SPA (no en SSR)
    if (typeof window !== 'undefined') {
      // Limpiar schema anterior solo si existe
      cleanSchemaIfExists();
      
      // Solo insertar nuevo schema si se proporciona
      if (schemaData) {
        const newScript = insertSchemaScript(schemaData);
        scriptRef.current = newScript;
      }
    }
  }, [pathname, schemaData]);

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
