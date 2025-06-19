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
  { imageWidth: 900, mediaQuery: "(min-width: 1200px)" },
  { imageWidth: 1400, mediaQuery: "(min-width: 1600px)" }
]

export const landingHeros = {
  background: {
    images: {
      src: "website-v2/images/landings/backgrounds/nqz3myqzqgttlqfepepu",
      alt: "Background Image for Slider Hero",
      loading: "lazy",
      width: 1920,
      height: 1080,
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
        src: "1_lhteye.png",
        alt: "Localizadores para clientes",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile,
        fetchPriority: "high"
      },{
        src: "1_lhteye.png",
        alt: "Localizadores para clientes",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_desktop,
        fetchPriority: "high"
      }],
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
          src: "1_lhteye.png",
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
          src: "1_lhteye.png",
          alt: "Localizadores para clientes",
          width: 1200,
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
        src: "website-v2/images/landings/llamadores-de-meseros/landing/smtu0dxji0jj84ajorfg",
        alt: "Llamador de meseros",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/llamadores-de-meseros/landing/smtu0dxji0jj84ajorfg",
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
          src: "website-v2/images/landings/llamadores-de-meseros/landing/smtu0dxji0jj84ajorfg",
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
          src: "website-v2/images/landings/llamadores-de-meseros/landing/smtu0dxji0jj84ajorfg",
          alt: "Llamador de meseros",
          width: 900,
          height: 500
        }
      }
    },
  },
  llamadoDeEnfermeriaCuidamaster: {
    informationHome: {    
      title: "Llamado de enfermería",
      description: "Conecta al paciente con el personal de salud.",
      // customTemplate: true,
      // templateName: templateNames.LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME,
      images: [{
        src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
        alt: "Llamado de enfermería",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
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
          src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
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
          src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
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
        src: "website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
        alt: "Sistema de turnos de espera",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/sistema-de-turnos-turnomaster/landings/pibqy8gj9ekv1lb5twmw",
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
          src: "website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
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
          src: "website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
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
        src: "website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
        alt: "Turnero digital",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/turnero-turnoexpress/landings/uv4swpdtp8jpg35dclbh",
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
          src: "website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
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
          src: "website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
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
        src: "website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
        alt: "Dispensador de tickets",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
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
          src: "website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
          alt: "Dispensador de tickets",
          width: 500,
          height: 557
        },
        button: {
          href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
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
          src: "website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
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
          href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
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
        src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
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
          src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
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
          src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
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
        src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
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
          src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
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
          src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
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
        src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/epg4efgegtcqvxyfdsbe",
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
          src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
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
          src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
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
        src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
        alt: "Rollos de turnos",
        sizes: commonSizesPrimaryImage,
        className: styles.landing_hero__content__image_mobile
      },{
        src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/ubbkhbpquh0tquaz8xwl",
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
          src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
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
          src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
          alt: "Encuesta virtual",
          width: 900,
          height: 905
        },
      }
    },
  }
}
