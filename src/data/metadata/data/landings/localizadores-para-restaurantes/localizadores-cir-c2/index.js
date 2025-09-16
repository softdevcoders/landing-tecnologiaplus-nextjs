import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Localizadores CIR-C2: Solución para Autoservicio Eficiente";
const description = "Mantén el orden y mejora la entrega de pedidos con localizadores CIR-C2. Control separado y máxima eficiencia en restaurantes de autoservicio. ¡Solicita demo!";
const keywords = ["localizadores para restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.localizadoresParaRestaurantes.children.rec_c2.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('localizadoresParaRestaurantes', 'localizadores-cir-c2');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});