import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Pantalla T1-B para Meseros: Visualiza Llamados en Tiempo Real";
const description = "Muestra hasta 15 llamados en pantalla. Solución ideal para restaurantes y bares con menos de 15 mesas. Mejora la coordinación y el servicio.";
const keywords = ["Pantalla para visualizar llamados del timbre de mesa"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.t1_b.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'pantalla-t1-b');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});