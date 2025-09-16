import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Calificador de Servicio al Cliente: Opinión en Tiempo Real";
const description = "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!";
const keywords = ["Calificador de servicio"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('calificadorDeServicioAlClienteOpinamaster', 'calificador-de-servicio');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});