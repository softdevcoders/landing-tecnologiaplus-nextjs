import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Hablador de Mesa: Publicidad y Llamado de Personal en Restaurantes";
const description = "Muestra tu marca y coloca el botón de llamado cerca del cliente. Ideal para restaurantes, hoteles y clubes. ¡Optimiza la comunicación en tu mesa!";
const keywords = ["Hablador de mesa"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'hablador-de-mesa');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});