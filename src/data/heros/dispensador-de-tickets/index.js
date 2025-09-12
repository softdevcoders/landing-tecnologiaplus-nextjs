import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Dispensador de tickets",
  descripcion: "Para llamar turnos en orden.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
    alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
    alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757686959/turnoexpress_logo",
    alt: "Logo TurnoExpress",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.dispensadorDeTickets.url,
    texto: "Ver más",
  },
};

const portada = { 
  titulo: "Dispensador de tickets",
  descripcion: "Adiós a las filas. Orden y comodidad en cada turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
    alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
    alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757686959/turnoexpress_logo",
    alt: "Logo TurnoExpress",
    width: 300,
    height: 65,
  },
  boton: {
    texto: "Ver más",
    href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
  },
};

export default { inicio, portada };