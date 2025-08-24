/**
 * Configuración centralizada de datos específicos para landing pages
 * Incluye imágenes, categorías y información de productos
 */

import { landingHeros } from '@/config/landing-heros';

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
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120496/localizadores_para_restaurantes_matzlw.jpg",
        alt: "Imagen de Localizadores para Restaurantes - TecnologíaPlus" 
      },
      large: {
        url: landingHeros.localizadoresParaRestaurantes.informationPortadas.image.desktop.src,  
        alt: landingHeros.localizadoresParaRestaurantes.informationPortadas.image.desktop.alt,
        width: landingHeros.localizadoresParaRestaurantes.informationPortadas.image.desktop.width,
        height: landingHeros.localizadoresParaRestaurantes.informationPortadas.image.desktop.height
      }
    }
  },

  // Sistema de Turnos TurnoMaster
  sistemasDeTurnosTurnomaster: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120497/sistema_de_turnos_turnomaster_sqicli.jpg",
        alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus"
      },
      large: {
        // url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753128274/sistema_de_turnos_turnomaster_lpacwf.jpg",
        url: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.image.desktop.src,
        alt: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.image.desktop.alt,
        width: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.image.desktop.width,
        height: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.image.desktop.height
      }
    }
  },

  // Llamadores de Meseros
  llamadoresDeMeseros: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120497/llamadores_de_meseros_dbigcf.jpg",
        alt: "Imagen de Llamadores de Meseros - TecnologíaPlus"
      },
      large: {
        // url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753128273/llamadores_de_meseros_jmasyp.jpg",
        url: landingHeros.llamadoresDeMeseros.informationPortadas.image.desktop.src,
        alt: landingHeros.llamadoresDeMeseros.informationPortadas.image.desktop.alt,
        width: landingHeros.llamadoresDeMeseros.informationPortadas.image.desktop.width,
        height: landingHeros.llamadoresDeMeseros.informationPortadas.image.desktop.height
      },
    }
  },  

  // Dispensador de Tickets
  dispensadorDeTickets: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753292818/dispensador_de_tickets_uspfnh.jpg",
        alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus"
      },
      large: {
        url: landingHeros.dispensadorDeTickets.informationPortadas.image.desktop.src,
        alt: landingHeros.dispensadorDeTickets.informationPortadas.image.desktop.alt,
        width: landingHeros.dispensadorDeTickets.informationPortadas.image.desktop.width,
        height: landingHeros.dispensadorDeTickets.informationPortadas.image.desktop.height
      }
    }
  },

  // Llamado de Enfermería CuidaMaster
  llamadoDeEnfermeriaCuidamaster: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753125103/llamado_de_enfermeria_cuidamaster_vsxyqt.jpg",
        alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus"
      },
      large: {
        url: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.image.desktop.src,
        alt: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.image.desktop.alt,
        width: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.image.desktop.width,
        height: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.image.desktop.height
      }
    }
  },

  // Turnero TurnoExpress
  turneroTurnoexpress: {
    root: {
      small: {
          url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120496/turnero_turnoexpress_hk28p5.jpg",
          alt: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus"
      },
      large: {
        url: landingHeros.turneroTurnoexpress.informationPortadas.image.desktop.src,
        alt: landingHeros.turneroTurnoexpress.informationPortadas.image.desktop.alt,
        width: landingHeros.turneroTurnoexpress.informationPortadas.image.desktop.width,
        height: landingHeros.turneroTurnoexpress.informationPortadas.image.desktop.height
      }
    }
  },

  // Calificador de Servicio OpinaMaster
  calificadorDeServicioAlClienteOpinamaster: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120496/calificador_de_servicio_al_cliente_opinamaster_vz4o1c.jpg",
        alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus"
      },
      large: {
        url: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.image.desktop.src,
        alt: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.image.desktop.alt,
        width: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.image.desktop.width,
        height: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.image.desktop.height
      }
    }
  },

  // Encuesta Virtual OpinaMaster
  encuestaVirtual: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120497/encuesta_virtual_opinamaster_ynv7xn.jpg",
        alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus"
      },
      large: {
        url: landingHeros.encuestaVirtual.informationPortadas.image.desktop.src,
        alt: landingHeros.encuestaVirtual.informationPortadas.image.desktop.alt,
        width: landingHeros.encuestaVirtual.informationPortadas.image.desktop.width,
        height: landingHeros.encuestaVirtual.informationPortadas.image.desktop.height
      }
    }
  },

  // Rollos de Papel Térmico
  rollosDePapelTermico: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120497/rollos_de_papel_termico_ddunbk.jpg",
        alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus"
      },
      large: {
        url: landingHeros.rollosDePapelTermico.informationPortadas.image.desktop.src,
        alt: landingHeros.rollosDePapelTermico.informationPortadas.image.desktop.alt,
        width: landingHeros.rollosDePapelTermico.informationPortadas.image.desktop.width,
        height: landingHeros.rollosDePapelTermico.informationPortadas.image.desktop.height
      }
    }
  },

  // Rollos de Fichas para Turnos
  rollosDeFichosParaTurnos: {
    root: {
      small: {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1753120498/rollos_de_fichos_para_turnos_mm3kem.jpg",
        alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus"
      },
      large: {
        url: landingHeros.rollosDeFichosParaTurnos.informationPortadas.image.desktop.src,
        alt: landingHeros.rollosDeFichosParaTurnos.informationPortadas.image.desktop.alt,
        width: landingHeros.rollosDeFichosParaTurnos.informationPortadas.image.desktop.width,
        height: landingHeros.rollosDeFichosParaTurnos.informationPortadas.image.desktop.height
      }
    }
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