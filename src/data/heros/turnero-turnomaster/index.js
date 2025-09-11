import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Sistema de turnos de espera",
  descripcion: "Digitaliza tu sala de espera fácilmente.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71", 
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/13_adjkab",
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744830279/3-8_jxkhuf",
    alt: "Logo TurnoMaster",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.sistemasDeTurnosTurnomaster.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Sistema de turnos de espera",
  descripcion: "TurnoMaster lleva tu sala de espera al siguiente nivel.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71", 
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/13_adjkab",
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744830279/3-8_jxkhuf",
    alt: "Logo TurnoMaster",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };