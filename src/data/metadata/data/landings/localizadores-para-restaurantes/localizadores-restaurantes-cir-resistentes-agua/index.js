import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Localizadores para restaurantes: Resistentes al agua";
const description = "Localizadores para restaurantes CIR resistentes al agua, ideales para terrazas, piscinas y zonas húmedas. Somos fabricantes en Tecnología Plus.";
const keywords = ["Localizadores para restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.localizadoresParaRestaurantes.children.localizadoresCirResistenteAlAgua.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('localizadoresParaRestaurantes', 'localizadores-restaurantes-cir-resistentes-agua');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});