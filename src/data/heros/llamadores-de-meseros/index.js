import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Llamador de meseros",
  descripcion: "Un solo toque evita largas esperas.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/3_j5shgh", 
    alt: "Imagen de Llamadores de meseros - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/3_j5shgh",
    alt: "Imagen de Llamadores de meseros - Tecnología Plus",
    tipo: "desktop",
  }],
  boton: {
    href: routes.landings.llamadoresDeMeseros.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Llamador de meseros",
  descripcion: "Un solo toque evita largas esperas. Silencioso y de largo alcance.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/3_j5shgh", 
    alt: "Imagen de Llamadores de meseros - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/3_j5shgh",
    alt: "Imagen de Llamadores de meseros - Tecnología Plus",
    tipo: "desktop",
  }],
};

export default { inicio, portada };