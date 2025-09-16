import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero Fila Única: Agiliza la Atención en Supermercados";
const description = "Organiza a todos en una sola fila y muestra la caja libre. Reduce confusión y mejora el servicio en supermercados y lugares concurridos. ¡Solicita demo!";
const keywords = ["TURNERO FILA ÚNICA"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroFilaUnicaSupermercados.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-fila-unica-supermercados');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});