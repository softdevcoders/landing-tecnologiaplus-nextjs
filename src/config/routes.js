export const routes = {
  home: {
    label: "Inicio",
    url: "/",
  },
  blog: {
    label: "Blog",
    url: "/blog",
    children: {
      localizadoresParaRestaurantes: {
        label: "Localizadores autoservicio",
        url: "/blog/localizadores-para-restaurantes",
        slug: "localizadores-para-restaurantes",
        category_key: "LOCALIZADORES_PARA_RESTAURANTES",
        category_name: "Localizadores autoservicio",
      },
      llamadoresDeMeseros: {  
        label: "Llamadores de meseros",
        url: "/blog/llamadores-de-meseros",
        slug: "llamadores-de-meseros",
        category_key: "LLAMADORES_DE_MESEROS",
        category_name: "Llamadores de meseros",
      },
      turneroTurnoexpress: {
        label: "Turnero Turnoexpress",
        url: "/blog/turnero",
        slug: "turnero",
        category_key: "TURNO_TURNOEXPRESS",
        category_name: "Turnero Turnoexpress",
      },
      sistemasDeTurnosTurnomaster: {
        label: "Sistemas de turnos",
        url: "/blog/sistema-de-turnos",
        slug: "sistema-de-turnos",
        category_key: "SISTEMA_DE_TURNOS_TURNOMASTER",
        category_name: "Sistemas de turnos",
      },
      rollosDeFichosParaTurnos: {
        label: "Rollos para turnos",
        url: "/blog/rollos-de-fichos-para-turnos",
        slug: "rollos-de-fichos-para-turnos",
        category_key: "ROLLOS_DE_FICHOS_PARA_TURNOS",
        category_name: "Rollos para turnos",
      },
      rollosDePapelTermico: {
        label: "Rollos térmicos",
        url: "/blog/rollos-de-papel-termico",
        slug: "rollos-de-papel-termico",
        category_key: "ROLLOS_DE_PAPEL_TERMICO",
        category_name: "Rollos térmicos",
      },
      dispensadorDeTickets: {
        label: "Dispensador de tickets",
        url: "/blog/dispensador-de-tickets",
        slug: "dispensador-de-tickets",
        category_key: "DISPENSADOR_DE_TICKETS",
        category_name: "Dispensador de tickets",
      },
      llamadoDeEnfermeria: {
        label: "Llamado de enfermería",
        url: "/blog/llamado-de-enfermeria",
        slug: "llamado-de-enfermeria",
        category_key: "LLAMADO_DE_ENFERMERIA_CUIDAMASTER",
        category_name: "Llamado de enfermería",
      },
      calificadorDeServicioAlClienteOpinamaster: {
        label: "Calificador de servicio",
        url: "/blog/calificador-de-servicio-al-cliente",
        slug: "calificador-de-servicio-al-cliente",
        category_key: "CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER",
        category_name: "Calificador de servicio",
      },
      encuestaVirtualOpinamaster: {
        label: "Encuesta virtual",  
        url: "/blog/encuesta-virtual",
        slug: "encuesta-virtual",
        category_key: "ENCUESTA_VIRTUAL_OPINAMASTER",
        category_name: "Encuesta virtual",
      },
    },
  },
  contact: {
    label: "Contacto",
    url: "/contacto",
  },
  contact_media: {
    facebook: {
      url: "https://www.facebook.com/tecnologiapluscolombia",
      label: "Facebook",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/tecnologiapluscolombia",
    },
    youtube: {
      label: "Youtube",
      url: "https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg",
    },
    phones: [
      {
        label: "316 468 2034",
        url: "tel:+573164682034",
      },
      {
        label: "(+57) 322 734 79 71",
        url: "tel:+573227347971",
      }
    ],
    emails: [
      {
        label: "ventas@tecnologiaplus.com",
        url: "mailto:ventas@tecnologiaplus.com"
      }
    ]
  },
  landings: {
    localizadoresParaRestaurantes: {
      url: "/localizadores-para-restaurantes",
      label: "Localizadores autoservicio",
      children: {
        rec_v3: {
          label: "REC V3",
          url: "/localizadores-para-restaurantes/localizadores-rec-v3",
        },
        rec_c2: {
          label: "REC C2",
          url: "/localizadores-para-restaurantes/localizadores-cir-c2"
        }
      }
    },
    llamadoresDeMeseros: {
      url: "/llamadores-de-meseros",
      label: "Llamadores de meseros",
      children: { 
        e2_n: {
          label: "Llamador de meseros E2-N con tecla pagar",
          url: "/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar",
        },
        e2_b: {
          label: "Llamador de meseros E2-B",
          url: "/llamadores-de-meseros/llamador-de-meseros-e2-b",
        },
        habladorDeMesa:{
          label: "Hablador de mesa",
          url: "/llamadores-de-meseros/hablador-de-mesa",
        },
        controlNumerico: {  
          label: "Control numérico",
          url: "/llamadores-de-meseros/control-numerico",
        },
        relojReceptorDeLlamados: {
          label: "Reloj receptor de llamados",
          url: "/llamadores-de-meseros/reloj-receptor-de-llamados",
        },
        t1_b: {
          label: "Pantalla T1-B",
          url: "/llamadores-de-meseros/pantalla-t1-b",
        },
        t6: {
          label: "Pantalla T6",
          url: "/llamadores-de-meseros/pantalla-t6",
        }
      }
    },
    turneroTurnoexpress: {
      url: "/turnero-turnoexpress",
      label: "Turnero Turnoexpress",
      children: {
        turneroT3ModuloTurno: {
          label: "Turnero T3 módulo turno",
          url: "/turnero-turnoexpress/turnero-t3-modulo-turno",
        },
        turneroT3ConLogo: {
          label: "Turnero T3 con logo",
          url: "/turnero-turnoexpress/turnero-t3-con-logo",
        },
        turneroT1B: {
          label: "Turnero T1-B",
          url: "/turnero-turnoexpress/turnero-t1-b",
        },
        turneroT1N: {
          label: "Turnero T1-N",
          url: "/turnero-turnoexpress/turnero-t1-n",
        },
        turneroFilaUnicaSupermercados: {
          label: "Turnero fila única supermercados",
          url: "/turnero-turnoexpress/turnero-fila-unica-supermercados",
        },
        turneroTransformer: {
          label: "Turnero Transformer",
          url: "/turnero-turnoexpress/turnero-transformer",
        }
      }
    },
    sistemasDeTurnosTurnomaster: {
      url: "/sistema-de-turnos-turnomaster",
      label: "Sistema de turnos",
    },
    rollosDeFichosParaTurnos: {
      url: "/rollos-de-fichos-para-turnos",
      label: "Rollos para turnos",
      children: {
        rollosDeTurnos: {
          label: "Rollos de turnos",
          url: "/rollos-de-fichos-para-turnos/rollos-de-turnos",
        }
      }
    },
    rollosDePapelTermico: {
      url: "/rollos-de-papel-termico",
      label: "Rollos térmicos",
      children: {
        rollosTermicos:{
          label: "Rollos térmicos",
          url: "/rollos-de-papel-termico/rollos-termicos",
        }
      }
    },
    dispensadorDeTickets: {
      url: "/dispensador-de-tickets",
      label: "Dispensador de tickets",
      children: {
        dispensadorDeTicketsCaracol: {
          label: "Dispensador de tickets caracol",
          url: "/dispensador-de-tickets/dispensador-de-tickets-caracol",
        }
      }
    },
    llamadoDeEnfermeria: {
      url: "/llamado-de-enfermeria",
      label: "Llamado de enfermería",
      children: {
        alarmaDeLuz: {
          label: "Alarma de luz",
          url: "/llamado-de-enfermeria/alarma-de-luz",
        },
        llamadorE2NBlanco: {
          label: "Llamador E2 blanco",
          url: "/llamado-de-enfermeria/llamador-e2-blanco",
        },
        llamadorE1ParaCuello: {
          label: "Llamador E1 para cuello",
          url: "/llamado-de-enfermeria/llamador-e1-para-cuello",
        },
        llamadorEx1: {
          label: "Llamador EX1",
          url: "/llamado-de-enfermeria/llamador-ex1",
        },
        pantallaT1B: {
          label: "Pantalla T1-B",
          url: "/llamado-de-enfermeria/pantalla-t1-b",
        },
        pantallaT6: {
          label: "Pantalla T6",
          url: "/llamado-de-enfermeria/pantalla-t6",
        },
        relojReceptorDeLlamados: {
          label: "Reloj receptor de llamados",
          url: "/llamado-de-enfermeria/reloj-receptor-de-llamados",
        }
      }
    },
    calificadorDeServicioAlClienteOpinamaster: {
      url: "/calificador-de-servicio-al-cliente-opinamaster",
      label: "Calificador de servicio",
      children: {
        calificadorDeServicio: {
          label: "Calificador de servicio",
          url: "/calificador-de-servicio-al-cliente-opinamaster/calificador-de-servicio",
        },
        avisoDeParedParaCalificarServicio: {
          label: "Aviso de pared para calificar servicio",
          url: "/calificador-de-servicio-al-cliente-opinamaster/aviso-de-pared-para-calificar-servicio",
        }
      }
    },
    encuestaVirtual: {
      url: "/encuesta-virtual-opinamaster",
      label: "Encuesta virtual",
    }
  }
};