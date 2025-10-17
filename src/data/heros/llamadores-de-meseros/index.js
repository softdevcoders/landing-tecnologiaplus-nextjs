import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Llamador de meseros",
  descripcion: "Un solo toque evita largas esperas.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/3_j5shgh", 
    alt: "Imagen de Llamadores de meseros - Tecnología Plus", 
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/3_j5shgh",
    alt: "Imagen de Llamadores de meseros - Tecnología Plus",
    width: 1200,
    height: 800,
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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1760712828/llamadores_de_meseros_tecnologia__plus", 
    alt: "Imagen de Llamadores de meseros moderno",
    title: "Llamadores de meseros Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/v1760712828/llamadores_de_meseros_tecnologia__plus",
    alt: "Imagen de Llamadores de meseros moderno",
    title: "Llamadores de meseros Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
};

export default { inicio, portada };