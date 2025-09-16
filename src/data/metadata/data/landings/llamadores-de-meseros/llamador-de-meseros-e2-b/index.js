import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamador de Meseros E2-B: Atención Ágil y Comodidad";
const description = " Diseño ergonómico y resistente para restaurantes y clubes. Llama al mesero y borra el llamado al ser atendido. Solución práctica para tu negocio.";
const keywords = ["Llamado de meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.e2_b.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'llamador-de-meseros-e2-b');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});