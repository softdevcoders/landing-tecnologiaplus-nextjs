import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1755800973/control-numerico_mhg7af',
  alt: 'Control numérico vista principal',
};

export const controlNumerico = {
  id: "control-numerico",
  title: "Control numérico",
  description: "Para llamar empleados o meseros desde cocina.",
  url: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
  mainImage,
};