import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero Digiturno - Tecnología Plus";
const description = "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoría ahora!";
const keywords = ["Turnero"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'root');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});