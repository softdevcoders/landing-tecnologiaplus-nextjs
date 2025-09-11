import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Turnero digital",
  descripcion: "Orden y agilidad en cada turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
    alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus", 
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/turnero-turnoexpress/landings/uv4swpdtp8jpg35dclbh",
    alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744463735/12-8_qjsewx",
    alt: "Logo TurnoExpress",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.rollosDeFichosParaTurnos.url,
    texto: "Ver más",
  },
};

const portada = { 
  titulo: "Turnero digital",
  descripcion: "Adiós a las filas. Agilidad y orden en cada turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/turnero-turnoexpress/landings/edivf9hsjswfezxetlsw",
    alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus", 
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/turnero-turnoexpress/landings/uv4swpdtp8jpg35dclbh",
    alt: "Imagen de Turnero Digital TurnoExpress - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744463735/12-8_qjsewx",
    alt: "Logo TurnoExpress",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };