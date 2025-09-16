import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero T3 con logo | Fabricantes de turneros digitales";
const description = "Turnero T3 con logo. Somos fabricantes de turneros digitales. Resalta tu marca, organiza tus filas y ofrece una experiencia profesional.";
const keywords = ["Turnero T3 con Logo"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT3ConLogo.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-t3-con-logo');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});