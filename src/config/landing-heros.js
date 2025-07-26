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
        width: 1500,
        fetchPriority: "high",
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_475/1_zjvtlb",
          alt: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
          width: 350,
          height: 550
        }
      },
      desktop: {
        text: {
          title: "Localizadores para restaurantes:",
          description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
        },
        image: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,q_80,f_webp,w_730/1_zjvtlb",
          alt: "Imagen de Localizadores para Restaurantes - TecnologíaPlus",
          width: 1500,
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
        src: "3_j5shgh.png",
        alt: "Imagen de Llamadores de Meseros - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "3_j5shgh.png",
        alt: "Imagen de Llamadores de Meseros - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_475/3_j5shgh",
          alt: "Imagen de Llamador de Meseros - TecnologíaPlus",
          width: 350,
          height: 553
        }
      },
      desktop: {
        text: {
          title: "Llamador de Meseros: Un solo toque evita largas esperas.",
          description: "Silencioso y de largo alcance.",
        },
        image: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,f_webp,w_900/3_j5shgh",
          alt: "Imagen de Llamador de Meseros - TecnologíaPlus",
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
        alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
        alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
          alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
          width: 350,
          height: 553
        }
      },
      desktop: {
        text: {
          title: "Llamado de Enfermería: </br> Más cerca de tus pacientes.",
          subTitle: "Facilita el contacto entre el paciente y <br> personal de salud.",
        },
        image: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
          alt: "Imagen de Llamado de Enfermería Cuidamaster - TecnologíaPlus",
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
        alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "13_adjkab.png",
        alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71",
          alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
          width: 600,
          height: 600
        }
      },
      desktop: {
        text: {
          title: "TurnoMaster:",
          subTitle: "Sistema de turnos de espera",
          description: "Lleva tu sala de espera al siguiente nivel",
        },
        image: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_1200,q_90,f_webp/13_adjkab",
          alt: "Imagen de Sistema de Turnos de Espera Turnomaster - TecnologíaPlus",
          width: 1200,
          height: 1009
        }
      }
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
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,q_80,f_webp/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
          alt: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
          width: 350,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
          alt: "Imagen de Turnero Digital TurnoExpress - TecnologíaPlus",
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
        alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
        alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
          alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
          width: 350,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
          alt: "Imagen de Dispensador de Tickets TurnoExpress - TecnologíaPlus",
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
        alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
        alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
          alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
          width: 600,
          height: 600
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
          alt: "Imagen de Rollos de Turnos TurnoExpress - TecnologíaPlus",
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
      images: [{
        src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
        alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
      }],
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
          alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
          width: 350,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
          alt: "Imagen de Rollos de Papel Térmico - TecnologíaPlus",
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
        alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,  
        width: 350,
      },{
        src: "website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/epg4efgegtcqvxyfdsbe",
        alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
          alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
          width: 350,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
          alt: "Imagen de Calificador de Servicio OpinaMaster - TecnologíaPlus",
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
        alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_mobile,
        width: 350,
      },{
        src: "website-v2/images/landings/encuesta-virtual-opinamaster/landings/ubbkhbpquh0tquaz8xwl",
        alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
        className: styles.landing_hero__content__image_desktop,
        width: 1500,
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
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_600,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
          alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
          width: 350,
          height: 603
        }
      },
      desktop: {
        text: {
          title: "Encuesta virtual: </br> Detecta los puntos fuertes",
          subTitle: "y como mejorar tu negocio.",
        },
        image: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale,w_900,q_80,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
          alt: "Imagen de Encuesta Virtual OpinaMaster - TecnologíaPlus",
          width: 900,
          height: 905
        },
      }
    },
  }
}
