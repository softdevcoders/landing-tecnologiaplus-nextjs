import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Localizador clientes CIR Resistentes al Agua: ideal en autoservicio";
const description = "Localizador clientes CIR Resistentes al Agua: somos fabricantes de equipos para restaurantes autoservicio que agilizan la atención y elevan la experiencia del cliente.";
const keywords = ["localizadores para restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.localizadoresParaRestaurantes.children.localizadoresCirResistenteAlAgua.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('localizadoresParaRestaurantes', 'localizadores-cir-resistente-al-agua');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});