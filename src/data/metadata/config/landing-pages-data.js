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
    },
    'localizadores-cir-c2': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750866698/localizadores_cir_c2_25_06_2024_sk4gqn',
      alt: 'Localizadores para restaurantes CIR-C2.',
      width: 1500,
      height: 1500
    },
    'localizadores-rec-v3': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1750429714/reemplazo_de_rec_v3_3x-100_eozpj4',
      alt: 'Localizadores para restaurantes REC-V3.',
      width: 1500,
      height: 1500
    }
  },

  // Sistema de Turnos TurnoMaster
  sistemasDeTurnosTurnomaster: {
    root: {
      url: landingHeros.turneroTurnomaster.portada.imagenes[1].src,
      alt: landingHeros.turneroTurnomaster.portada.imagenes[1].alt,
      width: landingHeros.turneroTurnomaster.portada.imagenes[1].width,
      height: landingHeros.turneroTurnomaster.portada.imagenes[1].height
    },
  },

  // Llamadores de Meseros
  llamadoresDeMeseros: {
    root: {
      url: landingHeros.llamadoresDeMeseros.portada.imagenes[1].src,
      alt: landingHeros.llamadoresDeMeseros.portada.imagenes[1].alt,
      width: landingHeros.llamadoresDeMeseros.portada.imagenes[1].width,
      height: landingHeros.llamadoresDeMeseros.portada.imagenes[1].height
    },
    'llamador-de-meseros-e2-n-con-tecla-pagar': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt',
      alt: 'Llamador de meseros E2-N negro y rojo con 3 teclas para restaurante.',
      width: 1500,
      height: 1500
    },
    'llamador-de-meseros-e2-b': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1500,q_70/v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
      alt: 'Llamador de meseros E2-B negro y rojo con 2 teclas para restaurante.',
      width: 1500,
      height: 1500
    },
    'hablador-de-mesa': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741624303/Frame_1_38_ymaal6',
      alt: 'Hablador de mesa que resalta tu marca con un espacio adecuado para el botón.',
      width: 1500,
      height: 1500
    },
    'control-numerico': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741623334/Frame_1_34_g50ooz',
      alt: 'Control numérico para llamar empleados o meseros desde cocina.',
      width: 1500,
      height: 1500
    },
    'reloj-receptor-de-llamados': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741555504/Frame_1_15_bwa18u',
      alt: 'Reloj receptor de llamados que vibra y muestra el número de la mesa.',
      width: 1500,
      height: 1500
    },
    'pantalla-t1-b': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1',
      alt: 'Pantalla T1-B que muestra 1 llamado en pantalla, hasta 15 en cola.',
      width: 1500,
      height: 1500
    },
    'pantalla-t6': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481332/Frame_1_13_pdmf7w',
      alt: 'Pantalla T6 que muestra 6 llamados al mismo tiempo.',
      width: 1500,
      height: 1500
    }
  },  

  // Dispensador de Tickets
  dispensadorDeTickets: {
    root: {
      url: landingHeros.dispensadorDeTickets.portada.imagenes[1].src,
      alt: landingHeros.dispensadorDeTickets.portada.imagenes[1].alt,
      width: landingHeros.dispensadorDeTickets.portada.imagenes[1].width,
      height: landingHeros.dispensadorDeTickets.portada.imagenes[1].height
    },
    'dispensador-de-tickets-caracol': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1742935712/Frame_2_malazk',
      alt: 'Dispensador de tickets caracol.',
      width: 1500,
      height: 1500
    }
  },

  // Llamado de Enfermería CuidaMaster
  llamadoDeEnfermeria: {
    root: {
      url: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].src,
      alt: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].alt,
      width: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].width,
      height: landingHeros.llamadoDeEnfermeria.portada.imagenes[1].height
    },
    'llamador-e1-para-cuello': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741473545/Frame_1_1_usrdgr',
      alt: 'Llamador de enfermería E1 para cuello.',
      width: 1500,
      height: 1500
    },
    'llamador-e2-blanco': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745632777/Frame_2_13_bnnw4z',
      alt: 'Llamador de enfermería E2 blanco.',
      width: 1500,
      height: 1500
    },
    'llamador-ex1': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741474210/Frame_1_qdeikt',
      alt: 'Llamador de enfermería EX1.',
      width: 1500,
      height: 1500
    },
    'pantalla-t1-b': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1',
      alt: 'Pantalla T1-B.',
      width: 1500,
      height: 1500
    },
    'pantalla-t6': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741481332/Frame_1_13_pdmf7w',
      alt: 'Pantalla T6.',
      width: 1500,
      height: 1500
    },
    'reloj-receptor-de-llamados': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741555504/Frame_1_15_bwa18u',
      alt: 'Reloj receptor de llamados.',
      width: 1500,
      height: 1500
    },
    'alarma-de-luz': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741563948/Frame_1_20_1_kyyezr',
      alt: 'Alarma de luz.',
      width: 1500,
      height: 1500
    }
  },

  // Turnero TurnoExpress
  turneroTurnoexpress: {
    root: { 
      url: landingHeros.turneroTurnoexpress.portada.imagenes[1].src,
      alt: landingHeros.turneroTurnoexpress.portada.imagenes[1].alt,
      width: landingHeros.turneroTurnoexpress.portada.imagenes[1].width,
      height: landingHeros.turneroTurnoexpress.portada.imagenes[1].height
    },
    'turnero-fila-unica-supermercados': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741639150/Frame_1_61_oytf51',
      alt: 'Turnero fila única supermercados.',
      width: 1500,
      height: 1500
    },
    'turnero-t1-b': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741476098/Frame_1_5_cgypo1',
      alt: 'Turnero T1-B.',
      width: 1500,
      height: 1500
    },
    'turnero-t1-n': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741619266/Frame_1_27_dylrz4',
      alt: 'Turnero T1-N.',
      width: 1500,
      height: 1500
    },
    'turnero-t3-modulo-turno': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741641334/Frame_1_68_bol78g',
      alt: 'Turnero T3 módulo turno.',
      width: 1500,
      height: 1500
    },
    'turnero-transformer': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741704871/Frame_1_74_a9sxmd',
      alt: 'Turnero Transformer.',
      width: 1500,
      height: 1500
    },
    'turnero-t3-con-logo': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741641627/Frame_1_71_rtr5ip',
      alt: 'Turnero T3 con logo.',
      width: 1500,
      height: 1500
    }
  },

  // Calificador de Servicio OpinaMaster
  calificadorDeServicioAlClienteOpinamaster: {
    root: {
      url: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].src,
      alt: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].alt,
      width: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].width,
      height: landingHeros.calificadorDeServicioAlCliente.portada.imagenes[1].height
    },
    'calificador-de-servicio': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741636345/Frame_1_52_eqauh0',
      alt: 'Calificador de servicio.',
      width: 1500,
      height: 1500
    },
    'aviso-de-pared-para-calificar-servicio': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741635705/Frame_1_50_wda5sy',
      alt: 'Aviso de pared para calificar servicio.',
      width: 1500,
      height: 1500
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
    },
    'rollos-termicos': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638695/Frame_1_60_sl57gi',
      alt: 'Rollos de Papel térmico de alta calidad compatibles con múltiples modelos de impresoras térmicas.',
      width: 1500,
      height: 1500
    }
  },

  // Rollos de Fichas para Turnos
  rollosDeFichosParaTurnos: {
    root: {
      url: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].src,
      alt: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].alt,
      width: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].width,
      height: landingHeros.rollosDeFichosParaTurnos.portada.imagenes[1].height
    },
    'rollos-de-turnos': {
      url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs',
      alt: 'Rollos de tickets numerados para uso de Dispensador tipo Caracol.',
      width: 1500,
      height: 1500
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