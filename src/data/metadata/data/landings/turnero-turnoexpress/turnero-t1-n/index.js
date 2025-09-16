import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero T1-N: Organización y Marca en la Gestión de Turnos";
const description = "Pantalla personalizable que proyecta tu imagen mientras gestiona turnos. Uso frecuente en salud, gastronomía y oficinas. ¡Solicita asesoría personalizada!";
const keywords = ["Turnero digital"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT1N.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-t1-n');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});