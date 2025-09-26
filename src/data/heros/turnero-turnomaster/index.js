import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Sistema de turnos de espera",
  descripcion: "Digitaliza tu sala de espera fácilmente.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/sistema-de-turnos-turnomaster/landings/trdh4recmp6uwwa8ux71", 
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/13_adjkab",
    alt: "Imagen de Sistema de turnos de espera - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757954381/logo_turnomaster",
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
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/v1758902042/sistema_de_turnos_digital_movil", 
    alt: "Sistema de turnos digital para gestionar filas desde el celular",
    title: "Optimiza la atención al cliente con un sistema de turnos móvil",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/v1758902041/sistema_de_turnos_para_atencion_publico",
    alt: "Sistema de turnos en computador para organizar clientes en salas de espera",
    title: "Mejora la experiencia en salas de espera con un sistema de turnos digital",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757954381/logo_turnomaster",
    alt: "Logo TurnoMaster",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };