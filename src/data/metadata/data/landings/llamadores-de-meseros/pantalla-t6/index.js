import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Pantalla T6 para Meseros: Monitorea Mesas en Espera";
const description = "Visualiza hasta 6 mesas esperando atención. Compatible con llamadores para restaurantes, bares y clubes. Optimiza la gestión de tu equipo.";
const keywords = ["Pantalla para mostrar a los meseros los numeros de mesas"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.t6.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'pantalla-t6');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});