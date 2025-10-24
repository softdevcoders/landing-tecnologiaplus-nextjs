import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Rollos térmicos",
  descripcion: "Para tickets, facturas y más.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus", 
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
    alt: "Imagen de Rollos de Papel Térmicos - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  boton: {
    href: routes.landings.rollosDePapelTermico.url,
    texto: "Ver más",
  },
};

const portada = { 
  titulo: "Rollos de papel térmico",
  descripcion: "Perfectos para tickets, facturas y más. ¡Somos fabricantes!",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/v1761239493/rollos_termicos_impresoras_tecnologia_plus",
    alt: "Rollos térmicos para impresoras - Tecnología Plus",
    title: "Rollos térmicos ideales para impresoras y datáfonos",
    width: 600,
    height: 400,
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/v1761239493/rollos_termicos_impresoras_tecnologia_plus",
    alt: "Rollos térmicos para impresoras - Tecnología Plus",
    title: "Rollos térmicos ideales para impresoras y datáfonos",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  boton: {
    texto: "Ver más",
    href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
  },
};

export default { inicio, portada };