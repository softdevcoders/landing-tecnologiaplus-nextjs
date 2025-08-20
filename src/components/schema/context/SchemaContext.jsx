'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const SchemaContext = createContext();

// Estado global que funciona tanto en SSR como CSR
let globalSchemas = new Map();

export function SchemaProvider({ children }) {
  const [schemas, setSchemas] = useState(globalSchemas);

  const addSchema = useCallback((id, schemaData) => {
    setSchemas(prev => {
      const newSchemas = new Map(prev);
      newSchemas.set(id, schemaData);
      globalSchemas = newSchemas; // Sync with global state
      return newSchemas;
    });
  }, []);

  const removeSchema = useCallback((id) => {
    setSchemas(prev => {
      const newSchemas = new Map(prev);
      newSchemas.delete(id);
      globalSchemas = newSchemas; // Sync with global state
      return newSchemas;
    });
  }, []);

  const clearAllSchemas = useCallback(() => {
    setSchemas(new Map());
    globalSchemas = new Map(); // Sync with global state
  }, []);

  const getSchema = useCallback((id) => {
    return schemas.get(id);
  }, [schemas]);

  const hasSchema = useCallback((id) => {
    return schemas.has(id);
  }, [schemas]);

  const getAllSchemas = useCallback(() => {
    return Array.from(schemas.entries());
  }, [schemas]);

  const value = {
    schemas,
    addSchema,
    removeSchema,
    clearAllSchemas,
    getSchema,
    hasSchema,
    getAllSchemas
  };

  return (
    <SchemaContext.Provider value={value}>
      {children}
    </SchemaContext.Provider>
  );
}

// Hook que funciona tanto con como sin provider (SSR-safe)
export function useSchema() {
  const context = useContext(SchemaContext);
  
  // Si no hay context (durante SSR), usar estado global
  if (!context) {
    return {
      schemas: globalSchemas,
      addSchema: (id, schemaData) => {
        globalSchemas.set(id, schemaData);
      },
      removeSchema: (id) => {
        globalSchemas.delete(id);
      },
      clearAllSchemas: () => {
        globalSchemas = new Map();
      },
      getSchema: (id) => globalSchemas.get(id),
      hasSchema: (id) => globalSchemas.has(id),
      getAllSchemas: () => Array.from(globalSchemas.entries())
    };
  }
  
  return context;
}
