import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Rollos de Turnos: Tickets Numerados para Gestión de Filas";
const description = "Elimina filas y organiza turnos con nuestros rollos numerados. Ideales para dispensadores tipo caracol en salud y servicios. ¡Solicita tu cotización!";
const keywords = ["Rollos de Tickets Numerados"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('rollosDeFichosParaTurnos', 'rollos-de-turnos');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
