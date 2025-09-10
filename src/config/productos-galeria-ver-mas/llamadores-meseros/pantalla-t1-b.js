import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1757338403/pantalla_t1b_boton_para_llamar_al_mesero',
  alt: 'Pantalla T1-B receptora de llamados compatible con botón para llamar al mesero en restaurantes y bares.',
  title: 'Pantalla T1-B para boton para llamar al mesero.'
};

export const pantallaT1B = {
  id: "pantalla-t1-b",
  title: "Pantalla T1-B",
  description: "Para recibir llamados.",
  url: routes.landings.llamadoresDeMeseros.children.t1_b.url,
  mainImage,
};