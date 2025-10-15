import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Rollos de Papel Térmico: Calidad y corte preciso";
const description = "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!";
const keywords = ["Rollos de Papel térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDePapelTermico.children.rollosTermicos.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('rollosDePapelTermico', 'rollos-termicos');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});