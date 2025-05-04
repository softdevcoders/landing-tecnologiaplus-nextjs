import { routes } from "@/config/routes";
import { priority } from "../../../../next-sitemap.config";

export const SLIDER_HERO_ITEMS = [
  {
    title: "Localizadores para restaurantes",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/bQaT52.tif_4x-8_su2sfk.webp",
      alt: "Localizadores para clientes",
    },
    description: "Tiempo de espera sin temor a perder el turno.",
    button: {
      href: routes.landings.localizadoresParaRestaurantes.url,
      text: "Ver más",
    },
    priority: true
  },
  {
    title: "Llamador de meseros",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506524/1_4x-8_5_kwkmli.webp",
      alt: "Llamador de meseros",
    },
    description: "Un solo toque evita largas esperas.",
    button: {
      href: routes.landings.llamadoresDeMeseros.url,
      text: "Ver más",
    },
  },
  {
    title: "Llamado de enfermería",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506524/2_4x-8_5_igrf1u.webp",
      alt: "Llamado de enfermería",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
        alt: "CuidaMaster Logo",
      },
    },
    description: "Conecta al paciente con el personal de salud.",
    button: {
      href: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
      text: "Ver más",
    },
  },
  {
    title: "Sistema de turnos de espera",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506523/4_4x-8_2_lxfolj.webp",
      alt: "Sistema de turnos de espera",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_auto,q_auto/v1744830279/3-8_jxkhuf.webp",
        alt: "Turno Master Logo",
      },
    },
    description: "Digitaliza tu sala de espera fácilmente.",
    button: {
      href: routes.landings.sistemasDeTurnosTurnomaster.url,
      text: "Ver más",
    },
  },
  {
    title: "Turnero digital",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/8_4x-8_1_tpdrqu.webp",
      alt: "Turnero digital",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
      },
    },
    description: "Orden y agilidad en cada turno.",
    button: {
      href: routes.landings.turneroTurnoexpress.url,
      text: "Ver más",
    },
  },
  {
    title: "Dispensador de tickets",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/9_4x-8_1_biykgd.webp",
      alt: "Dispensador de tickets",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
      },
    },
    description: "Para llamar turnos en orden.",
    button: {
      href: routes.landings.dispensadorDeTickets.url,
      text: "Ver más",
    },
  },
  {
    title: "Rollos de turnos",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/10_4x-8_l0ccbu.webp",
      alt: "Rollos de turnos",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
      },
    },
    description: "Para dispensador tipo caracol.",
    button: {
      href: routes.landings.rollosDeFichosParaTurnos.url,
      text: "Ver más",
    },
  },
  {
    title: "Rollos térmicos",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/11_4x-8_2_nsacou.webp",
      alt: "Rollos de turnos",
    },
    description: "Para tickets, facturas y más.",
    button: {
      href: routes.landings.rollosDePapelTermico.url,
      text: "Ver más",
    },
  },
  {
    title: "Calificador de servicio",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506513/5_4x-8_3_s0vc5b.webp",
      alt: "Rollos de turnos",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
      },
    },
    description: "Escucha a tus clientes.",
    button: {
      href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
      text: "Ver más",
    },
  },
  {
    title: "Encuesta virtual",
    image: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506523/7_4x-8_2_a0z5uj.webp",
      alt: "Rollos de turnos",
      image_text_column: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
      },
    },
    description: "Detecta puntos débiles y mejora tu negocio.",
  }
]
