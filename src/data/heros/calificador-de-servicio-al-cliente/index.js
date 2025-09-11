import { routes } from "@/config/routes";

const inicio = {    
  titulo: "Localizadores para restaurantes",
  descripcion: "Tiempo de espera sin temor a perder el turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
    type: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
    type: "desktop",
  }],
  boton: {
    href: routes.landings.localizadoresParaRestaurantes.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Localizadores para restaurantes",
  descripcion: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
    tipo: "mobile",
  }, {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1000,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
    tipo: "desktop",
  }]
};

export default { inicio, portada };
