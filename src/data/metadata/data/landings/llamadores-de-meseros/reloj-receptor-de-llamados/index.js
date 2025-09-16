import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Reloj Receptor de Llamados: Atención Instantánea a Mesas";
const description = "Recibe alertas y vibra mostrando el número de mesa. Ideal para meseros en restaurantes, bares y zonas VIP. Mejora la atención al cliente. ¡Solicita ya!";
const keywords = ["Reloj receptor de llamados para meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'reloj-receptor-de-llamados');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});