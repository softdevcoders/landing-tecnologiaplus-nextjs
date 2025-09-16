import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Pantalla T6 para Enfermería: Monitorea 6 Llamados Simultáneos";
const description = "Visualiza fácilmente los llamados de habitaciones o áreas. Pantalla alfanumérica compatible con sistemas de timbre para enfermería. ¡Optimiza tu servicio!";
const keywords = ["Pantalla alfanumérica"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.pantallaT6.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'pantalla-t6');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});