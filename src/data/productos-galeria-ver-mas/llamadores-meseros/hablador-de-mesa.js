import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1757338403/hablador_para_mesa_llamador_de_meseros_e2b',
  alt: 'Hablador de mesa compatible con llamador de meseros modelo E2-B, vista principal del accesorio para fijación.',
  title: 'Hablador de mesa para llamador de meseros E2-B.'
};

export const habladorDeMesa = {
  id: "hablador-de-mesa",
  title: "Hablador de mesa", 
  description: "Resalta tu marca con un espacio adecuado para el botón.",
  url: routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url,
  mainImage,
};