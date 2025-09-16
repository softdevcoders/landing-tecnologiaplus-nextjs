import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto";
const description = "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!";
const keywords = ["AVISO DE PARED"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('calificadorDeServicioAlClienteOpinamaster', 'aviso-de-pared-para-calificar-servicio');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});