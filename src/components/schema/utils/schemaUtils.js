/**
 * Utilidades para manejo de schemas JSON-LD
 */

/**
 * Limpia scripts de schema anteriores del DOM
 * Solo limpia scripts con ID específico de landing pages
 */
export function cleanOldSchemas() {
  const oldSchemas = document.querySelectorAll('script[id="landing-page-schema"]');
  oldSchemas.forEach(schema => schema.remove());
}

/**
 * Inserta un nuevo script de schema en el head
 */
export function insertSchemaScript(schemaData, id = 'landing-page-schema') {
  const newScript = document.createElement('script');
  newScript.type = 'application/ld+json';
  newScript.id = id;
  newScript.textContent = JSON.stringify(schemaData, null, 2);
  
  document.head.appendChild(newScript);
  return newScript;
}

/**
 * Genera ID único para el schema basado en la URL
 */
export function generateSchemaId(pageUrl) {
  return `schema-${pageUrl.replace(/[^a-zA-Z0-9]/g, '-')}`;
}

/**
 * Verifica si existe un schema activo en el DOM
 */
export function hasActiveSchema() {
  return !!document.querySelector('script[id="landing-page-schema"]');
}

/**
 * Limpia schema solo si existe
 */
export function cleanSchemaIfExists() {
  const existingSchema = document.querySelector('script[id="landing-page-schema"]');
  if (existingSchema) {
    existingSchema.remove();
  }
}
