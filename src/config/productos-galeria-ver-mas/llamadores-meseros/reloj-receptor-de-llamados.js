import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1757338403/reloj_receptor_meseros_timbre_de_restaurante',
  alt: 'Reloj receptor compatible con timbre de restaurante para recibir llamados de meseros en tiempo real',
  title: 'Reloj receptor para timbre de restaurante.'
};

export const relojReceptorDeLlamados = {
  id: "reloj-receptor-de-llamados",
  title: "Reloj receptor de llamados",
  description: "Vibra y muestra el número de la mesa.", 
  url: routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url,
  mainImage,
};