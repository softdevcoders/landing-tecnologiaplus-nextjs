'use client';

import { useEffect, useRef } from 'react';
import { useSchema } from '../context/SchemaContext';
import { generateSchemaId } from '../utils/schemaGenerator';

/**
 * Hook personalizado para gestionar schemas de forma reactiva
 * Maneja la adición, actualización y limpieza automática de schemas
 */
export function useSchemaManager(pathname, schemaData) {
  const { addSchema, removeSchema, clearAllSchemas } = useSchema();
  const currentSchemaId = useRef(null);

  useEffect(() => {
    // Limpiar todos los schemas previos cuando cambia la ruta
    clearAllSchemas();
    
    // Solo agregar schema si hay datos válidos
    if (schemaData) {
      const schemaId = generateSchemaId(pathname);
      addSchema(schemaId, schemaData);
      currentSchemaId.current = schemaId;
    }

    // Cleanup al cambiar de ruta
    return () => {
      if (currentSchemaId.current) {
        removeSchema(currentSchemaId.current);
        currentSchemaId.current = null;
      }
    };
  }, [pathname, schemaData, addSchema, removeSchema, clearAllSchemas]);

  // Cleanup al desmontar el componente
  useEffect(() => {
    return () => {
      if (currentSchemaId.current) {
        removeSchema(currentSchemaId.current);
      }
    };
  }, [removeSchema]);

  return {
    schemaId: currentSchemaId.current
  };
}

/**
 * Hook para gestionar un schema específico
 */
export function useSchemaItem(id, schemaData) {
  const { addSchema, removeSchema, getSchema } = useSchema();

  useEffect(() => {
    if (id && schemaData) {
      addSchema(id, schemaData);
    }

    return () => {
      if (id) {
        removeSchema(id);
      }
    };
  }, [id, schemaData, addSchema, removeSchema]);

  return {
    schema: getSchema(id),
    exists: !!getSchema(id)
  };
}
