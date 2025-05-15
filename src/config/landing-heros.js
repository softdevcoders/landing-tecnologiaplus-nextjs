import { routes } from "@/config/routes";
import styles from "@/components/landing-hero/landing-hero.module.scss";

export const templateNames = {
  LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME: "LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME",
  ENCUESTA_VIRTUAL_OPINAMASTER_HOME: "ENCUESTA_VIRTUAL_OPINAMASTER_HOME",
  LOCALIZADORES_RESTAURANTES_PORTADA: "LOCALIZADORES_RESTAURANTES_PORTADA",
}

const commonSizesPrimaryImage = [
  { imageWidth: 600, mediaQuery: "(min-width: 0px)" }, 
  { imageWidth: 700, mediaQuery: "(min-width: 700px)" }, 
  { imageWidth: 900, mediaQuery: "(min-width: 1200px)" }
]

const commonSizesSecondaryImage = [
  { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
]

export const landingHeros = {
  background: {
    images: {
      src: "v1738349921/jlxxsnlercoj0nihz4am_udppso.webp",
      alt: "Background Image for Slider Hero",
      priority: "true",
      fetchPriority: "high",
      sizes: [
        { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
      ],
    },
  },
  backgroundMobilePortada: {
    images: {
      src: "v1745272277/Fondo_3x-8_yjkwov.webp",
      alt: "Background Image for Slider Hero",
      priority: "true",
      fetchPriority: "high",
      sizes: [
        { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
      ],
    },
  },
  localizadoresParaRestaurantes: {
    informationHome: {    
      title: "Localizadores para restaurantes",
      description: "Tiempo de espera sin temor a perder el turno.",
      images: {
        src: "v1745506512/bQaT52.tif_4x-8_su2sfk.webp",
        alt: "Localizadores para clientes",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.localizadoresParaRestaurantes.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Localizadores para restaurantes",
          description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
        },
        image: {
          src: "v1745266173/Recurso_17_3x-8_1_sjgfak.webp",
          alt: "Localizadores para clientes",
          sizes: commonSizesPrimaryImage,
        }
      },
      desktop: {
        text: {
          title: "Localizadores para restaurantes:",
          description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
        },
        image: {
          src: "v1744781254/Imagen_portada_4x-8_dfrjjg_1_1_lvtv17.webp",
          alt: "Localizadores para clientes",
          sizes: commonSizesPrimaryImage,
        }
      }
    },
  },
  llamadoresDeMeseros: {
    informationHome: {    
      title: "Llamador de meseros",
      description: "Un solo toque evita largas esperas.",
      images: [{
        src: "v1745506524/4_4x-8_nlf2cd_1_dih39x.webp",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506524/1_4x-8_5_kwkmli.webp",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      button: {
        href: routes.landings.llamadoresDeMeseros.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Llamador de meseros",
          subTitle: "Un solo toque evita largas esperas",
          description: "Silencioso y de largo alcance",
        },
        image: {
          src: "v1745506524/4_4x-8_nlf2cd_1_dih39x.webp",
          alt: "Llamador de meseros",
          sizes: commonSizesPrimaryImage,
        }
      },
      desktop: {
        text: {
          title: "Llamador de Meseros: Un solo toque evita largas esperas.",
          description: "Silencioso y de largo alcance.",
        },
        image: {
          src: "v1745506524/1_4x-8_5_kwkmli.webp",
          alt: "Llamador de meseros",
          sizes: commonSizesPrimaryImage,
        }
      }
      /*
      title: "Llamador de Meseros: Un solo toque evita largas esperas.",
      description: "Silencioso y de largo alcance.",
      images: [{
        src: "v1745506524/4_4x-8_nlf2cd_1_dih39x.webp",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506524/1_4x-8_5_kwkmli.webp",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      */
    },
  },
  llamadoDeEnfermeriaCuidamaster: {
    informationHome: {    
      title: "Llamado de enfermería",
      description: "Conecta al paciente con el personal de salud.",
      customTemplate: true,
      templateName: templateNames.LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME,
      images: [{
        src: "v1744861534/Group_5_t7cyjd.webp",
        alt: "Llamado de enfermería",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506524/2_4x-8_5_igrf1u.webp",
        alt: "Llamado de enfermería",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
        alt: "CuidaMaster Logo",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      // title: "Llamado de Enfermería:",
      // subTitle: "Más cerca de tus pacientes.",
      // description: "Facilita el contacto entre el paciente y personal de salud.",
      // images: [{
      //   src: "v1744861534/Group_5_t7cyjd.webp",
      //   alt: "Llamado de enfermería",
      //   sizes: commonSizesPrimaryImage,
      //   priority: "true",
      //   fetchPriority: "high",
      //   className: styles.landing_hero__content__image_mobile
      // },{
      //   src: "v1745506524/2_4x-8_5_igrf1u.webp",
      //   alt: "Llamado de enfermería",
      //   sizes: commonSizesPrimaryImage,
      //   priority: "true",
      //   fetchPriority: "high",
      //   className: styles.landing_hero__content__image_desktop
      // }],
      // imageTextColumn: {
      //   src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
      //   alt: "CuidaMaster Logo",
      //   sizes: commonSizesSecondaryImage,
      //   priority: "true",
      //   fetchPriority: "high"
      // },
      mobile: {
        text: {
          title: "Llamado de enfermería",
          subTitle: "Conecta al paciente con </b> el personal de salud.",
        },
        image: {
          src: "v1745243187/Recurso_19_3x-8_okf5hg.webp",
          alt: "Llamado de enfermería",
          sizes: commonSizesPrimaryImage,
        }
      },
      desktop: {
        text: {
          title: "Llamado de Enfermería: </br> Más cerca de tus pacientes.",
          subTitle: "Facilita el contacto entre el paciente y <br> personal de salud.",
        },
        image: {
          src: "v1738685528/Imagen_principal_2x-8_1_cnekrr.webp",
          alt: "Llamado de enfermería",
          sizes: commonSizesPrimaryImage,
        },  
        imageTextColumn: {
          src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
          alt: "CuidaMaster Logo",
          sizes: commonSizesSecondaryImage,
          priority: "true",
          fetchPriority: "high"
        },
      }
    },
  },
  sistemasDeTurnosTurnomaster: {
    informationHome: {    
      title: [{
        text: "Sistema de turnos",
        className: styles.landing_hero__content__text__title__mobile
      },{
        text: "Sistema de turnos de espera",
        className: styles.landing_hero__content__text__title__desktop
      }],
      description: "Digitaliza tu sala de espera fácilmente.",
      images: [{
        src: "v1744861623/Group_7_zgut7e.webp",
        alt: "Sistema de turnos de espera",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506523/4_4x-8_2_lxfolj.webp",
        alt: "Sistema de turnos de espera",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "f_auto,q_auto/v1744830279/3-8_jxkhuf.webp",
        alt: "Turno Master Logo",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.sistemasDeTurnosTurnomaster.url,
        text: "Ver más",
      }
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Sistema de turnos de espera",
          description: "Digitaliza tu sala de espera fácilmente.",
        },
        image: {
          src: "v1745263542/Recurso_20_3x-8_bbrvfp.webp",
          alt: "Sistema de turnos de espera",
          sizes: commonSizesPrimaryImage,
        }
      },
      desktop: {
        text: {
          title: "TurnoMaster:",
          subTitle: "Sistema de turnos de espera",
          description: "Lleva tu sala de espera al siguiente nivel",
        },
        image: {
          src: "v1738860875/imagen_ppal_2x-8_1_cpkvb2.webp",
          alt: "Sistema de turnos de espera",
          sizes: commonSizesPrimaryImage,
        }
      }
    },
  },
  turneroTurnoexpress: {
    informationHome: {    
      title: "<span>Turnero</br>digital</span>",
      description: "Orden y agilidad en cada turno.",
      images: [{
        src: "v1744861623/Group_8_pkcnqa.webp",
        alt: "Turnero digital",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/8_4x-8_1_tpdrqu.webp",
        alt: "Turnero digital",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.turneroTurnoexpress.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Turnero digital",
          subTitle: "Adiós a las filas",
          description: "Orden y agilidad en cada turno.",
        },
        image: {
          src: "v1745243183/Recurso_22_3x-8_ofq0yg.webp",
          alt: "Turnero digital",
          sizes: commonSizesPrimaryImage,
        }
      },
      desktop: {
        text: {
          title: "Turnero digital:",
          subTitle: "Adiós a las filas",
          description: "Agilidad y orden en cada turno.",
        },
        image: {
          src: "v1738431726/Imagen_bannerprincipal_2x-8_daisi3.webp",
          alt: "Turnero digital",
          sizes: commonSizesPrimaryImage,
        }
      }
    },
  },
  dispensadorDeTickets: {
    informationHome: {    
      title: "Dispensador de tickets",
      description: "Para llamar turnos en orden.",
      images: [{
        src: "v1744861625/Group_3_nkqa3u.webp",
        alt: "Dispensador de tickets",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/9_4x-8_1_biykgd.webp",
        alt: "Dispensador de tickets",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.dispensadorDeTickets.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Dispensador de tickets",
          subTitle: "Adiós a las filas",
          description: "Orden y comodidad </br> en cada turno.",
        },
        image: {
          src: "v1745243187/Recurso_23_3x-8_kplypr.webp",
          alt: "Dispensador de tickets",
          sizes: commonSizesPrimaryImage,
        },
        button: {
          href: routes.landings.dispensadorDeTickets.url,
          text: "Ver más",  
        }
      },
      desktop: {
        text: {
          title: "Dispensador de tickets",
          subTitle: "Adiós a las filas",
          description: "Orden y comodidad en cada turno.",
        },
        image: {
          src: "v1738424725/Imagen_banner_2x-8_qd3lwx.webp",
          alt: "Dispensador de tickets",
          sizes: commonSizesPrimaryImage,
        },
        imageTextColumn: {
          src: "v1744463735/12-8_qjsewx.webp",
          alt: "Logo Turno Express",
          sizes: commonSizesSecondaryImage,
          priority: "true",
          fetchPriority: "high"
        },
        button: {
          href: routes.landings.dispensadorDeTickets.url,
          text: "Ver más",  
        }
      }
    },
  },
  rollosDeFichosParaTurnos: {
    informationHome: {    
      title: "Rollos de turnos",
      description: "Para dispensador tipo caracol.",
      images: [{
        src: "v1744861625/Group_6_gqyr8k.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/10_4x-8_l0ccbu.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.rollosDeFichosParaTurnos.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Rollos de turnos",
          subTitle: "Numeración clara y corte preciso para",  
          description: "agilizar la atención de turnos.",
        },
        image: {
          src: "v1745243187/Recurso_25_3x-8_hwimpu.webp",
          alt: "Rollos de turnos",
          sizes: commonSizesPrimaryImage,
        },
        button: {
          href: routes.landings.rollosDeFichosParaTurnos.url,
          text: "Ver más",
        }
      },
      desktop: {
        text: {
          title: "Numeración clara y corte preciso",
          description: "para agilizar la atención de turnos.",
        },
        image: {
          src: "v1745506512/10_4x-8_l0ccbu.webp",
          alt: "Rollos de turnos",
          sizes: commonSizesPrimaryImage,
        },
        button: {
          href: routes.landings.rollosDeFichosParaTurnos.url,
          text: "Ver más",
        },
        imageTextColumn: {
          src: "v1744463735/12-8_qjsewx.webp",
          alt: "Logo Turno Express",
          sizes: [{ imageWidth: 300, mediaQuery: "(min-width: 0px)" }],
          priority: "true",
          fetchPriority: "high"
        },
      }
    },    
  },
  rollosDePapelTermico: {
    informationHome: {    
      title: "Rollos térmicos",
      description: "Para tickets, facturas y más.",
      images: {
        src: "v1745506512/11_4x-8_2_nsacou.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.rollosDePapelTermico.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Rollos térmicos",
          subTitle: "En variedad de tamaños </br> ¡Somos fabricantes!",
          description: "Perfectos para tickets, facturas y más.",
        },
        image: {
          src: "v1745243187/Recurso_23_3x-8_kplypr.webp",
          alt: "Rollos de turnos",
          sizes: commonSizesPrimaryImage,
        },
        button: {
          href: routes.landings.rollosDePapelTermico.url,
          text: "Ver más",
        },
      },
      desktop: {
        text: {
          title: "Rollos térmicos en variedad de tamaños. ¡Somos fabricantes!",
          subTitle: "Perfectos para tickets, facturas y más.</br>¡No busques más!",
        },
        image: {
          src: "v1738349924/tiuyfgrjwlmhj4gdzrtm_lybcwl.webp",
          alt: "Rollos de turnos",
          sizes: commonSizesPrimaryImage,
        },
        button: {
          href: routes.landings.rollosDePapelTermico.url,
          text: "Ver más",
        },
      }
    },
  },
  calificadorDeServicioAlClienteOpinamaster: {
    informationHome: {
      title: "Calificador de servicio",
      description: "Escucha a tus clientes.",
      images: [{
        src: "v1744864122/Group_1_kihtey.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506513/5_4x-8_3_s0vc5b.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      title: "OpinaMaster:",
      subTitle: "El calificador de servicio",
      description: "para crecer con la voz de tus clientes.",
      images: [{
        src: "v1744864122/Group_1_kihtey.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506513/5_4x-8_3_s0vc5b.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
    },
    
  },
  encuestaVirtual: {
    informationHome: {    
      title: "Encuesta virtual",
      description: "Detecta puntos débiles y mejora tu negocio.",
      customTemplate: true,
      templateName: templateNames.ENCUESTA_VIRTUAL_OPINAMASTER_HOME,
      images: [{
        src: "v1745243245/Recurso_21_3x-8_1_pkt9h3.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506523/7_4x-8_2_a0z5uj.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
      button: {
        href: routes.landings.encuestaVirtual.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      title: "Encuesta virtual:",
      subTitle: "Detecta los puntos fuertes",
      description: "y como mejorar tu negocio.",
      images: [{
        src: "v1745243245/Recurso_21_3x-8_1_pkt9h3.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506523/7_4x-8_2_a0z5uj.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        priority: "true",
        fetchPriority: "high",
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        sizes: commonSizesSecondaryImage,
        priority: "true",
        fetchPriority: "high"
      },
    },
  }
}
