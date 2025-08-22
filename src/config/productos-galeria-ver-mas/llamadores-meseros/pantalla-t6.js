import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1755800992/pantalla-t6_hym198',
  alt: 'Pantalla T6 vista principal',
};

export const pantallaT6 = {
  id: "pantalla-t6",
  title: "Pantalla T6",
  description: "Para recibir llamados.",
  url: routes.landings.llamadoresDeMeseros.children.t6.url,
  mainImage,
};