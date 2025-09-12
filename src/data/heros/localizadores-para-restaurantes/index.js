import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Localizadores para restaurantes",
  descripcion: "Tiempo de espera sin temor a perder el turno.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/1_zjvtlb", 
    alt: "Imagen de Localizadores para restaurantes - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para restaurantes - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/1_zjvtlb", 
    alt: "Imagen de Localizadores para restaurantes - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/1_zjvtlb",
    alt: "Imagen de Localizadores para restaurantes - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
};

export default { inicio, portada };