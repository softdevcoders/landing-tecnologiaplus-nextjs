import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Control Numérico: Llama Empleados y Meseros sin Demoras";
const description = "Facilita la coordinación de tu equipo llamando uno o varios empleados a la vez. Ideal para restaurantes, hoteles y fábricas. ¡Optimiza tu operación!";
const keywords = ["CONTROL NÚMERICO"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.controlNumerico.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'control-numerico');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});