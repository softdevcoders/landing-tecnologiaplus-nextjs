import { routes } from "@/config/routes";
import styles from "@/components/landing-hero/landing-hero.module.scss";

export const templateNames = {
  LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME: "LLAMADO_DE_ENFERMERIA_CUIDAMASTER_HOME",
  ENCUESTA_VIRTUAL_OPINAMASTER_HOME: "ENCUESTA_VIRTUAL_OPINAMASTER_HOME",
  LOCALIZADORES_RESTAURANTES_PORTADA: "LOCALIZADORES_RESTAURANTES_PORTADA",
}

export const landingHeros = {
  background: {
    images: {
      src: "website-v2/images/landings/backgrounds/nqz3myqzqgttlqfepepu",
      alt: "",
      width: 900,
      height: 1080,
    },
  },
  backgroundMobilePortada: {
    images: {
      src: "v1745272277/Fondo_3x-8_yjkwov.webp",
      alt: "",
      width: 200,
      height: 200,
    },
  },
  localizadoresParaRestaurantes: {
    informationHome: {    
      title: "Localizadores para restaurantes",
      description: "Tiempo de espera sin temor a perder el turno.",
      images: [{
        src: "1_zjvtlb.png",
        alt: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
        fetchPriority: "high",
      },{
        src: "1_zjvtlb.png",
        alt: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
        fetchPriority: "high",
      }],
      button: {
        href: routes.landings.localizadoresParaRestaurantes.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      title: "Localizadores para restaurantes",
      description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/1_zjvtlb",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/1_zjvtlb",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
      },
    },
  },
  llamadoresDeMeseros: {
    informationHome: {    
      title: "Llamador de meseros",
      description: "Un solo toque evita largas esperas.",
      images: [{
        src: "3_j5shgh.png",
        alt: "Imagen de Llamadores de Meseros - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "3_j5shgh.png",
        alt: "Imagen de Llamadores de Meseros - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
      }],
      button: {
        href: routes.landings.llamadoresDeMeseros.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      title: "Llamador de Meseros",
      description: "Un solo toque evita largas esperas. Silencioso y de largo alcance.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/3_j5shgh",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/3_j5shgh",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Llamador de Meseros - Tecnología Plus",
      },
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
        alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
        alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Llamado de Enfermería",
      description: "Más cerca de tus pacientes. Facilita el contacto entre el paciente y personal de salud.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Llamado de Enfermería CuidaMaster - Tecnología Plus",
      },
      brandImage: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h",
        alt: "Logo CuidaMaster",
        width: 300,
        height: 65,
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
        alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "13_adjkab.png",
        alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Sistema de turnos de espera",
      description: "TurnoMaster lleva tu sala de espera al siguiente nivel.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/13_adjkab",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Sistema de Turnos de espera Turnomaster - Tecnología Plus.",
      },
    },
  },
  turneroTurnoexpress: {
    informationHome: {    
      title: "<span>Turnero digital</span>",
      description: "Orden y agilidad en cada turno.",
      images: [{
        src: "website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
        alt: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/turnero-turnoexpress/landings/uv4swpdtp8jpg35dclbh",
        alt: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Turnero digital",
      description: "Adiós a las filas. Agilidad y orden en cada turno.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus",
      },  
    },
  },
  dispensadorDeTickets: {
    informationHome: {    
      title: "Dispensador de tickets",
      description: "Para llamar turnos en orden.",
      images: [{
        src: "website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
        alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
        alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Dispensador de tickets",
      description: "Adiós a las filas. Orden y comodidad en cada turno.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
      },
      button: {
        text: "Ver más",
        href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
      },
      brandImage: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744463735/12-8_qjsewx",
        alt: "Logo Turno Express",
        width: 300,
        height: 65,
      }
    },
  },
  rollosDeFichosParaTurnos: {
    informationHome: {    
      title: "Rollos de turnos",
      description: "Para dispensador tipo caracol.",
      images: [{
        src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
        alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
        alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Rollos de fichos para turnos",
      description: "Numeración clara para agilizar la atención de turnos.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Rollos de fichos para turnos TurnoExpress - Tecnología Plus",
      },
      button: {
        text: "Ver más",
        href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
      },
      brandImage: {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744463735/12-8_qjsewx",
        alt: "Logo Turno Express",
        width: 300,
        height: 65,
      }
    },    
  },
  rollosDePapelTermico: {
    informationHome: {    
      title: "Rollos térmicos",
      description: "Para tickets, facturas y más.",
      images: [{
        src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
      }],
      button: {
        href: routes.landings.rollosDePapelTermico.url,
        text: "Ver más",
      },
    },
    informationPortadas: {
      title: "Rollos de papel térmico",
      description: "Perfectos para tickets, facturas y más. ¡Somos fabricantes!",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Rollos de Papel Térmico - Tecnología Plus",
      },
      button: {
        text: "Ver más",
        href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
      },
    },
  },
  calificadorDeServicioAlClienteOpinamaster: {
    informationHome: {
      title: "Calificador de servicio",
      description: "Escucha a tus clientes.",
      images: [{
        src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
        alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,  
        width: 350,
      },{
        src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/epg4efgegtcqvxyfdsbe",
        alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Calificador de servicio al cliente",
      description: "Para crecer con la voz de tus clientes.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Calificador de servicio al cliente - Tecnología Plus",
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
        src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
        alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/ubbkhbpquh0tquaz8xwl",
        alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1200,
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
      title: "Encuesta virtual",
      description: "Detecta los puntos fuertes y como mejorar tu negocio.",
      image: {
        mobile: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
          width: 600,
          height: 600,
        },
        desktop: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1000,q_80,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
          width: 1000,
          height: 1000,
        },
        alt: "Imagen de Encuesta Virtual - Tecnología Plus",
      },
    },
  }
}
