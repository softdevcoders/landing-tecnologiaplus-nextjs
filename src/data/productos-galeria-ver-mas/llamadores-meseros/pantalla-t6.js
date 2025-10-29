import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1757338403/pantalla_t6_llamador_de_meseros',
  alt: 'Pantalla T6 receptora de llamados para restaurantes compatible con llamador de meseros.',
  title: 'Pantalla T6 para llamador de meseros.'
};

export const pantallaT6 = {
  id: "pantalla-t6",
  title: "Pantalla T6",
  description: "Para recibir llamados.",
  url: routes.landings.llamadoresDeMeseros.children.t6.url,
  mainImage,
};