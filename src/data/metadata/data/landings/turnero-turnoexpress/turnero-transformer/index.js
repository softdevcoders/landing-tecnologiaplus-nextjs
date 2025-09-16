import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero Transformer: Personalización Total en la Gestión de Turnos";
const description = "Turnero adaptable a cada producto o servicio. Ideal para autoservicio y oficinas con múltiples filas. Mejora la atención sin alterar procesos. ¡Conócelos!";
const keywords = ["Turnero"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroTransformer.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-transformer');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});