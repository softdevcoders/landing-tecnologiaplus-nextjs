/**
 * Utilidades para manejo de schemas JSON-LD
 */

/**
 * Limpia TODOS los scripts de schema del DOM
 */
export function cleanAllSchemas() {
  try {
    // Buscar en todo el documento, no solo en el head
    const allSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (allSchemas.length === 0) {
      return;
    }
    
    // Convertir NodeList a Array y filtrar solo elementos válidos
    const validSchemas = Array.from(allSchemas).filter(schema => {
      // Verificar que el elemento existe y está en el DOM
      return schema && schema.parentNode && document.contains(schema);
    });
    
    // Remover solo los elementos válidos
    validSchemas.forEach((schema) => {
      try {
        schema.remove();
      } catch (error) {
        console.warn('Error removiendo schema individual:', error);
      }
    });
  } catch (error) {
    console.error('Error durante cleanAllSchemas:', error);
  }
}

/**
 * Limpia scripts de schema anteriores del DOM
 * Solo limpia scripts con ID específico de landing pages
 */
export function cleanOldSchemas() {
  try {
    const oldSchemas = document.querySelectorAll('script[id="landing-page-schema"]');
    
    if (oldSchemas.length === 0) {
      return;
    }
    
    // Convertir NodeList a Array y filtrar solo elementos válidos
    const validSchemas = Array.from(oldSchemas).filter(schema => {
      return schema && schema.parentNode && document.contains(schema);
    });
    
    // Remover solo los elementos válidos
    validSchemas.forEach(schema => {
      try {
        schema.remove();
      } catch (error) {
        console.warn('Error removiendo schema antiguo:', error);
      }
    });
  } catch (error) {
    console.error('Error durante cleanOldSchemas:', error);
  }
}

/**
 * Inserta un nuevo script de schema en el head
 */
export function insertSchemaScript(schemaData, id = 'landing-page-schema') {
  const newScript = document.createElement('script');
  newScript.type = 'application/ld+json';
  newScript.id = id;
  // Solo simplificar la estructura del JSON, no el contenido de los textos
  newScript.textContent = JSON.stringify(schemaData);
  
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
  try {
    const existingSchema = document.querySelector('script[id="landing-page-schema"]');
    if (existingSchema && existingSchema.parentNode && document.contains(existingSchema)) {
      existingSchema.remove();
    }
  } catch (error) {
    console.warn('Error durante cleanSchemaIfExists:', error);
  }
}

/**
 * Verifica si un schema existe y está en el DOM
 */
export function isSchemaInDOM(id) {
  try {
    if (!id) return false;
    
    const schema = document.getElementById(id);
    return !!(schema && schema.parentNode && document.contains(schema));
  } catch (error) {
    console.warn('Error verificando schema en DOM:', id, error);
    return false;
  }
}

/**
 * ALTERNATIVA MÁS EFICIENTE: Limpia schemas usando un enfoque diferente
 * que evita el problema de las referencias obsoletas de NodeList
 */
export function cleanAllSchemasEfficient() {
  try {
    // En lugar de usar querySelectorAll, usamos un enfoque más directo
    // Buscar en el head primero (donde normalmente están los schemas)
    const headScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    const bodyScripts = document.body.querySelectorAll('script[type="application/ld+json"]');
    
    // Procesar scripts del head
    Array.from(headScripts).forEach(schema => {
      if (schema && schema.parentNode && document.contains(schema)) {
        try {
          schema.remove();
        } catch (error) {
          console.warn('Error removiendo schema del head:', error);
        }
      }
    });
    
    // Procesar scripts del body
    Array.from(bodyScripts).forEach(schema => {
      if (schema && schema.parentNode && document.contains(schema)) {
        try {
          schema.remove();
        } catch (error) {
          console.warn('Error removiendo schema del body:', error);
        }
      }
    });
  } catch (error) {
    console.error('Error durante cleanAllSchemasEfficient:', error);
  }
}
