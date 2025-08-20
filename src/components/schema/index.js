// Componentes principales
export { default as JsonLdGenerator } from './components/JsonLdGenerator.jsx';
export { default as SchemaCleaner } from './components/SchemaCleaner.jsx';
export { default as SchemaRenderer } from './components/SchemaRenderer.jsx';
export { default as SchemaHead } from './components/SchemaHead.jsx';
export { default as HybridServerSchema } from './components/HybridServerSchema.jsx';

// Context y Hooks para gestión reactiva
export { SchemaProvider, useSchema } from './context/SchemaContext.jsx';
export { useSchemaManager, useSchemaItem } from './hooks/useSchemaManager.js';

// Configuración y utilidades para generación de schemas (todo consolidado)
export * from './utils/schemaGenerator.js';

// Utilidades para manejo de DOM (DEPRECATED - usar hooks en su lugar)
export * from './utils/schemaUtils.js';