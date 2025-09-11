import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Llamado de enfermería",
  descripcion: "Conecta al paciente con el personal de salud.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj", 
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1744467470/6-8_xncpdx",
    alt: "Logo OpinaMaster",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.llamadoDeEnfermeria.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Llamado de enfermería",
  descripcion: "Más cerca de tus pacientes. Facilita el contacto entre el paciente y personal de salud.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj", 
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
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