/**
 * Configuración centralizada de datos específicos para landing pages
 * Incluye imágenes, categorías y información de productos
 */

// Configuración de imágenes por categoría de landing page
export const LANDING_IMAGES = {
  // Localizadores para Restaurantes
  localizadoresParaRestaurantes: {
    root: "/v1752768456/1200-x-630_p3v7aj", // 1200x630
    // 'localizadores-rec-v3': "/v1752768456/1200-x-630_p3v7aj",
    // 'localizadores-cir-c2': "/v1752768456/1200-x-630_p3v7aj"
  },

  // Sistema de Turnos TurnoMaster
  sistemasDeTurnosTurnomaster: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Llamadores de Meseros
  llamadoresDeMeseros: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },  

  // Dispensador de Tickets
  dispensadorDeTickets: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Llamado de Enfermería CuidaMaster
  llamadoDeEnfermeriaCuidamaster: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Turnero TurnoExpress
  turneroTurnoexpress: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Calificador de Servicio OpinaMaster
  calificadorDeServicioAlClienteOpinamaster: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Encuesta Virtual OpinaMaster
  encuestaVirtualOpinamaster: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Rollos de Papel Térmico
  rollosDePapelTermico: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630
  },

  // Rollos de Fichas para Turnos
  rollosDeFichosParaTurnos: {
    // root: "/v1752768456/1200-x-630_p3v7aj.jpeg" // 1200x630 
  }
};

// Categorías por landing page para SEO
export const LANDING_CATEGORIES = {
  localizadoresParaRestaurantes: "Localizadores para Restaurantes",
  sistemasDeTurnosTurnomaster: "Sistema de Turnos",
  llamadoresDeMeseros: "Llamadores de Meseros",
  dispensadorDeTickets: "Dispensador de Tickets",
  llamadoDeEnfermeriaCuidamaster: "Llamado de Enfermería",
  turneroTurnoexpress: "Turnero Digital",
  calificadorDeServicioAlClienteOpinamaster: "Calificador de Servicio",
  encuestaVirtualOpinamaster: "Encuesta Virtual",
  rollosDePapelTermico: "Rollos de Papel Térmico",
  rollosDeFichosParaTurnos: "Rollos de Fichas para Turnos"
};

// Información de productos específicos
export const PRODUCT_INFO = {
  localizadoresParaRestaurantes: {
    'localizadores-rec-v3': {
      name: "Localizadores para restaurantes REC-V3",
      description: "Tus clientes disfrutan el tiempo mientras esperan el pedido sin temor de perder el turno. El avisador vibra y alumbra cuando el pedido está listo.",
      features: [
        "Vibración y luz cuando el pedido está listo",
        "Alcance de más de 200 metros",
        "Material resistente a golpes",
        "Ideal para autoservicio y plazoletas de comida"
      ]
    },
    'localizadores-cir-c2': {
      name: "Localizadores para restaurantes CIR-C2",
      description: "Localizadores que mantienen las ventajas del REC V3 y funcionan con control separado. Ideal para locales que entregan el localizador en punto distinto al de llamado.",
      features: [
        "Control separado de los localizadores",
        "Mantiene ventajas del modelo REC V3",
        "Ideal para puntos de entrega separados",
        "Material termoplástico resistente"
      ]
    }
  },

  // TODO: Añadir información de productos para otras categorías
  sistemasDeTurnosTurnomaster: {},
  llamadoresDeMeseros: {},
  dispensadorDeTickets: {},
  llamadoDeEnfermeriaCuidamaster: {},
  turneroTurnoexpress: {},
  calificadorDeServicioAlClienteOpinamaster: {},
  encuestaVirtualOpinamaster: {},
  rollosDePapelTermico: {},
  rollosDeFichosParaTurnos: {}
};

/**
 * Obtiene la configuración completa para una landing page
 * @param {string} landingKey - Clave de la landing (ej: 'localizadoresParaRestaurantes')
 * @param {string} pageKey - Clave de la página específica (ej: 'root', 'localizadores-rec-v3')
 * @returns {Object} Configuración completa con imágenes, categoría y producto info
 */
export function getLandingPageConfig(landingKey, pageKey = 'root') {
  return {
    image: LANDING_IMAGES[landingKey]?.[pageKey] || null,
    category: LANDING_CATEGORIES[landingKey] || "Sistemas de Autoservicio",
    productInfo: PRODUCT_INFO[landingKey]?.[pageKey] || null
  };
}

/**
 * Helper para obtener las rutas de navegación (breadcrumbs)
 * @param {string} landingKey - Clave de la landing
 * @param {string} productKey - Clave del producto (opcional)
 * @returns {Array} Array de breadcrumbs
 */
export function getLandingBreadcrumbs(landingKey, productKey = null) {
  const { routes } = require('@/config/routes');
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';
  
  const breadcrumbs = [
    {
      name: "Inicio",
      url: BASE_URL
    }
  ];

  // Añadir categoría principal
  const landingRoute = routes.landings[landingKey];
  if (landingRoute) {
    breadcrumbs.push({
      name: landingRoute.name,
      url: `${BASE_URL}${landingRoute.url}`
    });

    // Añadir producto específico si existe
    if (productKey && landingRoute.children && landingRoute.children[productKey]) {
      breadcrumbs.push({
        name: landingRoute.children[productKey].name,
        url: `${BASE_URL}${landingRoute.children[productKey].url}`
      });
    }
  }

  return breadcrumbs;
} 