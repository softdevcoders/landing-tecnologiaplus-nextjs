import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Rollos de turnos",
  descripcion: "Para dispensador tipo caracol.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
    alt: "Imagen de Rollos de turnos TurnoExpress - Tecnología Plus", 
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
    alt: "Imagen de Rollos de turnos TurnoExpress - Tecnología Plus",
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
  titulo: "Rollos de turnos",
  descripcion: "Numeración clara para agilizar la atención de turnos.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
    alt: "Imagen de Rollos de turnos TurnoExpress - Tecnología Plus",
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
    alt: "Imagen de Rollos de turnos TurnoExpress - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744463735/12-8_qjsewx",
    alt: "Logo TurnoExpress",
    width: 225,
    height: 100,
  },
  boton: {
    texto: "Ver más",
    href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
  },
};

export default { inicio, portada };