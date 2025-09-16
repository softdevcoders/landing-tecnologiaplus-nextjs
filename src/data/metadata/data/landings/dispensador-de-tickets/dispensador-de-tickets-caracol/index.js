import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Dispensador de Tickets Caracol: Ordena y Optimiza Filas";
const description = "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!";
const keywords = ["DISPENSADOR DE TICKETS"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('dispensadorDeTickets', 'dispensador-de-tickets-caracol');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});