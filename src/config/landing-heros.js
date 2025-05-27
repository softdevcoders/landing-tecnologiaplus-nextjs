import { routes } from "@/config/routes";
import styles from "@/components/landing-hero/landing-hero.module.scss";

export const templateNames = {
  LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME: "LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME",
  ENCUESTA_VIRTUAL_OPINAMASTER_HOME: "ENCUESTA_VIRTUAL_OPINAMASTER_HOME",
  LOCALIZADORES_RESTAURANTES_PORTADA: "LOCALIZADORES_RESTAURANTES_PORTADA",
}

const commonSizesPrimaryImage = [
  { imageWidth: 600, mediaQuery: "(min-width: 0px)" }, // Para pantallas pequeñas, hasta 600px de ancho
  { imageWidth: 700, mediaQuery: "(min-width: 700px)" }, // Para tabletas o pantallas medianas, 700px de ancho
  { imageWidth: 900, mediaQuery: "(min-width: 1200px)" }, // Para pantallas grandes, 900px de ancho
  { imageWidth: 1200, mediaQuery: "(min-width: 1600px)" } // Para pantallas grandes o de alta resolución, 1200px o más
]
const commonSizesSecondaryImage = [
  { imageWidth: 300, mediaQuery: "(min-width: 0px)" }, 
]

