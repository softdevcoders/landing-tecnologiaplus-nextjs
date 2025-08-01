import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1741555504/Frame_1_15_bwa18u',
  alt: 'Reloj receptor de llamados vista principal',
};

export const relojReceptorDeLlamados = {
  id: "reloj-receptor-de-llamados",
  title: "Reloj receptor de llamados",
  description: "Vibra y muestra el número de la mesa.", 
  url: routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url,
  mainImage,
};