import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Rollos térmicos",
  descripcion: "Para tickets, facturas y más.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus", 
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus",
    tipo: "desktop",
  }],
  boton: {
    href: routes.landings.rollosDePapelTermico.url,
    texto: "Ver más",
  },
};

const portada = { 
  titulo: "Rollos de papel térmicos",
  descripcion: "Perfectos para tickets, facturas y más. ¡Somos fabricantes!",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus",
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus",
    tipo: "desktop",
  }],
  boton: {
    texto: "Ver más",
    href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
  },
};

export default { inicio, portada };