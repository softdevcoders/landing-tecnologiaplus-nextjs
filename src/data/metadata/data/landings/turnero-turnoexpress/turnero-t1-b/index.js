import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero T1-B: Solución Compacta en Salas de Espera";
const description = "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!";
const keywords = ["Turnero"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT1B.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-t1-b');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});