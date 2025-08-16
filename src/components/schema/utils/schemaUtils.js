/**
 * Utilidades para manejo de schemas JSON-LD
 */

/**
 * Limpia TODOS los scripts de schema del DOM
 */
export function cleanAllSchemas() {
  // Buscar en todo el documento, no solo en el head
  const allSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  console.log('cleanAllSchemas - Schemas encontrados para limpiar:', allSchemas.length);
  
  if (allSchemas.length === 0) {
    console.log('cleanAllSchemas - No se encontraron schemas para limpiar');
    return;
  }
  
  allSchemas.forEach((schema, index) => {
    console.log(`cleanAllSchemas - Removiendo schema ${index + 1} con ID:`, schema.id);
    schema.remove();
  });
  
  // Verificar que se hayan removido
  const remainingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  console.log('cleanAllSchemas - Schemas restantes después de limpieza:', remainingSchemas.length);
  console.log('cleanAllSchemas - Limpieza completada');
}

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
  console.log('insertSchemaScript - Creando script con ID:', id);
  const newScript = document.createElement('script');
  newScript.type = 'application/ld+json';
  newScript.id = id;
  newScript.textContent = JSON.stringify(schemaData, null, 2);
  
  document.head.appendChild(newScript);
  console.log('insertSchemaScript - Script insertado en el head');
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
