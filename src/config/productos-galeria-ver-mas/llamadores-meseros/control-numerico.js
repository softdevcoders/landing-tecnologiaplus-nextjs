import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1757338403/control_numerico_llamador_de_meseros',
  alt: 'Control numérico para gestión de llamados compatible con llamador de meseros.',
  title: 'Control numérico para llamador de meseros.'
};

export const controlNumerico = {
  id: "control-numerico",
  title: "Control numérico",
  description: "Para llamar empleados o meseros desde cocina.",
  url: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
  mainImage,
};