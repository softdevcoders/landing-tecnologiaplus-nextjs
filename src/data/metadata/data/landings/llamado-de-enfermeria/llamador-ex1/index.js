import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamador de Enfermería EX1: Cable Extensor y Accesibilidad";
const description = "Facilita el llamado de ayuda con el EX1, diseñado para máxima accesibilidad en camas hospitalarias y hogares geriátricos. ¡Solicita información!";
const keywords = ["Sistema de timbres para habitaciones"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.llamadorEx1.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'llamador-ex1');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});