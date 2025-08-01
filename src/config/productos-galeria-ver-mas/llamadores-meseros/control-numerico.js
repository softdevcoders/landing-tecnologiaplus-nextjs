import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1741623334/Frame_1_34_g50ooz',
  alt: 'Control numérico vista principal',
};

export const controlNumerico = {
  id: "control-numerico",
  title: "Control numérico",
  description: "Para llamar empleados o meseros desde cocina.",
  url: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
  mainImage,
};