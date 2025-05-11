import { routes } from "@/config/routes";
import { info } from "sass";

const commonSizesPrimaryImage = [
  { imageWidth: 400, mediaQuery: "(min-width: 0px)" }, 
  { imageWidth: 500, mediaQuery: "(min-width: 700px)" }, 
  { imageWidth: 600, mediaQuery: "(min-width: 1200px)" }
]

const commonSizesSecondaryImage = [
  { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
]

export const landingHeros = {
  background: {
    image: {
      src: "v1738349921/jlxxsnlercoj0nihz4am_udppso.webp",
      alt: "Background Image for Slider Hero",
      priority: "true",
      fetchPriority: "high",
      sizes: [
        { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
      ],
    },
  },
  localizadoresParaRestaurantes: {
    informationSliderLanding: {    
      title: "Localizadores para restaurantes",
      description: "Tiempo de espera sin temor a perder el turno.",
    },
    informationSingleLanding: {
      title: "Localizadores para restaurantes",
      description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
    },
    button: {
      href: routes.landings.localizadoresParaRestaurantes.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506512/bQaT52.tif_4x-8_su2sfk.webp",
      alt: "Localizadores para clientes",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    }
  },
  llamadoresDeMeseros: {
    informationSliderLanding: {    
      title: "Llamador de meseros",
      description: "Un solo toque evita largas esperas.",
    },
    informationSingleLanding: {
      title: "Llamador de Meseros",
      subTitle: "Un solo toque evita largas esperas.",
      description: "Silencioso y de largo alcance.",
    },
    button: {
      href: routes.landings.llamadoresDeMeseros.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506524/1_4x-8_5_kwkmli.webp",
      alt: "Llamador de meseros",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  llamadoDeEnfermeriaCuidamaster: {
    informationSliderLanding: {    
      title: "Llamado de enfermería",
      description: "Conecta al paciente con el personal de salud.",
    },
    informationSingleLanding: {
      title: "Llamado de Enfermería:",
      subTitle: "Más cerca de tus pacientes.",
      description: "Facilita el contacto entre el paciente y personal de salud.",
    },
    button: {
      href: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506524/2_4x-8_5_igrf1u.webp",
      alt: "Llamado de enfermería",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
      alt: "CuidaMaster Logo",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  sistemasDeTurnosTurnomaster: {
    informationSliderLanding: {    
      title: "Sistema de turnos de espera",
      description: "Digitaliza tu sala de espera fácilmente.",
    },
    informationSingleLanding: {
      title: "TurnoMaster",
      subTitle: "Sistema de turnos de espera",
      description: "Lleva tu sala de espera al siguiente nivel",
    },
    button: {
      href: routes.landings.sistemasDeTurnosTurnomaster.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506523/4_4x-8_2_lxfolj.webp",
      alt: "Sistema de turnos de espera",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "f_auto,q_auto/v1744830279/3-8_jxkhuf.webp",
      alt: "Turno Master Logo",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  turneroTurnoexpress: {
    informationSliderLanding: {    
      title: "Turnero digital",
      description: "Orden y agilidad en cada turno.",
    },
    informationSingleLanding: {
      title: "Turnero digital",
      subTitle: "Adiós a las filas",
      description: "Agilidad y orden en cada turno.",
    },
    button: {
      href: routes.landings.turneroTurnoexpress.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506512/8_4x-8_1_tpdrqu.webp",
      alt: "Turnero digital",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744463735/12-8_qjsewx.webp",
      alt: "Logo Turno Express",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  dispensadorDeTickets: {
    informationSliderLanding: {    
      title: "Dispensador de tickets",
      description: "Para llamar turnos en orden.",
    },
    informationSingleLanding: {
      title: "Dispensador de tickets",
      subTitle: "Adiós a las filas",
      description: "Orden y comodidad en cada turno.",
    },
    button: {
      href: routes.landings.dispensadorDeTickets.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506512/9_4x-8_1_biykgd.webp",
      alt: "Dispensador de tickets",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744463735/12-8_qjsewx.webp",
      alt: "Logo Turno Express",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  rollosDeFichosParaTurnos: {
    informationSliderLanding: {    
      title: "Rollos de turnos",
      description: "Para dispensador tipo caracol.",
    },
    informationSingleLanding: {
      title: "Numeración clara y corte preciso",
      description: "para agilizar la atención de turnos.",
    },
    button: {
      href: routes.landings.rollosDeFichosParaTurnos.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506512/10_4x-8_l0ccbu.webp",
      alt: "Rollos de turnos",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744463735/12-8_qjsewx.webp",
      alt: "Logo Turno Express",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  rollosDePapelTermico: {
    informationSliderLanding: {    
      title: "Rollos térmicos",
      description: "Para tickets, facturas y más.",
    },
    informationSingleLanding: {
      title: "Rollos térmicos en variedadde tamaños. ¡Somos fabricantes!",
      description: "Perfectos para tickets, facturas y más. ¡No busques más!",
    },
    button: {
      href: routes.landings.rollosDePapelTermico.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506512/11_4x-8_2_nsacou.webp",
      alt: "Rollos de turnos",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  calificadorDeServicioAlClienteOpinamaster: {
    informationSliderLanding: {
      title: "Calificador de servicio",
      description: "Escucha a tus clientes.",
    },
    informationSingleLanding: {
      title: "OpinaMaster:",
      subTitle: "El calificador de servicio",
      description: "para crecer con la voz de tus clientes.",
    },
    button: {
      href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
      text: "Ver más",
    },
    image: {
      src: "v1745506513/5_4x-8_3_s0vc5b.webp",
      alt: "Rollos de turnos",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744467470/6-8_xncpdx.webp",
      alt: "Logo Turno Express",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  },
  encuestaVirtual: {
    informationSliderLanding: {    
      title: "Encuesta virtual",
      description: "Detecta puntos débiles y mejora tu negocio.",
    },
    informationSingleLanding: {
      title: "Encuesta virtual:",
      subTitle: "Detecta los puntos fuertes",
      description: "y como mejorar tu negocio.",
    },
    image: {
      src: "v1745506523/7_4x-8_2_a0z5uj.webp",
      alt: "Rollos de turnos",
      sizes: commonSizesPrimaryImage,
      priority: "true",
      fetchPriority: "high"
    },
    imageTextColumn: {
      src: "v1744467470/6-8_xncpdx.webp",
      alt: "Logo Turno Express",
      sizes: commonSizesSecondaryImage,
      priority: "true",
      fetchPriority: "high"
    },
  }
}
