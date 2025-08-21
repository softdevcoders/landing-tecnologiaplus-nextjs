import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1755800979/pantalla-t1b_ffw7dm',
  alt: 'Pantalla T1-B vista principal',
};

export const pantallaT1B = {
  id: "pantalla-t1-b",
  title: "Pantalla T1-B",
  description: "Para recibir llamados.",
  url: routes.landings.llamadoresDeMeseros.children.t1_b.url,
  mainImage,
};