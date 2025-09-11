import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Encuesta virtual",
  descripcion: "Detecta puntos débiles y mejora tu negocio.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i", 
    alt: "Imagen de Encuesta Virtual OpinaMaster - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/encuesta-virtual-opinamaster/landings/ubbkhbpquh0tquaz8xwl",
    alt: "Imagen de Encuesta Virtual OpinaMaster - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744467470/6-8_xncpdx",
    alt: "Logo OpinaMaster",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.encuestaVirtual.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Encuesta virtual",
  descripcion: "Detecta los puntos fuertes y como mejorar tu negocio.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i", 
    alt: "Imagen de Encuesta Virtual OpinaMaster - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/encuesta-virtual-opinamaster/landings/ubbkhbpquh0tquaz8xwl",
    alt: "Imagen de Encuesta Virtual OpinaMaster - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744467470/6-8_xncpdx",
    alt: "Logo OpinaMaster",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };