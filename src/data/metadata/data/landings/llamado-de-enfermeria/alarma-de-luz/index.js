import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Alarma de Luz para Enfermería: Atención Visual y Sonora";
const description = "Facilita la comunicación en hospitales con nuestra alarma de luz y sonido. Ideal para áreas amplias y entornos ruidosos. ¡Solicita tu cotización!";
const keywords = ["Alarma visual y sonora"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.alarmaDeLuz.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'alarma-de-luz');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});