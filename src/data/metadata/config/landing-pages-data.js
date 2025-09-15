/**
 * Configuración centralizada de datos específicos para landing pages
 * Incluye imágenes, categorías y información de productos
 */

import landingHeros from '@/data/heros';

// Configuración de imágenes por categoría de landing page
export const LANDING_IMAGES = {
  // Home
  home: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753292818/home_rsbmwy.jpg",
        alt: "Imagen de Home TecnologíaPlus"
      },
      large: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753292804/home_kve9cx.jpg",
        alt: "Imagen de Home TecnologíaPlus"
      }
    }
  },
  // Localizadores para Restaurantes
  localizadoresParaRestaurantes: {
    root: { 
      url: landingHeros.localizadoresParaRestaurantes.portada.imagenes[1].src,  
      alt: landingHeros.localizadoresParaRestaurantes.portada.imagenes[1].alt,
      width: landingHeros.localizadoresParaRestaurantes.portada.imagenes[1].width,
      height: landingHeros.localizadoresParaRestaurantes.portada.imagenes[1].height
    }
  },

  // Sistema de Turnos TurnoMaster
  sistemasDeTurnosTurnomaster: {
    root: {
      url: landingHeros.turneroTurnomaster.portada.imagenes[1].src,
      alt: landingHeros.turneroTurnomaster.portada.imagenes[1].alt,
      width: landingHeros.turneroTurnomaster.portada.imagenes[1].width,
      height: landingHeros.turneroTurnomaster.portada.imagenes[1].height
    }
  },

  // Llamadores de Meseros
  llamadoresDeMeseros: {
    root: {
      url: landingHeros.llamadoresDeMeseros.portada.imagenes[1].src,
      alt: landingHeros.llamadoresDeMeseros.portada.imagenes[1].alt,
      width: landingHeros.llamadoresDeMeseros.portada.imagenes[1].width,
      height: landingHeros.llamadoresDeMeseros.portada.imagenes[1].height
    }
  },  

  // Dispensador de Tickets
  dispensadorDeTickets: {
    root: {
      url: landingHeros.dispensadorDeTickets.portada.imagenes[1].src,
      alt: landingHeros.dispensadorDeTickets.portada.imagenes[1].alt,
      width: landingHeros.dispensadorDeTickets.portada.imagenes[1].width,
      height: landingHeros.dispensadorDeTickets.portada.imagenes[1].height
    }
  },

  // Llamado de Enfermería CuidaMaster
  llamadoDeEnfermeria: {
    root: {
      url: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].src,
      alt: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].alt,
      width: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].width,
      height: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].height
    }
  },

  // Turnero TurnoExpress
  turneroTurnoexpress: {
    root: { 
      url: landingHeros.turneroTurnoexpress.portada.imagenes[1].src,
      alt: landingHeros.turneroTurnoexpress.portada.imagenes[1].alt,
      width: landingHeros.turneroTurnoexpress.portada.imagenes[1].width,
      height: landingHeros.turneroTurnoexpress.portada.imagenes[1].height
    }
  },

  // Calificador de Servicio OpinaMaster
  calificadorDeServicioAlClienteOpinamaster: {
    root: {
      url: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].src,
      alt: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].alt,
      width: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].width,
      height: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].height
    }
  },

  // Encuesta Virtual OpinaMaster
  encuestaVirtual: {
    root: {
      url: landingHeros.encuestaVirtual.portada.imagenes[1].src,
      alt: landingHeros.encuestaVirtual.portada.imagenes[1].alt,
      width: landingHeros.encuestaVirtual.portada.imagenes[1].width,
      height: landingHeros.encuestaVirtual.portada.imagenes[1].height
    }
  },

  // Rollos de Papel Térmico
  rollosDePapelTermico: {
    root: {
      url: landingHeros.rollosDePapelTermico.portada.imagenes[1].src,
      alt: landingHeros.rollosDePapelTermico.portada.imagenes[1].alt,
      width: landingHeros.rollosDePapelTermico.portada.imagenes[1].width,
      height: landingHeros.rollosDePapelTermico.portada.imagenes[1].height
    }
  },

  // Rollos de Fichas para Turnos
  rollosDeFichosParaTurnos: {
    root: {
      url: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].src,
      alt: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].alt,
      width: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].width,
      height: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].height
    }
  }
};

// Categorías por landing page para SEO
export const LANDING_CATEGORIES = {
  localizadoresParaRestaurantes: "Localizadores para Restaurantes",
  sistemasDeTurnosTurnomaster: "Sistema de Turnos",
  llamadoresDeMeseros: "Llamadores de Meseros",
  dispensadorDeTickets: "Dispensador de Tickets",
  llamadoDeEnfermeria: "Llamado de Enfermería",
  turneroTurnoexpress: "Turnero Digital",
  calificadorDeServicioAlClienteOpinamaster: "Calificador de Servicio",
  encuestaVirtualOpinamaster: "Encuesta Virtual",
  rollosDePapelTermico: "Rollos de Papel Térmico",
  rollosDeFichosParaTurnos: "Rollos de Fichas para Turnos"
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