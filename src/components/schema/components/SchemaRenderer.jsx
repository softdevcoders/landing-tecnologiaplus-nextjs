'use client';

import { useSchema } from '../context/SchemaContext';

/**
 * Componente que renderiza todos los schemas activos en el Virtual DOM
 * Este componente debe ir en el <head> para que los schemas sean válidos
 */
export default function SchemaRenderer() {
  const { getAllSchemas } = useSchema();
  const schemas = getAllSchemas();

  if (schemas.length === 0) {
    return null;
  }

  return (
    <>
      {schemas.map(([id, schemaData]) => (
        <script
          key={id}
          id={id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      ))}
    </>
  );
}
