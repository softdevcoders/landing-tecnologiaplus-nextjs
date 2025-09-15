import { routes } from "@/config/routes";

const inicio = {     
  titulo: "Llamado de enfermería",
  descripcion: "Conecta al paciente con el personal de salud.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj", 
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus", 
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757697796/logo_cuidamaster",
    alt: "Logo CuidaMaster",
    width: 225,
    height: 100,
  },
  boton: {
    href: routes.landings.llamadoDeEnfermeria.url,
    texto: "Ver más",
  },
};

const portada = {
  titulo: "Llamado de Enfermería",
  descripcion: "Más cerca de tus pacientes. Facilita el contacto entre el paciente y personal de salud.",
  imagenes: [{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj", 
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    width: 600,
    height: 400,
    tipo: "mobile",
  },{
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
    alt: "Imagen de Llamado de Enfermería Cuidamaster - Tecnología Plus",
    width: 1200,
    height: 800,
    tipo: "desktop",
  }],
  imagenDeMarca: {
    src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,q_80/v1757697796/logo_cuidamaster",
    alt: "Logo CuidaMaster",
    width: 225,
    height: 100,
  },
};

export default { inicio, portada };