export const landingHeros = {
  background: {
    images: {
      src: "v1738349921/jlxxsnlercoj0nihz4am_udppso.webp",
      alt: "Background Image for Slider Hero",
      loading: "lazy",
      width: 200,
      height: 200,
    },
  },
  backgroundMobilePortada: {
    images: {
      src: "v1745272277/Fondo_3x-8_yjkwov.webp",
      alt: "Background Image for Slider Hero",
      loading: "lazy",
      width: 200,
      height: 200,
    },
  },
  localizadoresParaRestaurantes: {
    informationHome: {    
      title: "Localizadores para restaurantes",
      description: "Tiempo de espera sin temor a perder el turno.",
      images: [{
        src: "v1745506512/bQaT52.tif_4x-8_su2sfk.webp",
        alt: "Localizadores para clientes",
        width: 350,
        height: 265,
        className: styles.landing_hero__content__image_mobile,
        fetchPriority: "high"
      },{
        src: "v1745506512/bQaT52.tif_4x-8_su2sfk.webp",
        alt: "Localizadores para clientes",
        width: 640,
        height: 484,
        className: styles.landing_hero__content__image_desktop,
        fetchPriority: "high"
      }],
      button: {
        href: routes.landings.localizadoresParaRestaurantes.url,
        text: "Ver másssss",
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
          width: 500,
          height: 550
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
          width: 900,
          height: 701
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506524/1_4x-8_5_kwkmli.webp",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
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
          width: 500,
          height: 553
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
          width: 900,
          height: 500
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506524/2_4x-8_5_igrf1u.webp",
        alt: "Llamado de enfermería",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
        alt: "CuidaMaster Logo",
        width: 225,
        height: 100,
      },
      button: {
        href: routes.landings.llamadoDeEnfermeriaCuidamaster.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Llamado de enfermería",
          subTitle: "Conecta al paciente con </b> el personal de salud.",
        },
        image: {
          src: "v1745243187/Recurso_19_3x-8_okf5hg.webp",
          alt: "Llamado de enfermería",
          width: 500,
          height: 553
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
          width: 900,
          height: 741
        },  
        imageTextColumn: {
          src: "v1744462125/Logo_CuidaMaster_4x-8_cn4z4h.webp",
          alt: "CuidaMaster Logo",
          width: 300,
          height: 133
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506523/4_4x-8_2_lxfolj.webp",
        alt: "Sistema de turnos de espera",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "f_auto,q_auto/v1744830279/3-8_jxkhuf.webp",
        alt: "Turno Master Logo",
        width: 225,
        height: 100,
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
          width: 600,
          height: 521
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
          width: 1200,
          height: 1009
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/8_4x-8_1_tpdrqu.webp",
        alt: "Turnero digital",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        width: 225,
        height: 100,
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
          description: "Orden y agilidad </br> en cada turno.",
        },
        image: {
          src: "v1745243183/Recurso_22_3x-8_ofq0yg.webp",
          alt: "Turnero digital",
          width: 500,
          height: 541
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
          width: 900,
          height: 500
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/9_4x-8_1_biykgd.webp",
        alt: "Dispensador de tickets",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        width: 225,
        height: 100,
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
          width: 500,
          height: 557
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
          width: 900,
          height: 818
        },
        imageTextColumn: {
          src: "v1744463735/12-8_qjsewx.webp",
          alt: "Logo Turno Express",
          width: 400,
          height: 65
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506512/10_4x-8_l0ccbu.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744463735/12-8_qjsewx.webp",
        alt: "Logo Turno Express",
        width: 225,
        height: 100,
      },
      button: {
        href: routes.landings.rollosDeFichosParaTurnos.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Rollos </br> de turnos",
          subTitle: "Numeración clara </br> y corte preciso para",  
          description: "agilizar la atención de turnos.",
        },
        image: {
          src: "v1745243187/Recurso_25_3x-8_hwimpu.webp",
          alt: "Rollos de turnos",
          width: 500,
          height: 447
        },
        button: {
          href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
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
          width: 900,
          height: 610
        },
        button: {
          href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
          text: "Ver más",
        },
        imageTextColumn: {
          src: "v1744463735/12-8_qjsewx.webp",
          alt: "Logo Turno Express",
          width: 400,
          height: 65
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
          description: "Perfectos para tickets,</br> facturas y más.",
        },
        image: {
          src: "v1744771350/tiuyfgrjwlmhj4gdzrtm_lybcwl_1_alshzc.webp",
          alt: "Rollos de turnos",
          width: 500,
          height: 361
        },
        button: {
          href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
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
          width: 900,
          height: 649
        },
        button: {
          href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506513/5_4x-8_3_s0vc5b.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        width: 225,
        height: 100,
      },
      button: {
        href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Calificador </br> de servicio",
          subTitle: "para crecer con la </br> voz de tus clientes.",
        },
        image: {
          src: "v1745243188/Recurso_26_3x-8_ydpvir.webp",
          alt: "Calificador de servicio",
          width: 600,
          height: 692
        }
      },
      desktop: {
        text: {
          title: "OpinaMaster:",
          subTitle: "El calificador de servicio",
          description: "para crecer con la voz de tus clientes.",
        },
        image: {
          src: "v1738596299/Imagen_principal_2x-8_xvqvel.webp",
          alt: "Calificador de servicio",
          width: 900,
          height: 968
        },
      }
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
        className: styles.landing_hero__content__image_mobile
      },{
        src: "v1745506523/7_4x-8_2_a0z5uj.webp",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop
      }],
      imageTextColumn: {
        src: "v1744467470/6-8_xncpdx.webp",
        alt: "Logo Turno Express",
        width: 225,
        height: 100,
      },
      button: {
        href: routes.landings.encuestaVirtual.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      mobile: {
        text: {
          title: "Encuesta virtual",
          subTitle: "Detecta puntos débiles </br> y mejora tu negocio.",
        },
        image: {
          src: "v1745243183/Recurso_21_3x-8_1_qdom6g.webp",
          alt: "Encuesta virtual",
          width: 600,
          height: 603
        }
      },
      desktop: {
        text: {
          title: "Encuesta virtual: </br> Detecta los puntos fuertes",
          subTitle: "y como mejorar tu negocio.",
        },
        image: {
          src: "v1738607993/Imagen_principal_2x-8_pc1qfd.webp",
          alt: "Encuesta virtual",
          width: 900,
          height: 905
        },
      }
    },
  }
}
