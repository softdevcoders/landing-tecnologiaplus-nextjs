import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Calificador de servicio",
  descripcion: "Escucha a tus clientes.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
    alt: "Imagen de Calificador de servicio - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/epg4efgegtcqvxyfdsbe",
    alt: "Imagen de Calificador de servicio - Tecnología Plus",
    width: 1000,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757954381/logo_opinamaster",
    alt: "Logo Opinamaster",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.calificadorDeServicioAlClienteOpinamaster.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Calificador de servicio al cliente",
  descripcion: "Para crecer con la voz de tus clientes.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
    alt: "Imagen de Calificador de servicio - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
    alt: "Imagen de Calificador de servicio - Tecnología Plus",
    width: 1000,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757954381/logo_opinamaster",
    alt: "Logo Opinamaster",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };
